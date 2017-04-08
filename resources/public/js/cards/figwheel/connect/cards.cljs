(ns figwheel.connect.cards (:require [devcards.core :include-macros true] [ebtanas.cards] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:devcards true, :build-id "cards", :websocket-url "ws://localhost:3449/figwheel-ws"})
(devcards.core/start-devcard-ui!)

