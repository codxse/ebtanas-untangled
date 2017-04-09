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
var x231199_231200 = value;

x231199_231200.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x231204_231205 = value;

x231204_231205.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x231209_231210 = value;

x231209_231210.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var len__40427__auto___231218 = arguments.length;
var i__40428__auto___231219 = (0);
while(true){
if((i__40428__auto___231219 < len__40427__auto___231218)){
args__40434__auto__.push((arguments[i__40428__auto___231219]));

var G__231220 = (i__40428__auto___231219 + (1));
i__40428__auto___231219 = G__231220;
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
var seq__231214_231221 = cljs.core.seq.call(null,items);
var chunk__231215_231222 = null;
var count__231216_231223 = (0);
var i__231217_231224 = (0);
while(true){
if((i__231217_231224 < count__231216_231223)){
var item_231225 = cljs.core._nth.call(null,chunk__231215_231222,i__231217_231224);
if(!((item_231225 == null))){
if(cljs.core.coll_QMARK_.call(null,item_231225)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_231225)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_231225));
}
} else {
}

var G__231226 = seq__231214_231221;
var G__231227 = chunk__231215_231222;
var G__231228 = count__231216_231223;
var G__231229 = (i__231217_231224 + (1));
seq__231214_231221 = G__231226;
chunk__231215_231222 = G__231227;
count__231216_231223 = G__231228;
i__231217_231224 = G__231229;
continue;
} else {
var temp__6753__auto___231230 = cljs.core.seq.call(null,seq__231214_231221);
if(temp__6753__auto___231230){
var seq__231214_231231__$1 = temp__6753__auto___231230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__231214_231231__$1)){
var c__40117__auto___231232 = cljs.core.chunk_first.call(null,seq__231214_231231__$1);
var G__231233 = cljs.core.chunk_rest.call(null,seq__231214_231231__$1);
var G__231234 = c__40117__auto___231232;
var G__231235 = cljs.core.count.call(null,c__40117__auto___231232);
var G__231236 = (0);
seq__231214_231221 = G__231233;
chunk__231215_231222 = G__231234;
count__231216_231223 = G__231235;
i__231217_231224 = G__231236;
continue;
} else {
var item_231237 = cljs.core.first.call(null,seq__231214_231231__$1);
if(!((item_231237 == null))){
if(cljs.core.coll_QMARK_.call(null,item_231237)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_231237)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_231237));
}
} else {
}

var G__231238 = cljs.core.next.call(null,seq__231214_231231__$1);
var G__231239 = null;
var G__231240 = (0);
var G__231241 = (0);
seq__231214_231221 = G__231238;
chunk__231215_231222 = G__231239;
count__231216_231223 = G__231240;
i__231217_231224 = G__231241;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq231213){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq231213));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__40434__auto__ = [];
var len__40427__auto___231249 = arguments.length;
var i__40428__auto___231250 = (0);
while(true){
if((i__40428__auto___231250 < len__40427__auto___231249)){
args__40434__auto__.push((arguments[i__40428__auto___231250]));

var G__231251 = (i__40428__auto___231250 + (1));
i__40428__auto___231250 = G__231251;
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
var seq__231245_231252 = cljs.core.seq.call(null,children);
var chunk__231246_231253 = null;
var count__231247_231254 = (0);
var i__231248_231255 = (0);
while(true){
if((i__231248_231255 < count__231247_231254)){
var child_231256 = cljs.core._nth.call(null,chunk__231246_231253,i__231248_231255);
if(!((child_231256 == null))){
if(cljs.core.coll_QMARK_.call(null,child_231256)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_231256))));
} else {
var temp__6751__auto___231257 = devtools.formatters.helpers.pref.call(null,child_231256);
if(cljs.core.truth_(temp__6751__auto___231257)){
var child_value_231258 = temp__6751__auto___231257;
template.push(child_value_231258);
} else {
}
}
} else {
}

var G__231259 = seq__231245_231252;
var G__231260 = chunk__231246_231253;
var G__231261 = count__231247_231254;
var G__231262 = (i__231248_231255 + (1));
seq__231245_231252 = G__231259;
chunk__231246_231253 = G__231260;
count__231247_231254 = G__231261;
i__231248_231255 = G__231262;
continue;
} else {
var temp__6753__auto___231263 = cljs.core.seq.call(null,seq__231245_231252);
if(temp__6753__auto___231263){
var seq__231245_231264__$1 = temp__6753__auto___231263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__231245_231264__$1)){
var c__40117__auto___231265 = cljs.core.chunk_first.call(null,seq__231245_231264__$1);
var G__231266 = cljs.core.chunk_rest.call(null,seq__231245_231264__$1);
var G__231267 = c__40117__auto___231265;
var G__231268 = cljs.core.count.call(null,c__40117__auto___231265);
var G__231269 = (0);
seq__231245_231252 = G__231266;
chunk__231246_231253 = G__231267;
count__231247_231254 = G__231268;
i__231248_231255 = G__231269;
continue;
} else {
var child_231270 = cljs.core.first.call(null,seq__231245_231264__$1);
if(!((child_231270 == null))){
if(cljs.core.coll_QMARK_.call(null,child_231270)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_231270))));
} else {
var temp__6751__auto___231271 = devtools.formatters.helpers.pref.call(null,child_231270);
if(cljs.core.truth_(temp__6751__auto___231271)){
var child_value_231272 = temp__6751__auto___231271;
template.push(child_value_231272);
} else {
}
}
} else {
}

var G__231273 = cljs.core.next.call(null,seq__231245_231264__$1);
var G__231274 = null;
var G__231275 = (0);
var G__231276 = (0);
seq__231245_231252 = G__231273;
chunk__231246_231253 = G__231274;
count__231247_231254 = G__231275;
i__231248_231255 = G__231276;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq231242){
var G__231243 = cljs.core.first.call(null,seq231242);
var seq231242__$1 = cljs.core.next.call(null,seq231242);
var G__231244 = cljs.core.first.call(null,seq231242__$1);
var seq231242__$2 = cljs.core.next.call(null,seq231242__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__231243,G__231244,seq231242__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__40434__auto__ = [];
var len__40427__auto___231279 = arguments.length;
var i__40428__auto___231280 = (0);
while(true){
if((i__40428__auto___231280 < len__40427__auto___231279)){
args__40434__auto__.push((arguments[i__40428__auto___231280]));

var G__231281 = (i__40428__auto___231280 + (1));
i__40428__auto___231280 = G__231281;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq231277){
var G__231278 = cljs.core.first.call(null,seq231277);
var seq231277__$1 = cljs.core.next.call(null,seq231277);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__231278,seq231277__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__40434__auto__ = [];
var len__40427__auto___231284 = arguments.length;
var i__40428__auto___231285 = (0);
while(true){
if((i__40428__auto___231285 < len__40427__auto___231284)){
args__40434__auto__.push((arguments[i__40428__auto___231285]));

var G__231286 = (i__40428__auto___231285 + (1));
i__40428__auto___231285 = G__231286;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq231282){
var G__231283 = cljs.core.first.call(null,seq231282);
var seq231282__$1 = cljs.core.next.call(null,seq231282);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__231283,seq231282__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args231287 = [];
var len__40427__auto___231292 = arguments.length;
var i__40428__auto___231293 = (0);
while(true){
if((i__40428__auto___231293 < len__40427__auto___231292)){
args231287.push((arguments[i__40428__auto___231293]));

var G__231294 = (i__40428__auto___231293 + (1));
i__40428__auto___231293 = G__231294;
continue;
} else {
}
break;
}

var G__231289 = args231287.length;
switch (G__231289) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args231287.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj231291 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__39206__auto__ = start_index;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return (0);
}
})()};
return obj231291;
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
var len__40427__auto___231302 = arguments.length;
var i__40428__auto___231303 = (0);
while(true){
if((i__40428__auto___231303 < len__40427__auto___231302)){
args__40434__auto__.push((arguments[i__40428__auto___231303]));

var G__231304 = (i__40428__auto___231303 + (1));
i__40428__auto___231303 = G__231304;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__231298){
var vec__231299 = p__231298;
var state_override_fn = cljs.core.nth.call(null,vec__231299,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq231296){
var G__231297 = cljs.core.first.call(null,seq231296);
var seq231296__$1 = cljs.core.next.call(null,seq231296);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__231297,seq231296__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__40298__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_231308_231311 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_231309_231312 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_231308_231311,_STAR_print_fn_STAR_231309_231312,sb__40298__auto__){
return (function (x__40299__auto__){
return sb__40298__auto__.append(x__40299__auto__);
});})(_STAR_print_newline_STAR_231308_231311,_STAR_print_fn_STAR_231309_231312,sb__40298__auto__))
;

try{var _STAR_print_level_STAR_231310_231313 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_231310_231313;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_231309_231312;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_231308_231311;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__40298__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_231315 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_231315;
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
var G__231317 = name;
switch (G__231317) {
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
var vec__231322 = tag;
var html_tag = cljs.core.nth.call(null,vec__231322,(0),null);
var style = cljs.core.nth.call(null,vec__231322,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_231326 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_231326;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_231329 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_231330 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_231330;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_231329;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__231331 = initial_value;
var G__231332 = value.call(null);
initial_value = G__231331;
value = G__231332;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__231333 = initial_value;
var G__231334 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__231333;
value = G__231334;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__231335 = initial_value;
var G__231336 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__231335;
value = G__231336;
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

//# sourceMappingURL=templating.js.map?rel=1491715155088