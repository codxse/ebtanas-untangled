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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__51520,query){
var map__51523 = p__51520;
var map__51523__$1 = ((((!((map__51523 == null)))?((((map__51523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51523):map__51523);
var reconciler = cljs.core.get.call(null,map__51523__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__51523,map__51523__$1,reconciler){
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
;})(map__51523,map__51523__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__){
return (function (state_51540){
var state_val_51541 = (state_51540[(1)]);
if((state_val_51541 === (1))){
var state_51540__$1 = state_51540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51540__$1,(2),q,v);
} else {
if((state_val_51541 === (2))){
var inst_51538 = (state_51540[(2)]);
var state_51540__$1 = state_51540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51540__$1,inst_51538);
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
var statearr_51545 = [null,null,null,null,null,null,null];
(statearr_51545[(0)] = untangled$client$impl$application$enqueue_$_state_machine__48199__auto__);

(statearr_51545[(1)] = (1));

return statearr_51545;
});
var untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1 = (function (state_51540){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_51540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e51546){if((e51546 instanceof Object)){
var ex__48202__auto__ = e51546;
var statearr_51547_51549 = state_51540;
(statearr_51547_51549[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51550 = state_51540;
state_51540 = G__51550;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__ = function(state_51540){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1.call(this,state_51540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__48199__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__48199__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_51548 = f__48313__auto__.call(null);
(statearr_51548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_51548;
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
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__51554,remote_tx_map,cb){
var map__51561 = p__51554;
var map__51561__$1 = ((((!((map__51561 == null)))?((((map__51561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51561):map__51561);
var app = map__51561__$1;
var send_queues = cljs.core.get.call(null,map__51561__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var networking = cljs.core.get.call(null,map__51561__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__51563 = cljs.core.seq.call(null,cljs.core.keys.call(null,remote_tx_map));
var chunk__51564 = null;
var count__51565 = (0);
var i__51566 = (0);
while(true){
if((i__51566 < count__51565)){
var remote = cljs.core._nth.call(null,chunk__51564,i__51566);
var queue_51567 = cljs.core.get.call(null,send_queues,remote);
var full_remote_transaction_51568 = cljs.core.get.call(null,remote_tx_map,remote);
var fallback_51569 = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction_51568);
var desired_remote_mutations_51570 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction_51568);
var has_mutations_QMARK__51571 = (cljs.core.count.call(null,desired_remote_mutations_51570) > (0));
var payload_51572 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations_51570,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (seq__51563,chunk__51564,count__51565,i__51566,queue_51567,full_remote_transaction_51568,fallback_51569,desired_remote_mutations_51570,has_mutations_QMARK__51571,remote,map__51561,map__51561__$1,app,send_queues,networking){
return (function (p1__51553_SHARP_){
return fallback_51569.call(null,p1__51553_SHARP_);
});})(seq__51563,chunk__51564,count__51565,i__51566,queue_51567,full_remote_transaction_51568,fallback_51569,desired_remote_mutations_51570,has_mutations_QMARK__51571,remote,map__51561,map__51561__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__51571){
untangled.client.impl.application.enqueue.call(null,queue_51567,payload_51572);
} else {
}

var G__51573 = seq__51563;
var G__51574 = chunk__51564;
var G__51575 = count__51565;
var G__51576 = (i__51566 + (1));
seq__51563 = G__51573;
chunk__51564 = G__51574;
count__51565 = G__51575;
i__51566 = G__51576;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51563);
if(temp__6753__auto__){
var seq__51563__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51563__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51563__$1);
var G__51577 = cljs.core.chunk_rest.call(null,seq__51563__$1);
var G__51578 = c__35466__auto__;
var G__51579 = cljs.core.count.call(null,c__35466__auto__);
var G__51580 = (0);
seq__51563 = G__51577;
chunk__51564 = G__51578;
count__51565 = G__51579;
i__51566 = G__51580;
continue;
} else {
var remote = cljs.core.first.call(null,seq__51563__$1);
var queue_51581 = cljs.core.get.call(null,send_queues,remote);
var full_remote_transaction_51582 = cljs.core.get.call(null,remote_tx_map,remote);
var fallback_51583 = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction_51582);
var desired_remote_mutations_51584 = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction_51582);
var has_mutations_QMARK__51585 = (cljs.core.count.call(null,desired_remote_mutations_51584) > (0));
var payload_51586 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations_51584,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (seq__51563,chunk__51564,count__51565,i__51566,queue_51581,full_remote_transaction_51582,fallback_51583,desired_remote_mutations_51584,has_mutations_QMARK__51585,remote,seq__51563__$1,temp__6753__auto__,map__51561,map__51561__$1,app,send_queues,networking){
return (function (p1__51553_SHARP_){
return fallback_51583.call(null,p1__51553_SHARP_);
});})(seq__51563,chunk__51564,count__51565,i__51566,queue_51581,full_remote_transaction_51582,fallback_51583,desired_remote_mutations_51584,has_mutations_QMARK__51585,remote,seq__51563__$1,temp__6753__auto__,map__51561,map__51561__$1,app,send_queues,networking))
], null);
if(has_mutations_QMARK__51585){
untangled.client.impl.application.enqueue.call(null,queue_51581,payload_51586);
} else {
}

var G__51587 = cljs.core.next.call(null,seq__51563__$1);
var G__51588 = null;
var G__51589 = (0);
var G__51590 = (0);
seq__51563 = G__51587;
chunk__51564 = G__51588;
count__51565 = G__51589;
i__51566 = G__51590;
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__51593){
var map__51616 = p__51593;
var map__51616__$1 = ((((!((map__51616 == null)))?((((map__51616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51616):map__51616);
var send_queues = cljs.core.get.call(null,map__51616__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var reconciler = cljs.core.get.call(null,map__51616__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__51616__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var seq__51618 = cljs.core.seq.call(null,cljs.core.keys.call(null,send_queues));
var chunk__51619 = null;
var count__51620 = (0);
var i__51621 = (0);
while(true){
if((i__51621 < count__51620)){
var remote = cljs.core._nth.call(null,chunk__51619,i__51621);
var queue_51638 = cljs.core.get.call(null,send_queues,remote);
var network_51639 = cljs.core.get.call(null,networking,remote);
var parallel_payload_51640 = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,remote,reconciler);
var seq__51622_51641 = cljs.core.seq.call(null,parallel_payload_51640);
var chunk__51623_51642 = null;
var count__51624_51643 = (0);
var i__51625_51644 = (0);
while(true){
if((i__51625_51644 < count__51624_51643)){
var map__51626_51645 = cljs.core._nth.call(null,chunk__51623_51642,i__51625_51644);
var map__51626_51646__$1 = ((((!((map__51626_51645 == null)))?((((map__51626_51645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51626_51645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51626_51645):map__51626_51645);
var query_51647 = cljs.core.get.call(null,map__51626_51646__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_51648 = cljs.core.get.call(null,map__51626_51646__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_51649 = cljs.core.get.call(null,map__51626_51646__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_51650 = cljs.core.get.call(null,map__51626_51646__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__51651 = ((function (seq__51622_51641,chunk__51623_51642,count__51624_51643,i__51625_51644,seq__51618,chunk__51619,count__51620,i__51621,map__51626_51645,map__51626_51646__$1,query_51647,on_load_51648,on_error_51649,load_descriptors_51650,queue_51638,network_51639,parallel_payload_51640,remote,map__51616,map__51616__$1,send_queues,reconciler,networking){
return (function (p1__51591_SHARP_){
return on_load_51648.call(null,p1__51591_SHARP_,load_descriptors_51650);
});})(seq__51622_51641,chunk__51623_51642,count__51624_51643,i__51625_51644,seq__51618,chunk__51619,count__51620,i__51621,map__51626_51645,map__51626_51646__$1,query_51647,on_load_51648,on_error_51649,load_descriptors_51650,queue_51638,network_51639,parallel_payload_51640,remote,map__51616,map__51616__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__51652 = ((function (seq__51622_51641,chunk__51623_51642,count__51624_51643,i__51625_51644,seq__51618,chunk__51619,count__51620,i__51621,on_load_SINGLEQUOTE__51651,map__51626_51645,map__51626_51646__$1,query_51647,on_load_51648,on_error_51649,load_descriptors_51650,queue_51638,network_51639,parallel_payload_51640,remote,map__51616,map__51616__$1,send_queues,reconciler,networking){
return (function (p1__51592_SHARP_){
return on_error_51649.call(null,p1__51592_SHARP_,load_descriptors_51650);
});})(seq__51622_51641,chunk__51623_51642,count__51624_51643,i__51625_51644,seq__51618,chunk__51619,count__51620,i__51621,on_load_SINGLEQUOTE__51651,map__51626_51645,map__51626_51646__$1,query_51647,on_load_51648,on_error_51649,load_descriptors_51650,queue_51638,network_51639,parallel_payload_51640,remote,map__51616,map__51616__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_51639,query_51647,on_load_SINGLEQUOTE__51651,on_error_SINGLEQUOTE__51652,null);

var G__51653 = seq__51622_51641;
var G__51654 = chunk__51623_51642;
var G__51655 = count__51624_51643;
var G__51656 = (i__51625_51644 + (1));
seq__51622_51641 = G__51653;
chunk__51623_51642 = G__51654;
count__51624_51643 = G__51655;
i__51625_51644 = G__51656;
continue;
} else {
var temp__6753__auto___51657 = cljs.core.seq.call(null,seq__51622_51641);
if(temp__6753__auto___51657){
var seq__51622_51658__$1 = temp__6753__auto___51657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51622_51658__$1)){
var c__35466__auto___51659 = cljs.core.chunk_first.call(null,seq__51622_51658__$1);
var G__51660 = cljs.core.chunk_rest.call(null,seq__51622_51658__$1);
var G__51661 = c__35466__auto___51659;
var G__51662 = cljs.core.count.call(null,c__35466__auto___51659);
var G__51663 = (0);
seq__51622_51641 = G__51660;
chunk__51623_51642 = G__51661;
count__51624_51643 = G__51662;
i__51625_51644 = G__51663;
continue;
} else {
var map__51628_51664 = cljs.core.first.call(null,seq__51622_51658__$1);
var map__51628_51665__$1 = ((((!((map__51628_51664 == null)))?((((map__51628_51664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51628_51664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51628_51664):map__51628_51664);
var query_51666 = cljs.core.get.call(null,map__51628_51665__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_51667 = cljs.core.get.call(null,map__51628_51665__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_51668 = cljs.core.get.call(null,map__51628_51665__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_51669 = cljs.core.get.call(null,map__51628_51665__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__51670 = ((function (seq__51622_51641,chunk__51623_51642,count__51624_51643,i__51625_51644,seq__51618,chunk__51619,count__51620,i__51621,map__51628_51664,map__51628_51665__$1,query_51666,on_load_51667,on_error_51668,load_descriptors_51669,seq__51622_51658__$1,temp__6753__auto___51657,queue_51638,network_51639,parallel_payload_51640,remote,map__51616,map__51616__$1,send_queues,reconciler,networking){
return (function (p1__51591_SHARP_){
return on_load_51667.call(null,p1__51591_SHARP_,load_descriptors_51669);
});})(seq__51622_51641,chunk__51623_51642,count__51624_51643,i__51625_51644,seq__51618,chunk__51619,count__51620,i__51621,map__51628_51664,map__51628_51665__$1,query_51666,on_load_51667,on_error_51668,load_descriptors_51669,seq__51622_51658__$1,temp__6753__auto___51657,queue_51638,network_51639,parallel_payload_51640,remote,map__51616,map__51616__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__51671 = ((function (seq__51622_51641,chunk__51623_51642,count__51624_51643,i__51625_51644,seq__51618,chunk__51619,count__51620,i__51621,on_load_SINGLEQUOTE__51670,map__51628_51664,map__51628_51665__$1,query_51666,on_load_51667,on_error_51668,load_descriptors_51669,seq__51622_51658__$1,temp__6753__auto___51657,queue_51638,network_51639,parallel_payload_51640,remote,map__51616,map__51616__$1,send_queues,reconciler,networking){
return (function (p1__51592_SHARP_){
return on_error_51668.call(null,p1__51592_SHARP_,load_descriptors_51669);
});})(seq__51622_51641,chunk__51623_51642,count__51624_51643,i__51625_51644,seq__51618,chunk__51619,count__51620,i__51621,on_load_SINGLEQUOTE__51670,map__51628_51664,map__51628_51665__$1,query_51666,on_load_51667,on_error_51668,load_descriptors_51669,seq__51622_51658__$1,temp__6753__auto___51657,queue_51638,network_51639,parallel_payload_51640,remote,map__51616,map__51616__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_51639,query_51666,on_load_SINGLEQUOTE__51670,on_error_SINGLEQUOTE__51671,null);

var G__51672 = cljs.core.next.call(null,seq__51622_51658__$1);
var G__51673 = null;
var G__51674 = (0);
var G__51675 = (0);
seq__51622_51641 = G__51672;
chunk__51623_51642 = G__51673;
count__51624_51643 = G__51674;
i__51625_51644 = G__51675;
continue;
}
} else {
}
}
break;
}

var fetch_payload_51676 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_51676)){
untangled.client.impl.application.enqueue.call(null,queue_51638,cljs.core.assoc.call(null,fetch_payload_51676,new cljs.core.Keyword(null,"networking","networking",586110628),network_51639));

var G__51677 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
fetch_payload_51676 = G__51677;
continue;
} else {
}
break;
}

var G__51678 = seq__51618;
var G__51679 = chunk__51619;
var G__51680 = count__51620;
var G__51681 = (i__51621 + (1));
seq__51618 = G__51678;
chunk__51619 = G__51679;
count__51620 = G__51680;
i__51621 = G__51681;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51618);
if(temp__6753__auto__){
var seq__51618__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51618__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51618__$1);
var G__51682 = cljs.core.chunk_rest.call(null,seq__51618__$1);
var G__51683 = c__35466__auto__;
var G__51684 = cljs.core.count.call(null,c__35466__auto__);
var G__51685 = (0);
seq__51618 = G__51682;
chunk__51619 = G__51683;
count__51620 = G__51684;
i__51621 = G__51685;
continue;
} else {
var remote = cljs.core.first.call(null,seq__51618__$1);
var queue_51686 = cljs.core.get.call(null,send_queues,remote);
var network_51687 = cljs.core.get.call(null,networking,remote);
var parallel_payload_51688 = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,remote,reconciler);
var seq__51630_51689 = cljs.core.seq.call(null,parallel_payload_51688);
var chunk__51631_51690 = null;
var count__51632_51691 = (0);
var i__51633_51692 = (0);
while(true){
if((i__51633_51692 < count__51632_51691)){
var map__51634_51693 = cljs.core._nth.call(null,chunk__51631_51690,i__51633_51692);
var map__51634_51694__$1 = ((((!((map__51634_51693 == null)))?((((map__51634_51693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51634_51693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51634_51693):map__51634_51693);
var query_51695 = cljs.core.get.call(null,map__51634_51694__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_51696 = cljs.core.get.call(null,map__51634_51694__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_51697 = cljs.core.get.call(null,map__51634_51694__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_51698 = cljs.core.get.call(null,map__51634_51694__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__51699 = ((function (seq__51630_51689,chunk__51631_51690,count__51632_51691,i__51633_51692,seq__51618,chunk__51619,count__51620,i__51621,map__51634_51693,map__51634_51694__$1,query_51695,on_load_51696,on_error_51697,load_descriptors_51698,queue_51686,network_51687,parallel_payload_51688,remote,seq__51618__$1,temp__6753__auto__,map__51616,map__51616__$1,send_queues,reconciler,networking){
return (function (p1__51591_SHARP_){
return on_load_51696.call(null,p1__51591_SHARP_,load_descriptors_51698);
});})(seq__51630_51689,chunk__51631_51690,count__51632_51691,i__51633_51692,seq__51618,chunk__51619,count__51620,i__51621,map__51634_51693,map__51634_51694__$1,query_51695,on_load_51696,on_error_51697,load_descriptors_51698,queue_51686,network_51687,parallel_payload_51688,remote,seq__51618__$1,temp__6753__auto__,map__51616,map__51616__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__51700 = ((function (seq__51630_51689,chunk__51631_51690,count__51632_51691,i__51633_51692,seq__51618,chunk__51619,count__51620,i__51621,on_load_SINGLEQUOTE__51699,map__51634_51693,map__51634_51694__$1,query_51695,on_load_51696,on_error_51697,load_descriptors_51698,queue_51686,network_51687,parallel_payload_51688,remote,seq__51618__$1,temp__6753__auto__,map__51616,map__51616__$1,send_queues,reconciler,networking){
return (function (p1__51592_SHARP_){
return on_error_51697.call(null,p1__51592_SHARP_,load_descriptors_51698);
});})(seq__51630_51689,chunk__51631_51690,count__51632_51691,i__51633_51692,seq__51618,chunk__51619,count__51620,i__51621,on_load_SINGLEQUOTE__51699,map__51634_51693,map__51634_51694__$1,query_51695,on_load_51696,on_error_51697,load_descriptors_51698,queue_51686,network_51687,parallel_payload_51688,remote,seq__51618__$1,temp__6753__auto__,map__51616,map__51616__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_51687,query_51695,on_load_SINGLEQUOTE__51699,on_error_SINGLEQUOTE__51700,null);

var G__51701 = seq__51630_51689;
var G__51702 = chunk__51631_51690;
var G__51703 = count__51632_51691;
var G__51704 = (i__51633_51692 + (1));
seq__51630_51689 = G__51701;
chunk__51631_51690 = G__51702;
count__51632_51691 = G__51703;
i__51633_51692 = G__51704;
continue;
} else {
var temp__6753__auto___51705__$1 = cljs.core.seq.call(null,seq__51630_51689);
if(temp__6753__auto___51705__$1){
var seq__51630_51706__$1 = temp__6753__auto___51705__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51630_51706__$1)){
var c__35466__auto___51707 = cljs.core.chunk_first.call(null,seq__51630_51706__$1);
var G__51708 = cljs.core.chunk_rest.call(null,seq__51630_51706__$1);
var G__51709 = c__35466__auto___51707;
var G__51710 = cljs.core.count.call(null,c__35466__auto___51707);
var G__51711 = (0);
seq__51630_51689 = G__51708;
chunk__51631_51690 = G__51709;
count__51632_51691 = G__51710;
i__51633_51692 = G__51711;
continue;
} else {
var map__51636_51712 = cljs.core.first.call(null,seq__51630_51706__$1);
var map__51636_51713__$1 = ((((!((map__51636_51712 == null)))?((((map__51636_51712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51636_51712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51636_51712):map__51636_51712);
var query_51714 = cljs.core.get.call(null,map__51636_51713__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_51715 = cljs.core.get.call(null,map__51636_51713__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_51716 = cljs.core.get.call(null,map__51636_51713__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors_51717 = cljs.core.get.call(null,map__51636_51713__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var on_load_SINGLEQUOTE__51718 = ((function (seq__51630_51689,chunk__51631_51690,count__51632_51691,i__51633_51692,seq__51618,chunk__51619,count__51620,i__51621,map__51636_51712,map__51636_51713__$1,query_51714,on_load_51715,on_error_51716,load_descriptors_51717,seq__51630_51706__$1,temp__6753__auto___51705__$1,queue_51686,network_51687,parallel_payload_51688,remote,seq__51618__$1,temp__6753__auto__,map__51616,map__51616__$1,send_queues,reconciler,networking){
return (function (p1__51591_SHARP_){
return on_load_51715.call(null,p1__51591_SHARP_,load_descriptors_51717);
});})(seq__51630_51689,chunk__51631_51690,count__51632_51691,i__51633_51692,seq__51618,chunk__51619,count__51620,i__51621,map__51636_51712,map__51636_51713__$1,query_51714,on_load_51715,on_error_51716,load_descriptors_51717,seq__51630_51706__$1,temp__6753__auto___51705__$1,queue_51686,network_51687,parallel_payload_51688,remote,seq__51618__$1,temp__6753__auto__,map__51616,map__51616__$1,send_queues,reconciler,networking))
;
var on_error_SINGLEQUOTE__51719 = ((function (seq__51630_51689,chunk__51631_51690,count__51632_51691,i__51633_51692,seq__51618,chunk__51619,count__51620,i__51621,on_load_SINGLEQUOTE__51718,map__51636_51712,map__51636_51713__$1,query_51714,on_load_51715,on_error_51716,load_descriptors_51717,seq__51630_51706__$1,temp__6753__auto___51705__$1,queue_51686,network_51687,parallel_payload_51688,remote,seq__51618__$1,temp__6753__auto__,map__51616,map__51616__$1,send_queues,reconciler,networking){
return (function (p1__51592_SHARP_){
return on_error_51716.call(null,p1__51592_SHARP_,load_descriptors_51717);
});})(seq__51630_51689,chunk__51631_51690,count__51632_51691,i__51633_51692,seq__51618,chunk__51619,count__51620,i__51621,on_load_SINGLEQUOTE__51718,map__51636_51712,map__51636_51713__$1,query_51714,on_load_51715,on_error_51716,load_descriptors_51717,seq__51630_51706__$1,temp__6753__auto___51705__$1,queue_51686,network_51687,parallel_payload_51688,remote,seq__51618__$1,temp__6753__auto__,map__51616,map__51616__$1,send_queues,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,network_51687,query_51714,on_load_SINGLEQUOTE__51718,on_error_SINGLEQUOTE__51719,null);

var G__51720 = cljs.core.next.call(null,seq__51630_51706__$1);
var G__51721 = null;
var G__51722 = (0);
var G__51723 = (0);
seq__51630_51689 = G__51720;
chunk__51631_51690 = G__51721;
count__51632_51691 = G__51722;
i__51633_51692 = G__51723;
continue;
}
} else {
}
}
break;
}

var fetch_payload_51724 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
while(true){
if(cljs.core.truth_(fetch_payload_51724)){
untangled.client.impl.application.enqueue.call(null,queue_51686,cljs.core.assoc.call(null,fetch_payload_51724,new cljs.core.Keyword(null,"networking","networking",586110628),network_51687));

var G__51725 = untangled.client.impl.data_fetch.mark_loading.call(null,remote,reconciler);
fetch_payload_51724 = G__51725;
continue;
} else {
}
break;
}

var G__51726 = cljs.core.next.call(null,seq__51618__$1);
var G__51727 = null;
var G__51728 = (0);
var G__51729 = (0);
seq__51618 = G__51726;
chunk__51619 = G__51727;
count__51620 = G__51728;
i__51621 = G__51729;
continue;
}
} else {
return null;
}
}
break;
}
});
untangled.client.impl.application.detect_errant_remotes = (function untangled$client$impl$application$detect_errant_remotes(p__51730){
var map__51733 = p__51730;
var map__51733__$1 = ((((!((map__51733 == null)))?((((map__51733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51733):map__51733);
var app = map__51733__$1;
var reconciler = cljs.core.get.call(null,map__51733__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var send_queues = cljs.core.get.call(null,map__51733__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
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
var map__51739 = payload;
var map__51739__$1 = ((((!((map__51739 == null)))?((((map__51739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51739):map__51739);
var query = cljs.core.get.call(null,map__51739__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load = cljs.core.get.call(null,map__51739__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error = cljs.core.get.call(null,map__51739__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var load_descriptors = cljs.core.get.call(null,map__51739__$1,new cljs.core.Keyword(null,"load-descriptors","load-descriptors",391720681));
var merge_data = (cljs.core.truth_(load_descriptors)?((function (map__51739,map__51739__$1,query,on_load,on_error,load_descriptors){
return (function (p1__51735_SHARP_){
return on_load.call(null,p1__51735_SHARP_,load_descriptors);
});})(map__51739,map__51739__$1,query,on_load,on_error,load_descriptors))
:on_load);
var on_update = (cljs.core.truth_(load_descriptors)?cljs.core.identity:merge_data);
var on_error__$1 = (cljs.core.truth_(load_descriptors)?((function (map__51739,map__51739__$1,query,on_load,on_error,load_descriptors,merge_data,on_update){
return (function (p1__51736_SHARP_){
return on_error.call(null,p1__51736_SHARP_,load_descriptors);
});})(map__51739,map__51739__$1,query,on_load,on_error,load_descriptors,merge_data,on_update))
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
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__51741){
var map__51828 = p__51741;
var map__51828__$1 = ((((!((map__51828 == null)))?((((map__51828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51828):map__51828);
var networking = cljs.core.get.call(null,map__51828__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var send_queues = cljs.core.get.call(null,map__51828__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var response_channels = cljs.core.get.call(null,map__51828__$1,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128));
var seq__51830 = cljs.core.seq.call(null,cljs.core.keys.call(null,send_queues));
var chunk__51831 = null;
var count__51832 = (0);
var i__51833 = (0);
while(true){
if((i__51833 < count__51832)){
var remote = cljs.core._nth.call(null,chunk__51831,i__51833);
var queue_51914 = cljs.core.get.call(null,send_queues,remote);
var network_51915 = cljs.core.get.call(null,networking,remote);
var response_channel_51916 = cljs.core.get.call(null,response_channels,remote);
var send_complete_51917 = ((function (seq__51830,chunk__51831,count__51832,i__51833,queue_51914,network_51915,response_channel_51916,remote,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto__,queue_51914,network_51915,response_channel_51916,remote,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto__,queue_51914,network_51915,response_channel_51916,remote,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (state_51837){
var state_val_51838 = (state_51837[(1)]);
if((state_val_51838 === (1))){
var state_51837__$1 = state_51837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51837__$1,(2),response_channel_51916,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_51838 === (2))){
var inst_51835 = (state_51837[(2)]);
var state_51837__$1 = state_51837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51837__$1,inst_51835);
} else {
return null;
}
}
});})(seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto__,queue_51914,network_51915,response_channel_51916,remote,map__51828,map__51828__$1,networking,send_queues,response_channels))
;
return ((function (seq__51830,chunk__51831,count__51832,i__51833,switch__48198__auto__,c__48312__auto__,queue_51914,network_51915,response_channel_51916,remote,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_51842 = [null,null,null,null,null,null,null];
(statearr_51842[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_51842[(1)] = (1));

return statearr_51842;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_51837){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_51837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e51843){if((e51843 instanceof Object)){
var ex__48202__auto__ = e51843;
var statearr_51844_51918 = state_51837;
(statearr_51844_51918[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51919 = state_51837;
state_51837 = G__51919;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_51837){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_51837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__51830,chunk__51831,count__51832,i__51833,switch__48198__auto__,c__48312__auto__,queue_51914,network_51915,response_channel_51916,remote,map__51828,map__51828__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_51845 = f__48313__auto__.call(null);
(statearr_51845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_51845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto__,queue_51914,network_51915,response_channel_51916,remote,map__51828,map__51828__$1,networking,send_queues,response_channels))
);

return c__48312__auto__;
});})(seq__51830,chunk__51831,count__51832,i__51833,queue_51914,network_51915,response_channel_51916,remote,map__51828,map__51828__$1,networking,send_queues,response_channels))
;
var c__48312__auto___51920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto___51920,queue_51914,network_51915,response_channel_51916,send_complete_51917,remote,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto___51920,queue_51914,network_51915,response_channel_51916,send_complete_51917,remote,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (state_51859){
var state_val_51860 = (state_51859[(1)]);
if((state_val_51860 === (1))){
var state_51859__$1 = state_51859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51859__$1,(2),queue_51914);
} else {
if((state_val_51860 === (2))){
var inst_51847 = (state_51859[(2)]);
var inst_51848 = inst_51847;
var state_51859__$1 = (function (){var statearr_51861 = state_51859;
(statearr_51861[(7)] = inst_51848);

return statearr_51861;
})();
var statearr_51862_51921 = state_51859__$1;
(statearr_51862_51921[(2)] = null);

(statearr_51862_51921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51860 === (3))){
var inst_51848 = (state_51859[(7)]);
var inst_51850 = untangled.client.impl.application.send_payload.call(null,network_51915,inst_51848,send_complete_51917);
var state_51859__$1 = (function (){var statearr_51863 = state_51859;
(statearr_51863[(8)] = inst_51850);

return statearr_51863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51859__$1,(5),response_channel_51916);
} else {
if((state_val_51860 === (4))){
var inst_51857 = (state_51859[(2)]);
var state_51859__$1 = state_51859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51859__$1,inst_51857);
} else {
if((state_val_51860 === (5))){
var inst_51852 = (state_51859[(2)]);
var state_51859__$1 = (function (){var statearr_51864 = state_51859;
(statearr_51864[(9)] = inst_51852);

return statearr_51864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51859__$1,(6),queue_51914);
} else {
if((state_val_51860 === (6))){
var inst_51854 = (state_51859[(2)]);
var inst_51848 = inst_51854;
var state_51859__$1 = (function (){var statearr_51865 = state_51859;
(statearr_51865[(7)] = inst_51848);

return statearr_51865;
})();
var statearr_51866_51922 = state_51859__$1;
(statearr_51866_51922[(2)] = null);

(statearr_51866_51922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto___51920,queue_51914,network_51915,response_channel_51916,send_complete_51917,remote,map__51828,map__51828__$1,networking,send_queues,response_channels))
;
return ((function (seq__51830,chunk__51831,count__51832,i__51833,switch__48198__auto__,c__48312__auto___51920,queue_51914,network_51915,response_channel_51916,send_complete_51917,remote,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_51870 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51870[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_51870[(1)] = (1));

return statearr_51870;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_51859){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_51859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e51871){if((e51871 instanceof Object)){
var ex__48202__auto__ = e51871;
var statearr_51872_51923 = state_51859;
(statearr_51872_51923[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51924 = state_51859;
state_51859 = G__51924;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_51859){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_51859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__51830,chunk__51831,count__51832,i__51833,switch__48198__auto__,c__48312__auto___51920,queue_51914,network_51915,response_channel_51916,send_complete_51917,remote,map__51828,map__51828__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_51873 = f__48313__auto__.call(null);
(statearr_51873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___51920);

return statearr_51873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto___51920,queue_51914,network_51915,response_channel_51916,send_complete_51917,remote,map__51828,map__51828__$1,networking,send_queues,response_channels))
);


var G__51925 = seq__51830;
var G__51926 = chunk__51831;
var G__51927 = count__51832;
var G__51928 = (i__51833 + (1));
seq__51830 = G__51925;
chunk__51831 = G__51926;
count__51832 = G__51927;
i__51833 = G__51928;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__51830);
if(temp__6753__auto__){
var seq__51830__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51830__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__51830__$1);
var G__51929 = cljs.core.chunk_rest.call(null,seq__51830__$1);
var G__51930 = c__35466__auto__;
var G__51931 = cljs.core.count.call(null,c__35466__auto__);
var G__51932 = (0);
seq__51830 = G__51929;
chunk__51831 = G__51930;
count__51832 = G__51931;
i__51833 = G__51932;
continue;
} else {
var remote = cljs.core.first.call(null,seq__51830__$1);
var queue_51933 = cljs.core.get.call(null,send_queues,remote);
var network_51934 = cljs.core.get.call(null,networking,remote);
var response_channel_51935 = cljs.core.get.call(null,response_channels,remote);
var send_complete_51936 = ((function (seq__51830,chunk__51831,count__51832,i__51833,queue_51933,network_51934,response_channel_51935,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto__,queue_51933,network_51934,response_channel_51935,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto__,queue_51933,network_51934,response_channel_51935,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (state_51877){
var state_val_51878 = (state_51877[(1)]);
if((state_val_51878 === (1))){
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51877__$1,(2),response_channel_51935,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_51878 === (2))){
var inst_51875 = (state_51877[(2)]);
var state_51877__$1 = state_51877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51877__$1,inst_51875);
} else {
return null;
}
}
});})(seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto__,queue_51933,network_51934,response_channel_51935,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels))
;
return ((function (seq__51830,chunk__51831,count__51832,i__51833,switch__48198__auto__,c__48312__auto__,queue_51933,network_51934,response_channel_51935,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_51882 = [null,null,null,null,null,null,null];
(statearr_51882[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_51882[(1)] = (1));

return statearr_51882;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_51877){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_51877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e51883){if((e51883 instanceof Object)){
var ex__48202__auto__ = e51883;
var statearr_51884_51937 = state_51877;
(statearr_51884_51937[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51938 = state_51877;
state_51877 = G__51938;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_51877){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_51877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__51830,chunk__51831,count__51832,i__51833,switch__48198__auto__,c__48312__auto__,queue_51933,network_51934,response_channel_51935,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_51885 = f__48313__auto__.call(null);
(statearr_51885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_51885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto__,queue_51933,network_51934,response_channel_51935,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels))
);

return c__48312__auto__;
});})(seq__51830,chunk__51831,count__51832,i__51833,queue_51933,network_51934,response_channel_51935,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels))
;
var c__48312__auto___51939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto___51939,queue_51933,network_51934,response_channel_51935,send_complete_51936,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto___51939,queue_51933,network_51934,response_channel_51935,send_complete_51936,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function (state_51899){
var state_val_51900 = (state_51899[(1)]);
if((state_val_51900 === (1))){
var state_51899__$1 = state_51899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51899__$1,(2),queue_51933);
} else {
if((state_val_51900 === (2))){
var inst_51887 = (state_51899[(2)]);
var inst_51888 = inst_51887;
var state_51899__$1 = (function (){var statearr_51901 = state_51899;
(statearr_51901[(7)] = inst_51888);

return statearr_51901;
})();
var statearr_51902_51940 = state_51899__$1;
(statearr_51902_51940[(2)] = null);

(statearr_51902_51940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51900 === (3))){
var inst_51888 = (state_51899[(7)]);
var inst_51890 = untangled.client.impl.application.send_payload.call(null,network_51934,inst_51888,send_complete_51936);
var state_51899__$1 = (function (){var statearr_51903 = state_51899;
(statearr_51903[(8)] = inst_51890);

return statearr_51903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51899__$1,(5),response_channel_51935);
} else {
if((state_val_51900 === (4))){
var inst_51897 = (state_51899[(2)]);
var state_51899__$1 = state_51899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51899__$1,inst_51897);
} else {
if((state_val_51900 === (5))){
var inst_51892 = (state_51899[(2)]);
var state_51899__$1 = (function (){var statearr_51904 = state_51899;
(statearr_51904[(9)] = inst_51892);

return statearr_51904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51899__$1,(6),queue_51933);
} else {
if((state_val_51900 === (6))){
var inst_51894 = (state_51899[(2)]);
var inst_51888 = inst_51894;
var state_51899__$1 = (function (){var statearr_51905 = state_51899;
(statearr_51905[(7)] = inst_51888);

return statearr_51905;
})();
var statearr_51906_51941 = state_51899__$1;
(statearr_51906_51941[(2)] = null);

(statearr_51906_51941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto___51939,queue_51933,network_51934,response_channel_51935,send_complete_51936,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels))
;
return ((function (seq__51830,chunk__51831,count__51832,i__51833,switch__48198__auto__,c__48312__auto___51939,queue_51933,network_51934,response_channel_51935,send_complete_51936,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0 = (function (){
var statearr_51910 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51910[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__);

(statearr_51910[(1)] = (1));

return statearr_51910;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1 = (function (state_51899){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_51899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e51911){if((e51911 instanceof Object)){
var ex__48202__auto__ = e51911;
var statearr_51912_51942 = state_51899;
(statearr_51912_51942[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51943 = state_51899;
state_51899 = G__51943;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__ = function(state_51899){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1.call(this,state_51899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__48199__auto__;
})()
;})(seq__51830,chunk__51831,count__51832,i__51833,switch__48198__auto__,c__48312__auto___51939,queue_51933,network_51934,response_channel_51935,send_complete_51936,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels))
})();
var state__48314__auto__ = (function (){var statearr_51913 = f__48313__auto__.call(null);
(statearr_51913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___51939);

return statearr_51913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(seq__51830,chunk__51831,count__51832,i__51833,c__48312__auto___51939,queue_51933,network_51934,response_channel_51935,send_complete_51936,remote,seq__51830__$1,temp__6753__auto__,map__51828,map__51828__$1,networking,send_queues,response_channels))
);


var G__51944 = cljs.core.next.call(null,seq__51830__$1);
var G__51945 = null;
var G__51946 = (0);
var G__51947 = (0);
seq__51830 = G__51944;
chunk__51831 = G__51945;
count__51832 = G__51946;
i__51833 = G__51947;
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
return cljs.core.reduce.call(null,(function (acc,p__51952){
var vec__51953 = p__51952;
var k = cljs.core.nth.call(null,vec__51953,(0),null);
var v = cljs.core.nth.call(null,vec__51953,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__51960){
var vec__51961 = p__51960;
var k = cljs.core.nth.call(null,vec__51961,(0),null);
var v = cljs.core.nth.call(null,vec__51961,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__51968){
var vec__51969 = p__51968;
var k = cljs.core.nth.call(null,vec__51969,(0),null);
var v = cljs.core.nth.call(null,vec__51969,(1),null);
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
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__51980){
var vec__51981 = p__51980;
var k = cljs.core.nth.call(null,vec__51981,(0),null);
var _ = cljs.core.nth.call(null,vec__51981,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__51984){
var vec__51985 = p__51984;
var k = cljs.core.nth.call(null,vec__51985,(0),null);
var v = cljs.core.nth.call(null,vec__51985,(1),null);
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__51988,initial_state,parser,p__51989){
var map__51998 = p__51988;
var map__51998__$1 = ((((!((map__51998 == null)))?((((map__51998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51998):map__51998);
var app = map__51998__$1;
var send_queues = cljs.core.get.call(null,map__51998__$1,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330));
var mutation_merge = cljs.core.get.call(null,map__51998__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__51999 = p__51989;
var map__51999__$1 = ((((!((map__51999 == null)))?((((map__51999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51999):map__51999);
var pathopt = cljs.core.get.call(null,map__51999__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__51999__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__51999__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var remotes = cljs.core.keys.call(null,send_queues);
var tempid_migrate = ((function (rec_atom,remotes,map__51998,map__51998__$1,app,send_queues,mutation_merge,map__51999,map__51999__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
var seq__52002_52006 = cljs.core.seq.call(null,cljs.core.vals.call(null,send_queues));
var chunk__52003_52007 = null;
var count__52004_52008 = (0);
var i__52005_52009 = (0);
while(true){
if((i__52005_52009 < count__52004_52008)){
var queue_52010 = cljs.core._nth.call(null,chunk__52003_52007,i__52005_52009);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue_52010,tempids);

var G__52011 = seq__52002_52006;
var G__52012 = chunk__52003_52007;
var G__52013 = count__52004_52008;
var G__52014 = (i__52005_52009 + (1));
seq__52002_52006 = G__52011;
chunk__52003_52007 = G__52012;
count__52004_52008 = G__52013;
i__52005_52009 = G__52014;
continue;
} else {
var temp__6753__auto___52015 = cljs.core.seq.call(null,seq__52002_52006);
if(temp__6753__auto___52015){
var seq__52002_52016__$1 = temp__6753__auto___52015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52002_52016__$1)){
var c__35466__auto___52017 = cljs.core.chunk_first.call(null,seq__52002_52016__$1);
var G__52018 = cljs.core.chunk_rest.call(null,seq__52002_52016__$1);
var G__52019 = c__35466__auto___52017;
var G__52020 = cljs.core.count.call(null,c__35466__auto___52017);
var G__52021 = (0);
seq__52002_52006 = G__52018;
chunk__52003_52007 = G__52019;
count__52004_52008 = G__52020;
i__52005_52009 = G__52021;
continue;
} else {
var queue_52022 = cljs.core.first.call(null,seq__52002_52016__$1);
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue_52022,tempids);

var G__52023 = cljs.core.next.call(null,seq__52002_52016__$1);
var G__52024 = null;
var G__52025 = (0);
var G__52026 = (0);
seq__52002_52006 = G__52023;
chunk__52003_52007 = G__52024;
count__52004_52008 = G__52025;
i__52005_52009 = G__52026;
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
});})(rec_atom,remotes,map__51998,map__51998__$1,app,send_queues,mutation_merge,map__51999,map__51999__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)],[pathopt,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__51998,map__51998__$1,app,send_queues,mutation_merge,map__51999,map__51999__$1,pathopt,migrate,shared){
return (function (reconciler,app_state,ident,props){
return cljs.core.update_in.call(null,app_state,ident,cljs.core.comp.call(null,untangled.client.impl.application.sweep_one,cljs.core.merge),props);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__51998,map__51998__$1,app,send_queues,mutation_merge,map__51999,map__51999__$1,pathopt,migrate,shared))
,remotes,(function (){var or__34555__auto__ = migrate;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return tempid_migrate;
}
})(),initial_state_with_locale,parser,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__51998,map__51998__$1,app,send_queues,mutation_merge,map__51999,map__51999__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__51998,map__51998__$1,app,send_queues,mutation_merge,map__51999,map__51999__$1,pathopt,migrate,shared))
,shared,((function (rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__51998,map__51998__$1,app,send_queues,mutation_merge,map__51999,map__51999__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,remotes,tempid_migrate,initial_state_with_locale,map__51998,map__51998__$1,app,send_queues,mutation_merge,map__51999,map__51999__$1,pathopt,migrate,shared))
,true]);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callbacks = (function untangled$client$impl$application$initialize_global_error_callbacks(app){
var seq__52032 = cljs.core.seq.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(app)));
var chunk__52033 = null;
var count__52034 = (0);
var i__52035 = (0);
while(true){
if((i__52035 < count__52034)){
var remote = cljs.core._nth.call(null,chunk__52033,i__52035);
var cb_atom_52036 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom_52036))){
cljs.core.swap_BANG_.call(null,cb_atom_52036,((function (seq__52032,chunk__52033,count__52034,i__52035,cb_atom_52036,remote){
return (function (p1__52027_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__52027_SHARP_)){
return cljs.core.partial.call(null,p1__52027_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__52032,chunk__52033,count__52034,i__52035,cb_atom_52036,remote))
);
} else {
}

var G__52037 = seq__52032;
var G__52038 = chunk__52033;
var G__52039 = count__52034;
var G__52040 = (i__52035 + (1));
seq__52032 = G__52037;
chunk__52033 = G__52038;
count__52034 = G__52039;
i__52035 = G__52040;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__52032);
if(temp__6753__auto__){
var seq__52032__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52032__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__52032__$1);
var G__52041 = cljs.core.chunk_rest.call(null,seq__52032__$1);
var G__52042 = c__35466__auto__;
var G__52043 = cljs.core.count.call(null,c__35466__auto__);
var G__52044 = (0);
seq__52032 = G__52041;
chunk__52033 = G__52042;
count__52034 = G__52043;
i__52035 = G__52044;
continue;
} else {
var remote = cljs.core.first.call(null,seq__52032__$1);
var cb_atom_52045 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),remote,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom_52045))){
cljs.core.swap_BANG_.call(null,cb_atom_52045,((function (seq__52032,chunk__52033,count__52034,i__52035,cb_atom_52045,remote,seq__52032__$1,temp__6753__auto__){
return (function (p1__52027_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__52027_SHARP_)){
return cljs.core.partial.call(null,p1__52027_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(seq__52032,chunk__52033,count__52034,i__52035,cb_atom_52045,remote,seq__52032__$1,temp__6753__auto__))
);
} else {
}

var G__52046 = cljs.core.next.call(null,seq__52032__$1);
var G__52047 = null;
var G__52048 = (0);
var G__52049 = (0);
seq__52032 = G__52046;
chunk__52033 = G__52047;
count__52034 = G__52048;
i__52035 = G__52049;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=application.js.map?rel=1491640765345