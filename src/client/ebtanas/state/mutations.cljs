(ns ebtanas.state.mutations
  (:require [om.next :as om]
            [untangled.client.mutations :refer [mutate post-mutate]]
            [untangled.client.impl.data-fetch :as df]
            [ebtanas.state.routes :as r]))

(defn- active-menu-ident [m]
  "helper fn for 'app/update-route
   m: is a values of :navItem in state atom"
  (let [maps (vals m)]
    [:navItem/by-handler (-> (filter #(= true (:active %)) maps)
                             first
                             :handler)]))

(defmethod mutate 'app/update-route!
  [{:keys [state]} _ {:keys [handler]}]
  {:action (fn []
             (let [prev-active (active-menu-ident (:navItem/by-handler @state))
                   active-body [handler 1]
                   active-menu [:navItem/by-handler handler]]
               (do
                 (swap! state update-in prev-active conj {:active false})
                 (swap! state update-in active-menu conj {:active true})
                 (swap! state assoc :active-body [handler 1]))))})
