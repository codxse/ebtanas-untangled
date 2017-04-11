(ns ebtanas.core
  (:require [om.next :as om]
            [untangled.client.core :as uc]
            [untangled.client.data-fetch :as f]
            ebtanas.state.mutations
            [untangled.client.logging :as log]
            [ebtanas.state.routes :as r]))

(defonce app
         (atom (uc/new-untangled-client)))
                 ;:mutation-merge merge-mutations
                 ;:started-callback (fn [{:keys [reconciler]}]
                 ;                    (r/start-pushy!))))

