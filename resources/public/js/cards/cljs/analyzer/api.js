// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.analyzer.api');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
/**
 * Creates an empty compilation state Atom<Map>.
 */
cljs.analyzer.api.empty_state = (function cljs$analyzer$api$empty_state(){
return cljs.env.default_compiler_env.call(null);
});
/**
 * Run the body with the given compilation state Atom<Map>.
 */
cljs.analyzer.api.with_state = (function cljs$analyzer$api$with_state(_AMPERSAND_form,_AMPERSAND_env,state,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.env","with-compiler-env","cljs.env/with-compiler-env",-1219561832,null)),(function (){var x__40140__auto__ = state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),body)));
});

cljs.analyzer.api.with_state.cljs$lang$macro = true;
/**
 * Creates an empty analysis environment.
 */
cljs.analyzer.api.empty_env = (function cljs$analyzer$api$empty_env(){
return cljs.analyzer.empty_env.call(null);
});
/**
 * Disable analyzer warnings for any analysis executed in body.
 */
cljs.analyzer.api.no_warn = (function cljs$analyzer$api$no_warn(var_args){
var args__40434__auto__ = [];
var len__40427__auto___198850 = arguments.length;
var i__40428__auto___198851 = (0);
while(true){
if((i__40428__auto___198851 < len__40427__auto___198850)){
args__40434__auto__.push((arguments[i__40428__auto___198851]));

var G__198852 = (i__40428__auto___198851 + (1));
i__40428__auto___198851 = G__198852;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((2) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__40435__auto__);
});

cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var no_warnings = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.call(null,false));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__40140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",-289667730,null)),(function (){var x__40140__auto__ = no_warnings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),body)));
});

cljs.analyzer.api.no_warn.cljs$lang$maxFixedArity = (2);

cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq198847){
var G__198848 = cljs.core.first.call(null,seq198847);
var seq198847__$1 = cljs.core.next.call(null,seq198847);
var G__198849 = cljs.core.first.call(null,seq198847__$1);
var seq198847__$2 = cljs.core.next.call(null,seq198847__$1);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic(G__198848,G__198849,seq198847__$2);
});


cljs.analyzer.api.no_warn.cljs$lang$macro = true;
/**
 * Test if the given warning-type is enabled.
 */
cljs.analyzer.api.warning_enabled_QMARK_ = (function cljs$analyzer$api$warning_enabled_QMARK_(warning_type){
return cljs.analyzer._STAR_cljs_warnings_STAR_.call(null,warning_type);
});
/**
 * The default warning handler.
 * 
 * Outputs the warning messages to *err*.
 */
cljs.analyzer.api.default_warning_handler = (function cljs$analyzer$api$default_warning_handler(warning_type,env,extra){
return cljs.analyzer.default_warning_handler.call(null,warning_type,env,extra);
});
/**
 * Return the compiler options from compiler state.
 */
cljs.analyzer.api.get_options = (function cljs$analyzer$api$get_options(var_args){
var args198853 = [];
var len__40427__auto___198856 = arguments.length;
var i__40428__auto___198857 = (0);
while(true){
if((i__40428__auto___198857 < len__40427__auto___198856)){
args198853.push((arguments[i__40428__auto___198857]));

var G__198858 = (i__40428__auto___198857 + (1));
i__40428__auto___198857 = G__198858;
continue;
} else {
}
break;
}

var G__198855 = args198853.length;
switch (G__198855) {
case 0:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198853.length)].join('')));

}
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.call(null,cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"options","options",99638489));
});

cljs.analyzer.api.get_options.cljs$lang$maxFixedArity = 1;

/**
 * Return the currently computed Google Closure js dependency index from the
 *   compiler state.
 */
cljs.analyzer.api.get_js_index = (function cljs$analyzer$api$get_js_index(var_args){
var args198860 = [];
var len__40427__auto___198863 = arguments.length;
var i__40428__auto___198864 = (0);
while(true){
if((i__40428__auto___198864 < len__40427__auto___198863)){
args198860.push((arguments[i__40428__auto___198864]));

var G__198865 = (i__40428__auto___198864 + (1));
i__40428__auto___198864 = G__198865;
continue;
} else {
}
break;
}

var G__198862 = args198860.length;
switch (G__198862) {
case 0:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198860.length)].join('')));

}
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.call(null,cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
});

cljs.analyzer.api.get_js_index.cljs$lang$maxFixedArity = 1;

/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
cljs.analyzer.api.resolve = (function cljs$analyzer$api$resolve(env,sym){
if(cljs.core.map_QMARK_.call(null,env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
}catch (e198868){var e = e198868;
return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}});
/**
 * Return all namespaces. Analagous to clojure.core/all-ns but
 *   returns symbols identifying namespaces not Namespace instances.
 */
cljs.analyzer.api.all_ns = (function cljs$analyzer$api$all_ns(var_args){
var args198869 = [];
var len__40427__auto___198872 = arguments.length;
var i__40428__auto___198873 = (0);
while(true){
if((i__40428__auto___198873 < len__40427__auto___198872)){
args198869.push((arguments[i__40428__auto___198873]));

var G__198874 = (i__40428__auto___198873 + (1));
i__40428__auto___198873 = G__198874;
continue;
} else {
}
break;
}

var G__198871 = args198869.length;
switch (G__198871) {
case 0:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198869.length)].join('')));

}
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.all_ns.call(null,cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.keys.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)));
});

cljs.analyzer.api.all_ns.cljs$lang$maxFixedArity = 1;

/**
 * Given a namespace return the corresponding namespace analysis map. Analagous
 *   to clojure.core/find-ns.
 */
cljs.analyzer.api.find_ns = (function cljs$analyzer$api$find_ns(var_args){
var args198876 = [];
var len__40427__auto___198879 = arguments.length;
var i__40428__auto___198880 = (0);
while(true){
if((i__40428__auto___198880 < len__40427__auto___198879)){
args198876.push((arguments[i__40428__auto___198880]));

var G__198881 = (i__40428__auto___198880 + (1));
i__40428__auto___198880 = G__198881;
continue;
} else {
}
break;
}

var G__198878 = args198876.length;
switch (G__198878) {
case 1:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198876.length)].join('')));

}
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return cljs.analyzer.api.find_ns.call(null,cljs.env._STAR_compiler_STAR_,sym);
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),sym], null));
});

cljs.analyzer.api.find_ns.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace return all the var analysis maps. Analagous to
 *   clojure.core/ns-interns but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_interns = (function cljs$analyzer$api$ns_interns(var_args){
var args198883 = [];
var len__40427__auto___198886 = arguments.length;
var i__40428__auto___198887 = (0);
while(true){
if((i__40428__auto___198887 < len__40427__auto___198886)){
args198883.push((arguments[i__40428__auto___198887]));

var G__198888 = (i__40428__auto___198887 + (1));
i__40428__auto___198887 = G__198888;
continue;
} else {
}
break;
}

var G__198885 = args198883.length;
switch (G__198885) {
case 1:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198883.length)].join('')));

}
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_interns.call(null,cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
});

cljs.analyzer.api.ns_interns.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace return all the public var analysis maps. Analagous to
 *   clojure.core/ns-publics but returns var analysis maps not vars.
 */
cljs.analyzer.api.ns_publics = (function cljs$analyzer$api$ns_publics(var_args){
var args198890 = [];
var len__40427__auto___198897 = arguments.length;
var i__40428__auto___198898 = (0);
while(true){
if((i__40428__auto___198898 < len__40427__auto___198897)){
args198890.push((arguments[i__40428__auto___198898]));

var G__198899 = (i__40428__auto___198898 + (1));
i__40428__auto___198898 = G__198899;
continue;
} else {
}
break;
}

var G__198892 = args198890.length;
switch (G__198892) {
case 1:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198890.length)].join('')));

}
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_publics.call(null,cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__198893){
var vec__198894 = p__198893;
var k = cljs.core.nth.call(null,vec__198894,(0),null);
var v = cljs.core.nth.call(null,vec__198894,(1),null);
return new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))));
});

cljs.analyzer.api.ns_publics.cljs$lang$maxFixedArity = 2;

/**
 * Given a namespace and a symbol return the corresponding var analysis map.
 *   Analagous to clojure.core/ns-resolve but returns var analysis map not Var.
 */
cljs.analyzer.api.ns_resolve = (function cljs$analyzer$api$ns_resolve(var_args){
var args198901 = [];
var len__40427__auto___198904 = arguments.length;
var i__40428__auto___198905 = (0);
while(true){
if((i__40428__auto___198905 < len__40427__auto___198904)){
args198901.push((arguments[i__40428__auto___198905]));

var G__198906 = (i__40428__auto___198905 + (1));
i__40428__auto___198905 = G__198906;
continue;
} else {
}
break;
}

var G__198903 = args198901.length;
switch (G__198903) {
case 2:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198901.length)].join('')));

}
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ns,sym){
return cljs.analyzer.api.ns_resolve.call(null,cljs.env._STAR_compiler_STAR_,ns,sym);
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3 = (function (state,ns,sym){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
});

cljs.analyzer.api.ns_resolve.cljs$lang$maxFixedArity = 3;

/**
 * Removes the namespace named by the symbol.
 */
cljs.analyzer.api.remove_ns = (function cljs$analyzer$api$remove_ns(var_args){
var args198908 = [];
var len__40427__auto___198911 = arguments.length;
var i__40428__auto___198912 = (0);
while(true){
if((i__40428__auto___198912 < len__40427__auto___198911)){
args198908.push((arguments[i__40428__auto___198912]));

var G__198913 = (i__40428__auto___198912 + (1));
i__40428__auto___198912 = G__198913;
continue;
} else {
}
break;
}

var G__198910 = args198908.length;
switch (G__198910) {
case 1:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args198908.length)].join('')));

}
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.remove_ns.call(null,cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),cljs.core.dissoc,ns);
});

cljs.analyzer.api.remove_ns.cljs$lang$maxFixedArity = 2;

/**
 * Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation
 *   environment atom and runs body.
 */
cljs.analyzer.api.in_cljs_user = (function cljs$analyzer$api$in_cljs_user(var_args){
var args__40434__auto__ = [];
var len__40427__auto___198919 = arguments.length;
var i__40428__auto___198920 = (0);
while(true){
if((i__40428__auto___198920 < len__40427__auto___198919)){
args__40434__auto__.push((arguments[i__40428__auto___198920]));

var G__198921 = (i__40428__auto___198920 + (1));
i__40428__auto___198920 = G__198921;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((3) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40435__auto__);
});

cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__40140__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-ns*","cljs.analyzer/*cljs-ns*",1242529789,null)),(function (){var x__40140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs","user","cljs/user",-1293320483,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),(function (){var x__40140__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.env","with-compiler-env","cljs.env/with-compiler-env",-1219561832,null)),(function (){var x__40140__auto__ = env;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__40140__auto__);
})())));
});

cljs.analyzer.api.in_cljs_user.cljs$lang$maxFixedArity = (3);

cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq198915){
var G__198916 = cljs.core.first.call(null,seq198915);
var seq198915__$1 = cljs.core.next.call(null,seq198915);
var G__198917 = cljs.core.first.call(null,seq198915__$1);
var seq198915__$2 = cljs.core.next.call(null,seq198915__$1);
var G__198918 = cljs.core.first.call(null,seq198915__$2);
var seq198915__$3 = cljs.core.next.call(null,seq198915__$2);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic(G__198916,G__198917,G__198918,seq198915__$3);
});


cljs.analyzer.api.in_cljs_user.cljs$lang$macro = true;

//# sourceMappingURL=api.js.map?rel=1491715089219