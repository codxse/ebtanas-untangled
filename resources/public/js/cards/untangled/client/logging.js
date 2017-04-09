// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__45601 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__45601) {
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
var _STAR_print_newline_STAR_45605_45607 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_45606_45608 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_45605_45607,_STAR_print_fn_STAR_45606_45608,sb__40314__auto__){
return (function (x__40315__auto__){
return sb__40314__auto__.append(x__40315__auto__);
});})(_STAR_print_newline_STAR_45605_45607,_STAR_print_fn_STAR_45606_45608,sb__40314__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45606_45608;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45605_45607;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__40314__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args45609 = [];
var len__40443__auto___45612 = arguments.length;
var i__40444__auto___45613 = (0);
while(true){
if((i__40444__auto___45613 < len__40443__auto___45612)){
args45609.push((arguments[i__40444__auto___45613]));

var G__45614 = (i__40444__auto___45613 + (1));
i__40444__auto___45613 = G__45614;
continue;
} else {
}
break;
}

var G__45611 = args45609.length;
switch (G__45611) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45609.length)].join('')));

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
var len__40443__auto___45617 = arguments.length;
var i__40444__auto___45618 = (0);
while(true){
if((i__40444__auto___45618 < len__40443__auto___45617)){
args__40450__auto__.push((arguments[i__40444__auto___45618]));

var G__45619 = (i__40444__auto___45618 + (1));
i__40444__auto___45618 = G__45619;
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

untangled.client.logging.info.cljs$lang$applyTo = (function (seq45616){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45616));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__40450__auto__ = [];
var len__40443__auto___45621 = arguments.length;
var i__40444__auto___45622 = (0);
while(true){
if((i__40444__auto___45622 < len__40443__auto___45621)){
args__40450__auto__.push((arguments[i__40444__auto___45622]));

var G__45623 = (i__40444__auto___45622 + (1));
i__40444__auto___45622 = G__45623;
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

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq45620){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45620));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__40450__auto__ = [];
var len__40443__auto___45625 = arguments.length;
var i__40444__auto___45626 = (0);
while(true){
if((i__40444__auto___45626 < len__40443__auto___45625)){
args__40450__auto__.push((arguments[i__40444__auto___45626]));

var G__45627 = (i__40444__auto___45626 + (1));
i__40444__auto___45626 = G__45627;
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

untangled.client.logging.error.cljs$lang$applyTo = (function (seq45624){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45624));
});


//# sourceMappingURL=logging.js.map?rel=1491695659817