// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.reporter');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('cljs.stacktrace');
goog.require('clojure.set');
goog.require('cljs.test');
goog.require('com.stuartsierra.component');
goog.require('untangled_spec.diff');
goog.require('goog.date.Date');
untangled_spec.reporter.new_uuid = (function untangled_spec$reporter$new_uuid(){
return cljs_uuid_utils.core.uuid_string.call(null,cljs_uuid_utils.core.make_random_uuid.call(null));
});
untangled_spec.reporter.fix_str = (function untangled_spec$reporter$fix_str(s){
var G__64021 = s;
if(cljs.core._EQ_.call(null,"",G__64021)){
return "\"\"";
} else {
if(cljs.core._EQ_.call(null,null,G__64021)){
return "nil";
} else {
return s;

}
}
});
untangled_spec.reporter.now_time = (function untangled_spec$reporter$now_time(){
return Date.now();
});
untangled_spec.reporter.make_testreport = (function untangled_spec$reporter$make_testreport(var_args){
var args64022 = [];
var len__35776__auto___64025 = arguments.length;
var i__35777__auto___64026 = (0);
while(true){
if((i__35777__auto___64026 < len__35776__auto___64025)){
args64022.push((arguments[i__35777__auto___64026]));

var G__64027 = (i__35777__auto___64026 + (1));
i__35777__auto___64026 = G__64027;
continue;
} else {
}
break;
}

var G__64024 = args64022.length;
switch (G__64024) {
case 0:
return untangled_spec.reporter.make_testreport.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return untangled_spec.reporter.make_testreport.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64022.length)].join('')));

}
});

untangled_spec.reporter.make_testreport.cljs$core$IFn$_invoke$arity$0 = (function (){
return untangled_spec.reporter.make_testreport.call(null,cljs.core.PersistentVector.EMPTY);
});

untangled_spec.reporter.make_testreport.cljs$core$IFn$_invoke$arity$1 = (function (initial_items){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),untangled_spec.reporter.new_uuid.call(null),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start-time","start-time",814801386),untangled_spec.reporter.now_time.call(null),new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null);
});

untangled_spec.reporter.make_testreport.cljs$lang$maxFixedArity = 1;

untangled_spec.reporter.make_testitem = (function untangled_spec$reporter$make_testitem(test_name){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),untangled_spec.reporter.new_uuid.call(null),new cljs.core.Keyword(null,"name","name",1843675177),test_name,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"test-items","test-items",1900391985),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"test-results","test-results",575566942),cljs.core.PersistentVector.EMPTY], null);
});
untangled_spec.reporter.make_manual = (function untangled_spec$reporter$make_manual(test_name){
return untangled_spec.reporter.make_testitem.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (MANUAL TEST)")].join(''));
});
untangled_spec.reporter.stack__GT_trace = (function untangled_spec$reporter$stack__GT_trace(st){
return cljs.stacktrace.parse_stacktrace.call(null,cljs.core.PersistentArrayMap.EMPTY,st,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
untangled_spec.reporter.merge_in_diff_results = (function untangled_spec$reporter$merge_in_diff_results(p__64029){
var map__64033 = p__64029;
var map__64033__$1 = ((((!((map__64033 == null)))?((((map__64033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64033):map__64033);
var test_result = map__64033__$1;
var actual = cljs.core.get.call(null,map__64033__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var expected = cljs.core.get.call(null,map__64033__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var assert_type = cljs.core.get.call(null,map__64033__$1,new cljs.core.Keyword(null,"assert-type","assert-type",-1787842052));
var G__64035 = test_result;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"eq","eq",1021992460,null),null], null), null).call(null,assert_type))){
return cljs.core.assoc.call(null,G__64035,new cljs.core.Keyword(null,"diff","diff",2135942783),untangled_spec.diff.diff.call(null,expected,actual));
} else {
return G__64035;
}
});
untangled_spec.reporter.make_test_result = (function untangled_spec$reporter$make_test_result(status,t){
return cljs.core.update.call(null,cljs.core.update.call(null,(function (p1__64036_SHARP_){
if(cljs.core.truth_((function (){var G__64038 = p1__64036_SHARP_;
var G__64038__$1 = (((G__64038 == null))?null:new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(G__64038));
if((G__64038__$1 == null)){
return null;
} else {
return G__64038__$1.stack;
}
})())){
return cljs.core.assoc.call(null,p1__64036_SHARP_,new cljs.core.Keyword(null,"stack","stack",-793405930),untangled_spec.reporter.stack__GT_trace.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(p1__64036_SHARP_).stack));
} else {
return p1__64036_SHARP_;
}
}).call(null,untangled_spec.reporter.merge_in_diff_results.call(null,cljs.core.merge.call(null,t,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),untangled_spec.reporter.new_uuid.call(null),new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"where","where",-2044795965),cljs.test.testing_vars_str.call(null,t)], null)))),new cljs.core.Keyword(null,"actual","actual",107306363),untangled_spec.reporter.fix_str),new cljs.core.Keyword(null,"expected","expected",1583670997),untangled_spec.reporter.fix_str);
});
untangled_spec.reporter.make_tests_by_namespace = (function untangled_spec$reporter$make_tests_by_namespace(test_name){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),untangled_spec.reporter.new_uuid.call(null),new cljs.core.Keyword(null,"name","name",1843675177),test_name,new cljs.core.Keyword(null,"test-items","test-items",1900391985),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.PersistentArrayMap.EMPTY], null);
});
untangled_spec.reporter.set_test_result = (function untangled_spec$reporter$set_test_result(p__64039,status){
var map__64042 = p__64039;
var map__64042__$1 = ((((!((map__64042 == null)))?((((map__64042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64042):map__64042);
var state = cljs.core.get.call(null,map__64042__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var path = cljs.core.get.call(null,map__64042__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var all_paths = cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.take_while.call(null,cljs.core.seq),cljs.core.map.call(null,cljs.core.vec)),cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core.drop_last,(2)),cljs.core.deref.call(null,path)));
return cljs.core.swap_BANG_.call(null,state,((function (all_paths,map__64042,map__64042__$1,state,path){
return (function (state__$1){
return cljs.core.reduce.call(null,((function (all_paths,map__64042,map__64042__$1,state,path){
return (function (state__$2,path__$1){
return cljs.core.update_in.call(null,state__$2,cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"status","status",-1997798413),status),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});})(all_paths,map__64042,map__64042__$1,state,path))
,state__$1,all_paths);
});})(all_paths,map__64042,map__64042__$1,state,path))
);
});
untangled_spec.reporter.begin_STAR_ = (function untangled_spec$reporter$begin_STAR_(p__64044,t){
var map__64047 = p__64044;
var map__64047__$1 = ((((!((map__64047 == null)))?((((map__64047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64047):map__64047);
var state = cljs.core.get.call(null,map__64047__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var path = cljs.core.get.call(null,map__64047__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = cljs.core.deref.call(null,path);
var test_item = untangled_spec.reporter.make_testitem.call(null,new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(t));
var test_items_count = cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,state),cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"test-items","test-items",1900391985))));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"test-items","test-items",1900391985),test_items_count),test_item);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_item,test_items_count], null);
});
untangled_spec.reporter.get_namespace_location = (function untangled_spec$reporter$get_namespace_location(namespaces,nsname){
var namespace_index = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (idx,val){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(val),nsname)){
return idx;
} else {
return null;
}
}),namespaces));
var or__34555__auto__ = namespace_index;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.count.call(null,namespaces);
}
});
untangled_spec.reporter.inc_report_counter = (function untangled_spec$reporter$inc_report_counter(type){
return cljs.test.inc_report_counter_BANG_.call(null,type);
});
untangled_spec.reporter.failure_STAR_ = (function untangled_spec$reporter$failure_STAR_(p__64049,t,failure_type){
var map__64054 = p__64049;
var map__64054__$1 = ((((!((map__64054 == null)))?((((map__64054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64054):map__64054);
var this$ = map__64054__$1;
var state = cljs.core.get.call(null,map__64054__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var path = cljs.core.get.call(null,map__64054__$1,new cljs.core.Keyword(null,"path","path",-188191168));
untangled_spec.reporter.inc_report_counter.call(null,failure_type);

var path__$1 = cljs.core.deref.call(null,path);
var map__64056 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path__$1);
var map__64056__$1 = ((((!((map__64056 == null)))?((((map__64056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64056):map__64056);
var test_results = cljs.core.get.call(null,map__64056__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var new_result = untangled_spec.reporter.make_test_result.call(null,failure_type,t);
untangled_spec.reporter.set_test_result.call(null,this$,failure_type);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942)),cljs.core.conj,new_result);

return new_result;
});
untangled_spec.reporter.error = (function untangled_spec$reporter$error(this$,t){
return untangled_spec.reporter.failure_STAR_.call(null,this$,t,new cljs.core.Keyword(null,"error","error",-978969032));
});
untangled_spec.reporter.fail = (function untangled_spec$reporter$fail(this$,t){
return untangled_spec.reporter.failure_STAR_.call(null,this$,t,new cljs.core.Keyword(null,"fail","fail",1706214930));
});
untangled_spec.reporter.pass = (function untangled_spec$reporter$pass(this$,t){
untangled_spec.reporter.inc_report_counter.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

return untangled_spec.reporter.set_test_result.call(null,this$,new cljs.core.Keyword(null,"pass","pass",1574159993));
});
untangled_spec.reporter.push_test_item_path = (function untangled_spec$reporter$push_test_item_path(p__64058,test_item,index){
var map__64061 = p__64058;
var map__64061__$1 = ((((!((map__64061 == null)))?((((map__64061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64061):map__64061);
var path = cljs.core.get.call(null,map__64061__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.swap_BANG_.call(null,path,cljs.core.conj,new cljs.core.Keyword(null,"test-items","test-items",1900391985),index);
});
untangled_spec.reporter.pop_test_item_path = (function untangled_spec$reporter$pop_test_item_path(p__64063){
var map__64066 = p__64063;
var map__64066__$1 = ((((!((map__64066 == null)))?((((map__64066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64066):map__64066);
var path = cljs.core.get.call(null,map__64066__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.swap_BANG_.call(null,path,cljs.core.comp.call(null,cljs.core.pop,cljs.core.pop));
});
untangled_spec.reporter.begin_namespace = (function untangled_spec$reporter$begin_namespace(p__64068,t){
var map__64071 = p__64068;
var map__64071__$1 = ((((!((map__64071 == null)))?((((map__64071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64071):map__64071);
var state = cljs.core.get.call(null,map__64071__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var path = cljs.core.get.call(null,map__64071__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var test_name = cljs.core.ns_name.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(t));
var namespaces = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),cljs.core.conj.call(null,cljs.core.deref.call(null,path),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)));
var name_space_location = untangled_spec.reporter.get_namespace_location.call(null,namespaces,test_name);
cljs.core.swap_BANG_.call(null,path,cljs.core.conj,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),name_space_location);

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,cljs.core.deref.call(null,path),untangled_spec.reporter.make_tests_by_namespace.call(null,test_name));
});
untangled_spec.reporter.end_namespace = (function untangled_spec$reporter$end_namespace(this$,t){
return untangled_spec.reporter.pop_test_item_path.call(null,this$);
});
untangled_spec.reporter.begin_specification = (function untangled_spec$reporter$begin_specification(this$,t){
return cljs.core.apply.call(null,untangled_spec.reporter.push_test_item_path,this$,untangled_spec.reporter.begin_STAR_.call(null,this$,t));
});
untangled_spec.reporter.end_specification = (function untangled_spec$reporter$end_specification(this$,t){
return untangled_spec.reporter.pop_test_item_path.call(null,this$);
});
untangled_spec.reporter.begin_behavior = (function untangled_spec$reporter$begin_behavior(this$,t){
return cljs.core.apply.call(null,untangled_spec.reporter.push_test_item_path,this$,untangled_spec.reporter.begin_STAR_.call(null,this$,t));
});
untangled_spec.reporter.end_behavior = (function untangled_spec$reporter$end_behavior(this$,t){
return untangled_spec.reporter.pop_test_item_path.call(null,this$);
});
untangled_spec.reporter.begin_manual = (function untangled_spec$reporter$begin_manual(this$,t){
return cljs.core.apply.call(null,untangled_spec.reporter.push_test_item_path,this$,untangled_spec.reporter.begin_STAR_.call(null,this$,t));
});
untangled_spec.reporter.end_manual = (function untangled_spec$reporter$end_manual(this$,t){
untangled_spec.reporter.set_test_result.call(null,this$,new cljs.core.Keyword(null,"manual","manual",-237370608));

return untangled_spec.reporter.pop_test_item_path.call(null,this$);
});
untangled_spec.reporter.begin_provided = (function untangled_spec$reporter$begin_provided(this$,t){
return cljs.core.apply.call(null,untangled_spec.reporter.push_test_item_path,this$,untangled_spec.reporter.begin_STAR_.call(null,this$,t));
});
untangled_spec.reporter.end_provided = (function untangled_spec$reporter$end_provided(this$,t){
return untangled_spec.reporter.pop_test_item_path.call(null,this$);
});
untangled_spec.reporter.summary = (function untangled_spec$reporter$summary(p__64073,t){
var map__64079 = p__64073;
var map__64079__$1 = ((((!((map__64079 == null)))?((((map__64079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64079):map__64079);
var state = cljs.core.get.call(null,map__64079__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var end_time_64084 = untangled_spec.reporter.now_time.call(null);
var end_date_64085 = (new goog.date.Date()).getTime();
cljs.core.swap_BANG_.call(null,state,((function (end_time_64084,end_date_64085,map__64079,map__64079__$1,state){
return (function (p__64081){
var map__64082 = p__64081;
var map__64082__$1 = ((((!((map__64082 == null)))?((((map__64082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64082):map__64082);
var st = map__64082__$1;
var start_time = cljs.core.get.call(null,map__64082__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"end-time","end-time",-1849817460),end_date_64085),new cljs.core.Keyword(null,"run-time","run-time",-1231674133),(end_time_64084 - start_time));
});})(end_time_64084,end_date_64085,map__64079,map__64079__$1,state))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,t);
});
untangled_spec.reporter.reset_test_report_BANG_ = (function untangled_spec$reporter$reset_test_report_BANG_(p__64086){
var map__64089 = p__64086;
var map__64089__$1 = ((((!((map__64089 == null)))?((((map__64089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64089):map__64089);
var state = cljs.core.get.call(null,map__64089__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var path = cljs.core.get.call(null,map__64089__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.reset_BANG_.call(null,state,untangled_spec.reporter.make_testreport.call(null));

return cljs.core.reset_BANG_.call(null,path,cljs.core.PersistentVector.EMPTY);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
untangled_spec.reporter.TestReporter = (function (state,path,__meta,__extmap,__hash){
this.state = state;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled_spec.reporter.TestReporter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k64092,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__64094 = (((k64092 instanceof cljs.core.Keyword))?k64092.fqn:null);
switch (G__64094) {
case "state":
return self__.state;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k64092,else__35233__auto__);

}
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#untangled-spec.reporter.TestReporter{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.reporter.TestReporter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64091){
var self__ = this;
var G__64091__$1 = this;
return (new cljs.core.RecordIter((0),G__64091__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new untangled_spec.reporter.TestReporter(self__.state,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
var self__ = this;
var this__35225__auto____$1 = this;
var h__34997__auto__ = self__.__hash;
if(!((h__34997__auto__ == null))){
return h__34997__auto__;
} else {
var h__34997__auto____$1 = cljs.core.hash_imap.call(null,this__35225__auto____$1);
self__.__hash = h__34997__auto____$1;

return h__34997__auto____$1;
}
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
var self__ = this;
var this__35226__auto____$1 = this;
if(cljs.core.truth_((function (){var and__34543__auto__ = other__35227__auto__;
if(cljs.core.truth_(and__34543__auto__)){
return ((this__35226__auto____$1.constructor === other__35227__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__35226__auto____$1,other__35227__auto__));
} else {
return and__34543__auto__;
}
})())){
return true;
} else {
return false;
}
});


untangled_spec.reporter.TestReporter.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.reporter.TestReporter.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});


untangled_spec.reporter.TestReporter.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
untangled_spec.reporter.reset_test_report_BANG_.call(null,this$__$1);

return this$__$1;
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new untangled_spec.reporter.TestReporter(self__.state,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__64091){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__64095 = cljs.core.keyword_identical_QMARK_;
var expr__64096 = k__35238__auto__;
if(cljs.core.truth_(pred__64095.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__64096))){
return (new untangled_spec.reporter.TestReporter(G__64091,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__64095.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__64096))){
return (new untangled_spec.reporter.TestReporter(self__.state,G__64091,self__.__meta,self__.__extmap,null));
} else {
return (new untangled_spec.reporter.TestReporter(self__.state,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__64091),null));
}
}
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__64091){
var self__ = this;
var this__35229__auto____$1 = this;
return (new untangled_spec.reporter.TestReporter(self__.state,self__.path,G__64091,self__.__extmap,self__.__hash));
});


untangled_spec.reporter.TestReporter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

untangled_spec.reporter.TestReporter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

untangled_spec.reporter.TestReporter.cljs$lang$type = true;

untangled_spec.reporter.TestReporter.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled-spec.reporter/TestReporter");
});

untangled_spec.reporter.TestReporter.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"untangled-spec.reporter/TestReporter");
});

untangled_spec.reporter.__GT_TestReporter = (function untangled_spec$reporter$__GT_TestReporter(state,path){
return (new untangled_spec.reporter.TestReporter(state,path,null,null,null));
});

untangled_spec.reporter.map__GT_TestReporter = (function untangled_spec$reporter$map__GT_TestReporter(G__64093){
return (new untangled_spec.reporter.TestReporter(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__64093),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__64093),null,cljs.core.dissoc.call(null,G__64093,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"path","path",-188191168)),null));
});

/**
 * Just a shell to contain minimum state necessary for reporting
 */
untangled_spec.reporter.make_test_reporter = (function untangled_spec$reporter$make_test_reporter(){
return untangled_spec.reporter.map__GT_TestReporter.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,untangled_spec.reporter.make_testreport.call(null)),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null));
});
untangled_spec.reporter.get_test_report = (function untangled_spec$reporter$get_test_report(reporter){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reporter));
});
untangled_spec.reporter.untangled_report = (function untangled_spec$reporter$untangled_report(p__64099,on_complete){
var map__64103 = p__64099;
var map__64103__$1 = ((((!((map__64103 == null)))?((((map__64103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64103):map__64103);
var system = map__64103__$1;
var reporter = cljs.core.get.call(null,map__64103__$1,new cljs.core.Keyword("test","reporter","test/reporter",-867863647));
return ((function (map__64103,map__64103__$1,system,reporter){
return (function (t){
var G__64105 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t).fqn:null);
switch (G__64105) {
case "begin-provided":
return untangled_spec.reporter.begin_provided.call(null,reporter,t);

break;
case "begin-specification":
return untangled_spec.reporter.begin_specification.call(null,reporter,t);

break;
case "end-behavior":
return untangled_spec.reporter.end_behavior.call(null,reporter,t);

break;
case "summary":
return untangled_spec.reporter.summary.call(null,reporter,t);

break;
case "end-manual":
return untangled_spec.reporter.end_manual.call(null,reporter,t);

break;
case "begin-manual":
return untangled_spec.reporter.begin_manual.call(null,reporter,t);

break;
case "fail":
return untangled_spec.reporter.fail.call(null,reporter,t);

break;
case "end-run-tests":
return on_complete.call(null,system);

break;
case "end-specification":
return untangled_spec.reporter.end_specification.call(null,reporter,t);

break;
case "begin-test-ns":
return untangled_spec.reporter.begin_namespace.call(null,reporter,t);

break;
case "error":
return untangled_spec.reporter.error.call(null,reporter,t);

break;
case "pass":
return untangled_spec.reporter.pass.call(null,reporter,t);

break;
case "end-provided":
return untangled_spec.reporter.end_provided.call(null,reporter,t);

break;
case "end-test-ns":
return untangled_spec.reporter.end_namespace.call(null,reporter,t);

break;
case "begin-behavior":
return untangled_spec.reporter.begin_behavior.call(null,reporter,t);

break;
default:
return null;

}
});
;})(map__64103,map__64103__$1,system,reporter))
});

//# sourceMappingURL=reporter.js.map?rel=1491640779937