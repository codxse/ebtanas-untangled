// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__99400 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__99400) {
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
var _STAR_print_newline_STAR_99404_99406 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_99405_99407 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_99404_99406,_STAR_print_fn_STAR_99405_99407,sb__35647__auto__){
return (function (x__35648__auto__){
return sb__35647__auto__.append(x__35648__auto__);
});})(_STAR_print_newline_STAR_99404_99406,_STAR_print_fn_STAR_99405_99407,sb__35647__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_99405_99407;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_99404_99406;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__35647__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args99408 = [];
var len__35776__auto___99411 = arguments.length;
var i__35777__auto___99412 = (0);
while(true){
if((i__35777__auto___99412 < len__35776__auto___99411)){
args99408.push((arguments[i__35777__auto___99412]));

var G__99413 = (i__35777__auto___99412 + (1));
i__35777__auto___99412 = G__99413;
continue;
} else {
}
break;
}

var G__99410 = args99408.length;
switch (G__99410) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args99408.length)].join('')));

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
var len__35776__auto___99416 = arguments.length;
var i__35777__auto___99417 = (0);
while(true){
if((i__35777__auto___99417 < len__35776__auto___99416)){
args__35783__auto__.push((arguments[i__35777__auto___99417]));

var G__99418 = (i__35777__auto___99417 + (1));
i__35777__auto___99417 = G__99418;
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

untangled.client.logging.info.cljs$lang$applyTo = (function (seq99415){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq99415));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__35783__auto__ = [];
var len__35776__auto___99420 = arguments.length;
var i__35777__auto___99421 = (0);
while(true){
if((i__35777__auto___99421 < len__35776__auto___99420)){
args__35783__auto__.push((arguments[i__35777__auto___99421]));

var G__99422 = (i__35777__auto___99421 + (1));
i__35777__auto___99421 = G__99422;
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

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq99419){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq99419));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__35783__auto__ = [];
var len__35776__auto___99424 = arguments.length;
var i__35777__auto___99425 = (0);
while(true){
if((i__35777__auto___99425 < len__35776__auto___99424)){
args__35783__auto__.push((arguments[i__35777__auto___99425]));

var G__99426 = (i__35777__auto___99425 + (1));
i__35777__auto___99425 = G__99426;
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

untangled.client.logging.error.cljs$lang$applyTo = (function (seq99423){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq99423));
});


//# sourceMappingURL=logging.js.map?rel=1491640848953