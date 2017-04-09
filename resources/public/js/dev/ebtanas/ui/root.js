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
var this__41426__auto__ = this;
React.Component.apply(this__41426__auto__,arguments);

if(!((this__41426__auto__.initLocalState == null))){
this__41426__auto__.state = this__41426__auto__.initLocalState();
} else {
this__41426__auto__.state = {};
}

return this__41426__auto__;
});

ebtanas.ui.root.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x52365_52377 = ebtanas.ui.root.Root.prototype;
x52365_52377.componentWillUpdate = ((function (x52365_52377){
return (function (next_props__41272__auto__,next_state__41273__auto__){
var this__41271__auto__ = this;
if(((!((this__41271__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41271__auto__.om$next$Ident$)))?true:false):false)){
var ident__41275__auto___52378 = om.next.ident.call(null,this__41271__auto__,om.next.props.call(null,this__41271__auto__));
var next_ident__41276__auto___52379 = om.next.ident.call(null,this__41271__auto__,om.next._next_props.call(null,next_props__41272__auto__,this__41271__auto__));
if(cljs.core.not_EQ_.call(null,ident__41275__auto___52378,next_ident__41276__auto___52379)){
var idxr__41277__auto___52380 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41277__auto___52380 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41277__auto___52380),((function (idxr__41277__auto___52380,ident__41275__auto___52378,next_ident__41276__auto___52379,this__41271__auto__,x52365_52377){
return (function (indexes__41278__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41278__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41275__auto___52378], null),cljs.core.disj,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41276__auto___52379], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41271__auto__);
});})(idxr__41277__auto___52380,ident__41275__auto___52378,next_ident__41276__auto___52379,this__41271__auto__,x52365_52377))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41271__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41271__auto__);
});})(x52365_52377))
;

x52365_52377.shouldComponentUpdate = ((function (x52365_52377){
return (function (next_props__41272__auto__,next_state__41273__auto__){
var this__41271__auto__ = this;
var next_children__41274__auto__ = next_props__41272__auto__.children;
var next_props__41272__auto____$1 = goog.object.get(next_props__41272__auto__,"omcljs$value");
var next_props__41272__auto____$2 = (function (){var G__52367 = next_props__41272__auto____$1;
if((next_props__41272__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__52367);
} else {
return G__52367;
}
})();
var or__39222__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__41271__auto__),next_props__41272__auto____$2);
if(or__39222__auto__){
return or__39222__auto__;
} else {
var or__39222__auto____$1 = (function (){var and__39210__auto__ = this__41271__auto__.state;
if(cljs.core.truth_(and__39210__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__41271__auto__.state,"omcljs$state"),goog.object.get(next_state__41273__auto__,"omcljs$state"));
} else {
return and__39210__auto__;
}
})();
if(cljs.core.truth_(or__39222__auto____$1)){
return or__39222__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__41271__auto__.props.children,next_children__41274__auto__);
}
}
});})(x52365_52377))
;

x52365_52377.componentWillUnmount = ((function (x52365_52377){
return (function (){
var this__41271__auto__ = this;
var r__41282__auto__ = om.next.get_reconciler.call(null,this__41271__auto__);
var cfg__41283__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__41282__auto__);
var st__41284__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__41283__auto__);
var indexer__41281__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__41283__auto__);
if(cljs.core.truth_((function (){var and__39210__auto__ = !((st__41284__auto__ == null));
if(and__39210__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__41284__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__41271__auto__], null));
} else {
return and__39210__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__41284__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__41271__auto__);
} else {
}

if((indexer__41281__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__41281__auto__,this__41271__auto__);
}
});})(x52365_52377))
;

x52365_52377.componentDidUpdate = ((function (x52365_52377){
return (function (prev_props__41279__auto__,prev_state__41280__auto__){
var this__41271__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41271__auto__);
});})(x52365_52377))
;

x52365_52377.isMounted = ((function (x52365_52377){
return (function (){
var this__41271__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41271__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52365_52377))
;

x52365_52377.componentWillMount = ((function (x52365_52377){
return (function (){
var this__41271__auto__ = this;
var indexer__41281__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41281__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41281__auto__,this__41271__auto__);
}
});})(x52365_52377))
;

x52365_52377.render = ((function (x52365_52377){
return (function (){
var this__41270__auto__ = this;
var this$ = this__41270__auto__;
var _STAR_reconciler_STAR_52368 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52369 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52370 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52371 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52372 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41270__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41270__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41270__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41270__auto__);

om.next._STAR_parent_STAR_ = this__41270__auto__;

try{var map__52373 = om.next.props.call(null,this$);
var map__52373__$1 = ((((!((map__52373 == null)))?((((map__52373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52373):map__52373);
var a = cljs.core.get.call(null,map__52373__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return om.dom.h1.call(null,null,a);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52372;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52371;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52370;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52369;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52368;
}});})(x52365_52377))
;


ebtanas.ui.root.Root.prototype.constructor = ebtanas.ui.root.Root;

ebtanas.ui.root.Root.prototype.constructor.displayName = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.prototype.om$isComponent = true;

var x52375_52381 = ebtanas.ui.root.Root;
/** @nocollapse */
x52375_52381.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52375_52381.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52375_52381){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null);
});})(x52375_52381))
;

/** @nocollapse */
x52375_52381.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52375_52381.om$next$IQuery$query$arity$1 = ((function (x52375_52381){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null);
});})(x52375_52381))
;


var x52376_52382 = ebtanas.ui.root.Root.prototype;

x52376_52382.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52376_52382.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52376_52382){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null);
});})(x52376_52382))
;


x52376_52382.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52376_52382.om$next$IQuery$query$arity$1 = ((function (x52376_52382){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null);
});})(x52376_52382))
;


ebtanas.ui.root.Root.cljs$lang$type = true;

ebtanas.ui.root.Root.cljs$lang$ctorStr = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__41429__auto__,writer__41430__auto__,opt__41431__auto__){
return cljs.core._write.call(null,writer__41430__auto__,"ebtanas.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1491695672923