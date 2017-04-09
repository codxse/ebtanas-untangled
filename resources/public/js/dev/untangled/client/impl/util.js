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
var args__40450__auto__ = [];
var len__40443__auto___51133 = arguments.length;
var i__40444__auto___51134 = (0);
while(true){
if((i__40444__auto___51134 < len__40443__auto___51133)){
args__40450__auto__.push((arguments[i__40444__auto___51134]));

var G__51135 = (i__40444__auto___51134 + (1));
i__40444__auto___51134 = G__51135;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((0) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((0)),(0),null)):null);
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__40451__auto__);
});

untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,xs)){
return cljs.core.apply.call(null,cljs.core.merge_with,untangled.client.impl.util.deep_merge,xs);
} else {
return cljs.core.last.call(null,xs);
}
});

untangled.client.impl.util.deep_merge.cljs$lang$maxFixedArity = (0);

untangled.client.impl.util.deep_merge.cljs$lang$applyTo = (function (seq51132){
return untangled.client.impl.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51132));
});

/**
 * Helper for logging the app-state. Pass in an untangled application atom and either top-level keys, data-paths
 * (like get-in), or both.
 */
untangled.client.impl.util.log_app_state = (function untangled$client$impl$util$log_app_state(var_args){
var args__40450__auto__ = [];
var len__40443__auto___51142 = arguments.length;
var i__40444__auto___51143 = (0);
while(true){
if((i__40444__auto___51143 < len__40443__auto___51142)){
args__40450__auto__.push((arguments[i__40444__auto___51143]));

var G__51144 = (i__40444__auto___51143 + (1));
i__40444__auto___51143 = G__51144;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((1) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40451__auto__);
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
var pred__51139 = cljs.core._EQ_;
var expr__51140 = cljs.core.count.call(null,keys_and_paths);
if(cljs.core.truth_(pred__51139.call(null,(0),expr__51140))){
return cljs.core.deref.call(null,app_state);
} else {
if(cljs.core.truth_(pred__51139.call(null,(1),expr__51140))){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),make_path.call(null,cljs.core.first.call(null,keys_and_paths)));
} else {
return cljs.core.reduce.call(null,process_location,cljs.core.PersistentArrayMap.EMPTY,keys_and_paths);
}
}
})());
}catch (e51138){if((e51138 instanceof Error)){
var e = e51138;
throw cljs.core.ex_info.call(null,"untangled.client.impl.util/log-app-state expects an atom with an untangled client",cljs.core.PersistentArrayMap.EMPTY);
} else {
throw e51138;

}
}});

untangled.client.impl.util.log_app_state.cljs$lang$maxFixedArity = (1);

untangled.client.impl.util.log_app_state.cljs$lang$applyTo = (function (seq51136){
var G__51137 = cljs.core.first.call(null,seq51136);
var seq51136__$1 = cljs.core.next.call(null,seq51136);
return untangled.client.impl.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic(G__51137,seq51136__$1);
});


//# sourceMappingURL=util.js.map?rel=1491695669477