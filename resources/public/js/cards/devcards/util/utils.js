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
try{var sb__40298__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_206365_206367 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_206366_206368 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_206365_206367,_STAR_print_fn_STAR_206366_206368,sb__40298__auto__){
return (function (x__40299__auto__){
return sb__40298__auto__.append(x__40299__auto__);
});})(_STAR_print_newline_STAR_206365_206367,_STAR_print_fn_STAR_206366_206368,sb__40298__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_206366_206368;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_206365_206367;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__40298__auto__)].join('');
}catch (e206363){if((e206363 instanceof Error)){
var e1 = e206363;
try{return obj.toString();
}catch (e206364){if((e206364 instanceof Error)){
var e2 = e206364;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e206364;

}
}} else {
throw e206363;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_206370 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_206370;
}});

//# sourceMappingURL=utils.js.map?rel=1491715106706