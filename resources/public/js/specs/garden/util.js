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
var args__40434__auto__ = [];
var len__40427__auto___186839 = arguments.length;
var i__40428__auto___186840 = (0);
while(true){
if((i__40428__auto___186840 < len__40427__auto___186839)){
args__40434__auto__.push((arguments[i__40428__auto___186840]));

var G__186841 = (i__40428__auto___186840 + (1));
i__40428__auto___186840 = G__186841;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq186837){
var G__186838 = cljs.core.first.call(null,seq186837);
var seq186837__$1 = cljs.core.next.call(null,seq186837);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__186838,seq186837__$1);
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
var x__39924__auto__ = (((this$ == null))?null:this$);
var m__39925__auto__ = (garden.util.to_str[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,this$);
} else {
var m__39925__auto____$1 = (garden.util.to_str["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,this$);
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
var args__40434__auto__ = [];
var len__40427__auto___186843 = arguments.length;
var i__40428__auto___186844 = (0);
while(true){
if((i__40428__auto___186844 < len__40427__auto___186843)){
args__40434__auto__.push((arguments[i__40428__auto___186844]));

var G__186845 = (i__40428__auto___186844 + (1));
i__40428__auto___186844 = G__186845;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq186842){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq186842));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__40434__auto__ = [];
var len__40427__auto___186852 = arguments.length;
var i__40428__auto___186853 = (0);
while(true){
if((i__40428__auto___186853 < len__40427__auto___186852)){
args__40434__auto__.push((arguments[i__40428__auto___186853]));

var G__186854 = (i__40428__auto___186853 + (1));
i__40428__auto___186853 = G__186854;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__186848){
var vec__186849 = p__186848;
var radix = cljs.core.nth.call(null,vec__186849,(0),null);
var radix__$1 = (function (){var or__39206__auto__ = radix;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq186846){
var G__186847 = cljs.core.first.call(null,seq186846);
var seq186846__$1 = cljs.core.next.call(null,seq186846);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__186847,seq186846__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__40434__auto__ = [];
var len__40427__auto___186861 = arguments.length;
var i__40428__auto___186862 = (0);
while(true){
if((i__40428__auto___186862 < len__40427__auto___186861)){
args__40434__auto__.push((arguments[i__40428__auto___186862]));

var G__186863 = (i__40428__auto___186862 + (1));
i__40428__auto___186862 = G__186863;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__186857){
var vec__186858 = p__186857;
var radix = cljs.core.nth.call(null,vec__186858,(0),null);
var radix__$1 = (function (){var or__39206__auto__ = radix;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq186855){
var G__186856 = cljs.core.first.call(null,seq186855);
var seq186855__$1 = cljs.core.next.call(null,seq186855);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__186856,seq186855__$1);
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
var ys = (function (){var iter__40068__auto__ = (function garden$util$comma_join_$_iter__186868(s__186869){
return (new cljs.core.LazySeq(null,(function (){
var s__186869__$1 = s__186869;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__186869__$1);
if(temp__6753__auto__){
var s__186869__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__186869__$2)){
var c__40066__auto__ = cljs.core.chunk_first.call(null,s__186869__$2);
var size__40067__auto__ = cljs.core.count.call(null,c__40066__auto__);
var b__186871 = cljs.core.chunk_buffer.call(null,size__40067__auto__);
if((function (){var i__186870 = (0);
while(true){
if((i__186870 < size__40067__auto__)){
var x = cljs.core._nth.call(null,c__40066__auto__,i__186870);
cljs.core.chunk_append.call(null,b__186871,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__186872 = (i__186870 + (1));
i__186870 = G__186872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__186871),garden$util$comma_join_$_iter__186868.call(null,cljs.core.chunk_rest.call(null,s__186869__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__186871),null);
}
} else {
var x = cljs.core.first.call(null,s__186869__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__186868.call(null,cljs.core.rest.call(null,s__186869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__40068__auto__.call(null,xs);
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
var and__39194__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__39194__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__39194__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__39194__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__39194__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__39194__auto__;
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
var bottom = (function (){var x__39551__auto__ = a;
var y__39552__auto__ = b;
return ((x__39551__auto__ < y__39552__auto__) ? x__39551__auto__ : y__39552__auto__);
})();
var top = (function (){var x__39544__auto__ = a;
var y__39545__auto__ = b;
return ((x__39544__auto__ > y__39545__auto__) ? x__39544__auto__ : y__39545__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__186876 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__186876,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__186876,(1),null);
var x__39544__auto__ = a__$1;
var y__39545__auto__ = (function (){var x__39551__auto__ = b__$1;
var y__39552__auto__ = n;
return ((x__39551__auto__ < y__39552__auto__) ? x__39551__auto__ : y__39552__auto__);
})();
return ((x__39544__auto__ > y__39545__auto__) ? x__39544__auto__ : y__39545__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__40434__auto__ = [];
var len__40427__auto___186882 = arguments.length;
var i__40428__auto___186883 = (0);
while(true){
if((i__40428__auto___186883 < len__40427__auto___186882)){
args__40434__auto__.push((arguments[i__40428__auto___186883]));

var G__186884 = (i__40428__auto___186883 + (1));
i__40428__auto___186883 = G__186884;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((2) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__40435__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq186879){
var G__186880 = cljs.core.first.call(null,seq186879);
var seq186879__$1 = cljs.core.next.call(null,seq186879);
var G__186881 = cljs.core.first.call(null,seq186879__$1);
var seq186879__$2 = cljs.core.next.call(null,seq186879__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__186880,G__186881,seq186879__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__40434__auto__ = [];
var len__40427__auto___186886 = arguments.length;
var i__40428__auto___186887 = (0);
while(true){
if((i__40428__auto___186887 < len__40427__auto___186886)){
args__40434__auto__.push((arguments[i__40428__auto___186887]));

var G__186888 = (i__40428__auto___186887 + (1));
i__40428__auto___186887 = G__186888;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
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
var G__186889 = (i - (1));
var G__186890 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__186889;
v_seqs__$2 = G__186890;
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

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq186885){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq186885));
});


//# sourceMappingURL=util.js.map?rel=1491715068793