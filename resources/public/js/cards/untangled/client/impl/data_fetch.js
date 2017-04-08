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
var seq__82567 = cljs.core.seq.call(null,items_to_load);
var chunk__82568 = null;
var count__82569 = (0);
var i__82570 = (0);
while(true){
if((i__82570 < count__82569)){
var item = cljs.core._nth.call(null,chunk__82568,i__82570);
var i_82571 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_82572 = ((function (seq__82567,chunk__82568,count__82569,i__82570,i_82571,item){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_82571))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_82571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_82571], null));
} else {
return state;
}
});})(seq__82567,chunk__82568,count__82569,i__82570,i_82571,item))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__82567,chunk__82568,count__82569,i__82570,i_82571,place_marker_82572,item){
return (function (s){
return cljs.core.update.call(null,place_marker_82572.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_82571));
});})(seq__82567,chunk__82568,count__82569,i__82570,i_82571,place_marker_82572,item))
);

var G__82573 = seq__82567;
var G__82574 = chunk__82568;
var G__82575 = count__82569;
var G__82576 = (i__82570 + (1));
seq__82567 = G__82573;
chunk__82568 = G__82574;
count__82569 = G__82575;
i__82570 = G__82576;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82567);
if(temp__6753__auto__){
var seq__82567__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82567__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__82567__$1);
var G__82577 = cljs.core.chunk_rest.call(null,seq__82567__$1);
var G__82578 = c__35466__auto__;
var G__82579 = cljs.core.count.call(null,c__35466__auto__);
var G__82580 = (0);
seq__82567 = G__82577;
chunk__82568 = G__82578;
count__82569 = G__82579;
i__82570 = G__82580;
continue;
} else {
var item = cljs.core.first.call(null,seq__82567__$1);
var i_82581 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_82582 = ((function (seq__82567,chunk__82568,count__82569,i__82570,i_82581,item,seq__82567__$1,temp__6753__auto__){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_82581))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_82581),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_82581], null));
} else {
return state;
}
});})(seq__82567,chunk__82568,count__82569,i__82570,i_82581,item,seq__82567__$1,temp__6753__auto__))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__82567,chunk__82568,count__82569,i__82570,i_82581,place_marker_82582,item,seq__82567__$1,temp__6753__auto__){
return (function (s){
return cljs.core.update.call(null,place_marker_82582.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_82581));
});})(seq__82567,chunk__82568,count__82569,i__82570,i_82581,place_marker_82582,item,seq__82567__$1,temp__6753__auto__))
);

var G__82583 = cljs.core.next.call(null,seq__82567__$1);
var G__82584 = null;
var G__82585 = (0);
var G__82586 = (0);
seq__82567 = G__82583;
chunk__82568 = G__82584;
count__82569 = G__82585;
i__82570 = G__82586;
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
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__82591(s__82592){
return (new cljs.core.LazySeq(null,((function (state,queued_items,is_eligible_QMARK_,other_items_loading_QMARK_,items_to_load,remaining_items,loading_QMARK_){
return (function (){
var s__82592__$1 = s__82592;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__82592__$1);
if(temp__6753__auto__){
var s__82592__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82592__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__82592__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__82594 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__82593 = (0);
while(true){
if((i__82593 < size__35416__auto__)){
var item = cljs.core._nth.call(null,c__35415__auto__,i__82593);
cljs.core.chunk_append.call(null,b__82594,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__82595 = (i__82593 + (1));
i__82593 = G__82595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82594),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__82591.call(null,cljs.core.chunk_rest.call(null,s__82592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82594),null);
}
} else {
var item = cljs.core.first.call(null,s__82592__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__82591.call(null,cljs.core.rest.call(null,s__82592__$2)));
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
var args82596 = [];
var len__35776__auto___82599 = arguments.length;
var i__35777__auto___82600 = (0);
while(true){
if((i__35777__auto___82600 < len__35776__auto___82599)){
args82596.push((arguments[i__35777__auto___82600]));

var G__82601 = (i__35777__auto___82600 + (1));
i__35777__auto___82600 = G__82601;
continue;
} else {
}
break;
}

var G__82598 = args82596.length;
switch (G__82598) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82596.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__82603 = null;
var G__82603__0 = (function (){
return rf.call(null);
});
var G__82603__1 = (function (result){
return rf.call(null,result);
});
var G__82603__2 = (function (result,input){
var input_keys = cljs.core.set.call(null,keys_fn.call(null,input));
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.deref.call(null,keys_seen),input_keys))){
cljs.core._vreset_BANG_.call(null,keys_seen,clojure.set.union.call(null,cljs.core._deref.call(null,keys_seen),input_keys));

return rf.call(null,result,input);
} else {
return result;
}
});
G__82603 = function(result,input){
switch(arguments.length){
case 0:
return G__82603__0.call(this);
case 1:
return G__82603__1.call(this,result);
case 2:
return G__82603__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82603.cljs$core$IFn$_invoke$arity$0 = G__82603__0;
G__82603.cljs$core$IFn$_invoke$arity$1 = G__82603__1;
G__82603.cljs$core$IFn$_invoke$arity$2 = G__82603__2;
return G__82603;
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
var vec__82607 = untangled.client.impl.data_fetch.split_items_ready_to_load.call(null,items_ready_to_load);
var items_to_load_now = cljs.core.nth.call(null,vec__82607,(0),null);
var items_to_defer = cljs.core.nth.call(null,vec__82607,(1),null);
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
var args82610 = [];
var len__35776__auto___82613 = arguments.length;
var i__35777__auto___82614 = (0);
while(true){
if((i__35777__auto___82614 < len__35776__auto___82613)){
args82610.push((arguments[i__35777__auto___82614]));

var G__82615 = (i__35777__auto___82614 + (1));
i__35777__auto___82614 = G__82615;
continue;
} else {
}
break;
}

var G__82612 = args82610.length;
switch (G__82612) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82610.length)].join('')));

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
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__82618,elision_set){
var map__82621 = p__82618;
var map__82621__$1 = ((((!((map__82621 == null)))?((((map__82621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82621):map__82621);
var ast = map__82621__$1;
var key = cljs.core.get.call(null,map__82621__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.call(null,map__82621__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.call(null,map__82621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = cljs.core.contains_QMARK_.call(null,elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_.call(null,elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count.call(null,children) <= (2)))){
untangled.client.logging.warn.call(null,"Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.call(null,union_key));
} else {
}

return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__82621,map__82621__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (union_elision_QMARK_,map__82621,map__82621__$1,ast,key,union_key,children){
return (function (p1__82617_SHARP_){
return untangled.client.impl.data_fetch.elide_ast_nodes.call(null,p1__82617_SHARP_,elision_set);
});})(union_elision_QMARK_,map__82621,map__82621__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__82621,map__82621__$1,ast,key,union_key,children))
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
return (function (p1__82623_SHARP_){
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
,p1__82623_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__82624){
var map__82628 = p__82624;
var map__82628__$1 = ((((!((map__82628 == null)))?((((map__82628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82628):map__82628);
var target = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"target","target",253001721));
var query = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var remote = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var refresh = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var post_mutation_params = cljs.core.get.call(null,map__82628__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
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
var ast = (function (){var G__82630 = old_ast;
var G__82630__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__82630,without):G__82630);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__82630__$1,params);
} else {
return G__82630__$1;
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
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__82631){
var map__82634 = p__82631;
var map__82634__$1 = ((((!((map__82634 == null)))?((((map__82634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82634):map__82634);
var config = map__82634__$1;
var state = cljs.core.get.call(null,map__82634__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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
var args82636 = [];
var len__35776__auto___82645 = arguments.length;
var i__35777__auto___82646 = (0);
while(true){
if((i__35777__auto___82646 < len__35776__auto___82645)){
args82636.push((arguments[i__35777__auto___82646]));

var G__82647 = (i__35777__auto___82646 + (1));
i__35777__auto___82646 = G__82647;
continue;
} else {
}
break;
}

var G__82638 = args82636.length;
switch (G__82638) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82636.length)].join('')));

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
var args82639 = [];
var len__35776__auto___82649 = arguments.length;
var i__35777__auto___82650 = (0);
while(true){
if((i__35777__auto___82650 < len__35776__auto___82649)){
args82639.push((arguments[i__35777__auto___82650]));

var G__82651 = (i__35777__auto___82650 + (1));
i__35777__auto___82650 = G__82651;
continue;
} else {
}
break;
}

var G__82641 = args82639.length;
switch (G__82641) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82639.length)].join('')));

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
var args82642 = [];
var len__35776__auto___82653 = arguments.length;
var i__35777__auto___82654 = (0);
while(true){
if((i__35777__auto___82654 < len__35776__auto___82653)){
args82642.push((arguments[i__35777__auto___82654]));

var G__82655 = (i__35777__auto___82654 + (1));
i__35777__auto___82654 = G__82655;
continue;
} else {
}
break;
}

var G__82644 = args82642.length;
switch (G__82644) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82642.length)].join('')));

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
var seq__82661 = cljs.core.seq.call(null,items);
var chunk__82662 = null;
var count__82663 = (0);
var i__82664 = (0);
while(true){
if((i__82664 < count__82663)){
var item = cljs.core._nth.call(null,chunk__82662,i__82664);
var default_target_82665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_82666 = cljs.core.conj.call(null,(function (){var or__34555__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_82667 = (function (){var or__34555__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__82668 = (function (){var and__34543__auto__ = cljs.core.not_empty.call(null,explicit_target_82667);
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_82667,field_target_82666)) && (cljs.core.not_EQ_.call(null,explicit_target_82667,default_target_82665));
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__82668)){
var value_82669 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_82665);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__82661,chunk__82662,count__82663,i__82664,value_82669,default_target_82665,field_target_82666,explicit_target_82667,relocate_QMARK__82668,item){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_82667,value_82669);
});})(seq__82661,chunk__82662,count__82663,i__82664,value_82669,default_target_82665,field_target_82666,explicit_target_82667,relocate_QMARK__82668,item))
);
} else {
}

var G__82670 = seq__82661;
var G__82671 = chunk__82662;
var G__82672 = count__82663;
var G__82673 = (i__82664 + (1));
seq__82661 = G__82670;
chunk__82662 = G__82671;
count__82663 = G__82672;
i__82664 = G__82673;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82661);
if(temp__6753__auto__){
var seq__82661__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82661__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__82661__$1);
var G__82674 = cljs.core.chunk_rest.call(null,seq__82661__$1);
var G__82675 = c__35466__auto__;
var G__82676 = cljs.core.count.call(null,c__35466__auto__);
var G__82677 = (0);
seq__82661 = G__82674;
chunk__82662 = G__82675;
count__82663 = G__82676;
i__82664 = G__82677;
continue;
} else {
var item = cljs.core.first.call(null,seq__82661__$1);
var default_target_82678 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_82679 = cljs.core.conj.call(null,(function (){var or__34555__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_82680 = (function (){var or__34555__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__82681 = (function (){var and__34543__auto__ = cljs.core.not_empty.call(null,explicit_target_82680);
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_82680,field_target_82679)) && (cljs.core.not_EQ_.call(null,explicit_target_82680,default_target_82678));
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__82681)){
var value_82682 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_82678);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__82661,chunk__82662,count__82663,i__82664,value_82682,default_target_82678,field_target_82679,explicit_target_82680,relocate_QMARK__82681,item,seq__82661__$1,temp__6753__auto__){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_82680,value_82682);
});})(seq__82661,chunk__82662,count__82663,i__82664,value_82682,default_target_82678,field_target_82679,explicit_target_82680,relocate_QMARK__82681,item,seq__82661__$1,temp__6753__auto__))
);
} else {
}

var G__82683 = cljs.core.next.call(null,seq__82661__$1);
var G__82684 = null;
var G__82685 = (0);
var G__82686 = (0);
seq__82661 = G__82683;
chunk__82662 = G__82684;
count__82663 = G__82685;
i__82664 = G__82686;
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
var seq__82699 = cljs.core.seq.call(null,loading_items);
var chunk__82700 = null;
var count__82701 = (0);
var i__82702 = (0);
while(true){
if((i__82702 < count__82701)){
var item = cljs.core._nth.call(null,chunk__82700,i__82702);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__82699,chunk__82700,count__82701,i__82702,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__82703 = s;
var G__82703__$1 = cljs.core.update.call(null,G__82703,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__82703__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__82703__$1;
}
});})(seq__82699,chunk__82700,count__82701,i__82702,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__82711 = seq__82699;
var G__82712 = chunk__82700;
var G__82713 = count__82701;
var G__82714 = (i__82702 + (1));
seq__82699 = G__82711;
chunk__82700 = G__82712;
count__82701 = G__82713;
i__82702 = G__82714;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82699);
if(temp__6753__auto__){
var seq__82699__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82699__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__82699__$1);
var G__82715 = cljs.core.chunk_rest.call(null,seq__82699__$1);
var G__82716 = c__35466__auto__;
var G__82717 = cljs.core.count.call(null,c__35466__auto__);
var G__82718 = (0);
seq__82699 = G__82715;
chunk__82700 = G__82716;
count__82701 = G__82717;
i__82702 = G__82718;
continue;
} else {
var item = cljs.core.first.call(null,seq__82699__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__82699,chunk__82700,count__82701,i__82702,item,seq__82699__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__82704 = s;
var G__82704__$1 = cljs.core.update.call(null,G__82704,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__82704__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__82704__$1;
}
});})(seq__82699,chunk__82700,count__82701,i__82702,item,seq__82699__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__82719 = cljs.core.next.call(null,seq__82699__$1);
var G__82720 = null;
var G__82721 = (0);
var G__82722 = (0);
seq__82699 = G__82719;
chunk__82700 = G__82720;
count__82701 = G__82721;
i__82702 = G__82722;
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
var seq__82705 = cljs.core.seq.call(null,loading_items);
var chunk__82706 = null;
var count__82707 = (0);
var i__82708 = (0);
while(true){
if((i__82708 < count__82707)){
var item = cljs.core._nth.call(null,chunk__82706,i__82708);
var temp__6753__auto___82723 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___82723)){
var mutation_symbol_82724 = temp__6753__auto___82723;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_82725 = (function (){var or__34555__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__82709_82726 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_82724,params_82725);
var G__82709_82727__$1 = (((G__82709_82726 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__82709_82726));
if((G__82709_82727__$1 == null)){
} else {
cljs.core.apply.call(null,G__82709_82727__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__82728 = seq__82705;
var G__82729 = chunk__82706;
var G__82730 = count__82707;
var G__82731 = (i__82708 + (1));
seq__82705 = G__82728;
chunk__82706 = G__82729;
count__82707 = G__82730;
i__82708 = G__82731;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82705);
if(temp__6753__auto__){
var seq__82705__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82705__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__82705__$1);
var G__82732 = cljs.core.chunk_rest.call(null,seq__82705__$1);
var G__82733 = c__35466__auto__;
var G__82734 = cljs.core.count.call(null,c__35466__auto__);
var G__82735 = (0);
seq__82705 = G__82732;
chunk__82706 = G__82733;
count__82707 = G__82734;
i__82708 = G__82735;
continue;
} else {
var item = cljs.core.first.call(null,seq__82705__$1);
var temp__6753__auto___82736__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___82736__$1)){
var mutation_symbol_82737 = temp__6753__auto___82736__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_82738 = (function (){var or__34555__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__82710_82739 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_82737,params_82738);
var G__82710_82740__$1 = (((G__82710_82739 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__82710_82739));
if((G__82710_82740__$1 == null)){
} else {
cljs.core.apply.call(null,G__82710_82740__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__82741 = cljs.core.next.call(null,seq__82705__$1);
var G__82742 = null;
var G__82743 = (0);
var G__82744 = (0);
seq__82705 = G__82741;
chunk__82706 = G__82742;
count__82707 = G__82743;
i__82708 = G__82744;
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

var seq__82757 = cljs.core.seq.call(null,loading_items);
var chunk__82758 = null;
var count__82759 = (0);
var i__82760 = (0);
while(true){
if((i__82760 < count__82759)){
var item = cljs.core._nth.call(null,chunk__82758,i__82760);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__82757,chunk__82758,count__82759,i__82760,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__82761 = s;
var G__82761__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__82761,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__82761);
return cljs.core.update.call(null,G__82761__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__82757,chunk__82758,count__82759,i__82760,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__82769 = seq__82757;
var G__82770 = chunk__82758;
var G__82771 = count__82759;
var G__82772 = (i__82760 + (1));
seq__82757 = G__82769;
chunk__82758 = G__82770;
count__82759 = G__82771;
i__82760 = G__82772;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82757);
if(temp__6753__auto__){
var seq__82757__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82757__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__82757__$1);
var G__82773 = cljs.core.chunk_rest.call(null,seq__82757__$1);
var G__82774 = c__35466__auto__;
var G__82775 = cljs.core.count.call(null,c__35466__auto__);
var G__82776 = (0);
seq__82757 = G__82773;
chunk__82758 = G__82774;
count__82759 = G__82775;
i__82760 = G__82776;
continue;
} else {
var item = cljs.core.first.call(null,seq__82757__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__82757,chunk__82758,count__82759,i__82760,item,seq__82757__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__82762 = s;
var G__82762__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__82762,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__82762);
return cljs.core.update.call(null,G__82762__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__82757,chunk__82758,count__82759,i__82760,item,seq__82757__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__82777 = cljs.core.next.call(null,seq__82757__$1);
var G__82778 = null;
var G__82779 = (0);
var G__82780 = (0);
seq__82757 = G__82777;
chunk__82758 = G__82778;
count__82759 = G__82779;
i__82760 = G__82780;
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
var seq__82763 = cljs.core.seq.call(null,loading_items);
var chunk__82764 = null;
var count__82765 = (0);
var i__82766 = (0);
while(true){
if((i__82766 < count__82765)){
var item = cljs.core._nth.call(null,chunk__82764,i__82766);
var temp__6753__auto___82781 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___82781)){
var fallback_symbol_82782 = temp__6753__auto___82781;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__82767_82783 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_82782,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__82767_82784__$1 = (((G__82767_82783 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__82767_82783));
if((G__82767_82784__$1 == null)){
} else {
cljs.core.apply.call(null,G__82767_82784__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__82785 = seq__82763;
var G__82786 = chunk__82764;
var G__82787 = count__82765;
var G__82788 = (i__82766 + (1));
seq__82763 = G__82785;
chunk__82764 = G__82786;
count__82765 = G__82787;
i__82766 = G__82788;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82763);
if(temp__6753__auto__){
var seq__82763__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82763__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__82763__$1);
var G__82789 = cljs.core.chunk_rest.call(null,seq__82763__$1);
var G__82790 = c__35466__auto__;
var G__82791 = cljs.core.count.call(null,c__35466__auto__);
var G__82792 = (0);
seq__82763 = G__82789;
chunk__82764 = G__82790;
count__82765 = G__82791;
i__82766 = G__82792;
continue;
} else {
var item = cljs.core.first.call(null,seq__82763__$1);
var temp__6753__auto___82793__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___82793__$1)){
var fallback_symbol_82794 = temp__6753__auto___82793__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__82768_82795 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_82794,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__82768_82796__$1 = (((G__82768_82795 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__82768_82795));
if((G__82768_82796__$1 == null)){
} else {
cljs.core.apply.call(null,G__82768_82796__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__82797 = cljs.core.next.call(null,seq__82763__$1);
var G__82798 = null;
var G__82799 = (0);
var G__82800 = (0);
seq__82763 = G__82797;
chunk__82764 = G__82798;
count__82765 = G__82799;
i__82766 = G__82800;
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

//# sourceMappingURL=data_fetch.js.map?rel=1491640817475