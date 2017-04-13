(ns ebtanas.core
  (:require [om.next :as om]
            [untangled.client.core :as uc]
            [untangled.client.data-fetch :as f]
            ebtanas.state.mutations
            [untangled.client.logging :as log]
            [ebtanas.state.routes :as r]
            [pushy.core :as p]
            [bidi.bidi :as b]))

(defonce app
         (atom (uc/new-untangled-client
                 ;:mutation-merge merge-mutations
                 :started-callback (fn [{:keys [reconciler]}]
                                     (let [rc (om/app-root reconciler)]
                                       (reset!
                                         r/history
                                         (p/pushy (partial r/set-route! rc)
                                                  (partial b/match-route r/app-routes))))
                                     (p/start! @r/history)))))