(ns ebtanas.main
  (:require [ebtanas.core :refer [app]]
            [untangled.client.core :as core]
            [ebtanas.ui.root :as root]))

(reset! app (core/mount @app root/Root "app"))
