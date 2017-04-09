// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__42295 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__42295) {
case "all":
return "ALL";

break;
case "debug":
return "FINE";

break;
case "info":
return "INFO";

break;
case "warn":
return "WARNING";

break;
case "error":
return "SEVERE";

break;
case "none":
return "OFF";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(log_level)].join('')));

}
})()));
});
/**
 * Include a pretty-printed cljs value as a string with the given text message.
 */
untangled.client.logging.value_message = (function untangled$client$logging$value_message(msg,val){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__40314__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_42299_42301 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_42300_42302 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_42299_42301,_STAR_print_fn_STAR_42300_42302,sb__40314__auto__){
return (function (x__40315__auto__){
return sb__40314__auto__.append(x__40315__auto__);
});})(_STAR_print_newline_STAR_42299_42301,_STAR_print_fn_STAR_42300_42302,sb__40314__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42300_42302;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42299_42301;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__40314__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args42303 = [];
var len__40443__auto___42306 = arguments.length;
var i__40444__auto___42307 = (0);
while(true){
if((i__40444__auto___42307 < len__40443__auto___42306)){
args42303.push((arguments[i__40444__auto___42307]));

var G__42308 = (i__40444__auto___42307 + (1));
i__40444__auto___42307 = G__42308;
continue;
} else {
}
break;
}

var G__42305 = args42303.length;
switch (G__42305) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42303.length)].join('')));

}
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1 = (function (value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,"DEBUG",value));

return value;
});

untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2 = (function (msg,value){
goog.log.fine(om.next._STAR_logger_STAR_,untangled.client.logging.value_message.call(null,msg,value));

return value;
});

untangled.client.logging.debug.cljs$lang$maxFixedArity = 2;

/**
 * output an INFO level message to the Om logger
 */
untangled.client.logging.info = (function untangled$client$logging$info(var_args){
var args__40450__auto__ = [];
var len__40443__auto___42311 = arguments.length;
var i__40444__auto___42312 = (0);
while(true){
if((i__40444__auto___42312 < len__40443__auto___42311)){
args__40450__auto__.push((arguments[i__40444__auto___42312]));

var G__42313 = (i__40444__auto___42312 + (1));
i__40444__auto___42312 = G__42313;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((0) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__40451__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.info(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq42310){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42310));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__40450__auto__ = [];
var len__40443__auto___42315 = arguments.length;
var i__40444__auto___42316 = (0);
while(true){
if((i__40444__auto___42316 < len__40443__auto___42315)){
args__40450__auto__.push((arguments[i__40444__auto___42316]));

var G__42317 = (i__40444__auto___42316 + (1));
i__40444__auto___42316 = G__42317;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((0) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__40451__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.warning(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq42314){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42314));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__40450__auto__ = [];
var len__40443__auto___42319 = arguments.length;
var i__40444__auto___42320 = (0);
while(true){
if((i__40444__auto___42320 < len__40443__auto___42319)){
args__40450__auto__.push((arguments[i__40444__auto___42320]));

var G__42321 = (i__40444__auto___42320 + (1));
i__40444__auto___42320 = G__42321;
continue;
} else {
}
break;
}

var argseq__40451__auto__ = ((((0) < args__40450__auto__.length))?(new cljs.core.IndexedSeq(args__40450__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__40451__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.error(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq42318){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42318));
});


//# sourceMappingURL=logging.js.map?rel=1491695650777