(ns ebtanas.ui.root
  (:require
    [om.dom :as dom]
    [om.next :as om :refer-macros [defui]]
    [untangled.client.mutations :as m]
    [untangled.client.core :as uc]
    [ebtanas.ui.components :as c]
    [ebtanas.ui.main :as main]
    [ebtanas.ui.login :as l]))

(defui ^:once BodySwitcher
  static uc/InitialAppState
  (initial-state [this params]
    (uc/initial-state main/SearchForm {}))
  static om/Ident
  (ident [this {:keys [component id]}]
    [component id])
  static om/IQuery
  (query [this]
    {:main (om/get-query main/SearchForm)
     :login (om/get-query l/LoginForm)})
  Object
  (render [this]
    (let [{:keys [component] :as props} (om/props this)]
      (dom/section #js {:className "body section columns"}
        (dom/div #js {:className "container"}
          (case component
            :main (main/search-ui props)
            :login (l/login-ui props)
            (dom/h1 nil "YOU ARE LOST!")))))))

(def body-switcher (om/factory BodySwitcher))

(defui ^:once Root
  static uc/InitialAppState
  (initial-state [this params]
    {:ui/react-key "start"
     :header (uc/initial-state c/Header {})
     :footer (uc/initial-state c/Footer {})
     :active-body (uc/initial-state BodySwitcher {})})
  static om/IQuery
  (query [this]
    [:ui/react-key
     {:active-body (om/get-query BodySwitcher)}
     {:header (om/get-query c/Header)}
     {:footer (om/get-query c/Footer)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key active-body header footer]} (om/props this)]
      (dom/div #js {:id "reactive" :key react-key}
        (c/header-ui header)
        (body-switcher active-body)
        (c/footer-ui footer)))))
