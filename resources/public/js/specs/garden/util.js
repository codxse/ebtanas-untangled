// Compiled by ClojureScript 1.9.494 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__35783__auto__ = [];
var len__35776__auto___53891 = arguments.length;
var i__35777__auto___53892 = (0);
while(true){
if((i__35777__auto___53892 < len__35776__auto___53891)){
args__35783__auto__.push((arguments[i__35777__auto___53892]));

var G__53893 = (i__35777__auto___53892 + (1));
i__35777__auto___53892 = G__53893;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq53889){
var G__53890 = cljs.core.first.call(null,seq53889);
var seq53889__$1 = cljs.core.next.call(null,seq53889);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__53890,seq53889__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (garden.util.to_str[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$);
} else {
var m__35274__auto____$1 = (garden.util.to_str["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});


cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__35783__auto__ = [];
var len__35776__auto___53895 = arguments.length;
var i__35777__auto___53896 = (0);
while(true){
if((i__35777__auto___53896 < len__35776__auto___53895)){
args__35783__auto__.push((arguments[i__35777__auto___53896]));

var G__53897 = (i__35777__auto___53896 + (1));
i__35777__auto___53896 = G__53897;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq53894){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53894));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__35783__auto__ = [];
var len__35776__auto___53904 = arguments.length;
var i__35777__auto___53905 = (0);
while(true){
if((i__35777__auto___53905 < len__35776__auto___53904)){
args__35783__auto__.push((arguments[i__35777__auto___53905]));

var G__53906 = (i__35777__auto___53905 + (1));
i__35777__auto___53905 = G__53906;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__53900){
var vec__53901 = p__53900;
var radix = cljs.core.nth.call(null,vec__53901,(0),null);
var radix__$1 = (function (){var or__34555__auto__ = radix;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq53898){
var G__53899 = cljs.core.first.call(null,seq53898);
var seq53898__$1 = cljs.core.next.call(null,seq53898);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__53899,seq53898__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__35783__auto__ = [];
var len__35776__auto___53913 = arguments.length;
var i__35777__auto___53914 = (0);
while(true){
if((i__35777__auto___53914 < len__35776__auto___53913)){
args__35783__auto__.push((arguments[i__35777__auto___53914]));

var G__53915 = (i__35777__auto___53914 + (1));
i__35777__auto___53914 = G__53915;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__53909){
var vec__53910 = p__53909;
var radix = cljs.core.nth.call(null,vec__53910,(0),null);
var radix__$1 = (function (){var or__34555__auto__ = radix;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq53907){
var G__53908 = cljs.core.first.call(null,seq53907);
var seq53907__$1 = cljs.core.next.call(null,seq53907);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__53908,seq53907__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__35417__auto__ = (function garden$util$comma_join_$_iter__53920(s__53921){
return (new cljs.core.LazySeq(null,(function (){
var s__53921__$1 = s__53921;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__53921__$1);
if(temp__6753__auto__){
var s__53921__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53921__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__53921__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__53923 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__53922 = (0);
while(true){
if((i__53922 < size__35416__auto__)){
var x = cljs.core._nth.call(null,c__35415__auto__,i__53922);
cljs.core.chunk_append.call(null,b__53923,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__53924 = (i__53922 + (1));
i__53922 = G__53924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53923),garden$util$comma_join_$_iter__53920.call(null,cljs.core.chunk_rest.call(null,s__53921__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53923),null);
}
} else {
var x = cljs.core.first.call(null,s__53921__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__53920.call(null,cljs.core.rest.call(null,s__53921__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35417__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__34543__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__34543__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__34543__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__34543__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__34543__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__34543__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__34900__auto__ = a;
var y__34901__auto__ = b;
return ((x__34900__auto__ < y__34901__auto__) ? x__34900__auto__ : y__34901__auto__);
})();
var top = (function (){var x__34893__auto__ = a;
var y__34894__auto__ = b;
return ((x__34893__auto__ > y__34894__auto__) ? x__34893__auto__ : y__34894__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__53928 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__53928,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__53928,(1),null);
var x__34893__auto__ = a__$1;
var y__34894__auto__ = (function (){var x__34900__auto__ = b__$1;
var y__34901__auto__ = n;
return ((x__34900__auto__ < y__34901__auto__) ? x__34900__auto__ : y__34901__auto__);
})();
return ((x__34893__auto__ > y__34894__auto__) ? x__34893__auto__ : y__34894__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__35783__auto__ = [];
var len__35776__auto___53934 = arguments.length;
var i__35777__auto___53935 = (0);
while(true){
if((i__35777__auto___53935 < len__35776__auto___53934)){
args__35783__auto__.push((arguments[i__35777__auto___53935]));

var G__53936 = (i__35777__auto___53935 + (1));
i__35777__auto___53935 = G__53936;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq53931){
var G__53932 = cljs.core.first.call(null,seq53931);
var seq53931__$1 = cljs.core.next.call(null,seq53931);
var G__53933 = cljs.core.first.call(null,seq53931__$1);
var seq53931__$2 = cljs.core.next.call(null,seq53931__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__53932,G__53933,seq53931__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__35783__auto__ = [];
var len__35776__auto___53938 = arguments.length;
var i__35777__auto___53939 = (0);
while(true){
if((i__35777__auto___53939 < len__35776__auto___53938)){
args__35783__auto__.push((arguments[i__35777__auto___53939]));

var G__53940 = (i__35777__auto___53939 + (1));
i__35777__auto___53939 = G__53940;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__6751__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__6751__auto__){
var rst = temp__6751__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__53941 = (i - (1));
var G__53942 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__53941;
v_seqs__$2 = G__53942;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq53937){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53937));
});


//# sourceMappingURL=util.js.map?rel=1491640769520