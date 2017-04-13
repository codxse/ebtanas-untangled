(ns ebtanas.ui.root
  (:require
    [om.dom :as dom]
    [om.next :as om :refer-macros [defui]]
    [untangled.client.mutations :as m]
    [untangled.client.core :as uc]
    [ebtanas.ui.components :as c]
    [ebtanas.ui.main :as main]
    [ebtanas.ui.login :as l]
    [ebtanas.ui.signup :as u]))

(defui ^:once BodyRouter
  static uc/InitialAppState
  (initial-state [this params]
    (uc/initial-state main/MainSearch {}))
  static om/Ident
  (ident [this {:keys [handler id]}]
    [handler id])
  static om/IQuery
  (query [this]
    {:main (om/get-query main/MainSearch)
     :login (om/get-query l/Login)
     :signup (om/get-query u/SignUp)})
  Object
  (render [this]
    (let [{:keys [handler] :as props} (om/props this)]
      (dom/section #js {:className "body section columns"}
        (dom/div #js {:className "container"}
          (case handler
            :main (main/main-search props)
            :login (l/login props)
            :signup (u/signup props)
            (dom/h1 nil "YOU ARE LOST!")))))))

(def body-router (om/factory BodyRouter))

(defui ^:once Root
  static uc/InitialAppState
  (initial-state [this params]
    {:ui/react-key "start"
     :header (uc/initial-state c/Header {})
     :footer (uc/initial-state c/Footer {})
     :active-body (uc/initial-state BodyRouter {})})
  static om/IQuery
  (query [this]
    [:ui/react-key
     {:active-body (om/get-query BodyRouter)}
     {:header (om/get-query c/Header)}
     {:footer (om/get-query c/Footer)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key active-body header footer]} (om/props this)]
      (dom/div #js {:id "reactive" :key react-key}
        (c/header header)
        (body-router active-body)
        (c/footer footer)))))
