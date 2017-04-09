// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.root');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('om.dom');
goog.require('ebtanas.ui.login');
goog.require('ebtanas.ui.main');
goog.require('ebtanas.ui.new_user');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('goog.string');
if(typeof ebtanas.ui.root.LoginForm !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.LoginForm = (function ebtanas$ui$root$LoginForm(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.root.LoginForm.prototype = goog.object.clone(React.Component.prototype);
}

var x239055_239067 = ebtanas.ui.root.LoginForm.prototype;
x239055_239067.componentWillUpdate = ((function (x239055_239067){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239068 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239069 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239068,next_ident__41164__auto___239069)){
var idxr__41165__auto___239070 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239070 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239070),((function (idxr__41165__auto___239070,ident__41163__auto___239068,next_ident__41164__auto___239069,this__41159__auto__,x239055_239067){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239068], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239069], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239070,ident__41163__auto___239068,next_ident__41164__auto___239069,this__41159__auto__,x239055_239067))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239055_239067))
;

x239055_239067.shouldComponentUpdate = ((function (x239055_239067){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239057 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239057);
} else {
return G__239057;
}
})();
var or__39206__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41159__auto__),next_props__41160__auto____$2);
if(or__39206__auto__){
return or__39206__auto__;
} else {
var or__39206__auto____$1 = (function (){var and__39194__auto__ = this__41159__auto__.state;
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41159__auto__.state,"omcljs$state"),goog.object.get(next_state__41161__auto__,"omcljs$state"));
} else {
return and__39194__auto__;
}
})();
if(cljs.core.truth_(or__39206__auto____$1)){
return or__39206__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__41159__auto__.props.children,next_children__41162__auto__);
}
}
});})(x239055_239067))
;

x239055_239067.componentWillUnmount = ((function (x239055_239067){
return (function (){
var this__41159__auto__ = this;
var r__41170__auto__ = om.next.get_reconciler.call(null,this__41159__auto__);
var cfg__41171__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41170__auto__);
var st__41172__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
var indexer__41169__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
if(cljs.core.truth_((function (){var and__39194__auto__ = !((st__41172__auto__ == null));
if(and__39194__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__41172__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__41159__auto__], null));
} else {
return and__39194__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__41172__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41159__auto__);
} else {
}

if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239055_239067))
;

x239055_239067.componentDidUpdate = ((function (x239055_239067){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239055_239067))
;

x239055_239067.isMounted = ((function (x239055_239067){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239055_239067))
;

x239055_239067.componentWillMount = ((function (x239055_239067){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239055_239067))
;

x239055_239067.render = ((function (x239055_239067){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239058 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239059 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239060 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239061 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239062 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239063 = om.next.props.call(null,this$);
var map__239063__$1 = ((((!((map__239063 == null)))?((((map__239063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239063):map__239063);
var content = cljs.core.get.call(null,map__239063__$1,new cljs.core.Keyword(null,"content","content",15833224));
return om.dom.h1.call(null,null,cljs.core.prn_str.call(null,content));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239062;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239061;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239060;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239059;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239058;
}});})(x239055_239067))
;


ebtanas.ui.root.LoginForm.prototype.constructor = ebtanas.ui.root.LoginForm;

ebtanas.ui.root.LoginForm.prototype.constructor.displayName = "ebtanas.ui.root/LoginForm";

ebtanas.ui.root.LoginForm.prototype.om$isComponent = true;

var x239065_239071 = ebtanas.ui.root.LoginForm;
/** @nocollapse */
x239065_239071.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239065_239071.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239065_239071){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x239065_239071))
;

/** @nocollapse */
x239065_239071.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239065_239071.om$next$IQuery$query$arity$1 = ((function (x239065_239071){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x239065_239071))
;


var x239066_239072 = ebtanas.ui.root.LoginForm.prototype;

x239066_239072.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239066_239072.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239066_239072){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x239066_239072))
;


x239066_239072.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239066_239072.om$next$IQuery$query$arity$1 = ((function (x239066_239072){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x239066_239072))
;


ebtanas.ui.root.LoginForm.cljs$lang$type = true;

ebtanas.ui.root.LoginForm.cljs$lang$ctorStr = "ebtanas.ui.root/LoginForm";

ebtanas.ui.root.LoginForm.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/LoginForm");
});
ebtanas.ui.root.login_ui = om.next.factory.call(null,ebtanas.ui.root.LoginForm);
if(typeof ebtanas.ui.root.SubjectOption !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.SubjectOption = (function ebtanas$ui$root$SubjectOption(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.root.SubjectOption.prototype = goog.object.clone(React.Component.prototype);
}

var x239077_239101 = ebtanas.ui.root.SubjectOption.prototype;
x239077_239101.componentWillUpdate = ((function (x239077_239101){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239102 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239103 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239102,next_ident__41164__auto___239103)){
var idxr__41165__auto___239104 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239104 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239104),((function (idxr__41165__auto___239104,ident__41163__auto___239102,next_ident__41164__auto___239103,this__41159__auto__,x239077_239101){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239102], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239103], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239104,ident__41163__auto___239102,next_ident__41164__auto___239103,this__41159__auto__,x239077_239101))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239077_239101))
;

x239077_239101.shouldComponentUpdate = ((function (x239077_239101){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239079 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239079);
} else {
return G__239079;
}
})();
var or__39206__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41159__auto__),next_props__41160__auto____$2);
if(or__39206__auto__){
return or__39206__auto__;
} else {
var or__39206__auto____$1 = (function (){var and__39194__auto__ = this__41159__auto__.state;
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41159__auto__.state,"omcljs$state"),goog.object.get(next_state__41161__auto__,"omcljs$state"));
} else {
return and__39194__auto__;
}
})();
if(cljs.core.truth_(or__39206__auto____$1)){
return or__39206__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__41159__auto__.props.children,next_children__41162__auto__);
}
}
});})(x239077_239101))
;

x239077_239101.componentWillUnmount = ((function (x239077_239101){
return (function (){
var this__41159__auto__ = this;
var r__41170__auto__ = om.next.get_reconciler.call(null,this__41159__auto__);
var cfg__41171__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41170__auto__);
var st__41172__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
var indexer__41169__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
if(cljs.core.truth_((function (){var and__39194__auto__ = !((st__41172__auto__ == null));
if(and__39194__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__41172__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__41159__auto__], null));
} else {
return and__39194__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__41172__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41159__auto__);
} else {
}

if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239077_239101))
;

x239077_239101.componentDidUpdate = ((function (x239077_239101){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239077_239101))
;

x239077_239101.isMounted = ((function (x239077_239101){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239077_239101))
;

x239077_239101.componentWillMount = ((function (x239077_239101){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239077_239101))
;

x239077_239101.render = ((function (x239077_239101){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239080 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239081 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239082 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239083 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239084 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239085 = om.next.props.call(null,this$);
var map__239085__$1 = ((((!((map__239085 == null)))?((((map__239085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239085):map__239085);
var name = cljs.core.get.call(null,map__239085__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return om.dom.option.call(null,null,name);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239084;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239083;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239082;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239081;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239080;
}});})(x239077_239101))
;


ebtanas.ui.root.SubjectOption.prototype.constructor = ebtanas.ui.root.SubjectOption;

ebtanas.ui.root.SubjectOption.prototype.constructor.displayName = "ebtanas.ui.root/SubjectOption";

ebtanas.ui.root.SubjectOption.prototype.om$isComponent = true;

var x239087_239105 = ebtanas.ui.root.SubjectOption;
/** @nocollapse */
x239087_239105.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239087_239105.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239087_239105){
return (function (this$,p__239088){
var map__239089 = p__239088;
var map__239089__$1 = ((((!((map__239089 == null)))?((((map__239089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239089):map__239089);
var name = cljs.core.get.call(null,map__239089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x239087_239105))
;

/** @nocollapse */
x239087_239105.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239087_239105.om$next$Ident$ident$arity$2 = ((function (x239087_239105){
return (function (this$,p__239091){
var map__239092 = p__239091;
var map__239092__$1 = ((((!((map__239092 == null)))?((((map__239092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239092):map__239092);
var name = cljs.core.get.call(null,map__239092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x239087_239105))
;

/** @nocollapse */
x239087_239105.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239087_239105.om$next$IQuery$query$arity$1 = ((function (x239087_239105){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x239087_239105))
;


var x239094_239106 = ebtanas.ui.root.SubjectOption.prototype;

x239094_239106.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239094_239106.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239094_239106){
return (function (this$,p__239095){
var map__239096 = p__239095;
var map__239096__$1 = ((((!((map__239096 == null)))?((((map__239096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239096):map__239096);
var name = cljs.core.get.call(null,map__239096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x239094_239106))
;


x239094_239106.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x239094_239106.om$next$Ident$ident$arity$2 = ((function (x239094_239106){
return (function (this$,p__239098){
var map__239099 = p__239098;
var map__239099__$1 = ((((!((map__239099 == null)))?((((map__239099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239099):map__239099);
var name = cljs.core.get.call(null,map__239099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x239094_239106))
;


x239094_239106.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239094_239106.om$next$IQuery$query$arity$1 = ((function (x239094_239106){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x239094_239106))
;


ebtanas.ui.root.SubjectOption.cljs$lang$type = true;

ebtanas.ui.root.SubjectOption.cljs$lang$ctorStr = "ebtanas.ui.root/SubjectOption";

ebtanas.ui.root.SubjectOption.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/SubjectOption");
});
ebtanas.ui.root.subject_option = om.next.factory.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(typeof ebtanas.ui.root.SearchForm !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.SearchForm = (function ebtanas$ui$root$SearchForm(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.root.SearchForm.prototype = goog.object.clone(React.Component.prototype);
}

var x239111_239123 = ebtanas.ui.root.SearchForm.prototype;
x239111_239123.componentWillUpdate = ((function (x239111_239123){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239124 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239125 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239124,next_ident__41164__auto___239125)){
var idxr__41165__auto___239126 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239126 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239126),((function (idxr__41165__auto___239126,ident__41163__auto___239124,next_ident__41164__auto___239125,this__41159__auto__,x239111_239123){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239124], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239125], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239126,ident__41163__auto___239124,next_ident__41164__auto___239125,this__41159__auto__,x239111_239123))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239111_239123))
;

x239111_239123.shouldComponentUpdate = ((function (x239111_239123){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239113 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239113);
} else {
return G__239113;
}
})();
var or__39206__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41159__auto__),next_props__41160__auto____$2);
if(or__39206__auto__){
return or__39206__auto__;
} else {
var or__39206__auto____$1 = (function (){var and__39194__auto__ = this__41159__auto__.state;
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41159__auto__.state,"omcljs$state"),goog.object.get(next_state__41161__auto__,"omcljs$state"));
} else {
return and__39194__auto__;
}
})();
if(cljs.core.truth_(or__39206__auto____$1)){
return or__39206__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__41159__auto__.props.children,next_children__41162__auto__);
}
}
});})(x239111_239123))
;

x239111_239123.componentWillUnmount = ((function (x239111_239123){
return (function (){
var this__41159__auto__ = this;
var r__41170__auto__ = om.next.get_reconciler.call(null,this__41159__auto__);
var cfg__41171__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41170__auto__);
var st__41172__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
var indexer__41169__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
if(cljs.core.truth_((function (){var and__39194__auto__ = !((st__41172__auto__ == null));
if(and__39194__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__41172__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__41159__auto__], null));
} else {
return and__39194__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__41172__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41159__auto__);
} else {
}

if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239111_239123))
;

x239111_239123.componentDidUpdate = ((function (x239111_239123){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239111_239123))
;

x239111_239123.isMounted = ((function (x239111_239123){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239111_239123))
;

x239111_239123.componentWillMount = ((function (x239111_239123){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239111_239123))
;

x239111_239123.render = ((function (x239111_239123){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239114 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239115 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239116 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239117 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239118 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239119 = om.next.props.call(null,this$);
var map__239119__$1 = ((((!((map__239119 == null)))?((((map__239119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239119):map__239119);
var subjects = cljs.core.get.call(null,map__239119__$1,new cljs.core.Keyword(null,"subjects","subjects",21416729));
return om.dom.div.call(null,({"className": "search-form centered"}),om.dom.form.call(null,({"className": "form-horizontal"}),om.dom.div.call(null,({"className": "input-group"}),om.dom.select.call(null,({"className": "form-select select-lg"}),cljs.core.map.call(null,ebtanas.ui.root.subject_option,subjects)),om.dom.input.call(null,({"className": "form-input input-lg", "type": "text", "placeholder": "Cari di sini..."})),om.dom.button.call(null,({"className": "btn btn-primary btn-action btn-lg"}),om.dom.span.call(null,({"className": "icon icon-search"}))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239118;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239117;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239116;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239115;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239114;
}});})(x239111_239123))
;


ebtanas.ui.root.SearchForm.prototype.constructor = ebtanas.ui.root.SearchForm;

ebtanas.ui.root.SearchForm.prototype.constructor.displayName = "ebtanas.ui.root/SearchForm";

ebtanas.ui.root.SearchForm.prototype.om$isComponent = true;

var x239121_239127 = ebtanas.ui.root.SearchForm;
/** @nocollapse */
x239121_239127.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239121_239127.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239121_239127){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x239121_239127))
;

/** @nocollapse */
x239121_239127.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239121_239127.om$next$IQuery$query$arity$1 = ((function (x239121_239127){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x239121_239127))
;


var x239122_239128 = ebtanas.ui.root.SearchForm.prototype;

x239122_239128.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239122_239128.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239122_239128){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x239122_239128))
;


x239122_239128.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239122_239128.om$next$IQuery$query$arity$1 = ((function (x239122_239128){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x239122_239128))
;


ebtanas.ui.root.SearchForm.cljs$lang$type = true;

ebtanas.ui.root.SearchForm.cljs$lang$ctorStr = "ebtanas.ui.root/SearchForm";

ebtanas.ui.root.SearchForm.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/SearchForm");
});
ebtanas.ui.root.search_form = om.next.factory.call(null,ebtanas.ui.root.SearchForm);
if(typeof ebtanas.ui.root.BodySwitcher !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.BodySwitcher = (function ebtanas$ui$root$BodySwitcher(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.root.BodySwitcher.prototype = goog.object.clone(React.Component.prototype);
}

var x239133_239152 = ebtanas.ui.root.BodySwitcher.prototype;
x239133_239152.componentWillUpdate = ((function (x239133_239152){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239153 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239154 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239153,next_ident__41164__auto___239154)){
var idxr__41165__auto___239155 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239155 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239155),((function (idxr__41165__auto___239155,ident__41163__auto___239153,next_ident__41164__auto___239154,this__41159__auto__,x239133_239152){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239153], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239154], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239155,ident__41163__auto___239153,next_ident__41164__auto___239154,this__41159__auto__,x239133_239152))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239133_239152))
;

x239133_239152.shouldComponentUpdate = ((function (x239133_239152){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239135 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239135);
} else {
return G__239135;
}
})();
var or__39206__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41159__auto__),next_props__41160__auto____$2);
if(or__39206__auto__){
return or__39206__auto__;
} else {
var or__39206__auto____$1 = (function (){var and__39194__auto__ = this__41159__auto__.state;
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41159__auto__.state,"omcljs$state"),goog.object.get(next_state__41161__auto__,"omcljs$state"));
} else {
return and__39194__auto__;
}
})();
if(cljs.core.truth_(or__39206__auto____$1)){
return or__39206__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__41159__auto__.props.children,next_children__41162__auto__);
}
}
});})(x239133_239152))
;

x239133_239152.componentWillUnmount = ((function (x239133_239152){
return (function (){
var this__41159__auto__ = this;
var r__41170__auto__ = om.next.get_reconciler.call(null,this__41159__auto__);
var cfg__41171__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41170__auto__);
var st__41172__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
var indexer__41169__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
if(cljs.core.truth_((function (){var and__39194__auto__ = !((st__41172__auto__ == null));
if(and__39194__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__41172__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__41159__auto__], null));
} else {
return and__39194__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__41172__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41159__auto__);
} else {
}

if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239133_239152))
;

x239133_239152.componentDidUpdate = ((function (x239133_239152){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239133_239152))
;

x239133_239152.isMounted = ((function (x239133_239152){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239133_239152))
;

x239133_239152.componentWillMount = ((function (x239133_239152){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239133_239152))
;

x239133_239152.render = ((function (x239133_239152){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239136 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239137 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239138 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239139 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239140 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239141 = om.next.props.call(null,this$);
var map__239141__$1 = ((((!((map__239141 == null)))?((((map__239141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239141):map__239141);
var props = map__239141__$1;
var component = cljs.core.get.call(null,map__239141__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return om.dom.section.call(null,({"className": "body section columns"}),om.dom.div.call(null,({"className": "container"}),(function (){var G__239143 = (((component instanceof cljs.core.Keyword))?component.fqn:null);
switch (G__239143) {
case "main":
return ebtanas.ui.root.search_form.call(null,props);

break;
case "login":
return ebtanas.ui.root.login_ui.call(null,props);

break;
default:
return om.dom.h1.call(null,null,"YOU ARE LOST!");

}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239140;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239139;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239138;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239137;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239136;
}});})(x239133_239152))
;


ebtanas.ui.root.BodySwitcher.prototype.constructor = ebtanas.ui.root.BodySwitcher;

ebtanas.ui.root.BodySwitcher.prototype.constructor.displayName = "ebtanas.ui.root/BodySwitcher";

ebtanas.ui.root.BodySwitcher.prototype.om$isComponent = true;

var x239144_239157 = ebtanas.ui.root.BodySwitcher;
/** @nocollapse */
x239144_239157.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239144_239157.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239144_239157){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x239144_239157))
;

/** @nocollapse */
x239144_239157.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239144_239157.om$next$Ident$ident$arity$2 = ((function (x239144_239157){
return (function (this$,p__239145){
var map__239146 = p__239145;
var map__239146__$1 = ((((!((map__239146 == null)))?((((map__239146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239146):map__239146);
var component = cljs.core.get.call(null,map__239146__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__239146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x239144_239157))
;

/** @nocollapse */
x239144_239157.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239144_239157.om$next$IQuery$query$arity$1 = ((function (x239144_239157){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x239144_239157))
;


var x239148_239158 = ebtanas.ui.root.BodySwitcher.prototype;

x239148_239158.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239148_239158.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239148_239158){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x239148_239158))
;


x239148_239158.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x239148_239158.om$next$Ident$ident$arity$2 = ((function (x239148_239158){
return (function (this$,p__239149){
var map__239150 = p__239149;
var map__239150__$1 = ((((!((map__239150 == null)))?((((map__239150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239150):map__239150);
var component = cljs.core.get.call(null,map__239150__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__239150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x239148_239158))
;


x239148_239158.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239148_239158.om$next$IQuery$query$arity$1 = ((function (x239148_239158){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x239148_239158))
;


ebtanas.ui.root.BodySwitcher.cljs$lang$type = true;

ebtanas.ui.root.BodySwitcher.cljs$lang$ctorStr = "ebtanas.ui.root/BodySwitcher";

ebtanas.ui.root.BodySwitcher.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/BodySwitcher");
});
ebtanas.ui.root.body = om.next.factory.call(null,ebtanas.ui.root.BodySwitcher);
if(typeof ebtanas.ui.root.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.Root = (function ebtanas$ui$root$Root(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.root.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x239163_239175 = ebtanas.ui.root.Root.prototype;
x239163_239175.componentWillUpdate = ((function (x239163_239175){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239176 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239177 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239176,next_ident__41164__auto___239177)){
var idxr__41165__auto___239178 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239178 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239178),((function (idxr__41165__auto___239178,ident__41163__auto___239176,next_ident__41164__auto___239177,this__41159__auto__,x239163_239175){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239176], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239177], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239178,ident__41163__auto___239176,next_ident__41164__auto___239177,this__41159__auto__,x239163_239175))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239163_239175))
;

x239163_239175.shouldComponentUpdate = ((function (x239163_239175){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239165 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239165);
} else {
return G__239165;
}
})();
var or__39206__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41159__auto__),next_props__41160__auto____$2);
if(or__39206__auto__){
return or__39206__auto__;
} else {
var or__39206__auto____$1 = (function (){var and__39194__auto__ = this__41159__auto__.state;
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41159__auto__.state,"omcljs$state"),goog.object.get(next_state__41161__auto__,"omcljs$state"));
} else {
return and__39194__auto__;
}
})();
if(cljs.core.truth_(or__39206__auto____$1)){
return or__39206__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__41159__auto__.props.children,next_children__41162__auto__);
}
}
});})(x239163_239175))
;

x239163_239175.componentWillUnmount = ((function (x239163_239175){
return (function (){
var this__41159__auto__ = this;
var r__41170__auto__ = om.next.get_reconciler.call(null,this__41159__auto__);
var cfg__41171__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41170__auto__);
var st__41172__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
var indexer__41169__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41171__auto__);
if(cljs.core.truth_((function (){var and__39194__auto__ = !((st__41172__auto__ == null));
if(and__39194__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__41172__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__41159__auto__], null));
} else {
return and__39194__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__41172__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41159__auto__);
} else {
}

if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239163_239175))
;

x239163_239175.componentDidUpdate = ((function (x239163_239175){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239163_239175))
;

x239163_239175.isMounted = ((function (x239163_239175){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239163_239175))
;

x239163_239175.componentWillMount = ((function (x239163_239175){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239163_239175))
;

x239163_239175.render = ((function (x239163_239175){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239166 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239167 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239168 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239169 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239170 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239171 = om.next.props.call(null,this$);
var map__239171__$1 = ((((!((map__239171 == null)))?((((map__239171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239171):map__239171);
var react_key = cljs.core.get.call(null,map__239171__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var active_body = cljs.core.get.call(null,map__239171__$1,new cljs.core.Keyword(null,"active-body","active-body",-178611674));
return om.dom.div.call(null,({"id": "reactive", "key": react_key}),console.log("Props:",om.next.props.call(null,this$)),ebtanas.ui.root.body.call(null,active_body));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239170;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239169;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239168;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239167;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239166;
}});})(x239163_239175))
;


ebtanas.ui.root.Root.prototype.constructor = ebtanas.ui.root.Root;

ebtanas.ui.root.Root.prototype.constructor.displayName = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.prototype.om$isComponent = true;

var x239173_239179 = ebtanas.ui.root.Root;
/** @nocollapse */
x239173_239179.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239173_239179.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239173_239179){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x239173_239179))
;

/** @nocollapse */
x239173_239179.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239173_239179.om$next$IQuery$query$arity$1 = ((function (x239173_239179){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null)], null);
});})(x239173_239179))
;


var x239174_239180 = ebtanas.ui.root.Root.prototype;

x239174_239180.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239174_239180.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239174_239180){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x239174_239180))
;


x239174_239180.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239174_239180.om$next$IQuery$query$arity$1 = ((function (x239174_239180){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null)], null);
});})(x239174_239180))
;


ebtanas.ui.root.Root.cljs$lang$type = true;

ebtanas.ui.root.Root.cljs$lang$ctorStr = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1491717844086