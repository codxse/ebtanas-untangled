// Compiled by ClojureScript 1.9.494 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__40434__auto__ = [];
var len__40427__auto___226215 = arguments.length;
var i__40428__auto___226216 = (0);
while(true){
if((i__40428__auto___226216 < len__40427__auto___226215)){
args__40434__auto__.push((arguments[i__40428__auto___226216]));

var G__226217 = (i__40428__auto___226216 + (1));
i__40428__auto___226216 = G__226217;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq226214){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq226214));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__40434__auto__ = [];
var len__40427__auto___226219 = arguments.length;
var i__40428__auto___226220 = (0);
while(true){
if((i__40428__auto___226220 < len__40427__auto___226219)){
args__40434__auto__.push((arguments[i__40428__auto___226220]));

var G__226221 = (i__40428__auto___226220 + (1));
i__40428__auto___226220 = G__226221;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq226218){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq226218));
});


//# sourceMappingURL=core.js.map?rel=1491715146173