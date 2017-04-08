(ns ebtanas.all-tests
  (:require
    ebtanas.tests-to-run
    [doo.runner :refer-macros [doo-all-tests]]))

(doo-all-tests #".*-spec")
