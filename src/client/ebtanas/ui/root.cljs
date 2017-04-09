(ns ebtanas.ui.root
  (:require
    [untangled.client.mutations :as mut]
    [om.dom :as dom]
    [ebtanas.ui.login :as l]
    [ebtanas.ui.main :as main]
    [ebtanas.ui.new-user :as nu]
    [om.next :as om :refer-macros [defui]]
    [untangled.client.core :as u]
    [untangled.client.mutations :as m]
    [untangled.client.core :as uc]))

(defui ^:once Root
  static uc/InitialAppState
  (initial-state [this params]
    {:a 1})
  static om/IQuery
  (query [this]
    [:a])
  Object
  (render [this]
    (let [{:keys [a]} (om/props this)]
      (dom/h1 nil a))))
