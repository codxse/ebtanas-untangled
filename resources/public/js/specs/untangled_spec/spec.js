// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.spec');
goog.require('cljs.core');
goog.require('cljs.spec');
untangled_spec.spec.conform_BANG_ = (function untangled_spec$spec$conform_BANG_(spec,x){
var rt = cljs.spec.conform.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,rt))){
throw cljs.core.ex_info.call(null,cljs.spec.explain_str.call(null,spec,x),cljs.spec.explain_data.call(null,spec,x));
} else {
}

return rt;
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
untangled_spec.spec.regex_QMARK_ = (function untangled_spec$spec$regex_QMARK_(x){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,x),cljs.core.type.call(null,(new RegExp(""))));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.spec","regex","untangled-spec.spec/regex",-961591711),new cljs.core.Symbol("untangled-spec.spec","regex?","untangled-spec.spec/regex?",-719816093,null),untangled_spec.spec.regex_QMARK_);

//# sourceMappingURL=spec.js.map?rel=1491640773732