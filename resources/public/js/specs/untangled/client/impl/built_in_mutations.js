// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__186558,_,p__186559){
var map__186560 = p__186558;
var map__186560__$1 = ((((!((map__186560 == null)))?((((map__186560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186560):map__186560);
var state = cljs.core.get.call(null,map__186560__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__186561 = p__186559;
var map__186561__$1 = ((((!((map__186561 == null)))?((((map__186561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186561):map__186561);
var config = map__186561__$1;
var post_mutation = cljs.core.get.call(null,map__186561__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
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

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__186560,map__186560__$1,state,map__186561,map__186561__$1,config,post_mutation){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__186560,map__186560__$1,state,map__186561,map__186561__$1,config,post_mutation))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__186565,_,p__186566){
var map__186567 = p__186565;
var map__186567__$1 = ((((!((map__186567 == null)))?((((map__186567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186567):map__186567);
var state = cljs.core.get.call(null,map__186567__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__186568 = p__186566;
var map__186568__$1 = ((((!((map__186568 == null)))?((((map__186568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186568):map__186568);
var lang = cljs.core.get.call(null,map__186568__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__186567,map__186567__$1,state,map__186568,map__186568__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__186567,map__186567__$1,state,map__186568,map__186568__$1,lang){
return (function (p1__186564_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__186564_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__186567,map__186567__$1,state,map__186568,map__186568__$1,lang))
);
});})(map__186567,map__186567__$1,state,map__186568,map__186568__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__186571){
var map__186572 = p__186571;
var map__186572__$1 = ((((!((map__186572 == null)))?((((map__186572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186572):map__186572);
var params = map__186572__$1;
var action = cljs.core.get.call(null,map__186572__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__186572__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__186572,map__186572__$1,params,action,execute){
return (function (){
var G__186574 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__186574__$1 = (((G__186574 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__186574));
if((G__186574__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__186574__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__186572,map__186572__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__186575,_,params){
var map__186576 = p__186575;
var map__186576__$1 = ((((!((map__186576 == null)))?((((map__186576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186576):map__186576);
var state = cljs.core.get.call(null,map__186576__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__186576__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__186576,map__186576__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__186576,map__186576__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__186576,map__186576__$1,state,ref))
);
});})(map__186576,map__186576__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__186578,_,p__186579){
var map__186580 = p__186578;
var map__186580__$1 = ((((!((map__186580 == null)))?((((map__186580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186580):map__186580);
var state = cljs.core.get.call(null,map__186580__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__186580__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__186581 = p__186579;
var map__186581__$1 = ((((!((map__186581 == null)))?((((map__186581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186581):map__186581);
var field = cljs.core.get.call(null,map__186581__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__186580,map__186580__$1,state,ref,map__186581,map__186581__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__186580,map__186580__$1,state,ref,map__186581,map__186581__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__186584,k,_){
var map__186585 = p__186584;
var map__186585__$1 = ((((!((map__186585 == null)))?((((map__186585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__186585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__186585):map__186585);
var target = cljs.core.get.call(null,map__186585__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1491715068114