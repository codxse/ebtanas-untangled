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
if(typeof ebtanas.ui.root.NavigationItem !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.NavigationItem = (function ebtanas$ui$root$NavigationItem(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.root.NavigationItem.prototype = goog.object.clone(React.Component.prototype);
}

var x247530_247554 = ebtanas.ui.root.NavigationItem.prototype;
x247530_247554.componentWillUpdate = ((function (x247530_247554){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___247555 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___247556 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___247555,next_ident__41164__auto___247556)){
var idxr__41165__auto___247557 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___247557 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___247557),((function (idxr__41165__auto___247557,ident__41163__auto___247555,next_ident__41164__auto___247556,this__41159__auto__,x247530_247554){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___247555], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___247556], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___247557,ident__41163__auto___247555,next_ident__41164__auto___247556,this__41159__auto__,x247530_247554))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247530_247554))
;

x247530_247554.shouldComponentUpdate = ((function (x247530_247554){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247532 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247532);
} else {
return G__247532;
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
});})(x247530_247554))
;

x247530_247554.componentWillUnmount = ((function (x247530_247554){
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
});})(x247530_247554))
;

x247530_247554.componentDidUpdate = ((function (x247530_247554){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247530_247554))
;

x247530_247554.isMounted = ((function (x247530_247554){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247530_247554))
;

x247530_247554.componentWillMount = ((function (x247530_247554){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247530_247554))
;

x247530_247554.render = ((function (x247530_247554){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247533 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247534 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247535 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247536 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247537 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247538 = om.next.props.call(null,this$);
var map__247538__$1 = ((((!((map__247538 == null)))?((((map__247538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247538):map__247538);
var name = cljs.core.get.call(null,map__247538__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.call(null,map__247538__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var url = cljs.core.get.call(null,map__247538__$1,new cljs.core.Keyword(null,"url","url",276297046));
var active = cljs.core.get.call(null,map__247538__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return om.dom.li.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("tab-item "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active":null))].join('')}),om.dom.a.call(null,({"href": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')}),(cljs.core.truth_(icon)?om.dom.span.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("icon "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')})):null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247537;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247536;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247535;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247534;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247533;
}});})(x247530_247554))
;


ebtanas.ui.root.NavigationItem.prototype.constructor = ebtanas.ui.root.NavigationItem;

ebtanas.ui.root.NavigationItem.prototype.constructor.displayName = "ebtanas.ui.root/NavigationItem";

ebtanas.ui.root.NavigationItem.prototype.om$isComponent = true;

var x247540_247558 = ebtanas.ui.root.NavigationItem;
/** @nocollapse */
x247540_247558.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247540_247558.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247540_247558){
return (function (this$,p__247541){
var map__247542 = p__247541;
var map__247542__$1 = ((((!((map__247542 == null)))?((((map__247542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247542):map__247542);
var name = cljs.core.get.call(null,map__247542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.call(null,map__247542__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var url = cljs.core.get.call(null,map__247542__$1,new cljs.core.Keyword(null,"url","url",276297046));
var active = cljs.core.get.call(null,map__247542__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"active","active",1895962068),active], null);
});})(x247540_247558))
;

/** @nocollapse */
x247540_247558.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247540_247558.om$next$Ident$ident$arity$2 = ((function (x247540_247558){
return (function (this$,p__247544){
var map__247545 = p__247544;
var map__247545__$1 = ((((!((map__247545 == null)))?((((map__247545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247545):map__247545);
var name = cljs.core.get.call(null,map__247545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navItem","by-name","navItem/by-name",-819651378),name], null);
});})(x247540_247558))
;

/** @nocollapse */
x247540_247558.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247540_247558.om$next$IQuery$query$arity$1 = ((function (x247540_247558){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active","active",1895962068)], null);
});})(x247540_247558))
;


var x247547_247559 = ebtanas.ui.root.NavigationItem.prototype;

x247547_247559.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247547_247559.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247547_247559){
return (function (this$,p__247548){
var map__247549 = p__247548;
var map__247549__$1 = ((((!((map__247549 == null)))?((((map__247549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247549):map__247549);
var name = cljs.core.get.call(null,map__247549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.call(null,map__247549__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var url = cljs.core.get.call(null,map__247549__$1,new cljs.core.Keyword(null,"url","url",276297046));
var active = cljs.core.get.call(null,map__247549__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"active","active",1895962068),active], null);
});})(x247547_247559))
;


x247547_247559.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x247547_247559.om$next$Ident$ident$arity$2 = ((function (x247547_247559){
return (function (this$,p__247551){
var map__247552 = p__247551;
var map__247552__$1 = ((((!((map__247552 == null)))?((((map__247552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247552):map__247552);
var name = cljs.core.get.call(null,map__247552__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navItem","by-name","navItem/by-name",-819651378),name], null);
});})(x247547_247559))
;


x247547_247559.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247547_247559.om$next$IQuery$query$arity$1 = ((function (x247547_247559){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active","active",1895962068)], null);
});})(x247547_247559))
;


ebtanas.ui.root.NavigationItem.cljs$lang$type = true;

ebtanas.ui.root.NavigationItem.cljs$lang$ctorStr = "ebtanas.ui.root/NavigationItem";

ebtanas.ui.root.NavigationItem.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/NavigationItem");
});
ebtanas.ui.root.navigation_item = om.next.factory.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(typeof ebtanas.ui.root.Navigation !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.Navigation = (function ebtanas$ui$root$Navigation(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.root.Navigation.prototype = goog.object.clone(React.Component.prototype);
}

var x247564_247582 = ebtanas.ui.root.Navigation.prototype;
x247564_247582.componentWillUpdate = ((function (x247564_247582){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___247583 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___247584 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___247583,next_ident__41164__auto___247584)){
var idxr__41165__auto___247585 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___247585 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___247585),((function (idxr__41165__auto___247585,ident__41163__auto___247583,next_ident__41164__auto___247584,this__41159__auto__,x247564_247582){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___247583], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___247584], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___247585,ident__41163__auto___247583,next_ident__41164__auto___247584,this__41159__auto__,x247564_247582))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247564_247582))
;

x247564_247582.shouldComponentUpdate = ((function (x247564_247582){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247566 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247566);
} else {
return G__247566;
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
});})(x247564_247582))
;

x247564_247582.componentWillUnmount = ((function (x247564_247582){
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
});})(x247564_247582))
;

x247564_247582.componentDidUpdate = ((function (x247564_247582){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247564_247582))
;

x247564_247582.isMounted = ((function (x247564_247582){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247564_247582))
;

x247564_247582.componentWillMount = ((function (x247564_247582){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247564_247582))
;

x247564_247582.render = ((function (x247564_247582){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247567 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247568 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247569 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247570 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247571 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247572 = om.next.props.call(null,this$);
var map__247572__$1 = ((((!((map__247572 == null)))?((((map__247572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247572):map__247572);
var menus = cljs.core.get.call(null,map__247572__$1,new cljs.core.Keyword(null,"menus","menus",-1377611675));
return om.dom.ul.call(null,({"className": "tab inline-flex"}),cljs.core.map.call(null,ebtanas.ui.root.navigation_item,menus));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247571;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247570;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247569;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247568;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247567;
}});})(x247564_247582))
;


ebtanas.ui.root.Navigation.prototype.constructor = ebtanas.ui.root.Navigation;

ebtanas.ui.root.Navigation.prototype.constructor.displayName = "ebtanas.ui.root/Navigation";

ebtanas.ui.root.Navigation.prototype.om$isComponent = true;

var x247574_247586 = ebtanas.ui.root.Navigation;
/** @nocollapse */
x247574_247586.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247574_247586.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247574_247586){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Navigation Header",new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-home",new cljs.core.Keyword(null,"url","url",276297046),"/",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Bank Soal",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-library_books",new cljs.core.Keyword(null,"url","url",276297046),"#",new cljs.core.Keyword(null,"active","active",1895962068),false], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Daftar",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-people",new cljs.core.Keyword(null,"url","url",276297046),"#",new cljs.core.Keyword(null,"active","active",1895962068),false], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Masuk",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-exit_to_app",new cljs.core.Keyword(null,"url","url",276297046),"/login",new cljs.core.Keyword(null,"active","active",1895962068),false], null))], null)], null);
});})(x247574_247586))
;

/** @nocollapse */
x247574_247586.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247574_247586.om$next$Ident$ident$arity$2 = ((function (x247574_247586){
return (function (this$,p__247575){
var map__247576 = p__247575;
var map__247576__$1 = ((((!((map__247576 == null)))?((((map__247576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247576):map__247576);
var title = cljs.core.get.call(null,map__247576__$1,new cljs.core.Keyword(null,"title","title",636505583));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","by-title","nav/by-title",1652297931),title], null);
});})(x247574_247586))
;

/** @nocollapse */
x247574_247586.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247574_247586.om$next$IQuery$query$arity$1 = ((function (x247574_247586){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menus","menus",-1377611675),om.next.get_query.call(null,ebtanas.ui.root.NavigationItem)], null)], null);
});})(x247574_247586))
;


var x247578_247587 = ebtanas.ui.root.Navigation.prototype;

x247578_247587.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247578_247587.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247578_247587){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Navigation Header",new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-home",new cljs.core.Keyword(null,"url","url",276297046),"/",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Bank Soal",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-library_books",new cljs.core.Keyword(null,"url","url",276297046),"#",new cljs.core.Keyword(null,"active","active",1895962068),false], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Daftar",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-people",new cljs.core.Keyword(null,"url","url",276297046),"#",new cljs.core.Keyword(null,"active","active",1895962068),false], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Masuk",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-exit_to_app",new cljs.core.Keyword(null,"url","url",276297046),"/login",new cljs.core.Keyword(null,"active","active",1895962068),false], null))], null)], null);
});})(x247578_247587))
;


x247578_247587.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x247578_247587.om$next$Ident$ident$arity$2 = ((function (x247578_247587){
return (function (this$,p__247579){
var map__247580 = p__247579;
var map__247580__$1 = ((((!((map__247580 == null)))?((((map__247580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247580):map__247580);
var title = cljs.core.get.call(null,map__247580__$1,new cljs.core.Keyword(null,"title","title",636505583));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","by-title","nav/by-title",1652297931),title], null);
});})(x247578_247587))
;


x247578_247587.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247578_247587.om$next$IQuery$query$arity$1 = ((function (x247578_247587){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menus","menus",-1377611675),om.next.get_query.call(null,ebtanas.ui.root.NavigationItem)], null)], null);
});})(x247578_247587))
;


ebtanas.ui.root.Navigation.cljs$lang$type = true;

ebtanas.ui.root.Navigation.cljs$lang$ctorStr = "ebtanas.ui.root/Navigation";

ebtanas.ui.root.Navigation.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/Navigation");
});
ebtanas.ui.root.navigation_header_ui = om.next.factory.call(null,ebtanas.ui.root.Navigation);
if(typeof ebtanas.ui.root.Header !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.Header = (function ebtanas$ui$root$Header(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.root.Header.prototype = goog.object.clone(React.Component.prototype);
}

var x247592_247610 = ebtanas.ui.root.Header.prototype;
x247592_247610.componentWillUpdate = ((function (x247592_247610){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___247611 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___247612 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___247611,next_ident__41164__auto___247612)){
var idxr__41165__auto___247613 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___247613 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___247613),((function (idxr__41165__auto___247613,ident__41163__auto___247611,next_ident__41164__auto___247612,this__41159__auto__,x247592_247610){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___247611], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___247612], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___247613,ident__41163__auto___247611,next_ident__41164__auto___247612,this__41159__auto__,x247592_247610))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247592_247610))
;

x247592_247610.shouldComponentUpdate = ((function (x247592_247610){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247594 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247594);
} else {
return G__247594;
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
});})(x247592_247610))
;

x247592_247610.componentWillUnmount = ((function (x247592_247610){
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
});})(x247592_247610))
;

x247592_247610.componentDidUpdate = ((function (x247592_247610){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247592_247610))
;

x247592_247610.isMounted = ((function (x247592_247610){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247592_247610))
;

x247592_247610.componentWillMount = ((function (x247592_247610){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247592_247610))
;

x247592_247610.render = ((function (x247592_247610){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247595 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247596 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247597 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247598 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247599 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247600 = om.next.props.call(null,this$);
var map__247600__$1 = ((((!((map__247600 == null)))?((((map__247600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247600):map__247600);
var title = cljs.core.get.call(null,map__247600__$1,new cljs.core.Keyword(null,"title","title",636505583));
var navigation = cljs.core.get.call(null,map__247600__$1,new cljs.core.Keyword(null,"navigation","navigation",369417));
return om.dom.header.call(null,({"className": "navbar"}),om.dom.section.call(null,({"className": "navbar-section"}),om.dom.a.call(null,({"className": "navbar-brand", "href": "#"}),om.dom.i.call(null,({"className": "icon icon-pages"})),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''))),om.dom.section.call(null,({"className": "navbar-section"}),om.dom.ul.call(null,({"className": "tab inline-flex"}),ebtanas.ui.root.navigation_header_ui.call(null,navigation))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247599;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247598;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247597;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247596;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247595;
}});})(x247592_247610))
;


ebtanas.ui.root.Header.prototype.constructor = ebtanas.ui.root.Header;

ebtanas.ui.root.Header.prototype.constructor.displayName = "ebtanas.ui.root/Header";

ebtanas.ui.root.Header.prototype.om$isComponent = true;

var x247602_247614 = ebtanas.ui.root.Header;
/** @nocollapse */
x247602_247614.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247602_247614.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247602_247614){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Ebtanas",new cljs.core.Keyword(null,"navigation","navigation",369417),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Navigation,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x247602_247614))
;

/** @nocollapse */
x247602_247614.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247602_247614.om$next$Ident$ident$arity$2 = ((function (x247602_247614){
return (function (this$,p__247603){
var map__247604 = p__247603;
var map__247604__$1 = ((((!((map__247604 == null)))?((((map__247604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247604):map__247604);
var title = cljs.core.get.call(null,map__247604__$1,new cljs.core.Keyword(null,"title","title",636505583));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","by-title","header/by-title",733010033),title], null);
});})(x247602_247614))
;

/** @nocollapse */
x247602_247614.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247602_247614.om$next$IQuery$query$arity$1 = ((function (x247602_247614){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigation","navigation",369417),om.next.get_query.call(null,ebtanas.ui.root.Navigation)], null)], null);
});})(x247602_247614))
;


var x247606_247615 = ebtanas.ui.root.Header.prototype;

x247606_247615.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247606_247615.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247606_247615){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Ebtanas",new cljs.core.Keyword(null,"navigation","navigation",369417),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Navigation,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x247606_247615))
;


x247606_247615.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x247606_247615.om$next$Ident$ident$arity$2 = ((function (x247606_247615){
return (function (this$,p__247607){
var map__247608 = p__247607;
var map__247608__$1 = ((((!((map__247608 == null)))?((((map__247608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247608):map__247608);
var title = cljs.core.get.call(null,map__247608__$1,new cljs.core.Keyword(null,"title","title",636505583));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","by-title","header/by-title",733010033),title], null);
});})(x247606_247615))
;


x247606_247615.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247606_247615.om$next$IQuery$query$arity$1 = ((function (x247606_247615){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigation","navigation",369417),om.next.get_query.call(null,ebtanas.ui.root.Navigation)], null)], null);
});})(x247606_247615))
;


ebtanas.ui.root.Header.cljs$lang$type = true;

ebtanas.ui.root.Header.cljs$lang$ctorStr = "ebtanas.ui.root/Header";

ebtanas.ui.root.Header.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/Header");
});
ebtanas.ui.root.header_ui = om.next.factory.call(null,ebtanas.ui.root.Header);
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

var x247620_247632 = ebtanas.ui.root.LoginForm.prototype;
x247620_247632.componentWillUpdate = ((function (x247620_247632){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___247633 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___247634 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___247633,next_ident__41164__auto___247634)){
var idxr__41165__auto___247635 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___247635 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___247635),((function (idxr__41165__auto___247635,ident__41163__auto___247633,next_ident__41164__auto___247634,this__41159__auto__,x247620_247632){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___247633], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___247634], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___247635,ident__41163__auto___247633,next_ident__41164__auto___247634,this__41159__auto__,x247620_247632))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247620_247632))
;

x247620_247632.shouldComponentUpdate = ((function (x247620_247632){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247622 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247622);
} else {
return G__247622;
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
});})(x247620_247632))
;

x247620_247632.componentWillUnmount = ((function (x247620_247632){
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
});})(x247620_247632))
;

x247620_247632.componentDidUpdate = ((function (x247620_247632){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247620_247632))
;

x247620_247632.isMounted = ((function (x247620_247632){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247620_247632))
;

x247620_247632.componentWillMount = ((function (x247620_247632){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247620_247632))
;

x247620_247632.render = ((function (x247620_247632){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247623 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247624 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247625 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247626 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247627 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247628 = om.next.props.call(null,this$);
var map__247628__$1 = ((((!((map__247628 == null)))?((((map__247628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247628):map__247628);
var content = cljs.core.get.call(null,map__247628__$1,new cljs.core.Keyword(null,"content","content",15833224));
return om.dom.h1.call(null,null,cljs.core.prn_str.call(null,content));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247627;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247626;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247625;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247624;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247623;
}});})(x247620_247632))
;


ebtanas.ui.root.LoginForm.prototype.constructor = ebtanas.ui.root.LoginForm;

ebtanas.ui.root.LoginForm.prototype.constructor.displayName = "ebtanas.ui.root/LoginForm";

ebtanas.ui.root.LoginForm.prototype.om$isComponent = true;

var x247630_247636 = ebtanas.ui.root.LoginForm;
/** @nocollapse */
x247630_247636.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247630_247636.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247630_247636){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x247630_247636))
;

/** @nocollapse */
x247630_247636.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247630_247636.om$next$IQuery$query$arity$1 = ((function (x247630_247636){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x247630_247636))
;


var x247631_247637 = ebtanas.ui.root.LoginForm.prototype;

x247631_247637.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247631_247637.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247631_247637){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x247631_247637))
;


x247631_247637.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247631_247637.om$next$IQuery$query$arity$1 = ((function (x247631_247637){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x247631_247637))
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

var x247642_247666 = ebtanas.ui.root.SubjectOption.prototype;
x247642_247666.componentWillUpdate = ((function (x247642_247666){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___247667 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___247668 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___247667,next_ident__41164__auto___247668)){
var idxr__41165__auto___247669 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___247669 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___247669),((function (idxr__41165__auto___247669,ident__41163__auto___247667,next_ident__41164__auto___247668,this__41159__auto__,x247642_247666){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___247667], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___247668], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___247669,ident__41163__auto___247667,next_ident__41164__auto___247668,this__41159__auto__,x247642_247666))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247642_247666))
;

x247642_247666.shouldComponentUpdate = ((function (x247642_247666){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247644 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247644);
} else {
return G__247644;
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
});})(x247642_247666))
;

x247642_247666.componentWillUnmount = ((function (x247642_247666){
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
});})(x247642_247666))
;

x247642_247666.componentDidUpdate = ((function (x247642_247666){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247642_247666))
;

x247642_247666.isMounted = ((function (x247642_247666){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247642_247666))
;

x247642_247666.componentWillMount = ((function (x247642_247666){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247642_247666))
;

x247642_247666.render = ((function (x247642_247666){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247645 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247646 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247647 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247648 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247649 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247650 = om.next.props.call(null,this$);
var map__247650__$1 = ((((!((map__247650 == null)))?((((map__247650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247650):map__247650);
var name = cljs.core.get.call(null,map__247650__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return om.dom.option.call(null,null,name);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247649;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247648;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247647;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247646;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247645;
}});})(x247642_247666))
;


ebtanas.ui.root.SubjectOption.prototype.constructor = ebtanas.ui.root.SubjectOption;

ebtanas.ui.root.SubjectOption.prototype.constructor.displayName = "ebtanas.ui.root/SubjectOption";

ebtanas.ui.root.SubjectOption.prototype.om$isComponent = true;

var x247652_247670 = ebtanas.ui.root.SubjectOption;
/** @nocollapse */
x247652_247670.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247652_247670.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247652_247670){
return (function (this$,p__247653){
var map__247654 = p__247653;
var map__247654__$1 = ((((!((map__247654 == null)))?((((map__247654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247654):map__247654);
var name = cljs.core.get.call(null,map__247654__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x247652_247670))
;

/** @nocollapse */
x247652_247670.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247652_247670.om$next$Ident$ident$arity$2 = ((function (x247652_247670){
return (function (this$,p__247656){
var map__247657 = p__247656;
var map__247657__$1 = ((((!((map__247657 == null)))?((((map__247657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247657):map__247657);
var name = cljs.core.get.call(null,map__247657__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x247652_247670))
;

/** @nocollapse */
x247652_247670.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247652_247670.om$next$IQuery$query$arity$1 = ((function (x247652_247670){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x247652_247670))
;


var x247659_247671 = ebtanas.ui.root.SubjectOption.prototype;

x247659_247671.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247659_247671.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247659_247671){
return (function (this$,p__247660){
var map__247661 = p__247660;
var map__247661__$1 = ((((!((map__247661 == null)))?((((map__247661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247661):map__247661);
var name = cljs.core.get.call(null,map__247661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x247659_247671))
;


x247659_247671.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x247659_247671.om$next$Ident$ident$arity$2 = ((function (x247659_247671){
return (function (this$,p__247663){
var map__247664 = p__247663;
var map__247664__$1 = ((((!((map__247664 == null)))?((((map__247664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247664):map__247664);
var name = cljs.core.get.call(null,map__247664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x247659_247671))
;


x247659_247671.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247659_247671.om$next$IQuery$query$arity$1 = ((function (x247659_247671){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x247659_247671))
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

var x247676_247688 = ebtanas.ui.root.SearchForm.prototype;
x247676_247688.componentWillUpdate = ((function (x247676_247688){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___247689 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___247690 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___247689,next_ident__41164__auto___247690)){
var idxr__41165__auto___247691 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___247691 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___247691),((function (idxr__41165__auto___247691,ident__41163__auto___247689,next_ident__41164__auto___247690,this__41159__auto__,x247676_247688){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___247689], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___247690], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___247691,ident__41163__auto___247689,next_ident__41164__auto___247690,this__41159__auto__,x247676_247688))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247676_247688))
;

x247676_247688.shouldComponentUpdate = ((function (x247676_247688){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247678 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247678);
} else {
return G__247678;
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
});})(x247676_247688))
;

x247676_247688.componentWillUnmount = ((function (x247676_247688){
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
});})(x247676_247688))
;

x247676_247688.componentDidUpdate = ((function (x247676_247688){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247676_247688))
;

x247676_247688.isMounted = ((function (x247676_247688){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247676_247688))
;

x247676_247688.componentWillMount = ((function (x247676_247688){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247676_247688))
;

x247676_247688.render = ((function (x247676_247688){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247679 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247680 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247681 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247682 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247683 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247684 = om.next.props.call(null,this$);
var map__247684__$1 = ((((!((map__247684 == null)))?((((map__247684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247684):map__247684);
var subjects = cljs.core.get.call(null,map__247684__$1,new cljs.core.Keyword(null,"subjects","subjects",21416729));
return om.dom.div.call(null,({"className": "search-form centered"}),om.dom.form.call(null,({"className": "form-horizontal"}),om.dom.div.call(null,({"className": "input-group"}),om.dom.select.call(null,({"className": "form-select select-lg"}),cljs.core.map.call(null,ebtanas.ui.root.subject_option,subjects)),om.dom.input.call(null,({"className": "form-input input-lg", "type": "text", "placeholder": "Cari di sini..."})),om.dom.button.call(null,({"className": "btn btn-primary btn-action btn-lg"}),om.dom.span.call(null,({"className": "icon icon-search"}))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247683;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247682;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247681;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247680;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247679;
}});})(x247676_247688))
;


ebtanas.ui.root.SearchForm.prototype.constructor = ebtanas.ui.root.SearchForm;

ebtanas.ui.root.SearchForm.prototype.constructor.displayName = "ebtanas.ui.root/SearchForm";

ebtanas.ui.root.SearchForm.prototype.om$isComponent = true;

var x247686_247692 = ebtanas.ui.root.SearchForm;
/** @nocollapse */
x247686_247692.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247686_247692.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247686_247692){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x247686_247692))
;

/** @nocollapse */
x247686_247692.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247686_247692.om$next$IQuery$query$arity$1 = ((function (x247686_247692){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x247686_247692))
;


var x247687_247693 = ebtanas.ui.root.SearchForm.prototype;

x247687_247693.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247687_247693.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247687_247693){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x247687_247693))
;


x247687_247693.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247687_247693.om$next$IQuery$query$arity$1 = ((function (x247687_247693){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x247687_247693))
;


ebtanas.ui.root.SearchForm.cljs$lang$type = true;

ebtanas.ui.root.SearchForm.cljs$lang$ctorStr = "ebtanas.ui.root/SearchForm";

ebtanas.ui.root.SearchForm.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/SearchForm");
});
ebtanas.ui.root.search_ui = om.next.factory.call(null,ebtanas.ui.root.SearchForm);
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

var x247698_247717 = ebtanas.ui.root.BodySwitcher.prototype;
x247698_247717.componentWillUpdate = ((function (x247698_247717){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___247718 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___247719 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___247718,next_ident__41164__auto___247719)){
var idxr__41165__auto___247720 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___247720 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___247720),((function (idxr__41165__auto___247720,ident__41163__auto___247718,next_ident__41164__auto___247719,this__41159__auto__,x247698_247717){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___247718], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___247719], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___247720,ident__41163__auto___247718,next_ident__41164__auto___247719,this__41159__auto__,x247698_247717))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247698_247717))
;

x247698_247717.shouldComponentUpdate = ((function (x247698_247717){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247700 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247700);
} else {
return G__247700;
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
});})(x247698_247717))
;

x247698_247717.componentWillUnmount = ((function (x247698_247717){
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
});})(x247698_247717))
;

x247698_247717.componentDidUpdate = ((function (x247698_247717){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247698_247717))
;

x247698_247717.isMounted = ((function (x247698_247717){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247698_247717))
;

x247698_247717.componentWillMount = ((function (x247698_247717){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247698_247717))
;

x247698_247717.render = ((function (x247698_247717){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247701 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247702 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247703 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247704 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247705 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247706 = om.next.props.call(null,this$);
var map__247706__$1 = ((((!((map__247706 == null)))?((((map__247706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247706):map__247706);
var props = map__247706__$1;
var component = cljs.core.get.call(null,map__247706__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return om.dom.section.call(null,({"className": "body section columns"}),om.dom.div.call(null,({"className": "container"}),(function (){var G__247708 = (((component instanceof cljs.core.Keyword))?component.fqn:null);
switch (G__247708) {
case "main":
return ebtanas.ui.root.search_ui.call(null,props);

break;
case "login":
return ebtanas.ui.root.login_ui.call(null,props);

break;
default:
return om.dom.h1.call(null,null,"YOU ARE LOST!");

}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247705;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247704;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247703;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247702;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247701;
}});})(x247698_247717))
;


ebtanas.ui.root.BodySwitcher.prototype.constructor = ebtanas.ui.root.BodySwitcher;

ebtanas.ui.root.BodySwitcher.prototype.constructor.displayName = "ebtanas.ui.root/BodySwitcher";

ebtanas.ui.root.BodySwitcher.prototype.om$isComponent = true;

var x247709_247722 = ebtanas.ui.root.BodySwitcher;
/** @nocollapse */
x247709_247722.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247709_247722.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247709_247722){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x247709_247722))
;

/** @nocollapse */
x247709_247722.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247709_247722.om$next$Ident$ident$arity$2 = ((function (x247709_247722){
return (function (this$,p__247710){
var map__247711 = p__247710;
var map__247711__$1 = ((((!((map__247711 == null)))?((((map__247711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247711):map__247711);
var component = cljs.core.get.call(null,map__247711__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__247711__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x247709_247722))
;

/** @nocollapse */
x247709_247722.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247709_247722.om$next$IQuery$query$arity$1 = ((function (x247709_247722){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x247709_247722))
;


var x247713_247723 = ebtanas.ui.root.BodySwitcher.prototype;

x247713_247723.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247713_247723.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247713_247723){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x247713_247723))
;


x247713_247723.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x247713_247723.om$next$Ident$ident$arity$2 = ((function (x247713_247723){
return (function (this$,p__247714){
var map__247715 = p__247714;
var map__247715__$1 = ((((!((map__247715 == null)))?((((map__247715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247715):map__247715);
var component = cljs.core.get.call(null,map__247715__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__247715__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x247713_247723))
;


x247713_247723.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247713_247723.om$next$IQuery$query$arity$1 = ((function (x247713_247723){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x247713_247723))
;


ebtanas.ui.root.BodySwitcher.cljs$lang$type = true;

ebtanas.ui.root.BodySwitcher.cljs$lang$ctorStr = "ebtanas.ui.root/BodySwitcher";

ebtanas.ui.root.BodySwitcher.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/BodySwitcher");
});
ebtanas.ui.root.body_ui = om.next.factory.call(null,ebtanas.ui.root.BodySwitcher);
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

var x247728_247740 = ebtanas.ui.root.Root.prototype;
x247728_247740.componentWillUpdate = ((function (x247728_247740){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___247741 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___247742 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___247741,next_ident__41164__auto___247742)){
var idxr__41165__auto___247743 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___247743 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___247743),((function (idxr__41165__auto___247743,ident__41163__auto___247741,next_ident__41164__auto___247742,this__41159__auto__,x247728_247740){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___247741], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___247742], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___247743,ident__41163__auto___247741,next_ident__41164__auto___247742,this__41159__auto__,x247728_247740))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247728_247740))
;

x247728_247740.shouldComponentUpdate = ((function (x247728_247740){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247730 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247730);
} else {
return G__247730;
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
});})(x247728_247740))
;

x247728_247740.componentWillUnmount = ((function (x247728_247740){
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
});})(x247728_247740))
;

x247728_247740.componentDidUpdate = ((function (x247728_247740){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247728_247740))
;

x247728_247740.isMounted = ((function (x247728_247740){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247728_247740))
;

x247728_247740.componentWillMount = ((function (x247728_247740){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247728_247740))
;

x247728_247740.render = ((function (x247728_247740){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247731 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247732 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247733 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247734 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247735 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247736 = om.next.props.call(null,this$);
var map__247736__$1 = ((((!((map__247736 == null)))?((((map__247736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247736):map__247736);
var react_key = cljs.core.get.call(null,map__247736__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var active_body = cljs.core.get.call(null,map__247736__$1,new cljs.core.Keyword(null,"active-body","active-body",-178611674));
var header = cljs.core.get.call(null,map__247736__$1,new cljs.core.Keyword(null,"header","header",119441134));
return om.dom.div.call(null,({"id": "reactive", "key": react_key}),console.log("Props:",om.next.props.call(null,this$)),ebtanas.ui.root.header_ui.call(null,header),ebtanas.ui.root.body_ui.call(null,active_body));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247735;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247734;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247733;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247732;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247731;
}});})(x247728_247740))
;


ebtanas.ui.root.Root.prototype.constructor = ebtanas.ui.root.Root;

ebtanas.ui.root.Root.prototype.constructor.displayName = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.prototype.om$isComponent = true;

var x247738_247744 = ebtanas.ui.root.Root;
/** @nocollapse */
x247738_247744.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247738_247744.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247738_247744){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"header","header",119441134),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Header,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x247738_247744))
;

/** @nocollapse */
x247738_247744.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247738_247744.om$next$IQuery$query$arity$1 = ((function (x247738_247744){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),om.next.get_query.call(null,ebtanas.ui.root.Header)], null)], null);
});})(x247738_247744))
;


var x247739_247745 = ebtanas.ui.root.Root.prototype;

x247739_247745.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247739_247745.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247739_247745){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"header","header",119441134),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Header,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x247739_247745))
;


x247739_247745.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247739_247745.om$next$IQuery$query$arity$1 = ((function (x247739_247745){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),om.next.get_query.call(null,ebtanas.ui.root.Header)], null)], null);
});})(x247739_247745))
;


ebtanas.ui.root.Root.cljs$lang$type = true;

ebtanas.ui.root.Root.cljs$lang$ctorStr = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1491724574913