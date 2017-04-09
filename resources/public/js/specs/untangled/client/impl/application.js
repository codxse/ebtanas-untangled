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
untangled.client.impl.application.fallback_handler = (function untangled$client$impl$application$fallback_handler(p__186153,query){
var map__186156 = p__186153;
var map__186156__$1 = ((((!((map__186156 == null)))?((((map__186156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186156):map__186156);
var reconciler = cljs.core.get.call(null,map__186156__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return ((function (map__186156,map__186156__$1,reconciler){
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
;})(map__186156,map__186156__$1,reconciler))
});
/**
 * Enqueue a send to the network queue. This is a standalone function because we cannot mock core async functions.
 */
untangled.client.impl.application.enqueue = (function untangled$client$impl$application$enqueue(q,v){
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__){
return (function (state_186173){
var state_val_186174 = (state_186173[(1)]);
if((state_val_186174 === (1))){
var state_186173__$1 = state_186173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_186173__$1,(2),q,v);
} else {
if((state_val_186174 === (2))){
var inst_186171 = (state_186173[(2)]);
var state_186173__$1 = state_186173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_186173__$1,inst_186171);
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
var statearr_186178 = [null,null,null,null,null,null,null];
(statearr_186178[(0)] = untangled$client$impl$application$enqueue_$_state_machine__44062__auto__);

(statearr_186178[(1)] = (1));

return statearr_186178;
});
var untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1 = (function (state_186173){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_186173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e186179){if((e186179 instanceof Object)){
var ex__44065__auto__ = e186179;
var statearr_186180_186182 = state_186173;
(statearr_186180_186182[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_186173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e186179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__186183 = state_186173;
state_186173 = G__186183;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__ = function(state_186173){
switch(arguments.length){
case 0:
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1.call(this,state_186173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$enqueue_$_state_machine__44062__auto____0;
untangled$client$impl$application$enqueue_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$enqueue_$_state_machine__44062__auto____1;
return untangled$client$impl$application$enqueue_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_186181 = f__44085__auto__.call(null);
(statearr_186181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_186181;
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
untangled.client.impl.application.enqueue_mutations = (function untangled$client$impl$application$enqueue_mutations(p__186185,remote_tx_map,cb){
var map__186188 = p__186185;
var map__186188__$1 = ((((!((map__186188 == null)))?((((map__186188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186188):map__186188);
var app = map__186188__$1;
var queue = cljs.core.get.call(null,map__186188__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var full_remote_transaction = new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(remote_tx_map);
var fallback = untangled.client.impl.application.fallback_handler.call(null,app,full_remote_transaction);
var desired_remote_mutations = untangled.client.impl.om_plumbing.remove_loads_and_fallbacks.call(null,full_remote_transaction);
var has_mutations_QMARK_ = (cljs.core.count.call(null,desired_remote_mutations) > (0));
var payload = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),desired_remote_mutations,new cljs.core.Keyword(null,"on-load","on-load",1415151594),cb,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__186188,map__186188__$1,app,queue){
return (function (p1__186184_SHARP_){
return fallback.call(null,p1__186184_SHARP_);
});})(full_remote_transaction,fallback,desired_remote_mutations,has_mutations_QMARK_,map__186188,map__186188__$1,app,queue))
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
untangled.client.impl.application.enqueue_reads = (function untangled$client$impl$application$enqueue_reads(p__186192){
var map__186203 = p__186192;
var map__186203__$1 = ((((!((map__186203 == null)))?((((map__186203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186203):map__186203);
var queue = cljs.core.get.call(null,map__186203__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var reconciler = cljs.core.get.call(null,map__186203__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var networking = cljs.core.get.call(null,map__186203__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var parallel_payload = untangled.client.impl.data_fetch.mark_parallel_loading.call(null,reconciler);
var seq__186205_186213 = cljs.core.seq.call(null,parallel_payload);
var chunk__186206_186214 = null;
var count__186207_186215 = (0);
var i__186208_186216 = (0);
while(true){
if((i__186208_186216 < count__186207_186215)){
var map__186209_186217 = cljs.core._nth.call(null,chunk__186206_186214,i__186208_186216);
var map__186209_186218__$1 = ((((!((map__186209_186217 == null)))?((((map__186209_186217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186209_186217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186209_186217):map__186209_186217);
var query_186219 = cljs.core.get.call(null,map__186209_186218__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_186220 = cljs.core.get.call(null,map__186209_186218__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_186221 = cljs.core.get.call(null,map__186209_186218__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_186222 = cljs.core.get.call(null,map__186209_186218__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__186223 = ((function (seq__186205_186213,chunk__186206_186214,count__186207_186215,i__186208_186216,map__186209_186217,map__186209_186218__$1,query_186219,on_load_186220,on_error_186221,callback_args_186222,parallel_payload,map__186203,map__186203__$1,queue,reconciler,networking){
return (function (p1__186190_SHARP_){
return on_load_186220.call(null,p1__186190_SHARP_,callback_args_186222);
});})(seq__186205_186213,chunk__186206_186214,count__186207_186215,i__186208_186216,map__186209_186217,map__186209_186218__$1,query_186219,on_load_186220,on_error_186221,callback_args_186222,parallel_payload,map__186203,map__186203__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__186224 = ((function (seq__186205_186213,chunk__186206_186214,count__186207_186215,i__186208_186216,on_load_SINGLEQUOTE__186223,map__186209_186217,map__186209_186218__$1,query_186219,on_load_186220,on_error_186221,callback_args_186222,parallel_payload,map__186203,map__186203__$1,queue,reconciler,networking){
return (function (p1__186191_SHARP_){
return on_error_186221.call(null,p1__186191_SHARP_,callback_args_186222);
});})(seq__186205_186213,chunk__186206_186214,count__186207_186215,i__186208_186216,on_load_SINGLEQUOTE__186223,map__186209_186217,map__186209_186218__$1,query_186219,on_load_186220,on_error_186221,callback_args_186222,parallel_payload,map__186203,map__186203__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_186219,on_load_SINGLEQUOTE__186223,on_error_SINGLEQUOTE__186224);

var G__186225 = seq__186205_186213;
var G__186226 = chunk__186206_186214;
var G__186227 = count__186207_186215;
var G__186228 = (i__186208_186216 + (1));
seq__186205_186213 = G__186225;
chunk__186206_186214 = G__186226;
count__186207_186215 = G__186227;
i__186208_186216 = G__186228;
continue;
} else {
var temp__6753__auto___186229 = cljs.core.seq.call(null,seq__186205_186213);
if(temp__6753__auto___186229){
var seq__186205_186230__$1 = temp__6753__auto___186229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__186205_186230__$1)){
var c__40117__auto___186231 = cljs.core.chunk_first.call(null,seq__186205_186230__$1);
var G__186232 = cljs.core.chunk_rest.call(null,seq__186205_186230__$1);
var G__186233 = c__40117__auto___186231;
var G__186234 = cljs.core.count.call(null,c__40117__auto___186231);
var G__186235 = (0);
seq__186205_186213 = G__186232;
chunk__186206_186214 = G__186233;
count__186207_186215 = G__186234;
i__186208_186216 = G__186235;
continue;
} else {
var map__186211_186236 = cljs.core.first.call(null,seq__186205_186230__$1);
var map__186211_186237__$1 = ((((!((map__186211_186236 == null)))?((((map__186211_186236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186211_186236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186211_186236):map__186211_186236);
var query_186238 = cljs.core.get.call(null,map__186211_186237__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_load_186239 = cljs.core.get.call(null,map__186211_186237__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_error_186240 = cljs.core.get.call(null,map__186211_186237__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var callback_args_186241 = cljs.core.get.call(null,map__186211_186237__$1,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var on_load_SINGLEQUOTE__186242 = ((function (seq__186205_186213,chunk__186206_186214,count__186207_186215,i__186208_186216,map__186211_186236,map__186211_186237__$1,query_186238,on_load_186239,on_error_186240,callback_args_186241,seq__186205_186230__$1,temp__6753__auto___186229,parallel_payload,map__186203,map__186203__$1,queue,reconciler,networking){
return (function (p1__186190_SHARP_){
return on_load_186239.call(null,p1__186190_SHARP_,callback_args_186241);
});})(seq__186205_186213,chunk__186206_186214,count__186207_186215,i__186208_186216,map__186211_186236,map__186211_186237__$1,query_186238,on_load_186239,on_error_186240,callback_args_186241,seq__186205_186230__$1,temp__6753__auto___186229,parallel_payload,map__186203,map__186203__$1,queue,reconciler,networking))
;
var on_error_SINGLEQUOTE__186243 = ((function (seq__186205_186213,chunk__186206_186214,count__186207_186215,i__186208_186216,on_load_SINGLEQUOTE__186242,map__186211_186236,map__186211_186237__$1,query_186238,on_load_186239,on_error_186240,callback_args_186241,seq__186205_186230__$1,temp__6753__auto___186229,parallel_payload,map__186203,map__186203__$1,queue,reconciler,networking){
return (function (p1__186191_SHARP_){
return on_error_186240.call(null,p1__186191_SHARP_,callback_args_186241);
});})(seq__186205_186213,chunk__186206_186214,count__186207_186215,i__186208_186216,on_load_SINGLEQUOTE__186242,map__186211_186236,map__186211_186237__$1,query_186238,on_load_186239,on_error_186240,callback_args_186241,seq__186205_186230__$1,temp__6753__auto___186229,parallel_payload,map__186203,map__186203__$1,queue,reconciler,networking))
;
untangled.client.impl.application.real_send.call(null,networking,query_186238,on_load_SINGLEQUOTE__186242,on_error_SINGLEQUOTE__186243);

var G__186244 = cljs.core.next.call(null,seq__186205_186230__$1);
var G__186245 = null;
var G__186246 = (0);
var G__186247 = (0);
seq__186205_186213 = G__186244;
chunk__186206_186214 = G__186245;
count__186207_186215 = G__186246;
i__186208_186216 = G__186247;
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

var G__186248 = untangled.client.impl.data_fetch.mark_loading.call(null,reconciler);
fetch_payload = G__186248;
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
untangled.client.impl.application.start_network_sequential_processing = (function untangled$client$impl$application$start_network_sequential_processing(p__186249){
var map__186368 = p__186249;
var map__186368__$1 = ((((!((map__186368 == null)))?((((map__186368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186368):map__186368);
var networking = cljs.core.get.call(null,map__186368__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var queue = cljs.core.get.call(null,map__186368__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var response_channel = cljs.core.get.call(null,map__186368__$1,new cljs.core.Keyword(null,"response-channel","response-channel",1395191493));
var make_process_response = ((function (map__186368,map__186368__$1,networking,queue,response_channel){
return (function untangled$client$impl$application$start_network_sequential_processing_$_make_process_response(action,callback_args){
return ((function (map__186368,map__186368__$1,networking,queue,response_channel){
return (function (resp){
try{return action.call(null,resp,callback_args);
}finally {var c__44084__auto___186486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___186486,map__186368,map__186368__$1,networking,queue,response_channel){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___186486,map__186368,map__186368__$1,networking,queue,response_channel){
return (function (state_186409){
var state_val_186410 = (state_186409[(1)]);
if((state_val_186410 === (1))){
var state_186409__$1 = state_186409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_186409__$1,(2),response_channel,new cljs.core.Keyword(null,"complete","complete",-500388775));
} else {
if((state_val_186410 === (2))){
var inst_186407 = (state_186409[(2)]);
var state_186409__$1 = state_186409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_186409__$1,inst_186407);
} else {
return null;
}
}
});})(c__44084__auto___186486,map__186368,map__186368__$1,networking,queue,response_channel))
;
return ((function (switch__44061__auto__,c__44084__auto___186486,map__186368,map__186368__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0 = (function (){
var statearr_186414 = [null,null,null,null,null,null,null];
(statearr_186414[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__);

(statearr_186414[(1)] = (1));

return statearr_186414;
});
var untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1 = (function (state_186409){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_186409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e186415){if((e186415 instanceof Object)){
var ex__44065__auto__ = e186415;
var statearr_186416_186487 = state_186409;
(statearr_186416_186487[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_186409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e186415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__186488 = state_186409;
state_186409 = G__186488;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__ = function(state_186409){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1.call(this,state_186409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_make_process_response_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___186486,map__186368,map__186368__$1,networking,queue,response_channel))
})();
var state__44086__auto__ = (function (){var statearr_186417 = f__44085__auto__.call(null);
(statearr_186417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___186486);

return statearr_186417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___186486,map__186368,map__186368__$1,networking,queue,response_channel))
);

}});
;})(map__186368,map__186368__$1,networking,queue,response_channel))
});})(map__186368,map__186368__$1,networking,queue,response_channel))
;
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,map__186368,map__186368__$1,networking,queue,response_channel){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,map__186368,map__186368__$1,networking,queue,response_channel){
return (function (state_186459){
var state_val_186460 = (state_186459[(1)]);
if((state_val_186460 === (7))){
var inst_186438 = (state_186459[(2)]);
var state_186459__$1 = state_186459;
if(cljs.core.truth_(inst_186438)){
var statearr_186461_186489 = state_186459__$1;
(statearr_186461_186489[(1)] = (11));

} else {
var statearr_186462_186490 = state_186459__$1;
(statearr_186462_186490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (1))){
var state_186459__$1 = state_186459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_186459__$1,(2),queue);
} else {
if((state_val_186460 === (4))){
var inst_186457 = (state_186459[(2)]);
var state_186459__$1 = state_186459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_186459__$1,inst_186457);
} else {
if((state_val_186460 === (15))){
var inst_186454 = (state_186459[(2)]);
var inst_186420 = inst_186454;
var state_186459__$1 = (function (){var statearr_186463 = state_186459;
(statearr_186463[(7)] = inst_186420);

return statearr_186463;
})();
var statearr_186464_186491 = state_186459__$1;
(statearr_186464_186491[(2)] = null);

(statearr_186464_186491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (13))){
var inst_186443 = (state_186459[(2)]);
var inst_186444 = cljs.core.get.call(null,inst_186443,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_186445 = cljs.core.get.call(null,inst_186443,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var inst_186446 = cljs.core.get.call(null,inst_186443,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var inst_186447 = cljs.core.get.call(null,inst_186443,new cljs.core.Keyword(null,"callback-args","callback-args",1117743591));
var inst_186448 = make_process_response.call(null,inst_186445,inst_186447);
var inst_186449 = make_process_response.call(null,inst_186446,inst_186447);
var inst_186450 = untangled.client.impl.application.real_send.call(null,networking,inst_186444,inst_186448,inst_186449);
var state_186459__$1 = (function (){var statearr_186465 = state_186459;
(statearr_186465[(8)] = inst_186450);

return statearr_186465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_186459__$1,(14),response_channel);
} else {
if((state_val_186460 === (6))){
var state_186459__$1 = state_186459;
var statearr_186466_186492 = state_186459__$1;
(statearr_186466_186492[(2)] = false);

(statearr_186466_186492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (3))){
var inst_186420 = (state_186459[(7)]);
var inst_186424 = (inst_186420 == null);
var inst_186425 = cljs.core.not.call(null,inst_186424);
var state_186459__$1 = state_186459;
if(inst_186425){
var statearr_186467_186493 = state_186459__$1;
(statearr_186467_186493[(1)] = (5));

} else {
var statearr_186468_186494 = state_186459__$1;
(statearr_186468_186494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (12))){
var inst_186420 = (state_186459[(7)]);
var state_186459__$1 = state_186459;
var statearr_186469_186495 = state_186459__$1;
(statearr_186469_186495[(2)] = inst_186420);

(statearr_186469_186495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (2))){
var inst_186419 = (state_186459[(2)]);
var inst_186420 = inst_186419;
var state_186459__$1 = (function (){var statearr_186470 = state_186459;
(statearr_186470[(7)] = inst_186420);

return statearr_186470;
})();
var statearr_186471_186496 = state_186459__$1;
(statearr_186471_186496[(2)] = null);

(statearr_186471_186496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (11))){
var inst_186420 = (state_186459[(7)]);
var inst_186440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_186420);
var state_186459__$1 = state_186459;
var statearr_186472_186497 = state_186459__$1;
(statearr_186472_186497[(2)] = inst_186440);

(statearr_186472_186497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (9))){
var state_186459__$1 = state_186459;
var statearr_186473_186498 = state_186459__$1;
(statearr_186473_186498[(2)] = false);

(statearr_186473_186498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (5))){
var inst_186420 = (state_186459[(7)]);
var inst_186427 = inst_186420.cljs$lang$protocol_mask$partition0$;
var inst_186428 = (inst_186427 & (64));
var inst_186429 = inst_186420.cljs$core$ISeq$;
var inst_186430 = (cljs.core.PROTOCOL_SENTINEL === inst_186429);
var inst_186431 = (inst_186428) || (inst_186430);
var state_186459__$1 = state_186459;
if(cljs.core.truth_(inst_186431)){
var statearr_186474_186499 = state_186459__$1;
(statearr_186474_186499[(1)] = (8));

} else {
var statearr_186475_186500 = state_186459__$1;
(statearr_186475_186500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (14))){
var inst_186452 = (state_186459[(2)]);
var state_186459__$1 = (function (){var statearr_186476 = state_186459;
(statearr_186476[(9)] = inst_186452);

return statearr_186476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_186459__$1,(15),queue);
} else {
if((state_val_186460 === (10))){
var inst_186435 = (state_186459[(2)]);
var state_186459__$1 = state_186459;
var statearr_186477_186501 = state_186459__$1;
(statearr_186477_186501[(2)] = inst_186435);

(statearr_186477_186501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_186460 === (8))){
var state_186459__$1 = state_186459;
var statearr_186478_186502 = state_186459__$1;
(statearr_186478_186502[(2)] = true);

(statearr_186478_186502[(1)] = (10));


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
});})(c__44084__auto__,map__186368,map__186368__$1,networking,queue,response_channel))
;
return ((function (switch__44061__auto__,c__44084__auto__,map__186368,map__186368__$1,networking,queue,response_channel){
return (function() {
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__ = null;
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0 = (function (){
var statearr_186482 = [null,null,null,null,null,null,null,null,null,null];
(statearr_186482[(0)] = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__);

(statearr_186482[(1)] = (1));

return statearr_186482;
});
var untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1 = (function (state_186459){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_186459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e186483){if((e186483 instanceof Object)){
var ex__44065__auto__ = e186483;
var statearr_186484_186503 = state_186459;
(statearr_186484_186503[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_186459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e186483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__186504 = state_186459;
state_186459 = G__186504;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__ = function(state_186459){
switch(arguments.length){
case 0:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0.call(this);
case 1:
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1.call(this,state_186459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____0;
untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto____1;
return untangled$client$impl$application$start_network_sequential_processing_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,map__186368,map__186368__$1,networking,queue,response_channel))
})();
var state__44086__auto__ = (function (){var statearr_186485 = f__44085__auto__.call(null);
(statearr_186485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_186485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,map__186368,map__186368__$1,networking,queue,response_channel))
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
return cljs.core.reduce.call(null,(function (acc,p__186509){
var vec__186510 = p__186509;
var k = cljs.core.nth.call(null,vec__186510,(0),null);
var v = cljs.core.nth.call(null,vec__186510,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__186517){
var vec__186518 = p__186517;
var k = cljs.core.nth.call(null,vec__186518,(0),null);
var v = cljs.core.nth.call(null,vec__186518,(1),null);
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
return cljs.core.reduce.call(null,(function (acc,p__186525){
var vec__186526 = p__186525;
var k = cljs.core.nth.call(null,vec__186526,(0),null);
var v = cljs.core.nth.call(null,vec__186526,(1),null);
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
var source_to_merge = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__186537){
var vec__186538 = p__186537;
var k = cljs.core.nth.call(null,vec__186538,(0),null);
var _ = cljs.core.nth.call(null,vec__186538,(1),null);
return !((k instanceof cljs.core.Symbol));
}),source));
var merged_state = untangled.client.impl.application.sweep_merge.call(null,target,source_to_merge);
return cljs.core.reduce.call(null,((function (source_to_merge,merged_state){
return (function (acc,p__186541){
var vec__186542 = p__186541;
var k = cljs.core.nth.call(null,vec__186542,(0),null);
var v = cljs.core.nth.call(null,vec__186542,(1),null);
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
untangled.client.impl.application.generate_reconciler = (function untangled$client$impl$application$generate_reconciler(p__186545,initial_state,parser,p__186546){
var map__186551 = p__186545;
var map__186551__$1 = ((((!((map__186551 == null)))?((((map__186551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186551):map__186551);
var app = map__186551__$1;
var queue = cljs.core.get.call(null,map__186551__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var mutation_merge = cljs.core.get.call(null,map__186551__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var map__186552 = p__186546;
var map__186552__$1 = ((((!((map__186552 == null)))?((((map__186552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186552):map__186552);
var pathopt = cljs.core.get.call(null,map__186552__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),true);
var migrate = cljs.core.get.call(null,map__186552__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var shared = cljs.core.get.call(null,map__186552__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var rec_atom = cljs.core.atom.call(null,null);
var state_migrate = (function (){var or__39206__auto__ = migrate;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return untangled.client.impl.om_plumbing.resolve_tempids;
}
})();
var tempid_migrate = ((function (rec_atom,state_migrate,map__186551,map__186551__$1,app,queue,mutation_merge,map__186552,map__186552__$1,pathopt,migrate,shared){
return (function (pure,_,tempids,___$1){
untangled.client.impl.om_plumbing.rewrite_tempids_in_request_queue.call(null,queue,tempids);

return state_migrate.call(null,pure,tempids);
});})(rec_atom,state_migrate,map__186551,map__186551__$1,app,queue,mutation_merge,map__186552,map__186552__$1,pathopt,migrate,shared))
;
var initial_state_with_locale = (cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,initial_state))?(function (){
cljs.core.swap_BANG_.call(null,initial_state,cljs.core.assoc,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US");

return initial_state;
})()
:cljs.core.assoc.call(null,initial_state,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),"en-US"));
var config = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),initial_state_with_locale,new cljs.core.Keyword(null,"send","send",-652151114),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__186551,map__186551__$1,app,queue,mutation_merge,map__186552,map__186552__$1,pathopt,migrate,shared){
return (function (tx,cb){
return untangled.client.impl.application.server_send.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.deref.call(null,rec_atom)),tx,cb);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__186551,map__186551__$1,app,queue,mutation_merge,map__186552,map__186552__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"migrate","migrate",-207110743),(function (){var or__39206__auto__ = migrate;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return tempid_migrate;
}
})(),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),true,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),pathopt,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),((function (rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__186551,map__186551__$1,app,queue,mutation_merge,map__186552,map__186552__$1,pathopt,migrate,shared){
return (function (target,source){
return untangled.client.impl.application.merge_handler.call(null,mutation_merge,target,source);
});})(rec_atom,state_migrate,tempid_migrate,initial_state_with_locale,map__186551,map__186551__$1,app,queue,mutation_merge,map__186552,map__186552__$1,pathopt,migrate,shared))
,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"shared","shared",-384145993),shared], null);
var rec = om.next.reconciler.call(null,config);
cljs.core.reset_BANG_.call(null,rec_atom,rec);

return rec;
});
untangled.client.impl.application.initialize_global_error_callback = (function untangled$client$impl$application$initialize_global_error_callback(app){
var cb_atom = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631)], null));
if(cljs.core.truth_(untangled.client.impl.util.atom_QMARK_.call(null,cb_atom))){
return cljs.core.swap_BANG_.call(null,cb_atom,((function (cb_atom){
return (function (p1__186555_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__186555_SHARP_)){
return cljs.core.partial.call(null,p1__186555_SHARP_,om.next.app_state.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app)));
} else {
throw cljs.core.ex_info.call(null,"Networking error callback must be a function.",cljs.core.PersistentArrayMap.EMPTY);
}
});})(cb_atom))
);
} else {
return null;
}
});

//# sourceMappingURL=application.js.map?rel=1491715067984