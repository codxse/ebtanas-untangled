// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.diff');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.walk');
untangled_spec.diff.nf = new cljs.core.Symbol(null,"..nothing..","..nothing..",387271704,null);
untangled_spec.diff.diff_elem_QMARK_ = (function untangled_spec$diff$diff_elem_QMARK_(_QMARK_de){
var and__34543__auto__ = cljs.core.vector_QMARK_.call(null,_QMARK_de);
if(and__34543__auto__){
var and__34543__auto____$1 = cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,_QMARK_de));
if(and__34543__auto____$1){
var vec__58163 = _QMARK_de;
var p = cljs.core.nth.call(null,vec__58163,(0),null);
var _ = cljs.core.nth.call(null,vec__58163,(1),null);
var m = cljs.core.nth.call(null,vec__58163,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__58163,(3),null);
return (cljs.core._EQ_.call(null,p,new cljs.core.Keyword(null,"+","+",1913524883))) && (cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"-","-",-2112348439)));
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
});
untangled_spec.diff.diff_elem = (function untangled_spec$diff$diff_elem(var_args){
var args58166 = [];
var len__35776__auto___58169 = arguments.length;
var i__35777__auto___58170 = (0);
while(true){
if((i__35777__auto___58170 < len__35776__auto___58169)){
args58166.push((arguments[i__35777__auto___58170]));

var G__58171 = (i__35777__auto___58170 + (1));
i__35777__auto___58170 = G__58171;
continue;
} else {
}
break;
}

var G__58168 = args58166.length;
switch (G__58168) {
case 0:
return untangled_spec.diff.diff_elem.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return untangled_spec.diff.diff_elem.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58166.length)].join('')));

}
});

untangled_spec.diff.diff_elem.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

untangled_spec.diff.diff_elem.cljs$core$IFn$_invoke$arity$2 = (function (exp,got){
if(cljs.core.not.call(null,untangled_spec.diff.diff_elem_QMARK_.call(null,exp))){
} else {
throw (new Error("Assert failed: (not (diff-elem? exp))"));
}

if(cljs.core.not.call(null,untangled_spec.diff.diff_elem_QMARK_.call(null,got))){
} else {
throw (new Error("Assert failed: (not (diff-elem? got))"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),exp,new cljs.core.Keyword(null,"-","-",-2112348439),got], null);
});

untangled_spec.diff.diff_elem.cljs$lang$maxFixedArity = 2;

untangled_spec.diff.extract = (function untangled_spec$diff$extract(_QMARK_d){
if((cljs.core.vector_QMARK_.call(null,_QMARK_d)) && (cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,_QMARK_d)))){
} else {
throw (new Error("Assert failed: (and (vector? ?d) (= 2 (count ?d)))"));
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,_QMARK_d))){
} else {
throw (new Error("Assert failed: (vector? (first ?d))"));
}

if(cljs.core.truth_(untangled_spec.diff.diff_elem_QMARK_.call(null,cljs.core.second.call(null,_QMARK_d)))){
} else {
throw (new Error("Assert failed: (diff-elem? (second ?d))"));
}

var vec__58179 = _QMARK_d;
var path = cljs.core.nth.call(null,vec__58179,(0),null);
var vec__58182 = cljs.core.nth.call(null,vec__58179,(1),null);
var _ = cljs.core.nth.call(null,vec__58182,(0),null);
var exp = cljs.core.nth.call(null,vec__58182,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__58182,(2),null);
var got = cljs.core.nth.call(null,vec__58182,(3),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"exp","exp",-261706262),exp,new cljs.core.Keyword(null,"got","got",-1674745710),got], null);
});
untangled_spec.diff.diff_QMARK_ = (function untangled_spec$diff$diff_QMARK_(_QMARK_d){
var and__34543__auto__ = _QMARK_d;
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.map_QMARK_.call(null,_QMARK_d)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector,cljs.core.keys.call(null,_QMARK_d))) && (cljs.core.every_QMARK_.call(null,untangled_spec.diff.diff_elem_QMARK_,cljs.core.vals.call(null,_QMARK_d)));
} else {
return and__34543__auto__;
}
});
untangled_spec.diff.map_keys = (function untangled_spec$diff$map_keys(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__35417__auto__ = (function untangled_spec$diff$map_keys_$_iter__58201(s__58202){
return (new cljs.core.LazySeq(null,(function (){
var s__58202__$1 = s__58202;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__58202__$1);
if(temp__6753__auto__){
var s__58202__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__58202__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__58202__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__58204 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__58203 = (0);
while(true){
if((i__58203 < size__35416__auto__)){
var vec__58211 = cljs.core._nth.call(null,c__35415__auto__,i__58203);
var k = cljs.core.nth.call(null,vec__58211,(0),null);
var v = cljs.core.nth.call(null,vec__58211,(1),null);
cljs.core.chunk_append.call(null,b__58204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null));

var G__58217 = (i__58203 + (1));
i__58203 = G__58217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58204),untangled_spec$diff$map_keys_$_iter__58201.call(null,cljs.core.chunk_rest.call(null,s__58202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58204),null);
}
} else {
var vec__58214 = cljs.core.first.call(null,s__58202__$2);
var k = cljs.core.nth.call(null,vec__58214,(0),null);
var v = cljs.core.nth.call(null,vec__58214,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null),untangled_spec$diff$map_keys_$_iter__58201.call(null,cljs.core.rest.call(null,s__58202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35417__auto__.call(null,m);
})());
});
untangled_spec.diff.map_diff = (function untangled_spec$diff$map_diff(ks,exp,act){
var G__58232 = ks;
var vec__58233 = G__58232;
var seq__58234 = cljs.core.seq.call(null,vec__58233);
var first__58235 = cljs.core.first.call(null,seq__58234);
var seq__58234__$1 = cljs.core.next.call(null,seq__58234);
var k = first__58235;
var ks__$1 = seq__58234__$1;
var exp__$1 = exp;
var act__$1 = act;
var path = cljs.core.PersistentVector.EMPTY;
var diffs = cljs.core.PersistentArrayMap.EMPTY;
var G__58232__$1 = G__58232;
var exp__$2 = exp__$1;
var act__$2 = act__$1;
var path__$1 = path;
var diffs__$1 = diffs;
while(true){
var vec__58236 = G__58232__$1;
var seq__58237 = cljs.core.seq.call(null,vec__58236);
var first__58238 = cljs.core.first.call(null,seq__58237);
var seq__58237__$1 = cljs.core.next.call(null,seq__58237);
var k__$1 = first__58238;
var ks__$2 = seq__58237__$1;
var exp__$3 = exp__$2;
var act__$3 = act__$2;
var path__$2 = path__$1;
var diffs__$2 = diffs__$1;
if((cljs.core.empty_QMARK_.call(null,ks__$2)) && ((k__$1 == null))){
return diffs__$2;
} else {
var ev = cljs.core.get.call(null,exp__$3,k__$1,untangled_spec.diff.nf);
var av = cljs.core.get.call(null,act__$3,k__$1,untangled_spec.diff.nf);
if(cljs.core.truth_((function (){var and__34543__auto__ = ev;
if(cljs.core.truth_(and__34543__auto__)){
var and__34543__auto____$1 = av;
if(cljs.core.truth_(and__34543__auto____$1)){
return cljs.core._EQ_.call(null,ev,av);
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
})())){
var G__58239 = ks__$2;
var G__58240 = exp__$3;
var G__58241 = act__$3;
var G__58242 = path__$2;
var G__58243 = diffs__$2;
G__58232__$1 = G__58239;
exp__$2 = G__58240;
act__$2 = G__58241;
path__$1 = G__58242;
diffs__$1 = G__58243;
continue;
} else {
var d = untangled_spec.diff.diff.call(null,ev,av,new cljs.core.Keyword(null,"recur","recur",-437573268));
var diffs__$3 = (cljs.core.truth_(untangled_spec.diff.diff_elem_QMARK_.call(null,d))?cljs.core.assoc.call(null,diffs__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1], null),d):(cljs.core.truth_(untangled_spec.diff.diff_QMARK_.call(null,d))?cljs.core.merge.call(null,diffs__$2,untangled_spec.diff.map_keys.call(null,((function (G__58232__$1,exp__$2,act__$2,path__$1,diffs__$1,d,ev,av,vec__58236,seq__58237,first__58238,seq__58237__$1,k__$1,ks__$2,exp__$3,act__$3,path__$2,diffs__$2,G__58232,vec__58233,seq__58234,first__58235,seq__58234__$1,k,ks__$1,exp__$1,act__$1,path,diffs){
return (function (p1__58218_SHARP_){
return cljs.core.vec.call(null,cljs.core.cons.call(null,k__$1,p1__58218_SHARP_));
});})(G__58232__$1,exp__$2,act__$2,path__$1,diffs__$1,d,ev,av,vec__58236,seq__58237,first__58238,seq__58237__$1,k__$1,ks__$2,exp__$3,act__$3,path__$2,diffs__$2,G__58232,vec__58233,seq__58234,first__58235,seq__58234__$1,k,ks__$1,exp__$1,act__$1,path,diffs))
,d)):((cljs.core.empty_QMARK_.call(null,d))?diffs__$2:(function(){throw cljs.core.ex_info.call(null,"This should not have happened",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"exp","exp",-261706262),exp__$3,new cljs.core.Keyword(null,"act","act",190231886),act__$3], null))})()
)));
var G__58244 = ks__$2;
var G__58245 = exp__$3;
var G__58246 = act__$3;
var G__58247 = cljs.core.PersistentVector.EMPTY;
var G__58248 = diffs__$3;
G__58232__$1 = G__58244;
exp__$2 = G__58245;
act__$2 = G__58246;
path__$1 = G__58247;
diffs__$1 = G__58248;
continue;
}
}
break;
}
});
untangled_spec.diff.seq_diff = (function untangled_spec$diff$seq_diff(exp,act){
var exp_count = cljs.core.count.call(null,exp);
var act_count = cljs.core.count.call(null,act);
var G__58289 = cljs.core.range.call(null);
var vec__58292 = G__58289;
var seq__58293 = cljs.core.seq.call(null,vec__58292);
var first__58294 = cljs.core.first.call(null,seq__58293);
var seq__58293__$1 = cljs.core.next.call(null,seq__58293);
var i = first__58294;
var is = seq__58293__$1;
var G__58290 = exp;
var vec__58295 = G__58290;
var seq__58296 = cljs.core.seq.call(null,vec__58295);
var first__58297 = cljs.core.first.call(null,seq__58296);
var seq__58296__$1 = cljs.core.next.call(null,seq__58296);
var e = first__58297;
var es = seq__58296__$1;
var exp__$1 = vec__58295;
var G__58291 = act;
var vec__58298 = G__58291;
var seq__58299 = cljs.core.seq.call(null,vec__58298);
var first__58300 = cljs.core.first.call(null,seq__58299);
var seq__58299__$1 = cljs.core.next.call(null,seq__58299);
var a = first__58300;
var as = seq__58299__$1;
var act__$1 = vec__58298;
var diffs = cljs.core.PersistentArrayMap.EMPTY;
var G__58289__$1 = G__58289;
var G__58290__$1 = G__58290;
var G__58291__$1 = G__58291;
var diffs__$1 = diffs;
while(true){
var vec__58301 = G__58289__$1;
var seq__58302 = cljs.core.seq.call(null,vec__58301);
var first__58303 = cljs.core.first.call(null,seq__58302);
var seq__58302__$1 = cljs.core.next.call(null,seq__58302);
var i__$1 = first__58303;
var is__$1 = seq__58302__$1;
var vec__58304 = G__58290__$1;
var seq__58305 = cljs.core.seq.call(null,vec__58304);
var first__58306 = cljs.core.first.call(null,seq__58305);
var seq__58305__$1 = cljs.core.next.call(null,seq__58305);
var e__$1 = first__58306;
var es__$1 = seq__58305__$1;
var exp__$2 = vec__58304;
var vec__58307 = G__58291__$1;
var seq__58308 = cljs.core.seq.call(null,vec__58307);
var first__58309 = cljs.core.first.call(null,seq__58308);
var seq__58308__$1 = cljs.core.next.call(null,seq__58308);
var a__$1 = first__58309;
var as__$1 = seq__58308__$1;
var act__$2 = vec__58307;
var diffs__$2 = diffs__$1;
if((cljs.core.seq.call(null,exp__$2)) && (cljs.core.seq.call(null,act__$2)) && (cljs.core.not_EQ_.call(null,e__$1,a__$1))){
var d = untangled_spec.diff.diff.call(null,e__$1,a__$1,new cljs.core.Keyword(null,"recur","recur",-437573268));
var diffs__$3 = (cljs.core.truth_(untangled_spec.diff.diff_elem_QMARK_.call(null,d))?cljs.core.assoc.call(null,diffs__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1], null),d):(cljs.core.truth_(untangled_spec.diff.diff_QMARK_.call(null,d))?untangled_spec.diff.map_keys.call(null,((function (G__58289__$1,G__58290__$1,G__58291__$1,diffs__$1,d,vec__58301,seq__58302,first__58303,seq__58302__$1,i__$1,is__$1,vec__58304,seq__58305,first__58306,seq__58305__$1,e__$1,es__$1,exp__$2,vec__58307,seq__58308,first__58309,seq__58308__$1,a__$1,as__$1,act__$2,diffs__$2,G__58289,vec__58292,seq__58293,first__58294,seq__58293__$1,i,is,G__58290,vec__58295,seq__58296,first__58297,seq__58296__$1,e,es,exp__$1,G__58291,vec__58298,seq__58299,first__58300,seq__58299__$1,a,as,act__$1,diffs,exp_count,act_count){
return (function (p1__58249_SHARP_){
return cljs.core.vec.call(null,cljs.core.cons.call(null,i__$1,p1__58249_SHARP_));
});})(G__58289__$1,G__58290__$1,G__58291__$1,diffs__$1,d,vec__58301,seq__58302,first__58303,seq__58302__$1,i__$1,is__$1,vec__58304,seq__58305,first__58306,seq__58305__$1,e__$1,es__$1,exp__$2,vec__58307,seq__58308,first__58309,seq__58308__$1,a__$1,as__$1,act__$2,diffs__$2,G__58289,vec__58292,seq__58293,first__58294,seq__58293__$1,i,is,G__58290,vec__58295,seq__58296,first__58297,seq__58296__$1,e,es,exp__$1,G__58291,vec__58298,seq__58299,first__58300,seq__58299__$1,a,as,act__$1,diffs,exp_count,act_count))
,d):((cljs.core.empty_QMARK_.call(null,d))?diffs__$2:(function(){throw cljs.core.ex_info.call(null,"This should not have happened",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"exp","exp",-261706262),exp__$2,new cljs.core.Keyword(null,"act","act",190231886),act__$2], null))})()
)));
var G__58310 = is__$1;
var G__58311 = es__$1;
var G__58312 = as__$1;
var G__58313 = diffs__$3;
G__58289__$1 = G__58310;
G__58290__$1 = G__58311;
G__58291__$1 = G__58312;
diffs__$1 = G__58313;
continue;
} else {
if((cljs.core.seq.call(null,exp__$2)) && ((i__$1 >= act_count))){
var G__58314 = is__$1;
var G__58315 = es__$1;
var G__58316 = as__$1;
var G__58317 = cljs.core.assoc.call(null,diffs__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1], null),untangled_spec.diff.diff_elem.call(null,e__$1,untangled_spec.diff.nf));
G__58289__$1 = G__58314;
G__58290__$1 = G__58315;
G__58291__$1 = G__58316;
diffs__$1 = G__58317;
continue;
} else {
if(((i__$1 >= exp_count)) && (cljs.core.seq.call(null,act__$2))){
var G__58318 = is__$1;
var G__58319 = es__$1;
var G__58320 = as__$1;
var G__58321 = cljs.core.assoc.call(null,diffs__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1], null),untangled_spec.diff.diff_elem.call(null,untangled_spec.diff.nf,a__$1));
G__58289__$1 = G__58318;
G__58290__$1 = G__58319;
G__58291__$1 = G__58320;
diffs__$1 = G__58321;
continue;
} else {
if(((i__$1 >= exp_count)) && ((i__$1 >= act_count))){
return diffs__$2;
} else {
var G__58322 = is__$1;
var G__58323 = es__$1;
var G__58324 = as__$1;
var G__58325 = diffs__$2;
G__58289__$1 = G__58322;
G__58290__$1 = G__58323;
G__58291__$1 = G__58324;
diffs__$1 = G__58325;
continue;

}
}
}
}
break;
}
});
untangled_spec.diff.set_diff = (function untangled_spec$diff$set_diff(exp,act){
var missing_from_act = clojure.set.difference.call(null,act,exp);
var missing_from_exp = clojure.set.difference.call(null,exp,act);
if((cljs.core.seq.call(null,missing_from_act)) || (cljs.core.seq.call(null,missing_from_exp))){
return untangled_spec.diff.diff_elem.call(null,missing_from_exp,missing_from_act);
} else {
return untangled_spec.diff.diff_elem.call(null);
}
});
untangled_spec.diff.diff = (function untangled_spec$diff$diff(var_args){
var args__35783__auto__ = [];
var len__35776__auto___58337 = arguments.length;
var i__35777__auto___58338 = (0);
while(true){
if((i__35777__auto___58338 < len__35776__auto___58337)){
args__35783__auto__.push((arguments[i__35777__auto___58338]));

var G__58339 = (i__35777__auto___58338 + (1));
i__35777__auto___58338 = G__58339;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled_spec.diff.diff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled_spec.diff.diff.cljs$core$IFn$_invoke$arity$variadic = (function (exp,act,p__58330){
var vec__58331 = p__58330;
var opt = cljs.core.nth.call(null,vec__58331,(0),null);
var recur_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recur","recur",-437573268),null], null), null).call(null,opt);
var G__58334 = ((cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,act], null)))?untangled_spec.diff.map_diff.call(null,cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,act], null)))),exp,act):((cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,act], null)))?untangled_spec.diff.diff_elem.call(null,exp,act):((cljs.core.every_QMARK_.call(null,cljs.core.set_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,act], null)))?(function (){var G__58335 = untangled_spec.diff.set_diff.call(null,exp,act);
if(cljs.core.not.call(null,recur_QMARK_)){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,G__58335);
} else {
return G__58335;
}
})():((cljs.core.every_QMARK_.call(null,cljs.core.sequential_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,act], null)))?untangled_spec.diff.seq_diff.call(null,exp,act):((cljs.core.not_EQ_.call(null,cljs.core.type.call(null,exp),cljs.core.type.call(null,act)))?untangled_spec.diff.diff_elem.call(null,exp,act):((cljs.core.every_QMARK_.call(null,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,act], null)))?untangled_spec.diff.seq_diff.call(null,exp,act):((cljs.core.not.call(null,recur_QMARK_))?cljs.core.PersistentArrayMap.EMPTY:((cljs.core.not_EQ_.call(null,exp,act))?untangled_spec.diff.diff_elem.call(null,exp,act):cljs.core.PersistentVector.EMPTY
))))))));
if(cljs.core.not.call(null,recur_QMARK_)){
return ((function (G__58334,recur_QMARK_,vec__58331,opt){
return (function (p1__58326_SHARP_){
var G__58336 = p1__58326_SHARP_;
if(cljs.core.truth_(untangled_spec.diff.diff_elem_QMARK_.call(null,p1__58326_SHARP_))){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,G__58336);
} else {
return G__58336;
}
});})(G__58334,recur_QMARK_,vec__58331,opt))
.call(null,G__58334);
} else {
return G__58334;
}
});

untangled_spec.diff.diff.cljs$lang$maxFixedArity = (2);

untangled_spec.diff.diff.cljs$lang$applyTo = (function (seq58327){
var G__58328 = cljs.core.first.call(null,seq58327);
var seq58327__$1 = cljs.core.next.call(null,seq58327);
var G__58329 = cljs.core.first.call(null,seq58327__$1);
var seq58327__$2 = cljs.core.next.call(null,seq58327__$1);
return untangled_spec.diff.diff.cljs$core$IFn$_invoke$arity$variadic(G__58328,G__58329,seq58327__$2);
});

untangled_spec.diff.patch = (function untangled_spec$diff$patch(var_args){
var args58342 = [];
var len__35776__auto___58354 = arguments.length;
var i__35777__auto___58355 = (0);
while(true){
if((i__35777__auto___58355 < len__35776__auto___58354)){
args58342.push((arguments[i__35777__auto___58355]));

var G__58356 = (i__35777__auto___58355 + (1));
i__35777__auto___58355 = G__58356;
continue;
} else {
}
break;
}

var G__58344 = args58342.length;
switch (G__58344) {
case 2:
return untangled_spec.diff.patch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return untangled_spec.diff.patch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58342.length)].join('')));

}
});

untangled_spec.diff.patch.cljs$core$IFn$_invoke$arity$2 = (function (x,diffs){
return untangled_spec.diff.patch.call(null,x,diffs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-exp","get-exp",-633423573),(function untangled_spec$diff$not_a_nf_diff(d){
var map__58347 = untangled_spec.diff.extract.call(null,d);
var map__58347__$1 = ((((!((map__58347 == null)))?((((map__58347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58347):map__58347);
var exp = cljs.core.get.call(null,map__58347__$1,new cljs.core.Keyword(null,"exp","exp",-261706262));
if(cljs.core._EQ_.call(null,untangled_spec.diff.nf,exp)){
return null;
} else {
return exp;
}
})], null));
});

untangled_spec.diff.patch.cljs$core$IFn$_invoke$arity$3 = (function (x,diffs,p__58349){
var map__58350 = p__58349;
var map__58350__$1 = ((((!((map__58350 == null)))?((((map__58350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58350):map__58350);
var get_exp = cljs.core.get.call(null,map__58350__$1,new cljs.core.Keyword(null,"get-exp","get-exp",-633423573),cljs.core.comp.call(null,new cljs.core.Keyword(null,"exp","exp",-261706262),untangled_spec.diff.extract));
var list__GT_lvec = ((function (map__58350,map__58350__$1,get_exp){
return (function (p1__58340_SHARP_){
var G__58352 = p1__58340_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__58340_SHARP_)){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,G__58352),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("untangled-spec.diff","list","untangled-spec.diff/list",-587789846),true], null));
} else {
return G__58352;
}
});})(map__58350,map__58350__$1,get_exp))
;
var lvec__GT_list = ((function (list__GT_lvec,map__58350,map__58350__$1,get_exp){
return (function (p1__58341_SHARP_){
var G__58353 = p1__58341_SHARP_;
if((cljs.core.vector_QMARK_.call(null,p1__58341_SHARP_)) && (new cljs.core.Keyword("untangled-spec.diff","list","untangled-spec.diff/list",-587789846).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__58341_SHARP_)) === true)){
return cljs.core.vec.call(null,G__58353);
} else {
return G__58353;
}
});})(list__GT_lvec,map__58350,map__58350__$1,get_exp))
;
var _LT__GT_ = x;
var _LT__GT___$1 = clojure.walk.prewalk.call(null,list__GT_lvec,_LT__GT_);
var _LT__GT___$2 = cljs.core.reduce.call(null,((function (_LT__GT_,_LT__GT___$1,list__GT_lvec,lvec__GT_list,map__58350,map__58350__$1,get_exp){
return (function (x__$1,d){
var path = cljs.core.seq.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(untangled_spec.diff.extract.call(null,d)));
var exp = get_exp.call(null,d);
if(cljs.core.not.call(null,path)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,exp]);
} else {
if(cljs.core.truth_(exp)){
return cljs.core.assoc_in.call(null,x__$1,path,exp);
} else {
if(((exp == null)) && (!(cljs.core.map_QMARK_.call(null,x__$1)))){
return cljs.core.assoc_in.call(null,x__$1,path,null);
} else {
var temp__6751__auto__ = cljs.core.seq.call(null,cljs.core.drop_last.call(null,path));
if(temp__6751__auto__){
var path_SINGLEQUOTE_ = temp__6751__auto__;
return cljs.core.update_in.call(null,x__$1,path_SINGLEQUOTE_,cljs.core.dissoc,cljs.core.last.call(null,path));
} else {
return cljs.core.dissoc.call(null,x__$1,cljs.core.last.call(null,path));
}

}
}
}
});})(_LT__GT_,_LT__GT___$1,list__GT_lvec,lvec__GT_list,map__58350,map__58350__$1,get_exp))
,_LT__GT___$1,diffs);
return clojure.walk.prewalk.call(null,lvec__GT_list,_LT__GT___$2);
});

untangled_spec.diff.patch.cljs$lang$maxFixedArity = 3;

untangled_spec.diff.compress = (function untangled_spec$diff$compress(p__58358){
var vec__58362 = p__58358;
var seq__58363 = cljs.core.seq.call(null,vec__58362);
var first__58364 = cljs.core.first.call(null,seq__58363);
var seq__58363__$1 = cljs.core.next.call(null,seq__58363);
var x = first__58364;
var _ = seq__58363__$1;
var coll = vec__58362;
var diff_STAR_ = cljs.core.partial.call(null,cljs.core.apply,untangled_spec.diff.diff);
return cljs.core.into.call(null,cljs.core.empty.call(null,coll),cljs.core.cons.call(null,x,cljs.core.map.call(null,cljs.core.comp.call(null,diff_STAR_,cljs.core.reverse),cljs.core.partition.call(null,(2),(1),coll))));
});
untangled_spec.diff.decompress = (function untangled_spec$diff$decompress(p__58365){
var vec__58369 = p__58365;
var seq__58370 = cljs.core.seq.call(null,vec__58369);
var first__58371 = cljs.core.first.call(null,seq__58370);
var seq__58370__$1 = cljs.core.next.call(null,seq__58370);
var x = first__58371;
var xs = seq__58370__$1;
var coll = vec__58369;
return cljs.core.into.call(null,cljs.core.empty.call(null,coll),cljs.core.reductions.call(null,untangled_spec.diff.patch,x,xs));
});

//# sourceMappingURL=diff.js.map?rel=1491640773700