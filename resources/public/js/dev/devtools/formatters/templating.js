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
var x110243_110244 = value;

x110243_110244.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x110248_110249 = value;

x110248_110249.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x110253_110254 = value;

x110253_110254.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var len__35776__auto___110262 = arguments.length;
var i__35777__auto___110263 = (0);
while(true){
if((i__35777__auto___110263 < len__35776__auto___110262)){
args__35783__auto__.push((arguments[i__35777__auto___110263]));

var G__110264 = (i__35777__auto___110263 + (1));
i__35777__auto___110263 = G__110264;
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
var seq__110258_110265 = cljs.core.seq.call(null,items);
var chunk__110259_110266 = null;
var count__110260_110267 = (0);
var i__110261_110268 = (0);
while(true){
if((i__110261_110268 < count__110260_110267)){
var item_110269 = cljs.core._nth.call(null,chunk__110259_110266,i__110261_110268);
if(!((item_110269 == null))){
if(cljs.core.coll_QMARK_.call(null,item_110269)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_110269)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_110269));
}
} else {
}

var G__110270 = seq__110258_110265;
var G__110271 = chunk__110259_110266;
var G__110272 = count__110260_110267;
var G__110273 = (i__110261_110268 + (1));
seq__110258_110265 = G__110270;
chunk__110259_110266 = G__110271;
count__110260_110267 = G__110272;
i__110261_110268 = G__110273;
continue;
} else {
var temp__6753__auto___110274 = cljs.core.seq.call(null,seq__110258_110265);
if(temp__6753__auto___110274){
var seq__110258_110275__$1 = temp__6753__auto___110274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__110258_110275__$1)){
var c__35466__auto___110276 = cljs.core.chunk_first.call(null,seq__110258_110275__$1);
var G__110277 = cljs.core.chunk_rest.call(null,seq__110258_110275__$1);
var G__110278 = c__35466__auto___110276;
var G__110279 = cljs.core.count.call(null,c__35466__auto___110276);
var G__110280 = (0);
seq__110258_110265 = G__110277;
chunk__110259_110266 = G__110278;
count__110260_110267 = G__110279;
i__110261_110268 = G__110280;
continue;
} else {
var item_110281 = cljs.core.first.call(null,seq__110258_110275__$1);
if(!((item_110281 == null))){
if(cljs.core.coll_QMARK_.call(null,item_110281)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_110281)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_110281));
}
} else {
}

var G__110282 = cljs.core.next.call(null,seq__110258_110275__$1);
var G__110283 = null;
var G__110284 = (0);
var G__110285 = (0);
seq__110258_110265 = G__110282;
chunk__110259_110266 = G__110283;
count__110260_110267 = G__110284;
i__110261_110268 = G__110285;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq110257){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq110257));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___110293 = arguments.length;
var i__35777__auto___110294 = (0);
while(true){
if((i__35777__auto___110294 < len__35776__auto___110293)){
args__35783__auto__.push((arguments[i__35777__auto___110294]));

var G__110295 = (i__35777__auto___110294 + (1));
i__35777__auto___110294 = G__110295;
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
var seq__110289_110296 = cljs.core.seq.call(null,children);
var chunk__110290_110297 = null;
var count__110291_110298 = (0);
var i__110292_110299 = (0);
while(true){
if((i__110292_110299 < count__110291_110298)){
var child_110300 = cljs.core._nth.call(null,chunk__110290_110297,i__110292_110299);
if(!((child_110300 == null))){
if(cljs.core.coll_QMARK_.call(null,child_110300)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_110300))));
} else {
var temp__6751__auto___110301 = devtools.formatters.helpers.pref.call(null,child_110300);
if(cljs.core.truth_(temp__6751__auto___110301)){
var child_value_110302 = temp__6751__auto___110301;
template.push(child_value_110302);
} else {
}
}
} else {
}

var G__110303 = seq__110289_110296;
var G__110304 = chunk__110290_110297;
var G__110305 = count__110291_110298;
var G__110306 = (i__110292_110299 + (1));
seq__110289_110296 = G__110303;
chunk__110290_110297 = G__110304;
count__110291_110298 = G__110305;
i__110292_110299 = G__110306;
continue;
} else {
var temp__6753__auto___110307 = cljs.core.seq.call(null,seq__110289_110296);
if(temp__6753__auto___110307){
var seq__110289_110308__$1 = temp__6753__auto___110307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__110289_110308__$1)){
var c__35466__auto___110309 = cljs.core.chunk_first.call(null,seq__110289_110308__$1);
var G__110310 = cljs.core.chunk_rest.call(null,seq__110289_110308__$1);
var G__110311 = c__35466__auto___110309;
var G__110312 = cljs.core.count.call(null,c__35466__auto___110309);
var G__110313 = (0);
seq__110289_110296 = G__110310;
chunk__110290_110297 = G__110311;
count__110291_110298 = G__110312;
i__110292_110299 = G__110313;
continue;
} else {
var child_110314 = cljs.core.first.call(null,seq__110289_110308__$1);
if(!((child_110314 == null))){
if(cljs.core.coll_QMARK_.call(null,child_110314)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_110314))));
} else {
var temp__6751__auto___110315 = devtools.formatters.helpers.pref.call(null,child_110314);
if(cljs.core.truth_(temp__6751__auto___110315)){
var child_value_110316 = temp__6751__auto___110315;
template.push(child_value_110316);
} else {
}
}
} else {
}

var G__110317 = cljs.core.next.call(null,seq__110289_110308__$1);
var G__110318 = null;
var G__110319 = (0);
var G__110320 = (0);
seq__110289_110296 = G__110317;
chunk__110290_110297 = G__110318;
count__110291_110298 = G__110319;
i__110292_110299 = G__110320;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq110286){
var G__110287 = cljs.core.first.call(null,seq110286);
var seq110286__$1 = cljs.core.next.call(null,seq110286);
var G__110288 = cljs.core.first.call(null,seq110286__$1);
var seq110286__$2 = cljs.core.next.call(null,seq110286__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__110287,G__110288,seq110286__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___110323 = arguments.length;
var i__35777__auto___110324 = (0);
while(true){
if((i__35777__auto___110324 < len__35776__auto___110323)){
args__35783__auto__.push((arguments[i__35777__auto___110324]));

var G__110325 = (i__35777__auto___110324 + (1));
i__35777__auto___110324 = G__110325;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq110321){
var G__110322 = cljs.core.first.call(null,seq110321);
var seq110321__$1 = cljs.core.next.call(null,seq110321);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__110322,seq110321__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___110328 = arguments.length;
var i__35777__auto___110329 = (0);
while(true){
if((i__35777__auto___110329 < len__35776__auto___110328)){
args__35783__auto__.push((arguments[i__35777__auto___110329]));

var G__110330 = (i__35777__auto___110329 + (1));
i__35777__auto___110329 = G__110330;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq110326){
var G__110327 = cljs.core.first.call(null,seq110326);
var seq110326__$1 = cljs.core.next.call(null,seq110326);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__110327,seq110326__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args110331 = [];
var len__35776__auto___110336 = arguments.length;
var i__35777__auto___110337 = (0);
while(true){
if((i__35777__auto___110337 < len__35776__auto___110336)){
args110331.push((arguments[i__35777__auto___110337]));

var G__110338 = (i__35777__auto___110337 + (1));
i__35777__auto___110337 = G__110338;
continue;
} else {
}
break;
}

var G__110333 = args110331.length;
switch (G__110333) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args110331.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj110335 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__34555__auto__ = start_index;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (0);
}
})()};
return obj110335;
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
var len__35776__auto___110346 = arguments.length;
var i__35777__auto___110347 = (0);
while(true){
if((i__35777__auto___110347 < len__35776__auto___110346)){
args__35783__auto__.push((arguments[i__35777__auto___110347]));

var G__110348 = (i__35777__auto___110347 + (1));
i__35777__auto___110347 = G__110348;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__110342){
var vec__110343 = p__110342;
var state_override_fn = cljs.core.nth.call(null,vec__110343,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq110340){
var G__110341 = cljs.core.first.call(null,seq110340);
var seq110340__$1 = cljs.core.next.call(null,seq110340);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__110341,seq110340__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__35647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_110352_110355 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_110353_110356 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_110352_110355,_STAR_print_fn_STAR_110353_110356,sb__35647__auto__){
return (function (x__35648__auto__){
return sb__35647__auto__.append(x__35648__auto__);
});})(_STAR_print_newline_STAR_110352_110355,_STAR_print_fn_STAR_110353_110356,sb__35647__auto__))
;

try{var _STAR_print_level_STAR_110354_110357 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_110354_110357;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_110353_110356;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_110352_110355;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__35647__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_110359 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_110359;
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
var G__110361 = name;
switch (G__110361) {
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
var vec__110366 = tag;
var html_tag = cljs.core.nth.call(null,vec__110366,(0),null);
var style = cljs.core.nth.call(null,vec__110366,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_110370 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_110370;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_110373 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_110374 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_110374;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_110373;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__110375 = initial_value;
var G__110376 = value.call(null);
initial_value = G__110375;
value = G__110376;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__110377 = initial_value;
var G__110378 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__110377;
value = G__110378;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__110379 = initial_value;
var G__110380 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__110379;
value = G__110380;
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

//# sourceMappingURL=templating.js.map?rel=1491640864970