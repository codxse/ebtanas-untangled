// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.ui.state');
goog.require('cljs.core');
/**
 * Evolve the application state by applying op to the database object at ident. `op` should be a `(fn [obj args] updated-obj)`
 */
untangled.ui.state.evolve = (function untangled$ui$state$evolve(state_map,ident,op,args){
return cljs.core.update_in.call(null,state_map,ident,op,args);
});
/**
 * Evolve the application state in the given atom by applying op to the database object at ident. `op` should be a `(fn [obj args] updated-obj)`
 */
untangled.ui.state.evolve_BANG_ = (function untangled$ui$state$evolve_BANG_(var_args){
var args36996 = [];
var len__35776__auto___36999 = arguments.length;
var i__35777__auto___37000 = (0);
while(true){
if((i__35777__auto___37000 < len__35776__auto___36999)){
args36996.push((arguments[i__35777__auto___37000]));

var G__37001 = (i__35777__auto___37000 + (1));
i__35777__auto___37000 = G__37001;
continue;
} else {
}
break;
}

var G__36998 = args36996.length;
switch (G__36998) {
case 3:
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36996.length)].join('')));

}
});

untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state_atom,ident,op){
return cljs.core.swap_BANG_.call(null,state_atom,untangled.ui.state.evolve,ident,op,cljs.core.PersistentArrayMap.EMPTY);
});

untangled.ui.state.evolve_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (state_atom,ident,op,args){
return cljs.core.swap_BANG_.call(null,state_atom,untangled.ui.state.evolve,ident,op,args);
});

untangled.ui.state.evolve_BANG_.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=state.js.map?rel=1491640735268