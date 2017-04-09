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
var seq__51295 = cljs.core.seq.call(null,items_to_load);
var chunk__51296 = null;
var count__51297 = (0);
var i__51298 = (0);
while(true){
if((i__51298 < count__51297)){
var item = cljs.core._nth.call(null,chunk__51296,i__51298);
var i_51299 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_51300 = ((function (seq__51295,chunk__51296,count__51297,i__51298,i_51299,item){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_51299))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_51299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_51299], null));
} else {
return state;
}
});})(seq__51295,chunk__51296,count__51297,i__51298,i_51299,item))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__51295,chunk__51296,count__51297,i__51298,i_51299,place_marker_51300,item){
return (function (s){
return cljs.core.update.call(null,place_marker_51300.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_51299));
});})(seq__51295,chunk__51296,count__51297,i__51298,i_51299,place_marker_51300,item))
);

var G__51301 = seq__51295;
var G__51302 = chunk__51296;
var G__51303 = count__51297;
var G__51304 = (i__51298 + (1));
seq__51295 = G__51301;
chunk__51296 = G__51302;
count__51297 = G__51303;
i__51298 = G__51304;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51295);
if(temp__6753__auto__){
var seq__51295__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51295__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__51295__$1);
var G__51305 = cljs.core.chunk_rest.call(null,seq__51295__$1);
var G__51306 = c__40133__auto__;
var G__51307 = cljs.core.count.call(null,c__40133__auto__);
var G__51308 = (0);
seq__51295 = G__51305;
chunk__51296 = G__51306;
count__51297 = G__51307;
i__51298 = G__51308;
continue;
} else {
var item = cljs.core.first.call(null,seq__51295__$1);
var i_51309 = untangled.client.impl.data_fetch.set_loading_BANG_.call(null,item);
var place_marker_51310 = ((function (seq__51295,chunk__51296,count__51297,i__51298,i_51309,item,seq__51295__$1,temp__6753__auto__){
return (function (state){
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,i_51309))){
return cljs.core.assoc_in.call(null,state,untangled.client.impl.data_fetch.data_path.call(null,i_51309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927),i_51309], null));
} else {
return state;
}
});})(seq__51295,chunk__51296,count__51297,i__51298,i_51309,item,seq__51295__$1,temp__6753__auto__))
;
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__51295,chunk__51296,count__51297,i__51298,i_51309,place_marker_51310,item,seq__51295__$1,temp__6753__auto__){
return (function (s){
return cljs.core.update.call(null,place_marker_51310.call(null,s),new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),untangled.client.impl.data_fetch.data_uuid.call(null,i_51309));
});})(seq__51295,chunk__51296,count__51297,i__51298,i_51309,place_marker_51310,item,seq__51295__$1,temp__6753__auto__))
);

var G__51311 = cljs.core.next.call(null,seq__51295__$1);
var G__51312 = null;
var G__51313 = (0);
var G__51314 = (0);
seq__51295 = G__51311;
chunk__51296 = G__51312;
count__51297 = G__51313;
i__51298 = G__51314;
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
return (function untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__51319(s__51320){
return (new cljs.core.LazySeq(null,((function (state,queued_items,items_to_load){
return (function (){
var s__51320__$1 = s__51320;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__51320__$1);
if(temp__6753__auto__){
var s__51320__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51320__$2)){
var c__40082__auto__ = cljs.core.chunk_first.call(null,s__51320__$2);
var size__40083__auto__ = cljs.core.count.call(null,c__40082__auto__);
var b__51322 = cljs.core.chunk_buffer.call(null,size__40083__auto__);
if((function (){var i__51321 = (0);
while(true){
if((i__51321 < size__40083__auto__)){
var item = cljs.core._nth.call(null,c__40082__auto__,i__51321);
cljs.core.chunk_append.call(null,b__51322,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null));

var G__51323 = (i__51321 + (1));
i__51321 = G__51323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51322),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__51319.call(null,cljs.core.chunk_rest.call(null,s__51320__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51322),null);
}
} else {
var item = cljs.core.first.call(null,s__51320__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),untangled.client.impl.data_fetch.full_query.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),untangled.client.impl.data_fetch.loaded_callback.call(null,reconciler),new cljs.core.Keyword(null,"on-error","on-error",1728533530),untangled.client.impl.data_fetch.error_callback.call(null,reconciler),new cljs.core.Keyword(null,"callback-args","callback-args",1117743591),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null),untangled$client$impl$data_fetch$mark_parallel_loading_$_iter__51319.call(null,cljs.core.rest.call(null,s__51320__$2)));
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
var args51324 = [];
var len__40443__auto___51327 = arguments.length;
var i__40444__auto___51328 = (0);
while(true){
if((i__40444__auto___51328 < len__40443__auto___51327)){
args51324.push((arguments[i__40444__auto___51328]));

var G__51329 = (i__40444__auto___51328 + (1));
i__40444__auto___51328 = G__51329;
continue;
} else {
}
break;
}

var G__51326 = args51324.length;
switch (G__51326) {
case 1:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51324.length)].join('')));

}
});

untangled.client.impl.data_fetch.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (keys_fn){
return (function (rf){
var keys_seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (keys_seen){
return (function() {
var G__51331 = null;
var G__51331__0 = (function (){
return rf.call(null);
});
var G__51331__1 = (function (result){
return rf.call(null,result);
});
var G__51331__2 = (function (result,input){
var input_keys = cljs.core.set.call(null,keys_fn.call(null,input));
if(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.deref.call(null,keys_seen),input_keys))){
cljs.core._vreset_BANG_.call(null,keys_seen,clojure.set.union.call(null,cljs.core._deref.call(null,keys_seen),input_keys));

return rf.call(null,result,input);
} else {
return result;
}
});
G__51331 = function(result,input){
switch(arguments.length){
case 0:
return G__51331__0.call(this);
case 1:
return G__51331__1.call(this,result);
case 2:
return G__51331__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51331.cljs$core$IFn$_invoke$arity$0 = G__51331__0;
G__51331.cljs$core$IFn$_invoke$arity$1 = G__51331__1;
G__51331.cljs$core$IFn$_invoke$arity$2 = G__51331__2;
return G__51331;
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
var vec__51335 = untangled.client.impl.data_fetch.split_items_ready_to_load.call(null,items_ready_to_load);
var items_to_load_now = cljs.core.nth.call(null,vec__51335,(0),null);
var items_to_defer = cljs.core.nth.call(null,vec__51335,(1),null);
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
var args51338 = [];
var len__40443__auto___51341 = arguments.length;
var i__40444__auto___51342 = (0);
while(true){
if((i__40444__auto___51342 < len__40443__auto___51341)){
args51338.push((arguments[i__40444__auto___51342]));

var G__51343 = (i__40444__auto___51342 + (1));
i__40444__auto___51342 = G__51343;
continue;
} else {
}
break;
}

var G__51340 = args51338.length;
switch (G__51340) {
case 1:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.make_data_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51338.length)].join('')));

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
untangled.client.impl.data_fetch.elide_ast_nodes = (function untangled$client$impl$data_fetch$elide_ast_nodes(p__51346,elision_set){
var map__51349 = p__51346;
var map__51349__$1 = ((((!((map__51349 == null)))?((((map__51349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51349):map__51349);
var ast = map__51349__$1;
var key = cljs.core.get.call(null,map__51349__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.call(null,map__51349__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children = cljs.core.get.call(null,map__51349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var union_elision_QMARK_ = cljs.core.contains_QMARK_.call(null,elision_set,union_key);
if((union_elision_QMARK_) || (cljs.core.contains_QMARK_.call(null,elision_set,key))){
return null;
} else {
if((union_elision_QMARK_) && ((cljs.core.count.call(null,children) <= (2)))){
untangled.client.logging.warn.call(null,"Om unions are not designed to be used with fewer than two children. Check your calls to Untangled\n        load functions where the :without set contains ",cljs.core.pr_str.call(null,union_key));
} else {
}

return cljs.core.update.call(null,ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__51349,map__51349__$1,ast,key,union_key,children){
return (function (c){
return cljs.core.vec.call(null,cljs.core.keep.call(null,((function (union_elision_QMARK_,map__51349,map__51349__$1,ast,key,union_key,children){
return (function (p1__51345_SHARP_){
return untangled.client.impl.data_fetch.elide_ast_nodes.call(null,p1__51345_SHARP_,elision_set);
});})(union_elision_QMARK_,map__51349,map__51349__$1,ast,key,union_key,children))
,c));
});})(union_elision_QMARK_,map__51349,map__51349__$1,ast,key,union_key,children))
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
return (function (p1__51351_SHARP_){
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
,p1__51351_SHARP_);
});})(top_level_keys,param_keys,unknown_keys))
);
});
/**
 * Generate a ready-to-load state with all of the necessary details to do
 *   remoting and merging.
 */
untangled.client.impl.data_fetch.ready_state = (function untangled$client$impl$data_fetch$ready_state(p__51352){
var map__51356 = p__51352;
var map__51356__$1 = ((((!((map__51356 == null)))?((((map__51356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51356):map__51356);
var target = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"target","target",253001721));
var query = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var refresh = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"params","params",710516235));
var field = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var post_mutation = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var ident = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var post_mutation_params = cljs.core.get.call(null,map__51356__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
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
var ast = (function (){var G__51358 = old_ast;
var G__51358__$1 = (cljs.core.truth_(cljs.core.not_empty.call(null,without))?untangled.client.impl.data_fetch.elide_ast_nodes.call(null,G__51358,without):G__51358);
if(cljs.core.truth_(params)){
return untangled.client.impl.data_fetch.inject_query_params.call(null,G__51358__$1,params);
} else {
return G__51358__$1;
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
untangled.client.impl.data_fetch.mark_ready = (function untangled$client$impl$data_fetch$mark_ready(p__51359){
var map__51362 = p__51359;
var map__51362__$1 = ((((!((map__51362 == null)))?((((map__51362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51362):map__51362);
var config = map__51362__$1;
var state = cljs.core.get.call(null,map__51362__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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
var args51364 = [];
var len__40443__auto___51373 = arguments.length;
var i__40444__auto___51374 = (0);
while(true){
if((i__40444__auto___51374 < len__40443__auto___51373)){
args51364.push((arguments[i__40444__auto___51374]));

var G__51375 = (i__40444__auto___51374 + (1));
i__40444__auto___51374 = G__51375;
continue;
} else {
}
break;
}

var G__51366 = args51364.length;
switch (G__51366) {
case 1:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_ready_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51364.length)].join('')));

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
var args51367 = [];
var len__40443__auto___51377 = arguments.length;
var i__40444__auto___51378 = (0);
while(true){
if((i__40444__auto___51378 < len__40443__auto___51377)){
args51367.push((arguments[i__40444__auto___51378]));

var G__51379 = (i__40444__auto___51378 + (1));
i__40444__auto___51378 = G__51379;
continue;
} else {
}
break;
}

var G__51369 = args51367.length;
switch (G__51369) {
case 1:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_loading_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51367.length)].join('')));

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
var args51370 = [];
var len__40443__auto___51381 = arguments.length;
var i__40444__auto___51382 = (0);
while(true){
if((i__40444__auto___51382 < len__40443__auto___51381)){
args51370.push((arguments[i__40444__auto___51382]));

var G__51383 = (i__40444__auto___51382 + (1));
i__40444__auto___51382 = G__51383;
continue;
} else {
}
break;
}

var G__51372 = args51370.length;
switch (G__51372) {
case 1:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.data_fetch.set_failed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51370.length)].join('')));

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
var seq__51389 = cljs.core.seq.call(null,items);
var chunk__51390 = null;
var count__51391 = (0);
var i__51392 = (0);
while(true){
if((i__51392 < count__51391)){
var item = cljs.core._nth.call(null,chunk__51390,i__51392);
var default_target_51393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_51394 = cljs.core.conj.call(null,(function (){var or__39222__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_51395 = (function (){var or__39222__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__51396 = (function (){var and__39210__auto__ = cljs.core.not_empty.call(null,explicit_target_51395);
if(cljs.core.truth_(and__39210__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_51395,field_target_51394)) && (cljs.core.not_EQ_.call(null,explicit_target_51395,default_target_51393));
} else {
return and__39210__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__51396)){
var value_51397 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_51393);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__51389,chunk__51390,count__51391,i__51392,value_51397,default_target_51393,field_target_51394,explicit_target_51395,relocate_QMARK__51396,item){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_51395,value_51397);
});})(seq__51389,chunk__51390,count__51391,i__51392,value_51397,default_target_51393,field_target_51394,explicit_target_51395,relocate_QMARK__51396,item))
);
} else {
}

var G__51398 = seq__51389;
var G__51399 = chunk__51390;
var G__51400 = count__51391;
var G__51401 = (i__51392 + (1));
seq__51389 = G__51398;
chunk__51390 = G__51399;
count__51391 = G__51400;
i__51392 = G__51401;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51389);
if(temp__6753__auto__){
var seq__51389__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51389__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__51389__$1);
var G__51402 = cljs.core.chunk_rest.call(null,seq__51389__$1);
var G__51403 = c__40133__auto__;
var G__51404 = cljs.core.count.call(null,c__40133__auto__);
var G__51405 = (0);
seq__51389 = G__51402;
chunk__51390 = G__51403;
count__51391 = G__51404;
i__51392 = G__51405;
continue;
} else {
var item = cljs.core.first.call(null,seq__51389__$1);
var default_target_51406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.impl.data_fetch.data_query_key.call(null,item)], null);
var field_target_51407 = cljs.core.conj.call(null,(function (){var or__39222__auto__ = untangled.client.impl.data_fetch.data_ident.call(null,item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword("untangled.client.impl.data-fetch","field","untangled.client.impl.data-fetch/field",-635694536).cljs$core$IFn$_invoke$arity$1(item));
var explicit_target_51408 = (function (){var or__39222__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","target","untangled.client.impl.data-fetch/target",-271110083).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var relocate_QMARK__51409 = (function (){var and__39210__auto__ = cljs.core.not_empty.call(null,explicit_target_51408);
if(cljs.core.truth_(and__39210__auto__)){
return (cljs.core.not_EQ_.call(null,explicit_target_51408,field_target_51407)) && (cljs.core.not_EQ_.call(null,explicit_target_51408,default_target_51406));
} else {
return and__39210__auto__;
}
})();
if(cljs.core.truth_(relocate_QMARK__51409)){
var value_51410 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),default_target_51406);
cljs.core.swap_BANG_.call(null,state_atom,((function (seq__51389,chunk__51390,count__51391,i__51392,value_51410,default_target_51406,field_target_51407,explicit_target_51408,relocate_QMARK__51409,item,seq__51389__$1,temp__6753__auto__){
return (function (m){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,m,untangled.client.impl.data_fetch.data_query_key.call(null,item)),explicit_target_51408,value_51410);
});})(seq__51389,chunk__51390,count__51391,i__51392,value_51410,default_target_51406,field_target_51407,explicit_target_51408,relocate_QMARK__51409,item,seq__51389__$1,temp__6753__auto__))
);
} else {
}

var G__51411 = cljs.core.next.call(null,seq__51389__$1);
var G__51412 = null;
var G__51413 = (0);
var G__51414 = (0);
seq__51389 = G__51411;
chunk__51390 = G__51412;
count__51391 = G__51413;
i__51392 = G__51414;
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
var seq__51427 = cljs.core.seq.call(null,loading_items);
var chunk__51428 = null;
var count__51429 = (0);
var i__51430 = (0);
while(true){
if((i__51430 < count__51429)){
var item = cljs.core._nth.call(null,chunk__51428,i__51430);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__51427,chunk__51428,count__51429,i__51430,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__51431 = s;
var G__51431__$1 = cljs.core.update.call(null,G__51431,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__51431__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__51431__$1;
}
});})(seq__51427,chunk__51428,count__51429,i__51430,item,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__51439 = seq__51427;
var G__51440 = chunk__51428;
var G__51441 = count__51429;
var G__51442 = (i__51430 + (1));
seq__51427 = G__51439;
chunk__51428 = G__51440;
count__51429 = G__51441;
i__51430 = G__51442;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51427);
if(temp__6753__auto__){
var seq__51427__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51427__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__51427__$1);
var G__51443 = cljs.core.chunk_rest.call(null,seq__51427__$1);
var G__51444 = c__40133__auto__;
var G__51445 = cljs.core.count.call(null,c__40133__auto__);
var G__51446 = (0);
seq__51427 = G__51443;
chunk__51428 = G__51444;
count__51429 = G__51445;
i__51430 = G__51446;
continue;
} else {
var item = cljs.core.first.call(null,seq__51427__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__51427,chunk__51428,count__51429,i__51430,item,seq__51427__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations){
return (function (s){
var G__51432 = s;
var G__51432__$1 = cljs.core.update.call(null,G__51432,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item))
;
if(cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))){
return cljs.core.assoc_in.call(null,G__51432__$1,untangled.client.impl.data_fetch.data_path.call(null,item),null);
} else {
return G__51432__$1;
}
});})(seq__51427,chunk__51428,count__51429,i__51430,item,seq__51427__$1,temp__6753__auto__,query,loading_items,refresh_set,to_refresh,marked_response,app_state,ran_mutations))
);

var G__51447 = cljs.core.next.call(null,seq__51427__$1);
var G__51448 = null;
var G__51449 = (0);
var G__51450 = (0);
seq__51427 = G__51447;
chunk__51428 = G__51448;
count__51429 = G__51449;
i__51430 = G__51450;
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
var seq__51433 = cljs.core.seq.call(null,loading_items);
var chunk__51434 = null;
var count__51435 = (0);
var i__51436 = (0);
while(true){
if((i__51436 < count__51435)){
var item = cljs.core._nth.call(null,chunk__51434,i__51436);
var temp__6753__auto___51451 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___51451)){
var mutation_symbol_51452 = temp__6753__auto___51451;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_51453 = (function (){var or__39222__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__51437_51454 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_51452,params_51453);
var G__51437_51455__$1 = (((G__51437_51454 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51437_51454));
if((G__51437_51455__$1 == null)){
} else {
cljs.core.apply.call(null,G__51437_51455__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__51456 = seq__51433;
var G__51457 = chunk__51434;
var G__51458 = count__51435;
var G__51459 = (i__51436 + (1));
seq__51433 = G__51456;
chunk__51434 = G__51457;
count__51435 = G__51458;
i__51436 = G__51459;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51433);
if(temp__6753__auto__){
var seq__51433__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51433__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__51433__$1);
var G__51460 = cljs.core.chunk_rest.call(null,seq__51433__$1);
var G__51461 = c__40133__auto__;
var G__51462 = cljs.core.count.call(null,c__40133__auto__);
var G__51463 = (0);
seq__51433 = G__51460;
chunk__51434 = G__51461;
count__51435 = G__51462;
i__51436 = G__51463;
continue;
} else {
var item = cljs.core.first.call(null,seq__51433__$1);
var temp__6753__auto___51464__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation","untangled.client.impl.data-fetch/post-mutation",1595291971).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___51464__$1)){
var mutation_symbol_51465 = temp__6753__auto___51464__$1;
cljs.core.reset_BANG_.call(null,ran_mutations,true);

var params_51466 = (function (){var or__39222__auto__ = new cljs.core.Keyword("untangled.client.impl.data-fetch","post-mutation-params","untangled.client.impl.data-fetch/post-mutation-params",1847417555).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__51438_51467 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),om.next.app_state.call(null,reconciler)], null),mutation_symbol_51465,params_51466);
var G__51438_51468__$1 = (((G__51438_51467 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51438_51467));
if((G__51438_51468__$1 == null)){
} else {
cljs.core.apply.call(null,G__51438_51468__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__51469 = cljs.core.next.call(null,seq__51433__$1);
var G__51470 = null;
var G__51471 = (0);
var G__51472 = (0);
seq__51433 = G__51469;
chunk__51434 = G__51470;
count__51435 = G__51471;
i__51436 = G__51472;
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

var seq__51485 = cljs.core.seq.call(null,loading_items);
var chunk__51486 = null;
var count__51487 = (0);
var i__51488 = (0);
while(true){
if((i__51488 < count__51487)){
var item = cljs.core._nth.call(null,chunk__51486,i__51488);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__51485,chunk__51486,count__51487,i__51488,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__51489 = s;
var G__51489__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__51489,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__51489);
return cljs.core.update.call(null,G__51489__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__51485,chunk__51486,count__51487,i__51488,item,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__51497 = seq__51485;
var G__51498 = chunk__51486;
var G__51499 = count__51487;
var G__51500 = (i__51488 + (1));
seq__51485 = G__51497;
chunk__51486 = G__51498;
count__51487 = G__51499;
i__51488 = G__51500;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51485);
if(temp__6753__auto__){
var seq__51485__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51485__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__51485__$1);
var G__51501 = cljs.core.chunk_rest.call(null,seq__51485__$1);
var G__51502 = c__40133__auto__;
var G__51503 = cljs.core.count.call(null,c__40133__auto__);
var G__51504 = (0);
seq__51485 = G__51501;
chunk__51486 = G__51502;
count__51487 = G__51503;
i__51488 = G__51504;
continue;
} else {
var item = cljs.core.first.call(null,seq__51485__$1);
cljs.core.swap_BANG_.call(null,app_state,((function (seq__51485,chunk__51486,count__51487,i__51488,item,seq__51485__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks){
return (function (s){
var G__51490 = s;
var G__51490__$1 = (cljs.core.truth_(untangled.client.impl.data_fetch.data_marker_QMARK_.call(null,item))?cljs.core.update_in.call(null,G__51490,cljs.core.conj.call(null,untangled.client.impl.data_fetch.data_path.call(null,item),new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927)),untangled.client.impl.data_fetch.set_failed_BANG_,error):G__51490);
return cljs.core.update.call(null,G__51490__$1,new cljs.core.Keyword("untangled","loads-in-progress","untangled/loads-in-progress",-1826138825),cljs.core.disj,untangled.client.impl.data_fetch.data_uuid.call(null,item));

});})(seq__51485,chunk__51486,count__51487,i__51488,item,seq__51485__$1,temp__6753__auto__,loading_items,app_state,refresh_set,to_refresh,ran_fallbacks))
);

var G__51505 = cljs.core.next.call(null,seq__51485__$1);
var G__51506 = null;
var G__51507 = (0);
var G__51508 = (0);
seq__51485 = G__51505;
chunk__51486 = G__51506;
count__51487 = G__51507;
i__51488 = G__51508;
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
var seq__51491 = cljs.core.seq.call(null,loading_items);
var chunk__51492 = null;
var count__51493 = (0);
var i__51494 = (0);
while(true){
if((i__51494 < count__51493)){
var item = cljs.core._nth.call(null,chunk__51492,i__51494);
var temp__6753__auto___51509 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___51509)){
var fallback_symbol_51510 = temp__6753__auto___51509;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__51495_51511 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_51510,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__51495_51512__$1 = (((G__51495_51511 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51495_51511));
if((G__51495_51512__$1 == null)){
} else {
cljs.core.apply.call(null,G__51495_51512__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__51513 = seq__51491;
var G__51514 = chunk__51492;
var G__51515 = count__51493;
var G__51516 = (i__51494 + (1));
seq__51491 = G__51513;
chunk__51492 = G__51514;
count__51493 = G__51515;
i__51494 = G__51516;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51491);
if(temp__6753__auto__){
var seq__51491__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51491__$1)){
var c__40133__auto__ = cljs.core.chunk_first.call(null,seq__51491__$1);
var G__51517 = cljs.core.chunk_rest.call(null,seq__51491__$1);
var G__51518 = c__40133__auto__;
var G__51519 = cljs.core.count.call(null,c__40133__auto__);
var G__51520 = (0);
seq__51491 = G__51517;
chunk__51492 = G__51518;
count__51493 = G__51519;
i__51494 = G__51520;
continue;
} else {
var item = cljs.core.first.call(null,seq__51491__$1);
var temp__6753__auto___51521__$1 = new cljs.core.Keyword("untangled.client.impl.data-fetch","fallback","untangled.client.impl.data-fetch/fallback",1294531829).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__6753__auto___51521__$1)){
var fallback_symbol_51522 = temp__6753__auto___51521__$1;
cljs.core.reset_BANG_.call(null,ran_fallbacks,true);

var G__51496_51523 = untangled.client.mutations.mutate.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),app_state], null),fallback_symbol_51522,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null));
var G__51496_51524__$1 = (((G__51496_51523 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51496_51523));
if((G__51496_51524__$1 == null)){
} else {
cljs.core.apply.call(null,G__51496_51524__$1,cljs.core.PersistentVector.EMPTY);
}
} else {
}

var G__51525 = cljs.core.next.call(null,seq__51491__$1);
var G__51526 = null;
var G__51527 = (0);
var G__51528 = (0);
seq__51491 = G__51525;
chunk__51492 = G__51526;
count__51493 = G__51527;
i__51494 = G__51528;
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

//# sourceMappingURL=data_fetch.js.map?rel=1491695670825