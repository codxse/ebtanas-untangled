// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__46473,_,p__46474){
var map__46475 = p__46473;
var map__46475__$1 = ((((!((map__46475 == null)))?((((map__46475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46475):map__46475);
var state = cljs.core.get.call(null,map__46475__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__46476 = p__46474;
var map__46476__$1 = ((((!((map__46476 == null)))?((((map__46476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46476):map__46476);
var config = map__46476__$1;
var post_mutation = cljs.core.get.call(null,map__46476__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
if(cljs.core.truth_((function (){var and__39210__auto__ = post_mutation;
if(cljs.core.truth_(and__39210__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__39210__auto__;
}
})())){
untangled.client.logging.error.call(null,"post-mutation must be a symbol or nil");
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46475,map__46475__$1,state,map__46476,map__46476__$1,config,post_mutation){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__46475,map__46475__$1,state,map__46476,map__46476__$1,config,post_mutation))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__46480,_,p__46481){
var map__46482 = p__46480;
var map__46482__$1 = ((((!((map__46482 == null)))?((((map__46482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46482):map__46482);
var state = cljs.core.get.call(null,map__46482__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__46483 = p__46481;
var map__46483__$1 = ((((!((map__46483 == null)))?((((map__46483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46483):map__46483);
var lang = cljs.core.get.call(null,map__46483__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46482,map__46482__$1,state,map__46483,map__46483__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__46482,map__46482__$1,state,map__46483,map__46483__$1,lang){
return (function (p1__46479_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__46479_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__46482,map__46482__$1,state,map__46483,map__46483__$1,lang))
);
});})(map__46482,map__46482__$1,state,map__46483,map__46483__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__46486){
var map__46487 = p__46486;
var map__46487__$1 = ((((!((map__46487 == null)))?((((map__46487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46487):map__46487);
var params = map__46487__$1;
var action = cljs.core.get.call(null,map__46487__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__46487__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46487,map__46487__$1,params,action,execute){
return (function (){
var G__46489 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__46489__$1 = (((G__46489 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__46489));
if((G__46489__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__46489__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__46487,map__46487__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__46490,_,params){
var map__46491 = p__46490;
var map__46491__$1 = ((((!((map__46491 == null)))?((((map__46491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46491):map__46491);
var state = cljs.core.get.call(null,map__46491__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__46491__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46491,map__46491__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__46491,map__46491__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__46491,map__46491__$1,state,ref))
);
});})(map__46491,map__46491__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__46493,_,p__46494){
var map__46495 = p__46493;
var map__46495__$1 = ((((!((map__46495 == null)))?((((map__46495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46495):map__46495);
var state = cljs.core.get.call(null,map__46495__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__46495__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__46496 = p__46494;
var map__46496__$1 = ((((!((map__46496 == null)))?((((map__46496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46496):map__46496);
var field = cljs.core.get.call(null,map__46496__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46495,map__46495__$1,state,ref,map__46496,map__46496__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__46495,map__46495__$1,state,ref,map__46496,map__46496__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__46499,k,_){
var map__46500 = p__46499;
var map__46500__$1 = ((((!((map__46500 == null)))?((((map__46500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46500):map__46500);
var target = cljs.core.get.call(null,map__46500__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1491695662283