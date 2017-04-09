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

var x247978_248002 = ebtanas.ui.root.NavigationItem.prototype;
x247978_248002.componentWillUpdate = ((function (x247978_248002){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___248003 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___248004 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___248003,next_ident__41164__auto___248004)){
var idxr__41165__auto___248005 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___248005 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___248005),((function (idxr__41165__auto___248005,ident__41163__auto___248003,next_ident__41164__auto___248004,this__41159__auto__,x247978_248002){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___248003], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___248004], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___248005,ident__41163__auto___248003,next_ident__41164__auto___248004,this__41159__auto__,x247978_248002))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x247978_248002))
;

x247978_248002.shouldComponentUpdate = ((function (x247978_248002){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__247980 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__247980);
} else {
return G__247980;
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
});})(x247978_248002))
;

x247978_248002.componentWillUnmount = ((function (x247978_248002){
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
});})(x247978_248002))
;

x247978_248002.componentDidUpdate = ((function (x247978_248002){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x247978_248002))
;

x247978_248002.isMounted = ((function (x247978_248002){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x247978_248002))
;

x247978_248002.componentWillMount = ((function (x247978_248002){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x247978_248002))
;

x247978_248002.render = ((function (x247978_248002){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_247981 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_247982 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_247983 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_247984 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_247985 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__247986 = om.next.props.call(null,this$);
var map__247986__$1 = ((((!((map__247986 == null)))?((((map__247986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247986):map__247986);
var name = cljs.core.get.call(null,map__247986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.call(null,map__247986__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var url = cljs.core.get.call(null,map__247986__$1,new cljs.core.Keyword(null,"url","url",276297046));
var active = cljs.core.get.call(null,map__247986__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return om.dom.li.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("tab-item "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"active":null))].join('')}),om.dom.a.call(null,({"href": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')}),(cljs.core.truth_(icon)?om.dom.span.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("icon "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')})):null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_247985;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_247984;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_247983;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_247982;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_247981;
}});})(x247978_248002))
;


ebtanas.ui.root.NavigationItem.prototype.constructor = ebtanas.ui.root.NavigationItem;

ebtanas.ui.root.NavigationItem.prototype.constructor.displayName = "ebtanas.ui.root/NavigationItem";

ebtanas.ui.root.NavigationItem.prototype.om$isComponent = true;

var x247988_248006 = ebtanas.ui.root.NavigationItem;
/** @nocollapse */
x247988_248006.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247988_248006.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247988_248006){
return (function (this$,p__247989){
var map__247990 = p__247989;
var map__247990__$1 = ((((!((map__247990 == null)))?((((map__247990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247990):map__247990);
var name = cljs.core.get.call(null,map__247990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.call(null,map__247990__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var url = cljs.core.get.call(null,map__247990__$1,new cljs.core.Keyword(null,"url","url",276297046));
var active = cljs.core.get.call(null,map__247990__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"active","active",1895962068),active], null);
});})(x247988_248006))
;

/** @nocollapse */
x247988_248006.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247988_248006.om$next$Ident$ident$arity$2 = ((function (x247988_248006){
return (function (this$,p__247992){
var map__247993 = p__247992;
var map__247993__$1 = ((((!((map__247993 == null)))?((((map__247993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247993):map__247993);
var name = cljs.core.get.call(null,map__247993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navItem","by-name","navItem/by-name",-819651378),name], null);
});})(x247988_248006))
;

/** @nocollapse */
x247988_248006.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x247988_248006.om$next$IQuery$query$arity$1 = ((function (x247988_248006){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active","active",1895962068)], null);
});})(x247988_248006))
;


var x247995_248007 = ebtanas.ui.root.NavigationItem.prototype;

x247995_248007.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x247995_248007.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x247995_248007){
return (function (this$,p__247996){
var map__247997 = p__247996;
var map__247997__$1 = ((((!((map__247997 == null)))?((((map__247997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__247997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__247997):map__247997);
var name = cljs.core.get.call(null,map__247997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.call(null,map__247997__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var url = cljs.core.get.call(null,map__247997__$1,new cljs.core.Keyword(null,"url","url",276297046));
var active = cljs.core.get.call(null,map__247997__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"active","active",1895962068),active], null);
});})(x247995_248007))
;


x247995_248007.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x247995_248007.om$next$Ident$ident$arity$2 = ((function (x247995_248007){
return (function (this$,p__247999){
var map__248000 = p__247999;
var map__248000__$1 = ((((!((map__248000 == null)))?((((map__248000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248000):map__248000);
var name = cljs.core.get.call(null,map__248000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navItem","by-name","navItem/by-name",-819651378),name], null);
});})(x247995_248007))
;


x247995_248007.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x247995_248007.om$next$IQuery$query$arity$1 = ((function (x247995_248007){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active","active",1895962068)], null);
});})(x247995_248007))
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

var x248012_248030 = ebtanas.ui.root.Navigation.prototype;
x248012_248030.componentWillUpdate = ((function (x248012_248030){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___248031 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___248032 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___248031,next_ident__41164__auto___248032)){
var idxr__41165__auto___248033 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___248033 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___248033),((function (idxr__41165__auto___248033,ident__41163__auto___248031,next_ident__41164__auto___248032,this__41159__auto__,x248012_248030){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___248031], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___248032], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___248033,ident__41163__auto___248031,next_ident__41164__auto___248032,this__41159__auto__,x248012_248030))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x248012_248030))
;

x248012_248030.shouldComponentUpdate = ((function (x248012_248030){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__248014 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__248014);
} else {
return G__248014;
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
});})(x248012_248030))
;

x248012_248030.componentWillUnmount = ((function (x248012_248030){
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
});})(x248012_248030))
;

x248012_248030.componentDidUpdate = ((function (x248012_248030){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x248012_248030))
;

x248012_248030.isMounted = ((function (x248012_248030){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x248012_248030))
;

x248012_248030.componentWillMount = ((function (x248012_248030){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x248012_248030))
;

x248012_248030.render = ((function (x248012_248030){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_248015 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_248016 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_248017 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_248018 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_248019 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__248020 = om.next.props.call(null,this$);
var map__248020__$1 = ((((!((map__248020 == null)))?((((map__248020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248020):map__248020);
var menus = cljs.core.get.call(null,map__248020__$1,new cljs.core.Keyword(null,"menus","menus",-1377611675));
return om.dom.ul.call(null,({"className": "tab inline-flex"}),cljs.core.map.call(null,ebtanas.ui.root.navigation_item,menus));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_248019;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_248018;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_248017;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_248016;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_248015;
}});})(x248012_248030))
;


ebtanas.ui.root.Navigation.prototype.constructor = ebtanas.ui.root.Navigation;

ebtanas.ui.root.Navigation.prototype.constructor.displayName = "ebtanas.ui.root/Navigation";

ebtanas.ui.root.Navigation.prototype.om$isComponent = true;

var x248022_248034 = ebtanas.ui.root.Navigation;
/** @nocollapse */
x248022_248034.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248022_248034.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248022_248034){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Navigation Header",new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-home",new cljs.core.Keyword(null,"url","url",276297046),"/",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Bank Soal",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-library_books",new cljs.core.Keyword(null,"url","url",276297046),"#",new cljs.core.Keyword(null,"active","active",1895962068),false], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Daftar",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-people",new cljs.core.Keyword(null,"url","url",276297046),"#",new cljs.core.Keyword(null,"active","active",1895962068),false], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Masuk",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-exit_to_app",new cljs.core.Keyword(null,"url","url",276297046),"/login",new cljs.core.Keyword(null,"active","active",1895962068),false], null))], null)], null);
});})(x248022_248034))
;

/** @nocollapse */
x248022_248034.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248022_248034.om$next$Ident$ident$arity$2 = ((function (x248022_248034){
return (function (this$,p__248023){
var map__248024 = p__248023;
var map__248024__$1 = ((((!((map__248024 == null)))?((((map__248024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248024):map__248024);
var title = cljs.core.get.call(null,map__248024__$1,new cljs.core.Keyword(null,"title","title",636505583));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","by-title","nav/by-title",1652297931),title], null);
});})(x248022_248034))
;

/** @nocollapse */
x248022_248034.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248022_248034.om$next$IQuery$query$arity$1 = ((function (x248022_248034){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menus","menus",-1377611675),om.next.get_query.call(null,ebtanas.ui.root.NavigationItem)], null)], null);
});})(x248022_248034))
;


var x248026_248035 = ebtanas.ui.root.Navigation.prototype;

x248026_248035.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x248026_248035.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248026_248035){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Navigation Header",new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-home",new cljs.core.Keyword(null,"url","url",276297046),"/",new cljs.core.Keyword(null,"active","active",1895962068),true], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Bank Soal",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-library_books",new cljs.core.Keyword(null,"url","url",276297046),"#",new cljs.core.Keyword(null,"active","active",1895962068),false], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Daftar",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-people",new cljs.core.Keyword(null,"url","url",276297046),"#",new cljs.core.Keyword(null,"active","active",1895962068),false], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.NavigationItem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Masuk",new cljs.core.Keyword(null,"icon","icon",1679606541),"icon-exit_to_app",new cljs.core.Keyword(null,"url","url",276297046),"/login",new cljs.core.Keyword(null,"active","active",1895962068),false], null))], null)], null);
});})(x248026_248035))
;


x248026_248035.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x248026_248035.om$next$Ident$ident$arity$2 = ((function (x248026_248035){
return (function (this$,p__248027){
var map__248028 = p__248027;
var map__248028__$1 = ((((!((map__248028 == null)))?((((map__248028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248028):map__248028);
var title = cljs.core.get.call(null,map__248028__$1,new cljs.core.Keyword(null,"title","title",636505583));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","by-title","nav/by-title",1652297931),title], null);
});})(x248026_248035))
;


x248026_248035.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x248026_248035.om$next$IQuery$query$arity$1 = ((function (x248026_248035){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menus","menus",-1377611675),om.next.get_query.call(null,ebtanas.ui.root.NavigationItem)], null)], null);
});})(x248026_248035))
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

var x248040_248058 = ebtanas.ui.root.Header.prototype;
x248040_248058.componentWillUpdate = ((function (x248040_248058){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___248059 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___248060 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___248059,next_ident__41164__auto___248060)){
var idxr__41165__auto___248061 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___248061 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___248061),((function (idxr__41165__auto___248061,ident__41163__auto___248059,next_ident__41164__auto___248060,this__41159__auto__,x248040_248058){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___248059], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___248060], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___248061,ident__41163__auto___248059,next_ident__41164__auto___248060,this__41159__auto__,x248040_248058))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x248040_248058))
;

x248040_248058.shouldComponentUpdate = ((function (x248040_248058){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__248042 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__248042);
} else {
return G__248042;
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
});})(x248040_248058))
;

x248040_248058.componentWillUnmount = ((function (x248040_248058){
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
});})(x248040_248058))
;

x248040_248058.componentDidUpdate = ((function (x248040_248058){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x248040_248058))
;

x248040_248058.isMounted = ((function (x248040_248058){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x248040_248058))
;

x248040_248058.componentWillMount = ((function (x248040_248058){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x248040_248058))
;

x248040_248058.render = ((function (x248040_248058){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_248043 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_248044 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_248045 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_248046 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_248047 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__248048 = om.next.props.call(null,this$);
var map__248048__$1 = ((((!((map__248048 == null)))?((((map__248048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248048):map__248048);
var title = cljs.core.get.call(null,map__248048__$1,new cljs.core.Keyword(null,"title","title",636505583));
var navigation = cljs.core.get.call(null,map__248048__$1,new cljs.core.Keyword(null,"navigation","navigation",369417));
return om.dom.header.call(null,({"className": "navbar"}),om.dom.section.call(null,({"className": "navbar-section"}),om.dom.a.call(null,({"className": "navbar-brand", "href": "#"}),om.dom.i.call(null,({"className": "icon icon-pages"})),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''))),om.dom.section.call(null,({"className": "navbar-section"}),om.dom.ul.call(null,({"className": "tab inline-flex"}),ebtanas.ui.root.navigation_header_ui.call(null,navigation))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_248047;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_248046;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_248045;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_248044;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_248043;
}});})(x248040_248058))
;


ebtanas.ui.root.Header.prototype.constructor = ebtanas.ui.root.Header;

ebtanas.ui.root.Header.prototype.constructor.displayName = "ebtanas.ui.root/Header";

ebtanas.ui.root.Header.prototype.om$isComponent = true;

var x248050_248062 = ebtanas.ui.root.Header;
/** @nocollapse */
x248050_248062.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248050_248062.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248050_248062){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Ebtanas",new cljs.core.Keyword(null,"navigation","navigation",369417),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Navigation,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x248050_248062))
;

/** @nocollapse */
x248050_248062.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248050_248062.om$next$Ident$ident$arity$2 = ((function (x248050_248062){
return (function (this$,p__248051){
var map__248052 = p__248051;
var map__248052__$1 = ((((!((map__248052 == null)))?((((map__248052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248052):map__248052);
var title = cljs.core.get.call(null,map__248052__$1,new cljs.core.Keyword(null,"title","title",636505583));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","by-title","header/by-title",733010033),title], null);
});})(x248050_248062))
;

/** @nocollapse */
x248050_248062.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248050_248062.om$next$IQuery$query$arity$1 = ((function (x248050_248062){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigation","navigation",369417),om.next.get_query.call(null,ebtanas.ui.root.Navigation)], null)], null);
});})(x248050_248062))
;


var x248054_248063 = ebtanas.ui.root.Header.prototype;

x248054_248063.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x248054_248063.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248054_248063){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Ebtanas",new cljs.core.Keyword(null,"navigation","navigation",369417),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Navigation,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x248054_248063))
;


x248054_248063.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x248054_248063.om$next$Ident$ident$arity$2 = ((function (x248054_248063){
return (function (this$,p__248055){
var map__248056 = p__248055;
var map__248056__$1 = ((((!((map__248056 == null)))?((((map__248056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248056):map__248056);
var title = cljs.core.get.call(null,map__248056__$1,new cljs.core.Keyword(null,"title","title",636505583));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("header","by-title","header/by-title",733010033),title], null);
});})(x248054_248063))
;


x248054_248063.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x248054_248063.om$next$IQuery$query$arity$1 = ((function (x248054_248063){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigation","navigation",369417),om.next.get_query.call(null,ebtanas.ui.root.Navigation)], null)], null);
});})(x248054_248063))
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

var x248068_248080 = ebtanas.ui.root.LoginForm.prototype;
x248068_248080.componentWillUpdate = ((function (x248068_248080){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___248081 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___248082 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___248081,next_ident__41164__auto___248082)){
var idxr__41165__auto___248083 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___248083 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___248083),((function (idxr__41165__auto___248083,ident__41163__auto___248081,next_ident__41164__auto___248082,this__41159__auto__,x248068_248080){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___248081], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___248082], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___248083,ident__41163__auto___248081,next_ident__41164__auto___248082,this__41159__auto__,x248068_248080))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x248068_248080))
;

x248068_248080.shouldComponentUpdate = ((function (x248068_248080){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__248070 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__248070);
} else {
return G__248070;
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
});})(x248068_248080))
;

x248068_248080.componentWillUnmount = ((function (x248068_248080){
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
});})(x248068_248080))
;

x248068_248080.componentDidUpdate = ((function (x248068_248080){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x248068_248080))
;

x248068_248080.isMounted = ((function (x248068_248080){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x248068_248080))
;

x248068_248080.componentWillMount = ((function (x248068_248080){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x248068_248080))
;

x248068_248080.render = ((function (x248068_248080){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_248071 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_248072 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_248073 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_248074 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_248075 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__248076 = om.next.props.call(null,this$);
var map__248076__$1 = ((((!((map__248076 == null)))?((((map__248076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248076):map__248076);
var content = cljs.core.get.call(null,map__248076__$1,new cljs.core.Keyword(null,"content","content",15833224));
return om.dom.h1.call(null,null,cljs.core.prn_str.call(null,content));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_248075;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_248074;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_248073;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_248072;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_248071;
}});})(x248068_248080))
;


ebtanas.ui.root.LoginForm.prototype.constructor = ebtanas.ui.root.LoginForm;

ebtanas.ui.root.LoginForm.prototype.constructor.displayName = "ebtanas.ui.root/LoginForm";

ebtanas.ui.root.LoginForm.prototype.om$isComponent = true;

var x248078_248084 = ebtanas.ui.root.LoginForm;
/** @nocollapse */
x248078_248084.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248078_248084.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248078_248084){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x248078_248084))
;

/** @nocollapse */
x248078_248084.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248078_248084.om$next$IQuery$query$arity$1 = ((function (x248078_248084){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x248078_248084))
;


var x248079_248085 = ebtanas.ui.root.LoginForm.prototype;

x248079_248085.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x248079_248085.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248079_248085){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),true], null)], null);
});})(x248079_248085))
;


x248079_248085.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x248079_248085.om$next$IQuery$query$arity$1 = ((function (x248079_248085){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x248079_248085))
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

var x248090_248114 = ebtanas.ui.root.SubjectOption.prototype;
x248090_248114.componentWillUpdate = ((function (x248090_248114){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___248115 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___248116 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___248115,next_ident__41164__auto___248116)){
var idxr__41165__auto___248117 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___248117 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___248117),((function (idxr__41165__auto___248117,ident__41163__auto___248115,next_ident__41164__auto___248116,this__41159__auto__,x248090_248114){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___248115], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___248116], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___248117,ident__41163__auto___248115,next_ident__41164__auto___248116,this__41159__auto__,x248090_248114))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x248090_248114))
;

x248090_248114.shouldComponentUpdate = ((function (x248090_248114){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__248092 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__248092);
} else {
return G__248092;
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
});})(x248090_248114))
;

x248090_248114.componentWillUnmount = ((function (x248090_248114){
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
});})(x248090_248114))
;

x248090_248114.componentDidUpdate = ((function (x248090_248114){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x248090_248114))
;

x248090_248114.isMounted = ((function (x248090_248114){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x248090_248114))
;

x248090_248114.componentWillMount = ((function (x248090_248114){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x248090_248114))
;

x248090_248114.render = ((function (x248090_248114){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_248093 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_248094 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_248095 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_248096 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_248097 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__248098 = om.next.props.call(null,this$);
var map__248098__$1 = ((((!((map__248098 == null)))?((((map__248098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248098):map__248098);
var name = cljs.core.get.call(null,map__248098__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return om.dom.option.call(null,null,name);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_248097;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_248096;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_248095;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_248094;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_248093;
}});})(x248090_248114))
;


ebtanas.ui.root.SubjectOption.prototype.constructor = ebtanas.ui.root.SubjectOption;

ebtanas.ui.root.SubjectOption.prototype.constructor.displayName = "ebtanas.ui.root/SubjectOption";

ebtanas.ui.root.SubjectOption.prototype.om$isComponent = true;

var x248100_248118 = ebtanas.ui.root.SubjectOption;
/** @nocollapse */
x248100_248118.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248100_248118.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248100_248118){
return (function (this$,p__248101){
var map__248102 = p__248101;
var map__248102__$1 = ((((!((map__248102 == null)))?((((map__248102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248102):map__248102);
var name = cljs.core.get.call(null,map__248102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x248100_248118))
;

/** @nocollapse */
x248100_248118.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248100_248118.om$next$Ident$ident$arity$2 = ((function (x248100_248118){
return (function (this$,p__248104){
var map__248105 = p__248104;
var map__248105__$1 = ((((!((map__248105 == null)))?((((map__248105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248105):map__248105);
var name = cljs.core.get.call(null,map__248105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x248100_248118))
;

/** @nocollapse */
x248100_248118.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248100_248118.om$next$IQuery$query$arity$1 = ((function (x248100_248118){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x248100_248118))
;


var x248107_248119 = ebtanas.ui.root.SubjectOption.prototype;

x248107_248119.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x248107_248119.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248107_248119){
return (function (this$,p__248108){
var map__248109 = p__248108;
var map__248109__$1 = ((((!((map__248109 == null)))?((((map__248109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248109):map__248109);
var name = cljs.core.get.call(null,map__248109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});})(x248107_248119))
;


x248107_248119.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x248107_248119.om$next$Ident$ident$arity$2 = ((function (x248107_248119){
return (function (this$,p__248111){
var map__248112 = p__248111;
var map__248112__$1 = ((((!((map__248112 == null)))?((((map__248112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248112):map__248112);
var name = cljs.core.get.call(null,map__248112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subject","by-name","subject/by-name",142496376),name], null);
});})(x248107_248119))
;


x248107_248119.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x248107_248119.om$next$IQuery$query$arity$1 = ((function (x248107_248119){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x248107_248119))
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

var x248124_248136 = ebtanas.ui.root.SearchForm.prototype;
x248124_248136.componentWillUpdate = ((function (x248124_248136){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___248137 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___248138 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___248137,next_ident__41164__auto___248138)){
var idxr__41165__auto___248139 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___248139 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___248139),((function (idxr__41165__auto___248139,ident__41163__auto___248137,next_ident__41164__auto___248138,this__41159__auto__,x248124_248136){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___248137], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___248138], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___248139,ident__41163__auto___248137,next_ident__41164__auto___248138,this__41159__auto__,x248124_248136))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x248124_248136))
;

x248124_248136.shouldComponentUpdate = ((function (x248124_248136){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__248126 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__248126);
} else {
return G__248126;
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
});})(x248124_248136))
;

x248124_248136.componentWillUnmount = ((function (x248124_248136){
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
});})(x248124_248136))
;

x248124_248136.componentDidUpdate = ((function (x248124_248136){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x248124_248136))
;

x248124_248136.isMounted = ((function (x248124_248136){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x248124_248136))
;

x248124_248136.componentWillMount = ((function (x248124_248136){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x248124_248136))
;

x248124_248136.render = ((function (x248124_248136){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_248127 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_248128 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_248129 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_248130 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_248131 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__248132 = om.next.props.call(null,this$);
var map__248132__$1 = ((((!((map__248132 == null)))?((((map__248132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248132):map__248132);
var subjects = cljs.core.get.call(null,map__248132__$1,new cljs.core.Keyword(null,"subjects","subjects",21416729));
return om.dom.div.call(null,({"className": "search-form centered"}),om.dom.form.call(null,({"className": "form-horizontal"}),om.dom.div.call(null,({"className": "input-group"}),om.dom.select.call(null,({"className": "form-select select-lg"}),cljs.core.map.call(null,ebtanas.ui.root.subject_option,subjects)),om.dom.input.call(null,({"className": "form-input input-lg", "type": "text", "placeholder": "Cari di sini..."})),om.dom.button.call(null,({"className": "btn btn-primary btn-action btn-lg"}),om.dom.span.call(null,({"className": "icon icon-search"}))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_248131;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_248130;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_248129;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_248128;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_248127;
}});})(x248124_248136))
;


ebtanas.ui.root.SearchForm.prototype.constructor = ebtanas.ui.root.SearchForm;

ebtanas.ui.root.SearchForm.prototype.constructor.displayName = "ebtanas.ui.root/SearchForm";

ebtanas.ui.root.SearchForm.prototype.om$isComponent = true;

var x248134_248140 = ebtanas.ui.root.SearchForm;
/** @nocollapse */
x248134_248140.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248134_248140.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248134_248140){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x248134_248140))
;

/** @nocollapse */
x248134_248140.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248134_248140.om$next$IQuery$query$arity$1 = ((function (x248134_248140){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x248134_248140))
;


var x248135_248141 = ebtanas.ui.root.SearchForm.prototype;

x248135_248141.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x248135_248141.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248135_248141){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"subjects","subjects",21416729),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Matematika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Indonesia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"B. Inggris"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Fisika"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Kimia"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Biologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sosiologi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Geografi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Ekonomi"], null)),untangled.client.core.initial_state.call(null,ebtanas.ui.root.SubjectOption,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Sejarah"], null))], null)], null);
});})(x248135_248141))
;


x248135_248141.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x248135_248141.om$next$IQuery$query$arity$1 = ((function (x248135_248141){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subjects","subjects",21416729),om.next.get_query.call(null,ebtanas.ui.root.SubjectOption)], null)], null);
});})(x248135_248141))
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

var x248146_248165 = ebtanas.ui.root.BodySwitcher.prototype;
x248146_248165.componentWillUpdate = ((function (x248146_248165){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___248166 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___248167 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___248166,next_ident__41164__auto___248167)){
var idxr__41165__auto___248168 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___248168 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___248168),((function (idxr__41165__auto___248168,ident__41163__auto___248166,next_ident__41164__auto___248167,this__41159__auto__,x248146_248165){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___248166], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___248167], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___248168,ident__41163__auto___248166,next_ident__41164__auto___248167,this__41159__auto__,x248146_248165))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x248146_248165))
;

x248146_248165.shouldComponentUpdate = ((function (x248146_248165){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__248148 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__248148);
} else {
return G__248148;
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
});})(x248146_248165))
;

x248146_248165.componentWillUnmount = ((function (x248146_248165){
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
});})(x248146_248165))
;

x248146_248165.componentDidUpdate = ((function (x248146_248165){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x248146_248165))
;

x248146_248165.isMounted = ((function (x248146_248165){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x248146_248165))
;

x248146_248165.componentWillMount = ((function (x248146_248165){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x248146_248165))
;

x248146_248165.render = ((function (x248146_248165){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_248149 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_248150 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_248151 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_248152 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_248153 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__248154 = om.next.props.call(null,this$);
var map__248154__$1 = ((((!((map__248154 == null)))?((((map__248154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248154):map__248154);
var props = map__248154__$1;
var component = cljs.core.get.call(null,map__248154__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return om.dom.section.call(null,({"className": "body section columns"}),om.dom.div.call(null,({"className": "container"}),(function (){var G__248156 = (((component instanceof cljs.core.Keyword))?component.fqn:null);
switch (G__248156) {
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
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_248153;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_248152;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_248151;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_248150;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_248149;
}});})(x248146_248165))
;


ebtanas.ui.root.BodySwitcher.prototype.constructor = ebtanas.ui.root.BodySwitcher;

ebtanas.ui.root.BodySwitcher.prototype.constructor.displayName = "ebtanas.ui.root/BodySwitcher";

ebtanas.ui.root.BodySwitcher.prototype.om$isComponent = true;

var x248157_248170 = ebtanas.ui.root.BodySwitcher;
/** @nocollapse */
x248157_248170.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248157_248170.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248157_248170){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x248157_248170))
;

/** @nocollapse */
x248157_248170.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248157_248170.om$next$Ident$ident$arity$2 = ((function (x248157_248170){
return (function (this$,p__248158){
var map__248159 = p__248158;
var map__248159__$1 = ((((!((map__248159 == null)))?((((map__248159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248159):map__248159);
var component = cljs.core.get.call(null,map__248159__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__248159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x248157_248170))
;

/** @nocollapse */
x248157_248170.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248157_248170.om$next$IQuery$query$arity$1 = ((function (x248157_248170){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x248157_248170))
;


var x248161_248171 = ebtanas.ui.root.BodySwitcher.prototype;

x248161_248171.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x248161_248171.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248161_248171){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.SearchForm,cljs.core.PersistentArrayMap.EMPTY);
});})(x248161_248171))
;


x248161_248171.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x248161_248171.om$next$Ident$ident$arity$2 = ((function (x248161_248171){
return (function (this$,p__248162){
var map__248163 = p__248162;
var map__248163__$1 = ((((!((map__248163 == null)))?((((map__248163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248163):map__248163);
var component = cljs.core.get.call(null,map__248163__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__248163__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,id], null);
});})(x248161_248171))
;


x248161_248171.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x248161_248171.om$next$IQuery$query$arity$1 = ((function (x248161_248171){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.root.SearchForm),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.root.LoginForm)], null);
});})(x248161_248171))
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

var x248176_248188 = ebtanas.ui.root.Root.prototype;
x248176_248188.componentWillUpdate = ((function (x248176_248188){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___248189 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___248190 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___248189,next_ident__41164__auto___248190)){
var idxr__41165__auto___248191 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___248191 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___248191),((function (idxr__41165__auto___248191,ident__41163__auto___248189,next_ident__41164__auto___248190,this__41159__auto__,x248176_248188){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___248189], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___248190], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___248191,ident__41163__auto___248189,next_ident__41164__auto___248190,this__41159__auto__,x248176_248188))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x248176_248188))
;

x248176_248188.shouldComponentUpdate = ((function (x248176_248188){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__248178 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__248178);
} else {
return G__248178;
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
});})(x248176_248188))
;

x248176_248188.componentWillUnmount = ((function (x248176_248188){
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
});})(x248176_248188))
;

x248176_248188.componentDidUpdate = ((function (x248176_248188){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x248176_248188))
;

x248176_248188.isMounted = ((function (x248176_248188){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x248176_248188))
;

x248176_248188.componentWillMount = ((function (x248176_248188){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x248176_248188))
;

x248176_248188.render = ((function (x248176_248188){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_248179 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_248180 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_248181 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_248182 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_248183 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__248184 = om.next.props.call(null,this$);
var map__248184__$1 = ((((!((map__248184 == null)))?((((map__248184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__248184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__248184):map__248184);
var react_key = cljs.core.get.call(null,map__248184__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var active_body = cljs.core.get.call(null,map__248184__$1,new cljs.core.Keyword(null,"active-body","active-body",-178611674));
var header = cljs.core.get.call(null,map__248184__$1,new cljs.core.Keyword(null,"header","header",119441134));
return om.dom.div.call(null,({"id": "reactive", "key": react_key}),console.log("Props:",om.next.props.call(null,this$)),ebtanas.ui.root.header_ui.call(null,header),ebtanas.ui.root.body_ui.call(null,active_body));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_248183;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_248182;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_248181;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_248180;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_248179;
}});})(x248176_248188))
;


ebtanas.ui.root.Root.prototype.constructor = ebtanas.ui.root.Root;

ebtanas.ui.root.Root.prototype.constructor.displayName = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.prototype.om$isComponent = true;

var x248186_248192 = ebtanas.ui.root.Root;
/** @nocollapse */
x248186_248192.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248186_248192.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248186_248192){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"header","header",119441134),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Header,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x248186_248192))
;

/** @nocollapse */
x248186_248192.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x248186_248192.om$next$IQuery$query$arity$1 = ((function (x248186_248192){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),om.next.get_query.call(null,ebtanas.ui.root.Header)], null)], null);
});})(x248186_248192))
;


var x248187_248193 = ebtanas.ui.root.Root.prototype;

x248187_248193.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x248187_248193.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x248187_248193){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),"start",new cljs.core.Keyword(null,"header","header",119441134),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Header,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"active-body","active-body",-178611674),untangled.client.core.initial_state.call(null,ebtanas.ui.root.BodySwitcher,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x248187_248193))
;


x248187_248193.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x248187_248193.om$next$IQuery$query$arity$1 = ((function (x248187_248193){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-body","active-body",-178611674),om.next.get_query.call(null,ebtanas.ui.root.BodySwitcher)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),om.next.get_query.call(null,ebtanas.ui.root.Header)], null)], null);
});})(x248187_248193))
;


ebtanas.ui.root.Root.cljs$lang$type = true;

ebtanas.ui.root.Root.cljs$lang$ctorStr = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1491724578196