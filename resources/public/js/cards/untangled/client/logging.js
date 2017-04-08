// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__78371 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__78371) {
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
var _STAR_print_newline_STAR_78375_78377 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_78376_78378 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_78375_78377,_STAR_print_fn_STAR_78376_78378,sb__35647__auto__){
return (function (x__35648__auto__){
return sb__35647__auto__.append(x__35648__auto__);
});})(_STAR_print_newline_STAR_78375_78377,_STAR_print_fn_STAR_78376_78378,sb__35647__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_78376_78378;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_78375_78377;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__35647__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args78379 = [];
var len__35776__auto___78382 = arguments.length;
var i__35777__auto___78383 = (0);
while(true){
if((i__35777__auto___78383 < len__35776__auto___78382)){
args78379.push((arguments[i__35777__auto___78383]));

var G__78384 = (i__35777__auto___78383 + (1));
i__35777__auto___78383 = G__78384;
continue;
} else {
}
break;
}

var G__78381 = args78379.length;
switch (G__78381) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args78379.length)].join('')));

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
var len__35776__auto___78387 = arguments.length;
var i__35777__auto___78388 = (0);
while(true){
if((i__35777__auto___78388 < len__35776__auto___78387)){
args__35783__auto__.push((arguments[i__35777__auto___78388]));

var G__78389 = (i__35777__auto___78388 + (1));
i__35777__auto___78388 = G__78389;
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

untangled.client.logging.info.cljs$lang$applyTo = (function (seq78386){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78386));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__35783__auto__ = [];
var len__35776__auto___78391 = arguments.length;
var i__35777__auto___78392 = (0);
while(true){
if((i__35777__auto___78392 < len__35776__auto___78391)){
args__35783__auto__.push((arguments[i__35777__auto___78392]));

var G__78393 = (i__35777__auto___78392 + (1));
i__35777__auto___78392 = G__78393;
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

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq78390){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78390));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__35783__auto__ = [];
var len__35776__auto___78395 = arguments.length;
var i__35777__auto___78396 = (0);
while(true){
if((i__35777__auto___78396 < len__35776__auto___78395)){
args__35783__auto__.push((arguments[i__35777__auto___78396]));

var G__78397 = (i__35777__auto___78396 + (1));
i__35777__auto___78396 = G__78397;
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

untangled.client.logging.error.cljs$lang$applyTo = (function (seq78394){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq78394));
});


//# sourceMappingURL=logging.js.map?rel=1491640811761