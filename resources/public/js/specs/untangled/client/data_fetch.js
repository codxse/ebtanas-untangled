// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.data_fetch');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('om.next');
goog.require('untangled.client.impl.data_fetch');
goog.require('om.dom');
goog.require('untangled.client.core');
goog.require('om.util');





/**
 * Internal function to validate and process the parameters of `load` and `load-action`.
 */
untangled.client.data_fetch.load_params_STAR_ = (function untangled$client$data_fetch$load_params_STAR_(server_property_or_ident,SubqueryClass,p__55590){
var map__55595 = p__55590;
var map__55595__$1 = ((((!((map__55595 == null)))?((((map__55595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55595):map__55595);
var target = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"target","target",253001721));
var remote = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var refresh = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false);
var fallback = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var post_mutation_params = cljs.core.get.call(null,map__55595__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
if(((target == null)) || (cljs.core.vector_QMARK_.call(null,target))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
}

if(((post_mutation == null)) || ((post_mutation instanceof cljs.core.Symbol))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation) (symbol? post-mutation))"));
}

if(((fallback == null)) || ((fallback instanceof cljs.core.Symbol))){
} else {
throw (new Error("Assert failed: (or (nil? fallback) (symbol? fallback))"));
}

if(((post_mutation_params == null)) || (cljs.core.map_QMARK_.call(null,post_mutation_params))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation-params) (map? post-mutation-params))"));
}

if(cljs.core.vector_QMARK_.call(null,refresh)){
} else {
throw (new Error("Assert failed: (vector? refresh)"));
}

if(((params == null)) || (cljs.core.map_QMARK_.call(null,params))){
} else {
throw (new Error("Assert failed: (or (nil? params) (map? params))"));
}

if(cljs.core.set_QMARK_.call(null,without)){
} else {
throw (new Error("Assert failed: (set? without)"));
}

if((om.util.ident_QMARK_.call(null,server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (or (util/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

if((function (){var or__34555__auto__ = (SubqueryClass == null);
if(or__34555__auto__){
return or__34555__auto__;
} else {
if(!((SubqueryClass == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === SubqueryClass.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
} else {
throw (new Error("Assert failed: (or (nil? SubqueryClass) (implements? om/IQuery SubqueryClass))"));
}

var query = (cljs.core.truth_((function (){var and__34543__auto__ = SubqueryClass;
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core.map_QMARK_.call(null,params);
} else {
return and__34543__auto__;
}
})())?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = server_property_or_ident;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = om.next.get_query.call(null,SubqueryClass);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))):(cljs.core.truth_(SubqueryClass)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,om.next.get_query.call(null,SubqueryClass)])], null):((cljs.core.map_QMARK_.call(null,params))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__35489__auto__ = server_property_or_ident;
return cljs.core._conj.call(null,(function (){var x__35489__auto____$1 = params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto____$1);
})(),x__35489__auto__);
})()], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_property_or_ident], null)
)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510)],[remote,refresh,parallel,fallback,marker,post_mutation,without,post_mutation_params,target,query]);
});
/**
 * Generates an Om transaction expression for a load mutation. It includes a follow-on read for :ui/loading-data. The args
 *   must be a map of the parameters usable from `load`. Returns a complete Om expression (vector), not just the mutation
 *   since follow-on reads are part of the mutation. You may use `concat` to join this with additional expressions.
 */
untangled.client.data_fetch.load_mutation = (function untangled$client$data_fetch$load_mutation(load_args){
if(((new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args) == null)) || (cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args)))){
} else {
throw (new Error("Assert failed: (or (nil? (:refresh load-args)) (vector? (:refresh load-args)))"));
}

var refresh = (function (){var or__34555__auto__ = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__35489__auto__ = load_args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143)], null),refresh);
});
/**
 * Load data from the server.
 * 
 *   This function triggers a server interaction and normalizes the server response into your app state database. During
 *   operation it also adds (by default) fetch markers into the app state so you can show busy indicators on the UI
 *   components that are waiting for data. The `:target` parameter can be used to place the data somewhere besides app
 *   state root (which is the default).
 * 
 *   The server will receive an Om query of the form: [({server-property (om/get-query SubqueryClass)} params)], which
 *   the Om parser will correctly parse as a Join on server-property with the given subquery and params. See Om AST and
 *   instructions on parsing Om queries.
 * 
 *   Parameters:
 *   - `app-or-comp-or-reconciler` : An Om component instance, Untangled application, or Om reconciler
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `SubqueryClass` : An Om component that implements IQuery. This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *  SubqueryClass can be nil, in which case the resulting server query will not be a join.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery. If supplied, the data AND load marker will appear
 *  at this path. If not supplied the data and marker will appear at `server-property` in the top-level of the client app state
 *  database. Ignored if you're loading via ident (the ident is your target).
 *   - `remote` - Optional. Keyword name of the remote that this load should come from.
 *   - `params` - Optional parameters to add to the generated query
 *   - `marker` - Boolean to determine if you want a fetch-state marker in your app state. Defaults to true. Add `:ui/fetch-state` to the
 *   target component in order to see this data in your component.
 *   - `refresh` - A vector of keywords that will cause component re-renders after the final load/mutations. Same as follow-on
 *   reads in normal `transact!`
 *   - `parallel` - If true, indicates that this load does not have to go through the sequential network queue. Defaults to false.
 *   - `post-mutation` - A mutation (symbol) to run after the data is merged. Note, if target is supplied be sure your post mutation
 *   should expect the data at the targeted location.
 *   - `post-mutation-params` - An optional map  that will be passed to the post-mutation when it is called. May only contain raw data, not code!
 *   - `fallback` - A mutation (symbol) to run if there is a server/network error.
 *   - `without` - An optional set of keywords that should (recursively) be removed from the query.
 *   
 */
untangled.client.data_fetch.load = (function untangled$client$data_fetch$load(var_args){
var args55599 = [];
var len__35776__auto___55606 = arguments.length;
var i__35777__auto___55607 = (0);
while(true){
if((i__35777__auto___55607 < len__35776__auto___55606)){
args55599.push((arguments[i__35777__auto___55607]));

var G__55608 = (i__35777__auto___55607 + (1));
i__35777__auto___55607 = G__55608;
continue;
} else {
}
break;
}

var G__55601 = args55599.length;
switch (G__55601) {
case 3:
return untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55599.length)].join('')));

}
});

untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass){
return untangled.client.data_fetch.load.call(null,app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass,config){
if((function (){var or__34555__auto__ = om.next.component_QMARK_.call(null,app_or_comp_or_reconciler);
if(or__34555__auto__){
return or__34555__auto__;
} else {
var or__34555__auto____$1 = om.next.reconciler_QMARK_.call(null,app_or_comp_or_reconciler);
if(or__34555__auto____$1){
return or__34555__auto____$1;
} else {
if(!((app_or_comp_or_reconciler == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.untangled$client$core$UntangledApplication$))){
return true;
} else {
return false;
}
} else {
return false;
}
}
}
})()){
} else {
throw (new Error("Assert failed: (or (om/component? app-or-comp-or-reconciler) (om/reconciler? app-or-comp-or-reconciler) (implements? uc/UntangledApplication app-or-comp-or-reconciler))"));
}

var config__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config);
var reconciler = ((((!((app_or_comp_or_reconciler == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.untangled$client$core$UntangledApplication$)))?true:false):false))?cljs.core.get.call(null,app_or_comp_or_reconciler,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)):app_or_comp_or_reconciler);
var mutation_args = untangled.client.data_fetch.load_params_STAR_.call(null,server_property_or_ident,SubqueryClass,config__$1);
return om.next.transact_BANG_.call(null,reconciler,untangled.client.data_fetch.load_mutation.call(null,mutation_args));
});

untangled.client.data_fetch.load.cljs$lang$maxFixedArity = 4;

/**
 * 
 *   See `load` for descriptions of parameters and config.
 * 
 *   Queue up a remote load from within an already-running mutation. Similar to `load`, but usable from
 *   within a mutation. IMPORTANT: Make sure you specify the `:remote` parameter to this function, as
 *   well as including a `remote-load` for that remote.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *     ; NOTE: :remote must be the keyword name of a legal remote in your system; however,
 *     ; You must still name the remote in the `load-action` if it is something other than default.
 *     :action (fn []
 *        (load-action ...)
 *        ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_action = (function untangled$client$data_fetch$load_action(var_args){
var args55610 = [];
var len__35776__auto___55613 = arguments.length;
var i__35777__auto___55614 = (0);
while(true){
if((i__35777__auto___55614 < len__35776__auto___55613)){
args55610.push((arguments[i__35777__auto___55614]));

var G__55615 = (i__35777__auto___55614 + (1));
i__35777__auto___55614 = G__55615;
continue;
} else {
}
break;
}

var G__55612 = args55610.length;
switch (G__55612) {
case 3:
return untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55610.length)].join('')));

}
});

untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3 = (function (state_atom,server_property_or_ident,SubqueryClass){
return untangled.client.data_fetch.load_action.call(null,state_atom,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4 = (function (state_atom,server_property_or_ident,SubqueryClass,config){
var config__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config);
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,untangled.client.data_fetch.load_params_STAR_.call(null,server_property_or_ident,SubqueryClass,config__$1),new cljs.core.Keyword(null,"state","state",-1988618099),state_atom));
});

untangled.client.data_fetch.load_action.cljs$lang$maxFixedArity = 4;

/**
 * Load a field of the current component. Runs `om/transact!`.
 * 
 *   Parameters
 *   - `component`: The component (**instance**, not class). This component MUST have an Ident.
 *   - `field`: A field on the component's query that you wish to load.
 * 
 *   Named Parameters:
 *   - `without`: See `load-data`
 *   - `params`: See `load-data`
 *   - `post-mutation`: See `load-data`
 *   - `parallel`: See `load-data`
 *   - `fallback`: See `load-data`
 *   - `marker`: See `load-data`
 *   - `remote`: See `load-data`
 *   - `refresh`: See `load-data`
 * 
 *   NOTE: The :ui/loading-data attribute is always included in refresh. This means you probably don't want to
 *   query for that attribute near the root of your UI. Instead, create some leaf component with an ident that queries for :ui/loading-data
 *   using an Om link (e.g. `[:ui/loading-data '_]`). The presence of the ident on components will enable query optimization, which can
 *   improve your frame rate because Om will not have to run a full root query.
 *   
 */
untangled.client.data_fetch.load_field = (function untangled$client$data_fetch$load_field(var_args){
var args__35783__auto__ = [];
var len__35776__auto___55623 = arguments.length;
var i__35777__auto___55624 = (0);
while(true){
if((i__35777__auto___55624 < len__35776__auto___55623)){
args__35783__auto__.push((arguments[i__35777__auto___55624]));

var G__55625 = (i__35777__auto___55624 + (1));
i__35777__auto___55624 = G__55625;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__55620){
var map__55621 = p__55620;
var map__55621__$1 = ((((!((map__55621 == null)))?((((map__55621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55621):map__55621);
var without = cljs.core.get.call(null,map__55621__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__55621__$1,new cljs.core.Keyword(null,"params","params",710516235));
var remote = cljs.core.get.call(null,map__55621__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var post_mutation = cljs.core.get.call(null,map__55621__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__55621__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__55621__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__55621__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.call(null,map__55621__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fallback must be a mutation symbol."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(symbol? fallback)")].join('')));
}
} else {
}

return om.next.transact_BANG_.call(null,component,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__35489__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[remote,refresh,parallel,fallback,marker,params,field,post_mutation,without,om.next.get_ident.call(null,component),om.next.focus_query.call(null,om.next.get_query.call(null,component),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),om.next.get_ident.call(null,component)], null),refresh));
});

untangled.client.data_fetch.load_field.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_field.cljs$lang$applyTo = (function (seq55617){
var G__55618 = cljs.core.first.call(null,seq55617);
var seq55617__$1 = cljs.core.next.call(null,seq55617);
var G__55619 = cljs.core.first.call(null,seq55617__$1);
var seq55617__$2 = cljs.core.next.call(null,seq55617__$1);
return untangled.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(G__55618,G__55619,seq55617__$2);
});

/**
 * 
 *   Load data from the remote. Runs `om/transact!`. See also `load-field`.
 * 
 *   Parameters
 *   - `comp-or-reconciler`: A component or reconciler (not a class)
 *   - `query`: The query for the element(s) attributes. Use defui to generate arbitrary queries so normalization will work.
 * 
 *   Optional Named parameters
 *   - `post-mutation`: A mutation (symbol) invoked after the load succeeds.
 *   - `fallback`: A mutation (symbol) invoked after the load fails. App state is in env, server error is in the params under :error.
 *   - `parallel`: Boolean to indicate that this load should happen in the parallel on the server (non-blocking load). Any loads marked this way will happen in parallel.
 *   - `marker`: A boolean (default true). If true, a marker is placed in the app state in place of the target data during the load. If false, no marker is produced.
 *   - `refresh`: A vector of keywords indicating data that will be changing. If any of the listed keywords are queried by on-screen
 *  components, then those components will be re-rendered after the load has finished and post mutations have run.
 *   - `without`: A set of keywords. Any keyword appearing in this set will be recursively removed from the query (in a proper AST-preserving fashion).
 *   - `params`: A parameter map to augment onto the first element of the query
 *   - `remote`: A keyword naming which remote to query.
 *   
 */
untangled.client.data_fetch.load_data = (function untangled$client$data_fetch$load_data(var_args){
var args__35783__auto__ = [];
var len__35776__auto___55632 = arguments.length;
var i__35777__auto___55633 = (0);
while(true){
if((i__35777__auto___55633 < len__35776__auto___55632)){
args__35783__auto__.push((arguments[i__35777__auto___55633]));

var G__55634 = (i__35777__auto___55633 + (1));
i__35777__auto___55633 = G__55634;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic = (function (comp_or_reconciler,query,p__55629){
var map__55630 = p__55629;
var map__55630__$1 = ((((!((map__55630 == null)))?((((map__55630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55630):map__55630);
var ident = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var without = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var remote = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var params = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.call(null,map__55630__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fallback must be a mutation symbol."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(symbol? fallback)")].join('')));
}
} else {
}

return om.next.transact_BANG_.call(null,comp_or_reconciler,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__35489__auto__ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[remote,refresh,parallel,fallback,marker,params,post_mutation,without,ident,query]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143)], null),refresh));
});

untangled.client.data_fetch.load_data.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_data.cljs$lang$applyTo = (function (seq55626){
var G__55627 = cljs.core.first.call(null,seq55626);
var seq55626__$1 = cljs.core.next.call(null,seq55626);
var G__55628 = cljs.core.first.call(null,seq55626__$1);
var seq55626__$2 = cljs.core.next.call(null,seq55626__$1);
return untangled.client.data_fetch.load_data.cljs$core$IFn$_invoke$arity$variadic(G__55627,G__55628,seq55626__$2);
});

/**
 * Queue up a remote load of a component's field from within an already-running mutation. Similar to `load-field`
 *   but usable from within a mutation. Note the `:refresh` parameter is supported, and defaults to nothing, even for
 *   fields, in actions. If you want anything to refresh other than the targeted component you will want to use the
 *   :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  ; NOTE: :remote must be the keyword name of a legal remote in your system; however,
 *  ; You must still name the remote in the `load-action` if it is something other than default.
 *  :action (fn []
 *     (load-field-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_field_action = (function untangled$client$data_fetch$load_field_action(var_args){
var args__35783__auto__ = [];
var len__35776__auto___55643 = arguments.length;
var i__35777__auto___55644 = (0);
while(true){
if((i__35777__auto___55644 < len__35776__auto___55643)){
args__35783__auto__.push((arguments[i__35777__auto___55644]));

var G__55645 = (i__35777__auto___55644 + (1));
i__35777__auto___55644 = G__55645;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((4) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((4)),(0),null)):null);
return untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__35784__auto__);
});

untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,component_class,ident,field,p__55640){
var map__55641 = p__55640;
var map__55641__$1 = ((((!((map__55641 == null)))?((((map__55641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55641):map__55641);
var without = cljs.core.get.call(null,map__55641__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var remote = cljs.core.get.call(null,map__55641__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var params = cljs.core.get.call(null,map__55641__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.call(null,map__55641__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__55641__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__55641__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__55641__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.call(null,map__55641__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[remote,refresh,parallel,fallback,marker,params,field,app_state,post_mutation,without,ident,om.next.focus_query.call(null,om.next.get_query.call(null,component_class),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]));
});

untangled.client.data_fetch.load_field_action.cljs$lang$maxFixedArity = (4);

untangled.client.data_fetch.load_field_action.cljs$lang$applyTo = (function (seq55635){
var G__55636 = cljs.core.first.call(null,seq55635);
var seq55635__$1 = cljs.core.next.call(null,seq55635);
var G__55637 = cljs.core.first.call(null,seq55635__$1);
var seq55635__$2 = cljs.core.next.call(null,seq55635__$1);
var G__55638 = cljs.core.first.call(null,seq55635__$2);
var seq55635__$3 = cljs.core.next.call(null,seq55635__$2);
var G__55639 = cljs.core.first.call(null,seq55635__$3);
var seq55635__$4 = cljs.core.next.call(null,seq55635__$3);
return untangled.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic(G__55636,G__55637,G__55638,G__55639,seq55635__$4);
});

/**
 * 
 *   Queue up a remote load from within an already-running mutation. Similar to `load-data`, but usable from
 *   within a mutation.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  :action (fn []
 *     (load-data-action ...)
 *     ; other optimistic updates/state changes)}
 */
untangled.client.data_fetch.load_data_action = (function untangled$client$data_fetch$load_data_action(var_args){
var args__35783__auto__ = [];
var len__35776__auto___55652 = arguments.length;
var i__35777__auto___55653 = (0);
while(true){
if((i__35777__auto___55653 < len__35776__auto___55652)){
args__35783__auto__.push((arguments[i__35777__auto___55653]));

var G__55654 = (i__35777__auto___55653 + (1));
i__35777__auto___55653 = G__55654;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,query,p__55649){
var map__55650 = p__55649;
var map__55650__$1 = ((((!((map__55650 == null)))?((((map__55650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55650):map__55650);
var ident = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var without = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var params = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"params","params",710516235));
var remote = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var post_mutation = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var fallback = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var parallel = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var refresh = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.call(null,map__55650__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"query","query",-1288509510)],[remote,refresh,parallel,fallback,marker,params,app_state,post_mutation,without,ident,query]));
});

untangled.client.data_fetch.load_data_action.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.load_data_action.cljs$lang$applyTo = (function (seq55646){
var G__55647 = cljs.core.first.call(null,seq55646);
var seq55646__$1 = cljs.core.next.call(null,seq55646);
var G__55648 = cljs.core.first.call(null,seq55646__$1);
var seq55646__$2 = cljs.core.next.call(null,seq55646__$1);
return untangled.client.data_fetch.load_data_action.cljs$core$IFn$_invoke$arity$variadic(G__55647,G__55648,seq55646__$2);
});

/**
 * Returns the correct value for the `:remote` side of a mutation that should act as a
 *   trigger for remote loads. Must be used in conjunction with running `load-data-action` or
 *   `load-data-field` in the `:action` side of the mutation (which queues the exact things to
 *   load).
 */
untangled.client.data_fetch.remote_load = (function untangled$client$data_fetch$remote_load(parsing_env){
var ast = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(parsing_env);
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Symbol("untangled","load","untangled/load",89075339,null));
});
untangled.client.data_fetch.data_state_QMARK_ = (function untangled$client$data_fetch$data_state_QMARK_(state){
return untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state);
});
untangled.client.data_fetch.ready_QMARK_ = (function untangled$client$data_fetch$ready_QMARK_(state){
return untangled.client.impl.data_fetch.ready_QMARK_.call(null,state);
});
untangled.client.data_fetch.loading_QMARK_ = (function untangled$client$data_fetch$loading_QMARK_(state){
return untangled.client.impl.data_fetch.loading_QMARK_.call(null,state);
});
untangled.client.data_fetch.failed_QMARK_ = (function untangled$client$data_fetch$failed_QMARK_(state){
return untangled.client.impl.data_fetch.failed_QMARK_.call(null,state);
});
/**
 * Custom rendering for use while data is being lazily loaded using the data fetch methods
 *   load-collection and load-field.
 * 
 *   `data-render` : the render method to call once the data has been successfully loaded from
 *   the server. Can be an Om factory method or a React rendering function.
 * 
 *   `props` : the React properties for the element to be loaded.
 * 
 *   Optional:
 * 
 *   `ready-render` : the render method to call when the desired data has been marked as ready
 *   to load, but the server request has not yet been sent.
 * 
 *   `loading-render` : render method once the server request has been sent, and UI is waiting
 *   on the response
 * 
 *   `failed-render` : render method when the server returns a failure state for the requested data
 * 
 *   `not-present-render` : called when props is nil (helpful for differentiating between a nil and
 *   empty response from the server).
 * 
 *   Example Usage:
 * 
 *   ```
 *   (defui Thing
 *  static om/IQuery
 *  (query [this] [{:thing2 (om/get-query Thing2)}])
 *  Object
 *  (componentDidMount [this]
 *     (load-field this :thing2))
 * 
 *  (render [this]
 *    (let [thing2 (:thing2 (om/props this))]
 *      (lazily-loaded ui-thing2 thing2))))
 * 
 *   (defui Thing2
 *  static om/IQuery
 *  (query [this] [:ui/fetch-state])
 *  Object
 *  (render [this]
 *    (display-thing-2))
 * 
 *   (def ui-thing2 (om/factory Thing2))
 *   ```
 */
untangled.client.data_fetch.lazily_loaded = (function untangled$client$data_fetch$lazily_loaded(var_args){
var args__35783__auto__ = [];
var len__35776__auto___55661 = arguments.length;
var i__35777__auto___55662 = (0);
while(true){
if((i__35777__auto___55662 < len__35776__auto___55661)){
args__35783__auto__.push((arguments[i__35777__auto___55662]));

var G__55663 = (i__35777__auto___55662 + (1));
i__35777__auto___55662 = G__55663;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic = (function (data_render,props,p__55658){
var map__55659 = p__55658;
var map__55659__$1 = ((((!((map__55659 == null)))?((((map__55659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55659):map__55659);
var ready_render = cljs.core.get.call(null,map__55659__$1,new cljs.core.Keyword(null,"ready-render","ready-render",-1421004936),((function (map__55659,map__55659__$1){
return (function (_){
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-ready"], null)),"Queued");
});})(map__55659,map__55659__$1))
);
var loading_render = cljs.core.get.call(null,map__55659__$1,new cljs.core.Keyword(null,"loading-render","loading-render",-1821208169),((function (map__55659,map__55659__$1,ready_render){
return (function (_){
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-load"], null)),"Loading...");
});})(map__55659,map__55659__$1,ready_render))
);
var failed_render = cljs.core.get.call(null,map__55659__$1,new cljs.core.Keyword(null,"failed-render","failed-render",-433071277),((function (map__55659,map__55659__$1,ready_render,loading_render){
return (function (_){
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-failed"], null)),"Loading error!");
});})(map__55659,map__55659__$1,ready_render,loading_render))
);
var not_present_render = cljs.core.get.call(null,map__55659__$1,new cljs.core.Keyword(null,"not-present-render","not-present-render",-946766938));
var state = new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(untangled.client.data_fetch.ready_QMARK_.call(null,state))){
return ready_render.call(null,props);
} else {
if(cljs.core.truth_(untangled.client.data_fetch.loading_QMARK_.call(null,state))){
return loading_render.call(null,props);
} else {
if(cljs.core.truth_(untangled.client.data_fetch.failed_QMARK_.call(null,state))){
return failed_render.call(null,props);
} else {
if(cljs.core.truth_((function (){var and__34543__auto__ = not_present_render;
if(cljs.core.truth_(and__34543__auto__)){
return (props == null);
} else {
return and__34543__auto__;
}
})())){
return not_present_render.call(null,props);
} else {
return data_render.call(null,props);

}
}
}
}
});

untangled.client.data_fetch.lazily_loaded.cljs$lang$maxFixedArity = (2);

untangled.client.data_fetch.lazily_loaded.cljs$lang$applyTo = (function (seq55655){
var G__55656 = cljs.core.first.call(null,seq55655);
var seq55655__$1 = cljs.core.next.call(null,seq55655);
var G__55657 = cljs.core.first.call(null,seq55655__$1);
var seq55655__$2 = cljs.core.next.call(null,seq55655__$1);
return untangled.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic(G__55656,G__55657,seq55655__$2);
});


//# sourceMappingURL=data_fetch.js.map?rel=1491640771983