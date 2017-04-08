// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.login');
goog.require('cljs.core');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('om.dom');
goog.require('om_css.core');
goog.require('untangled.client.mutations');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","attempt-login","login/attempt-login",-759830516,null),(function (p__105427,k,p__105428){
var map__105429 = p__105427;
var map__105429__$1 = ((((!((map__105429 == null)))?((((map__105429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105429):map__105429);
var state = cljs.core.get.call(null,map__105429__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__105430 = p__105428;
var map__105430__$1 = ((((!((map__105430 == null)))?((((map__105430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105430):map__105430);
var uid = cljs.core.get.call(null,map__105430__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__105429,map__105429__$1,state,map__105430,map__105430__$1,uid){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),uid,new cljs.core.Keyword(null,"name","name",1843675177),"???"], null),new cljs.core.Keyword(null,"server-down","server-down",1750502325),false);
});})(map__105429,map__105429__$1,state,map__105430,map__105430__$1,uid))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","server-down","login/server-down",-1003159195,null),(function (p__105433,k,p){
var map__105434 = p__105433;
var map__105434__$1 = ((((!((map__105434 == null)))?((((map__105434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105434):map__105434);
var state = cljs.core.get.call(null,map__105434__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__105434,map__105434__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"server-down","server-down",1750502325),true);
});})(map__105434,map__105434__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null),(function (p__105436,k,p){
var map__105437 = p__105436;
var map__105437__$1 = ((((!((map__105437 == null)))?((((map__105437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105437):map__105437);
var state = cljs.core.get.call(null,map__105437__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__105437,map__105437__$1,state){
return (function (){
var map__105439 = cljs.core.deref.call(null,state);
var map__105439__$1 = ((((!((map__105439 == null)))?((((map__105439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105439):map__105439);
var logged_in_QMARK_ = cljs.core.get.call(null,map__105439__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
var current_user = cljs.core.get.call(null,map__105439__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
if(cljs.core.truth_(logged_in_QMARK_)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null));
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null));
}
});})(map__105437,map__105437__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","logout","login/logout",-1136924503,null),(function (p__105441,k,p){
var map__105442 = p__105441;
var map__105442__$1 = ((((!((map__105442 == null)))?((((map__105442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105442):map__105442);
var state = cljs.core.get.call(null,map__105442__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__105442,map__105442__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null));
});})(map__105442,map__105442__$1,state))
], null);
}));
if(typeof ebtanas.ui.login.LoginPage !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.login.LoginPage = (function ebtanas$ui$login$LoginPage(){
var this__43041__auto__ = this;
React.Component.apply(this__43041__auto__,arguments);

if(!((this__43041__auto__.initLocalState == null))){
this__43041__auto__.state = this__43041__auto__.initLocalState();
} else {
this__43041__auto__.state = {};
}

return this__43041__auto__;
});

ebtanas.ui.login.LoginPage.prototype = goog.object.clone(React.Component.prototype);
}

var x105450_105462 = ebtanas.ui.login.LoginPage.prototype;
x105450_105462.componentWillUpdate = ((function (x105450_105462){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
if(((!((this__42886__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__42886__auto__.om$next$Ident$)))?true:false):false)){
var ident__42890__auto___105463 = om.next.ident.call(null,this__42886__auto__,om.next.props.call(null,this__42886__auto__));
var next_ident__42891__auto___105464 = om.next.ident.call(null,this__42886__auto__,om.next._next_props.call(null,next_props__42887__auto__,this__42886__auto__));
if(cljs.core.not_EQ_.call(null,ident__42890__auto___105463,next_ident__42891__auto___105464)){
var idxr__42892__auto___105465 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__42892__auto___105465 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__42892__auto___105465),((function (idxr__42892__auto___105465,ident__42890__auto___105463,next_ident__42891__auto___105464,this__42886__auto__,x105450_105462){
return (function (indexes__42893__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__42893__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__42890__auto___105463], null),cljs.core.disj,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__42891__auto___105464], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__42886__auto__);
});})(idxr__42892__auto___105465,ident__42890__auto___105463,next_ident__42891__auto___105464,this__42886__auto__,x105450_105462))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__42886__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__42886__auto__);
});})(x105450_105462))
;

x105450_105462.shouldComponentUpdate = ((function (x105450_105462){
return (function (next_props__42887__auto__,next_state__42888__auto__){
var this__42886__auto__ = this;
var next_children__42889__auto__ = next_props__42887__auto__.children;
var next_props__42887__auto____$1 = goog.object.get(next_props__42887__auto__,"omcljs$value");
var next_props__42887__auto____$2 = (function (){var G__105452 = next_props__42887__auto____$1;
if((next_props__42887__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__105452);
} else {
return G__105452;
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
});})(x105450_105462))
;

x105450_105462.componentWillUnmount = ((function (x105450_105462){
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
});})(x105450_105462))
;

x105450_105462.componentDidUpdate = ((function (x105450_105462){
return (function (prev_props__42894__auto__,prev_state__42895__auto__){
var this__42886__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__42886__auto__);
});})(x105450_105462))
;

x105450_105462.isMounted = ((function (x105450_105462){
return (function (){
var this__42886__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__42886__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x105450_105462))
;

x105450_105462.componentWillMount = ((function (x105450_105462){
return (function (){
var this__42886__auto__ = this;
var indexer__42896__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__42886__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__42896__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__42896__auto__,this__42886__auto__);
}
});})(x105450_105462))
;

x105450_105462.render = ((function (x105450_105462){
return (function (){
var this__42885__auto__ = this;
var this$ = this__42885__auto__;
var _STAR_reconciler_STAR_105453 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_105454 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_105455 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_105456 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_105457 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__42885__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__42885__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__42885__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__42885__auto__);

om.next._STAR_parent_STAR_ = this__42885__auto__;

try{var map__105458 = om.next.props.call(null,this$);
var map__105458__$1 = ((((!((map__105458 == null)))?((((map__105458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105458):map__105458);
var username = cljs.core.get.call(null,map__105458__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.call(null,map__105458__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
var server_down = cljs.core.get.call(null,map__105458__$1,new cljs.core.Keyword(null,"server-down","server-down",1750502325));
var loading_data = cljs.core.get.call(null,map__105458__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
return om.dom.div.call(null,null,om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.local_class.call(null,ebtanas.ui.login.LoginPage,"form")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-xs-4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('')], null)),(cljs.core.truth_(server_down)?om.dom.div.call(null,null,"Unable to contact server. Try again later."):null),(cljs.core.truth_(loading_data)?om.dom.div.call(null,null,"Working..."):null),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "username"}),"Username"),om.dom.input.call(null,({"className": "form-control", "name": "username", "value": username, "onChange": ((function (map__105458,map__105458__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_105453,_STAR_depth_STAR_105454,_STAR_shared_STAR_105455,_STAR_instrument_STAR_105456,_STAR_parent_STAR_105457,this$,this__42885__auto__,x105450_105462){
return (function (p1__105444_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword(null,"event","event",301435442),p1__105444_SHARP_);
});})(map__105458,map__105458__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_105453,_STAR_depth_STAR_105454,_STAR_shared_STAR_105455,_STAR_instrument_STAR_105456,_STAR_parent_STAR_105457,this$,this__42885__auto__,x105450_105462))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password"}),"Password"),om.dom.input.call(null,({"name": "password", "className": "form-control", "type": "password", "value": password, "onChange": ((function (map__105458,map__105458__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_105453,_STAR_depth_STAR_105454,_STAR_shared_STAR_105455,_STAR_instrument_STAR_105456,_STAR_parent_STAR_105457,this$,this__42885__auto__,x105450_105462){
return (function (p1__105445_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword(null,"event","event",301435442),p1__105445_SHARP_);
});})(map__105458,map__105458__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_105453,_STAR_depth_STAR_105454,_STAR_shared_STAR_105455,_STAR_instrument_STAR_105456,_STAR_parent_STAR_105457,this$,this__42885__auto__,x105450_105462))
}))),om.dom.button.call(null,({"onClick": ((function (map__105458,map__105458__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_105453,_STAR_depth_STAR_105454,_STAR_shared_STAR_105455,_STAR_instrument_STAR_105456,_STAR_parent_STAR_105457,this$,this__42885__auto__,x105450_105462){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","attempt-login","login/attempt-login",-759830516,null)),(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400)),(function (){var x__35489__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"u","u",-1156634785)),(function (){var x__35489__auto__ = username;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"p","p",151049309)),(function (){var x__35489__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null)),(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action","action",-811238024)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","server-down","login/server-down",-1003159195,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"query","query",-1288509510)),(function (){var x__35489__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"current-user","current-user",-868792091))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"current-user","current-user",-868792091)))))));
});})(map__105458,map__105458__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_105453,_STAR_depth_STAR_105454,_STAR_shared_STAR_105455,_STAR_instrument_STAR_105456,_STAR_parent_STAR_105457,this$,this__42885__auto__,x105450_105462))
}),"Login"))),om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,({"className": "col-xs-4"}),"Don't have a login yet? ",om.dom.a.call(null,({"onClick": ((function (map__105458,map__105458__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_105453,_STAR_depth_STAR_105454,_STAR_shared_STAR_105455,_STAR_instrument_STAR_105456,_STAR_parent_STAR_105457,this$,this__42885__auto__,x105450_105462){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","new-user","nav/new-user",-1079153480,null)),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)], null));
});})(map__105458,map__105458__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_105453,_STAR_depth_STAR_105454,_STAR_shared_STAR_105455,_STAR_instrument_STAR_105456,_STAR_parent_STAR_105457,this$,this__42885__auto__,x105450_105462))
}),"Sign up!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_105457;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_105456;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_105455;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_105454;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_105453;
}});})(x105450_105462))
;


ebtanas.ui.login.LoginPage.prototype.constructor = ebtanas.ui.login.LoginPage;

ebtanas.ui.login.LoginPage.prototype.constructor.displayName = "ebtanas.ui.login/LoginPage";

ebtanas.ui.login.LoginPage.prototype.om$isComponent = true;

var x105460_105466 = ebtanas.ui.login.LoginPage;
/** @nocollapse */
x105460_105466.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x105460_105466.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x105460_105466){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","server-down","ui/server-down",1750506561),false,new cljs.core.Keyword("ui","error","ui/error",-978964660),null], null);
});})(x105460_105466))
;

/** @nocollapse */
x105460_105466.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x105460_105466.om$next$IQuery$query$arity$1 = ((function (x105460_105466){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-down","server-down",1750502325),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x105460_105466))
;

/** @nocollapse */
x105460_105466.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x105460_105466.om_css$core$CSS$css$arity$1 = ((function (x105460_105466){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.login.LoginPage,new cljs.core.Keyword(null,"form","form",-1624062471))], null)], null);
});})(x105460_105466))
;

/** @nocollapse */
x105460_105466.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x105460_105466.om$next$Ident$ident$arity$2 = ((function (x105460_105466){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x105460_105466))
;


var x105461_105467 = ebtanas.ui.login.LoginPage.prototype;

x105461_105467.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x105461_105467.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x105461_105467){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","server-down","ui/server-down",1750506561),false,new cljs.core.Keyword("ui","error","ui/error",-978964660),null], null);
});})(x105461_105467))
;


x105461_105467.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x105461_105467.om$next$IQuery$query$arity$1 = ((function (x105461_105467){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-down","server-down",1750502325),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x105461_105467))
;


x105461_105467.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x105461_105467.om_css$core$CSS$css$arity$1 = ((function (x105461_105467){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.login.LoginPage,new cljs.core.Keyword(null,"form","form",-1624062471))], null)], null);
});})(x105461_105467))
;


x105461_105467.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x105461_105467.om$next$Ident$ident$arity$2 = ((function (x105461_105467){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x105461_105467))
;


ebtanas.ui.login.LoginPage.cljs$lang$type = true;

ebtanas.ui.login.LoginPage.cljs$lang$ctorStr = "ebtanas.ui.login/LoginPage";

ebtanas.ui.login.LoginPage.cljs$lang$ctorPrWriter = (function (this__43044__auto__,writer__43045__auto__,opt__43046__auto__){
return cljs.core._write.call(null,writer__43045__auto__,"ebtanas.ui.login/LoginPage");
});
ebtanas.ui.login.ui_login = om.next.factory.call(null,ebtanas.ui.login.LoginPage);

//# sourceMappingURL=login.js.map?rel=1491640859290