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
var x__35273__auto__ = (((value == null))?null:value);
var m__35274__auto__ = (devtools.format._header[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,value);
} else {
var m__35274__auto____$1 = (devtools.format._header["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,value);
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
var x__35273__auto__ = (((value == null))?null:value);
var m__35274__auto__ = (devtools.format._has_body[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,value);
} else {
var m__35274__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,value);
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
var x__35273__auto__ = (((value == null))?null:value);
var m__35274__auto__ = (devtools.format._body[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,value);
} else {
var m__35274__auto____$1 = (devtools.format._body["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,value);
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
var o__67757__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__67757__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__67757__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__67757__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__67756__auto__ = temp__6753__auto____$2;
return goog.object.get(o__67756__auto__,"make_template");
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
var o__67757__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__67757__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__67757__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__67757__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__67756__auto__ = temp__6753__auto____$2;
return goog.object.get(o__67756__auto__,"make_group");
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
var o__67757__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__67757__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__67757__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__67757__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__67756__auto__ = temp__6753__auto____$2;
return goog.object.get(o__67756__auto__,"make_reference");
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
var o__67757__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__67757__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__67757__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__67757__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__67756__auto__ = temp__6753__auto____$2;
return goog.object.get(o__67756__auto__,"make_surrogate");
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
var o__67757__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__67757__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__67757__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__67757__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__67756__auto__ = temp__6753__auto____$2;
return goog.object.get(o__67756__auto__,"render_markup");
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
var o__67757__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__67757__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__67757__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__67757__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__67756__auto__ = temp__6753__auto____$2;
return goog.object.get(o__67756__auto__,"_LT_header_GT_");
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
var o__67757__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__67757__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__67757__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__67757__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__67756__auto__ = temp__6753__auto____$2;
return goog.object.get(o__67756__auto__,"_LT_standard_body_GT_");
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
var args__35783__auto__ = [];
var len__35776__auto___107959 = arguments.length;
var i__35777__auto___107960 = (0);
while(true){
if((i__35777__auto___107960 < len__35776__auto___107959)){
args__35783__auto__.push((arguments[i__35777__auto___107960]));

var G__107961 = (i__35777__auto___107960 + (1));
i__35777__auto___107960 = G__107961;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq107958){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107958));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107963 = arguments.length;
var i__35777__auto___107964 = (0);
while(true){
if((i__35777__auto___107964 < len__35776__auto___107963)){
args__35783__auto__.push((arguments[i__35777__auto___107964]));

var G__107965 = (i__35777__auto___107964 + (1));
i__35777__auto___107964 = G__107965;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq107962){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107962));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107967 = arguments.length;
var i__35777__auto___107968 = (0);
while(true){
if((i__35777__auto___107968 < len__35776__auto___107967)){
args__35783__auto__.push((arguments[i__35777__auto___107968]));

var G__107969 = (i__35777__auto___107968 + (1));
i__35777__auto___107968 = G__107969;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq107966){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107966));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107971 = arguments.length;
var i__35777__auto___107972 = (0);
while(true){
if((i__35777__auto___107972 < len__35776__auto___107971)){
args__35783__auto__.push((arguments[i__35777__auto___107972]));

var G__107973 = (i__35777__auto___107972 + (1));
i__35777__auto___107972 = G__107973;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq107970){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107970));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107975 = arguments.length;
var i__35777__auto___107976 = (0);
while(true){
if((i__35777__auto___107976 < len__35776__auto___107975)){
args__35783__auto__.push((arguments[i__35777__auto___107976]));

var G__107977 = (i__35777__auto___107976 + (1));
i__35777__auto___107976 = G__107977;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq107974){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107974));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107979 = arguments.length;
var i__35777__auto___107980 = (0);
while(true){
if((i__35777__auto___107980 < len__35776__auto___107979)){
args__35783__auto__.push((arguments[i__35777__auto___107980]));

var G__107981 = (i__35777__auto___107980 + (1));
i__35777__auto___107980 = G__107981;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq107978){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107978));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107983 = arguments.length;
var i__35777__auto___107984 = (0);
while(true){
if((i__35777__auto___107984 < len__35776__auto___107983)){
args__35783__auto__.push((arguments[i__35777__auto___107984]));

var G__107985 = (i__35777__auto___107984 + (1));
i__35777__auto___107984 = G__107985;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq107982){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107982));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107993 = arguments.length;
var i__35777__auto___107994 = (0);
while(true){
if((i__35777__auto___107994 < len__35776__auto___107993)){
args__35783__auto__.push((arguments[i__35777__auto___107994]));

var G__107995 = (i__35777__auto___107994 + (1));
i__35777__auto___107994 = G__107995;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__107989){
var vec__107990 = p__107989;
var state_override = cljs.core.nth.call(null,vec__107990,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__107990,state_override){
return (function (p1__107986_SHARP_){
return cljs.core.merge.call(null,p1__107986_SHARP_,state_override);
});})(vec__107990,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq107987){
var G__107988 = cljs.core.first.call(null,seq107987);
var seq107987__$1 = cljs.core.next.call(null,seq107987);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__107988,seq107987__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107997 = arguments.length;
var i__35777__auto___107998 = (0);
while(true){
if((i__35777__auto___107998 < len__35776__auto___107997)){
args__35783__auto__.push((arguments[i__35777__auto___107998]));

var G__107999 = (i__35777__auto___107998 + (1));
i__35777__auto___107998 = G__107999;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq107996){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107996));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___108002 = arguments.length;
var i__35777__auto___108003 = (0);
while(true){
if((i__35777__auto___108003 < len__35776__auto___108002)){
args__35783__auto__.push((arguments[i__35777__auto___108003]));

var G__108004 = (i__35777__auto___108003 + (1));
i__35777__auto___108003 = G__108004;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq108000){
var G__108001 = cljs.core.first.call(null,seq108000);
var seq108000__$1 = cljs.core.next.call(null,seq108000);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__108001,seq108000__$1);
});


//# sourceMappingURL=format.js.map?rel=1491640861387