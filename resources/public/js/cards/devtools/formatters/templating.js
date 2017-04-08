// Compiled by ClojureScript 1.9.494 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x91533_91534 = value;

x91533_91534.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x91538_91539 = value;

x91538_91539.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x91543_91544 = value;

x91543_91544.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__34543__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__34543__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__35783__auto__ = [];
var len__35776__auto___91552 = arguments.length;
var i__35777__auto___91553 = (0);
while(true){
if((i__35777__auto___91553 < len__35776__auto___91552)){
args__35783__auto__.push((arguments[i__35777__auto___91553]));

var G__91554 = (i__35777__auto___91553 + (1));
i__35777__auto___91553 = G__91554;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__91548_91555 = cljs.core.seq.call(null,items);
var chunk__91549_91556 = null;
var count__91550_91557 = (0);
var i__91551_91558 = (0);
while(true){
if((i__91551_91558 < count__91550_91557)){
var item_91559 = cljs.core._nth.call(null,chunk__91549_91556,i__91551_91558);
if(!((item_91559 == null))){
if(cljs.core.coll_QMARK_.call(null,item_91559)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_91559)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_91559));
}
} else {
}

var G__91560 = seq__91548_91555;
var G__91561 = chunk__91549_91556;
var G__91562 = count__91550_91557;
var G__91563 = (i__91551_91558 + (1));
seq__91548_91555 = G__91560;
chunk__91549_91556 = G__91561;
count__91550_91557 = G__91562;
i__91551_91558 = G__91563;
continue;
} else {
var temp__6753__auto___91564 = cljs.core.seq.call(null,seq__91548_91555);
if(temp__6753__auto___91564){
var seq__91548_91565__$1 = temp__6753__auto___91564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91548_91565__$1)){
var c__35466__auto___91566 = cljs.core.chunk_first.call(null,seq__91548_91565__$1);
var G__91567 = cljs.core.chunk_rest.call(null,seq__91548_91565__$1);
var G__91568 = c__35466__auto___91566;
var G__91569 = cljs.core.count.call(null,c__35466__auto___91566);
var G__91570 = (0);
seq__91548_91555 = G__91567;
chunk__91549_91556 = G__91568;
count__91550_91557 = G__91569;
i__91551_91558 = G__91570;
continue;
} else {
var item_91571 = cljs.core.first.call(null,seq__91548_91565__$1);
if(!((item_91571 == null))){
if(cljs.core.coll_QMARK_.call(null,item_91571)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_91571)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_91571));
}
} else {
}

var G__91572 = cljs.core.next.call(null,seq__91548_91565__$1);
var G__91573 = null;
var G__91574 = (0);
var G__91575 = (0);
seq__91548_91555 = G__91572;
chunk__91549_91556 = G__91573;
count__91550_91557 = G__91574;
i__91551_91558 = G__91575;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq91547){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91547));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___91583 = arguments.length;
var i__35777__auto___91584 = (0);
while(true){
if((i__35777__auto___91584 < len__35776__auto___91583)){
args__35783__auto__.push((arguments[i__35777__auto___91584]));

var G__91585 = (i__35777__auto___91584 + (1));
i__35777__auto___91584 = G__91585;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__91579_91586 = cljs.core.seq.call(null,children);
var chunk__91580_91587 = null;
var count__91581_91588 = (0);
var i__91582_91589 = (0);
while(true){
if((i__91582_91589 < count__91581_91588)){
var child_91590 = cljs.core._nth.call(null,chunk__91580_91587,i__91582_91589);
if(!((child_91590 == null))){
if(cljs.core.coll_QMARK_.call(null,child_91590)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_91590))));
} else {
var temp__6751__auto___91591 = devtools.formatters.helpers.pref.call(null,child_91590);
if(cljs.core.truth_(temp__6751__auto___91591)){
var child_value_91592 = temp__6751__auto___91591;
template.push(child_value_91592);
} else {
}
}
} else {
}

var G__91593 = seq__91579_91586;
var G__91594 = chunk__91580_91587;
var G__91595 = count__91581_91588;
var G__91596 = (i__91582_91589 + (1));
seq__91579_91586 = G__91593;
chunk__91580_91587 = G__91594;
count__91581_91588 = G__91595;
i__91582_91589 = G__91596;
continue;
} else {
var temp__6753__auto___91597 = cljs.core.seq.call(null,seq__91579_91586);
if(temp__6753__auto___91597){
var seq__91579_91598__$1 = temp__6753__auto___91597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91579_91598__$1)){
var c__35466__auto___91599 = cljs.core.chunk_first.call(null,seq__91579_91598__$1);
var G__91600 = cljs.core.chunk_rest.call(null,seq__91579_91598__$1);
var G__91601 = c__35466__auto___91599;
var G__91602 = cljs.core.count.call(null,c__35466__auto___91599);
var G__91603 = (0);
seq__91579_91586 = G__91600;
chunk__91580_91587 = G__91601;
count__91581_91588 = G__91602;
i__91582_91589 = G__91603;
continue;
} else {
var child_91604 = cljs.core.first.call(null,seq__91579_91598__$1);
if(!((child_91604 == null))){
if(cljs.core.coll_QMARK_.call(null,child_91604)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_91604))));
} else {
var temp__6751__auto___91605 = devtools.formatters.helpers.pref.call(null,child_91604);
if(cljs.core.truth_(temp__6751__auto___91605)){
var child_value_91606 = temp__6751__auto___91605;
template.push(child_value_91606);
} else {
}
}
} else {
}

var G__91607 = cljs.core.next.call(null,seq__91579_91598__$1);
var G__91608 = null;
var G__91609 = (0);
var G__91610 = (0);
seq__91579_91586 = G__91607;
chunk__91580_91587 = G__91608;
count__91581_91588 = G__91609;
i__91582_91589 = G__91610;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq91576){
var G__91577 = cljs.core.first.call(null,seq91576);
var seq91576__$1 = cljs.core.next.call(null,seq91576);
var G__91578 = cljs.core.first.call(null,seq91576__$1);
var seq91576__$2 = cljs.core.next.call(null,seq91576__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__91577,G__91578,seq91576__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___91613 = arguments.length;
var i__35777__auto___91614 = (0);
while(true){
if((i__35777__auto___91614 < len__35776__auto___91613)){
args__35783__auto__.push((arguments[i__35777__auto___91614]));

var G__91615 = (i__35777__auto___91614 + (1));
i__35777__auto___91614 = G__91615;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq91611){
var G__91612 = cljs.core.first.call(null,seq91611);
var seq91611__$1 = cljs.core.next.call(null,seq91611);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91612,seq91611__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___91618 = arguments.length;
var i__35777__auto___91619 = (0);
while(true){
if((i__35777__auto___91619 < len__35776__auto___91618)){
args__35783__auto__.push((arguments[i__35777__auto___91619]));

var G__91620 = (i__35777__auto___91619 + (1));
i__35777__auto___91619 = G__91620;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq91616){
var G__91617 = cljs.core.first.call(null,seq91616);
var seq91616__$1 = cljs.core.next.call(null,seq91616);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__91617,seq91616__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args91621 = [];
var len__35776__auto___91626 = arguments.length;
var i__35777__auto___91627 = (0);
while(true){
if((i__35777__auto___91627 < len__35776__auto___91626)){
args91621.push((arguments[i__35777__auto___91627]));

var G__91628 = (i__35777__auto___91627 + (1));
i__35777__auto___91627 = G__91628;
continue;
} else {
}
break;
}

var G__91623 = args91621.length;
switch (G__91623) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args91621.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj91625 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__34555__auto__ = start_index;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (0);
}
})()};
return obj91625;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__35783__auto__ = [];
var len__35776__auto___91636 = arguments.length;
var i__35777__auto___91637 = (0);
while(true){
if((i__35777__auto___91637 < len__35776__auto___91636)){
args__35783__auto__.push((arguments[i__35777__auto___91637]));

var G__91638 = (i__35777__auto___91637 + (1));
i__35777__auto___91637 = G__91638;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__91632){
var vec__91633 = p__91632;
var state_override_fn = cljs.core.nth.call(null,vec__91633,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq91630){
var G__91631 = cljs.core.first.call(null,seq91630);
var seq91630__$1 = cljs.core.next.call(null,seq91630);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__91631,seq91630__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__35647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_91642_91645 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_91643_91646 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_91642_91645,_STAR_print_fn_STAR_91643_91646,sb__35647__auto__){
return (function (x__35648__auto__){
return sb__35647__auto__.append(x__35648__auto__);
});})(_STAR_print_newline_STAR_91642_91645,_STAR_print_fn_STAR_91643_91646,sb__35647__auto__))
;

try{var _STAR_print_level_STAR_91644_91647 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_91644_91647;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_91643_91646;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_91642_91645;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__35647__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_91649 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_91649;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__91651 = name;
switch (G__91651) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__91656 = tag;
var html_tag = cljs.core.nth.call(null,vec__91656,(0),null);
var style = cljs.core.nth.call(null,vec__91656,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_91660 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_91660;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_91663 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_91664 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_91664;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_91663;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__91665 = initial_value;
var G__91666 = value.call(null);
initial_value = G__91665;
value = G__91666;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__91667 = initial_value;
var G__91668 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__91667;
value = G__91668;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__91669 = initial_value;
var G__91670 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__91669;
value = G__91670;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1491640828231