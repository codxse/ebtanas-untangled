(ns ebtanas.ui.login
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [untangled.client.core :as uc]))

(defui ^:once LoginForm
  static uc/InitialAppState
  (initial-state [this params]
    {:component :login
     :id 1
     :content {:login true}})
  static om/IQuery
  (query [this]
    [:component
     :id
     :content])
  Object
  (render [this]
    (let [{:keys [content]} (om/props this)]
      (dom/h1 nil (prn-str content)))))

(def login-ui (om/factory LoginForm))