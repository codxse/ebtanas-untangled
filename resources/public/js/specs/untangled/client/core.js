// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.next.cache');
goog.require('untangled.client.impl.application');
goog.require('goog.dom');
goog.require('untangled.client.impl.built_in_mutations');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.logging');
goog.require('untangled.dom');
goog.require('cljs.core.async');
goog.require('om.next.protocols');
goog.require('untangled.client.impl.util');
goog.require('untangled.client.impl.om_plumbing');
goog.require('clojure.set');
goog.require('goog.Uri');




/**
 * Entrypoint for creating a new untangled client. Instantiates an Application with default values, unless
 *   overridden by the parameters. If you do not supply a networking object, one will be provided that connects to the
 *   same server the application was served from, at `/api`.
 * 
 *   If you supply a `:request-transform` it must be a function:
 * 
 *   ```
 *  (fn [edn headers] [edn' headers'])
 *   ```
 * 
 *   it can replace the outgoing EDN or headers (returning both as a vector). NOTE: Both of these are clojurescript types.
 *   The edn will be encoded with transit, and the headers will be converted to a js map.
 * 
 *   `:initial-state` is your applications initial state. If it is an atom, it *must* be normalized. Untangled databases
 *   always have normalization turned on (for server data merging). If it is not an atom, it will be auto-normalized.
 * 
 *   `:started-callback` is an optional function that will receive the intiailized untangled application after it is
 *   mounted in the DOM, and is useful for triggering initial loads, routing mutations, etc. The Om reconciler is available
 *   under the `:reconciler` key (and you can access the app state, root node, etc from there.)
 * 
 *   `:network-error-callback` is a function of two arguments, the app state atom and the error, which will be invoked for
 *   every network error (status code >= 400, or no network found), should you choose to use the built-in networking record.
 * 
 *   `:migrate` is optional. It is a (fn [state tid->rid] ... state') that should return a new state where all tempids
 *   (the keys of `tid->rid`) are rewritten to real ids (the values of tid->rid). This defaults to a full recursive
 *   algorithm against all data in the app-state, which is correct but possibly slow).  Note that tempids will have an Om tempid data type.
 *   See Om reconciler documentation for further information.
 * 
 *   `:transit-handlers` (optional). A map with keys for `:read` and `:write`, which contain maps to be used for the read
 *   and write side of transit to extend the supported data types. See `make-untangled-network` in network.cljs.
 * 
 *   `:pathopt` (optional, defaults to true).  Turn on/off Om path optimization. This is here in case you're experiencing problems with rendering.
 *   Path optimization is a rendering optimization that may still have bugs.
 * 
 *   `:shared` (optional). A map of arbitrary values to be shared across all components, accessible to them via (om/shared this)
 * 
 *   `:mutation-merge (optional). A function `(fn [state mutation-symbol return-value])` that receives the app state as a
 *   map (NOT an atom) and should return the new state as a map. This function is run when network results are being merged,
 *   and is called once for each mutation that had a return value on the server. Returning nil from this function is safe, and will be ignored
 *   with a console message for debugging. If you need information about the original mutation arguments then you must reflect
 *   them back from the server in your return value. By default such values are discarded.
 * 
 *   There is currently no way to circumvent the encoding of the body into transit. If you want to talk to other endpoints
 *   via alternate protocols you must currently implement that outside of the framework (e.g. global functions/state).
 *   
 */
untangled.client.core.new_untangled_client = (function untangled$client$core$new_untangled_client(var_args){
var args__40450__auto__ = [];
var len__40443__auto___44837 = arguments.length;
var i__40444__auto___44838 = (0);
while(true){
if((i__40444__auto___44838 < len__40443__auto___44837)){
args__40450__auto__.push((arguments[i__40444__auto___44838]));

var G__44839 = (i__40444__auto___44838 + (1));
i__40444__auto___44838 = G__44839;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((0) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(argseq__40451__auto__);
});

untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__44834){
var map__44835 = p__44834;
var map__44835__$1 = ((((!((map__44835 == null)))?((((map__44835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44835):map__44835);
var started_callback = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),cljs.core.constantly.call(null,null));
var initial_state = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var network_error_callback = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"network-error-callback","network-error-callback",93849635),cljs.core.constantly.call(null,null));
var pathopt = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var networking = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var mutation_merge = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var transit_handlers = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791));
var migrate = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var request_transform = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var shared = cljs.core.get.call(null,map__44835__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
return untangled.client.core.map__GT_Application.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),mutation_merge,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"migrate","migrate",-207110743),migrate,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null),new cljs.core.Keyword(null,"networking","networking",586110628),(function (){var or__39222__auto__ = networking;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return untangled.client.impl.network.make_untangled_network.call(null,"/api",new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),transit_handlers,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),network_error_callback);
}
})()], null));
});

untangled.client.core.new_untangled_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_client.cljs$lang$applyTo = (function (seq44833){
return untangled.client.core.new_untangled_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44833));
});


/**
 * @interface
 */
untangled.client.core.InitialAppState = function(){};

/**
 * Get the initial state to be used for this component in app state. You are responsible for composing these together.
 */
untangled.client.core.initial_state = (function untangled$client$core$initial_state(clz,params){
if((!((clz == null))) && (!((clz.untangled$client$core$InitialAppState$initial_state$arity$2 == null)))){
return clz.untangled$client$core$InitialAppState$initial_state$arity$2(clz,params);
} else {
var x__39940__auto__ = (((clz == null))?null:clz);
var m__39941__auto__ = (untangled.client.core.initial_state[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,clz,params);
} else {
var m__39941__auto____$1 = (untangled.client.core.initial_state["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,clz,params);
} else {
throw cljs.core.missing_protocol.call(null,"InitialAppState.initial-state",clz);
}
}
}
});

/**
 * Get the initial state of a component. Needed because calling the protocol method from a defui component in clj will not work as expected.
 */
untangled.client.core.get_initial_state = (function untangled$client$core$get_initial_state(class$,params){
if(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.untangled$client$core$InitialAppState$)))?true:false):false)){
return untangled.client.core.initial_state.call(null,class$,params);
} else {
return null;
}
});

/**
 * @interface
 */
untangled.client.core.UntangledApplication = function(){};

/**
 * Start/replace the webapp on the given DOM ID or DOM Node.
 */
untangled.client.core.mount = (function untangled$client$core$mount(this$,root_component,target_dom_id){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$mount$arity$3 == null)))){
return this$.untangled$client$core$UntangledApplication$mount$arity$3(this$,root_component,target_dom_id);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.core.mount[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$,root_component,target_dom_id);
} else {
var m__39941__auto____$1 = (untangled.client.core.mount["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$,root_component,target_dom_id);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.mount",this$);
}
}
}
});

/**
 * Replace the entire app state with the given (pre-normalized) state.
 */
untangled.client.core.reset_state_BANG_ = (function untangled$client$core$reset_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2(this$,new_state);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.core.reset_state_BANG_[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$,new_state);
} else {
var m__39941__auto____$1 = (untangled.client.core.reset_state_BANG_["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.reset-state!",this$);
}
}
}
});

/**
 * Replace the entire app state with the initial app state defined on the root component (includes auto-merging of unions). callback can be nil, a function, or :original (to call original started-callback).
 */
untangled.client.core.reset_app_BANG_ = (function untangled$client$core$reset_app_BANG_(this$,root_component,callback){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3(this$,root_component,callback);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.core.reset_app_BANG_[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$,root_component,callback);
} else {
var m__39941__auto____$1 = (untangled.client.core.reset_app_BANG_["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$,root_component,callback);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.reset-app!",this$);
}
}
}
});

/**
 * Remove all pending network requests. Useful on failures to eliminate cascading failures.
 */
untangled.client.core.clear_pending_remote_requests_BANG_ = (function untangled$client$core$clear_pending_remote_requests_BANG_(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$1(this$);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.core.clear_pending_remote_requests_BANG_[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$);
} else {
var m__39941__auto____$1 = (untangled.client.core.clear_pending_remote_requests_BANG_["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.clear-pending-remote-requests!",this$);
}
}
}
});

/**
 * Refresh the UI (force re-render). NOTE: You MUST support :key on your root DOM element with the :ui/react-key value from app state for this to work.
 */
untangled.client.core.refresh = (function untangled$client$core$refresh(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$refresh$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$refresh$arity$1(this$);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.core.refresh[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$);
} else {
var m__39941__auto____$1 = (untangled.client.core.refresh["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.refresh",this$);
}
}
}
});

/**
 * Return a serialized version of the current history of the application, suitable for network transfer
 */
untangled.client.core.history = (function untangled$client$core$history(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$history$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$history$arity$1(this$);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.core.history[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$);
} else {
var m__39941__auto____$1 = (untangled.client.core.history["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.history",this$);
}
}
}
});

/**
 * Returns the application with history reset to its initial, empty state. Resets application history to its initial, empty state. Suitable for resetting the app for situations such as user log out.
 */
untangled.client.core.reset_history_BANG_ = (function untangled$client$core$reset_history_BANG_(this$){
if((!((this$ == null))) && (!((this$.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1 == null)))){
return this$.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1(this$);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.core.reset_history_BANG_[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$);
} else {
var m__39941__auto____$1 = (untangled.client.core.reset_history_BANG_["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledApplication.reset-history!",this$);
}
}
}
});

untangled.client.core.merge_alternate_union_elements_BANG_ = (function untangled$client$core$merge_alternate_union_elements_BANG_(app,root_component){
var walk_ast = (function() {
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast = null;
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2 = (function (ast,visitor){
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,null);
});
var untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3 = (function (p__44905,visitor,parent_union){
var map__44912 = p__44905;
var map__44912__$1 = ((((!((map__44912 == null)))?((((map__44912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44912):map__44912);
var parent_ast = map__44912__$1;
var children = cljs.core.get.call(null,map__44912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component = cljs.core.get.call(null,map__44912__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var type = cljs.core.get.call(null,map__44912__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_key = cljs.core.get.call(null,map__44912__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var union_key = cljs.core.get.call(null,map__44912__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var key = cljs.core.get.call(null,map__44912__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_((function (){var and__39210__auto__ = component;
if(cljs.core.truth_(and__39210__auto__)){
var and__39210__auto____$1 = parent_union;
if(cljs.core.truth_(and__39210__auto____$1)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union-entry","union-entry",223335750),type);
} else {
return and__39210__auto____$1;
}
} else {
return and__39210__auto__;
}
})())){
visitor.call(null,component,parent_union);
} else {
}

if(cljs.core.truth_(children)){
var seq__44914 = cljs.core.seq.call(null,children);
var chunk__44915 = null;
var count__44916 = (0);
var i__44917 = (0);
while(true){
if((i__44917 < count__44916)){
var ast = cljs.core._nth.call(null,chunk__44915,i__44917);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,component);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,null);
} else {
}
}
}

var G__44926 = seq__44914;
var G__44927 = chunk__44915;
var G__44928 = count__44916;
var G__44929 = (i__44917 + (1));
seq__44914 = G__44926;
chunk__44915 = G__44927;
count__44916 = G__44928;
i__44917 = G__44929;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__44914);
if(temp__6753__auto__){
var seq__44914__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44914__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__44914__$1);
var G__44930 = cljs.core.chunk_rest.call(null,seq__44914__$1);
var G__44931 = c__40133__auto__;
var G__44932 = cljs.core.count.call(null,c__40133__auto__);
var G__44933 = (0);
seq__44914 = G__44930;
chunk__44915 = G__44931;
count__44916 = G__44932;
i__44917 = G__44933;
continue;
} else {
var ast = cljs.core.first.call(null,seq__44914__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,component);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.call(null,ast,visitor,null);
} else {
}
}
}

var G__44934 = cljs.core.next.call(null,seq__44914__$1);
var G__44935 = null;
var G__44936 = (0);
var G__44937 = (0);
seq__44914 = G__44934;
chunk__44915 = G__44935;
count__44916 = G__44936;
i__44917 = G__44937;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast = function(p__44905,visitor,parent_union){
switch(arguments.length){
case 2:
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2.call(this,p__44905,visitor);
case 3:
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3.call(this,p__44905,visitor,parent_union);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$2 = untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__2;
untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast.cljs$core$IFn$_invoke$arity$3 = untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast__3;
return untangled$client$core$merge_alternate_union_elements_BANG__$_walk_ast;
})()
;
var merge_union = (function untangled$client$core$merge_alternate_union_elements_BANG__$_merge_union(component,parent_union){
var default_initial_state = (function (){var and__39210__auto__ = parent_union;
if(cljs.core.truth_(and__39210__auto__)){
var and__39210__auto____$1 = ((!((parent_union == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === parent_union.untangled$client$core$InitialAppState$)))?true:false):false);
if(and__39210__auto____$1){
return untangled.client.core.initial_state.call(null,parent_union,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__39210__auto____$1;
}
} else {
return and__39210__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_.call(null,default_initial_state);
var component_initial_state = (function (){var and__39210__auto__ = component;
if(cljs.core.truth_(and__39210__auto__)){
var and__39210__auto____$1 = ((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.untangled$client$core$InitialAppState$)))?true:false):false);
if(and__39210__auto____$1){
return untangled.client.core.initial_state.call(null,component,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__39210__auto____$1;
}
} else {
return and__39210__auto__;
}
})();
if(cljs.core.truth_(default_initial_state)){
} else {
untangled.client.logging.warn.call(null,"Subelements of union ",parent_union," have initial state, but the union itself has no initial state. Your app state may suffer.");
}

if(cljs.core.truth_((function (){var and__39210__auto__ = component;
if(cljs.core.truth_(and__39210__auto__)){
var and__39210__auto____$1 = component_initial_state;
if(cljs.core.truth_(and__39210__auto____$1)){
var and__39210__auto____$2 = parent_union;
if(cljs.core.truth_(and__39210__auto____$2)){
return (!(to_many_QMARK_)) && (cljs.core.not_EQ_.call(null,default_initial_state,component_initial_state));
} else {
return and__39210__auto____$2;
}
} else {
return and__39210__auto____$1;
}
} else {
return and__39210__auto__;
}
})())){
return untangled.client.core.merge_state_BANG_.call(null,app,parent_union,component_initial_state);
} else {
return null;
}
});
return walk_ast.call(null,om.next.query__GT_ast.call(null,om.next.get_query.call(null,root_component)),merge_union);
});
/**
 * Initialize the untangled Application. Creates network queue, sets up i18n, creates reconciler, mounts it, and returns
 *   the initialized app
 */
untangled.client.core.initialize = (function untangled$client$core$initialize(p__44938,initial_state,root_component,dom_id_or_node,reconciler_options){
var map__44941 = p__44938;
var map__44941__$1 = ((((!((map__44941 == null)))?((((map__44941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44941):map__44941);
var app = map__44941__$1;
var networking = cljs.core.get.call(null,map__44941__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var started_callback = cljs.core.get.call(null,map__44941__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951));
var queue = cljs.core.async.chan.call(null,(1024));
var rc = cljs.core.async.chan.call(null);
var parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),untangled.client.impl.om_plumbing.read_local,new cljs.core.Keyword(null,"mutate","mutate",1422419038),untangled.client.impl.om_plumbing.write_entry_point], null));
var initial_app = cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"queue","queue",1455835879),queue,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),rc,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),true,new cljs.core.Keyword(null,"networking","networking",586110628),networking);
var rec = untangled.client.impl.application.generate_reconciler.call(null,initial_app,initial_state,parser,reconciler_options);
var completed_app = cljs.core.assoc.call(null,initial_app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),rec);
var node = ((typeof dom_id_or_node === 'string')?goog.dom.getElement(dom_id_or_node):dom_id_or_node);
untangled.client.impl.network.start.call(null,networking,completed_app);

untangled.client.impl.application.initialize_internationalization.call(null,rec);

untangled.client.impl.application.initialize_global_error_callback.call(null,completed_app);

untangled.client.impl.application.start_network_sequential_processing.call(null,completed_app);

om.next.add_root_BANG_.call(null,rec,root_component,node);

untangled.client.core.merge_alternate_union_elements_BANG_.call(null,completed_app,root_component);

if(cljs.core.truth_(started_callback)){
started_callback.call(null,completed_app);
} else {
}

return completed_app;
});
/**
 * Needed for mocking in tests. Do not use directly. Use UntangledApplication protocol methods instead.
 */
untangled.client.core.clear_queue = (function untangled$client$core$clear_queue(queue){
var element = cljs.core.async.poll_BANG_.call(null,queue);
while(true){
if(cljs.core.truth_(element)){
var G__44943 = cljs.core.async.poll_BANG_.call(null,queue);
element = G__44943;
continue;
} else {
return null;
}
break;
}
});
/**
 * Needed for mocking in tests. Use UntangledApplication protocol methods instead.
 */
untangled.client.core.reset_history_impl = (function untangled$client$core$reset_history_impl(app){
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.update_in.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (p1__44944_SHARP_){
return om.next.cache.cache.call(null,p1__44944_SHARP_.size);
})));
});
untangled.client.core.refresh_STAR_ = (function untangled$client$core$refresh_STAR_(p__44945){
var map__44948 = p__44945;
var map__44948__$1 = ((((!((map__44948 == null)))?((((map__44948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44948):map__44948);
var app = map__44948__$1;
var reconciler = cljs.core.get.call(null,map__44948__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
untangled.client.logging.info.call(null,"RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element");

return untangled.dom.force_render.call(null,reconciler);
});
untangled.client.core.mount_STAR_ = (function untangled$client$core$mount_STAR_(p__44950,root_component,dom_id_or_node){
var map__44955 = p__44950;
var map__44955__$1 = ((((!((map__44955 == null)))?((((map__44955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44955):map__44955);
var app = map__44955__$1;
var mounted_QMARK_ = cljs.core.get.call(null,map__44955__$1,new cljs.core.Keyword(null,"mounted?","mounted?",712114760));
var initial_state = cljs.core.get.call(null,map__44955__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var reconciler_options = cljs.core.get.call(null,map__44955__$1,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035));
if(cljs.core.truth_(mounted_QMARK_)){
untangled.client.core.refresh_STAR_.call(null,app);

return app;
} else {
var uses_initial_app_state_QMARK_ = ((!((root_component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === root_component.untangled$client$core$InitialAppState$)))?true:false):false);
var ui_declared_state = (function (){var and__39210__auto__ = uses_initial_app_state_QMARK_;
if(and__39210__auto__){
return untangled.client.core.initial_state.call(null,root_component,null);
} else {
return and__39210__auto__;
}
})();
var atom_supplied_QMARK_ = untangled.client.impl.util.atom_QMARK_.call(null,initial_state);
var init_conflict_QMARK_ = (function (){var and__39210__auto__ = (function (){var or__39222__auto__ = atom_supplied_QMARK_;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.seq.call(null,initial_state);
}
})();
if(cljs.core.truth_(and__39210__auto__)){
if(!((root_component == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === root_component.untangled$client$core$InitialAppState$))){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__39210__auto__;
}
})();
var state = ((!(uses_initial_app_state_QMARK_))?(cljs.core.truth_(initial_state)?initial_state:cljs.core.PersistentArrayMap.EMPTY):(cljs.core.truth_(atom_supplied_QMARK_)?(function (){
cljs.core.reset_BANG_.call(null,initial_state,om.next.tree__GT_db.call(null,root_component,ui_declared_state,true));

return initial_state;
})()
:ui_declared_state
));
if(cljs.core.truth_(init_conflict_QMARK_)){
untangled.client.logging.warn.call(null,"You supplied an initial state AND a root component with initial state. Using root's InitialAppState (atom overwritten)!");
} else {
}

return untangled.client.core.initialize.call(null,app,state,root_component,dom_id_or_node,reconciler_options);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {untangled.client.core.UntangledApplication}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled.client.core.Application = (function (initial_state,mutation_merge,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.mutation_merge = mutation_merge;
this.started_callback = started_callback;
this.networking = networking;
this.queue = queue;
this.response_channel = response_channel;
this.reconciler = reconciler;
this.parser = parser;
this.mounted_QMARK_ = mounted_QMARK_;
this.reconciler_options = reconciler_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39897__auto__,k__39898__auto__){
var self__ = this;
var this__39897__auto____$1 = this;
return this__39897__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__39898__auto__,null);
});


untangled.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39899__auto__,k44960,else__39900__auto__){
var self__ = this;
var this__39899__auto____$1 = this;
var G__44962 = (((k44960 instanceof cljs.core.Keyword))?k44960.fqn:null);
switch (G__44962) {
case "networking":
return self__.networking;

break;
case "response-channel":
return self__.response_channel;

break;
case "mutation-merge":
return self__.mutation_merge;

break;
case "queue":
return self__.queue;

break;
case "mounted?":
return self__.mounted_QMARK_;

break;
case "reconciler":
return self__.reconciler;

break;
case "parser":
return self__.parser;

break;
case "started-callback":
return self__.started_callback;

break;
case "initial-state":
return self__.initial_state;

break;
case "reconciler-options":
return self__.reconciler_options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44960,else__39900__auto__);

}
});


untangled.client.core.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39911__auto__,writer__39912__auto__,opts__39913__auto__){
var self__ = this;
var this__39911__auto____$1 = this;
var pr_pair__39914__auto__ = ((function (this__39911__auto____$1){
return (function (keyval__39915__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39912__auto__,cljs.core.pr_writer,""," ","",opts__39913__auto__,keyval__39915__auto__);
});})(this__39911__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39912__auto__,pr_pair__39914__auto__,"#untangled.client.core.Application{",", ","}",opts__39913__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),self__.response_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.core.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44959){
var self__ = this;
var G__44959__$1 = this;
return (new cljs.core.RecordIter((0),G__44959__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.client.core.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39895__auto__){
var self__ = this;
var this__39895__auto____$1 = this;
return self__.__meta;
});


untangled.client.core.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39891__auto__){
var self__ = this;
var this__39891__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.core.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39901__auto__){
var self__ = this;
var this__39901__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39892__auto__){
var self__ = this;
var this__39892__auto____$1 = this;
var h__39664__auto__ = self__.__hash;
if(!((h__39664__auto__ == null))){
return h__39664__auto__;
} else {
var h__39664__auto____$1 = cljs.core.hash_imap.call(null,this__39892__auto____$1);
self__.__hash = h__39664__auto____$1;

return h__39664__auto____$1;
}
});


untangled.client.core.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39893__auto__,other__39894__auto__){
var self__ = this;
var this__39893__auto____$1 = this;
if(cljs.core.truth_((function (){var and__39210__auto__ = other__39894__auto__;
if(cljs.core.truth_(and__39210__auto__)){
return ((this__39893__auto____$1.constructor === other__39894__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__39893__auto____$1,other__39894__auto__));
} else {
return and__39210__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled.client.core.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39906__auto__,k__39907__auto__){
var self__ = this;
var this__39906__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"networking","networking",586110628),null,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),null,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),null,new cljs.core.Keyword(null,"queue","queue",1455835879),null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"parser","parser",-1543495310),null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),null], null), null),k__39907__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39906__auto____$1),self__.__meta),k__39907__auto__);
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39907__auto__)),null));
}
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$mount$arity$3 = (function (this$,root_component,dom_id_or_node){
var self__ = this;
var this$__$1 = this;
return untangled.client.core.mount_STAR_.call(null,this$__$1,root_component,dom_id_or_node);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,om.next.app_state.call(null,self__.reconciler),new_state);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_app_BANG_$arity$3 = (function (this$,root_component,callback){
var self__ = this;
var this$__$1 = this;
if(!(((!((root_component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === root_component.untangled$client$core$InitialAppState$)))?true:false):false))){
return untangled.client.logging.error.call(null,"The specified root component does not implement InitialAppState!");
} else {
var base_state = om.next.tree__GT_db.call(null,root_component,untangled.client.core.initial_state.call(null,root_component,null),true);
this$__$1.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$1(null);

cljs.core.reset_BANG_.call(null,om.next.app_state.call(null,self__.reconciler),base_state);

this$__$1.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1(null);

untangled.client.core.merge_alternate_union_elements_BANG_.call(null,this$__$1,root_component);

untangled.client.logging.info.call(null,"updated app state to original ",om.next.app_state.call(null,self__.reconciler));

if(cljs.core._EQ_.call(null,callback,new cljs.core.Keyword(null,"original","original",-445386197))){
self__.started_callback.call(null,this$__$1);
} else {
if(cljs.core.truth_(callback)){
callback.call(null,this$__$1);
} else {
}
}

return this$__$1.untangled$client$core$UntangledApplication$refresh$arity$1(null);
}
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$clear_pending_remote_requests_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return untangled.client.core.clear_queue.call(null,self__.queue);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$history$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history_steps = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(self__.reconciler)).arr;
var history_map = cljs.core.deref.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(self__.reconciler)).index);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"steps","steps",-128433302),history_steps,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (history_steps,history_map,this$__$1){
return (function (p__44964){
var vec__44965 = p__44964;
var k = cljs.core.nth.call(null,vec__44965,(0),null);
var v = cljs.core.nth.call(null,vec__44965,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword("untangled","meta","untangled/meta",1275048992),cljs.core.meta.call(null,v))], null);
});})(history_steps,history_map,this$__$1))
,history_map))], null);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$reset_history_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return untangled.client.core.reset_history_impl.call(null,this$__$1);
});


untangled.client.core.Application.prototype.untangled$client$core$UntangledApplication$refresh$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
untangled.client.logging.info.call(null,"RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element");

return untangled.dom.force_render.call(null,self__.reconciler);
});


untangled.client.core.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39904__auto__,k__39905__auto__,G__44959){
var self__ = this;
var this__39904__auto____$1 = this;
var pred__44968 = cljs.core.keyword_identical_QMARK_;
var expr__44969 = k__39905__auto__;
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__44969))){
return (new untangled.client.core.Application(G__44959,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,G__44959,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,G__44959,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"networking","networking",586110628),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,G__44959,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,G__44959,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,G__44959,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,G__44959,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,G__44959,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,G__44959,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44968.call(null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),expr__44969))){
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,G__44959,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39905__auto__,G__44959),null));
}
}
}
}
}
}
}
}
}
}
});


untangled.client.core.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39909__auto__){
var self__ = this;
var this__39909__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"queue","queue",1455835879),self__.queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),self__.response_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});


untangled.client.core.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39896__auto__,G__44959){
var self__ = this;
var this__39896__auto____$1 = this;
return (new untangled.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.networking,self__.queue,self__.response_channel,self__.reconciler,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,G__44959,self__.__extmap,self__.__hash));
});


untangled.client.core.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39902__auto__,entry__39903__auto__){
var self__ = this;
var this__39902__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39903__auto__)){
return this__39902__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__39903__auto__,(0)),cljs.core._nth.call(null,entry__39903__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39902__auto____$1,entry__39903__auto__);
}
});

untangled.client.core.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"mutation-merge","mutation-merge",-491211795,null),new cljs.core.Symbol(null,"started-callback","started-callback",-158055424,null),new cljs.core.Symbol(null,"networking","networking",-2068325141,null),new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.Symbol(null,"response-channel","response-channel",-1259244276,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"parser","parser",97036217,null),new cljs.core.Symbol(null,"mounted?","mounted?",-1942321009,null),new cljs.core.Symbol(null,"reconciler-options","reconciler-options",-1005320734,null)], null);
});

untangled.client.core.Application.cljs$lang$type = true;

untangled.client.core.Application.cljs$lang$ctorPrSeq = (function (this__39933__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.core/Application");
});

untangled.client.core.Application.cljs$lang$ctorPrWriter = (function (this__39933__auto__,writer__39934__auto__){
return cljs.core._write.call(null,writer__39934__auto__,"untangled.client.core/Application");
});

untangled.client.core.__GT_Application = (function untangled$client$core$__GT_Application(initial_state,mutation_merge,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options){
return (new untangled.client.core.Application(initial_state,mutation_merge,started_callback,networking,queue,response_channel,reconciler,parser,mounted_QMARK_,reconciler_options,null,null,null));
});

untangled.client.core.map__GT_Application = (function untangled$client$core$map__GT_Application(G__44961){
return (new untangled.client.core.Application(new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"mounted?","mounted?",712114760).cljs$core$IFn$_invoke$arity$1(G__44961),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035).cljs$core$IFn$_invoke$arity$1(G__44961),null,cljs.core.dissoc.call(null,G__44961,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"response-channel","response-channel",1395191493),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)),null));
});

/**
 * Create a test client that has no networking. Useful for UI testing with a real Untangled app container.
 */
untangled.client.core.new_untangled_test_client = (function untangled$client$core$new_untangled_test_client(var_args){
var args__40450__auto__ = [];
var len__40443__auto___44976 = arguments.length;
var i__40444__auto___44977 = (0);
while(true){
if((i__40444__auto___44977 < len__40443__auto___44976)){
args__40450__auto__.push((arguments[i__40444__auto___44977]));

var G__44978 = (i__40444__auto___44977 + (1));
i__40444__auto___44977 = G__44978;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((0) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((0)),(0),null)):null);
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__40451__auto__);
});

untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__44973){
var map__44974 = p__44973;
var map__44974__$1 = ((((!((map__44974 == null)))?((((map__44974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44974):map__44974);
var initial_state = cljs.core.get.call(null,map__44974__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.call(null,map__44974__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null);
return untangled.client.core.map__GT_Application.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"networking","networking",586110628),untangled.client.impl.network.mock_network.call(null)], null));
});

untangled.client.core.new_untangled_test_client.cljs$lang$maxFixedArity = (0);

untangled.client.core.new_untangled_test_client.cljs$lang$applyTo = (function (seq44972){
return untangled.client.core.new_untangled_test_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44972));
});

/**
 * Get the current window location from the browser
 */
untangled.client.core.get_url = (function untangled$client$core$get_url(){
return window.location.href;
});
/**
 * Get the current URI parameters from the browser url or one you supply
 */
untangled.client.core.uri_params = (function untangled$client$core$uri_params(var_args){
var args44979 = [];
var len__40443__auto___44986 = arguments.length;
var i__40444__auto___44987 = (0);
while(true){
if((i__40444__auto___44987 < len__40443__auto___44986)){
args44979.push((arguments[i__40444__auto___44987]));

var G__44988 = (i__40444__auto___44987 + (1));
i__40444__auto___44987 = G__44988;
continue;
} else {
}
break;
}

var G__44981 = args44979.length;
switch (G__44981) {
case 0:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44979.length)].join('')));

}
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$0 = (function (){
return untangled.client.core.uri_params.call(null,untangled.client.core.get_url.call(null));
});

untangled.client.core.uri_params.cljs$core$IFn$_invoke$arity$1 = (function (url){
var query_data = (new goog.Uri(url)).getQueryData();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__40084__auto__ = ((function (query_data){
return (function untangled$client$core$iter__44982(s__44983){
return (new cljs.core.LazySeq(null,((function (query_data){
return (function (){
var s__44983__$1 = s__44983;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__44983__$1);
if(temp__6753__auto__){
var s__44983__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44983__$2)){
var c__40082__auto__ = cljs.core.chunk_first.call(null,s__44983__$2);
var size__40083__auto__ = cljs.core.count.call(null,c__40082__auto__);
var b__44985 = cljs.core.chunk_buffer.call(null,size__40083__auto__);
if((function (){var i__44984 = (0);
while(true){
if((i__44984 < size__40083__auto__)){
var k = cljs.core._nth.call(null,c__40082__auto__,i__44984);
cljs.core.chunk_append.call(null,b__44985,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null));

var G__44990 = (i__44984 + (1));
i__44984 = G__44990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44985),untangled$client$core$iter__44982.call(null,cljs.core.chunk_rest.call(null,s__44983__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44985),null);
}
} else {
var k = cljs.core.first.call(null,s__44983__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null),untangled$client$core$iter__44982.call(null,cljs.core.rest.call(null,s__44983__$2)));
}
} else {
return null;
}
break;
}
});})(query_data))
,null,null));
});})(query_data))
;
return iter__40084__auto__.call(null,query_data.getKeys());
})());
});

untangled.client.core.uri_params.cljs$lang$maxFixedArity = 1;

/**
 * Get the value of the named parameter from the browser URL (or an explicit one)
 */
untangled.client.core.get_url_param = (function untangled$client$core$get_url_param(var_args){
var args44991 = [];
var len__40443__auto___44994 = arguments.length;
var i__40444__auto___44995 = (0);
while(true){
if((i__40444__auto___44995 < len__40443__auto___44994)){
args44991.push((arguments[i__40444__auto___44995]));

var G__44996 = (i__40444__auto___44995 + (1));
i__40444__auto___44995 = G__44996;
continue;
} else {
}
break;
}

var G__44993 = args44991.length;
switch (G__44993) {
case 1:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44991.length)].join('')));

}
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1 = (function (param_name){
return untangled.client.core.get_url_param.call(null,untangled.client.core.get_url.call(null),param_name);
});

untangled.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2 = (function (url,param_name){
return cljs.core.get.call(null,untangled.client.core.uri_params.call(null,url),param_name);
});

untangled.client.core.get_url_param.cljs$lang$maxFixedArity = 2;

/**
 * Get the ident using a component class and data. Om's simulated statics are elided by
 *   advanced compilation. This function compensates.
 */
untangled.client.core.get_class_ident = (function untangled$client$core$get_class_ident(comp,data){
return om.next.ident.call(null,comp,data);
});
/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
untangled.client.core.component_merge_query = (function untangled$client$core$component_merge_query(component,object_data){
var ident = om.next.ident.call(null,component,object_data);
var object_query = om.next.get_query.call(null,component);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,object_query])], null);
});
/**
 * Does the steps necessary to honor the data merge technique defined by Untangled with respect
 *   to data overwrites in the app database.
 */
untangled.client.core.preprocess_merge = (function untangled$client$core$preprocess_merge(state_atom,component,object_data){
var ident = untangled.client.core.get_class_ident.call(null,component,object_data);
var object_query = om.next.get_query.call(null,component);
var object_query__$1 = ((cljs.core.map_QMARK_.call(null,object_query))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_query], null):object_query);
var base_query = untangled.client.core.component_merge_query.call(null,component,object_data);
var merge_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677),base_query], null)], null);
var existing_data = cljs.core.get.call(null,om.next.db__GT_tree.call(null,base_query,cljs.core.deref.call(null,state_atom),cljs.core.deref.call(null,state_atom)),ident,cljs.core.PersistentArrayMap.EMPTY);
var marked_data = untangled.client.impl.om_plumbing.mark_missing.call(null,object_data,object_query__$1);
var merge_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677),cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,untangled.client.impl.util.deep_merge.call(null,existing_data,marked_data)])], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge-query","merge-query",610171663),merge_query,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734),merge_data], null);
});
/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 *   
 */
untangled.client.core.integrate_ident_BANG_ = (function untangled$client$core$integrate_ident_BANG_(var_args){
var args__40450__auto__ = [];
var len__40443__auto___45015 = arguments.length;
var i__40444__auto___45016 = (0);
while(true){
if((i__40444__auto___45016 < len__40443__auto___45015)){
args__40450__auto__.push((arguments[i__40444__auto___45016]));

var G__45017 = (i__40444__auto___45016 + (1));
i__40444__auto___45016 = G__45017;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((2) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((2)),(0),null)):null);
return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__40451__auto__);
});

untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
var already_has_ident_at_path_QMARK_ = (function (data_path){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__44998_SHARP_){
return cljs.core._EQ_.call(null,p1__44998_SHARP_,ident);
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))));
});
var actions = cljs.core.partition.call(null,(2),named_parameters);
var seq__45003 = cljs.core.seq.call(null,actions);
var chunk__45004 = null;
var count__45005 = (0);
var i__45006 = (0);
while(true){
if((i__45006 < count__45005)){
var vec__45007 = cljs.core._nth.call(null,chunk__45004,i__45006);
var command = cljs.core.nth.call(null,vec__45007,(0),null);
var data_path = cljs.core.nth.call(null,vec__45007,(1),null);
var G__45010_45018 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__45010_45018) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for prepend must target an app-state vector.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,((function (seq__45003,chunk__45004,count__45005,i__45006,G__45010_45018,vec__45007,command,data_path,already_has_ident_at_path_QMARK_,actions){
return (function (p1__44999_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__44999_SHARP_);
});})(seq__45003,chunk__45004,count__45005,i__45006,G__45010_45018,vec__45007,command,data_path,already_has_ident_at_path_QMARK_,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for append must target an app-state vector.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector_45020 = cljs.core.butlast.call(null,data_path);
var to_many_QMARK__45021 = (cljs.core.seq.call(null,path_to_vector_45020)) && (cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_45020)));
var index_45022 = cljs.core.last.call(null,data_path);
var vector_45023 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_45020);
if(cljs.core.vector_QMARK_.call(null,data_path)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Replacement path must be a vector. You passed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? data-path)")].join('')));
}

if(to_many_QMARK__45021){
if(cljs.core.vector_QMARK_.call(null,vector_45023)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path for replacement must be a vector"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? vector)")].join('')));
}

if(typeof index_45022 === 'number'){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path for replacement must end in a vector index"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(number? index)")].join('')));
}

if(cljs.core.contains_QMARK_.call(null,vector_45023,index_45022)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target vector for replacement does not have an item at index "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_45022)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(contains? vector index)")].join('')));
}
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,data_path,ident);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}

var G__45024 = seq__45003;
var G__45025 = chunk__45004;
var G__45026 = count__45005;
var G__45027 = (i__45006 + (1));
seq__45003 = G__45024;
chunk__45004 = G__45025;
count__45005 = G__45026;
i__45006 = G__45027;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__45003);
if(temp__6753__auto__){
var seq__45003__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45003__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__45003__$1);
var G__45028 = cljs.core.chunk_rest.call(null,seq__45003__$1);
var G__45029 = c__40133__auto__;
var G__45030 = cljs.core.count.call(null,c__40133__auto__);
var G__45031 = (0);
seq__45003 = G__45028;
chunk__45004 = G__45029;
count__45005 = G__45030;
i__45006 = G__45031;
continue;
} else {
var vec__45011 = cljs.core.first.call(null,seq__45003__$1);
var command = cljs.core.nth.call(null,vec__45011,(0),null);
var data_path = cljs.core.nth.call(null,vec__45011,(1),null);
var G__45014_45032 = (((command instanceof cljs.core.Keyword))?command.fqn:null);
switch (G__45014_45032) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for prepend must target an app-state vector.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,((function (seq__45003,chunk__45004,count__45005,i__45006,G__45014_45032,vec__45011,command,data_path,seq__45003__$1,temp__6753__auto__,already_has_ident_at_path_QMARK_,actions){
return (function (p1__44999_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__44999_SHARP_);
});})(seq__45003,chunk__45004,count__45005,i__45006,G__45014_45032,vec__45011,command,data_path,seq__45003__$1,temp__6753__auto__,already_has_ident_at_path_QMARK_,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_.call(null,data_path))){
} else {
if(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),data_path))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for append must target an app-state vector.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? (get-in (clojure.core/deref state) data-path))")].join('')));
}

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector_45034 = cljs.core.butlast.call(null,data_path);
var to_many_QMARK__45035 = (cljs.core.seq.call(null,path_to_vector_45034)) && (cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_45034)));
var index_45036 = cljs.core.last.call(null,data_path);
var vector_45037 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path_to_vector_45034);
if(cljs.core.vector_QMARK_.call(null,data_path)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Replacement path must be a vector. You passed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? data-path)")].join('')));
}

if(to_many_QMARK__45035){
if(cljs.core.vector_QMARK_.call(null,vector_45037)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path for replacement must be a vector"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? vector)")].join('')));
}

if(typeof index_45036 === 'number'){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Path for replacement must end in a vector index"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(number? index)")].join('')));
}

if(cljs.core.contains_QMARK_.call(null,vector_45037,index_45036)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target vector for replacement does not have an item at index "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_45036)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(contains? vector index)")].join('')));
}
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,data_path,ident);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"arg","arg",-1747261837),data_path], null));

}

var G__45038 = cljs.core.next.call(null,seq__45003__$1);
var G__45039 = null;
var G__45040 = (0);
var G__45041 = (0);
seq__45003 = G__45038;
chunk__45004 = G__45039;
count__45005 = G__45040;
i__45006 = G__45041;
continue;
}
} else {
return null;
}
}
break;
}
});

untangled.client.core.integrate_ident_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.core.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq45000){
var G__45001 = cljs.core.first.call(null,seq45000);
var seq45000__$1 = cljs.core.next.call(null,seq45000);
var G__45002 = cljs.core.first.call(null,seq45000__$1);
var seq45000__$2 = cljs.core.next.call(null,seq45000__$1);
return untangled.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45001,G__45002,seq45000__$2);
});

/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and place the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spot in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Untangled: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   - app-or-reconciler: The Untangled application or Om reconciler
 *   - component: The class of the component that corresponsds to the data. Must have an ident.
 *   - object-data: A map (tree) of data to merge. Will be normalized for you.
 *   - named-parameter: Post-processing ident integration steps. see integrate-ident!
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 *   
 */
untangled.client.core.merge_state_BANG_ = (function untangled$client$core$merge_state_BANG_(var_args){
var args__40450__auto__ = [];
var len__40443__auto___45050 = arguments.length;
var i__40444__auto___45051 = (0);
while(true){
if((i__40444__auto___45051 < len__40443__auto___45050)){
args__40450__auto__.push((arguments[i__40444__auto___45051]));

var G__45052 = (i__40444__auto___45051 + (1));
i__40444__auto___45051 = G__45052;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((3) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((3)),(0),null)):null);
return untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40451__auto__);
});

untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_reconciler,component,object_data,named_parameters){
if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$Ident$)))?true:false):false)){
} else {
untangled.client.logging.warn.call(null,"merge-state!: component must implement Ident");
}

var ident = untangled.client.core.get_class_ident.call(null,component,object_data);
var reconciler = ((((!((app_or_reconciler == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_reconciler.untangled$client$core$UntangledApplication$)))?true:false):false))?new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_or_reconciler):app_or_reconciler);
var state = om.next.app_state.call(null,reconciler);
var data_path_keys = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),named_parameters))))));
var map__45047 = untangled.client.core.preprocess_merge.call(null,state,component,object_data);
var map__45047__$1 = ((((!((map__45047 == null)))?((((map__45047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45047):map__45047);
var merge_data = cljs.core.get.call(null,map__45047__$1,new cljs.core.Keyword(null,"merge-data","merge-data",1760143734));
var merge_query = cljs.core.get.call(null,map__45047__$1,new cljs.core.Keyword(null,"merge-query","merge-query",610171663));
om.next.merge_BANG_.call(null,reconciler,merge_data,merge_query);

cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword("untangled","merge","untangled/merge",-1701523677));

cljs.core.apply.call(null,untangled.client.core.integrate_ident_BANG_,state,ident,named_parameters);

om.next.protocols.queue_BANG_.call(null,reconciler,data_path_keys);

return cljs.core.deref.call(null,state);
});

untangled.client.core.merge_state_BANG_.cljs$lang$maxFixedArity = (3);

untangled.client.core.merge_state_BANG_.cljs$lang$applyTo = (function (seq45042){
var G__45043 = cljs.core.first.call(null,seq45042);
var seq45042__$1 = cljs.core.next.call(null,seq45042);
var G__45044 = cljs.core.first.call(null,seq45042__$1);
var seq45042__$2 = cljs.core.next.call(null,seq45042__$1);
var G__45045 = cljs.core.first.call(null,seq45042__$2);
var seq45042__$3 = cljs.core.next.call(null,seq45042__$2);
return untangled.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45043,G__45044,G__45045,seq45042__$3);
});


//# sourceMappingURL=core.js.map?rel=1491695657305