// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.ui.login');
goog.require('cljs.core');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('om.dom');
goog.require('om_css.core');
goog.require('untangled.client.mutations');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","attempt-login","login/attempt-login",-759830516,null),(function (p__226348,k,p__226349){
var map__226350 = p__226348;
var map__226350__$1 = ((((!((map__226350 == null)))?((((map__226350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226350):map__226350);
var state = cljs.core.get.call(null,map__226350__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__226351 = p__226349;
var map__226351__$1 = ((((!((map__226351 == null)))?((((map__226351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226351):map__226351);
var uid = cljs.core.get.call(null,map__226351__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__226350,map__226350__$1,state,map__226351,map__226351__$1,uid){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),uid,new cljs.core.Keyword(null,"name","name",1843675177),"???"], null),new cljs.core.Keyword(null,"server-down","server-down",1750502325),false);
});})(map__226350,map__226350__$1,state,map__226351,map__226351__$1,uid))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","server-down","login/server-down",-1003159195,null),(function (p__226354,k,p){
var map__226355 = p__226354;
var map__226355__$1 = ((((!((map__226355 == null)))?((((map__226355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226355):map__226355);
var state = cljs.core.get.call(null,map__226355__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__226355,map__226355__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"server-down","server-down",1750502325),true);
});})(map__226355,map__226355__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null),(function (p__226357,k,p){
var map__226358 = p__226357;
var map__226358__$1 = ((((!((map__226358 == null)))?((((map__226358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226358):map__226358);
var state = cljs.core.get.call(null,map__226358__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__226358,map__226358__$1,state){
return (function (){
var map__226360 = cljs.core.deref.call(null,state);
var map__226360__$1 = ((((!((map__226360 == null)))?((((map__226360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226360):map__226360);
var logged_in_QMARK_ = cljs.core.get.call(null,map__226360__$1,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089));
var current_user = cljs.core.get.call(null,map__226360__$1,new cljs.core.Keyword(null,"current-user","current-user",-868792091));
if(cljs.core.truth_(logged_in_QMARK_)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"page","page",849072397)], null));
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null));
}
});})(map__226358,map__226358__$1,state))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("login","logout","login/logout",-1136924503,null),(function (p__226362,k,p){
var map__226363 = p__226362;
var map__226363__$1 = ((((!((map__226363 == null)))?((((map__226363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226363):map__226363);
var state = cljs.core.get.call(null,map__226363__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__226363,map__226363__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null));
});})(map__226363,map__226363__$1,state))
], null);
}));
if(typeof ebtanas.ui.login.LoginPage !== 'undefined'){
} else {
/**
 * @constructor
 */
ebtanas.ui.login.LoginPage = (function ebtanas$ui$login$LoginPage(){
var this__41314__auto__ = this;
React.Component.apply(this__41314__auto__,arguments);

if(!((this__41314__auto__.initLocalState == null))){
this__41314__auto__.state = this__41314__auto__.initLocalState();
} else {
this__41314__auto__.state = {};
}

return this__41314__auto__;
});

ebtanas.ui.login.LoginPage.prototype = goog.object.clone(React.Component.prototype);
}

var x226371_226383 = ebtanas.ui.login.LoginPage.prototype;
x226371_226383.componentWillUpdate = ((function (x226371_226383){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
if(((!((this__41159__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__41159__auto__.om$next$Ident$)))?true:false):false)){
var ident__41163__auto___226384 = om.next.ident.call(null,this__41159__auto__,om.next.props.call(null,this__41159__auto__));
var next_ident__41164__auto___226385 = om.next.ident.call(null,this__41159__auto__,om.next._next_props.call(null,next_props__41160__auto__,this__41159__auto__));
if(cljs.core.not_EQ_.call(null,ident__41163__auto___226384,next_ident__41164__auto___226385)){
var idxr__41165__auto___226386 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__41165__auto___226386 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__41165__auto___226386),((function (idxr__41165__auto___226386,ident__41163__auto___226384,next_ident__41164__auto___226385,this__41159__auto__,x226371_226383){
return (function (indexes__41166__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__41166__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__41163__auto___226384], null),cljs.core.disj,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__41164__auto___226385], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__41159__auto__);
});})(idxr__41165__auto___226386,ident__41163__auto___226384,next_ident__41164__auto___226385,this__41159__auto__,x226371_226383))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__41159__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__41159__auto__);
});})(x226371_226383))
;

x226371_226383.shouldComponentUpdate = ((function (x226371_226383){
return (function (next_props__41160__auto__,next_state__41161__auto__){
var this__41159__auto__ = this;
var next_children__41162__auto__ = next_props__41160__auto__.children;
var next_props__41160__auto____$1 = goog.object.get(next_props__41160__auto__,"omcljs$value");
var next_props__41160__auto____$2 = (function (){var G__226373 = next_props__41160__auto____$1;
if((next_props__41160__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__226373);
} else {
return G__226373;
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
});})(x226371_226383))
;

x226371_226383.componentWillUnmount = ((function (x226371_226383){
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
});})(x226371_226383))
;

x226371_226383.componentDidUpdate = ((function (x226371_226383){
return (function (prev_props__41167__auto__,prev_state__41168__auto__){
var this__41159__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__41159__auto__);
});})(x226371_226383))
;

x226371_226383.isMounted = ((function (x226371_226383){
return (function (){
var this__41159__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__41159__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x226371_226383))
;

x226371_226383.componentWillMount = ((function (x226371_226383){
return (function (){
var this__41159__auto__ = this;
var indexer__41169__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__41159__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__41169__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__41169__auto__,this__41159__auto__);
}
});})(x226371_226383))
;

x226371_226383.render = ((function (x226371_226383){
return (function (){
var this__41158__auto__ = this;
var this$ = this__41158__auto__;
var _STAR_reconciler_STAR_226374 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_226375 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_226376 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_226377 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_226378 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__41158__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__41158__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__41158__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__41158__auto__);

om.next._STAR_parent_STAR_ = this__41158__auto__;

try{var map__226379 = om.next.props.call(null,this$);
var map__226379__$1 = ((((!((map__226379 == null)))?((((map__226379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226379):map__226379);
var username = cljs.core.get.call(null,map__226379__$1,new cljs.core.Keyword("ui","username","ui/username",1605670678));
var password = cljs.core.get.call(null,map__226379__$1,new cljs.core.Keyword("ui","password","ui/password",417022099));
var server_down = cljs.core.get.call(null,map__226379__$1,new cljs.core.Keyword(null,"server-down","server-down",1750502325));
var loading_data = cljs.core.get.call(null,map__226379__$1,new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143));
return om.dom.div.call(null,null,om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.local_class.call(null,ebtanas.ui.login.LoginPage,"form")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("col-xs-4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('')], null)),(cljs.core.truth_(server_down)?om.dom.div.call(null,null,"Unable to contact server. Try again later."):null),(cljs.core.truth_(loading_data)?om.dom.div.call(null,null,"Working..."):null),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "username"}),"Username"),om.dom.input.call(null,({"className": "form-control", "name": "username", "value": username, "onChange": ((function (map__226379,map__226379__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_226374,_STAR_depth_STAR_226375,_STAR_shared_STAR_226376,_STAR_instrument_STAR_226377,_STAR_parent_STAR_226378,this$,this__41158__auto__,x226371_226383){
return (function (p1__226365_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword(null,"event","event",301435442),p1__226365_SHARP_);
});})(map__226379,map__226379__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_226374,_STAR_depth_STAR_226375,_STAR_shared_STAR_226376,_STAR_instrument_STAR_226377,_STAR_parent_STAR_226378,this$,this__41158__auto__,x226371_226383))
}))),om.dom.div.call(null,({"className": "form-group"}),om.dom.label.call(null,({"htmlFor": "password"}),"Password"),om.dom.input.call(null,({"name": "password", "className": "form-control", "type": "password", "value": password, "onChange": ((function (map__226379,map__226379__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_226374,_STAR_depth_STAR_226375,_STAR_shared_STAR_226376,_STAR_instrument_STAR_226377,_STAR_parent_STAR_226378,this$,this__41158__auto__,x226371_226383){
return (function (p1__226366_SHARP_){
return untangled.client.mutations.set_string_BANG_.call(null,this$,new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.Keyword(null,"event","event",301435442),p1__226366_SHARP_);
});})(map__226379,map__226379__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_226374,_STAR_depth_STAR_226375,_STAR_shared_STAR_226376,_STAR_instrument_STAR_226377,_STAR_parent_STAR_226378,this$,this__41158__auto__,x226371_226383))
}))),om.dom.button.call(null,({"onClick": ((function (map__226379,map__226379__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_226374,_STAR_depth_STAR_226375,_STAR_shared_STAR_226376,_STAR_instrument_STAR_226377,_STAR_parent_STAR_226378,this$,this__41158__auto__,x226371_226383){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__40140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","attempt-login","login/attempt-login",-759830516,null)),(function (){var x__40140__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"uid","uid",-1447769400)),(function (){var x__40140__auto__ = om.next.tempid.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"u","u",-1156634785)),(function (){var x__40140__auto__ = username;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"p","p",151049309)),(function (){var x__40140__auto__ = password;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),(function (){var x__40140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null)),(function (){var x__40140__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"action","action",-811238024)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","server-down","login/server-down",-1003159195,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),(function (){var x__40140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null)),(function (){var x__40140__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"query","query",-1288509510)),(function (){var x__40140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"current-user","current-user",-868792091))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"current-user","current-user",-868792091)))))));
});})(map__226379,map__226379__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_226374,_STAR_depth_STAR_226375,_STAR_shared_STAR_226376,_STAR_instrument_STAR_226377,_STAR_parent_STAR_226378,this$,this__41158__auto__,x226371_226383))
}),"Login"))),om.dom.div.call(null,({"className": "row"}),om.dom.div.call(null,({"className": "col-xs-4"}),""),om.dom.div.call(null,({"className": "col-xs-4"}),"Don't have a login yet? ",om.dom.a.call(null,({"onClick": ((function (map__226379,map__226379__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_226374,_STAR_depth_STAR_226375,_STAR_shared_STAR_226376,_STAR_instrument_STAR_226377,_STAR_parent_STAR_226378,this$,this__41158__auto__,x226371_226383){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("nav","new-user","nav/new-user",-1079153480,null)),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664)], null));
});})(map__226379,map__226379__$1,username,password,server_down,loading_data,_STAR_reconciler_STAR_226374,_STAR_depth_STAR_226375,_STAR_shared_STAR_226376,_STAR_instrument_STAR_226377,_STAR_parent_STAR_226378,this$,this__41158__auto__,x226371_226383))
}),"Sign up!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_226378;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_226377;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_226376;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_226375;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_226374;
}});})(x226371_226383))
;


ebtanas.ui.login.LoginPage.prototype.constructor = ebtanas.ui.login.LoginPage;

ebtanas.ui.login.LoginPage.prototype.constructor.displayName = "ebtanas.ui.login/LoginPage";

ebtanas.ui.login.LoginPage.prototype.om$isComponent = true;

var x226381_226387 = ebtanas.ui.login.LoginPage;
/** @nocollapse */
x226381_226387.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x226381_226387.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x226381_226387){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","server-down","ui/server-down",1750506561),false,new cljs.core.Keyword("ui","error","ui/error",-978964660),null], null);
});})(x226381_226387))
;

/** @nocollapse */
x226381_226387.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x226381_226387.om$next$IQuery$query$arity$1 = ((function (x226381_226387){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-down","server-down",1750502325),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x226381_226387))
;

/** @nocollapse */
x226381_226387.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x226381_226387.om_css$core$CSS$css$arity$1 = ((function (x226381_226387){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.login.LoginPage,new cljs.core.Keyword(null,"form","form",-1624062471))], null)], null);
});})(x226381_226387))
;

/** @nocollapse */
x226381_226387.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x226381_226387.om$next$Ident$ident$arity$2 = ((function (x226381_226387){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x226381_226387))
;


var x226382_226388 = ebtanas.ui.login.LoginPage.prototype;

x226382_226388.untangled$client$core$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;


x226382_226388.untangled$client$core$InitialAppState$initial_state$arity$2 = ((function (x226382_226388){
return (function (this$,params){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword("ui","username","ui/username",1605670678),"",new cljs.core.Keyword("ui","password","ui/password",417022099),"",new cljs.core.Keyword("ui","server-down","ui/server-down",1750506561),false,new cljs.core.Keyword("ui","error","ui/error",-978964660),null], null);
});})(x226382_226388))
;


x226382_226388.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x226382_226388.om$next$IQuery$query$arity$1 = ((function (x226382_226388){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("ui","username","ui/username",1605670678),new cljs.core.Keyword("ui","password","ui/password",417022099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server-down","server-down",1750502325),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
});})(x226382_226388))
;


x226382_226388.om_css$core$CSS$ = cljs.core.PROTOCOL_SENTINEL;


x226382_226388.om_css$core$CSS$css$arity$1 = ((function (x226382_226388){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_css.core.local_kw.call(null,ebtanas.ui.login.LoginPage,new cljs.core.Keyword(null,"form","form",-1624062471))], null)], null);
});})(x226382_226388))
;


x226382_226388.om$next$Ident$ = cljs.core.PROTOCOL_SENTINEL;


x226382_226388.om$next$Ident$ident$arity$2 = ((function (x226382_226388){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"page","page",849072397)], null);
});})(x226382_226388))
;


ebtanas.ui.login.LoginPage.cljs$lang$type = true;

ebtanas.ui.login.LoginPage.cljs$lang$ctorStr = "ebtanas.ui.login/LoginPage";

ebtanas.ui.login.LoginPage.cljs$lang$ctorPrWriter = (function (this__41317__auto__,writer__41318__auto__,opt__41319__auto__){
return cljs.core._write.call(null,writer__41318__auto__,"ebtanas.ui.login/LoginPage");
});
ebtanas.ui.login.ui_login = om.next.factory.call(null,ebtanas.ui.login.LoginPage);

//# sourceMappingURL=login.js.map?rel=1491715146550