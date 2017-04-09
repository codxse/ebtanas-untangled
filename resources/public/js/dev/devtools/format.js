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
var len__40427__auto___228915 = arguments.length;
var i__40428__auto___228916 = (0);
while(true){
if((i__40428__auto___228916 < len__40427__auto___228915)){
args__40434__auto__.push((arguments[i__40428__auto___228916]));

var G__228917 = (i__40428__auto___228916 + (1));
i__40428__auto___228916 = G__228917;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq228914){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228914));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228919 = arguments.length;
var i__40428__auto___228920 = (0);
while(true){
if((i__40428__auto___228920 < len__40427__auto___228919)){
args__40434__auto__.push((arguments[i__40428__auto___228920]));

var G__228921 = (i__40428__auto___228920 + (1));
i__40428__auto___228920 = G__228921;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq228918){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228918));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228923 = arguments.length;
var i__40428__auto___228924 = (0);
while(true){
if((i__40428__auto___228924 < len__40427__auto___228923)){
args__40434__auto__.push((arguments[i__40428__auto___228924]));

var G__228925 = (i__40428__auto___228924 + (1));
i__40428__auto___228924 = G__228925;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq228922){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228922));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228927 = arguments.length;
var i__40428__auto___228928 = (0);
while(true){
if((i__40428__auto___228928 < len__40427__auto___228927)){
args__40434__auto__.push((arguments[i__40428__auto___228928]));

var G__228929 = (i__40428__auto___228928 + (1));
i__40428__auto___228928 = G__228929;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq228926){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228926));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228931 = arguments.length;
var i__40428__auto___228932 = (0);
while(true){
if((i__40428__auto___228932 < len__40427__auto___228931)){
args__40434__auto__.push((arguments[i__40428__auto___228932]));

var G__228933 = (i__40428__auto___228932 + (1));
i__40428__auto___228932 = G__228933;
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

devtools.format.template.cljs$lang$applyTo = (function (seq228930){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228930));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228935 = arguments.length;
var i__40428__auto___228936 = (0);
while(true){
if((i__40428__auto___228936 < len__40427__auto___228935)){
args__40434__auto__.push((arguments[i__40428__auto___228936]));

var G__228937 = (i__40428__auto___228936 + (1));
i__40428__auto___228936 = G__228937;
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

devtools.format.group.cljs$lang$applyTo = (function (seq228934){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228934));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228939 = arguments.length;
var i__40428__auto___228940 = (0);
while(true){
if((i__40428__auto___228940 < len__40427__auto___228939)){
args__40434__auto__.push((arguments[i__40428__auto___228940]));

var G__228941 = (i__40428__auto___228940 + (1));
i__40428__auto___228940 = G__228941;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq228938){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228938));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228949 = arguments.length;
var i__40428__auto___228950 = (0);
while(true){
if((i__40428__auto___228950 < len__40427__auto___228949)){
args__40434__auto__.push((arguments[i__40428__auto___228950]));

var G__228951 = (i__40428__auto___228950 + (1));
i__40428__auto___228950 = G__228951;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__228945){
var vec__228946 = p__228945;
var state_override = cljs.core.nth.call(null,vec__228946,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__228946,state_override){
return (function (p1__228942_SHARP_){
return cljs.core.merge.call(null,p1__228942_SHARP_,state_override);
});})(vec__228946,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq228943){
var G__228944 = cljs.core.first.call(null,seq228943);
var seq228943__$1 = cljs.core.next.call(null,seq228943);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__228944,seq228943__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228953 = arguments.length;
var i__40428__auto___228954 = (0);
while(true){
if((i__40428__auto___228954 < len__40427__auto___228953)){
args__40434__auto__.push((arguments[i__40428__auto___228954]));

var G__228955 = (i__40428__auto___228954 + (1));
i__40428__auto___228954 = G__228955;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq228952){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228952));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228958 = arguments.length;
var i__40428__auto___228959 = (0);
while(true){
if((i__40428__auto___228959 < len__40427__auto___228958)){
args__40434__auto__.push((arguments[i__40428__auto___228959]));

var G__228960 = (i__40428__auto___228959 + (1));
i__40428__auto___228959 = G__228960;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq228956){
var G__228957 = cljs.core.first.call(null,seq228956);
var seq228956__$1 = cljs.core.next.call(null,seq228956);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__228957,seq228956__$1);
});


//# sourceMappingURL=format.js.map?rel=1491715148923