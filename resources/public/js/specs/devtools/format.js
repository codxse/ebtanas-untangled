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
var len__35776__auto___67778 = arguments.length;
var i__35777__auto___67779 = (0);
while(true){
if((i__35777__auto___67779 < len__35776__auto___67778)){
args__35783__auto__.push((arguments[i__35777__auto___67779]));

var G__67780 = (i__35777__auto___67779 + (1));
i__35777__auto___67779 = G__67780;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq67777){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67777));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67782 = arguments.length;
var i__35777__auto___67783 = (0);
while(true){
if((i__35777__auto___67783 < len__35776__auto___67782)){
args__35783__auto__.push((arguments[i__35777__auto___67783]));

var G__67784 = (i__35777__auto___67783 + (1));
i__35777__auto___67783 = G__67784;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq67781){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67781));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67786 = arguments.length;
var i__35777__auto___67787 = (0);
while(true){
if((i__35777__auto___67787 < len__35776__auto___67786)){
args__35783__auto__.push((arguments[i__35777__auto___67787]));

var G__67788 = (i__35777__auto___67787 + (1));
i__35777__auto___67787 = G__67788;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq67785){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67785));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67790 = arguments.length;
var i__35777__auto___67791 = (0);
while(true){
if((i__35777__auto___67791 < len__35776__auto___67790)){
args__35783__auto__.push((arguments[i__35777__auto___67791]));

var G__67792 = (i__35777__auto___67791 + (1));
i__35777__auto___67791 = G__67792;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq67789){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67789));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67794 = arguments.length;
var i__35777__auto___67795 = (0);
while(true){
if((i__35777__auto___67795 < len__35776__auto___67794)){
args__35783__auto__.push((arguments[i__35777__auto___67795]));

var G__67796 = (i__35777__auto___67795 + (1));
i__35777__auto___67795 = G__67796;
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

devtools.format.template.cljs$lang$applyTo = (function (seq67793){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67793));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67798 = arguments.length;
var i__35777__auto___67799 = (0);
while(true){
if((i__35777__auto___67799 < len__35776__auto___67798)){
args__35783__auto__.push((arguments[i__35777__auto___67799]));

var G__67800 = (i__35777__auto___67799 + (1));
i__35777__auto___67799 = G__67800;
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

devtools.format.group.cljs$lang$applyTo = (function (seq67797){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67797));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67802 = arguments.length;
var i__35777__auto___67803 = (0);
while(true){
if((i__35777__auto___67803 < len__35776__auto___67802)){
args__35783__auto__.push((arguments[i__35777__auto___67803]));

var G__67804 = (i__35777__auto___67803 + (1));
i__35777__auto___67803 = G__67804;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq67801){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67801));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67812 = arguments.length;
var i__35777__auto___67813 = (0);
while(true){
if((i__35777__auto___67813 < len__35776__auto___67812)){
args__35783__auto__.push((arguments[i__35777__auto___67813]));

var G__67814 = (i__35777__auto___67813 + (1));
i__35777__auto___67813 = G__67814;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__67808){
var vec__67809 = p__67808;
var state_override = cljs.core.nth.call(null,vec__67809,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__67809,state_override){
return (function (p1__67805_SHARP_){
return cljs.core.merge.call(null,p1__67805_SHARP_,state_override);
});})(vec__67809,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq67806){
var G__67807 = cljs.core.first.call(null,seq67806);
var seq67806__$1 = cljs.core.next.call(null,seq67806);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__67807,seq67806__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67816 = arguments.length;
var i__35777__auto___67817 = (0);
while(true){
if((i__35777__auto___67817 < len__35776__auto___67816)){
args__35783__auto__.push((arguments[i__35777__auto___67817]));

var G__67818 = (i__35777__auto___67817 + (1));
i__35777__auto___67817 = G__67818;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq67815){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67815));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__35783__auto__ = [];
var len__35776__auto___67821 = arguments.length;
var i__35777__auto___67822 = (0);
while(true){
if((i__35777__auto___67822 < len__35776__auto___67821)){
args__35783__auto__.push((arguments[i__35777__auto___67822]));

var G__67823 = (i__35777__auto___67822 + (1));
i__35777__auto___67822 = G__67823;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq67819){
var G__67820 = cljs.core.first.call(null,seq67819);
var seq67819__$1 = cljs.core.next.call(null,seq67819);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__67820,seq67819__$1);
});


//# sourceMappingURL=format.js.map?rel=1491640785354