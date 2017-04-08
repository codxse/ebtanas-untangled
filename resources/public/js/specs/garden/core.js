// Compiled by ClojureScript 1.9.494 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__35783__auto__ = [];
var len__35776__auto___55560 = arguments.length;
var i__35777__auto___55561 = (0);
while(true){
if((i__35777__auto___55561 < len__35776__auto___55560)){
args__35783__auto__.push((arguments[i__35777__auto___55561]));

var G__55562 = (i__35777__auto___55561 + (1));
i__35777__auto___55561 = G__55562;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq55559){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55559));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__35783__auto__ = [];
var len__35776__auto___55564 = arguments.length;
var i__35777__auto___55565 = (0);
while(true){
if((i__35777__auto___55565 < len__35776__auto___55564)){
args__35783__auto__.push((arguments[i__35777__auto___55565]));

var G__55566 = (i__35777__auto___55565 + (1));
i__35777__auto___55565 = G__55566;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq55563){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55563));
});


//# sourceMappingURL=core.js.map?rel=1491640771801