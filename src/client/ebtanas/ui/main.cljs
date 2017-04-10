(ns ebtanas.ui.main
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [untangled.client.core :as uc]))

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
     :title "Halaman Utama"
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
