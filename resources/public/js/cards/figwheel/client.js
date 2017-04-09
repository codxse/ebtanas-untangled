// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args209469 = [];
var len__40427__auto___209472 = arguments.length;
var i__40428__auto___209473 = (0);
while(true){
if((i__40428__auto___209473 < len__40427__auto___209472)){
args209469.push((arguments[i__40428__auto___209473]));

var G__209474 = (i__40428__auto___209473 + (1));
i__40428__auto___209473 = G__209474;
continue;
} else {
}
break;
}

var G__209471 = args209469.length;
switch (G__209471) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args209469.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__40434__auto__ = [];
var len__40427__auto___209477 = arguments.length;
var i__40428__auto___209478 = (0);
while(true){
if((i__40428__auto___209478 < len__40427__auto___209477)){
args__40434__auto__.push((arguments[i__40428__auto___209478]));

var G__209479 = (i__40428__auto___209478 + (1));
i__40428__auto___209478 = G__209479;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq209476){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq209476));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__40434__auto__ = [];
var len__40427__auto___209481 = arguments.length;
var i__40428__auto___209482 = (0);
while(true){
if((i__40428__auto___209482 < len__40427__auto___209481)){
args__40434__auto__.push((arguments[i__40428__auto___209482]));

var G__209483 = (i__40428__auto___209482 + (1));
i__40428__auto___209482 = G__209483;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq209480){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq209480));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__209484){
var map__209487 = p__209484;
var map__209487__$1 = ((((!((map__209487 == null)))?((((map__209487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209487):map__209487);
var message = cljs.core.get.call(null,map__209487__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__209487__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__39206__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__39194__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__39194__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__39194__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__44084__auto___209649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___209649,ch){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___209649,ch){
return (function (state_209618){
var state_val_209619 = (state_209618[(1)]);
if((state_val_209619 === (7))){
var inst_209614 = (state_209618[(2)]);
var state_209618__$1 = state_209618;
var statearr_209620_209650 = state_209618__$1;
(statearr_209620_209650[(2)] = inst_209614);

(statearr_209620_209650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (1))){
var state_209618__$1 = state_209618;
var statearr_209621_209651 = state_209618__$1;
(statearr_209621_209651[(2)] = null);

(statearr_209621_209651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (4))){
var inst_209571 = (state_209618[(7)]);
var inst_209571__$1 = (state_209618[(2)]);
var state_209618__$1 = (function (){var statearr_209622 = state_209618;
(statearr_209622[(7)] = inst_209571__$1);

return statearr_209622;
})();
if(cljs.core.truth_(inst_209571__$1)){
var statearr_209623_209652 = state_209618__$1;
(statearr_209623_209652[(1)] = (5));

} else {
var statearr_209624_209653 = state_209618__$1;
(statearr_209624_209653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (15))){
var inst_209578 = (state_209618[(8)]);
var inst_209593 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_209578);
var inst_209594 = cljs.core.first.call(null,inst_209593);
var inst_209595 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_209594);
var inst_209596 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_209595)].join('');
var inst_209597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_209596);
var state_209618__$1 = state_209618;
var statearr_209625_209654 = state_209618__$1;
(statearr_209625_209654[(2)] = inst_209597);

(statearr_209625_209654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (13))){
var inst_209602 = (state_209618[(2)]);
var state_209618__$1 = state_209618;
var statearr_209626_209655 = state_209618__$1;
(statearr_209626_209655[(2)] = inst_209602);

(statearr_209626_209655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (6))){
var state_209618__$1 = state_209618;
var statearr_209627_209656 = state_209618__$1;
(statearr_209627_209656[(2)] = null);

(statearr_209627_209656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (17))){
var inst_209600 = (state_209618[(2)]);
var state_209618__$1 = state_209618;
var statearr_209628_209657 = state_209618__$1;
(statearr_209628_209657[(2)] = inst_209600);

(statearr_209628_209657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (3))){
var inst_209616 = (state_209618[(2)]);
var state_209618__$1 = state_209618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209618__$1,inst_209616);
} else {
if((state_val_209619 === (12))){
var inst_209577 = (state_209618[(9)]);
var inst_209591 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_209577,opts);
var state_209618__$1 = state_209618;
if(cljs.core.truth_(inst_209591)){
var statearr_209629_209658 = state_209618__$1;
(statearr_209629_209658[(1)] = (15));

} else {
var statearr_209630_209659 = state_209618__$1;
(statearr_209630_209659[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (2))){
var state_209618__$1 = state_209618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209618__$1,(4),ch);
} else {
if((state_val_209619 === (11))){
var inst_209578 = (state_209618[(8)]);
var inst_209583 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_209584 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_209578);
var inst_209585 = cljs.core.async.timeout.call(null,(1000));
var inst_209586 = [inst_209584,inst_209585];
var inst_209587 = (new cljs.core.PersistentVector(null,2,(5),inst_209583,inst_209586,null));
var state_209618__$1 = state_209618;
return cljs.core.async.ioc_alts_BANG_.call(null,state_209618__$1,(14),inst_209587);
} else {
if((state_val_209619 === (9))){
var inst_209578 = (state_209618[(8)]);
var inst_209604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_209605 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_209578);
var inst_209606 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_209605);
var inst_209607 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_209606)].join('');
var inst_209608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_209607);
var state_209618__$1 = (function (){var statearr_209631 = state_209618;
(statearr_209631[(10)] = inst_209604);

return statearr_209631;
})();
var statearr_209632_209660 = state_209618__$1;
(statearr_209632_209660[(2)] = inst_209608);

(statearr_209632_209660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (5))){
var inst_209571 = (state_209618[(7)]);
var inst_209573 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_209574 = (new cljs.core.PersistentArrayMap(null,2,inst_209573,null));
var inst_209575 = (new cljs.core.PersistentHashSet(null,inst_209574,null));
var inst_209576 = figwheel.client.focus_msgs.call(null,inst_209575,inst_209571);
var inst_209577 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_209576);
var inst_209578 = cljs.core.first.call(null,inst_209576);
var inst_209579 = figwheel.client.autoload_QMARK_.call(null);
var state_209618__$1 = (function (){var statearr_209633 = state_209618;
(statearr_209633[(8)] = inst_209578);

(statearr_209633[(9)] = inst_209577);

return statearr_209633;
})();
if(cljs.core.truth_(inst_209579)){
var statearr_209634_209661 = state_209618__$1;
(statearr_209634_209661[(1)] = (8));

} else {
var statearr_209635_209662 = state_209618__$1;
(statearr_209635_209662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (14))){
var inst_209589 = (state_209618[(2)]);
var state_209618__$1 = state_209618;
var statearr_209636_209663 = state_209618__$1;
(statearr_209636_209663[(2)] = inst_209589);

(statearr_209636_209663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (16))){
var state_209618__$1 = state_209618;
var statearr_209637_209664 = state_209618__$1;
(statearr_209637_209664[(2)] = null);

(statearr_209637_209664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (10))){
var inst_209610 = (state_209618[(2)]);
var state_209618__$1 = (function (){var statearr_209638 = state_209618;
(statearr_209638[(11)] = inst_209610);

return statearr_209638;
})();
var statearr_209639_209665 = state_209618__$1;
(statearr_209639_209665[(2)] = null);

(statearr_209639_209665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209619 === (8))){
var inst_209577 = (state_209618[(9)]);
var inst_209581 = figwheel.client.reload_file_state_QMARK_.call(null,inst_209577,opts);
var state_209618__$1 = state_209618;
if(cljs.core.truth_(inst_209581)){
var statearr_209640_209666 = state_209618__$1;
(statearr_209640_209666[(1)] = (11));

} else {
var statearr_209641_209667 = state_209618__$1;
(statearr_209641_209667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44084__auto___209649,ch))
;
return ((function (switch__44061__auto__,c__44084__auto___209649,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0 = (function (){
var statearr_209645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_209645[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__);

(statearr_209645[(1)] = (1));

return statearr_209645;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1 = (function (state_209618){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_209618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e209646){if((e209646 instanceof Object)){
var ex__44065__auto__ = e209646;
var statearr_209647_209668 = state_209618;
(statearr_209647_209668[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e209646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__209669 = state_209618;
state_209618 = G__209669;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__ = function(state_209618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1.call(this,state_209618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___209649,ch))
})();
var state__44086__auto__ = (function (){var statearr_209648 = f__44085__auto__.call(null);
(statearr_209648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___209649);

return statearr_209648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___209649,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__209670_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__209670_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_209673 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_209673){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e209672){if((e209672 instanceof Error)){
var e = e209672;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_209673], null));
} else {
var e = e209672;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_209673))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__209674){
var map__209683 = p__209674;
var map__209683__$1 = ((((!((map__209683 == null)))?((((map__209683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209683):map__209683);
var opts = map__209683__$1;
var build_id = cljs.core.get.call(null,map__209683__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__209683,map__209683__$1,opts,build_id){
return (function (p__209685){
var vec__209686 = p__209685;
var seq__209687 = cljs.core.seq.call(null,vec__209686);
var first__209688 = cljs.core.first.call(null,seq__209687);
var seq__209687__$1 = cljs.core.next.call(null,seq__209687);
var map__209689 = first__209688;
var map__209689__$1 = ((((!((map__209689 == null)))?((((map__209689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209689):map__209689);
var msg = map__209689__$1;
var msg_name = cljs.core.get.call(null,map__209689__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__209687__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__209686,seq__209687,first__209688,seq__209687__$1,map__209689,map__209689__$1,msg,msg_name,_,map__209683,map__209683__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__209686,seq__209687,first__209688,seq__209687__$1,map__209689,map__209689__$1,msg,msg_name,_,map__209683,map__209683__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__209683,map__209683__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__209697){
var vec__209698 = p__209697;
var seq__209699 = cljs.core.seq.call(null,vec__209698);
var first__209700 = cljs.core.first.call(null,seq__209699);
var seq__209699__$1 = cljs.core.next.call(null,seq__209699);
var map__209701 = first__209700;
var map__209701__$1 = ((((!((map__209701 == null)))?((((map__209701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209701):map__209701);
var msg = map__209701__$1;
var msg_name = cljs.core.get.call(null,map__209701__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__209699__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__209703){
var map__209715 = p__209703;
var map__209715__$1 = ((((!((map__209715 == null)))?((((map__209715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209715):map__209715);
var on_compile_warning = cljs.core.get.call(null,map__209715__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__209715__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__209715,map__209715__$1,on_compile_warning,on_compile_fail){
return (function (p__209717){
var vec__209718 = p__209717;
var seq__209719 = cljs.core.seq.call(null,vec__209718);
var first__209720 = cljs.core.first.call(null,seq__209719);
var seq__209719__$1 = cljs.core.next.call(null,seq__209719);
var map__209721 = first__209720;
var map__209721__$1 = ((((!((map__209721 == null)))?((((map__209721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209721):map__209721);
var msg = map__209721__$1;
var msg_name = cljs.core.get.call(null,map__209721__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__209719__$1;
var pred__209723 = cljs.core._EQ_;
var expr__209724 = msg_name;
if(cljs.core.truth_(pred__209723.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__209724))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__209723.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__209724))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__209715,map__209715__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,msg_hist,msg_names,msg){
return (function (state_209952){
var state_val_209953 = (state_209952[(1)]);
if((state_val_209953 === (7))){
var inst_209872 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
if(cljs.core.truth_(inst_209872)){
var statearr_209954_210004 = state_209952__$1;
(statearr_209954_210004[(1)] = (8));

} else {
var statearr_209955_210005 = state_209952__$1;
(statearr_209955_210005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (20))){
var inst_209946 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209956_210006 = state_209952__$1;
(statearr_209956_210006[(2)] = inst_209946);

(statearr_209956_210006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (27))){
var inst_209942 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209957_210007 = state_209952__$1;
(statearr_209957_210007[(2)] = inst_209942);

(statearr_209957_210007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (1))){
var inst_209865 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_209952__$1 = state_209952;
if(cljs.core.truth_(inst_209865)){
var statearr_209958_210008 = state_209952__$1;
(statearr_209958_210008[(1)] = (2));

} else {
var statearr_209959_210009 = state_209952__$1;
(statearr_209959_210009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (24))){
var inst_209944 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209960_210010 = state_209952__$1;
(statearr_209960_210010[(2)] = inst_209944);

(statearr_209960_210010[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (4))){
var inst_209950 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209952__$1,inst_209950);
} else {
if((state_val_209953 === (15))){
var inst_209948 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209961_210011 = state_209952__$1;
(statearr_209961_210011[(2)] = inst_209948);

(statearr_209961_210011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (21))){
var inst_209901 = (state_209952[(2)]);
var inst_209902 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209903 = figwheel.client.auto_jump_to_error.call(null,opts,inst_209902);
var state_209952__$1 = (function (){var statearr_209962 = state_209952;
(statearr_209962[(7)] = inst_209901);

return statearr_209962;
})();
var statearr_209963_210012 = state_209952__$1;
(statearr_209963_210012[(2)] = inst_209903);

(statearr_209963_210012[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (31))){
var inst_209931 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_209952__$1 = state_209952;
if(cljs.core.truth_(inst_209931)){
var statearr_209964_210013 = state_209952__$1;
(statearr_209964_210013[(1)] = (34));

} else {
var statearr_209965_210014 = state_209952__$1;
(statearr_209965_210014[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (32))){
var inst_209940 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209966_210015 = state_209952__$1;
(statearr_209966_210015[(2)] = inst_209940);

(statearr_209966_210015[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (33))){
var inst_209927 = (state_209952[(2)]);
var inst_209928 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209929 = figwheel.client.auto_jump_to_error.call(null,opts,inst_209928);
var state_209952__$1 = (function (){var statearr_209967 = state_209952;
(statearr_209967[(8)] = inst_209927);

return statearr_209967;
})();
var statearr_209968_210016 = state_209952__$1;
(statearr_209968_210016[(2)] = inst_209929);

(statearr_209968_210016[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (13))){
var inst_209886 = figwheel.client.heads_up.clear.call(null);
var state_209952__$1 = state_209952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(16),inst_209886);
} else {
if((state_val_209953 === (22))){
var inst_209907 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209908 = figwheel.client.heads_up.append_warning_message.call(null,inst_209907);
var state_209952__$1 = state_209952;
var statearr_209969_210017 = state_209952__$1;
(statearr_209969_210017[(2)] = inst_209908);

(statearr_209969_210017[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (36))){
var inst_209938 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209970_210018 = state_209952__$1;
(statearr_209970_210018[(2)] = inst_209938);

(statearr_209970_210018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (29))){
var inst_209918 = (state_209952[(2)]);
var inst_209919 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209920 = figwheel.client.auto_jump_to_error.call(null,opts,inst_209919);
var state_209952__$1 = (function (){var statearr_209971 = state_209952;
(statearr_209971[(9)] = inst_209918);

return statearr_209971;
})();
var statearr_209972_210019 = state_209952__$1;
(statearr_209972_210019[(2)] = inst_209920);

(statearr_209972_210019[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (6))){
var inst_209867 = (state_209952[(10)]);
var state_209952__$1 = state_209952;
var statearr_209973_210020 = state_209952__$1;
(statearr_209973_210020[(2)] = inst_209867);

(statearr_209973_210020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (28))){
var inst_209914 = (state_209952[(2)]);
var inst_209915 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209916 = figwheel.client.heads_up.display_warning.call(null,inst_209915);
var state_209952__$1 = (function (){var statearr_209974 = state_209952;
(statearr_209974[(11)] = inst_209914);

return statearr_209974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(29),inst_209916);
} else {
if((state_val_209953 === (25))){
var inst_209912 = figwheel.client.heads_up.clear.call(null);
var state_209952__$1 = state_209952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(28),inst_209912);
} else {
if((state_val_209953 === (34))){
var inst_209933 = figwheel.client.heads_up.flash_loaded.call(null);
var state_209952__$1 = state_209952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(37),inst_209933);
} else {
if((state_val_209953 === (17))){
var inst_209892 = (state_209952[(2)]);
var inst_209893 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209894 = figwheel.client.auto_jump_to_error.call(null,opts,inst_209893);
var state_209952__$1 = (function (){var statearr_209975 = state_209952;
(statearr_209975[(12)] = inst_209892);

return statearr_209975;
})();
var statearr_209976_210021 = state_209952__$1;
(statearr_209976_210021[(2)] = inst_209894);

(statearr_209976_210021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (3))){
var inst_209884 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_209952__$1 = state_209952;
if(cljs.core.truth_(inst_209884)){
var statearr_209977_210022 = state_209952__$1;
(statearr_209977_210022[(1)] = (13));

} else {
var statearr_209978_210023 = state_209952__$1;
(statearr_209978_210023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (12))){
var inst_209880 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209979_210024 = state_209952__$1;
(statearr_209979_210024[(2)] = inst_209880);

(statearr_209979_210024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (2))){
var inst_209867 = (state_209952[(10)]);
var inst_209867__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_209952__$1 = (function (){var statearr_209980 = state_209952;
(statearr_209980[(10)] = inst_209867__$1);

return statearr_209980;
})();
if(cljs.core.truth_(inst_209867__$1)){
var statearr_209981_210025 = state_209952__$1;
(statearr_209981_210025[(1)] = (5));

} else {
var statearr_209982_210026 = state_209952__$1;
(statearr_209982_210026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (23))){
var inst_209910 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_209952__$1 = state_209952;
if(cljs.core.truth_(inst_209910)){
var statearr_209983_210027 = state_209952__$1;
(statearr_209983_210027[(1)] = (25));

} else {
var statearr_209984_210028 = state_209952__$1;
(statearr_209984_210028[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (35))){
var state_209952__$1 = state_209952;
var statearr_209985_210029 = state_209952__$1;
(statearr_209985_210029[(2)] = null);

(statearr_209985_210029[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (19))){
var inst_209905 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_209952__$1 = state_209952;
if(cljs.core.truth_(inst_209905)){
var statearr_209986_210030 = state_209952__$1;
(statearr_209986_210030[(1)] = (22));

} else {
var statearr_209987_210031 = state_209952__$1;
(statearr_209987_210031[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (11))){
var inst_209876 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209988_210032 = state_209952__$1;
(statearr_209988_210032[(2)] = inst_209876);

(statearr_209988_210032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (9))){
var inst_209878 = figwheel.client.heads_up.clear.call(null);
var state_209952__$1 = state_209952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(12),inst_209878);
} else {
if((state_val_209953 === (5))){
var inst_209869 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_209952__$1 = state_209952;
var statearr_209989_210033 = state_209952__$1;
(statearr_209989_210033[(2)] = inst_209869);

(statearr_209989_210033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (14))){
var inst_209896 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_209952__$1 = state_209952;
if(cljs.core.truth_(inst_209896)){
var statearr_209990_210034 = state_209952__$1;
(statearr_209990_210034[(1)] = (18));

} else {
var statearr_209991_210035 = state_209952__$1;
(statearr_209991_210035[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (26))){
var inst_209922 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_209952__$1 = state_209952;
if(cljs.core.truth_(inst_209922)){
var statearr_209992_210036 = state_209952__$1;
(statearr_209992_210036[(1)] = (30));

} else {
var statearr_209993_210037 = state_209952__$1;
(statearr_209993_210037[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (16))){
var inst_209888 = (state_209952[(2)]);
var inst_209889 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209890 = figwheel.client.heads_up.display_exception.call(null,inst_209889);
var state_209952__$1 = (function (){var statearr_209994 = state_209952;
(statearr_209994[(13)] = inst_209888);

return statearr_209994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(17),inst_209890);
} else {
if((state_val_209953 === (30))){
var inst_209924 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209925 = figwheel.client.heads_up.display_warning.call(null,inst_209924);
var state_209952__$1 = state_209952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(33),inst_209925);
} else {
if((state_val_209953 === (10))){
var inst_209882 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209995_210038 = state_209952__$1;
(statearr_209995_210038[(2)] = inst_209882);

(statearr_209995_210038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (18))){
var inst_209898 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_209899 = figwheel.client.heads_up.display_exception.call(null,inst_209898);
var state_209952__$1 = state_209952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(21),inst_209899);
} else {
if((state_val_209953 === (37))){
var inst_209935 = (state_209952[(2)]);
var state_209952__$1 = state_209952;
var statearr_209996_210039 = state_209952__$1;
(statearr_209996_210039[(2)] = inst_209935);

(statearr_209996_210039[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_209953 === (8))){
var inst_209874 = figwheel.client.heads_up.flash_loaded.call(null);
var state_209952__$1 = state_209952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209952__$1,(11),inst_209874);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44084__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44061__auto__,c__44084__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____0 = (function (){
var statearr_210000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_210000[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__);

(statearr_210000[(1)] = (1));

return statearr_210000;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1 = (function (state_209952){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_209952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e210001){if((e210001 instanceof Object)){
var ex__44065__auto__ = e210001;
var statearr_210002_210040 = state_209952;
(statearr_210002_210040[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e210001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__210041 = state_209952;
state_209952 = G__210041;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__ = function(state_209952){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1.call(this,state_209952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,msg_hist,msg_names,msg))
})();
var state__44086__auto__ = (function (){var statearr_210003 = f__44085__auto__.call(null);
(statearr_210003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_210003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,msg_hist,msg_names,msg))
);

return c__44084__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44084__auto___210104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___210104,ch){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___210104,ch){
return (function (state_210087){
var state_val_210088 = (state_210087[(1)]);
if((state_val_210088 === (1))){
var state_210087__$1 = state_210087;
var statearr_210089_210105 = state_210087__$1;
(statearr_210089_210105[(2)] = null);

(statearr_210089_210105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_210088 === (2))){
var state_210087__$1 = state_210087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210087__$1,(4),ch);
} else {
if((state_val_210088 === (3))){
var inst_210085 = (state_210087[(2)]);
var state_210087__$1 = state_210087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210087__$1,inst_210085);
} else {
if((state_val_210088 === (4))){
var inst_210075 = (state_210087[(7)]);
var inst_210075__$1 = (state_210087[(2)]);
var state_210087__$1 = (function (){var statearr_210090 = state_210087;
(statearr_210090[(7)] = inst_210075__$1);

return statearr_210090;
})();
if(cljs.core.truth_(inst_210075__$1)){
var statearr_210091_210106 = state_210087__$1;
(statearr_210091_210106[(1)] = (5));

} else {
var statearr_210092_210107 = state_210087__$1;
(statearr_210092_210107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_210088 === (5))){
var inst_210075 = (state_210087[(7)]);
var inst_210077 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_210075);
var state_210087__$1 = state_210087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210087__$1,(8),inst_210077);
} else {
if((state_val_210088 === (6))){
var state_210087__$1 = state_210087;
var statearr_210093_210108 = state_210087__$1;
(statearr_210093_210108[(2)] = null);

(statearr_210093_210108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_210088 === (7))){
var inst_210083 = (state_210087[(2)]);
var state_210087__$1 = state_210087;
var statearr_210094_210109 = state_210087__$1;
(statearr_210094_210109[(2)] = inst_210083);

(statearr_210094_210109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_210088 === (8))){
var inst_210079 = (state_210087[(2)]);
var state_210087__$1 = (function (){var statearr_210095 = state_210087;
(statearr_210095[(8)] = inst_210079);

return statearr_210095;
})();
var statearr_210096_210110 = state_210087__$1;
(statearr_210096_210110[(2)] = null);

(statearr_210096_210110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__44084__auto___210104,ch))
;
return ((function (switch__44061__auto__,c__44084__auto___210104,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0 = (function (){
var statearr_210100 = [null,null,null,null,null,null,null,null,null];
(statearr_210100[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44062__auto__);

(statearr_210100[(1)] = (1));

return statearr_210100;
});
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1 = (function (state_210087){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_210087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e210101){if((e210101 instanceof Object)){
var ex__44065__auto__ = e210101;
var statearr_210102_210111 = state_210087;
(statearr_210102_210111[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e210101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__210112 = state_210087;
state_210087 = G__210112;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__ = function(state_210087){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1.call(this,state_210087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___210104,ch))
})();
var state__44086__auto__ = (function (){var statearr_210103 = f__44085__auto__.call(null);
(statearr_210103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___210104);

return statearr_210103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___210104,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__){
return (function (state_210133){
var state_val_210134 = (state_210133[(1)]);
if((state_val_210134 === (1))){
var inst_210128 = cljs.core.async.timeout.call(null,(3000));
var state_210133__$1 = state_210133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210133__$1,(2),inst_210128);
} else {
if((state_val_210134 === (2))){
var inst_210130 = (state_210133[(2)]);
var inst_210131 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_210133__$1 = (function (){var statearr_210135 = state_210133;
(statearr_210135[(7)] = inst_210130);

return statearr_210135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210133__$1,inst_210131);
} else {
return null;
}
}
});})(c__44084__auto__))
;
return ((function (switch__44061__auto__,c__44084__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____0 = (function (){
var statearr_210139 = [null,null,null,null,null,null,null,null];
(statearr_210139[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__);

(statearr_210139[(1)] = (1));

return statearr_210139;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1 = (function (state_210133){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_210133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e210140){if((e210140 instanceof Object)){
var ex__44065__auto__ = e210140;
var statearr_210141_210143 = state_210133;
(statearr_210141_210143[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e210140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__210144 = state_210133;
state_210133 = G__210144;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__ = function(state_210133){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1.call(this,state_210133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_210142 = f__44085__auto__.call(null);
(statearr_210142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_210142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__))
);

return c__44084__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,figwheel_version,temp__6753__auto__){
return (function (state_210167){
var state_val_210168 = (state_210167[(1)]);
if((state_val_210168 === (1))){
var inst_210161 = cljs.core.async.timeout.call(null,(2000));
var state_210167__$1 = state_210167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210167__$1,(2),inst_210161);
} else {
if((state_val_210168 === (2))){
var inst_210163 = (state_210167[(2)]);
var inst_210164 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_210165 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_210164);
var state_210167__$1 = (function (){var statearr_210169 = state_210167;
(statearr_210169[(7)] = inst_210163);

return statearr_210169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210167__$1,inst_210165);
} else {
return null;
}
}
});})(c__44084__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__44061__auto__,c__44084__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____0 = (function (){
var statearr_210173 = [null,null,null,null,null,null,null,null];
(statearr_210173[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__);

(statearr_210173[(1)] = (1));

return statearr_210173;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1 = (function (state_210167){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_210167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e210174){if((e210174 instanceof Object)){
var ex__44065__auto__ = e210174;
var statearr_210175_210177 = state_210167;
(statearr_210175_210177[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e210174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__210178 = state_210167;
state_210167 = G__210178;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__ = function(state_210167){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1.call(this,state_210167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,figwheel_version,temp__6753__auto__))
})();
var state__44086__auto__ = (function (){var statearr_210176 = f__44085__auto__.call(null);
(statearr_210176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_210176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,figwheel_version,temp__6753__auto__))
);

return c__44084__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__210179){
var map__210183 = p__210179;
var map__210183__$1 = ((((!((map__210183 == null)))?((((map__210183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__210183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__210183):map__210183);
var file = cljs.core.get.call(null,map__210183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__210183__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__210183__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__210185 = "";
var G__210185__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__210185),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__210185);
var G__210185__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__210185__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__210185__$1);
if(cljs.core.truth_((function (){var and__39194__auto__ = line;
if(cljs.core.truth_(and__39194__auto__)){
return column;
} else {
return and__39194__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__210185__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__210185__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__210186){
var map__210193 = p__210186;
var map__210193__$1 = ((((!((map__210193 == null)))?((((map__210193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__210193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__210193):map__210193);
var ed = map__210193__$1;
var formatted_exception = cljs.core.get.call(null,map__210193__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__210193__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__210193__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__210195_210199 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__210196_210200 = null;
var count__210197_210201 = (0);
var i__210198_210202 = (0);
while(true){
if((i__210198_210202 < count__210197_210201)){
var msg_210203 = cljs.core._nth.call(null,chunk__210196_210200,i__210198_210202);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_210203);

var G__210204 = seq__210195_210199;
var G__210205 = chunk__210196_210200;
var G__210206 = count__210197_210201;
var G__210207 = (i__210198_210202 + (1));
seq__210195_210199 = G__210204;
chunk__210196_210200 = G__210205;
count__210197_210201 = G__210206;
i__210198_210202 = G__210207;
continue;
} else {
var temp__6753__auto___210208 = cljs.core.seq.call(null,seq__210195_210199);
if(temp__6753__auto___210208){
var seq__210195_210209__$1 = temp__6753__auto___210208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__210195_210209__$1)){
var c__40117__auto___210210 = cljs.core.chunk_first.call(null,seq__210195_210209__$1);
var G__210211 = cljs.core.chunk_rest.call(null,seq__210195_210209__$1);
var G__210212 = c__40117__auto___210210;
var G__210213 = cljs.core.count.call(null,c__40117__auto___210210);
var G__210214 = (0);
seq__210195_210199 = G__210211;
chunk__210196_210200 = G__210212;
count__210197_210201 = G__210213;
i__210198_210202 = G__210214;
continue;
} else {
var msg_210215 = cljs.core.first.call(null,seq__210195_210209__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_210215);

var G__210216 = cljs.core.next.call(null,seq__210195_210209__$1);
var G__210217 = null;
var G__210218 = (0);
var G__210219 = (0);
seq__210195_210199 = G__210216;
chunk__210196_210200 = G__210217;
count__210197_210201 = G__210218;
i__210198_210202 = G__210219;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__210220){
var map__210223 = p__210220;
var map__210223__$1 = ((((!((map__210223 == null)))?((((map__210223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__210223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__210223):map__210223);
var w = map__210223__$1;
var message = cljs.core.get.call(null,map__210223__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/cards/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/cards/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__39194__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__39194__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__39194__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__210235 = cljs.core.seq.call(null,plugins);
var chunk__210236 = null;
var count__210237 = (0);
var i__210238 = (0);
while(true){
if((i__210238 < count__210237)){
var vec__210239 = cljs.core._nth.call(null,chunk__210236,i__210238);
var k = cljs.core.nth.call(null,vec__210239,(0),null);
var plugin = cljs.core.nth.call(null,vec__210239,(1),null);
if(cljs.core.truth_(plugin)){
var pl_210245 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__210235,chunk__210236,count__210237,i__210238,pl_210245,vec__210239,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_210245.call(null,msg_hist);
});})(seq__210235,chunk__210236,count__210237,i__210238,pl_210245,vec__210239,k,plugin))
);
} else {
}

var G__210246 = seq__210235;
var G__210247 = chunk__210236;
var G__210248 = count__210237;
var G__210249 = (i__210238 + (1));
seq__210235 = G__210246;
chunk__210236 = G__210247;
count__210237 = G__210248;
i__210238 = G__210249;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__210235);
if(temp__6753__auto__){
var seq__210235__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__210235__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__210235__$1);
var G__210250 = cljs.core.chunk_rest.call(null,seq__210235__$1);
var G__210251 = c__40117__auto__;
var G__210252 = cljs.core.count.call(null,c__40117__auto__);
var G__210253 = (0);
seq__210235 = G__210250;
chunk__210236 = G__210251;
count__210237 = G__210252;
i__210238 = G__210253;
continue;
} else {
var vec__210242 = cljs.core.first.call(null,seq__210235__$1);
var k = cljs.core.nth.call(null,vec__210242,(0),null);
var plugin = cljs.core.nth.call(null,vec__210242,(1),null);
if(cljs.core.truth_(plugin)){
var pl_210254 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__210235,chunk__210236,count__210237,i__210238,pl_210254,vec__210242,k,plugin,seq__210235__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_210254.call(null,msg_hist);
});})(seq__210235,chunk__210236,count__210237,i__210238,pl_210254,vec__210242,k,plugin,seq__210235__$1,temp__6753__auto__))
);
} else {
}

var G__210255 = cljs.core.next.call(null,seq__210235__$1);
var G__210256 = null;
var G__210257 = (0);
var G__210258 = (0);
seq__210235 = G__210255;
chunk__210236 = G__210256;
count__210237 = G__210257;
i__210238 = G__210258;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args210259 = [];
var len__40427__auto___210266 = arguments.length;
var i__40428__auto___210267 = (0);
while(true){
if((i__40428__auto___210267 < len__40427__auto___210266)){
args210259.push((arguments[i__40428__auto___210267]));

var G__210268 = (i__40428__auto___210267 + (1));
i__40428__auto___210267 = G__210268;
continue;
} else {
}
break;
}

var G__210261 = args210259.length;
switch (G__210261) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args210259.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__210262_210270 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__210263_210271 = null;
var count__210264_210272 = (0);
var i__210265_210273 = (0);
while(true){
if((i__210265_210273 < count__210264_210272)){
var msg_210274 = cljs.core._nth.call(null,chunk__210263_210271,i__210265_210273);
figwheel.client.socket.handle_incoming_message.call(null,msg_210274);

var G__210275 = seq__210262_210270;
var G__210276 = chunk__210263_210271;
var G__210277 = count__210264_210272;
var G__210278 = (i__210265_210273 + (1));
seq__210262_210270 = G__210275;
chunk__210263_210271 = G__210276;
count__210264_210272 = G__210277;
i__210265_210273 = G__210278;
continue;
} else {
var temp__6753__auto___210279 = cljs.core.seq.call(null,seq__210262_210270);
if(temp__6753__auto___210279){
var seq__210262_210280__$1 = temp__6753__auto___210279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__210262_210280__$1)){
var c__40117__auto___210281 = cljs.core.chunk_first.call(null,seq__210262_210280__$1);
var G__210282 = cljs.core.chunk_rest.call(null,seq__210262_210280__$1);
var G__210283 = c__40117__auto___210281;
var G__210284 = cljs.core.count.call(null,c__40117__auto___210281);
var G__210285 = (0);
seq__210262_210270 = G__210282;
chunk__210263_210271 = G__210283;
count__210264_210272 = G__210284;
i__210265_210273 = G__210285;
continue;
} else {
var msg_210286 = cljs.core.first.call(null,seq__210262_210280__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_210286);

var G__210287 = cljs.core.next.call(null,seq__210262_210280__$1);
var G__210288 = null;
var G__210289 = (0);
var G__210290 = (0);
seq__210262_210270 = G__210287;
chunk__210263_210271 = G__210288;
count__210264_210272 = G__210289;
i__210265_210273 = G__210290;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__40434__auto__ = [];
var len__40427__auto___210295 = arguments.length;
var i__40428__auto___210296 = (0);
while(true){
if((i__40428__auto___210296 < len__40427__auto___210295)){
args__40434__auto__.push((arguments[i__40428__auto___210296]));

var G__210297 = (i__40428__auto___210296 + (1));
i__40428__auto___210296 = G__210297;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__210292){
var map__210293 = p__210292;
var map__210293__$1 = ((((!((map__210293 == null)))?((((map__210293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__210293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__210293):map__210293);
var opts = map__210293__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq210291){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq210291));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e210299){if((e210299 instanceof Error)){
var e = e210299;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e210299;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__210303){
var map__210304 = p__210303;
var map__210304__$1 = ((((!((map__210304 == null)))?((((map__210304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__210304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__210304):map__210304);
var msg_name = cljs.core.get.call(null,map__210304__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491715110917