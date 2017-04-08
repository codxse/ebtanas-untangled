// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.runner');
goog.require('cljs.core');
goog.require('cljs.spec');
goog.require('cljs.test');
goog.require('com.stuartsierra.component');
goog.require('untangled_spec.assertions');
goog.require('untangled_spec.reporter');
goog.require('untangled_spec.selectors');
goog.require('untangled_spec.spec');
goog.require('om.next');
goog.require('untangled.client.mutations');
goog.require('untangled_spec.renderer');
goog.require('untangled_spec.router');
untangled_spec.runner.novelty_BANG_ = (function untangled_spec$runner$novelty_BANG_(system,mut_key,novelty){
return om.next.transact_BANG_.call(null,om.next.app_root.call(null,cljs.core.get_in.call(null,system,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","renderer","test/renderer",332246493),new cljs.core.Keyword("test","renderer","test/renderer",332246493),new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)], null))),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = mut_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = novelty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))));
});
untangled_spec.runner.render_tests = (function untangled_spec$runner$render_tests(p__64178){
var map__64181 = p__64178;
var map__64181__$1 = ((((!((map__64181 == null)))?((((map__64181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64181):map__64181);
var runner = map__64181__$1;
var reporter = cljs.core.get.call(null,map__64181__$1,new cljs.core.Keyword("test","reporter","test/reporter",-867863647));
return untangled_spec.runner.novelty_BANG_.call(null,runner,new cljs.core.Symbol("untangled-spec.renderer","render-tests","untangled-spec.renderer/render-tests",455084030,null),untangled_spec.reporter.get_test_report.call(null,reporter));
});
untangled_spec.runner.run_tests = (function untangled_spec$runner$run_tests(runner,p__64183){
var map__64187 = p__64183;
var map__64187__$1 = ((((!((map__64187 == null)))?((((map__64187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64187):map__64187);
var refresh_QMARK_ = cljs.core.get.call(null,map__64187__$1,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570),false);
untangled_spec.reporter.reset_test_report_BANG_.call(null,new cljs.core.Keyword("test","reporter","test/reporter",-867863647).cljs$core$IFn$_invoke$arity$1(runner));

var report64189 = cljs.test.report;
cljs.test.report = untangled_spec.reporter.untangled_report.call(null,runner,untangled_spec.runner.render_tests);

try{return new cljs.core.Keyword(null,"test!","test!",1360655225).cljs$core$IFn$_invoke$arity$1(runner).call(null);
}finally {cljs.test.report = report64189;
}});

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
untangled_spec.runner.TestRunner = (function (opts,__meta,__extmap,__hash){
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled_spec.runner.TestRunner.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


untangled_spec.runner.TestRunner.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k64191,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__64193 = (((k64191 instanceof cljs.core.Keyword))?k64191.fqn:null);
switch (G__64193) {
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k64191,else__35233__auto__);

}
});


untangled_spec.runner.TestRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#untangled-spec.runner.TestRunner{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});


untangled_spec.runner.TestRunner.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.runner.TestRunner.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64190){
var self__ = this;
var G__64190__$1 = this;
return (new cljs.core.RecordIter((0),G__64190__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled_spec.runner.TestRunner.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


untangled_spec.runner.TestRunner.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new untangled_spec.runner.TestRunner(self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});


untangled_spec.runner.TestRunner.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});


untangled_spec.runner.TestRunner.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


untangled_spec.runner.TestRunner.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


untangled_spec.runner.TestRunner.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.runner.TestRunner.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var runner_atom_64198 = new cljs.core.Keyword(null,"runner-atom","runner-atom",617192507).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("test","renderer","test/renderer",332246493).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("test","renderer","test/renderer",332246493).cljs$core$IFn$_invoke$arity$1(this$__$1)));
cljs.core.reset_BANG_.call(null,runner_atom_64198,this$__$1);

return this$__$1;
});


untangled_spec.runner.TestRunner.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});


untangled_spec.runner.TestRunner.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new untangled_spec.runner.TestRunner(self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


untangled_spec.runner.TestRunner.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__64190){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__64194 = cljs.core.keyword_identical_QMARK_;
var expr__64195 = k__35238__auto__;
if(cljs.core.truth_(pred__64194.call(null,new cljs.core.Keyword(null,"opts","opts",155075701),expr__64195))){
return (new untangled_spec.runner.TestRunner(G__64190,self__.__meta,self__.__extmap,null));
} else {
return (new untangled_spec.runner.TestRunner(self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__64190),null));
}
});


untangled_spec.runner.TestRunner.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});


untangled_spec.runner.TestRunner.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__64190){
var self__ = this;
var this__35229__auto____$1 = this;
return (new untangled_spec.runner.TestRunner(self__.opts,G__64190,self__.__extmap,self__.__hash));
});


untangled_spec.runner.TestRunner.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

untangled_spec.runner.TestRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null);
});

untangled_spec.runner.TestRunner.cljs$lang$type = true;

untangled_spec.runner.TestRunner.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled-spec.runner/TestRunner");
});

untangled_spec.runner.TestRunner.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"untangled-spec.runner/TestRunner");
});

untangled_spec.runner.__GT_TestRunner = (function untangled_spec$runner$__GT_TestRunner(opts){
return (new untangled_spec.runner.TestRunner(opts,null,null,null));
});

untangled_spec.runner.map__GT_TestRunner = (function untangled_spec$runner$map__GT_TestRunner(G__64192){
return (new untangled_spec.runner.TestRunner(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(G__64192),null,cljs.core.dissoc.call(null,G__64192,new cljs.core.Keyword(null,"opts","opts",155075701)),null));
});

untangled_spec.runner.make_test_runner = (function untangled_spec$runner$make_test_runner(var_args){
var args__35783__auto__ = [];
var len__35776__auto___64206 = arguments.length;
var i__35777__auto___64207 = (0);
while(true){
if((i__35777__auto___64207 < len__35776__auto___64206)){
args__35783__auto__.push((arguments[i__35777__auto___64207]));

var G__64208 = (i__35777__auto___64207 + (1));
i__35777__auto___64207 = G__64208;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled_spec.runner.make_test_runner.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled_spec.runner.make_test_runner.cljs$core$IFn$_invoke$arity$variadic = (function (opts,test_BANG_,p__64202){
var vec__64203 = p__64202;
var extra = cljs.core.nth.call(null,vec__64203,(0),null);
return com.stuartsierra.component.using.call(null,cljs.core.merge.call(null,untangled_spec.runner.map__GT_TestRunner.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"test!","test!",1360655225),test_BANG_], null)),extra),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test","reporter","test/reporter",-867863647)], null));
});

untangled_spec.runner.make_test_runner.cljs$lang$maxFixedArity = (2);

untangled_spec.runner.make_test_runner.cljs$lang$applyTo = (function (seq64199){
var G__64200 = cljs.core.first.call(null,seq64199);
var seq64199__$1 = cljs.core.next.call(null,seq64199);
var G__64201 = cljs.core.first.call(null,seq64199__$1);
var seq64199__$2 = cljs.core.next.call(null,seq64199__$1);
return untangled_spec.runner.make_test_runner.cljs$core$IFn$_invoke$arity$variadic(G__64200,G__64201,seq64199__$2);
});

cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.runner","test-paths","untangled-spec.runner/test-paths",-284677917),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.every_impl.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",1439199454),(function (G__64209){
return cljs.core.coll_QMARK_.call(null,G__64209);
})], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.runner","source-paths","untangled-spec.runner/source-paths",-1891550731),cljs.core.list(new cljs.core.Symbol("cljs.spec","coll-of","cljs.spec/coll-of",-1298051753,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.every_impl.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907),true,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303),null,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",1439199454),(function (G__64210){
return cljs.core.coll_QMARK_.call(null,G__64210);
})], null),null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.runner","ns-regex","untangled-spec.runner/ns-regex",409225834),new cljs.core.Keyword("untangled-spec.spec","regex","untangled-spec.spec/regex",-961591711),new cljs.core.Keyword("untangled-spec.spec","regex","untangled-spec.spec/regex",-961591711));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.runner","port","untangled-spec.runner/port",-15872624),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.runner","config","untangled-spec.runner/config",261673985),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.runner","port","untangled-spec.runner/port",-15872624)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.runner","port","untangled-spec.runner/port",-15872624)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64211){
return cljs.core.map_QMARK_.call(null,G__64211);
}),(function (G__64211){
return cljs.core.contains_QMARK_.call(null,G__64211,new cljs.core.Keyword(null,"port","port",1534937262));
})], null),(function (G__64211){
return (cljs.core.map_QMARK_.call(null,G__64211)) && (cljs.core.contains_QMARK_.call(null,G__64211,new cljs.core.Keyword(null,"port","port",1534937262)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.runner","port","untangled-spec.runner/port",-15872624)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"port","port",1534937262)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"port","port",1534937262)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.runner","opts","untangled-spec.runner/opts",752857367),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.runner","ns-regex","untangled-spec.runner/ns-regex",409225834)], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.runner","ns-regex","untangled-spec.runner/ns-regex",409225834)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64212){
return cljs.core.map_QMARK_.call(null,G__64212);
}),(function (G__64212){
return cljs.core.contains_QMARK_.call(null,G__64212,new cljs.core.Keyword(null,"ns-regex","ns-regex",2113271696));
})], null),(function (G__64212){
return (cljs.core.map_QMARK_.call(null,G__64212)) && (cljs.core.contains_QMARK_.call(null,G__64212,new cljs.core.Keyword(null,"ns-regex","ns-regex",2113271696)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.runner","ns-regex","untangled-spec.runner/ns-regex",409225834)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-regex","ns-regex",2113271696)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ns-regex","ns-regex",2113271696)))], null),null])));
cljs.spec.def_impl.call(null,new cljs.core.Symbol("untangled-spec.runner","test-runner","untangled-spec.runner/test-runner",-1488002918,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("untangled-spec.runner","opts","untangled-spec.runner/opts",752857367),new cljs.core.Keyword(null,"test!","test!",1360655225),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"renderer","renderer",336841071),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("untangled-spec.runner","opts","untangled-spec.runner/opts",752857367),new cljs.core.Keyword(null,"test!","test!",1360655225),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"renderer","renderer",336841071),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"test!","test!",1360655225),new cljs.core.Keyword(null,"renderer","renderer",336841071)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.runner","opts","untangled-spec.runner/opts",752857367),cljs.core.fn_QMARK_,cljs.spec.maybe_impl.call(null,cljs.core.any_QMARK_,new cljs.core.Symbol(null,"any?","any?",-318999933,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.runner","opts","untangled-spec.runner/opts",752857367),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("untangled-spec.runner","opts","untangled-spec.runner/opts",752857367),new cljs.core.Keyword(null,"test!","test!",1360655225),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"renderer","renderer",336841071),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),null,null,null,null,null));
untangled_spec.runner.test_runner = (function untangled_spec$runner$test_runner(var_args){
var args__35783__auto__ = [];
var len__35776__auto___64224 = arguments.length;
var i__35777__auto___64225 = (0);
while(true){
if((i__35777__auto___64225 < len__35776__auto___64224)){
args__35783__auto__.push((arguments[i__35777__auto___64225]));

var G__64226 = (i__35777__auto___64225 + (1));
i__35777__auto___64225 = G__64226;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled_spec.runner.test_runner.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled_spec.runner.test_runner.cljs$core$IFn$_invoke$arity$variadic = (function (opts,test_BANG_,p__64216){
var vec__64217 = p__64216;
var renderer = cljs.core.nth.call(null,vec__64217,(0),null);
return com.stuartsierra.component.start.call(null,com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword("test","runner","test/runner",1949225338),untangled_spec.runner.make_test_runner.call(null,opts,test_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("test","renderer","test/renderer",332246493),renderer,new cljs.core.Keyword(null,"read","read",1140058661),((function (vec__64217,renderer){
return (function (runner,k,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__64220 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__64220) {
case "selectors":
return untangled_spec.selectors.get_current_selectors.call(null);

break;
default:
return cljs.core.prn.call(null,new cljs.core.Keyword("untangled-spec.runner","read","untangled-spec.runner/read",-1621012153),k,params);

}
})()], null);
});})(vec__64217,renderer))
,new cljs.core.Keyword(null,"mutate","mutate",1422419038),((function (vec__64217,renderer){
return (function (runner,k,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (vec__64217,renderer){
return (function (){
var pred__64221 = cljs.core._EQ_;
var expr__64222 = k;
if(cljs.core.truth_(pred__64221.call(null,new cljs.core.Symbol("untangled-spec.selectors","set-selector","untangled-spec.selectors/set-selector",-1524394460,null),expr__64222))){
untangled_spec.selectors.set_selector_BANG_.call(null,params);

return untangled_spec.runner.run_tests.call(null,runner,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.truth_(pred__64221.call(null,new cljs.core.Symbol("untangled-spec.selectors","set-active-selectors","untangled-spec.selectors/set-active-selectors",-435471259,null),expr__64222))){
untangled_spec.selectors.set_selectors_BANG_.call(null,new cljs.core.Keyword(null,"selectors","selectors",-680741768).cljs$core$IFn$_invoke$arity$1(params));

return untangled_spec.runner.run_tests.call(null,runner,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.prn.call(null,new cljs.core.Keyword("untangled-spec.runner","mutate","untangled-spec.runner/mutate",1763557180),k,params);
}
}
});})(vec__64217,renderer))
], null);
});})(vec__64217,renderer))
], null)),new cljs.core.Keyword("test","reporter","test/reporter",-867863647),untangled_spec.reporter.make_test_reporter.call(null)));
});

untangled_spec.runner.test_runner.cljs$lang$maxFixedArity = (2);

untangled_spec.runner.test_runner.cljs$lang$applyTo = (function (seq64213){
var G__64214 = cljs.core.first.call(null,seq64213);
var seq64213__$1 = cljs.core.next.call(null,seq64213);
var G__64215 = cljs.core.first.call(null,seq64213__$1);
var seq64213__$2 = cljs.core.next.call(null,seq64213__$1);
return untangled_spec.runner.test_runner.cljs$core$IFn$_invoke$arity$variadic(G__64214,G__64215,seq64213__$2);
});


//# sourceMappingURL=runner.js.map?rel=1491640780329