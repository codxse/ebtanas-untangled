(ns ebtanas.ui.login
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [untangled.client.core :as uc]
            [ebtanas.state.routes :refer [page-data]]
            [ebtanas.ui.components :as c]))

(defonce input-text-data
  {:email {:label "Email" :type "email" :col-width "col-6" :placeholder "pevita@gmail.com"}
   :password {:label "Password" :type "password" :col-width "col-8" :placeholder "***************"}})

(defui ^:once Login
  static uc/InitialAppState
  (initial-state [this params]
    {:handler (get-in page-data [:login :handler])
     :title (get-in page-data [:login :title])
     :id 1
     :label {:checkbox "Ingat saya"
             :submit "Masuk"
             :forgot-pwd "Lupa password?"}
     :txt-input-form [(uc/initial-state c/FormText (:email input-text-data))
                      (uc/initial-state c/FormText (:password input-text-data))]})
  static om/IQuery
  (query [this]
    [:handler
     :id
     :title
     :label
     {:txt-input-form (om/get-query c/FormText)}])
  Object
  (render [this]
    (let [{:keys [title txt-input-form] :as props} (om/props this)]
      (dom/section #js {:className "body section columns"}
        (dom/h2 nil title)
        (dom/div #js {:className "container"}
          (dom/div #js {:className "column col-6 centered"}
            (dom/form #js {:className "form-horizontal"
                           :method "POST"
                           :action "/auth"}
              (c/form-text (txt-input-form 0))
              (c/form-text (txt-input-form 1))
              (dom/div #js {:className "form-group"}
                (dom/div #js {:className "col-4"})
                (dom/label #js {:className "col-8"}
                  (dom/label #js {:className "form-checkbox"}
                    (dom/input #js {:type "checkbox"})
                    (dom/i #js {:className "form-icon"})
                    (get-in props [:label :checkbox]))))
              (dom/div #js {:className "form-group"}
                (dom/div #js {:className "col-4"})
                (dom/div #js {:className "col-8"}
                  (dom/button #js {:className "btn btn-primary"
                                   :type "submit"}
                              (get-in props [:label :submit]))
                  (dom/button #js {:className "btn btn-link disabled"}
                              (get-in props [:label :forgot-pwd])))))))))))

(def login (om/factory Login))