// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.next');
goog.require('untangled.client.logging');
goog.require('om.next.protocols');
/**
 * Get a unique string-based key. Never returns the same value.
 */
untangled.dom.unique_key = (function untangled$dom$unique_key(){
var s = cljs.core.system_time.call(null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
/**
 * Re-render components. If only a reconciler is supplied then it forces a full DOM re-render by updating the :ui/react-key
 *   in app state and forcing Om to re-render the entire DOM, which only works properly if you query
 *   for :ui/react-key in your Root render component and add that as the react :key to your top-level element.
 * 
 *   If you supply an additional vector of keywords and idents then it will ask Om to rerender only those components that mention
 *   those things in their queries.
 */
untangled.dom.force_render = (function untangled$dom$force_render(var_args){
var args204467 = [];
var len__40427__auto___204470 = arguments.length;
var i__40428__auto___204471 = (0);
while(true){
if((i__40428__auto___204471 < len__40427__auto___204470)){
args204467.push((arguments[i__40428__auto___204471]));

var G__204472 = (i__40428__auto___204471 + (1));
i__40428__auto___204471 = G__204472;
continue;
} else {
}
break;
}

var G__204469 = args204467.length;
switch (G__204469) {
case 2:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args204467.length)].join('')));

}
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,keywords){
om.next.protocols.queue_BANG_.call(null,reconciler,keywords);

return om.next.protocols.schedule_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
var app_state = om.next.app_state.call(null,reconciler);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword("ui","react-key","ui/react-key",1337877664),untangled.dom.unique_key.call(null));

return om.next.force_root_render_BANG_.call(null,reconciler);
});

untangled.dom.force_render.cljs$lang$maxFixedArity = 2;

/**
 * Append a CSS class. Given a component and a local state key or keys, to be passed to `om/get-state`,
 *   returns a function that takes the `state-value` to test, a `default-class-string`,
 *   and optionaol `:when-true` and `:when-false`. The values `:when-false` and `when-true`
 *   are appended to `default-class-string` after the test against `state-value`.
 * 
 *   Parameters:
 *   `component`: The component to pass to `om/get-state`.
 *   `local-state-key`: The key or keys to pass to `om/get-state`.
 */
untangled.dom.append_class = (function untangled$dom$append_class(component,local_state_key){
return (function() { 
var G__204480__delegate = function (state_key,default_class_string,p__204477){
var map__204478 = p__204477;
var map__204478__$1 = ((((!((map__204478 == null)))?((((map__204478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__204478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204478):map__204478);
var when_true = cljs.core.get.call(null,map__204478__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__204478__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
var append_string = ((cljs.core._EQ_.call(null,state_key,om.next.get_state.call(null,component,local_state_key)))?when_true:when_false);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(default_class_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(append_string)].join('');
};
var G__204480 = function (state_key,default_class_string,var_args){
var p__204477 = null;
if (arguments.length > 2) {
var G__204481__i = 0, G__204481__a = new Array(arguments.length -  2);
while (G__204481__i < G__204481__a.length) {G__204481__a[G__204481__i] = arguments[G__204481__i + 2]; ++G__204481__i;}
  p__204477 = new cljs.core.IndexedSeq(G__204481__a,0);
} 
return G__204480__delegate.call(this,state_key,default_class_string,p__204477);};
G__204480.cljs$lang$maxFixedArity = 2;
G__204480.cljs$lang$applyTo = (function (arglist__204482){
var state_key = cljs.core.first(arglist__204482);
arglist__204482 = cljs.core.next(arglist__204482);
var default_class_string = cljs.core.first(arglist__204482);
var p__204477 = cljs.core.rest(arglist__204482);
return G__204480__delegate(state_key,default_class_string,p__204477);
});
G__204480.cljs$core$IFn$_invoke$arity$variadic = G__204480__delegate;
return G__204480;
})()
;
});
/**
 * Adds the 'visible' CSS class and removes the 'hidden' class to the pre-supplied class string based on the truthiness
 *   of the value in data at key.
 * 
 *   Parameters:
 *   `data`: A map containing the component's state.
 *   `key`: A key within `data`.
 *   `always-classes`: A string that has the CSS classes to always return in the returned string.
 * 
 *   Optional named parameters:
 * 
 *   `:when-true v` : This string to add when the key's value is true. Defaults to "active".
 *   `:when-false v` : The string to add when the key's value is false. Defaults to "".
 *   
 */
untangled.dom.toggle_class = (function untangled$dom$toggle_class(var_args){
var args__40434__auto__ = [];
var len__40427__auto___204490 = arguments.length;
var i__40428__auto___204491 = (0);
while(true){
if((i__40428__auto___204491 < len__40427__auto___204490)){
args__40434__auto__.push((arguments[i__40428__auto___204491]));

var G__204492 = (i__40428__auto___204491 + (1));
i__40428__auto___204491 = G__204492;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((3) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((3)),(0),null)):null);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40435__auto__);
});

untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic = (function (data,key,always_classes,p__204487){
var map__204488 = p__204487;
var map__204488__$1 = ((((!((map__204488 == null)))?((((map__204488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__204488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204488):map__204488);
var when_true = cljs.core.get.call(null,map__204488__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__204488__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
if(cljs.core.truth_(cljs.core.get.call(null,data,key))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_true], null));
} else {
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_false], null));
}
});

untangled.dom.toggle_class.cljs$lang$maxFixedArity = (3);

untangled.dom.toggle_class.cljs$lang$applyTo = (function (seq204483){
var G__204484 = cljs.core.first.call(null,seq204483);
var seq204483__$1 = cljs.core.next.call(null,seq204483);
var G__204485 = cljs.core.first.call(null,seq204483__$1);
var seq204483__$2 = cljs.core.next.call(null,seq204483__$1);
var G__204486 = cljs.core.first.call(null,seq204483__$2);
var seq204483__$3 = cljs.core.next.call(null,seq204483__$2);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic(G__204484,G__204485,G__204486,seq204483__$3);
});

/**
 * Returns the text value from an input change event.
 */
untangled.dom.text_value = (function untangled$dom$text_value(evt){
try{return evt.target.value;
}catch (e204494){if((e204494 instanceof Object)){
var e = e204494;
return untangled.client.logging.warn.call(null,"Event had no target when trying to pull text");
} else {
throw e204494;

}
}});

//# sourceMappingURL=dom.js.map?rel=1491715103412