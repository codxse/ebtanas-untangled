(ns ebtanas.ui.login
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [untangled.client.core :as uc]))

(defonce input-text-data
  {:email {:label "Email" :type "email" :col-width "col-6" :placeholder "pevita@gmail.com"}
   :password {:label "Password" :type "password" :col-width "col-8" :placeholder "***************"}})

(defui ^:once InputTextLogin
  static uc/InitialAppState
  (initial-state
    [this {:keys [label type col-width placeholder]}]
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

(def input-text (om/factory InputTextLogin))

(defui ^:once LoginForm
  static uc/InitialAppState
  (initial-state [this params]
    {:component :login
     :title "Masuk Halaman Anggota"
     :id 1
     :txt-input-form [(uc/initial-state InputTextLogin (:email input-text-data))
                      (uc/initial-state InputTextLogin (:password input-text-data))]})
  static om/IQuery
  (query [this]
    [:component
     :id
     :title
     {:txt-input-form (om/get-query InputTextLogin)}])
  Object
  (render [this]
    (let [{:keys [title txt-input-form]} (om/props this)]
      (dom/section #js {:className "body section columns"}
        (dom/h2 nil title)
        (dom/div #js {:className "container"}
          (dom/div #js {:className "column col-6 centered"}
            (dom/form #js {:className "form-horizontal"}
              (input-text (txt-input-form 0))
              (input-text (txt-input-form 1))
              (dom/div #js {:className "form-group"}
                (dom/div #js {:className "col-4"})
                (dom/label #js {:className "col-8"}
                  (dom/label #js {:className "form-checkbox"}
                    (dom/input #js {:type "checkbox"})
                    (dom/i #js {:className "form-icon"})
                    "Ingat Saya")))
              (dom/div #js {:className "form-group"}
                (dom/div #js {:className "col-4"})
                (dom/div #js {:className "col-8"}
                  (dom/button #js {:className "btn btn-primary"
                                   :type "submit"}
                              "Masuk")
                  (dom/button #js {:className "btn btn-link disabled"}
                              "Lupa password?"))))))))))

(def login-ui (om/factory LoginForm))