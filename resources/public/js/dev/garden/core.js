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
var len__35776__auto___105294 = arguments.length;
var i__35777__auto___105295 = (0);
while(true){
if((i__35777__auto___105295 < len__35776__auto___105294)){
args__35783__auto__.push((arguments[i__35777__auto___105295]));

var G__105296 = (i__35777__auto___105295 + (1));
i__35777__auto___105295 = G__105296;
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

garden.core.css.cljs$lang$applyTo = (function (seq105293){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq105293));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__35783__auto__ = [];
var len__35776__auto___105298 = arguments.length;
var i__35777__auto___105299 = (0);
while(true){
if((i__35777__auto___105299 < len__35776__auto___105298)){
args__35783__auto__.push((arguments[i__35777__auto___105299]));

var G__105300 = (i__35777__auto___105299 + (1));
i__35777__auto___105299 = G__105300;
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

garden.core.style.cljs$lang$applyTo = (function (seq105297){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq105297));
});


//# sourceMappingURL=core.js.map?rel=1491640857353