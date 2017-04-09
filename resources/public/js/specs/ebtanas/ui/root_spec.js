// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.root_spec');
goog.require('cljs.core');
goog.require('ebtanas.ui.root');
goog.require('untangled_spec.core');
ebtanas.ui.root_spec.__Root_level_mutations__G__111544 = (function ebtanas$ui$root_spec$__Root_level_mutations__G__111544(){
return cljs.test.test_var.call(null,ebtanas.ui.root_spec.__Root_level_mutations__G__111544.cljs$lang$var);
});
ebtanas.ui.root_spec.__Root_level_mutations__G__111544.cljs$lang$test = (function (){
if(cljs.core.truth_(untangled_spec.selectors.selected_for_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled-spec.selectors","none","untangled-spec.selectors/none",1926038016),null], null), null)))){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-specification","begin-specification",1389407457),new cljs.core.Keyword(null,"string","string",-1989541586),"Root level mutations"], null));

try{cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Navigation - nav-to helper function");

try{cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-behavior","begin-behavior",531955294),new cljs.core.Keyword(null,"string","string",-1989541586),"Navigation - nav-to helper function"], null));

try{var state_atom_111551 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var env_111552 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state_atom_111551], null);
ebtanas.ui.root.nav_to.call(null,env_111552,new cljs.core.Keyword(null,"my-page","my-page",-871353107));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-behavior","begin-behavior",531955294),new cljs.core.Keyword(null,"string","string",-1989541586),"Sets the current-page ident to have a second element of :page"], null));

try{cljs.test.do_report.call(null,(function (){var act__62471__auto__ = cljs.core.second.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom_111551)));
var exp__62472__auto__ = new cljs.core.Keyword(null,"page","page",849072397);
var result__62473__auto__ = (function (){try{return cljs.core._EQ_.call(null,exp__62472__auto__,act__62471__auto__);
}catch (e111548){if((e111548 instanceof Object)){
var e__62439__auto__ = e111548;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"IT TO NOT THROW!",new cljs.core.Keyword(null,"actual","actual",107306363),e__62439__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"(-> state-atom deref :current-page second) => :page"], null));
} else {
throw e111548;

}
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(result__62473__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),exp__62472__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),act__62471__auto__,new cljs.core.Keyword(null,"assert-type","assert-type",-1787842052),new cljs.core.Symbol(null,"eq","eq",1021992460,null),new cljs.core.Keyword(null,"message","message",-406056002),"(-> state-atom deref :current-page second) => :page"], null);
})());
}catch (e111547){var t__52584__auto___111553 = e111547;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"page","page",849072397),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Symbol(null,"second","second",1195829517,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52584__auto___111553,new cljs.core.Keyword(null,"message","message",-406056002),"(-> state-atom deref :current-page second) => :page"], null));
}
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-behavior","end-behavior",727768360),new cljs.core.Keyword(null,"string","string",-1989541586),"Sets the current-page ident to have a second element of :page"], null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-behavior","begin-behavior",531955294),new cljs.core.Keyword(null,"string","string",-1989541586),"Sets the current-page ident to have the selected page as the first element"], null));

try{cljs.test.do_report.call(null,(function (){var act__62471__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom_111551)));
var exp__62472__auto__ = new cljs.core.Keyword(null,"my-page","my-page",-871353107);
var result__62473__auto__ = (function (){try{return cljs.core._EQ_.call(null,exp__62472__auto__,act__62471__auto__);
}catch (e111550){if((e111550 instanceof Object)){
var e__62439__auto__ = e111550;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"IT TO NOT THROW!",new cljs.core.Keyword(null,"actual","actual",107306363),e__62439__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"(-> state-atom deref :current-page first) => :my-page"], null));
} else {
throw e111550;

}
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(result__62473__auto__)?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930)),new cljs.core.Keyword(null,"expected","expected",1583670997),exp__62472__auto__,new cljs.core.Keyword(null,"actual","actual",107306363),act__62471__auto__,new cljs.core.Keyword(null,"assert-type","assert-type",-1787842052),new cljs.core.Symbol(null,"eq","eq",1021992460,null),new cljs.core.Keyword(null,"message","message",-406056002),"(-> state-atom deref :current-page first) => :my-page"], null);
})());
}catch (e111549){var t__52584__auto___111554 = e111549;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"my-page","my-page",-871353107),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Symbol(null,"first","first",996428481,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__52584__auto___111554,new cljs.core.Keyword(null,"message","message",-406056002),"(-> state-atom deref :current-page first) => :my-page"], null));
}
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-behavior","end-behavior",727768360),new cljs.core.Keyword(null,"string","string",-1989541586),"Sets the current-page ident to have the selected page as the first element"], null));

}catch (e111546){if((e111546 instanceof Object)){
var e__62439__auto___111555 = e111546;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"IT TO NOT THROW!",new cljs.core.Keyword(null,"actual","actual",107306363),e__62439__auto___111555,new cljs.core.Keyword(null,"message","message",-406056002),"Navigation - nav-to helper function"], null));
} else {
throw e111546;

}
}
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-behavior","end-behavior",727768360),new cljs.core.Keyword(null,"string","string",-1989541586),"Navigation - nav-to helper function"], null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}catch (e111545){if((e111545 instanceof Object)){
var e__62439__auto___111556 = e111545;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),"IT TO NOT THROW!",new cljs.core.Keyword(null,"actual","actual",107306363),e__62439__auto___111556,new cljs.core.Keyword(null,"message","message",-406056002),"Root level mutations"], null));
} else {
throw e111545;

}
}
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-specification","end-specification",309797077),new cljs.core.Keyword(null,"string","string",-1989541586),"Root level mutations"], null));
} else {
return null;
}
});

ebtanas.ui.root_spec.__Root_level_mutations__G__111544.cljs$lang$var = new cljs.core.Var(function(){return ebtanas.ui.root_spec.__Root_level_mutations__G__111544;},new cljs.core.Symbol("ebtanas.ui.root-spec","__Root-level-mutations__G__111544","ebtanas.ui.root-spec/__Root-level-mutations__G__111544",1940140801,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"specs/client/ebtanas/ui/root_spec.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ebtanas.ui.root-spec","ebtanas.ui.root-spec",-159842312,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"__Root-level-mutations__G__111544","__Root-level-mutations__G__111544",-1569846331,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(ebtanas.ui.root_spec.__Root_level_mutations__G__111544)?ebtanas.ui.root_spec.__Root_level_mutations__G__111544.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

//# sourceMappingURL=root_spec.js.map?rel=1491641832105