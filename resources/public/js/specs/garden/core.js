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
var len__40427__auto___187463 = arguments.length;
var i__40428__auto___187464 = (0);
while(true){
if((i__40428__auto___187464 < len__40427__auto___187463)){
args__40434__auto__.push((arguments[i__40428__auto___187464]));

var G__187465 = (i__40428__auto___187464 + (1));
i__40428__auto___187464 = G__187465;
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

garden.core.css.cljs$lang$applyTo = (function (seq187462){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq187462));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__40434__auto__ = [];
var len__40427__auto___187467 = arguments.length;
var i__40428__auto___187468 = (0);
while(true){
if((i__40428__auto___187468 < len__40427__auto___187467)){
args__40434__auto__.push((arguments[i__40428__auto___187468]));

var G__187469 = (i__40428__auto___187468 + (1));
i__40428__auto___187468 = G__187469;
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

garden.core.style.cljs$lang$applyTo = (function (seq187466){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq187466));
});


//# sourceMappingURL=core.js.map?rel=1491715070702