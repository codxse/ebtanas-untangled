(ns ebtanas.state.mutations
  (:require [om.next :as om]
            [untangled.client.mutations :refer [mutate post-mutate]]
            [untangled.client.impl.data-fetch :as df]
            [ebtanas.state.routes :as r]))

(def routes ["/index-dev.html" {"" :main
                                "login" :login}])

(defn- active-menu-ident [m]
  (let [maps (vals m)]
    [:navItem/by-name (-> (filter #(= true (:active %)) maps)
                          first
                          :name)]))

(defmethod mutate 'app/set-active-page!
  [{:keys [state]} _ {:keys [name body]}]
  {:action (fn []
             (let [clicked-menu [:navItem/by-name name]
                   prev-active (active-menu-ident (:navItem/by-name @state))]
               (do
                 (swap! state update-in prev-active conj {:active false})
                 (swap! state update-in clicked-menu conj {:active true})
                 (r/set-body-ident! state body))))})
