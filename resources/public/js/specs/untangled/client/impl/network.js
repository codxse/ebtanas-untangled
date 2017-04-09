// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.network');
goog.require('cljs.core');
goog.require('untangled.client.logging');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('om.transit');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
/**
 * This is here (not inlined) to make mocking easier.
 */
untangled.client.impl.network.make_xhrio = (function untangled$client$impl$network$make_xhrio(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
untangled.client.impl.network.UntangledNetwork = function(){};

/**
 * Send method, transmits EDN to the server and gets an EDN response. Calls result-callback with that response,
 *  or a map with key `:error` on errors. optional options may include `:headers`, but you may NOT override content
 *  type. The method CANNOT be used for parallel network requests.
 */
untangled.client.impl.network.send = (function untangled$client$impl$network$send(this$,edn,ok_callback,error_callback){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$send$arity$4 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$send$arity$4(this$,edn,ok_callback,error_callback);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.impl.network.send[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$,edn,ok_callback,error_callback);
} else {
var m__39941__auto____$1 = (untangled.client.impl.network.send["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$,edn,ok_callback,error_callback);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledNetwork.send",this$);
}
}
}
});

/**
 * Starts the network, passing in the app for any components that may need it.
 */
untangled.client.impl.network.start = (function untangled$client$impl$network$start(this$,complete_app){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$UntangledNetwork$start$arity$2 == null)))){
return this$.untangled$client$impl$network$UntangledNetwork$start$arity$2(this$,complete_app);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.impl.network.start[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$,complete_app);
} else {
var m__39941__auto____$1 = (untangled.client.impl.network.start["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$,complete_app);
} else {
throw cljs.core.missing_protocol.call(null,"UntangledNetwork.start",this$);
}
}
}
});


/**
 * @interface
 */
untangled.client.impl.network.IXhrIOCallbacks = function(){};

/**
 * Called by XhrIo on OK
 */
untangled.client.impl.network.response_ok = (function untangled$client$impl$network$response_ok(this$,xhrio,ok_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3(this$,xhrio,ok_cb);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.impl.network.response_ok[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$,xhrio,ok_cb);
} else {
var m__39941__auto____$1 = (untangled.client.impl.network.response_ok["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$,xhrio,ok_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IXhrIOCallbacks.response-ok",this$);
}
}
}
});

/**
 * Called by XhrIo on ERROR
 */
untangled.client.impl.network.response_error = (function untangled$client$impl$network$response_error(this$,xhrio,err_cb){
if((!((this$ == null))) && (!((this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 == null)))){
return this$.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3(this$,xhrio,err_cb);
} else {
var x__39940__auto__ = (((this$ == null))?null:this$);
var m__39941__auto__ = (untangled.client.impl.network.response_error[goog.typeOf(x__39940__auto__)]);
if(!((m__39941__auto__ == null))){
return m__39941__auto__.call(null,this$,xhrio,err_cb);
} else {
var m__39941__auto____$1 = (untangled.client.impl.network.response_error["_"]);
if(!((m__39941__auto____$1 == null))){
return m__39941__auto____$1.call(null,this$,xhrio,err_cb);
} else {
throw cljs.core.missing_protocol.call(null,"IXhrIOCallbacks.response-error",this$);
}
}
}
});

/**
 * An XhrIo-specific implementation method for interpreting the server response.
 */
untangled.client.impl.network.parse_response = (function untangled$client$impl$network$parse_response(var_args){
var args42333 = [];
var len__40443__auto___42337 = arguments.length;
var i__40444__auto___42338 = (0);
while(true){
if((i__40444__auto___42338 < len__40443__auto___42337)){
args42333.push((arguments[i__40444__auto___42338]));

var G__42339 = (i__40444__auto___42338 + (1));
i__40444__auto___42338 = G__42339;
continue;
} else {
}
break;
}

var G__42335 = args42333.length;
switch (G__42335) {
case 1:
return untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42333.length)].join('')));

}
});

untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$1 = (function (xhr_io){
return untangled.client.impl.network.parse_response.call(null,xhr_io,null);
});

untangled.client.impl.network.parse_response.cljs$core$IFn$_invoke$arity$2 = (function (xhr_io,read_handlers){
try{var text = xhr_io.getResponseText();
var base_handlers = new cljs.core.PersistentArrayMap(null, 2, ["f",((function (text){
return (function (v){
return parseFloat(v);
});})(text))
,"u",cljs.core.uuid], null);
var handlers = ((cljs.core.map_QMARK_.call(null,read_handlers))?cljs.core.merge.call(null,base_handlers,read_handlers):base_handlers);
if(clojure.string.blank_QMARK_.call(null,text)){
return xhr_io.getStatus();
} else {
return cognitect.transit.read.call(null,om.transit.reader.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null)),xhr_io.getResponseText());
}
}catch (e42336){if((e42336 instanceof Object)){
var e = e42336;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),(404),new cljs.core.Keyword(null,"message","message",-406056002),"Server down"], null);
} else {
throw e42336;

}
}});

untangled.client.impl.network.parse_response.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {untangled.client.impl.network.IXhrIOCallbacks}
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
*/
untangled.client.impl.network.Network = (function (url,request_transform,global_error_callback,complete_app,transit_handlers,__meta,__extmap,__hash){
this.url = url;
this.request_transform = request_transform;
this.global_error_callback = global_error_callback;
this.complete_app = complete_app;
this.transit_handlers = transit_handlers;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39897__auto__,k__39898__auto__){
var self__ = this;
var this__39897__auto____$1 = this;
return this__39897__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__39898__auto__,null);
});


untangled.client.impl.network.Network.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39899__auto__,k42342,else__39900__auto__){
var self__ = this;
var this__39899__auto____$1 = this;
var G__42344 = (((k42342 instanceof cljs.core.Keyword))?k42342.fqn:null);
switch (G__42344) {
case "url":
return self__.url;

break;
case "request-transform":
return self__.request_transform;

break;
case "global-error-callback":
return self__.global_error_callback;

break;
case "complete-app":
return self__.complete_app;

break;
case "transit-handlers":
return self__.transit_handlers;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42342,else__39900__auto__);

}
});


untangled.client.impl.network.Network.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39911__auto__,writer__39912__auto__,opts__39913__auto__){
var self__ = this;
var this__39911__auto____$1 = this;
var pr_pair__39914__auto__ = ((function (this__39911__auto____$1){
return (function (keyval__39915__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39912__auto__,cljs.core.pr_writer,""," ","",opts__39913__auto__,keyval__39915__auto__);
});})(this__39911__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39912__auto__,pr_pair__39914__auto__,"#untangled.client.impl.network.Network{",", ","}",opts__39913__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),self__.transit_handlers],null))], null),self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.Network.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42341){
var self__ = this;
var G__42341__$1 = this;
return (new cljs.core.RecordIter((0),G__42341__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.client.impl.network.Network.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39895__auto__){
var self__ = this;
var this__39895__auto____$1 = this;
return self__.__meta;
});


untangled.client.impl.network.Network.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39891__auto__){
var self__ = this;
var this__39891__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_ok$arity$3 = (function (this$,xhr_io,valid_data_callback){
var self__ = this;
var this$__$1 = this;
try{var read_handlers = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
var query_response = untangled.client.impl.network.parse_response.call(null,xhr_io,read_handlers);
if(cljs.core.truth_((function (){var and__39210__auto__ = query_response;
if(cljs.core.truth_(and__39210__auto__)){
return valid_data_callback;
} else {
return and__39210__auto__;
}
})())){
return valid_data_callback.call(null,query_response);
} else {
return null;
}
}finally {xhr_io.dispose();
}});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$IXhrIOCallbacks$response_error$arity$3 = (function (this$,xhr_io,error_callback){
var self__ = this;
var this$__$1 = this;
try{var status = xhr_io.getStatus();
var log_and_dispatch_error = ((function (status,this$__$1){
return (function (str,error){
untangled.client.logging.error.call(null,str);

if(cljs.core.truth_(cljs.core.deref.call(null,self__.global_error_callback))){
cljs.core.deref.call(null,self__.global_error_callback).call(null,status,error);
} else {
}

return error_callback.call(null,error);
});})(status,this$__$1))
;
if((status === (0))){
return log_and_dispatch_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("UNTANGLED NETWORK ERROR: No connection established.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"network","network",2050004697)], null));
} else {
return log_and_dispatch_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("SERVER ERROR CODE: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),untangled.client.impl.network.parse_response.call(null,xhr_io,self__.transit_handlers));
}
}finally {xhr_io.dispose();
}});


untangled.client.impl.network.Network.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39901__auto__){
var self__ = this;
var this__39901__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39892__auto__){
var self__ = this;
var this__39892__auto____$1 = this;
var h__39664__auto__ = self__.__hash;
if(!((h__39664__auto__ == null))){
return h__39664__auto__;
} else {
var h__39664__auto____$1 = cljs.core.hash_imap.call(null,this__39892__auto____$1);
self__.__hash = h__39664__auto____$1;

return h__39664__auto____$1;
}
});


untangled.client.impl.network.Network.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39893__auto__,other__39894__auto__){
var self__ = this;
var this__39893__auto____$1 = this;
if(cljs.core.truth_((function (){var and__39210__auto__ = other__39894__auto__;
if(cljs.core.truth_(and__39210__auto__)){
return ((this__39893__auto____$1.constructor === other__39894__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__39893__auto____$1,other__39894__auto__));
} else {
return and__39210__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
var xhrio = untangled.client.impl.network.make_xhrio.call(null);
var handlers = (function (){var or__39222__auto__ = new cljs.core.Keyword(null,"write","write",-1857649168).cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var headers = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/transit+json"], null);
var map__42345 = (function (){var G__42346 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),edn,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null);
if(cljs.core.truth_(self__.request_transform)){
return self__.request_transform.call(null,G__42346);
} else {
return G__42346;
}
})();
var map__42345__$1 = ((((!((map__42345 == null)))?((((map__42345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42345):map__42345);
var body = cljs.core.get.call(null,map__42345__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers__$1 = cljs.core.get.call(null,map__42345__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var post_data = cognitect.transit.write.call(null,om.transit.writer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null)),body);
var headers__$2 = cljs.core.clj__GT_js.call(null,headers__$1);
xhrio.send(self__.url,"POST",post_data,headers__$2);

goog.events.listen(xhrio,goog.net.EventType.SUCCESS,((function (xhrio,handlers,headers,map__42345,map__42345__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return untangled.client.impl.network.response_ok.call(null,this$__$1,xhrio,ok);
});})(xhrio,handlers,headers,map__42345,map__42345__$1,body,headers__$1,post_data,headers__$2,this$__$1))
);

return goog.events.listen(xhrio,goog.net.EventType.ERROR,((function (xhrio,handlers,headers,map__42345,map__42345__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return untangled.client.impl.network.response_error.call(null,this$__$1,xhrio,err);
});})(xhrio,handlers,headers,map__42345,map__42345__$1,body,headers__$1,post_data,headers__$2,this$__$1))
);
});


untangled.client.impl.network.Network.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});


untangled.client.impl.network.Network.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39906__auto__,k__39907__auto__){
var self__ = this;
var this__39906__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__39907__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39906__auto____$1),self__.__meta),k__39907__auto__);
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39907__auto__)),null));
}
});


untangled.client.impl.network.Network.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39904__auto__,k__39905__auto__,G__42341){
var self__ = this;
var this__39904__auto____$1 = this;
var pred__42348 = cljs.core.keyword_identical_QMARK_;
var expr__42349 = k__39905__auto__;
if(cljs.core.truth_(pred__42348.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__42349))){
return (new untangled.client.impl.network.Network(G__42341,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42348.call(null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),expr__42349))){
return (new untangled.client.impl.network.Network(self__.url,G__42341,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42348.call(null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),expr__42349))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,G__42341,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42348.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__42349))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,G__42341,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42348.call(null,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),expr__42349))){
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,G__42341,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39905__auto__,G__42341),null));
}
}
}
}
}
});


untangled.client.impl.network.Network.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39909__auto__){
var self__ = this;
var this__39909__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),self__.transit_handlers],null))], null),self__.__extmap));
});


untangled.client.impl.network.Network.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39896__auto__,G__42341){
var self__ = this;
var this__39896__auto____$1 = this;
return (new untangled.client.impl.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,G__42341,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.Network.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39902__auto__,entry__39903__auto__){
var self__ = this;
var this__39902__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39903__auto__)){
return this__39902__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__39903__auto__,(0)),cljs.core._nth.call(null,entry__39903__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39902__auto____$1,entry__39903__auto__);
}
});

untangled.client.impl.network.Network.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"request-transform","request-transform",1810868824,null),new cljs.core.Symbol(null,"global-error-callback","global-error-callback",-1753008138,null),new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null),new cljs.core.Symbol(null,"transit-handlers","transit-handlers",434450736,null)], null);
});

untangled.client.impl.network.Network.cljs$lang$type = true;

untangled.client.impl.network.Network.cljs$lang$ctorPrSeq = (function (this__39933__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.Network.cljs$lang$ctorPrWriter = (function (this__39933__auto__,writer__39934__auto__){
return cljs.core._write.call(null,writer__39934__auto__,"untangled.client.impl.network/Network");
});

untangled.client.impl.network.__GT_Network = (function untangled$client$impl$network$__GT_Network(url,request_transform,global_error_callback,complete_app,transit_handlers){
return (new untangled.client.impl.network.Network(url,request_transform,global_error_callback,complete_app,transit_handlers,null,null,null));
});

untangled.client.impl.network.map__GT_Network = (function untangled$client$impl$network$map__GT_Network(G__42343){
return (new untangled.client.impl.network.Network(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__42343),new cljs.core.Keyword(null,"request-transform","request-transform",170337297).cljs$core$IFn$_invoke$arity$1(G__42343),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631).cljs$core$IFn$_invoke$arity$1(G__42343),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__42343),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791).cljs$core$IFn$_invoke$arity$1(G__42343),null,cljs.core.dissoc.call(null,G__42343,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791)),null));
});

/**
 * TODO: This is PUBLIC API! Should not be in impl ns.
 * 
 *   Build an Untangled Network object using the default implementation.
 * 
 *   Features:
 * 
 *   - Can configure the target URL on the server for Om network requests
 *   - Can supply a (fn [{:keys [body headers] :as req}] req') to transform arbitrary requests (e.g. to add things like auth headers)
 *   - Supports a global error callback (fn [status-code error] ) that is notified when a 400+ status code or hard network error occurs
 *   - `transit-handlers`: A map of transit handlers to install on the reader, such as
 * 
 * `{ :read { "thing" (fn [wire-value] (convert wire-value))) }
 *    :write { Thing (ThingHandler.) } }`
 * 
 * where:
 * 
 * (defrecord Thing [foo])
 * 
 * (deftype ThingHandler []
 *   Object
 *   (tag [_ _] "thing")
 *   (rep [_ thing] (make-raw thing))
 *   (stringRep [_ _] nil)))
 *   
 */
untangled.client.impl.network.make_untangled_network = (function untangled$client$impl$network$make_untangled_network(var_args){
var args__40450__auto__ = [];
var len__40443__auto___42357 = arguments.length;
var i__40444__auto___42358 = (0);
while(true){
if((i__40444__auto___42358 < len__40443__auto___42357)){
args__40450__auto__.push((arguments[i__40444__auto___42358]));

var G__42359 = (i__40444__auto___42358 + (1));
i__40444__auto___42358 = G__42359;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((1) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((1)),(0),null)):null);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40451__auto__);
});

untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__42354){
var map__42355 = p__42354;
var map__42355__$1 = ((((!((map__42355 == null)))?((((map__42355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42355):map__42355);
var request_transform = cljs.core.get.call(null,map__42355__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var global_error_callback = cljs.core.get.call(null,map__42355__$1,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631));
var transit_handlers = cljs.core.get.call(null,map__42355__$1,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791));
return untangled.client.impl.network.map__GT_Network.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),transit_handlers,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),cljs.core.atom.call(null,global_error_callback)], null));
});

untangled.client.impl.network.make_untangled_network.cljs$lang$maxFixedArity = (1);

untangled.client.impl.network.make_untangled_network.cljs$lang$applyTo = (function (seq42352){
var G__42353 = cljs.core.first.call(null,seq42352);
var seq42352__$1 = cljs.core.next.call(null,seq42352);
return untangled.client.impl.network.make_untangled_network.cljs$core$IFn$_invoke$arity$variadic(G__42353,seq42352__$1);
});


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
*/
untangled.client.impl.network.MockNetwork = (function (complete_app,__meta,__extmap,__hash){
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__39897__auto__,k__39898__auto__){
var self__ = this;
var this__39897__auto____$1 = this;
return this__39897__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__39898__auto__,null);
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__39899__auto__,k42361,else__39900__auto__){
var self__ = this;
var this__39899__auto____$1 = this;
var G__42363 = (((k42361 instanceof cljs.core.Keyword))?k42361.fqn:null);
switch (G__42363) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42361,else__39900__auto__);

}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__39911__auto__,writer__39912__auto__,opts__39913__auto__){
var self__ = this;
var this__39911__auto____$1 = this;
var pr_pair__39914__auto__ = ((function (this__39911__auto____$1){
return (function (keyval__39915__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__39912__auto__,cljs.core.pr_writer,""," ","",opts__39913__auto__,keyval__39915__auto__);
});})(this__39911__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__39912__auto__,pr_pair__39914__auto__,"#untangled.client.impl.network.MockNetwork{",", ","}",opts__39913__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42360){
var self__ = this;
var G__42360__$1 = this;
return (new cljs.core.RecordIter((0),G__42360__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__39895__auto__){
var self__ = this;
var this__39895__auto____$1 = this;
return self__.__meta;
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__39891__auto__){
var self__ = this;
var this__39891__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__39901__auto__){
var self__ = this;
var this__39901__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__39892__auto__){
var self__ = this;
var this__39892__auto____$1 = this;
var h__39664__auto__ = self__.__hash;
if(!((h__39664__auto__ == null))){
return h__39664__auto__;
} else {
var h__39664__auto____$1 = cljs.core.hash_imap.call(null,this__39892__auto____$1);
self__.__hash = h__39664__auto____$1;

return h__39664__auto____$1;
}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__39893__auto__,other__39894__auto__){
var self__ = this;
var this__39893__auto____$1 = this;
if(cljs.core.truth_((function (){var and__39210__auto__ = other__39894__auto__;
if(cljs.core.truth_(and__39210__auto__)){
return ((this__39893__auto____$1.constructor === other__39894__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__39893__auto____$1,other__39894__auto__));
} else {
return and__39210__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
return untangled.client.logging.info.call(null,"Ignored (mock) Network request ",edn);
});


untangled.client.impl.network.MockNetwork.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = (function (this$,app){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),app);
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__39906__auto__,k__39907__auto__){
var self__ = this;
var this__39906__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__39907__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__39906__auto____$1),self__.__meta),k__39907__auto__);
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__39907__auto__)),null));
}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__39904__auto__,k__39905__auto__,G__42360){
var self__ = this;
var this__39904__auto____$1 = this;
var pred__42364 = cljs.core.keyword_identical_QMARK_;
var expr__42365 = k__39905__auto__;
if(cljs.core.truth_(pred__42364.call(null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),expr__42365))){
return (new untangled.client.impl.network.MockNetwork(G__42360,self__.__meta,self__.__extmap,null));
} else {
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__39905__auto__,G__42360),null));
}
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__39909__auto__){
var self__ = this;
var this__39909__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__39896__auto__,G__42360){
var self__ = this;
var this__39896__auto____$1 = this;
return (new untangled.client.impl.network.MockNetwork(self__.complete_app,G__42360,self__.__extmap,self__.__hash));
});


untangled.client.impl.network.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__39902__auto__,entry__39903__auto__){
var self__ = this;
var this__39902__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__39903__auto__)){
return this__39902__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__39903__auto__,(0)),cljs.core._nth.call(null,entry__39903__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__39902__auto____$1,entry__39903__auto__);
}
});

untangled.client.impl.network.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

untangled.client.impl.network.MockNetwork.cljs$lang$type = true;

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrSeq = (function (this__39933__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.MockNetwork.cljs$lang$ctorPrWriter = (function (this__39933__auto__,writer__39934__auto__){
return cljs.core._write.call(null,writer__39934__auto__,"untangled.client.impl.network/MockNetwork");
});

untangled.client.impl.network.__GT_MockNetwork = (function untangled$client$impl$network$__GT_MockNetwork(complete_app){
return (new untangled.client.impl.network.MockNetwork(complete_app,null,null,null));
});

untangled.client.impl.network.map__GT_MockNetwork = (function untangled$client$impl$network$map__GT_MockNetwork(G__42362){
return (new untangled.client.impl.network.MockNetwork(new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__42362),null,cljs.core.dissoc.call(null,G__42362,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)),null));
});

untangled.client.impl.network.mock_network = (function untangled$client$impl$network$mock_network(){
return untangled.client.impl.network.map__GT_MockNetwork.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=network.js.map?rel=1491695651427