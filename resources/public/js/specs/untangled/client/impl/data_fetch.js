// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.data_fetch');
goog.require('cljs.core');
goog.require('om.next.impl.parser');
goog.require('om.next');
goog.require('om.next.protocols');
goog.require('om.util');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.om_plumbing');
goog.require('untangled.dom');
goog.require('cljs_uuid_utils.core');









/**
 * Test if the given bit of state is a data fetch state-tracking marker
 */
untangled.client.impl.data_fetch.data_state_QMARK_ = (function untangled$client$impl$data_fetch$data_state_QMARK_(state){
return cljs.core.contains_QMARK_.call(null,state,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040));
});
var is_kind_QMARK_ = (function untangled$client$impl$data_fetch$is_kind_QMARK_(state,type){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_state_QMARK_.call(null,state))){
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040).cljs$core$IFn$_invoke$arity$1(state));
} else {
return false;
}
});
/**
 * Test if the given item is a data state marker that is in the ready state
 */
untangled.client.impl.data_fetch.ready_QMARK_ = (function untangled$client$impl$data_fetch$ready_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795));
});

/**
 * Test if the given item is a data state marker in the loading state
 */
untangled.client.impl.data_fetch.loading_QMARK_ = (function untangled$client$impl$data_fetch$loading_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189));
});

/**
 * Test if the given item is a data state marker in the failed state
 */
untangled.client.impl.data_fetch.failed_QMARK_ = (function untangled$client$impl$data_fetch$failed_QMARK_(state){
return is_kind_QMARK_.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762));
});
/**
 * Place load markers in the app state at their data paths so that UI rendering can see them.
 */
untangled.client.impl.data_fetch.place_load_markers = (function untangled$client$impl$data_fetch$place_load_markers(state_atom,items_to_load){
var seq__51284 = cljs.core.seq.call(null,items_to_load);
var chunk__51285 = null;
var count__51286 = (0);
var i__51287 = (0);
while(true){
if((i__51287 < count__51286)){
var item = cljs.core._nth.call(null,chunk__51285,i__51287);
var i_51288 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_51289 = ((function (seq__51284,chunk__51285,count__51286,i__51287,i_51288,item){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_51288))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_51288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_51288], null));
} else {
return state;
}
});})(seq__51284,chunk__51285,count__51286,i__51287,i_51288,item))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__51284,chunk__51285,count__51286,i__51287,i_51288,place_marker_51289,item){
return (function (s){
return cljs.core.update.call(null,place_marker_51289.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_51288));
});})(seq__51284,chunk__51285,count__51286,i__51287,i_51288,place_marker_51289,item))
);

var G__51290 = seq__51284;
var G__51291 = chunk__51285;
var G__51292 = count__51286;
var G__51293 = (i__51287 + (1));
seq__51284 = G__51290;
chunk__51285 = G__51291;
count__51286 = G__51292;
i__51287 = G__51293;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51284);
if(temp__6753__auto__){
var seq__51284__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51284__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51284__$1);
var G__51294 = cljs.core.chunk_rest.call(null,seq__51284__$1);
var G__51295 = c__35466__auto__;
var G__51296 = cljs.core.count.call(null,c__35466__auto__);
var G__51297 = (0);
seq__51284 = G__51294;
chunk__51285 = G__51295;
count__51286 = G__51296;
i__51287 = G__51297;
continue;
} else {
var item = cljs.core.first.call(null,seq__51284__$1);
var i_51298 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_51299 = ((function (seq__51284,chunk__51285,count__51286,i__51287,i_51298,item,seq__51284__$1,temp__6753__auto__){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_51298))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_51298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_51298], null));
} else {
return state;
}
});})(seq__51284,chunk__51285,count__51286,i__51287,i_51298,item,seq__51284__$1,temp__6753__auto__))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__51284,chunk__51285,count__51286,i__51287,i_51298,place_marker_51299,item,seq__51284__$1,temp__6753__auto__){
return (function (s){
return cljs.core.update.call(null,place_marker_51299.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_51298));
});})(seq__51284,chunk__51285,count__51286,i__51287,i_51298,place_marker_51299,item,seq__51284__$1,temp__6753__auto__))
);

var G__51300 = cljs.core.next.call(null,seq__51284__$1);
var G__51301 = null;
var G__51302 = (0);
var G__51303 = (0);
seq__51284 = G__51300;
chunk__51285 = G__51301;
count__51286 = G__51302;
i__51287 = G__51303;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and return maps with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_parallel_loading = (function untangled$client$impl$data_fetch$mark_parallel_loading(remote_name,reconciler){
var state = om.next.app_state.call(null,reconciler);
var queued_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257));
var is_eligible_QMARK_ = ((function (state,queued_items){
return (function (item){
var and__34543__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core._EQ_.call(null,remote_name,untangled.client.impl.data_fetch.data_remote.call(null,item));
} else {
return and__34543__auto__;
}
});})(state,queued_items))
;
var other_items_loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
var items_to_load = cljs.core.filter.call(null,is_eligible_QMARK_,queued_items);
var remaining_items = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,is_eligible_QMARK_),queued_items);
var loading_QMARK_ = (cljs.core.seq.call(null,items_to_load)) || (other_items_loading_QMARK_);
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_,new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257),remaining_items);

var iter__35417__auto__ = ((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__51308(s__51309){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function (){
var s__51309__$1 = s__51309;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__51309__$1);
if(temp__6753__auto__){
var s__51309__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51309__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__51309__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__51311 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__51310 = (0);
while(true){
if((i__51310 < size__35416__auto__)){
var item = cljs.core._nth.call(null,c__35415__auto__,i__51310);
cljs.core.chunk_append.call(null,b__51311,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__51312 = (i__51310 + (1));
i__51310 = G__51312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51311),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__51308.call(null,cljs.core.chunk_rest.call(null,s__51309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51311),null);
}
} else {
var item = cljs.core.first.call(null,s__51309__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__51308.call(null,cljs.core.rest.call(null,s__51309__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_))
,null,null));
});})(state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_))
;
return iter__35417__auto__.call(null,items_to_load);
}
});
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
untangled.client.impl.data_fetch.dedupe_by = (function untangled$client$impl$data_fetch$dedupe_by(var_args){
var args51313 = [];
var len__35776__auto___51316 = arguments.length;
var i__35777__auto___51317 = (0);
while(true){
if((i__35777__auto___51317 < len__35776__auto___51316)){
args51313.push((arguments[i__35777__auto___51317]));

var G__51318 = (i__35777__auto___51317 + (1));
i__35777__auto___51317 = G__51318;
continue;
} else {
}
break;
}

var G__51315 = args51313.length;
switch (G__51315) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51313.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__51320 = null;
var G__51320__0 = (function (){
return rf.call(null);
});
var G__51320__1 = (function (result){
return rf.call(null,result);
});
var G__51320__2 = (function (result,input){
var input_keys = cljs.core.set.call(null,keys_fn.call(null,input));
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.deref.call(null,keys_seen),input_keys))){
cljs.core._vreset_BANG_.call(null,keys_seen,clojure.set.union.call(null,cljs.core._deref.call(null,keys_seen),input_keys));

return rf.call(null,result,input);
} else {
return result;
}
});
G__51320 = function(result,input){
switch(arguments.length){
case 0:
return G__51320__0.call(this);
case 1:
return G__51320__1.call(this,result);
case 2:
return G__51320__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51320.cljs$core$IFn$_invoke$arity$0 = G__51320__0;
G__51320.cljs$core$IFn$_invoke$arity$1 = G__51320__1;
G__51320.cljs$core$IFn$_invoke$arity$2 = G__51320__2;
return G__51320;
})()
;})(keys_seen))
});
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (keys_fn,coll){
return cljs.core.sequence.call(null,untangled.client.impl.data_fetch.dedupe_by.call(null,keys_fn),coll);
});

untangled.client.impl.data_fetch.dedupe_by.cljs$lang$maxFixedArity = 2;

untangled.client.impl.data_fetch.join_key_or_nil = (function untangled$client$impl$data_fetch$join_key_or_nil(expr){
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var join_key_or_ident = om.util.join_key.call(null,expr);
if(om.util.ident_QMARK_.call(null,join_key_or_ident)){
return cljs.core.first.call(null,join_key_or_ident);
} else {
return join_key_or_ident;
}
} else {
return null;
}
});
/**
 * This function is used to split accidental colliding queries into separate network
 *   requests. The most general description of this issue is
 *   from two unrelated `load` calls when black-box composing functions. The two
 *   separate queries: One issues `[{:entitlements [:foo]}]`, and the other
 *   asks for `[{:entitlements [:bar]}]`. Untangled merges these into a single query
 *   [{:entitlements [:foo]} {:entitlements [:bar]}]. However, the response to a query
 *   is a map, and such a query would result in the backend parser being called twice (once per key in the subquery)
 *   but one would stomp on the other. Thus, this function ensures such accidental collisions are
 *   not combined into a single network request.
 */
untangled.client.impl.data_fetch.split_items_ready_to_load = (function untangled$client$impl$data_fetch$split_items_ready_to_load(items_ready_to_load){
var items_to_load_now = cljs.core.set.call(null,untangled.client.impl.data_fetch.dedupe_by.call(null,(function (item){
return cljs.core.map.call(null,untangled.client.impl.data_fetch.join_key_or_nil,untangled.client.impl.data_fetch.data_query.call(null,item));
}),items_ready_to_load));
var items_to_defer = cljs.core.vec.call(null,cljs.core.remove.call(null,items_to_load_now,items_ready_to_load));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_to_load_now,items_to_defer], null);
});
/**
 * Marks all of the items in the ready-to-load state as loading, places the loading markers in the appropriate locations
 *   in the app state, and returns a map with the keys:
 * 
 *   `query` : The full query to send to the server.
 *   `on-load` : The function to call to merge a response. Detects missing data and sets failure markers for those.
 *   `on-error` : The function to call to set network/server error(s) in place of loading markers.
 *   `load-descriptors` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_loading = (function untangled$client$impl$data_fetch$mark_loading(remote,reconciler){
var state = om.next.app_state.call(null,reconciler);
var is_eligible_QMARK_ = ((function (state){
return (function (item){
return cljs.core._EQ_.call(null,remote,untangled.client.impl.data_fetch.data_remote.call(null,item));
});})(state))
;
var all_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257));
var items_ready_to_load = cljs.core.filter.call(null,is_eligible_QMARK_,all_items);
var items_for_other_remotes = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,is_eligible_QMARK_),all_items);
var other_items_loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
var vec__51324 = untangled.client.impl.data_fetch.split_items_ready_to_load.call(null,items_ready_to_load);
var items_to_load_now = cljs.core.nth.call(null,vec__51324,(0),null);
var items_to_defer = cljs.core.nth.call(null,vec__51324,(1),null);
var remaining_items = cljs.core.concat.call(null,items_for_other_remotes,items_to_defer);
var loading_QMARK_ = (cljs.core.seq.call(null,items_to_load_now)) || (other_items_loading_QMARK_);
if(cljs.core.empty_QMARK_.call(null,items_to_load_now)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load_now);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_,new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257),remaining_items);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,items_to_load_now),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681),items_to_load_now], null);
}
});
untangled.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
untangled.client.impl.data_fetch.make_data_state = (function untangled$client$impl$data_fetch$make_data_state(var_args){
var args51327 = [];
var len__35776__auto___51330 = arguments.length;
var i__35777__auto___51331 = (0);
while(true){
if((i__35777__auto___51331 < len__35776__auto___51330)){
args51327.push((arguments[i__35777__auto___51331]));

var G__51332 = (i__35777__auto___51331 + (1));
i__35777__auto___51331 = G__51332;
continue;
} else {
}
break;
}

var G__51329 = args51327.length;
switch (G__51329) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51327.length)].join('')));

}
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1 = (function (type){
return untangled.client.impl.data_fetch.make_data_state.call(null,type,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
if(cljs.core.truth_(cljs.core.get.call(null,untangled.client.impl.data_fetch.valid_types,type))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("INVALID DATA STATE TYPE: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

untangled.client.impl.data_fetch.make_data_state.cljs$lang$maxFixedArity = 2;

/**
 * Get the query for items that are ready to load into the given app state. Can be called any number of times
 *   (side effect free).
 */
untangled.client.impl.data_fetch.get_ready_query = (function untangled$client$impl$data_fetch$get_ready_query(state){
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
return om.next.impl.parser.expr__GT_ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items-to-load","items-to-load",-1811352068),cljs.core.vec.call(null,cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_query,items_to_load))], null));
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__51335,elision_set){
var map__51338 = p__51335;
var map__51338__$1 = ((((!((map__51338 == null)))?((((map__51338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51338):map__51338);
var ast = map__51338__$1;
var key = cljs.core.get.call(null,map__51338__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.call(null,map__51338__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.call(null,map__51338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = cljs.core.contains_QMARK_.call(null,elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_.call(null,elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count.call(null,children) <= (2)))){
untangled.client.logging.warn.call(null,"Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.call(null,union_key));
} else {
}

return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__51338,map__51338__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (union_elision_QMARK_,map__51338,map__51338__$1,ast,key,union_key,children){
return (function (p1__51334_SHARP_){
return untangled.client.impl.data_fetch.elide_ast_nodes.call(null,p1__51334_SHARP_,elision_set);
});})(union_elision_QMARK_,map__51338,map__51338__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__51338,map__51338__$1,ast,key,union_key,children))
);
}
});
/**
 * Inject parameters into elements of the top-level query.
 * 
 *   `params` is a map from keyword (on the query in the AST) to parameter maps. So, given the AST for this query:
 * 
 *   ```
 *   [:a :b :c]
 *   ```
 * 
 *   and a `params` of `{:a {:x 1} :c {:y 2}}` you'll get an AST representing:
 * 
 *   ```
 *   [(:a {:x 1}) :b (:c {:y 2})]
 *   ```
 *   
 */
untangled.client.impl.data_fetch.inject_query_params = (function untangled$client$impl$data_fetch$inject_query_params(ast,params){
var top_level_keys = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
var param_keys = cljs.core.set.call(null,cljs.core.keys.call(null,params));
var unknown_keys = clojure.set.difference.call(null,param_keys,top_level_keys);
if(!(cljs.core.empty_QMARK_.call(null,unknown_keys))){
untangled.client.logging.error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error: You attempted to add parameters for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,unknown_keys)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to top-level key(s) of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,om.next.ast__GT_query.call(null,ast)))].join(''));
} else {
}

return cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),((function (top_level_keys,param_keys,unknown_keys){
return (function (p1__51340_SHARP_){
return cljs.core.map.call(null,((function (top_level_keys,param_keys,unknown_keys){
return (function (c){
var temp__6751__auto__ = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.truth_(temp__6751__auto__)){
var new_params = temp__6751__auto__;
return cljs.core.update.call(null,c,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge,new_params);
} else {
return c;
}
});})(top_level_keys,param_keys,unknown_keys))
,p1__51340_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__51341){
var map__51345 = p__51341;
var map__51345__$1 = ((((!((map__51345 == null)))?((((map__51345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51345):map__51345);
var target = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"target","target",253001721));
var query = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var remote = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var refresh = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var post_mutation_params = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
if(cljs.core.truth_((function (){var or__34555__auto__ = field;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("You must supply a query or a field/ident pair"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or field query)")].join('')));
}

if(cljs.core.truth_((function (){var or__34555__auto__ = cljs.core.not.call(null,field);
if(or__34555__auto__){
return or__34555__auto__;
} else {
var and__34543__auto__ = field;
if(cljs.core.truth_(and__34543__auto__)){
return om.util.ident_QMARK_.call(null,ident);
} else {
return and__34543__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Field requires ident"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not field) (and field (util/ident? ident)))")].join('')));
}

var old_ast = om.next.query__GT_ast.call(null,query);
var ast = (function (){var G__51347 = old_ast;
var G__51347__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__51347,without):G__51347);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__51347__$1,params);
} else {
return G__51347__$1;
}
})();
var query_field = cljs.core.first.call(null,query);
var key = (cljs.core.truth_(om.util.join_QMARK_.call(null,query_field))?om.util.join_key.call(null,query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query.call(null,ast);
if((cljs.core.not.call(null,field)) || (cljs.core._EQ_.call(null,field,key))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Component fetch query does not match supplied field."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not field) (= field key))")].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971),new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083),new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382),new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555),new cljs.core.Keyword("untangled.client.impl.data-fetch","remote","untangled.client.impl.data-fetch/remote",2143699060),new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536),new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519),new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083),new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213)],[post_mutation,parallel,marker,new cljs.core.Keyword(null,"ready","ready",1086465795),ident,post_mutation_params,remote,fallback,query_SINGLEQUOTE_,field,refresh,target,cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null))]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load-data` and `load-field` functions in `untangled.client.data-fetch` for the public API.
 */
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__51348){
var map__51351 = p__51348;
var map__51351__$1 = ((((!((map__51351 == null)))?((((map__51351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51351):map__51351);
var config = map__51351__$1;
var state = cljs.core.get.call(null,map__51351__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),untangled.client.impl.data_fetch.ready_state.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config)));
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_target = (function untangled$client$impl$data_fetch$data_target(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Return the ident (if any) of the component related to the query in the data state marker. An ident is required
 *   to be present if the marker is targeting a field.
 */
untangled.client.impl.data_fetch.data_ident = (function untangled$client$impl$data_fetch$data_ident(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the query that will be sent to the server as a result of the given data state marker
 */
untangled.client.impl.data_fetch.data_query = (function untangled$client$impl$data_fetch$data_query(state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_ident.call(null,state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([untangled.client.impl.data_fetch.data_ident.call(null,state),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state)])], null);
} else {
return new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state);
}
});
/**
 * Get the target field (if any) from the data state marker
 */
untangled.client.impl.data_fetch.data_field = (function untangled$client$impl$data_fetch$data_field(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the UUID of the data fetch
 */
untangled.client.impl.data_fetch.data_uuid = (function untangled$client$impl$data_fetch$data_uuid(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Test if the user desires a copy of the state marker to appear in the app state at the data path of the target data.
 */
untangled.client.impl.data_fetch.data_marker_QMARK_ = (function untangled$client$impl$data_fetch$data_marker_QMARK_(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the list of query keywords that should be refreshed (re-rendered) when this load completes.
 */
untangled.client.impl.data_fetch.data_refresh = (function untangled$client$impl$data_fetch$data_refresh(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the remote that this marker is meant to talk to
 */
untangled.client.impl.data_fetch.data_remote = (function untangled$client$impl$data_fetch$data_remote(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","remote","untangled.client.impl.data-fetch/remote",2143699060).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the 'primary' query key of the data fetch. This is defined as the first keyword of the overall query (which might
 *   be a simple prop or join key for example)
 */
untangled.client.impl.data_fetch.data_query_key = (function untangled$client$impl$data_fetch$data_query_key(state){
var ast = om.next.query__GT_ast.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122).cljs$core$IFn$_invoke$arity$1(state));
var node = cljs.core.first.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(node);
});
/**
 * Get the app-state database path of the target of the load that the given data state marker is trying to load.
 */
untangled.client.impl.data_fetch.data_path = (function untangled$client$impl$data_fetch$data_path(state){
var target = untangled.client.impl.data_fetch.data_target.call(null,state);
if(cljs.core.truth_((function (){var and__34543__auto__ = cljs.core.vector_QMARK_.call(null,target);
if(and__34543__auto__){
return cljs.core.not_empty.call(null,target);
} else {
return and__34543__auto__;
}
})())){
return target;
} else {
if((cljs.core.vector_QMARK_.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state))) && ((untangled.client.impl.data_fetch.data_field.call(null,state) instanceof cljs.core.Keyword))){
return cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_ident.call(null,state),untangled.client.impl.data_fetch.data_field.call(null,state));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,state)], null);

}
}
});
/**
 * Get the parameters that the user wants to add to the first join/keyword of the data fetch query.
 */
untangled.client.impl.data_fetch.data_params = (function untangled$client$impl$data_fetch$data_params(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Get the keywords that should be (recursively) removed from the query that will be sent to the server.
 */
untangled.client.impl.data_fetch.data_exclusions = (function untangled$client$impl$data_fetch$data_exclusions(state){
return new cljs.core.Keyword("untangled.client.impl.data-fetch","without","untangled.client.impl.data-fetch/without",716864332).cljs$core$IFn$_invoke$arity$1(state);
});
var set_type = (function untangled$client$impl$data_fetch$set_type(state,type,params){
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),type,new cljs.core.Keyword("untangled.client.impl.data-fetch","params","untangled.client.impl.data-fetch/params",194531151),params], null));
});
/**
 * Returns a state (based on the input state) that is in the 'ready' to load state.
 */
untangled.client.impl.data_fetch.set_ready_BANG_ = (function untangled$client$impl$data_fetch$set_ready_BANG_(var_args){
var args51353 = [];
var len__35776__auto___51362 = arguments.length;
var i__35777__auto___51363 = (0);
while(true){
if((i__35777__auto___51363 < len__35776__auto___51362)){
args51353.push((arguments[i__35777__auto___51363]));

var G__51364 = (i__35777__auto___51363 + (1));
i__35777__auto___51363 = G__51364;
continue;
} else {
}
break;
}

var G__51355 = args51353.length;
switch (G__51355) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51353.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_ready_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"ready","ready",1086465795),params);
});

untangled.client.impl.data_fetch.set_ready_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the loading state (and ensures that it has a UUID)
 */
untangled.client.impl.data_fetch.set_loading_BANG_ = (function untangled$client$impl$data_fetch$set_loading_BANG_(var_args){
var args51356 = [];
var len__35776__auto___51366 = arguments.length;
var i__35777__auto___51367 = (0);
while(true){
if((i__35777__auto___51367 < len__35776__auto___51366)){
args51356.push((arguments[i__35777__auto___51367]));

var G__51368 = (i__35777__auto___51367 + (1));
i__35777__auto___51367 = G__51368;
continue;
} else {
}
break;
}

var G__51358 = args51356.length;
switch (G__51358) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51356.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_loading_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
var rv = set_type.call(null,state,new cljs.core.Keyword(null,"loading","loading",-737050189),params);
return cljs.core.with_meta.call(null,rv,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),rv], null));
});

untangled.client.impl.data_fetch.set_loading_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Returns a marker (based on the input state) that is in the error state
 */
untangled.client.impl.data_fetch.set_failed_BANG_ = (function untangled$client$impl$data_fetch$set_failed_BANG_(var_args){
var args51359 = [];
var len__35776__auto___51370 = arguments.length;
var i__35777__auto___51371 = (0);
while(true){
if((i__35777__auto___51371 < len__35776__auto___51370)){
args51359.push((arguments[i__35777__auto___51371]));

var G__51372 = (i__35777__auto___51371 + (1));
i__35777__auto___51371 = G__51372;
continue;
} else {
}
break;
}

var G__51361 = args51359.length;
switch (G__51361) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51359.length)].join('')));

}
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return untangled.client.impl.data_fetch.set_failed_BANG_.call(null,state,null);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,params){
return set_type.call(null,state,new cljs.core.Keyword(null,"failed","failed",-1397425762),params);
});

untangled.client.impl.data_fetch.set_failed_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Composes together the queries of a sequence of data states into a single query.
 */
untangled.client.impl.data_fetch.full_query = (function untangled$client$impl$data_fetch$full_query(items){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (item){
return untangled.client.impl.data_fetch.data_query.call(null,item);
}),items));
});
untangled.client.impl.data_fetch.set_global_loading = (function untangled$client$impl$data_fetch$set_global_loading(reconciler){

var state_atom = om.next.app_state.call(null,reconciler);
var loading_QMARK_ = cljs.core.boolean$.call(null,cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825))));
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),loading_QMARK_);
});
/**
 * For items that are manually targeted, move them in app state from their result location to their target location.
 */
untangled.client.impl.data_fetch.relocate_targeted_results = (function untangled$client$impl$data_fetch$relocate_targeted_results(state_atom,items){
var seq__51378 = cljs.core.seq.call(null,items);
var chunk__51379 = null;
var count__51380 = (0);
var i__51381 = (0);
while(true){
if((i__51381 < count__51380)){
var item = cljs.core._nth.call(null,chunk__51379,i__51381);
var default_target_51382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_51383 = cljs.core.conj.call(null,(function (){var or__34555__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_51384 = (function (){var or__34555__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__51385 = (function (){var and__34543__auto__ = cljs.core.not_empty.call(null,explicit_target_51384);
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_51384,field_target_51383)) && (cljs.core.not_EQ_.call(null,explicit_target_51384,default_target_51382));
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__51385)){
var value_51386 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_51382);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__51378,chunk__51379,count__51380,i__51381,value_51386,default_target_51382,field_target_51383,explicit_target_51384,relocate_QMARK__51385,item){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_51384,value_51386);
});})(seq__51378,chunk__51379,count__51380,i__51381,value_51386,default_target_51382,field_target_51383,explicit_target_51384,relocate_QMARK__51385,item))
);
} else {
}

var G__51387 = seq__51378;
var G__51388 = chunk__51379;
var G__51389 = count__51380;
var G__51390 = (i__51381 + (1));
seq__51378 = G__51387;
chunk__51379 = G__51388;
count__51380 = G__51389;
i__51381 = G__51390;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51378);
if(temp__6753__auto__){
var seq__51378__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51378__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51378__$1);
var G__51391 = cljs.core.chunk_rest.call(null,seq__51378__$1);
var G__51392 = c__35466__auto__;
var G__51393 = cljs.core.count.call(null,c__35466__auto__);
var G__51394 = (0);
seq__51378 = G__51391;
chunk__51379 = G__51392;
count__51380 = G__51393;
i__51381 = G__51394;
continue;
} else {
var item = cljs.core.first.call(null,seq__51378__$1);
var default_target_51395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_51396 = cljs.core.conj.call(null,(function (){var or__34555__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_51397 = (function (){var or__34555__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__51398 = (function (){var and__34543__auto__ = cljs.core.not_empty.call(null,explicit_target_51397);
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_51397,field_target_51396)) && (cljs.core.not_EQ_.call(null,explicit_target_51397,default_target_51395));
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__51398)){
var value_51399 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_51395);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__51378,chunk__51379,count__51380,i__51381,value_51399,default_target_51395,field_target_51396,explicit_target_51397,relocate_QMARK__51398,item,seq__51378__$1,temp__6753__auto__){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_51397,value_51399);
});})(seq__51378,chunk__51379,count__51380,i__51381,value_51399,default_target_51395,field_target_51396,explicit_target_51397,relocate_QMARK__51398,item,seq__51378__$1,temp__6753__auto__))
);
} else {
}

var G__51400 = cljs.core.next.call(null,seq__51378__$1);
var G__51401 = null;
var G__51402 = (0);
var G__51403 = (0);
seq__51378 = G__51400;
chunk__51379 = G__51401;
count__51380 = G__51402;
i__51381 = G__51403;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Generates a callback that processes all of the post-processing steps once a remote load has completed. This includes:
 * 
 *   - Marking the items that were queries for but not returned as 'missing' (see documentation on mark and sweep of db)
 *   - Refreshing elements of the UI that were included in the data fetch :refresh option
 *   - Removing loading markers related to the executed loads that were not overwritten by incoming data
 *   - Merging the incoming data into the normalized database
 *   - Running post-mutations for any fetches that completed
 *   - Updating the global loading marker
 *   - Forcing a global re-render if post-mutations ran (may change in future versions)
 *   
 */
untangled.client.impl.data_fetch.loaded_callback = (function untangled$client$impl$data_fetch$loaded_callback(reconciler){
return (function (response,items){
var query = untangled.client.impl.data_fetch.full_query.call(null,items);
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var marked_response = untangled.client.impl.om_plumbing.mark_missing.call(null,response,query);
var app_state = om.next.app_state.call(null,reconciler);
var ran_mutations = cljs.core.atom.call(null,false);
var remove_markers = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (){
var seq__51416 = cljs.core.seq.call(null,loading_items);
var chunk__51417 = null;
var count__51418 = (0);
var i__51419 = (0);
while(true){
if((i__51419 < count__51418)){
var item = cljs.core._nth.call(null,chunk__51417,i__51419);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__51416,chunk__51417,count__51418,i__51419,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__51420 = s;
var G__51420__$1 = cljs.core.update.call(null,G__51420,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__51420__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__51420__$1;
}
});})(seq__51416,chunk__51417,count__51418,i__51419,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__51428 = seq__51416;
var G__51429 = chunk__51417;
var G__51430 = count__51418;
var G__51431 = (i__51419 + (1));
seq__51416 = G__51428;
chunk__51417 = G__51429;
count__51418 = G__51430;
i__51419 = G__51431;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51416);
if(temp__6753__auto__){
var seq__51416__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51416__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51416__$1);
var G__51432 = cljs.core.chunk_rest.call(null,seq__51416__$1);
var G__51433 = c__35466__auto__;
var G__51434 = cljs.core.count.call(null,c__35466__auto__);
var G__51435 = (0);
seq__51416 = G__51432;
chunk__51417 = G__51433;
count__51418 = G__51434;
i__51419 = G__51435;
continue;
} else {
var item = cljs.core.first.call(null,seq__51416__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__51416,chunk__51417,count__51418,i__51419,item,seq__51416__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__51421 = s;
var G__51421__$1 = cljs.core.update.call(null,G__51421,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__51421__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__51421__$1;
}
});})(seq__51416,chunk__51417,count__51418,i__51419,item,seq__51416__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__51436 = cljs.core.next.call(null,seq__51416__$1);
var G__51437 = null;
var G__51438 = (0);
var G__51439 = (0);
seq__51416 = G__51436;
chunk__51417 = G__51437;
count__51418 = G__51438;
i__51419 = G__51439;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
;
var run_post_mutations = ((function (query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers){
return (function (){
var seq__51422 = cljs.core.seq.call(null,loading_items);
var chunk__51423 = null;
var count__51424 = (0);
var i__51425 = (0);
while(true){
if((i__51425 < count__51424)){
var item = cljs.core._nth.call(null,chunk__51423,i__51425);
var temp__6753__auto___51440 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___51440)){
var mutation_symbol_51441 = temp__6753__auto___51440;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_51442 = (function (){var or__34555__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__51426_51443 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_51441,params_51442);
var G__51426_51444__$1 = (((G__51426_51443 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51426_51443));
if((G__51426_51444__$1 == null)){
} else {
cljs.core.apply.call(null,G__51426_51444__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__51445 = seq__51422;
var G__51446 = chunk__51423;
var G__51447 = count__51424;
var G__51448 = (i__51425 + (1));
seq__51422 = G__51445;
chunk__51423 = G__51446;
count__51424 = G__51447;
i__51425 = G__51448;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51422);
if(temp__6753__auto__){
var seq__51422__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51422__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51422__$1);
var G__51449 = cljs.core.chunk_rest.call(null,seq__51422__$1);
var G__51450 = c__35466__auto__;
var G__51451 = cljs.core.count.call(null,c__35466__auto__);
var G__51452 = (0);
seq__51422 = G__51449;
chunk__51423 = G__51450;
count__51424 = G__51451;
i__51425 = G__51452;
continue;
} else {
var item = cljs.core.first.call(null,seq__51422__$1);
var temp__6753__auto___51453__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___51453__$1)){
var mutation_symbol_51454 = temp__6753__auto___51453__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_51455 = (function (){var or__34555__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__51427_51456 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_51454,params_51455);
var G__51427_51457__$1 = (((G__51427_51456 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51427_51456));
if((G__51427_51457__$1 == null)){
} else {
cljs.core.apply.call(null,G__51427_51457__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__51458 = cljs.core.next.call(null,seq__51422__$1);
var G__51459 = null;
var G__51460 = (0);
var G__51461 = (0);
seq__51422 = G__51458;
chunk__51423 = G__51459;
count__51424 = G__51460;
i__51425 = G__51461;
continue;
}
} else {
return null;
}
}
break;
}
});})(query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations,remove_markers))
;
remove_markers.call(null);

om.next.merge_BANG_.call(null,reconciler,marked_response,query);

untangled.client.impl.data_fetch.relocate_targeted_results.call(null,app_state,loading_items);

run_post_mutations.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});
/**
 * Generates a callback that is used whenever a hard server error occurs (status code 400+ or network error).
 * 
 *   The generated callback:
 * 
 *   - Replaces affected loading markers with error markers (if :marker is true on the load item)
 *   - Runs fallbacks associated with the loads
 *   - Sets the global error marker (:untangled/server-error)
 *   - Refreshes UI
 *   
 */
untangled.client.impl.data_fetch.error_callback = (function untangled$client$impl$data_fetch$error_callback(reconciler){
return (function (error,items){
var loading_items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.set_loading_BANG_,items));
var app_state = om.next.app_state.call(null,reconciler);
var refresh_set = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),null], null), null),cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_refresh,items));
var to_refresh = cljs.core.vec.call(null,refresh_set);
var ran_fallbacks = cljs.core.atom.call(null,false);
var mark_errors = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var seq__51474 = cljs.core.seq.call(null,loading_items);
var chunk__51475 = null;
var count__51476 = (0);
var i__51477 = (0);
while(true){
if((i__51477 < count__51476)){
var item = cljs.core._nth.call(null,chunk__51475,i__51477);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__51474,chunk__51475,count__51476,i__51477,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__51478 = s;
var G__51478__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__51478,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__51478);
return cljs.core.update.call(null,G__51478__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__51474,chunk__51475,count__51476,i__51477,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__51486 = seq__51474;
var G__51487 = chunk__51475;
var G__51488 = count__51476;
var G__51489 = (i__51477 + (1));
seq__51474 = G__51486;
chunk__51475 = G__51487;
count__51476 = G__51488;
i__51477 = G__51489;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51474);
if(temp__6753__auto__){
var seq__51474__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51474__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51474__$1);
var G__51490 = cljs.core.chunk_rest.call(null,seq__51474__$1);
var G__51491 = c__35466__auto__;
var G__51492 = cljs.core.count.call(null,c__35466__auto__);
var G__51493 = (0);
seq__51474 = G__51490;
chunk__51475 = G__51491;
count__51476 = G__51492;
i__51477 = G__51493;
continue;
} else {
var item = cljs.core.first.call(null,seq__51474__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__51474,chunk__51475,count__51476,i__51477,item,seq__51474__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__51479 = s;
var G__51479__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__51479,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__51479);
return cljs.core.update.call(null,G__51479__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__51474,chunk__51475,count__51476,i__51477,item,seq__51474__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__51494 = cljs.core.next.call(null,seq__51474__$1);
var G__51495 = null;
var G__51496 = (0);
var G__51497 = (0);
seq__51474 = G__51494;
chunk__51475 = G__51495;
count__51476 = G__51496;
i__51477 = G__51497;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
;
var run_fallbacks = ((function (loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors){
return (function (){
var seq__51480 = cljs.core.seq.call(null,loading_items);
var chunk__51481 = null;
var count__51482 = (0);
var i__51483 = (0);
while(true){
if((i__51483 < count__51482)){
var item = cljs.core._nth.call(null,chunk__51481,i__51483);
var temp__6753__auto___51498 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___51498)){
var fallback_symbol_51499 = temp__6753__auto___51498;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__51484_51500 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_51499,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__51484_51501__$1 = (((G__51484_51500 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51484_51500));
if((G__51484_51501__$1 == null)){
} else {
cljs.core.apply.call(null,G__51484_51501__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__51502 = seq__51480;
var G__51503 = chunk__51481;
var G__51504 = count__51482;
var G__51505 = (i__51483 + (1));
seq__51480 = G__51502;
chunk__51481 = G__51503;
count__51482 = G__51504;
i__51483 = G__51505;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51480);
if(temp__6753__auto__){
var seq__51480__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51480__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51480__$1);
var G__51506 = cljs.core.chunk_rest.call(null,seq__51480__$1);
var G__51507 = c__35466__auto__;
var G__51508 = cljs.core.count.call(null,c__35466__auto__);
var G__51509 = (0);
seq__51480 = G__51506;
chunk__51481 = G__51507;
count__51482 = G__51508;
i__51483 = G__51509;
continue;
} else {
var item = cljs.core.first.call(null,seq__51480__$1);
var temp__6753__auto___51510__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___51510__$1)){
var fallback_symbol_51511 = temp__6753__auto___51510__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__51485_51512 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_51511,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__51485_51513__$1 = (((G__51485_51512 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51485_51512));
if((G__51485_51513__$1 == null)){
} else {
cljs.core.apply.call(null,G__51485_51513__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__51514 = cljs.core.next.call(null,seq__51480__$1);
var G__51515 = null;
var G__51516 = (0);
var G__51517 = (0);
seq__51480 = G__51514;
chunk__51481 = G__51515;
count__51482 = G__51516;
i__51483 = G__51517;
continue;
}
} else {
return null;
}
}
break;
}
});})(loading_items,app_state,refresh_set,to_refresh,ran_fallbacks,mark_errors))
;
mark_errors.call(null);

om.next.merge_BANG_.call(null,reconciler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null)], null));

run_fallbacks.call(null);

untangled.client.impl.data_fetch.set_global_loading.call(null,reconciler);

if(cljs.core.contains_QMARK_.call(null,refresh_set,new cljs.core.Keyword("untangled","force-root","untangled/force-root",513707319))){
return untangled.dom.force_render.call(null,reconciler);
} else {
return untangled.dom.force_render.call(null,reconciler,to_refresh);
}
});
});

//# sourceMappingURL=data_fetch.js.map?rel=1491640764946