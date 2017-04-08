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
var args88395 = [];
var len__35776__auto___88398 = arguments.length;
var i__35777__auto___88399 = (0);
while(true){
if((i__35777__auto___88399 < len__35776__auto___88398)){
args88395.push((arguments[i__35777__auto___88399]));

var G__88400 = (i__35777__auto___88399 + (1));
i__35777__auto___88399 = G__88400;
continue;
} else {
}
break;
}

var G__88397 = args88395.length;
switch (G__88397) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args88395.length)].join('')));

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
var args__35783__auto__ = [];
var len__35776__auto___88403 = arguments.length;
var i__35777__auto___88404 = (0);
while(true){
if((i__35777__auto___88404 < len__35776__auto___88403)){
args__35783__auto__.push((arguments[i__35777__auto___88404]));

var G__88405 = (i__35777__auto___88404 + (1));
i__35777__auto___88404 = G__88405;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq88402){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88402));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35783__auto__ = [];
var len__35776__auto___88407 = arguments.length;
var i__35777__auto___88408 = (0);
while(true){
if((i__35777__auto___88408 < len__35776__auto___88407)){
args__35783__auto__.push((arguments[i__35777__auto___88408]));

var G__88409 = (i__35777__auto___88408 + (1));
i__35777__auto___88408 = G__88409;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq88406){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88406));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__88410){
var map__88413 = p__88410;
var map__88413__$1 = ((((!((map__88413 == null)))?((((map__88413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88413):map__88413);
var message = cljs.core.get.call(null,map__88413__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__88413__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__34555__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__34543__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__34543__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__34543__auto__;
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
var c__48312__auto___88575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___88575,ch){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___88575,ch){
return (function (state_88544){
var state_val_88545 = (state_88544[(1)]);
if((state_val_88545 === (7))){
var inst_88540 = (state_88544[(2)]);
var state_88544__$1 = state_88544;
var statearr_88546_88576 = state_88544__$1;
(statearr_88546_88576[(2)] = inst_88540);

(statearr_88546_88576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (1))){
var state_88544__$1 = state_88544;
var statearr_88547_88577 = state_88544__$1;
(statearr_88547_88577[(2)] = null);

(statearr_88547_88577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (4))){
var inst_88497 = (state_88544[(7)]);
var inst_88497__$1 = (state_88544[(2)]);
var state_88544__$1 = (function (){var statearr_88548 = state_88544;
(statearr_88548[(7)] = inst_88497__$1);

return statearr_88548;
})();
if(cljs.core.truth_(inst_88497__$1)){
var statearr_88549_88578 = state_88544__$1;
(statearr_88549_88578[(1)] = (5));

} else {
var statearr_88550_88579 = state_88544__$1;
(statearr_88550_88579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (15))){
var inst_88504 = (state_88544[(8)]);
var inst_88519 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_88504);
var inst_88520 = cljs.core.first.call(null,inst_88519);
var inst_88521 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_88520);
var inst_88522 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_88521)].join('');
var inst_88523 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_88522);
var state_88544__$1 = state_88544;
var statearr_88551_88580 = state_88544__$1;
(statearr_88551_88580[(2)] = inst_88523);

(statearr_88551_88580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (13))){
var inst_88528 = (state_88544[(2)]);
var state_88544__$1 = state_88544;
var statearr_88552_88581 = state_88544__$1;
(statearr_88552_88581[(2)] = inst_88528);

(statearr_88552_88581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (6))){
var state_88544__$1 = state_88544;
var statearr_88553_88582 = state_88544__$1;
(statearr_88553_88582[(2)] = null);

(statearr_88553_88582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (17))){
var inst_88526 = (state_88544[(2)]);
var state_88544__$1 = state_88544;
var statearr_88554_88583 = state_88544__$1;
(statearr_88554_88583[(2)] = inst_88526);

(statearr_88554_88583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (3))){
var inst_88542 = (state_88544[(2)]);
var state_88544__$1 = state_88544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88544__$1,inst_88542);
} else {
if((state_val_88545 === (12))){
var inst_88503 = (state_88544[(9)]);
var inst_88517 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_88503,opts);
var state_88544__$1 = state_88544;
if(cljs.core.truth_(inst_88517)){
var statearr_88555_88584 = state_88544__$1;
(statearr_88555_88584[(1)] = (15));

} else {
var statearr_88556_88585 = state_88544__$1;
(statearr_88556_88585[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (2))){
var state_88544__$1 = state_88544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88544__$1,(4),ch);
} else {
if((state_val_88545 === (11))){
var inst_88504 = (state_88544[(8)]);
var inst_88509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88510 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_88504);
var inst_88511 = cljs.core.async.timeout.call(null,(1000));
var inst_88512 = [inst_88510,inst_88511];
var inst_88513 = (new cljs.core.PersistentVector(null,2,(5),inst_88509,inst_88512,null));
var state_88544__$1 = state_88544;
return cljs.core.async.ioc_alts_BANG_.call(null,state_88544__$1,(14),inst_88513);
} else {
if((state_val_88545 === (9))){
var inst_88504 = (state_88544[(8)]);
var inst_88530 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_88531 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_88504);
var inst_88532 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_88531);
var inst_88533 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_88532)].join('');
var inst_88534 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_88533);
var state_88544__$1 = (function (){var statearr_88557 = state_88544;
(statearr_88557[(10)] = inst_88530);

return statearr_88557;
})();
var statearr_88558_88586 = state_88544__$1;
(statearr_88558_88586[(2)] = inst_88534);

(statearr_88558_88586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (5))){
var inst_88497 = (state_88544[(7)]);
var inst_88499 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_88500 = (new cljs.core.PersistentArrayMap(null,2,inst_88499,null));
var inst_88501 = (new cljs.core.PersistentHashSet(null,inst_88500,null));
var inst_88502 = figwheel.client.focus_msgs.call(null,inst_88501,inst_88497);
var inst_88503 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_88502);
var inst_88504 = cljs.core.first.call(null,inst_88502);
var inst_88505 = figwheel.client.autoload_QMARK_.call(null);
var state_88544__$1 = (function (){var statearr_88559 = state_88544;
(statearr_88559[(8)] = inst_88504);

(statearr_88559[(9)] = inst_88503);

return statearr_88559;
})();
if(cljs.core.truth_(inst_88505)){
var statearr_88560_88587 = state_88544__$1;
(statearr_88560_88587[(1)] = (8));

} else {
var statearr_88561_88588 = state_88544__$1;
(statearr_88561_88588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (14))){
var inst_88515 = (state_88544[(2)]);
var state_88544__$1 = state_88544;
var statearr_88562_88589 = state_88544__$1;
(statearr_88562_88589[(2)] = inst_88515);

(statearr_88562_88589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (16))){
var state_88544__$1 = state_88544;
var statearr_88563_88590 = state_88544__$1;
(statearr_88563_88590[(2)] = null);

(statearr_88563_88590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (10))){
var inst_88536 = (state_88544[(2)]);
var state_88544__$1 = (function (){var statearr_88564 = state_88544;
(statearr_88564[(11)] = inst_88536);

return statearr_88564;
})();
var statearr_88565_88591 = state_88544__$1;
(statearr_88565_88591[(2)] = null);

(statearr_88565_88591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88545 === (8))){
var inst_88503 = (state_88544[(9)]);
var inst_88507 = figwheel.client.reload_file_state_QMARK_.call(null,inst_88503,opts);
var state_88544__$1 = state_88544;
if(cljs.core.truth_(inst_88507)){
var statearr_88566_88592 = state_88544__$1;
(statearr_88566_88592[(1)] = (11));

} else {
var statearr_88567_88593 = state_88544__$1;
(statearr_88567_88593[(1)] = (12));

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
});})(c__48312__auto___88575,ch))
;
return ((function (switch__48198__auto__,c__48312__auto___88575,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0 = (function (){
var statearr_88571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88571[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__);

(statearr_88571[(1)] = (1));

return statearr_88571;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1 = (function (state_88544){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_88544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e88572){if((e88572 instanceof Object)){
var ex__48202__auto__ = e88572;
var statearr_88573_88594 = state_88544;
(statearr_88573_88594[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88595 = state_88544;
state_88544 = G__88595;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__ = function(state_88544){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1.call(this,state_88544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___88575,ch))
})();
var state__48314__auto__ = (function (){var statearr_88574 = f__48313__auto__.call(null);
(statearr_88574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___88575);

return statearr_88574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___88575,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__88596_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__88596_SHARP_));
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
var base_path_88599 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_88599){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e88598){if((e88598 instanceof Error)){
var e = e88598;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_88599], null));
} else {
var e = e88598;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_88599))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__88600){
var map__88609 = p__88600;
var map__88609__$1 = ((((!((map__88609 == null)))?((((map__88609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88609):map__88609);
var opts = map__88609__$1;
var build_id = cljs.core.get.call(null,map__88609__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__88609,map__88609__$1,opts,build_id){
return (function (p__88611){
var vec__88612 = p__88611;
var seq__88613 = cljs.core.seq.call(null,vec__88612);
var first__88614 = cljs.core.first.call(null,seq__88613);
var seq__88613__$1 = cljs.core.next.call(null,seq__88613);
var map__88615 = first__88614;
var map__88615__$1 = ((((!((map__88615 == null)))?((((map__88615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88615):map__88615);
var msg = map__88615__$1;
var msg_name = cljs.core.get.call(null,map__88615__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__88613__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__88612,seq__88613,first__88614,seq__88613__$1,map__88615,map__88615__$1,msg,msg_name,_,map__88609,map__88609__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__88612,seq__88613,first__88614,seq__88613__$1,map__88615,map__88615__$1,msg,msg_name,_,map__88609,map__88609__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__88609,map__88609__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__88623){
var vec__88624 = p__88623;
var seq__88625 = cljs.core.seq.call(null,vec__88624);
var first__88626 = cljs.core.first.call(null,seq__88625);
var seq__88625__$1 = cljs.core.next.call(null,seq__88625);
var map__88627 = first__88626;
var map__88627__$1 = ((((!((map__88627 == null)))?((((map__88627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88627):map__88627);
var msg = map__88627__$1;
var msg_name = cljs.core.get.call(null,map__88627__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__88625__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__88629){
var map__88641 = p__88629;
var map__88641__$1 = ((((!((map__88641 == null)))?((((map__88641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88641):map__88641);
var on_compile_warning = cljs.core.get.call(null,map__88641__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__88641__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__88641,map__88641__$1,on_compile_warning,on_compile_fail){
return (function (p__88643){
var vec__88644 = p__88643;
var seq__88645 = cljs.core.seq.call(null,vec__88644);
var first__88646 = cljs.core.first.call(null,seq__88645);
var seq__88645__$1 = cljs.core.next.call(null,seq__88645);
var map__88647 = first__88646;
var map__88647__$1 = ((((!((map__88647 == null)))?((((map__88647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88647):map__88647);
var msg = map__88647__$1;
var msg_name = cljs.core.get.call(null,map__88647__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__88645__$1;
var pred__88649 = cljs.core._EQ_;
var expr__88650 = msg_name;
if(cljs.core.truth_(pred__88649.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__88650))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__88649.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__88650))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__88641,map__88641__$1,on_compile_warning,on_compile_fail))
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
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,msg_hist,msg_names,msg){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,msg_hist,msg_names,msg){
return (function (state_88878){
var state_val_88879 = (state_88878[(1)]);
if((state_val_88879 === (7))){
var inst_88798 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
if(cljs.core.truth_(inst_88798)){
var statearr_88880_88930 = state_88878__$1;
(statearr_88880_88930[(1)] = (8));

} else {
var statearr_88881_88931 = state_88878__$1;
(statearr_88881_88931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (20))){
var inst_88872 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88882_88932 = state_88878__$1;
(statearr_88882_88932[(2)] = inst_88872);

(statearr_88882_88932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (27))){
var inst_88868 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88883_88933 = state_88878__$1;
(statearr_88883_88933[(2)] = inst_88868);

(statearr_88883_88933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (1))){
var inst_88791 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_88878__$1 = state_88878;
if(cljs.core.truth_(inst_88791)){
var statearr_88884_88934 = state_88878__$1;
(statearr_88884_88934[(1)] = (2));

} else {
var statearr_88885_88935 = state_88878__$1;
(statearr_88885_88935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (24))){
var inst_88870 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88886_88936 = state_88878__$1;
(statearr_88886_88936[(2)] = inst_88870);

(statearr_88886_88936[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (4))){
var inst_88876 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88878__$1,inst_88876);
} else {
if((state_val_88879 === (15))){
var inst_88874 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88887_88937 = state_88878__$1;
(statearr_88887_88937[(2)] = inst_88874);

(statearr_88887_88937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (21))){
var inst_88827 = (state_88878[(2)]);
var inst_88828 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88829 = figwheel.client.auto_jump_to_error.call(null,opts,inst_88828);
var state_88878__$1 = (function (){var statearr_88888 = state_88878;
(statearr_88888[(7)] = inst_88827);

return statearr_88888;
})();
var statearr_88889_88938 = state_88878__$1;
(statearr_88889_88938[(2)] = inst_88829);

(statearr_88889_88938[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (31))){
var inst_88857 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_88878__$1 = state_88878;
if(cljs.core.truth_(inst_88857)){
var statearr_88890_88939 = state_88878__$1;
(statearr_88890_88939[(1)] = (34));

} else {
var statearr_88891_88940 = state_88878__$1;
(statearr_88891_88940[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (32))){
var inst_88866 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88892_88941 = state_88878__$1;
(statearr_88892_88941[(2)] = inst_88866);

(statearr_88892_88941[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (33))){
var inst_88853 = (state_88878[(2)]);
var inst_88854 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88855 = figwheel.client.auto_jump_to_error.call(null,opts,inst_88854);
var state_88878__$1 = (function (){var statearr_88893 = state_88878;
(statearr_88893[(8)] = inst_88853);

return statearr_88893;
})();
var statearr_88894_88942 = state_88878__$1;
(statearr_88894_88942[(2)] = inst_88855);

(statearr_88894_88942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (13))){
var inst_88812 = figwheel.client.heads_up.clear.call(null);
var state_88878__$1 = state_88878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(16),inst_88812);
} else {
if((state_val_88879 === (22))){
var inst_88833 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88834 = figwheel.client.heads_up.append_warning_message.call(null,inst_88833);
var state_88878__$1 = state_88878;
var statearr_88895_88943 = state_88878__$1;
(statearr_88895_88943[(2)] = inst_88834);

(statearr_88895_88943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (36))){
var inst_88864 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88896_88944 = state_88878__$1;
(statearr_88896_88944[(2)] = inst_88864);

(statearr_88896_88944[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (29))){
var inst_88844 = (state_88878[(2)]);
var inst_88845 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88846 = figwheel.client.auto_jump_to_error.call(null,opts,inst_88845);
var state_88878__$1 = (function (){var statearr_88897 = state_88878;
(statearr_88897[(9)] = inst_88844);

return statearr_88897;
})();
var statearr_88898_88945 = state_88878__$1;
(statearr_88898_88945[(2)] = inst_88846);

(statearr_88898_88945[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (6))){
var inst_88793 = (state_88878[(10)]);
var state_88878__$1 = state_88878;
var statearr_88899_88946 = state_88878__$1;
(statearr_88899_88946[(2)] = inst_88793);

(statearr_88899_88946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (28))){
var inst_88840 = (state_88878[(2)]);
var inst_88841 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88842 = figwheel.client.heads_up.display_warning.call(null,inst_88841);
var state_88878__$1 = (function (){var statearr_88900 = state_88878;
(statearr_88900[(11)] = inst_88840);

return statearr_88900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(29),inst_88842);
} else {
if((state_val_88879 === (25))){
var inst_88838 = figwheel.client.heads_up.clear.call(null);
var state_88878__$1 = state_88878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(28),inst_88838);
} else {
if((state_val_88879 === (34))){
var inst_88859 = figwheel.client.heads_up.flash_loaded.call(null);
var state_88878__$1 = state_88878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(37),inst_88859);
} else {
if((state_val_88879 === (17))){
var inst_88818 = (state_88878[(2)]);
var inst_88819 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88820 = figwheel.client.auto_jump_to_error.call(null,opts,inst_88819);
var state_88878__$1 = (function (){var statearr_88901 = state_88878;
(statearr_88901[(12)] = inst_88818);

return statearr_88901;
})();
var statearr_88902_88947 = state_88878__$1;
(statearr_88902_88947[(2)] = inst_88820);

(statearr_88902_88947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (3))){
var inst_88810 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_88878__$1 = state_88878;
if(cljs.core.truth_(inst_88810)){
var statearr_88903_88948 = state_88878__$1;
(statearr_88903_88948[(1)] = (13));

} else {
var statearr_88904_88949 = state_88878__$1;
(statearr_88904_88949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (12))){
var inst_88806 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88905_88950 = state_88878__$1;
(statearr_88905_88950[(2)] = inst_88806);

(statearr_88905_88950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (2))){
var inst_88793 = (state_88878[(10)]);
var inst_88793__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_88878__$1 = (function (){var statearr_88906 = state_88878;
(statearr_88906[(10)] = inst_88793__$1);

return statearr_88906;
})();
if(cljs.core.truth_(inst_88793__$1)){
var statearr_88907_88951 = state_88878__$1;
(statearr_88907_88951[(1)] = (5));

} else {
var statearr_88908_88952 = state_88878__$1;
(statearr_88908_88952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (23))){
var inst_88836 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_88878__$1 = state_88878;
if(cljs.core.truth_(inst_88836)){
var statearr_88909_88953 = state_88878__$1;
(statearr_88909_88953[(1)] = (25));

} else {
var statearr_88910_88954 = state_88878__$1;
(statearr_88910_88954[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (35))){
var state_88878__$1 = state_88878;
var statearr_88911_88955 = state_88878__$1;
(statearr_88911_88955[(2)] = null);

(statearr_88911_88955[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (19))){
var inst_88831 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_88878__$1 = state_88878;
if(cljs.core.truth_(inst_88831)){
var statearr_88912_88956 = state_88878__$1;
(statearr_88912_88956[(1)] = (22));

} else {
var statearr_88913_88957 = state_88878__$1;
(statearr_88913_88957[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (11))){
var inst_88802 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88914_88958 = state_88878__$1;
(statearr_88914_88958[(2)] = inst_88802);

(statearr_88914_88958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (9))){
var inst_88804 = figwheel.client.heads_up.clear.call(null);
var state_88878__$1 = state_88878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(12),inst_88804);
} else {
if((state_val_88879 === (5))){
var inst_88795 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_88878__$1 = state_88878;
var statearr_88915_88959 = state_88878__$1;
(statearr_88915_88959[(2)] = inst_88795);

(statearr_88915_88959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (14))){
var inst_88822 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_88878__$1 = state_88878;
if(cljs.core.truth_(inst_88822)){
var statearr_88916_88960 = state_88878__$1;
(statearr_88916_88960[(1)] = (18));

} else {
var statearr_88917_88961 = state_88878__$1;
(statearr_88917_88961[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (26))){
var inst_88848 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_88878__$1 = state_88878;
if(cljs.core.truth_(inst_88848)){
var statearr_88918_88962 = state_88878__$1;
(statearr_88918_88962[(1)] = (30));

} else {
var statearr_88919_88963 = state_88878__$1;
(statearr_88919_88963[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (16))){
var inst_88814 = (state_88878[(2)]);
var inst_88815 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88816 = figwheel.client.heads_up.display_exception.call(null,inst_88815);
var state_88878__$1 = (function (){var statearr_88920 = state_88878;
(statearr_88920[(13)] = inst_88814);

return statearr_88920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(17),inst_88816);
} else {
if((state_val_88879 === (30))){
var inst_88850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88851 = figwheel.client.heads_up.display_warning.call(null,inst_88850);
var state_88878__$1 = state_88878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(33),inst_88851);
} else {
if((state_val_88879 === (10))){
var inst_88808 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88921_88964 = state_88878__$1;
(statearr_88921_88964[(2)] = inst_88808);

(statearr_88921_88964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (18))){
var inst_88824 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_88825 = figwheel.client.heads_up.display_exception.call(null,inst_88824);
var state_88878__$1 = state_88878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(21),inst_88825);
} else {
if((state_val_88879 === (37))){
var inst_88861 = (state_88878[(2)]);
var state_88878__$1 = state_88878;
var statearr_88922_88965 = state_88878__$1;
(statearr_88922_88965[(2)] = inst_88861);

(statearr_88922_88965[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88879 === (8))){
var inst_88800 = figwheel.client.heads_up.flash_loaded.call(null);
var state_88878__$1 = state_88878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88878__$1,(11),inst_88800);
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
});})(c__48312__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__48198__auto__,c__48312__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____0 = (function (){
var statearr_88926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88926[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__);

(statearr_88926[(1)] = (1));

return statearr_88926;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1 = (function (state_88878){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_88878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e88927){if((e88927 instanceof Object)){
var ex__48202__auto__ = e88927;
var statearr_88928_88966 = state_88878;
(statearr_88928_88966[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88967 = state_88878;
state_88878 = G__88967;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__ = function(state_88878){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1.call(this,state_88878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,msg_hist,msg_names,msg))
})();
var state__48314__auto__ = (function (){var statearr_88929 = f__48313__auto__.call(null);
(statearr_88929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_88929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,msg_hist,msg_names,msg))
);

return c__48312__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48312__auto___89030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___89030,ch){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___89030,ch){
return (function (state_89013){
var state_val_89014 = (state_89013[(1)]);
if((state_val_89014 === (1))){
var state_89013__$1 = state_89013;
var statearr_89015_89031 = state_89013__$1;
(statearr_89015_89031[(2)] = null);

(statearr_89015_89031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89014 === (2))){
var state_89013__$1 = state_89013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89013__$1,(4),ch);
} else {
if((state_val_89014 === (3))){
var inst_89011 = (state_89013[(2)]);
var state_89013__$1 = state_89013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89013__$1,inst_89011);
} else {
if((state_val_89014 === (4))){
var inst_89001 = (state_89013[(7)]);
var inst_89001__$1 = (state_89013[(2)]);
var state_89013__$1 = (function (){var statearr_89016 = state_89013;
(statearr_89016[(7)] = inst_89001__$1);

return statearr_89016;
})();
if(cljs.core.truth_(inst_89001__$1)){
var statearr_89017_89032 = state_89013__$1;
(statearr_89017_89032[(1)] = (5));

} else {
var statearr_89018_89033 = state_89013__$1;
(statearr_89018_89033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89014 === (5))){
var inst_89001 = (state_89013[(7)]);
var inst_89003 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_89001);
var state_89013__$1 = state_89013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89013__$1,(8),inst_89003);
} else {
if((state_val_89014 === (6))){
var state_89013__$1 = state_89013;
var statearr_89019_89034 = state_89013__$1;
(statearr_89019_89034[(2)] = null);

(statearr_89019_89034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89014 === (7))){
var inst_89009 = (state_89013[(2)]);
var state_89013__$1 = state_89013;
var statearr_89020_89035 = state_89013__$1;
(statearr_89020_89035[(2)] = inst_89009);

(statearr_89020_89035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89014 === (8))){
var inst_89005 = (state_89013[(2)]);
var state_89013__$1 = (function (){var statearr_89021 = state_89013;
(statearr_89021[(8)] = inst_89005);

return statearr_89021;
})();
var statearr_89022_89036 = state_89013__$1;
(statearr_89022_89036[(2)] = null);

(statearr_89022_89036[(1)] = (2));


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
});})(c__48312__auto___89030,ch))
;
return ((function (switch__48198__auto__,c__48312__auto___89030,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0 = (function (){
var statearr_89026 = [null,null,null,null,null,null,null,null,null];
(statearr_89026[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48199__auto__);

(statearr_89026[(1)] = (1));

return statearr_89026;
});
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1 = (function (state_89013){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_89013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e89027){if((e89027 instanceof Object)){
var ex__48202__auto__ = e89027;
var statearr_89028_89037 = state_89013;
(statearr_89028_89037[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89038 = state_89013;
state_89013 = G__89038;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__ = function(state_89013){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1.call(this,state_89013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___89030,ch))
})();
var state__48314__auto__ = (function (){var statearr_89029 = f__48313__auto__.call(null);
(statearr_89029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___89030);

return statearr_89029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___89030,ch))
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
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__){
return (function (state_89059){
var state_val_89060 = (state_89059[(1)]);
if((state_val_89060 === (1))){
var inst_89054 = cljs.core.async.timeout.call(null,(3000));
var state_89059__$1 = state_89059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89059__$1,(2),inst_89054);
} else {
if((state_val_89060 === (2))){
var inst_89056 = (state_89059[(2)]);
var inst_89057 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_89059__$1 = (function (){var statearr_89061 = state_89059;
(statearr_89061[(7)] = inst_89056);

return statearr_89061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89059__$1,inst_89057);
} else {
return null;
}
}
});})(c__48312__auto__))
;
return ((function (switch__48198__auto__,c__48312__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____0 = (function (){
var statearr_89065 = [null,null,null,null,null,null,null,null];
(statearr_89065[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__);

(statearr_89065[(1)] = (1));

return statearr_89065;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1 = (function (state_89059){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_89059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e89066){if((e89066 instanceof Object)){
var ex__48202__auto__ = e89066;
var statearr_89067_89069 = state_89059;
(statearr_89067_89069[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89070 = state_89059;
state_89059 = G__89070;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__ = function(state_89059){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1.call(this,state_89059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_89068 = f__48313__auto__.call(null);
(statearr_89068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_89068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__))
);

return c__48312__auto__;
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
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,figwheel_version,temp__6753__auto__){
return (function (state_89093){
var state_val_89094 = (state_89093[(1)]);
if((state_val_89094 === (1))){
var inst_89087 = cljs.core.async.timeout.call(null,(2000));
var state_89093__$1 = state_89093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89093__$1,(2),inst_89087);
} else {
if((state_val_89094 === (2))){
var inst_89089 = (state_89093[(2)]);
var inst_89090 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_89091 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_89090);
var state_89093__$1 = (function (){var statearr_89095 = state_89093;
(statearr_89095[(7)] = inst_89089);

return statearr_89095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89093__$1,inst_89091);
} else {
return null;
}
}
});})(c__48312__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__48198__auto__,c__48312__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____0 = (function (){
var statearr_89099 = [null,null,null,null,null,null,null,null];
(statearr_89099[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__);

(statearr_89099[(1)] = (1));

return statearr_89099;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1 = (function (state_89093){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_89093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e89100){if((e89100 instanceof Object)){
var ex__48202__auto__ = e89100;
var statearr_89101_89103 = state_89093;
(statearr_89101_89103[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89104 = state_89093;
state_89093 = G__89104;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__ = function(state_89093){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1.call(this,state_89093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,figwheel_version,temp__6753__auto__))
})();
var state__48314__auto__ = (function (){var statearr_89102 = f__48313__auto__.call(null);
(statearr_89102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_89102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,figwheel_version,temp__6753__auto__))
);

return c__48312__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__89105){
var map__89109 = p__89105;
var map__89109__$1 = ((((!((map__89109 == null)))?((((map__89109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89109):map__89109);
var file = cljs.core.get.call(null,map__89109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__89109__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__89109__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__89111 = "";
var G__89111__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89111),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__89111);
var G__89111__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89111__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__89111__$1);
if(cljs.core.truth_((function (){var and__34543__auto__ = line;
if(cljs.core.truth_(and__34543__auto__)){
return column;
} else {
return and__34543__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__89111__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__89111__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__89112){
var map__89119 = p__89112;
var map__89119__$1 = ((((!((map__89119 == null)))?((((map__89119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89119):map__89119);
var ed = map__89119__$1;
var formatted_exception = cljs.core.get.call(null,map__89119__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__89119__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__89119__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__89121_89125 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__89122_89126 = null;
var count__89123_89127 = (0);
var i__89124_89128 = (0);
while(true){
if((i__89124_89128 < count__89123_89127)){
var msg_89129 = cljs.core._nth.call(null,chunk__89122_89126,i__89124_89128);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_89129);

var G__89130 = seq__89121_89125;
var G__89131 = chunk__89122_89126;
var G__89132 = count__89123_89127;
var G__89133 = (i__89124_89128 + (1));
seq__89121_89125 = G__89130;
chunk__89122_89126 = G__89131;
count__89123_89127 = G__89132;
i__89124_89128 = G__89133;
continue;
} else {
var temp__6753__auto___89134 = cljs.core.seq.call(null,seq__89121_89125);
if(temp__6753__auto___89134){
var seq__89121_89135__$1 = temp__6753__auto___89134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89121_89135__$1)){
var c__35466__auto___89136 = cljs.core.chunk_first.call(null,seq__89121_89135__$1);
var G__89137 = cljs.core.chunk_rest.call(null,seq__89121_89135__$1);
var G__89138 = c__35466__auto___89136;
var G__89139 = cljs.core.count.call(null,c__35466__auto___89136);
var G__89140 = (0);
seq__89121_89125 = G__89137;
chunk__89122_89126 = G__89138;
count__89123_89127 = G__89139;
i__89124_89128 = G__89140;
continue;
} else {
var msg_89141 = cljs.core.first.call(null,seq__89121_89135__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_89141);

var G__89142 = cljs.core.next.call(null,seq__89121_89135__$1);
var G__89143 = null;
var G__89144 = (0);
var G__89145 = (0);
seq__89121_89125 = G__89142;
chunk__89122_89126 = G__89143;
count__89123_89127 = G__89144;
i__89124_89128 = G__89145;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__89146){
var map__89149 = p__89146;
var map__89149__$1 = ((((!((map__89149 == null)))?((((map__89149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89149):map__89149);
var w = map__89149__$1;
var message = cljs.core.get.call(null,map__89149__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__34543__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__34543__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__34543__auto__;
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
var seq__89161 = cljs.core.seq.call(null,plugins);
var chunk__89162 = null;
var count__89163 = (0);
var i__89164 = (0);
while(true){
if((i__89164 < count__89163)){
var vec__89165 = cljs.core._nth.call(null,chunk__89162,i__89164);
var k = cljs.core.nth.call(null,vec__89165,(0),null);
var plugin = cljs.core.nth.call(null,vec__89165,(1),null);
if(cljs.core.truth_(plugin)){
var pl_89171 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__89161,chunk__89162,count__89163,i__89164,pl_89171,vec__89165,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_89171.call(null,msg_hist);
});})(seq__89161,chunk__89162,count__89163,i__89164,pl_89171,vec__89165,k,plugin))
);
} else {
}

var G__89172 = seq__89161;
var G__89173 = chunk__89162;
var G__89174 = count__89163;
var G__89175 = (i__89164 + (1));
seq__89161 = G__89172;
chunk__89162 = G__89173;
count__89163 = G__89174;
i__89164 = G__89175;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__89161);
if(temp__6753__auto__){
var seq__89161__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89161__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__89161__$1);
var G__89176 = cljs.core.chunk_rest.call(null,seq__89161__$1);
var G__89177 = c__35466__auto__;
var G__89178 = cljs.core.count.call(null,c__35466__auto__);
var G__89179 = (0);
seq__89161 = G__89176;
chunk__89162 = G__89177;
count__89163 = G__89178;
i__89164 = G__89179;
continue;
} else {
var vec__89168 = cljs.core.first.call(null,seq__89161__$1);
var k = cljs.core.nth.call(null,vec__89168,(0),null);
var plugin = cljs.core.nth.call(null,vec__89168,(1),null);
if(cljs.core.truth_(plugin)){
var pl_89180 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__89161,chunk__89162,count__89163,i__89164,pl_89180,vec__89168,k,plugin,seq__89161__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_89180.call(null,msg_hist);
});})(seq__89161,chunk__89162,count__89163,i__89164,pl_89180,vec__89168,k,plugin,seq__89161__$1,temp__6753__auto__))
);
} else {
}

var G__89181 = cljs.core.next.call(null,seq__89161__$1);
var G__89182 = null;
var G__89183 = (0);
var G__89184 = (0);
seq__89161 = G__89181;
chunk__89162 = G__89182;
count__89163 = G__89183;
i__89164 = G__89184;
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
var args89185 = [];
var len__35776__auto___89192 = arguments.length;
var i__35777__auto___89193 = (0);
while(true){
if((i__35777__auto___89193 < len__35776__auto___89192)){
args89185.push((arguments[i__35777__auto___89193]));

var G__89194 = (i__35777__auto___89193 + (1));
i__35777__auto___89193 = G__89194;
continue;
} else {
}
break;
}

var G__89187 = args89185.length;
switch (G__89187) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args89185.length)].join('')));

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

var seq__89188_89196 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__89189_89197 = null;
var count__89190_89198 = (0);
var i__89191_89199 = (0);
while(true){
if((i__89191_89199 < count__89190_89198)){
var msg_89200 = cljs.core._nth.call(null,chunk__89189_89197,i__89191_89199);
figwheel.client.socket.handle_incoming_message.call(null,msg_89200);

var G__89201 = seq__89188_89196;
var G__89202 = chunk__89189_89197;
var G__89203 = count__89190_89198;
var G__89204 = (i__89191_89199 + (1));
seq__89188_89196 = G__89201;
chunk__89189_89197 = G__89202;
count__89190_89198 = G__89203;
i__89191_89199 = G__89204;
continue;
} else {
var temp__6753__auto___89205 = cljs.core.seq.call(null,seq__89188_89196);
if(temp__6753__auto___89205){
var seq__89188_89206__$1 = temp__6753__auto___89205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89188_89206__$1)){
var c__35466__auto___89207 = cljs.core.chunk_first.call(null,seq__89188_89206__$1);
var G__89208 = cljs.core.chunk_rest.call(null,seq__89188_89206__$1);
var G__89209 = c__35466__auto___89207;
var G__89210 = cljs.core.count.call(null,c__35466__auto___89207);
var G__89211 = (0);
seq__89188_89196 = G__89208;
chunk__89189_89197 = G__89209;
count__89190_89198 = G__89210;
i__89191_89199 = G__89211;
continue;
} else {
var msg_89212 = cljs.core.first.call(null,seq__89188_89206__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_89212);

var G__89213 = cljs.core.next.call(null,seq__89188_89206__$1);
var G__89214 = null;
var G__89215 = (0);
var G__89216 = (0);
seq__89188_89196 = G__89213;
chunk__89189_89197 = G__89214;
count__89190_89198 = G__89215;
i__89191_89199 = G__89216;
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
var args__35783__auto__ = [];
var len__35776__auto___89221 = arguments.length;
var i__35777__auto___89222 = (0);
while(true){
if((i__35777__auto___89222 < len__35776__auto___89221)){
args__35783__auto__.push((arguments[i__35777__auto___89222]));

var G__89223 = (i__35777__auto___89222 + (1));
i__35777__auto___89222 = G__89223;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__89218){
var map__89219 = p__89218;
var map__89219__$1 = ((((!((map__89219 == null)))?((((map__89219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89219):map__89219);
var opts = map__89219__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq89217){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89217));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e89225){if((e89225 instanceof Error)){
var e = e89225;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e89225;

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
return (function (p__89229){
var map__89230 = p__89229;
var map__89230__$1 = ((((!((map__89230 == null)))?((((map__89230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89230):map__89230);
var msg_name = cljs.core.get.call(null,map__89230__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491640824355