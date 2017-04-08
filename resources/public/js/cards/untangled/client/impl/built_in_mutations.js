// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__83337,_,p__83338){
var map__83339 = p__83337;
var map__83339__$1 = ((((!((map__83339 == null)))?((((map__83339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83339):map__83339);
var state = cljs.core.get.call(null,map__83339__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83340 = p__83338;
var map__83340__$1 = ((((!((map__83340 == null)))?((((map__83340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83340):map__83340);
var config = map__83340__$1;
var post_mutation = cljs.core.get.call(null,map__83340__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var remote = cljs.core.get.call(null,map__83340__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
if(cljs.core.truth_((function (){var and__34543__auto__ = post_mutation;
if(cljs.core.truth_(and__34543__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__34543__auto__;
}
})())){
untangled.client.logging.error.call(null,"post-mutation must be a symbol or nil");
} else {
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:new cljs.core.Keyword(null,"remote","remote",-1593576576)),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83339,map__83339__$1,state,map__83340,map__83340__$1,config,post_mutation,remote){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__83339,map__83339__$1,state,map__83340,map__83340__$1,config,post_mutation,remote))
]);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__83344,_,p__83345){
var map__83346 = p__83344;
var map__83346__$1 = ((((!((map__83346 == null)))?((((map__83346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83346):map__83346);
var state = cljs.core.get.call(null,map__83346__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83347 = p__83345;
var map__83347__$1 = ((((!((map__83347 == null)))?((((map__83347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83347):map__83347);
var lang = cljs.core.get.call(null,map__83347__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83346,map__83346__$1,state,map__83347,map__83347__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__83346,map__83346__$1,state,map__83347,map__83347__$1,lang){
return (function (p1__83343_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__83343_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__83346,map__83346__$1,state,map__83347,map__83347__$1,lang))
);
});})(map__83346,map__83346__$1,state,map__83347,map__83347__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__83350){
var map__83351 = p__83350;
var map__83351__$1 = ((((!((map__83351 == null)))?((((map__83351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83351):map__83351);
var params = map__83351__$1;
var action = cljs.core.get.call(null,map__83351__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__83351__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83351,map__83351__$1,params,action,execute){
return (function (){
var G__83353 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__83353__$1 = (((G__83353 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__83353));
if((G__83353__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__83353__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__83351,map__83351__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__83354,_,params){
var map__83355 = p__83354;
var map__83355__$1 = ((((!((map__83355 == null)))?((((map__83355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83355):map__83355);
var state = cljs.core.get.call(null,map__83355__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__83355__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83355,map__83355__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__83355,map__83355__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__83355,map__83355__$1,state,ref))
);
});})(map__83355,map__83355__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__83357,_,p__83358){
var map__83359 = p__83357;
var map__83359__$1 = ((((!((map__83359 == null)))?((((map__83359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83359):map__83359);
var state = cljs.core.get.call(null,map__83359__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__83359__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__83360 = p__83358;
var map__83360__$1 = ((((!((map__83360 == null)))?((((map__83360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83360):map__83360);
var field = cljs.core.get.call(null,map__83360__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83359,map__83359__$1,state,ref,map__83360,map__83360__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__83359,map__83359__$1,state,ref,map__83360,map__83360__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__83363,k,_){
var map__83364 = p__83363;
var map__83364__$1 = ((((!((map__83364 == null)))?((((map__83364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83364):map__83364);
var target = cljs.core.get.call(null,map__83364__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1491640817868