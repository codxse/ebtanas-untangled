// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.ui.elements');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('untangled.ui.menu');
goog.require('untangled.icons');
goog.require('untangled.events');
goog.require('untangled.client.logging');
/**
 * Wrap children in a span where the :visible attribute
 *   is a boolean indicating the visibility of the children.
 * 
 *   Props is a clj(s) map of normal React attributes.
 * 
 *   `:inline?` - A boolean (default false). When true, emits a `span`, else `div`.
 * 
 *   You can get this same effect using the `u-fade-in` and `u-fade-out` CSS classes. See the CSS Guide.
 * 
 *   When the resulting span becomes visible it fades in, and when it becomes hidden it fades out.
 */
untangled.ui.elements.ui_fader = (function untangled$ui$elements$ui_fader(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62657 = arguments.length;
var i__35777__auto___62658 = (0);
while(true){
if((i__35777__auto___62658 < len__35776__auto___62657)){
args__35783__auto__.push((arguments[i__35777__auto___62658]));

var G__62659 = (i__35777__auto___62658 + (1));
i__35777__auto___62658 = G__62659;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic = (function (p__62654,children){
var map__62655 = p__62654;
var map__62655__$1 = ((((!((map__62655 == null)))?((((map__62655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62655):map__62655);
var props = map__62655__$1;
var inline_QMARK_ = cljs.core.get.call(null,map__62655__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var visible = cljs.core.get.call(null,map__62655__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var className = (function (){var or__34555__auto__ = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return "";
}
})();
var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" u-fade-out"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(visible)?" u-fade-in":null))].join('');
var wrapper = (cljs.core.truth_(inline_QMARK_)?om.dom.span:om.dom.div);
var attrs = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"visible","visible",-1024216805)),new cljs.core.Keyword(null,"className","className",-1983287057),classes));
return cljs.core.apply.call(null,wrapper,attrs,children);
});

untangled.ui.elements.ui_fader.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_fader.cljs$lang$applyTo = (function (seq62652){
var G__62653 = cljs.core.first.call(null,seq62652);
var seq62652__$1 = cljs.core.next.call(null,seq62652);
return untangled.ui.elements.ui_fader.cljs$core$IFn$_invoke$arity$variadic(G__62653,seq62652__$1);
});

/**
 * Returns the react-instance (which is logically true) iff the given react instance is an instance of the given react class.
 *   Otherwise returns nil.
 */
untangled.ui.elements.react_instance_QMARK_ = (function untangled$ui$elements$react_instance_QMARK_(react_class,react_instance){
if(cljs.core.truth_(react_class)){
} else {
throw (new Error("Assert failed: react-class"));
}

if(cljs.core.truth_(react_instance)){
} else {
throw (new Error("Assert failed: react-instance"));
}

if(cljs.core._EQ_.call(null,react_instance.type,react_class)){
return react_instance;
} else {
return null;
}
});
/**
 * Finds (and returns) the first child that is an instance of the given React class (or nil if not found).
 */
untangled.ui.elements.first_node = (function untangled$ui$elements$first_node(react_class,sequence_of_react_instances){
return cljs.core.some.call(null,(function (p1__62660_SHARP_){
return untangled.ui.elements.react_instance_QMARK_.call(null,react_class,p1__62660_SHARP_);
}),sequence_of_react_instances);
});
untangled.ui.elements.update_frame_content = (function untangled$ui$elements$update_frame_content(this$,child){
var frame_component = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"frame-component","frame-component",-1147234187));
if(cljs.core.truth_(frame_component)){
return ReactDOM.render(child,frame_component);
} else {
return null;
}
});
/**
 * @constructor
 */
untangled.ui.elements.IFrame = (function untangled$ui$elements$IFrame(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled.ui.elements.IFrame.prototype = goog.object.clone(React.Component.prototype);

var x62665_62677 = untangled.ui.elements.IFrame.prototype;
x62665_62677.componentWillUpdate = ((function (x62665_62677){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___62678 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___62679 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___62678,next_ident__42891__auto___62679)){
var idxr__42892__auto___62680 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___62680 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___62680),((function (idxr__42892__auto___62680,ident__42890__auto___62678,next_ident__42891__auto___62679,this__42886__auto__,x62665_62677){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___62678], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___62679], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___62680,ident__42890__auto___62678,next_ident__42891__auto___62679,this__42886__auto__,x62665_62677))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x62665_62677))
;

x62665_62677.shouldComponentUpdate = ((function (x62665_62677){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__62667 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62667);
} else {
return G__62667;
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
});})(x62665_62677))
;

x62665_62677.componentWillUnmount = ((function (x62665_62677){
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
});})(x62665_62677))
;

x62665_62677.isMounted = ((function (x62665_62677){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62665_62677))
;

x62665_62677.componentWillMount = ((function (x62665_62677){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x62665_62677))
;

x62665_62677.initLocalState = ((function (x62665_62677){
return (function (){
var this$ = this;
var ret__42864__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(0)], null);
var obj62669 = {"omcljs$state":ret__42864__auto__};
return obj62669;
});})(x62665_62677))
;

x62665_62677.componentDidMount = ((function (x62665_62677){
return (function (){
var this$ = this;
var frame_body = ReactDOM.findDOMNode(this$).contentDocument.body;
var child = new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var e1 = document.createElement("div");
frame_body.appendChild(e1);

om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"frame-component","frame-component",-1147234187),e1);

return untangled.ui.elements.update_frame_content.call(null,this$,child);
});})(x62665_62677))
;

x62665_62677.componentDidUpdate = ((function (x62665_62677){
return (function (prev_props__42876__auto__,prev_state__42877__auto__){
var this__42875__auto__ = this;
var this$ = this__42875__auto__;
var pprops = om.next._prev_props.call(null,prev_props__42876__auto__,this__42875__auto__);
var pstate = goog.object.get(prev_state__42877__auto__,"omcljs$previousState");
var child_62681 = new cljs.core.Keyword(null,"child","child",623967545).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
untangled.ui.elements.update_frame_content.call(null,this$,child_62681);

return om.next.clear_prev_props_BANG_.call(null,this__42875__auto__);
});})(x62665_62677))
;

x62665_62677.render = ((function (x62665_62677){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_62670 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62671 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62672 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62673 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62674 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{return om.dom.iframe.call(null,cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,om.next.props.call(null,this$),new cljs.core.Keyword(null,"child","child",623967545))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62674;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62673;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62672;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62671;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62670;
}});})(x62665_62677))
;


untangled.ui.elements.IFrame.prototype.constructor = untangled.ui.elements.IFrame;

untangled.ui.elements.IFrame.prototype.constructor.displayName = "untangled.ui.elements/IFrame";

untangled.ui.elements.IFrame.prototype.om$isComponent = true;

var x62675_62682 = untangled.ui.elements.IFrame;


var x62676_62683 = untangled.ui.elements.IFrame.prototype;


untangled.ui.elements.IFrame.cljs$lang$type = true;

untangled.ui.elements.IFrame.cljs$lang$ctorStr = "untangled.ui.elements/IFrame";

untangled.ui.elements.IFrame.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled.ui.elements/IFrame");
});
untangled.ui.elements.ui_iframe = (function untangled$ui$elements$ui_iframe(props,child){
return om.next.factory.call(null,untangled.ui.elements.IFrame).call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"child","child",623967545),child));
});
/**
 * Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` - :none (default), :primary, :accent
 *   `:size` - :regular (default), :medium, :large, :xlarge:, :huge
 *   `:kind` - :none (default), :bordered
 *   
 */
untangled.ui.elements.ui_avatar = (function untangled$ui$elements$ui_avatar(p__62684,child){
var map__62688 = p__62684;
var map__62688__$1 = ((((!((map__62688 == null)))?((((map__62688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62688):map__62688);
var props = map__62688__$1;
var className = cljs.core.get.call(null,map__62688__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__62688__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__62688__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var kind = cljs.core.get.call(null,map__62688__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"large","large",-196820544),null,new cljs.core.Keyword(null,"huge","huge",1683634816),null,new cljs.core.Keyword(null,"xlarge","xlarge",-905930014),null,new cljs.core.Keyword(null,"medium","medium",-1864319384),null], null), null);
var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bordered","bordered",-832486681),null], null), null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = (function (){var G__62690 = user_classes;
var G__62690__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62690),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar")].join('')
;
var G__62690__$2 = ((cljs.core.contains_QMARK_.call(null,legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62690__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''):G__62690__$1);
var G__62690__$3 = ((cljs.core.contains_QMARK_.call(null,legal_sizes,size))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62690__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''):G__62690__$2);
if(cljs.core.contains_QMARK_.call(null,legal_kinds,kind)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62690__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-avatar--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kind))].join('');
} else {
return G__62690__$3;
}
})();
var props__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"kind","kind",-717265803));
return om.dom.span.call(null,cljs.core.clj__GT_js.call(null,props__$1),child);
});
/**
 * Render the given children within a badge. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `(ui-badge {} "7")`
 *   
 */
untangled.ui.elements.ui_badge = (function untangled$ui$elements$ui_badge(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62696 = arguments.length;
var i__35777__auto___62697 = (0);
while(true){
if((i__35777__auto___62697 < len__35776__auto___62696)){
args__35783__auto__.push((arguments[i__35777__auto___62697]));

var G__62698 = (i__35777__auto___62697 + (1));
i__35777__auto___62697 = G__62698;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic = (function (p__62693,children){
var map__62694 = p__62693;
var map__62694__$1 = ((((!((map__62694 == null)))?((((map__62694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62694):map__62694);
var props = map__62694__$1;
var className = cljs.core.get.call(null,map__62694__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var props__$1 = cljs.core.update.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.str," c-badge");
return cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,props__$1),children);
});

untangled.ui.elements.ui_badge.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_badge.cljs$lang$applyTo = (function (seq62691){
var G__62692 = cljs.core.first.call(null,seq62691);
var seq62691__$1 = cljs.core.next.call(null,seq62691);
return untangled.ui.elements.ui_badge.cljs$core$IFn$_invoke$arity$variadic(G__62692,seq62691__$1);
});

/**
 * Render a button that looks more like a link that a button (it is just the children), but renders the hover shape
 *   of a more traditional button when the mouse is over it.
 * 
 *   `:color` - :neutral (default), :primary, :accent
 *   `:shape` - :rect (default), :round, or :wide.  The shape when the mouse is over the button.
 *   `:size` - :normal (default), :small.  Small buttons are a bit more condensed.
 *   `:active` - true or false (default).  Causes the button to look highlighted.
 * 
 *   Any normal HTML/React properties are allowed, including additional CSS classes.
 *   
 */
untangled.ui.elements.ui_flat_button = (function untangled$ui$elements$ui_flat_button(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62706 = arguments.length;
var i__35777__auto___62707 = (0);
while(true){
if((i__35777__auto___62707 < len__35776__auto___62706)){
args__35783__auto__.push((arguments[i__35777__auto___62707]));

var G__62708 = (i__35777__auto___62707 + (1));
i__35777__auto___62707 = G__62708;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__62701,children){
var map__62702 = p__62701;
var map__62702__$1 = ((((!((map__62702 == null)))?((((map__62702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62702):map__62702);
var attrs = map__62702__$1;
var className = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var size = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var shape = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var disabled = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var active = cljs.core.get.call(null,map__62702__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var legal_shapes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"round","round",2009433328),null,new cljs.core.Keyword(null,"wide","wide",-151772487),null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"small","small",2133478704),null], null), null);
var button_label = ((function (legal_colors,legal_shapes,legal_sizes,map__62702,map__62702__$1,attrs,className,size,color,shape,disabled,active){
return (function (text){
return om.dom.span.call(null,({"className": "c-button__content"}),text);
});})(legal_colors,legal_shapes,legal_sizes,map__62702,map__62702__$1,attrs,className,size,color,shape,disabled,active))
;
var fixed_children = cljs.core.map.call(null,((function (legal_colors,legal_shapes,legal_sizes,button_label,map__62702,map__62702__$1,attrs,className,size,color,shape,disabled,active){
return (function (c){
if(typeof c === 'string'){
return button_label.call(null,c);
} else {
return c;
}
});})(legal_colors,legal_shapes,legal_sizes,button_label,map__62702,map__62702__$1,attrs,className,size,color,shape,disabled,active))
,children);
var classes = (function (){var G__62704 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button")].join('');
var G__62704__$1 = (cljs.core.truth_(active)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62704),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join(''):G__62704);
var G__62704__$2 = ((cljs.core.contains_QMARK_.call(null,legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62704__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''):G__62704__$1);
var G__62704__$3 = ((cljs.core.contains_QMARK_.call(null,legal_shapes,shape))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62704__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,shape))].join(''):G__62704__$2);
if(cljs.core.contains_QMARK_.call(null,legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62704__$3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-button--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join('');
} else {
return G__62704__$3;
}
})();
var attrs__$1 = (function (){var G__62705 = cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"className","className",-1983287057),classes,new cljs.core.Keyword(null,"type","type",1174270348),"button");
var G__62705__$1 = (cljs.core.truth_(disabled)?cljs.core.assoc.call(null,G__62705,new cljs.core.Keyword(null,"aria-disabled","aria-disabled",-667357160),"true"):G__62705);
return cljs.core.dissoc.call(null,G__62705__$1,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"size","size",1098693007));

})();
return cljs.core.apply.call(null,om.dom.button,cljs.core.clj__GT_js.call(null,attrs__$1),fixed_children);
});

untangled.ui.elements.ui_flat_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_flat_button.cljs$lang$applyTo = (function (seq62699){
var G__62700 = cljs.core.first.call(null,seq62699);
var seq62699__$1 = cljs.core.next.call(null,seq62699);
return untangled.ui.elements.ui_flat_button.cljs$core$IFn$_invoke$arity$variadic(G__62700,seq62699__$1);
});

/**
 * Render a raised button. Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *   `:color` - :neutral (default), :primary, :accent
 *   `:shape` - :rect (default), :round, or :wide
 *   `:size` - :normal (default), :small
 *   `:active` - true or false (default), Causes the button to look highlighted.
 * 
 *   Any other React properties are allowed, including additional CSS classes.
 *   
 */
untangled.ui.elements.ui_button = (function untangled$ui$elements$ui_button(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62714 = arguments.length;
var i__35777__auto___62715 = (0);
while(true){
if((i__35777__auto___62715 < len__35776__auto___62714)){
args__35783__auto__.push((arguments[i__35777__auto___62715]));

var G__62716 = (i__35777__auto___62715 + (1));
i__35777__auto___62715 = G__62716;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__62711,children){
var map__62712 = p__62711;
var map__62712__$1 = ((((!((map__62712 == null)))?((((map__62712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62712):map__62712);
var props = map__62712__$1;
var className = cljs.core.get.call(null,map__62712__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var size = cljs.core.get.call(null,map__62712__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__62712__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var shape = cljs.core.get.call(null,map__62712__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var disabled = cljs.core.get.call(null,map__62712__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var active = cljs.core.get.call(null,map__62712__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.apply.call(null,untangled.ui.elements.ui_flat_button,cljs.core.update.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.str," c-button--raised"),children);
});

untangled.ui.elements.ui_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_button.cljs$lang$applyTo = (function (seq62709){
var G__62710 = cljs.core.first.call(null,seq62709);
var seq62709__$1 = cljs.core.next.call(null,seq62709);
return untangled.ui.elements.ui_button.cljs$core$IFn$_invoke$arity$variadic(G__62710,seq62709__$1);
});

/**
 * Render a raised circle button of fixed size (configurable in CSS variables, see CSS guide).
 *   Extra content will overflow out of the cirle. Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *   `:color` - :neutral (default), :primary, :accent
 *   `:size` - :normal (default), :small
 *   `:active` - true or false (default), Causes the button to look highlighted.
 * 
 *   Any other React properties are allowed, including additional CSS classes.
 * 
 *   Note that you will typically only be able to fit something like an icon in this kind of button, which is a perfect
 *   circle.
 *   
 */
untangled.ui.elements.ui_circular_button = (function untangled$ui$elements$ui_circular_button(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62722 = arguments.length;
var i__35777__auto___62723 = (0);
while(true){
if((i__35777__auto___62723 < len__35776__auto___62722)){
args__35783__auto__.push((arguments[i__35777__auto___62723]));

var G__62724 = (i__35777__auto___62723 + (1));
i__35777__auto___62723 = G__62724;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__62719,children){
var map__62720 = p__62719;
var map__62720__$1 = ((((!((map__62720 == null)))?((((map__62720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62720):map__62720);
var props = map__62720__$1;
var className = cljs.core.get.call(null,map__62720__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var size = cljs.core.get.call(null,map__62720__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__62720__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var disabled = cljs.core.get.call(null,map__62720__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var active = cljs.core.get.call(null,map__62720__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.apply.call(null,untangled.ui.elements.ui_flat_button,cljs.core.update.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),cljs.core.str," c-button--circular"),children);
});

untangled.ui.elements.ui_circular_button.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_circular_button.cljs$lang$applyTo = (function (seq62717){
var G__62718 = cljs.core.first.call(null,seq62717);
var seq62717__$1 = cljs.core.next.call(null,seq62717);
return untangled.ui.elements.ui_circular_button.cljs$core$IFn$_invoke$arity$variadic(G__62718,seq62717__$1);
});

/**
 * Render a card component
 * 
 * `:title` - "Some Title"
 * `:color` - :primary | :accent
 * `:kind` - :bordered | :transparent | :square
 * `:size` - :expand | :wide
 * `:image` - "path/to/image/file.jpeg"
 * `:image-position` - :cover | :top-left | :top-right | :bottom-left | :bottom-right
 * `:actions` - (ui-button "Some Action")
 * `:media` - URL
 * `:media-type` - :image | :video (TODO Youtube?)
 * 
 * all paramters optional
 *  
 */
untangled.ui.elements.ui_card = (function untangled$ui$elements$ui_card(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62731 = arguments.length;
var i__35777__auto___62732 = (0);
while(true){
if((i__35777__auto___62732 < len__35776__auto___62731)){
args__35783__auto__.push((arguments[i__35777__auto___62732]));

var G__62733 = (i__35777__auto___62732 + (1));
i__35777__auto___62732 = G__62733;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic = (function (p__62727,children){
var map__62728 = p__62727;
var map__62728__$1 = ((((!((map__62728 == null)))?((((map__62728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62728):map__62728);
var attrs = map__62728__$1;
var media = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"media","media",-1066138403));
var menu = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var media_type = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));
var color = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var actions = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var title = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"title","title",636505583));
var className = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var size = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var kind = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var image_position = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"image-position","image-position",-2131640298));
var image = cljs.core.get.call(null,map__62728__$1,new cljs.core.Keyword(null,"image","image",-58725096));
if(((kind == null)) || ((kind instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (or (nil? kind) (keyword? kind))"));
}

if(((title == null)) || (typeof title === 'string')){
} else {
throw (new Error("Assert failed: (or (nil? title) (string? title))"));
}

var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transparent","transparent",-2073609949),null,new cljs.core.Keyword(null,"bordered","bordered",-832486681),null,new cljs.core.Keyword(null,"square","square",812434677),null], null), null);
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wide","wide",-151772487),null,new cljs.core.Keyword(null,"expand","expand",595248157),null], null), null);
var id_class = cljs.core.gensym.call(null,"c-card--");
var className__$1 = (function (){var or__34555__auto__ = className;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return "";
}
})();
var classes = (function (){var G__62730 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(className__$1)].join('');
var G__62730__$1 = ((cljs.core.contains_QMARK_.call(null,legal_kinds,kind))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62730),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kind))].join(''):G__62730);
var G__62730__$2 = ((cljs.core.contains_QMARK_.call(null,legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62730__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''):G__62730__$1);
if(cljs.core.contains_QMARK_.call(null,legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62730__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join('');
} else {
return G__62730__$2;
}
})();
var attributes = cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),classes], null)),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"image-position","image-position",-2131640298),new cljs.core.Keyword(null,"media-type","media-type",-764436129),new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"menu","menu",352255198)));
var image_src = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("url("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
var background_image = cljs.core.clj__GT_js.call(null,(cljs.core.truth_(image)?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundImage","backgroundImage",1109094965),image_src], null)):null));
return om.dom.div.call(null,attributes,(cljs.core.truth_(media)?om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card__media")].join('')}),((cljs.core._EQ_.call(null,media_type,new cljs.core.Keyword(null,"image","image",-58725096)))?om.dom.img.call(null,({"className": "c-card__media-content", "src": media})):null)):null),(cljs.core.truth_(title)?om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-card__title"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(image)?" c-card__title--image":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(image_position)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-card__title--image-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,image_position))].join(''):null))].join('')}),om.dom.h1.call(null,({"className": "c-card__title-text"}),title)):null),(cljs.core.truth_(children)?cljs.core.apply.call(null,om.dom.div,({"className": "c-card__supporting-text"}),children):null),(cljs.core.truth_(actions)?om.dom.div.call(null,({"className": "c-card__actions"}),actions):null),(cljs.core.truth_(menu)?om.dom.div.call(null,({"className": "c-card__menu"}),untangled.ui.menu.ui_menu.call(null,menu,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"icon","icon",1679606541))):null),om.dom.style.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" .c-card__title { background-image: url("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(image),cljs.core.str.cljs$core$IFn$_invoke$arity$1("); }")].join('')));
});

untangled.ui.elements.ui_card.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_card.cljs$lang$applyTo = (function (seq62725){
var G__62726 = cljs.core.first.call(null,seq62725);
var seq62725__$1 = cljs.core.next.call(null,seq62725);
return untangled.ui.elements.ui_card.cljs$core$IFn$_invoke$arity$variadic(G__62726,seq62725__$1);
});

var render_input_62747 = (function (p__62734){
var map__62735 = p__62734;
var map__62735__$1 = ((((!((map__62735 == null)))?((((map__62735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62735):map__62735);
var props = map__62735__$1;
var type = cljs.core.get.call(null,map__62735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.call(null,map__62735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return om.dom.span.call(null,null,om.dom.input.call(null,cljs.core.clj__GT_js.call(null,props)),om.dom.label.call(null,({"htmlFor": id}),"\u00A0"));
});
/**
 * Render a HTML radio (without the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` - Required. A unique ID. Will not render correctly without one.
 *  
 */
untangled.ui.elements.ui_radio = ((function (render_input_62747){
return (function untangled$ui$elements$ui_radio(p__62737){
var map__62740 = p__62737;
var map__62740__$1 = ((((!((map__62740 == null)))?((((map__62740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62740):map__62740);
var props = map__62740__$1;
var className = cljs.core.get.call(null,map__62740__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var id = cljs.core.get.call(null,map__62740__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on radio"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-radio")].join('');
var attrs = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"className","className",-1983287057),classes);
return render_input_62747.call(null,attrs);
});})(render_input_62747))
;

/**
 * Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` string - Unique DOM ID. Required for correct rendering.
 *  `:checked` - true, false, or :partial
 *  
 */
untangled.ui.elements.ui_checkbox = ((function (render_input_62747){
return (function untangled$ui$elements$ui_checkbox(p__62742){
var map__62745 = p__62742;
var map__62745__$1 = ((((!((map__62745 == null)))?((((map__62745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62745):map__62745);
var props = map__62745__$1;
var id = cljs.core.get.call(null,map__62745__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state = cljs.core.get.call(null,map__62745__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var checked = cljs.core.get.call(null,map__62745__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var className = cljs.core.get.call(null,map__62745__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"partial","partial",241141745),checked))?" is-indeterminate":null))].join('');
var checked__$1 = cljs.core.boolean$.call(null,checked);
var attrs = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked__$1,new cljs.core.Keyword(null,"className","className",-1983287057),classes);
return render_input_62747.call(null,attrs);
});})(render_input_62747))
;
/**
 * Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *  `:className` - additional class stylings to apply to the top level of the checkbox
 *  `:id` string - Unique DOM ID. Required for correct rendering.
 *  `:checked` - true, false, or :partial
 *  
 */
untangled.ui.elements.ui_switch = (function untangled$ui$elements$ui_switch(p__62748){
var map__62751 = p__62748;
var map__62751__$1 = ((((!((map__62751 == null)))?((((map__62751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62751):map__62751);
var props = map__62751__$1;
var id = cljs.core.get.call(null,map__62751__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state = cljs.core.get.call(null,map__62751__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var checked = cljs.core.get.call(null,map__62751__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var className = cljs.core.get.call(null,map__62751__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var disabled = cljs.core.get.call(null,map__62751__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("DOM ID is required on checkbox"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("id")].join('')));
}

var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-switch__input")].join('');
var type = "checkbox";
var checked__$1 = cljs.core.boolean$.call(null,checked);
var attrs = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked__$1,new cljs.core.Keyword(null,"className","className",-1983287057),classes);
return om.dom.div.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-switch"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" is-disabled":null))].join('')}),om.dom.input.call(null,cljs.core.clj__GT_js.call(null,attrs)),om.dom.label.call(null,({"className": "c-switch__paddle", "htmlFor": id, "aria-hidden": false})));
});
/**
 * Render an input field. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:size` :regular (default), :small, :medium, :large
 *   `:state` :valid (default), :invalid, or :error
 *   
 */
untangled.ui.elements.ui_field = (function untangled$ui$elements$ui_field(p__62753,placeholder){
var map__62757 = p__62753;
var map__62757__$1 = ((((!((map__62757 == null)))?((((map__62757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62757):map__62757);
var attrs = map__62757__$1;
var size = cljs.core.get.call(null,map__62757__$1,new cljs.core.Keyword(null,"size","size",1098693007),"");
var state = cljs.core.get.call(null,map__62757__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var type = cljs.core.get.call(null,map__62757__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"large","large",-196820544),null,new cljs.core.Keyword(null,"medium","medium",-1864319384),null,new cljs.core.Keyword(null,"small","small",2133478704),null], null), null);
var legal_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
var user_classes = cljs.core.get.call(null,attrs,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var user_type = (cljs.core.truth_(type)?type:"text");
var has = ((function (legal_sizes,legal_states,user_classes,user_type,map__62757,map__62757__$1,attrs,size,state,type){
return (function (s){
return cljs.core.contains_QMARK_.call(null,state,s);
});})(legal_sizes,legal_states,user_classes,user_type,map__62757,map__62757__$1,attrs,size,state,type))
;
var classes = (function (){var G__62759 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-field ")].join('');
var G__62759__$1 = ((cljs.core.contains_QMARK_.call(null,legal_sizes,size))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62759),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-field--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join(''):G__62759);
if(cljs.core.contains_QMARK_.call(null,legal_states,state)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62759__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,state))].join('');
} else {
return G__62759__$1;
}
})();
var attrs__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"className","className",-1983287057),classes,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.name.call(null,placeholder),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),cljs.core.name.call(null,placeholder),new cljs.core.Keyword(null,"type","type",1174270348),user_type),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"state","state",-1988618099));
return om.dom.input.call(null,cljs.core.clj__GT_js.call(null,attrs__$1));
});
/**
 * Render an icon. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :active, :passive
 *   `:size` :regular (default), :small, :medium, :large, :xlarge, :huge
 *   `:glyph` - Instructs `ui-icon` to render an icon from the built-in set. See `untangled.icons/icon`.
 * 
 *   The child (optional) should be some kind of icon, for example the SVG generated by the `untangled.icons/icon` function.
 *   
 */
untangled.ui.elements.ui_icon = (function untangled$ui$elements$ui_icon(var_args){
var args62760 = [];
var len__35776__auto___62770 = arguments.length;
var i__35777__auto___62771 = (0);
while(true){
if((i__35777__auto___62771 < len__35776__auto___62770)){
args62760.push((arguments[i__35777__auto___62771]));

var G__62772 = (i__35777__auto___62771 + (1));
i__35777__auto___62771 = G__62772;
continue;
} else {
}
break;
}

var G__62762 = args62760.length;
switch (G__62762) {
case 1:
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62760.length)].join('')));

}
});

untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$1 = (function (p__62763){
var map__62764 = p__62763;
var map__62764__$1 = ((((!((map__62764 == null)))?((((map__62764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62764):map__62764);
var props = map__62764__$1;
var className = cljs.core.get.call(null,map__62764__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__62764__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__62764__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var glyph = cljs.core.get.call(null,map__62764__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117));
return untangled.ui.elements.ui_icon.call(null,props,null);
});

untangled.ui.elements.ui_icon.cljs$core$IFn$_invoke$arity$2 = (function (p__62766,child){
var map__62767 = p__62766;
var map__62767__$1 = ((((!((map__62767 == null)))?((((map__62767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62767):map__62767);
var props = map__62767__$1;
var className = cljs.core.get.call(null,map__62767__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__62767__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__62767__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var glyph = cljs.core.get.call(null,map__62767__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"passive","passive",252884080),null,new cljs.core.Keyword(null,"active","active",1895962068),null], null), null);
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"large","large",-196820544),null,new cljs.core.Keyword(null,"huge","huge",1683634816),null,new cljs.core.Keyword(null,"xlarge","xlarge",-905930014),null,new cljs.core.Keyword(null,"medium","medium",-1864319384),null,new cljs.core.Keyword(null,"small","small",2133478704),null], null), null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = (function (){var G__62769 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-icon")].join('');
var G__62769__$1 = ((cljs.core.contains_QMARK_.call(null,legal_colors,color))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62769),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join(''):G__62769);
if(cljs.core.contains_QMARK_.call(null,legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62769__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-icon--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join('');
} else {
return G__62769__$1;
}
})();
var props__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"glyph","glyph",2119448117));
return om.dom.span.call(null,cljs.core.clj__GT_js.call(null,props__$1),(cljs.core.truth_(glyph)?untangled.icons.icon.call(null,glyph):child));
});

untangled.ui.elements.ui_icon.cljs$lang$maxFixedArity = 2;

/**
 * Render an icon bar using a vector of icons (each a map of attributes).
 * Can optionally render vertically and/or shifting.
 * Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 * `:orientation` :vertical or :horizontal (default)
 * `:shifting` true or false (default)
 * 
 * TODO: Example, talk about children
 * 
 * all parameters are optional
 * 
 */
untangled.ui.elements.ui_icon_bar = (function untangled$ui$elements$ui_icon_bar(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62780 = arguments.length;
var i__35777__auto___62781 = (0);
while(true){
if((i__35777__auto___62781 < len__35776__auto___62780)){
args__35783__auto__.push((arguments[i__35777__auto___62781]));

var G__62782 = (i__35777__auto___62781 + (1));
i__35777__auto___62781 = G__62782;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__62776,children){
var map__62777 = p__62776;
var map__62777__$1 = ((((!((map__62777 == null)))?((((map__62777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62777):map__62777);
var props = map__62777__$1;
var className = cljs.core.get.call(null,map__62777__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var orientation = cljs.core.get.call(null,map__62777__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var shifting = cljs.core.get.call(null,map__62777__$1,new cljs.core.Keyword(null,"shifting","shifting",-1091369273));
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var top_level_class = (function (){var G__62779 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar")].join('');
var G__62779__$1 = ((cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62779),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar--rail")].join(''):G__62779);
if(cljs.core.truth_(shifting)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62779__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-iconbar--shifting")].join('');
} else {
return G__62779__$1;
}
})();
return om.dom.div.call(null,({}),cljs.core.apply.call(null,om.dom.nav,({"className": top_level_class}),children));
});

untangled.ui.elements.ui_icon_bar.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_icon_bar.cljs$lang$applyTo = (function (seq62774){
var G__62775 = cljs.core.first.call(null,seq62774);
var seq62774__$1 = cljs.core.next.call(null,seq62774);
return untangled.ui.elements.ui_icon_bar.cljs$core$IFn$_invoke$arity$variadic(G__62775,seq62774__$1);
});

/**
 * Render an icon button for use inside an icon bar.
 * 
 *   `:glyph` - An icon glyph name to render that given icon.
 *   `:label` - A string to label that icon.
 *   `:active` true or false (default) - Usually used to show that your in that action's view.
 */
untangled.ui.elements.ui_icon_bar_item = (function untangled$ui$elements$ui_icon_bar_item(p__62783){
var map__62786 = p__62783;
var map__62786__$1 = ((((!((map__62786 == null)))?((((map__62786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62786):map__62786);
var props = map__62786__$1;
var className = cljs.core.get.call(null,map__62786__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var glyph = cljs.core.get.call(null,map__62786__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117));
var label = cljs.core.get.call(null,map__62786__$1,new cljs.core.Keyword(null,"label","label",1718410804),"");
var active = cljs.core.get.call(null,map__62786__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return om.dom.button.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-iconbar__item "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?"is-active":null))].join(''), "type": "button"}),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glyph","glyph",2119448117),glyph], null)),om.dom.span.call(null,({"className": "c-iconbar__label"}),label));
});
/**
 * Render the given children within a label. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :primary, :accent
 *   
 */
untangled.ui.elements.ui_label = (function untangled$ui$elements$ui_label(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62794 = arguments.length;
var i__35777__auto___62795 = (0);
while(true){
if((i__35777__auto___62795 < len__35776__auto___62794)){
args__35783__auto__.push((arguments[i__35777__auto___62795]));

var G__62796 = (i__35777__auto___62795 + (1));
i__35777__auto___62795 = G__62796;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__62790,children){
var map__62791 = p__62790;
var map__62791__$1 = ((((!((map__62791 == null)))?((((map__62791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62791):map__62791);
var props = map__62791__$1;
var className = cljs.core.get.call(null,map__62791__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__62791__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var classes = (function (){var G__62793 = className;
var G__62793__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62793),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-label")].join('')
;
if(cljs.core.contains_QMARK_.call(null,legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62793__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-label--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('');
} else {
return G__62793__$1;
}
})();
var props__$1 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.Keyword(null,"className","className",-1983287057),classes);
return cljs.core.apply.call(null,om.dom.span,cljs.core.clj__GT_js.call(null,props__$1),children);
});

untangled.ui.elements.ui_label.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_label.cljs$lang$applyTo = (function (seq62788){
var G__62789 = cljs.core.first.call(null,seq62788);
var seq62788__$1 = cljs.core.next.call(null,seq62788);
return untangled.ui.elements.ui_label.cljs$core$IFn$_invoke$arity$variadic(G__62789,seq62788__$1);
});

/**
 * Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none (default), :primary :accent
 */
untangled.ui.elements.ui_loader = (function untangled$ui$elements$ui_loader(p__62797){
var map__62801 = p__62797;
var map__62801__$1 = ((((!((map__62801 == null)))?((((map__62801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62801):map__62801);
var props = map__62801__$1;
var className = cljs.core.get.call(null,map__62801__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__62801__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = (function (){var G__62803 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-loader")].join('');
if(cljs.core.contains_QMARK_.call(null,legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62803),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-loader--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('');
} else {
return G__62803;
}
})();
var props__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),false),new cljs.core.Keyword(null,"color","color",1011675173));
return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,props__$1));
});
/**
 * Render the given children within a message. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:color` :none(default), :alert, :success, :warning, :informative
 *   
 */
untangled.ui.elements.ui_message = (function untangled$ui$elements$ui_message(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62810 = arguments.length;
var i__35777__auto___62811 = (0);
while(true){
if((i__35777__auto___62811 < len__35776__auto___62810)){
args__35783__auto__.push((arguments[i__35777__auto___62811]));

var G__62812 = (i__35777__auto___62811 + (1));
i__35777__auto___62811 = G__62812;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic = (function (p__62806,children){
var map__62807 = p__62806;
var map__62807__$1 = ((((!((map__62807 == null)))?((((map__62807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62807):map__62807);
var props = map__62807__$1;
var className = cljs.core.get.call(null,map__62807__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var color = cljs.core.get.call(null,map__62807__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var legal_colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"accent","accent",-1826298468),null], null), null);
var classes = (function (){var G__62809 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message")].join('');
if(cljs.core.contains_QMARK_.call(null,legal_colors,color)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62809),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))].join('');
} else {
return G__62809;
}
})();
var props__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes),new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,props__$1),children);
});

untangled.ui.elements.ui_message.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_message.cljs$lang$applyTo = (function (seq62804){
var G__62805 = cljs.core.first.call(null,seq62804);
var seq62804__$1 = cljs.core.next.call(null,seq62804);
return untangled.ui.elements.ui_message.cljs$core$IFn$_invoke$arity$variadic(G__62805,seq62804__$1);
});

/**
 * @constructor
 */
untangled.ui.elements.DialogTitle = (function untangled$ui$elements$DialogTitle(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled.ui.elements.DialogTitle.prototype = goog.object.clone(React.Component.prototype);

var x62817_62827 = untangled.ui.elements.DialogTitle.prototype;
x62817_62827.componentWillUpdate = ((function (x62817_62827){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___62828 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___62829 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___62828,next_ident__42891__auto___62829)){
var idxr__42892__auto___62830 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___62830 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___62830),((function (idxr__42892__auto___62830,ident__42890__auto___62828,next_ident__42891__auto___62829,this__42886__auto__,x62817_62827){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___62828], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___62829], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___62830,ident__42890__auto___62828,next_ident__42891__auto___62829,this__42886__auto__,x62817_62827))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x62817_62827))
;

x62817_62827.shouldComponentUpdate = ((function (x62817_62827){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__62819 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62819);
} else {
return G__62819;
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
});})(x62817_62827))
;

x62817_62827.componentWillUnmount = ((function (x62817_62827){
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
});})(x62817_62827))
;

x62817_62827.componentDidUpdate = ((function (x62817_62827){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x62817_62827))
;

x62817_62827.isMounted = ((function (x62817_62827){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62817_62827))
;

x62817_62827.componentWillMount = ((function (x62817_62827){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x62817_62827))
;

x62817_62827.render = ((function (x62817_62827){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_62820 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62821 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62822 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62823 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62824 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{return om.dom.div.call(null,({"className": "c-dialog__title"}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62824;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62823;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62822;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62821;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62820;
}});})(x62817_62827))
;


untangled.ui.elements.DialogTitle.prototype.constructor = untangled.ui.elements.DialogTitle;

untangled.ui.elements.DialogTitle.prototype.constructor.displayName = "untangled.ui.elements/DialogTitle";

untangled.ui.elements.DialogTitle.prototype.om$isComponent = true;

var x62825_62831 = untangled.ui.elements.DialogTitle;


var x62826_62832 = untangled.ui.elements.DialogTitle.prototype;


untangled.ui.elements.DialogTitle.cljs$lang$type = true;

untangled.ui.elements.DialogTitle.cljs$lang$ctorStr = "untangled.ui.elements/DialogTitle";

untangled.ui.elements.DialogTitle.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled.ui.elements/DialogTitle");
});
/**
 * Render a dialog's title (using supplied DOM children). Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_title = om.next.factory.call(null,untangled.ui.elements.DialogTitle);
/**
 * @constructor
 */
untangled.ui.elements.DialogBody = (function untangled$ui$elements$DialogBody(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled.ui.elements.DialogBody.prototype = goog.object.clone(React.Component.prototype);

var x62837_62847 = untangled.ui.elements.DialogBody.prototype;
x62837_62847.componentWillUpdate = ((function (x62837_62847){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___62848 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___62849 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___62848,next_ident__42891__auto___62849)){
var idxr__42892__auto___62850 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___62850 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___62850),((function (idxr__42892__auto___62850,ident__42890__auto___62848,next_ident__42891__auto___62849,this__42886__auto__,x62837_62847){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___62848], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___62849], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___62850,ident__42890__auto___62848,next_ident__42891__auto___62849,this__42886__auto__,x62837_62847))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x62837_62847))
;

x62837_62847.shouldComponentUpdate = ((function (x62837_62847){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__62839 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62839);
} else {
return G__62839;
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
});})(x62837_62847))
;

x62837_62847.componentWillUnmount = ((function (x62837_62847){
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
});})(x62837_62847))
;

x62837_62847.componentDidUpdate = ((function (x62837_62847){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x62837_62847))
;

x62837_62847.isMounted = ((function (x62837_62847){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62837_62847))
;

x62837_62847.componentWillMount = ((function (x62837_62847){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x62837_62847))
;

x62837_62847.render = ((function (x62837_62847){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_62840 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62841 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62842 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62843 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62844 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{return om.dom.div.call(null,({"className": "c-dialog__content"}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62844;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62843;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62842;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62841;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62840;
}});})(x62837_62847))
;


untangled.ui.elements.DialogBody.prototype.constructor = untangled.ui.elements.DialogBody;

untangled.ui.elements.DialogBody.prototype.constructor.displayName = "untangled.ui.elements/DialogBody";

untangled.ui.elements.DialogBody.prototype.om$isComponent = true;

var x62845_62851 = untangled.ui.elements.DialogBody;


var x62846_62852 = untangled.ui.elements.DialogBody.prototype;


untangled.ui.elements.DialogBody.cljs$lang$type = true;

untangled.ui.elements.DialogBody.cljs$lang$ctorStr = "untangled.ui.elements/DialogBody";

untangled.ui.elements.DialogBody.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled.ui.elements/DialogBody");
});
/**
 * Render the body of a dialog (using the supplied DOM children). Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_body = om.next.factory.call(null,untangled.ui.elements.DialogBody);
/**
 * @constructor
 */
untangled.ui.elements.DialogActions = (function untangled$ui$elements$DialogActions(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled.ui.elements.DialogActions.prototype = goog.object.clone(React.Component.prototype);

var x62857_62867 = untangled.ui.elements.DialogActions.prototype;
x62857_62867.componentWillUpdate = ((function (x62857_62867){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___62868 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___62869 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___62868,next_ident__42891__auto___62869)){
var idxr__42892__auto___62870 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___62870 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___62870),((function (idxr__42892__auto___62870,ident__42890__auto___62868,next_ident__42891__auto___62869,this__42886__auto__,x62857_62867){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___62868], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___62869], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___62870,ident__42890__auto___62868,next_ident__42891__auto___62869,this__42886__auto__,x62857_62867))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x62857_62867))
;

x62857_62867.shouldComponentUpdate = ((function (x62857_62867){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__62859 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62859);
} else {
return G__62859;
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
});})(x62857_62867))
;

x62857_62867.componentWillUnmount = ((function (x62857_62867){
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
});})(x62857_62867))
;

x62857_62867.componentDidUpdate = ((function (x62857_62867){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x62857_62867))
;

x62857_62867.isMounted = ((function (x62857_62867){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62857_62867))
;

x62857_62867.componentWillMount = ((function (x62857_62867){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x62857_62867))
;

x62857_62867.render = ((function (x62857_62867){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_62860 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62861 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62862 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62863 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62864 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{return om.dom.div.call(null,({"className": "c-dialog__actions"}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62864;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62863;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62862;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62861;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62860;
}});})(x62857_62867))
;


untangled.ui.elements.DialogActions.prototype.constructor = untangled.ui.elements.DialogActions;

untangled.ui.elements.DialogActions.prototype.constructor.displayName = "untangled.ui.elements/DialogActions";

untangled.ui.elements.DialogActions.prototype.om$isComponent = true;

var x62865_62871 = untangled.ui.elements.DialogActions;


var x62866_62872 = untangled.ui.elements.DialogActions.prototype;


untangled.ui.elements.DialogActions.cljs$lang$type = true;

untangled.ui.elements.DialogActions.cljs$lang$ctorStr = "untangled.ui.elements/DialogActions";

untangled.ui.elements.DialogActions.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled.ui.elements/DialogActions");
});
/**
 * Render one or more action elements (e.g. buttons) in the action area of the dialog. Should only be used in a ui-dialog
 */
untangled.ui.elements.ui_dialog_actions = om.next.factory.call(null,untangled.ui.elements.DialogActions);
/**
 * @constructor
 */
untangled.ui.elements.Dialog = (function untangled$ui$elements$Dialog(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled.ui.elements.Dialog.prototype = goog.object.clone(React.Component.prototype);

var x62877_62889 = untangled.ui.elements.Dialog.prototype;
x62877_62889.componentWillUpdate = ((function (x62877_62889){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___62890 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___62891 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___62890,next_ident__42891__auto___62891)){
var idxr__42892__auto___62892 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___62892 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___62892),((function (idxr__42892__auto___62892,ident__42890__auto___62890,next_ident__42891__auto___62891,this__42886__auto__,x62877_62889){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___62890], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___62891], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___62892,ident__42890__auto___62890,next_ident__42891__auto___62891,this__42886__auto__,x62877_62889))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x62877_62889))
;

x62877_62889.shouldComponentUpdate = ((function (x62877_62889){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__62879 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62879);
} else {
return G__62879;
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
});})(x62877_62889))
;

x62877_62889.componentWillUnmount = ((function (x62877_62889){
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
});})(x62877_62889))
;

x62877_62889.componentDidUpdate = ((function (x62877_62889){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x62877_62889))
;

x62877_62889.isMounted = ((function (x62877_62889){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62877_62889))
;

x62877_62889.componentWillMount = ((function (x62877_62889){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x62877_62889))
;

x62877_62889.render = ((function (x62877_62889){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_62880 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62881 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62882 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62883 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62884 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__62885 = om.next.props.call(null,this$);
var map__62885__$1 = ((((!((map__62885 == null)))?((((map__62885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62885):map__62885);
var props = map__62885__$1;
var key = cljs.core.get.call(null,map__62885__$1,new cljs.core.Keyword(null,"key","key",-1516042587),"");
var full_screen = cljs.core.get.call(null,map__62885__$1,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281));
var visible = cljs.core.get.call(null,map__62885__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var modal = cljs.core.get.call(null,map__62885__$1,new cljs.core.Keyword(null,"modal","modal",-1031880850));
var onClose = cljs.core.get.call(null,map__62885__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
var children = om.next.children.call(null,this$);
var title = untangled.ui.elements.first_node.call(null,untangled.ui.elements.DialogTitle,children);
var content = untangled.ui.elements.first_node.call(null,untangled.ui.elements.DialogBody,children);
var actions = untangled.ui.elements.first_node.call(null,untangled.ui.elements.DialogActions,children);
var state = (cljs.core.truth_(visible)?" is-active":null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-dialog"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(full_screen)?" c-dialog--fullscreen":null))].join('');
var dialog_dom = om.dom.div.call(null,({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-dialog")].join(''), "className": classes}),om.dom.div.call(null,({"className": "c-dialog__card"}),(cljs.core.truth_(title)?title:null),(cljs.core.truth_(content)?content:null),(cljs.core.truth_(actions)?actions:null)));
if(cljs.core.truth_(modal)){
return om.dom.div.call(null,({"key": key}),dialog_dom,om.dom.div.call(null,({"onKeyPress": ((function (map__62885,map__62885__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_62880,_STAR_depth_STAR_62881,_STAR_shared_STAR_62882,_STAR_instrument_STAR_62883,_STAR_parent_STAR_62884,this$,this__42885__auto__,x62877_62889){
return (function (evt){
if(cljs.core.truth_((function (){var and__34543__auto__ = visible;
if(cljs.core.truth_(and__34543__auto__)){
var and__34543__auto____$1 = onClose;
if(cljs.core.truth_(and__34543__auto____$1)){
return untangled.events.escape_key_QMARK_.call(null,evt);
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
})())){
return onClose.call(null);
} else {
return null;
}
});})(map__62885,map__62885__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_62880,_STAR_depth_STAR_62881,_STAR_shared_STAR_62882,_STAR_instrument_STAR_62883,_STAR_parent_STAR_62884,this$,this__42885__auto__,x62877_62889))
, "onClick": ((function (map__62885,map__62885__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_62880,_STAR_depth_STAR_62881,_STAR_shared_STAR_62882,_STAR_instrument_STAR_62883,_STAR_parent_STAR_62884,this$,this__42885__auto__,x62877_62889){
return (function (){
if(cljs.core.truth_((function (){var and__34543__auto__ = visible;
if(cljs.core.truth_(and__34543__auto__)){
return onClose;
} else {
return and__34543__auto__;
}
})())){
return onClose.call(null);
} else {
return null;
}
});})(map__62885,map__62885__$1,props,key,full_screen,visible,modal,onClose,children,title,content,actions,state,user_classes,classes,dialog_dom,_STAR_reconciler_STAR_62880,_STAR_depth_STAR_62881,_STAR_shared_STAR_62882,_STAR_instrument_STAR_62883,_STAR_parent_STAR_62884,this$,this__42885__auto__,x62877_62889))
, "className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("c-backdrop"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)].join('')})));
} else {
return dialog_dom;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62884;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62883;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62882;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62881;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62880;
}});})(x62877_62889))
;


untangled.ui.elements.Dialog.prototype.constructor = untangled.ui.elements.Dialog;

untangled.ui.elements.Dialog.prototype.constructor.displayName = "untangled.ui.elements/Dialog";

untangled.ui.elements.Dialog.prototype.om$isComponent = true;

var x62887_62893 = untangled.ui.elements.Dialog;


var x62888_62894 = untangled.ui.elements.Dialog.prototype;


untangled.ui.elements.Dialog.cljs$lang$type = true;

untangled.ui.elements.Dialog.cljs$lang$ctorStr = "untangled.ui.elements/Dialog";

untangled.ui.elements.Dialog.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled.ui.elements/Dialog");
});
/**
 * Render a dialog. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   Options:
 * 
 *   `:visible` - A boolean. When true the dialog is on-screen. When not, it is hidden. Allows you to keep the dialog
 *   in the DOM.
 *   `:full-screen` - A boolean. Renders the dialog to consume the entire screen when true. (useful for mobile).
 *   `:modal` - A boolean. When true the dialog will block the rest of the UI.
 *   `:className` - Additional CSS classes to place on the dialog.
 *   `:key` - React key
 *   `:onClose` - A callback that advises *your* code that the user is indicating a desire to be out of the dialog
 *   (e.g. the clicked on the modal backdrop). You must still set the visible flag since this is a stateless
 *   rendering of a dialog UI, not an active stateful component.
 * 
 *   You should include at most one of each of three following children for this node:
 * 
 *   (ui-dialog {}
 *  (ui-dialog-title {} title-nodes)
 *  (ui-dialog-body {} body-nodes)
 *  (ui-dialog-actions {} action-nodes)
 * 
 *   The `title-nodes` can be any inline DOM (or just a string), as can body-nodes.  Action-notes must include at least one button that
 *   closes the dialog or redirects the user.
 */
untangled.ui.elements.ui_dialog = om.next.factory.call(null,untangled.ui.elements.Dialog);
/**
 * @constructor
 */
untangled.ui.elements.NotificationTitle = (function untangled$ui$elements$NotificationTitle(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled.ui.elements.NotificationTitle.prototype = goog.object.clone(React.Component.prototype);

var x62899_62911 = untangled.ui.elements.NotificationTitle.prototype;
x62899_62911.componentWillUpdate = ((function (x62899_62911){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___62912 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___62913 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___62912,next_ident__42891__auto___62913)){
var idxr__42892__auto___62914 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___62914 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___62914),((function (idxr__42892__auto___62914,ident__42890__auto___62912,next_ident__42891__auto___62913,this__42886__auto__,x62899_62911){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___62912], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___62913], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___62914,ident__42890__auto___62912,next_ident__42891__auto___62913,this__42886__auto__,x62899_62911))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x62899_62911))
;

x62899_62911.shouldComponentUpdate = ((function (x62899_62911){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__62901 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62901);
} else {
return G__62901;
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
});})(x62899_62911))
;

x62899_62911.componentWillUnmount = ((function (x62899_62911){
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
});})(x62899_62911))
;

x62899_62911.componentDidUpdate = ((function (x62899_62911){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x62899_62911))
;

x62899_62911.isMounted = ((function (x62899_62911){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62899_62911))
;

x62899_62911.componentWillMount = ((function (x62899_62911){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x62899_62911))
;

x62899_62911.render = ((function (x62899_62911){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_62902 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62903 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62904 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62905 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62906 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__62907 = om.next.props.call(null,this$);
var map__62907__$1 = ((((!((map__62907 == null)))?((((map__62907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62907):map__62907);
var props = map__62907__$1;
var key = cljs.core.get.call(null,map__62907__$1,new cljs.core.Keyword(null,"key","key",-1516042587),"");
return om.dom.h1.call(null,({"className": "c-notification_heading", "key": key}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62906;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62905;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62904;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62903;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62902;
}});})(x62899_62911))
;


untangled.ui.elements.NotificationTitle.prototype.constructor = untangled.ui.elements.NotificationTitle;

untangled.ui.elements.NotificationTitle.prototype.constructor.displayName = "untangled.ui.elements/NotificationTitle";

untangled.ui.elements.NotificationTitle.prototype.om$isComponent = true;

var x62909_62915 = untangled.ui.elements.NotificationTitle;


var x62910_62916 = untangled.ui.elements.NotificationTitle.prototype;


untangled.ui.elements.NotificationTitle.cljs$lang$type = true;

untangled.ui.elements.NotificationTitle.cljs$lang$ctorStr = "untangled.ui.elements/NotificationTitle";

untangled.ui.elements.NotificationTitle.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled.ui.elements/NotificationTitle");
});
/**
 * Render a notification title. Should only be used in a ui-notification
 */
untangled.ui.elements.ui_notification_title = om.next.factory.call(null,untangled.ui.elements.NotificationTitle);
/**
 * @constructor
 */
untangled.ui.elements.NotificationBody = (function untangled$ui$elements$NotificationBody(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled.ui.elements.NotificationBody.prototype = goog.object.clone(React.Component.prototype);

var x62921_62931 = untangled.ui.elements.NotificationBody.prototype;
x62921_62931.componentWillUpdate = ((function (x62921_62931){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___62932 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___62933 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___62932,next_ident__42891__auto___62933)){
var idxr__42892__auto___62934 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___62934 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___62934),((function (idxr__42892__auto___62934,ident__42890__auto___62932,next_ident__42891__auto___62933,this__42886__auto__,x62921_62931){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___62932], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___62933], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___62934,ident__42890__auto___62932,next_ident__42891__auto___62933,this__42886__auto__,x62921_62931))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x62921_62931))
;

x62921_62931.shouldComponentUpdate = ((function (x62921_62931){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__62923 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62923);
} else {
return G__62923;
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
});})(x62921_62931))
;

x62921_62931.componentWillUnmount = ((function (x62921_62931){
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
});})(x62921_62931))
;

x62921_62931.componentDidUpdate = ((function (x62921_62931){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x62921_62931))
;

x62921_62931.isMounted = ((function (x62921_62931){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62921_62931))
;

x62921_62931.componentWillMount = ((function (x62921_62931){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x62921_62931))
;

x62921_62931.render = ((function (x62921_62931){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_62924 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62925 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62926 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62927 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62928 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{return om.dom.p.call(null,({}),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62928;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62927;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62926;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62925;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62924;
}});})(x62921_62931))
;


untangled.ui.elements.NotificationBody.prototype.constructor = untangled.ui.elements.NotificationBody;

untangled.ui.elements.NotificationBody.prototype.constructor.displayName = "untangled.ui.elements/NotificationBody";

untangled.ui.elements.NotificationBody.prototype.om$isComponent = true;

var x62929_62935 = untangled.ui.elements.NotificationBody;


var x62930_62936 = untangled.ui.elements.NotificationBody.prototype;


untangled.ui.elements.NotificationBody.cljs$lang$type = true;

untangled.ui.elements.NotificationBody.cljs$lang$ctorStr = "untangled.ui.elements/NotificationBody";

untangled.ui.elements.NotificationBody.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled.ui.elements/NotificationBody");
});
/**
 * Render a notification body. Should only be used in a ui-notification
 */
untangled.ui.elements.ui_notification_body = om.next.factory.call(null,untangled.ui.elements.NotificationBody);
/**
 * @constructor
 */
untangled.ui.elements.Notification = (function untangled$ui$elements$Notification(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled.ui.elements.Notification.prototype = goog.object.clone(React.Component.prototype);

var x62941_62955 = untangled.ui.elements.Notification.prototype;
x62941_62955.componentWillUpdate = ((function (x62941_62955){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___62956 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___62957 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___62956,next_ident__42891__auto___62957)){
var idxr__42892__auto___62958 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___62958 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___62958),((function (idxr__42892__auto___62958,ident__42890__auto___62956,next_ident__42891__auto___62957,this__42886__auto__,x62941_62955){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___62956], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___62957], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___62958,ident__42890__auto___62956,next_ident__42891__auto___62957,this__42886__auto__,x62941_62955))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x62941_62955))
;

x62941_62955.shouldComponentUpdate = ((function (x62941_62955){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__62943 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62943);
} else {
return G__62943;
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
});})(x62941_62955))
;

x62941_62955.componentWillUnmount = ((function (x62941_62955){
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
});})(x62941_62955))
;

x62941_62955.componentDidUpdate = ((function (x62941_62955){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x62941_62955))
;

x62941_62955.isMounted = ((function (x62941_62955){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62941_62955))
;

x62941_62955.componentWillMount = ((function (x62941_62955){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x62941_62955))
;

x62941_62955.render = ((function (x62941_62955){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_62944 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62945 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62946 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62947 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62948 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__62949 = om.next.props.call(null,this$);
var map__62949__$1 = ((((!((map__62949 == null)))?((((map__62949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62949):map__62949);
var props = map__62949__$1;
var key = cljs.core.get.call(null,map__62949__$1,new cljs.core.Keyword(null,"key","key",-1516042587),"");
var width = cljs.core.get.call(null,map__62949__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var kind = cljs.core.get.call(null,map__62949__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var onClose = cljs.core.get.call(null,map__62949__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
var children = om.next.children.call(null,this$);
var title = untangled.ui.elements.first_node.call(null,untangled.ui.elements.NotificationTitle,children);
var content = untangled.ui.elements.first_node.call(null,untangled.ui.elements.NotificationBody,children);
var legal_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"informative","informative",1852560673),null,new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
var legal_widths = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wide","wide",-151772487),null], null), null);
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var classes = (function (){var G__62951 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification")].join('');
var G__62951__$1 = ((cljs.core.contains_QMARK_.call(null,legal_types,kind))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62951),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kind))].join(''):G__62951);
if(cljs.core.contains_QMARK_.call(null,legal_widths,width)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62951__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-notification--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,width))].join('');
} else {
return G__62951__$1;
}
})();
var type_icon = (function (){var G__62952 = (((kind instanceof cljs.core.Keyword))?kind.fqn:null);
switch (G__62952) {
case "success":
return untangled.icons.icon.call(null,new cljs.core.Keyword(null,"check_circle","check_circle",1774895320),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"positive","positive",1112941866)], null));

break;
case "warning":
return untangled.icons.icon.call(null,new cljs.core.Keyword(null,"warning","warning",-1685650671));

break;
case "error":
return untangled.icons.icon.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

break;
default:
return untangled.icons.icon.call(null,new cljs.core.Keyword(null,"info","info",-317069002));

}
})();
return om.dom.div.call(null,({"className": classes, "key": key}),type_icon,om.dom.div.call(null,({"className": "c-notification_content"}),(cljs.core.truth_(title)?title:null),(cljs.core.truth_(content)?content:null)),om.dom.button.call(null,({"onClick": ((function (map__62949,map__62949__$1,props,key,width,kind,onClose,children,title,content,legal_types,legal_widths,user_classes,classes,type_icon,_STAR_reconciler_STAR_62944,_STAR_depth_STAR_62945,_STAR_shared_STAR_62946,_STAR_instrument_STAR_62947,_STAR_parent_STAR_62948,this$,this__42885__auto__,x62941_62955){
return (function (evt){
if(cljs.core.truth_(onClose)){
return onClose.call(null);
} else {
return null;
}
});})(map__62949,map__62949__$1,props,key,width,kind,onClose,children,title,content,legal_types,legal_widths,user_classes,classes,type_icon,_STAR_reconciler_STAR_62944,_STAR_depth_STAR_62945,_STAR_shared_STAR_62946,_STAR_instrument_STAR_62947,_STAR_parent_STAR_62948,this$,this__42885__auto__,x62941_62955))
, "type": "button", "className": "c-button c-button--icon"}),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"close","close",1835149582))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62948;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62947;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62946;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62945;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62944;
}});})(x62941_62955))
;


untangled.ui.elements.Notification.prototype.constructor = untangled.ui.elements.Notification;

untangled.ui.elements.Notification.prototype.constructor.displayName = "untangled.ui.elements/Notification";

untangled.ui.elements.Notification.prototype.om$isComponent = true;

var x62953_62960 = untangled.ui.elements.Notification;


var x62954_62961 = untangled.ui.elements.Notification.prototype;


untangled.ui.elements.Notification.cljs$lang$type = true;

untangled.ui.elements.Notification.cljs$lang$ctorStr = "untangled.ui.elements/Notification";

untangled.ui.elements.Notification.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled.ui.elements/Notification");
});
/**
 * Render a notification. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 *   `:onClose` (optional) - A function to call when the notification's close button is pressed
 *   `:type` :none (default), :success, :warning, :error, :informative
 *   `:size` :normal (default), :wide
 * 
 *   You should include two children of this node:
 * 
 *   (when show-notification?
 *  (ui-notification {:onClose (fn [] (om/transact! this `[(my-close-notification-mutation)]))}
 *    (ui-notification-title {} title-nodes)
 *    (ui-notification-body {} body-nodes)))
 * 
 *   The `title-nodes` can be any inline DOM (or just a string), as can body-nodes.
 */
untangled.ui.elements.ui_notification = om.next.factory.call(null,untangled.ui.elements.Notification);
/**
 * Render an HTML progress element. Props is a normal clj(s) map with React/HTML attributes plus:
 * 
 *   `:className` - additional class stylings to apply to the progress element
 *   `:max` - The integer value that we're targeting for completion
 *   `:value` - The integer value of where we're at
 *   `:size` :regular (default), :dense
 * 
 *   If neither max or value are given, it will render as an indeterminate progress (in progress, but not complete).
 *   
 */
untangled.ui.elements.ui_progress = (function untangled$ui$elements$ui_progress(p__62962){
var map__62966 = p__62962;
var map__62966__$1 = ((((!((map__62966 == null)))?((((map__62966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62966):map__62966);
var props = map__62966__$1;
var max = cljs.core.get.call(null,map__62966__$1,new cljs.core.Keyword(null,"max","max",61366548));
var value = cljs.core.get.call(null,map__62966__$1,new cljs.core.Keyword(null,"value","value",305978217));
var className = cljs.core.get.call(null,map__62966__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var size = cljs.core.get.call(null,map__62966__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var legal_sizes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dense","dense",-1352835783),null], null), null);
var classes = (function (){var G__62968 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-progress ")].join('');
if(cljs.core.contains_QMARK_.call(null,legal_sizes,size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62968),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-progress--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,size))].join('');
} else {
return G__62968;
}
})();
var attrs = cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),classes,new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),false);
return om.dom.progress.call(null,cljs.core.clj__GT_js.call(null,attrs));
});
/**
 * Render a container for tabs using a vector of icons (each a map of attributes).
 * Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
 * 
 * all parameters are optional
 * 
 */
untangled.ui.elements.ui_tabs = (function untangled$ui$elements$ui_tabs(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62975 = arguments.length;
var i__35777__auto___62976 = (0);
while(true){
if((i__35777__auto___62976 < len__35776__auto___62975)){
args__35783__auto__.push((arguments[i__35777__auto___62976]));

var G__62977 = (i__35777__auto___62976 + (1));
i__35777__auto___62976 = G__62977;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__62971,children){
var map__62972 = p__62971;
var map__62972__$1 = ((((!((map__62972 == null)))?((((map__62972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62972):map__62972);
var props = map__62972__$1;
var className = cljs.core.get.call(null,map__62972__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var user_classes = cljs.core.get.call(null,props,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var top_level_class = (function (){var G__62974 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_classes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tabs")].join('');
return G__62974;
})();
return cljs.core.apply.call(null,om.dom.div,({"className": top_level_class}),children);
});

untangled.ui.elements.ui_tabs.cljs$lang$maxFixedArity = (1);

untangled.ui.elements.ui_tabs.cljs$lang$applyTo = (function (seq62969){
var G__62970 = cljs.core.first.call(null,seq62969);
var seq62969__$1 = cljs.core.next.call(null,seq62969);
return untangled.ui.elements.ui_tabs.cljs$core$IFn$_invoke$arity$variadic(G__62970,seq62969__$1);
});

/**
 * Render an icon button for use inside an icon bar.
 * 
 *   `:label` - A string of text to describe the tab action
 *   `:kind` :default, :primary, or :contrast - changes the aesthetic style of a tab
 *   `:active` true or false (default) - Usually used to show that your in that tab's view.
 * 
 *   TODO: Add the ability to wrap this in a menu so you can show more than just the text.
 *   
 */
untangled.ui.elements.ui_tab = (function untangled$ui$elements$ui_tab(p__62978){
var map__62982 = p__62978;
var map__62982__$1 = ((((!((map__62982 == null)))?((((map__62982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62982):map__62982);
var props = map__62982__$1;
var className = cljs.core.get.call(null,map__62982__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"");
var label = cljs.core.get.call(null,map__62982__$1,new cljs.core.Keyword(null,"label","label",1718410804),"");
var kind = cljs.core.get.call(null,map__62982__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var active = cljs.core.get.call(null,map__62982__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var legal_kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),null,new cljs.core.Keyword(null,"contrast","contrast",568337131),null], null), null);
var classes = (function (){var G__62984 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(className),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tab "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active)?" is-active ":null))].join('');
if(cljs.core.contains_QMARK_.call(null,legal_kinds,kind)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62984),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-tab--"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kind))].join('');
} else {
return G__62984;
}
})();
return om.dom.button.call(null,({"className": classes, "type": "button"}),label);
});
/**
 * Render an icon and text for when you can't display anything when you normally would have a collection of things.
 * 
 *   `:glyph` - An icon glyph name to render a given icon.
 *   `:title` - A string to announce what's missing
 *   `:message` - A string to instruct the user what to do next
 *   
 */
untangled.ui.elements.ui_empty_state = (function untangled$ui$elements$ui_empty_state(p__62985){
var map__62988 = p__62985;
var map__62988__$1 = ((((!((map__62988 == null)))?((((map__62988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62988):map__62988);
var props = map__62988__$1;
var className = cljs.core.get.call(null,map__62988__$1,new cljs.core.Keyword(null,"className","className",-1983287057),"u-absolute--middle-center");
var glyph = cljs.core.get.call(null,map__62988__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117),new cljs.core.Keyword(null,"help","help",-439233446));
var title = cljs.core.get.call(null,map__62988__$1,new cljs.core.Keyword(null,"title","title",636505583),"Nothing to see yet");
var message = cljs.core.get.call(null,map__62988__$1,new cljs.core.Keyword(null,"message","message",-406056002),"");
return om.dom.div.call(null,({"className": className}),untangled.ui.elements.ui_icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"huge","huge",1683634816),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"passive","passive",252884080)], null),untangled.icons.icon.call(null,glyph)),om.dom.h1.call(null,null,title),om.dom.p.call(null,({"className": "c-message"}),message));
});

//# sourceMappingURL=elements.js.map?rel=1491640778055