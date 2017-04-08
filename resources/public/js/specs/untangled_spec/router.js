// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.router');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('com.stuartsierra.component');
goog.require('om.next');
goog.require('pushy.core');
goog.require('untangled_spec.renderer');
goog.require('untangled_spec.selectors');
goog.require('untangled.client.mutations');
goog.require('goog.Uri.QueryData');
untangled_spec.router.parse_fragment = (function untangled_spec$router$parse_fragment(path){
var data = (new goog.Uri.QueryData(path));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),(function (){var G__64111 = data.get("filter");
if((G__64111 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__64111);
}
})(),new cljs.core.Keyword(null,"selectors","selectors",-680741768),(function (){var G__64112 = data.get("selectors");
if((G__64112 == null)){
return null;
} else {
return untangled_spec.selectors.parse_selectors.call(null,G__64112);
}
})()], null);
});
untangled_spec.router.update_fragment_BANG_ = (function untangled_spec$router$update_fragment_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___64117 = arguments.length;
var i__35777__auto___64118 = (0);
while(true){
if((i__35777__auto___64118 < len__35776__auto___64117)){
args__35783__auto__.push((arguments[i__35777__auto___64118]));

var G__64119 = (i__35777__auto___64118 + (1));
i__35777__auto___64118 = G__64119;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((3) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((3)),(0),null)):null);
return untangled_spec.router.update_fragment_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35784__auto__);
});

untangled_spec.router.update_fragment_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (history,k,f,args){
var data = (new goog.Uri.QueryData(pushy.core.get_token.call(null,history)));
data.set(cljs.core.name.call(null,k),cljs.core.apply.call(null,f,data.get(cljs.core.name.call(null,k)),args));

return pushy.core.set_token_BANG_.call(null,history,data.toDecodedString());
});

untangled_spec.router.update_fragment_BANG_.cljs$lang$maxFixedArity = (3);

untangled_spec.router.update_fragment_BANG_.cljs$lang$applyTo = (function (seq64113){
var G__64114 = cljs.core.first.call(null,seq64113);
var seq64113__$1 = cljs.core.next.call(null,seq64113);
var G__64115 = cljs.core.first.call(null,seq64113__$1);
var seq64113__$2 = cljs.core.next.call(null,seq64113__$1);
var G__64116 = cljs.core.first.call(null,seq64113__$2);
var seq64113__$3 = cljs.core.next.call(null,seq64113__$2);
return untangled_spec.router.update_fragment_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__64114,G__64115,G__64116,seq64113__$3);
});

untangled_spec.router.assoc_fragment_BANG_ = (function untangled_spec$router$assoc_fragment_BANG_(history,k,v){
return untangled_spec.router.update_fragment_BANG_.call(null,history,k,cljs.core.constantly.call(null,v));
});
untangled_spec.router.new_history = (function untangled_spec$router$new_history(parser,tx_BANG_){
var history = (function (){var update_history_BANG_64123 = pushy.core.update_history_BANG_;
pushy.core.update_history_BANG_ = ((function (update_history_BANG_64123){
return (function (p1__64120_SHARP_){
var G__64124 = p1__64120_SHARP_;
G__64124.setUseFragment(true);

G__64124.setPathPrefix("");

G__64124.setEnabled(true);

return G__64124;
});})(update_history_BANG_64123))
;

try{return pushy.core.pushy.call(null,tx_BANG_,parser);
}finally {pushy.core.update_history_BANG_ = update_history_BANG_64123;
}})();
return history;
});
cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled-spec.router","set-page-filter","untangled-spec.router/set-page-filter",1657782322,null),(function (p__64125,k,p__64126){
var map__64127 = p__64125;
var map__64127__$1 = ((((!((map__64127 == null)))?((((map__64127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64127):map__64127);
var state = cljs.core.get.call(null,map__64127__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__64127__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__64128 = p__64126;
var map__64128__$1 = ((((!((map__64128 == null)))?((((map__64128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64128):map__64128);
var filter = cljs.core.get.call(null,map__64128__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64127,map__64127__$1,state,ast,map__64128,map__64128__$1,filter){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("ui","current-filter","ui/current-filter",1519811523),(function (){var or__34555__auto__ = (function (){var and__34543__auto__ = (filter == null);
if(and__34543__auto__){
return new cljs.core.Keyword(null,"all","all",892129742);
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
var or__34555__auto____$1 = (function (){var and__34543__auto__ = cljs.core.contains_QMARK_.call(null,untangled_spec.renderer.filters,filter);
if(and__34543__auto__){
return filter;
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(or__34555__auto____$1)){
return or__34555__auto____$1;
} else {
console.warn("INVALID FILTER: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter)].join(''));

return new cljs.core.Keyword(null,"all","all",892129742);
}
}
})());
});})(map__64127,map__64127__$1,state,ast,map__64128,map__64128__$1,filter))
], null);
}));
untangled_spec.router.update_some = (function untangled_spec$router$update_some(var_args){
var args__35783__auto__ = [];
var len__35776__auto___64135 = arguments.length;
var i__35777__auto___64136 = (0);
while(true){
if((i__35777__auto___64136 < len__35776__auto___64135)){
args__35783__auto__.push((arguments[i__35777__auto___64136]));

var G__64137 = (i__35777__auto___64136 + (1));
i__35777__auto___64136 = G__64137;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((3) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((3)),(0),null)):null);
return untangled_spec.router.update_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35784__auto__);
});

untangled_spec.router.update_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,more){
return cljs.core.update.call(null,m,k,(function (v){
if(cljs.core.not.call(null,v)){
return v;
} else {
return cljs.core.apply.call(null,f,v,more);
}
}));
});

untangled_spec.router.update_some.cljs$lang$maxFixedArity = (3);

untangled_spec.router.update_some.cljs$lang$applyTo = (function (seq64131){
var G__64132 = cljs.core.first.call(null,seq64131);
var seq64131__$1 = cljs.core.next.call(null,seq64131);
var G__64133 = cljs.core.first.call(null,seq64131__$1);
var seq64131__$2 = cljs.core.next.call(null,seq64131__$1);
var G__64134 = cljs.core.first.call(null,seq64131__$2);
var seq64131__$3 = cljs.core.next.call(null,seq64131__$2);
return untangled_spec.router.update_some.cljs$core$IFn$_invoke$arity$variadic(G__64132,G__64133,G__64134,seq64131__$3);
});

cljs.core._add_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled-spec.selectors","set-active-selectors","untangled-spec.selectors/set-active-selectors",-435471259,null),(function (p__64138,k,p__64139){
var map__64140 = p__64138;
var map__64140__$1 = ((((!((map__64140 == null)))?((((map__64140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64140):map__64140);
var state = cljs.core.get.call(null,map__64140__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__64140__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__64141 = p__64139;
var map__64141__$1 = ((((!((map__64141 == null)))?((((map__64141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64141):map__64141);
var selectors = cljs.core.get.call(null,map__64141__$1,new cljs.core.Keyword(null,"selectors","selectors",-680741768));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64140,map__64140__$1,state,ast,map__64141,map__64141__$1,selectors){
return (function (){
return cljs.core.swap_BANG_.call(null,state,untangled_spec.router.update_some,new cljs.core.Keyword(null,"selectors","selectors",-680741768),untangled_spec.selectors.set_selectors_STAR_,selectors);
});})(map__64140,map__64140__$1,state,ast,map__64141,map__64141__$1,selectors))
,new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled_spec.router.Router = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled_spec.router.Router.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


untangled_spec.router.Router.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k64145,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__64147 = k64145;
switch (G__64147) {
default:
return cljs.core.get.call(null,self__.__extmap,k64145,else__35233__auto__);

}
});


untangled_spec.router.Router.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#untangled-spec.router.Router{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});


untangled_spec.router.Router.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.router.Router.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64144){
var self__ = this;
var G__64144__$1 = this;
return (new cljs.core.RecordIter((0),G__64144__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled_spec.router.Router.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


untangled_spec.router.Router.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new untangled_spec.router.Router(self__.__meta,self__.__extmap,self__.__hash));
});


untangled_spec.router.Router.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});


untangled_spec.router.Router.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
var self__ = this;
var this__35225__auto____$1 = this;
var h__34997__auto__ = self__.__hash;
if(!((h__34997__auto__ == null))){
return h__34997__auto__;
} else {
var h__34997__auto____$1 = cljs.core.hash_imap.call(null,this__35225__auto____$1);
self__.__hash = h__34997__auto____$1;

return h__34997__auto____$1;
}
});


untangled_spec.router.Router.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
var self__ = this;
var this__35226__auto____$1 = this;
if(cljs.core.truth_((function (){var and__34543__auto__ = other__35227__auto__;
if(cljs.core.truth_(and__34543__auto__)){
return ((this__35226__auto____$1.constructor === other__35227__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__35226__auto____$1,other__35227__auto__));
} else {
return and__34543__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled_spec.router.Router.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.router.Router.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map__64148 = new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("test","renderer","test/renderer",332246493).cljs$core$IFn$_invoke$arity$1(this$__$1));
var map__64148__$1 = ((((!((map__64148 == null)))?((((map__64148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64148):map__64148);
var reconciler = cljs.core.get.call(null,map__64148__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var history = untangled_spec.router.new_history.call(null,untangled_spec.router.parse_fragment,((function (map__64148,map__64148__$1,reconciler,this$__$1){
return (function untangled_spec$router$on_route_change(p__64150){
var map__64153 = p__64150;
var map__64153__$1 = ((((!((map__64153 == null)))?((((map__64153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64153):map__64153);
var filter = cljs.core.get.call(null,map__64153__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var selectors = cljs.core.get.call(null,map__64153__$1,new cljs.core.Keyword(null,"selectors","selectors",-680741768));
if(cljs.core.truth_(filter)){
om.next.transact_BANG_.call(null,reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled-spec.router","set-page-filter","untangled-spec.router/set-page-filter",1657782322,null)),(function (){var x__35489__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))));
} else {
}

return om.next.transact_BANG_.call(null,reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled-spec.selectors","set-active-selectors","untangled-spec.selectors/set-active-selectors",-435471259,null)),(function (){var x__35489__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectors","selectors",-680741768),selectors], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))));
});})(map__64148,map__64148__$1,reconciler,this$__$1))
);
untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("untangled-spec.renderer","toggle-filter","untangled-spec.renderer/toggle-filter",1543693891,null),((function (map__64148,map__64148__$1,reconciler,history,this$__$1){
return (function (p__64155,_,p__64156){
var map__64157 = p__64155;
var map__64157__$1 = ((((!((map__64157 == null)))?((((map__64157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64157):map__64157);
var state = cljs.core.get.call(null,map__64157__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__64158 = p__64156;
var map__64158__$1 = ((((!((map__64158 == null)))?((((map__64158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64158):map__64158);
var filter = cljs.core.get.call(null,map__64158__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64157,map__64157__$1,state,map__64158,map__64158__$1,filter,map__64148,map__64148__$1,reconciler,history,this$__$1){
return (function (){
return untangled_spec.router.update_fragment_BANG_.call(null,history,new cljs.core.Keyword(null,"filter","filter",-948537934),(function (){var new_filter = cljs.core.name.call(null,filter);
return ((function (new_filter,map__64157,map__64157__$1,state,map__64158,map__64158__$1,filter,map__64148,map__64148__$1,reconciler,history,this$__$1){
return (function (old_filter){
if(cljs.core._EQ_.call(null,old_filter,new_filter)){
return "all";
} else {
return new_filter;
}
});
;})(new_filter,map__64157,map__64157__$1,state,map__64158,map__64158__$1,filter,map__64148,map__64148__$1,reconciler,history,this$__$1))
})());
});})(map__64157,map__64157__$1,state,map__64158,map__64158__$1,filter,map__64148,map__64148__$1,reconciler,history,this$__$1))
], null);
});})(map__64148,map__64148__$1,reconciler,history,this$__$1))
);

untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("untangled-spec.selectors","set-selector","untangled-spec.selectors/set-selector",-1524394460,null),((function (map__64148,map__64148__$1,reconciler,history,this$__$1){
return (function (p__64161,_,new_selector){
var map__64162 = p__64161;
var map__64162__$1 = ((((!((map__64162 == null)))?((((map__64162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64162):map__64162);
var state = cljs.core.get.call(null,map__64162__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64162,map__64162__$1,state,map__64148,map__64148__$1,reconciler,history,this$__$1){
return (function (){
return untangled_spec.router.assoc_fragment_BANG_.call(null,history,new cljs.core.Keyword(null,"selectors","selectors",-680741768),untangled_spec.selectors.to_string.call(null,untangled_spec.selectors.set_selector_STAR_.call(null,new cljs.core.Keyword(null,"selectors","selectors",-680741768).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new_selector)));
});})(map__64162,map__64162__$1,state,map__64148,map__64148__$1,reconciler,history,this$__$1))
], null);
});})(map__64148,map__64148__$1,reconciler,history,this$__$1))
);

untangled.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("untangled-spec.selectors","set-selectors","untangled-spec.selectors/set-selectors",2102620932,null),((function (map__64148,map__64148__$1,reconciler,history,this$__$1){
return (function (p__64164,k,p__64165){
var map__64166 = p__64164;
var map__64166__$1 = ((((!((map__64166 == null)))?((((map__64166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64166):map__64166);
var state = cljs.core.get.call(null,map__64166__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__64166__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__64167 = p__64165;
var map__64167__$1 = ((((!((map__64167 == null)))?((((map__64167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64167):map__64167);
var selectors = cljs.core.get.call(null,map__64167__$1,new cljs.core.Keyword(null,"selectors","selectors",-680741768));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__64166,map__64166__$1,state,ast,map__64167,map__64167__$1,selectors,map__64148,map__64148__$1,reconciler,history,this$__$1){
return (function (){
return untangled_spec.router.assoc_fragment_BANG_.call(null,history,new cljs.core.Keyword(null,"selectors","selectors",-680741768),(function (){var or__34555__auto__ = selectors;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return untangled_spec.selectors.to_string.call(null,new cljs.core.Keyword(null,"selectors","selectors",-680741768).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
}
})());
});})(map__64166,map__64166__$1,state,ast,map__64167,map__64167__$1,selectors,map__64148,map__64148__$1,reconciler,history,this$__$1))
], null);
});})(map__64148,map__64148__$1,reconciler,history,this$__$1))
);

pushy.core.start_BANG_.call(null,history);

return this$__$1;
});


untangled_spec.router.Router.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled-spec.renderer","set-filter","untangled-spec.renderer/set-filter",-1513611532,null));

cljs.core.remove_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled-spec.selectors","set-selector","untangled-spec.selectors/set-selector",-1524394460,null));

cljs.core.remove_method.call(null,untangled.client.mutations.mutate,new cljs.core.Symbol("untangled-spec.selectors","set-selectors","untangled-spec.selectors/set-selectors",2102620932,null));

return this$__$1;
});


untangled_spec.router.Router.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new untangled_spec.router.Router(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


untangled_spec.router.Router.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__64144){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__64170 = cljs.core.keyword_identical_QMARK_;
var expr__64171 = k__35238__auto__;
return (new untangled_spec.router.Router(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__64144),null));
});


untangled_spec.router.Router.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});


untangled_spec.router.Router.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__64144){
var self__ = this;
var this__35229__auto____$1 = this;
return (new untangled_spec.router.Router(G__64144,self__.__extmap,self__.__hash));
});


untangled_spec.router.Router.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

untangled_spec.router.Router.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

untangled_spec.router.Router.cljs$lang$type = true;

untangled_spec.router.Router.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled-spec.router/Router");
});

untangled_spec.router.Router.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"untangled-spec.router/Router");
});

untangled_spec.router.__GT_Router = (function untangled_spec$router$__GT_Router(){
return (new untangled_spec.router.Router(null,null,null));
});

untangled_spec.router.map__GT_Router = (function untangled_spec$router$map__GT_Router(G__64146){
return (new untangled_spec.router.Router(null,cljs.core.dissoc.call(null,G__64146),null));
});

untangled_spec.router.make_router = (function untangled_spec$router$make_router(){
return com.stuartsierra.component.using.call(null,untangled_spec.router.map__GT_Router.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","renderer","test/renderer",332246493)], null));
});

//# sourceMappingURL=router.js.map?rel=1491640780172