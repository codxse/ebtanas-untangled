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
var seq__45830 = cljs.core.seq.call(null,items_to_load);
var chunk__45831 = null;
var count__45832 = (0);
var i__45833 = (0);
while(true){
if((i__45833 < count__45832)){
var item = cljs.core._nth.call(null,chunk__45831,i__45833);
var i_45834 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_45835 = ((function (seq__45830,chunk__45831,count__45832,i__45833,i_45834,item){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_45834))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_45834),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_45834], null));
} else {
return state;
}
});})(seq__45830,chunk__45831,count__45832,i__45833,i_45834,item))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__45830,chunk__45831,count__45832,i__45833,i_45834,place_marker_45835,item){
return (function (s){
return cljs.core.update.call(null,place_marker_45835.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_45834));
});})(seq__45830,chunk__45831,count__45832,i__45833,i_45834,place_marker_45835,item))
);

var G__45836 = seq__45830;
var G__45837 = chunk__45831;
var G__45838 = count__45832;
var G__45839 = (i__45833 + (1));
seq__45830 = G__45836;
chunk__45831 = G__45837;
count__45832 = G__45838;
i__45833 = G__45839;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__45830);
if(temp__6753__auto__){
var seq__45830__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45830__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__45830__$1);
var G__45840 = cljs.core.chunk_rest.call(null,seq__45830__$1);
var G__45841 = c__40133__auto__;
var G__45842 = cljs.core.count.call(null,c__40133__auto__);
var G__45843 = (0);
seq__45830 = G__45840;
chunk__45831 = G__45841;
count__45832 = G__45842;
i__45833 = G__45843;
continue;
} else {
var item = cljs.core.first.call(null,seq__45830__$1);
var i_45844 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_45845 = ((function (seq__45830,chunk__45831,count__45832,i__45833,i_45844,item,seq__45830__$1,temp__6753__auto__){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_45844))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_45844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_45844], null));
} else {
return state;
}
});})(seq__45830,chunk__45831,count__45832,i__45833,i_45844,item,seq__45830__$1,temp__6753__auto__))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__45830,chunk__45831,count__45832,i__45833,i_45844,place_marker_45845,item,seq__45830__$1,temp__6753__auto__){
return (function (s){
return cljs.core.update.call(null,place_marker_45845.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_45844));
});})(seq__45830,chunk__45831,count__45832,i__45833,i_45844,place_marker_45845,item,seq__45830__$1,temp__6753__auto__))
);

var G__45846 = cljs.core.next.call(null,seq__45830__$1);
var G__45847 = null;
var G__45848 = (0);
var G__45849 = (0);
seq__45830 = G__45846;
chunk__45831 = G__45847;
count__45832 = G__45848;
i__45833 = G__45849;
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
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_parallel_loading = (function untangled$client$impl$data_fetch$mark_parallel_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var queued_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
var items_to_load = cljs.core.filter.call(null,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),queued_items);
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292)),queued_items));

var iter__40084__auto__ = ((function (state,queued_items,items_to_load){
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__45854(s__45855){
return (new cljs.core.LazySeq(null,((function (state,queued_items,items_to_load){
return (function (){
var s__45855__$1 = s__45855;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__45855__$1);
if(temp__6753__auto__){
var s__45855__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45855__$2)){
var c__40082__auto__ = cljs.core.chunk_first.call(null,s__45855__$2);
var size__40083__auto__ = cljs.core.count.call(null,c__40082__auto__);
var b__45857 = cljs.core.chunk_buffer.call(null,size__40083__auto__);
if((function (){var i__45856 = (0);
while(true){
if((i__45856 < size__40083__auto__)){
var item = cljs.core._nth.call(null,c__40082__auto__,i__45856);
cljs.core.chunk_append.call(null,b__45857,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__45858 = (i__45856 + (1));
i__45856 = G__45858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45857),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__45854.call(null,cljs.core.chunk_rest.call(null,s__45855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45857),null);
}
} else {
var item = cljs.core.first.call(null,s__45855__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__45854.call(null,cljs.core.rest.call(null,s__45855__$2)));
}
} else {
return null;
}
break;
}
});})(state,queued_items,items_to_load))
,null,null));
});})(state,queued_items,items_to_load))
;
return iter__40084__auto__.call(null,items_to_load);
}
});
/**
 * Returns a lazy sequence of the elements of coll with dupes removed.
 * An element is a duplicate IFF (keys-fn element) has key collision with any prior element
 * to come before it. E.g. (dedupe-by identity [[:a] [:b] [:a] [:a :c]]) => [[:a] [:b]]
 * Returns a stateful transducer when no collection is provided.
 */
untangled.client.impl.data_fetch.dedupe_by = (function untangled$client$impl$data_fetch$dedupe_by(var_args){
var args45859 = [];
var len__40443__auto___45862 = arguments.length;
var i__40444__auto___45863 = (0);
while(true){
if((i__40444__auto___45863 < len__40443__auto___45862)){
args45859.push((arguments[i__40444__auto___45863]));

var G__45864 = (i__40444__auto___45863 + (1));
i__40444__auto___45863 = G__45864;
continue;
} else {
}
break;
}

var G__45861 = args45859.length;
switch (G__45861) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45859.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__45866 = null;
var G__45866__0 = (function (){
return rf.call(null);
});
var G__45866__1 = (function (result){
return rf.call(null,result);
});
var G__45866__2 = (function (result,input){
var input_keys = cljs.core.set.call(null,keys_fn.call(null,input));
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.deref.call(null,keys_seen),input_keys))){
cljs.core._vreset_BANG_.call(null,keys_seen,clojure.set.union.call(null,cljs.core._deref.call(null,keys_seen),input_keys));

return rf.call(null,result,input);
} else {
return result;
}
});
G__45866 = function(result,input){
switch(arguments.length){
case 0:
return G__45866__0.call(this);
case 1:
return G__45866__1.call(this,result);
case 2:
return G__45866__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45866.cljs$core$IFn$_invoke$arity$0 = G__45866__0;
G__45866.cljs$core$IFn$_invoke$arity$1 = G__45866__1;
G__45866.cljs$core$IFn$_invoke$arity$2 = G__45866__2;
return G__45866;
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
 *   `callback-args` : Args to pass back to on-load and on-error. These are separated
 *  so that `rewrite-tempids-in-request-queue` can rewrite tempids for merge and
 *  error callbacks
 * 
 *   response-channel will have the response posted to it when the request is done.
 *   .
 */
untangled.client.impl.data_fetch.mark_loading = (function untangled$client$impl$data_fetch$mark_loading(reconciler){
var state = om.next.app_state.call(null,reconciler);
var items_ready_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
var vec__45870 = untangled.client.impl.data_fetch.split_items_ready_to_load.call(null,items_ready_to_load);
var items_to_load_now = cljs.core.nth.call(null,vec__45870,(0),null);
var items_to_defer = cljs.core.nth.call(null,vec__45870,(1),null);
if(cljs.core.empty_QMARK_.call(null,items_to_load_now)){
return null;
} else {
untangled.client.impl.data_fetch.place_load_markers.call(null,state,items_to_load_now);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),true,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),items_to_defer);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,items_to_load_now),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),items_to_load_now], null);
}
});
untangled.client.impl.data_fetch.valid_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"loading","loading",-737050189),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null);
/**
 * This is just a testing function -- using ready-state as public interface and call the
 *   `set-{type}!` functions to change it as needed.
 */
untangled.client.impl.data_fetch.make_data_state = (function untangled$client$impl$data_fetch$make_data_state(var_args){
var args45873 = [];
var len__40443__auto___45876 = arguments.length;
var i__40444__auto___45877 = (0);
while(true){
if((i__40444__auto___45877 < len__40443__auto___45876)){
args45873.push((arguments[i__40444__auto___45877]));

var G__45878 = (i__40444__auto___45877 + (1));
i__40444__auto___45877 = G__45878;
continue;
} else {
}
break;
}

var G__45875 = args45873.length;
switch (G__45875) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45873.length)].join('')));

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
var items_to_load = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824));
if(cljs.core.empty_QMARK_.call(null,items_to_load)){
return null;
} else {
return om.next.impl.parser.expr__GT_ast.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items-to-load","items-to-load",-1811352068),cljs.core.vec.call(null,cljs.core.mapcat.call(null,untangled.client.impl.data_fetch.data_query,items_to_load))], null));
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__45881,elision_set){
var map__45884 = p__45881;
var map__45884__$1 = ((((!((map__45884 == null)))?((((map__45884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45884):map__45884);
var ast = map__45884__$1;
var key = cljs.core.get.call(null,map__45884__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.call(null,map__45884__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.call(null,map__45884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = cljs.core.contains_QMARK_.call(null,elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_.call(null,elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count.call(null,children) <= (2)))){
untangled.client.logging.warn.call(null,"Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.call(null,union_key));
} else {
}

return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__45884,map__45884__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (union_elision_QMARK_,map__45884,map__45884__$1,ast,key,union_key,children){
return (function (p1__45880_SHARP_){
return untangled.client.impl.data_fetch.elide_ast_nodes.call(null,p1__45880_SHARP_,elision_set);
});})(union_elision_QMARK_,map__45884,map__45884__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__45884,map__45884__$1,ast,key,union_key,children))
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
return (function (p1__45886_SHARP_){
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
,p1__45886_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__45887){
var map__45891 = p__45887;
var map__45891__$1 = ((((!((map__45891 == null)))?((((map__45891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45891):map__45891);
var target = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"target","target",253001721));
var query = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var refresh = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var post_mutation_params = cljs.core.get.call(null,map__45891__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
if(cljs.core.truth_((function (){var or__39222__auto__ = field;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return query;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("You must supply a query or a field/ident pair"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or field query)")].join('')));
}

if(cljs.core.truth_((function (){var or__39222__auto__ = cljs.core.not.call(null,field);
if(or__39222__auto__){
return or__39222__auto__;
} else {
var and__39210__auto__ = field;
if(cljs.core.truth_(and__39210__auto__)){
return om.util.ident_QMARK_.call(null,ident);
} else {
return and__39210__auto__;
}
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Field requires ident"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not field) (and field (util/ident? ident)))")].join('')));
}

var old_ast = om.next.query__GT_ast.call(null,query);
var ast = (function (){var G__45893 = old_ast;
var G__45893__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__45893,without):G__45893);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__45893__$1,params);
} else {
return G__45893__$1;
}
})();
var query_field = cljs.core.first.call(null,query);
var key = (cljs.core.truth_(om.util.join_QMARK_.call(null,query_field))?om.util.join_key.call(null,query_field):query_field);
var query_SINGLEQUOTE_ = om.next.ast__GT_query.call(null,ast);
if((cljs.core.not.call(null,field)) || (cljs.core._EQ_.call(null,field,key))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Component fetch query does not match supplied field."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not field) (= field key))")].join('')));
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971),new cljs.core.Keyword("untangled.client.impl.data-fetch","parallel","untangled.client.impl.data-fetch/parallel",-1305867292),new cljs.core.Keyword("untangled.client.impl.data-fetch","marker","untangled.client.impl.data-fetch/marker",-1816209083),new cljs.core.Keyword("untangled.client.impl.data-fetch","type","untangled.client.impl.data-fetch/type",1691369040),new cljs.core.Keyword("untangled.client.impl.data-fetch","ident","untangled.client.impl.data-fetch/ident",-550298382),new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555),new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829),new cljs.core.Keyword("untangled.client.impl.data-fetch","query","untangled.client.impl.data-fetch/query",-1838118122),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536),new cljs.core.Keyword("untangled.client.impl.data-fetch","refresh","untangled.client.impl.data-fetch/refresh",-1831820519),new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083),new cljs.core.Keyword("untangled.client.impl.data-fetch","uuid","untangled.client.impl.data-fetch/uuid",1591853213)],[post_mutation,parallel,marker,new cljs.core.Keyword(null,"ready","ready",1086465795),ident,post_mutation_params,fallback,query_SINGLEQUOTE_,field,refresh,target,cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_squuid.call(null))]);
});
/**
 * Place a ready-to-load marker into the application state. This should be done from
 *   a mutate function that is abstractly loading something. This is intended for internal use.
 * 
 *   See the `load-data` and `load-field` functions in `untangled.client.data-fetch` for the public API.
 */
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__45894){
var map__45897 = p__45894;
var map__45897__$1 = ((((!((map__45897 == null)))?((((map__45897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45897):map__45897);
var config = map__45897__$1;
var state = cljs.core.get.call(null,map__45897__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("om.next","ready-to-load","om.next/ready-to-load",-274898824),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),untangled.client.impl.data_fetch.ready_state.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config)));
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
if(cljs.core.truth_((function (){var and__39210__auto__ = cljs.core.vector_QMARK_.call(null,target);
if(and__39210__auto__){
return cljs.core.not_empty.call(null,target);
} else {
return and__39210__auto__;
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
var args45899 = [];
var len__40443__auto___45908 = arguments.length;
var i__40444__auto___45909 = (0);
while(true){
if((i__40444__auto___45909 < len__40443__auto___45908)){
args45899.push((arguments[i__40444__auto___45909]));

var G__45910 = (i__40444__auto___45909 + (1));
i__40444__auto___45909 = G__45910;
continue;
} else {
}
break;
}

var G__45901 = args45899.length;
switch (G__45901) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45899.length)].join('')));

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
var args45902 = [];
var len__40443__auto___45912 = arguments.length;
var i__40444__auto___45913 = (0);
while(true){
if((i__40444__auto___45913 < len__40443__auto___45912)){
args45902.push((arguments[i__40444__auto___45913]));

var G__45914 = (i__40444__auto___45913 + (1));
i__40444__auto___45913 = G__45914;
continue;
} else {
}
break;
}

var G__45904 = args45902.length;
switch (G__45904) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45902.length)].join('')));

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
var args45905 = [];
var len__40443__auto___45916 = arguments.length;
var i__40444__auto___45917 = (0);
while(true){
if((i__40444__auto___45917 < len__40443__auto___45916)){
args45905.push((arguments[i__40444__auto___45917]));

var G__45918 = (i__40444__auto___45917 + (1));
i__40444__auto___45917 = G__45918;
continue;
} else {
}
break;
}

var G__45907 = args45905.length;
switch (G__45907) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45905.length)].join('')));

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
var seq__45924 = cljs.core.seq.call(null,items);
var chunk__45925 = null;
var count__45926 = (0);
var i__45927 = (0);
while(true){
if((i__45927 < count__45926)){
var item = cljs.core._nth.call(null,chunk__45925,i__45927);
var default_target_45928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_45929 = cljs.core.conj.call(null,(function (){var or__39222__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_45930 = (function (){var or__39222__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__45931 = (function (){var and__39210__auto__ = cljs.core.not_empty.call(null,explicit_target_45930);
if(cljs.core.truth_(and__39210__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_45930,field_target_45929)) && (cljs.core.not_EQ_.call(null,explicit_target_45930,default_target_45928));
} else {
return and__39210__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__45931)){
var value_45932 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_45928);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__45924,chunk__45925,count__45926,i__45927,value_45932,default_target_45928,field_target_45929,explicit_target_45930,relocate_QMARK__45931,item){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_45930,value_45932);
});})(seq__45924,chunk__45925,count__45926,i__45927,value_45932,default_target_45928,field_target_45929,explicit_target_45930,relocate_QMARK__45931,item))
);
} else {
}

var G__45933 = seq__45924;
var G__45934 = chunk__45925;
var G__45935 = count__45926;
var G__45936 = (i__45927 + (1));
seq__45924 = G__45933;
chunk__45925 = G__45934;
count__45926 = G__45935;
i__45927 = G__45936;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__45924);
if(temp__6753__auto__){
var seq__45924__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45924__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__45924__$1);
var G__45937 = cljs.core.chunk_rest.call(null,seq__45924__$1);
var G__45938 = c__40133__auto__;
var G__45939 = cljs.core.count.call(null,c__40133__auto__);
var G__45940 = (0);
seq__45924 = G__45937;
chunk__45925 = G__45938;
count__45926 = G__45939;
i__45927 = G__45940;
continue;
} else {
var item = cljs.core.first.call(null,seq__45924__$1);
var default_target_45941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_45942 = cljs.core.conj.call(null,(function (){var or__39222__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_45943 = (function (){var or__39222__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__45944 = (function (){var and__39210__auto__ = cljs.core.not_empty.call(null,explicit_target_45943);
if(cljs.core.truth_(and__39210__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_45943,field_target_45942)) && (cljs.core.not_EQ_.call(null,explicit_target_45943,default_target_45941));
} else {
return and__39210__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__45944)){
var value_45945 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_45941);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__45924,chunk__45925,count__45926,i__45927,value_45945,default_target_45941,field_target_45942,explicit_target_45943,relocate_QMARK__45944,item,seq__45924__$1,temp__6753__auto__){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_45943,value_45945);
});})(seq__45924,chunk__45925,count__45926,i__45927,value_45945,default_target_45941,field_target_45942,explicit_target_45943,relocate_QMARK__45944,item,seq__45924__$1,temp__6753__auto__))
);
} else {
}

var G__45946 = cljs.core.next.call(null,seq__45924__$1);
var G__45947 = null;
var G__45948 = (0);
var G__45949 = (0);
seq__45924 = G__45946;
chunk__45925 = G__45947;
count__45926 = G__45948;
i__45927 = G__45949;
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
var seq__45962 = cljs.core.seq.call(null,loading_items);
var chunk__45963 = null;
var count__45964 = (0);
var i__45965 = (0);
while(true){
if((i__45965 < count__45964)){
var item = cljs.core._nth.call(null,chunk__45963,i__45965);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__45962,chunk__45963,count__45964,i__45965,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__45966 = s;
var G__45966__$1 = cljs.core.update.call(null,G__45966,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__45966__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__45966__$1;
}
});})(seq__45962,chunk__45963,count__45964,i__45965,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__45974 = seq__45962;
var G__45975 = chunk__45963;
var G__45976 = count__45964;
var G__45977 = (i__45965 + (1));
seq__45962 = G__45974;
chunk__45963 = G__45975;
count__45964 = G__45976;
i__45965 = G__45977;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__45962);
if(temp__6753__auto__){
var seq__45962__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45962__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__45962__$1);
var G__45978 = cljs.core.chunk_rest.call(null,seq__45962__$1);
var G__45979 = c__40133__auto__;
var G__45980 = cljs.core.count.call(null,c__40133__auto__);
var G__45981 = (0);
seq__45962 = G__45978;
chunk__45963 = G__45979;
count__45964 = G__45980;
i__45965 = G__45981;
continue;
} else {
var item = cljs.core.first.call(null,seq__45962__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__45962,chunk__45963,count__45964,i__45965,item,seq__45962__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__45967 = s;
var G__45967__$1 = cljs.core.update.call(null,G__45967,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__45967__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__45967__$1;
}
});})(seq__45962,chunk__45963,count__45964,i__45965,item,seq__45962__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__45982 = cljs.core.next.call(null,seq__45962__$1);
var G__45983 = null;
var G__45984 = (0);
var G__45985 = (0);
seq__45962 = G__45982;
chunk__45963 = G__45983;
count__45964 = G__45984;
i__45965 = G__45985;
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
var seq__45968 = cljs.core.seq.call(null,loading_items);
var chunk__45969 = null;
var count__45970 = (0);
var i__45971 = (0);
while(true){
if((i__45971 < count__45970)){
var item = cljs.core._nth.call(null,chunk__45969,i__45971);
var temp__6753__auto___45986 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___45986)){
var mutation_symbol_45987 = temp__6753__auto___45986;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_45988 = (function (){var or__39222__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__45972_45989 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_45987,params_45988);
var G__45972_45990__$1 = (((G__45972_45989 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__45972_45989));
if((G__45972_45990__$1 == null)){
} else {
cljs.core.apply.call(null,G__45972_45990__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__45991 = seq__45968;
var G__45992 = chunk__45969;
var G__45993 = count__45970;
var G__45994 = (i__45971 + (1));
seq__45968 = G__45991;
chunk__45969 = G__45992;
count__45970 = G__45993;
i__45971 = G__45994;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__45968);
if(temp__6753__auto__){
var seq__45968__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45968__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__45968__$1);
var G__45995 = cljs.core.chunk_rest.call(null,seq__45968__$1);
var G__45996 = c__40133__auto__;
var G__45997 = cljs.core.count.call(null,c__40133__auto__);
var G__45998 = (0);
seq__45968 = G__45995;
chunk__45969 = G__45996;
count__45970 = G__45997;
i__45971 = G__45998;
continue;
} else {
var item = cljs.core.first.call(null,seq__45968__$1);
var temp__6753__auto___45999__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___45999__$1)){
var mutation_symbol_46000 = temp__6753__auto___45999__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_46001 = (function (){var or__39222__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__45973_46002 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_46000,params_46001);
var G__45973_46003__$1 = (((G__45973_46002 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__45973_46002));
if((G__45973_46003__$1 == null)){
} else {
cljs.core.apply.call(null,G__45973_46003__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46004 = cljs.core.next.call(null,seq__45968__$1);
var G__46005 = null;
var G__46006 = (0);
var G__46007 = (0);
seq__45968 = G__46004;
chunk__45969 = G__46005;
count__45970 = G__46006;
i__45971 = G__46007;
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

var seq__46020 = cljs.core.seq.call(null,loading_items);
var chunk__46021 = null;
var count__46022 = (0);
var i__46023 = (0);
while(true){
if((i__46023 < count__46022)){
var item = cljs.core._nth.call(null,chunk__46021,i__46023);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__46020,chunk__46021,count__46022,i__46023,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__46024 = s;
var G__46024__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__46024,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__46024);
return cljs.core.update.call(null,G__46024__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__46020,chunk__46021,count__46022,i__46023,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__46032 = seq__46020;
var G__46033 = chunk__46021;
var G__46034 = count__46022;
var G__46035 = (i__46023 + (1));
seq__46020 = G__46032;
chunk__46021 = G__46033;
count__46022 = G__46034;
i__46023 = G__46035;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__46020);
if(temp__6753__auto__){
var seq__46020__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46020__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__46020__$1);
var G__46036 = cljs.core.chunk_rest.call(null,seq__46020__$1);
var G__46037 = c__40133__auto__;
var G__46038 = cljs.core.count.call(null,c__40133__auto__);
var G__46039 = (0);
seq__46020 = G__46036;
chunk__46021 = G__46037;
count__46022 = G__46038;
i__46023 = G__46039;
continue;
} else {
var item = cljs.core.first.call(null,seq__46020__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__46020,chunk__46021,count__46022,i__46023,item,seq__46020__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__46025 = s;
var G__46025__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__46025,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__46025);
return cljs.core.update.call(null,G__46025__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__46020,chunk__46021,count__46022,i__46023,item,seq__46020__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__46040 = cljs.core.next.call(null,seq__46020__$1);
var G__46041 = null;
var G__46042 = (0);
var G__46043 = (0);
seq__46020 = G__46040;
chunk__46021 = G__46041;
count__46022 = G__46042;
i__46023 = G__46043;
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
var seq__46026 = cljs.core.seq.call(null,loading_items);
var chunk__46027 = null;
var count__46028 = (0);
var i__46029 = (0);
while(true){
if((i__46029 < count__46028)){
var item = cljs.core._nth.call(null,chunk__46027,i__46029);
var temp__6753__auto___46044 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46044)){
var fallback_symbol_46045 = temp__6753__auto___46044;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__46030_46046 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_46045,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__46030_46047__$1 = (((G__46030_46046 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__46030_46046));
if((G__46030_46047__$1 == null)){
} else {
cljs.core.apply.call(null,G__46030_46047__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46048 = seq__46026;
var G__46049 = chunk__46027;
var G__46050 = count__46028;
var G__46051 = (i__46029 + (1));
seq__46026 = G__46048;
chunk__46027 = G__46049;
count__46028 = G__46050;
i__46029 = G__46051;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__46026);
if(temp__6753__auto__){
var seq__46026__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46026__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__46026__$1);
var G__46052 = cljs.core.chunk_rest.call(null,seq__46026__$1);
var G__46053 = c__40133__auto__;
var G__46054 = cljs.core.count.call(null,c__40133__auto__);
var G__46055 = (0);
seq__46026 = G__46052;
chunk__46027 = G__46053;
count__46028 = G__46054;
i__46029 = G__46055;
continue;
} else {
var item = cljs.core.first.call(null,seq__46026__$1);
var temp__6753__auto___46056__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___46056__$1)){
var fallback_symbol_46057 = temp__6753__auto___46056__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__46031_46058 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_46057,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__46031_46059__$1 = (((G__46031_46058 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__46031_46058));
if((G__46031_46059__$1 == null)){
} else {
cljs.core.apply.call(null,G__46031_46059__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__46060 = cljs.core.next.call(null,seq__46026__$1);
var G__46061 = null;
var G__46062 = (0);
var G__46063 = (0);
seq__46026 = G__46060;
chunk__46027 = G__46061;
count__46028 = G__46062;
i__46029 = G__46063;
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

//# sourceMappingURL=data_fetch.js.map?rel=1491695661316