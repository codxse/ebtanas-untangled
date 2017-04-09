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

(defui ^:once NavigationItem
  static uc/InitialAppState
  (initial-state [this {:keys [name icon url active]}]
    {:name name :icon icon :url url :active active})
  static om/Ident
  (ident [this {:keys [name]}]
    [:navItem/by-name name])
  static om/IQuery
  (query [this]
    [:name :icon :url :active])
  Object
  (render [this]
    (let [{:keys [name icon url active]} (om/props this)]
      (dom/li #js {:className (str "tab-item " (when active "active"))}
              (dom/a #js {:href (str url)}
                (when icon (dom/span #js {:className (str "icon " icon)}))
                (str " " name))))))

(def navigation-item (om/factory NavigationItem {:keyfn :name}))

(defui ^:once Navigation
  static uc/InitialAppState
  (initial-state [this {:keys [name menus]}]
    {:name name
     :menus menus})
  static om/Ident
  (ident [this {:keys [title]}]
    [:nav/by-name name])
  static om/IQuery
  (query [this]
    [:name
     {:menus (om/get-query NavigationItem)}])
  Object
  (render [this]
    (let [{:keys [menus]} (om/props this)]
      (dom/ul #js {:className "tab inline-flex"}
        (map navigation-item menus)))))

(def navigation-ui (om/factory Navigation))

(defui ^:once Header
  static uc/InitialAppState
  (initial-state [this params]
    {:title "Ebtanas"
     :name "Main Header"
     :navigation
            (uc/initial-state
              Navigation
              {:name "Navigation Header"
               :menus [(uc/initial-state NavigationItem {:name "Home" :icon "icon-home" :url "/" :active true})
                       (uc/initial-state NavigationItem {:name "Bank Soal" :icon "icon-library_books" :url "#" :active false})
                       (uc/initial-state NavigationItem {:name "Daftar" :icon "icon-people" :url "#" :active false})
                       (uc/initial-state NavigationItem {:name "Masuk" :icon "icon-exit_to_app" :url "/login" :active false})]})})
  static om/Ident
  (ident [this {:keys [name]}]
    [:header/by-name name])
  static om/IQuery
  (query [this]
    [:title
     :name
     {:navigation (om/get-query Navigation)}])
  Object
  (render [this]
    (let [{:keys [title navigation]} (om/props this)]
      (dom/header #js {:className "navbar"}
        (dom/section #js {:className "navbar-section"}
          (dom/a #js {:className "navbar-brand"
                      :href "#"}
            (dom/i #js {:className "icon icon-pages"})
            (str " " title)))
        (dom/section #js {:className "navbar-section"}
            (dom/ul #js {:className "tab inline-flex"}
              (navigation-ui navigation)))))))

(def header-ui (om/factory Header))

(defui ^:once Footer
  static uc/InitialAppState
  (initial-state [this params]
    {:name "Main Footer"
     :year 2017
     :copyright "Indonesia"
     :navigation
       (uc/initial-state
         Navigation
         {:name "Navigation Footer"
          :menus [(uc/initial-state NavigationItem {:name "Kebijakan Privasi" :url "#"})
                  (uc/initial-state NavigationItem {:name "Contekan" :url "#"})
                  (uc/initial-state NavigationItem {:name "Misi Kami" :url "#"})]})})
  static om/Ident
  (ident [this {:keys [name]}]
    [:footer/by-name name])
  static om/IQuery
  (query [this]
    [:name
     :year
     :copyright
     {:navigation (om/get-query Navigation)}])
  Object
  (render [this]
    (let [{:keys [copyright year navigation]} (om/props this)]
      (dom/footer #js {}
        (dom/hr #js {:className "style14"})
        (dom/section #js {:className "navbar"}
          (dom/section #js {:className "navbar-section"}
            (dom/span #js {:className "btn btn-link"}
                      (str (gstring/unescapeEntities "&copy; ")
                           (str "Hak Cipta " year " - " copyright))))
          (dom/section #js {:className "navbar-center"}
            (dom/span nil (dom/i #js {:className "icon icon-pages"})))
          (dom/section #js {:className "navbar-section"}
            (dom/ul #js {:className "tab inline-flex"}
              (navigation-ui navigation))))))))

(def footer-ui (om/factory Footer))

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

(def search-ui (om/factory SearchForm))

(defui ^:once BodySwitcher
  static uc/InitialAppState
  (initial-state [this params]
    (uc/initial-state SearchForm {}))
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
            :main (search-ui props)
            :login (login-ui props)
            (dom/h1 nil "YOU ARE LOST!")))))))

(def body-ui (om/factory BodySwitcher))

(defui ^:once Root
  static uc/InitialAppState
  (initial-state [this params]
    {:ui/react-key "start"
     :header (uc/initial-state Header {})
     :footer (uc/initial-state Footer {})
     :active-body (uc/initial-state BodySwitcher {})})
  static om/IQuery
  (query [this]
    [:ui/react-key
     {:active-body (om/get-query BodySwitcher)}
     {:header (om/get-query Header)}
     {:footer (om/get-query Footer)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key active-body header footer]} (om/props this)]
      (dom/div #js {:id "reactive" :key react-key}
        (header-ui header)
        (body-ui active-body)
        (footer-ui footer)))))
