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
var x212607_212608 = value;

x212607_212608.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x212612_212613 = value;

x212612_212613.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x212617_212618 = value;

x212617_212618.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__39194__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__39194__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__40434__auto__ = [];
var len__40427__auto___212626 = arguments.length;
var i__40428__auto___212627 = (0);
while(true){
if((i__40428__auto___212627 < len__40427__auto___212626)){
args__40434__auto__.push((arguments[i__40428__auto___212627]));

var G__212628 = (i__40428__auto___212627 + (1));
i__40428__auto___212627 = G__212628;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__212622_212629 = cljs.core.seq.call(null,items);
var chunk__212623_212630 = null;
var count__212624_212631 = (0);
var i__212625_212632 = (0);
while(true){
if((i__212625_212632 < count__212624_212631)){
var item_212633 = cljs.core._nth.call(null,chunk__212623_212630,i__212625_212632);
if(!((item_212633 == null))){
if(cljs.core.coll_QMARK_.call(null,item_212633)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_212633)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_212633));
}
} else {
}

var G__212634 = seq__212622_212629;
var G__212635 = chunk__212623_212630;
var G__212636 = count__212624_212631;
var G__212637 = (i__212625_212632 + (1));
seq__212622_212629 = G__212634;
chunk__212623_212630 = G__212635;
count__212624_212631 = G__212636;
i__212625_212632 = G__212637;
continue;
} else {
var temp__6753__auto___212638 = cljs.core.seq.call(null,seq__212622_212629);
if(temp__6753__auto___212638){
var seq__212622_212639__$1 = temp__6753__auto___212638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__212622_212639__$1)){
var c__40117__auto___212640 = cljs.core.chunk_first.call(null,seq__212622_212639__$1);
var G__212641 = cljs.core.chunk_rest.call(null,seq__212622_212639__$1);
var G__212642 = c__40117__auto___212640;
var G__212643 = cljs.core.count.call(null,c__40117__auto___212640);
var G__212644 = (0);
seq__212622_212629 = G__212641;
chunk__212623_212630 = G__212642;
count__212624_212631 = G__212643;
i__212625_212632 = G__212644;
continue;
} else {
var item_212645 = cljs.core.first.call(null,seq__212622_212639__$1);
if(!((item_212645 == null))){
if(cljs.core.coll_QMARK_.call(null,item_212645)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_212645)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_212645));
}
} else {
}

var G__212646 = cljs.core.next.call(null,seq__212622_212639__$1);
var G__212647 = null;
var G__212648 = (0);
var G__212649 = (0);
seq__212622_212629 = G__212646;
chunk__212623_212630 = G__212647;
count__212624_212631 = G__212648;
i__212625_212632 = G__212649;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq212621){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq212621));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__40434__auto__ = [];
var len__40427__auto___212657 = arguments.length;
var i__40428__auto___212658 = (0);
while(true){
if((i__40428__auto___212658 < len__40427__auto___212657)){
args__40434__auto__.push((arguments[i__40428__auto___212658]));

var G__212659 = (i__40428__auto___212658 + (1));
i__40428__auto___212658 = G__212659;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((2) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__40435__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__212653_212660 = cljs.core.seq.call(null,children);
var chunk__212654_212661 = null;
var count__212655_212662 = (0);
var i__212656_212663 = (0);
while(true){
if((i__212656_212663 < count__212655_212662)){
var child_212664 = cljs.core._nth.call(null,chunk__212654_212661,i__212656_212663);
if(!((child_212664 == null))){
if(cljs.core.coll_QMARK_.call(null,child_212664)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_212664))));
} else {
var temp__6751__auto___212665 = devtools.formatters.helpers.pref.call(null,child_212664);
if(cljs.core.truth_(temp__6751__auto___212665)){
var child_value_212666 = temp__6751__auto___212665;
template.push(child_value_212666);
} else {
}
}
} else {
}

var G__212667 = seq__212653_212660;
var G__212668 = chunk__212654_212661;
var G__212669 = count__212655_212662;
var G__212670 = (i__212656_212663 + (1));
seq__212653_212660 = G__212667;
chunk__212654_212661 = G__212668;
count__212655_212662 = G__212669;
i__212656_212663 = G__212670;
continue;
} else {
var temp__6753__auto___212671 = cljs.core.seq.call(null,seq__212653_212660);
if(temp__6753__auto___212671){
var seq__212653_212672__$1 = temp__6753__auto___212671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__212653_212672__$1)){
var c__40117__auto___212673 = cljs.core.chunk_first.call(null,seq__212653_212672__$1);
var G__212674 = cljs.core.chunk_rest.call(null,seq__212653_212672__$1);
var G__212675 = c__40117__auto___212673;
var G__212676 = cljs.core.count.call(null,c__40117__auto___212673);
var G__212677 = (0);
seq__212653_212660 = G__212674;
chunk__212654_212661 = G__212675;
count__212655_212662 = G__212676;
i__212656_212663 = G__212677;
continue;
} else {
var child_212678 = cljs.core.first.call(null,seq__212653_212672__$1);
if(!((child_212678 == null))){
if(cljs.core.coll_QMARK_.call(null,child_212678)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_212678))));
} else {
var temp__6751__auto___212679 = devtools.formatters.helpers.pref.call(null,child_212678);
if(cljs.core.truth_(temp__6751__auto___212679)){
var child_value_212680 = temp__6751__auto___212679;
template.push(child_value_212680);
} else {
}
}
} else {
}

var G__212681 = cljs.core.next.call(null,seq__212653_212672__$1);
var G__212682 = null;
var G__212683 = (0);
var G__212684 = (0);
seq__212653_212660 = G__212681;
chunk__212654_212661 = G__212682;
count__212655_212662 = G__212683;
i__212656_212663 = G__212684;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq212650){
var G__212651 = cljs.core.first.call(null,seq212650);
var seq212650__$1 = cljs.core.next.call(null,seq212650);
var G__212652 = cljs.core.first.call(null,seq212650__$1);
var seq212650__$2 = cljs.core.next.call(null,seq212650__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__212651,G__212652,seq212650__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__40434__auto__ = [];
var len__40427__auto___212687 = arguments.length;
var i__40428__auto___212688 = (0);
while(true){
if((i__40428__auto___212688 < len__40427__auto___212687)){
args__40434__auto__.push((arguments[i__40428__auto___212688]));

var G__212689 = (i__40428__auto___212688 + (1));
i__40428__auto___212688 = G__212689;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq212685){
var G__212686 = cljs.core.first.call(null,seq212685);
var seq212685__$1 = cljs.core.next.call(null,seq212685);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__212686,seq212685__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__40434__auto__ = [];
var len__40427__auto___212692 = arguments.length;
var i__40428__auto___212693 = (0);
while(true){
if((i__40428__auto___212693 < len__40427__auto___212692)){
args__40434__auto__.push((arguments[i__40428__auto___212693]));

var G__212694 = (i__40428__auto___212693 + (1));
i__40428__auto___212693 = G__212694;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq212690){
var G__212691 = cljs.core.first.call(null,seq212690);
var seq212690__$1 = cljs.core.next.call(null,seq212690);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__212691,seq212690__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args212695 = [];
var len__40427__auto___212700 = arguments.length;
var i__40428__auto___212701 = (0);
while(true){
if((i__40428__auto___212701 < len__40427__auto___212700)){
args212695.push((arguments[i__40428__auto___212701]));

var G__212702 = (i__40428__auto___212701 + (1));
i__40428__auto___212701 = G__212702;
continue;
} else {
}
break;
}

var G__212697 = args212695.length;
switch (G__212697) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args212695.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj212699 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__39206__auto__ = start_index;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return (0);
}
})()};
return obj212699;
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
var args__40434__auto__ = [];
var len__40427__auto___212710 = arguments.length;
var i__40428__auto___212711 = (0);
while(true){
if((i__40428__auto___212711 < len__40427__auto___212710)){
args__40434__auto__.push((arguments[i__40428__auto___212711]));

var G__212712 = (i__40428__auto___212711 + (1));
i__40428__auto___212711 = G__212712;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__212706){
var vec__212707 = p__212706;
var state_override_fn = cljs.core.nth.call(null,vec__212707,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq212704){
var G__212705 = cljs.core.first.call(null,seq212704);
var seq212704__$1 = cljs.core.next.call(null,seq212704);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__212705,seq212704__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__40298__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_212716_212719 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_212717_212720 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_212716_212719,_STAR_print_fn_STAR_212717_212720,sb__40298__auto__){
return (function (x__40299__auto__){
return sb__40298__auto__.append(x__40299__auto__);
});})(_STAR_print_newline_STAR_212716_212719,_STAR_print_fn_STAR_212717_212720,sb__40298__auto__))
;

try{var _STAR_print_level_STAR_212718_212721 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_212718_212721;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_212717_212720;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_212716_212719;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__40298__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_212723 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_212723;
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
var G__212725 = name;
switch (G__212725) {
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
var vec__212730 = tag;
var html_tag = cljs.core.nth.call(null,vec__212730,(0),null);
var style = cljs.core.nth.call(null,vec__212730,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_212734 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_212734;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_212737 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_212738 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_212738;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_212737;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__212739 = initial_value;
var G__212740 = value.call(null);
initial_value = G__212739;
value = G__212740;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__212741 = initial_value;
var G__212742 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__212741;
value = G__212742;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__212743 = initial_value;
var G__212744 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__212743;
value = G__212744;
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

//# sourceMappingURL=templating.js.map?rel=1491715115574