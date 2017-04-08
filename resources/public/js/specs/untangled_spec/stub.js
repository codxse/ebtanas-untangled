// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.stub');
goog.require('cljs.core');
untangled_spec.stub.make_step = (function untangled_spec$stub$make_step(stub,times,literals){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stub","stub",1339145807),stub,new cljs.core.Keyword(null,"times","times",1671571467),times,new cljs.core.Keyword(null,"ncalled","ncalled",-112615355),(0),new cljs.core.Keyword(null,"literals","literals",-427821498),literals,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null);
});
untangled_spec.stub.make_script = (function untangled_spec$stub$make_script(function$,steps){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"steps","steps",-128433302),steps,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null));
});
untangled_spec.stub.increment_script_call_count = (function untangled_spec$stub$increment_script_call_count(script_atom,step){
return cljs.core.swap_BANG_.call(null,script_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),step,new cljs.core.Keyword(null,"ncalled","ncalled",-112615355)], null),cljs.core.inc);
});
untangled_spec.stub.step_complete = (function untangled_spec$stub$step_complete(script_atom,step){
var map__64232 = cljs.core.get_in.call(null,cljs.core.deref.call(null,script_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),step], null));
var map__64232__$1 = ((((!((map__64232 == null)))?((((map__64232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64232):map__64232);
var ncalled = cljs.core.get.call(null,map__64232__$1,new cljs.core.Keyword(null,"ncalled","ncalled",-112615355));
var times = cljs.core.get.call(null,map__64232__$1,new cljs.core.Keyword(null,"times","times",1671571467));
return cljs.core._EQ_.call(null,ncalled,times);
});
untangled_spec.stub.zip_pad = (function untangled_spec$stub$zip_pad(var_args){
var args__35783__auto__ = [];
var len__35776__auto___64237 = arguments.length;
var i__35777__auto___64238 = (0);
while(true){
if((i__35777__auto___64238 < len__35776__auto___64237)){
args__35783__auto__.push((arguments[i__35777__auto___64238]));

var G__64239 = (i__35777__auto___64238 + (1));
i__35777__auto___64238 = G__64239;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled_spec.stub.zip_pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled_spec.stub.zip_pad.cljs$core$IFn$_invoke$arity$variadic = (function (pad,colls){
var ncolls = cljs.core.count.call(null,colls);
return cljs.core.partition.call(null,ncolls,cljs.core.take.call(null,(ncolls * cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,colls))),cljs.core.apply.call(null,cljs.core.interleave,cljs.core.map.call(null,((function (ncolls){
return (function (p1__64234_SHARP_){
return cljs.core.concat.call(null,p1__64234_SHARP_,((cljs.core.fn_QMARK_.call(null,pad))?cljs.core.repeatedly:cljs.core.repeat).call(null,pad));
});})(ncolls))
,colls))));
});

untangled_spec.stub.zip_pad.cljs$lang$maxFixedArity = (1);

untangled_spec.stub.zip_pad.cljs$lang$applyTo = (function (seq64235){
var G__64236 = cljs.core.first.call(null,seq64235);
var seq64235__$1 = cljs.core.next.call(null,seq64235);
return untangled_spec.stub.zip_pad.cljs$core$IFn$_invoke$arity$variadic(G__64236,seq64235__$1);
});

untangled_spec.stub.valid_args_QMARK_ = (function untangled_spec$stub$valid_args_QMARK_(literals,args){
var or__34555__auto__ = cljs.core.not.call(null,literals);
if(or__34555__auto__){
return or__34555__auto__;
} else {
var reduced_if = ((function (or__34555__auto__){
return (function (p,x){
var G__64258 = x;
if(cljs.core.truth_(p)){
return cljs.core.reduced.call(null,G__64258);
} else {
return G__64258;
}
});})(or__34555__auto__))
;
return cljs.core.reduce.call(null,((function (reduced_if,or__34555__auto__){
return (function (_,p__64259){
var vec__64260 = p__64259;
var lit = cljs.core.nth.call(null,vec__64260,(0),null);
var arg = cljs.core.nth.call(null,vec__64260,(1),null);
return reduced_if.call(null,cljs.core.false_QMARK_,(function (){var G__64263 = (((lit instanceof cljs.core.Keyword))?lit.fqn:null);
switch (G__64263) {
case "untangled-spec.stub/&_":
return cljs.core.reduced.call(null,true);

break;
case "untangled-spec.stub/any":
return true;

break;
default:
return cljs.core._EQ_.call(null,lit,arg);

}
})());
});})(reduced_if,or__34555__auto__))
,true,untangled_spec.stub.zip_pad.call(null,cljs.core.gensym,literals,args));
}
});
untangled_spec.stub.scripted_stub = (function untangled_spec$stub$scripted_stub(script_atom){
var step = cljs.core.atom.call(null,(0));
return ((function (step){
return (function() { 
var G__64276__delegate = function (args){
var map__64271 = cljs.core.deref.call(null,script_atom);
var map__64271__$1 = ((((!((map__64271 == null)))?((((map__64271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64271):map__64271);
var function$ = cljs.core.get.call(null,map__64271__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var steps = cljs.core.get.call(null,map__64271__$1,new cljs.core.Keyword(null,"steps","steps",-128433302));
var ncalled = cljs.core.get.call(null,map__64271__$1,new cljs.core.Keyword(null,"ncalled","ncalled",-112615355));
var max_calls = cljs.core.count.call(null,steps);
var curr_step = cljs.core.deref.call(null,step);
if((curr_step >= max_calls)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" was called too many times!")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-calls","max-calls",605342920),max_calls,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
var map__64273 = cljs.core.nth.call(null,steps,curr_step);
var map__64273__$1 = ((((!((map__64273 == null)))?((((map__64273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64273):map__64273);
var stub = cljs.core.get.call(null,map__64273__$1,new cljs.core.Keyword(null,"stub","stub",1339145807));
var literals = cljs.core.get.call(null,map__64273__$1,new cljs.core.Keyword(null,"literals","literals",-427821498));
if(cljs.core.truth_(untangled_spec.stub.valid_args_QMARK_.call(null,literals,args))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" was called with wrong arguments")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"expected-literals","expected-literals",-1781274626),literals], null));
}

cljs.core.swap_BANG_.call(null,script_atom,((function (map__64273,map__64273__$1,stub,literals,map__64271,map__64271__$1,function$,steps,ncalled,max_calls,curr_step,step){
return (function (p1__64265_SHARP_){
return cljs.core.update_in.call(null,cljs.core.update.call(null,p1__64265_SHARP_,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,args),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302),curr_step,new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.conj,args);
});})(map__64273,map__64273__$1,stub,literals,map__64271,map__64271__$1,function$,steps,ncalled,max_calls,curr_step,step))
);

try{return cljs.core.apply.call(null,stub,args);
}catch (e64275){if((e64275 instanceof Object)){
var e = e64275;
throw e;
} else {
throw e64275;

}
}finally {untangled_spec.stub.increment_script_call_count.call(null,script_atom,curr_step);

if(cljs.core.truth_(untangled_spec.stub.step_complete.call(null,script_atom,curr_step))){
cljs.core.swap_BANG_.call(null,step,cljs.core.inc);
} else {
}
}}
};
var G__64276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64277__i = 0, G__64277__a = new Array(arguments.length -  0);
while (G__64277__i < G__64277__a.length) {G__64277__a[G__64277__i] = arguments[G__64277__i + 0]; ++G__64277__i;}
  args = new cljs.core.IndexedSeq(G__64277__a,0);
} 
return G__64276__delegate.call(this,args);};
G__64276.cljs$lang$maxFixedArity = 0;
G__64276.cljs$lang$applyTo = (function (arglist__64278){
var args = cljs.core.seq(arglist__64278);
return G__64276__delegate(args);
});
G__64276.cljs$core$IFn$_invoke$arity$variadic = G__64276__delegate;
return G__64276;
})()
;
;})(step))
});
/**
 * argument step contains keys:
 * - :ncalled, actual number of times called
 * - :times, expected number of times called
 */
untangled_spec.stub.validate_step_counts = (function untangled_spec$stub$validate_step_counts(errors,p__64279){
var map__64282 = p__64279;
var map__64282__$1 = ((((!((map__64282 == null)))?((((map__64282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64282):map__64282);
var step = map__64282__$1;
var ncalled = cljs.core.get.call(null,map__64282__$1,new cljs.core.Keyword(null,"ncalled","ncalled",-112615355));
var times = cljs.core.get.call(null,map__64282__$1,new cljs.core.Keyword(null,"times","times",1671571467));
return cljs.core.conj.call(null,errors,(((cljs.core._EQ_.call(null,ncalled,times)) || ((cljs.core._EQ_.call(null,times,new cljs.core.Keyword(null,"many","many",1092119164))) && ((ncalled > (0)))))?new cljs.core.Keyword(null,"ok","ok",967785236):new cljs.core.Keyword(null,"error","error",-978969032)));
});
untangled_spec.stub.validate_target_function_counts = (function untangled_spec$stub$validate_target_function_counts(script_atoms){
return cljs.core.mapv.call(null,(function (script){
var map__64287 = cljs.core.deref.call(null,script);
var map__64287__$1 = ((((!((map__64287 == null)))?((((map__64287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64287):map__64287);
var function$ = cljs.core.get.call(null,map__64287__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var steps = cljs.core.get.call(null,map__64287__$1,new cljs.core.Keyword(null,"steps","steps",-128433302));
var history = cljs.core.get.call(null,map__64287__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var count_results = cljs.core.reduce.call(null,untangled_spec.stub.validate_step_counts,cljs.core.PersistentVector.EMPTY,steps);
var errors_QMARK_ = cljs.core.some.call(null,((function (map__64287,map__64287__$1,function$,steps,history,count_results){
return (function (p1__64284_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),p1__64284_SHARP_);
});})(map__64287,map__64287__$1,function$,steps,history,count_results))
,count_results);
if(cljs.core.truth_(errors_QMARK_)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" was not called as many times as specified")].join(''),cljs.core.deref.call(null,script));
} else {
return null;
}
}),script_atoms);
});

//# sourceMappingURL=stub.js.map?rel=1491640780408