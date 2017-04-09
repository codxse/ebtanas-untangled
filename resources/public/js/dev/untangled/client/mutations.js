// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.mutations');
goog.require('cljs.core');
goog.require('om.next');
if(typeof untangled.client.mutations.mutate !== 'undefined'){
} else {
untangled.client.mutations.mutate = (function (){var method_table__40253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__40254__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__40255__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__40256__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__40257__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__40257__auto__,method_table__40253__auto__,prefer_table__40254__auto__,method_cache__40255__auto__,cached_hierarchy__40256__auto__));
})();
}
if(typeof untangled.client.mutations.post_mutate !== 'undefined'){
} else {
untangled.client.mutations.post_mutate = (function (){var method_table__40253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__40254__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__40255__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__40256__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__40257__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","post-mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__40257__auto__,method_table__40253__auto__,prefer_table__40254__auto__,method_cache__40255__auto__,cached_hierarchy__40256__auto__));
})();
}
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
untangled.client.mutations.toggle_BANG_ = (function untangled$client$mutations$toggle_BANG_(comp,field){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__40156__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null)),(function (){var x__40156__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field","field",-1302436500)),(function (){var x__40156__auto__ = field;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data).
 */
untangled.client.mutations.set_value_BANG_ = (function untangled$client$mutations$set_value_BANG_(component,field,value){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__40156__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null)),(function (){var x__40156__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40156__auto__);
})())))));
});
/**
 * Helper for set-integer!, use that instead. It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
untangled.client.mutations.ensure_integer = (function untangled$client$mutations$ensure_integer(v){
var rv = parseInt(v);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return rv;
}
});
untangled.client.mutations.target_value = (function untangled$client$mutations$target_value(evt){
return evt.target.value;
});
/**
 * Set the given integer on the given `field` of a `component`. Allows same parameters as `set-string!`.
 * 
 * It is recommended you use this function only on UI-related data (e.g. data that is used for display purposes)
 * and write clear top-level transactions for anything else.
 */
untangled.client.mutations.set_integer_BANG_ = (function untangled$client$mutations$set_integer_BANG_(var_args){
var args__40450__auto__ = [];
var len__40443__auto___51153 = arguments.length;
var i__40444__auto___51154 = (0);
while(true){
if((i__40444__auto___51154 < len__40443__auto___51153)){
args__40450__auto__.push((arguments[i__40444__auto___51154]));

var G__51155 = (i__40444__auto___51154 + (1));
i__40444__auto___51154 = G__51155;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((2) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__40451__auto__);
});

untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__51150){
var map__51151 = p__51150;
var map__51151__$1 = ((((!((map__51151 == null)))?((((map__51151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51151):map__51151);
var event = cljs.core.get.call(null,map__51151__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__51151__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__39210__auto__ = (function (){var or__39222__auto__ = event;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__39210__auto__)){
return cljs.core.not.call(null,(function (){var and__39210__auto____$1 = event;
if(cljs.core.truth_(and__39210__auto____$1)){
return value;
} else {
return and__39210__auto____$1;
}
})());
} else {
return and__39210__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Supply either :event or :value"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = untangled.client.mutations.ensure_integer.call(null,(cljs.core.truth_(event)?untangled.client.mutations.target_value.call(null,event):value));
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq51147){
var G__51148 = cljs.core.first.call(null,seq51147);
var seq51147__$1 = cljs.core.next.call(null,seq51147);
var G__51149 = cljs.core.first.call(null,seq51147__$1);
var seq51147__$2 = cljs.core.next.call(null,seq51147__$1);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51148,G__51149,seq51147__$2);
});

/**
 * Set a string on the given `field` of a `component`. The string can be literal via named parameter `:value` or
 *   can be auto-extracted from a UI event using the named parameter `:event`
 * 
 *   Examples
 * 
 *   ```
 *   (set-string! this :ui/name :value "Hello") ; set from literal (or var)
 *   (set-string! this :ui/name :event evt) ; extract from UI event target value
 *   ```
 * 
 *   It is recommended you use this function only on UI-related
 *   data (e.g. data that is used for display purposes) and write clear top-level transactions for anything else.
 */
untangled.client.mutations.set_string_BANG_ = (function untangled$client$mutations$set_string_BANG_(var_args){
var args__40450__auto__ = [];
var len__40443__auto___51162 = arguments.length;
var i__40444__auto___51163 = (0);
while(true){
if((i__40444__auto___51163 < len__40443__auto___51162)){
args__40450__auto__.push((arguments[i__40444__auto___51163]));

var G__51164 = (i__40444__auto___51163 + (1));
i__40444__auto___51163 = G__51164;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((2) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__40451__auto__);
});

untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__51159){
var map__51160 = p__51159;
var map__51160__$1 = ((((!((map__51160 == null)))?((((map__51160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51160):map__51160);
var event = cljs.core.get.call(null,map__51160__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__51160__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__39210__auto__ = (function (){var or__39222__auto__ = event;
if(cljs.core.truth_(or__39222__auto__)){
return or__39222__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__39210__auto__)){
return cljs.core.not.call(null,(function (){var and__39210__auto____$1 = event;
if(cljs.core.truth_(and__39210__auto____$1)){
return value;
} else {
return and__39210__auto____$1;
}
})());
} else {
return and__39210__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Supply either :event or :value"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = (cljs.core.truth_(event)?untangled.client.mutations.target_value.call(null,event):value);
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq51156){
var G__51157 = cljs.core.first.call(null,seq51156);
var seq51156__$1 = cljs.core.next.call(null,seq51156);
var G__51158 = cljs.core.first.call(null,seq51156__$1);
var seq51156__$2 = cljs.core.next.call(null,seq51156__$1);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51157,G__51158,seq51156__$2);
});


//# sourceMappingURL=mutations.js.map?rel=1491695669582