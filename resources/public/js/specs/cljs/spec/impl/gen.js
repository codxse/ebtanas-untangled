// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45464 = arguments.length;
var i__35777__auto___45465 = (0);
while(true){
if((i__35777__auto___45465 < len__35776__auto___45464)){
args__35783__auto__.push((arguments[i__35777__auto___45465]));

var G__45466 = (i__35777__auto___45465 + (1));
i__35777__auto___45465 = G__45466;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq45463){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45463));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45468 = arguments.length;
var i__35777__auto___45469 = (0);
while(true){
if((i__35777__auto___45469 < len__35776__auto___45468)){
args__35783__auto__.push((arguments[i__35777__auto___45469]));

var G__45470 = (i__35777__auto___45469 + (1));
i__35777__auto___45469 = G__45470;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq45467){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45467));
});

var g_QMARK__45471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_45472 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__45471){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__45471))
,null));
var mkg_45473 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__45471,g_45472){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__45471,g_45472))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__45471,g_45472,mkg_45473){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__45471).call(null,x);
});})(g_QMARK__45471,g_45472,mkg_45473))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__45471,g_45472,mkg_45473){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_45473).call(null,gfn);
});})(g_QMARK__45471,g_45472,mkg_45473))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__45471,g_45472,mkg_45473){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_45472).call(null,generator);
});})(g_QMARK__45471,g_45472,mkg_45473))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__45435__auto___45493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__45435__auto___45493){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45494 = arguments.length;
var i__35777__auto___45495 = (0);
while(true){
if((i__35777__auto___45495 < len__35776__auto___45494)){
args__35783__auto__.push((arguments[i__35777__auto___45495]));

var G__45496 = (i__35777__auto___45495 + (1));
i__35777__auto___45495 = G__45496;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45493))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45493){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45493),args);
});})(g__45435__auto___45493))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__45435__auto___45493){
return (function (seq45474){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45474));
});})(g__45435__auto___45493))
;


var g__45435__auto___45497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__45435__auto___45497){
return (function cljs$spec$impl$gen$list(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45498 = arguments.length;
var i__35777__auto___45499 = (0);
while(true){
if((i__35777__auto___45499 < len__35776__auto___45498)){
args__35783__auto__.push((arguments[i__35777__auto___45499]));

var G__45500 = (i__35777__auto___45499 + (1));
i__35777__auto___45499 = G__45500;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45497))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45497){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45497),args);
});})(g__45435__auto___45497))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__45435__auto___45497){
return (function (seq45475){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45475));
});})(g__45435__auto___45497))
;


var g__45435__auto___45501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__45435__auto___45501){
return (function cljs$spec$impl$gen$map(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45502 = arguments.length;
var i__35777__auto___45503 = (0);
while(true){
if((i__35777__auto___45503 < len__35776__auto___45502)){
args__35783__auto__.push((arguments[i__35777__auto___45503]));

var G__45504 = (i__35777__auto___45503 + (1));
i__35777__auto___45503 = G__45504;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45501))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45501){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45501),args);
});})(g__45435__auto___45501))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__45435__auto___45501){
return (function (seq45476){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45476));
});})(g__45435__auto___45501))
;


var g__45435__auto___45505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__45435__auto___45505){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45506 = arguments.length;
var i__35777__auto___45507 = (0);
while(true){
if((i__35777__auto___45507 < len__35776__auto___45506)){
args__35783__auto__.push((arguments[i__35777__auto___45507]));

var G__45508 = (i__35777__auto___45507 + (1));
i__35777__auto___45507 = G__45508;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45505))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45505),args);
});})(g__45435__auto___45505))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__45435__auto___45505){
return (function (seq45477){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45477));
});})(g__45435__auto___45505))
;


var g__45435__auto___45509 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__45435__auto___45509){
return (function cljs$spec$impl$gen$set(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45510 = arguments.length;
var i__35777__auto___45511 = (0);
while(true){
if((i__35777__auto___45511 < len__35776__auto___45510)){
args__35783__auto__.push((arguments[i__35777__auto___45511]));

var G__45512 = (i__35777__auto___45511 + (1));
i__35777__auto___45511 = G__45512;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45509))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45509),args);
});})(g__45435__auto___45509))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__45435__auto___45509){
return (function (seq45478){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45478));
});})(g__45435__auto___45509))
;


var g__45435__auto___45513 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__45435__auto___45513){
return (function cljs$spec$impl$gen$vector(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45514 = arguments.length;
var i__35777__auto___45515 = (0);
while(true){
if((i__35777__auto___45515 < len__35776__auto___45514)){
args__35783__auto__.push((arguments[i__35777__auto___45515]));

var G__45516 = (i__35777__auto___45515 + (1));
i__35777__auto___45515 = G__45516;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45513))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45513),args);
});})(g__45435__auto___45513))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__45435__auto___45513){
return (function (seq45479){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45479));
});})(g__45435__auto___45513))
;


var g__45435__auto___45517 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__45435__auto___45517){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45518 = arguments.length;
var i__35777__auto___45519 = (0);
while(true){
if((i__35777__auto___45519 < len__35776__auto___45518)){
args__35783__auto__.push((arguments[i__35777__auto___45519]));

var G__45520 = (i__35777__auto___45519 + (1));
i__35777__auto___45519 = G__45520;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45517))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45517),args);
});})(g__45435__auto___45517))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__45435__auto___45517){
return (function (seq45480){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45480));
});})(g__45435__auto___45517))
;


var g__45435__auto___45521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__45435__auto___45521){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45522 = arguments.length;
var i__35777__auto___45523 = (0);
while(true){
if((i__35777__auto___45523 < len__35776__auto___45522)){
args__35783__auto__.push((arguments[i__35777__auto___45523]));

var G__45524 = (i__35777__auto___45523 + (1));
i__35777__auto___45523 = G__45524;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45521))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45521),args);
});})(g__45435__auto___45521))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__45435__auto___45521){
return (function (seq45481){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45481));
});})(g__45435__auto___45521))
;


var g__45435__auto___45525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__45435__auto___45525){
return (function cljs$spec$impl$gen$elements(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45526 = arguments.length;
var i__35777__auto___45527 = (0);
while(true){
if((i__35777__auto___45527 < len__35776__auto___45526)){
args__35783__auto__.push((arguments[i__35777__auto___45527]));

var G__45528 = (i__35777__auto___45527 + (1));
i__35777__auto___45527 = G__45528;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45525))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45525),args);
});})(g__45435__auto___45525))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__45435__auto___45525){
return (function (seq45482){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45482));
});})(g__45435__auto___45525))
;


var g__45435__auto___45529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__45435__auto___45529){
return (function cljs$spec$impl$gen$bind(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45530 = arguments.length;
var i__35777__auto___45531 = (0);
while(true){
if((i__35777__auto___45531 < len__35776__auto___45530)){
args__35783__auto__.push((arguments[i__35777__auto___45531]));

var G__45532 = (i__35777__auto___45531 + (1));
i__35777__auto___45531 = G__45532;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45529))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45529){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45529),args);
});})(g__45435__auto___45529))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__45435__auto___45529){
return (function (seq45483){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45483));
});})(g__45435__auto___45529))
;


var g__45435__auto___45533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__45435__auto___45533){
return (function cljs$spec$impl$gen$choose(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45534 = arguments.length;
var i__35777__auto___45535 = (0);
while(true){
if((i__35777__auto___45535 < len__35776__auto___45534)){
args__35783__auto__.push((arguments[i__35777__auto___45535]));

var G__45536 = (i__35777__auto___45535 + (1));
i__35777__auto___45535 = G__45536;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45533))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45533){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45533),args);
});})(g__45435__auto___45533))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__45435__auto___45533){
return (function (seq45484){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45484));
});})(g__45435__auto___45533))
;


var g__45435__auto___45537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__45435__auto___45537){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45538 = arguments.length;
var i__35777__auto___45539 = (0);
while(true){
if((i__35777__auto___45539 < len__35776__auto___45538)){
args__35783__auto__.push((arguments[i__35777__auto___45539]));

var G__45540 = (i__35777__auto___45539 + (1));
i__35777__auto___45539 = G__45540;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45537))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45537),args);
});})(g__45435__auto___45537))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__45435__auto___45537){
return (function (seq45485){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45485));
});})(g__45435__auto___45537))
;


var g__45435__auto___45541 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__45435__auto___45541){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45542 = arguments.length;
var i__35777__auto___45543 = (0);
while(true){
if((i__35777__auto___45543 < len__35776__auto___45542)){
args__35783__auto__.push((arguments[i__35777__auto___45543]));

var G__45544 = (i__35777__auto___45543 + (1));
i__35777__auto___45543 = G__45544;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45541))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45541){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45541),args);
});})(g__45435__auto___45541))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__45435__auto___45541){
return (function (seq45486){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45486));
});})(g__45435__auto___45541))
;


var g__45435__auto___45545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__45435__auto___45545){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45546 = arguments.length;
var i__35777__auto___45547 = (0);
while(true){
if((i__35777__auto___45547 < len__35776__auto___45546)){
args__35783__auto__.push((arguments[i__35777__auto___45547]));

var G__45548 = (i__35777__auto___45547 + (1));
i__35777__auto___45547 = G__45548;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45545))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45545),args);
});})(g__45435__auto___45545))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__45435__auto___45545){
return (function (seq45487){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45487));
});})(g__45435__auto___45545))
;


var g__45435__auto___45549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__45435__auto___45549){
return (function cljs$spec$impl$gen$sample(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45550 = arguments.length;
var i__35777__auto___45551 = (0);
while(true){
if((i__35777__auto___45551 < len__35776__auto___45550)){
args__35783__auto__.push((arguments[i__35777__auto___45551]));

var G__45552 = (i__35777__auto___45551 + (1));
i__35777__auto___45551 = G__45552;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45549))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45549),args);
});})(g__45435__auto___45549))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__45435__auto___45549){
return (function (seq45488){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45488));
});})(g__45435__auto___45549))
;


var g__45435__auto___45553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__45435__auto___45553){
return (function cljs$spec$impl$gen$return(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45554 = arguments.length;
var i__35777__auto___45555 = (0);
while(true){
if((i__35777__auto___45555 < len__35776__auto___45554)){
args__35783__auto__.push((arguments[i__35777__auto___45555]));

var G__45556 = (i__35777__auto___45555 + (1));
i__35777__auto___45555 = G__45556;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45553))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45553),args);
});})(g__45435__auto___45553))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__45435__auto___45553){
return (function (seq45489){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45489));
});})(g__45435__auto___45553))
;


var g__45435__auto___45557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__45435__auto___45557){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45558 = arguments.length;
var i__35777__auto___45559 = (0);
while(true){
if((i__35777__auto___45559 < len__35776__auto___45558)){
args__35783__auto__.push((arguments[i__35777__auto___45559]));

var G__45560 = (i__35777__auto___45559 + (1));
i__35777__auto___45559 = G__45560;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45557))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45557),args);
});})(g__45435__auto___45557))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__45435__auto___45557){
return (function (seq45490){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45490));
});})(g__45435__auto___45557))
;


var g__45435__auto___45561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__45435__auto___45561){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45562 = arguments.length;
var i__35777__auto___45563 = (0);
while(true){
if((i__35777__auto___45563 < len__35776__auto___45562)){
args__35783__auto__.push((arguments[i__35777__auto___45563]));

var G__45564 = (i__35777__auto___45563 + (1));
i__35777__auto___45563 = G__45564;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45561))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45561),args);
});})(g__45435__auto___45561))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__45435__auto___45561){
return (function (seq45491){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45491));
});})(g__45435__auto___45561))
;


var g__45435__auto___45565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__45435__auto___45565){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45566 = arguments.length;
var i__35777__auto___45567 = (0);
while(true){
if((i__35777__auto___45567 < len__35776__auto___45566)){
args__35783__auto__.push((arguments[i__35777__auto___45567]));

var G__45568 = (i__35777__auto___45567 + (1));
i__35777__auto___45567 = G__45568;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45435__auto___45565))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45435__auto___45565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45435__auto___45565),args);
});})(g__45435__auto___45565))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__45435__auto___45565){
return (function (seq45492){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45492));
});})(g__45435__auto___45565))
;

var g__45448__auto___45590 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__45448__auto___45590){
return (function cljs$spec$impl$gen$any(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45591 = arguments.length;
var i__35777__auto___45592 = (0);
while(true){
if((i__35777__auto___45592 < len__35776__auto___45591)){
args__35783__auto__.push((arguments[i__35777__auto___45592]));

var G__45593 = (i__35777__auto___45592 + (1));
i__35777__auto___45592 = G__45593;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45590))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45590){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45590);
});})(g__45448__auto___45590))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__45448__auto___45590){
return (function (seq45569){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45569));
});})(g__45448__auto___45590))
;


var g__45448__auto___45594 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__45448__auto___45594){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45595 = arguments.length;
var i__35777__auto___45596 = (0);
while(true){
if((i__35777__auto___45596 < len__35776__auto___45595)){
args__35783__auto__.push((arguments[i__35777__auto___45596]));

var G__45597 = (i__35777__auto___45596 + (1));
i__35777__auto___45596 = G__45597;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45594))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45594){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45594);
});})(g__45448__auto___45594))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__45448__auto___45594){
return (function (seq45570){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45570));
});})(g__45448__auto___45594))
;


var g__45448__auto___45598 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__45448__auto___45598){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45599 = arguments.length;
var i__35777__auto___45600 = (0);
while(true){
if((i__35777__auto___45600 < len__35776__auto___45599)){
args__35783__auto__.push((arguments[i__35777__auto___45600]));

var G__45601 = (i__35777__auto___45600 + (1));
i__35777__auto___45600 = G__45601;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45598))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45598){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45598);
});})(g__45448__auto___45598))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__45448__auto___45598){
return (function (seq45571){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45571));
});})(g__45448__auto___45598))
;


var g__45448__auto___45602 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__45448__auto___45602){
return (function cljs$spec$impl$gen$char(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45603 = arguments.length;
var i__35777__auto___45604 = (0);
while(true){
if((i__35777__auto___45604 < len__35776__auto___45603)){
args__35783__auto__.push((arguments[i__35777__auto___45604]));

var G__45605 = (i__35777__auto___45604 + (1));
i__35777__auto___45604 = G__45605;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45602))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45602){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45602);
});})(g__45448__auto___45602))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__45448__auto___45602){
return (function (seq45572){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45572));
});})(g__45448__auto___45602))
;


var g__45448__auto___45606 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__45448__auto___45606){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45607 = arguments.length;
var i__35777__auto___45608 = (0);
while(true){
if((i__35777__auto___45608 < len__35776__auto___45607)){
args__35783__auto__.push((arguments[i__35777__auto___45608]));

var G__45609 = (i__35777__auto___45608 + (1));
i__35777__auto___45608 = G__45609;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45606))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45606){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45606);
});})(g__45448__auto___45606))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__45448__auto___45606){
return (function (seq45573){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45573));
});})(g__45448__auto___45606))
;


var g__45448__auto___45610 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__45448__auto___45610){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45611 = arguments.length;
var i__35777__auto___45612 = (0);
while(true){
if((i__35777__auto___45612 < len__35776__auto___45611)){
args__35783__auto__.push((arguments[i__35777__auto___45612]));

var G__45613 = (i__35777__auto___45612 + (1));
i__35777__auto___45612 = G__45613;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45610))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45610){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45610);
});})(g__45448__auto___45610))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__45448__auto___45610){
return (function (seq45574){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45574));
});})(g__45448__auto___45610))
;


var g__45448__auto___45614 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__45448__auto___45614){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45615 = arguments.length;
var i__35777__auto___45616 = (0);
while(true){
if((i__35777__auto___45616 < len__35776__auto___45615)){
args__35783__auto__.push((arguments[i__35777__auto___45616]));

var G__45617 = (i__35777__auto___45616 + (1));
i__35777__auto___45616 = G__45617;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45614))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45614){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45614);
});})(g__45448__auto___45614))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__45448__auto___45614){
return (function (seq45575){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45575));
});})(g__45448__auto___45614))
;


var g__45448__auto___45618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__45448__auto___45618){
return (function cljs$spec$impl$gen$double(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45619 = arguments.length;
var i__35777__auto___45620 = (0);
while(true){
if((i__35777__auto___45620 < len__35776__auto___45619)){
args__35783__auto__.push((arguments[i__35777__auto___45620]));

var G__45621 = (i__35777__auto___45620 + (1));
i__35777__auto___45620 = G__45621;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45618))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45618){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45618);
});})(g__45448__auto___45618))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__45448__auto___45618){
return (function (seq45576){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45576));
});})(g__45448__auto___45618))
;


var g__45448__auto___45622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__45448__auto___45622){
return (function cljs$spec$impl$gen$int(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45623 = arguments.length;
var i__35777__auto___45624 = (0);
while(true){
if((i__35777__auto___45624 < len__35776__auto___45623)){
args__35783__auto__.push((arguments[i__35777__auto___45624]));

var G__45625 = (i__35777__auto___45624 + (1));
i__35777__auto___45624 = G__45625;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45622))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45622){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45622);
});})(g__45448__auto___45622))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__45448__auto___45622){
return (function (seq45577){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45577));
});})(g__45448__auto___45622))
;


var g__45448__auto___45626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__45448__auto___45626){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45627 = arguments.length;
var i__35777__auto___45628 = (0);
while(true){
if((i__35777__auto___45628 < len__35776__auto___45627)){
args__35783__auto__.push((arguments[i__35777__auto___45628]));

var G__45629 = (i__35777__auto___45628 + (1));
i__35777__auto___45628 = G__45629;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45626))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45626){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45626);
});})(g__45448__auto___45626))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__45448__auto___45626){
return (function (seq45578){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45578));
});})(g__45448__auto___45626))
;


var g__45448__auto___45630 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__45448__auto___45630){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45631 = arguments.length;
var i__35777__auto___45632 = (0);
while(true){
if((i__35777__auto___45632 < len__35776__auto___45631)){
args__35783__auto__.push((arguments[i__35777__auto___45632]));

var G__45633 = (i__35777__auto___45632 + (1));
i__35777__auto___45632 = G__45633;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45630))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45630){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45630);
});})(g__45448__auto___45630))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__45448__auto___45630){
return (function (seq45579){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45579));
});})(g__45448__auto___45630))
;


var g__45448__auto___45634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__45448__auto___45634){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45635 = arguments.length;
var i__35777__auto___45636 = (0);
while(true){
if((i__35777__auto___45636 < len__35776__auto___45635)){
args__35783__auto__.push((arguments[i__35777__auto___45636]));

var G__45637 = (i__35777__auto___45636 + (1));
i__35777__auto___45636 = G__45637;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45634))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45634){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45634);
});})(g__45448__auto___45634))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__45448__auto___45634){
return (function (seq45580){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45580));
});})(g__45448__auto___45634))
;


var g__45448__auto___45638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__45448__auto___45638){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45639 = arguments.length;
var i__35777__auto___45640 = (0);
while(true){
if((i__35777__auto___45640 < len__35776__auto___45639)){
args__35783__auto__.push((arguments[i__35777__auto___45640]));

var G__45641 = (i__35777__auto___45640 + (1));
i__35777__auto___45640 = G__45641;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45638))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45638){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45638);
});})(g__45448__auto___45638))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__45448__auto___45638){
return (function (seq45581){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45581));
});})(g__45448__auto___45638))
;


var g__45448__auto___45642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__45448__auto___45642){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45643 = arguments.length;
var i__35777__auto___45644 = (0);
while(true){
if((i__35777__auto___45644 < len__35776__auto___45643)){
args__35783__auto__.push((arguments[i__35777__auto___45644]));

var G__45645 = (i__35777__auto___45644 + (1));
i__35777__auto___45644 = G__45645;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45642))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45642){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45642);
});})(g__45448__auto___45642))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__45448__auto___45642){
return (function (seq45582){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45582));
});})(g__45448__auto___45642))
;


var g__45448__auto___45646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__45448__auto___45646){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45647 = arguments.length;
var i__35777__auto___45648 = (0);
while(true){
if((i__35777__auto___45648 < len__35776__auto___45647)){
args__35783__auto__.push((arguments[i__35777__auto___45648]));

var G__45649 = (i__35777__auto___45648 + (1));
i__35777__auto___45648 = G__45649;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45646))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45646){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45646);
});})(g__45448__auto___45646))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__45448__auto___45646){
return (function (seq45583){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45583));
});})(g__45448__auto___45646))
;


var g__45448__auto___45650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__45448__auto___45650){
return (function cljs$spec$impl$gen$string(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45651 = arguments.length;
var i__35777__auto___45652 = (0);
while(true){
if((i__35777__auto___45652 < len__35776__auto___45651)){
args__35783__auto__.push((arguments[i__35777__auto___45652]));

var G__45653 = (i__35777__auto___45652 + (1));
i__35777__auto___45652 = G__45653;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45650))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45650){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45650);
});})(g__45448__auto___45650))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__45448__auto___45650){
return (function (seq45584){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45584));
});})(g__45448__auto___45650))
;


var g__45448__auto___45654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__45448__auto___45654){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45655 = arguments.length;
var i__35777__auto___45656 = (0);
while(true){
if((i__35777__auto___45656 < len__35776__auto___45655)){
args__35783__auto__.push((arguments[i__35777__auto___45656]));

var G__45657 = (i__35777__auto___45656 + (1));
i__35777__auto___45656 = G__45657;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45654))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45654){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45654);
});})(g__45448__auto___45654))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__45448__auto___45654){
return (function (seq45585){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45585));
});})(g__45448__auto___45654))
;


var g__45448__auto___45658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__45448__auto___45658){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45659 = arguments.length;
var i__35777__auto___45660 = (0);
while(true){
if((i__35777__auto___45660 < len__35776__auto___45659)){
args__35783__auto__.push((arguments[i__35777__auto___45660]));

var G__45661 = (i__35777__auto___45660 + (1));
i__35777__auto___45660 = G__45661;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45658))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45658){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45658);
});})(g__45448__auto___45658))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__45448__auto___45658){
return (function (seq45586){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45586));
});})(g__45448__auto___45658))
;


var g__45448__auto___45662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__45448__auto___45662){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45663 = arguments.length;
var i__35777__auto___45664 = (0);
while(true){
if((i__35777__auto___45664 < len__35776__auto___45663)){
args__35783__auto__.push((arguments[i__35777__auto___45664]));

var G__45665 = (i__35777__auto___45664 + (1));
i__35777__auto___45664 = G__45665;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45662))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45662){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45662);
});})(g__45448__auto___45662))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__45448__auto___45662){
return (function (seq45587){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45587));
});})(g__45448__auto___45662))
;


var g__45448__auto___45666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__45448__auto___45666){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45667 = arguments.length;
var i__35777__auto___45668 = (0);
while(true){
if((i__35777__auto___45668 < len__35776__auto___45667)){
args__35783__auto__.push((arguments[i__35777__auto___45668]));

var G__45669 = (i__35777__auto___45668 + (1));
i__35777__auto___45668 = G__45669;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45666))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45666){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45666);
});})(g__45448__auto___45666))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__45448__auto___45666){
return (function (seq45588){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45588));
});})(g__45448__auto___45666))
;


var g__45448__auto___45670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__45448__auto___45670){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45671 = arguments.length;
var i__35777__auto___45672 = (0);
while(true){
if((i__35777__auto___45672 < len__35776__auto___45671)){
args__35783__auto__.push((arguments[i__35777__auto___45672]));

var G__45673 = (i__35777__auto___45672 + (1));
i__35777__auto___45672 = G__45673;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});})(g__45448__auto___45670))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45448__auto___45670){
return (function (args){
return cljs.core.deref.call(null,g__45448__auto___45670);
});})(g__45448__auto___45670))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__45448__auto___45670){
return (function (seq45589){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45589));
});})(g__45448__auto___45670))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45676 = arguments.length;
var i__35777__auto___45677 = (0);
while(true){
if((i__35777__auto___45677 < len__35776__auto___45676)){
args__35783__auto__.push((arguments[i__35777__auto___45677]));

var G__45678 = (i__35777__auto___45677 + (1));
i__35777__auto___45677 = G__45678;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__45674_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__45674_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq45675){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45675));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__45679_SHARP_){
return (new Date(p1__45679_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1491640760117