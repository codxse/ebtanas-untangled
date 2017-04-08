// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.components');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
ebtanas.ui.components.PlaceholderImage = (function ebtanas$ui$components$PlaceholderImage(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

ebtanas.ui.components.PlaceholderImage.prototype = goog.object.clone(React.Component.prototype);

var x107926_107938 = ebtanas.ui.components.PlaceholderImage.prototype;
x107926_107938.componentWillUpdate = ((function (x107926_107938){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___107939 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___107940 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___107939,next_ident__42891__auto___107940)){
var idxr__42892__auto___107941 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___107941 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___107941),((function (idxr__42892__auto___107941,ident__42890__auto___107939,next_ident__42891__auto___107940,this__42886__auto__,x107926_107938){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___107939], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___107940], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___107941,ident__42890__auto___107939,next_ident__42891__auto___107940,this__42886__auto__,x107926_107938))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x107926_107938))
;

x107926_107938.shouldComponentUpdate = ((function (x107926_107938){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__107928 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__107928);
} else {
return G__107928;
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
});})(x107926_107938))
;

x107926_107938.componentWillUnmount = ((function (x107926_107938){
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
});})(x107926_107938))
;

x107926_107938.componentDidUpdate = ((function (x107926_107938){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x107926_107938))
;

x107926_107938.isMounted = ((function (x107926_107938){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x107926_107938))
;

x107926_107938.componentWillMount = ((function (x107926_107938){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x107926_107938))
;

x107926_107938.render = ((function (x107926_107938){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_107929 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_107930 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_107931 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_107932 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_107933 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__107934 = om.next.props.call(null,this$);
var map__107934__$1 = ((((!((map__107934 == null)))?((((map__107934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107934):map__107934);
var w = cljs.core.get.call(null,map__107934__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__107934__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var label = cljs.core.get.call(null,map__107934__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var label__$1 = (function (){var or__34555__auto__ = label;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('');
}
})();
return om.dom.svg.call(null,({"width": w, "height": h}),om.dom.rect.call(null,({"width": w, "height": h, "style": ({"fill": "rgb(200,200,200)", "strokeWidth": (2), "stroke": "black"})})),om.dom.text.call(null,({"textAnchor": "middle", "x": (w / (2)), "y": (h / (2))}),label__$1));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_107933;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_107932;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_107931;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_107930;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_107929;
}});})(x107926_107938))
;


ebtanas.ui.components.PlaceholderImage.prototype.constructor = ebtanas.ui.components.PlaceholderImage;

ebtanas.ui.components.PlaceholderImage.prototype.constructor.displayName = "ebtanas.ui.components/PlaceholderImage";

ebtanas.ui.components.PlaceholderImage.prototype.om$isComponent = true;

var x107936_107942 = ebtanas.ui.components.PlaceholderImage;


var x107937_107943 = ebtanas.ui.components.PlaceholderImage.prototype;


ebtanas.ui.components.PlaceholderImage.cljs$lang$type = true;

ebtanas.ui.components.PlaceholderImage.cljs$lang$ctorStr = "ebtanas.ui.components/PlaceholderImage";

ebtanas.ui.components.PlaceholderImage.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"ebtanas.ui.components/PlaceholderImage");
});
ebtanas.ui.components.ui_placeholder = om.next.factory.call(null,ebtanas.ui.components.PlaceholderImage);

//# sourceMappingURL=components.js.map?rel=1491640861065