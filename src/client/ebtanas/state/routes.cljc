(ns ebtanas.state.routes
  (:require [bidi.bidi :as b]
    #?(:cljs [pushy.core :as p])
      [om.next :as om]))

#?(:cljs (def history (atom nil)))

(defonce page-data
  {:home {:handler :main
          :title "Halaman Utama"}
   :login {:handler :login
           :title "Masuk Halaman Anggota"}})

; "The bidi routing map for the application.
; The leaf keywords are the route names.
; Parameters in the route are available for use
; in the routing algorithm as :param/param-name."

(defonce app-routes
  ["/" {"" (get-in page-data [:home :handler])
        "index-dev.html" (get-in page-data [:home :handler])
        "index.html" (get-in page-data [:home :handler])
        "login" (get-in page-data [:login :handler])
        ["hello/" [#"\d+" :id]] :sampel1}])

(defn match-url [url]
  "Get a handler map from given url"
  (b/match-route app-routes url))

#?(:cljs (defn set-route!
           [component-or-reconciler bidi-match]
           (om/transact!
             component-or-reconciler
             `[(app/update-route! ~bidi-match)])))

#?(:cljs (defn url-for [handler]
           "Get a url string from given handler"
           (b/path-for app-routes handler)))