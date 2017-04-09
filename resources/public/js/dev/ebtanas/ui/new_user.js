// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.new_user');
goog.require('cljs.core');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('om.dom');
goog.require('om_css.core');
goog.require('untangled.client.mutations');
if(typeof ebtanas.ui.new_user.NewUser !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.new_user.NewUser = (function ebtanas$ui$new_user$NewUser(){
var this__41426__auto__ = this;
React.Component.apply(this__41426__auto__,arguments);

if(!((this__41426__auto__.initLocalState == null))){
this__41426__auto__.state = this__41426__auto__.initLocalState();
} else {
this__41426__auto__.state = {};
}

return this__41426__auto__;
});

ebtanas.ui.new_user.NewUser.prototype = goog.object.clone(React.Component.prototype);
}

var x52274_52286 = ebtanas.ui.new_user.NewUser.prototype;
x52274_52286.componentWillUpdate = ((function (x52274_52286){
return (function (next_props__41272__auto__,next_state__41273__auto__){
var this__41271__auto__ = this;
if(((!((this__41271__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41271__auto__.om$next$Ident$)))?true:false):false)){
var ident__41275__auto___52287 = om.next.ident.call(null,this__41271__auto__,om.next.props.call(null,this__41271__auto__));
var next_ident__41276__auto___52288 = om.next.ident.call(null,this__41271__auto__,om.next._next_props.call(null,next_props__41272__auto__,this__41271__auto__));
if(cljs.core.not_EQ_.call(null,ident__41275__auto___52287,next_ident__41276__auto___52288)){
var idxr__41277__auto___52289 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41277__auto___52289 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41277__auto___52289),((function (idxr__41277__auto___52289,ident__41275__auto___52287,next_ident__41276__auto___52288,this__41271__auto__,x52274_52286){
return (function (indexes__41278__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41278__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41275__auto___52287], null),cljs.core.disj,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41276__auto___52288], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41271__auto__);
});})(idxr__41277__auto___52289,ident__41275__auto___52287,next_ident__41276__auto___52288,this__41271__auto__,x52274_52286))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41271__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41271__auto__);
});})(x52274_52286))
;

x52274_52286.shouldComponentUpdate = ((function (x52274_52286){
return (function (next_props__41272__auto__,next_state__41273__auto__){
var this__41271__auto__ = this;
var next_children__41274__auto__ = next_props__41272__auto__.children;
var next_props__41272__auto____$1 = goog.object.get(next_props__41272__auto__,"omcljs$value");
var next_props__41272__auto____$2 = (function (){var G__52276 = next_props__41272__auto____$1;
if((next_props__41272__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__52276);
} else {
return G__52276;
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
});})(x52274_52286))
;

x52274_52286.componentWillUnmount = ((function (x52274_52286){
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
});})(x52274_52286))
;

x52274_52286.componentDidUpdate = ((function (x52274_52286){
return (function (prev_props__41279__auto__,prev_state__41280__auto__){
var this__41271__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41271__auto__);
});})(x52274_52286))
;

x52274_52286.isMounted = ((function (x52274_52286){
return (function (){
var this__41271__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41271__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x52274_52286))
;

x52274_52286.componentWillMount = ((function (x52274_52286){
return (function (){
var this__41271__auto__ = this;
var indexer__41281__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41281__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41281__auto__,this__41271__auto__);
}
});})(x52274_52286))
;

x52274_52286.render = ((function (x52274_52286){
return (function (){
var this__41270__auto__ = this;
var this$ = this__41270__auto__;
var _STAR_reconciler_STAR_52277 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_52278 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_52279 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_52280 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_52281 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41270__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41270__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41270__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41270__auto__);

om.next._STAR_parent_STAR_ = this__41270__auto__;

try{var map__52282 = om.next.props.call(null,this$);
var map__52282__$1 = ((((!((map__52282 == null)))?((((map__52282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52282):map__52282);
var username = cljs.core.get.call(null,map__52282__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.call(null,map__52282__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
var password2 = cljs.core.get.call(null,map__52282__$1,new cljs.core.Keyword("ui","password2","ui/password2",557832013));
return om.dom.div.call(null,null,om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.local_class.call(null,ebtanas.ui.new_user.NewUser,"form")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-xs-4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('')], null)),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "username"}),"Email Address"),om.dom.input.call(null,({"className": "form-control", "type": "email", "name": "username", "value": username, "onChange": ((function (map__52282,map__52282__$1,username,password,password2,_STAR_reconciler_STAR_52277,_STAR_depth_STAR_52278,_STAR_shared_STAR_52279,_STAR_instrument_STAR_52280,_STAR_parent_STAR_52281,this$,this__41270__auto__,x52274_52286){
return (function (p1__52267_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword(null,"event","event",301435442),p1__52267_SHARP_);
});})(map__52282,map__52282__$1,username,password,password2,_STAR_reconciler_STAR_52277,_STAR_depth_STAR_52278,_STAR_shared_STAR_52279,_STAR_instrument_STAR_52280,_STAR_parent_STAR_52281,this$,this__41270__auto__,x52274_52286))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password"}),"Password"),om.dom.input.call(null,({"name": "password", "className": "form-control", "type": "password", "value": password, "onChange": ((function (map__52282,map__52282__$1,username,password,password2,_STAR_reconciler_STAR_52277,_STAR_depth_STAR_52278,_STAR_shared_STAR_52279,_STAR_instrument_STAR_52280,_STAR_parent_STAR_52281,this$,this__41270__auto__,x52274_52286){
return (function (p1__52268_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword(null,"event","event",301435442),p1__52268_SHARP_);
});})(map__52282,map__52282__$1,username,password,password2,_STAR_reconciler_STAR_52277,_STAR_depth_STAR_52278,_STAR_shared_STAR_52279,_STAR_instrument_STAR_52280,_STAR_parent_STAR_52281,this$,this__41270__auto__,x52274_52286))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password2"}),"Verify your Password"),om.dom.input.call(null,({"name": "password2", "className": "form-control", "type": "password", "value": password2, "onChange": ((function (map__52282,map__52282__$1,username,password,password2,_STAR_reconciler_STAR_52277,_STAR_depth_STAR_52278,_STAR_shared_STAR_52279,_STAR_instrument_STAR_52280,_STAR_parent_STAR_52281,this$,this__41270__auto__,x52274_52286){
return (function (p1__52269_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password2","ui/password2",557832013),new cljs.core.Keyword(null,"event","event",301435442),p1__52269_SHARP_);
});})(map__52282,map__52282__$1,username,password,password2,_STAR_reconciler_STAR_52277,_STAR_depth_STAR_52278,_STAR_shared_STAR_52279,_STAR_instrument_STAR_52280,_STAR_parent_STAR_52281,this$,this__41270__auto__,x52274_52286))
}))),om.dom.button.call(null,({"onClick": ((function (map__52282,map__52282__$1,username,password,password2,_STAR_reconciler_STAR_52277,_STAR_depth_STAR_52278,_STAR_shared_STAR_52279,_STAR_instrument_STAR_52280,_STAR_parent_STAR_52281,this$,this__41270__auto__,x52274_52286){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__40156__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("new-user","sign-up","new-user/sign-up",1268156135,null)),(function (){var x__40156__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400)),(function (){var x__40156__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"u","u",-1156634785)),(function (){var x__40156__auto__ = username;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"p","p",151049309)),(function (){var x__40156__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())))));
});})(map__52282,map__52282__$1,username,password,password2,_STAR_reconciler_STAR_52277,_STAR_depth_STAR_52278,_STAR_shared_STAR_52279,_STAR_instrument_STAR_52280,_STAR_parent_STAR_52281,this$,this__41270__auto__,x52274_52286))
}),"Sign Up!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_52281;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_52280;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_52279;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_52278;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_52277;
}});})(x52274_52286))
;


ebtanas.ui.new_user.NewUser.prototype.constructor = ebtanas.ui.new_user.NewUser;

ebtanas.ui.new_user.NewUser.prototype.constructor.displayName = "ebtanas.ui.new-user/NewUser";

ebtanas.ui.new_user.NewUser.prototype.om$isComponent = true;

var x52284_52290 = ebtanas.ui.new_user.NewUser;
/** @nocollapse */
x52284_52290.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52284_52290.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52284_52290){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","password2","ui/password2",557832013),""], null);
});})(x52284_52290))
;

/** @nocollapse */
x52284_52290.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52284_52290.om$next$IQuery$query$arity$1 = ((function (x52284_52290){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword("ui","password2","ui/password2",557832013)], null);
});})(x52284_52290))
;

/** @nocollapse */
x52284_52290.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x52284_52290.om$next$Ident$ident$arity$2 = ((function (x52284_52290){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x52284_52290))
;


var x52285_52291 = ebtanas.ui.new_user.NewUser.prototype;

x52285_52291.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x52285_52291.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x52285_52291){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","password2","ui/password2",557832013),""], null);
});})(x52285_52291))
;


x52285_52291.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x52285_52291.om$next$IQuery$query$arity$1 = ((function (x52285_52291){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword("ui","password2","ui/password2",557832013)], null);
});})(x52285_52291))
;


x52285_52291.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x52285_52291.om$next$Ident$ident$arity$2 = ((function (x52285_52291){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x52285_52291))
;


ebtanas.ui.new_user.NewUser.cljs$lang$type = true;

ebtanas.ui.new_user.NewUser.cljs$lang$ctorStr = "ebtanas.ui.new-user/NewUser";

ebtanas.ui.new_user.NewUser.cljs$lang$ctorPrWriter = (function (this__41429__auto__,writer__41430__auto__,opt__41431__auto__){
return cljs.core._write.call(null,writer__41430__auto__,"ebtanas.ui.new-user/NewUser");
});
ebtanas.ui.new_user.ui_new_user = om.next.factory.call(null,ebtanas.ui.new_user.NewUser);

//# sourceMappingURL=new_user.js.map?rel=1491695672472