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
var len__35776__auto___84265 = arguments.length;
var i__35777__auto___84266 = (0);
while(true){
if((i__35777__auto___84266 < len__35776__auto___84265)){
args__35783__auto__.push((arguments[i__35777__auto___84266]));

var G__84267 = (i__35777__auto___84266 + (1));
i__35777__auto___84266 = G__84267;
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

garden.core.css.cljs$lang$applyTo = (function (seq84264){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84264));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__35783__auto__ = [];
var len__35776__auto___84269 = arguments.length;
var i__35777__auto___84270 = (0);
while(true){
if((i__35777__auto___84270 < len__35776__auto___84269)){
args__35783__auto__.push((arguments[i__35777__auto___84270]));

var G__84271 = (i__35777__auto___84270 + (1));
i__35777__auto___84270 = G__84271;
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

garden.core.style.cljs$lang$applyTo = (function (seq84268){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq84268));
});


//# sourceMappingURL=core.js.map?rel=1491640819798