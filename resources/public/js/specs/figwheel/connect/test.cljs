(ns figwheel.connect.test (:require [figwheel.client] [figwheel.client.utils] [ebtanas.spec-main]))
(figwheel.client/start {:build-id "test", :websocket-url "ws://localhost:3449/figwheel-ws"})

