(ns ebtanas.state.routes
  (:require [bidi.bidi :as b]
            #? (:cljs [pushy.core :as p])))

#?(:cljs (def history (atom {})))

#?(:cljs (defonce page-data
           {:home {:handler :main
                   :title "Halaman Utama"}
            :login {:handler :login
                    :title "Masuk Halaman Anggota"}}))

(defonce app-routes

  ;"The bidi routing map for the application.
  ;The leaf keywords are the route names.
  ;Parameters in the route are available for use
  ;in the routing algorithm as :param/param-name."

  ["/" {"" (get-in page-data [:home :handler])
        "index-dev.html" (get-in page-data [:home :handler])
        "index.html" (get-in page-data [:home :handler])
        "login" (get-in page-data [:login :handler])}])

(defn match-url [url]
  "Get a handler map from given url"
  (b/match-route app-routes url))

#?(:cljs (defn- history! [match]
           (swap! history assoc :active-body [(:handler match) 1])))

#?(:cljs (defn url-for [handler]
           "Get a url string from given handler"
           (b/path-for app-routes handler)))

#?(:cljs (p/start! (p/pushy history! match-url)))