// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.client.logging');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('om.next');
goog.require('goog.log');
goog.require('goog.debug.Logger.Level');
untangled.client.logging.set_level = (function untangled$client$logging$set_level(log_level){

return om.next._STAR_logger_STAR_.setLevel(goog.debug.Logger.Level.getPredefinedLevel((function (){var G__220474 = (((log_level instanceof cljs.core.Keyword))?log_level.fqn:null);
switch (G__220474) {
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__40298__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_220478_220480 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_220479_220481 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_220478_220480,_STAR_print_fn_STAR_220479_220481,sb__40298__auto__){
return (function (x__40299__auto__){
return sb__40298__auto__.append(x__40299__auto__);
});})(_STAR_print_newline_STAR_220478_220480,_STAR_print_fn_STAR_220479_220481,sb__40298__auto__))
;

try{cljs.pprint.pprint.call(null,val);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_220479_220481;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_220478_220480;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__40298__auto__)].join('');
})())].join('');
});
/**
 * Print a debug message to the Om logger which includes a value.
 *        Returns the value (like identity) so it can be harmlessly nested in expressions.
 */
untangled.client.logging.debug = (function untangled$client$logging$debug(var_args){
var args220482 = [];
var len__40427__auto___220485 = arguments.length;
var i__40428__auto___220486 = (0);
while(true){
if((i__40428__auto___220486 < len__40427__auto___220485)){
args220482.push((arguments[i__40428__auto___220486]));

var G__220487 = (i__40428__auto___220486 + (1));
i__40428__auto___220486 = G__220487;
continue;
} else {
}
break;
}

var G__220484 = args220482.length;
switch (G__220484) {
case 1:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return untangled.client.logging.debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args220482.length)].join('')));

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
var args__40434__auto__ = [];
var len__40427__auto___220490 = arguments.length;
var i__40428__auto___220491 = (0);
while(true){
if((i__40428__auto___220491 < len__40427__auto___220490)){
args__40434__auto__.push((arguments[i__40428__auto___220491]));

var G__220492 = (i__40428__auto___220491 + (1));
i__40428__auto___220491 = G__220492;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.info(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.info.cljs$lang$maxFixedArity = (0);

untangled.client.logging.info.cljs$lang$applyTo = (function (seq220489){
return untangled.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq220489));
});

/**
 * output a WARNING level message to the Om logger
 */
untangled.client.logging.warn = (function untangled$client$logging$warn(var_args){
var args__40434__auto__ = [];
var len__40427__auto___220494 = arguments.length;
var i__40428__auto___220495 = (0);
while(true){
if((i__40428__auto___220495 < len__40427__auto___220494)){
args__40434__auto__.push((arguments[i__40428__auto___220495]));

var G__220496 = (i__40428__auto___220495 + (1));
i__40428__auto___220495 = G__220496;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.warning(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.warn.cljs$lang$maxFixedArity = (0);

untangled.client.logging.warn.cljs$lang$applyTo = (function (seq220493){
return untangled.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq220493));
});

/**
 * output an ERROR level message to the Om logger
 */
untangled.client.logging.error = (function untangled$client$logging$error(var_args){
var args__40434__auto__ = [];
var len__40427__auto___220498 = arguments.length;
var i__40428__auto___220499 = (0);
while(true){
if((i__40428__auto___220499 < len__40427__auto___220498)){
args__40434__auto__.push((arguments[i__40428__auto___220499]));

var G__220500 = (i__40428__auto___220499 + (1));
i__40428__auto___220499 = G__220500;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic = (function (data){
return goog.log.error(om.next._STAR_logger_STAR_,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",data)));
});

untangled.client.logging.error.cljs$lang$maxFixedArity = (0);

untangled.client.logging.error.cljs$lang$applyTo = (function (seq220497){
return untangled.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq220497));
});


//# sourceMappingURL=logging.js.map?rel=1491715138464