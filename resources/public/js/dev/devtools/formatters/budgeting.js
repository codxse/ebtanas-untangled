// Compiled by ClojureScript 1.9.494 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__67744__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__67744__auto__,"add").call(o__67744__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__67744__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__67744__auto__,"delete").call(o__67744__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__67744__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__67744__auto__,"has").call(o__67744__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = goog.object.get(data,"config");
var G__110584 = data;
var target__67763__auto__ = G__110584;
if(cljs.core.truth_(target__67763__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("unable to locate object path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110584)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("target__67763__auto__")].join('')));
}

goog.object.set(target__67763__auto__,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config"], null)),devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__110584;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_110593 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_110593);
} else {
var seq__110589_110594 = cljs.core.seq.call(null,json_ml);
var chunk__110590_110595 = null;
var count__110591_110596 = (0);
var i__110592_110597 = (0);
while(true){
if((i__110592_110597 < count__110591_110596)){
var item_110598 = cljs.core._nth.call(null,chunk__110590_110595,i__110592_110597);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_110598,new_depth_budget_110593);

var G__110599 = seq__110589_110594;
var G__110600 = chunk__110590_110595;
var G__110601 = count__110591_110596;
var G__110602 = (i__110592_110597 + (1));
seq__110589_110594 = G__110599;
chunk__110590_110595 = G__110600;
count__110591_110596 = G__110601;
i__110592_110597 = G__110602;
continue;
} else {
var temp__6753__auto___110603 = cljs.core.seq.call(null,seq__110589_110594);
if(temp__6753__auto___110603){
var seq__110589_110604__$1 = temp__6753__auto___110603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__110589_110604__$1)){
var c__35466__auto___110605 = cljs.core.chunk_first.call(null,seq__110589_110604__$1);
var G__110606 = cljs.core.chunk_rest.call(null,seq__110589_110604__$1);
var G__110607 = c__35466__auto___110605;
var G__110608 = cljs.core.count.call(null,c__35466__auto___110605);
var G__110609 = (0);
seq__110589_110594 = G__110606;
chunk__110590_110595 = G__110607;
count__110591_110596 = G__110608;
i__110592_110597 = G__110609;
continue;
} else {
var item_110610 = cljs.core.first.call(null,seq__110589_110604__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_110610,new_depth_budget_110593);

var G__110611 = cljs.core.next.call(null,seq__110589_110604__$1);
var G__110612 = null;
var G__110613 = (0);
var G__110614 = (0);
seq__110589_110594 = G__110611;
chunk__110590_110595 = G__110612;
count__110591_110596 = G__110613;
i__110592_110597 = G__110614;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__6751__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__6751__auto__)){
var initial_hierarchy_depth_budget = temp__6751__auto__;
var remaining_depth_budget = (function (){var or__34555__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1491640865376