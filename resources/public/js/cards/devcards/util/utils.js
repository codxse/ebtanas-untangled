// Compiled by ClojureScript 1.9.494 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__6751__auto__ = goog.global.document;
if(cljs.core.truth_(temp__6751__auto__)){
var doc = temp__6751__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__35647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_84543_84545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_84544_84546 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_84543_84545,_STAR_print_fn_STAR_84544_84546,sb__35647__auto__){
return (function (x__35648__auto__){
return sb__35647__auto__.append(x__35648__auto__);
});})(_STAR_print_newline_STAR_84543_84545,_STAR_print_fn_STAR_84544_84546,sb__35647__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_84544_84546;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_84543_84545;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__35647__auto__)].join('');
}catch (e84541){if((e84541 instanceof Error)){
var e1 = e84541;
try{return obj.toString();
}catch (e84542){if((e84542 instanceof Error)){
var e2 = e84542;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e84542;

}
}} else {
throw e84541;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_84548 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_84548;
}});

//# sourceMappingURL=utils.js.map?rel=1491640820352