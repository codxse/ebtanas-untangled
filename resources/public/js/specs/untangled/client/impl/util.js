// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.util');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('cljs.spec');
goog.require('om.next');
untangled.client.impl.util.atom_QMARK_ = (function untangled$client$impl$util$atom_QMARK_(a){
return (a instanceof cljs.core.Atom);
});
untangled.client.impl.util.deep_merge = (function untangled$client$impl$util$deep_merge(var_args){
var args__35783__auto__ = [];
var len__35776__auto___46803 = arguments.length;
var i__35777__auto___46804 = (0);
while(true){
if((i__35777__auto___46804 < len__35776__auto___46803)){
args__35783__auto__.push((arguments[i__35777__auto___46804]));

var G__46805 = (i__35777__auto___46804 + (1));
i__35777__auto___46804 = G__46805;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,xs)){
return cljs.core.apply.call(null,cljs.core.merge_with,untangled.client.impl.util.deep_merge,xs);
} else {
return cljs.core.last.call(null,xs);
}
});

untangled.client.impl.util.deep_merge.cljs$lang$maxFixedArity = (0);

untangled.client.impl.util.deep_merge.cljs$lang$applyTo = (function (seq46802){
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46802));
});

/**
 * Helper for logging the app-state. Pass in an untangled application atom and either top-level keys, data-paths
 * (like get-in), or both.
 */
untangled.client.impl.util.log_app_state = (function untangled$client$impl$util$log_app_state(var_args){
var args__35783__auto__ = [];
var len__35776__auto___46812 = arguments.length;
var i__35777__auto___46813 = (0);
while(true){
if((i__35777__auto___46813 < len__35776__auto___46812)){
args__35783__auto__.push((arguments[i__35777__auto___46813]));

var G__46814 = (i__35777__auto___46813 + (1));
i__35777__auto___46813 = G__46814;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic = (function (app_atom,keys_and_paths){
try{var app_state = om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_atom)));
return cljs.pprint.pprint.call(null,(function (){var make_path = ((function (app_state){
return (function untangled$client$impl$util$make_path(location){
if(cljs.core.sequential_QMARK_.call(null,location)){
return location;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null);
}
});})(app_state))
;
var process_location = ((function (app_state){
return (function untangled$client$impl$util$process_location(acc,location){
var path = make_path.call(null,location);
return cljs.core.assoc_in.call(null,acc,path,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),path));
});})(app_state))
;
var pred__46809 = cljs.core._EQ_;
var expr__46810 = cljs.core.count.call(null,keys_and_paths);
if(cljs.core.truth_(pred__46809.call(null,(0),expr__46810))){
return cljs.core.deref.call(null,app_state);
} else {
if(cljs.core.truth_(pred__46809.call(null,(1),expr__46810))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),make_path.call(null,cljs.core.first.call(null,keys_and_paths)));
} else {
return cljs.core.reduce.call(null,process_location,cljs.core.PersistentArrayMap.EMPTY,keys_and_paths);
}
}
})());
}catch (e46808){if((e46808 instanceof Error)){
var e = e46808;
throw cljs.core.ex_info.call(null,"untangled.client.impl.util/log-app-state expects an atom with an untangled client",cljs.core.PersistentArrayMap.EMPTY);
} else {
throw e46808;

}
}});

untangled.client.impl.util.log_app_state.cljs$lang$maxFixedArity = (1);

untangled.client.impl.util.log_app_state.cljs$lang$applyTo = (function (seq46806){
var G__46807 = cljs.core.first.call(null,seq46806);
var seq46806__$1 = cljs.core.next.call(null,seq46806);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic(G__46807,seq46806__$1);
});


//# sourceMappingURL=util.js.map?rel=1491640761472