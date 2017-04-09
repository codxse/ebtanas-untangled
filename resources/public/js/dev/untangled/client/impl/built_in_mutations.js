// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__225310,_,p__225311){
var map__225312 = p__225310;
var map__225312__$1 = ((((!((map__225312 == null)))?((((map__225312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225312):map__225312);
var state = cljs.core.get.call(null,map__225312__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__225313 = p__225311;
var map__225313__$1 = ((((!((map__225313 == null)))?((((map__225313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225313):map__225313);
var config = map__225313__$1;
var post_mutation = cljs.core.get.call(null,map__225313__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
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

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__225312,map__225312__$1,state,map__225313,map__225313__$1,config,post_mutation){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__225312,map__225312__$1,state,map__225313,map__225313__$1,config,post_mutation))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__225317,_,p__225318){
var map__225319 = p__225317;
var map__225319__$1 = ((((!((map__225319 == null)))?((((map__225319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225319):map__225319);
var state = cljs.core.get.call(null,map__225319__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__225320 = p__225318;
var map__225320__$1 = ((((!((map__225320 == null)))?((((map__225320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225320):map__225320);
var lang = cljs.core.get.call(null,map__225320__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__225319,map__225319__$1,state,map__225320,map__225320__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__225319,map__225319__$1,state,map__225320,map__225320__$1,lang){
return (function (p1__225316_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__225316_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__225319,map__225319__$1,state,map__225320,map__225320__$1,lang))
);
});})(map__225319,map__225319__$1,state,map__225320,map__225320__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__225323){
var map__225324 = p__225323;
var map__225324__$1 = ((((!((map__225324 == null)))?((((map__225324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225324):map__225324);
var params = map__225324__$1;
var action = cljs.core.get.call(null,map__225324__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__225324__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__225324,map__225324__$1,params,action,execute){
return (function (){
var G__225326 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__225326__$1 = (((G__225326 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__225326));
if((G__225326__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__225326__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__225324,map__225324__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__225327,_,params){
var map__225328 = p__225327;
var map__225328__$1 = ((((!((map__225328 == null)))?((((map__225328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225328):map__225328);
var state = cljs.core.get.call(null,map__225328__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__225328__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__225328,map__225328__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__225328,map__225328__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__225328,map__225328__$1,state,ref))
);
});})(map__225328,map__225328__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__225330,_,p__225331){
var map__225332 = p__225330;
var map__225332__$1 = ((((!((map__225332 == null)))?((((map__225332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225332):map__225332);
var state = cljs.core.get.call(null,map__225332__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__225332__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__225333 = p__225331;
var map__225333__$1 = ((((!((map__225333 == null)))?((((map__225333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225333):map__225333);
var field = cljs.core.get.call(null,map__225333__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__225332,map__225332__$1,state,ref,map__225333,map__225333__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__225332,map__225332__$1,state,ref,map__225333,map__225333__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__225336,k,_){
var map__225337 = p__225336;
var map__225337__$1 = ((((!((map__225337 == null)))?((((map__225337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__225337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__225337):map__225337);
var target = cljs.core.get.call(null,map__225337__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1491715144220