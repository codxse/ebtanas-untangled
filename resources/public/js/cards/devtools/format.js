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
var len__35776__auto___89259 = arguments.length;
var i__35777__auto___89260 = (0);
while(true){
if((i__35777__auto___89260 < len__35776__auto___89259)){
args__35783__auto__.push((arguments[i__35777__auto___89260]));

var G__89261 = (i__35777__auto___89260 + (1));
i__35777__auto___89260 = G__89261;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq89258){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89258));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89263 = arguments.length;
var i__35777__auto___89264 = (0);
while(true){
if((i__35777__auto___89264 < len__35776__auto___89263)){
args__35783__auto__.push((arguments[i__35777__auto___89264]));

var G__89265 = (i__35777__auto___89264 + (1));
i__35777__auto___89264 = G__89265;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq89262){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89262));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89267 = arguments.length;
var i__35777__auto___89268 = (0);
while(true){
if((i__35777__auto___89268 < len__35776__auto___89267)){
args__35783__auto__.push((arguments[i__35777__auto___89268]));

var G__89269 = (i__35777__auto___89268 + (1));
i__35777__auto___89268 = G__89269;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq89266){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89266));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89271 = arguments.length;
var i__35777__auto___89272 = (0);
while(true){
if((i__35777__auto___89272 < len__35776__auto___89271)){
args__35783__auto__.push((arguments[i__35777__auto___89272]));

var G__89273 = (i__35777__auto___89272 + (1));
i__35777__auto___89272 = G__89273;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq89270){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89270));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89275 = arguments.length;
var i__35777__auto___89276 = (0);
while(true){
if((i__35777__auto___89276 < len__35776__auto___89275)){
args__35783__auto__.push((arguments[i__35777__auto___89276]));

var G__89277 = (i__35777__auto___89276 + (1));
i__35777__auto___89276 = G__89277;
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

devtools.format.template.cljs$lang$applyTo = (function (seq89274){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89274));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89279 = arguments.length;
var i__35777__auto___89280 = (0);
while(true){
if((i__35777__auto___89280 < len__35776__auto___89279)){
args__35783__auto__.push((arguments[i__35777__auto___89280]));

var G__89281 = (i__35777__auto___89280 + (1));
i__35777__auto___89280 = G__89281;
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

devtools.format.group.cljs$lang$applyTo = (function (seq89278){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89278));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89283 = arguments.length;
var i__35777__auto___89284 = (0);
while(true){
if((i__35777__auto___89284 < len__35776__auto___89283)){
args__35783__auto__.push((arguments[i__35777__auto___89284]));

var G__89285 = (i__35777__auto___89284 + (1));
i__35777__auto___89284 = G__89285;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq89282){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89282));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89293 = arguments.length;
var i__35777__auto___89294 = (0);
while(true){
if((i__35777__auto___89294 < len__35776__auto___89293)){
args__35783__auto__.push((arguments[i__35777__auto___89294]));

var G__89295 = (i__35777__auto___89294 + (1));
i__35777__auto___89294 = G__89295;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__89289){
var vec__89290 = p__89289;
var state_override = cljs.core.nth.call(null,vec__89290,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__89290,state_override){
return (function (p1__89286_SHARP_){
return cljs.core.merge.call(null,p1__89286_SHARP_,state_override);
});})(vec__89290,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq89287){
var G__89288 = cljs.core.first.call(null,seq89287);
var seq89287__$1 = cljs.core.next.call(null,seq89287);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__89288,seq89287__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89297 = arguments.length;
var i__35777__auto___89298 = (0);
while(true){
if((i__35777__auto___89298 < len__35776__auto___89297)){
args__35783__auto__.push((arguments[i__35777__auto___89298]));

var G__89299 = (i__35777__auto___89298 + (1));
i__35777__auto___89298 = G__89299;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq89296){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89296));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___89302 = arguments.length;
var i__35777__auto___89303 = (0);
while(true){
if((i__35777__auto___89303 < len__35776__auto___89302)){
args__35783__auto__.push((arguments[i__35777__auto___89303]));

var G__89304 = (i__35777__auto___89303 + (1));
i__35777__auto___89303 = G__89304;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq89300){
var G__89301 = cljs.core.first.call(null,seq89300);
var seq89300__$1 = cljs.core.next.call(null,seq89300);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__89301,seq89300__$1);
});


//# sourceMappingURL=format.js.map?rel=1491640824720