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
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

ebtanas.ui.main.MainPage.prototype = goog.object.clone(React.Component.prototype);
}

var x84445_84457 = ebtanas.ui.main.MainPage.prototype;
x84445_84457.componentWillUpdate = ((function (x84445_84457){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___84458 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___84459 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___84458,next_ident__42891__auto___84459)){
var idxr__42892__auto___84460 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___84460 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___84460),((function (idxr__42892__auto___84460,ident__42890__auto___84458,next_ident__42891__auto___84459,this__42886__auto__,x84445_84457){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___84458], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___84459], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___84460,ident__42890__auto___84458,next_ident__42891__auto___84459,this__42886__auto__,x84445_84457))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x84445_84457))
;

x84445_84457.shouldComponentUpdate = ((function (x84445_84457){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__84447 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__84447);
} else {
return G__84447;
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
});})(x84445_84457))
;

x84445_84457.componentWillUnmount = ((function (x84445_84457){
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
});})(x84445_84457))
;

x84445_84457.componentDidUpdate = ((function (x84445_84457){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x84445_84457))
;

x84445_84457.isMounted = ((function (x84445_84457){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x84445_84457))
;

x84445_84457.componentWillMount = ((function (x84445_84457){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x84445_84457))
;

x84445_84457.render = ((function (x84445_84457){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_84448 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_84449 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_84450 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_84451 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_84452 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__84453 = om.next.props.call(null,this$);
var map__84453__$1 = ((((!((map__84453 == null)))?((((map__84453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84453):map__84453);
var current_user = cljs.core.get.call(null,map__84453__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),om_css.core.local_class.call(null,ebtanas.ui.main.MainPage,"form")], null)),"MAIN PAGE");
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_84452;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_84451;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_84450;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_84449;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_84448;
}});})(x84445_84457))
;


ebtanas.ui.main.MainPage.prototype.constructor = ebtanas.ui.main.MainPage;

ebtanas.ui.main.MainPage.prototype.constructor.displayName = "ebtanas.ui.main/MainPage";

ebtanas.ui.main.MainPage.prototype.om$isComponent = true;

var x84455_84461 = ebtanas.ui.main.MainPage;
/** @nocollapse */
x84455_84461.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x84455_84461.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x84455_84461){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
});})(x84455_84461))
;

/** @nocollapse */
x84455_84461.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x84455_84461.om$next$IQuery$query$arity$1 = ((function (x84455_84461){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x84455_84461))
;

/** @nocollapse */
x84455_84461.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x84455_84461.om_css$core$CSS$css$arity$1 = ((function (x84455_84461){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.main.MainPage,new cljs.core.Keyword(null,"x","x",2099068185))], null)], null);
});})(x84455_84461))
;

/** @nocollapse */
x84455_84461.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x84455_84461.om$next$Ident$ident$arity$2 = ((function (x84455_84461){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x84455_84461))
;


var x84456_84462 = ebtanas.ui.main.MainPage.prototype;

x84456_84462.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x84456_84462.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x84456_84462){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"main","main",-2117802661)], null);
});})(x84456_84462))
;


x84456_84462.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x84456_84462.om$next$IQuery$query$arity$1 = ((function (x84456_84462){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x84456_84462))
;


x84456_84462.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x84456_84462.om_css$core$CSS$css$arity$1 = ((function (x84456_84462){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.main.MainPage,new cljs.core.Keyword(null,"x","x",2099068185))], null)], null);
});})(x84456_84462))
;


x84456_84462.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x84456_84462.om$next$Ident$ident$arity$2 = ((function (x84456_84462){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x84456_84462))
;


ebtanas.ui.main.MainPage.cljs$lang$type = true;

ebtanas.ui.main.MainPage.cljs$lang$ctorStr = "ebtanas.ui.main/MainPage";

ebtanas.ui.main.MainPage.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"ebtanas.ui.main/MainPage");
});
ebtanas.ui.main.ui_main = om.next.factory.call(null,ebtanas.ui.main.MainPage);

//# sourceMappingURL=main.js.map?rel=1491640820178