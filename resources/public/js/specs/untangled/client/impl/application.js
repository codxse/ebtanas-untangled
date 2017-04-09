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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__44397,query){
var map__44400 = p__44397;
var map__44400__$1 = ((((!((map__44400 == null)))?((((map__44400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44400):map__44400);
var reconciler = cljs.core.get.call(null,map__44400__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__44400,map__44400__$1,reconciler){
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
;})(map__44400,map__44400__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__43974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto__){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto__){
return (function (state_44417){
var state_val_44418 = (state_44417[(1)]);
if((state_val_44418 === (1))){
var state_44417__$1 = state_44417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44417__$1,(2),q,v);
} else {
if((state_val_44418 === (2))){
var inst_44415 = (state_44417[(2)]);
var state_44417__$1 = state_44417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44417__$1,inst_44415);
} else {
return null;
}
}
});})(c__43974__auto__))
;
return ((function (switch__43951__auto__,c__43974__auto__){
return (function() {
var untangled$client$impl$application$enqueue_$_state_machine__43952__auto__ = null;
var untangled$client$impl$application$enqueue_$_state_machine__43952__auto____0 = (function (){
var statearr_44422 = [null,null,null,null,null,null,null];
(statearr_44422[(0)] = untangled$client$impl$application$enqueue_$_state_machine__43952__auto__);

(statearr_44422[(1)] = (1));

return statearr_44422;
});
var untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1 = (function (state_44417){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_44417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e44423){if((e44423 instanceof Object)){
var ex__43955__auto__ = e44423;
var statearr_44424_44426 = state_44417;
(statearr_44424_44426[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44427 = state_44417;
state_44417 = G__44427;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__ = function(state_44417){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1.call(this,state_44417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__43952__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto__))
})();
var state__43976__auto__ = (function (){var statearr_44425 = f__43975__auto__.call(null);
(statearr_44425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto__);

return statearr_44425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43976__auto__);
});})(c__43974__auto__))
);

return c__43974__auto__;
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
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__44429,remote_tx_map,cb){
var map__44432 = p__44429;
var map__44432__$1 = ((((!((map__44432 == null)))?((((map__44432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44432):map__44432);
var app = map__44432__$1;
var queue = cljs.core.get.call(null,map__44432__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__44432,map__44432__$1,app,queue){
return (function (p1__44428_SHARP_){
return fallback.call(null,p1__44428_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__44432,map__44432__$1,app,queue))
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__44436){
var map__44447 = p__44436;
var map__44447__$1 = ((((!((map__44447 == null)))?((((map__44447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44447):map__44447);
var queue = cljs.core.get.call(null,map__44447__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__44447__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__44447__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var seq__44449_44457 = cljs.core.seq.call(null,parallel_payload);
var chunk__44450_44458 = null;
var count__44451_44459 = (0);
var i__44452_44460 = (0);
while(true){
if((i__44452_44460 < count__44451_44459)){
var map__44453_44461 = cljs.core._nth.call(null,chunk__44450_44458,i__44452_44460);
var map__44453_44462__$1 = ((((!((map__44453_44461 == null)))?((((map__44453_44461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44453_44461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44453_44461):map__44453_44461);
var query_44463 = cljs.core.get.call(null,map__44453_44462__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_44464 = cljs.core.get.call(null,map__44453_44462__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_44465 = cljs.core.get.call(null,map__44453_44462__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_44466 = cljs.core.get.call(null,map__44453_44462__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__44467 = ((function (seq__44449_44457,chunk__44450_44458,count__44451_44459,i__44452_44460,map__44453_44461,map__44453_44462__$1,query_44463,on_load_44464,on_error_44465,callback_args_44466,parallel_payload,map__44447,map__44447__$1,queue,reconciler,networking){
return (function (p1__44434_SHARP_){
return on_load_44464.call(null,p1__44434_SHARP_,callback_args_44466);
});})(seq__44449_44457,chunk__44450_44458,count__44451_44459,i__44452_44460,map__44453_44461,map__44453_44462__$1,query_44463,on_load_44464,on_error_44465,callback_args_44466,parallel_payload,map__44447,map__44447__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__44468 = ((function (seq__44449_44457,chunk__44450_44458,count__44451_44459,i__44452_44460,on_load_SINGLEQUOTE__44467,map__44453_44461,map__44453_44462__$1,query_44463,on_load_44464,on_error_44465,callback_args_44466,parallel_payload,map__44447,map__44447__$1,queue,reconciler,networking){
return (function (p1__44435_SHARP_){
return on_error_44465.call(null,p1__44435_SHARP_,callback_args_44466);
});})(seq__44449_44457,chunk__44450_44458,count__44451_44459,i__44452_44460,on_load_SINGLEQUOTE__44467,map__44453_44461,map__44453_44462__$1,query_44463,on_load_44464,on_error_44465,callback_args_44466,parallel_payload,map__44447,map__44447__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_44463,on_load_SINGLEQUOTE__44467,on_error_SINGLEQUOTE__44468);

var G__44469 = seq__44449_44457;
var G__44470 = chunk__44450_44458;
var G__44471 = count__44451_44459;
var G__44472 = (i__44452_44460 + (1));
seq__44449_44457 = G__44469;
chunk__44450_44458 = G__44470;
count__44451_44459 = G__44471;
i__44452_44460 = G__44472;
continue;
} else {
var temp__6753__auto___44473 = cljs.core.seq.call(null,seq__44449_44457);
if(temp__6753__auto___44473){
var seq__44449_44474__$1 = temp__6753__auto___44473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44449_44474__$1)){
var c__40133__auto___44475 = cljs.core.chunk_first.call(null,seq__44449_44474__$1);
var G__44476 = cljs.core.chunk_rest.call(null,seq__44449_44474__$1);
var G__44477 = c__40133__auto___44475;
var G__44478 = cljs.core.count.call(null,c__40133__auto___44475);
var G__44479 = (0);
seq__44449_44457 = G__44476;
chunk__44450_44458 = G__44477;
count__44451_44459 = G__44478;
i__44452_44460 = G__44479;
continue;
} else {
var map__44455_44480 = cljs.core.first.call(null,seq__44449_44474__$1);
var map__44455_44481__$1 = ((((!((map__44455_44480 == null)))?((((map__44455_44480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44455_44480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44455_44480):map__44455_44480);
var query_44482 = cljs.core.get.call(null,map__44455_44481__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_44483 = cljs.core.get.call(null,map__44455_44481__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_44484 = cljs.core.get.call(null,map__44455_44481__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_44485 = cljs.core.get.call(null,map__44455_44481__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__44486 = ((function (seq__44449_44457,chunk__44450_44458,count__44451_44459,i__44452_44460,map__44455_44480,map__44455_44481__$1,query_44482,on_load_44483,on_error_44484,callback_args_44485,seq__44449_44474__$1,temp__6753__auto___44473,parallel_payload,map__44447,map__44447__$1,queue,reconciler,networking){
return (function (p1__44434_SHARP_){
return on_load_44483.call(null,p1__44434_SHARP_,callback_args_44485);
});})(seq__44449_44457,chunk__44450_44458,count__44451_44459,i__44452_44460,map__44455_44480,map__44455_44481__$1,query_44482,on_load_44483,on_error_44484,callback_args_44485,seq__44449_44474__$1,temp__6753__auto___44473,parallel_payload,map__44447,map__44447__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__44487 = ((function (seq__44449_44457,chunk__44450_44458,count__44451_44459,i__44452_44460,on_load_SINGLEQUOTE__44486,map__44455_44480,map__44455_44481__$1,query_44482,on_load_44483,on_error_44484,callback_args_44485,seq__44449_44474__$1,temp__6753__auto___44473,parallel_payload,map__44447,map__44447__$1,queue,reconciler,networking){
return (function (p1__44435_SHARP_){
return on_error_44484.call(null,p1__44435_SHARP_,callback_args_44485);
});})(seq__44449_44457,chunk__44450_44458,count__44451_44459,i__44452_44460,on_load_SINGLEQUOTE__44486,map__44455_44480,map__44455_44481__$1,query_44482,on_load_44483,on_error_44484,callback_args_44485,seq__44449_44474__$1,temp__6753__auto___44473,parallel_payload,map__44447,map__44447__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_44482,on_load_SINGLEQUOTE__44486,on_error_SINGLEQUOTE__44487);

var G__44488 = cljs.core.next.call(null,seq__44449_44474__$1);
var G__44489 = null;
var G__44490 = (0);
var G__44491 = (0);
seq__44449_44457 = G__44488;
chunk__44450_44458 = G__44489;
count__44451_44459 = G__44490;
i__44452_44460 = G__44491;
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

var G__44492 = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
fetch_payload = G__44492;
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
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__44493){
var map__44612 = p__44493;
var map__44612__$1 = ((((!((map__44612 == null)))?((((map__44612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44612):map__44612);
var networking = cljs.core.get.call(null,map__44612__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__44612__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__44612__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__44612,map__44612__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__44612,map__44612__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__43974__auto___44730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto___44730,map__44612,map__44612__$1,networking,queue,response_channel){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto___44730,map__44612,map__44612__$1,networking,queue,response_channel){
return (function (state_44653){
var state_val_44654 = (state_44653[(1)]);
if((state_val_44654 === (1))){
var state_44653__$1 = state_44653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44653__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_44654 === (2))){
var inst_44651 = (state_44653[(2)]);
var state_44653__$1 = state_44653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44653__$1,inst_44651);
} else {
return null;
}
}
});})(c__43974__auto___44730,map__44612,map__44612__$1,networking,queue,response_channel))
;
return ((function (switch__43951__auto__,c__43974__auto___44730,map__44612,map__44612__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0 = (function (){
var statearr_44658 = [null,null,null,null,null,null,null];
(statearr_44658[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__);

(statearr_44658[(1)] = (1));

return statearr_44658;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1 = (function (state_44653){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_44653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e44659){if((e44659 instanceof Object)){
var ex__43955__auto__ = e44659;
var statearr_44660_44731 = state_44653;
(statearr_44660_44731[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44732 = state_44653;
state_44653 = G__44732;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__ = function(state_44653){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1.call(this,state_44653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto___44730,map__44612,map__44612__$1,networking,queue,response_channel))
})();
var state__43976__auto__ = (function (){var statearr_44661 = f__43975__auto__.call(null);
(statearr_44661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto___44730);

return statearr_44661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43976__auto__);
});})(c__43974__auto___44730,map__44612,map__44612__$1,networking,queue,response_channel))
);

}});
;})(map__44612,map__44612__$1,networking,queue,response_channel))
});})(map__44612,map__44612__$1,networking,queue,response_channel))
;
var c__43974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto__,map__44612,map__44612__$1,networking,queue,response_channel){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto__,map__44612,map__44612__$1,networking,queue,response_channel){
return (function (state_44703){
var state_val_44704 = (state_44703[(1)]);
if((state_val_44704 === (7))){
var inst_44682 = (state_44703[(2)]);
var state_44703__$1 = state_44703;
if(cljs.core.truth_(inst_44682)){
var statearr_44705_44733 = state_44703__$1;
(statearr_44705_44733[(1)] = (11));

} else {
var statearr_44706_44734 = state_44703__$1;
(statearr_44706_44734[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (1))){
var state_44703__$1 = state_44703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44703__$1,(2),queue);
} else {
if((state_val_44704 === (4))){
var inst_44701 = (state_44703[(2)]);
var state_44703__$1 = state_44703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44703__$1,inst_44701);
} else {
if((state_val_44704 === (15))){
var inst_44698 = (state_44703[(2)]);
var inst_44664 = inst_44698;
var state_44703__$1 = (function (){var statearr_44707 = state_44703;
(statearr_44707[(7)] = inst_44664);

return statearr_44707;
})();
var statearr_44708_44735 = state_44703__$1;
(statearr_44708_44735[(2)] = null);

(statearr_44708_44735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (13))){
var inst_44687 = (state_44703[(2)]);
var inst_44688 = cljs.core.get.call(null,inst_44687,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_44689 = cljs.core.get.call(null,inst_44687,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_44690 = cljs.core.get.call(null,inst_44687,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_44691 = cljs.core.get.call(null,inst_44687,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_44692 = make_process_response.call(null,inst_44689,inst_44691);
var inst_44693 = make_process_response.call(null,inst_44690,inst_44691);
var inst_44694 = untangled.client.impl.application.real_send.call(null,networking,inst_44688,inst_44692,inst_44693);
var state_44703__$1 = (function (){var statearr_44709 = state_44703;
(statearr_44709[(8)] = inst_44694);

return statearr_44709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44703__$1,(14),response_channel);
} else {
if((state_val_44704 === (6))){
var state_44703__$1 = state_44703;
var statearr_44710_44736 = state_44703__$1;
(statearr_44710_44736[(2)] = false);

(statearr_44710_44736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (3))){
var inst_44664 = (state_44703[(7)]);
var inst_44668 = (inst_44664 == null);
var inst_44669 = cljs.core.not.call(null,inst_44668);
var state_44703__$1 = state_44703;
if(inst_44669){
var statearr_44711_44737 = state_44703__$1;
(statearr_44711_44737[(1)] = (5));

} else {
var statearr_44712_44738 = state_44703__$1;
(statearr_44712_44738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (12))){
var inst_44664 = (state_44703[(7)]);
var state_44703__$1 = state_44703;
var statearr_44713_44739 = state_44703__$1;
(statearr_44713_44739[(2)] = inst_44664);

(statearr_44713_44739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (2))){
var inst_44663 = (state_44703[(2)]);
var inst_44664 = inst_44663;
var state_44703__$1 = (function (){var statearr_44714 = state_44703;
(statearr_44714[(7)] = inst_44664);

return statearr_44714;
})();
var statearr_44715_44740 = state_44703__$1;
(statearr_44715_44740[(2)] = null);

(statearr_44715_44740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (11))){
var inst_44664 = (state_44703[(7)]);
var inst_44684 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44664);
var state_44703__$1 = state_44703;
var statearr_44716_44741 = state_44703__$1;
(statearr_44716_44741[(2)] = inst_44684);

(statearr_44716_44741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (9))){
var state_44703__$1 = state_44703;
var statearr_44717_44742 = state_44703__$1;
(statearr_44717_44742[(2)] = false);

(statearr_44717_44742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (5))){
var inst_44664 = (state_44703[(7)]);
var inst_44671 = inst_44664.cljs$lang$protocol_mask$partition0$;
var inst_44672 = (inst_44671 & (64));
var inst_44673 = inst_44664.cljs$core$ISeq$;
var inst_44674 = (cljs.core.PROTOCOL_SENTINEL === inst_44673);
var inst_44675 = (inst_44672) || (inst_44674);
var state_44703__$1 = state_44703;
if(cljs.core.truth_(inst_44675)){
var statearr_44718_44743 = state_44703__$1;
(statearr_44718_44743[(1)] = (8));

} else {
var statearr_44719_44744 = state_44703__$1;
(statearr_44719_44744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (14))){
var inst_44696 = (state_44703[(2)]);
var state_44703__$1 = (function (){var statearr_44720 = state_44703;
(statearr_44720[(9)] = inst_44696);

return statearr_44720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44703__$1,(15),queue);
} else {
if((state_val_44704 === (10))){
var inst_44679 = (state_44703[(2)]);
var state_44703__$1 = state_44703;
var statearr_44721_44745 = state_44703__$1;
(statearr_44721_44745[(2)] = inst_44679);

(statearr_44721_44745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44704 === (8))){
var state_44703__$1 = state_44703;
var statearr_44722_44746 = state_44703__$1;
(statearr_44722_44746[(2)] = true);

(statearr_44722_44746[(1)] = (10));


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
});})(c__43974__auto__,map__44612,map__44612__$1,networking,queue,response_channel))
;
return ((function (switch__43951__auto__,c__43974__auto__,map__44612,map__44612__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0 = (function (){
var statearr_44726 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44726[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__);

(statearr_44726[(1)] = (1));

return statearr_44726;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1 = (function (state_44703){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_44703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e44727){if((e44727 instanceof Object)){
var ex__43955__auto__ = e44727;
var statearr_44728_44747 = state_44703;
(statearr_44728_44747[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44748 = state_44703;
state_44703 = G__44748;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__ = function(state_44703){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1.call(this,state_44703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto__,map__44612,map__44612__$1,networking,queue,response_channel))
})();
var state__43976__auto__ = (function (){var statearr_44729 = f__43975__auto__.call(null);
(statearr_44729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto__);

return statearr_44729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43976__auto__);
});})(c__43974__auto__,map__44612,map__44612__$1,networking,queue,response_channel))
);

return c__43974__auto__;
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
return cljs.core.reduce.call(null,(function (acc,p__44753){
var vec__44754 = p__44753;
var k = cljs.core.nth.call(null,vec__44754,(0),null);
var v = cljs.core.nth.call(null,vec__44754,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__44761){
var vec__44762 = p__44761;
var k = cljs.core.nth.call(null,vec__44762,(0),null);
var v = cljs.core.nth.call(null,vec__44762,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__44769){
var vec__44770 = p__44769;
var k = cljs.core.nth.call(null,vec__44770,(0),null);
var v = cljs.core.nth.call(null,vec__44770,(1),null);
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
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__44781){
var vec__44782 = p__44781;
var k = cljs.core.nth.call(null,vec__44782,(0),null);
var _ = cljs.core.nth.call(null,vec__44782,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__44785){
var vec__44786 = p__44785;
var k = cljs.core.nth.call(null,vec__44786,(0),null);
var v = cljs.core.nth.call(null,vec__44786,(1),null);
if(cljs.core.truth_((function (){var and__39210__auto__ = mutation_merge;
if(cljs.core.truth_(and__39210__auto__)){
return (k instanceof cljs.core.Symbol);
} else {
return and__39210__auto__;
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__44789,initial_state,parser,p__44790){
var map__44795 = p__44789;
var map__44795__$1 = ((((!((map__44795 == null)))?((((map__44795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44795):map__44795);
var app = map__44795__$1;
var queue = cljs.core.get.call(null,map__44795__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mutation_merge = cljs.core.get.call(null,map__44795__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__44796 = p__44790;
var map__44796__$1 = ((((!((map__44796 == null)))?((((map__44796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44796):map__44796);
var pathopt = cljs.core.get.call(null,map__44796__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__44796__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__44796__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__39222__auto__ = migrate;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__44795,map__44795__$1,app,queue,mutation_merge,map__44796,map__44796__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__44795,map__44795__$1,app,queue,mutation_merge,map__44796,map__44796__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__44795,map__44795__$1,app,queue,mutation_merge,map__44796,map__44796__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__44795,map__44795__$1,app,queue,mutation_merge,map__44796,map__44796__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__39222__auto__ = migrate;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__44795,map__44795__$1,app,queue,mutation_merge,map__44796,map__44796__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__44795,map__44795__$1,app,queue,mutation_merge,map__44796,map__44796__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app){
var cb_atom = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__44799_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__44799_SHARP_)){
return cljs.core.partial.call(null,p1__44799_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});

//# sourceMappingURL=application.js.map?rel=1491695656434