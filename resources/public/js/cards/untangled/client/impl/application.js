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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__204739,query){
var map__204742 = p__204739;
var map__204742__$1 = ((((!((map__204742 == null)))?((((map__204742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__204742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204742):map__204742);
var reconciler = cljs.core.get.call(null,map__204742__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__204742,map__204742__$1,reconciler){
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
;})(map__204742,map__204742__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__){
return (function (state_204759){
var state_val_204760 = (state_204759[(1)]);
if((state_val_204760 === (1))){
var state_204759__$1 = state_204759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204759__$1,(2),q,v);
} else {
if((state_val_204760 === (2))){
var inst_204757 = (state_204759[(2)]);
var state_204759__$1 = state_204759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204759__$1,inst_204757);
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
var statearr_204764 = [null,null,null,null,null,null,null];
(statearr_204764[(0)] = untangled$client$impl$application$enqueue_$_state_machine__44062__auto__);

(statearr_204764[(1)] = (1));

return statearr_204764;
});
var untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1 = (function (state_204759){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_204759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e204765){if((e204765 instanceof Object)){
var ex__44065__auto__ = e204765;
var statearr_204766_204768 = state_204759;
(statearr_204766_204768[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204769 = state_204759;
state_204759 = G__204769;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__ = function(state_204759){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1.call(this,state_204759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__44062__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_204767 = f__44085__auto__.call(null);
(statearr_204767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_204767;
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
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__204771,remote_tx_map,cb){
var map__204774 = p__204771;
var map__204774__$1 = ((((!((map__204774 == null)))?((((map__204774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__204774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204774):map__204774);
var app = map__204774__$1;
var queue = cljs.core.get.call(null,map__204774__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__204774,map__204774__$1,app,queue){
return (function (p1__204770_SHARP_){
return fallback.call(null,p1__204770_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__204774,map__204774__$1,app,queue))
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__204778){
var map__204789 = p__204778;
var map__204789__$1 = ((((!((map__204789 == null)))?((((map__204789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__204789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204789):map__204789);
var queue = cljs.core.get.call(null,map__204789__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__204789__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__204789__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var seq__204791_204799 = cljs.core.seq.call(null,parallel_payload);
var chunk__204792_204800 = null;
var count__204793_204801 = (0);
var i__204794_204802 = (0);
while(true){
if((i__204794_204802 < count__204793_204801)){
var map__204795_204803 = cljs.core._nth.call(null,chunk__204792_204800,i__204794_204802);
var map__204795_204804__$1 = ((((!((map__204795_204803 == null)))?((((map__204795_204803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__204795_204803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204795_204803):map__204795_204803);
var query_204805 = cljs.core.get.call(null,map__204795_204804__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_204806 = cljs.core.get.call(null,map__204795_204804__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_204807 = cljs.core.get.call(null,map__204795_204804__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_204808 = cljs.core.get.call(null,map__204795_204804__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__204809 = ((function (seq__204791_204799,chunk__204792_204800,count__204793_204801,i__204794_204802,map__204795_204803,map__204795_204804__$1,query_204805,on_load_204806,on_error_204807,callback_args_204808,parallel_payload,map__204789,map__204789__$1,queue,reconciler,networking){
return (function (p1__204776_SHARP_){
return on_load_204806.call(null,p1__204776_SHARP_,callback_args_204808);
});})(seq__204791_204799,chunk__204792_204800,count__204793_204801,i__204794_204802,map__204795_204803,map__204795_204804__$1,query_204805,on_load_204806,on_error_204807,callback_args_204808,parallel_payload,map__204789,map__204789__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__204810 = ((function (seq__204791_204799,chunk__204792_204800,count__204793_204801,i__204794_204802,on_load_SINGLEQUOTE__204809,map__204795_204803,map__204795_204804__$1,query_204805,on_load_204806,on_error_204807,callback_args_204808,parallel_payload,map__204789,map__204789__$1,queue,reconciler,networking){
return (function (p1__204777_SHARP_){
return on_error_204807.call(null,p1__204777_SHARP_,callback_args_204808);
});})(seq__204791_204799,chunk__204792_204800,count__204793_204801,i__204794_204802,on_load_SINGLEQUOTE__204809,map__204795_204803,map__204795_204804__$1,query_204805,on_load_204806,on_error_204807,callback_args_204808,parallel_payload,map__204789,map__204789__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_204805,on_load_SINGLEQUOTE__204809,on_error_SINGLEQUOTE__204810);

var G__204811 = seq__204791_204799;
var G__204812 = chunk__204792_204800;
var G__204813 = count__204793_204801;
var G__204814 = (i__204794_204802 + (1));
seq__204791_204799 = G__204811;
chunk__204792_204800 = G__204812;
count__204793_204801 = G__204813;
i__204794_204802 = G__204814;
continue;
} else {
var temp__6753__auto___204815 = cljs.core.seq.call(null,seq__204791_204799);
if(temp__6753__auto___204815){
var seq__204791_204816__$1 = temp__6753__auto___204815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__204791_204816__$1)){
var c__40117__auto___204817 = cljs.core.chunk_first.call(null,seq__204791_204816__$1);
var G__204818 = cljs.core.chunk_rest.call(null,seq__204791_204816__$1);
var G__204819 = c__40117__auto___204817;
var G__204820 = cljs.core.count.call(null,c__40117__auto___204817);
var G__204821 = (0);
seq__204791_204799 = G__204818;
chunk__204792_204800 = G__204819;
count__204793_204801 = G__204820;
i__204794_204802 = G__204821;
continue;
} else {
var map__204797_204822 = cljs.core.first.call(null,seq__204791_204816__$1);
var map__204797_204823__$1 = ((((!((map__204797_204822 == null)))?((((map__204797_204822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__204797_204822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204797_204822):map__204797_204822);
var query_204824 = cljs.core.get.call(null,map__204797_204823__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_204825 = cljs.core.get.call(null,map__204797_204823__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_204826 = cljs.core.get.call(null,map__204797_204823__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_204827 = cljs.core.get.call(null,map__204797_204823__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__204828 = ((function (seq__204791_204799,chunk__204792_204800,count__204793_204801,i__204794_204802,map__204797_204822,map__204797_204823__$1,query_204824,on_load_204825,on_error_204826,callback_args_204827,seq__204791_204816__$1,temp__6753__auto___204815,parallel_payload,map__204789,map__204789__$1,queue,reconciler,networking){
return (function (p1__204776_SHARP_){
return on_load_204825.call(null,p1__204776_SHARP_,callback_args_204827);
});})(seq__204791_204799,chunk__204792_204800,count__204793_204801,i__204794_204802,map__204797_204822,map__204797_204823__$1,query_204824,on_load_204825,on_error_204826,callback_args_204827,seq__204791_204816__$1,temp__6753__auto___204815,parallel_payload,map__204789,map__204789__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__204829 = ((function (seq__204791_204799,chunk__204792_204800,count__204793_204801,i__204794_204802,on_load_SINGLEQUOTE__204828,map__204797_204822,map__204797_204823__$1,query_204824,on_load_204825,on_error_204826,callback_args_204827,seq__204791_204816__$1,temp__6753__auto___204815,parallel_payload,map__204789,map__204789__$1,queue,reconciler,networking){
return (function (p1__204777_SHARP_){
return on_error_204826.call(null,p1__204777_SHARP_,callback_args_204827);
});})(seq__204791_204799,chunk__204792_204800,count__204793_204801,i__204794_204802,on_load_SINGLEQUOTE__204828,map__204797_204822,map__204797_204823__$1,query_204824,on_load_204825,on_error_204826,callback_args_204827,seq__204791_204816__$1,temp__6753__auto___204815,parallel_payload,map__204789,map__204789__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_204824,on_load_SINGLEQUOTE__204828,on_error_SINGLEQUOTE__204829);

var G__204830 = cljs.core.next.call(null,seq__204791_204816__$1);
var G__204831 = null;
var G__204832 = (0);
var G__204833 = (0);
seq__204791_204799 = G__204830;
chunk__204792_204800 = G__204831;
count__204793_204801 = G__204832;
i__204794_204802 = G__204833;
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

var G__204834 = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
fetch_payload = G__204834;
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
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__204835){
var map__204954 = p__204835;
var map__204954__$1 = ((((!((map__204954 == null)))?((((map__204954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__204954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204954):map__204954);
var networking = cljs.core.get.call(null,map__204954__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__204954__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__204954__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__204954,map__204954__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__204954,map__204954__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__44084__auto___205072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___205072,map__204954,map__204954__$1,networking,queue,response_channel){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___205072,map__204954,map__204954__$1,networking,queue,response_channel){
return (function (state_204995){
var state_val_204996 = (state_204995[(1)]);
if((state_val_204996 === (1))){
var state_204995__$1 = state_204995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204995__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_204996 === (2))){
var inst_204993 = (state_204995[(2)]);
var state_204995__$1 = state_204995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204995__$1,inst_204993);
} else {
return null;
}
}
});})(c__44084__auto___205072,map__204954,map__204954__$1,networking,queue,response_channel))
;
return ((function (switch__44061__auto__,c__44084__auto___205072,map__204954,map__204954__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0 = (function (){
var statearr_205000 = [null,null,null,null,null,null,null];
(statearr_205000[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__);

(statearr_205000[(1)] = (1));

return statearr_205000;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1 = (function (state_204995){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_204995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e205001){if((e205001 instanceof Object)){
var ex__44065__auto__ = e205001;
var statearr_205002_205073 = state_204995;
(statearr_205002_205073[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205074 = state_204995;
state_204995 = G__205074;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__ = function(state_204995){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1.call(this,state_204995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___205072,map__204954,map__204954__$1,networking,queue,response_channel))
})();
var state__44086__auto__ = (function (){var statearr_205003 = f__44085__auto__.call(null);
(statearr_205003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___205072);

return statearr_205003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___205072,map__204954,map__204954__$1,networking,queue,response_channel))
);

}});
;})(map__204954,map__204954__$1,networking,queue,response_channel))
});})(map__204954,map__204954__$1,networking,queue,response_channel))
;
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,map__204954,map__204954__$1,networking,queue,response_channel){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,map__204954,map__204954__$1,networking,queue,response_channel){
return (function (state_205045){
var state_val_205046 = (state_205045[(1)]);
if((state_val_205046 === (7))){
var inst_205024 = (state_205045[(2)]);
var state_205045__$1 = state_205045;
if(cljs.core.truth_(inst_205024)){
var statearr_205047_205075 = state_205045__$1;
(statearr_205047_205075[(1)] = (11));

} else {
var statearr_205048_205076 = state_205045__$1;
(statearr_205048_205076[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (1))){
var state_205045__$1 = state_205045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205045__$1,(2),queue);
} else {
if((state_val_205046 === (4))){
var inst_205043 = (state_205045[(2)]);
var state_205045__$1 = state_205045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205045__$1,inst_205043);
} else {
if((state_val_205046 === (15))){
var inst_205040 = (state_205045[(2)]);
var inst_205006 = inst_205040;
var state_205045__$1 = (function (){var statearr_205049 = state_205045;
(statearr_205049[(7)] = inst_205006);

return statearr_205049;
})();
var statearr_205050_205077 = state_205045__$1;
(statearr_205050_205077[(2)] = null);

(statearr_205050_205077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (13))){
var inst_205029 = (state_205045[(2)]);
var inst_205030 = cljs.core.get.call(null,inst_205029,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_205031 = cljs.core.get.call(null,inst_205029,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_205032 = cljs.core.get.call(null,inst_205029,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_205033 = cljs.core.get.call(null,inst_205029,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_205034 = make_process_response.call(null,inst_205031,inst_205033);
var inst_205035 = make_process_response.call(null,inst_205032,inst_205033);
var inst_205036 = untangled.client.impl.application.real_send.call(null,networking,inst_205030,inst_205034,inst_205035);
var state_205045__$1 = (function (){var statearr_205051 = state_205045;
(statearr_205051[(8)] = inst_205036);

return statearr_205051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205045__$1,(14),response_channel);
} else {
if((state_val_205046 === (6))){
var state_205045__$1 = state_205045;
var statearr_205052_205078 = state_205045__$1;
(statearr_205052_205078[(2)] = false);

(statearr_205052_205078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (3))){
var inst_205006 = (state_205045[(7)]);
var inst_205010 = (inst_205006 == null);
var inst_205011 = cljs.core.not.call(null,inst_205010);
var state_205045__$1 = state_205045;
if(inst_205011){
var statearr_205053_205079 = state_205045__$1;
(statearr_205053_205079[(1)] = (5));

} else {
var statearr_205054_205080 = state_205045__$1;
(statearr_205054_205080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (12))){
var inst_205006 = (state_205045[(7)]);
var state_205045__$1 = state_205045;
var statearr_205055_205081 = state_205045__$1;
(statearr_205055_205081[(2)] = inst_205006);

(statearr_205055_205081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (2))){
var inst_205005 = (state_205045[(2)]);
var inst_205006 = inst_205005;
var state_205045__$1 = (function (){var statearr_205056 = state_205045;
(statearr_205056[(7)] = inst_205006);

return statearr_205056;
})();
var statearr_205057_205082 = state_205045__$1;
(statearr_205057_205082[(2)] = null);

(statearr_205057_205082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (11))){
var inst_205006 = (state_205045[(7)]);
var inst_205026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_205006);
var state_205045__$1 = state_205045;
var statearr_205058_205083 = state_205045__$1;
(statearr_205058_205083[(2)] = inst_205026);

(statearr_205058_205083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (9))){
var state_205045__$1 = state_205045;
var statearr_205059_205084 = state_205045__$1;
(statearr_205059_205084[(2)] = false);

(statearr_205059_205084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (5))){
var inst_205006 = (state_205045[(7)]);
var inst_205013 = inst_205006.cljs$lang$protocol_mask$partition0$;
var inst_205014 = (inst_205013 & (64));
var inst_205015 = inst_205006.cljs$core$ISeq$;
var inst_205016 = (cljs.core.PROTOCOL_SENTINEL === inst_205015);
var inst_205017 = (inst_205014) || (inst_205016);
var state_205045__$1 = state_205045;
if(cljs.core.truth_(inst_205017)){
var statearr_205060_205085 = state_205045__$1;
(statearr_205060_205085[(1)] = (8));

} else {
var statearr_205061_205086 = state_205045__$1;
(statearr_205061_205086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (14))){
var inst_205038 = (state_205045[(2)]);
var state_205045__$1 = (function (){var statearr_205062 = state_205045;
(statearr_205062[(9)] = inst_205038);

return statearr_205062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205045__$1,(15),queue);
} else {
if((state_val_205046 === (10))){
var inst_205021 = (state_205045[(2)]);
var state_205045__$1 = state_205045;
var statearr_205063_205087 = state_205045__$1;
(statearr_205063_205087[(2)] = inst_205021);

(statearr_205063_205087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205046 === (8))){
var state_205045__$1 = state_205045;
var statearr_205064_205088 = state_205045__$1;
(statearr_205064_205088[(2)] = true);

(statearr_205064_205088[(1)] = (10));


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
});})(c__44084__auto__,map__204954,map__204954__$1,networking,queue,response_channel))
;
return ((function (switch__44061__auto__,c__44084__auto__,map__204954,map__204954__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0 = (function (){
var statearr_205068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_205068[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__);

(statearr_205068[(1)] = (1));

return statearr_205068;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1 = (function (state_205045){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_205045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e205069){if((e205069 instanceof Object)){
var ex__44065__auto__ = e205069;
var statearr_205070_205089 = state_205045;
(statearr_205070_205089[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205090 = state_205045;
state_205045 = G__205090;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__ = function(state_205045){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1.call(this,state_205045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,map__204954,map__204954__$1,networking,queue,response_channel))
})();
var state__44086__auto__ = (function (){var statearr_205071 = f__44085__auto__.call(null);
(statearr_205071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_205071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,map__204954,map__204954__$1,networking,queue,response_channel))
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
return cljs.core.reduce.call(null,(function (acc,p__205095){
var vec__205096 = p__205095;
var k = cljs.core.nth.call(null,vec__205096,(0),null);
var v = cljs.core.nth.call(null,vec__205096,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__205103){
var vec__205104 = p__205103;
var k = cljs.core.nth.call(null,vec__205104,(0),null);
var v = cljs.core.nth.call(null,vec__205104,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__205111){
var vec__205112 = p__205111;
var k = cljs.core.nth.call(null,vec__205112,(0),null);
var v = cljs.core.nth.call(null,vec__205112,(1),null);
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
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__205123){
var vec__205124 = p__205123;
var k = cljs.core.nth.call(null,vec__205124,(0),null);
var _ = cljs.core.nth.call(null,vec__205124,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__205127){
var vec__205128 = p__205127;
var k = cljs.core.nth.call(null,vec__205128,(0),null);
var v = cljs.core.nth.call(null,vec__205128,(1),null);
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__205131,initial_state,parser,p__205132){
var map__205137 = p__205131;
var map__205137__$1 = ((((!((map__205137 == null)))?((((map__205137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205137):map__205137);
var app = map__205137__$1;
var queue = cljs.core.get.call(null,map__205137__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mutation_merge = cljs.core.get.call(null,map__205137__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__205138 = p__205132;
var map__205138__$1 = ((((!((map__205138 == null)))?((((map__205138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205138):map__205138);
var pathopt = cljs.core.get.call(null,map__205138__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__205138__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__205138__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__39206__auto__ = migrate;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__205137,map__205137__$1,app,queue,mutation_merge,map__205138,map__205138__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__205137,map__205137__$1,app,queue,mutation_merge,map__205138,map__205138__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__205137,map__205137__$1,app,queue,mutation_merge,map__205138,map__205138__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__205137,map__205137__$1,app,queue,mutation_merge,map__205138,map__205138__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__39206__auto__ = migrate;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__205137,map__205137__$1,app,queue,mutation_merge,map__205138,map__205138__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__205137,map__205137__$1,app,queue,mutation_merge,map__205138,map__205138__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app){
var cb_atom = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__205141_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__205141_SHARP_)){
return cljs.core.partial.call(null,p1__205141_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});

//# sourceMappingURL=application.js.map?rel=1491715104048