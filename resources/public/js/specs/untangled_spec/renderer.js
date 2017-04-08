// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.renderer');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('goog.string');
goog.require('com.stuartsierra.component');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.next');
goog.require('pushy.core');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('untangled.client.impl.network');
goog.require('untangled.client.mutations');
goog.require('untangled_spec.dom.edn_renderer');
goog.require('untangled_spec.diff');
goog.require('untangled_spec.selectors');
goog.require('untangled.icons');
goog.require('untangled.ui.layout');
goog.require('untangled.ui.elements');
goog.require('untangled.websockets.networking');
goog.require('goog.date.DateTime');
goog.require('goog.i18n.DateTimeFormat');
cljs.core.enable_console_print_BANG_.call(null);
untangled_spec.renderer.test_item_class = (function untangled_spec$renderer$test_item_class(p__63238){
var map__63241 = p__63238;
var map__63241__$1 = ((((!((map__63241 == null)))?((((map__63241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63241):map__63241);
var fail = cljs.core.get.call(null,map__63241__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.call(null,map__63241__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var pass = cljs.core.get.call(null,map__63241__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var manual = cljs.core.get.call(null,map__63241__$1,new cljs.core.Keyword(null,"manual","manual",-237370608));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("test-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((fail > (0)))?"fail":(((error > (0)))?"error":(((pass > (0)))?"pass":(((manual > (0)))?"manual":"pending"
)))))].join('');
});
untangled_spec.renderer.color_favicon_data_url = (function untangled_spec$renderer$color_favicon_data_url(color){
var cvs = document.createElement("canvas");
cvs.width = (16);

cvs.height = (16);

var ctx_63243 = cvs.getContext("2d");
ctx_63243.fillStyle = color;

ctx_63243.fillRect((0),(0),(16),(16));

return cvs.toDataURL();
});
untangled_spec.renderer.change_favicon_to_color = (function untangled_spec$renderer$change_favicon_to_color(color){
var icon = document.getElementById("favicon");
return icon.href = untangled_spec.renderer.color_favicon_data_url.call(null,color);
});
untangled_spec.renderer.has_status_QMARK_ = (function untangled_spec$renderer$has_status_QMARK_(p){
return (function untangled_spec$renderer$has_status_QMARK__$_has_status_QMARK__STAR_(x){
var or__34555__auto__ = p.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (cljs.core.seq.call(null,new cljs.core.Keyword(null,"test-items","test-items",1900391985).cljs$core$IFn$_invoke$arity$1(x))) && (cljs.core.seq.call(null,cljs.core.filter.call(null,untangled_spec$renderer$has_status_QMARK__$_has_status_QMARK__STAR_,new cljs.core.Keyword(null,"test-items","test-items",1900391985).cljs$core$IFn$_invoke$arity$1(x))));
}
});
});
untangled_spec.renderer.filters = (function (){var report_as = (function (status){
return (function (p1__63244_SHARP_){
return cljs.core.update.call(null,p1__63244_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.select_keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [status], null));
});
});
var no_test_results = ((function (report_as){
return (function (p1__63245_SHARP_){
return cljs.core.dissoc.call(null,p1__63245_SHARP_,new cljs.core.Keyword(null,"test-results","test-results",575566942));
});})(report_as))
;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"all","all",892129742),cljs.core.map.call(null,cljs.core.identity),new cljs.core.Keyword(null,"failing","failing",-324520682),cljs.core.filter.call(null,cljs.core.comp.call(null,((function (report_as,no_test_results){
return (function (p1__63246_SHARP_){
return cljs.core.some.call(null,cljs.core.pos_QMARK_,p1__63246_SHARP_);
});})(report_as,no_test_results))
,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.Keyword(null,"status","status",-1997798413))),new cljs.core.Keyword(null,"manual","manual",-237370608),cljs.core.comp.call(null,cljs.core.filter.call(null,untangled_spec.renderer.has_status_QMARK_.call(null,((function (report_as,no_test_results){
return (function (p1__63247_SHARP_){
return (new cljs.core.Keyword(null,"manual","manual",-237370608).cljs$core$IFn$_invoke$arity$1(p1__63247_SHARP_) > (0));
});})(report_as,no_test_results))
)),cljs.core.map.call(null,no_test_results),cljs.core.map.call(null,report_as.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608)))),new cljs.core.Keyword(null,"passing","passing",154799600),cljs.core.comp.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"status","status",-1997798413))),cljs.core.map.call(null,report_as.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993)))),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.comp.call(null,cljs.core.filter.call(null,untangled_spec.renderer.has_status_QMARK_.call(null,((function (report_as,no_test_results){
return (function (p1__63248_SHARP_){
return (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,p1__63248_SHARP_)) === (0));
});})(report_as,no_test_results))
)),cljs.core.map.call(null,no_test_results),cljs.core.map.call(null,report_as.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727))))], null);
})();
if(typeof untangled_spec.renderer.Foldable !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.Foldable = (function untangled_spec$renderer$Foldable(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.Foldable.prototype = goog.object.clone(React.Component.prototype);
}

var x63253_63271 = untangled_spec.renderer.Foldable.prototype;
x63253_63271.componentWillUpdate = ((function (x63253_63271){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63272 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63273 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63272,next_ident__42891__auto___63273)){
var idxr__42892__auto___63274 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63274 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63274),((function (idxr__42892__auto___63274,ident__42890__auto___63272,next_ident__42891__auto___63273,this__42886__auto__,x63253_63271){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63272], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63273], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63274,ident__42890__auto___63272,next_ident__42891__auto___63273,this__42886__auto__,x63253_63271))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63253_63271))
;

x63253_63271.shouldComponentUpdate = ((function (x63253_63271){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63255 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63255);
} else {
return G__63255;
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
});})(x63253_63271))
;

x63253_63271.componentWillUnmount = ((function (x63253_63271){
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
});})(x63253_63271))
;

x63253_63271.componentDidUpdate = ((function (x63253_63271){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63253_63271))
;

x63253_63271.isMounted = ((function (x63253_63271){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63253_63271))
;

x63253_63271.componentWillMount = ((function (x63253_63271){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63253_63271))
;

x63253_63271.initLocalState = ((function (x63253_63271){
return (function (){
var this$ = this;
var ret__42864__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"folded?","folded?",1971930715),true], null);
var obj63257 = {"omcljs$state":ret__42864__auto__};
return obj63257;
});})(x63253_63271))
;

x63253_63271.render = ((function (x63253_63271){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63258 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63259 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63260 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63261 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63262 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__63263 = om.next.get_state.call(null,this$);
var map__63263__$1 = ((((!((map__63263 == null)))?((((map__63263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63263):map__63263);
var folded_QMARK_ = cljs.core.get.call(null,map__63263__$1,new cljs.core.Keyword(null,"folded?","folded?",1971930715));
var map__63264 = om.next.props.call(null,this$);
var map__63264__$1 = ((((!((map__63264 == null)))?((((map__63264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63264):map__63264);
var render = cljs.core.get.call(null,map__63264__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var map__63265 = render.call(null,folded_QMARK_);
var map__63265__$1 = ((((!((map__63265 == null)))?((((map__63265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63265):map__63265);
var title = cljs.core.get.call(null,map__63265__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.call(null,map__63265__$1,new cljs.core.Keyword(null,"value","value",305978217));
var classes = cljs.core.get.call(null,map__63265__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return om.dom.div.call(null,({"className": "foldable"}),om.dom.a.call(null,({"className": classes, "onClick": ((function (map__63263,map__63263__$1,folded_QMARK_,map__63264,map__63264__$1,render,map__63265,map__63265__$1,title,value,classes,_STAR_reconciler_STAR_63258,_STAR_depth_STAR_63259,_STAR_shared_STAR_63260,_STAR_instrument_STAR_63261,_STAR_parent_STAR_63262,this$,this__42885__auto__,x63253_63271){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.update,new cljs.core.Keyword(null,"folded?","folded?",1971930715),cljs.core.not);
});})(map__63263,map__63263__$1,folded_QMARK_,map__63264,map__63264__$1,render,map__63265,map__63265__$1,title,value,classes,_STAR_reconciler_STAR_63258,_STAR_depth_STAR_63259,_STAR_shared_STAR_63260,_STAR_instrument_STAR_63261,_STAR_parent_STAR_63262,this$,this__42885__auto__,x63253_63271))
}),(cljs.core.truth_(folded_QMARK_)?"\u25BA":"\u25BC"),(cljs.core.truth_(folded_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(40),title))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((40) < cljs.core.count.call(null,title)))?"...":null))].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''))),om.dom.div.call(null,({"className": (cljs.core.truth_(folded_QMARK_)?"hidden":null)}),value));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63262;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63261;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63260;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63259;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63258;
}});})(x63253_63271))
;


untangled_spec.renderer.Foldable.prototype.constructor = untangled_spec.renderer.Foldable;

untangled_spec.renderer.Foldable.prototype.constructor.displayName = "untangled-spec.renderer/Foldable";

untangled_spec.renderer.Foldable.prototype.om$isComponent = true;

var x63269_63275 = untangled_spec.renderer.Foldable;


var x63270_63276 = untangled_spec.renderer.Foldable.prototype;


untangled_spec.renderer.Foldable.cljs$lang$type = true;

untangled_spec.renderer.Foldable.cljs$lang$ctorStr = "untangled-spec.renderer/Foldable";

untangled_spec.renderer.Foldable.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/Foldable");
});
untangled_spec.renderer.ui_foldable = om.next.factory.call(null,untangled_spec.renderer.Foldable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (){
return cljs.core.gensym.call(null,"foldable");
})], null));
if(typeof untangled_spec.renderer.ResultLine !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.ResultLine = (function untangled_spec$renderer$ResultLine(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.ResultLine.prototype = goog.object.clone(React.Component.prototype);
}

var x63281_63293 = untangled_spec.renderer.ResultLine.prototype;
x63281_63293.componentWillUpdate = ((function (x63281_63293){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63294 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63295 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63294,next_ident__42891__auto___63295)){
var idxr__42892__auto___63296 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63296 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63296),((function (idxr__42892__auto___63296,ident__42890__auto___63294,next_ident__42891__auto___63295,this__42886__auto__,x63281_63293){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63294], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63295], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63296,ident__42890__auto___63294,next_ident__42891__auto___63295,this__42886__auto__,x63281_63293))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63281_63293))
;

x63281_63293.shouldComponentUpdate = ((function (x63281_63293){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63283 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63283);
} else {
return G__63283;
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
});})(x63281_63293))
;

x63281_63293.componentWillUnmount = ((function (x63281_63293){
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
});})(x63281_63293))
;

x63281_63293.componentDidUpdate = ((function (x63281_63293){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63281_63293))
;

x63281_63293.isMounted = ((function (x63281_63293){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63281_63293))
;

x63281_63293.componentWillMount = ((function (x63281_63293){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63281_63293))
;

x63281_63293.render = ((function (x63281_63293){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63284 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63285 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63286 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63287 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63288 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__63289 = om.next.props.call(null,this$);
var map__63289__$1 = ((((!((map__63289 == null)))?((((map__63289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63289):map__63289);
var title = cljs.core.get.call(null,map__63289__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.call(null,map__63289__$1,new cljs.core.Keyword(null,"value","value",305978217));
var stack = cljs.core.get.call(null,map__63289__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var type = cljs.core.get.call(null,map__63289__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.dom.tr.call(null,null,om.dom.td.call(null,({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("test-result-title "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))].join('')}),title),om.dom.td.call(null,({"className": "test-result"}),om.dom.code.call(null,null,untangled_spec.renderer.ui_foldable.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (map__63289,map__63289__$1,title,value,stack,type,_STAR_reconciler_STAR_63284,_STAR_depth_STAR_63285,_STAR_shared_STAR_63286,_STAR_instrument_STAR_63287,_STAR_parent_STAR_63288,this$,this__42885__auto__,x63281_63293){
return (function (folded_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(stack)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''):(cljs.core.truth_(folded_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''):title)),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(stack)?stack:((cljs.core.not.call(null,folded_QMARK_))?untangled_spec.dom.edn_renderer.html_edn.call(null,value):null)),new cljs.core.Keyword(null,"classes","classes",2037804510),(cljs.core.truth_(stack)?"stack":null)], null);
});})(map__63289,map__63289__$1,title,value,stack,type,_STAR_reconciler_STAR_63284,_STAR_depth_STAR_63285,_STAR_shared_STAR_63286,_STAR_instrument_STAR_63287,_STAR_parent_STAR_63288,this$,this__42885__auto__,x63281_63293))
], null)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63288;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63287;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63286;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63285;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63284;
}});})(x63281_63293))
;


untangled_spec.renderer.ResultLine.prototype.constructor = untangled_spec.renderer.ResultLine;

untangled_spec.renderer.ResultLine.prototype.constructor.displayName = "untangled-spec.renderer/ResultLine";

untangled_spec.renderer.ResultLine.prototype.om$isComponent = true;

var x63291_63297 = untangled_spec.renderer.ResultLine;


var x63292_63298 = untangled_spec.renderer.ResultLine.prototype;


untangled_spec.renderer.ResultLine.cljs$lang$type = true;

untangled_spec.renderer.ResultLine.cljs$lang$ctorStr = "untangled-spec.renderer/ResultLine";

untangled_spec.renderer.ResultLine.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/ResultLine");
});
untangled_spec.renderer.ui_result_line = om.next.factory.call(null,untangled_spec.renderer.ResultLine,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (){
return cljs.core.gensym.call(null,"result-line");
})], null));
if(typeof untangled_spec.renderer.HumanDiffLines !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.HumanDiffLines = (function untangled_spec$renderer$HumanDiffLines(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.HumanDiffLines.prototype = goog.object.clone(React.Component.prototype);
}

var x63303_63315 = untangled_spec.renderer.HumanDiffLines.prototype;
x63303_63315.componentWillUpdate = ((function (x63303_63315){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63316 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63317 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63316,next_ident__42891__auto___63317)){
var idxr__42892__auto___63318 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63318 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63318),((function (idxr__42892__auto___63318,ident__42890__auto___63316,next_ident__42891__auto___63317,this__42886__auto__,x63303_63315){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63316], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63317], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63318,ident__42890__auto___63316,next_ident__42891__auto___63317,this__42886__auto__,x63303_63315))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63303_63315))
;

x63303_63315.shouldComponentUpdate = ((function (x63303_63315){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63305 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63305);
} else {
return G__63305;
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
});})(x63303_63315))
;

x63303_63315.componentWillUnmount = ((function (x63303_63315){
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
});})(x63303_63315))
;

x63303_63315.componentDidUpdate = ((function (x63303_63315){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63303_63315))
;

x63303_63315.isMounted = ((function (x63303_63315){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63303_63315))
;

x63303_63315.componentWillMount = ((function (x63303_63315){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63303_63315))
;

x63303_63315.render = ((function (x63303_63315){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63306 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63307 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63308 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63309 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63310 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var d = om.next.props.call(null,this$);
var map__63311 = untangled_spec.diff.extract.call(null,d);
var map__63311__$1 = ((((!((map__63311 == null)))?((((map__63311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63311):map__63311);
var exp = cljs.core.get.call(null,map__63311__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
var got = cljs.core.get.call(null,map__63311__$1,new cljs.core.Keyword(null,"got","got",-1674745710));
var path = cljs.core.get.call(null,map__63311__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return om.dom.table.call(null,({"className": "human-diff-lines"}),om.dom.tbody.call(null,null,((cljs.core.seq.call(null,path))?om.dom.tr.call(null,({"className": "path"}),om.dom.td.call(null,null,"at: "),om.dom.td.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''))):null),om.dom.tr.call(null,({"className": "expected"}),om.dom.td.call(null,null,"exp: "),om.dom.td.call(null,null,untangled_spec.dom.edn_renderer.html_edn.call(null,exp))),om.dom.tr.call(null,({"className": "actual"}),om.dom.td.call(null,null,"got: "),om.dom.td.call(null,null,untangled_spec.dom.edn_renderer.html_edn.call(null,got)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63310;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63309;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63308;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63307;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63306;
}});})(x63303_63315))
;


untangled_spec.renderer.HumanDiffLines.prototype.constructor = untangled_spec.renderer.HumanDiffLines;

untangled_spec.renderer.HumanDiffLines.prototype.constructor.displayName = "untangled-spec.renderer/HumanDiffLines";

untangled_spec.renderer.HumanDiffLines.prototype.om$isComponent = true;

var x63313_63319 = untangled_spec.renderer.HumanDiffLines;


var x63314_63320 = untangled_spec.renderer.HumanDiffLines.prototype;


untangled_spec.renderer.HumanDiffLines.cljs$lang$type = true;

untangled_spec.renderer.HumanDiffLines.cljs$lang$ctorStr = "untangled-spec.renderer/HumanDiffLines";

untangled_spec.renderer.HumanDiffLines.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/HumanDiffLines");
});
untangled_spec.renderer.ui_human_diff_lines = om.next.factory.call(null,untangled_spec.renderer.HumanDiffLines,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (){
return cljs.core.gensym.call(null,"human-diff-lines");
})], null));
if(typeof untangled_spec.renderer.HumanDiff !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.HumanDiff = (function untangled_spec$renderer$HumanDiff(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.HumanDiff.prototype = goog.object.clone(React.Component.prototype);
}

var x63325_63340 = untangled_spec.renderer.HumanDiff.prototype;
x63325_63340.componentWillUpdate = ((function (x63325_63340){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63341 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63342 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63341,next_ident__42891__auto___63342)){
var idxr__42892__auto___63343 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63343 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63343),((function (idxr__42892__auto___63343,ident__42890__auto___63341,next_ident__42891__auto___63342,this__42886__auto__,x63325_63340){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63341], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63342], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63343,ident__42890__auto___63341,next_ident__42891__auto___63342,this__42886__auto__,x63325_63340))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63325_63340))
;

x63325_63340.shouldComponentUpdate = ((function (x63325_63340){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63327 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63327);
} else {
return G__63327;
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
});})(x63325_63340))
;

x63325_63340.componentWillUnmount = ((function (x63325_63340){
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
});})(x63325_63340))
;

x63325_63340.componentDidUpdate = ((function (x63325_63340){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63325_63340))
;

x63325_63340.isMounted = ((function (x63325_63340){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63325_63340))
;

x63325_63340.componentWillMount = ((function (x63325_63340){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63325_63340))
;

x63325_63340.render = ((function (x63325_63340){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63328 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63329 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63330 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63331 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63332 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__63333 = om.next.props.call(null,this$);
var map__63333__$1 = ((((!((map__63333 == null)))?((((map__63333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63333):map__63333);
var diff = cljs.core.get.call(null,map__63333__$1,new cljs.core.Keyword(null,"diff","diff",2135942783));
var actual = cljs.core.get.call(null,map__63333__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var vec__63334 = cljs.core.split_at.call(null,(2),diff);
var fst = cljs.core.nth.call(null,vec__63334,(0),null);
var rst = cljs.core.nth.call(null,vec__63334,(1),null);
return om.dom.tr.call(null,null,om.dom.td.call(null,null,"DIFFS:"),om.dom.td.call(null,null,om.dom.div.call(null,null,cljs.core.mapv.call(null,untangled_spec.renderer.ui_human_diff_lines,fst),((cljs.core.seq.call(null,rst))?untangled_spec.renderer.ui_foldable.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (map__63333,map__63333__$1,diff,actual,vec__63334,fst,rst,_STAR_reconciler_STAR_63328,_STAR_depth_STAR_63329,_STAR_shared_STAR_63330,_STAR_instrument_STAR_63331,_STAR_parent_STAR_63332,this$,this__42885__auto__,x63325_63340){
return (function (folded_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"& more",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.mapv.call(null,untangled_spec.renderer.ui_human_diff_lines,rst),new cljs.core.Keyword(null,"classes","classes",2037804510),""], null);
});})(map__63333,map__63333__$1,diff,actual,vec__63334,fst,rst,_STAR_reconciler_STAR_63328,_STAR_depth_STAR_63329,_STAR_shared_STAR_63330,_STAR_instrument_STAR_63331,_STAR_parent_STAR_63332,this$,this__42885__auto__,x63325_63340))
], null)):null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63332;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63331;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63330;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63329;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63328;
}});})(x63325_63340))
;


untangled_spec.renderer.HumanDiff.prototype.constructor = untangled_spec.renderer.HumanDiff;

untangled_spec.renderer.HumanDiff.prototype.constructor.displayName = "untangled-spec.renderer/HumanDiff";

untangled_spec.renderer.HumanDiff.prototype.om$isComponent = true;

var x63338_63344 = untangled_spec.renderer.HumanDiff;


var x63339_63345 = untangled_spec.renderer.HumanDiff.prototype;


untangled_spec.renderer.HumanDiff.cljs$lang$type = true;

untangled_spec.renderer.HumanDiff.cljs$lang$ctorStr = "untangled-spec.renderer/HumanDiff";

untangled_spec.renderer.HumanDiff.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/HumanDiff");
});
untangled_spec.renderer.ui_human_diff = om.next.factory.call(null,untangled_spec.renderer.HumanDiff,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (){
return cljs.core.gensym.call(null,"human-diff");
})], null));
if(typeof untangled_spec.renderer.TestResult !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.TestResult = (function untangled_spec$renderer$TestResult(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.TestResult.prototype = goog.object.clone(React.Component.prototype);
}

var x63350_63362 = untangled_spec.renderer.TestResult.prototype;
x63350_63362.componentWillUpdate = ((function (x63350_63362){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63363 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63364 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63363,next_ident__42891__auto___63364)){
var idxr__42892__auto___63365 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63365 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63365),((function (idxr__42892__auto___63365,ident__42890__auto___63363,next_ident__42891__auto___63364,this__42886__auto__,x63350_63362){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63363], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63364], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63365,ident__42890__auto___63363,next_ident__42891__auto___63364,this__42886__auto__,x63350_63362))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63350_63362))
;

x63350_63362.shouldComponentUpdate = ((function (x63350_63362){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63352 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63352);
} else {
return G__63352;
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
});})(x63350_63362))
;

x63350_63362.componentWillUnmount = ((function (x63350_63362){
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
});})(x63350_63362))
;

x63350_63362.componentDidUpdate = ((function (x63350_63362){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63350_63362))
;

x63350_63362.isMounted = ((function (x63350_63362){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63350_63362))
;

x63350_63362.componentWillMount = ((function (x63350_63362){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63350_63362))
;

x63350_63362.render = ((function (x63350_63362){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63353 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63354 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63355 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63356 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63357 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__63358 = om.next.props.call(null,this$);
var map__63358__$1 = ((((!((map__63358 == null)))?((((map__63358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63358):map__63358);
var where = cljs.core.get.call(null,map__63358__$1,new cljs.core.Keyword(null,"where","where",-2044795965));
var message = cljs.core.get.call(null,map__63358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var extra = cljs.core.get.call(null,map__63358__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var actual = cljs.core.get.call(null,map__63358__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.call(null,map__63358__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var stack = cljs.core.get.call(null,map__63358__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var diff = cljs.core.get.call(null,map__63358__$1,new cljs.core.Keyword(null,"diff","diff",2135942783));
return om.dom.li.call(null,null,om.dom.table.call(null,null,om.dom.tbody.call(null,null,om.dom.tr.call(null,null,om.dom.td.call(null,({"className": "test-result-title"}),"Where: "),om.dom.td.call(null,({"className": "test-result"}),clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(where)].join(''),/G__\d+/,""))),(cljs.core.truth_(message)?untangled_spec.renderer.ui_result_line.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"title","title",636505583),"ASSERTION: ",new cljs.core.Keyword(null,"value","value",305978217),message], null)):null),untangled_spec.renderer.ui_result_line.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"title","title",636505583),"Actual: ",new cljs.core.Keyword(null,"value","value",305978217),actual,new cljs.core.Keyword(null,"stack","stack",-793405930),stack], null)),untangled_spec.renderer.ui_result_line.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"title","title",636505583),"Expected: ",new cljs.core.Keyword(null,"value","value",305978217),expected], null)),(cljs.core.truth_(extra)?untangled_spec.renderer.ui_result_line.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"title","title",636505583),"Message: ",new cljs.core.Keyword(null,"value","value",305978217),extra], null)):null),(cljs.core.truth_(diff)?untangled_spec.renderer.ui_human_diff.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actual","actual",107306363),actual,new cljs.core.Keyword(null,"diff","diff",2135942783),diff], null)):null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63357;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63356;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63355;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63354;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63353;
}});})(x63350_63362))
;


untangled_spec.renderer.TestResult.prototype.constructor = untangled_spec.renderer.TestResult;

untangled_spec.renderer.TestResult.prototype.constructor.displayName = "untangled-spec.renderer/TestResult";

untangled_spec.renderer.TestResult.prototype.om$isComponent = true;

var x63360_63366 = untangled_spec.renderer.TestResult;


var x63361_63367 = untangled_spec.renderer.TestResult.prototype;


untangled_spec.renderer.TestResult.cljs$lang$type = true;

untangled_spec.renderer.TestResult.cljs$lang$ctorStr = "untangled-spec.renderer/TestResult";

untangled_spec.renderer.TestResult.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/TestResult");
});
untangled_spec.renderer.ui_test_result = om.next.factory.call(null,untangled_spec.renderer.TestResult,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(typeof untangled_spec.renderer.TestItem !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.TestItem = (function untangled_spec$renderer$TestItem(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.TestItem.prototype = goog.object.clone(React.Component.prototype);
}

var x63373_63385 = untangled_spec.renderer.TestItem.prototype;
x63373_63385.componentWillUpdate = ((function (x63373_63385){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63386 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63387 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63386,next_ident__42891__auto___63387)){
var idxr__42892__auto___63388 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63388 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63388),((function (idxr__42892__auto___63388,ident__42890__auto___63386,next_ident__42891__auto___63387,this__42886__auto__,x63373_63385){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63386], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63387], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63388,ident__42890__auto___63386,next_ident__42891__auto___63387,this__42886__auto__,x63373_63385))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63373_63385))
;

x63373_63385.shouldComponentUpdate = ((function (x63373_63385){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63375 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63375);
} else {
return G__63375;
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
});})(x63373_63385))
;

x63373_63385.componentWillUnmount = ((function (x63373_63385){
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
});})(x63373_63385))
;

x63373_63385.componentDidUpdate = ((function (x63373_63385){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63373_63385))
;

x63373_63385.isMounted = ((function (x63373_63385){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63373_63385))
;

x63373_63385.componentWillMount = ((function (x63373_63385){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63373_63385))
;

x63373_63385.render = ((function (x63373_63385){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63376 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63377 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63378 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63379 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63380 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__63381 = om.next.props.call(null,this$);
var map__63381__$1 = ((((!((map__63381 == null)))?((((map__63381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63381):map__63381);
var test_item_data = map__63381__$1;
var current_filter = cljs.core.get.call(null,map__63381__$1,new cljs.core.Keyword(null,"current-filter","current-filter",1519815247));
return om.dom.li.call(null,({"className": "test-item"}),om.dom.div.call(null,null,om.dom.span.call(null,({"className": untangled_spec.renderer.test_item_class.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(test_item_data))}),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(test_item_data)),om.dom.ul.call(null,({"className": "test-list"}),cljs.core.mapv.call(null,untangled_spec.renderer.ui_test_result,new cljs.core.Keyword(null,"test-results","test-results",575566942).cljs$core$IFn$_invoke$arity$1(test_item_data))),om.dom.ul.call(null,({"className": "test-list"}),cljs.core.sequence.call(null,cljs.core.comp.call(null,untangled_spec.renderer.filters.call(null,current_filter),cljs.core.map.call(null,((function (map__63381,map__63381__$1,test_item_data,current_filter,_STAR_reconciler_STAR_63376,_STAR_depth_STAR_63377,_STAR_shared_STAR_63378,_STAR_instrument_STAR_63379,_STAR_parent_STAR_63380,this$,this__42885__auto__,x63373_63385){
return (function (p1__63368_SHARP_){
return cljs.core.assoc.call(null,p1__63368_SHARP_,new cljs.core.Keyword(null,"current-filter","current-filter",1519815247),current_filter);
});})(map__63381,map__63381__$1,test_item_data,current_filter,_STAR_reconciler_STAR_63376,_STAR_depth_STAR_63377,_STAR_shared_STAR_63378,_STAR_instrument_STAR_63379,_STAR_parent_STAR_63380,this$,this__42885__auto__,x63373_63385))
),cljs.core.map.call(null,untangled_spec.renderer.ui_test_item)),new cljs.core.Keyword(null,"test-items","test-items",1900391985).cljs$core$IFn$_invoke$arity$1(test_item_data)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63380;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63379;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63378;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63377;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63376;
}});})(x63373_63385))
;


untangled_spec.renderer.TestItem.prototype.constructor = untangled_spec.renderer.TestItem;

untangled_spec.renderer.TestItem.prototype.constructor.displayName = "untangled-spec.renderer/TestItem";

untangled_spec.renderer.TestItem.prototype.om$isComponent = true;

var x63383_63389 = untangled_spec.renderer.TestItem;


var x63384_63390 = untangled_spec.renderer.TestItem.prototype;


untangled_spec.renderer.TestItem.cljs$lang$type = true;

untangled_spec.renderer.TestItem.cljs$lang$ctorStr = "untangled-spec.renderer/TestItem";

untangled_spec.renderer.TestItem.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/TestItem");
});
untangled_spec.renderer.ui_test_item = om.next.factory.call(null,untangled_spec.renderer.TestItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(typeof untangled_spec.renderer.TestNamespace !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.TestNamespace = (function untangled_spec$renderer$TestNamespace(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.TestNamespace.prototype = goog.object.clone(React.Component.prototype);
}

var x63396_63408 = untangled_spec.renderer.TestNamespace.prototype;
x63396_63408.componentWillUpdate = ((function (x63396_63408){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63409 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63410 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63409,next_ident__42891__auto___63410)){
var idxr__42892__auto___63411 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63411 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63411),((function (idxr__42892__auto___63411,ident__42890__auto___63409,next_ident__42891__auto___63410,this__42886__auto__,x63396_63408){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63409], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63410], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63411,ident__42890__auto___63409,next_ident__42891__auto___63410,this__42886__auto__,x63396_63408))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63396_63408))
;

x63396_63408.shouldComponentUpdate = ((function (x63396_63408){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63398 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63398);
} else {
return G__63398;
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
});})(x63396_63408))
;

x63396_63408.componentWillUnmount = ((function (x63396_63408){
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
});})(x63396_63408))
;

x63396_63408.componentDidUpdate = ((function (x63396_63408){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63396_63408))
;

x63396_63408.isMounted = ((function (x63396_63408){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63396_63408))
;

x63396_63408.componentWillMount = ((function (x63396_63408){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63396_63408))
;

x63396_63408.render = ((function (x63396_63408){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63399 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63400 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63401 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63402 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63403 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__63404 = om.next.props.call(null,this$);
var map__63404__$1 = ((((!((map__63404 == null)))?((((map__63404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63404):map__63404);
var tests_by_namespace = map__63404__$1;
var current_filter = cljs.core.get.call(null,map__63404__$1,new cljs.core.Keyword(null,"current-filter","current-filter",1519815247));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"test-items","test-items",1900391985).cljs$core$IFn$_invoke$arity$1(tests_by_namespace))){
return om.dom.li.call(null,({"className": "test-item"}),om.dom.div.call(null,({"className": "test-namespace"}),om.dom.h2.call(null,({"className": untangled_spec.renderer.test_item_class.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(tests_by_namespace))}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tests_by_namespace))].join('')),om.dom.ul.call(null,({"className": "test-list"}),cljs.core.sequence.call(null,cljs.core.comp.call(null,untangled_spec.renderer.filters.call(null,current_filter),cljs.core.map.call(null,((function (map__63404,map__63404__$1,tests_by_namespace,current_filter,_STAR_reconciler_STAR_63399,_STAR_depth_STAR_63400,_STAR_shared_STAR_63401,_STAR_instrument_STAR_63402,_STAR_parent_STAR_63403,this$,this__42885__auto__,x63396_63408){
return (function (p1__63391_SHARP_){
return cljs.core.assoc.call(null,p1__63391_SHARP_,new cljs.core.Keyword(null,"current-filter","current-filter",1519815247),current_filter);
});})(map__63404,map__63404__$1,tests_by_namespace,current_filter,_STAR_reconciler_STAR_63399,_STAR_depth_STAR_63400,_STAR_shared_STAR_63401,_STAR_instrument_STAR_63402,_STAR_parent_STAR_63403,this$,this__42885__auto__,x63396_63408))
),cljs.core.map.call(null,untangled_spec.renderer.ui_test_item)),new cljs.core.Keyword(null,"test-items","test-items",1900391985).cljs$core$IFn$_invoke$arity$1(tests_by_namespace)))));
} else {
return null;
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63403;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63402;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63401;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63400;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63399;
}});})(x63396_63408))
;


untangled_spec.renderer.TestNamespace.prototype.constructor = untangled_spec.renderer.TestNamespace;

untangled_spec.renderer.TestNamespace.prototype.constructor.displayName = "untangled-spec.renderer/TestNamespace";

untangled_spec.renderer.TestNamespace.prototype.om$isComponent = true;

var x63406_63412 = untangled_spec.renderer.TestNamespace;


var x63407_63413 = untangled_spec.renderer.TestNamespace.prototype;


untangled_spec.renderer.TestNamespace.cljs$lang$type = true;

untangled_spec.renderer.TestNamespace.cljs$lang$ctorStr = "untangled-spec.renderer/TestNamespace";

untangled_spec.renderer.TestNamespace.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/TestNamespace");
});
untangled_spec.renderer.ui_test_namespace = om.next.factory.call(null,untangled_spec.renderer.TestNamespace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));
untangled_spec.renderer.filter_button = (function untangled_spec$renderer$filter_button(var_args){
var args63414 = [];
var len__35776__auto___63419 = arguments.length;
var i__35777__auto___63420 = (0);
while(true){
if((i__35777__auto___63420 < len__35776__auto___63419)){
args63414.push((arguments[i__35777__auto___63420]));

var G__63421 = (i__35777__auto___63420 + (1));
i__35777__auto___63420 = G__63421;
continue;
} else {
}
break;
}

var G__63416 = args63414.length;
switch (G__63416) {
case 2:
return untangled_spec.renderer.filter_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return untangled_spec.renderer.filter_button.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63414.length)].join('')));

}
});

untangled_spec.renderer.filter_button.cljs$core$IFn$_invoke$arity$2 = (function (icon,data){
return untangled_spec.renderer.filter_button.call(null,icon,data,cljs.core.gensym.call(null),cljs.core.gensym.call(null),cljs.core.constantly.call(null,null));
});

untangled_spec.renderer.filter_button.cljs$core$IFn$_invoke$arity$5 = (function (icon,data,this_filter,current_filter,toggle_filter_cb){
var is_active_QMARK_ = cljs.core._EQ_.call(null,this_filter,current_filter);
return om.dom.button.call(null,({"className": "c-button c-button--icon", "onClick": toggle_filter_cb.call(null,this_filter)}),untangled.icons.icon.call(null,icon,new cljs.core.Keyword(null,"states","states",1389013542),(function (){var G__63417 = cljs.core.PersistentVector.EMPTY;
if(is_active_QMARK_){
return cljs.core.conj.call(null,G__63417,new cljs.core.Keyword(null,"active","active",1895962068));
} else {
return G__63417;
}
})()),om.dom.span.call(null,({"className": (function (){var G__63418 = "c-message";
if(is_active_QMARK_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63418),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" c-message--primary")].join('');
} else {
return G__63418;
}
})()}),data));
});

untangled_spec.renderer.filter_button.cljs$lang$maxFixedArity = 5;

untangled_spec.renderer.find_tests = (function untangled_spec$renderer$find_tests(test_filter,namespaces){
return cljs.core.remove.call(null,cljs.core.some_fn.call(null,cljs.core.nil_QMARK_,cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"test-items","test-items",1900391985))),cljs.core.apply.call(null,cljs.core.tree_seq,cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"test-items","test-items",1900391985)),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sequence,untangled_spec.renderer.filters.call(null,test_filter)),new cljs.core.Keyword(null,"test-items","test-items",1900391985)),cljs.core.sequence.call(null,untangled_spec.renderer.filters.call(null,test_filter),namespaces)));
});
untangled_spec.renderer.test_info = (function untangled_spec$renderer$test_info(p__63423,current_filter,toggle_filter_cb){
var map__63426 = p__63423;
var map__63426__$1 = ((((!((map__63426 == null)))?((((map__63426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63426):map__63426);
var pass = cljs.core.get.call(null,map__63426__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.call(null,map__63426__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.call(null,map__63426__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var namespaces = cljs.core.get.call(null,map__63426__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var end_time = cljs.core.get.call(null,map__63426__$1,new cljs.core.Keyword(null,"end-time","end-time",-1849817460));
var run_time = cljs.core.get.call(null,map__63426__$1,new cljs.core.Keyword(null,"run-time","run-time",-1231674133));
var total = ((pass + fail) + error);
var end_time__$1 = (new goog.i18n.DateTimeFormat("HH:mm:ss")).format((function (){var or__34555__auto__ = (function (){var and__34543__auto__ = end_time;
if(cljs.core.truth_(and__34543__auto__)){
return (new goog.date.DateTime()).setTime(end_time);
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (new goog.date.DateTime());
}
})());
var run_time__$1 = clojure.string.replace_first.call(null,goog.string.format("%.3fs",(run_time / (1000))),/^0/,"");
if(((fail + error) > (0))){
untangled_spec.renderer.change_favicon_to_color.call(null,"#d00");
} else {
untangled_spec.renderer.change_favicon_to_color.call(null,"#0d0");
}

return om.dom.span.call(null,null,untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"assignment","assignment",1330426519),cljs.core.count.call(null,namespaces)),untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"help","help",-439233446),total),untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"check","check",1226308904),pass,new cljs.core.Keyword(null,"passing","passing",154799600),current_filter,toggle_filter_cb),untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.count.call(null,untangled_spec.renderer.find_tests.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),namespaces)),new cljs.core.Keyword(null,"pending","pending",-220036727),current_filter,toggle_filter_cb),untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"pan_tool","pan_tool",-306611187),cljs.core.count.call(null,untangled_spec.renderer.find_tests.call(null,new cljs.core.Keyword(null,"manual","manual",-237370608),namespaces)),new cljs.core.Keyword(null,"manual","manual",-237370608),current_filter,toggle_filter_cb),untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"close","close",1835149582),fail,new cljs.core.Keyword(null,"failing","failing",-324520682),current_filter,toggle_filter_cb),untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"warning","warning",-1685650671),error,new cljs.core.Keyword(null,"failing","failing",-324520682),current_filter,toggle_filter_cb),untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"access_time","access_time",-1820282641),end_time__$1),untangled_spec.renderer.filter_button.call(null,new cljs.core.Keyword(null,"hourglass_empty","hourglass_empty",141670077),run_time__$1));
});
if(typeof untangled_spec.renderer.SelectorControl !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.SelectorControl = (function untangled_spec$renderer$SelectorControl(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.SelectorControl.prototype = goog.object.clone(React.Component.prototype);
}

var x63432_63444 = untangled_spec.renderer.SelectorControl.prototype;
x63432_63444.componentWillUpdate = ((function (x63432_63444){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63445 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63446 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63445,next_ident__42891__auto___63446)){
var idxr__42892__auto___63447 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63447 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63447),((function (idxr__42892__auto___63447,ident__42890__auto___63445,next_ident__42891__auto___63446,this__42886__auto__,x63432_63444){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63445], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63446], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63447,ident__42890__auto___63445,next_ident__42891__auto___63446,this__42886__auto__,x63432_63444))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63432_63444))
;

x63432_63444.shouldComponentUpdate = ((function (x63432_63444){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63434 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63434);
} else {
return G__63434;
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
});})(x63432_63444))
;

x63432_63444.componentWillUnmount = ((function (x63432_63444){
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
});})(x63432_63444))
;

x63432_63444.componentDidUpdate = ((function (x63432_63444){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63432_63444))
;

x63432_63444.isMounted = ((function (x63432_63444){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63432_63444))
;

x63432_63444.componentWillMount = ((function (x63432_63444){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63432_63444))
;

x63432_63444.render = ((function (x63432_63444){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63435 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63436 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63437 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63438 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63439 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__63440 = om.next.props.call(null,this$);
var map__63440__$1 = ((((!((map__63440 == null)))?((((map__63440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63440):map__63440);
var id = cljs.core.get.call(null,map__63440__$1,new cljs.core.Keyword("selector","id","selector/id",1917888117));
var active_QMARK_ = cljs.core.get.call(null,map__63440__$1,new cljs.core.Keyword("selector","active?","selector/active?",604593375));
return om.dom.div.call(null,({"className": "c-drawer__action", "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')}),untangled.ui.elements.ui_checkbox.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"checked","checked",-50955819),active_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__63440,map__63440__$1,id,active_QMARK_,_STAR_reconciler_STAR_63435,_STAR_depth_STAR_63436,_STAR_shared_STAR_63437,_STAR_instrument_STAR_63438,_STAR_parent_STAR_63439,this$,this__42885__auto__,x63432_63444){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled-spec.selectors","set-selector","untangled-spec.selectors/set-selector",-1524394460,null)),(function (){var x__35489__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("selector","id","selector/id",1917888117),id,new cljs.core.Keyword("selector","active?","selector/active?",604593375),e.target.checked], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))));
});})(map__63440,map__63440__$1,id,active_QMARK_,_STAR_reconciler_STAR_63435,_STAR_depth_STAR_63436,_STAR_shared_STAR_63437,_STAR_instrument_STAR_63438,_STAR_parent_STAR_63439,this$,this__42885__auto__,x63432_63444))
], null)),om.dom.span.call(null,({}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63439;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63438;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63437;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63436;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63435;
}});})(x63432_63444))
;


untangled_spec.renderer.SelectorControl.prototype.constructor = untangled_spec.renderer.SelectorControl;

untangled_spec.renderer.SelectorControl.prototype.constructor.displayName = "untangled-spec.renderer/SelectorControl";

untangled_spec.renderer.SelectorControl.prototype.om$isComponent = true;

var x63442_63448 = untangled_spec.renderer.SelectorControl;
/** @nocollapse */
x63442_63448.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x63442_63448.om$next$IQuery$query$arity$1 = ((function (x63442_63448){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selector","id","selector/id",1917888117),new cljs.core.Keyword("selector","active?","selector/active?",604593375)], null);
});})(x63442_63448))
;


var x63443_63449 = untangled_spec.renderer.SelectorControl.prototype;

x63443_63449.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x63443_63449.om$next$IQuery$query$arity$1 = ((function (x63443_63449){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selector","id","selector/id",1917888117),new cljs.core.Keyword("selector","active?","selector/active?",604593375)], null);
});})(x63443_63449))
;


untangled_spec.renderer.SelectorControl.cljs$lang$type = true;

untangled_spec.renderer.SelectorControl.cljs$lang$ctorStr = "untangled-spec.renderer/SelectorControl";

untangled_spec.renderer.SelectorControl.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/SelectorControl");
});
untangled_spec.renderer.ui_selector_control = om.next.factory.call(null,untangled_spec.renderer.SelectorControl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("selector","id","selector/id",1917888117)], null));
untangled_spec.renderer.test_selectors = (function untangled_spec$renderer$test_selectors(selectors){
return om.dom.div.call(null,null,om.dom.h1.call(null,null,"Test Selectors:"),cljs.core.map.call(null,untangled_spec.renderer.ui_selector_control,cljs.core.sort_by.call(null,new cljs.core.Keyword("selector","id","selector/id",1917888117),selectors)));
});
untangled_spec.renderer.toolbar_button = (function untangled_spec$renderer$toolbar_button(toggle_drawer){
return om.dom.div.call(null,({"className": "c-toolbar__button"}),om.dom.button.call(null,({"className": "c-button c-button--icon", "onClick": toggle_drawer}),untangled.icons.icon.call(null,new cljs.core.Keyword(null,"menu","menu",352255198))));
});
untangled_spec.renderer.test_header = (function untangled_spec$renderer$test_header(test_report,current_filter,toggle_drawer,toggle_filter_cb){
return om.dom.header.call(null,({"className": "u-layout__header c-toolbar c-toolbar--raised"}),om.dom.div.call(null,({"className": "c-toolbar__row"}),om.dom.h1.call(null,null,"Untangled Spec"),om.dom.div.call(null,({"className": "c-toolbar__spacer"})),untangled_spec.renderer.test_info.call(null,test_report,current_filter,toggle_filter_cb)),untangled_spec.renderer.toolbar_button.call(null,toggle_drawer));
});
untangled_spec.renderer.test_main = (function untangled_spec$renderer$test_main(p__63451,current_filter){
var map__63454 = p__63451;
var map__63454__$1 = ((((!((map__63454 == null)))?((((map__63454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63454):map__63454);
var namespaces = cljs.core.get.call(null,map__63454__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
return om.dom.main.call(null,({"className": "u-layout__content"}),om.dom.article.call(null,({"className": "o-article"}),untangled.ui.layout.row.call(null,cljs.core.PersistentArrayMap.EMPTY,untangled.ui.layout.col.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(12)], null),om.dom.div.call(null,({"className": "test-report"}),om.dom.ul.call(null,null,cljs.core.sequence.call(null,cljs.core.comp.call(null,untangled_spec.renderer.filters.call(null,current_filter),cljs.core.map.call(null,((function (map__63454,map__63454__$1,namespaces){
return (function (p1__63450_SHARP_){
return cljs.core.assoc.call(null,p1__63450_SHARP_,new cljs.core.Keyword(null,"current-filter","current-filter",1519815247),current_filter);
});})(map__63454,map__63454__$1,namespaces))
),cljs.core.map.call(null,untangled_spec.renderer.ui_test_namespace)),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),namespaces))))))));
});
if(typeof untangled_spec.renderer.TestReport !== 'undefined'){
} else {
/**
 * @constructor
 */
untangled_spec.renderer.TestReport = (function untangled_spec$renderer$TestReport(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

untangled_spec.renderer.TestReport.prototype = goog.object.clone(React.Component.prototype);
}

var x63460_63476 = untangled_spec.renderer.TestReport.prototype;
x63460_63476.componentWillUpdate = ((function (x63460_63476){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___63477 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___63478 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___63477,next_ident__42891__auto___63478)){
var idxr__42892__auto___63479 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___63479 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___63479),((function (idxr__42892__auto___63479,ident__42890__auto___63477,next_ident__42891__auto___63478,this__42886__auto__,x63460_63476){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___63477], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___63478], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___63479,ident__42890__auto___63477,next_ident__42891__auto___63478,this__42886__auto__,x63460_63476))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x63460_63476))
;

x63460_63476.shouldComponentUpdate = ((function (x63460_63476){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__63462 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__63462);
} else {
return G__63462;
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
});})(x63460_63476))
;

x63460_63476.componentWillUnmount = ((function (x63460_63476){
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
});})(x63460_63476))
;

x63460_63476.componentDidUpdate = ((function (x63460_63476){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x63460_63476))
;

x63460_63476.isMounted = ((function (x63460_63476){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x63460_63476))
;

x63460_63476.componentWillMount = ((function (x63460_63476){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x63460_63476))
;

x63460_63476.render = ((function (x63460_63476){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_63463 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_63464 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_63465 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_63466 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_63467 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__63468 = om.next.props.call(null,this$);
var map__63468__$1 = ((((!((map__63468 == null)))?((((map__63468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63468):map__63468);
var props = map__63468__$1;
var react_key = cljs.core.get.call(null,map__63468__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var test_report = cljs.core.get.call(null,map__63468__$1,new cljs.core.Keyword(null,"test-report","test-report",-769743150));
var selectors = cljs.core.get.call(null,map__63468__$1,new cljs.core.Keyword(null,"selectors","selectors",-680741768));
var current_filter = cljs.core.get.call(null,map__63468__$1,new cljs.core.Keyword("ui","current-filter","ui/current-filter",1519811523));
var map__63469 = om.next.get_state.call(null,this$);
var map__63469__$1 = ((((!((map__63469 == null)))?((((map__63469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63469):map__63469);
var open_drawer_QMARK_ = cljs.core.get.call(null,map__63469__$1,new cljs.core.Keyword(null,"open-drawer?","open-drawer?",1426251925));
var toggle_drawer = ((function (map__63468,map__63468__$1,props,react_key,test_report,selectors,current_filter,map__63469,map__63469__$1,open_drawer_QMARK_,_STAR_reconciler_STAR_63463,_STAR_depth_STAR_63464,_STAR_shared_STAR_63465,_STAR_instrument_STAR_63466,_STAR_parent_STAR_63467,this$,this__42885__auto__,x63460_63476){
return (function (){
return om.next.update_state_BANG_.call(null,this$,cljs.core.update,new cljs.core.Keyword(null,"open-drawer?","open-drawer?",1426251925),cljs.core.not);
});})(map__63468,map__63468__$1,props,react_key,test_report,selectors,current_filter,map__63469,map__63469__$1,open_drawer_QMARK_,_STAR_reconciler_STAR_63463,_STAR_depth_STAR_63464,_STAR_shared_STAR_63465,_STAR_instrument_STAR_63466,_STAR_parent_STAR_63467,this$,this__42885__auto__,x63460_63476))
;
var toggle_filter_cb = ((function (map__63468,map__63468__$1,props,react_key,test_report,selectors,current_filter,map__63469,map__63469__$1,open_drawer_QMARK_,toggle_drawer,_STAR_reconciler_STAR_63463,_STAR_depth_STAR_63464,_STAR_shared_STAR_63465,_STAR_instrument_STAR_63466,_STAR_parent_STAR_63467,this$,this__42885__auto__,x63460_63476){
return (function (f){
return ((function (map__63468,map__63468__$1,props,react_key,test_report,selectors,current_filter,map__63469,map__63469__$1,open_drawer_QMARK_,toggle_drawer,_STAR_reconciler_STAR_63463,_STAR_depth_STAR_63464,_STAR_shared_STAR_63465,_STAR_instrument_STAR_63466,_STAR_parent_STAR_63467,this$,this__42885__auto__,x63460_63476){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled-spec.renderer","toggle-filter","untangled-spec.renderer/toggle-filter",1543693891,null)),(function (){var x__35489__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),f], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))));
});
;})(map__63468,map__63468__$1,props,react_key,test_report,selectors,current_filter,map__63469,map__63469__$1,open_drawer_QMARK_,toggle_drawer,_STAR_reconciler_STAR_63463,_STAR_depth_STAR_63464,_STAR_shared_STAR_63465,_STAR_instrument_STAR_63466,_STAR_parent_STAR_63467,this$,this__42885__auto__,x63460_63476))
});})(map__63468,map__63468__$1,props,react_key,test_report,selectors,current_filter,map__63469,map__63469__$1,open_drawer_QMARK_,toggle_drawer,_STAR_reconciler_STAR_63463,_STAR_depth_STAR_63464,_STAR_shared_STAR_63465,_STAR_instrument_STAR_63466,_STAR_parent_STAR_63467,this$,this__42885__auto__,x63460_63476))
;
return om.dom.div.call(null,({"key": react_key, "className": "u-layout"}),om.dom.div.call(null,({"className": "u-layout__page u-layout__page--fixed"}),untangled_spec.renderer.test_header.call(null,test_report,current_filter,toggle_drawer,toggle_filter_cb),om.dom.div.call(null,({"className": (function (){var G__63472 = "c-drawer";
if(cljs.core.truth_(open_drawer_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63472),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-open")].join('');
} else {
return G__63472;
}
})()}),om.dom.div.call(null,({"className": "c-drawer__header"}),om.dom.img.call(null,({"src": "img/logo.png", "height": (35), "width": (35), "onClick": toggle_drawer})),om.dom.h1.call(null,null,"Untangled Spec")),untangled_spec.renderer.test_selectors.call(null,selectors)),om.dom.div.call(null,({"className": (function (){var G__63473 = "c-backdrop";
if(cljs.core.truth_(open_drawer_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63473),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is-active")].join('');
} else {
return G__63473;
}
})(), "onClick": toggle_drawer})),untangled_spec.renderer.test_main.call(null,test_report,current_filter)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_63467;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_63466;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_63465;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_63464;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_63463;
}});})(x63460_63476))
;


untangled_spec.renderer.TestReport.prototype.constructor = untangled_spec.renderer.TestReport;

untangled_spec.renderer.TestReport.prototype.constructor.displayName = "untangled-spec.renderer/TestReport";

untangled_spec.renderer.TestReport.prototype.om$isComponent = true;

var x63474_63480 = untangled_spec.renderer.TestReport;
/** @nocollapse */
x63474_63480.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x63474_63480.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x63474_63480){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),cljs.core.gensym.call(null,"UI_REACT_KEY"),new cljs.core.Keyword("ui","current-filter","ui/current-filter",1519811523),new cljs.core.Keyword(null,"all","all",892129742)], null);
});})(x63474_63480))
;

/** @nocollapse */
x63474_63480.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x63474_63480.om$next$IQuery$query$arity$1 = ((function (x63474_63480){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.Keyword(null,"test-report","test-report",-769743150),new cljs.core.Keyword("ui","current-filter","ui/current-filter",1519811523),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectors","selectors",-680741768),om.next.get_query.call(null,untangled_spec.renderer.SelectorControl)], null)], null);
});})(x63474_63480))
;


var x63475_63481 = untangled_spec.renderer.TestReport.prototype;

x63475_63481.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x63475_63481.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x63475_63481){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),cljs.core.gensym.call(null,"UI_REACT_KEY"),new cljs.core.Keyword("ui","current-filter","ui/current-filter",1519811523),new cljs.core.Keyword(null,"all","all",892129742)], null);
});})(x63475_63481))
;


x63475_63481.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x63475_63481.om$next$IQuery$query$arity$1 = ((function (x63475_63481){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.Keyword(null,"test-report","test-report",-769743150),new cljs.core.Keyword("ui","current-filter","ui/current-filter",1519811523),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectors","selectors",-680741768),om.next.get_query.call(null,untangled_spec.renderer.SelectorControl)], null)], null);
});})(x63475_63481))
;


untangled_spec.renderer.TestReport.cljs$lang$type = true;

untangled_spec.renderer.TestReport.cljs$lang$ctorStr = "untangled-spec.renderer/TestReport";

untangled_spec.renderer.TestReport.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"untangled-spec.renderer/TestReport");
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled-spec.renderer","render-tests","untangled-spec.renderer/render-tests",455084030,null),(function (p__63482,_,new_report){
var map__63483 = p__63482;
var map__63483__$1 = ((((!((map__63483 == null)))?((((map__63483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63483):map__63483);
var state = cljs.core.get.call(null,map__63483__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__63483,map__63483__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"test-report","test-report",-769743150),new_report);
});})(map__63483,map__63483__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.websockets.networking.push_received,new cljs.core.Symbol("untangled-spec.renderer","render-tests","untangled-spec.renderer/render-tests",455084030,null),(function (p__63485,p__63486){
var map__63487 = p__63485;
var map__63487__$1 = ((((!((map__63487 == null)))?((((map__63487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63487):map__63487);
var reconciler = cljs.core.get.call(null,map__63487__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__63488 = p__63486;
var map__63488__$1 = ((((!((map__63488 == null)))?((((map__63488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63488):map__63488);
var test_report = cljs.core.get.call(null,map__63488__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return om.next.transact_BANG_.call(null,om.next.app_root.call(null,reconciler),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled-spec.renderer","render-tests","untangled-spec.renderer/render-tests",455084030,null)),(function (){var x__35489__auto__ = test_report;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))));
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled_spec.renderer.TestRenderer = (function (root,target,with_websockets_QMARK_,runner_atom,__meta,__extmap,__hash){
this.root = root;
this.target = target;
this.with_websockets_QMARK_ = with_websockets_QMARK_;
this.runner_atom = runner_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled_spec.renderer.TestRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k63492,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__63494 = (((k63492 instanceof cljs.core.Keyword))?k63492.fqn:null);
switch (G__63494) {
case "root":
return self__.root;

break;
case "target":
return self__.target;

break;
case "with-websockets?":
return self__.with_websockets_QMARK_;

break;
case "runner-atom":
return self__.runner_atom;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63492,else__35233__auto__);

}
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#untangled-spec.renderer.TestRenderer{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root","root",-448657453),self__.root],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103),self__.with_websockets_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507),self__.runner_atom],null))], null),self__.__extmap));
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63491){
var self__ = this;
var G__63491__$1 = this;
return (new cljs.core.RecordIter((0),G__63491__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103),new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new untangled_spec.renderer.TestRenderer(self__.root,self__.target,self__.with_websockets_QMARK_,self__.runner_atom,self__.__meta,self__.__extmap,self__.__hash));
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
var self__ = this;
var this__35225__auto____$1 = this;
var h__34997__auto__ = self__.__hash;
if(!((h__34997__auto__ == null))){
return h__34997__auto__;
} else {
var h__34997__auto____$1 = cljs.core.hash_imap.call(null,this__35225__auto____$1);
self__.__hash = h__34997__auto____$1;

return h__34997__auto____$1;
}
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
var self__ = this;
var this__35226__auto____$1 = this;
if(cljs.core.truth_((function (){var and__34543__auto__ = other__35227__auto__;
if(cljs.core.truth_(and__34543__auto__)){
return ((this__35226__auto____$1.constructor === other__35227__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__35226__auto____$1,other__35227__auto__));
} else {
return and__34543__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled_spec.renderer.TestRenderer.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.renderer.TestRenderer.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var app = untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"networking","networking",586110628),(cljs.core.truth_(self__.with_websockets_QMARK_)?untangled.websockets.networking.make_channel_client.call(null,"/_untangled_spec_chsk"):(function (){
if(typeof untangled_spec.renderer.t_untangled_spec$renderer63495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {untangled.client.impl.network.UntangledNetwork}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
untangled_spec.renderer.t_untangled_spec$renderer63495 = (function (root,target,with_websockets_QMARK_,runner_atom,__meta,__extmap,__hash,this$,meta63496){
this.root = root;
this.target = target;
this.with_websockets_QMARK_ = with_websockets_QMARK_;
this.runner_atom = runner_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.this$ = this$;
this.meta63496 = meta63496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

untangled_spec.renderer.t_untangled_spec$renderer63495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (this$__$1){
return (function (_63497,meta63496__$1){
var self__ = this;
var _63497__$1 = this;
return (new untangled_spec.renderer.t_untangled_spec$renderer63495(self__.root,self__.target,self__.with_websockets_QMARK_,self__.runner_atom,self__.__meta,self__.__extmap,self__.__hash,self__.this$,meta63496__$1));
});})(this$__$1))
;


untangled_spec.renderer.t_untangled_spec$renderer63495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (this$__$1){
return (function (_63497){
var self__ = this;
var _63497__$1 = this;
return self__.meta63496;
});})(this$__$1))
;


untangled_spec.renderer.t_untangled_spec$renderer63495.prototype.untangled$client$impl$network$UntangledNetwork$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.renderer.t_untangled_spec$renderer63495.prototype.untangled$client$impl$network$UntangledNetwork$start$arity$2 = ((function (this$__$1){
return (function (this$__$1,app){
var self__ = this;
var this$__$2 = this;
return this$__$2;
});})(this$__$1))
;


untangled_spec.renderer.t_untangled_spec$renderer63495.prototype.untangled$client$impl$network$UntangledNetwork$send$arity$4 = ((function (this$__$1){
return (function (this$__$1,edn,ok,err){
var self__ = this;
var this$__$2 = this;
return ok.call(null,om.next.parser.call(null,cljs.core.deref.call(null,self__.runner_atom)).call(null,cljs.core.deref.call(null,self__.runner_atom),edn));
});})(this$__$1))
;

untangled_spec.renderer.t_untangled_spec$renderer63495.getBasis = ((function (this$__$1){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"with-websockets?","with-websockets?",-200740576,null),new cljs.core.Symbol(null,"runner-atom","runner-atom",-2037243262,null),new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("untangled-spec.renderer","TestRenderer","untangled-spec.renderer/TestRenderer",-377650336,null)], null)),new cljs.core.Symbol(null,"meta63496","meta63496",-496014693,null)], null);
});})(this$__$1))
;

untangled_spec.renderer.t_untangled_spec$renderer63495.cljs$lang$type = true;

untangled_spec.renderer.t_untangled_spec$renderer63495.cljs$lang$ctorStr = "untangled-spec.renderer/t_untangled_spec$renderer63495";

untangled_spec.renderer.t_untangled_spec$renderer63495.cljs$lang$ctorPrWriter = ((function (this$__$1){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"untangled-spec.renderer/t_untangled_spec$renderer63495");
});})(this$__$1))
;

untangled_spec.renderer.__GT_t_untangled_spec$renderer63495 = ((function (this$__$1){
return (function untangled_spec$renderer$__GT_t_untangled_spec$renderer63495(root__$1,target__$1,with_websockets_QMARK___$1,runner_atom__$1,__meta__$1,__extmap__$1,__hash__$1,this$__$2,meta63496){
return (new untangled_spec.renderer.t_untangled_spec$renderer63495(root__$1,target__$1,with_websockets_QMARK___$1,runner_atom__$1,__meta__$1,__extmap__$1,__hash__$1,this$__$2,meta63496));
});})(this$__$1))
;

}

return (new untangled_spec.renderer.t_untangled_spec$renderer63495(self__.root,self__.target,self__.with_websockets_QMARK_,self__.runner_atom,self__.__meta,self__.__extmap,self__.__hash,this$__$1,cljs.core.PersistentArrayMap.EMPTY));
})()
),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),((function (this$__$1){
return (function (app){
return untangled.client.data_fetch.load.call(null,app,new cljs.core.Keyword(null,"selectors","selectors",-680741768),untangled_spec.renderer.SelectorControl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("untangled-spec.selectors","set-selectors","untangled-spec.selectors/set-selectors",2102620932,null)], null));
});})(this$__$1))
);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"app","app",-560961707),untangled.client.core.mount.call(null,app,self__.root,self__.target));
});


untangled_spec.renderer.TestRenderer.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"app","app",-560961707),null);
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"root","root",-448657453),null,new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103),null,new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new untangled_spec.renderer.TestRenderer(self__.root,self__.target,self__.with_websockets_QMARK_,self__.runner_atom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__63491){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__63498 = cljs.core.keyword_identical_QMARK_;
var expr__63499 = k__35238__auto__;
if(cljs.core.truth_(pred__63498.call(null,new cljs.core.Keyword(null,"root","root",-448657453),expr__63499))){
return (new untangled_spec.renderer.TestRenderer(G__63491,self__.target,self__.with_websockets_QMARK_,self__.runner_atom,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63498.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__63499))){
return (new untangled_spec.renderer.TestRenderer(self__.root,G__63491,self__.with_websockets_QMARK_,self__.runner_atom,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63498.call(null,new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103),expr__63499))){
return (new untangled_spec.renderer.TestRenderer(self__.root,self__.target,G__63491,self__.runner_atom,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63498.call(null,new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507),expr__63499))){
return (new untangled_spec.renderer.TestRenderer(self__.root,self__.target,self__.with_websockets_QMARK_,G__63491,self__.__meta,self__.__extmap,null));
} else {
return (new untangled_spec.renderer.TestRenderer(self__.root,self__.target,self__.with_websockets_QMARK_,self__.runner_atom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__63491),null));
}
}
}
}
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root","root",-448657453),self__.root],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103),self__.with_websockets_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507),self__.runner_atom],null))], null),self__.__extmap));
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__63491){
var self__ = this;
var this__35229__auto____$1 = this;
return (new untangled_spec.renderer.TestRenderer(self__.root,self__.target,self__.with_websockets_QMARK_,self__.runner_atom,G__63491,self__.__extmap,self__.__hash));
});


untangled_spec.renderer.TestRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

untangled_spec.renderer.TestRenderer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"with-websockets?","with-websockets?",-200740576,null),new cljs.core.Symbol(null,"runner-atom","runner-atom",-2037243262,null)], null);
});

untangled_spec.renderer.TestRenderer.cljs$lang$type = true;

untangled_spec.renderer.TestRenderer.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled-spec.renderer/TestRenderer");
});

untangled_spec.renderer.TestRenderer.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"untangled-spec.renderer/TestRenderer");
});

untangled_spec.renderer.__GT_TestRenderer = (function untangled_spec$renderer$__GT_TestRenderer(root,target,with_websockets_QMARK_,runner_atom){
return (new untangled_spec.renderer.TestRenderer(root,target,with_websockets_QMARK_,runner_atom,null,null,null));
});

untangled_spec.renderer.map__GT_TestRenderer = (function untangled_spec$renderer$map__GT_TestRenderer(G__63493){
return (new untangled_spec.renderer.TestRenderer(new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(G__63493),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__63493),new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103).cljs$core$IFn$_invoke$arity$1(G__63493),new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507).cljs$core$IFn$_invoke$arity$1(G__63493),null,cljs.core.dissoc.call(null,G__63493,new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103),new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507)),null));
});

untangled_spec.renderer.make_test_renderer = (function untangled_spec$renderer$make_test_renderer(p__63502){
var map__63505 = p__63502;
var map__63505__$1 = ((((!((map__63505 == null)))?((((map__63505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63505):map__63505);
var with_websockets_QMARK_ = cljs.core.get.call(null,map__63505__$1,new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103),true);
return untangled_spec.renderer.map__GT_TestRenderer.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"with-websockets?","with-websockets?",-1841272103),with_websockets_QMARK_,new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"root","root",-448657453),untangled_spec.renderer.TestReport,new cljs.core.Keyword(null,"target","target",253001721),"untangled-spec-report"], null));
});

//# sourceMappingURL=renderer.js.map?rel=1491640779361