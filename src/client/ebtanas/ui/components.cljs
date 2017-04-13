(ns ebtanas.ui.components
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.client.core :as uc]
    [goog.string :as gstring]
    [ebtanas.state.routes :as r :refer [page-data]]))

(defui ^:once NavigationItem
  static uc/InitialAppState
  (initial-state [this {:keys [name icon url active handler]}]
    {:name name :icon icon :url url :active active :handler handler})
  static om/Ident
  (ident [this {:keys [handler]}]
    [:navItem/by-handler handler])
  static om/IQuery
  (query [this]
    [:name :icon :url :active :handler])
  Object
  (render [this]
    (let [{:keys [name icon url active] :as params} (om/props this)
          {:keys [set-active-body!]} (om/get-computed this)]
      (dom/li #js {:className (str "tab-item " (when active "active"))}
        (dom/a #js {:href url
                    :onClick #(set-active-body! params)}
          (when icon (dom/span #js {:className (str "icon " icon)}))
          (str " " name))))))

(def navigation-item (om/factory NavigationItem {:keyfn :name}))

(defui ^:once Navigation
  static uc/InitialAppState
  (initial-state [this {:keys [name menus]}]
    {:name name
     :menus menus})
  static om/Ident
  (ident [this {:keys [name]}]
    [:nav/by-name name])
  static om/IQuery
  (query [this]
    [:name
     {:menus (om/get-query NavigationItem)}])
  Object
  (render [this]
    (let [{:keys [menus]} (om/props this)
          set-active-body! (fn [{:keys [name handler]}]
                             (om/transact! this `[(app/update-route!
                                                    ~{:name name :handler handler}) :active-body]))]
      (dom/ul #js {:className "tab inline-flex"}
        (map (fn [menu]
               (navigation-item (om/computed menu {:set-active-body! set-active-body!})))
             menus)))))

(def navigation (om/factory Navigation))

(defui ^:once Header
  static uc/InitialAppState
  (initial-state [this params]
    {:title "Ebtanas"
     :name "Main Header"
     :header-nav
       (uc/initial-state
         Navigation
         {:name "Navigation Header"
          :menus (let [main (get-in page-data [:home :handler])
                       login (get-in page-data [:login :handler])
                       signup (get-in page-data [:signup :handler])
                       psets (get-in page-data [:psets :handler])]
                   [(uc/initial-state NavigationItem
                       {:name "Halaman Utama"
                        :icon "icon-home"
                        :active true
                        :url (r/url-for main)
                        :handler main})
                    (uc/initial-state NavigationItem
                       {:name "Bank Soal"
                        :icon "icon-library_books"
                        :url (r/url-for psets)
                        :active false
                        :handler psets})
                    (uc/initial-state NavigationItem
                       {:name "Daftar"
                        :icon "icon-people"
                        :url (r/url-for signup)
                        :active false
                        :handler signup})
                    (uc/initial-state NavigationItem
                       {:name "Masuk"
                        :icon "icon-exit_to_app"
                        :url (r/url-for login)
                        :active false
                        :handler login})])})})
  static om/Ident
  (ident [this {:keys [name]}]
    [:header/by-name name])
  static om/IQuery
  (query [this]
    [:title
     :name
     {:header-nav (om/get-query Navigation)}])
  Object
  (render [this]
    (let [{:keys [title header-nav]} (om/props this)]
      (dom/header #js {:className "navbar"}
        (dom/section #js {:className "navbar-section"}
          (dom/a #js {:className "navbar-brand"
                      :href "#"}
            (dom/i #js {:className "icon icon-pages"})
            (str " " title)))
        (dom/section #js {:className "navbar-section"}
          (dom/ul #js {:className "tab inline-flex"}
            (navigation header-nav)))))))

(def header (om/factory Header))

(defui ^:once Footer
  static uc/InitialAppState
  (initial-state [this params]
    {:name "Main Footer"
     :year 2017
     :copyright "Indonesia"
     :footer-nav
       (uc/initial-state
         Navigation
         {:name "Navigation Footer"
          :menus (let [privacy (get-in page-data [:privacy :handler])
                       faq (get-in page-data [:faq :handler])
                       mission (get-in page-data [:mission :handler])]
                   [(uc/initial-state NavigationItem {:name "Kebijakan Privasi" :url (r/url-for privacy) :handler privacy})
                    (uc/initial-state NavigationItem {:name "Tanya Jawab" :url (r/url-for faq) :handler faq})
                    (uc/initial-state NavigationItem {:name "Misi Kami" :url (r/url-for mission) :handler mission})])})})
  static om/Ident
  (ident [this {:keys [name]}]
    [:footer/by-name name])
  static om/IQuery
  (query [this]
    [:name
     :year
     :copyright
     {:footer-nav (om/get-query Navigation)}])
  Object
  (render [this]
    (let [{:keys [copyright year footer-nav]} (om/props this)]
      (dom/footer #js {}
        (dom/hr #js {:className "style14"})
        (dom/section #js {:className "navbar"}
          (dom/section #js {:className "navbar-section"}
            (dom/span nil
              (str (gstring/unescapeEntities "&copy; ")
                   (str "Hak Cipta " year " - " copyright))))
          (dom/section #js {:className "navbar-center"}
            (dom/span nil (dom/i #js {:className "icon icon-pages"})))
          (dom/section #js {:className "navbar-section"}
            (dom/ul #js {:className "tab inline-flex"}
              (navigation footer-nav))))))))

(def footer (om/factory Footer))

(defui ^:once FormText
  static uc/InitialAppState
  (initial-state [this {:keys [label type col-width placeholder]}]
    {:label label
     :type type
     :col-width col-width
     :placeholder placeholder})
  static om/Ident
  (ident [this {:keys [label]}]
    [:login-form/by-label label])
  static om/IQuery
  (query [this]
    [:label :type :col-width :placeholder])
  Object
  (render [this]
    (let [{:keys [label type col-width placeholder]} (om/props this)]
      (dom/div #js {:className "form-group"}
        (dom/div #js {:className "col-4"}
          (dom/label #js {:className "form-label"} label))
        (dom/div #js {:className col-width}
          (dom/input #js {:className "form-input"
                          :type type
                          :placeholder placeholder}))))))

(def form-text (om/factory FormText))

