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
    [untangled.client.core :as uc]
    [goog.string :as gstring]))

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

(defui ^:once SubjectOption
  static uc/InitialAppState
  (initial-state [this {:keys [name]}]
    {:name name})
  static om/Ident
  (ident [this {:keys [name]}]
    [:subject/by-name name])
  static om/IQuery
  (query [this]
    [:name])
  Object
  (render [this]
    (let [{:keys [name]} (om/props this)]
      (dom/option nil name))))

(def subject-option (om/factory SubjectOption {:keyfn :name}))

(defui ^:once SearchForm
  static uc/InitialAppState
  (initial-state [this params]
    {:component :main
     :id 1
     :subjects [(uc/initial-state SubjectOption {:name "Matematika"})
                (uc/initial-state SubjectOption {:name "B. Indonesia"})
                (uc/initial-state SubjectOption {:name "B. Inggris"})
                (uc/initial-state SubjectOption {:name "Fisika"})
                (uc/initial-state SubjectOption {:name "Kimia"})
                (uc/initial-state SubjectOption {:name "Biologi"})
                (uc/initial-state SubjectOption {:name "Sosiologi"})
                (uc/initial-state SubjectOption {:name "Geografi"})
                (uc/initial-state SubjectOption {:name "Ekonomi"})
                (uc/initial-state SubjectOption {:name "Sejarah"})]})
  static om/IQuery
  (query [this]
    [:component
     :id
     {:subjects (om/get-query SubjectOption)}])
  Object
  (render [this]
    (let [{:keys [subjects]} (om/props this)]
      (dom/div #js {:className "search-form centered"}
        (dom/form #js {:className "form-horizontal"}
          (dom/div #js {:className "input-group"}
            (dom/select #js {:className "form-select select-lg"}
              (map subject-option subjects))
            (dom/input #js {:className "form-input input-lg"
                            :type "text"
                            :placeholder "Cari di sini..."})
            (dom/button #js {:className "btn btn-primary btn-action btn-lg"}
              (dom/span #js {:className "icon icon-search"}))))))))

(def search-form (om/factory SearchForm))

(defui ^:once BodySwitcher
  static uc/InitialAppState
  (initial-state [this params]
    (uc/initial-state SearchForm {}))
    ;(uc/initial-state LoginForm {}))
  static om/Ident
  (ident [this {:keys [component id]}]
    [component id])
  static om/IQuery
  (query [this]
    {:main (om/get-query SearchForm)
     :login (om/get-query LoginForm)})
  Object
  (render [this]
    (let [{:keys [component] :as props} (om/props this)]
      (dom/section #js {:className "body section columns"}
        (dom/div #js {:className "container"}
          (case component
            :main (search-form props)
            :login (login-ui props)
            (dom/h1 nil "YOU ARE LOST!")))))))

(def body (om/factory BodySwitcher))

(defui ^:once Root
  static uc/InitialAppState
  (initial-state [this params]
    {:ui/react-key "start"
     :active-body (uc/initial-state BodySwitcher {})})
  static om/IQuery
  (query [this]
    [:ui/react-key
     {:active-body (om/get-query BodySwitcher)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key active-body]} (om/props this)]
      (dom/div #js {:id "reactive" :key react-key}
        (js/console.log "Props:" (om/props this))
        (body active-body)))))
