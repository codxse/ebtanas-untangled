// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__205144,_,p__205145){
var map__205146 = p__205144;
var map__205146__$1 = ((((!((map__205146 == null)))?((((map__205146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205146):map__205146);
var state = cljs.core.get.call(null,map__205146__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__205147 = p__205145;
var map__205147__$1 = ((((!((map__205147 == null)))?((((map__205147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205147):map__205147);
var config = map__205147__$1;
var post_mutation = cljs.core.get.call(null,map__205147__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
if(cljs.core.truth_((function (){var and__39194__auto__ = post_mutation;
if(cljs.core.truth_(and__39194__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__39194__auto__;
}
})())){
untangled.client.logging.error.call(null,"post-mutation must be a symbol or nil");
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__205146,map__205146__$1,state,map__205147,map__205147__$1,config,post_mutation){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__205146,map__205146__$1,state,map__205147,map__205147__$1,config,post_mutation))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__205151,_,p__205152){
var map__205153 = p__205151;
var map__205153__$1 = ((((!((map__205153 == null)))?((((map__205153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205153):map__205153);
var state = cljs.core.get.call(null,map__205153__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__205154 = p__205152;
var map__205154__$1 = ((((!((map__205154 == null)))?((((map__205154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205154):map__205154);
var lang = cljs.core.get.call(null,map__205154__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__205153,map__205153__$1,state,map__205154,map__205154__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__205153,map__205153__$1,state,map__205154,map__205154__$1,lang){
return (function (p1__205150_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__205150_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__205153,map__205153__$1,state,map__205154,map__205154__$1,lang))
);
});})(map__205153,map__205153__$1,state,map__205154,map__205154__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__205157){
var map__205158 = p__205157;
var map__205158__$1 = ((((!((map__205158 == null)))?((((map__205158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205158):map__205158);
var params = map__205158__$1;
var action = cljs.core.get.call(null,map__205158__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__205158__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__205158,map__205158__$1,params,action,execute){
return (function (){
var G__205160 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__205160__$1 = (((G__205160 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__205160));
if((G__205160__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__205160__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__205158,map__205158__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__205161,_,params){
var map__205162 = p__205161;
var map__205162__$1 = ((((!((map__205162 == null)))?((((map__205162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205162):map__205162);
var state = cljs.core.get.call(null,map__205162__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__205162__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__205162,map__205162__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__205162,map__205162__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__205162,map__205162__$1,state,ref))
);
});})(map__205162,map__205162__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__205164,_,p__205165){
var map__205166 = p__205164;
var map__205166__$1 = ((((!((map__205166 == null)))?((((map__205166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205166):map__205166);
var state = cljs.core.get.call(null,map__205166__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__205166__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__205167 = p__205165;
var map__205167__$1 = ((((!((map__205167 == null)))?((((map__205167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205167):map__205167);
var field = cljs.core.get.call(null,map__205167__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__205166,map__205166__$1,state,ref,map__205167,map__205167__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__205166,map__205166__$1,state,ref,map__205167,map__205167__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__205170,k,_){
var map__205171 = p__205170;
var map__205171__$1 = ((((!((map__205171 == null)))?((((map__205171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__205171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205171):map__205171);
var target = cljs.core.get.call(null,map__205171__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1491715104134