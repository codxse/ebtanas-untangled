// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__45252 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__45252) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__35647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_45256_45258 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_45257_45259 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_45256_45258,_STAR_print_fn_STAR_45257_45259,sb__35647__auto__){
return (function (x__35648__auto__){
return sb__35647__auto__.append(x__35648__auto__);
});})(_STAR_print_newline_STAR_45256_45258,_STAR_print_fn_STAR_45257_45259,sb__35647__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45257_45259;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45256_45258;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__35647__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args45260 = [];
var len__35776__auto___45263 = arguments.length;
var i__35777__auto___45264 = (0);
while(true){
if((i__35777__auto___45264 < len__35776__auto___45263)){
args45260.push((arguments[i__35777__auto___45264]));

var G__45265 = (i__35777__auto___45264 + (1));
i__35777__auto___45264 = G__45265;
continue;
} else {
}
break;
}

var G__45262 = args45260.length;
switch (G__45262) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45260.length)].join('')));

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
var args__35783__auto__ = [];
var len__35776__auto___45268 = arguments.length;
var i__35777__auto___45269 = (0);
while(true){
if((i__35777__auto___45269 < len__35776__auto___45268)){
args__35783__auto__.push((arguments[i__35777__auto___45269]));

var G__45270 = (i__35777__auto___45269 + (1));
i__35777__auto___45269 = G__45270;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.info(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq45267){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45267));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45272 = arguments.length;
var i__35777__auto___45273 = (0);
while(true){
if((i__35777__auto___45273 < len__35776__auto___45272)){
args__35783__auto__.push((arguments[i__35777__auto___45273]));

var G__45274 = (i__35777__auto___45273 + (1));
i__35777__auto___45273 = G__45274;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.warning(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq45271){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45271));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__35783__auto__ = [];
var len__35776__auto___45276 = arguments.length;
var i__35777__auto___45277 = (0);
while(true){
if((i__35777__auto___45277 < len__35776__auto___45276)){
args__35783__auto__.push((arguments[i__35777__auto___45277]));

var G__45278 = (i__35777__auto___45277 + (1));
i__35777__auto___45277 = G__45278;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.error(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq45275){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45275));
});


//# sourceMappingURL=logging.js.map?rel=1491640759514