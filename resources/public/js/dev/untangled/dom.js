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
var args51261 = [];
var len__40443__auto___51264 = arguments.length;
var i__40444__auto___51265 = (0);
while(true){
if((i__40444__auto___51265 < len__40443__auto___51264)){
args51261.push((arguments[i__40444__auto___51265]));

var G__51266 = (i__40444__auto___51265 + (1));
i__40444__auto___51265 = G__51266;
continue;
} else {
}
break;
}

var G__51263 = args51261.length;
switch (G__51263) {
case 2:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return untangled.dom.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51261.length)].join('')));

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
var G__51274__delegate = function (state_key,default_class_string,p__51271){
var map__51272 = p__51271;
var map__51272__$1 = ((((!((map__51272 == null)))?((((map__51272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51272):map__51272);
var when_true = cljs.core.get.call(null,map__51272__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__51272__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
var append_string = ((cljs.core._EQ_.call(null,state_key,om.next.get_state.call(null,component,local_state_key)))?when_true:when_false);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(default_class_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(append_string)].join('');
};
var G__51274 = function (state_key,default_class_string,var_args){
var p__51271 = null;
if (arguments.length > 2) {
var G__51275__i = 0, G__51275__a = new Array(arguments.length -  2);
while (G__51275__i < G__51275__a.length) {G__51275__a[G__51275__i] = arguments[G__51275__i + 2]; ++G__51275__i;}
  p__51271 = new cljs.core.IndexedSeq(G__51275__a,0);
} 
return G__51274__delegate.call(this,state_key,default_class_string,p__51271);};
G__51274.cljs$lang$maxFixedArity = 2;
G__51274.cljs$lang$applyTo = (function (arglist__51276){
var state_key = cljs.core.first(arglist__51276);
arglist__51276 = cljs.core.next(arglist__51276);
var default_class_string = cljs.core.first(arglist__51276);
var p__51271 = cljs.core.rest(arglist__51276);
return G__51274__delegate(state_key,default_class_string,p__51271);
});
G__51274.cljs$core$IFn$_invoke$arity$variadic = G__51274__delegate;
return G__51274;
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
var args__40450__auto__ = [];
var len__40443__auto___51284 = arguments.length;
var i__40444__auto___51285 = (0);
while(true){
if((i__40444__auto___51285 < len__40443__auto___51284)){
args__40450__auto__.push((arguments[i__40444__auto___51285]));

var G__51286 = (i__40444__auto___51285 + (1));
i__40444__auto___51285 = G__51286;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((3) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((3)),(0),null)):null);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40451__auto__);
});

untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic = (function (data,key,always_classes,p__51281){
var map__51282 = p__51281;
var map__51282__$1 = ((((!((map__51282 == null)))?((((map__51282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51282):map__51282);
var when_true = cljs.core.get.call(null,map__51282__$1,new cljs.core.Keyword(null,"when-true","when-true",-657079170),"active");
var when_false = cljs.core.get.call(null,map__51282__$1,new cljs.core.Keyword(null,"when-false","when-false",815014297),"");
if(cljs.core.truth_(cljs.core.get.call(null,data,key))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_true], null));
} else {
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [always_classes,when_false], null));
}
});

untangled.dom.toggle_class.cljs$lang$maxFixedArity = (3);

untangled.dom.toggle_class.cljs$lang$applyTo = (function (seq51277){
var G__51278 = cljs.core.first.call(null,seq51277);
var seq51277__$1 = cljs.core.next.call(null,seq51277);
var G__51279 = cljs.core.first.call(null,seq51277__$1);
var seq51277__$2 = cljs.core.next.call(null,seq51277__$1);
var G__51280 = cljs.core.first.call(null,seq51277__$2);
var seq51277__$3 = cljs.core.next.call(null,seq51277__$2);
return untangled.dom.toggle_class.cljs$core$IFn$_invoke$arity$variadic(G__51278,G__51279,G__51280,seq51277__$3);
});

/**
 * Returns the text value from an input change event.
 */
untangled.dom.text_value = (function untangled$dom$text_value(evt){
try{return evt.target.value;
}catch (e51288){if((e51288 instanceof Object)){
var e = e51288;
return untangled.client.logging.warn.call(null,"Event had no target when trying to pull text");
} else {
throw e51288;

}
}});

//# sourceMappingURL=dom.js.map?rel=1491695670204