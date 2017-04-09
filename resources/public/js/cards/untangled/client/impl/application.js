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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__46068,query){
var map__46071 = p__46068;
var map__46071__$1 = ((((!((map__46071 == null)))?((((map__46071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46071):map__46071);
var reconciler = cljs.core.get.call(null,map__46071__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__46071,map__46071__$1,reconciler){
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
;})(map__46071,map__46071__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__43974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto__){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto__){
return (function (state_46088){
var state_val_46089 = (state_46088[(1)]);
if((state_val_46089 === (1))){
var state_46088__$1 = state_46088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46088__$1,(2),q,v);
} else {
if((state_val_46089 === (2))){
var inst_46086 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46088__$1,inst_46086);
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
var statearr_46093 = [null,null,null,null,null,null,null];
(statearr_46093[(0)] = untangled$client$impl$application$enqueue_$_state_machine__43952__auto__);

(statearr_46093[(1)] = (1));

return statearr_46093;
});
var untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1 = (function (state_46088){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_46088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e46094){if((e46094 instanceof Object)){
var ex__43955__auto__ = e46094;
var statearr_46095_46097 = state_46088;
(statearr_46095_46097[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46098 = state_46088;
state_46088 = G__46098;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__ = function(state_46088){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1.call(this,state_46088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__43952__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__43952__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto__))
})();
var state__43976__auto__ = (function (){var statearr_46096 = f__43975__auto__.call(null);
(statearr_46096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto__);

return statearr_46096;
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
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__46100,remote_tx_map,cb){
var map__46103 = p__46100;
var map__46103__$1 = ((((!((map__46103 == null)))?((((map__46103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46103):map__46103);
var app = map__46103__$1;
var queue = cljs.core.get.call(null,map__46103__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__46103,map__46103__$1,app,queue){
return (function (p1__46099_SHARP_){
return fallback.call(null,p1__46099_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__46103,map__46103__$1,app,queue))
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__46107){
var map__46118 = p__46107;
var map__46118__$1 = ((((!((map__46118 == null)))?((((map__46118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46118):map__46118);
var queue = cljs.core.get.call(null,map__46118__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__46118__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__46118__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var seq__46120_46128 = cljs.core.seq.call(null,parallel_payload);
var chunk__46121_46129 = null;
var count__46122_46130 = (0);
var i__46123_46131 = (0);
while(true){
if((i__46123_46131 < count__46122_46130)){
var map__46124_46132 = cljs.core._nth.call(null,chunk__46121_46129,i__46123_46131);
var map__46124_46133__$1 = ((((!((map__46124_46132 == null)))?((((map__46124_46132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46124_46132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46124_46132):map__46124_46132);
var query_46134 = cljs.core.get.call(null,map__46124_46133__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_46135 = cljs.core.get.call(null,map__46124_46133__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_46136 = cljs.core.get.call(null,map__46124_46133__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_46137 = cljs.core.get.call(null,map__46124_46133__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__46138 = ((function (seq__46120_46128,chunk__46121_46129,count__46122_46130,i__46123_46131,map__46124_46132,map__46124_46133__$1,query_46134,on_load_46135,on_error_46136,callback_args_46137,parallel_payload,map__46118,map__46118__$1,queue,reconciler,networking){
return (function (p1__46105_SHARP_){
return on_load_46135.call(null,p1__46105_SHARP_,callback_args_46137);
});})(seq__46120_46128,chunk__46121_46129,count__46122_46130,i__46123_46131,map__46124_46132,map__46124_46133__$1,query_46134,on_load_46135,on_error_46136,callback_args_46137,parallel_payload,map__46118,map__46118__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__46139 = ((function (seq__46120_46128,chunk__46121_46129,count__46122_46130,i__46123_46131,on_load_SINGLEQUOTE__46138,map__46124_46132,map__46124_46133__$1,query_46134,on_load_46135,on_error_46136,callback_args_46137,parallel_payload,map__46118,map__46118__$1,queue,reconciler,networking){
return (function (p1__46106_SHARP_){
return on_error_46136.call(null,p1__46106_SHARP_,callback_args_46137);
});})(seq__46120_46128,chunk__46121_46129,count__46122_46130,i__46123_46131,on_load_SINGLEQUOTE__46138,map__46124_46132,map__46124_46133__$1,query_46134,on_load_46135,on_error_46136,callback_args_46137,parallel_payload,map__46118,map__46118__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_46134,on_load_SINGLEQUOTE__46138,on_error_SINGLEQUOTE__46139);

var G__46140 = seq__46120_46128;
var G__46141 = chunk__46121_46129;
var G__46142 = count__46122_46130;
var G__46143 = (i__46123_46131 + (1));
seq__46120_46128 = G__46140;
chunk__46121_46129 = G__46141;
count__46122_46130 = G__46142;
i__46123_46131 = G__46143;
continue;
} else {
var temp__6753__auto___46144 = cljs.core.seq.call(null,seq__46120_46128);
if(temp__6753__auto___46144){
var seq__46120_46145__$1 = temp__6753__auto___46144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46120_46145__$1)){
var c__40133__auto___46146 = cljs.core.chunk_first.call(null,seq__46120_46145__$1);
var G__46147 = cljs.core.chunk_rest.call(null,seq__46120_46145__$1);
var G__46148 = c__40133__auto___46146;
var G__46149 = cljs.core.count.call(null,c__40133__auto___46146);
var G__46150 = (0);
seq__46120_46128 = G__46147;
chunk__46121_46129 = G__46148;
count__46122_46130 = G__46149;
i__46123_46131 = G__46150;
continue;
} else {
var map__46126_46151 = cljs.core.first.call(null,seq__46120_46145__$1);
var map__46126_46152__$1 = ((((!((map__46126_46151 == null)))?((((map__46126_46151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46126_46151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46126_46151):map__46126_46151);
var query_46153 = cljs.core.get.call(null,map__46126_46152__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_46154 = cljs.core.get.call(null,map__46126_46152__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_46155 = cljs.core.get.call(null,map__46126_46152__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_46156 = cljs.core.get.call(null,map__46126_46152__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__46157 = ((function (seq__46120_46128,chunk__46121_46129,count__46122_46130,i__46123_46131,map__46126_46151,map__46126_46152__$1,query_46153,on_load_46154,on_error_46155,callback_args_46156,seq__46120_46145__$1,temp__6753__auto___46144,parallel_payload,map__46118,map__46118__$1,queue,reconciler,networking){
return (function (p1__46105_SHARP_){
return on_load_46154.call(null,p1__46105_SHARP_,callback_args_46156);
});})(seq__46120_46128,chunk__46121_46129,count__46122_46130,i__46123_46131,map__46126_46151,map__46126_46152__$1,query_46153,on_load_46154,on_error_46155,callback_args_46156,seq__46120_46145__$1,temp__6753__auto___46144,parallel_payload,map__46118,map__46118__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__46158 = ((function (seq__46120_46128,chunk__46121_46129,count__46122_46130,i__46123_46131,on_load_SINGLEQUOTE__46157,map__46126_46151,map__46126_46152__$1,query_46153,on_load_46154,on_error_46155,callback_args_46156,seq__46120_46145__$1,temp__6753__auto___46144,parallel_payload,map__46118,map__46118__$1,queue,reconciler,networking){
return (function (p1__46106_SHARP_){
return on_error_46155.call(null,p1__46106_SHARP_,callback_args_46156);
});})(seq__46120_46128,chunk__46121_46129,count__46122_46130,i__46123_46131,on_load_SINGLEQUOTE__46157,map__46126_46151,map__46126_46152__$1,query_46153,on_load_46154,on_error_46155,callback_args_46156,seq__46120_46145__$1,temp__6753__auto___46144,parallel_payload,map__46118,map__46118__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_46153,on_load_SINGLEQUOTE__46157,on_error_SINGLEQUOTE__46158);

var G__46159 = cljs.core.next.call(null,seq__46120_46145__$1);
var G__46160 = null;
var G__46161 = (0);
var G__46162 = (0);
seq__46120_46128 = G__46159;
chunk__46121_46129 = G__46160;
count__46122_46130 = G__46161;
i__46123_46131 = G__46162;
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

var G__46163 = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
fetch_payload = G__46163;
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
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__46164){
var map__46283 = p__46164;
var map__46283__$1 = ((((!((map__46283 == null)))?((((map__46283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46283):map__46283);
var networking = cljs.core.get.call(null,map__46283__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__46283__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__46283__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__46283,map__46283__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__46283,map__46283__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__43974__auto___46401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto___46401,map__46283,map__46283__$1,networking,queue,response_channel){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto___46401,map__46283,map__46283__$1,networking,queue,response_channel){
return (function (state_46324){
var state_val_46325 = (state_46324[(1)]);
if((state_val_46325 === (1))){
var state_46324__$1 = state_46324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46324__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_46325 === (2))){
var inst_46322 = (state_46324[(2)]);
var state_46324__$1 = state_46324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46324__$1,inst_46322);
} else {
return null;
}
}
});})(c__43974__auto___46401,map__46283,map__46283__$1,networking,queue,response_channel))
;
return ((function (switch__43951__auto__,c__43974__auto___46401,map__46283,map__46283__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0 = (function (){
var statearr_46329 = [null,null,null,null,null,null,null];
(statearr_46329[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__);

(statearr_46329[(1)] = (1));

return statearr_46329;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1 = (function (state_46324){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_46324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e46330){if((e46330 instanceof Object)){
var ex__43955__auto__ = e46330;
var statearr_46331_46402 = state_46324;
(statearr_46331_46402[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46403 = state_46324;
state_46324 = G__46403;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__ = function(state_46324){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1.call(this,state_46324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto___46401,map__46283,map__46283__$1,networking,queue,response_channel))
})();
var state__43976__auto__ = (function (){var statearr_46332 = f__43975__auto__.call(null);
(statearr_46332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto___46401);

return statearr_46332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43976__auto__);
});})(c__43974__auto___46401,map__46283,map__46283__$1,networking,queue,response_channel))
);

}});
;})(map__46283,map__46283__$1,networking,queue,response_channel))
});})(map__46283,map__46283__$1,networking,queue,response_channel))
;
var c__43974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43974__auto__,map__46283,map__46283__$1,networking,queue,response_channel){
return (function (){
var f__43975__auto__ = (function (){var switch__43951__auto__ = ((function (c__43974__auto__,map__46283,map__46283__$1,networking,queue,response_channel){
return (function (state_46374){
var state_val_46375 = (state_46374[(1)]);
if((state_val_46375 === (7))){
var inst_46353 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
if(cljs.core.truth_(inst_46353)){
var statearr_46376_46404 = state_46374__$1;
(statearr_46376_46404[(1)] = (11));

} else {
var statearr_46377_46405 = state_46374__$1;
(statearr_46377_46405[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (1))){
var state_46374__$1 = state_46374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46374__$1,(2),queue);
} else {
if((state_val_46375 === (4))){
var inst_46372 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46374__$1,inst_46372);
} else {
if((state_val_46375 === (15))){
var inst_46369 = (state_46374[(2)]);
var inst_46335 = inst_46369;
var state_46374__$1 = (function (){var statearr_46378 = state_46374;
(statearr_46378[(7)] = inst_46335);

return statearr_46378;
})();
var statearr_46379_46406 = state_46374__$1;
(statearr_46379_46406[(2)] = null);

(statearr_46379_46406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (13))){
var inst_46358 = (state_46374[(2)]);
var inst_46359 = cljs.core.get.call(null,inst_46358,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_46360 = cljs.core.get.call(null,inst_46358,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_46361 = cljs.core.get.call(null,inst_46358,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_46362 = cljs.core.get.call(null,inst_46358,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_46363 = make_process_response.call(null,inst_46360,inst_46362);
var inst_46364 = make_process_response.call(null,inst_46361,inst_46362);
var inst_46365 = untangled.client.impl.application.real_send.call(null,networking,inst_46359,inst_46363,inst_46364);
var state_46374__$1 = (function (){var statearr_46380 = state_46374;
(statearr_46380[(8)] = inst_46365);

return statearr_46380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46374__$1,(14),response_channel);
} else {
if((state_val_46375 === (6))){
var state_46374__$1 = state_46374;
var statearr_46381_46407 = state_46374__$1;
(statearr_46381_46407[(2)] = false);

(statearr_46381_46407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (3))){
var inst_46335 = (state_46374[(7)]);
var inst_46339 = (inst_46335 == null);
var inst_46340 = cljs.core.not.call(null,inst_46339);
var state_46374__$1 = state_46374;
if(inst_46340){
var statearr_46382_46408 = state_46374__$1;
(statearr_46382_46408[(1)] = (5));

} else {
var statearr_46383_46409 = state_46374__$1;
(statearr_46383_46409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (12))){
var inst_46335 = (state_46374[(7)]);
var state_46374__$1 = state_46374;
var statearr_46384_46410 = state_46374__$1;
(statearr_46384_46410[(2)] = inst_46335);

(statearr_46384_46410[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (2))){
var inst_46334 = (state_46374[(2)]);
var inst_46335 = inst_46334;
var state_46374__$1 = (function (){var statearr_46385 = state_46374;
(statearr_46385[(7)] = inst_46335);

return statearr_46385;
})();
var statearr_46386_46411 = state_46374__$1;
(statearr_46386_46411[(2)] = null);

(statearr_46386_46411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (11))){
var inst_46335 = (state_46374[(7)]);
var inst_46355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46335);
var state_46374__$1 = state_46374;
var statearr_46387_46412 = state_46374__$1;
(statearr_46387_46412[(2)] = inst_46355);

(statearr_46387_46412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (9))){
var state_46374__$1 = state_46374;
var statearr_46388_46413 = state_46374__$1;
(statearr_46388_46413[(2)] = false);

(statearr_46388_46413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (5))){
var inst_46335 = (state_46374[(7)]);
var inst_46342 = inst_46335.cljs$lang$protocol_mask$partition0$;
var inst_46343 = (inst_46342 & (64));
var inst_46344 = inst_46335.cljs$core$ISeq$;
var inst_46345 = (cljs.core.PROTOCOL_SENTINEL === inst_46344);
var inst_46346 = (inst_46343) || (inst_46345);
var state_46374__$1 = state_46374;
if(cljs.core.truth_(inst_46346)){
var statearr_46389_46414 = state_46374__$1;
(statearr_46389_46414[(1)] = (8));

} else {
var statearr_46390_46415 = state_46374__$1;
(statearr_46390_46415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (14))){
var inst_46367 = (state_46374[(2)]);
var state_46374__$1 = (function (){var statearr_46391 = state_46374;
(statearr_46391[(9)] = inst_46367);

return statearr_46391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46374__$1,(15),queue);
} else {
if((state_val_46375 === (10))){
var inst_46350 = (state_46374[(2)]);
var state_46374__$1 = state_46374;
var statearr_46392_46416 = state_46374__$1;
(statearr_46392_46416[(2)] = inst_46350);

(statearr_46392_46416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46375 === (8))){
var state_46374__$1 = state_46374;
var statearr_46393_46417 = state_46374__$1;
(statearr_46393_46417[(2)] = true);

(statearr_46393_46417[(1)] = (10));


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
});})(c__43974__auto__,map__46283,map__46283__$1,networking,queue,response_channel))
;
return ((function (switch__43951__auto__,c__43974__auto__,map__46283,map__46283__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0 = (function (){
var statearr_46397 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46397[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__);

(statearr_46397[(1)] = (1));

return statearr_46397;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1 = (function (state_46374){
while(true){
var ret_value__43953__auto__ = (function (){try{while(true){
var result__43954__auto__ = switch__43951__auto__.call(null,state_46374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43954__auto__;
}
break;
}
}catch (e46398){if((e46398 instanceof Object)){
var ex__43955__auto__ = e46398;
var statearr_46399_46418 = state_46374;
(statearr_46399_46418[(5)] = ex__43955__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43953__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46419 = state_46374;
state_46374 = G__46419;
continue;
} else {
return ret_value__43953__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__ = function(state_46374){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1.call(this,state_46374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__43952__auto__;
})()
;})(switch__43951__auto__,c__43974__auto__,map__46283,map__46283__$1,networking,queue,response_channel))
})();
var state__43976__auto__ = (function (){var statearr_46400 = f__43975__auto__.call(null);
(statearr_46400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__43974__auto__);

return statearr_46400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43976__auto__);
});})(c__43974__auto__,map__46283,map__46283__$1,networking,queue,response_channel))
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
return cljs.core.reduce.call(null,(function (acc,p__46424){
var vec__46425 = p__46424;
var k = cljs.core.nth.call(null,vec__46425,(0),null);
var v = cljs.core.nth.call(null,vec__46425,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__46432){
var vec__46433 = p__46432;
var k = cljs.core.nth.call(null,vec__46433,(0),null);
var v = cljs.core.nth.call(null,vec__46433,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__46440){
var vec__46441 = p__46440;
var k = cljs.core.nth.call(null,vec__46441,(0),null);
var v = cljs.core.nth.call(null,vec__46441,(1),null);
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
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__46452){
var vec__46453 = p__46452;
var k = cljs.core.nth.call(null,vec__46453,(0),null);
var _ = cljs.core.nth.call(null,vec__46453,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__46456){
var vec__46457 = p__46456;
var k = cljs.core.nth.call(null,vec__46457,(0),null);
var v = cljs.core.nth.call(null,vec__46457,(1),null);
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__46460,initial_state,parser,p__46461){
var map__46466 = p__46460;
var map__46466__$1 = ((((!((map__46466 == null)))?((((map__46466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46466):map__46466);
var app = map__46466__$1;
var queue = cljs.core.get.call(null,map__46466__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mutation_merge = cljs.core.get.call(null,map__46466__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__46467 = p__46461;
var map__46467__$1 = ((((!((map__46467 == null)))?((((map__46467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46467):map__46467);
var pathopt = cljs.core.get.call(null,map__46467__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__46467__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__46467__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__39222__auto__ = migrate;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__46466,map__46466__$1,app,queue,mutation_merge,map__46467,map__46467__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__46466,map__46466__$1,app,queue,mutation_merge,map__46467,map__46467__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__46466,map__46466__$1,app,queue,mutation_merge,map__46467,map__46467__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__46466,map__46466__$1,app,queue,mutation_merge,map__46467,map__46467__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__39222__auto__ = migrate;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__46466,map__46466__$1,app,queue,mutation_merge,map__46467,map__46467__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__46466,map__46466__$1,app,queue,mutation_merge,map__46467,map__46467__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app){
var cb_atom = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__46470_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__46470_SHARP_)){
return cljs.core.partial.call(null,p1__46470_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});

//# sourceMappingURL=application.js.map?rel=1491695662073