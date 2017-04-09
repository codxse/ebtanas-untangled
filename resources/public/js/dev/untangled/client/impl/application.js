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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__51533,query){
var map__51536 = p__51533;
var map__51536__$1 = ((((!((map__51536 == null)))?((((map__51536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51536):map__51536);
var reconciler = cljs.core.get.call(null,map__51536__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__51536,map__51536__$1,reconciler){
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
;})(map__51536,map__51536__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__43974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto__){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto__){
return (function (state_51553){
var state_val_51554 = (state_51553[(1)]);
if((state_val_51554 === (1))){
var state_51553__$1 = state_51553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51553__$1,(2),q,v);
} else {
if((state_val_51554 === (2))){
var inst_51551 = (state_51553[(2)]);
var state_51553__$1 = state_51553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51553__$1,inst_51551);
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
var statearr_51558 = [null,null,null,null,null,null,null];
(statearr_51558[(0)] = untangled$client$impl$application$enqueue_$_state_machine__43952__auto__);

(statearr_51558[(1)] = (1));

return statearr_51558;
});
var untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1 = (function (state_51553){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_51553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e51559){if((e51559 instanceof Object)){
var ex__43955__auto__ = e51559;
var statearr_51560_51562 = state_51553;
(statearr_51560_51562[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51563 = state_51553;
state_51553 = G__51563;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__ = function(state_51553){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1.call(this,state_51553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__43952__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto__))
})();
var state__43976__auto__ = (function (){var statearr_51561 = f__43975__auto__.call(null);
(statearr_51561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto__);

return statearr_51561;
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
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__51565,remote_tx_map,cb){
var map__51568 = p__51565;
var map__51568__$1 = ((((!((map__51568 == null)))?((((map__51568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51568):map__51568);
var app = map__51568__$1;
var queue = cljs.core.get.call(null,map__51568__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__51568,map__51568__$1,app,queue){
return (function (p1__51564_SHARP_){
return fallback.call(null,p1__51564_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__51568,map__51568__$1,app,queue))
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__51572){
var map__51583 = p__51572;
var map__51583__$1 = ((((!((map__51583 == null)))?((((map__51583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51583):map__51583);
var queue = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var seq__51585_51593 = cljs.core.seq.call(null,parallel_payload);
var chunk__51586_51594 = null;
var count__51587_51595 = (0);
var i__51588_51596 = (0);
while(true){
if((i__51588_51596 < count__51587_51595)){
var map__51589_51597 = cljs.core._nth.call(null,chunk__51586_51594,i__51588_51596);
var map__51589_51598__$1 = ((((!((map__51589_51597 == null)))?((((map__51589_51597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51589_51597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51589_51597):map__51589_51597);
var query_51599 = cljs.core.get.call(null,map__51589_51598__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_51600 = cljs.core.get.call(null,map__51589_51598__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_51601 = cljs.core.get.call(null,map__51589_51598__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_51602 = cljs.core.get.call(null,map__51589_51598__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__51603 = ((function (seq__51585_51593,chunk__51586_51594,count__51587_51595,i__51588_51596,map__51589_51597,map__51589_51598__$1,query_51599,on_load_51600,on_error_51601,callback_args_51602,parallel_payload,map__51583,map__51583__$1,queue,reconciler,networking){
return (function (p1__51570_SHARP_){
return on_load_51600.call(null,p1__51570_SHARP_,callback_args_51602);
});})(seq__51585_51593,chunk__51586_51594,count__51587_51595,i__51588_51596,map__51589_51597,map__51589_51598__$1,query_51599,on_load_51600,on_error_51601,callback_args_51602,parallel_payload,map__51583,map__51583__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__51604 = ((function (seq__51585_51593,chunk__51586_51594,count__51587_51595,i__51588_51596,on_load_SINGLEQUOTE__51603,map__51589_51597,map__51589_51598__$1,query_51599,on_load_51600,on_error_51601,callback_args_51602,parallel_payload,map__51583,map__51583__$1,queue,reconciler,networking){
return (function (p1__51571_SHARP_){
return on_error_51601.call(null,p1__51571_SHARP_,callback_args_51602);
});})(seq__51585_51593,chunk__51586_51594,count__51587_51595,i__51588_51596,on_load_SINGLEQUOTE__51603,map__51589_51597,map__51589_51598__$1,query_51599,on_load_51600,on_error_51601,callback_args_51602,parallel_payload,map__51583,map__51583__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_51599,on_load_SINGLEQUOTE__51603,on_error_SINGLEQUOTE__51604);

var G__51605 = seq__51585_51593;
var G__51606 = chunk__51586_51594;
var G__51607 = count__51587_51595;
var G__51608 = (i__51588_51596 + (1));
seq__51585_51593 = G__51605;
chunk__51586_51594 = G__51606;
count__51587_51595 = G__51607;
i__51588_51596 = G__51608;
continue;
} else {
var temp__6753__auto___51609 = cljs.core.seq.call(null,seq__51585_51593);
if(temp__6753__auto___51609){
var seq__51585_51610__$1 = temp__6753__auto___51609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51585_51610__$1)){
var c__40133__auto___51611 = cljs.core.chunk_first.call(null,seq__51585_51610__$1);
var G__51612 = cljs.core.chunk_rest.call(null,seq__51585_51610__$1);
var G__51613 = c__40133__auto___51611;
var G__51614 = cljs.core.count.call(null,c__40133__auto___51611);
var G__51615 = (0);
seq__51585_51593 = G__51612;
chunk__51586_51594 = G__51613;
count__51587_51595 = G__51614;
i__51588_51596 = G__51615;
continue;
} else {
var map__51591_51616 = cljs.core.first.call(null,seq__51585_51610__$1);
var map__51591_51617__$1 = ((((!((map__51591_51616 == null)))?((((map__51591_51616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51591_51616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51591_51616):map__51591_51616);
var query_51618 = cljs.core.get.call(null,map__51591_51617__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_51619 = cljs.core.get.call(null,map__51591_51617__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_51620 = cljs.core.get.call(null,map__51591_51617__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_51621 = cljs.core.get.call(null,map__51591_51617__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__51622 = ((function (seq__51585_51593,chunk__51586_51594,count__51587_51595,i__51588_51596,map__51591_51616,map__51591_51617__$1,query_51618,on_load_51619,on_error_51620,callback_args_51621,seq__51585_51610__$1,temp__6753__auto___51609,parallel_payload,map__51583,map__51583__$1,queue,reconciler,networking){
return (function (p1__51570_SHARP_){
return on_load_51619.call(null,p1__51570_SHARP_,callback_args_51621);
});})(seq__51585_51593,chunk__51586_51594,count__51587_51595,i__51588_51596,map__51591_51616,map__51591_51617__$1,query_51618,on_load_51619,on_error_51620,callback_args_51621,seq__51585_51610__$1,temp__6753__auto___51609,parallel_payload,map__51583,map__51583__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__51623 = ((function (seq__51585_51593,chunk__51586_51594,count__51587_51595,i__51588_51596,on_load_SINGLEQUOTE__51622,map__51591_51616,map__51591_51617__$1,query_51618,on_load_51619,on_error_51620,callback_args_51621,seq__51585_51610__$1,temp__6753__auto___51609,parallel_payload,map__51583,map__51583__$1,queue,reconciler,networking){
return (function (p1__51571_SHARP_){
return on_error_51620.call(null,p1__51571_SHARP_,callback_args_51621);
});})(seq__51585_51593,chunk__51586_51594,count__51587_51595,i__51588_51596,on_load_SINGLEQUOTE__51622,map__51591_51616,map__51591_51617__$1,query_51618,on_load_51619,on_error_51620,callback_args_51621,seq__51585_51610__$1,temp__6753__auto___51609,parallel_payload,map__51583,map__51583__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_51618,on_load_SINGLEQUOTE__51622,on_error_SINGLEQUOTE__51623);

var G__51624 = cljs.core.next.call(null,seq__51585_51610__$1);
var G__51625 = null;
var G__51626 = (0);
var G__51627 = (0);
seq__51585_51593 = G__51624;
chunk__51586_51594 = G__51625;
count__51587_51595 = G__51626;
i__51588_51596 = G__51627;
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

var G__51628 = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
fetch_payload = G__51628;
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
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__51629){
var map__51748 = p__51629;
var map__51748__$1 = ((((!((map__51748 == null)))?((((map__51748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51748):map__51748);
var networking = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__51748,map__51748__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__51748,map__51748__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__43974__auto___51866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto___51866,map__51748,map__51748__$1,networking,queue,response_channel){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto___51866,map__51748,map__51748__$1,networking,queue,response_channel){
return (function (state_51789){
var state_val_51790 = (state_51789[(1)]);
if((state_val_51790 === (1))){
var state_51789__$1 = state_51789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51789__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_51790 === (2))){
var inst_51787 = (state_51789[(2)]);
var state_51789__$1 = state_51789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51789__$1,inst_51787);
} else {
return null;
}
}
});})(c__43974__auto___51866,map__51748,map__51748__$1,networking,queue,response_channel))
;
return ((function (switch__43951__auto__,c__43974__auto___51866,map__51748,map__51748__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0 = (function (){
var statearr_51794 = [null,null,null,null,null,null,null];
(statearr_51794[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__);

(statearr_51794[(1)] = (1));

return statearr_51794;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1 = (function (state_51789){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_51789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e51795){if((e51795 instanceof Object)){
var ex__43955__auto__ = e51795;
var statearr_51796_51867 = state_51789;
(statearr_51796_51867[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51868 = state_51789;
state_51789 = G__51868;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__ = function(state_51789){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1.call(this,state_51789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto___51866,map__51748,map__51748__$1,networking,queue,response_channel))
})();
var state__43976__auto__ = (function (){var statearr_51797 = f__43975__auto__.call(null);
(statearr_51797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto___51866);

return statearr_51797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43976__auto__);
});})(c__43974__auto___51866,map__51748,map__51748__$1,networking,queue,response_channel))
);

}});
;})(map__51748,map__51748__$1,networking,queue,response_channel))
});})(map__51748,map__51748__$1,networking,queue,response_channel))
;
var c__43974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto__,map__51748,map__51748__$1,networking,queue,response_channel){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto__,map__51748,map__51748__$1,networking,queue,response_channel){
return (function (state_51839){
var state_val_51840 = (state_51839[(1)]);
if((state_val_51840 === (7))){
var inst_51818 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
if(cljs.core.truth_(inst_51818)){
var statearr_51841_51869 = state_51839__$1;
(statearr_51841_51869[(1)] = (11));

} else {
var statearr_51842_51870 = state_51839__$1;
(statearr_51842_51870[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (1))){
var state_51839__$1 = state_51839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51839__$1,(2),queue);
} else {
if((state_val_51840 === (4))){
var inst_51837 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51839__$1,inst_51837);
} else {
if((state_val_51840 === (15))){
var inst_51834 = (state_51839[(2)]);
var inst_51800 = inst_51834;
var state_51839__$1 = (function (){var statearr_51843 = state_51839;
(statearr_51843[(7)] = inst_51800);

return statearr_51843;
})();
var statearr_51844_51871 = state_51839__$1;
(statearr_51844_51871[(2)] = null);

(statearr_51844_51871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (13))){
var inst_51823 = (state_51839[(2)]);
var inst_51824 = cljs.core.get.call(null,inst_51823,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_51825 = cljs.core.get.call(null,inst_51823,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_51826 = cljs.core.get.call(null,inst_51823,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_51827 = cljs.core.get.call(null,inst_51823,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_51828 = make_process_response.call(null,inst_51825,inst_51827);
var inst_51829 = make_process_response.call(null,inst_51826,inst_51827);
var inst_51830 = untangled.client.impl.application.real_send.call(null,networking,inst_51824,inst_51828,inst_51829);
var state_51839__$1 = (function (){var statearr_51845 = state_51839;
(statearr_51845[(8)] = inst_51830);

return statearr_51845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51839__$1,(14),response_channel);
} else {
if((state_val_51840 === (6))){
var state_51839__$1 = state_51839;
var statearr_51846_51872 = state_51839__$1;
(statearr_51846_51872[(2)] = false);

(statearr_51846_51872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (3))){
var inst_51800 = (state_51839[(7)]);
var inst_51804 = (inst_51800 == null);
var inst_51805 = cljs.core.not.call(null,inst_51804);
var state_51839__$1 = state_51839;
if(inst_51805){
var statearr_51847_51873 = state_51839__$1;
(statearr_51847_51873[(1)] = (5));

} else {
var statearr_51848_51874 = state_51839__$1;
(statearr_51848_51874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (12))){
var inst_51800 = (state_51839[(7)]);
var state_51839__$1 = state_51839;
var statearr_51849_51875 = state_51839__$1;
(statearr_51849_51875[(2)] = inst_51800);

(statearr_51849_51875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (2))){
var inst_51799 = (state_51839[(2)]);
var inst_51800 = inst_51799;
var state_51839__$1 = (function (){var statearr_51850 = state_51839;
(statearr_51850[(7)] = inst_51800);

return statearr_51850;
})();
var statearr_51851_51876 = state_51839__$1;
(statearr_51851_51876[(2)] = null);

(statearr_51851_51876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (11))){
var inst_51800 = (state_51839[(7)]);
var inst_51820 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51800);
var state_51839__$1 = state_51839;
var statearr_51852_51877 = state_51839__$1;
(statearr_51852_51877[(2)] = inst_51820);

(statearr_51852_51877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (9))){
var state_51839__$1 = state_51839;
var statearr_51853_51878 = state_51839__$1;
(statearr_51853_51878[(2)] = false);

(statearr_51853_51878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (5))){
var inst_51800 = (state_51839[(7)]);
var inst_51807 = inst_51800.cljs$lang$protocol_mask$partition0$;
var inst_51808 = (inst_51807 & (64));
var inst_51809 = inst_51800.cljs$core$ISeq$;
var inst_51810 = (cljs.core.PROTOCOL_SENTINEL === inst_51809);
var inst_51811 = (inst_51808) || (inst_51810);
var state_51839__$1 = state_51839;
if(cljs.core.truth_(inst_51811)){
var statearr_51854_51879 = state_51839__$1;
(statearr_51854_51879[(1)] = (8));

} else {
var statearr_51855_51880 = state_51839__$1;
(statearr_51855_51880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (14))){
var inst_51832 = (state_51839[(2)]);
var state_51839__$1 = (function (){var statearr_51856 = state_51839;
(statearr_51856[(9)] = inst_51832);

return statearr_51856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51839__$1,(15),queue);
} else {
if((state_val_51840 === (10))){
var inst_51815 = (state_51839[(2)]);
var state_51839__$1 = state_51839;
var statearr_51857_51881 = state_51839__$1;
(statearr_51857_51881[(2)] = inst_51815);

(statearr_51857_51881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51840 === (8))){
var state_51839__$1 = state_51839;
var statearr_51858_51882 = state_51839__$1;
(statearr_51858_51882[(2)] = true);

(statearr_51858_51882[(1)] = (10));


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
});})(c__43974__auto__,map__51748,map__51748__$1,networking,queue,response_channel))
;
return ((function (switch__43951__auto__,c__43974__auto__,map__51748,map__51748__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0 = (function (){
var statearr_51862 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51862[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__);

(statearr_51862[(1)] = (1));

return statearr_51862;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1 = (function (state_51839){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_51839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e51863){if((e51863 instanceof Object)){
var ex__43955__auto__ = e51863;
var statearr_51864_51883 = state_51839;
(statearr_51864_51883[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51884 = state_51839;
state_51839 = G__51884;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__ = function(state_51839){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1.call(this,state_51839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto__,map__51748,map__51748__$1,networking,queue,response_channel))
})();
var state__43976__auto__ = (function (){var statearr_51865 = f__43975__auto__.call(null);
(statearr_51865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto__);

return statearr_51865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43976__auto__);
});})(c__43974__auto__,map__51748,map__51748__$1,networking,queue,response_channel))
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
return cljs.core.reduce.call(null,(function (acc,p__51889){
var vec__51890 = p__51889;
var k = cljs.core.nth.call(null,vec__51890,(0),null);
var v = cljs.core.nth.call(null,vec__51890,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__51897){
var vec__51898 = p__51897;
var k = cljs.core.nth.call(null,vec__51898,(0),null);
var v = cljs.core.nth.call(null,vec__51898,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__51905){
var vec__51906 = p__51905;
var k = cljs.core.nth.call(null,vec__51906,(0),null);
var v = cljs.core.nth.call(null,vec__51906,(1),null);
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
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__51917){
var vec__51918 = p__51917;
var k = cljs.core.nth.call(null,vec__51918,(0),null);
var _ = cljs.core.nth.call(null,vec__51918,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__51921){
var vec__51922 = p__51921;
var k = cljs.core.nth.call(null,vec__51922,(0),null);
var v = cljs.core.nth.call(null,vec__51922,(1),null);
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__51925,initial_state,parser,p__51926){
var map__51931 = p__51925;
var map__51931__$1 = ((((!((map__51931 == null)))?((((map__51931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51931):map__51931);
var app = map__51931__$1;
var queue = cljs.core.get.call(null,map__51931__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mutation_merge = cljs.core.get.call(null,map__51931__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__51932 = p__51926;
var map__51932__$1 = ((((!((map__51932 == null)))?((((map__51932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51932):map__51932);
var pathopt = cljs.core.get.call(null,map__51932__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__51932__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__51932__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__39222__auto__ = migrate;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__51931,map__51931__$1,app,queue,mutation_merge,map__51932,map__51932__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__51931,map__51931__$1,app,queue,mutation_merge,map__51932,map__51932__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__51931,map__51931__$1,app,queue,mutation_merge,map__51932,map__51932__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__51931,map__51931__$1,app,queue,mutation_merge,map__51932,map__51932__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__39222__auto__ = migrate;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__51931,map__51931__$1,app,queue,mutation_merge,map__51932,map__51932__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__51931,map__51931__$1,app,queue,mutation_merge,map__51932,map__51932__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app){
var cb_atom = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__51935_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__51935_SHARP_)){
return cljs.core.partial.call(null,p1__51935_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});

//# sourceMappingURL=application.js.map?rel=1491695671250