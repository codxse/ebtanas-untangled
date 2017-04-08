// Compiled by ClojureScript 1.9.494 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(67),(1)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.67);
}
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
if(typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined'){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.call(null,false);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__60688 = x;
var ev_id = cljs.core.nth.call(null,vec__60688,(0),null);
var _ = cljs.core.nth.call(null,vec__60688,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__6753__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__6753__auto__)){
var _QMARK_err = temp__6753__auto__;
var err_msg = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__60692 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__60692) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Event should be of `[ev-id ?ev-data]` form: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__34543__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__34543__auto__){
var and__34543__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__34543__auto____$1){
var map__60704 = x;
var map__60704__$1 = ((((!((map__60704 == null)))?((((map__60704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60704):map__60704);
var ch_recv = cljs.core.get.call(null,map__60704__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__60704__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__60704__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__60704__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__34543__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__34543__auto____$2){
var and__34543__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__34543__auto____$3){
var and__34543__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__34543__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__34543__auto____$4;
}
} else {
return and__34543__auto____$3;
}
} else {
return and__34543__auto____$2;
}
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__34543__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__34543__auto__){
var and__34543__auto____$1 = taoensso.encore.ks_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__34543__auto____$1){
var map__60716 = x;
var map__60716__$1 = ((((!((map__60716 == null)))?((((map__60716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60716):map__60716);
var ch_recv = cljs.core.get.call(null,map__60716__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__60716__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__60716__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__60716__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__60716__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__60716__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__60716__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__34543__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__34543__auto____$2){
var and__34543__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__34543__auto____$3){
var and__34543__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__34543__auto____$4){
var and__34543__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__34543__auto____$5){
var and__34543__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__34543__auto____$6){
var and__34543__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__34543__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__34543__auto____$7;
}
} else {
return and__34543__auto____$6;
}
} else {
return and__34543__auto____$5;
}
} else {
return and__34543__auto____$4;
}
} else {
return and__34543__auto____$3;
}
} else {
return and__34543__auto____$2;
}
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__60718){
var map__60724 = p__60718;
var map__60724__$1 = ((((!((map__60724 == null)))?((((map__60724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60724):map__60724);
var ev_msg = map__60724__$1;
var event = cljs.core.get.call(null,map__60724__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__60724__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__60726 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__60726,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__60726,(1),null);
var valid_event = vec__60726;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",163,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__60726,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__60724,map__60724__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__60726,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__60724,map__60724__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,894203870);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",177,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,prefixed_pstr,"+");
var pstr = cljs.core.subs.call(null,prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack.call(null,packer,pstr);
}catch (e60736){var t = e60736;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",184,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-2070586669);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__60733 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__60733,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__60733,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",190,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__60733,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__60733,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-839281706);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args60737 = [];
var len__35776__auto___60740 = arguments.length;
var i__35777__auto___60741 = (0);
while(true){
if((i__35777__auto___60741 < len__35776__auto___60740)){
args60737.push((arguments[i__35777__auto___60741]));

var G__60742 = (i__35777__auto___60741 + (1));
i__35777__auto___60741 = G__60742;
continue;
} else {
}
break;
}

var G__60739 = args60737.length;
switch (G__60739) {
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60737.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
var pstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",200,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj], null),pstr], null);
});})(pstr))
,null)),null,1849076748);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",210,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_packer_meta,clj,_QMARK_cb_uuid__$1], null),pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-121250250);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
})

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;


taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});


taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"taoensso.sente/EdnPacker");
});

taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__60744_SHARP_){
if(!((p1__60744_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__60744_SHARP_.taoensso$sente$interfaces$IPacker$))){
return true;
} else {
if((!p1__60744_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__60744_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,p1__60744_SHARP_);
}
}).call(null,x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60747){if((e60747 instanceof Error)){
var e = e60747;
return e;
} else {
throw e60747;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",223,"((fn* [p1__60744#] (satisfies? interfaces/IPacker p1__60744#)) x)",x,e,null);
}
}
});


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___61055 = arguments.length;
var i__35777__auto___61056 = (0);
while(true){
if((i__35777__auto___61056 < len__35776__auto___61055)){
args__35783__auto__.push((arguments[i__35777__auto___61056]));

var G__61057 = (i__35777__auto___61056 + (1));
i__35777__auto___61056 = G__61057;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__60752){
var vec__60753 = p__60752;
var map__60756 = cljs.core.nth.call(null,vec__60753,(0),null);
var map__60756__$1 = ((((!((map__60756 == null)))?((((map__60756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60756):map__60756);
var recv_buf_or_n = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var ws_kalive_ms = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var lp_timeout_ms = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__34555__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
var or__34555__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__34555__auto____$1)){
return or__34555__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__60756__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60758){if((e60758 instanceof Error)){
var e = e60758;
return e;
} else {
throw e60758;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",291,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60759){if((e60759 instanceof Error)){
var e = e60759;
return e;
} else {
throw e60759;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",291,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_61058 = (function (){try{if(((function (vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__60749_SHARP_){
if(!((p1__60749_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__60749_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$))){
return true;
} else {
if((!p1__60749_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__60749_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__60749_SHARP_);
}
});})(vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60760){if((e60760 instanceof Error)){
var e = e60760;
return e;
} else {
throw e60760;

}
}})();
if((e_61058 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",292,"((fn* [p1__60749#] (satisfies? interfaces/IServerChanAdapter p1__60749#)) web-server-ch-adapter)",web_server_ch_adapter,e_61058,null);
}

var max_ms_61059 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_61059)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":lp-timeout-ms must be < "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_61059)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_61059], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__34555__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var G__61060 = null;
var G__61060__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var vec__60762 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.call(null,vec__60762,(0),null);
var _udt = cljs.core.nth.call(null,vec__60762,(1),null);
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
var G__61060__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt.call(null);
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
});
G__61060 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__61060__3.call(this,conn_type,uid,client_id);
case 4:
return G__61060__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61060.cljs$core$IFn$_invoke$arity$3 = G__61060__3;
G__61060.cljs$core$IFn$_invoke$arity$4 = G__61060__4;
return G__61060;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60765){if((e60765 instanceof Error)){
var e = e60765;
return e;
} else {
throw e60765;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",336,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__60766){
var map__60767 = p__60766;
var map__60767__$1 = ((((!((map__60767 == null)))?((((map__60767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60767):map__60767);
var old_m = map__60767__$1;
var ws = cljs.core.get.call(null,map__60767__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__60767__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__60767__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__60769 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__60769) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(conn_type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e60770){if((e60770 instanceof Error)){
var e = e60770;
return e;
} else {
throw e60770;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",353,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__60771){
var map__60772 = p__60771;
var map__60772__$1 = ((((!((map__60772 == null)))?((((map__60772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60772):map__60772);
var old_m = map__60772__$1;
var ws = cljs.core.get.call(null,map__60772__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__60772__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__60772__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__61062__delegate = function (user_id,ev,p__60774){
var vec__60775 = p__60774;
var map__60778 = cljs.core.nth.call(null,vec__60775,(0),null);
var map__60778__$1 = ((((!((map__60778 == null)))?((((map__60778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60778):map__60778);
var opts = map__60778__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__60778__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_61063 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __61064 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",379,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_61063,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_61063,ev], null);
});})(uid_61063,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,560048165);
var __61065__$1 = (cljs.core.truth_(uid_61063)?null:(function(){throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("uid")].join('')))})());
var __61066__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_61067 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__61068 = ((function (uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (conn_type){
var temp__6753__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__60780 = cljs.core.get.call(null,m,uid_61063);
var ___$3 = cljs.core.nth.call(null,vec__60780,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__60780,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_61067)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_61063),cljs.core.get.call(null,m,uid_61063));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__6753__auto__)){
var pulled = temp__6753__auto__;
var vec__60783 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__60783,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__60783,(1),null);
if(cljs.core.vector_QMARK_.call(null,buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",406,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_.call(null,ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",407,"(set? ev-uuids)",ev_uuids,null,null);
}

var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",415,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__60783,buffered_evs,ev_uuids,pulled,temp__6753__auto__,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__60783,buffered_evs,ev_uuids,pulled,temp__6753__auto__,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1103049749);

var G__60786 = (((conn_type instanceof cljs.core.Keyword))?conn_type.fqn:null);
switch (G__60786) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_61063,buffered_evs_ppstr,upd_conn_BANG_);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_61063,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(conn_type)].join('')));

}
} else {
return null;
}
});})(uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",426,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_61063], null);
});})(uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,689385963);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__61068.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__61068.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__60787_61070 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_61063], null))));
var chunk__60788_61071 = null;
var count__60789_61072 = (0);
var i__60790_61073 = (0);
while(true){
if((i__60790_61073 < count__60789_61072)){
var vec__60791_61074 = cljs.core._nth.call(null,chunk__60788_61071,i__60790_61073);
var _QMARK_sch_61075 = cljs.core.nth.call(null,vec__60791_61074,(0),null);
var _udt_61076 = cljs.core.nth.call(null,vec__60791_61074,(1),null);
var temp__6753__auto___61077 = _QMARK_sch_61075;
if(cljs.core.truth_(temp__6753__auto___61077)){
var sch_61078 = temp__6753__auto___61077;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_61078);
} else {
}

var G__61079 = seq__60787_61070;
var G__61080 = chunk__60788_61071;
var G__61081 = count__60789_61072;
var G__61082 = (i__60790_61073 + (1));
seq__60787_61070 = G__61079;
chunk__60788_61071 = G__61080;
count__60789_61072 = G__61081;
i__60790_61073 = G__61082;
continue;
} else {
var temp__6753__auto___61083 = cljs.core.seq.call(null,seq__60787_61070);
if(temp__6753__auto___61083){
var seq__60787_61084__$1 = temp__6753__auto___61083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60787_61084__$1)){
var c__35466__auto___61085 = cljs.core.chunk_first.call(null,seq__60787_61084__$1);
var G__61086 = cljs.core.chunk_rest.call(null,seq__60787_61084__$1);
var G__61087 = c__35466__auto___61085;
var G__61088 = cljs.core.count.call(null,c__35466__auto___61085);
var G__61089 = (0);
seq__60787_61070 = G__61086;
chunk__60788_61071 = G__61087;
count__60789_61072 = G__61088;
i__60790_61073 = G__61089;
continue;
} else {
var vec__60794_61090 = cljs.core.first.call(null,seq__60787_61084__$1);
var _QMARK_sch_61091 = cljs.core.nth.call(null,vec__60794_61090,(0),null);
var _udt_61092 = cljs.core.nth.call(null,vec__60794_61090,(1),null);
var temp__6753__auto___61093__$1 = _QMARK_sch_61091;
if(cljs.core.truth_(temp__6753__auto___61093__$1)){
var sch_61094 = temp__6753__auto___61093__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_61094);
} else {
}

var G__61095 = cljs.core.next.call(null,seq__60787_61084__$1);
var G__61096 = null;
var G__61097 = (0);
var G__61098 = (0);
seq__60787_61070 = G__61095;
chunk__60788_61071 = G__61096;
count__60789_61072 = G__61097;
i__60790_61073 = G__61098;
continue;
}
} else {
}
}
break;
}

var seq__60797_61099 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_61063], null))));
var chunk__60798_61100 = null;
var count__60799_61101 = (0);
var i__60800_61102 = (0);
while(true){
if((i__60800_61102 < count__60799_61101)){
var vec__60801_61103 = cljs.core._nth.call(null,chunk__60798_61100,i__60800_61102);
var _QMARK_sch_61104 = cljs.core.nth.call(null,vec__60801_61103,(0),null);
var _udt_61105 = cljs.core.nth.call(null,vec__60801_61103,(1),null);
var temp__6753__auto___61106 = _QMARK_sch_61104;
if(cljs.core.truth_(temp__6753__auto___61106)){
var sch_61107 = temp__6753__auto___61106;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_61107);
} else {
}

var G__61108 = seq__60797_61099;
var G__61109 = chunk__60798_61100;
var G__61110 = count__60799_61101;
var G__61111 = (i__60800_61102 + (1));
seq__60797_61099 = G__61108;
chunk__60798_61100 = G__61109;
count__60799_61101 = G__61110;
i__60800_61102 = G__61111;
continue;
} else {
var temp__6753__auto___61112 = cljs.core.seq.call(null,seq__60797_61099);
if(temp__6753__auto___61112){
var seq__60797_61113__$1 = temp__6753__auto___61112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60797_61113__$1)){
var c__35466__auto___61114 = cljs.core.chunk_first.call(null,seq__60797_61113__$1);
var G__61115 = cljs.core.chunk_rest.call(null,seq__60797_61113__$1);
var G__61116 = c__35466__auto___61114;
var G__61117 = cljs.core.count.call(null,c__35466__auto___61114);
var G__61118 = (0);
seq__60797_61099 = G__61115;
chunk__60798_61100 = G__61116;
count__60799_61101 = G__61117;
i__60800_61102 = G__61118;
continue;
} else {
var vec__60804_61119 = cljs.core.first.call(null,seq__60797_61113__$1);
var _QMARK_sch_61120 = cljs.core.nth.call(null,vec__60804_61119,(0),null);
var _udt_61121 = cljs.core.nth.call(null,vec__60804_61119,(1),null);
var temp__6753__auto___61122__$1 = _QMARK_sch_61120;
if(cljs.core.truth_(temp__6753__auto___61122__$1)){
var sch_61123 = temp__6753__auto___61122__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,sch_61123);
} else {
}

var G__61124 = cljs.core.next.call(null,seq__60797_61113__$1);
var G__61125 = null;
var G__61126 = (0);
var G__61127 = (0);
seq__60797_61099 = G__61124;
chunk__60798_61100 = G__61125;
count__60799_61101 = G__61126;
i__60800_61102 = G__61127;
continue;
}
} else {
}
}
break;
}
} else {
var seq__60807_61128 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__60808_61129 = null;
var count__60809_61130 = (0);
var i__60810_61131 = (0);
while(true){
if((i__60810_61131 < count__60809_61130)){
var conn_type_61132 = cljs.core._nth.call(null,chunk__60808_61129,i__60810_61131);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_61132,uid_61063], null),((function (seq__60807_61128,chunk__60808_61129,count__60809_61130,i__60810_61131,conn_type_61132,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_61067], true)], null);
} else {
var vec__60811 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__60811,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__60811,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_61067)], null);
}
});})(seq__60807_61128,chunk__60808_61129,count__60809_61130,i__60810_61131,conn_type_61132,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__61133 = seq__60807_61128;
var G__61134 = chunk__60808_61129;
var G__61135 = count__60809_61130;
var G__61136 = (i__60810_61131 + (1));
seq__60807_61128 = G__61133;
chunk__60808_61129 = G__61134;
count__60809_61130 = G__61135;
i__60810_61131 = G__61136;
continue;
} else {
var temp__6753__auto___61137 = cljs.core.seq.call(null,seq__60807_61128);
if(temp__6753__auto___61137){
var seq__60807_61138__$1 = temp__6753__auto___61137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60807_61138__$1)){
var c__35466__auto___61139 = cljs.core.chunk_first.call(null,seq__60807_61138__$1);
var G__61140 = cljs.core.chunk_rest.call(null,seq__60807_61138__$1);
var G__61141 = c__35466__auto___61139;
var G__61142 = cljs.core.count.call(null,c__35466__auto___61139);
var G__61143 = (0);
seq__60807_61128 = G__61140;
chunk__60808_61129 = G__61141;
count__60809_61130 = G__61142;
i__60810_61131 = G__61143;
continue;
} else {
var conn_type_61144 = cljs.core.first.call(null,seq__60807_61138__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_61144,uid_61063], null),((function (seq__60807_61128,chunk__60808_61129,count__60809_61130,i__60810_61131,conn_type_61144,seq__60807_61138__$1,temp__6753__auto___61137,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_61067], true)], null);
} else {
var vec__60814 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__60814,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__60814,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_61067)], null);
}
});})(seq__60807_61128,chunk__60808_61129,count__60809_61130,i__60810_61131,conn_type_61144,seq__60807_61138__$1,temp__6753__auto___61137,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__61145 = cljs.core.next.call(null,seq__60807_61138__$1);
var G__61146 = null;
var G__61147 = (0);
var G__61148 = (0);
seq__60807_61128 = G__61145;
chunk__60808_61129 = G__61146;
count__60809_61130 = G__61147;
i__60810_61131 = G__61148;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__61068.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__61068.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_61149 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var ajax_timeout_61150 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var c__48312__auto___61151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___61151,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___61151,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_60821){
var state_val_60822 = (state_60821[(1)]);
if((state_val_60822 === (1))){
var state_60821__$1 = state_60821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60821__$1,(2),ws_timeout_61149);
} else {
if((state_val_60822 === (2))){
var inst_60818 = (state_60821[(2)]);
var inst_60819 = flush_buffer_BANG__61068.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_60821__$1 = (function (){var statearr_60823 = state_60821;
(statearr_60823[(7)] = inst_60818);

return statearr_60823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60821__$1,inst_60819);
} else {
return null;
}
}
});})(c__48312__auto___61151,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__48198__auto__,c__48312__auto___61151,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__48199__auto__ = null;
var taoensso$sente$state_machine__48199__auto____0 = (function (){
var statearr_60827 = [null,null,null,null,null,null,null,null];
(statearr_60827[(0)] = taoensso$sente$state_machine__48199__auto__);

(statearr_60827[(1)] = (1));

return statearr_60827;
});
var taoensso$sente$state_machine__48199__auto____1 = (function (state_60821){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_60821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e60828){if((e60828 instanceof Object)){
var ex__48202__auto__ = e60828;
var statearr_60829_61152 = state_60821;
(statearr_60829_61152[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61153 = state_60821;
state_60821 = G__61153;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$state_machine__48199__auto__ = function(state_60821){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__48199__auto____1.call(this,state_60821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__48199__auto____0;
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__48199__auto____1;
return taoensso$sente$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___61151,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__48314__auto__ = (function (){var statearr_60830 = f__48313__auto__.call(null);
(statearr_60830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___61151);

return statearr_60830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___61151,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__48312__auto___61154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___61154,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___61154,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_60835){
var state_val_60836 = (state_60835[(1)]);
if((state_val_60836 === (1))){
var state_60835__$1 = state_60835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60835__$1,(2),ajax_timeout_61150);
} else {
if((state_val_60836 === (2))){
var inst_60832 = (state_60835[(2)]);
var inst_60833 = flush_buffer_BANG__61068.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_60835__$1 = (function (){var statearr_60837 = state_60835;
(statearr_60837[(7)] = inst_60832);

return statearr_60837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60835__$1,inst_60833);
} else {
return null;
}
}
});})(c__48312__auto___61154,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__48198__auto__,c__48312__auto___61154,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__48199__auto__ = null;
var taoensso$sente$state_machine__48199__auto____0 = (function (){
var statearr_60841 = [null,null,null,null,null,null,null,null];
(statearr_60841[(0)] = taoensso$sente$state_machine__48199__auto__);

(statearr_60841[(1)] = (1));

return statearr_60841;
});
var taoensso$sente$state_machine__48199__auto____1 = (function (state_60835){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_60835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e60842){if((e60842 instanceof Object)){
var ex__48202__auto__ = e60842;
var statearr_60843_61155 = state_60835;
(statearr_60843_61155[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61156 = state_60835;
state_60835 = G__61156;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$state_machine__48199__auto__ = function(state_60835){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__48199__auto____1.call(this,state_60835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__48199__auto____0;
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__48199__auto____1;
return taoensso$sente$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___61154,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__48314__auto__ = (function (){var statearr_60844 = f__48313__auto__.call(null);
(statearr_60844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___61154);

return statearr_60844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___61154,ws_timeout_61149,ajax_timeout_61150,uid_61063,__61064,__61065__$1,__61066__$2,ev_uuid_61067,flush_buffer_BANG__61068,vec__60775,map__60778,map__60778__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}
}

return null;
};
var G__61062 = function (user_id,ev,var_args){
var p__60774 = null;
if (arguments.length > 2) {
var G__61157__i = 0, G__61157__a = new Array(arguments.length -  2);
while (G__61157__i < G__61157__a.length) {G__61157__a[G__61157__i] = arguments[G__61157__i + 2]; ++G__61157__i;}
  p__60774 = new cljs.core.IndexedSeq(G__61157__a,0);
} 
return G__61062__delegate.call(this,user_id,ev,p__60774);};
G__61062.cljs$lang$maxFixedArity = 2;
G__61062.cljs$lang$applyTo = (function (arglist__61158){
var user_id = cljs.core.first(arglist__61158);
arglist__61158 = cljs.core.next(arglist__61158);
var ev = cljs.core.first(arglist__61158);
var p__60774 = cljs.core.rest(arglist__61158);
return G__61062__delegate(user_id,ev,p__60774);
});
G__61062.cljs$core$IFn$_invoke$arity$variadic = G__61062__delegate;
return G__61062;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not.call(null,websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__60845 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__60845,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__60845,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.call(null,false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (resp_clj){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,replied_QMARK__,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",495,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,3111015);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__6753__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__6753__auto__)){
var ms = temp__6753__auto__;
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,ms,temp__6753__auto__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,ms,temp__6753__auto__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_60853){
var state_val_60854 = (state_60853[(1)]);
if((state_val_60854 === (1))){
var inst_60848 = cljs.core.async.timeout.call(null,ms);
var state_60853__$1 = state_60853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60853__$1,(2),inst_60848);
} else {
if((state_val_60854 === (2))){
var inst_60850 = (state_60853[(2)]);
var inst_60851 = reply_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_60853__$1 = (function (){var statearr_60855 = state_60853;
(statearr_60855[(7)] = inst_60850);

return statearr_60855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60853__$1,inst_60851);
} else {
return null;
}
}
});})(c__48312__auto__,ms,temp__6753__auto__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__48198__auto__,c__48312__auto__,ms,temp__6753__auto__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__48199__auto__ = null;
var taoensso$sente$state_machine__48199__auto____0 = (function (){
var statearr_60859 = [null,null,null,null,null,null,null,null];
(statearr_60859[(0)] = taoensso$sente$state_machine__48199__auto__);

(statearr_60859[(1)] = (1));

return statearr_60859;
});
var taoensso$sente$state_machine__48199__auto____1 = (function (state_60853){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_60853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e60860){if((e60860 instanceof Object)){
var ex__48202__auto__ = e60860;
var statearr_60861_61159 = state_60853;
(statearr_60861_61159[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61160 = state_60853;
state_60853 = G__61160;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$state_machine__48199__auto__ = function(state_60853){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__48199__auto____1.call(this,state_60853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__48199__auto____0;
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__48199__auto____1;
return taoensso$sente$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,ms,temp__6753__auto__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__48314__auto__ = (function (){var statearr_60862 = f__48313__auto__.call(null);
(statearr_60862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_60862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,ms,temp__6753__auto__,params,ppstr,client_id,vec__60845,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__48312__auto__;
} else {
return null;
}
} else {
return reply_fn.call(null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.call(null,(6));
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var csrf_token = csrf_token_fn.call(null,ring_req);
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.call(null,event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,csrf_token,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",540,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-771757385);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",551,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": %s")].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-614180733);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",560,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,2137333040);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);

var temp__6753__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__6753__auto__)){
var ms = temp__6753__auto__;
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_60898){
var state_val_60899 = (state_60898[(1)]);
if((state_val_60899 === (7))){
var inst_60894 = (state_60898[(2)]);
var state_60898__$1 = state_60898;
var statearr_60900_61161 = state_60898__$1;
(statearr_60900_61161[(2)] = inst_60894);

(statearr_60900_61161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (1))){
var inst_60863 = udt_open;
var state_60898__$1 = (function (){var statearr_60901 = state_60898;
(statearr_60901[(7)] = inst_60863);

return statearr_60901;
})();
var statearr_60902_61162 = state_60898__$1;
(statearr_60902_61162[(2)] = null);

(statearr_60902_61162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (4))){
var inst_60872 = (state_60898[(8)]);
var inst_60867 = (state_60898[(2)]);
var inst_60868 = cljs.core.deref.call(null,conns_);
var inst_60869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60870 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_60871 = (new cljs.core.PersistentVector(null,3,(5),inst_60869,inst_60870,null));
var inst_60872__$1 = cljs.core.get_in.call(null,inst_60868,inst_60871);
var state_60898__$1 = (function (){var statearr_60903 = state_60898;
(statearr_60903[(8)] = inst_60872__$1);

(statearr_60903[(9)] = inst_60867);

return statearr_60903;
})();
if(cljs.core.truth_(inst_60872__$1)){
var statearr_60904_61163 = state_60898__$1;
(statearr_60904_61163[(1)] = (5));

} else {
var statearr_60905_61164 = state_60898__$1;
(statearr_60905_61164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (13))){
var inst_60878 = (state_60898[(10)]);
var inst_60887 = (state_60898[(2)]);
var inst_60863 = inst_60878;
var state_60898__$1 = (function (){var statearr_60906 = state_60898;
(statearr_60906[(7)] = inst_60863);

(statearr_60906[(11)] = inst_60887);

return statearr_60906;
})();
var statearr_60907_61165 = state_60898__$1;
(statearr_60907_61165[(2)] = null);

(statearr_60907_61165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (6))){
var state_60898__$1 = state_60898;
var statearr_60908_61166 = state_60898__$1;
(statearr_60908_61166[(2)] = null);

(statearr_60908_61166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (3))){
var inst_60896 = (state_60898[(2)]);
var state_60898__$1 = state_60898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60898__$1,inst_60896);
} else {
if((state_val_60899 === (12))){
var state_60898__$1 = state_60898;
var statearr_60909_61167 = state_60898__$1;
(statearr_60909_61167[(2)] = null);

(statearr_60909_61167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (2))){
var inst_60865 = cljs.core.async.timeout.call(null,ms);
var state_60898__$1 = state_60898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60898__$1,(4),inst_60865);
} else {
if((state_val_60899 === (11))){
var inst_60883 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_60884 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_60883);
var state_60898__$1 = state_60898;
var statearr_60910_61168 = state_60898__$1;
(statearr_60910_61168[(2)] = inst_60884);

(statearr_60910_61168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (9))){
var state_60898__$1 = state_60898;
var statearr_60911_61169 = state_60898__$1;
(statearr_60911_61169[(2)] = null);

(statearr_60911_61169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (5))){
var inst_60872 = (state_60898[(8)]);
var inst_60877 = cljs.core.nth.call(null,inst_60872,(0),null);
var inst_60878 = cljs.core.nth.call(null,inst_60872,(1),null);
var inst_60879 = taoensso.sente.interfaces.sch_open_QMARK_.call(null,server_ch);
var state_60898__$1 = (function (){var statearr_60912 = state_60898;
(statearr_60912[(10)] = inst_60878);

(statearr_60912[(12)] = inst_60877);

return statearr_60912;
})();
if(cljs.core.truth_(inst_60879)){
var statearr_60913_61170 = state_60898__$1;
(statearr_60913_61170[(1)] = (8));

} else {
var statearr_60914_61171 = state_60898__$1;
(statearr_60914_61171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (10))){
var inst_60891 = (state_60898[(2)]);
var state_60898__$1 = state_60898;
var statearr_60915_61172 = state_60898__$1;
(statearr_60915_61172[(2)] = inst_60891);

(statearr_60915_61172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60899 === (8))){
var inst_60878 = (state_60898[(10)]);
var inst_60863 = (state_60898[(7)]);
var inst_60881 = cljs.core._EQ_.call(null,inst_60878,inst_60863);
var state_60898__$1 = state_60898;
if(inst_60881){
var statearr_60916_61173 = state_60898__$1;
(statearr_60916_61173[(1)] = (11));

} else {
var statearr_60917_61174 = state_60898__$1;
(statearr_60917_61174[(1)] = (12));

}

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
});})(c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__48198__auto__,c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__48199__auto__ = null;
var taoensso$sente$state_machine__48199__auto____0 = (function (){
var statearr_60921 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60921[(0)] = taoensso$sente$state_machine__48199__auto__);

(statearr_60921[(1)] = (1));

return statearr_60921;
});
var taoensso$sente$state_machine__48199__auto____1 = (function (state_60898){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_60898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e60922){if((e60922 instanceof Object)){
var ex__48202__auto__ = e60922;
var statearr_60923_61175 = state_60898;
(statearr_60923_61175[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61176 = state_60898;
state_60898 = G__61176;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$state_machine__48199__auto__ = function(state_60898){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__48199__auto____1.call(this,state_60898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__48199__auto____0;
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__48199__auto____1;
return taoensso$sente$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__48314__auto__ = (function (){var statearr_60924 = f__48313__auto__.call(null);
(statearr_60924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_60924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__48312__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",588,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1439906633);
var updated_conn = upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__34555__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_.call(null,server_ch,websocket_QMARK_);
} else {
var temp__6753__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__6753__auto__)){
var ms = temp__6753__auto__;
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_60950){
var state_val_60951 = (state_60950[(1)]);
if((state_val_60951 === (1))){
var inst_60925 = cljs.core.async.timeout.call(null,ms);
var state_60950__$1 = state_60950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60950__$1,(2),inst_60925);
} else {
if((state_val_60951 === (2))){
var inst_60932 = (state_60950[(7)]);
var inst_60927 = (state_60950[(2)]);
var inst_60928 = cljs.core.deref.call(null,conns_);
var inst_60929 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60930 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_60931 = (new cljs.core.PersistentVector(null,3,(5),inst_60929,inst_60930,null));
var inst_60932__$1 = cljs.core.get_in.call(null,inst_60928,inst_60931);
var state_60950__$1 = (function (){var statearr_60952 = state_60950;
(statearr_60952[(8)] = inst_60927);

(statearr_60952[(7)] = inst_60932__$1);

return statearr_60952;
})();
if(cljs.core.truth_(inst_60932__$1)){
var statearr_60953_61177 = state_60950__$1;
(statearr_60953_61177[(1)] = (3));

} else {
var statearr_60954_61178 = state_60950__$1;
(statearr_60954_61178[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (3))){
var inst_60932 = (state_60950[(7)]);
var inst_60937 = cljs.core.nth.call(null,inst_60932,(0),null);
var inst_60938 = cljs.core.nth.call(null,inst_60932,(1),null);
var inst_60939 = cljs.core._EQ_.call(null,inst_60938,udt_open);
var state_60950__$1 = (function (){var statearr_60955 = state_60950;
(statearr_60955[(9)] = inst_60937);

return statearr_60955;
})();
if(inst_60939){
var statearr_60956_61179 = state_60950__$1;
(statearr_60956_61179[(1)] = (6));

} else {
var statearr_60957_61180 = state_60950__$1;
(statearr_60957_61180[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (4))){
var state_60950__$1 = state_60950;
var statearr_60958_61181 = state_60950__$1;
(statearr_60958_61181[(2)] = null);

(statearr_60958_61181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (5))){
var inst_60948 = (state_60950[(2)]);
var state_60950__$1 = state_60950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60950__$1,inst_60948);
} else {
if((state_val_60951 === (6))){
var inst_60941 = taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_60942 = taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,inst_60941);
var state_60950__$1 = state_60950;
var statearr_60959_61182 = state_60950__$1;
(statearr_60959_61182[(2)] = inst_60942);

(statearr_60959_61182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (7))){
var state_60950__$1 = state_60950;
var statearr_60960_61183 = state_60950__$1;
(statearr_60960_61183[(2)] = null);

(statearr_60960_61183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60951 === (8))){
var inst_60945 = (state_60950[(2)]);
var state_60950__$1 = state_60950;
var statearr_60961_61184 = state_60950__$1;
(statearr_60961_61184[(2)] = inst_60945);

(statearr_60961_61184[(1)] = (5));


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
});})(c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__48198__auto__,c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__48199__auto__ = null;
var taoensso$sente$state_machine__48199__auto____0 = (function (){
var statearr_60965 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60965[(0)] = taoensso$sente$state_machine__48199__auto__);

(statearr_60965[(1)] = (1));

return statearr_60965;
});
var taoensso$sente$state_machine__48199__auto____1 = (function (state_60950){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_60950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e60966){if((e60966 instanceof Object)){
var ex__48202__auto__ = e60966;
var statearr_60967_61185 = state_60950;
(statearr_60967_61185[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61186 = state_60950;
state_60950 = G__61186;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$state_machine__48199__auto__ = function(state_60950){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__48199__auto____1.call(this,state_60950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__48199__auto____0;
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__48199__auto____1;
return taoensso$sente$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__48314__auto__ = (function (){var statearr_60968 = f__48313__auto__.call(null);
(statearr_60968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_60968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,ms,temp__6753__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__48312__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__60969 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__60969,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__60969,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__60969,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",618,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__60969,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__60969,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1171541266);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,websocket_QMARK_,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__60969,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",627,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,-1941164380);
var updated_conn = upd_conn_BANG_.call(null,conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_61023){
var state_val_61024 = (state_61023[(1)]);
if((state_val_61024 === (7))){
var state_61023__$1 = state_61023;
var statearr_61025_61187 = state_61023__$1;
(statearr_61025_61187[(2)] = null);

(statearr_61025_61187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (1))){
var inst_60972 = cljs.core.async.timeout.call(null,(5000));
var state_61023__$1 = state_61023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61023__$1,(2),inst_60972);
} else {
if((state_val_61024 === (4))){
var state_61023__$1 = state_61023;
var statearr_61026_61188 = state_61023__$1;
(statearr_61026_61188[(2)] = null);

(statearr_61026_61188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (13))){
var state_61023__$1 = state_61023;
var statearr_61027_61189 = state_61023__$1;
(statearr_61027_61189[(2)] = null);

(statearr_61027_61189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (6))){
var inst_60982 = (state_61023[(7)]);
var inst_61000 = (state_61023[(8)]);
var inst_60983 = (state_61023[(9)]);
var inst_60984 = (state_61023[(10)]);
var inst_60995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60996 = [conn_type,uid,client_id];
var inst_60997 = (new cljs.core.PersistentVector(null,3,(5),inst_60995,inst_60996,null));
var inst_60999 = (function (){var vec__60975 = inst_60982;
var __QMARK_sch = inst_60983;
var udt_t1 = inst_60984;
return ((function (vec__60975,__QMARK_sch,udt_t1,inst_60982,inst_61000,inst_60983,inst_60984,inst_60995,inst_60996,inst_60997,state_val_61024,c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__60998){
var vec__61028 = p__60998;
var _sch = cljs.core.nth.call(null,vec__61028,(0),null);
var udt_t1__$1 = cljs.core.nth.call(null,vec__61028,(1),null);
if(cljs.core._EQ_.call(null,udt_t1__$1,udt_close)){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped.call(null,udt_t1__$1,false);
}
});
;})(vec__60975,__QMARK_sch,udt_t1,inst_60982,inst_61000,inst_60983,inst_60984,inst_60995,inst_60996,inst_60997,state_val_61024,c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_61000__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_60997,inst_60999);
var state_61023__$1 = (function (){var statearr_61031 = state_61023;
(statearr_61031[(8)] = inst_61000__$1);

return statearr_61031;
})();
if(cljs.core.truth_(inst_61000__$1)){
var statearr_61032_61190 = state_61023__$1;
(statearr_61032_61190[(1)] = (9));

} else {
var statearr_61033_61191 = state_61023__$1;
(statearr_61033_61191[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (3))){
var inst_60982 = (state_61023[(7)]);
var inst_60983 = (state_61023[(9)]);
var inst_60984 = (state_61023[(10)]);
var inst_60987 = (function (){var vec__60975 = inst_60982;
var __QMARK_sch = inst_60983;
var udt_t1 = inst_60984;
return ((function (vec__60975,__QMARK_sch,udt_t1,inst_60982,inst_60983,inst_60984,state_val_61024,c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.call(null,udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__60975,__QMARK_sch,udt_t1,inst_60982,inst_60983,inst_60984,state_val_61024,c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_60988 = (new cljs.core.Delay(inst_60987,null));
var inst_60989 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",641,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_60988,null,321897077);
var state_61023__$1 = state_61023;
var statearr_61034_61192 = state_61023__$1;
(statearr_61034_61192[(2)] = inst_60989);

(statearr_61034_61192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (12))){
var inst_61009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61010 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_61011 = (new cljs.core.PersistentVector(null,2,(5),inst_61009,inst_61010,null));
var inst_61012 = receive_event_msg_BANG_.call(null,inst_61011);
var state_61023__$1 = state_61023;
var statearr_61035_61193 = state_61023__$1;
(statearr_61035_61193[(2)] = inst_61012);

(statearr_61035_61193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (2))){
var inst_60982 = (state_61023[(7)]);
var inst_60974 = (state_61023[(2)]);
var inst_60978 = cljs.core.deref.call(null,conns_);
var inst_60979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60980 = [conn_type,uid,client_id];
var inst_60981 = (new cljs.core.PersistentVector(null,3,(5),inst_60979,inst_60980,null));
var inst_60982__$1 = cljs.core.get_in.call(null,inst_60978,inst_60981);
var inst_60983 = cljs.core.nth.call(null,inst_60982__$1,(0),null);
var inst_60984 = cljs.core.nth.call(null,inst_60982__$1,(1),null);
var inst_60985 = cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__);
var state_61023__$1 = (function (){var statearr_61036 = state_61023;
(statearr_61036[(7)] = inst_60982__$1);

(statearr_61036[(11)] = inst_60974);

(statearr_61036[(9)] = inst_60983);

(statearr_61036[(10)] = inst_60984);

return statearr_61036;
})();
if(cljs.core.truth_(inst_60985)){
var statearr_61037_61194 = state_61023__$1;
(statearr_61037_61194[(1)] = (3));

} else {
var statearr_61038_61195 = state_61023__$1;
(statearr_61038_61195[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (11))){
var inst_61018 = (state_61023[(2)]);
var state_61023__$1 = state_61023;
var statearr_61039_61196 = state_61023__$1;
(statearr_61039_61196[(2)] = inst_61018);

(statearr_61039_61196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (9))){
var inst_60982 = (state_61023[(7)]);
var inst_61000 = (state_61023[(8)]);
var inst_60983 = (state_61023[(9)]);
var inst_60984 = (state_61023[(10)]);
var inst_61002 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61003 = [conn_type,uid];
var inst_61004 = (new cljs.core.PersistentVector(null,2,(5),inst_61002,inst_61003,null));
var inst_61005 = (function (){var vec__60975 = inst_60982;
var __QMARK_sch = inst_60983;
var udt_t1 = inst_60984;
var disconnect_QMARK_ = inst_61000;
return ((function (vec__60975,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_60982,inst_61000,inst_60983,inst_60984,inst_61002,inst_61003,inst_61004,state_val_61024,c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_.call(null,_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__60975,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_60982,inst_61000,inst_60983,inst_60984,inst_61002,inst_61003,inst_61004,state_val_61024,c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_61006 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_61004,inst_61005);
var inst_61007 = upd_connected_uid_BANG_.call(null,uid);
var state_61023__$1 = (function (){var statearr_61040 = state_61023;
(statearr_61040[(12)] = inst_61006);

return statearr_61040;
})();
if(cljs.core.truth_(inst_61007)){
var statearr_61041_61197 = state_61023__$1;
(statearr_61041_61197[(1)] = (12));

} else {
var statearr_61042_61198 = state_61023__$1;
(statearr_61042_61198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (5))){
var inst_60984 = (state_61023[(10)]);
var inst_60992 = (state_61023[(2)]);
var inst_60993 = cljs.core._EQ_.call(null,inst_60984,udt_close);
var state_61023__$1 = (function (){var statearr_61043 = state_61023;
(statearr_61043[(13)] = inst_60992);

return statearr_61043;
})();
if(inst_60993){
var statearr_61044_61199 = state_61023__$1;
(statearr_61044_61199[(1)] = (6));

} else {
var statearr_61045_61200 = state_61023__$1;
(statearr_61045_61200[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (14))){
var inst_61015 = (state_61023[(2)]);
var state_61023__$1 = state_61023;
var statearr_61046_61201 = state_61023__$1;
(statearr_61046_61201[(2)] = inst_61015);

(statearr_61046_61201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (10))){
var state_61023__$1 = state_61023;
var statearr_61047_61202 = state_61023__$1;
(statearr_61047_61202[(2)] = null);

(statearr_61047_61202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61024 === (8))){
var inst_61021 = (state_61023[(2)]);
var state_61023__$1 = state_61023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61023__$1,inst_61021);
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
});})(c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__48198__auto__,c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__48199__auto__ = null;
var taoensso$sente$state_machine__48199__auto____0 = (function (){
var statearr_61051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61051[(0)] = taoensso$sente$state_machine__48199__auto__);

(statearr_61051[(1)] = (1));

return statearr_61051;
});
var taoensso$sente$state_machine__48199__auto____1 = (function (state_61023){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_61023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e61052){if((e61052 instanceof Object)){
var ex__48202__auto__ = e61052;
var statearr_61053_61203 = state_61023;
(statearr_61053_61203[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61204 = state_61023;
state_61023 = G__61204;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$state_machine__48199__auto__ = function(state_61023){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__48199__auto____1.call(this,state_61023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__48199__auto____0;
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__48199__auto____1;
return taoensso$sente$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__48314__auto__ = (function (){var statearr_61054 = f__48313__auto__.call(null);
(statearr_61054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_61054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__48312__auto__;
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",663,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null,1300371052);
});})(sch_uuid,params,client_id,csrf_token,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__60753,map__60756,map__60756__$1,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq60750){
var G__60751 = cljs.core.first.call(null,seq60750);
var seq60750__$1 = cljs.core.next.call(null,seq60750);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60751,seq60750__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",669,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,932728911);

var seq__61221 = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__61222 = null;
var count__61223 = (0);
var i__61224 = (0);
while(true){
if((i__61224 < count__61223)){
var vec__61225 = cljs.core._nth.call(null,chunk__61222,i__61224);
var client_id = cljs.core.nth.call(null,vec__61225,(0),null);
var vec__61228 = cljs.core.nth.call(null,vec__61225,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__61228,(0),null);
var _udt = cljs.core.nth.call(null,vec__61228,(1),null);
var temp__6753__auto___61237 = _QMARK_sch;
if(cljs.core.truth_(temp__6753__auto___61237)){
var sch_61238 = temp__6753__auto___61237;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_61238,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__61239 = seq__61221;
var G__61240 = chunk__61222;
var G__61241 = count__61223;
var G__61242 = (i__61224 + (1));
seq__61221 = G__61239;
chunk__61222 = G__61240;
count__61223 = G__61241;
i__61224 = G__61242;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__61221);
if(temp__6753__auto__){
var seq__61221__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61221__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__61221__$1);
var G__61243 = cljs.core.chunk_rest.call(null,seq__61221__$1);
var G__61244 = c__35466__auto__;
var G__61245 = cljs.core.count.call(null,c__35466__auto__);
var G__61246 = (0);
seq__61221 = G__61243;
chunk__61222 = G__61244;
count__61223 = G__61245;
i__61224 = G__61246;
continue;
} else {
var vec__61231 = cljs.core.first.call(null,seq__61221__$1);
var client_id = cljs.core.nth.call(null,vec__61231,(0),null);
var vec__61234 = cljs.core.nth.call(null,vec__61231,(1),null);
var _QMARK_sch = cljs.core.nth.call(null,vec__61234,(0),null);
var _udt = cljs.core.nth.call(null,vec__61234,(1),null);
var temp__6753__auto___61247__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__6753__auto___61247__$1)){
var sch_61248 = temp__6753__auto___61247__$1;
upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

taoensso.sente.interfaces.sch_send_BANG_.call(null,sch_61248,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}

var G__61249 = cljs.core.next.call(null,seq__61221__$1);
var G__61250 = null;
var G__61251 = (0);
var G__61252 = (0);
seq__61221 = G__61249;
chunk__61222 = G__61250;
count__61223 = G__61251;
i__61224 = G__61252;
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
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",679,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1693872387);

var nmax_attempts = (7);
var ms_base = (90);
var ms_rand = (90);
var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (state_61383){
var state_val_61384 = (state_61383[(1)]);
if((state_val_61384 === (7))){
var inst_61345 = (state_61383[(7)]);
var inst_61339 = (state_61383[(8)]);
var inst_61338 = (state_61383[(9)]);
var inst_61355 = (function (){var n = inst_61338;
var client_ids_satisfied = inst_61339;
var _QMARK_pulled = inst_61345;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_61345,inst_61339,inst_61338,state_val_61384,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (s,client_id,p__61354){
var vec__61385 = p__61354;
var _QMARK_sch = cljs.core.nth.call(null,vec__61385,(0),null);
var _udt = cljs.core.nth.call(null,vec__61385,(1),null);
var sent_QMARK_ = (function (){var temp__6753__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__6753__auto__)){
var sch = temp__6753__auto__;
return taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_sch,cljs.core.not.call(null,new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.call(null,s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_61345,inst_61339,inst_61338,state_val_61384,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_61356 = cljs.core.PersistentHashSet.EMPTY;
var inst_61357 = cljs.core.reduce_kv.call(null,inst_61355,inst_61356,inst_61345);
var state_61383__$1 = state_61383;
var statearr_61388_61421 = state_61383__$1;
(statearr_61388_61421[(2)] = inst_61357);

(statearr_61388_61421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (1))){
var inst_61337 = cljs.core.PersistentHashSet.EMPTY;
var inst_61338 = (0);
var inst_61339 = inst_61337;
var state_61383__$1 = (function (){var statearr_61389 = state_61383;
(statearr_61389[(8)] = inst_61339);

(statearr_61389[(9)] = inst_61338);

return statearr_61389;
})();
var statearr_61390_61422 = state_61383__$1;
(statearr_61390_61422[(2)] = null);

(statearr_61390_61422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (4))){
var state_61383__$1 = state_61383;
var statearr_61391_61423 = state_61383__$1;
(statearr_61391_61423[(2)] = true);

(statearr_61391_61423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (15))){
var inst_61379 = (state_61383[(2)]);
var state_61383__$1 = state_61383;
var statearr_61392_61424 = state_61383__$1;
(statearr_61392_61424[(2)] = inst_61379);

(statearr_61392_61424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (13))){
var inst_61370 = cljs.core.rand_int.call(null,ms_rand);
var inst_61371 = (ms_base + inst_61370);
var inst_61372 = cljs.core.async.timeout.call(null,inst_61371);
var state_61383__$1 = state_61383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61383__$1,(16),inst_61372);
} else {
if((state_val_61384 === (6))){
var inst_61345 = (state_61383[(7)]);
var inst_61352 = (state_61383[(2)]);
var state_61383__$1 = (function (){var statearr_61393 = state_61383;
(statearr_61393[(10)] = inst_61352);

return statearr_61393;
})();
if(cljs.core.truth_(inst_61345)){
var statearr_61394_61425 = state_61383__$1;
(statearr_61394_61425[(1)] = (7));

} else {
var statearr_61395_61426 = state_61383__$1;
(statearr_61395_61426[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (3))){
var inst_61381 = (state_61383[(2)]);
var state_61383__$1 = state_61383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61383__$1,inst_61381);
} else {
if((state_val_61384 === (12))){
var inst_61368 = (state_61383[(2)]);
var state_61383__$1 = state_61383;
if(cljs.core.truth_(inst_61368)){
var statearr_61396_61427 = state_61383__$1;
(statearr_61396_61427[(1)] = (13));

} else {
var statearr_61397_61428 = state_61383__$1;
(statearr_61397_61428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (2))){
var inst_61345 = (state_61383[(7)]);
var inst_61339 = (state_61383[(8)]);
var inst_61338 = (state_61383[(9)]);
var inst_61341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61342 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_61343 = (new cljs.core.PersistentVector(null,2,(5),inst_61341,inst_61342,null));
var inst_61344 = (function (){var n = inst_61338;
var client_ids_satisfied = inst_61339;
return ((function (n,client_ids_satisfied,inst_61345,inst_61339,inst_61338,inst_61341,inst_61342,inst_61343,state_val_61384,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_61345,inst_61339,inst_61338,inst_61341,inst_61342,inst_61343,state_val_61384,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__61398 = cljs.core.get.call(null,m__$1,k);
var _QMARK_sch = cljs.core.nth.call(null,vec__61398,(0),null);
var udt = cljs.core.nth.call(null,vec__61398,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_61345,inst_61339,inst_61338,inst_61341,inst_61342,inst_61343,state_val_61384,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_61345,inst_61339,inst_61338,inst_61341,inst_61342,inst_61343,state_val_61384,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_61345__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_61343,inst_61344);
var inst_61346 = (function (){var n = inst_61338;
var client_ids_satisfied = inst_61339;
var _QMARK_pulled = inst_61345__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_61345,inst_61339,inst_61338,inst_61341,inst_61342,inst_61343,inst_61344,inst_61345__$1,state_val_61384,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function (x){
var or__34555__auto__ = (x == null);
if(or__34555__auto__){
return or__34555__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_61345,inst_61339,inst_61338,inst_61341,inst_61342,inst_61343,inst_61344,inst_61345__$1,state_val_61384,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var inst_61347 = inst_61346.call(null,inst_61345__$1);
var state_61383__$1 = (function (){var statearr_61401 = state_61383;
(statearr_61401[(7)] = inst_61345__$1);

return statearr_61401;
})();
if(cljs.core.truth_(inst_61347)){
var statearr_61402_61429 = state_61383__$1;
(statearr_61402_61429[(1)] = (4));

} else {
var statearr_61403_61430 = state_61383__$1;
(statearr_61403_61430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (11))){
var inst_61362 = (state_61383[(11)]);
var state_61383__$1 = state_61383;
var statearr_61404_61431 = state_61383__$1;
(statearr_61404_61431[(2)] = inst_61362);

(statearr_61404_61431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (9))){
var inst_61362 = (state_61383[(11)]);
var inst_61339 = (state_61383[(8)]);
var inst_61338 = (state_61383[(9)]);
var inst_61360 = (state_61383[(2)]);
var inst_61361 = cljs.core.into.call(null,inst_61339,inst_61360);
var inst_61362__$1 = (inst_61338 < nmax_attempts);
var state_61383__$1 = (function (){var statearr_61405 = state_61383;
(statearr_61405[(11)] = inst_61362__$1);

(statearr_61405[(12)] = inst_61361);

return statearr_61405;
})();
if(cljs.core.truth_(inst_61362__$1)){
var statearr_61406_61432 = state_61383__$1;
(statearr_61406_61432[(1)] = (10));

} else {
var statearr_61407_61433 = state_61383__$1;
(statearr_61407_61433[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (5))){
var inst_61345 = (state_61383[(7)]);
var inst_61350 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",710,"([:or nil? map?] ?pulled)",inst_61345,null,null);
var state_61383__$1 = state_61383;
var statearr_61408_61434 = state_61383__$1;
(statearr_61408_61434[(2)] = inst_61350);

(statearr_61408_61434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (14))){
var state_61383__$1 = state_61383;
var statearr_61409_61435 = state_61383__$1;
(statearr_61409_61435[(2)] = null);

(statearr_61409_61435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (16))){
var inst_61361 = (state_61383[(12)]);
var inst_61338 = (state_61383[(9)]);
var inst_61374 = (state_61383[(2)]);
var inst_61375 = (inst_61338 + (1));
var inst_61338__$1 = inst_61375;
var inst_61339 = inst_61361;
var state_61383__$1 = (function (){var statearr_61410 = state_61383;
(statearr_61410[(8)] = inst_61339);

(statearr_61410[(13)] = inst_61374);

(statearr_61410[(9)] = inst_61338__$1);

return statearr_61410;
})();
var statearr_61411_61436 = state_61383__$1;
(statearr_61411_61436[(2)] = null);

(statearr_61411_61436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (10))){
var inst_61361 = (state_61383[(12)]);
var inst_61364 = cljs.core.complement.call(null,inst_61361);
var inst_61365 = cljs.core.some.call(null,inst_61364,client_ids_unsatisfied);
var state_61383__$1 = state_61383;
var statearr_61412_61437 = state_61383__$1;
(statearr_61412_61437[(2)] = inst_61365);

(statearr_61412_61437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61384 === (8))){
var state_61383__$1 = state_61383;
var statearr_61413_61438 = state_61383__$1;
(statearr_61413_61438[(2)] = null);

(statearr_61413_61438[(1)] = (9));


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
});})(c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
;
return ((function (switch__48198__auto__,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto____0 = (function (){
var statearr_61417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61417[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto__);

(statearr_61417[(1)] = (1));

return statearr_61417;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto____1 = (function (state_61383){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_61383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e61418){if((e61418 instanceof Object)){
var ex__48202__auto__ = e61418;
var statearr_61419_61439 = state_61383;
(statearr_61419_61439[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61440 = state_61383;
state_61383 = G__61440;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto__ = function(state_61383){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto____1.call(this,state_61383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
})();
var state__48314__auto__ = (function (){var statearr_61420 = f__48313__auto__.call(null);
(statearr_61420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_61420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,nmax_attempts,ms_base,ms_rand,client_ids_unsatisfied))
);

return c__48312__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__35273__auto__ = (((chsk == null))?null:chsk);
var m__35274__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,chsk);
} else {
var m__35274__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reconn_QMARK_){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reconn_QMARK_);
} else {
var x__35273__auto__ = (((chsk == null))?null:chsk);
var m__35274__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,chsk,reconn_QMARK_);
} else {
var m__35274__auto____$1 = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,chsk,reconn_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__35273__auto__ = (((chsk == null))?null:chsk);
var m__35274__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,chsk);
} else {
var m__35274__auto____$1 = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__35273__auto__ = (((chsk == null))?null:chsk);
var m__35274__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,chsk,ev,opts);
} else {
var m__35274__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_.call(null,chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,false);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_.call(null,chsk,false);
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_.call(null,chsk);
});
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args61441 = [];
var len__35776__auto___61444 = arguments.length;
var i__35777__auto___61445 = (0);
while(true){
if((i__35777__auto___61445 < len__35776__auto___61444)){
args61441.push((arguments[i__35777__auto___61445]));

var G__61446 = (i__35777__auto___61445 + (1));
i__35777__auto___61445 = G__61446;
continue;
} else {
}
break;
}

var G__61443 = args61441.length;
switch (G__61443) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61441.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",759,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-2033112841);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",764,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,1388339130);

if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null))) || (taoensso.encore.nat_int_QMARK_.call(null,_QMARK_timeout_ms))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cb requires a timeout; timeout-ms should be a +ive integer: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))")].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("cb should be nil, an ifn, or a channel: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,_QMARK_cb))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__6753__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__6753__auto__)){
var cb_uuid = temp__6753__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__6753__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__6753__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__61448,merge_state){
var map__61454 = p__61448;
var map__61454__$1 = ((((!((map__61454 == null)))?((((map__61454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61454):map__61454);
var chsk = map__61454__$1;
var chs = cljs.core.get.call(null,map__61454__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__61454__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__61456 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__61454,map__61454__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var requested_reconnect_QMARK_ = (function (){var and__34543__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__34543__auto__)){
var and__34543__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__34543__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
})();
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(requested_reconnect_QMARK_)?cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true):cljs.core.dissoc.call(null,new_state__$1,new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666)));
return taoensso.encore.swapped.call(null,new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
});})(map__61454,map__61454__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__61456,(0),null);
var new_state = cljs.core.nth.call(null,vec__61456,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var e_61467 = (function (){try{if(taoensso.encore.chan_QMARK_.call(null,_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61463){if((e61463 instanceof Error)){
var e = e61463;
return e;
} else {
throw e61463;

}
}})();
if((e_61467 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",827,"(enc/chan? ?cb)",_QMARK_cb,e_61467,null);
}

taoensso.sente.assert_event.call(null,ev);

var vec__61464 = ev;
var ev_id = cljs.core.nth.call(null,vec__61464,(0),null);
var _ = cljs.core.nth.call(null,vec__61464,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__61464,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname.call(null,ev_id)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cb")].join('')),reply], null));
});
;})(vec__61464,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-2053934796);

var buffered_evs = ((cljs.core.vector_QMARK_.call(null,clj))?clj:taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",839,"(vector? clj)",clj,null,null));
var seq__61478 = cljs.core.seq.call(null,buffered_evs);
var chunk__61479 = null;
var count__61480 = (0);
var i__61481 = (0);
while(true){
if((i__61481 < count__61480)){
var ev = cljs.core._nth.call(null,chunk__61479,i__61481);
taoensso.sente.assert_event.call(null,ev);

var vec__61482_61488 = ev;
var id_61489 = cljs.core.nth.call(null,vec__61482_61488,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_61489),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__61490 = seq__61478;
var G__61491 = chunk__61479;
var G__61492 = count__61480;
var G__61493 = (i__61481 + (1));
seq__61478 = G__61490;
chunk__61479 = G__61491;
count__61480 = G__61492;
i__61481 = G__61493;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__61478);
if(temp__6753__auto__){
var seq__61478__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61478__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__61478__$1);
var G__61494 = cljs.core.chunk_rest.call(null,seq__61478__$1);
var G__61495 = c__35466__auto__;
var G__61496 = cljs.core.count.call(null,c__35466__auto__);
var G__61497 = (0);
seq__61478 = G__61494;
chunk__61479 = G__61495;
count__61480 = G__61496;
i__61481 = G__61497;
continue;
} else {
var ev = cljs.core.first.call(null,seq__61478__$1);
taoensso.sente.assert_event.call(null,ev);

var vec__61485_61498 = ev;
var id_61499 = cljs.core.nth.call(null,vec__61485_61498,(0),null);
if(cljs.core.not_EQ_.call(null,cljs.core.namespace.call(null,id_61499),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__61500 = cljs.core.next.call(null,seq__61478__$1);
var G__61501 = null;
var G__61502 = (0);
var G__61503 = (0);
seq__61478 = G__61500;
chunk__61479 = G__61501;
count__61480 = G__61502;
i__61481 = G__61503;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__34543__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__34543__auto__){
var vec__61513 = x;
var x1 = cljs.core.nth.call(null,vec__61513,(0),null);
return cljs.core._EQ_.call(null,x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__34543__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_61536 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
}).call(null,chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61526){if((e61526 instanceof Error)){
var e = e61526;
return e;
} else {
throw e61526;

}
}})();
if((e_61536 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",853,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_61536,null);
}

var e_61537 = (function (){try{if(cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61527){if((e61527 instanceof Error)){
var e = e61527;
return e;
} else {
throw e61527;

}
}})();
if((e_61537 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",854,"(handshake? clj)",clj,e_61537,null);
}

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",855,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1151359243);

var vec__61528 = clj;
var _ = cljs.core.nth.call(null,vec__61528,(0),null);
var vec__61531 = cljs.core.nth.call(null,vec__61528,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__61531,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__61531,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__61531,(2),null);
var map__61534 = chsk;
var map__61534__$1 = ((((!((map__61534 == null)))?((((map__61534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61534):map__61534);
var chs = cljs.core.get.call(null,map__61534__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.call(null,map__61534__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_.call(null,ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event.call(null,handshake_ev);

if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",874,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__61528,_,vec__61531,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__61534,map__61534__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__61528,_,vec__61531,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,map__61534,map__61534__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
,null)),null,1453429286);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new_state);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if((taoensso.sente.node_target_QMARK_) && (typeof require !== 'undefined')){
try{return require("websocket");
}catch (e61538){var e = e61538;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k61540,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__61542 = (((k61540 instanceof cljs.core.Keyword))?k61540.fqn:null);
switch (G__61542) {
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k61540,else__35233__auto__);

}
});


taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null))], null),self__.__extmap));
});


taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61539){
var self__ = this;
var G__61539__$1 = this;
return (new cljs.core.RecordIter((0),G__61539__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,self__.__hash));
});


taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});


taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__61539){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__61543 = cljs.core.keyword_identical_QMARK_;
var expr__61544 = k__35238__auto__;
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__61544))){
return (new taoensso.sente.ChWebSocket(G__61539,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__61539,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__61539,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__61539,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__61539,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__61539,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__61539,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,G__61539,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,G__61539,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,G__61539,self__.cbs_waiting_,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__61539,self__.socket_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61543.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__61544))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__61539,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__61539),null));
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
});


taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null))], null),self__.__extmap));
});


taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__61539){
var self__ = this;
var this__35229__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__61539,self__.__extmap,self__.__hash));
});


taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});


taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;


taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"_disable-auto-retry");

if(cljs.core.truth_(reconn_QMARK_)){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
}

var temp__6753__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__6753__auto__)){
var s = temp__6753__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});


taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});


taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__61546 = opts;
var map__61546__$1 = ((((!((map__61546 == null)))?((((map__61546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61546):map__61546);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__61546__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__61546__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__61546__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__6753__auto___61588 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__6753__auto___61588)){
var cb_uuid_61589 = temp__6753__auto___61588;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_61589], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61548){if((e61548 instanceof Error)){
var e = e61548;
return e;
} else {
throw e61548;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",945,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__6753__auto___61590__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__6753__auto___61590__$1)){
var timeout_ms_61591 = temp__6753__auto___61590__$1;
var c__48312__auto___61592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___61592,timeout_ms_61591,temp__6753__auto___61590__$1,cb_uuid_61589,temp__6753__auto___61588,_QMARK_cb_uuid,ppstr,map__61546,map__61546__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___61592,timeout_ms_61591,temp__6753__auto___61590__$1,cb_uuid_61589,temp__6753__auto___61588,_QMARK_cb_uuid,ppstr,map__61546,map__61546__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_61559){
var state_val_61560 = (state_61559[(1)]);
if((state_val_61560 === (1))){
var inst_61549 = cljs.core.async.timeout.call(null,timeout_ms_61591);
var state_61559__$1 = state_61559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61559__$1,(2),inst_61549);
} else {
if((state_val_61560 === (2))){
var inst_61552 = (state_61559[(7)]);
var inst_61551 = (state_61559[(2)]);
var inst_61552__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_61559__$1 = (function (){var statearr_61561 = state_61559;
(statearr_61561[(8)] = inst_61551);

(statearr_61561[(7)] = inst_61552__$1);

return statearr_61561;
})();
if(cljs.core.truth_(inst_61552__$1)){
var statearr_61562_61593 = state_61559__$1;
(statearr_61562_61593[(1)] = (3));

} else {
var statearr_61563_61594 = state_61559__$1;
(statearr_61563_61594[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61560 === (3))){
var inst_61552 = (state_61559[(7)]);
var inst_61554 = inst_61552.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_61559__$1 = state_61559;
var statearr_61564_61595 = state_61559__$1;
(statearr_61564_61595[(2)] = inst_61554);

(statearr_61564_61595[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61560 === (4))){
var state_61559__$1 = state_61559;
var statearr_61565_61596 = state_61559__$1;
(statearr_61565_61596[(2)] = null);

(statearr_61565_61596[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61560 === (5))){
var inst_61557 = (state_61559[(2)]);
var state_61559__$1 = state_61559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61559__$1,inst_61557);
} else {
return null;
}
}
}
}
}
});})(c__48312__auto___61592,timeout_ms_61591,temp__6753__auto___61590__$1,cb_uuid_61589,temp__6753__auto___61588,_QMARK_cb_uuid,ppstr,map__61546,map__61546__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__48198__auto__,c__48312__auto___61592,timeout_ms_61591,temp__6753__auto___61590__$1,cb_uuid_61589,temp__6753__auto___61588,_QMARK_cb_uuid,ppstr,map__61546,map__61546__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__48199__auto__ = null;
var taoensso$sente$state_machine__48199__auto____0 = (function (){
var statearr_61569 = [null,null,null,null,null,null,null,null,null];
(statearr_61569[(0)] = taoensso$sente$state_machine__48199__auto__);

(statearr_61569[(1)] = (1));

return statearr_61569;
});
var taoensso$sente$state_machine__48199__auto____1 = (function (state_61559){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_61559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e61570){if((e61570 instanceof Object)){
var ex__48202__auto__ = e61570;
var statearr_61571_61597 = state_61559;
(statearr_61571_61597[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61598 = state_61559;
state_61559 = G__61598;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$state_machine__48199__auto__ = function(state_61559){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__48199__auto____1.call(this,state_61559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__48199__auto____0;
taoensso$sente$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__48199__auto____1;
return taoensso$sente$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___61592,timeout_ms_61591,temp__6753__auto___61590__$1,cb_uuid_61589,temp__6753__auto___61588,_QMARK_cb_uuid,ppstr,map__61546,map__61546__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__48314__auto__ = (function (){var statearr_61572 = f__48313__auto__.call(null);
(statearr_61572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___61592);

return statearr_61572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___61592,timeout_ms_61591,temp__6753__auto___61590__$1,cb_uuid_61589,temp__6753__auto___61588,_QMARK_cb_uuid,ppstr,map__61546,map__61546__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e61573){var e = e61573;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",955,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__61546,map__61546__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__61546,map__61546__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1228046629);

var temp__6753__auto___61599 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__6753__auto___61599)){
var cb_uuid_61600 = temp__6753__auto___61599;
var cb_fn_STAR__61601 = (function (){var or__34555__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_61600);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_.call(null,_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61574){if((e61574 instanceof Error)){
var e__$1 = e61574;
return e__$1;
} else {
throw e61574;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",958,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
cb_fn_STAR__61601.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
}}
});


taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__6753__auto__ = (function (){var or__34555__auto__ = taoensso.encore.oget.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
var or__34555__auto____$1 = taoensso.encore.oget.call(null,goog.global,"MozWebSocket");
if(cljs.core.truth_(or__34555__auto____$1)){
return or__34555__auto____$1;
} else {
return taoensso.encore.oget.call(null,cljs.core.deref.call(null,taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var WebSocket = temp__6753__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",977,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__6753__auto__,chsk__$1))
,null)),null,474849875);

return goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__6753__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e61581){var e = e61581;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",988,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__6753__auto__,chsk__$1))
,null)),null,563484837);

return null;
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__61582 = _QMARK_socket;
(G__61582["onerror"] = ((function (G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",998,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.call(null,ws_ev);
}catch (e61583){var _ = e61583;
return ws_ev;
}})()], null);
});})(G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1))
,null)),null,-1139073103);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),taoensso.encore.uuid_str.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error], null));
});})(G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1))
);

(G__61582["onmessage"] = ((function (G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__61584 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__61584,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__61584,(1),null);
var or__34555__auto__ = (cljs.core.truth_(taoensso.sente.handshake_QMARK_.call(null,clj))?(function (){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
})()
:null);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
var or__34555__auto____$1 = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","ws-ping","debug/ws-ping",-168903566)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__34555__auto____$1)){
return or__34555__auto____$1;
} else {
var temp__6751__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__6751__auto__)){
var cb_uuid = temp__6751__auto__;
var temp__6751__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__6751__auto____$1)){
var cb_fn = temp__6751__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1037,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__6751__auto____$1,cb_uuid,temp__6751__auto__,or__34555__auto____$1,or__34555__auto__,ppstr,vec__61584,clj,_QMARK_cb_uuid,G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__6751__auto____$1,cb_uuid,temp__6751__auto__,or__34555__auto____$1,or__34555__auto__,ppstr,vec__61584,clj,_QMARK_cb_uuid,G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1))
,null)),null,756923532);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1))
);

(G__61582["onclose"] = ((function (G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.call(null,ws_ev,"wasClean");
var code = taoensso.encore.oget.call(null,ws_ev,"code");
var reason = taoensso.encore.oget.call(null,ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),taoensso.encore.uuid_str.call(null),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1065,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1))
,null)),null,-1391602303);

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close], null));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
}
});})(G__61582,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__6753__auto__,chsk__$1))
);

return G__61582;
})());
}
});})(retry_id,WebSocket,temp__6753__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,active_retry_id_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__61541){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__61541),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__61541),null,cljs.core.dissoc.call(null,G__61541,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908)),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts){
return taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),cljs.core.atom.call(null,"_pending"),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.call(null,(0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.call(null,null)], null),opts));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.call(null,new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.active_retry_id_ = active_retry_id_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k61603,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__61605 = (((k61603 instanceof cljs.core.Keyword))?k61603.fqn:null);
switch (G__61605) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k61603,else__35233__auto__);

}
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61602){
var self__ = this;
var G__61602__$1 = this;
return (new cljs.core.RecordIter((0),G__61602__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__61602){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__61606 = cljs.core.keyword_identical_QMARK_;
var expr__61607 = k__35238__auto__;
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(G__61602,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__61602,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__61602,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__61602,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__61602,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__61602,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__61602,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,G__61602,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,G__61602,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__61602,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61606.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__61607))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__61602,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__61602),null));
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
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__61602){
var self__ = this;
var this__35229__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.active_retry_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__61602,self__.__extmap,self__.__hash));
});


taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});


taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;


taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"_disable-auto-retry");

if(cljs.core.truth_(reconn_QMARK_)){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
}

var temp__6753__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__6753__auto__)){
var x = temp__6753__auto__;
return x.abort();
} else {
return null;
}
});


taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});


taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__61609 = opts;
var map__61609__$1 = ((((!((map__61609 == null)))?((((map__61609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61609):map__61609);
var _QMARK_timeout_ms = cljs.core.get.call(null,map__61609__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__61609__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__61609__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__34555__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
var or__34555__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__34555__auto____$1)){
return or__34555__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,map__61609,map__61609__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__61611){
var map__61617 = p__61611;
var map__61617__$1 = ((((!((map__61617 == null)))?((((map__61617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61617):map__61617);
var _QMARK_error = cljs.core.get.call(null,map__61617__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__61617__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__61619 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__61619,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__61619,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1166,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__61619,resp_clj,___$1,map__61617,map__61617__$1,_QMARK_error,_QMARK_content,csrf_token,map__61609,map__61609__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__61619,resp_clj,___$1,map__61617,map__61617__$1,_QMARK_error,_QMARK_content,csrf_token,map__61609,map__61609__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,324386499);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,map__61609,map__61609__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});


taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null,-1736984072);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1181,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null,-1216770550);

return goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__34555__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__61633){
var map__61639 = p__61633;
var map__61639__$1 = ((((!((map__61639 == null)))?((((map__61639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61639):map__61639);
var _QMARK_error = cljs.core.get.call(null,map__61639__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__61639__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__61641 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__61641,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_.call(null,clj);
if(cljs.core.truth_(handshake_QMARK_)){
taoensso.sente.receive_handshake_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));

taoensso$sente$poll_fn.call(null,(0));

if(cljs.core.truth_(handshake_QMARK_)){
return null;
} else {
var or__34555__auto__ = ((cljs.core._EQ_.call(null,clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref.call(null,taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,active_retry_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__61604){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__61604),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__61604),null,cljs.core.dissoc.call(null,G__61604,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts){
return taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),cljs.core.atom.call(null,"_pending"),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null)], null),opts));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k61646,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__61648 = (((k61646 instanceof cljs.core.Keyword))?k61646.fqn:null);
switch (G__61648) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k61646,else__35233__auto__);

}
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61645){
var self__ = this;
var G__61645__$1 = this;
return (new cljs.core.RecordIter((0),G__61645__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__61645){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__61649 = cljs.core.keyword_identical_QMARK_;
var expr__61650 = k__35238__auto__;
if(cljs.core.truth_(pred__61649.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__61650))){
return (new taoensso.sente.ChAutoSocket(G__61645,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61649.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__61650))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__61645,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61649.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__61650))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__61645,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61649.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__61650))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__61645,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__61645),null));
}
}
}
}
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__61645){
var self__ = this;
var this__35229__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__61645,self__.__extmap,self__.__hash));
});


taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});


taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;


taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reconn_QMARK_){
var self__ = this;
var chsk__$1 = this;
var temp__6753__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__6753__auto__)){
var impl = temp__6753__auto__;
return taoensso.sente._chsk_disconnect_BANG_.call(null,impl,reconn_QMARK_);
} else {
return null;
}
});


taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__6753__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__6753__auto__)){
var impl = temp__6753__auto__;
taoensso.sente._chsk_disconnect_BANG_.call(null,impl,new cljs.core.Keyword(null,"reconn","reconn",-807347633));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});


taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__6751__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__6751__auto__)){
var impl = temp__6751__auto__;
return taoensso.sente._chsk_send_BANG_.call(null,impl,ev,opts);
} else {
var map__61652 = opts;
var map__61652__$1 = ((((!((map__61652 == null)))?((((map__61652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61652):map__61652);
var _QMARK_cb = cljs.core.get.call(null,map__61652__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_.call(null,_QMARK_cb_fn);
}
});


taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.call(null,self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___61655 = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___61655,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__6753__auto__ = cljs.core.deref.call(null,self__.impl_);
if(cljs.core.truth_(temp__6753__auto__)){
var impl = temp__6753__auto__;
var temp__6753__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__6753__auto____$1)){
var ever_opened_QMARK__ = temp__6753__auto____$1;
if(cljs.core.truth_(cljs.core.deref.call(null,ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-error","last-error",1848699973).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,downgraded_QMARK___61655,false,true))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1304,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__6753__auto____$1,impl,temp__6753__auto__,downgraded_QMARK___61655,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__6753__auto____$1,impl,temp__6753__auto__,downgraded_QMARK___61655,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,1368316709);

taoensso.sente._chsk_disconnect_BANG_.call(null,impl,false);

return cljs.core.reset_BANG_.call(null,self__.impl_,ajax_conn_BANG_.call(null));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___61655,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts__$1));
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.impl_,(function (){var or__34555__auto__ = ws_conn_BANG_.call(null);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return ajax_conn_BANG_.call(null);
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"taoensso.sente/ChAutoSocket");
});

taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__61647){
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__61647),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__61647),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__61647),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__61647),null,cljs.core.dissoc.call(null,G__61647,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts){
return taoensso.sente.map__GT_ChAutoSocket.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.call(null,null)], null),opts));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__61660 = (((protocol instanceof cljs.core.Keyword))?protocol.fqn:null);
switch (G__61660) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if(((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
});})(protocol__$1))
.call(null,protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61661){if((e61661 instanceof Error)){
var e = e61661;
return e;
} else {
throw e61661;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1324,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__61662 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__61662) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__61663 = protocol__$2;
switch (G__61663) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$2)].join('')));

}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.call(null,host,path))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___61684 = arguments.length;
var i__35777__auto___61685 = (0);
while(true){
if((i__35777__auto___61685 < len__35776__auto___61684)){
args__35783__auto__.push((arguments[i__35777__auto___61685]));

var G__61686 = (i__35777__auto___61685 + (1));
i__35777__auto___61685 = G__61686;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__61669){
var vec__61670 = p__61669;
var map__61673 = cljs.core.nth.call(null,vec__61670,(0),null);
var map__61673__$1 = ((((!((map__61673 == null)))?((((map__61673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61673):map__61673);
var opts = map__61673__$1;
var ajax_opts = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var client_id = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__34555__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var protocol = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__61673__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__61670,(1),null);
var e_61687 = (function (){try{if(((function (vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
});})(vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61675){if((e61675 instanceof Error)){
var e = e61675;
return e;
} else {
throw e61675;

}
}})();
if((e_61687 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1363,"([:in #{:ws :ajax :auto}] type)",type,e_61687,null);
}

var e_61688 = (function (){try{if(taoensso.encore.nblank_str_QMARK_.call(null,client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e61676){if((e61676 instanceof Error)){
var e = e61676;
return e;
} else {
throw e61676;

}
}})();
if((e_61688 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",1364,"(enc/nblank-str? client-id)",client_id,e_61688,null);
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1366,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,6602209);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,372498081);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer.call(null,packer);
var vec__61677 = (function (){var win_loc = taoensso.encore.get_win_loc.call(null);
var path__$1 = (function (){var or__34555__auto__ = path;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__6751__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)),f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
} else {
var protocol__$1 = (function (){var or__34555__auto__ = protocol;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var host__$1 = (function (){var or__34555__auto__ = host;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url.call(null,protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.call(null,vec__61677,(0),null);
var ajax_url = cljs.core.nth.call(null,vec__61677,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer.call(null,(512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.call(null,buf,cljs.core.map.call(null,((function (buf,packer__$1,vec__61677,ws_url,ajax_url,vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__61677,ws_url,ajax_url,vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.call(null,buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1], null);
var ws_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var ajax_chsk_opts = cljs.core.merge.call(null,common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_.call(null,(function (){var G__61680 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__61680) {
case "ws":
return taoensso.sente.new_ChWebSocket.call(null,ws_chsk_opts);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket.call(null,ajax_chsk_opts);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket.call(null,auto_chsk_opts);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}
})());
var temp__6751__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__6751__auto__)){
var chsk = temp__6751__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__6751__auto__,packer__$1,vec__61677,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__61681 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__61681,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__61681,(1),null);
var ev__$1 = vec__61681;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__6751__auto__,packer__$1,vec__61677,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.call(null,ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1454,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__6751__auto__,packer__$1,vec__61677,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__6751__auto__,packer__$1,vec__61677,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__61670,map__61673,map__61673__$1,opts,ajax_opts,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-401882741);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq61667){
var G__61668 = cljs.core.first.call(null,seq61667);
var seq61667__$1 = cljs.core.next.call(null,seq61667);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61668,seq61667__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__61878 = opts;
var map__61878__$1 = ((((!((map__61878 == null)))?((((map__61878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61878):map__61878);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__61878__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__61878__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__48312__auto___62066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_61992){
var state_val_61993 = (state_61992[(1)]);
if((state_val_61993 === (7))){
var inst_61988 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_61994_62067 = state_61992__$1;
(statearr_61994_62067[(2)] = inst_61988);

(statearr_61994_62067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (20))){
var inst_61915 = (state_61992[(7)]);
var inst_61891 = (state_61992[(8)]);
var inst_61890 = (state_61992[(9)]);
var inst_61889 = (state_61992[(10)]);
var inst_61917 = (state_61992[(11)]);
var inst_61888 = (state_61992[(12)]);
var inst_61916 = (state_61992[(13)]);
var inst_61918 = (state_61992[(2)]);
var inst_61919 = (function (){var vec__61881 = inst_61888;
var v = inst_61889;
var p = inst_61890;
var stop_QMARK_ = inst_61891;
var map__61894 = inst_61915;
var event_msg = inst_61915;
var event = inst_61916;
var e1 = inst_61917;
var e2 = inst_61918;
return ((function (vec__61881,v,p,stop_QMARK_,map__61894,event_msg,event,e1,e2,inst_61915,inst_61891,inst_61890,inst_61889,inst_61917,inst_61888,inst_61916,inst_61918,state_val_61993,c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(vec__61881,v,p,stop_QMARK_,map__61894,event_msg,event,e1,e2,inst_61915,inst_61891,inst_61890,inst_61889,inst_61917,inst_61888,inst_61916,inst_61918,state_val_61993,c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_61920 = (new cljs.core.Delay(inst_61919,null));
var inst_61921 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1482,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_61920,null,1735345177);
var state_61992__$1 = state_61992;
var statearr_61995_62068 = state_61992__$1;
(statearr_61995_62068[(2)] = inst_61921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (27))){
var state_61992__$1 = state_61992;
var statearr_61996_62069 = state_61992__$1;
(statearr_61996_62069[(2)] = null);

(statearr_61996_62069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (1))){
var state_61992__$1 = state_61992;
var statearr_61997_62070 = state_61992__$1;
(statearr_61997_62070[(2)] = null);

(statearr_61997_62070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (24))){
var inst_61932 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_61998_62071 = state_61992__$1;
(statearr_61998_62071[(2)] = inst_61932);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (39))){
var inst_61915 = (state_61992[(7)]);
var inst_61956 = (state_61992[(14)]);
var inst_61960 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1475,"(server-event-msg? event-msg)",inst_61915,inst_61956,null);
var state_61992__$1 = state_61992;
var statearr_61999_62072 = state_61992__$1;
(statearr_61999_62072[(2)] = inst_61960);

(statearr_61999_62072[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (46))){
var inst_61972 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_62000_62073 = state_61992__$1;
(statearr_62000_62073[(2)] = inst_61972);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (4))){
var inst_61891 = (state_61992[(8)]);
var inst_61890 = (state_61992[(9)]);
var inst_61888 = (state_61992[(12)]);
var inst_61888__$1 = (state_61992[(2)]);
var inst_61889 = cljs.core.nth.call(null,inst_61888__$1,(0),null);
var inst_61890__$1 = cljs.core.nth.call(null,inst_61888__$1,(1),null);
var inst_61891__$1 = cljs.core._EQ_.call(null,inst_61890__$1,ch_ctrl);
var state_61992__$1 = (function (){var statearr_62001 = state_61992;
(statearr_62001[(8)] = inst_61891__$1);

(statearr_62001[(9)] = inst_61890__$1);

(statearr_62001[(10)] = inst_61889);

(statearr_62001[(12)] = inst_61888__$1);

return statearr_62001;
})();
if(inst_61891__$1){
var statearr_62002_62074 = state_61992__$1;
(statearr_62002_62074[(1)] = (5));

} else {
var statearr_62003_62075 = state_61992__$1;
(statearr_62003_62075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (15))){
var inst_61889 = (state_61992[(10)]);
var state_61992__$1 = state_61992;
var statearr_62004_62076 = state_61992__$1;
(statearr_62004_62076[(2)] = inst_61889);

(statearr_62004_62076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (48))){
var inst_61974 = (state_61992[(15)]);
var inst_61915 = (state_61992[(7)]);
var inst_61978 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",1476,"(client-event-msg? event-msg)",inst_61915,inst_61974,null);
var state_61992__$1 = state_61992;
var statearr_62005_62077 = state_61992__$1;
(statearr_62005_62077[(2)] = inst_61978);

(statearr_62005_62077[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (21))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61992,(20),Error,null,(19));
var state_61992__$1 = state_61992;
if(cljs.core.truth_(error_handler)){
var statearr_62006_62078 = state_61992__$1;
(statearr_62006_62078[(1)] = (22));

} else {
var statearr_62007_62079 = state_61992__$1;
(statearr_62007_62079[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (31))){
var inst_61982 = (state_61992[(2)]);
var inst_61983 = event_msg_handler.call(null,inst_61982);
var state_61992__$1 = state_61992;
var statearr_62008_62080 = state_61992__$1;
(statearr_62008_62080[(2)] = inst_61983);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (32))){
var inst_61956 = (state_61992[(14)]);
var inst_61956__$1 = (state_61992[(2)]);
var inst_61957 = (inst_61956__$1 == null);
var state_61992__$1 = (function (){var statearr_62009 = state_61992;
(statearr_62009[(14)] = inst_61956__$1);

return statearr_62009;
})();
if(cljs.core.truth_(inst_61957)){
var statearr_62010_62081 = state_61992__$1;
(statearr_62010_62081[(1)] = (38));

} else {
var statearr_62011_62082 = state_61992__$1;
(statearr_62011_62082[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (40))){
var inst_61962 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_62012_62083 = state_61992__$1;
(statearr_62012_62083[(2)] = inst_61962);

(statearr_62012_62083[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (33))){
var inst_61946 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_62013_62084 = state_61992__$1;
(statearr_62013_62084[(2)] = inst_61946);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (13))){
var inst_61907 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_62014_62085 = state_61992__$1;
(statearr_62014_62085[(2)] = inst_61907);

(statearr_62014_62085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (22))){
var inst_61915 = (state_61992[(7)]);
var inst_61917 = (state_61992[(11)]);
var inst_61926 = error_handler.call(null,inst_61917,inst_61915);
var state_61992__$1 = state_61992;
var statearr_62015_62086 = state_61992__$1;
(statearr_62015_62086[(2)] = inst_61926);

(statearr_62015_62086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (36))){
var state_61992__$1 = state_61992;
var statearr_62016_62087 = state_61992__$1;
(statearr_62016_62087[(2)] = taoensso.truss.impl._dummy_error);

(statearr_62016_62087[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (41))){
var inst_61974 = (state_61992[(15)]);
var inst_61974__$1 = (state_61992[(2)]);
var inst_61975 = (inst_61974__$1 == null);
var state_61992__$1 = (function (){var statearr_62017 = state_61992;
(statearr_62017[(15)] = inst_61974__$1);

return statearr_62017;
})();
if(cljs.core.truth_(inst_61975)){
var statearr_62018_62088 = state_61992__$1;
(statearr_62018_62088[(1)] = (47));

} else {
var statearr_62019_62089 = state_61992__$1;
(statearr_62019_62089[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (43))){
var inst_61915 = (state_61992[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61992,(42),Error,null,(41));
var inst_61968 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_61915);
var state_61992__$1 = state_61992;
if(cljs.core.truth_(inst_61968)){
var statearr_62020_62090 = state_61992__$1;
(statearr_62020_62090[(1)] = (44));

} else {
var statearr_62021_62091 = state_61992__$1;
(statearr_62021_62091[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (29))){
var state_61992__$1 = state_61992;
var statearr_62022_62092 = state_61992__$1;
(statearr_62022_62092[(2)] = null);

(statearr_62022_62092[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (44))){
var state_61992__$1 = state_61992;
var statearr_62023_62093 = state_61992__$1;
(statearr_62023_62093[(2)] = null);

(statearr_62023_62093[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (6))){
var inst_61889 = (state_61992[(10)]);
var inst_61896 = (inst_61889 == null);
var inst_61897 = cljs.core.not.call(null,inst_61896);
var state_61992__$1 = state_61992;
if(inst_61897){
var statearr_62024_62094 = state_61992__$1;
(statearr_62024_62094[(1)] = (8));

} else {
var statearr_62025_62095 = state_61992__$1;
(statearr_62025_62095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (28))){
var inst_61944 = (state_61992[(2)]);
var state_61992__$1 = (function (){var statearr_62026 = state_61992;
(statearr_62026[(16)] = inst_61944);

return statearr_62026;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_62027_62096 = state_61992__$1;
(statearr_62027_62096[(1)] = (29));

} else {
var statearr_62028_62097 = state_61992__$1;
(statearr_62028_62097[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (25))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61992,(18),Error,null,(17));
var state_61992__$1 = state_61992;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_62029_62098 = state_61992__$1;
(statearr_62029_62098[(1)] = (26));

} else {
var statearr_62030_62099 = state_61992__$1;
(statearr_62030_62099[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (34))){
var inst_61915 = (state_61992[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61992,(33),Error,null,(32));
var inst_61950 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_61915);
var state_61992__$1 = state_61992;
if(cljs.core.truth_(inst_61950)){
var statearr_62031_62100 = state_61992__$1;
(statearr_62031_62100[(1)] = (35));

} else {
var statearr_62032_62101 = state_61992__$1;
(statearr_62032_62101[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (17))){
var inst_61985 = (state_61992[(2)]);
var state_61992__$1 = (function (){var statearr_62033 = state_61992;
(statearr_62033[(17)] = inst_61985);

return statearr_62033;
})();
var statearr_62034_62102 = state_61992__$1;
(statearr_62034_62102[(2)] = null);

(statearr_62034_62102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (3))){
var inst_61990 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61992__$1,inst_61990);
} else {
if((state_val_61993 === (12))){
var state_61992__$1 = state_61992;
var statearr_62035_62103 = state_61992__$1;
(statearr_62035_62103[(2)] = false);

(statearr_62035_62103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (2))){
var inst_61884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61885 = [ch_recv,ch_ctrl];
var inst_61886 = (new cljs.core.PersistentVector(null,2,(5),inst_61884,inst_61885,null));
var state_61992__$1 = state_61992;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61992__$1,(4),inst_61886);
} else {
if((state_val_61993 === (23))){
var inst_61915 = (state_61992[(7)]);
var inst_61891 = (state_61992[(8)]);
var inst_61890 = (state_61992[(9)]);
var inst_61889 = (state_61992[(10)]);
var inst_61917 = (state_61992[(11)]);
var inst_61888 = (state_61992[(12)]);
var inst_61916 = (state_61992[(13)]);
var inst_61928 = (function (){var vec__61881 = inst_61888;
var v = inst_61889;
var p = inst_61890;
var stop_QMARK_ = inst_61891;
var map__61894 = inst_61915;
var event_msg = inst_61915;
var event = inst_61916;
var e1 = inst_61917;
var temp__6751__auto__ = error_handler;
return ((function (vec__61881,v,p,stop_QMARK_,map__61894,event_msg,event,e1,temp__6751__auto__,inst_61915,inst_61891,inst_61890,inst_61889,inst_61917,inst_61888,inst_61916,state_val_61993,c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(vec__61881,v,p,stop_QMARK_,map__61894,event_msg,event,e1,temp__6751__auto__,inst_61915,inst_61891,inst_61890,inst_61889,inst_61917,inst_61888,inst_61916,state_val_61993,c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_61929 = (new cljs.core.Delay(inst_61928,null));
var inst_61930 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1481,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_61929,null,2012026813);
var state_61992__$1 = state_61992;
var statearr_62036_62104 = state_61992__$1;
(statearr_62036_62104[(2)] = inst_61930);

(statearr_62036_62104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (47))){
var inst_61915 = (state_61992[(7)]);
var state_61992__$1 = state_61992;
var statearr_62037_62105 = state_61992__$1;
(statearr_62037_62105[(2)] = inst_61915);

(statearr_62037_62105[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (35))){
var state_61992__$1 = state_61992;
var statearr_62038_62106 = state_61992__$1;
(statearr_62038_62106[(2)] = null);

(statearr_62038_62106[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (19))){
var inst_61934 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_62039_62107 = state_61992__$1;
(statearr_62039_62107[(2)] = inst_61934);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (11))){
var state_61992__$1 = state_61992;
var statearr_62040_62108 = state_61992__$1;
(statearr_62040_62108[(2)] = true);

(statearr_62040_62108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (9))){
var state_61992__$1 = state_61992;
var statearr_62041_62109 = state_61992__$1;
(statearr_62041_62109[(2)] = false);

(statearr_62041_62109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (5))){
var state_61992__$1 = state_61992;
var statearr_62042_62110 = state_61992__$1;
(statearr_62042_62110[(2)] = null);

(statearr_62042_62110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (14))){
var inst_61889 = (state_61992[(10)]);
var inst_61912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61889);
var state_61992__$1 = state_61992;
var statearr_62043_62111 = state_61992__$1;
(statearr_62043_62111[(2)] = inst_61912);

(statearr_62043_62111[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (45))){
var state_61992__$1 = state_61992;
var statearr_62044_62112 = state_61992__$1;
(statearr_62044_62112[(2)] = taoensso.truss.impl._dummy_error);

(statearr_62044_62112[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (26))){
var inst_61915 = (state_61992[(7)]);
var inst_61891 = (state_61992[(8)]);
var inst_61890 = (state_61992[(9)]);
var inst_61889 = (state_61992[(10)]);
var inst_61888 = (state_61992[(12)]);
var inst_61916 = (state_61992[(13)]);
var inst_61939 = (function (){var vec__61881 = inst_61888;
var v = inst_61889;
var p = inst_61890;
var stop_QMARK_ = inst_61891;
var map__61894 = inst_61915;
var event_msg = inst_61915;
var event = inst_61916;
return ((function (vec__61881,v,p,stop_QMARK_,map__61894,event_msg,event,inst_61915,inst_61891,inst_61890,inst_61889,inst_61888,inst_61916,state_val_61993,c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__61881,v,p,stop_QMARK_,map__61894,event_msg,event,inst_61915,inst_61891,inst_61890,inst_61889,inst_61888,inst_61916,state_val_61993,c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_61940 = (new cljs.core.Delay(inst_61939,null));
var inst_61941 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/Nadiar/Desktop/Ebtanas/script/figwheel.clj",1472,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_61940,null,-1010196959);
var state_61992__$1 = state_61992;
var statearr_62045_62113 = state_61992__$1;
(statearr_62045_62113[(2)] = inst_61941);

(statearr_62045_62113[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (16))){
var inst_61915 = (state_61992[(7)]);
var inst_61915__$1 = (state_61992[(2)]);
var inst_61916 = cljs.core.get.call(null,inst_61915__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_61992__$1 = (function (){var statearr_62046 = state_61992;
(statearr_62046[(7)] = inst_61915__$1);

(statearr_62046[(13)] = inst_61916);

return statearr_62046;
})();
var statearr_62047_62114 = state_61992__$1;
(statearr_62047_62114[(2)] = null);

(statearr_62047_62114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (38))){
var inst_61915 = (state_61992[(7)]);
var state_61992__$1 = state_61992;
var statearr_62048_62115 = state_61992__$1;
(statearr_62048_62115[(2)] = inst_61915);

(statearr_62048_62115[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (30))){
var state_61992__$1 = state_61992;
var statearr_62049_62116 = state_61992__$1;
(statearr_62049_62116[(2)] = null);

(statearr_62049_62116[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (10))){
var inst_61910 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
if(cljs.core.truth_(inst_61910)){
var statearr_62050_62117 = state_61992__$1;
(statearr_62050_62117[(1)] = (14));

} else {
var statearr_62051_62118 = state_61992__$1;
(statearr_62051_62118[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (18))){
var inst_61917 = (state_61992[(2)]);
var state_61992__$1 = (function (){var statearr_62052 = state_61992;
(statearr_62052[(11)] = inst_61917);

return statearr_62052;
})();
var statearr_62053_62119 = state_61992__$1;
(statearr_62053_62119[(2)] = null);

(statearr_62053_62119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (42))){
var inst_61964 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_62054_62120 = state_61992__$1;
(statearr_62054_62120[(2)] = inst_61964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (37))){
var inst_61954 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_62055_62121 = state_61992__$1;
(statearr_62055_62121[(2)] = inst_61954);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (8))){
var inst_61889 = (state_61992[(10)]);
var inst_61899 = inst_61889.cljs$lang$protocol_mask$partition0$;
var inst_61900 = (inst_61899 & (64));
var inst_61901 = inst_61889.cljs$core$ISeq$;
var inst_61902 = (cljs.core.PROTOCOL_SENTINEL === inst_61901);
var inst_61903 = (inst_61900) || (inst_61902);
var state_61992__$1 = state_61992;
if(cljs.core.truth_(inst_61903)){
var statearr_62056_62122 = state_61992__$1;
(statearr_62056_62122[(1)] = (11));

} else {
var statearr_62057_62123 = state_61992__$1;
(statearr_62057_62123[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61993 === (49))){
var inst_61980 = (state_61992[(2)]);
var state_61992__$1 = state_61992;
var statearr_62058_62124 = state_61992__$1;
(statearr_62058_62124[(2)] = inst_61980);

(statearr_62058_62124[(1)] = (31));


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
});})(c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__48198__auto__,c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto____0 = (function (){
var statearr_62062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62062[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto__);

(statearr_62062[(1)] = (1));

return statearr_62062;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto____1 = (function (state_61992){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_61992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e62063){if((e62063 instanceof Object)){
var ex__48202__auto__ = e62063;
var statearr_62064_62125 = state_61992;
(statearr_62064_62125[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62126 = state_61992;
state_61992 = G__62126;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto__ = function(state_61992){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto____1.call(this,state_61992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__48314__auto__ = (function (){var statearr_62065 = f__48313__auto__.call(null);
(statearr_62065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___62066);

return statearr_62065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___62066,map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__61878,map__61878__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   log any errors. Returns a `(fn stop! [])`.
 * 
 *   For performance, you'll likely want your `event-msg-handler` fn to be
 *   non-blocking (at least for slow handling operations). Clojure offers
 *   a rich variety of tools here including futures, agents, core.async,
 *   etc.
 * 
 *   Advanced users may also prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62136 = arguments.length;
var i__35777__auto___62137 = (0);
while(true){
if((i__35777__auto___62137 < len__35776__auto___62136)){
args__35783__auto__.push((arguments[i__35777__auto___62137]));

var G__62138 = (i__35777__auto___62137 + (1));
i__35777__auto___62137 = G__62138;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__62130){
var vec__62131 = p__62130;
var map__62134 = cljs.core.nth.call(null,vec__62131,(0),null);
var map__62134__$1 = ((((!((map__62134 == null)))?((((map__62134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62134):map__62134);
var opts = map__62134__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__62134__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__62134__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq62127){
var G__62128 = cljs.core.first.call(null,seq62127);
var seq62127__$1 = cljs.core.next.call(null,seq62127);
var G__62129 = cljs.core.first.call(null,seq62127__$1);
var seq62127__$2 = cljs.core.next.call(null,seq62127__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62128,G__62129,seq62127__$2);
});

/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   log any errors. Returns a `(fn stop! [])`.
 * 
 *   For performance, you'll likely want your `event-msg-handler` fn to be
 *   non-blocking (at least for slow handling operations). Clojure offers
 *   a rich variety of tools here including futures, agents, core.async,
 *   etc.
 * 
 *   Advanced users may also prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62148 = arguments.length;
var i__35777__auto___62149 = (0);
while(true){
if((i__35777__auto___62149 < len__35776__auto___62148)){
args__35783__auto__.push((arguments[i__35777__auto___62149]));

var G__62150 = (i__35777__auto___62149 + (1));
i__35777__auto___62149 = G__62150;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__62142){
var vec__62143 = p__62142;
var map__62146 = cljs.core.nth.call(null,vec__62143,(0),null);
var map__62146__$1 = ((((!((map__62146 == null)))?((((map__62146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62146):map__62146);
var opts = map__62146__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__62146__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__62146__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq62139){
var G__62140 = cljs.core.first.call(null,seq62139);
var seq62139__$1 = cljs.core.next.call(null,seq62139);
var G__62141 = cljs.core.first.call(null,seq62139__$1);
var seq62139__$2 = cljs.core.next.call(null,seq62139__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62140,G__62141,seq62139__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__62151,websocket_QMARK_){
var map__62154 = p__62151;
var map__62154__$1 = ((((!((map__62154 == null)))?((((map__62154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62154):map__62154);
var location = map__62154__$1;
var protocol = cljs.core.get.call(null,map__62154__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__62154__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__62154__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__34555__auto__ = path;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1491640776558