// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.websockets.networking');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
goog.require('om.next');
goog.require('om.transit');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.logging');
goog.require('untangled.websockets.transit_packer');

/**
 * @interface
 */
untangled.websockets.networking.ChannelSocket = function(){};

/**
 * Reconnect the socket
 */
untangled.websockets.networking.reconnect = (function untangled$websockets$networking$reconnect(this$){
if((!((this$ == null))) && (!((this$.untangled$websockets$networking$ChannelSocket$reconnect$arity$1 == null)))){
return this$.untangled$websockets$networking$ChannelSocket$reconnect$arity$1(this$);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (untangled.websockets.networking.reconnect[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$);
} else {
var m__35274__auto____$1 = (untangled.websockets.networking.reconnect["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ChannelSocket.reconnect",this$);
}
}
}
});

if(typeof untangled.websockets.networking.router_ !== 'undefined'){
} else {
untangled.websockets.networking.router_ = cljs.core.atom.call(null,null);
}
untangled.websockets.networking.stop_router_BANG_ = (function untangled$websockets$networking$stop_router_BANG_(){
var temp__6753__auto__ = cljs.core.deref.call(null,untangled.websockets.networking.router_);
if(cljs.core.truth_(temp__6753__auto__)){
var stop_f = temp__6753__auto__;
return stop_f.call(null);
} else {
return null;
}
});
untangled.websockets.networking.start_router_BANG_ = (function untangled$websockets$networking$start_router_BANG_(ch_recv,msg_handler){
untangled.client.logging.info.call(null,"Starting websocket router.");

untangled.websockets.networking.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,untangled.websockets.networking.router_,taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,msg_handler));
});
if(typeof untangled.websockets.networking.message_received !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
untangled.websockets.networking.message_received = (function (){var method_table__35586__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35587__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35588__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35589__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35590__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.websockets.networking","message-received"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35590__auto__,method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__));
})();
}
if(typeof untangled.websockets.networking.push_received !== 'undefined'){
} else {
/**
 * Multimethod to handle push events
 */
untangled.websockets.networking.push_received = (function (){var method_table__35586__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35587__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35588__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35589__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35590__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.websockets.networking","push-received"),((function (method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__,hierarchy__35590__auto__){
return (function (app,msg){
return new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__,hierarchy__35590__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35590__auto__,method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__));
})();
}
cljs.core._add_method.call(null,untangled.websockets.networking.push_received,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,msg){
return untangled.client.logging.error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Received and unhandled message: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {untangled.websockets.networking.ChannelSocket}
*/
untangled.websockets.networking.ChannelClient = (function (ch_recv,url,init_chan,channel_socket,send_fn,global_error_callback,req_params,parse_queue,completed_app,__meta,__extmap,__hash){
this.ch_recv = ch_recv;
this.url = url;
this.init_chan = init_chan;
this.channel_socket = channel_socket;
this.send_fn = send_fn;
this.global_error_callback = global_error_callback;
this.req_params = req_params;
this.parse_queue = parse_queue;
this.completed_app = completed_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.websockets.networking.ChannelClient.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k62159,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__62161 = (((k62159 instanceof cljs.core.Keyword))?k62159.fqn:null);
switch (G__62161) {
case "ch-recv":
return self__.ch_recv;

break;
case "url":
return self__.url;

break;
case "init-chan":
return self__.init_chan;

break;
case "channel-socket":
return self__.channel_socket;

break;
case "send-fn":
return self__.send_fn;

break;
case "global-error-callback":
return self__.global_error_callback;

break;
case "req-params":
return self__.req_params;

break;
case "parse-queue":
return self__.parse_queue;

break;
case "completed-app":
return self__.completed_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62159,else__35233__auto__);

}
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#untangled.websockets.networking.ChannelClient{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),self__.ch_recv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-chan","init-chan",2144713800),self__.init_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"channel-socket","channel-socket",416262463),self__.channel_socket],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"req-params","req-params",2117077454),self__.req_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),self__.parse_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),self__.completed_app],null))], null),self__.__extmap));
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62158){
var self__ = this;
var G__62158__$1 = this;
return (new cljs.core.RecordIter((0),G__62158__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"init-chan","init-chan",2144713800),new cljs.core.Keyword(null,"channel-socket","channel-socket",416262463),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"req-params","req-params",2117077454),new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),new cljs.core.Keyword(null,"completed-app","completed-app",-635152970)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});


untangled.websockets.networking.ChannelClient.prototype.untangled$websockets$networking$ChannelSocket$ = cljs.core.PROTOCOL_SENTINEL;


untangled.websockets.networking.ChannelClient.prototype.untangled$websockets$networking$ChannelSocket$reconnect$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return taoensso.sente.chsk_reconnect_BANG_.call(null,self__.channel_socket);
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
var self__ = this;
var this__35225__auto____$1 = this;
var h__34997__auto__ = self__.__hash;
if(!((h__34997__auto__ == null))){
return h__34997__auto__;
} else {
var h__34997__auto____$1 = cljs.core.hash_imap.call(null,this__35225__auto____$1);
self__.__hash = h__34997__auto____$1;

return h__34997__auto____$1;
}
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
var self__ = this;
var this__35226__auto____$1 = this;
if(cljs.core.truth_((function (){var and__34543__auto__ = other__35227__auto__;
if(cljs.core.truth_(and__34543__auto__)){
return ((this__35226__auto____$1.constructor === other__35227__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__35226__auto____$1,other__35227__auto__));
} else {
return and__34543__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled.websockets.networking.ChannelClient.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.websockets.networking.ChannelClient.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
var c__48312__auto___62283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___62283,this$__$1){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___62283,this$__$1){
return (function (state_62204){
var state_val_62205 = (state_62204[(1)]);
if((state_val_62205 === (7))){
var state_62204__$1 = state_62204;
var statearr_62206_62284 = state_62204__$1;
(statearr_62206_62284[(2)] = false);

(statearr_62206_62284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (1))){
var state_62204__$1 = state_62204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62204__$1,(2),self__.parse_queue);
} else {
if((state_val_62205 === (4))){
var state_62204__$1 = state_62204;
var statearr_62207_62285 = state_62204__$1;
(statearr_62207_62285[(2)] = false);

(statearr_62207_62285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (15))){
var inst_62186 = (state_62204[(7)]);
var inst_62187 = (state_62204[(8)]);
var inst_62196 = self__.global_error_callback.call(null,inst_62186,inst_62187);
var state_62204__$1 = state_62204;
var statearr_62208_62286 = state_62204__$1;
(statearr_62208_62286[(2)] = inst_62196);

(statearr_62208_62286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (13))){
var inst_62186 = (state_62204[(7)]);
var inst_62193 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("SERVER ERROR CODE: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62186)].join('');
var inst_62194 = untangled.client.logging.debug.call(null,inst_62193);
var state_62204__$1 = (function (){var statearr_62209 = state_62204;
(statearr_62209[(9)] = inst_62194);

return statearr_62209;
})();
if(cljs.core.truth_(self__.global_error_callback)){
var statearr_62210_62287 = state_62204__$1;
(statearr_62210_62287[(1)] = (15));

} else {
var statearr_62211_62288 = state_62204__$1;
(statearr_62211_62288[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (6))){
var state_62204__$1 = state_62204;
var statearr_62212_62289 = state_62204__$1;
(statearr_62212_62289[(2)] = true);

(statearr_62212_62289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (17))){
var inst_62187 = (state_62204[(8)]);
var inst_62199 = (state_62204[(2)]);
var inst_62200 = err.call(null,inst_62187);
var state_62204__$1 = (function (){var statearr_62213 = state_62204;
(statearr_62213[(10)] = inst_62199);

return statearr_62213;
})();
var statearr_62214_62290 = state_62204__$1;
(statearr_62214_62290[(2)] = inst_62200);

(statearr_62214_62290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (3))){
var inst_62164 = (state_62204[(11)]);
var inst_62169 = inst_62164.cljs$lang$protocol_mask$partition0$;
var inst_62170 = (inst_62169 & (64));
var inst_62171 = inst_62164.cljs$core$ISeq$;
var inst_62172 = (cljs.core.PROTOCOL_SENTINEL === inst_62171);
var inst_62173 = (inst_62170) || (inst_62172);
var state_62204__$1 = state_62204;
if(cljs.core.truth_(inst_62173)){
var statearr_62215_62291 = state_62204__$1;
(statearr_62215_62291[(1)] = (6));

} else {
var statearr_62216_62292 = state_62204__$1;
(statearr_62216_62292[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (12))){
var inst_62187 = (state_62204[(8)]);
var inst_62191 = ok.call(null,inst_62187);
var state_62204__$1 = state_62204;
var statearr_62217_62293 = state_62204__$1;
(statearr_62217_62293[(2)] = inst_62191);

(statearr_62217_62293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (2))){
var inst_62164 = (state_62204[(11)]);
var inst_62164__$1 = (state_62204[(2)]);
var inst_62166 = (inst_62164__$1 == null);
var inst_62167 = cljs.core.not.call(null,inst_62166);
var state_62204__$1 = (function (){var statearr_62218 = state_62204;
(statearr_62218[(11)] = inst_62164__$1);

return statearr_62218;
})();
if(inst_62167){
var statearr_62219_62294 = state_62204__$1;
(statearr_62219_62294[(1)] = (3));

} else {
var statearr_62220_62295 = state_62204__$1;
(statearr_62220_62295[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (11))){
var inst_62186 = (state_62204[(7)]);
var inst_62187 = (state_62204[(8)]);
var inst_62185 = (state_62204[(2)]);
var inst_62186__$1 = cljs.core.get.call(null,inst_62185,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_62187__$1 = cljs.core.get.call(null,inst_62185,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_62188 = untangled.client.logging.debug.call(null,"Receiving ",inst_62187__$1);
var inst_62189 = cljs.core._EQ_.call(null,inst_62186__$1,(200));
var state_62204__$1 = (function (){var statearr_62221 = state_62204;
(statearr_62221[(12)] = inst_62188);

(statearr_62221[(7)] = inst_62186__$1);

(statearr_62221[(8)] = inst_62187__$1);

return statearr_62221;
})();
if(inst_62189){
var statearr_62222_62296 = state_62204__$1;
(statearr_62222_62296[(1)] = (12));

} else {
var statearr_62223_62297 = state_62204__$1;
(statearr_62223_62297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (9))){
var inst_62164 = (state_62204[(11)]);
var inst_62182 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62164);
var state_62204__$1 = state_62204;
var statearr_62224_62298 = state_62204__$1;
(statearr_62224_62298[(2)] = inst_62182);

(statearr_62224_62298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (5))){
var inst_62180 = (state_62204[(2)]);
var state_62204__$1 = state_62204;
if(cljs.core.truth_(inst_62180)){
var statearr_62225_62299 = state_62204__$1;
(statearr_62225_62299[(1)] = (9));

} else {
var statearr_62226_62300 = state_62204__$1;
(statearr_62226_62300[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (14))){
var inst_62202 = (state_62204[(2)]);
var state_62204__$1 = (function (){var statearr_62227 = state_62204;
(statearr_62227[(13)] = inst_62202);

return statearr_62227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62204__$1,self__.parse_queue);
} else {
if((state_val_62205 === (16))){
var state_62204__$1 = state_62204;
var statearr_62228_62301 = state_62204__$1;
(statearr_62228_62301[(2)] = null);

(statearr_62228_62301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (10))){
var inst_62164 = (state_62204[(11)]);
var state_62204__$1 = state_62204;
var statearr_62229_62302 = state_62204__$1;
(statearr_62229_62302[(2)] = inst_62164);

(statearr_62229_62302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62205 === (8))){
var inst_62177 = (state_62204[(2)]);
var state_62204__$1 = state_62204;
var statearr_62230_62303 = state_62204__$1;
(statearr_62230_62303[(2)] = inst_62177);

(statearr_62230_62303[(1)] = (5));


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
}
}
});})(c__48312__auto___62283,this$__$1))
;
return ((function (switch__48198__auto__,c__48312__auto___62283,this$__$1){
return (function() {
var untangled$websockets$networking$state_machine__48199__auto__ = null;
var untangled$websockets$networking$state_machine__48199__auto____0 = (function (){
var statearr_62234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62234[(0)] = untangled$websockets$networking$state_machine__48199__auto__);

(statearr_62234[(1)] = (1));

return statearr_62234;
});
var untangled$websockets$networking$state_machine__48199__auto____1 = (function (state_62204){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_62204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e62235){if((e62235 instanceof Object)){
var ex__48202__auto__ = e62235;
var statearr_62236_62304 = state_62204;
(statearr_62236_62304[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62305 = state_62204;
state_62204 = G__62305;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$websockets$networking$state_machine__48199__auto__ = function(state_62204){
switch(arguments.length){
case 0:
return untangled$websockets$networking$state_machine__48199__auto____0.call(this);
case 1:
return untangled$websockets$networking$state_machine__48199__auto____1.call(this,state_62204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$websockets$networking$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$websockets$networking$state_machine__48199__auto____0;
untangled$websockets$networking$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$websockets$networking$state_machine__48199__auto____1;
return untangled$websockets$networking$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___62283,this$__$1))
})();
var state__48314__auto__ = (function (){var statearr_62237 = f__48313__auto__.call(null);
(statearr_62237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___62283);

return statearr_62237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___62283,this$__$1))
);


var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,this$__$1){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,this$__$1){
return (function (state_62254){
var state_val_62255 = (state_62254[(1)]);
if((state_val_62255 === (1))){
var state_62254__$1 = state_62254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62254__$1,(2),self__.init_chan);
} else {
if((state_val_62255 === (2))){
var inst_62239 = (state_62254[(2)]);
var inst_62240 = untangled.client.logging.debug.call(null,"Sending ",edn);
var inst_62241 = cljs.core.List.EMPTY;
var inst_62242 = cljs.core._conj.call(null,inst_62241,new cljs.core.Keyword("api","parse","api/parse",-1162064757));
var inst_62243 = [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"content","content",15833224)];
var inst_62244 = [new cljs.core.Keyword(null,"send-message","send-message",185030731),new cljs.core.Keyword(null,"send-om-request","send-om-request",-1867228457),edn];
var inst_62245 = cljs.core.PersistentHashMap.fromArrays(inst_62243,inst_62244);
var inst_62246 = cljs.core.List.EMPTY;
var inst_62247 = cljs.core._conj.call(null,inst_62246,inst_62245);
var inst_62248 = cljs.core.concat.call(null,inst_62242,inst_62247);
var inst_62249 = cljs.core.seq.call(null,inst_62248);
var inst_62250 = cljs.core.sequence.call(null,inst_62249);
var inst_62251 = cljs.core.vec.call(null,inst_62250);
var inst_62252 = self__.send_fn.call(null,inst_62251);
var state_62254__$1 = (function (){var statearr_62256 = state_62254;
(statearr_62256[(7)] = inst_62239);

(statearr_62256[(8)] = inst_62240);

return statearr_62256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62254__$1,inst_62252);
} else {
return null;
}
}
});})(c__48312__auto__,this$__$1))
;
return ((function (switch__48198__auto__,c__48312__auto__,this$__$1){
return (function() {
var untangled$websockets$networking$state_machine__48199__auto__ = null;
var untangled$websockets$networking$state_machine__48199__auto____0 = (function (){
var statearr_62260 = [null,null,null,null,null,null,null,null,null];
(statearr_62260[(0)] = untangled$websockets$networking$state_machine__48199__auto__);

(statearr_62260[(1)] = (1));

return statearr_62260;
});
var untangled$websockets$networking$state_machine__48199__auto____1 = (function (state_62254){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_62254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e62261){if((e62261 instanceof Object)){
var ex__48202__auto__ = e62261;
var statearr_62262_62306 = state_62254;
(statearr_62262_62306[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62307 = state_62254;
state_62254 = G__62307;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
untangled$websockets$networking$state_machine__48199__auto__ = function(state_62254){
switch(arguments.length){
case 0:
return untangled$websockets$networking$state_machine__48199__auto____0.call(this);
case 1:
return untangled$websockets$networking$state_machine__48199__auto____1.call(this,state_62254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
untangled$websockets$networking$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = untangled$websockets$networking$state_machine__48199__auto____0;
untangled$websockets$networking$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = untangled$websockets$networking$state_machine__48199__auto____1;
return untangled$websockets$networking$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,this$__$1))
})();
var state__48314__auto__ = (function (){var statearr_62263 = f__48313__auto__.call(null);
(statearr_62263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_62263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,this$__$1))
);

return c__48312__auto__;
});


untangled.websockets.networking.ChannelClient.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
var this_62308__$2 = cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),app);
untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),((function (this_62308__$2,this$__$1){
return (function (p__62264){
var map__62265 = p__62264;
var map__62265__$1 = ((((!((map__62265 == null)))?((((map__62265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62265):map__62265);
var ch_recv__$1 = cljs.core.get.call(null,map__62265__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn__$1 = cljs.core.get.call(null,map__62265__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__62265__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__62265__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__62265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__62265__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var command = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(_QMARK_data);
return untangled.client.logging.debug.call(null,"Message Routed to default handler ",command);
});})(this_62308__$2,this$__$1))
);

untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("api","parse","api/parse",-1162064757),((function (this_62308__$2,this$__$1){
return (function (p__62267){
var map__62268 = p__62267;
var map__62268__$1 = ((((!((map__62268 == null)))?((((map__62268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62268):map__62268);
var _QMARK_data = cljs.core.get.call(null,map__62268__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return cljs.core.async.put_BANG_.call(null,self__.parse_queue,_QMARK_data);
});})(this_62308__$2,this$__$1))
);

untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("api","server-push","api/server-push",-1185983895),((function (this_62308__$2,this$__$1){
return (function (p__62270){
var map__62271 = p__62270;
var map__62271__$1 = ((((!((map__62271 == null)))?((((map__62271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62271):map__62271);
var msg = map__62271__$1;
var _QMARK_data = cljs.core.get.call(null,map__62271__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var app__$1 = new cljs.core.Keyword(null,"completed-app","completed-app",-635152970).cljs$core$IFn$_invoke$arity$1(this_62308__$2);
return untangled.websockets.networking.push_received.call(null,app__$1,_QMARK_data);
});})(this_62308__$2,this$__$1))
);

untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),((function (this_62308__$2,this$__$1){
return (function (p__62273){
var map__62274 = p__62273;
var map__62274__$1 = ((((!((map__62274 == null)))?((((map__62274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62274):map__62274);
var message = map__62274__$1;
var ch_recv__$1 = cljs.core.get.call(null,map__62274__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn__$1 = cljs.core.get.call(null,map__62274__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__62274__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__62274__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__62274__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__62274__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return untangled.client.logging.debug.call(null,"Message Routed to handshake handler ",state);
});})(this_62308__$2,this$__$1))
);

untangled.websockets.networking.message_received.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),((function (this_62308__$2,this$__$1){
return (function (p__62276){
var map__62277 = p__62276;
var map__62277__$1 = ((((!((map__62277 == null)))?((((map__62277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62277):map__62277);
var message = map__62277__$1;
var ch_recv__$1 = cljs.core.get.call(null,map__62277__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn__$1 = cljs.core.get.call(null,map__62277__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__62277__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__62277__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__62277__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__62277__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
untangled.client.logging.debug.call(null,"Message Routed to state handler",cljs.core.keys.call(null,message));

untangled.client.logging.debug.call(null,"Event",event);

untangled.client.logging.debug.call(null,"State",state);

if(cljs.core.truth_(new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return cljs.core.async.put_BANG_.call(null,self__.init_chan,true);
} else {
return null;
}
});})(this_62308__$2,this$__$1))
);

return untangled.websockets.networking.start_router_BANG_.call(null,self__.ch_recv,untangled.websockets.networking.message_received);
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"init-chan","init-chan",2144713800),null,new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),null,new cljs.core.Keyword(null,"req-params","req-params",2117077454),null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null,new cljs.core.Keyword(null,"channel-socket","channel-socket",416262463),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__62158){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__62279 = cljs.core.keyword_identical_QMARK_;
var expr__62280 = k__35238__auto__;
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(G__62158,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,G__62158,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"init-chan","init-chan",2144713800),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,G__62158,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"channel-socket","channel-socket",416262463),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,G__62158,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,G__62158,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,G__62158,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"req-params","req-params",2117077454),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,G__62158,self__.parse_queue,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,G__62158,self__.completed_app,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62279.call(null,new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),expr__62280))){
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,G__62158,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__62158),null));
}
}
}
}
}
}
}
}
}
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),self__.ch_recv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-chan","init-chan",2144713800),self__.init_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"channel-socket","channel-socket",416262463),self__.channel_socket],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"req-params","req-params",2117077454),self__.req_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),self__.parse_queue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"completed-app","completed-app",-635152970),self__.completed_app],null))], null),self__.__extmap));
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__62158){
var self__ = this;
var this__35229__auto____$1 = this;
return (new untangled.websockets.networking.ChannelClient(self__.ch_recv,self__.url,self__.init_chan,self__.channel_socket,self__.send_fn,self__.global_error_callback,self__.req_params,self__.parse_queue,self__.completed_app,G__62158,self__.__extmap,self__.__hash));
});


untangled.websockets.networking.ChannelClient.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

untangled.websockets.networking.ChannelClient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch-recv","ch-recv",649614666,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"init-chan","init-chan",-509721969,null),new cljs.core.Symbol(null,"channel-socket","channel-socket",2056793990,null),new cljs.core.Symbol(null,"send-fn","send-fn",1991533568,null),new cljs.core.Symbol(null,"global-error-callback","global-error-callback",-1753008138,null),new cljs.core.Symbol(null,"req-params","req-params",-537358315,null),new cljs.core.Symbol(null,"parse-queue","parse-queue",-725824080,null),new cljs.core.Symbol(null,"completed-app","completed-app",1005378557,null)], null);
});

untangled.websockets.networking.ChannelClient.cljs$lang$type = true;

untangled.websockets.networking.ChannelClient.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.websockets.networking/ChannelClient");
});

untangled.websockets.networking.ChannelClient.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"untangled.websockets.networking/ChannelClient");
});

untangled.websockets.networking.__GT_ChannelClient = (function untangled$websockets$networking$__GT_ChannelClient(ch_recv,url,init_chan,channel_socket,send_fn,global_error_callback,req_params,parse_queue,completed_app){
return (new untangled.websockets.networking.ChannelClient(ch_recv,url,init_chan,channel_socket,send_fn,global_error_callback,req_params,parse_queue,completed_app,null,null,null));
});

untangled.websockets.networking.map__GT_ChannelClient = (function untangled$websockets$networking$map__GT_ChannelClient(G__62160){
return (new untangled.websockets.networking.ChannelClient(new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(G__62160),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__62160),new cljs.core.Keyword(null,"init-chan","init-chan",2144713800).cljs$core$IFn$_invoke$arity$1(G__62160),new cljs.core.Keyword(null,"channel-socket","channel-socket",416262463).cljs$core$IFn$_invoke$arity$1(G__62160),new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__62160),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631).cljs$core$IFn$_invoke$arity$1(G__62160),new cljs.core.Keyword(null,"req-params","req-params",2117077454).cljs$core$IFn$_invoke$arity$1(G__62160),new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689).cljs$core$IFn$_invoke$arity$1(G__62160),new cljs.core.Keyword(null,"completed-app","completed-app",-635152970).cljs$core$IFn$_invoke$arity$1(G__62160),null,cljs.core.dissoc.call(null,G__62160,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"init-chan","init-chan",2144713800),new cljs.core.Keyword(null,"channel-socket","channel-socket",416262463),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"req-params","req-params",2117077454),new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),new cljs.core.Keyword(null,"completed-app","completed-app",-635152970)),null));
});

/**
 * Creates a client side networking component for use in place of the default untangled networking component.
 * 
 *   Params:
 *   - `url` - The url to handle websocket traffic on. (ex. "\chsk")
 *   - `host` (Optional) - server that is hosting the websocket server
 *   - `global-error-callback` (Optional) - Analagous to the global error callback in untangled client.
 *   - `req-params` (Optional) - Params to be attached to the initial request.
 *   - `state-callback` (Optional) - Callback that runs when the websocket state of the websocket changes.
 *    The function takes an old state parameter and a new state parameter (arity 2 function).
 *    `state-callback` can be either a function, or an atom containing a function.
 *   - `transit-handlers` (Optional) - Expects a map with `:read` and/or `:write` key containing a map of transit handlers,
 *   
 */
untangled.websockets.networking.make_channel_client = (function untangled$websockets$networking$make_channel_client(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62316 = arguments.length;
var i__35777__auto___62317 = (0);
while(true){
if((i__35777__auto___62317 < len__35776__auto___62316)){
args__35783__auto__.push((arguments[i__35777__auto___62317]));

var G__62318 = (i__35777__auto___62317 + (1));
i__35777__auto___62317 = G__62318;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.websockets.networking.make_channel_client.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.websockets.networking.make_channel_client.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62311){
var map__62312 = p__62311;
var map__62312__$1 = ((((!((map__62312 == null)))?((((map__62312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62312):map__62312);
var global_error_callback = cljs.core.get.call(null,map__62312__$1,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631));
var host = cljs.core.get.call(null,map__62312__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var req_params = cljs.core.get.call(null,map__62312__$1,new cljs.core.Keyword(null,"req-params","req-params",2117077454));
var state_callback = cljs.core.get.call(null,map__62312__$1,new cljs.core.Keyword(null,"state-callback","state-callback",-1311788585));
var transit_handlers = cljs.core.get.call(null,map__62312__$1,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791));
var parse_queue = cljs.core.async.chan.call(null);
var map__62314 = taoensso.sente.make_channel_socket_BANG_.call(null,url,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"packer","packer",66077544),untangled.websockets.transit_packer.make_packer.call(null,transit_handlers),new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"params","params",710516235),req_params,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false], null));
var map__62314__$1 = ((((!((map__62314 == null)))?((((map__62314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62314):map__62314);
var chsk = cljs.core.get.call(null,map__62314__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv = cljs.core.get.call(null,map__62314__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__62314__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__62314__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var channel_client = untangled.websockets.networking.map__GT_ChannelClient.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"init-chan","init-chan",2144713800),cljs.core.async.promise_chan.call(null),new cljs.core.Keyword(null,"channel-socket","channel-socket",416262463),chsk,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),global_error_callback,new cljs.core.Keyword(null,"req-params","req-params",2117077454),req_params,new cljs.core.Keyword(null,"parse-queue","parse-queue",1928611689),parse_queue], null));
if(cljs.core.fn_QMARK_.call(null,state_callback)){
cljs.core.add_watch.call(null,state,new cljs.core.Keyword("untangled.websockets.networking","state-callback","untangled.websockets.networking/state-callback",-1707463549),((function (parse_queue,map__62314,map__62314__$1,chsk,ch_recv,send_fn,state,channel_client,map__62312,map__62312__$1,global_error_callback,host,req_params,state_callback,transit_handlers){
return (function (a,k,o,n){
return state_callback.call(null,o,n);
});})(parse_queue,map__62314,map__62314__$1,chsk,ch_recv,send_fn,state,channel_client,map__62312,map__62312__$1,global_error_callback,host,req_params,state_callback,transit_handlers))
);
} else {
if((state_callback instanceof cljs.core.Atom)){
cljs.core.add_watch.call(null,state,new cljs.core.Keyword("untangled.websockets.networking","state-callback","untangled.websockets.networking/state-callback",-1707463549),((function (parse_queue,map__62314,map__62314__$1,chsk,ch_recv,send_fn,state,channel_client,map__62312,map__62312__$1,global_error_callback,host,req_params,state_callback,transit_handlers){
return (function (a,k,o,n){
return cljs.core.deref.call(null,state_callback).call(null,o,n);
});})(parse_queue,map__62314,map__62314__$1,chsk,ch_recv,send_fn,state,channel_client,map__62312,map__62312__$1,global_error_callback,host,req_params,state_callback,transit_handlers))
);
} else {
}
}

return channel_client;
});

untangled.websockets.networking.make_channel_client.cljs$lang$maxFixedArity = (1);

untangled.websockets.networking.make_channel_client.cljs$lang$applyTo = (function (seq62309){
var G__62310 = cljs.core.first.call(null,seq62309);
var seq62309__$1 = cljs.core.next.call(null,seq62309);
return untangled.websockets.networking.make_channel_client.cljs$core$IFn$_invoke$arity$variadic(G__62310,seq62309__$1);
});


//# sourceMappingURL=networking.js.map?rel=1491640776927