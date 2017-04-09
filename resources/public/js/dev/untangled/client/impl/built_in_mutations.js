// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.impl.built_in_mutations');
goog.require('cljs.core');
goog.require('untangled.client.mutations');
goog.require('untangled.client.logging');
goog.require('untangled.client.impl.data_fetch');
goog.require('untangled.dom');
goog.require('untangled.i18n.core');
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled","load","untangled/load",89075339,null),(function (p__51938,_,p__51939){
var map__51940 = p__51938;
var map__51940__$1 = ((((!((map__51940 == null)))?((((map__51940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51940):map__51940);
var state = cljs.core.get.call(null,map__51940__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__51941 = p__51939;
var map__51941__$1 = ((((!((map__51941 == null)))?((((map__51941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51941):map__51941);
var config = map__51941__$1;
var post_mutation = cljs.core.get.call(null,map__51941__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
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

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51940,map__51940__$1,state,map__51941,map__51941__$1,config,post_mutation){
return (function (){
return untangled.client.impl.data_fetch.mark_ready.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"state","state",-1988618099),state));
});})(map__51940,map__51940__$1,state,map__51941,map__51941__$1,config,post_mutation))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","change-locale","ui/change-locale",1814019626,null),(function (p__51945,_,p__51946){
var map__51947 = p__51945;
var map__51947__$1 = ((((!((map__51947 == null)))?((((map__51947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51947):map__51947);
var state = cljs.core.get.call(null,map__51947__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__51948 = p__51946;
var map__51948__$1 = ((((!((map__51948 == null)))?((((map__51948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51948):map__51948);
var lang = cljs.core.get.call(null,map__51948__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51947,map__51947__$1,state,map__51948,map__51948__$1,lang){
return (function (){
cljs.core.reset_BANG_.call(null,untangled.i18n.core._STAR_current_locale_STAR_,lang);

return cljs.core.swap_BANG_.call(null,state,((function (map__51947,map__51947__$1,state,map__51948,map__51948__$1,lang){
return (function (p1__51944_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__51944_SHARP_,new cljs.core.Keyword("ui","locale","ui/locale",-2115717461),lang),new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));
});})(map__51947,map__51947__$1,state,map__51948,map__51948__$1,lang))
);
});})(map__51947,map__51947__$1,state,map__51948,map__51948__$1,lang))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (env,_,p__51951){
var map__51952 = p__51951;
var map__51952__$1 = ((((!((map__51952 == null)))?((((map__51952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51952):map__51952);
var params = map__51952__$1;
var action = cljs.core.get.call(null,map__51952__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var execute = cljs.core.get.call(null,map__51952__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51952,map__51952__$1,params,action,execute){
return (function (){
var G__51954 = untangled.client.mutations.mutate.call(null,env,action,cljs.core.dissoc.call(null,params,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"execute","execute",-129499188)));
var G__51954__$1 = (((G__51954 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__51954));
if((G__51954__$1 == null)){
return null;
} else {
return cljs.core.apply.call(null,G__51954__$1,cljs.core.PersistentVector.EMPTY);
}
});})(map__51952,map__51952__$1,params,action,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null),(function (p__51955,_,params){
var map__51956 = p__51955;
var map__51956__$1 = ((((!((map__51956 == null)))?((((map__51956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51956):map__51956);
var state = cljs.core.get.call(null,map__51956__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__51956__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/set-props requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51956,map__51956__$1,state,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,((function (map__51956,map__51956__$1,state,ref){
return (function (st){
return cljs.core.merge.call(null,st,params);
});})(map__51956,map__51956__$1,state,ref))
);
});})(map__51956,map__51956__$1,state,ref))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null),(function (p__51958,_,p__51959){
var map__51960 = p__51958;
var map__51960__$1 = ((((!((map__51960 == null)))?((((map__51960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51960):map__51960);
var state = cljs.core.get.call(null,map__51960__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.call(null,map__51960__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__51961 = p__51959;
var map__51961__$1 = ((((!((map__51961 == null)))?((((map__51961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51961):map__51961);
var field = cljs.core.get.call(null,map__51961__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if((ref == null)){
untangled.client.logging.error.call(null,"ui/toggle requires component to have an ident.");
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__51960,map__51960__$1,state,ref,map__51961,map__51961__$1,field){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,field),cljs.core.not);
});})(map__51960,map__51960__$1,state,ref,map__51961,map__51961__$1,field))
], null);
}));
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__51964,k,_){
var map__51965 = p__51964;
var map__51965__$1 = ((((!((map__51965 == null)))?((((map__51965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51965):map__51965);
var target = cljs.core.get.call(null,map__51965__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return untangled.client.logging.error.call(null,untangled.client.logging.value_message.call(null,"Unknown app state mutation. Have you required the file with your mutations?",k));
} else {
return null;
}
}));
cljs.core._add_method.call(null,untangled.client.mutations.post_mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (env,k,p){
return null;
}));

//# sourceMappingURL=built_in_mutations.js.map?rel=1491695671331