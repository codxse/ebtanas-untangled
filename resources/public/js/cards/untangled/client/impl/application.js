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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__82805,query){
var map__82808 = p__82805;
var map__82808__$1 = ((((!((map__82808 == null)))?((((map__82808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82808):map__82808);
var reconciler = cljs.core.get.call(null,map__82808__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__82808,map__82808__$1,reconciler){
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
;})(map__82808,map__82808__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__){
return (function (state_82825){
var state_val_82826 = (state_82825[(1)]);
if((state_val_82826 === (1))){
var state_82825__$1 = state_82825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82825__$1,(2),q,v);
} else {
if((state_val_82826 === (2))){
var inst_82823 = (state_82825[(2)]);
var state_82825__$1 = state_82825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82825__$1,inst_82823);
} else {
return null;
}
}
});})(c__48312__auto__))
;
return ((function (switch__48198__auto__,c__48312__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__48199__auto____0 = (function (){
var statearr_82830 = [null,null,null,null,null,null,null];
(statearr_82830[(0)] = untangled$client$impl$application$enqueue_$_state_machine__48199__auto__);

(statearr_82830[(1)] = (1));

return statearr_82830;
});
var untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1 = (function (state_82825){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_82825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e82831){if((e82831 instanceof Object)){
var ex__48202__auto__ = e82831;
var statearr_82832_82834 = state_82825;
(statearr_82832_82834[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82835 = state_82825;
state_82825 = G__82835;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__ = function(state_82825){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1.call(this,state_82825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__48199__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_82833 = f__48313__auto__.call(null);
(statearr_82833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_82833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__))
);

return c__48312__auto__;
});
/**
 * Do a properly-plumbed network send. This function recursively strips ui attributes from the tx and pushes the tx over
 *   the network. It installs the given on-load and on-error handlers to deal with the network response.
 */
untangled.client.impl.application.real_send = (function untangled$client$impl$application$real_send(net,tx,on_done,on_error,on_load){
if(((!((net == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === net.untangled$client$impl$network$ProgressiveTransfer$)))?true:false):false)){
return untangled.client.impl.network.updating_send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_done,on_error,on_load);
} else {
return untangled.client.impl.network.send.call(null,net,untangled.client.impl.om_plumbing.strip_ui.call(null,tx),on_done,on_error);
}
});
/**
 * Splits out the (remote) mutations and fallbacks in a transaction, creates an error handler that can
 * trigger fallbacks, and enqueues the remote mutations on the network queue.
 */
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__82839,remote_tx_map,cb){
var map__82846 = p__82839;
var map__82846__$1 = ((((!((map__82846 == null)))?((((map__82846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82846):map__82846);
var app = map__82846__$1;
var send_queues = cljs.core.get.call(null,map__82846__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var networking = cljs.core.get.call(null,map__82846__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__82848 = cljs.core.seq.call(null,cljs.core.keys.call(null,remote_tx_map));
var chunk__82849 = null;
var count__82850 = (0);
var i__82851 = (0);
while(true){
if((i__82851 < count__82850)){
var remote = cljs.core._nth.call(null,chunk__82849,i__82851);
var queue_82852 = cljs.core.get.call(null,send_queues,remote);
var full_remote_transaction_82853 = cljs.core.get.call(null,remote_tx_map,remote);
var fallback_82854 = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction_82853);
var desired_remote_mutations_82855 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction_82853);
var has_mutations_QMARK__82856 = (cljs.core.count.call(null,desired_remote_mutations_82855) > (0));
var payload_82857 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations_82855,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (seq__82848,chunk__82849,count__82850,i__82851,queue_82852,full_remote_transaction_82853,fallback_82854,desired_remote_mutations_82855,has_mutations_QMARK__82856,remote,map__82846,map__82846__$1,app,send_queues,networking){
return (function (p1__82838_SHARP_){
return fallback_82854.call(null,p1__82838_SHARP_);
});})(seq__82848,chunk__82849,count__82850,i__82851,queue_82852,full_remote_transaction_82853,fallback_82854,desired_remote_mutations_82855,has_mutations_QMARK__82856,remote,map__82846,map__82846__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__82856){
untangled.client.impl.application.enqueue.call(null,queue_82852,payload_82857);
} else {
}

var G__82858 = seq__82848;
var G__82859 = chunk__82849;
var G__82860 = count__82850;
var G__82861 = (i__82851 + (1));
seq__82848 = G__82858;
chunk__82849 = G__82859;
count__82850 = G__82860;
i__82851 = G__82861;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82848);
if(temp__6753__auto__){
var seq__82848__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82848__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__82848__$1);
var G__82862 = cljs.core.chunk_rest.call(null,seq__82848__$1);
var G__82863 = c__35466__auto__;
var G__82864 = cljs.core.count.call(null,c__35466__auto__);
var G__82865 = (0);
seq__82848 = G__82862;
chunk__82849 = G__82863;
count__82850 = G__82864;
i__82851 = G__82865;
continue;
} else {
var remote = cljs.core.first.call(null,seq__82848__$1);
var queue_82866 = cljs.core.get.call(null,send_queues,remote);
var full_remote_transaction_82867 = cljs.core.get.call(null,remote_tx_map,remote);
var fallback_82868 = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction_82867);
var desired_remote_mutations_82869 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction_82867);
var has_mutations_QMARK__82870 = (cljs.core.count.call(null,desired_remote_mutations_82869) > (0));
var payload_82871 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations_82869,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (seq__82848,chunk__82849,count__82850,i__82851,queue_82866,full_remote_transaction_82867,fallback_82868,desired_remote_mutations_82869,has_mutations_QMARK__82870,remote,seq__82848__$1,temp__6753__auto__,map__82846,map__82846__$1,app,send_queues,networking){
return (function (p1__82838_SHARP_){
return fallback_82868.call(null,p1__82838_SHARP_);
});})(seq__82848,chunk__82849,count__82850,i__82851,queue_82866,full_remote_transaction_82867,fallback_82868,desired_remote_mutations_82869,has_mutations_QMARK__82870,remote,seq__82848__$1,temp__6753__auto__,map__82846,map__82846__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__82870){
untangled.client.impl.application.enqueue.call(null,queue_82866,payload_82871);
} else {
}

var G__82872 = cljs.core.next.call(null,seq__82848__$1);
var G__82873 = null;
var G__82874 = (0);
var G__82875 = (0);
seq__82848 = G__82872;
chunk__82849 = G__82873;
count__82850 = G__82874;
i__82851 = G__82875;
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__82878){
var map__82901 = p__82878;
var map__82901__$1 = ((((!((map__82901 == null)))?((((map__82901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82901):map__82901);
var send_queues = cljs.core.get.call(null,map__82901__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.call(null,map__82901__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__82901__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__82903 = cljs.core.seq.call(null,cljs.core.keys.call(null,send_queues));
var chunk__82904 = null;
var count__82905 = (0);
var i__82906 = (0);
while(true){
if((i__82906 < count__82905)){
var remote = cljs.core._nth.call(null,chunk__82904,i__82906);
var queue_82923 = cljs.core.get.call(null,send_queues,remote);
var network_82924 = cljs.core.get.call(null,networking,remote);
var parallel_payload_82925 = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,remote,reconciler);
var seq__82907_82926 = cljs.core.seq.call(null,parallel_payload_82925);
var chunk__82908_82927 = null;
var count__82909_82928 = (0);
var i__82910_82929 = (0);
while(true){
if((i__82910_82929 < count__82909_82928)){
var map__82911_82930 = cljs.core._nth.call(null,chunk__82908_82927,i__82910_82929);
var map__82911_82931__$1 = ((((!((map__82911_82930 == null)))?((((map__82911_82930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82911_82930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82911_82930):map__82911_82930);
var query_82932 = cljs.core.get.call(null,map__82911_82931__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_82933 = cljs.core.get.call(null,map__82911_82931__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_82934 = cljs.core.get.call(null,map__82911_82931__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_82935 = cljs.core.get.call(null,map__82911_82931__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__82936 = ((function (seq__82907_82926,chunk__82908_82927,count__82909_82928,i__82910_82929,seq__82903,chunk__82904,count__82905,i__82906,map__82911_82930,map__82911_82931__$1,query_82932,on_load_82933,on_error_82934,load_descriptors_82935,queue_82923,network_82924,parallel_payload_82925,remote,map__82901,map__82901__$1,send_queues,reconciler,networking){
return (function (p1__82876_SHARP_){
return on_load_82933.call(null,p1__82876_SHARP_,load_descriptors_82935);
});})(seq__82907_82926,chunk__82908_82927,count__82909_82928,i__82910_82929,seq__82903,chunk__82904,count__82905,i__82906,map__82911_82930,map__82911_82931__$1,query_82932,on_load_82933,on_error_82934,load_descriptors_82935,queue_82923,network_82924,parallel_payload_82925,remote,map__82901,map__82901__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__82937 = ((function (seq__82907_82926,chunk__82908_82927,count__82909_82928,i__82910_82929,seq__82903,chunk__82904,count__82905,i__82906,on_load_SINGLEQUOTE__82936,map__82911_82930,map__82911_82931__$1,query_82932,on_load_82933,on_error_82934,load_descriptors_82935,queue_82923,network_82924,parallel_payload_82925,remote,map__82901,map__82901__$1,send_queues,reconciler,networking){
return (function (p1__82877_SHARP_){
return on_error_82934.call(null,p1__82877_SHARP_,load_descriptors_82935);
});})(seq__82907_82926,chunk__82908_82927,count__82909_82928,i__82910_82929,seq__82903,chunk__82904,count__82905,i__82906,on_load_SINGLEQUOTE__82936,map__82911_82930,map__82911_82931__$1,query_82932,on_load_82933,on_error_82934,load_descriptors_82935,queue_82923,network_82924,parallel_payload_82925,remote,map__82901,map__82901__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_82924,query_82932,on_load_SINGLEQUOTE__82936,on_error_SINGLEQUOTE__82937,null);

var G__82938 = seq__82907_82926;
var G__82939 = chunk__82908_82927;
var G__82940 = count__82909_82928;
var G__82941 = (i__82910_82929 + (1));
seq__82907_82926 = G__82938;
chunk__82908_82927 = G__82939;
count__82909_82928 = G__82940;
i__82910_82929 = G__82941;
continue;
} else {
var temp__6753__auto___82942 = cljs.core.seq.call(null,seq__82907_82926);
if(temp__6753__auto___82942){
var seq__82907_82943__$1 = temp__6753__auto___82942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82907_82943__$1)){
var c__35466__auto___82944 = cljs.core.chunk_first.call(null,seq__82907_82943__$1);
var G__82945 = cljs.core.chunk_rest.call(null,seq__82907_82943__$1);
var G__82946 = c__35466__auto___82944;
var G__82947 = cljs.core.count.call(null,c__35466__auto___82944);
var G__82948 = (0);
seq__82907_82926 = G__82945;
chunk__82908_82927 = G__82946;
count__82909_82928 = G__82947;
i__82910_82929 = G__82948;
continue;
} else {
var map__82913_82949 = cljs.core.first.call(null,seq__82907_82943__$1);
var map__82913_82950__$1 = ((((!((map__82913_82949 == null)))?((((map__82913_82949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82913_82949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82913_82949):map__82913_82949);
var query_82951 = cljs.core.get.call(null,map__82913_82950__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_82952 = cljs.core.get.call(null,map__82913_82950__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_82953 = cljs.core.get.call(null,map__82913_82950__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_82954 = cljs.core.get.call(null,map__82913_82950__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__82955 = ((function (seq__82907_82926,chunk__82908_82927,count__82909_82928,i__82910_82929,seq__82903,chunk__82904,count__82905,i__82906,map__82913_82949,map__82913_82950__$1,query_82951,on_load_82952,on_error_82953,load_descriptors_82954,seq__82907_82943__$1,temp__6753__auto___82942,queue_82923,network_82924,parallel_payload_82925,remote,map__82901,map__82901__$1,send_queues,reconciler,networking){
return (function (p1__82876_SHARP_){
return on_load_82952.call(null,p1__82876_SHARP_,load_descriptors_82954);
});})(seq__82907_82926,chunk__82908_82927,count__82909_82928,i__82910_82929,seq__82903,chunk__82904,count__82905,i__82906,map__82913_82949,map__82913_82950__$1,query_82951,on_load_82952,on_error_82953,load_descriptors_82954,seq__82907_82943__$1,temp__6753__auto___82942,queue_82923,network_82924,parallel_payload_82925,remote,map__82901,map__82901__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__82956 = ((function (seq__82907_82926,chunk__82908_82927,count__82909_82928,i__82910_82929,seq__82903,chunk__82904,count__82905,i__82906,on_load_SINGLEQUOTE__82955,map__82913_82949,map__82913_82950__$1,query_82951,on_load_82952,on_error_82953,load_descriptors_82954,seq__82907_82943__$1,temp__6753__auto___82942,queue_82923,network_82924,parallel_payload_82925,remote,map__82901,map__82901__$1,send_queues,reconciler,networking){
return (function (p1__82877_SHARP_){
return on_error_82953.call(null,p1__82877_SHARP_,load_descriptors_82954);
});})(seq__82907_82926,chunk__82908_82927,count__82909_82928,i__82910_82929,seq__82903,chunk__82904,count__82905,i__82906,on_load_SINGLEQUOTE__82955,map__82913_82949,map__82913_82950__$1,query_82951,on_load_82952,on_error_82953,load_descriptors_82954,seq__82907_82943__$1,temp__6753__auto___82942,queue_82923,network_82924,parallel_payload_82925,remote,map__82901,map__82901__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_82924,query_82951,on_load_SINGLEQUOTE__82955,on_error_SINGLEQUOTE__82956,null);

var G__82957 = cljs.core.next.call(null,seq__82907_82943__$1);
var G__82958 = null;
var G__82959 = (0);
var G__82960 = (0);
seq__82907_82926 = G__82957;
chunk__82908_82927 = G__82958;
count__82909_82928 = G__82959;
i__82910_82929 = G__82960;
continue;
}
} else {
}
}
break;
}

var fetch_payload_82961 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_82961)){
untangled.client.impl.application.enqueue.call(null,queue_82923,cljs.core.assoc.call(null,fetch_payload_82961,new cljs.core.Keyword(null,"networking","networking",586110628),network_82924));

var G__82962 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
fetch_payload_82961 = G__82962;
continue;
} else {
}
break;
}

var G__82963 = seq__82903;
var G__82964 = chunk__82904;
var G__82965 = count__82905;
var G__82966 = (i__82906 + (1));
seq__82903 = G__82963;
chunk__82904 = G__82964;
count__82905 = G__82965;
i__82906 = G__82966;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__82903);
if(temp__6753__auto__){
var seq__82903__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82903__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__82903__$1);
var G__82967 = cljs.core.chunk_rest.call(null,seq__82903__$1);
var G__82968 = c__35466__auto__;
var G__82969 = cljs.core.count.call(null,c__35466__auto__);
var G__82970 = (0);
seq__82903 = G__82967;
chunk__82904 = G__82968;
count__82905 = G__82969;
i__82906 = G__82970;
continue;
} else {
var remote = cljs.core.first.call(null,seq__82903__$1);
var queue_82971 = cljs.core.get.call(null,send_queues,remote);
var network_82972 = cljs.core.get.call(null,networking,remote);
var parallel_payload_82973 = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,remote,reconciler);
var seq__82915_82974 = cljs.core.seq.call(null,parallel_payload_82973);
var chunk__82916_82975 = null;
var count__82917_82976 = (0);
var i__82918_82977 = (0);
while(true){
if((i__82918_82977 < count__82917_82976)){
var map__82919_82978 = cljs.core._nth.call(null,chunk__82916_82975,i__82918_82977);
var map__82919_82979__$1 = ((((!((map__82919_82978 == null)))?((((map__82919_82978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82919_82978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82919_82978):map__82919_82978);
var query_82980 = cljs.core.get.call(null,map__82919_82979__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_82981 = cljs.core.get.call(null,map__82919_82979__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_82982 = cljs.core.get.call(null,map__82919_82979__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_82983 = cljs.core.get.call(null,map__82919_82979__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__82984 = ((function (seq__82915_82974,chunk__82916_82975,count__82917_82976,i__82918_82977,seq__82903,chunk__82904,count__82905,i__82906,map__82919_82978,map__82919_82979__$1,query_82980,on_load_82981,on_error_82982,load_descriptors_82983,queue_82971,network_82972,parallel_payload_82973,remote,seq__82903__$1,temp__6753__auto__,map__82901,map__82901__$1,send_queues,reconciler,networking){
return (function (p1__82876_SHARP_){
return on_load_82981.call(null,p1__82876_SHARP_,load_descriptors_82983);
});})(seq__82915_82974,chunk__82916_82975,count__82917_82976,i__82918_82977,seq__82903,chunk__82904,count__82905,i__82906,map__82919_82978,map__82919_82979__$1,query_82980,on_load_82981,on_error_82982,load_descriptors_82983,queue_82971,network_82972,parallel_payload_82973,remote,seq__82903__$1,temp__6753__auto__,map__82901,map__82901__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__82985 = ((function (seq__82915_82974,chunk__82916_82975,count__82917_82976,i__82918_82977,seq__82903,chunk__82904,count__82905,i__82906,on_load_SINGLEQUOTE__82984,map__82919_82978,map__82919_82979__$1,query_82980,on_load_82981,on_error_82982,load_descriptors_82983,queue_82971,network_82972,parallel_payload_82973,remote,seq__82903__$1,temp__6753__auto__,map__82901,map__82901__$1,send_queues,reconciler,networking){
return (function (p1__82877_SHARP_){
return on_error_82982.call(null,p1__82877_SHARP_,load_descriptors_82983);
});})(seq__82915_82974,chunk__82916_82975,count__82917_82976,i__82918_82977,seq__82903,chunk__82904,count__82905,i__82906,on_load_SINGLEQUOTE__82984,map__82919_82978,map__82919_82979__$1,query_82980,on_load_82981,on_error_82982,load_descriptors_82983,queue_82971,network_82972,parallel_payload_82973,remote,seq__82903__$1,temp__6753__auto__,map__82901,map__82901__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_82972,query_82980,on_load_SINGLEQUOTE__82984,on_error_SINGLEQUOTE__82985,null);

var G__82986 = seq__82915_82974;
var G__82987 = chunk__82916_82975;
var G__82988 = count__82917_82976;
var G__82989 = (i__82918_82977 + (1));
seq__82915_82974 = G__82986;
chunk__82916_82975 = G__82987;
count__82917_82976 = G__82988;
i__82918_82977 = G__82989;
continue;
} else {
var temp__6753__auto___82990__$1 = cljs.core.seq.call(null,seq__82915_82974);
if(temp__6753__auto___82990__$1){
var seq__82915_82991__$1 = temp__6753__auto___82990__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82915_82991__$1)){
var c__35466__auto___82992 = cljs.core.chunk_first.call(null,seq__82915_82991__$1);
var G__82993 = cljs.core.chunk_rest.call(null,seq__82915_82991__$1);
var G__82994 = c__35466__auto___82992;
var G__82995 = cljs.core.count.call(null,c__35466__auto___82992);
var G__82996 = (0);
seq__82915_82974 = G__82993;
chunk__82916_82975 = G__82994;
count__82917_82976 = G__82995;
i__82918_82977 = G__82996;
continue;
} else {
var map__82921_82997 = cljs.core.first.call(null,seq__82915_82991__$1);
var map__82921_82998__$1 = ((((!((map__82921_82997 == null)))?((((map__82921_82997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82921_82997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82921_82997):map__82921_82997);
var query_82999 = cljs.core.get.call(null,map__82921_82998__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_83000 = cljs.core.get.call(null,map__82921_82998__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_83001 = cljs.core.get.call(null,map__82921_82998__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_83002 = cljs.core.get.call(null,map__82921_82998__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__83003 = ((function (seq__82915_82974,chunk__82916_82975,count__82917_82976,i__82918_82977,seq__82903,chunk__82904,count__82905,i__82906,map__82921_82997,map__82921_82998__$1,query_82999,on_load_83000,on_error_83001,load_descriptors_83002,seq__82915_82991__$1,temp__6753__auto___82990__$1,queue_82971,network_82972,parallel_payload_82973,remote,seq__82903__$1,temp__6753__auto__,map__82901,map__82901__$1,send_queues,reconciler,networking){
return (function (p1__82876_SHARP_){
return on_load_83000.call(null,p1__82876_SHARP_,load_descriptors_83002);
});})(seq__82915_82974,chunk__82916_82975,count__82917_82976,i__82918_82977,seq__82903,chunk__82904,count__82905,i__82906,map__82921_82997,map__82921_82998__$1,query_82999,on_load_83000,on_error_83001,load_descriptors_83002,seq__82915_82991__$1,temp__6753__auto___82990__$1,queue_82971,network_82972,parallel_payload_82973,remote,seq__82903__$1,temp__6753__auto__,map__82901,map__82901__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__83004 = ((function (seq__82915_82974,chunk__82916_82975,count__82917_82976,i__82918_82977,seq__82903,chunk__82904,count__82905,i__82906,on_load_SINGLEQUOTE__83003,map__82921_82997,map__82921_82998__$1,query_82999,on_load_83000,on_error_83001,load_descriptors_83002,seq__82915_82991__$1,temp__6753__auto___82990__$1,queue_82971,network_82972,parallel_payload_82973,remote,seq__82903__$1,temp__6753__auto__,map__82901,map__82901__$1,send_queues,reconciler,networking){
return (function (p1__82877_SHARP_){
return on_error_83001.call(null,p1__82877_SHARP_,load_descriptors_83002);
});})(seq__82915_82974,chunk__82916_82975,count__82917_82976,i__82918_82977,seq__82903,chunk__82904,count__82905,i__82906,on_load_SINGLEQUOTE__83003,map__82921_82997,map__82921_82998__$1,query_82999,on_load_83000,on_error_83001,load_descriptors_83002,seq__82915_82991__$1,temp__6753__auto___82990__$1,queue_82971,network_82972,parallel_payload_82973,remote,seq__82903__$1,temp__6753__auto__,map__82901,map__82901__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_82972,query_82999,on_load_SINGLEQUOTE__83003,on_error_SINGLEQUOTE__83004,null);

var G__83005 = cljs.core.next.call(null,seq__82915_82991__$1);
var G__83006 = null;
var G__83007 = (0);
var G__83008 = (0);
seq__82915_82974 = G__83005;
chunk__82916_82975 = G__83006;
count__82917_82976 = G__83007;
i__82918_82977 = G__83008;
continue;
}
} else {
}
}
break;
}

var fetch_payload_83009 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_83009)){
untangled.client.impl.application.enqueue.call(null,queue_82971,cljs.core.assoc.call(null,fetch_payload_83009,new cljs.core.Keyword(null,"networking","networking",586110628),network_82972));

var G__83010 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
fetch_payload_83009 = G__83010;
continue;
} else {
}
break;
}

var G__83011 = cljs.core.next.call(null,seq__82903__$1);
var G__83012 = null;
var G__83013 = (0);
var G__83014 = (0);
seq__82903 = G__83011;
chunk__82904 = G__83012;
count__82905 = G__83013;
i__82906 = G__83014;
continue;
}
} else {
return null;
}
}
break;
}
});
untangled.client.impl.application.detect_errant_remotes = (function untangled$client$impl$application$detect_errant_remotes(p__83015){
var map__83018 = p__83015;
var map__83018__$1 = ((((!((map__83018 == null)))?((((map__83018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83018):map__83018);
var app = map__83018__$1;
var reconciler = cljs.core.get.call(null,map__83018__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.call(null,map__83018__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var state = om.next.app_state.call(null,reconciler);
var all_items = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("untangled","ready-to-load","untangled/ready-to-load",-617804257));
var item_remotes = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,untangled.client.impl.data_fetch.data_remote,all_items));
var all_remotes = cljs.core.set.call(null,cljs.core.keys.call(null,send_queues));
var invalid_remotes = clojure.set.difference.call(null,item_remotes,all_remotes);
if(cljs.core.truth_(cljs.core.not_empty.call(null,invalid_remotes))){
return untangled.client.logging.error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Use of invalid remote(s) detected! "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid_remotes)].join(''));
} else {
return null;
}
});
/**
 * Puts queries/mutations (and their corresponding callbacks) onto the send queue. The networking code will pull these
 *   off one at a time and send them through the real networking layer. Reads are guaranteed to *follow* writes.
 */
untangled.client.impl.application.server_send = (function untangled$client$impl$application$server_send(app,remote_tx_map,cb){
untangled.client.impl.application.detect_errant_remotes.call(null,app);

untangled.client.impl.application.enqueue_mutations.call(null,app,remote_tx_map,cb);

return untangled.client.impl.application.enqueue_reads.call(null,app);
});
/**
 * Sends a network payload. There are two kinds of payloads in Untanged. The first is
 *   for reads, which are tracked by load descriptors in the app state. These load descriptors
 *   tell the plumbing how to handle the response, and expect to only be merged in once. Mutations
 *   do not have a payload, and can technically received progress updates from the network. The built-in
 *   networking does not (currently) give progress events, but plugin networking can. It is currently not
 *   supported to give an update on a load, so this function is careful to detect that a payload is a send
 *   and turns all but the last update into a no-op. The send-complete function comes from the
 *   network sequential processing loop, and when called unblocks the network processing to allow the
 *   next request to go. Be very careful with this code, as bugs will cause applications to stop responding
 *   to remote requests.
 */
untangled.client.impl.application.send_payload = (function untangled$client$impl$application$send_payload(network,payload,send_complete){
var map__83024 = payload;
var map__83024__$1 = ((((!((map__83024 == null)))?((((map__83024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83024):map__83024);
var query = cljs.core.get.call(null,map__83024__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load = cljs.core.get.call(null,map__83024__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error = cljs.core.get.call(null,map__83024__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors = cljs.core.get.call(null,map__83024__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__83024,map__83024__$1,query,on_load,on_error,load_descriptors){
return (function (p1__83020_SHARP_){
return on_load.call(null,p1__83020_SHARP_,load_descriptors);
});})(map__83024,map__83024__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__83024,map__83024__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__83021_SHARP_){
return on_error.call(null,p1__83021_SHARP_,load_descriptors);
});})(map__83024,map__83024__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
:on_error);
var on_error__$2 = cljs.core.comp.call(null,send_complete,on_error__$1);
var on_done = cljs.core.comp.call(null,send_complete,merge_data);
return untangled.client.impl.application.real_send.call(null,network,query,on_done,on_error__$2,on_update);
});
/**
 * Starts a async go loop that sends network requests on a networking object's request queue. Must be called once and only
 *   once for each active networking object on the UI. Each iteration of the loop pulls off a
 *   single request, sends it, waits for the response, and then repeats. Gives the appearance of a separate networking
 *   'thread' using core async.
 */
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__83026){
var map__83113 = p__83026;
var map__83113__$1 = ((((!((map__83113 == null)))?((((map__83113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83113):map__83113);
var networking = cljs.core.get.call(null,map__83113__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var send_queues = cljs.core.get.call(null,map__83113__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.call(null,map__83113__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__83115 = cljs.core.seq.call(null,cljs.core.keys.call(null,send_queues));
var chunk__83116 = null;
var count__83117 = (0);
var i__83118 = (0);
while(true){
if((i__83118 < count__83117)){
var remote = cljs.core._nth.call(null,chunk__83116,i__83118);
var queue_83199 = cljs.core.get.call(null,send_queues,remote);
var network_83200 = cljs.core.get.call(null,networking,remote);
var response_channel_83201 = cljs.core.get.call(null,response_channels,remote);
var send_complete_83202 = ((function (seq__83115,chunk__83116,count__83117,i__83118,queue_83199,network_83200,response_channel_83201,remote,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto__,queue_83199,network_83200,response_channel_83201,remote,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto__,queue_83199,network_83200,response_channel_83201,remote,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (state_83122){
var state_val_83123 = (state_83122[(1)]);
if((state_val_83123 === (1))){
var state_83122__$1 = state_83122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83122__$1,(2),response_channel_83201,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_83123 === (2))){
var inst_83120 = (state_83122[(2)]);
var state_83122__$1 = state_83122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83122__$1,inst_83120);
} else {
return null;
}
}
});})(seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto__,queue_83199,network_83200,response_channel_83201,remote,map__83113,map__83113__$1,networking,send_queues,response_channels))
;
return ((function (seq__83115,chunk__83116,count__83117,i__83118,switch__48198__auto__,c__48312__auto__,queue_83199,network_83200,response_channel_83201,remote,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_83127 = [null,null,null,null,null,null,null];
(statearr_83127[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_83127[(1)] = (1));

return statearr_83127;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_83122){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_83122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e83128){if((e83128 instanceof Object)){
var ex__48202__auto__ = e83128;
var statearr_83129_83203 = state_83122;
(statearr_83129_83203[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83204 = state_83122;
state_83122 = G__83204;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_83122){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_83122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__83115,chunk__83116,count__83117,i__83118,switch__48198__auto__,c__48312__auto__,queue_83199,network_83200,response_channel_83201,remote,map__83113,map__83113__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_83130 = f__48313__auto__.call(null);
(statearr_83130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_83130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto__,queue_83199,network_83200,response_channel_83201,remote,map__83113,map__83113__$1,networking,send_queues,response_channels))
);

return c__48312__auto__;
});})(seq__83115,chunk__83116,count__83117,i__83118,queue_83199,network_83200,response_channel_83201,remote,map__83113,map__83113__$1,networking,send_queues,response_channels))
;
var c__48312__auto___83205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto___83205,queue_83199,network_83200,response_channel_83201,send_complete_83202,remote,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto___83205,queue_83199,network_83200,response_channel_83201,send_complete_83202,remote,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (state_83144){
var state_val_83145 = (state_83144[(1)]);
if((state_val_83145 === (1))){
var state_83144__$1 = state_83144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83144__$1,(2),queue_83199);
} else {
if((state_val_83145 === (2))){
var inst_83132 = (state_83144[(2)]);
var inst_83133 = inst_83132;
var state_83144__$1 = (function (){var statearr_83146 = state_83144;
(statearr_83146[(7)] = inst_83133);

return statearr_83146;
})();
var statearr_83147_83206 = state_83144__$1;
(statearr_83147_83206[(2)] = null);

(statearr_83147_83206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83145 === (3))){
var inst_83133 = (state_83144[(7)]);
var inst_83135 = untangled.client.impl.application.send_payload.call(null,network_83200,inst_83133,send_complete_83202);
var state_83144__$1 = (function (){var statearr_83148 = state_83144;
(statearr_83148[(8)] = inst_83135);

return statearr_83148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83144__$1,(5),response_channel_83201);
} else {
if((state_val_83145 === (4))){
var inst_83142 = (state_83144[(2)]);
var state_83144__$1 = state_83144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83144__$1,inst_83142);
} else {
if((state_val_83145 === (5))){
var inst_83137 = (state_83144[(2)]);
var state_83144__$1 = (function (){var statearr_83149 = state_83144;
(statearr_83149[(9)] = inst_83137);

return statearr_83149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83144__$1,(6),queue_83199);
} else {
if((state_val_83145 === (6))){
var inst_83139 = (state_83144[(2)]);
var inst_83133 = inst_83139;
var state_83144__$1 = (function (){var statearr_83150 = state_83144;
(statearr_83150[(7)] = inst_83133);

return statearr_83150;
})();
var statearr_83151_83207 = state_83144__$1;
(statearr_83151_83207[(2)] = null);

(statearr_83151_83207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto___83205,queue_83199,network_83200,response_channel_83201,send_complete_83202,remote,map__83113,map__83113__$1,networking,send_queues,response_channels))
;
return ((function (seq__83115,chunk__83116,count__83117,i__83118,switch__48198__auto__,c__48312__auto___83205,queue_83199,network_83200,response_channel_83201,send_complete_83202,remote,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_83155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_83155[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_83155[(1)] = (1));

return statearr_83155;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_83144){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_83144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e83156){if((e83156 instanceof Object)){
var ex__48202__auto__ = e83156;
var statearr_83157_83208 = state_83144;
(statearr_83157_83208[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83209 = state_83144;
state_83144 = G__83209;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_83144){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_83144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__83115,chunk__83116,count__83117,i__83118,switch__48198__auto__,c__48312__auto___83205,queue_83199,network_83200,response_channel_83201,send_complete_83202,remote,map__83113,map__83113__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_83158 = f__48313__auto__.call(null);
(statearr_83158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___83205);

return statearr_83158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto___83205,queue_83199,network_83200,response_channel_83201,send_complete_83202,remote,map__83113,map__83113__$1,networking,send_queues,response_channels))
);


var G__83210 = seq__83115;
var G__83211 = chunk__83116;
var G__83212 = count__83117;
var G__83213 = (i__83118 + (1));
seq__83115 = G__83210;
chunk__83116 = G__83211;
count__83117 = G__83212;
i__83118 = G__83213;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__83115);
if(temp__6753__auto__){
var seq__83115__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83115__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__83115__$1);
var G__83214 = cljs.core.chunk_rest.call(null,seq__83115__$1);
var G__83215 = c__35466__auto__;
var G__83216 = cljs.core.count.call(null,c__35466__auto__);
var G__83217 = (0);
seq__83115 = G__83214;
chunk__83116 = G__83215;
count__83117 = G__83216;
i__83118 = G__83217;
continue;
} else {
var remote = cljs.core.first.call(null,seq__83115__$1);
var queue_83218 = cljs.core.get.call(null,send_queues,remote);
var network_83219 = cljs.core.get.call(null,networking,remote);
var response_channel_83220 = cljs.core.get.call(null,response_channels,remote);
var send_complete_83221 = ((function (seq__83115,chunk__83116,count__83117,i__83118,queue_83218,network_83219,response_channel_83220,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto__,queue_83218,network_83219,response_channel_83220,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto__,queue_83218,network_83219,response_channel_83220,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (state_83162){
var state_val_83163 = (state_83162[(1)]);
if((state_val_83163 === (1))){
var state_83162__$1 = state_83162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83162__$1,(2),response_channel_83220,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_83163 === (2))){
var inst_83160 = (state_83162[(2)]);
var state_83162__$1 = state_83162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83162__$1,inst_83160);
} else {
return null;
}
}
});})(seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto__,queue_83218,network_83219,response_channel_83220,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels))
;
return ((function (seq__83115,chunk__83116,count__83117,i__83118,switch__48198__auto__,c__48312__auto__,queue_83218,network_83219,response_channel_83220,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_83167 = [null,null,null,null,null,null,null];
(statearr_83167[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_83167[(1)] = (1));

return statearr_83167;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_83162){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_83162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e83168){if((e83168 instanceof Object)){
var ex__48202__auto__ = e83168;
var statearr_83169_83222 = state_83162;
(statearr_83169_83222[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83223 = state_83162;
state_83162 = G__83223;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_83162){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_83162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__83115,chunk__83116,count__83117,i__83118,switch__48198__auto__,c__48312__auto__,queue_83218,network_83219,response_channel_83220,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_83170 = f__48313__auto__.call(null);
(statearr_83170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_83170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto__,queue_83218,network_83219,response_channel_83220,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels))
);

return c__48312__auto__;
});})(seq__83115,chunk__83116,count__83117,i__83118,queue_83218,network_83219,response_channel_83220,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels))
;
var c__48312__auto___83224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto___83224,queue_83218,network_83219,response_channel_83220,send_complete_83221,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto___83224,queue_83218,network_83219,response_channel_83220,send_complete_83221,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function (state_83184){
var state_val_83185 = (state_83184[(1)]);
if((state_val_83185 === (1))){
var state_83184__$1 = state_83184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83184__$1,(2),queue_83218);
} else {
if((state_val_83185 === (2))){
var inst_83172 = (state_83184[(2)]);
var inst_83173 = inst_83172;
var state_83184__$1 = (function (){var statearr_83186 = state_83184;
(statearr_83186[(7)] = inst_83173);

return statearr_83186;
})();
var statearr_83187_83225 = state_83184__$1;
(statearr_83187_83225[(2)] = null);

(statearr_83187_83225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83185 === (3))){
var inst_83173 = (state_83184[(7)]);
var inst_83175 = untangled.client.impl.application.send_payload.call(null,network_83219,inst_83173,send_complete_83221);
var state_83184__$1 = (function (){var statearr_83188 = state_83184;
(statearr_83188[(8)] = inst_83175);

return statearr_83188;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83184__$1,(5),response_channel_83220);
} else {
if((state_val_83185 === (4))){
var inst_83182 = (state_83184[(2)]);
var state_83184__$1 = state_83184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83184__$1,inst_83182);
} else {
if((state_val_83185 === (5))){
var inst_83177 = (state_83184[(2)]);
var state_83184__$1 = (function (){var statearr_83189 = state_83184;
(statearr_83189[(9)] = inst_83177);

return statearr_83189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83184__$1,(6),queue_83218);
} else {
if((state_val_83185 === (6))){
var inst_83179 = (state_83184[(2)]);
var inst_83173 = inst_83179;
var state_83184__$1 = (function (){var statearr_83190 = state_83184;
(statearr_83190[(7)] = inst_83173);

return statearr_83190;
})();
var statearr_83191_83226 = state_83184__$1;
(statearr_83191_83226[(2)] = null);

(statearr_83191_83226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto___83224,queue_83218,network_83219,response_channel_83220,send_complete_83221,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels))
;
return ((function (seq__83115,chunk__83116,count__83117,i__83118,switch__48198__auto__,c__48312__auto___83224,queue_83218,network_83219,response_channel_83220,send_complete_83221,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_83195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_83195[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_83195[(1)] = (1));

return statearr_83195;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_83184){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_83184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e83196){if((e83196 instanceof Object)){
var ex__48202__auto__ = e83196;
var statearr_83197_83227 = state_83184;
(statearr_83197_83227[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83228 = state_83184;
state_83184 = G__83228;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_83184){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_83184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__83115,chunk__83116,count__83117,i__83118,switch__48198__auto__,c__48312__auto___83224,queue_83218,network_83219,response_channel_83220,send_complete_83221,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_83198 = f__48313__auto__.call(null);
(statearr_83198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___83224);

return statearr_83198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__83115,chunk__83116,count__83117,i__83118,c__48312__auto___83224,queue_83218,network_83219,response_channel_83220,send_complete_83221,remote,seq__83115__$1,temp__6753__auto__,map__83113,map__83113__$1,networking,send_queues,response_channels))
);


var G__83229 = cljs.core.next.call(null,seq__83115__$1);
var G__83230 = null;
var G__83231 = (0);
var G__83232 = (0);
seq__83115 = G__83229;
chunk__83116 = G__83230;
count__83117 = G__83231;
i__83118 = G__83232;
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
return cljs.core.reduce.call(null,(function (acc,p__83237){
var vec__83238 = p__83237;
var k = cljs.core.nth.call(null,vec__83238,(0),null);
var v = cljs.core.nth.call(null,vec__83238,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__83245){
var vec__83246 = p__83245;
var k = cljs.core.nth.call(null,vec__83246,(0),null);
var v = cljs.core.nth.call(null,vec__83246,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__83253){
var vec__83254 = p__83253;
var k = cljs.core.nth.call(null,vec__83254,(0),null);
var v = cljs.core.nth.call(null,vec__83254,(1),null);
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
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__83265){
var vec__83266 = p__83265;
var k = cljs.core.nth.call(null,vec__83266,(0),null);
var _ = cljs.core.nth.call(null,vec__83266,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__83269){
var vec__83270 = p__83269;
var k = cljs.core.nth.call(null,vec__83270,(0),null);
var v = cljs.core.nth.call(null,vec__83270,(1),null);
if(cljs.core.truth_((function (){var and__34543__auto__ = mutation_merge;
if(cljs.core.truth_(and__34543__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__34543__auto__;
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__83273,initial_state,parser,p__83274){
var map__83283 = p__83273;
var map__83283__$1 = ((((!((map__83283 == null)))?((((map__83283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83283):map__83283);
var app = map__83283__$1;
var send_queues = cljs.core.get.call(null,map__83283__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.call(null,map__83283__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__83284 = p__83274;
var map__83284__$1 = ((((!((map__83284 == null)))?((((map__83284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83284):map__83284);
var pathopt = cljs.core.get.call(null,map__83284__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__83284__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__83284__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var remotes = cljs.core.keys.call(null,send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__83283,map__83283__$1,app,send_queues,mutation_merge,map__83284,map__83284__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
var seq__83287_83291 = cljs.core.seq.call(null,cljs.core.vals.call(null,send_queues));
var chunk__83288_83292 = null;
var count__83289_83293 = (0);
var i__83290_83294 = (0);
while(true){
if((i__83290_83294 < count__83289_83293)){
var queue_83295 = cljs.core._nth.call(null,chunk__83288_83292,i__83290_83294);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue_83295,tempids);

var G__83296 = seq__83287_83291;
var G__83297 = chunk__83288_83292;
var G__83298 = count__83289_83293;
var G__83299 = (i__83290_83294 + (1));
seq__83287_83291 = G__83296;
chunk__83288_83292 = G__83297;
count__83289_83293 = G__83298;
i__83290_83294 = G__83299;
continue;
} else {
var temp__6753__auto___83300 = cljs.core.seq.call(null,seq__83287_83291);
if(temp__6753__auto___83300){
var seq__83287_83301__$1 = temp__6753__auto___83300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83287_83301__$1)){
var c__35466__auto___83302 = cljs.core.chunk_first.call(null,seq__83287_83301__$1);
var G__83303 = cljs.core.chunk_rest.call(null,seq__83287_83301__$1);
var G__83304 = c__35466__auto___83302;
var G__83305 = cljs.core.count.call(null,c__35466__auto___83302);
var G__83306 = (0);
seq__83287_83291 = G__83303;
chunk__83288_83292 = G__83304;
count__83289_83293 = G__83305;
i__83290_83294 = G__83306;
continue;
} else {
var queue_83307 = cljs.core.first.call(null,seq__83287_83301__$1);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue_83307,tempids);

var G__83308 = cljs.core.next.call(null,seq__83287_83301__$1);
var G__83309 = null;
var G__83310 = (0);
var G__83311 = (0);
seq__83287_83291 = G__83308;
chunk__83288_83292 = G__83309;
count__83289_83293 = G__83310;
i__83290_83294 = G__83311;
continue;
}
} else {
}
}
break;
}

var state_migrate = (function (){var or__34555__auto__ = migrate;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
return state_migrate.call(null,pure,tempids);
});})(rec_atom,remotes,map__83283,map__83283__$1,app,send_queues,mutation_merge,map__83284,map__83284__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[pathopt,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__83283,map__83283__$1,app,send_queues,mutation_merge,map__83284,map__83284__$1,pathopt,migrate,shared){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.call(null,app_state,ident,cljs.core.comp.call(null,untangled.client.impl.application.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__83283,map__83283__$1,app,send_queues,mutation_merge,map__83284,map__83284__$1,pathopt,migrate,shared))
,remotes,(function (){var or__34555__auto__ = migrate;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return tempid_migrate;
}
})(),initial_state_with_locale,parser,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__83283,map__83283__$1,app,send_queues,mutation_merge,map__83284,map__83284__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__83283,map__83283__$1,app,send_queues,mutation_merge,map__83284,map__83284__$1,pathopt,migrate,shared))
,shared,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__83283,map__83283__$1,app,send_queues,mutation_merge,map__83284,map__83284__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__83283,map__83283__$1,app,send_queues,mutation_merge,map__83284,map__83284__$1,pathopt,migrate,shared))
,true]);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callbacks = (function untangled$client$impl$application$initialize_global_error_callbacks(app){
var seq__83317 = cljs.core.seq.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__83318 = null;
var count__83319 = (0);
var i__83320 = (0);
while(true){
if((i__83320 < count__83319)){
var remote = cljs.core._nth.call(null,chunk__83318,i__83320);
var cb_atom_83321 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom_83321))){
cljs.core.swap_BANG_.call(null,cb_atom_83321,((function (seq__83317,chunk__83318,count__83319,i__83320,cb_atom_83321,remote){
return (function (p1__83312_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__83312_SHARP_)){
return cljs.core.partial.call(null,p1__83312_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__83317,chunk__83318,count__83319,i__83320,cb_atom_83321,remote))
);
} else {
}

var G__83322 = seq__83317;
var G__83323 = chunk__83318;
var G__83324 = count__83319;
var G__83325 = (i__83320 + (1));
seq__83317 = G__83322;
chunk__83318 = G__83323;
count__83319 = G__83324;
i__83320 = G__83325;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__83317);
if(temp__6753__auto__){
var seq__83317__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83317__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__83317__$1);
var G__83326 = cljs.core.chunk_rest.call(null,seq__83317__$1);
var G__83327 = c__35466__auto__;
var G__83328 = cljs.core.count.call(null,c__35466__auto__);
var G__83329 = (0);
seq__83317 = G__83326;
chunk__83318 = G__83327;
count__83319 = G__83328;
i__83320 = G__83329;
continue;
} else {
var remote = cljs.core.first.call(null,seq__83317__$1);
var cb_atom_83330 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom_83330))){
cljs.core.swap_BANG_.call(null,cb_atom_83330,((function (seq__83317,chunk__83318,count__83319,i__83320,cb_atom_83330,remote,seq__83317__$1,temp__6753__auto__){
return (function (p1__83312_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__83312_SHARP_)){
return cljs.core.partial.call(null,p1__83312_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__83317,chunk__83318,count__83319,i__83320,cb_atom_83330,remote,seq__83317__$1,temp__6753__auto__))
);
} else {
}

var G__83331 = cljs.core.next.call(null,seq__83317__$1);
var G__83332 = null;
var G__83333 = (0);
var G__83334 = (0);
seq__83317 = G__83331;
chunk__83318 = G__83332;
count__83319 = G__83333;
i__83320 = G__83334;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=application.js.map?rel=1491640817787