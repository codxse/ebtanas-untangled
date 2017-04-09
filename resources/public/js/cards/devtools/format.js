// Compiled by ClojureScript 1.9.494 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__39924__auto__ = (((value == null))?null:value);
var m__39925__auto__ = (devtools.format._header[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,value);
} else {
var m__39925__auto____$1 = (devtools.format._header["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__39924__auto__ = (((value == null))?null:value);
var m__39925__auto__ = (devtools.format._has_body[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,value);
} else {
var m__39925__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__39924__auto__ = (((value == null))?null:value);
var m__39925__auto__ = (devtools.format._body[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,value);
} else {
var m__39925__auto____$1 = (devtools.format._body["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__77923__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__77923__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__77923__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__77923__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__77922__auto__ = temp__6753__auto____$2;
return goog.object.get(o__77922__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__77923__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__77923__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__77923__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__77923__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__77922__auto__ = temp__6753__auto____$2;
return goog.object.get(o__77922__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__77923__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__77923__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__77923__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__77923__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__77922__auto__ = temp__6753__auto____$2;
return goog.object.get(o__77922__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__77923__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__77923__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__77923__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__77923__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__77922__auto__ = temp__6753__auto____$2;
return goog.object.get(o__77922__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__77923__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__77923__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__77923__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__77923__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__77922__auto__ = temp__6753__auto____$2;
return goog.object.get(o__77922__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__77923__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__77923__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__77923__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__77923__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__77922__auto__ = temp__6753__auto____$2;
return goog.object.get(o__77922__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__77923__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__77923__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__77923__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__77923__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__77922__auto__ = temp__6753__auto____$2;
return goog.object.get(o__77922__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210333 = arguments.length;
var i__40428__auto___210334 = (0);
while(true){
if((i__40428__auto___210334 < len__40427__auto___210333)){
args__40434__auto__.push((arguments[i__40428__auto___210334]));

var G__210335 = (i__40428__auto___210334 + (1));
i__40428__auto___210334 = G__210335;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq210332){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210332));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210337 = arguments.length;
var i__40428__auto___210338 = (0);
while(true){
if((i__40428__auto___210338 < len__40427__auto___210337)){
args__40434__auto__.push((arguments[i__40428__auto___210338]));

var G__210339 = (i__40428__auto___210338 + (1));
i__40428__auto___210338 = G__210339;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq210336){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210336));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210341 = arguments.length;
var i__40428__auto___210342 = (0);
while(true){
if((i__40428__auto___210342 < len__40427__auto___210341)){
args__40434__auto__.push((arguments[i__40428__auto___210342]));

var G__210343 = (i__40428__auto___210342 + (1));
i__40428__auto___210342 = G__210343;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq210340){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210340));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210345 = arguments.length;
var i__40428__auto___210346 = (0);
while(true){
if((i__40428__auto___210346 < len__40427__auto___210345)){
args__40434__auto__.push((arguments[i__40428__auto___210346]));

var G__210347 = (i__40428__auto___210346 + (1));
i__40428__auto___210346 = G__210347;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq210344){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210344));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210349 = arguments.length;
var i__40428__auto___210350 = (0);
while(true){
if((i__40428__auto___210350 < len__40427__auto___210349)){
args__40434__auto__.push((arguments[i__40428__auto___210350]));

var G__210351 = (i__40428__auto___210350 + (1));
i__40428__auto___210350 = G__210351;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq210348){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210348));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210353 = arguments.length;
var i__40428__auto___210354 = (0);
while(true){
if((i__40428__auto___210354 < len__40427__auto___210353)){
args__40434__auto__.push((arguments[i__40428__auto___210354]));

var G__210355 = (i__40428__auto___210354 + (1));
i__40428__auto___210354 = G__210355;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq210352){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210352));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210357 = arguments.length;
var i__40428__auto___210358 = (0);
while(true){
if((i__40428__auto___210358 < len__40427__auto___210357)){
args__40434__auto__.push((arguments[i__40428__auto___210358]));

var G__210359 = (i__40428__auto___210358 + (1));
i__40428__auto___210358 = G__210359;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq210356){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210356));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210367 = arguments.length;
var i__40428__auto___210368 = (0);
while(true){
if((i__40428__auto___210368 < len__40427__auto___210367)){
args__40434__auto__.push((arguments[i__40428__auto___210368]));

var G__210369 = (i__40428__auto___210368 + (1));
i__40428__auto___210368 = G__210369;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__210363){
var vec__210364 = p__210363;
var state_override = cljs.core.nth.call(null,vec__210364,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__210364,state_override){
return (function (p1__210360_SHARP_){
return cljs.core.merge.call(null,p1__210360_SHARP_,state_override);
});})(vec__210364,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq210361){
var G__210362 = cljs.core.first.call(null,seq210361);
var seq210361__$1 = cljs.core.next.call(null,seq210361);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__210362,seq210361__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210371 = arguments.length;
var i__40428__auto___210372 = (0);
while(true){
if((i__40428__auto___210372 < len__40427__auto___210371)){
args__40434__auto__.push((arguments[i__40428__auto___210372]));

var G__210373 = (i__40428__auto___210372 + (1));
i__40428__auto___210372 = G__210373;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq210370){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210370));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210376 = arguments.length;
var i__40428__auto___210377 = (0);
while(true){
if((i__40428__auto___210377 < len__40427__auto___210376)){
args__40434__auto__.push((arguments[i__40428__auto___210377]));

var G__210378 = (i__40428__auto___210377 + (1));
i__40428__auto___210377 = G__210378;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq210374){
var G__210375 = cljs.core.first.call(null,seq210374);
var seq210374__$1 = cljs.core.next.call(null,seq210374);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__210375,seq210374__$1);
});


//# sourceMappingURL=format.js.map?rel=1491715111393