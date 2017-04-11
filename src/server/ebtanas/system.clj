(ns ebtanas.system
  (:require
    [untangled.server.core :as core]
    [com.stuartsierra.component :as component]

    [om.next.server :as om]
    [ebtanas.api.read :as r]
    [ebtanas.api.mutations :as mut]
    [untangled.server.impl.components.handler :as h]

    [taoensso.timbre :as timbre]
    [ring.middleware.cookies :refer [wrap-cookies]]
    [ring.middleware.resource :as resource]
    [ring.mock.request :as req]
    [ring.util.response :as response]
    [ring.util.request :as rreq]

    [ebtanas.state.routes :refer [app-routes]]
    [clojure.java.io :as io]))

(defn logging-mutate [env k params]
  (timbre/info "Entering mutation:" k)
  (mut/apimutate env k params))

(defn- read-file! [resource-path]
  (slurp (io/file (io/resource resource-path))))

(def index-markup
  (let [dev-mode? (boolean (System/getProperty "dev"))]
    (if dev-mode? "/index-dev.html" "/index.html")))

(defn wrap-html5-routes-as-index [handler]
  (fn [req]
    (let [headers (:headers req)
          url (rreq/request-url req)
          dev-mode? (boolean (System/getProperty "dev"))
          ; only serve index in place of things that do not have a suffix, or end in .html
          is-leaf? (boolean (re-matches #".*/([^/.]*|[^/.]*\.html)$" url))]
      (if is-leaf?
        (-> (resource/resource-request (-> (req/request :get "index-dev.html") ;ndex-markup)
                                           (assoc :headers headers)) "public")
            (response/content-type "text/html"))
        (handler req)))))

(defrecord RingHTML5RoutingComponent [handler]
  component/Lifecycle
  (start [this]
    ; This is the basic pattern for composing into the existing fallback handler (which starts out as not-found)
    ; If you're sure this is the only component hooking in, you could simply set it instead.
    ; In this case we're inserting a hander in front of the fallback to send the index page on things that look like
    ; an attempt to load an HTML5 route (handled in the client, which means we just send index.html). This enables
    ; HTML5 routing to happen from bookmarked URIs.
    (let [vanilla-pipeline (h/get-fallback-hook handler)]
      (h/set-fallback-hook! handler (comp vanilla-pipeline
                                          (partial wrap-html5-routes-as-index))))
    this)
  (stop [this] this))

(defn serve-index
  [{:keys [request] :as env}
   {:keys [route-param request-method] :as params}]
  (timbre/info :URI (:uri request) :PARAMS params)
  (-> (read-file! (str "public/" index-markup))
      response/response
      (response/content-type "text/html")))

(defn make-system [config-path]
  (core/make-untangled-server
    :config-path config-path
    :parser (om/parser {:read r/api-read :mutate logging-mutate})
    :parser-injections #{:config}
    ; TEMPLATE: :examples
    ; An example for providing extra route handlers (e.g. REST-based endpoints for non-Om clients)
    :extra-routes {:routes app-routes ;   ["/" {["hello/" [#"\d+" :id]] :sampel1}]
                   ; Use the route target keyword to define the function that handles that route
                   :handlers {:sampel1 (fn [env {:keys [route-params] :as params}]
                                         (timbre/info "Got a request on sample1 route with " :ENV env :ROUTE-PARAMS route-params)
                                         (-> (str "Hello: " (:id route-params)
                                                  " PARAMS: " params)
                                             response/response
                                             (response/content-type "text/plain")))
                              :login serve-index
                              :main serve-index}}
    :components {:pipeline (component/using
                             (map->RingHTML5RoutingComponent {})
                             [:handler])}))
