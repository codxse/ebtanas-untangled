// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.assertions');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('cljs.spec');
goog.require('untangled_spec.spec');
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","arrow","untangled-spec.assertions/arrow",-539721370),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["=fn=>",null,"=throws=>",null,"=>",null], null), null),new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["=fn=>",null,"=throws=>",null,"=>",null], null), null),cljs.core.str));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","behavior","untangled-spec.assertions/behavior",664015599),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","triple","untangled-spec.assertions/triple",1182172777),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword("untangled-spec.assertions","arrow","untangled-spec.assertions/arrow",-539721370),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556)),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"expected","expected",1583670997)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556),new cljs.core.Keyword("untangled-spec.assertions","arrow","untangled-spec.assertions/arrow",-539721370),new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556),new cljs.core.Keyword("untangled-spec.assertions","arrow","untangled-spec.assertions/arrow",-539721370),new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556)], null)));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","block","untangled-spec.assertions/block",1203197283),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"behavior","behavior",1202392908),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Keyword("untangled-spec.assertions","behavior","untangled-spec.assertions/behavior",664015599)),new cljs.core.Keyword(null,"triples","triples",-368198101),cljs.core.list(new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null),new cljs.core.Keyword("untangled-spec.assertions","triple","untangled-spec.assertions/triple",1182172777))),cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),new cljs.core.Keyword(null,"triples","triples",-368198101)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.maybe_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","behavior","untangled-spec.assertions/behavior",664015599),new cljs.core.Keyword("untangled-spec.assertions","behavior","untangled-spec.assertions/behavior",664015599)),cljs.spec.rep_PLUS_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","triple","untangled-spec.assertions/triple",1182172777),new cljs.core.Keyword("untangled-spec.assertions","triple","untangled-spec.assertions/triple",1182172777))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Keyword("untangled-spec.assertions","behavior","untangled-spec.assertions/behavior",664015599)),cljs.core.list(new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null),new cljs.core.Keyword("untangled-spec.assertions","triple","untangled-spec.assertions/triple",1182172777))], null)));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","assertions","untangled-spec.assertions/assertions",1713334850),cljs.core.list(new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null),new cljs.core.Keyword("untangled-spec.assertions","block","untangled-spec.assertions/block",1203197283)),cljs.spec.rep_PLUS_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","block","untangled-spec.assertions/block",1203197283),new cljs.core.Keyword("untangled-spec.assertions","block","untangled-spec.assertions/block",1203197283)));
untangled_spec.assertions.fn_assert_expr = (function untangled_spec$assertions$fn_assert_expr(msg,p__62546){
var vec__62550 = p__62546;
var f = cljs.core.nth.call(null,vec__62550,(0),null);
var arg = cljs.core.nth.call(null,vec__62550,(1),null);
var form = vec__62550;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__35489__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arg__62544__auto__","arg__62544__auto__",951346751,null)),(function (){var x__35489__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__62545__auto__","result__62545__auto__",-1264502202,null)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arg__62544__auto__","arg__62544__auto__",951346751,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__62545__auto__","result__62545__auto__",-1264502202,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",1574159993)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",1706214930)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",-406056002)),(function (){var x__35489__auto__ = msg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"assert-type","assert-type",-1787842052)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"exec","exec",-1028867026,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arg__62544__auto__","arg__62544__auto__",951346751,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",1583670997)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__35489__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
});
untangled_spec.assertions.eq_assert_expr = (function untangled_spec$assertions$eq_assert_expr(msg,p__62556){
var vec__62560 = p__62556;
var exp = cljs.core.nth.call(null,vec__62560,(0),null);
var act = cljs.core.nth.call(null,vec__62560,(1),null);
var form = vec__62560;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__35489__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"act__62553__auto__","act__62553__auto__",-896896113,null)),(function (){var x__35489__auto__ = act;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"exp__62554__auto__","exp__62554__auto__",93213446,null)),(function (){var x__35489__auto__ = exp;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__62555__auto__","result__62555__auto__",2010049477,null)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("im","try-report","im/try-report",813068132,null)),(function (){var x__35489__auto__ = msg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"exp__62554__auto__","exp__62554__auto__",93213446,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"act__62553__auto__","act__62553__auto__",-896896113,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__62555__auto__","result__62555__auto__",2010049477,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pass","pass",1574159993)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fail","fail",1706214930)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"message","message",-406056002)),(function (){var x__35489__auto__ = msg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"assert-type","assert-type",-1787842052)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"eq","eq",1021992460,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"actual","actual",107306363)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"act__62553__auto__","act__62553__auto__",-896896113,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expected","expected",1583670997)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"exp__62554__auto__","exp__62554__auto__",93213446,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
});
untangled_spec.assertions.parse_criteria = (function untangled_spec$assertions$parse_criteria(p__62563){
var vec__62568 = p__62563;
var tag = cljs.core.nth.call(null,vec__62568,(0),null);
var x = cljs.core.nth.call(null,vec__62568,(1),null);
var G__62571 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);
switch (G__62571) {
case "sym":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),x], null);

break;
default:
return x;

}
});
untangled_spec.assertions.check_error_STAR_ = (function untangled_spec$assertions$check_error_STAR_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62581 = arguments.length;
var i__35777__auto___62582 = (0);
while(true){
if((i__35777__auto___62582 < len__35776__auto___62581)){
args__35783__auto__.push((arguments[i__35777__auto___62582]));

var G__62583 = (i__35777__auto___62582 + (1));
i__35777__auto___62582 = G__62583;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return untangled_spec.assertions.check_error_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

untangled_spec.assertions.check_error_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (msg,e,p__62576){
var vec__62577 = p__62576;
var ex_type = cljs.core.nth.call(null,vec__62577,(0),null);
var regex = cljs.core.nth.call(null,vec__62577,(1),null);
var fn = cljs.core.nth.call(null,vec__62577,(2),null);
var fn_pr = cljs.core.nth.call(null,vec__62577,(3),null);
var e_msg = (function (){var or__34555__auto__ = e.message;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('');
}
})();
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),msg,new cljs.core.Keyword(null,"assert-type","assert-type",-1787842052),new cljs.core.Symbol(null,"throws?","throws?",789734533,null),new cljs.core.Keyword(null,"throwable","throwable",1200921851),e], null),(cljs.core.truth_((function (){var G__62580 = cljs.core.ex_data.call(null,e);
var G__62580__$1 = (((G__62580 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__62580));
if((G__62580__$1 == null)){
return null;
} else {
return cljs.core._EQ_.call(null,G__62580__$1,new cljs.core.Keyword("untangled-spec.assertions","internal","untangled-spec.assertions/internal",-1389055478));
}
})())?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"extra","extra",1612569067),e_msg,new cljs.core.Keyword(null,"actual","actual",107306363),e,new cljs.core.Keyword(null,"expected","expected",1583670997),"it to throw"], null):(cljs.core.truth_((function (){var and__34543__auto__ = ex_type;
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core.not_EQ_.call(null,ex_type,cljs.core.type.call(null,e));
} else {
return and__34543__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.type.call(null,e),new cljs.core.Keyword(null,"expected","expected",1583670997),ex_type,new cljs.core.Keyword(null,"extra","extra",1612569067),"exception did not match type"], null):(cljs.core.truth_((function (){var and__34543__auto__ = regex;
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core.not.call(null,cljs.core.re_find.call(null,regex,e_msg));
} else {
return and__34543__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual","actual",107306363),e_msg,new cljs.core.Keyword(null,"expected","expected",1583670997),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex)].join(''),new cljs.core.Keyword(null,"extra","extra",1612569067),"exception's message did not match regex"], null):(cljs.core.truth_((function (){var and__34543__auto__ = fn;
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core.not.call(null,fn.call(null,e));
} else {
return and__34543__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual","actual",107306363),e,new cljs.core.Keyword(null,"expected","expected",1583670997),fn_pr,new cljs.core.Keyword(null,"extra","extra",1612569067),"checker function failed"], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"actual","actual",107306363),"act",new cljs.core.Keyword(null,"expected","expected",1583670997),"exp"], null)
)))));
});

untangled_spec.assertions.check_error_STAR_.cljs$lang$maxFixedArity = (2);

untangled_spec.assertions.check_error_STAR_.cljs$lang$applyTo = (function (seq62573){
var G__62574 = cljs.core.first.call(null,seq62573);
var seq62573__$1 = cljs.core.next.call(null,seq62573);
var G__62575 = cljs.core.first.call(null,seq62573__$1);
var seq62573__$2 = cljs.core.next.call(null,seq62573__$1);
return untangled_spec.assertions.check_error_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__62574,G__62575,seq62573__$2);
});

untangled_spec.assertions.check_error = (function untangled_spec$assertions$check_error(var_args){
var args__35783__auto__ = [];
var len__35776__auto___62592 = arguments.length;
var i__35777__auto___62593 = (0);
while(true){
if((i__35777__auto___62593 < len__35776__auto___62592)){
args__35783__auto__.push((arguments[i__35777__auto___62593]));

var G__62594 = (i__35777__auto___62593 + (1));
i__35777__auto___62593 = G__62594;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((3) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((3)),(0),null)):null);
return untangled_spec.assertions.check_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35784__auto__);
});

untangled_spec.assertions.check_error.cljs$core$IFn$_invoke$arity$variadic = (function (msg,e,criteria,p__62588){
var vec__62589 = p__62588;
var fn_pr = cljs.core.nth.call(null,vec__62589,(0),null);
return cljs.core.apply.call(null,untangled_spec.assertions.check_error_STAR_,msg,e,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"fn-pr","fn-pr",-93388920)).call(null,cljs.core.assoc.call(null,criteria,new cljs.core.Keyword(null,"fn-pr","fn-pr",-93388920),fn_pr)));
});

untangled_spec.assertions.check_error.cljs$lang$maxFixedArity = (3);

untangled_spec.assertions.check_error.cljs$lang$applyTo = (function (seq62584){
var G__62585 = cljs.core.first.call(null,seq62584);
var seq62584__$1 = cljs.core.next.call(null,seq62584);
var G__62586 = cljs.core.first.call(null,seq62584__$1);
var seq62584__$2 = cljs.core.next.call(null,seq62584__$1);
var G__62587 = cljs.core.first.call(null,seq62584__$2);
var seq62584__$3 = cljs.core.next.call(null,seq62584__$2);
return untangled_spec.assertions.check_error.cljs$core$IFn$_invoke$arity$variadic(G__62585,G__62586,G__62587,seq62584__$3);
});

cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115),new cljs.core.Keyword("untangled-spec.spec","regex","untangled-spec.spec/regex",-961591711),new cljs.core.Keyword("untangled-spec.spec","regex","untangled-spec.spec/regex",-961591711));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929),new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556),new cljs.core.Keyword("untangled-spec.spec","any","untangled-spec.spec/any",-1342282556));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","criteria","untangled-spec.assertions/criteria",-814498930),cljs.core.list(new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),new cljs.core.Keyword(null,"regex","regex",939488856),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115)),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929))),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115),new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929)], null))),cljs.spec.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),new cljs.core.Keyword(null,"regex","regex",939488856),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115)),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929))),cljs.core.list(new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115),new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),cljs.spec.maybe_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115),new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115)),cljs.spec.maybe_impl.call(null,new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929),new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115)),cljs.core.list(new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null),new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929))], null)),cljs.spec.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115),new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__62595){
return cljs.core.map_QMARK_.call(null,G__62595);
})], null),(function (G__62595){
return cljs.core.map_QMARK_.call(null,G__62595);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("untangled-spec.assertions","ex-type","untangled-spec.assertions/ex-type",-2045482870),new cljs.core.Keyword("untangled-spec.assertions","regex","untangled-spec.assertions/regex",1475345115),new cljs.core.Keyword("untangled-spec.assertions","fn","untangled-spec.assertions/fn",-1713903929)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]))], null),null));
untangled_spec.assertions.throws_assert_expr = (function untangled_spec$assertions$throws_assert_expr(msg,p__62597){
var vec__62601 = p__62597;
var cljs_QMARK_ = cljs.core.nth.call(null,vec__62601,(0),null);
var should_throw = cljs.core.nth.call(null,vec__62601,(1),null);
var criteria = cljs.core.nth.call(null,vec__62601,(2),null);
var criteria__$1 = untangled_spec.assertions.parse_criteria.call(null,untangled_spec.spec.conform_BANG_.call(null,new cljs.core.Keyword("untangled-spec.assertions","criteria","untangled-spec.assertions/criteria",-814498930),criteria));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),(function (){var x__35489__auto__ = should_throw;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Expected an error to be thrown!"),(function (){var x__35489__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("untangled-spec.assertions","internal","untangled-spec.assertions/internal",-1389055478)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"criteria","criteria",-1353924887)),(function (){var x__35489__auto__ = criteria__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",-1616370245,null)),(function (){var x__35489__auto__ = ((cljs.core.not.call(null,cljs_QMARK_))?cljs.core.symbol.call(null,"Throwable"):cljs.core.symbol.call(null,"js","Object"));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__62596__auto__","e__62596__auto__",548114152,null)),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("untangled-spec.assertions","check-error","untangled-spec.assertions/check-error",409792795,null)),(function (){var x__35489__auto__ = msg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__62596__auto__","e__62596__auto__",548114152,null)),(function (){var x__35489__auto__ = criteria__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
});
untangled_spec.assertions.assert_expr = (function untangled_spec$assertions$assert_expr(msg,p__62604){
var vec__62609 = p__62604;
var seq__62610 = cljs.core.seq.call(null,vec__62609);
var first__62611 = cljs.core.first.call(null,seq__62610);
var seq__62610__$1 = cljs.core.next.call(null,seq__62610);
var disp_key = first__62611;
var form = seq__62610__$1;
var G__62612 = disp_key;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),G__62612)){
return untangled_spec.assertions.eq_assert_expr.call(null,msg,form);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"exec","exec",-1028867026,null),G__62612)){
return untangled_spec.assertions.fn_assert_expr.call(null,msg,form);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"throws?","throws?",789734533,null),G__62612)){
return untangled_spec.assertions.throws_assert_expr.call(null,msg,form);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"message","message",-406056002),msg,new cljs.core.Keyword(null,"actual","actual",107306363),disp_key,new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["eq",null,"exec",null,"throws?",null], null), null)], null);

}
}
}
});
untangled_spec.assertions.triple__GT_assertion = (function untangled_spec$assertions$triple__GT_assertion(cljs_QMARK_,p__62613){
var map__62617 = p__62613;
var map__62617__$1 = ((((!((map__62617 == null)))?((((map__62617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62617):map__62617);
var actual = cljs.core.get.call(null,map__62617__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var arrow = cljs.core.get.call(null,map__62617__$1,new cljs.core.Keyword(null,"arrow","arrow",1071351425));
var expected = cljs.core.get.call(null,map__62617__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var prefix = (cljs.core.truth_(cljs_QMARK_)?"cljs.test":"clojure.test");
var is = cljs.core.symbol.call(null,prefix,"is");
var msg = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arrow),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join('');
var G__62619 = arrow;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),G__62619)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = is;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"=","=",-1501502141,null)),(function (){var x__35489__auto__ = expected;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = actual;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = msg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"=fn=>","=fn=>",-1065738666,null),G__62619)){
var checker = expected;
var arg = actual;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = is;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"exec","exec",-1028867026,null)),(function (){var x__35489__auto__ = checker;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = arg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = msg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"=throws=>","=throws=>",1018118189,null),G__62619)){
var should_throw = actual;
var criteria = expected;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__35489__auto__ = is;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throws?","throws?",789734533,null)),(function (){var x__35489__auto__ = cljs_QMARK_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = should_throw;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = criteria;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),(function (){var x__35489__auto__ = msg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})())));
} else {
throw cljs.core.ex_info.call(null,"invalid arrow",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arrow","arrow",1071351425),arrow], null));

}
}
}
});
untangled_spec.assertions.fix_conform = (function untangled_spec$assertions$fix_conform(conformed_assertions){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,conformed_assertions))){
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,conformed_assertions),cljs.core.second.call(null,conformed_assertions)));
} else {
return conformed_assertions;
}
});
untangled_spec.assertions.block__GT_asserts = (function untangled_spec$assertions$block__GT_asserts(cljs_QMARK_,p__62620){
var map__62623 = p__62620;
var map__62623__$1 = ((((!((map__62623 == null)))?((((map__62623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62623):map__62623);
var behavior = cljs.core.get.call(null,map__62623__$1,new cljs.core.Keyword(null,"behavior","behavior",1202392908));
var triples = cljs.core.get.call(null,map__62623__$1,new cljs.core.Keyword(null,"triples","triples",-368198101));
var asserts = cljs.core.map.call(null,cljs.core.partial.call(null,untangled_spec.assertions.triple__GT_assertion,cljs_QMARK_),triples);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("im","with-reporting","im/with-reporting",-1613778556,null)),(function (){var x__35489__auto__ = (cljs.core.truth_(behavior)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"behavior","behavior",1202392908),new cljs.core.Keyword(null,"string","string",-1989541586),behavior], null):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__35489__auto__);
})(),asserts)));
});

//# sourceMappingURL=assertions.js.map?rel=1491640777335