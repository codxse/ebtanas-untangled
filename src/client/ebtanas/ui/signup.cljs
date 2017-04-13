(ns ebtanas.ui.signup
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [untangled.client.core :as uc]
            [ebtanas.state.routes :as r]
            [ebtanas.ui.components :as c]))

(defui ^:once SignUp
  static uc/InitialAppState
  (initial-state [this params]
    {:handler (get-in r/page-data [:signup :handler])
     :title (get-in r/page-data [:signup :title])
     :id 1
     :txt-input-form
       [(uc/initial-state c/FormText {:label "Nama depan" :type "text" :col-width "col-6" :placeholder "Pevita"})
        (uc/initial-state c/FormText {:label "Nama belakang" :type "text" :col-width "col-6" :placeholder "Eileen Pearce"})
        (uc/initial-state c/FormText {:label "Email" :type "email" :col-width "col-6" :placeholder "pevita@gmail.com"})
        (uc/initial-state c/FormText {:label "Tanggal lahir" :type "date" :col-width "col-6" :placeholder "10/29/1992"})
        (uc/initial-state c/FormText {:label "Password" :type "password" :col-width "col-8" :placeholder "password"})
        (uc/initial-state c/FormText {:label "" :type "password" :col-width "col-8" :placeholder "ulangi password di sini..."})]
     :label {:radio {:label "Jenis kelamin"
                     :value ["Perempuan" "Laki-laki"]}
             :submit "Daftarkan saya!"}})
  static om/IQuery
  (query [this]
    [:handler
     :title
     :id
     :label
     :txt-input-form (om/get-query c/FormText)])
  Object
  (render [this]
    (let [{:keys [title txt-input-form label]} (om/props this)]
      (dom/section #js {:className "body section columns"}
        (dom/h2 nil title)
        (dom/div #js {:className "container"}
          (dom/div #js {:className "column col-6 centered"}
            (dom/form #js {:className "form-horizontal"}
              (c/form-text (txt-input-form 0))
              (c/form-text (txt-input-form 1))
              (c/form-text (txt-input-form 2))
              (c/form-text (txt-input-form 3))
              (dom/div #js {:className "form-group"}
                (dom/div #js {:className "col-4"}
                  (dom/label #js {:className "form-label"} (get-in label [:radio :label])))
                (dom/div #js {:className "col-8"}
                  (dom/label #js {:className "form-radio"}
                    (dom/input #js {:type "radio" :checked false})
                    (dom/i #js {:className "form-icon"})
                    (get-in label [:radio :value 1]))
                  (dom/label #js {:className "form-radio"}
                    (dom/input #js {:type "radio" :checked true})
                    (dom/i #js {:className "form-icon"})
                    (get-in label [:radio :value 0]))))
              (c/form-text (txt-input-form 4))
              (c/form-text (txt-input-form 5))
              (dom/br nil)
              (dom/div #js {:className "form-group"}
                (dom/div #js {:className "col-4"})
                (dom/div #js {:className "col-8"}
                  (dom/button #js {:className "btn btn-primary"}
                              (:submit label)))))))))))

(def signup (om/factory SignUp))