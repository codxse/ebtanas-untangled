// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__52052,_,p__52053){
var map__52054 = p__52052;
var map__52054__$1 = ((((!((map__52054 == null)))?((((map__52054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52054):map__52054);
var state = cljs.core.get.call(null,map__52054__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__52055 = p__52053;
var map__52055__$1 = ((((!((map__52055 == null)))?((((map__52055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52055):map__52055);
var config = map__52055__$1;
var post_mutation = cljs.core.get.call(null,map__52055__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var remote = cljs.core.get.call(null,map__52055__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
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

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:new cljs.core.Keyword(null,"remote","remote",-1593576576)),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52054,map__52054__$1,state,map__52055,map__52055__$1,config,post_mutation,remote){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__52054,map__52054__$1,state,map__52055,map__52055__$1,config,post_mutation,remote))
]);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__52059,_,p__52060){
var map__52061 = p__52059;
var map__52061__$1 = ((((!((map__52061 == null)))?((((map__52061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52061):map__52061);
var state = cljs.core.get.call(null,map__52061__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__52062 = p__52060;
var map__52062__$1 = ((((!((map__52062 == null)))?((((map__52062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52062):map__52062);
var lang = cljs.core.get.call(null,map__52062__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52061,map__52061__$1,state,map__52062,map__52062__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__52061,map__52061__$1,state,map__52062,map__52062__$1,lang){
return (function (p1__52058_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__52058_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__52061,map__52061__$1,state,map__52062,map__52062__$1,lang))
);
});})(map__52061,map__52061__$1,state,map__52062,map__52062__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__52065){
var map__52066 = p__52065;
var map__52066__$1 = ((((!((map__52066 == null)))?((((map__52066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52066):map__52066);
var params = map__52066__$1;
var action = cljs.core.get.call(null,map__52066__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__52066__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52066,map__52066__$1,params,action,execute){
return (function (){
var G__52068 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__52068__$1 = (((G__52068 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__52068));
if((G__52068__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__52068__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__52066,map__52066__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__52069,_,params){
var map__52070 = p__52069;
var map__52070__$1 = ((((!((map__52070 == null)))?((((map__52070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52070):map__52070);
var state = cljs.core.get.call(null,map__52070__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__52070__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52070,map__52070__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__52070,map__52070__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__52070,map__52070__$1,state,ref))
);
});})(map__52070,map__52070__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__52072,_,p__52073){
var map__52074 = p__52072;
var map__52074__$1 = ((((!((map__52074 == null)))?((((map__52074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52074):map__52074);
var state = cljs.core.get.call(null,map__52074__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__52074__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__52075 = p__52073;
var map__52075__$1 = ((((!((map__52075 == null)))?((((map__52075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52075):map__52075);
var field = cljs.core.get.call(null,map__52075__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__52074,map__52074__$1,state,ref,map__52075,map__52075__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__52074,map__52074__$1,state,ref,map__52075,map__52075__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__52078,k,_){
var map__52079 = p__52078;
var map__52079__$1 = ((((!((map__52079 == null)))?((((map__52079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52079):map__52079);
var target = cljs.core.get.call(null,map__52079__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1491640765405