// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.components');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
ebtanas.ui.components.PlaceholderImage = (function ebtanas$ui$components$PlaceholderImage(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.components.PlaceholderImage.prototype = goog.object.clone(React.Component.prototype);

var x190124_190136 = ebtanas.ui.components.PlaceholderImage.prototype;
x190124_190136.componentWillUpdate = ((function (x190124_190136){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___190137 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___190138 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___190137,next_ident__41164__auto___190138)){
var idxr__41165__auto___190139 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___190139 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___190139),((function (idxr__41165__auto___190139,ident__41163__auto___190137,next_ident__41164__auto___190138,this__41159__auto__,x190124_190136){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___190137], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___190138], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___190139,ident__41163__auto___190137,next_ident__41164__auto___190138,this__41159__auto__,x190124_190136))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x190124_190136))
;

x190124_190136.shouldComponentUpdate = ((function (x190124_190136){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__190126 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__190126);
} else {
return G__190126;
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
});})(x190124_190136))
;

x190124_190136.componentWillUnmount = ((function (x190124_190136){
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
});})(x190124_190136))
;

x190124_190136.componentDidUpdate = ((function (x190124_190136){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x190124_190136))
;

x190124_190136.isMounted = ((function (x190124_190136){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x190124_190136))
;

x190124_190136.componentWillMount = ((function (x190124_190136){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x190124_190136))
;

x190124_190136.render = ((function (x190124_190136){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_190127 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_190128 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_190129 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_190130 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_190131 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__190132 = om.next.props.call(null,this$);
var map__190132__$1 = ((((!((map__190132 == null)))?((((map__190132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__190132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__190132):map__190132);
var w = cljs.core.get.call(null,map__190132__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__190132__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var label = cljs.core.get.call(null,map__190132__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var label__$1 = (function (){var or__39206__auto__ = label;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('');
}
})();
return om.dom.svg.call(null,({"width": w, "height": h}),om.dom.rect.call(null,({"width": w, "height": h, "style": ({"fill": "rgb(200,200,200)", "strokeWidth": (2), "stroke": "black"})})),om.dom.text.call(null,({"textAnchor": "middle", "x": (w / (2)), "y": (h / (2))}),label__$1));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_190131;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_190130;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_190129;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_190128;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_190127;
}});})(x190124_190136))
;


ebtanas.ui.components.PlaceholderImage.prototype.constructor = ebtanas.ui.components.PlaceholderImage;

ebtanas.ui.components.PlaceholderImage.prototype.constructor.displayName = "ebtanas.ui.components/PlaceholderImage";

ebtanas.ui.components.PlaceholderImage.prototype.om$isComponent = true;

var x190134_190140 = ebtanas.ui.components.PlaceholderImage;


var x190135_190141 = ebtanas.ui.components.PlaceholderImage.prototype;


ebtanas.ui.components.PlaceholderImage.cljs$lang$type = true;

ebtanas.ui.components.PlaceholderImage.cljs$lang$ctorStr = "ebtanas.ui.components/PlaceholderImage";

ebtanas.ui.components.PlaceholderImage.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.components/PlaceholderImage");
});
ebtanas.ui.components.ui_placeholder = om.next.factory.call(null,ebtanas.ui.components.PlaceholderImage);

//# sourceMappingURL=components.js.map?rel=1491715074114