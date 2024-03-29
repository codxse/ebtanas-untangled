(ns ebtanas.intro
  (:require [devcards.core :as rc :refer-macros [defcard]]
            [om.next :as om :refer-macros [defui]]
            [ebtanas.ui.components :as comp]
            [om.dom :as dom]))

(defcard SVGPlaceholder
         "# SVG Placeholder"
         (comp/ui-placeholder {:w 200 :h 200}))
