// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.login');
goog.require('cljs.core');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('om.dom');
goog.require('om_css.core');
goog.require('untangled.client.mutations');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","attempt-login","login/attempt-login",-759830516,null),(function (p__50004,k,p__50005){
var map__50006 = p__50004;
var map__50006__$1 = ((((!((map__50006 == null)))?((((map__50006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50006):map__50006);
var state = cljs.core.get.call(null,map__50006__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__50007 = p__50005;
var map__50007__$1 = ((((!((map__50007 == null)))?((((map__50007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50007):map__50007);
var uid = cljs.core.get.call(null,map__50007__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__50006,map__50006__$1,state,map__50007,map__50007__$1,uid){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),uid,new cljs.core.Keyword(null,"name","name",1843675177),"???"], null),new cljs.core.Keyword(null,"server-down","server-down",1750502325),false);
});})(map__50006,map__50006__$1,state,map__50007,map__50007__$1,uid))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","server-down","login/server-down",-1003159195,null),(function (p__50010,k,p){
var map__50011 = p__50010;
var map__50011__$1 = ((((!((map__50011 == null)))?((((map__50011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50011):map__50011);
var state = cljs.core.get.call(null,map__50011__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__50011,map__50011__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"server-down","server-down",1750502325),true);
});})(map__50011,map__50011__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null),(function (p__50013,k,p){
var map__50014 = p__50013;
var map__50014__$1 = ((((!((map__50014 == null)))?((((map__50014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50014):map__50014);
var state = cljs.core.get.call(null,map__50014__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__50014,map__50014__$1,state){
return (function (){
var map__50016 = cljs.core.deref.call(null,state);
var map__50016__$1 = ((((!((map__50016 == null)))?((((map__50016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50016):map__50016);
var logged_in_QMARK_ = cljs.core.get.call(null,map__50016__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
var current_user = cljs.core.get.call(null,map__50016__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
if(cljs.core.truth_(logged_in_QMARK_)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null));
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null));
}
});})(map__50014,map__50014__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","logout","login/logout",-1136924503,null),(function (p__50018,k,p){
var map__50019 = p__50018;
var map__50019__$1 = ((((!((map__50019 == null)))?((((map__50019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50019):map__50019);
var state = cljs.core.get.call(null,map__50019__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__50019,map__50019__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null));
});})(map__50019,map__50019__$1,state))
], null);
}));
if(typeof ebtanas.ui.login.LoginPage !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.login.LoginPage = (function ebtanas$ui$login$LoginPage(){
var this__41426__auto__ = this;
React.Component.apply(this__41426__auto__,arguments);

if(!((this__41426__auto__.initLocalState == null))){
this__41426__auto__.state = this__41426__auto__.initLocalState();
} else {
this__41426__auto__.state = {};
}

return this__41426__auto__;
});

ebtanas.ui.login.LoginPage.prototype = goog.object.clone(React.Component.prototype);
}

var x50027_50039 = ebtanas.ui.login.LoginPage.prototype;
x50027_50039.componentWillUpdate = ((function (x50027_50039){
return (function (next_props__41272__auto__,next_state__41273__auto__){
var this__41271__auto__ = this;
if(((!((this__41271__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41271__auto__.om$next$Ident$)))?true:false):false)){
var ident__41275__auto___50040 = om.next.ident.call(null,this__41271__auto__,om.next.props.call(null,this__41271__auto__));
var next_ident__41276__auto___50041 = om.next.ident.call(null,this__41271__auto__,om.next._next_props.call(null,next_props__41272__auto__,this__41271__auto__));
if(cljs.core.not_EQ_.call(null,ident__41275__auto___50040,next_ident__41276__auto___50041)){
var idxr__41277__auto___50042 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41277__auto___50042 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41277__auto___50042),((function (idxr__41277__auto___50042,ident__41275__auto___50040,next_ident__41276__auto___50041,this__41271__auto__,x50027_50039){
return (function (indexes__41278__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41278__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41275__auto___50040], null),cljs.core.disj,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41276__auto___50041], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41271__auto__);
});})(idxr__41277__auto___50042,ident__41275__auto___50040,next_ident__41276__auto___50041,this__41271__auto__,x50027_50039))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41271__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41271__auto__);
});})(x50027_50039))
;

x50027_50039.shouldComponentUpdate = ((function (x50027_50039){
return (function (next_props__41272__auto__,next_state__41273__auto__){
var this__41271__auto__ = this;
var next_children__41274__auto__ = next_props__41272__auto__.children;
var next_props__41272__auto____$1 = goog.object.get(next_props__41272__auto__,"omcljs$value");
var next_props__41272__auto____$2 = (function (){var G__50029 = next_props__41272__auto____$1;
if((next_props__41272__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__50029);
} else {
return G__50029;
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
});})(x50027_50039))
;

x50027_50039.componentWillUnmount = ((function (x50027_50039){
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
});})(x50027_50039))
;

x50027_50039.componentDidUpdate = ((function (x50027_50039){
return (function (prev_props__41279__auto__,prev_state__41280__auto__){
var this__41271__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41271__auto__);
});})(x50027_50039))
;

x50027_50039.isMounted = ((function (x50027_50039){
return (function (){
var this__41271__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41271__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x50027_50039))
;

x50027_50039.componentWillMount = ((function (x50027_50039){
return (function (){
var this__41271__auto__ = this;
var indexer__41281__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41271__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41281__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41281__auto__,this__41271__auto__);
}
});})(x50027_50039))
;

x50027_50039.render = ((function (x50027_50039){
return (function (){
var this__41270__auto__ = this;
var this$ = this__41270__auto__;
var _STAR_reconciler_STAR_50030 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_50031 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_50032 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_50033 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_50034 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41270__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41270__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41270__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41270__auto__);

om.next._STAR_parent_STAR_ = this__41270__auto__;

try{var map__50035 = om.next.props.call(null,this$);
var map__50035__$1 = ((((!((map__50035 == null)))?((((map__50035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50035):map__50035);
var username = cljs.core.get.call(null,map__50035__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.call(null,map__50035__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
var server_down = cljs.core.get.call(null,map__50035__$1,new cljs.core.Keyword(null,"server-down","server-down",1750502325));
var loading_data = cljs.core.get.call(null,map__50035__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
return om.dom.div.call(null,null,om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.local_class.call(null,ebtanas.ui.login.LoginPage,"form")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-xs-4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('')], null)),(cljs.core.truth_(server_down)?om.dom.div.call(null,null,"Unable to contact server. Try again later."):null),(cljs.core.truth_(loading_data)?om.dom.div.call(null,null,"Working..."):null),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "username"}),"Username"),om.dom.input.call(null,({"className": "form-control", "name": "username", "value": username, "onChange": ((function (map__50035,map__50035__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_50030,_STAR_depth_STAR_50031,_STAR_shared_STAR_50032,_STAR_instrument_STAR_50033,_STAR_parent_STAR_50034,this$,this__41270__auto__,x50027_50039){
return (function (p1__50021_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword(null,"event","event",301435442),p1__50021_SHARP_);
});})(map__50035,map__50035__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_50030,_STAR_depth_STAR_50031,_STAR_shared_STAR_50032,_STAR_instrument_STAR_50033,_STAR_parent_STAR_50034,this$,this__41270__auto__,x50027_50039))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password"}),"Password"),om.dom.input.call(null,({"name": "password", "className": "form-control", "type": "password", "value": password, "onChange": ((function (map__50035,map__50035__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_50030,_STAR_depth_STAR_50031,_STAR_shared_STAR_50032,_STAR_instrument_STAR_50033,_STAR_parent_STAR_50034,this$,this__41270__auto__,x50027_50039){
return (function (p1__50022_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword(null,"event","event",301435442),p1__50022_SHARP_);
});})(map__50035,map__50035__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_50030,_STAR_depth_STAR_50031,_STAR_shared_STAR_50032,_STAR_instrument_STAR_50033,_STAR_parent_STAR_50034,this$,this__41270__auto__,x50027_50039))
}))),om.dom.button.call(null,({"onClick": ((function (map__50035,map__50035__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_50030,_STAR_depth_STAR_50031,_STAR_shared_STAR_50032,_STAR_instrument_STAR_50033,_STAR_parent_STAR_50034,this$,this__41270__auto__,x50027_50039){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__40156__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","attempt-login","login/attempt-login",-759830516,null)),(function (){var x__40156__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400)),(function (){var x__40156__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"u","u",-1156634785)),(function (){var x__40156__auto__ = username;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"p","p",151049309)),(function (){var x__40156__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})(),(function (){var x__40156__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null)),(function (){var x__40156__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action","action",-811238024)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","server-down","login/server-down",-1003159195,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})(),(function (){var x__40156__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),(function (){var x__40156__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"query","query",-1288509510)),(function (){var x__40156__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"current-user","current-user",-868792091))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"current-user","current-user",-868792091)))))));
});})(map__50035,map__50035__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_50030,_STAR_depth_STAR_50031,_STAR_shared_STAR_50032,_STAR_instrument_STAR_50033,_STAR_parent_STAR_50034,this$,this__41270__auto__,x50027_50039))
}),"Login"))),om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,({"className": "col-xs-4"}),"Don't have a login yet? ",om.dom.a.call(null,({"onClick": ((function (map__50035,map__50035__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_50030,_STAR_depth_STAR_50031,_STAR_shared_STAR_50032,_STAR_instrument_STAR_50033,_STAR_parent_STAR_50034,this$,this__41270__auto__,x50027_50039){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","new-user","nav/new-user",-1079153480,null)),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)], null));
});})(map__50035,map__50035__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_50030,_STAR_depth_STAR_50031,_STAR_shared_STAR_50032,_STAR_instrument_STAR_50033,_STAR_parent_STAR_50034,this$,this__41270__auto__,x50027_50039))
}),"Sign up!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_50034;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_50033;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_50032;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_50031;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_50030;
}});})(x50027_50039))
;


ebtanas.ui.login.LoginPage.prototype.constructor = ebtanas.ui.login.LoginPage;

ebtanas.ui.login.LoginPage.prototype.constructor.displayName = "ebtanas.ui.login/LoginPage";

ebtanas.ui.login.LoginPage.prototype.om$isComponent = true;

var x50037_50043 = ebtanas.ui.login.LoginPage;
/** @nocollapse */
x50037_50043.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50037_50043.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x50037_50043){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","server-down","ui/server-down",1750506561),false,new cljs.core.Keyword("ui","error","ui/error",-978964660),null], null);
});})(x50037_50043))
;

/** @nocollapse */
x50037_50043.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50037_50043.om$next$IQuery$query$arity$1 = ((function (x50037_50043){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-down","server-down",1750502325),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x50037_50043))
;

/** @nocollapse */
x50037_50043.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50037_50043.om_css$core$CSS$css$arity$1 = ((function (x50037_50043){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.login.LoginPage,new cljs.core.Keyword(null,"form","form",-1624062471))], null)], null);
});})(x50037_50043))
;

/** @nocollapse */
x50037_50043.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x50037_50043.om$next$Ident$ident$arity$2 = ((function (x50037_50043){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x50037_50043))
;


var x50038_50044 = ebtanas.ui.login.LoginPage.prototype;

x50038_50044.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x50038_50044.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x50038_50044){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","server-down","ui/server-down",1750506561),false,new cljs.core.Keyword("ui","error","ui/error",-978964660),null], null);
});})(x50038_50044))
;


x50038_50044.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x50038_50044.om$next$IQuery$query$arity$1 = ((function (x50038_50044){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-down","server-down",1750502325),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x50038_50044))
;


x50038_50044.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x50038_50044.om_css$core$CSS$css$arity$1 = ((function (x50038_50044){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.login.LoginPage,new cljs.core.Keyword(null,"form","form",-1624062471))], null)], null);
});})(x50038_50044))
;


x50038_50044.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x50038_50044.om$next$Ident$ident$arity$2 = ((function (x50038_50044){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x50038_50044))
;


ebtanas.ui.login.LoginPage.cljs$lang$type = true;

ebtanas.ui.login.LoginPage.cljs$lang$ctorStr = "ebtanas.ui.login/LoginPage";

ebtanas.ui.login.LoginPage.cljs$lang$ctorPrWriter = (function (this__41429__auto__,writer__41430__auto__,opt__41431__auto__){
return cljs.core._write.call(null,writer__41430__auto__,"ebtanas.ui.login/LoginPage");
});
ebtanas.ui.login.ui_login = om.next.factory.call(null,ebtanas.ui.login.LoginPage);

//# sourceMappingURL=login.js.map?rel=1491695665737