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
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

ebtanas.ui.new_user.NewUser.prototype = goog.object.clone(React.Component.prototype);
}

var x84378_84390 = ebtanas.ui.new_user.NewUser.prototype;
x84378_84390.componentWillUpdate = ((function (x84378_84390){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___84391 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___84392 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___84391,next_ident__42891__auto___84392)){
var idxr__42892__auto___84393 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___84393 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___84393),((function (idxr__42892__auto___84393,ident__42890__auto___84391,next_ident__42891__auto___84392,this__42886__auto__,x84378_84390){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___84391], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___84392], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___84393,ident__42890__auto___84391,next_ident__42891__auto___84392,this__42886__auto__,x84378_84390))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x84378_84390))
;

x84378_84390.shouldComponentUpdate = ((function (x84378_84390){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__84380 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__84380);
} else {
return G__84380;
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
});})(x84378_84390))
;

x84378_84390.componentWillUnmount = ((function (x84378_84390){
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
});})(x84378_84390))
;

x84378_84390.componentDidUpdate = ((function (x84378_84390){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x84378_84390))
;

x84378_84390.isMounted = ((function (x84378_84390){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x84378_84390))
;

x84378_84390.componentWillMount = ((function (x84378_84390){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x84378_84390))
;

x84378_84390.render = ((function (x84378_84390){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_84381 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_84382 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_84383 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_84384 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_84385 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__84386 = om.next.props.call(null,this$);
var map__84386__$1 = ((((!((map__84386 == null)))?((((map__84386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84386):map__84386);
var username = cljs.core.get.call(null,map__84386__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.call(null,map__84386__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
var password2 = cljs.core.get.call(null,map__84386__$1,new cljs.core.Keyword("ui","password2","ui/password2",557832013));
return om.dom.div.call(null,null,om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.local_class.call(null,ebtanas.ui.new_user.NewUser,"form")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-xs-4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('')], null)),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "username"}),"Email Address"),om.dom.input.call(null,({"className": "form-control", "type": "email", "name": "username", "value": username, "onChange": ((function (map__84386,map__84386__$1,username,password,password2,_STAR_reconciler_STAR_84381,_STAR_depth_STAR_84382,_STAR_shared_STAR_84383,_STAR_instrument_STAR_84384,_STAR_parent_STAR_84385,this$,this__42885__auto__,x84378_84390){
return (function (p1__84371_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword(null,"event","event",301435442),p1__84371_SHARP_);
});})(map__84386,map__84386__$1,username,password,password2,_STAR_reconciler_STAR_84381,_STAR_depth_STAR_84382,_STAR_shared_STAR_84383,_STAR_instrument_STAR_84384,_STAR_parent_STAR_84385,this$,this__42885__auto__,x84378_84390))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password"}),"Password"),om.dom.input.call(null,({"name": "password", "className": "form-control", "type": "password", "value": password, "onChange": ((function (map__84386,map__84386__$1,username,password,password2,_STAR_reconciler_STAR_84381,_STAR_depth_STAR_84382,_STAR_shared_STAR_84383,_STAR_instrument_STAR_84384,_STAR_parent_STAR_84385,this$,this__42885__auto__,x84378_84390){
return (function (p1__84372_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword(null,"event","event",301435442),p1__84372_SHARP_);
});})(map__84386,map__84386__$1,username,password,password2,_STAR_reconciler_STAR_84381,_STAR_depth_STAR_84382,_STAR_shared_STAR_84383,_STAR_instrument_STAR_84384,_STAR_parent_STAR_84385,this$,this__42885__auto__,x84378_84390))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password2"}),"Verify your Password"),om.dom.input.call(null,({"name": "password2", "className": "form-control", "type": "password", "value": password2, "onChange": ((function (map__84386,map__84386__$1,username,password,password2,_STAR_reconciler_STAR_84381,_STAR_depth_STAR_84382,_STAR_shared_STAR_84383,_STAR_instrument_STAR_84384,_STAR_parent_STAR_84385,this$,this__42885__auto__,x84378_84390){
return (function (p1__84373_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password2","ui/password2",557832013),new cljs.core.Keyword(null,"event","event",301435442),p1__84373_SHARP_);
});})(map__84386,map__84386__$1,username,password,password2,_STAR_reconciler_STAR_84381,_STAR_depth_STAR_84382,_STAR_shared_STAR_84383,_STAR_instrument_STAR_84384,_STAR_parent_STAR_84385,this$,this__42885__auto__,x84378_84390))
}))),om.dom.button.call(null,({"onClick": ((function (map__84386,map__84386__$1,username,password,password2,_STAR_reconciler_STAR_84381,_STAR_depth_STAR_84382,_STAR_shared_STAR_84383,_STAR_instrument_STAR_84384,_STAR_parent_STAR_84385,this$,this__42885__auto__,x84378_84390){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("new-user","sign-up","new-user/sign-up",1268156135,null)),(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400)),(function (){var x__35489__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"u","u",-1156634785)),(function (){var x__35489__auto__ = username;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"p","p",151049309)),(function (){var x__35489__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))));
});})(map__84386,map__84386__$1,username,password,password2,_STAR_reconciler_STAR_84381,_STAR_depth_STAR_84382,_STAR_shared_STAR_84383,_STAR_instrument_STAR_84384,_STAR_parent_STAR_84385,this$,this__42885__auto__,x84378_84390))
}),"Sign Up!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_84385;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_84384;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_84383;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_84382;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_84381;
}});})(x84378_84390))
;


ebtanas.ui.new_user.NewUser.prototype.constructor = ebtanas.ui.new_user.NewUser;

ebtanas.ui.new_user.NewUser.prototype.constructor.displayName = "ebtanas.ui.new-user/NewUser";

ebtanas.ui.new_user.NewUser.prototype.om$isComponent = true;

var x84388_84394 = ebtanas.ui.new_user.NewUser;
/** @nocollapse */
x84388_84394.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x84388_84394.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x84388_84394){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","password2","ui/password2",557832013),""], null);
});})(x84388_84394))
;

/** @nocollapse */
x84388_84394.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x84388_84394.om$next$IQuery$query$arity$1 = ((function (x84388_84394){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword("ui","password2","ui/password2",557832013)], null);
});})(x84388_84394))
;

/** @nocollapse */
x84388_84394.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x84388_84394.om$next$Ident$ident$arity$2 = ((function (x84388_84394){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x84388_84394))
;


var x84389_84395 = ebtanas.ui.new_user.NewUser.prototype;

x84389_84395.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x84389_84395.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x84389_84395){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","password2","ui/password2",557832013),""], null);
});})(x84389_84395))
;


x84389_84395.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x84389_84395.om$next$IQuery$query$arity$1 = ((function (x84389_84395){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword("ui","password2","ui/password2",557832013)], null);
});})(x84389_84395))
;


x84389_84395.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x84389_84395.om$next$Ident$ident$arity$2 = ((function (x84389_84395){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-user","new-user",1575436062),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x84389_84395))
;


ebtanas.ui.new_user.NewUser.cljs$lang$type = true;

ebtanas.ui.new_user.NewUser.cljs$lang$ctorStr = "ebtanas.ui.new-user/NewUser";

ebtanas.ui.new_user.NewUser.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"ebtanas.ui.new-user/NewUser");
});
ebtanas.ui.new_user.ui_new_user = om.next.factory.call(null,ebtanas.ui.new_user.NewUser);

//# sourceMappingURL=new_user.js.map?rel=1491640820038