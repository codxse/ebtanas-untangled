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

var x239197_239209 = ebtanas.ui.root.LoginForm.prototype;
x239197_239209.componentWillUpdate = ((function (x239197_239209){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239210 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239211 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239210,next_ident__41164__auto___239211)){
var idxr__41165__auto___239212 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239212 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239212),((function (idxr__41165__auto___239212,ident__41163__auto___239210,next_ident__41164__auto___239211,this__41159__auto__,x239197_239209){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239210], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239211], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239212,ident__41163__auto___239210,next_ident__41164__auto___239211,this__41159__auto__,x239197_239209))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239197_239209))
;

x239197_239209.shouldComponentUpdate = ((function (x239197_239209){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239199 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239199);
} else {
return G__239199;
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
});})(x239197_239209))
;

x239197_239209.componentWillUnmount = ((function (x239197_239209){
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
});})(x239197_239209))
;

x239197_239209.componentDidUpdate = ((function (x239197_239209){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239197_239209))
;

x239197_239209.isMounted = ((function (x239197_239209){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239197_239209))
;

x239197_239209.componentWillMount = ((function (x239197_239209){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239197_239209))
;

x239197_239209.render = ((function (x239197_239209){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239200 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239201 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239202 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239203 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239204 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239205 = om.next.props.call(null,this$);
var map__239205__$1 = ((((!((map__239205 == null)))?((((map__239205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239205):map__239205);
var content = cljs.core.get.call(null,map__239205__$1,new cljs.core.Keyword(null,"content","content",15833224));
return om.dom.h1.call(null,null,cljs.core.prn_str.call(null,content));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239204;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239203;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239202;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239201;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239200;
}});})(x239197_239209))
;


ebtanas.ui.root.LoginForm.prototype.constructor = ebtanas.ui.root.LoginForm;

ebtanas.ui.root.LoginForm.prototype.constructor.displayName = "ebtanas.ui.root/LoginForm";

ebtanas.ui.root.LoginForm.prototype.om$isComponent = true;

var x239207_239213 = ebtanas.ui.root.LoginForm;
/** @nocollapse */
x239207_239213.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239207_239213.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239207_239213){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x239207_239213))
;

/** @nocollapse */
x239207_239213.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239207_239213.om$next$IQuery$query$arity$1 = ((function (x239207_239213){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x239207_239213))
;


var x239208_239214 = ebtanas.ui.root.LoginForm.prototype;

x239208_239214.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239208_239214.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239208_239214){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x239208_239214))
;


x239208_239214.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239208_239214.om$next$IQuery$query$arity$1 = ((function (x239208_239214){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x239208_239214))
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

var x239219_239243 = ebtanas.ui.root.SubjectOption.prototype;
x239219_239243.componentWillUpdate = ((function (x239219_239243){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239244 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239245 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239244,next_ident__41164__auto___239245)){
var idxr__41165__auto___239246 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239246 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239246),((function (idxr__41165__auto___239246,ident__41163__auto___239244,next_ident__41164__auto___239245,this__41159__auto__,x239219_239243){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239244], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239245], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239246,ident__41163__auto___239244,next_ident__41164__auto___239245,this__41159__auto__,x239219_239243))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239219_239243))
;

x239219_239243.shouldComponentUpdate = ((function (x239219_239243){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239221 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239221);
} else {
return G__239221;
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
});})(x239219_239243))
;

x239219_239243.componentWillUnmount = ((function (x239219_239243){
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
});})(x239219_239243))
;

x239219_239243.componentDidUpdate = ((function (x239219_239243){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239219_239243))
;

x239219_239243.isMounted = ((function (x239219_239243){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239219_239243))
;

x239219_239243.componentWillMount = ((function (x239219_239243){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239219_239243))
;

x239219_239243.render = ((function (x239219_239243){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239222 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239223 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239224 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239225 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239226 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239227 = om.next.props.call(null,this$);
var map__239227__$1 = ((((!((map__239227 == null)))?((((map__239227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239227):map__239227);
var name = cljs.core.get.call(null,map__239227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return om.dom.option.call(null,null,name);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239226;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239225;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239224;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239223;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239222;
}});})(x239219_239243))
;


ebtanas.ui.root.SubjectOption.prototype.constructor = ebtanas.ui.root.SubjectOption;

ebtanas.ui.root.SubjectOption.prototype.constructor.displayName = "ebtanas.ui.root/SubjectOption";

ebtanas.ui.root.SubjectOption.prototype.om$isComponent = true;

var x239229_239247 = ebtanas.ui.root.SubjectOption;
/** @nocollapse */
x239229_239247.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239229_239247.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239229_239247){
return (function (this$,p__239230){
var map__239231 = p__239230;
var map__239231__$1 = ((((!((map__239231 == null)))?((((map__239231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239231):map__239231);
var name = cljs.core.get.call(null,map__239231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x239229_239247))
;

/** @nocollapse */
x239229_239247.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239229_239247.om$next$Ident$ident$arity$2 = ((function (x239229_239247){
return (function (this$,p__239233){
var map__239234 = p__239233;
var map__239234__$1 = ((((!((map__239234 == null)))?((((map__239234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239234):map__239234);
var name = cljs.core.get.call(null,map__239234__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x239229_239247))
;

/** @nocollapse */
x239229_239247.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239229_239247.om$next$IQuery$query$arity$1 = ((function (x239229_239247){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x239229_239247))
;


var x239236_239248 = ebtanas.ui.root.SubjectOption.prototype;

x239236_239248.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239236_239248.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239236_239248){
return (function (this$,p__239237){
var map__239238 = p__239237;
var map__239238__$1 = ((((!((map__239238 == null)))?((((map__239238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239238):map__239238);
var name = cljs.core.get.call(null,map__239238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x239236_239248))
;


x239236_239248.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x239236_239248.om$next$Ident$ident$arity$2 = ((function (x239236_239248){
return (function (this$,p__239240){
var map__239241 = p__239240;
var map__239241__$1 = ((((!((map__239241 == null)))?((((map__239241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239241):map__239241);
var name = cljs.core.get.call(null,map__239241__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x239236_239248))
;


x239236_239248.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239236_239248.om$next$IQuery$query$arity$1 = ((function (x239236_239248){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x239236_239248))
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

var x239253_239265 = ebtanas.ui.root.SearchForm.prototype;
x239253_239265.componentWillUpdate = ((function (x239253_239265){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239266 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239267 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239266,next_ident__41164__auto___239267)){
var idxr__41165__auto___239268 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239268 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239268),((function (idxr__41165__auto___239268,ident__41163__auto___239266,next_ident__41164__auto___239267,this__41159__auto__,x239253_239265){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239266], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239267], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239268,ident__41163__auto___239266,next_ident__41164__auto___239267,this__41159__auto__,x239253_239265))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239253_239265))
;

x239253_239265.shouldComponentUpdate = ((function (x239253_239265){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239255 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239255);
} else {
return G__239255;
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
});})(x239253_239265))
;

x239253_239265.componentWillUnmount = ((function (x239253_239265){
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
});})(x239253_239265))
;

x239253_239265.componentDidUpdate = ((function (x239253_239265){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239253_239265))
;

x239253_239265.isMounted = ((function (x239253_239265){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239253_239265))
;

x239253_239265.componentWillMount = ((function (x239253_239265){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239253_239265))
;

x239253_239265.render = ((function (x239253_239265){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239256 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239257 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239258 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239259 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239260 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239261 = om.next.props.call(null,this$);
var map__239261__$1 = ((((!((map__239261 == null)))?((((map__239261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239261):map__239261);
var subjects = cljs.core.get.call(null,map__239261__$1,new cljs.core.Keyword(null,"subjects","subjects",21416729));
return om.dom.div.call(null,({"className": "search-form centered"}),om.dom.form.call(null,({"className": "form-horizontal"}),om.dom.div.call(null,({"className": "input-group"}),om.dom.select.call(null,({"className": "form-select select-lg"}),cljs.core.map.call(null,ebtanas.ui.root.subject_option,subjects)),om.dom.input.call(null,({"className": "form-input input-lg", "type": "text", "placeholder": "Cari di sini..."})),om.dom.button.call(null,({"className": "btn btn-primary btn-action btn-lg"}),om.dom.span.call(null,({"className": "icon icon-search"}))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239260;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239259;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239258;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239257;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239256;
}});})(x239253_239265))
;


ebtanas.ui.root.SearchForm.prototype.constructor = ebtanas.ui.root.SearchForm;

ebtanas.ui.root.SearchForm.prototype.constructor.displayName = "ebtanas.ui.root/SearchForm";

ebtanas.ui.root.SearchForm.prototype.om$isComponent = true;

var x239263_239269 = ebtanas.ui.root.SearchForm;
/** @nocollapse */
x239263_239269.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239263_239269.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239263_239269){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x239263_239269))
;

/** @nocollapse */
x239263_239269.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239263_239269.om$next$IQuery$query$arity$1 = ((function (x239263_239269){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x239263_239269))
;


var x239264_239270 = ebtanas.ui.root.SearchForm.prototype;

x239264_239270.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239264_239270.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239264_239270){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x239264_239270))
;


x239264_239270.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239264_239270.om$next$IQuery$query$arity$1 = ((function (x239264_239270){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x239264_239270))
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

var x239275_239294 = ebtanas.ui.root.BodySwitcher.prototype;
x239275_239294.componentWillUpdate = ((function (x239275_239294){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239295 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239296 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239295,next_ident__41164__auto___239296)){
var idxr__41165__auto___239297 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239297 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239297),((function (idxr__41165__auto___239297,ident__41163__auto___239295,next_ident__41164__auto___239296,this__41159__auto__,x239275_239294){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239295], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239296], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239297,ident__41163__auto___239295,next_ident__41164__auto___239296,this__41159__auto__,x239275_239294))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239275_239294))
;

x239275_239294.shouldComponentUpdate = ((function (x239275_239294){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239277 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239277);
} else {
return G__239277;
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
});})(x239275_239294))
;

x239275_239294.componentWillUnmount = ((function (x239275_239294){
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
});})(x239275_239294))
;

x239275_239294.componentDidUpdate = ((function (x239275_239294){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239275_239294))
;

x239275_239294.isMounted = ((function (x239275_239294){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239275_239294))
;

x239275_239294.componentWillMount = ((function (x239275_239294){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239275_239294))
;

x239275_239294.render = ((function (x239275_239294){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239278 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239279 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239280 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239281 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239282 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239283 = om.next.props.call(null,this$);
var map__239283__$1 = ((((!((map__239283 == null)))?((((map__239283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239283):map__239283);
var props = map__239283__$1;
var component = cljs.core.get.call(null,map__239283__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return om.dom.section.call(null,({"className": "body section columns"}),om.dom.div.call(null,({"className": "container"}),(function (){var G__239285 = (((component instanceof cljs.core.Keyword))?component.fqn:null);
switch (G__239285) {
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239282;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239281;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239280;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239279;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239278;
}});})(x239275_239294))
;


ebtanas.ui.root.BodySwitcher.prototype.constructor = ebtanas.ui.root.BodySwitcher;

ebtanas.ui.root.BodySwitcher.prototype.constructor.displayName = "ebtanas.ui.root/BodySwitcher";

ebtanas.ui.root.BodySwitcher.prototype.om$isComponent = true;

var x239286_239299 = ebtanas.ui.root.BodySwitcher;
/** @nocollapse */
x239286_239299.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239286_239299.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239286_239299){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x239286_239299))
;

/** @nocollapse */
x239286_239299.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239286_239299.om$next$Ident$ident$arity$2 = ((function (x239286_239299){
return (function (this$,p__239287){
var map__239288 = p__239287;
var map__239288__$1 = ((((!((map__239288 == null)))?((((map__239288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239288):map__239288);
var component = cljs.core.get.call(null,map__239288__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__239288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x239286_239299))
;

/** @nocollapse */
x239286_239299.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239286_239299.om$next$IQuery$query$arity$1 = ((function (x239286_239299){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x239286_239299))
;


var x239290_239300 = ebtanas.ui.root.BodySwitcher.prototype;

x239290_239300.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239290_239300.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239290_239300){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x239290_239300))
;


x239290_239300.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x239290_239300.om$next$Ident$ident$arity$2 = ((function (x239290_239300){
return (function (this$,p__239291){
var map__239292 = p__239291;
var map__239292__$1 = ((((!((map__239292 == null)))?((((map__239292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239292):map__239292);
var component = cljs.core.get.call(null,map__239292__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__239292__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x239290_239300))
;


x239290_239300.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239290_239300.om$next$IQuery$query$arity$1 = ((function (x239290_239300){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x239290_239300))
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

var x239305_239317 = ebtanas.ui.root.Root.prototype;
x239305_239317.componentWillUpdate = ((function (x239305_239317){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239318 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239319 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239318,next_ident__41164__auto___239319)){
var idxr__41165__auto___239320 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239320 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239320),((function (idxr__41165__auto___239320,ident__41163__auto___239318,next_ident__41164__auto___239319,this__41159__auto__,x239305_239317){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239318], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239319], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239320,ident__41163__auto___239318,next_ident__41164__auto___239319,this__41159__auto__,x239305_239317))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239305_239317))
;

x239305_239317.shouldComponentUpdate = ((function (x239305_239317){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239307 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239307);
} else {
return G__239307;
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
});})(x239305_239317))
;

x239305_239317.componentWillUnmount = ((function (x239305_239317){
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
});})(x239305_239317))
;

x239305_239317.componentDidUpdate = ((function (x239305_239317){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239305_239317))
;

x239305_239317.isMounted = ((function (x239305_239317){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239305_239317))
;

x239305_239317.componentWillMount = ((function (x239305_239317){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239305_239317))
;

x239305_239317.render = ((function (x239305_239317){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239308 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239309 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239310 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239311 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239312 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239313 = om.next.props.call(null,this$);
var map__239313__$1 = ((((!((map__239313 == null)))?((((map__239313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239313):map__239313);
var react_key = cljs.core.get.call(null,map__239313__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var active_body = cljs.core.get.call(null,map__239313__$1,new cljs.core.Keyword(null,"active-body","active-body",-178611674));
return om.dom.div.call(null,({"id": "reactive", "key": react_key}),console.log("Props:",om.next.props.call(null,this$)),ebtanas.ui.root.body.call(null,active_body));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239312;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239311;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239310;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239309;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239308;
}});})(x239305_239317))
;


ebtanas.ui.root.Root.prototype.constructor = ebtanas.ui.root.Root;

ebtanas.ui.root.Root.prototype.constructor.displayName = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.prototype.om$isComponent = true;

var x239315_239321 = ebtanas.ui.root.Root;
/** @nocollapse */
x239315_239321.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239315_239321.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239315_239321){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x239315_239321))
;

/** @nocollapse */
x239315_239321.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239315_239321.om$next$IQuery$query$arity$1 = ((function (x239315_239321){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null)], null);
});})(x239315_239321))
;


var x239316_239322 = ebtanas.ui.root.Root.prototype;

x239316_239322.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239316_239322.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239316_239322){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x239316_239322))
;


x239316_239322.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239316_239322.om$next$IQuery$query$arity$1 = ((function (x239316_239322){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null)], null);
});})(x239316_239322))
;


ebtanas.ui.root.Root.cljs$lang$type = true;

ebtanas.ui.root.Root.cljs$lang$ctorStr = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1491717847187