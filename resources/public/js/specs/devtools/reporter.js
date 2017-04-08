// Compiled by ClojureScript 1.9.494 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___70839 = arguments.length;
var i__35777__auto___70840 = (0);
while(true){
if((i__35777__auto___70840 < len__35776__auto___70839)){
args__35783__auto__.push((arguments[i__35777__auto___70840]));

var G__70841 = (i__35777__auto___70840 + (1));
i__35777__auto___70840 = G__70841;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__70834){
var vec__70835 = p__70834;
var context = cljs.core.nth.call(null,vec__70835,(0),null);
var footer = cljs.core.nth.call(null,vec__70835,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__34555__auto__ = e.message;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("In "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):".")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\n")].join('');
var footer_msg = ((!((footer == null)))?footer:[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("---\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please report the issue here: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = goog.object.get(c,"groupCollapsed");
var log = goog.object.get(c,"log");
var group_end = goog.object.get(c,"groupEnd");
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e70838){var e__$1 = e70838;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq70832){
var G__70833 = cljs.core.first.call(null,seq70832);
var seq70832__$1 = cljs.core.next.call(null,seq70832);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__70833,seq70832__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1491640790489