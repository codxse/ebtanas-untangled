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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__103834,query){
var map__103837 = p__103834;
var map__103837__$1 = ((((!((map__103837 == null)))?((((map__103837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103837):map__103837);
var reconciler = cljs.core.get.call(null,map__103837__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__103837,map__103837__$1,reconciler){
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
;})(map__103837,map__103837__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__){
return (function (state_103854){
var state_val_103855 = (state_103854[(1)]);
if((state_val_103855 === (1))){
var state_103854__$1 = state_103854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103854__$1,(2),q,v);
} else {
if((state_val_103855 === (2))){
var inst_103852 = (state_103854[(2)]);
var state_103854__$1 = state_103854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103854__$1,inst_103852);
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
var statearr_103859 = [null,null,null,null,null,null,null];
(statearr_103859[(0)] = untangled$client$impl$application$enqueue_$_state_machine__48199__auto__);

(statearr_103859[(1)] = (1));

return statearr_103859;
});
var untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1 = (function (state_103854){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_103854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e103860){if((e103860 instanceof Object)){
var ex__48202__auto__ = e103860;
var statearr_103861_103863 = state_103854;
(statearr_103861_103863[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103864 = state_103854;
state_103854 = G__103864;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__ = function(state_103854){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1.call(this,state_103854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__48199__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_103862 = f__48313__auto__.call(null);
(statearr_103862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_103862;
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
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__103868,remote_tx_map,cb){
var map__103875 = p__103868;
var map__103875__$1 = ((((!((map__103875 == null)))?((((map__103875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103875):map__103875);
var app = map__103875__$1;
var send_queues = cljs.core.get.call(null,map__103875__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var networking = cljs.core.get.call(null,map__103875__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__103877 = cljs.core.seq.call(null,cljs.core.keys.call(null,remote_tx_map));
var chunk__103878 = null;
var count__103879 = (0);
var i__103880 = (0);
while(true){
if((i__103880 < count__103879)){
var remote = cljs.core._nth.call(null,chunk__103878,i__103880);
var queue_103881 = cljs.core.get.call(null,send_queues,remote);
var full_remote_transaction_103882 = cljs.core.get.call(null,remote_tx_map,remote);
var fallback_103883 = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction_103882);
var desired_remote_mutations_103884 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction_103882);
var has_mutations_QMARK__103885 = (cljs.core.count.call(null,desired_remote_mutations_103884) > (0));
var payload_103886 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations_103884,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (seq__103877,chunk__103878,count__103879,i__103880,queue_103881,full_remote_transaction_103882,fallback_103883,desired_remote_mutations_103884,has_mutations_QMARK__103885,remote,map__103875,map__103875__$1,app,send_queues,networking){
return (function (p1__103867_SHARP_){
return fallback_103883.call(null,p1__103867_SHARP_);
});})(seq__103877,chunk__103878,count__103879,i__103880,queue_103881,full_remote_transaction_103882,fallback_103883,desired_remote_mutations_103884,has_mutations_QMARK__103885,remote,map__103875,map__103875__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__103885){
untangled.client.impl.application.enqueue.call(null,queue_103881,payload_103886);
} else {
}

var G__103887 = seq__103877;
var G__103888 = chunk__103878;
var G__103889 = count__103879;
var G__103890 = (i__103880 + (1));
seq__103877 = G__103887;
chunk__103878 = G__103888;
count__103879 = G__103889;
i__103880 = G__103890;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__103877);
if(temp__6753__auto__){
var seq__103877__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103877__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__103877__$1);
var G__103891 = cljs.core.chunk_rest.call(null,seq__103877__$1);
var G__103892 = c__35466__auto__;
var G__103893 = cljs.core.count.call(null,c__35466__auto__);
var G__103894 = (0);
seq__103877 = G__103891;
chunk__103878 = G__103892;
count__103879 = G__103893;
i__103880 = G__103894;
continue;
} else {
var remote = cljs.core.first.call(null,seq__103877__$1);
var queue_103895 = cljs.core.get.call(null,send_queues,remote);
var full_remote_transaction_103896 = cljs.core.get.call(null,remote_tx_map,remote);
var fallback_103897 = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction_103896);
var desired_remote_mutations_103898 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction_103896);
var has_mutations_QMARK__103899 = (cljs.core.count.call(null,desired_remote_mutations_103898) > (0));
var payload_103900 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations_103898,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (seq__103877,chunk__103878,count__103879,i__103880,queue_103895,full_remote_transaction_103896,fallback_103897,desired_remote_mutations_103898,has_mutations_QMARK__103899,remote,seq__103877__$1,temp__6753__auto__,map__103875,map__103875__$1,app,send_queues,networking){
return (function (p1__103867_SHARP_){
return fallback_103897.call(null,p1__103867_SHARP_);
});})(seq__103877,chunk__103878,count__103879,i__103880,queue_103895,full_remote_transaction_103896,fallback_103897,desired_remote_mutations_103898,has_mutations_QMARK__103899,remote,seq__103877__$1,temp__6753__auto__,map__103875,map__103875__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__103899){
untangled.client.impl.application.enqueue.call(null,queue_103895,payload_103900);
} else {
}

var G__103901 = cljs.core.next.call(null,seq__103877__$1);
var G__103902 = null;
var G__103903 = (0);
var G__103904 = (0);
seq__103877 = G__103901;
chunk__103878 = G__103902;
count__103879 = G__103903;
i__103880 = G__103904;
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__103907){
var map__103930 = p__103907;
var map__103930__$1 = ((((!((map__103930 == null)))?((((map__103930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103930):map__103930);
var send_queues = cljs.core.get.call(null,map__103930__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.call(null,map__103930__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__103930__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__103932 = cljs.core.seq.call(null,cljs.core.keys.call(null,send_queues));
var chunk__103933 = null;
var count__103934 = (0);
var i__103935 = (0);
while(true){
if((i__103935 < count__103934)){
var remote = cljs.core._nth.call(null,chunk__103933,i__103935);
var queue_103952 = cljs.core.get.call(null,send_queues,remote);
var network_103953 = cljs.core.get.call(null,networking,remote);
var parallel_payload_103954 = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,remote,reconciler);
var seq__103936_103955 = cljs.core.seq.call(null,parallel_payload_103954);
var chunk__103937_103956 = null;
var count__103938_103957 = (0);
var i__103939_103958 = (0);
while(true){
if((i__103939_103958 < count__103938_103957)){
var map__103940_103959 = cljs.core._nth.call(null,chunk__103937_103956,i__103939_103958);
var map__103940_103960__$1 = ((((!((map__103940_103959 == null)))?((((map__103940_103959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103940_103959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103940_103959):map__103940_103959);
var query_103961 = cljs.core.get.call(null,map__103940_103960__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_103962 = cljs.core.get.call(null,map__103940_103960__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_103963 = cljs.core.get.call(null,map__103940_103960__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_103964 = cljs.core.get.call(null,map__103940_103960__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__103965 = ((function (seq__103936_103955,chunk__103937_103956,count__103938_103957,i__103939_103958,seq__103932,chunk__103933,count__103934,i__103935,map__103940_103959,map__103940_103960__$1,query_103961,on_load_103962,on_error_103963,load_descriptors_103964,queue_103952,network_103953,parallel_payload_103954,remote,map__103930,map__103930__$1,send_queues,reconciler,networking){
return (function (p1__103905_SHARP_){
return on_load_103962.call(null,p1__103905_SHARP_,load_descriptors_103964);
});})(seq__103936_103955,chunk__103937_103956,count__103938_103957,i__103939_103958,seq__103932,chunk__103933,count__103934,i__103935,map__103940_103959,map__103940_103960__$1,query_103961,on_load_103962,on_error_103963,load_descriptors_103964,queue_103952,network_103953,parallel_payload_103954,remote,map__103930,map__103930__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__103966 = ((function (seq__103936_103955,chunk__103937_103956,count__103938_103957,i__103939_103958,seq__103932,chunk__103933,count__103934,i__103935,on_load_SINGLEQUOTE__103965,map__103940_103959,map__103940_103960__$1,query_103961,on_load_103962,on_error_103963,load_descriptors_103964,queue_103952,network_103953,parallel_payload_103954,remote,map__103930,map__103930__$1,send_queues,reconciler,networking){
return (function (p1__103906_SHARP_){
return on_error_103963.call(null,p1__103906_SHARP_,load_descriptors_103964);
});})(seq__103936_103955,chunk__103937_103956,count__103938_103957,i__103939_103958,seq__103932,chunk__103933,count__103934,i__103935,on_load_SINGLEQUOTE__103965,map__103940_103959,map__103940_103960__$1,query_103961,on_load_103962,on_error_103963,load_descriptors_103964,queue_103952,network_103953,parallel_payload_103954,remote,map__103930,map__103930__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_103953,query_103961,on_load_SINGLEQUOTE__103965,on_error_SINGLEQUOTE__103966,null);

var G__103967 = seq__103936_103955;
var G__103968 = chunk__103937_103956;
var G__103969 = count__103938_103957;
var G__103970 = (i__103939_103958 + (1));
seq__103936_103955 = G__103967;
chunk__103937_103956 = G__103968;
count__103938_103957 = G__103969;
i__103939_103958 = G__103970;
continue;
} else {
var temp__6753__auto___103971 = cljs.core.seq.call(null,seq__103936_103955);
if(temp__6753__auto___103971){
var seq__103936_103972__$1 = temp__6753__auto___103971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103936_103972__$1)){
var c__35466__auto___103973 = cljs.core.chunk_first.call(null,seq__103936_103972__$1);
var G__103974 = cljs.core.chunk_rest.call(null,seq__103936_103972__$1);
var G__103975 = c__35466__auto___103973;
var G__103976 = cljs.core.count.call(null,c__35466__auto___103973);
var G__103977 = (0);
seq__103936_103955 = G__103974;
chunk__103937_103956 = G__103975;
count__103938_103957 = G__103976;
i__103939_103958 = G__103977;
continue;
} else {
var map__103942_103978 = cljs.core.first.call(null,seq__103936_103972__$1);
var map__103942_103979__$1 = ((((!((map__103942_103978 == null)))?((((map__103942_103978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103942_103978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103942_103978):map__103942_103978);
var query_103980 = cljs.core.get.call(null,map__103942_103979__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_103981 = cljs.core.get.call(null,map__103942_103979__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_103982 = cljs.core.get.call(null,map__103942_103979__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_103983 = cljs.core.get.call(null,map__103942_103979__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__103984 = ((function (seq__103936_103955,chunk__103937_103956,count__103938_103957,i__103939_103958,seq__103932,chunk__103933,count__103934,i__103935,map__103942_103978,map__103942_103979__$1,query_103980,on_load_103981,on_error_103982,load_descriptors_103983,seq__103936_103972__$1,temp__6753__auto___103971,queue_103952,network_103953,parallel_payload_103954,remote,map__103930,map__103930__$1,send_queues,reconciler,networking){
return (function (p1__103905_SHARP_){
return on_load_103981.call(null,p1__103905_SHARP_,load_descriptors_103983);
});})(seq__103936_103955,chunk__103937_103956,count__103938_103957,i__103939_103958,seq__103932,chunk__103933,count__103934,i__103935,map__103942_103978,map__103942_103979__$1,query_103980,on_load_103981,on_error_103982,load_descriptors_103983,seq__103936_103972__$1,temp__6753__auto___103971,queue_103952,network_103953,parallel_payload_103954,remote,map__103930,map__103930__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__103985 = ((function (seq__103936_103955,chunk__103937_103956,count__103938_103957,i__103939_103958,seq__103932,chunk__103933,count__103934,i__103935,on_load_SINGLEQUOTE__103984,map__103942_103978,map__103942_103979__$1,query_103980,on_load_103981,on_error_103982,load_descriptors_103983,seq__103936_103972__$1,temp__6753__auto___103971,queue_103952,network_103953,parallel_payload_103954,remote,map__103930,map__103930__$1,send_queues,reconciler,networking){
return (function (p1__103906_SHARP_){
return on_error_103982.call(null,p1__103906_SHARP_,load_descriptors_103983);
});})(seq__103936_103955,chunk__103937_103956,count__103938_103957,i__103939_103958,seq__103932,chunk__103933,count__103934,i__103935,on_load_SINGLEQUOTE__103984,map__103942_103978,map__103942_103979__$1,query_103980,on_load_103981,on_error_103982,load_descriptors_103983,seq__103936_103972__$1,temp__6753__auto___103971,queue_103952,network_103953,parallel_payload_103954,remote,map__103930,map__103930__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_103953,query_103980,on_load_SINGLEQUOTE__103984,on_error_SINGLEQUOTE__103985,null);

var G__103986 = cljs.core.next.call(null,seq__103936_103972__$1);
var G__103987 = null;
var G__103988 = (0);
var G__103989 = (0);
seq__103936_103955 = G__103986;
chunk__103937_103956 = G__103987;
count__103938_103957 = G__103988;
i__103939_103958 = G__103989;
continue;
}
} else {
}
}
break;
}

var fetch_payload_103990 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_103990)){
untangled.client.impl.application.enqueue.call(null,queue_103952,cljs.core.assoc.call(null,fetch_payload_103990,new cljs.core.Keyword(null,"networking","networking",586110628),network_103953));

var G__103991 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
fetch_payload_103990 = G__103991;
continue;
} else {
}
break;
}

var G__103992 = seq__103932;
var G__103993 = chunk__103933;
var G__103994 = count__103934;
var G__103995 = (i__103935 + (1));
seq__103932 = G__103992;
chunk__103933 = G__103993;
count__103934 = G__103994;
i__103935 = G__103995;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__103932);
if(temp__6753__auto__){
var seq__103932__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103932__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__103932__$1);
var G__103996 = cljs.core.chunk_rest.call(null,seq__103932__$1);
var G__103997 = c__35466__auto__;
var G__103998 = cljs.core.count.call(null,c__35466__auto__);
var G__103999 = (0);
seq__103932 = G__103996;
chunk__103933 = G__103997;
count__103934 = G__103998;
i__103935 = G__103999;
continue;
} else {
var remote = cljs.core.first.call(null,seq__103932__$1);
var queue_104000 = cljs.core.get.call(null,send_queues,remote);
var network_104001 = cljs.core.get.call(null,networking,remote);
var parallel_payload_104002 = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,remote,reconciler);
var seq__103944_104003 = cljs.core.seq.call(null,parallel_payload_104002);
var chunk__103945_104004 = null;
var count__103946_104005 = (0);
var i__103947_104006 = (0);
while(true){
if((i__103947_104006 < count__103946_104005)){
var map__103948_104007 = cljs.core._nth.call(null,chunk__103945_104004,i__103947_104006);
var map__103948_104008__$1 = ((((!((map__103948_104007 == null)))?((((map__103948_104007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103948_104007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103948_104007):map__103948_104007);
var query_104009 = cljs.core.get.call(null,map__103948_104008__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_104010 = cljs.core.get.call(null,map__103948_104008__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_104011 = cljs.core.get.call(null,map__103948_104008__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_104012 = cljs.core.get.call(null,map__103948_104008__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__104013 = ((function (seq__103944_104003,chunk__103945_104004,count__103946_104005,i__103947_104006,seq__103932,chunk__103933,count__103934,i__103935,map__103948_104007,map__103948_104008__$1,query_104009,on_load_104010,on_error_104011,load_descriptors_104012,queue_104000,network_104001,parallel_payload_104002,remote,seq__103932__$1,temp__6753__auto__,map__103930,map__103930__$1,send_queues,reconciler,networking){
return (function (p1__103905_SHARP_){
return on_load_104010.call(null,p1__103905_SHARP_,load_descriptors_104012);
});})(seq__103944_104003,chunk__103945_104004,count__103946_104005,i__103947_104006,seq__103932,chunk__103933,count__103934,i__103935,map__103948_104007,map__103948_104008__$1,query_104009,on_load_104010,on_error_104011,load_descriptors_104012,queue_104000,network_104001,parallel_payload_104002,remote,seq__103932__$1,temp__6753__auto__,map__103930,map__103930__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__104014 = ((function (seq__103944_104003,chunk__103945_104004,count__103946_104005,i__103947_104006,seq__103932,chunk__103933,count__103934,i__103935,on_load_SINGLEQUOTE__104013,map__103948_104007,map__103948_104008__$1,query_104009,on_load_104010,on_error_104011,load_descriptors_104012,queue_104000,network_104001,parallel_payload_104002,remote,seq__103932__$1,temp__6753__auto__,map__103930,map__103930__$1,send_queues,reconciler,networking){
return (function (p1__103906_SHARP_){
return on_error_104011.call(null,p1__103906_SHARP_,load_descriptors_104012);
});})(seq__103944_104003,chunk__103945_104004,count__103946_104005,i__103947_104006,seq__103932,chunk__103933,count__103934,i__103935,on_load_SINGLEQUOTE__104013,map__103948_104007,map__103948_104008__$1,query_104009,on_load_104010,on_error_104011,load_descriptors_104012,queue_104000,network_104001,parallel_payload_104002,remote,seq__103932__$1,temp__6753__auto__,map__103930,map__103930__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_104001,query_104009,on_load_SINGLEQUOTE__104013,on_error_SINGLEQUOTE__104014,null);

var G__104015 = seq__103944_104003;
var G__104016 = chunk__103945_104004;
var G__104017 = count__103946_104005;
var G__104018 = (i__103947_104006 + (1));
seq__103944_104003 = G__104015;
chunk__103945_104004 = G__104016;
count__103946_104005 = G__104017;
i__103947_104006 = G__104018;
continue;
} else {
var temp__6753__auto___104019__$1 = cljs.core.seq.call(null,seq__103944_104003);
if(temp__6753__auto___104019__$1){
var seq__103944_104020__$1 = temp__6753__auto___104019__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103944_104020__$1)){
var c__35466__auto___104021 = cljs.core.chunk_first.call(null,seq__103944_104020__$1);
var G__104022 = cljs.core.chunk_rest.call(null,seq__103944_104020__$1);
var G__104023 = c__35466__auto___104021;
var G__104024 = cljs.core.count.call(null,c__35466__auto___104021);
var G__104025 = (0);
seq__103944_104003 = G__104022;
chunk__103945_104004 = G__104023;
count__103946_104005 = G__104024;
i__103947_104006 = G__104025;
continue;
} else {
var map__103950_104026 = cljs.core.first.call(null,seq__103944_104020__$1);
var map__103950_104027__$1 = ((((!((map__103950_104026 == null)))?((((map__103950_104026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103950_104026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103950_104026):map__103950_104026);
var query_104028 = cljs.core.get.call(null,map__103950_104027__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_104029 = cljs.core.get.call(null,map__103950_104027__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_104030 = cljs.core.get.call(null,map__103950_104027__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_104031 = cljs.core.get.call(null,map__103950_104027__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__104032 = ((function (seq__103944_104003,chunk__103945_104004,count__103946_104005,i__103947_104006,seq__103932,chunk__103933,count__103934,i__103935,map__103950_104026,map__103950_104027__$1,query_104028,on_load_104029,on_error_104030,load_descriptors_104031,seq__103944_104020__$1,temp__6753__auto___104019__$1,queue_104000,network_104001,parallel_payload_104002,remote,seq__103932__$1,temp__6753__auto__,map__103930,map__103930__$1,send_queues,reconciler,networking){
return (function (p1__103905_SHARP_){
return on_load_104029.call(null,p1__103905_SHARP_,load_descriptors_104031);
});})(seq__103944_104003,chunk__103945_104004,count__103946_104005,i__103947_104006,seq__103932,chunk__103933,count__103934,i__103935,map__103950_104026,map__103950_104027__$1,query_104028,on_load_104029,on_error_104030,load_descriptors_104031,seq__103944_104020__$1,temp__6753__auto___104019__$1,queue_104000,network_104001,parallel_payload_104002,remote,seq__103932__$1,temp__6753__auto__,map__103930,map__103930__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__104033 = ((function (seq__103944_104003,chunk__103945_104004,count__103946_104005,i__103947_104006,seq__103932,chunk__103933,count__103934,i__103935,on_load_SINGLEQUOTE__104032,map__103950_104026,map__103950_104027__$1,query_104028,on_load_104029,on_error_104030,load_descriptors_104031,seq__103944_104020__$1,temp__6753__auto___104019__$1,queue_104000,network_104001,parallel_payload_104002,remote,seq__103932__$1,temp__6753__auto__,map__103930,map__103930__$1,send_queues,reconciler,networking){
return (function (p1__103906_SHARP_){
return on_error_104030.call(null,p1__103906_SHARP_,load_descriptors_104031);
});})(seq__103944_104003,chunk__103945_104004,count__103946_104005,i__103947_104006,seq__103932,chunk__103933,count__103934,i__103935,on_load_SINGLEQUOTE__104032,map__103950_104026,map__103950_104027__$1,query_104028,on_load_104029,on_error_104030,load_descriptors_104031,seq__103944_104020__$1,temp__6753__auto___104019__$1,queue_104000,network_104001,parallel_payload_104002,remote,seq__103932__$1,temp__6753__auto__,map__103930,map__103930__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_104001,query_104028,on_load_SINGLEQUOTE__104032,on_error_SINGLEQUOTE__104033,null);

var G__104034 = cljs.core.next.call(null,seq__103944_104020__$1);
var G__104035 = null;
var G__104036 = (0);
var G__104037 = (0);
seq__103944_104003 = G__104034;
chunk__103945_104004 = G__104035;
count__103946_104005 = G__104036;
i__103947_104006 = G__104037;
continue;
}
} else {
}
}
break;
}

var fetch_payload_104038 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_104038)){
untangled.client.impl.application.enqueue.call(null,queue_104000,cljs.core.assoc.call(null,fetch_payload_104038,new cljs.core.Keyword(null,"networking","networking",586110628),network_104001));

var G__104039 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
fetch_payload_104038 = G__104039;
continue;
} else {
}
break;
}

var G__104040 = cljs.core.next.call(null,seq__103932__$1);
var G__104041 = null;
var G__104042 = (0);
var G__104043 = (0);
seq__103932 = G__104040;
chunk__103933 = G__104041;
count__103934 = G__104042;
i__103935 = G__104043;
continue;
}
} else {
return null;
}
}
break;
}
});
untangled.client.impl.application.detect_errant_remotes = (function untangled$client$impl$application$detect_errant_remotes(p__104044){
var map__104047 = p__104044;
var map__104047__$1 = ((((!((map__104047 == null)))?((((map__104047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104047):map__104047);
var app = map__104047__$1;
var reconciler = cljs.core.get.call(null,map__104047__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.call(null,map__104047__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
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
var map__104053 = payload;
var map__104053__$1 = ((((!((map__104053 == null)))?((((map__104053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104053):map__104053);
var query = cljs.core.get.call(null,map__104053__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load = cljs.core.get.call(null,map__104053__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error = cljs.core.get.call(null,map__104053__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors = cljs.core.get.call(null,map__104053__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__104053,map__104053__$1,query,on_load,on_error,load_descriptors){
return (function (p1__104049_SHARP_){
return on_load.call(null,p1__104049_SHARP_,load_descriptors);
});})(map__104053,map__104053__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__104053,map__104053__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__104050_SHARP_){
return on_error.call(null,p1__104050_SHARP_,load_descriptors);
});})(map__104053,map__104053__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
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
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__104055){
var map__104142 = p__104055;
var map__104142__$1 = ((((!((map__104142 == null)))?((((map__104142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104142):map__104142);
var networking = cljs.core.get.call(null,map__104142__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var send_queues = cljs.core.get.call(null,map__104142__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.call(null,map__104142__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__104144 = cljs.core.seq.call(null,cljs.core.keys.call(null,send_queues));
var chunk__104145 = null;
var count__104146 = (0);
var i__104147 = (0);
while(true){
if((i__104147 < count__104146)){
var remote = cljs.core._nth.call(null,chunk__104145,i__104147);
var queue_104228 = cljs.core.get.call(null,send_queues,remote);
var network_104229 = cljs.core.get.call(null,networking,remote);
var response_channel_104230 = cljs.core.get.call(null,response_channels,remote);
var send_complete_104231 = ((function (seq__104144,chunk__104145,count__104146,i__104147,queue_104228,network_104229,response_channel_104230,remote,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto__,queue_104228,network_104229,response_channel_104230,remote,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto__,queue_104228,network_104229,response_channel_104230,remote,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (state_104151){
var state_val_104152 = (state_104151[(1)]);
if((state_val_104152 === (1))){
var state_104151__$1 = state_104151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104151__$1,(2),response_channel_104230,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_104152 === (2))){
var inst_104149 = (state_104151[(2)]);
var state_104151__$1 = state_104151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104151__$1,inst_104149);
} else {
return null;
}
}
});})(seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto__,queue_104228,network_104229,response_channel_104230,remote,map__104142,map__104142__$1,networking,send_queues,response_channels))
;
return ((function (seq__104144,chunk__104145,count__104146,i__104147,switch__48198__auto__,c__48312__auto__,queue_104228,network_104229,response_channel_104230,remote,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_104156 = [null,null,null,null,null,null,null];
(statearr_104156[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_104156[(1)] = (1));

return statearr_104156;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_104151){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_104151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e104157){if((e104157 instanceof Object)){
var ex__48202__auto__ = e104157;
var statearr_104158_104232 = state_104151;
(statearr_104158_104232[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104233 = state_104151;
state_104151 = G__104233;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_104151){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_104151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__104144,chunk__104145,count__104146,i__104147,switch__48198__auto__,c__48312__auto__,queue_104228,network_104229,response_channel_104230,remote,map__104142,map__104142__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_104159 = f__48313__auto__.call(null);
(statearr_104159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_104159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto__,queue_104228,network_104229,response_channel_104230,remote,map__104142,map__104142__$1,networking,send_queues,response_channels))
);

return c__48312__auto__;
});})(seq__104144,chunk__104145,count__104146,i__104147,queue_104228,network_104229,response_channel_104230,remote,map__104142,map__104142__$1,networking,send_queues,response_channels))
;
var c__48312__auto___104234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto___104234,queue_104228,network_104229,response_channel_104230,send_complete_104231,remote,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto___104234,queue_104228,network_104229,response_channel_104230,send_complete_104231,remote,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (state_104173){
var state_val_104174 = (state_104173[(1)]);
if((state_val_104174 === (1))){
var state_104173__$1 = state_104173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104173__$1,(2),queue_104228);
} else {
if((state_val_104174 === (2))){
var inst_104161 = (state_104173[(2)]);
var inst_104162 = inst_104161;
var state_104173__$1 = (function (){var statearr_104175 = state_104173;
(statearr_104175[(7)] = inst_104162);

return statearr_104175;
})();
var statearr_104176_104235 = state_104173__$1;
(statearr_104176_104235[(2)] = null);

(statearr_104176_104235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104174 === (3))){
var inst_104162 = (state_104173[(7)]);
var inst_104164 = untangled.client.impl.application.send_payload.call(null,network_104229,inst_104162,send_complete_104231);
var state_104173__$1 = (function (){var statearr_104177 = state_104173;
(statearr_104177[(8)] = inst_104164);

return statearr_104177;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104173__$1,(5),response_channel_104230);
} else {
if((state_val_104174 === (4))){
var inst_104171 = (state_104173[(2)]);
var state_104173__$1 = state_104173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104173__$1,inst_104171);
} else {
if((state_val_104174 === (5))){
var inst_104166 = (state_104173[(2)]);
var state_104173__$1 = (function (){var statearr_104178 = state_104173;
(statearr_104178[(9)] = inst_104166);

return statearr_104178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104173__$1,(6),queue_104228);
} else {
if((state_val_104174 === (6))){
var inst_104168 = (state_104173[(2)]);
var inst_104162 = inst_104168;
var state_104173__$1 = (function (){var statearr_104179 = state_104173;
(statearr_104179[(7)] = inst_104162);

return statearr_104179;
})();
var statearr_104180_104236 = state_104173__$1;
(statearr_104180_104236[(2)] = null);

(statearr_104180_104236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto___104234,queue_104228,network_104229,response_channel_104230,send_complete_104231,remote,map__104142,map__104142__$1,networking,send_queues,response_channels))
;
return ((function (seq__104144,chunk__104145,count__104146,i__104147,switch__48198__auto__,c__48312__auto___104234,queue_104228,network_104229,response_channel_104230,send_complete_104231,remote,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_104184 = [null,null,null,null,null,null,null,null,null,null];
(statearr_104184[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_104184[(1)] = (1));

return statearr_104184;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_104173){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_104173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e104185){if((e104185 instanceof Object)){
var ex__48202__auto__ = e104185;
var statearr_104186_104237 = state_104173;
(statearr_104186_104237[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104238 = state_104173;
state_104173 = G__104238;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_104173){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_104173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__104144,chunk__104145,count__104146,i__104147,switch__48198__auto__,c__48312__auto___104234,queue_104228,network_104229,response_channel_104230,send_complete_104231,remote,map__104142,map__104142__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_104187 = f__48313__auto__.call(null);
(statearr_104187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___104234);

return statearr_104187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto___104234,queue_104228,network_104229,response_channel_104230,send_complete_104231,remote,map__104142,map__104142__$1,networking,send_queues,response_channels))
);


var G__104239 = seq__104144;
var G__104240 = chunk__104145;
var G__104241 = count__104146;
var G__104242 = (i__104147 + (1));
seq__104144 = G__104239;
chunk__104145 = G__104240;
count__104146 = G__104241;
i__104147 = G__104242;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__104144);
if(temp__6753__auto__){
var seq__104144__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__104144__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__104144__$1);
var G__104243 = cljs.core.chunk_rest.call(null,seq__104144__$1);
var G__104244 = c__35466__auto__;
var G__104245 = cljs.core.count.call(null,c__35466__auto__);
var G__104246 = (0);
seq__104144 = G__104243;
chunk__104145 = G__104244;
count__104146 = G__104245;
i__104147 = G__104246;
continue;
} else {
var remote = cljs.core.first.call(null,seq__104144__$1);
var queue_104247 = cljs.core.get.call(null,send_queues,remote);
var network_104248 = cljs.core.get.call(null,networking,remote);
var response_channel_104249 = cljs.core.get.call(null,response_channels,remote);
var send_complete_104250 = ((function (seq__104144,chunk__104145,count__104146,i__104147,queue_104247,network_104248,response_channel_104249,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto__,queue_104247,network_104248,response_channel_104249,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto__,queue_104247,network_104248,response_channel_104249,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (state_104191){
var state_val_104192 = (state_104191[(1)]);
if((state_val_104192 === (1))){
var state_104191__$1 = state_104191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104191__$1,(2),response_channel_104249,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_104192 === (2))){
var inst_104189 = (state_104191[(2)]);
var state_104191__$1 = state_104191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104191__$1,inst_104189);
} else {
return null;
}
}
});})(seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto__,queue_104247,network_104248,response_channel_104249,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels))
;
return ((function (seq__104144,chunk__104145,count__104146,i__104147,switch__48198__auto__,c__48312__auto__,queue_104247,network_104248,response_channel_104249,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_104196 = [null,null,null,null,null,null,null];
(statearr_104196[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_104196[(1)] = (1));

return statearr_104196;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_104191){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_104191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e104197){if((e104197 instanceof Object)){
var ex__48202__auto__ = e104197;
var statearr_104198_104251 = state_104191;
(statearr_104198_104251[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104252 = state_104191;
state_104191 = G__104252;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_104191){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_104191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__104144,chunk__104145,count__104146,i__104147,switch__48198__auto__,c__48312__auto__,queue_104247,network_104248,response_channel_104249,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_104199 = f__48313__auto__.call(null);
(statearr_104199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_104199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto__,queue_104247,network_104248,response_channel_104249,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels))
);

return c__48312__auto__;
});})(seq__104144,chunk__104145,count__104146,i__104147,queue_104247,network_104248,response_channel_104249,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels))
;
var c__48312__auto___104253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto___104253,queue_104247,network_104248,response_channel_104249,send_complete_104250,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto___104253,queue_104247,network_104248,response_channel_104249,send_complete_104250,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function (state_104213){
var state_val_104214 = (state_104213[(1)]);
if((state_val_104214 === (1))){
var state_104213__$1 = state_104213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104213__$1,(2),queue_104247);
} else {
if((state_val_104214 === (2))){
var inst_104201 = (state_104213[(2)]);
var inst_104202 = inst_104201;
var state_104213__$1 = (function (){var statearr_104215 = state_104213;
(statearr_104215[(7)] = inst_104202);

return statearr_104215;
})();
var statearr_104216_104254 = state_104213__$1;
(statearr_104216_104254[(2)] = null);

(statearr_104216_104254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104214 === (3))){
var inst_104202 = (state_104213[(7)]);
var inst_104204 = untangled.client.impl.application.send_payload.call(null,network_104248,inst_104202,send_complete_104250);
var state_104213__$1 = (function (){var statearr_104217 = state_104213;
(statearr_104217[(8)] = inst_104204);

return statearr_104217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104213__$1,(5),response_channel_104249);
} else {
if((state_val_104214 === (4))){
var inst_104211 = (state_104213[(2)]);
var state_104213__$1 = state_104213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104213__$1,inst_104211);
} else {
if((state_val_104214 === (5))){
var inst_104206 = (state_104213[(2)]);
var state_104213__$1 = (function (){var statearr_104218 = state_104213;
(statearr_104218[(9)] = inst_104206);

return statearr_104218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104213__$1,(6),queue_104247);
} else {
if((state_val_104214 === (6))){
var inst_104208 = (state_104213[(2)]);
var inst_104202 = inst_104208;
var state_104213__$1 = (function (){var statearr_104219 = state_104213;
(statearr_104219[(7)] = inst_104202);

return statearr_104219;
})();
var statearr_104220_104255 = state_104213__$1;
(statearr_104220_104255[(2)] = null);

(statearr_104220_104255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto___104253,queue_104247,network_104248,response_channel_104249,send_complete_104250,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels))
;
return ((function (seq__104144,chunk__104145,count__104146,i__104147,switch__48198__auto__,c__48312__auto___104253,queue_104247,network_104248,response_channel_104249,send_complete_104250,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_104224 = [null,null,null,null,null,null,null,null,null,null];
(statearr_104224[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_104224[(1)] = (1));

return statearr_104224;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_104213){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_104213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e104225){if((e104225 instanceof Object)){
var ex__48202__auto__ = e104225;
var statearr_104226_104256 = state_104213;
(statearr_104226_104256[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e104225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104257 = state_104213;
state_104213 = G__104257;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_104213){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_104213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__104144,chunk__104145,count__104146,i__104147,switch__48198__auto__,c__48312__auto___104253,queue_104247,network_104248,response_channel_104249,send_complete_104250,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_104227 = f__48313__auto__.call(null);
(statearr_104227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___104253);

return statearr_104227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__104144,chunk__104145,count__104146,i__104147,c__48312__auto___104253,queue_104247,network_104248,response_channel_104249,send_complete_104250,remote,seq__104144__$1,temp__6753__auto__,map__104142,map__104142__$1,networking,send_queues,response_channels))
);


var G__104258 = cljs.core.next.call(null,seq__104144__$1);
var G__104259 = null;
var G__104260 = (0);
var G__104261 = (0);
seq__104144 = G__104258;
chunk__104145 = G__104259;
count__104146 = G__104260;
i__104147 = G__104261;
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
return cljs.core.reduce.call(null,(function (acc,p__104266){
var vec__104267 = p__104266;
var k = cljs.core.nth.call(null,vec__104267,(0),null);
var v = cljs.core.nth.call(null,vec__104267,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__104274){
var vec__104275 = p__104274;
var k = cljs.core.nth.call(null,vec__104275,(0),null);
var v = cljs.core.nth.call(null,vec__104275,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__104282){
var vec__104283 = p__104282;
var k = cljs.core.nth.call(null,vec__104283,(0),null);
var v = cljs.core.nth.call(null,vec__104283,(1),null);
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
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__104294){
var vec__104295 = p__104294;
var k = cljs.core.nth.call(null,vec__104295,(0),null);
var _ = cljs.core.nth.call(null,vec__104295,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__104298){
var vec__104299 = p__104298;
var k = cljs.core.nth.call(null,vec__104299,(0),null);
var v = cljs.core.nth.call(null,vec__104299,(1),null);
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__104302,initial_state,parser,p__104303){
var map__104312 = p__104302;
var map__104312__$1 = ((((!((map__104312 == null)))?((((map__104312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104312):map__104312);
var app = map__104312__$1;
var send_queues = cljs.core.get.call(null,map__104312__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.call(null,map__104312__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__104313 = p__104303;
var map__104313__$1 = ((((!((map__104313 == null)))?((((map__104313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104313):map__104313);
var pathopt = cljs.core.get.call(null,map__104313__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__104313__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__104313__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var remotes = cljs.core.keys.call(null,send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__104312,map__104312__$1,app,send_queues,mutation_merge,map__104313,map__104313__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
var seq__104316_104320 = cljs.core.seq.call(null,cljs.core.vals.call(null,send_queues));
var chunk__104317_104321 = null;
var count__104318_104322 = (0);
var i__104319_104323 = (0);
while(true){
if((i__104319_104323 < count__104318_104322)){
var queue_104324 = cljs.core._nth.call(null,chunk__104317_104321,i__104319_104323);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue_104324,tempids);

var G__104325 = seq__104316_104320;
var G__104326 = chunk__104317_104321;
var G__104327 = count__104318_104322;
var G__104328 = (i__104319_104323 + (1));
seq__104316_104320 = G__104325;
chunk__104317_104321 = G__104326;
count__104318_104322 = G__104327;
i__104319_104323 = G__104328;
continue;
} else {
var temp__6753__auto___104329 = cljs.core.seq.call(null,seq__104316_104320);
if(temp__6753__auto___104329){
var seq__104316_104330__$1 = temp__6753__auto___104329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__104316_104330__$1)){
var c__35466__auto___104331 = cljs.core.chunk_first.call(null,seq__104316_104330__$1);
var G__104332 = cljs.core.chunk_rest.call(null,seq__104316_104330__$1);
var G__104333 = c__35466__auto___104331;
var G__104334 = cljs.core.count.call(null,c__35466__auto___104331);
var G__104335 = (0);
seq__104316_104320 = G__104332;
chunk__104317_104321 = G__104333;
count__104318_104322 = G__104334;
i__104319_104323 = G__104335;
continue;
} else {
var queue_104336 = cljs.core.first.call(null,seq__104316_104330__$1);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue_104336,tempids);

var G__104337 = cljs.core.next.call(null,seq__104316_104330__$1);
var G__104338 = null;
var G__104339 = (0);
var G__104340 = (0);
seq__104316_104320 = G__104337;
chunk__104317_104321 = G__104338;
count__104318_104322 = G__104339;
i__104319_104323 = G__104340;
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
});})(rec_atom,remotes,map__104312,map__104312__$1,app,send_queues,mutation_merge,map__104313,map__104313__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[pathopt,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__104312,map__104312__$1,app,send_queues,mutation_merge,map__104313,map__104313__$1,pathopt,migrate,shared){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.call(null,app_state,ident,cljs.core.comp.call(null,untangled.client.impl.application.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__104312,map__104312__$1,app,send_queues,mutation_merge,map__104313,map__104313__$1,pathopt,migrate,shared))
,remotes,(function (){var or__34555__auto__ = migrate;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return tempid_migrate;
}
})(),initial_state_with_locale,parser,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__104312,map__104312__$1,app,send_queues,mutation_merge,map__104313,map__104313__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__104312,map__104312__$1,app,send_queues,mutation_merge,map__104313,map__104313__$1,pathopt,migrate,shared))
,shared,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__104312,map__104312__$1,app,send_queues,mutation_merge,map__104313,map__104313__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__104312,map__104312__$1,app,send_queues,mutation_merge,map__104313,map__104313__$1,pathopt,migrate,shared))
,true]);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callbacks = (function untangled$client$impl$application$initialize_global_error_callbacks(app){
var seq__104346 = cljs.core.seq.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__104347 = null;
var count__104348 = (0);
var i__104349 = (0);
while(true){
if((i__104349 < count__104348)){
var remote = cljs.core._nth.call(null,chunk__104347,i__104349);
var cb_atom_104350 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom_104350))){
cljs.core.swap_BANG_.call(null,cb_atom_104350,((function (seq__104346,chunk__104347,count__104348,i__104349,cb_atom_104350,remote){
return (function (p1__104341_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__104341_SHARP_)){
return cljs.core.partial.call(null,p1__104341_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__104346,chunk__104347,count__104348,i__104349,cb_atom_104350,remote))
);
} else {
}

var G__104351 = seq__104346;
var G__104352 = chunk__104347;
var G__104353 = count__104348;
var G__104354 = (i__104349 + (1));
seq__104346 = G__104351;
chunk__104347 = G__104352;
count__104348 = G__104353;
i__104349 = G__104354;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__104346);
if(temp__6753__auto__){
var seq__104346__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__104346__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__104346__$1);
var G__104355 = cljs.core.chunk_rest.call(null,seq__104346__$1);
var G__104356 = c__35466__auto__;
var G__104357 = cljs.core.count.call(null,c__35466__auto__);
var G__104358 = (0);
seq__104346 = G__104355;
chunk__104347 = G__104356;
count__104348 = G__104357;
i__104349 = G__104358;
continue;
} else {
var remote = cljs.core.first.call(null,seq__104346__$1);
var cb_atom_104359 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom_104359))){
cljs.core.swap_BANG_.call(null,cb_atom_104359,((function (seq__104346,chunk__104347,count__104348,i__104349,cb_atom_104359,remote,seq__104346__$1,temp__6753__auto__){
return (function (p1__104341_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__104341_SHARP_)){
return cljs.core.partial.call(null,p1__104341_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__104346,chunk__104347,count__104348,i__104349,cb_atom_104359,remote,seq__104346__$1,temp__6753__auto__))
);
} else {
}

var G__104360 = cljs.core.next.call(null,seq__104346__$1);
var G__104361 = null;
var G__104362 = (0);
var G__104363 = (0);
seq__104346 = G__104360;
chunk__104347 = G__104361;
count__104348 = G__104362;
i__104349 = G__104363;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=application.js.map?rel=1491640853290