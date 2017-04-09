// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.application');
goog.require('cljs.core');
goog.require('untangled.client.logging');
goog.require('om.next');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.client.impl.util');
goog.require('cljs.core.async');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.impl.om_plumbing');
goog.require('untangled.i18n.core');
/**
 * This internal function is responsible for generating and returning a function that can accomplish calling the fallbacks that
 *   appear in an incoming Om transaction, which is in turn used by the error-handling logic of the plumbing.
 */
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__224905,query){
var map__224908 = p__224905;
var map__224908__$1 = ((((!((map__224908 == null)))?((((map__224908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__224908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__224908):map__224908);
var reconciler = cljs.core.get.call(null,map__224908__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__224908,map__224908__$1,reconciler){
return (function (error){
cljs.core.swap_BANG_.call(null,om.next.app_state.call(null,reconciler),cljs.core.assoc,new cljs.core.Keyword("untangled","server-error","untangled/server-error",1542377811),error);

var temp__6751__auto__ = untangled.client.impl.om_plumbing.fallback_query.call(null,query,error);
if(cljs.core.truth_(temp__6751__auto__)){
var q = temp__6751__auto__;
untangled.client.logging.warn.call(null,untangled.client.logging.value_message.call(null,"Transaction failed. Running fallback.",q));

return om.next.transact_BANG_.call(null,reconciler,q);
} else {
return untangled.client.logging.warn.call(null,"Fallback triggered, but no fallbacks were defined.");
}
});
;})(map__224908,map__224908__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__){
return (function (state_224925){
var state_val_224926 = (state_224925[(1)]);
if((state_val_224926 === (1))){
var state_224925__$1 = state_224925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_224925__$1,(2),q,v);
} else {
if((state_val_224926 === (2))){
var inst_224923 = (state_224925[(2)]);
var state_224925__$1 = state_224925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_224925__$1,inst_224923);
} else {
return null;
}
}
});})(c__44084__auto__))
;
return ((function (switch__44061__auto__,c__44084__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__44062__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__44062__auto____0 = (function (){
var statearr_224930 = [null,null,null,null,null,null,null];
(statearr_224930[(0)] = untangled$client$impl$application$enqueue_$_state_machine__44062__auto__);

(statearr_224930[(1)] = (1));

return statearr_224930;
});
var untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1 = (function (state_224925){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_224925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e224931){if((e224931 instanceof Object)){
var ex__44065__auto__ = e224931;
var statearr_224932_224934 = state_224925;
(statearr_224932_224934[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_224925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e224931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__224935 = state_224925;
state_224925 = G__224935;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__ = function(state_224925){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1.call(this,state_224925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__44062__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_224933 = f__44085__auto__.call(null);
(statearr_224933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_224933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__))
);

return c__44084__auto__;
});
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response.
 */
untangled.client.impl.application.real_send = (function untangled$client$impl$application$real_send(net,tx,on_load,on_error){
return untangled.client.impl.network.send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_load,on_error);
});
/**
 * Splits out the (remote) mutations and fallbacks in a transaction, creates an error handler that can
 * trigger fallbacks, and enqueues the remote mutations on the network queue.
 */
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__224937,remote_tx_map,cb){
var map__224940 = p__224937;
var map__224940__$1 = ((((!((map__224940 == null)))?((((map__224940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__224940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__224940):map__224940);
var app = map__224940__$1;
var queue = cljs.core.get.call(null,map__224940__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__224940,map__224940__$1,app,queue){
return (function (p1__224936_SHARP_){
return fallback.call(null,p1__224936_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__224940,map__224940__$1,app,queue))
], null);
if(has_mutations_QMARK_){
return untangled.client.impl.application.enqueue.call(null,queue,payload);
} else {
return null;
}
});
/**
 * Finds any loads marked `parallel` and triggers real network requests immediately. Remaining loads
 *   are pulled into a single fetch payload (combined into one query) and enqueued behind any prior mutations/reads that
 *   were already requested in a prior UI/event cycle. Thus non-parallel reads are processed in clusters grouped due to UI
 *   events (a single event might trigger many reads which will all go to the server as a single combined request).
 *   Further UI events that trigger remote interaction will end up waiting until prior network request(s) are complete.
 * 
 *   This ensures that default reasoning is simple and sequential in the face of optimistic UI updates (real network
 *   traffic characteristics could cause out of order processing, and you would not want
 *   a 'create list' to be processed on the server *after* an 'add an item to the list'). 
 */
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__224944){
var map__224955 = p__224944;
var map__224955__$1 = ((((!((map__224955 == null)))?((((map__224955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__224955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__224955):map__224955);
var queue = cljs.core.get.call(null,map__224955__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__224955__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__224955__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var seq__224957_224965 = cljs.core.seq.call(null,parallel_payload);
var chunk__224958_224966 = null;
var count__224959_224967 = (0);
var i__224960_224968 = (0);
while(true){
if((i__224960_224968 < count__224959_224967)){
var map__224961_224969 = cljs.core._nth.call(null,chunk__224958_224966,i__224960_224968);
var map__224961_224970__$1 = ((((!((map__224961_224969 == null)))?((((map__224961_224969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__224961_224969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__224961_224969):map__224961_224969);
var query_224971 = cljs.core.get.call(null,map__224961_224970__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_224972 = cljs.core.get.call(null,map__224961_224970__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_224973 = cljs.core.get.call(null,map__224961_224970__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_224974 = cljs.core.get.call(null,map__224961_224970__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__224975 = ((function (seq__224957_224965,chunk__224958_224966,count__224959_224967,i__224960_224968,map__224961_224969,map__224961_224970__$1,query_224971,on_load_224972,on_error_224973,callback_args_224974,parallel_payload,map__224955,map__224955__$1,queue,reconciler,networking){
return (function (p1__224942_SHARP_){
return on_load_224972.call(null,p1__224942_SHARP_,callback_args_224974);
});})(seq__224957_224965,chunk__224958_224966,count__224959_224967,i__224960_224968,map__224961_224969,map__224961_224970__$1,query_224971,on_load_224972,on_error_224973,callback_args_224974,parallel_payload,map__224955,map__224955__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__224976 = ((function (seq__224957_224965,chunk__224958_224966,count__224959_224967,i__224960_224968,on_load_SINGLEQUOTE__224975,map__224961_224969,map__224961_224970__$1,query_224971,on_load_224972,on_error_224973,callback_args_224974,parallel_payload,map__224955,map__224955__$1,queue,reconciler,networking){
return (function (p1__224943_SHARP_){
return on_error_224973.call(null,p1__224943_SHARP_,callback_args_224974);
});})(seq__224957_224965,chunk__224958_224966,count__224959_224967,i__224960_224968,on_load_SINGLEQUOTE__224975,map__224961_224969,map__224961_224970__$1,query_224971,on_load_224972,on_error_224973,callback_args_224974,parallel_payload,map__224955,map__224955__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_224971,on_load_SINGLEQUOTE__224975,on_error_SINGLEQUOTE__224976);

var G__224977 = seq__224957_224965;
var G__224978 = chunk__224958_224966;
var G__224979 = count__224959_224967;
var G__224980 = (i__224960_224968 + (1));
seq__224957_224965 = G__224977;
chunk__224958_224966 = G__224978;
count__224959_224967 = G__224979;
i__224960_224968 = G__224980;
continue;
} else {
var temp__6753__auto___224981 = cljs.core.seq.call(null,seq__224957_224965);
if(temp__6753__auto___224981){
var seq__224957_224982__$1 = temp__6753__auto___224981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__224957_224982__$1)){
var c__40117__auto___224983 = cljs.core.chunk_first.call(null,seq__224957_224982__$1);
var G__224984 = cljs.core.chunk_rest.call(null,seq__224957_224982__$1);
var G__224985 = c__40117__auto___224983;
var G__224986 = cljs.core.count.call(null,c__40117__auto___224983);
var G__224987 = (0);
seq__224957_224965 = G__224984;
chunk__224958_224966 = G__224985;
count__224959_224967 = G__224986;
i__224960_224968 = G__224987;
continue;
} else {
var map__224963_224988 = cljs.core.first.call(null,seq__224957_224982__$1);
var map__224963_224989__$1 = ((((!((map__224963_224988 == null)))?((((map__224963_224988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__224963_224988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__224963_224988):map__224963_224988);
var query_224990 = cljs.core.get.call(null,map__224963_224989__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_224991 = cljs.core.get.call(null,map__224963_224989__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_224992 = cljs.core.get.call(null,map__224963_224989__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_224993 = cljs.core.get.call(null,map__224963_224989__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__224994 = ((function (seq__224957_224965,chunk__224958_224966,count__224959_224967,i__224960_224968,map__224963_224988,map__224963_224989__$1,query_224990,on_load_224991,on_error_224992,callback_args_224993,seq__224957_224982__$1,temp__6753__auto___224981,parallel_payload,map__224955,map__224955__$1,queue,reconciler,networking){
return (function (p1__224942_SHARP_){
return on_load_224991.call(null,p1__224942_SHARP_,callback_args_224993);
});})(seq__224957_224965,chunk__224958_224966,count__224959_224967,i__224960_224968,map__224963_224988,map__224963_224989__$1,query_224990,on_load_224991,on_error_224992,callback_args_224993,seq__224957_224982__$1,temp__6753__auto___224981,parallel_payload,map__224955,map__224955__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__224995 = ((function (seq__224957_224965,chunk__224958_224966,count__224959_224967,i__224960_224968,on_load_SINGLEQUOTE__224994,map__224963_224988,map__224963_224989__$1,query_224990,on_load_224991,on_error_224992,callback_args_224993,seq__224957_224982__$1,temp__6753__auto___224981,parallel_payload,map__224955,map__224955__$1,queue,reconciler,networking){
return (function (p1__224943_SHARP_){
return on_error_224992.call(null,p1__224943_SHARP_,callback_args_224993);
});})(seq__224957_224965,chunk__224958_224966,count__224959_224967,i__224960_224968,on_load_SINGLEQUOTE__224994,map__224963_224988,map__224963_224989__$1,query_224990,on_load_224991,on_error_224992,callback_args_224993,seq__224957_224982__$1,temp__6753__auto___224981,parallel_payload,map__224955,map__224955__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_224990,on_load_SINGLEQUOTE__224994,on_error_SINGLEQUOTE__224995);

var G__224996 = cljs.core.next.call(null,seq__224957_224982__$1);
var G__224997 = null;
var G__224998 = (0);
var G__224999 = (0);
seq__224957_224965 = G__224996;
chunk__224958_224966 = G__224997;
count__224959_224967 = G__224998;
i__224960_224968 = G__224999;
continue;
}
} else {
}
}
break;
}

var fetch_payload = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload)){
untangled.client.impl.application.enqueue.call(null,queue,cljs.core.assoc.call(null,fetch_payload,new cljs.core.Keyword(null,"networking","networking",586110628),networking));

var G__225000 = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
fetch_payload = G__225000;
continue;
} else {
return null;
}
break;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking code will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
untangled.client.impl.application.server_send = (function untangled$client$impl$application$server_send(app,remote_tx_map,cb){
untangled.client.impl.application.enqueue_mutations.call(null,app,remote_tx_map,cb);

return untangled.client.impl.application.enqueue_reads.call(null,app);
});
/**
 * Starts a async go loop that sends network requests on a networking object's request queue. Must be called once and only
 *   once for each active networking object on the UI. Each iteration of the loop pulls off a
 *   single request, sends it, waits for the response, and then repeats. Gives the appearance of a separate networking
 *   'thread' using core async.
 */
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__225001){
var map__225120 = p__225001;
var map__225120__$1 = ((((!((map__225120 == null)))?((((map__225120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225120):map__225120);
var networking = cljs.core.get.call(null,map__225120__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__225120__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__225120__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__225120,map__225120__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__225120,map__225120__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__44084__auto___225238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___225238,map__225120,map__225120__$1,networking,queue,response_channel){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___225238,map__225120,map__225120__$1,networking,queue,response_channel){
return (function (state_225161){
var state_val_225162 = (state_225161[(1)]);
if((state_val_225162 === (1))){
var state_225161__$1 = state_225161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_225161__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_225162 === (2))){
var inst_225159 = (state_225161[(2)]);
var state_225161__$1 = state_225161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225161__$1,inst_225159);
} else {
return null;
}
}
});})(c__44084__auto___225238,map__225120,map__225120__$1,networking,queue,response_channel))
;
return ((function (switch__44061__auto__,c__44084__auto___225238,map__225120,map__225120__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0 = (function (){
var statearr_225166 = [null,null,null,null,null,null,null];
(statearr_225166[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__);

(statearr_225166[(1)] = (1));

return statearr_225166;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1 = (function (state_225161){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_225161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e225167){if((e225167 instanceof Object)){
var ex__44065__auto__ = e225167;
var statearr_225168_225239 = state_225161;
(statearr_225168_225239[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e225167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__225240 = state_225161;
state_225161 = G__225240;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__ = function(state_225161){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1.call(this,state_225161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___225238,map__225120,map__225120__$1,networking,queue,response_channel))
})();
var state__44086__auto__ = (function (){var statearr_225169 = f__44085__auto__.call(null);
(statearr_225169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___225238);

return statearr_225169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___225238,map__225120,map__225120__$1,networking,queue,response_channel))
);

}});
;})(map__225120,map__225120__$1,networking,queue,response_channel))
});})(map__225120,map__225120__$1,networking,queue,response_channel))
;
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,map__225120,map__225120__$1,networking,queue,response_channel){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,map__225120,map__225120__$1,networking,queue,response_channel){
return (function (state_225211){
var state_val_225212 = (state_225211[(1)]);
if((state_val_225212 === (7))){
var inst_225190 = (state_225211[(2)]);
var state_225211__$1 = state_225211;
if(cljs.core.truth_(inst_225190)){
var statearr_225213_225241 = state_225211__$1;
(statearr_225213_225241[(1)] = (11));

} else {
var statearr_225214_225242 = state_225211__$1;
(statearr_225214_225242[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (1))){
var state_225211__$1 = state_225211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225211__$1,(2),queue);
} else {
if((state_val_225212 === (4))){
var inst_225209 = (state_225211[(2)]);
var state_225211__$1 = state_225211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225211__$1,inst_225209);
} else {
if((state_val_225212 === (15))){
var inst_225206 = (state_225211[(2)]);
var inst_225172 = inst_225206;
var state_225211__$1 = (function (){var statearr_225215 = state_225211;
(statearr_225215[(7)] = inst_225172);

return statearr_225215;
})();
var statearr_225216_225243 = state_225211__$1;
(statearr_225216_225243[(2)] = null);

(statearr_225216_225243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (13))){
var inst_225195 = (state_225211[(2)]);
var inst_225196 = cljs.core.get.call(null,inst_225195,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_225197 = cljs.core.get.call(null,inst_225195,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_225198 = cljs.core.get.call(null,inst_225195,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_225199 = cljs.core.get.call(null,inst_225195,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_225200 = make_process_response.call(null,inst_225197,inst_225199);
var inst_225201 = make_process_response.call(null,inst_225198,inst_225199);
var inst_225202 = untangled.client.impl.application.real_send.call(null,networking,inst_225196,inst_225200,inst_225201);
var state_225211__$1 = (function (){var statearr_225217 = state_225211;
(statearr_225217[(8)] = inst_225202);

return statearr_225217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225211__$1,(14),response_channel);
} else {
if((state_val_225212 === (6))){
var state_225211__$1 = state_225211;
var statearr_225218_225244 = state_225211__$1;
(statearr_225218_225244[(2)] = false);

(statearr_225218_225244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (3))){
var inst_225172 = (state_225211[(7)]);
var inst_225176 = (inst_225172 == null);
var inst_225177 = cljs.core.not.call(null,inst_225176);
var state_225211__$1 = state_225211;
if(inst_225177){
var statearr_225219_225245 = state_225211__$1;
(statearr_225219_225245[(1)] = (5));

} else {
var statearr_225220_225246 = state_225211__$1;
(statearr_225220_225246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (12))){
var inst_225172 = (state_225211[(7)]);
var state_225211__$1 = state_225211;
var statearr_225221_225247 = state_225211__$1;
(statearr_225221_225247[(2)] = inst_225172);

(statearr_225221_225247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (2))){
var inst_225171 = (state_225211[(2)]);
var inst_225172 = inst_225171;
var state_225211__$1 = (function (){var statearr_225222 = state_225211;
(statearr_225222[(7)] = inst_225172);

return statearr_225222;
})();
var statearr_225223_225248 = state_225211__$1;
(statearr_225223_225248[(2)] = null);

(statearr_225223_225248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (11))){
var inst_225172 = (state_225211[(7)]);
var inst_225192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_225172);
var state_225211__$1 = state_225211;
var statearr_225224_225249 = state_225211__$1;
(statearr_225224_225249[(2)] = inst_225192);

(statearr_225224_225249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (9))){
var state_225211__$1 = state_225211;
var statearr_225225_225250 = state_225211__$1;
(statearr_225225_225250[(2)] = false);

(statearr_225225_225250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (5))){
var inst_225172 = (state_225211[(7)]);
var inst_225179 = inst_225172.cljs$lang$protocol_mask$partition0$;
var inst_225180 = (inst_225179 & (64));
var inst_225181 = inst_225172.cljs$core$ISeq$;
var inst_225182 = (cljs.core.PROTOCOL_SENTINEL === inst_225181);
var inst_225183 = (inst_225180) || (inst_225182);
var state_225211__$1 = state_225211;
if(cljs.core.truth_(inst_225183)){
var statearr_225226_225251 = state_225211__$1;
(statearr_225226_225251[(1)] = (8));

} else {
var statearr_225227_225252 = state_225211__$1;
(statearr_225227_225252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (14))){
var inst_225204 = (state_225211[(2)]);
var state_225211__$1 = (function (){var statearr_225228 = state_225211;
(statearr_225228[(9)] = inst_225204);

return statearr_225228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225211__$1,(15),queue);
} else {
if((state_val_225212 === (10))){
var inst_225187 = (state_225211[(2)]);
var state_225211__$1 = state_225211;
var statearr_225229_225253 = state_225211__$1;
(statearr_225229_225253[(2)] = inst_225187);

(statearr_225229_225253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_225212 === (8))){
var state_225211__$1 = state_225211;
var statearr_225230_225254 = state_225211__$1;
(statearr_225230_225254[(2)] = true);

(statearr_225230_225254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__44084__auto__,map__225120,map__225120__$1,networking,queue,response_channel))
;
return ((function (switch__44061__auto__,c__44084__auto__,map__225120,map__225120__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0 = (function (){
var statearr_225234 = [null,null,null,null,null,null,null,null,null,null];
(statearr_225234[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__);

(statearr_225234[(1)] = (1));

return statearr_225234;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1 = (function (state_225211){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_225211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e225235){if((e225235 instanceof Object)){
var ex__44065__auto__ = e225235;
var statearr_225236_225255 = state_225211;
(statearr_225236_225255[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e225235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__225256 = state_225211;
state_225211 = G__225256;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__ = function(state_225211){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1.call(this,state_225211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,map__225120,map__225120__$1,networking,queue,response_channel))
})();
var state__44086__auto__ = (function (){var statearr_225237 = f__44085__auto__.call(null);
(statearr_225237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_225237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,map__225120,map__225120__$1,networking,queue,response_channel))
);

return c__44084__auto__;
});
/**
 * Configure a re-render when the locale changes. During startup this function will be called once for each
 *   reconciler that is running on a page.
 */
untangled.client.impl.application.initialize_internationalization = (function untangled$client$impl$application$initialize_internationalization(reconciler){
cljs.core.remove_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697));

return cljs.core.add_watch.call(null,untangled.i18n.core._STAR_current_locale_STAR_,new cljs.core.Keyword(null,"locale","locale",-2115712697),(function (k,r,o,n){
if(om.next.mounted_QMARK_.call(null,om.next.app_root.call(null,reconciler))){
return om.next.force_root_render_BANG_.call(null,reconciler);
} else {
return null;
}
}));
});
/**
 * Remove not-found keys from m (non-recursive)
 */
untangled.client.impl.application.sweep_one = (function untangled$client$impl$application$sweep_one(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__225261){
var vec__225262 = p__225261;
var k = cljs.core.nth.call(null,vec__225262,(0),null);
var v = cljs.core.nth.call(null,vec__225262,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled.client.impl.application.sweep_one,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from v, stopping at marked leaves (if present)
 */
untangled.client.impl.application.sweep = (function untangled$client$impl$application$sweep(m){
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,m))){
return untangled.client.impl.application.sweep_one.call(null,m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce.call(null,(function (acc,p__225269){
var vec__225270 = p__225269;
var k = cljs.core.nth.call(null,vec__225270,(0),null);
var v = cljs.core.nth.call(null,vec__225270,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494),v)){
return acc;
} else {
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep.call(null,v));
}
}),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta.call(null,m)),m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.with_meta.call(null,cljs.core.mapv.call(null,untangled.client.impl.application.sweep,m),cljs.core.meta.call(null,m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target, but remove any target data that is marked as missing in the response. The
 *   missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess')
 */
untangled.client.impl.application.sweep_merge = (function untangled$client$impl$application$sweep_merge(target,source){
return cljs.core.reduce.call(null,(function (acc,p__225277){
var vec__225278 = p__225277;
var k = cljs.core.nth.call(null,vec__225278,(0),null);
var v = cljs.core.nth.call(null,vec__225278,(1),null);
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("untangled.client.impl.om-plumbing","not-found","untangled.client.impl.om-plumbing/not-found",-1009851494))){
return cljs.core.dissoc.call(null,acc,k);
} else {
if(cljs.core.truth_(untangled.client.impl.om_plumbing.leaf_QMARK_.call(null,v))){
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep_one.call(null,v));
} else {
if((cljs.core.map_QMARK_.call(null,cljs.core.get.call(null,acc,k))) && (cljs.core.map_QMARK_.call(null,v))){
return cljs.core.update.call(null,acc,k,untangled.client.impl.application.sweep_merge,v);
} else {
return cljs.core.assoc.call(null,acc,k,untangled.client.impl.application.sweep.call(null,v));

}
}
}
}),target,source);
});
untangled.client.impl.application.merge_handler = (function untangled$client$impl$application$merge_handler(mutation_merge,target,source){
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__225289){
var vec__225290 = p__225289;
var k = cljs.core.nth.call(null,vec__225290,(0),null);
var _ = cljs.core.nth.call(null,vec__225290,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__225293){
var vec__225294 = p__225293;
var k = cljs.core.nth.call(null,vec__225294,(0),null);
var v = cljs.core.nth.call(null,vec__225294,(1),null);
if(cljs.core.truth_((function (){var and__39194__auto__ = mutation_merge;
if(cljs.core.truth_(and__39194__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__39194__auto__;
}
})())){
var temp__6751__auto__ = mutation_merge.call(null,acc,k,cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"tempids","tempids",1767509089)));
if(cljs.core.truth_(temp__6751__auto__)){
var updated_state = temp__6751__auto__;
return updated_state;
} else {
untangled.client.logging.info.call(null,"Return value handler for",k,"returned nil. Ignored.");

return acc;
}
} else {
return acc;
}
});})(source_to_merge,merged_state))
,merged_state,source);
});
/**
 * The reconciler's send method calls UntangledApplication/server-send, which itself requires a reconciler with a
 *   send method already defined. This creates a catch-22 / circular dependency on the reconciler and :send field within
 *   the reconciler.
 * 
 *   To resolve the issue, we def an atom pointing to the reconciler that the send method will deref each time it is
 *   called. This allows us to define the reconciler with a send method that, at the time of initialization, has an app
 *   that points to a nil reconciler. By the end of this function, the app's reconciler reference has been properly set.
 */
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__225297,initial_state,parser,p__225298){
var map__225303 = p__225297;
var map__225303__$1 = ((((!((map__225303 == null)))?((((map__225303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225303):map__225303);
var app = map__225303__$1;
var queue = cljs.core.get.call(null,map__225303__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mutation_merge = cljs.core.get.call(null,map__225303__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__225304 = p__225298;
var map__225304__$1 = ((((!((map__225304 == null)))?((((map__225304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225304):map__225304);
var pathopt = cljs.core.get.call(null,map__225304__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__225304__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__225304__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__39206__auto__ = migrate;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__225303,map__225303__$1,app,queue,mutation_merge,map__225304,map__225304__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__225303,map__225303__$1,app,queue,mutation_merge,map__225304,map__225304__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__225303,map__225303__$1,app,queue,mutation_merge,map__225304,map__225304__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__225303,map__225303__$1,app,queue,mutation_merge,map__225304,map__225304__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__39206__auto__ = migrate;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__225303,map__225303__$1,app,queue,mutation_merge,map__225304,map__225304__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__225303,map__225303__$1,app,queue,mutation_merge,map__225304,map__225304__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app){
var cb_atom = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__225307_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__225307_SHARP_)){
return cljs.core.partial.call(null,p1__225307_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});

//# sourceMappingURL=application.js.map?rel=1491715144168