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
var x70480_70481 = value;

x70480_70481.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x70485_70486 = value;

x70485_70486.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x70490_70491 = value;

x70490_70491.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var len__35776__auto___70499 = arguments.length;
var i__35777__auto___70500 = (0);
while(true){
if((i__35777__auto___70500 < len__35776__auto___70499)){
args__35783__auto__.push((arguments[i__35777__auto___70500]));

var G__70501 = (i__35777__auto___70500 + (1));
i__35777__auto___70500 = G__70501;
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
var seq__70495_70502 = cljs.core.seq.call(null,items);
var chunk__70496_70503 = null;
var count__70497_70504 = (0);
var i__70498_70505 = (0);
while(true){
if((i__70498_70505 < count__70497_70504)){
var item_70506 = cljs.core._nth.call(null,chunk__70496_70503,i__70498_70505);
if(!((item_70506 == null))){
if(cljs.core.coll_QMARK_.call(null,item_70506)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_70506)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_70506));
}
} else {
}

var G__70507 = seq__70495_70502;
var G__70508 = chunk__70496_70503;
var G__70509 = count__70497_70504;
var G__70510 = (i__70498_70505 + (1));
seq__70495_70502 = G__70507;
chunk__70496_70503 = G__70508;
count__70497_70504 = G__70509;
i__70498_70505 = G__70510;
continue;
} else {
var temp__6753__auto___70511 = cljs.core.seq.call(null,seq__70495_70502);
if(temp__6753__auto___70511){
var seq__70495_70512__$1 = temp__6753__auto___70511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70495_70512__$1)){
var c__35466__auto___70513 = cljs.core.chunk_first.call(null,seq__70495_70512__$1);
var G__70514 = cljs.core.chunk_rest.call(null,seq__70495_70512__$1);
var G__70515 = c__35466__auto___70513;
var G__70516 = cljs.core.count.call(null,c__35466__auto___70513);
var G__70517 = (0);
seq__70495_70502 = G__70514;
chunk__70496_70503 = G__70515;
count__70497_70504 = G__70516;
i__70498_70505 = G__70517;
continue;
} else {
var item_70518 = cljs.core.first.call(null,seq__70495_70512__$1);
if(!((item_70518 == null))){
if(cljs.core.coll_QMARK_.call(null,item_70518)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_70518)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_70518));
}
} else {
}

var G__70519 = cljs.core.next.call(null,seq__70495_70512__$1);
var G__70520 = null;
var G__70521 = (0);
var G__70522 = (0);
seq__70495_70502 = G__70519;
chunk__70496_70503 = G__70520;
count__70497_70504 = G__70521;
i__70498_70505 = G__70522;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq70494){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70494));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___70530 = arguments.length;
var i__35777__auto___70531 = (0);
while(true){
if((i__35777__auto___70531 < len__35776__auto___70530)){
args__35783__auto__.push((arguments[i__35777__auto___70531]));

var G__70532 = (i__35777__auto___70531 + (1));
i__35777__auto___70531 = G__70532;
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
var seq__70526_70533 = cljs.core.seq.call(null,children);
var chunk__70527_70534 = null;
var count__70528_70535 = (0);
var i__70529_70536 = (0);
while(true){
if((i__70529_70536 < count__70528_70535)){
var child_70537 = cljs.core._nth.call(null,chunk__70527_70534,i__70529_70536);
if(!((child_70537 == null))){
if(cljs.core.coll_QMARK_.call(null,child_70537)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_70537))));
} else {
var temp__6751__auto___70538 = devtools.formatters.helpers.pref.call(null,child_70537);
if(cljs.core.truth_(temp__6751__auto___70538)){
var child_value_70539 = temp__6751__auto___70538;
template.push(child_value_70539);
} else {
}
}
} else {
}

var G__70540 = seq__70526_70533;
var G__70541 = chunk__70527_70534;
var G__70542 = count__70528_70535;
var G__70543 = (i__70529_70536 + (1));
seq__70526_70533 = G__70540;
chunk__70527_70534 = G__70541;
count__70528_70535 = G__70542;
i__70529_70536 = G__70543;
continue;
} else {
var temp__6753__auto___70544 = cljs.core.seq.call(null,seq__70526_70533);
if(temp__6753__auto___70544){
var seq__70526_70545__$1 = temp__6753__auto___70544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70526_70545__$1)){
var c__35466__auto___70546 = cljs.core.chunk_first.call(null,seq__70526_70545__$1);
var G__70547 = cljs.core.chunk_rest.call(null,seq__70526_70545__$1);
var G__70548 = c__35466__auto___70546;
var G__70549 = cljs.core.count.call(null,c__35466__auto___70546);
var G__70550 = (0);
seq__70526_70533 = G__70547;
chunk__70527_70534 = G__70548;
count__70528_70535 = G__70549;
i__70529_70536 = G__70550;
continue;
} else {
var child_70551 = cljs.core.first.call(null,seq__70526_70545__$1);
if(!((child_70551 == null))){
if(cljs.core.coll_QMARK_.call(null,child_70551)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_70551))));
} else {
var temp__6751__auto___70552 = devtools.formatters.helpers.pref.call(null,child_70551);
if(cljs.core.truth_(temp__6751__auto___70552)){
var child_value_70553 = temp__6751__auto___70552;
template.push(child_value_70553);
} else {
}
}
} else {
}

var G__70554 = cljs.core.next.call(null,seq__70526_70545__$1);
var G__70555 = null;
var G__70556 = (0);
var G__70557 = (0);
seq__70526_70533 = G__70554;
chunk__70527_70534 = G__70555;
count__70528_70535 = G__70556;
i__70529_70536 = G__70557;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq70523){
var G__70524 = cljs.core.first.call(null,seq70523);
var seq70523__$1 = cljs.core.next.call(null,seq70523);
var G__70525 = cljs.core.first.call(null,seq70523__$1);
var seq70523__$2 = cljs.core.next.call(null,seq70523__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__70524,G__70525,seq70523__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___70560 = arguments.length;
var i__35777__auto___70561 = (0);
while(true){
if((i__35777__auto___70561 < len__35776__auto___70560)){
args__35783__auto__.push((arguments[i__35777__auto___70561]));

var G__70562 = (i__35777__auto___70561 + (1));
i__35777__auto___70561 = G__70562;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq70558){
var G__70559 = cljs.core.first.call(null,seq70558);
var seq70558__$1 = cljs.core.next.call(null,seq70558);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__70559,seq70558__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___70565 = arguments.length;
var i__35777__auto___70566 = (0);
while(true){
if((i__35777__auto___70566 < len__35776__auto___70565)){
args__35783__auto__.push((arguments[i__35777__auto___70566]));

var G__70567 = (i__35777__auto___70566 + (1));
i__35777__auto___70566 = G__70567;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq70563){
var G__70564 = cljs.core.first.call(null,seq70563);
var seq70563__$1 = cljs.core.next.call(null,seq70563);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__70564,seq70563__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args70568 = [];
var len__35776__auto___70573 = arguments.length;
var i__35777__auto___70574 = (0);
while(true){
if((i__35777__auto___70574 < len__35776__auto___70573)){
args70568.push((arguments[i__35777__auto___70574]));

var G__70575 = (i__35777__auto___70574 + (1));
i__35777__auto___70574 = G__70575;
continue;
} else {
}
break;
}

var G__70570 = args70568.length;
switch (G__70570) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args70568.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj70572 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__34555__auto__ = start_index;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (0);
}
})()};
return obj70572;
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
var len__35776__auto___70583 = arguments.length;
var i__35777__auto___70584 = (0);
while(true){
if((i__35777__auto___70584 < len__35776__auto___70583)){
args__35783__auto__.push((arguments[i__35777__auto___70584]));

var G__70585 = (i__35777__auto___70584 + (1));
i__35777__auto___70584 = G__70585;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__70579){
var vec__70580 = p__70579;
var state_override_fn = cljs.core.nth.call(null,vec__70580,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq70577){
var G__70578 = cljs.core.first.call(null,seq70577);
var seq70577__$1 = cljs.core.next.call(null,seq70577);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__70578,seq70577__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__35647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_70589_70592 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_70590_70593 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_70589_70592,_STAR_print_fn_STAR_70590_70593,sb__35647__auto__){
return (function (x__35648__auto__){
return sb__35647__auto__.append(x__35648__auto__);
});})(_STAR_print_newline_STAR_70589_70592,_STAR_print_fn_STAR_70590_70593,sb__35647__auto__))
;

try{var _STAR_print_level_STAR_70591_70594 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_70591_70594;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_70590_70593;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_70589_70592;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__35647__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_70596 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_70596;
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
var G__70598 = name;
switch (G__70598) {
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
var vec__70603 = tag;
var html_tag = cljs.core.nth.call(null,vec__70603,(0),null);
var style = cljs.core.nth.call(null,vec__70603,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_70607 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_70607;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_70610 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_70611 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_70611;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_70610;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__70612 = initial_value;
var G__70613 = value.call(null);
initial_value = G__70612;
value = G__70613;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__70614 = initial_value;
var G__70615 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__70614;
value = G__70615;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__70616 = initial_value;
var G__70617 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__70616;
value = G__70617;
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

//# sourceMappingURL=templating.js.map?rel=1491640789895