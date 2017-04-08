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
ebtanas.ui.root.nav_to = (function ebtanas$ui$root$nav_to(env,page){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env),cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,new cljs.core.Keyword(null,"page","page",849072397)], null));
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("nav","new-user","nav/new-user",-1079153480,null),(function (env,k,p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return ebtanas.ui.root.nav_to.call(null,env,new cljs.core.Keyword(null,"new-user","new-user",1575436062));
})], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("nav","login","nav/login",1697490065,null),(function (env,k,p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return ebtanas.ui.root.nav_to.call(null,env,new cljs.core.Keyword(null,"login","login",55217519));
})], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("nav","main","nav/main",-477429177,null),(function (env,k,p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return ebtanas.ui.root.nav_to.call(null,env,new cljs.core.Keyword(null,"main","main",-2117802661));
})], null);
}));
if(typeof ebtanas.ui.root.Loading !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.Loading = (function ebtanas$ui$root$Loading(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

ebtanas.ui.root.Loading.prototype = goog.object.clone(React.Component.prototype);
}

var x58080_58090 = ebtanas.ui.root.Loading.prototype;
x58080_58090.componentWillUpdate = ((function (x58080_58090){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___58091 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___58092 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___58091,next_ident__42891__auto___58092)){
var idxr__42892__auto___58093 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___58093 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___58093),((function (idxr__42892__auto___58093,ident__42890__auto___58091,next_ident__42891__auto___58092,this__42886__auto__,x58080_58090){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___58091], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___58092], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___58093,ident__42890__auto___58091,next_ident__42891__auto___58092,this__42886__auto__,x58080_58090))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x58080_58090))
;

x58080_58090.shouldComponentUpdate = ((function (x58080_58090){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__58082 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__58082);
} else {
return G__58082;
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
});})(x58080_58090))
;

x58080_58090.componentWillUnmount = ((function (x58080_58090){
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
});})(x58080_58090))
;

x58080_58090.componentDidUpdate = ((function (x58080_58090){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x58080_58090))
;

x58080_58090.isMounted = ((function (x58080_58090){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x58080_58090))
;

x58080_58090.componentWillMount = ((function (x58080_58090){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x58080_58090))
;

x58080_58090.render = ((function (x58080_58090){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_58083 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_58084 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_58085 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_58086 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_58087 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{return om.dom.div.call(null,null,"Loading...");
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_58087;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_58086;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_58085;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_58084;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_58083;
}});})(x58080_58090))
;


ebtanas.ui.root.Loading.prototype.constructor = ebtanas.ui.root.Loading;

ebtanas.ui.root.Loading.prototype.constructor.displayName = "ebtanas.ui.root/Loading";

ebtanas.ui.root.Loading.prototype.om$isComponent = true;

var x58088_58094 = ebtanas.ui.root.Loading;
/** @nocollapse */
x58088_58094.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x58088_58094.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x58088_58094){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
});})(x58088_58094))
;

/** @nocollapse */
x58088_58094.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x58088_58094.om$next$IQuery$query$arity$1 = ((function (x58088_58094){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null);
});})(x58088_58094))
;

/** @nocollapse */
x58088_58094.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x58088_58094.om$next$Ident$ident$arity$2 = ((function (x58088_58094){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x58088_58094))
;


var x58089_58095 = ebtanas.ui.root.Loading.prototype;

x58089_58095.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x58089_58095.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x58089_58095){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
});})(x58089_58095))
;


x58089_58095.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x58089_58095.om$next$IQuery$query$arity$1 = ((function (x58089_58095){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null);
});})(x58089_58095))
;


x58089_58095.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x58089_58095.om$next$Ident$ident$arity$2 = ((function (x58089_58095){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x58089_58095))
;


ebtanas.ui.root.Loading.cljs$lang$type = true;

ebtanas.ui.root.Loading.cljs$lang$ctorStr = "ebtanas.ui.root/Loading";

ebtanas.ui.root.Loading.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"ebtanas.ui.root/Loading");
});
ebtanas.ui.root.ui_loading = om.next.factory.call(null,ebtanas.ui.root.Loading);
if(typeof ebtanas.ui.root.Pages !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.Pages = (function ebtanas$ui$root$Pages(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

ebtanas.ui.root.Pages.prototype = goog.object.clone(React.Component.prototype);
}

var x58100_58113 = ebtanas.ui.root.Pages.prototype;
x58100_58113.componentWillUpdate = ((function (x58100_58113){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___58114 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___58115 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___58114,next_ident__42891__auto___58115)){
var idxr__42892__auto___58116 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___58116 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___58116),((function (idxr__42892__auto___58116,ident__42890__auto___58114,next_ident__42891__auto___58115,this__42886__auto__,x58100_58113){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___58114], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___58115], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___58116,ident__42890__auto___58114,next_ident__42891__auto___58115,this__42886__auto__,x58100_58113))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x58100_58113))
;

x58100_58113.shouldComponentUpdate = ((function (x58100_58113){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__58102 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__58102);
} else {
return G__58102;
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
});})(x58100_58113))
;

x58100_58113.componentWillUnmount = ((function (x58100_58113){
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
});})(x58100_58113))
;

x58100_58113.componentDidUpdate = ((function (x58100_58113){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x58100_58113))
;

x58100_58113.isMounted = ((function (x58100_58113){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x58100_58113))
;

x58100_58113.componentWillMount = ((function (x58100_58113){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x58100_58113))
;

x58100_58113.render = ((function (x58100_58113){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_58103 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_58104 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_58105 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_58106 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_58107 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__58108 = om.next.props.call(null,this$);
var map__58108__$1 = ((((!((map__58108 == null)))?((((map__58108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58108):map__58108);
var props = map__58108__$1;
var id = cljs.core.get.call(null,map__58108__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var login = cljs.core.get.call(null,map__58108__$1,new cljs.core.Keyword(null,"login","login",55217519));
var G__58110 = (((id instanceof cljs.core.Keyword))?id.fqn:null);
switch (G__58110) {
case "new-user":
return ebtanas.ui.new_user.ui_new_user.call(null,props);

break;
case "loading":
return ebtanas.ui.root.ui_loading.call(null,props);

break;
case "login":
return ebtanas.ui.login.ui_login.call(null,props);

break;
case "main":
return ebtanas.ui.main.ui_main.call(null,props);

break;
default:
return om.dom.div.call(null,null,"MISSING PAGE");

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_58107;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_58106;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_58105;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_58104;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_58103;
}});})(x58100_58113))
;


ebtanas.ui.root.Pages.prototype.constructor = ebtanas.ui.root.Pages;

ebtanas.ui.root.Pages.prototype.constructor.displayName = "ebtanas.ui.root/Pages";

ebtanas.ui.root.Pages.prototype.om$isComponent = true;

var x58111_58118 = ebtanas.ui.root.Pages;
/** @nocollapse */
x58111_58118.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x58111_58118.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x58111_58118){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.Loading,null);
});})(x58111_58118))
;

/** @nocollapse */
x58111_58118.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x58111_58118.om$next$IQuery$query$arity$1 = ((function (x58111_58118){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loading","loading",-737050189),om.next.get_query.call(null,ebtanas.ui.root.Loading),new cljs.core.Keyword(null,"new-user","new-user",1575436062),om.next.get_query.call(null,ebtanas.ui.new_user.NewUser),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.login.LoginPage),new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.main.MainPage)], null);
});})(x58111_58118))
;

/** @nocollapse */
x58111_58118.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x58111_58118.om$next$Ident$ident$arity$2 = ((function (x58111_58118){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x58111_58118))
;


var x58112_58119 = ebtanas.ui.root.Pages.prototype;

x58112_58119.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x58112_58119.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x58112_58119){
return (function (this$,params){
var this$__$1 = this;
return untangled.client.core.initial_state.call(null,ebtanas.ui.root.Loading,null);
});})(x58112_58119))
;


x58112_58119.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x58112_58119.om$next$IQuery$query$arity$1 = ((function (x58112_58119){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loading","loading",-737050189),om.next.get_query.call(null,ebtanas.ui.root.Loading),new cljs.core.Keyword(null,"new-user","new-user",1575436062),om.next.get_query.call(null,ebtanas.ui.new_user.NewUser),new cljs.core.Keyword(null,"login","login",55217519),om.next.get_query.call(null,ebtanas.ui.login.LoginPage),new cljs.core.Keyword(null,"main","main",-2117802661),om.next.get_query.call(null,ebtanas.ui.main.MainPage)], null);
});})(x58112_58119))
;


x58112_58119.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x58112_58119.om$next$Ident$ident$arity$2 = ((function (x58112_58119){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x58112_58119))
;


ebtanas.ui.root.Pages.cljs$lang$type = true;

ebtanas.ui.root.Pages.cljs$lang$ctorStr = "ebtanas.ui.root/Pages";

ebtanas.ui.root.Pages.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"ebtanas.ui.root/Pages");
});
ebtanas.ui.root.ui_pages = om.next.factory.call(null,ebtanas.ui.root.Pages);
ebtanas.ui.root.ui_login_stats = (function ebtanas$ui$root$ui_login_stats(loading_QMARK_,user,logout_fn){
return om.dom.p.call(null,({"className": "navbar-text navbar-right"}),(cljs.core.truth_(loading_QMARK_)?om.dom.span.call(null,({"className": "badge"}),"..."):null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user),om.dom.br.call(null,null),om.dom.a.call(null,({"onClick": logout_fn})," Log out"));
});
ebtanas.ui.root.ui_login_button = (function ebtanas$ui$root$ui_login_button(loading_QMARK_,login_fn){
return om.dom.p.call(null,({"className": "navbar-right"}),(cljs.core.truth_(loading_QMARK_)?om.dom.span.call(null,({"className": "navbar-text badge"}),"..."):null),om.dom.button.call(null,({"type": "button", "onClick": login_fn, "className": "btn btn-default navbar-btn "}),"Sign in"));
});
ebtanas.ui.root.ui_navbar = (function ebtanas$ui$root$ui_navbar(this$){
var login = (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","login","nav/login",1697490065,null))], null));
});
var logout = ((function (login){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("login","logout","login/logout",-1136924503,null))], null));
});})(login))
;
var map__58122 = om.next.props.call(null,this$);
var map__58122__$1 = ((((!((map__58122 == null)))?((((map__58122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58122):map__58122);
var loading_data = cljs.core.get.call(null,map__58122__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
var current_user = cljs.core.get.call(null,map__58122__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
var logged_in_QMARK_ = cljs.core.get.call(null,map__58122__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
return om.dom.div.call(null,({"className": "navbar navbar-default"}),om.dom.div.call(null,({"className": "container-fluid"}),om.dom.div.call(null,({"className": "navbar-header"}),om.dom.span.call(null,({"className": "navbar-brand"}),om.dom.span.call(null,null,"Template Brand"))),om.dom.div.call(null,({"className": "collapse navbar-collapse"}),(cljs.core.truth_(logged_in_QMARK_)?om.dom.ul.call(null,({"className": "nav navbar-nav"}),om.dom.li.call(null,null,om.dom.a.call(null,({"className": "active", "onClick": ((function (login,logout,map__58122,map__58122__$1,loading_data,current_user,logged_in_QMARK_){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","main","nav/main",-477429177,null))], null));
});})(login,logout,map__58122,map__58122__$1,loading_data,current_user,logged_in_QMARK_))
, "href": "#"}),"Main"))):null),(cljs.core.truth_(logged_in_QMARK_)?ebtanas.ui.root.ui_login_stats.call(null,loading_data,current_user,logout):ebtanas.ui.root.ui_login_button.call(null,loading_data,login)))));
});
if(typeof ebtanas.ui.root.Root !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.root.Root = (function ebtanas$ui$root$Root(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

ebtanas.ui.root.Root.prototype = goog.object.clone(React.Component.prototype);
}

var x58128_58140 = ebtanas.ui.root.Root.prototype;
x58128_58140.componentWillUpdate = ((function (x58128_58140){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___58141 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___58142 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___58141,next_ident__42891__auto___58142)){
var idxr__42892__auto___58143 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___58143 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___58143),((function (idxr__42892__auto___58143,ident__42890__auto___58141,next_ident__42891__auto___58142,this__42886__auto__,x58128_58140){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___58141], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___58142], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___58143,ident__42890__auto___58141,next_ident__42891__auto___58142,this__42886__auto__,x58128_58140))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x58128_58140))
;

x58128_58140.shouldComponentUpdate = ((function (x58128_58140){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__58130 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__58130);
} else {
return G__58130;
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
});})(x58128_58140))
;

x58128_58140.componentWillUnmount = ((function (x58128_58140){
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
});})(x58128_58140))
;

x58128_58140.componentDidUpdate = ((function (x58128_58140){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x58128_58140))
;

x58128_58140.isMounted = ((function (x58128_58140){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x58128_58140))
;

x58128_58140.componentWillMount = ((function (x58128_58140){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x58128_58140))
;

x58128_58140.render = ((function (x58128_58140){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_58131 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_58132 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_58133 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_58134 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_58135 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__58136 = om.next.props.call(null,this$);
var map__58136__$1 = ((((!((map__58136 == null)))?((((map__58136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58136):map__58136);
var loading_data = cljs.core.get.call(null,map__58136__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
var react_key = cljs.core.get.call(null,map__58136__$1,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664));
var current_page = cljs.core.get.call(null,map__58136__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var current_user = cljs.core.get.call(null,map__58136__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
var logged_in_QMARK_ = cljs.core.get.call(null,map__58136__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
var logout = ((function (map__58136,map__58136__$1,loading_data,react_key,current_page,current_user,logged_in_QMARK_,_STAR_reconciler_STAR_58131,_STAR_depth_STAR_58132,_STAR_shared_STAR_58133,_STAR_instrument_STAR_58134,_STAR_parent_STAR_58135,this$,this__42885__auto__,x58128_58140){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("login","logout","login/logout",-1136924503,null))], null));
});})(map__58136,map__58136__$1,loading_data,react_key,current_page,current_user,logged_in_QMARK_,_STAR_reconciler_STAR_58131,_STAR_depth_STAR_58132,_STAR_shared_STAR_58133,_STAR_instrument_STAR_58134,_STAR_parent_STAR_58135,this$,this__42885__auto__,x58128_58140))
;
return om.dom.div.call(null,({"key": react_key}),ebtanas.ui.root.ui_navbar.call(null,this$),ebtanas.ui.root.ui_pages.call(null,om.next.computed.call(null,current_page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logout","logout",1418564329),logout], null))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_58135;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_58134;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_58133;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_58132;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_58131;
}});})(x58128_58140))
;


ebtanas.ui.root.Root.prototype.constructor = ebtanas.ui.root.Root;

ebtanas.ui.root.Root.prototype.constructor.displayName = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.prototype.om$isComponent = true;

var x58138_58144 = ebtanas.ui.root.Root;
/** @nocollapse */
x58138_58144.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x58138_58144.om$next$IQuery$query$arity$1 = ((function (x58138_58144){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),om.next.get_query.call(null,ebtanas.ui.root.Pages)], null)], null);
});})(x58138_58144))
;

/** @nocollapse */
x58138_58144.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x58138_58144.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x58138_58144){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),false,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-page","current-page",-101294180),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Pages,null)], null);
});})(x58138_58144))
;


var x58139_58145 = ebtanas.ui.root.Root.prototype;

x58139_58145.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x58139_58145.om$next$IQuery$query$arity$1 = ((function (x58139_58145){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),om.next.get_query.call(null,ebtanas.ui.root.Pages)], null)], null);
});})(x58139_58145))
;


x58139_58145.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x58139_58145.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x58139_58145){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),false,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-page","current-page",-101294180),untangled.client.core.initial_state.call(null,ebtanas.ui.root.Pages,null)], null);
});})(x58139_58145))
;


ebtanas.ui.root.Root.cljs$lang$type = true;

ebtanas.ui.root.Root.cljs$lang$ctorStr = "ebtanas.ui.root/Root";

ebtanas.ui.root.Root.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"ebtanas.ui.root/Root");
});

//# sourceMappingURL=root.js.map?rel=1491640773556