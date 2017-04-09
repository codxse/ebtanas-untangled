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
if(typeof ebtanas.ui.root.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.Root = (function ebtanas$ui$root$Root(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

ebtanas.ui.root.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x111522_111534 = ebtanas.ui.root.Root.prototype;
x111522_111534.componentWillUpdate = ((function (x111522_111534){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___111535 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___111536 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___111535,next_ident__42891__auto___111536)){
var idxr__42892__auto___111537 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___111537 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___111537),((function (idxr__42892__auto___111537,ident__42890__auto___111535,next_ident__42891__auto___111536,this__42886__auto__,x111522_111534){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___111535], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___111536], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___111537,ident__42890__auto___111535,next_ident__42891__auto___111536,this__42886__auto__,x111522_111534))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x111522_111534))
;

x111522_111534.shouldComponentUpdate = ((function (x111522_111534){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__111524 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__111524);
} else {
return G__111524;
}
})();
var or__34555__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__42886__auto__),next_props__42887__auto____$2);
if(or__34555__auto__){
return or__34555__auto__;
} else {
var or__34555__auto____$1 = (function (){var and__34543__auto__ = this__42886__auto__.state;
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__42886__auto__.state,"omcljs$state"),goog.object.get(next_state__42888__auto__,"omcljs$state"));
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(or__34555__auto____$1)){
return or__34555__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__42886__auto__.props.children,next_children__42889__auto__);
}
}
});})(x111522_111534))
;

x111522_111534.componentWillUnmount = ((function (x111522_111534){
return (function (){
var this__42886__auto__ = this;
var r__42897__auto__ = om.next.get_reconciler.call(null,this__42886__auto__);
var cfg__42898__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__42897__auto__);
var st__42899__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__42898__auto__);
var indexer__42896__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__42898__auto__);
if(cljs.core.truth_((function (){var and__34543__auto__ = !((st__42899__auto__ == null));
if(and__34543__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__42899__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__42886__auto__], null));
} else {
return and__34543__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__42899__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__42886__auto__);
} else {
}

if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x111522_111534))
;

x111522_111534.componentDidUpdate = ((function (x111522_111534){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x111522_111534))
;

x111522_111534.isMounted = ((function (x111522_111534){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x111522_111534))
;

x111522_111534.componentWillMount = ((function (x111522_111534){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x111522_111534))
;

x111522_111534.render = ((function (x111522_111534){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_111525 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_111526 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_111527 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_111528 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_111529 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__111530 = om.next.props.call(null,this$);
var map__111530__$1 = ((((!((map__111530 == null)))?((((map__111530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__111530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__111530):map__111530);
var a = cljs.core.get.call(null,map__111530__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return om.dom.h1.call(null,null,a);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_111529;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_111528;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_111527;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_111526;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_111525;
}});})(x111522_111534))
;


ebtanas.ui.root.Root.prototype.constructor = ebtanas.ui.root.Root;

ebtanas.ui.root.Root.prototype.constructor.displayName = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.prototype.om$isComponent = true;

var x111532_111538 = ebtanas.ui.root.Root;
/** @nocollapse */
x111532_111538.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x111532_111538.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x111532_111538){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null);
});})(x111532_111538))
;

/** @nocollapse */
x111532_111538.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x111532_111538.om$next$IQuery$query$arity$1 = ((function (x111532_111538){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null);
});})(x111532_111538))
;


var x111533_111539 = ebtanas.ui.root.Root.prototype;

x111533_111539.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x111533_111539.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x111533_111539){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null);
});})(x111533_111539))
;


x111533_111539.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x111533_111539.om$next$IQuery$query$arity$1 = ((function (x111533_111539){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null);
});})(x111533_111539))
;


ebtanas.ui.root.Root.cljs$lang$type = true;

ebtanas.ui.root.Root.cljs$lang$ctorStr = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"ebtanas.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1491641831969