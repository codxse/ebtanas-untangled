// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.mutations');
goog.require('cljs.core');
goog.require('om.next');
if(typeof untangled.client.mutations.mutate !== 'undefined'){
} else {
untangled.client.mutations.mutate = (function (){var method_table__35586__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35587__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35588__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35589__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35590__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35590__auto__,method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__));
})();
}
if(typeof untangled.client.mutations.post_mutate !== 'undefined'){
} else {
untangled.client.mutations.post_mutate = (function (){var method_table__35586__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35587__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35588__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35589__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35590__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"untangled.client.mutations","post-mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35590__auto__,method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__));
})();
}
/**
 * Toggle the given boolean `field` on the specified component. It is recommended you use this function only on
 *   UI-related data (e.g. form checkbox checked status) and write clear top-level transactions for anything more complicated.
 */
untangled.client.mutations.toggle_BANG_ = (function untangled$client$mutations$toggle_BANG_(comp,field){
return om.next.transact_BANG_.call(null,comp,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","toggle","ui/toggle",-1362596183,null)),(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"field","field",-1302436500)),(function (){var x__35489__auto__ = field;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())))));
});
/**
 * Set a raw value on the given `field` of a `component`. It is recommended you use this function only on
 *   UI-related data (e.g. form inputs that are used by the UI, and not persisted data).
 */
untangled.client.mutations.set_value_BANG_ = (function untangled$client$mutations$set_value_BANG_(component,field,value){
return om.next.transact_BANG_.call(null,component,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("ui","set-props","ui/set-props",-1564556899,null)),(function (){var x__35489__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([field,value]);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
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
var args__35783__auto__ = [];
var len__35776__auto___100575 = arguments.length;
var i__35777__auto___100576 = (0);
while(true){
if((i__35777__auto___100576 < len__35776__auto___100575)){
args__35783__auto__.push((arguments[i__35777__auto___100576]));

var G__100577 = (i__35777__auto___100576 + (1));
i__35777__auto___100576 = G__100577;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__100572){
var map__100573 = p__100572;
var map__100573__$1 = ((((!((map__100573 == null)))?((((map__100573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100573):map__100573);
var event = cljs.core.get.call(null,map__100573__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__100573__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__34543__auto__ = (function (){var or__34555__auto__ = event;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core.not.call(null,(function (){var and__34543__auto____$1 = event;
if(cljs.core.truth_(and__34543__auto____$1)){
return value;
} else {
return and__34543__auto____$1;
}
})());
} else {
return and__34543__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Supply either :event or :value"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = untangled.client.mutations.ensure_integer.call(null,(cljs.core.truth_(event)?untangled.client.mutations.target_value.call(null,event):value));
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_integer_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_integer_BANG_.cljs$lang$applyTo = (function (seq100569){
var G__100570 = cljs.core.first.call(null,seq100569);
var seq100569__$1 = cljs.core.next.call(null,seq100569);
var G__100571 = cljs.core.first.call(null,seq100569__$1);
var seq100569__$2 = cljs.core.next.call(null,seq100569__$1);
return untangled.client.mutations.set_integer_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__100570,G__100571,seq100569__$2);
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
var args__35783__auto__ = [];
var len__35776__auto___100584 = arguments.length;
var i__35777__auto___100585 = (0);
while(true){
if((i__35777__auto___100585 < len__35776__auto___100584)){
args__35783__auto__.push((arguments[i__35777__auto___100585]));

var G__100586 = (i__35777__auto___100585 + (1));
i__35777__auto___100585 = G__100586;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__100581){
var map__100582 = p__100581;
var map__100582__$1 = ((((!((map__100582 == null)))?((((map__100582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100582):map__100582);
var event = cljs.core.get.call(null,map__100582__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.call(null,map__100582__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__34543__auto__ = (function (){var or__34555__auto__ = event;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return value;
}
})();
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core.not.call(null,(function (){var and__34543__auto____$1 = event;
if(cljs.core.truth_(and__34543__auto____$1)){
return value;
} else {
return and__34543__auto____$1;
}
})());
} else {
return and__34543__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Supply either :event or :value"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(and (or event value) (not (and event value)))")].join('')));
}

var value__$1 = (cljs.core.truth_(event)?untangled.client.mutations.target_value.call(null,event):value);
return untangled.client.mutations.set_value_BANG_.call(null,component,field,value__$1);
});

untangled.client.mutations.set_string_BANG_.cljs$lang$maxFixedArity = (2);

untangled.client.mutations.set_string_BANG_.cljs$lang$applyTo = (function (seq100578){
var G__100579 = cljs.core.first.call(null,seq100578);
var seq100578__$1 = cljs.core.next.call(null,seq100578);
var G__100580 = cljs.core.first.call(null,seq100578__$1);
var seq100578__$2 = cljs.core.next.call(null,seq100578__$1);
return untangled.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__100579,G__100580,seq100578__$2);
});


//# sourceMappingURL=mutations.js.map?rel=1491640850836