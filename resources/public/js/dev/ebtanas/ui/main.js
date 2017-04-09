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
var this__41426__auto__ = this;
React.Component.apply(this__41426__auto__,arguments);

if(!((this__41426__auto__.initLocalState == null))){
this__41426__auto__.state = this__41426__auto__.initLocalState();
} else {
this__41426__auto__.state = {};
}

return this__41426__auto__;
});

ebtanas.ui.main.MainPage.prototype = goog.object.clone(React.Component.prototype);
}

var x52341_52353 = ebtanas.ui.main.MainPage.prototype;
x52341_52353.componentWillUpdate = ((function (x52341_52353){
return (function (next_props__41272__auto__,next_state__41273__auto__){
var this__41271__auto__ = this;
if(((!((this__41271__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41271__auto__.om$next$Ident$)))?true:false):false)){
var ident__41275__auto___52354 = om.next.ident.call(null,this__41271__auto__,om.next.props.call(null,this__41271__auto__));
var next_ident__41276__auto___52355 = om.next.ident.call(null,this__41271__auto__,om.next._next_props.call(null,next_props__41272__auto__,this__41271__auto__));
if(cljs.core.not_EQ_.call(null,ident__41275__auto___52354,next_ident__41276__auto___52355)){
var idxr__41277__auto___52356 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41277__auto___52356 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41277__auto___52356),((function (idxr__41277__auto___52356,ident__41275__auto___52354,next_ident__41276__auto___52355,this__41271__auto__,x52341_52353){
return (function (indexes__41278__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41278__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41275__auto___52354], null),cljs.core.disj,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41276__auto___52355], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41271__auto__);
});})(idxr__41277__auto___52356,ident__41275__auto___52354,next_ident__41276__auto___52355,this__41271__auto__,x52341_52353))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41271__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41271__auto__);
});})(x52341_52353))
;

x52341_52353.shouldComponentUpdate = ((function (x52341_52353){
return (function (next_props__41272__auto__,next_state__41273__auto__){
var this__41271__auto__ = this;
var next_children__41274__auto__ = next_props__41272__auto__.children;
var next_props__41272__auto____$1 = goog.object.get(next_props__41272__auto__,"omcljs$value");
var next_props__41272__auto____$2 = (function (){var G__52343 = next_props__41272__auto____$1;
if((next_props__41272__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__52343);
} else {
return G__52343;
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
});})(x52341_52353))
;

x52341_52353.componentWillUnmount = ((function (x52341_52353){
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
});})(x52341_52353))
;

x52341_52353.componentDidUpdate = ((function (x52341_52353){
return (function (prev_props__41279__auto__,prev_state__41280__auto__){
var this__41271__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41271__auto__);
});})(x52341_52353))
;

x52341_52353.isMounted = ((function (x52341_52353){
return (function (){
var this__41271__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41271__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52341_52353))
;

x52341_52353.componentWillMount = ((function (x52341_52353){
return (function (){
var this__41271__auto__ = this;
var indexer__41281__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41281__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41281__auto__,this__41271__auto__);
}
});})(x52341_52353))
;

x52341_52353.render = ((function (x52341_52353){
return (function (){
var this__41270__auto__ = this;
var this$ = this__41270__auto__;
var _STAR_reconciler_STAR_52344 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52345 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52346 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52347 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52348 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41270__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41270__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41270__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41270__auto__);

om.next._STAR_parent_STAR_ = this__41270__auto__;

try{var map__52349 = om.next.props.call(null,this$);
var map__52349__$1 = ((((!((map__52349 == null)))?((((map__52349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52349):map__52349);
var current_user = cljs.core.get.call(null,map__52349__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),om_css.core.local_class.call(null,ebtanas.ui.main.MainPage,"form")], null)),"MAIN PAGE");
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52348;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52347;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52346;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52345;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52344;
}});})(x52341_52353))
;


ebtanas.ui.main.MainPage.prototype.constructor = ebtanas.ui.main.MainPage;

ebtanas.ui.main.MainPage.prototype.constructor.displayName = "ebtanas.ui.main/MainPage";

ebtanas.ui.main.MainPage.prototype.om$isComponent = true;

var x52351_52357 = ebtanas.ui.main.MainPage;
/** @nocollapse */
x52351_52357.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52351_52357.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52351_52357){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
});})(x52351_52357))
;

/** @nocollapse */
x52351_52357.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52351_52357.om$next$IQuery$query$arity$1 = ((function (x52351_52357){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x52351_52357))
;

/** @nocollapse */
x52351_52357.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52351_52357.om_css$core$CSS$css$arity$1 = ((function (x52351_52357){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.main.MainPage,new cljs.core.Keyword(null,"x","x",2099068185))], null)], null);
});})(x52351_52357))
;

/** @nocollapse */
x52351_52357.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52351_52357.om$next$Ident$ident$arity$2 = ((function (x52351_52357){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x52351_52357))
;


var x52352_52358 = ebtanas.ui.main.MainPage.prototype;

x52352_52358.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52352_52358.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52352_52358){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
});})(x52352_52358))
;


x52352_52358.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52352_52358.om$next$IQuery$query$arity$1 = ((function (x52352_52358){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x52352_52358))
;


x52352_52358.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x52352_52358.om_css$core$CSS$css$arity$1 = ((function (x52352_52358){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.main.MainPage,new cljs.core.Keyword(null,"x","x",2099068185))], null)], null);
});})(x52352_52358))
;


x52352_52358.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x52352_52358.om$next$Ident$ident$arity$2 = ((function (x52352_52358){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x52352_52358))
;


ebtanas.ui.main.MainPage.cljs$lang$type = true;

ebtanas.ui.main.MainPage.cljs$lang$ctorStr = "ebtanas.ui.main/MainPage";

ebtanas.ui.main.MainPage.cljs$lang$ctorPrWriter = (function (this__41429__auto__,writer__41430__auto__,opt__41431__auto__){
return cljs.core._write.call(null,writer__41430__auto__,"ebtanas.ui.main/MainPage");
});
ebtanas.ui.main.ui_main = om.next.factory.call(null,ebtanas.ui.main.MainPage);

//# sourceMappingURL=main.js.map?rel=1491695672817