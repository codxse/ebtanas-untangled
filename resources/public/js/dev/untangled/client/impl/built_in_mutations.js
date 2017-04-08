// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__104366,_,p__104367){
var map__104368 = p__104366;
var map__104368__$1 = ((((!((map__104368 == null)))?((((map__104368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104368):map__104368);
var state = cljs.core.get.call(null,map__104368__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__104369 = p__104367;
var map__104369__$1 = ((((!((map__104369 == null)))?((((map__104369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104369):map__104369);
var config = map__104369__$1;
var post_mutation = cljs.core.get.call(null,map__104369__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var remote = cljs.core.get.call(null,map__104369__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
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

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:new cljs.core.Keyword(null,"remote","remote",-1593576576)),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__104368,map__104368__$1,state,map__104369,map__104369__$1,config,post_mutation,remote){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__104368,map__104368__$1,state,map__104369,map__104369__$1,config,post_mutation,remote))
]);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__104373,_,p__104374){
var map__104375 = p__104373;
var map__104375__$1 = ((((!((map__104375 == null)))?((((map__104375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104375):map__104375);
var state = cljs.core.get.call(null,map__104375__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__104376 = p__104374;
var map__104376__$1 = ((((!((map__104376 == null)))?((((map__104376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104376):map__104376);
var lang = cljs.core.get.call(null,map__104376__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__104375,map__104375__$1,state,map__104376,map__104376__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__104375,map__104375__$1,state,map__104376,map__104376__$1,lang){
return (function (p1__104372_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__104372_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__104375,map__104375__$1,state,map__104376,map__104376__$1,lang))
);
});})(map__104375,map__104375__$1,state,map__104376,map__104376__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__104379){
var map__104380 = p__104379;
var map__104380__$1 = ((((!((map__104380 == null)))?((((map__104380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104380):map__104380);
var params = map__104380__$1;
var action = cljs.core.get.call(null,map__104380__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__104380__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__104380,map__104380__$1,params,action,execute){
return (function (){
var G__104382 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__104382__$1 = (((G__104382 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__104382));
if((G__104382__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__104382__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__104380,map__104380__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__104383,_,params){
var map__104384 = p__104383;
var map__104384__$1 = ((((!((map__104384 == null)))?((((map__104384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104384):map__104384);
var state = cljs.core.get.call(null,map__104384__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__104384__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__104384,map__104384__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__104384,map__104384__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__104384,map__104384__$1,state,ref))
);
});})(map__104384,map__104384__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__104386,_,p__104387){
var map__104388 = p__104386;
var map__104388__$1 = ((((!((map__104388 == null)))?((((map__104388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104388):map__104388);
var state = cljs.core.get.call(null,map__104388__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__104388__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__104389 = p__104387;
var map__104389__$1 = ((((!((map__104389 == null)))?((((map__104389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104389):map__104389);
var field = cljs.core.get.call(null,map__104389__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__104388,map__104388__$1,state,ref,map__104389,map__104389__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__104388,map__104388__$1,state,ref,map__104389,map__104389__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__104392,k,_){
var map__104393 = p__104392;
var map__104393__$1 = ((((!((map__104393 == null)))?((((map__104393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104393):map__104393);
var target = cljs.core.get.call(null,map__104393__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1491640853358