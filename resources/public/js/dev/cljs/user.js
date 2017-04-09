// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('untangled.client.core');
goog.require('om.next');
goog.require('ebtanas.core');
goog.require('ebtanas.ui.root');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.reset_BANG_.call(null,ebtanas.core.app,untangled.client.core.mount.call(null,cljs.core.deref.call(null,ebtanas.core.app),ebtanas.ui.root.Root,"app"));
cljs.user.app_state = (function cljs$user$app_state(){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ebtanas.core.app)));
});
cljs.user.log_app_state = (function cljs$user$log_app_state(var_args){
var args__40434__auto__ = [];
var len__40427__auto___239184 = arguments.length;
var i__40428__auto___239185 = (0);
while(true){
if((i__40428__auto___239185 < len__40427__auto___239184)){
args__40434__auto__.push((arguments[i__40428__auto___239185]));

var G__239186 = (i__40428__auto___239185 + (1));
i__40428__auto___239185 = G__239186;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return cljs.user.log_app_state.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

cljs.user.log_app_state.cljs$core$IFn$_invoke$arity$variadic = (function (keywords){
return cljs.pprint.pprint.call(null,(function (){var app_state = cljs.user.app_state.call(null);
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,keywords))){
return app_state;
} else {
return cljs.core.select_keys.call(null,app_state,keywords);
}
})());
});

cljs.user.log_app_state.cljs$lang$maxFixedArity = (0);

cljs.user.log_app_state.cljs$lang$applyTo = (function (seq239183){
return cljs.user.log_app_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq239183));
});

cljs.user.dump_query = (function cljs$user$dump_query(comp){
var component = om.next.class__GT_any.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ebtanas.core.app)),comp);
return om.next.full_query.call(null,component);
});
cljs.user.dump_query_kw = (function cljs$user$dump_query_kw(kw){
var component = om.next.ref__GT_any.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ebtanas.core.app)),kw);
return om.next.full_query.call(null,component);
});
/**
 * Run the query of the given UI class and return the result as a map of the query that was run and the data that was returned.
 *   NOTE: If the component is mounted in several places on the UI, you may not get the expected result. Be sure to check
 *   the QUERY part of the result to see the query used.
 */
cljs.user.q = (function cljs$user$q(ui_class){
var query = cljs.user.dump_query.call(null,ui_class);
var state = cljs.user.app_state.call(null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"QUERY","QUERY",-480154195),query,new cljs.core.Keyword(null,"RESULT","RESULT",1760898052),om.next.db__GT_tree.call(null,query,state,state)], null);
});
/**
 * Find a component that uses the given keyword in its query, then run that query against the app database and show
 *   the result. NOTE: If more than one component matches, your results may vary. Be sure to examine the query that
 *   was used.
 */
cljs.user.qkw = (function cljs$user$qkw(query_kw){
var query = cljs.user.dump_query_kw.call(null,query_kw);
var state = cljs.user.app_state.call(null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"QUERY","QUERY",-480154195),query,new cljs.core.Keyword(null,"RESULT","RESULT",1760898052),om.next.db__GT_tree.call(null,query,state,state)], null);
});

//# sourceMappingURL=user.js.map?rel=1491717844257