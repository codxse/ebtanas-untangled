(ns ebtanas.state.mutations
  (:require [om.next :as om]
            [untangled.client.mutations :refer [mutate post-mutate]]
            [untangled.client.impl.data-fetch :as df]))

(defn- name->component [name]
  (case name
    "Home" :main
    "Masuk" :login
    :main))

(defmethod mutate 'app/set-active-page!
  [{:keys [state]} _ {:keys [name active]}]
  {:action (fn []
             (let [active-page (name->component name)]
               (swap! state assoc :active-body [active-page 1])))})
