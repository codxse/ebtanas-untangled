// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.main');
goog.require('cljs.core');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('om.dom');
goog.require('om_css.core');
goog.require('untangled.client.mutations');
if(typeof ebtanas.ui.main.MainPage !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.main.MainPage = (function ebtanas$ui$main$MainPage(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.main.MainPage.prototype = goog.object.clone(React.Component.prototype);
}

var x187643_187655 = ebtanas.ui.main.MainPage.prototype;
x187643_187655.componentWillUpdate = ((function (x187643_187655){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___187656 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___187657 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___187656,next_ident__41164__auto___187657)){
var idxr__41165__auto___187658 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___187658 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___187658),((function (idxr__41165__auto___187658,ident__41163__auto___187656,next_ident__41164__auto___187657,this__41159__auto__,x187643_187655){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___187656], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___187657], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___187658,ident__41163__auto___187656,next_ident__41164__auto___187657,this__41159__auto__,x187643_187655))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x187643_187655))
;

x187643_187655.shouldComponentUpdate = ((function (x187643_187655){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__187645 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__187645);
} else {
return G__187645;
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
});})(x187643_187655))
;

x187643_187655.componentWillUnmount = ((function (x187643_187655){
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
});})(x187643_187655))
;

x187643_187655.componentDidUpdate = ((function (x187643_187655){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x187643_187655))
;

x187643_187655.isMounted = ((function (x187643_187655){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x187643_187655))
;

x187643_187655.componentWillMount = ((function (x187643_187655){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x187643_187655))
;

x187643_187655.render = ((function (x187643_187655){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_187646 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_187647 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_187648 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_187649 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_187650 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__187651 = om.next.props.call(null,this$);
var map__187651__$1 = ((((!((map__187651 == null)))?((((map__187651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__187651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__187651):map__187651);
var current_user = cljs.core.get.call(null,map__187651__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),om_css.core.local_class.call(null,ebtanas.ui.main.MainPage,"form")], null)),"MAIN PAGE");
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_187650;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_187649;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_187648;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_187647;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_187646;
}});})(x187643_187655))
;


ebtanas.ui.main.MainPage.prototype.constructor = ebtanas.ui.main.MainPage;

ebtanas.ui.main.MainPage.prototype.constructor.displayName = "ebtanas.ui.main/MainPage";

ebtanas.ui.main.MainPage.prototype.om$isComponent = true;

var x187653_187659 = ebtanas.ui.main.MainPage;
/** @nocollapse */
x187653_187659.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x187653_187659.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x187653_187659){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
});})(x187653_187659))
;

/** @nocollapse */
x187653_187659.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x187653_187659.om$next$IQuery$query$arity$1 = ((function (x187653_187659){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x187653_187659))
;

/** @nocollapse */
x187653_187659.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x187653_187659.om_css$core$CSS$css$arity$1 = ((function (x187653_187659){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.main.MainPage,new cljs.core.Keyword(null,"x","x",2099068185))], null)], null);
});})(x187653_187659))
;

/** @nocollapse */
x187653_187659.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x187653_187659.om$next$Ident$ident$arity$2 = ((function (x187653_187659){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x187653_187659))
;


var x187654_187660 = ebtanas.ui.main.MainPage.prototype;

x187654_187660.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x187654_187660.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x187654_187660){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
});})(x187654_187660))
;


x187654_187660.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x187654_187660.om$next$IQuery$query$arity$1 = ((function (x187654_187660){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x187654_187660))
;


x187654_187660.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x187654_187660.om_css$core$CSS$css$arity$1 = ((function (x187654_187660){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.main.MainPage,new cljs.core.Keyword(null,"x","x",2099068185))], null)], null);
});})(x187654_187660))
;


x187654_187660.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x187654_187660.om$next$Ident$ident$arity$2 = ((function (x187654_187660){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x187654_187660))
;


ebtanas.ui.main.MainPage.cljs$lang$type = true;

ebtanas.ui.main.MainPage.cljs$lang$ctorStr = "ebtanas.ui.main/MainPage";

ebtanas.ui.main.MainPage.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.main/MainPage");
});
ebtanas.ui.main.ui_main = om.next.factory.call(null,ebtanas.ui.main.MainPage);

//# sourceMappingURL=main.js.map?rel=1491715071309