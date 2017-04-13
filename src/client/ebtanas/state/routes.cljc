(ns ebtanas.state.routes
  (:require [bidi.bidi :as b]
            [om.next :as om]))

#?(:cljs (def history (atom nil)))

(defonce page-data
  {:home {:handler :main
          :title "Halaman Utama"}
   :login {:handler :login
           :title "Masuk Halaman Anggota"}
   :signup {:handler :signup
            :title "Daftar Anggota"}
   :psets {:handler :psets
           :title "Bank Soal"}
   :privacy {:handler :privacy
             :title "Kebijakan Privasi"}
   :faq {:handler :faq
         :title "Tanya Jawab"}
   :mission {:handler :mission
             :title "Misi Kami"}})

; "The bidi routing map for the application.
; The leaf keywords are the route names.
; Parameters in the route are available for use
; in the routing algorithm as :param/param-name."

(defonce app-routes
  ["/" {"" (get-in page-data [:home :handler])
        "index-dev.html" (get-in page-data [:home :handler])
        "index.html" (get-in page-data [:home :handler])
        "login" (get-in page-data [:login :handler])
        "signup" (get-in page-data [:signup :handler])
        "problem-sets" (get-in page-data [:psets :handler])
        "privacy-policy" (get-in page-data [:privacy :handler])
        "faq" (get-in page-data [:faq :handler])
        "mission" (get-in page-data [:mission :handler])
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