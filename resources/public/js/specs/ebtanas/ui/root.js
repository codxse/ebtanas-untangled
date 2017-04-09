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

var x239331_239343 = ebtanas.ui.root.LoginForm.prototype;
x239331_239343.componentWillUpdate = ((function (x239331_239343){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239344 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239345 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239344,next_ident__41164__auto___239345)){
var idxr__41165__auto___239346 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239346 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239346),((function (idxr__41165__auto___239346,ident__41163__auto___239344,next_ident__41164__auto___239345,this__41159__auto__,x239331_239343){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239344], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239345], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239346,ident__41163__auto___239344,next_ident__41164__auto___239345,this__41159__auto__,x239331_239343))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239331_239343))
;

x239331_239343.shouldComponentUpdate = ((function (x239331_239343){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239333 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239333);
} else {
return G__239333;
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
});})(x239331_239343))
;

x239331_239343.componentWillUnmount = ((function (x239331_239343){
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
});})(x239331_239343))
;

x239331_239343.componentDidUpdate = ((function (x239331_239343){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239331_239343))
;

x239331_239343.isMounted = ((function (x239331_239343){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239331_239343))
;

x239331_239343.componentWillMount = ((function (x239331_239343){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239331_239343))
;

x239331_239343.render = ((function (x239331_239343){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239334 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239335 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239336 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239337 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239338 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239339 = om.next.props.call(null,this$);
var map__239339__$1 = ((((!((map__239339 == null)))?((((map__239339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239339):map__239339);
var content = cljs.core.get.call(null,map__239339__$1,new cljs.core.Keyword(null,"content","content",15833224));
return om.dom.h1.call(null,null,cljs.core.prn_str.call(null,content));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239338;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239337;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239336;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239335;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239334;
}});})(x239331_239343))
;


ebtanas.ui.root.LoginForm.prototype.constructor = ebtanas.ui.root.LoginForm;

ebtanas.ui.root.LoginForm.prototype.constructor.displayName = "ebtanas.ui.root/LoginForm";

ebtanas.ui.root.LoginForm.prototype.om$isComponent = true;

var x239341_239347 = ebtanas.ui.root.LoginForm;
/** @nocollapse */
x239341_239347.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239341_239347.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239341_239347){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x239341_239347))
;

/** @nocollapse */
x239341_239347.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239341_239347.om$next$IQuery$query$arity$1 = ((function (x239341_239347){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x239341_239347))
;


var x239342_239348 = ebtanas.ui.root.LoginForm.prototype;

x239342_239348.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239342_239348.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239342_239348){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x239342_239348))
;


x239342_239348.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239342_239348.om$next$IQuery$query$arity$1 = ((function (x239342_239348){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x239342_239348))
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

var x239353_239377 = ebtanas.ui.root.SubjectOption.prototype;
x239353_239377.componentWillUpdate = ((function (x239353_239377){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239378 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239379 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239378,next_ident__41164__auto___239379)){
var idxr__41165__auto___239380 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239380 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239380),((function (idxr__41165__auto___239380,ident__41163__auto___239378,next_ident__41164__auto___239379,this__41159__auto__,x239353_239377){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239378], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239379], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239380,ident__41163__auto___239378,next_ident__41164__auto___239379,this__41159__auto__,x239353_239377))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239353_239377))
;

x239353_239377.shouldComponentUpdate = ((function (x239353_239377){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239355 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239355);
} else {
return G__239355;
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
});})(x239353_239377))
;

x239353_239377.componentWillUnmount = ((function (x239353_239377){
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
});})(x239353_239377))
;

x239353_239377.componentDidUpdate = ((function (x239353_239377){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239353_239377))
;

x239353_239377.isMounted = ((function (x239353_239377){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239353_239377))
;

x239353_239377.componentWillMount = ((function (x239353_239377){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239353_239377))
;

x239353_239377.render = ((function (x239353_239377){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239356 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239357 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239358 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239359 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239360 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239361 = om.next.props.call(null,this$);
var map__239361__$1 = ((((!((map__239361 == null)))?((((map__239361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239361):map__239361);
var name = cljs.core.get.call(null,map__239361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return om.dom.option.call(null,null,name);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239360;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239359;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239358;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239357;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239356;
}});})(x239353_239377))
;


ebtanas.ui.root.SubjectOption.prototype.constructor = ebtanas.ui.root.SubjectOption;

ebtanas.ui.root.SubjectOption.prototype.constructor.displayName = "ebtanas.ui.root/SubjectOption";

ebtanas.ui.root.SubjectOption.prototype.om$isComponent = true;

var x239363_239381 = ebtanas.ui.root.SubjectOption;
/** @nocollapse */
x239363_239381.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239363_239381.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239363_239381){
return (function (this$,p__239364){
var map__239365 = p__239364;
var map__239365__$1 = ((((!((map__239365 == null)))?((((map__239365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239365):map__239365);
var name = cljs.core.get.call(null,map__239365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x239363_239381))
;

/** @nocollapse */
x239363_239381.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239363_239381.om$next$Ident$ident$arity$2 = ((function (x239363_239381){
return (function (this$,p__239367){
var map__239368 = p__239367;
var map__239368__$1 = ((((!((map__239368 == null)))?((((map__239368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239368):map__239368);
var name = cljs.core.get.call(null,map__239368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x239363_239381))
;

/** @nocollapse */
x239363_239381.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239363_239381.om$next$IQuery$query$arity$1 = ((function (x239363_239381){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x239363_239381))
;


var x239370_239382 = ebtanas.ui.root.SubjectOption.prototype;

x239370_239382.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239370_239382.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239370_239382){
return (function (this$,p__239371){
var map__239372 = p__239371;
var map__239372__$1 = ((((!((map__239372 == null)))?((((map__239372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239372):map__239372);
var name = cljs.core.get.call(null,map__239372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x239370_239382))
;


x239370_239382.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x239370_239382.om$next$Ident$ident$arity$2 = ((function (x239370_239382){
return (function (this$,p__239374){
var map__239375 = p__239374;
var map__239375__$1 = ((((!((map__239375 == null)))?((((map__239375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239375):map__239375);
var name = cljs.core.get.call(null,map__239375__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x239370_239382))
;


x239370_239382.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239370_239382.om$next$IQuery$query$arity$1 = ((function (x239370_239382){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x239370_239382))
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

var x239387_239399 = ebtanas.ui.root.SearchForm.prototype;
x239387_239399.componentWillUpdate = ((function (x239387_239399){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239400 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239401 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239400,next_ident__41164__auto___239401)){
var idxr__41165__auto___239402 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239402 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239402),((function (idxr__41165__auto___239402,ident__41163__auto___239400,next_ident__41164__auto___239401,this__41159__auto__,x239387_239399){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239400], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239401], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239402,ident__41163__auto___239400,next_ident__41164__auto___239401,this__41159__auto__,x239387_239399))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239387_239399))
;

x239387_239399.shouldComponentUpdate = ((function (x239387_239399){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239389 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239389);
} else {
return G__239389;
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
});})(x239387_239399))
;

x239387_239399.componentWillUnmount = ((function (x239387_239399){
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
});})(x239387_239399))
;

x239387_239399.componentDidUpdate = ((function (x239387_239399){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239387_239399))
;

x239387_239399.isMounted = ((function (x239387_239399){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239387_239399))
;

x239387_239399.componentWillMount = ((function (x239387_239399){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239387_239399))
;

x239387_239399.render = ((function (x239387_239399){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239390 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239391 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239392 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239393 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239394 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239395 = om.next.props.call(null,this$);
var map__239395__$1 = ((((!((map__239395 == null)))?((((map__239395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239395):map__239395);
var subjects = cljs.core.get.call(null,map__239395__$1,new cljs.core.Keyword(null,"subjects","subjects",21416729));
return om.dom.div.call(null,({"className": "search-form centered"}),om.dom.form.call(null,({"className": "form-horizontal"}),om.dom.div.call(null,({"className": "input-group"}),om.dom.select.call(null,({"className": "form-select select-lg"}),cljs.core.map.call(null,ebtanas.ui.root.subject_option,subjects)),om.dom.input.call(null,({"className": "form-input input-lg", "type": "text", "placeholder": "Cari di sini..."})),om.dom.button.call(null,({"className": "btn btn-primary btn-action btn-lg"}),om.dom.span.call(null,({"className": "icon icon-search"}))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239394;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239393;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239392;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239391;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239390;
}});})(x239387_239399))
;


ebtanas.ui.root.SearchForm.prototype.constructor = ebtanas.ui.root.SearchForm;

ebtanas.ui.root.SearchForm.prototype.constructor.displayName = "ebtanas.ui.root/SearchForm";

ebtanas.ui.root.SearchForm.prototype.om$isComponent = true;

var x239397_239403 = ebtanas.ui.root.SearchForm;
/** @nocollapse */
x239397_239403.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239397_239403.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239397_239403){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x239397_239403))
;

/** @nocollapse */
x239397_239403.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239397_239403.om$next$IQuery$query$arity$1 = ((function (x239397_239403){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x239397_239403))
;


var x239398_239404 = ebtanas.ui.root.SearchForm.prototype;

x239398_239404.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239398_239404.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239398_239404){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x239398_239404))
;


x239398_239404.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239398_239404.om$next$IQuery$query$arity$1 = ((function (x239398_239404){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x239398_239404))
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

var x239409_239428 = ebtanas.ui.root.BodySwitcher.prototype;
x239409_239428.componentWillUpdate = ((function (x239409_239428){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239429 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239430 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239429,next_ident__41164__auto___239430)){
var idxr__41165__auto___239431 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239431 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239431),((function (idxr__41165__auto___239431,ident__41163__auto___239429,next_ident__41164__auto___239430,this__41159__auto__,x239409_239428){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239429], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239430], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239431,ident__41163__auto___239429,next_ident__41164__auto___239430,this__41159__auto__,x239409_239428))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239409_239428))
;

x239409_239428.shouldComponentUpdate = ((function (x239409_239428){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239411 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239411);
} else {
return G__239411;
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
});})(x239409_239428))
;

x239409_239428.componentWillUnmount = ((function (x239409_239428){
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
});})(x239409_239428))
;

x239409_239428.componentDidUpdate = ((function (x239409_239428){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239409_239428))
;

x239409_239428.isMounted = ((function (x239409_239428){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239409_239428))
;

x239409_239428.componentWillMount = ((function (x239409_239428){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239409_239428))
;

x239409_239428.render = ((function (x239409_239428){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239412 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239413 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239414 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239415 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239416 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239417 = om.next.props.call(null,this$);
var map__239417__$1 = ((((!((map__239417 == null)))?((((map__239417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239417):map__239417);
var props = map__239417__$1;
var component = cljs.core.get.call(null,map__239417__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return om.dom.section.call(null,({"className": "body section columns"}),om.dom.div.call(null,({"className": "container"}),(function (){var G__239419 = (((component instanceof cljs.core.Keyword))?component.fqn:null);
switch (G__239419) {
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239416;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239415;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239414;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239413;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239412;
}});})(x239409_239428))
;


ebtanas.ui.root.BodySwitcher.prototype.constructor = ebtanas.ui.root.BodySwitcher;

ebtanas.ui.root.BodySwitcher.prototype.constructor.displayName = "ebtanas.ui.root/BodySwitcher";

ebtanas.ui.root.BodySwitcher.prototype.om$isComponent = true;

var x239420_239433 = ebtanas.ui.root.BodySwitcher;
/** @nocollapse */
x239420_239433.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239420_239433.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239420_239433){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x239420_239433))
;

/** @nocollapse */
x239420_239433.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239420_239433.om$next$Ident$ident$arity$2 = ((function (x239420_239433){
return (function (this$,p__239421){
var map__239422 = p__239421;
var map__239422__$1 = ((((!((map__239422 == null)))?((((map__239422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239422):map__239422);
var component = cljs.core.get.call(null,map__239422__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__239422__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x239420_239433))
;

/** @nocollapse */
x239420_239433.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239420_239433.om$next$IQuery$query$arity$1 = ((function (x239420_239433){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x239420_239433))
;


var x239424_239434 = ebtanas.ui.root.BodySwitcher.prototype;

x239424_239434.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239424_239434.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239424_239434){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x239424_239434))
;


x239424_239434.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x239424_239434.om$next$Ident$ident$arity$2 = ((function (x239424_239434){
return (function (this$,p__239425){
var map__239426 = p__239425;
var map__239426__$1 = ((((!((map__239426 == null)))?((((map__239426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239426):map__239426);
var component = cljs.core.get.call(null,map__239426__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__239426__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x239424_239434))
;


x239424_239434.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239424_239434.om$next$IQuery$query$arity$1 = ((function (x239424_239434){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x239424_239434))
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

var x239439_239451 = ebtanas.ui.root.Root.prototype;
x239439_239451.componentWillUpdate = ((function (x239439_239451){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___239452 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___239453 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___239452,next_ident__41164__auto___239453)){
var idxr__41165__auto___239454 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___239454 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___239454),((function (idxr__41165__auto___239454,ident__41163__auto___239452,next_ident__41164__auto___239453,this__41159__auto__,x239439_239451){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___239452], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___239453], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___239454,ident__41163__auto___239452,next_ident__41164__auto___239453,this__41159__auto__,x239439_239451))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x239439_239451))
;

x239439_239451.shouldComponentUpdate = ((function (x239439_239451){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__239441 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__239441);
} else {
return G__239441;
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
});})(x239439_239451))
;

x239439_239451.componentWillUnmount = ((function (x239439_239451){
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
});})(x239439_239451))
;

x239439_239451.componentDidUpdate = ((function (x239439_239451){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x239439_239451))
;

x239439_239451.isMounted = ((function (x239439_239451){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x239439_239451))
;

x239439_239451.componentWillMount = ((function (x239439_239451){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x239439_239451))
;

x239439_239451.render = ((function (x239439_239451){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_239442 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_239443 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_239444 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_239445 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_239446 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__239447 = om.next.props.call(null,this$);
var map__239447__$1 = ((((!((map__239447 == null)))?((((map__239447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239447):map__239447);
var react_key = cljs.core.get.call(null,map__239447__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var active_body = cljs.core.get.call(null,map__239447__$1,new cljs.core.Keyword(null,"active-body","active-body",-178611674));
return om.dom.div.call(null,({"id": "reactive", "key": react_key}),console.log("Props:",om.next.props.call(null,this$)),ebtanas.ui.root.body.call(null,active_body));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_239446;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_239445;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_239444;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_239443;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_239442;
}});})(x239439_239451))
;


ebtanas.ui.root.Root.prototype.constructor = ebtanas.ui.root.Root;

ebtanas.ui.root.Root.prototype.constructor.displayName = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.prototype.om$isComponent = true;

var x239449_239455 = ebtanas.ui.root.Root;
/** @nocollapse */
x239449_239455.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239449_239455.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239449_239455){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x239449_239455))
;

/** @nocollapse */
x239449_239455.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x239449_239455.om$next$IQuery$query$arity$1 = ((function (x239449_239455){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null)], null);
});})(x239449_239455))
;


var x239450_239456 = ebtanas.ui.root.Root.prototype;

x239450_239456.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x239450_239456.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x239450_239456){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x239450_239456))
;


x239450_239456.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x239450_239456.om$next$IQuery$query$arity$1 = ((function (x239450_239456){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null)], null);
});})(x239450_239456))
;


ebtanas.ui.root.Root.cljs$lang$type = true;

ebtanas.ui.root.Root.cljs$lang$ctorStr = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1491717848669