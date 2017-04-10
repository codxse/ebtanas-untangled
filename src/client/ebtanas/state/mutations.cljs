(ns ebtanas.state.mutations
  (:require [om.next :as om]
            [untangled.client.mutations :refer [mutate post-mutate]]
            [untangled.client.impl.data-fetch :as df]))

(defn- name->component [name]
  (case name
    "Home" :main
    "Masuk" :login
    :main))

(defn- active-menu-ident [m]
  (let [maps (vals m)]
    [:navItem/by-name (-> (filter #(= true (:active %)) maps)
                          first
                          :name)]))

(defmethod mutate 'app/set-active-page!
  [{:keys [state ref]} _ {:keys [name]}]
  {:action (fn []
             (let [active-page (name->component name)
                   clicked-menu [:navItem/by-name name]
                   prev-active (active-menu-ident (:navItem/by-name @state))]
               (do
                 (swap! state update-in prev-active conj {:active false})
                 (swap! state update-in clicked-menu conj {:active true})
                 (swap! state assoc :active-body [active-page 1]))))})
