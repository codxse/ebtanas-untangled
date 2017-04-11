(ns ebtanas.state.mutations
  (:require [om.next :as om]
            [untangled.client.mutations :refer [mutate post-mutate]]
            [untangled.client.impl.data-fetch :as df]
            [ebtanas.state.routes :as r]))

(defn- active-menu-ident [m]
  (let [maps (vals m)]
    [:navItem/by-name (-> (filter #(= true (:active %)) maps)
                          first
                          :name)]))

(defmethod mutate 'app/set-active-page!
  [{:keys [state res-ident] :or {res-ident [:main 1]}} _ {:keys [name handler]}]
  {:action (fn []
             (let [clicked-menu [:navItem/by-name name]
                   prev-active (active-menu-ident (:navItem/by-name @state))
                   active-body (atom res-ident)]
               (do
                 (swap! state update-in prev-active conj {:active false})
                 (swap! state update-in clicked-menu conj {:active true})
                 (when (not= [handler 1] res-ident)
                   (swap! active-body (fn [_] [handler 1])))
                 (swap! state assoc :active-body @active-body))))})
