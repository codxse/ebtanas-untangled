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
    [ring.middleware.params :refer [wrap-params]]
    [ring.mock.request :as req]
    [ring.util.response :as response]
    [ring.util.request :as rreq]

    [ebtanas.state.routes :refer [app-routes]]
    [clojure.java.io :as io]))

    ;[ring.middleware.webjars :refer [wrap-webjars]]))

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
                                          (partial wrap-html5-routes-as-index)
                                          (partial wrap-cookies)
                                          (partial wrap-params))))
    this)
  (stop [this] this))

(defrecord RingMiddleware [handler]
  component/Lifecycle
  (start [this]
    (let [vanilla-pipeline (h/get-pre-hook handler)]
      (h/set-pre-hook! handler (comp vanilla-pipeline
                                     (partial wrap-cookies)
                                     (partial wrap-params)))))
  (stop [this] this))

(defn default-handler
  [{:keys [request] :as env}
   {:keys [route-param request-method] :as params}]
  (timbre/info :URI (:uri request) :PARAMS params)
  (-> (read-file! (str "public/" index-markup))
      response/response
      (response/content-type "text/html")))

(defn authentication [req params]
  (timbre/info :REQ req :PAR params)
  (-> (str req params)
      response/response
      (response/content-type "text/plain")))

(defn make-system [config-path]
  (core/make-untangled-server
    :config-path config-path
    :parser (om/parser {:read r/api-read :mutate logging-mutate})
    :parser-injections #{:config}
    :extra-routes {:routes app-routes
                   :handlers {:sampel1 (fn [env {:keys [route-params] :as params}]
                                         (timbre/info "Got a request on sample1 route with " :ENV env :ROUTE-PARAMS route-params)
                                         (-> (str "Hello: " (:id route-params)
                                                  " PARAMS: " params)
                                             response/response
                                             (response/content-type "text/plain")))
                              :login default-handler
                              :main default-handler
                              :signup default-handler
                              :auth-backend authentication}}
    :components {:pipeline (component/using
                             (map->RingMiddleware {})
                             [:handler])}))
