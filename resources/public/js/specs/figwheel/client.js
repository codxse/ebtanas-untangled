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
var args66782 = [];
var len__35776__auto___66785 = arguments.length;
var i__35777__auto___66786 = (0);
while(true){
if((i__35777__auto___66786 < len__35776__auto___66785)){
args66782.push((arguments[i__35777__auto___66786]));

var G__66787 = (i__35777__auto___66786 + (1));
i__35777__auto___66786 = G__66787;
continue;
} else {
}
break;
}

var G__66784 = args66782.length;
switch (G__66784) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args66782.length)].join('')));

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
var len__35776__auto___66790 = arguments.length;
var i__35777__auto___66791 = (0);
while(true){
if((i__35777__auto___66791 < len__35776__auto___66790)){
args__35783__auto__.push((arguments[i__35777__auto___66791]));

var G__66792 = (i__35777__auto___66791 + (1));
i__35777__auto___66791 = G__66792;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq66789){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66789));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35783__auto__ = [];
var len__35776__auto___66794 = arguments.length;
var i__35777__auto___66795 = (0);
while(true){
if((i__35777__auto___66795 < len__35776__auto___66794)){
args__35783__auto__.push((arguments[i__35777__auto___66795]));

var G__66796 = (i__35777__auto___66795 + (1));
i__35777__auto___66795 = G__66796;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq66793){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66793));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__66797){
var map__66800 = p__66797;
var map__66800__$1 = ((((!((map__66800 == null)))?((((map__66800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66800):map__66800);
var message = cljs.core.get.call(null,map__66800__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__66800__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__48312__auto___66962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___66962,ch){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___66962,ch){
return (function (state_66931){
var state_val_66932 = (state_66931[(1)]);
if((state_val_66932 === (7))){
var inst_66927 = (state_66931[(2)]);
var state_66931__$1 = state_66931;
var statearr_66933_66963 = state_66931__$1;
(statearr_66933_66963[(2)] = inst_66927);

(statearr_66933_66963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (1))){
var state_66931__$1 = state_66931;
var statearr_66934_66964 = state_66931__$1;
(statearr_66934_66964[(2)] = null);

(statearr_66934_66964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (4))){
var inst_66884 = (state_66931[(7)]);
var inst_66884__$1 = (state_66931[(2)]);
var state_66931__$1 = (function (){var statearr_66935 = state_66931;
(statearr_66935[(7)] = inst_66884__$1);

return statearr_66935;
})();
if(cljs.core.truth_(inst_66884__$1)){
var statearr_66936_66965 = state_66931__$1;
(statearr_66936_66965[(1)] = (5));

} else {
var statearr_66937_66966 = state_66931__$1;
(statearr_66937_66966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (15))){
var inst_66891 = (state_66931[(8)]);
var inst_66906 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_66891);
var inst_66907 = cljs.core.first.call(null,inst_66906);
var inst_66908 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_66907);
var inst_66909 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66908)].join('');
var inst_66910 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_66909);
var state_66931__$1 = state_66931;
var statearr_66938_66967 = state_66931__$1;
(statearr_66938_66967[(2)] = inst_66910);

(statearr_66938_66967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (13))){
var inst_66915 = (state_66931[(2)]);
var state_66931__$1 = state_66931;
var statearr_66939_66968 = state_66931__$1;
(statearr_66939_66968[(2)] = inst_66915);

(statearr_66939_66968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (6))){
var state_66931__$1 = state_66931;
var statearr_66940_66969 = state_66931__$1;
(statearr_66940_66969[(2)] = null);

(statearr_66940_66969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (17))){
var inst_66913 = (state_66931[(2)]);
var state_66931__$1 = state_66931;
var statearr_66941_66970 = state_66931__$1;
(statearr_66941_66970[(2)] = inst_66913);

(statearr_66941_66970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (3))){
var inst_66929 = (state_66931[(2)]);
var state_66931__$1 = state_66931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66931__$1,inst_66929);
} else {
if((state_val_66932 === (12))){
var inst_66890 = (state_66931[(9)]);
var inst_66904 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_66890,opts);
var state_66931__$1 = state_66931;
if(cljs.core.truth_(inst_66904)){
var statearr_66942_66971 = state_66931__$1;
(statearr_66942_66971[(1)] = (15));

} else {
var statearr_66943_66972 = state_66931__$1;
(statearr_66943_66972[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (2))){
var state_66931__$1 = state_66931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66931__$1,(4),ch);
} else {
if((state_val_66932 === (11))){
var inst_66891 = (state_66931[(8)]);
var inst_66896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66897 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_66891);
var inst_66898 = cljs.core.async.timeout.call(null,(1000));
var inst_66899 = [inst_66897,inst_66898];
var inst_66900 = (new cljs.core.PersistentVector(null,2,(5),inst_66896,inst_66899,null));
var state_66931__$1 = state_66931;
return cljs.core.async.ioc_alts_BANG_.call(null,state_66931__$1,(14),inst_66900);
} else {
if((state_val_66932 === (9))){
var inst_66891 = (state_66931[(8)]);
var inst_66917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_66918 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_66891);
var inst_66919 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66918);
var inst_66920 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66919)].join('');
var inst_66921 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_66920);
var state_66931__$1 = (function (){var statearr_66944 = state_66931;
(statearr_66944[(10)] = inst_66917);

return statearr_66944;
})();
var statearr_66945_66973 = state_66931__$1;
(statearr_66945_66973[(2)] = inst_66921);

(statearr_66945_66973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (5))){
var inst_66884 = (state_66931[(7)]);
var inst_66886 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_66887 = (new cljs.core.PersistentArrayMap(null,2,inst_66886,null));
var inst_66888 = (new cljs.core.PersistentHashSet(null,inst_66887,null));
var inst_66889 = figwheel.client.focus_msgs.call(null,inst_66888,inst_66884);
var inst_66890 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_66889);
var inst_66891 = cljs.core.first.call(null,inst_66889);
var inst_66892 = figwheel.client.autoload_QMARK_.call(null);
var state_66931__$1 = (function (){var statearr_66946 = state_66931;
(statearr_66946[(8)] = inst_66891);

(statearr_66946[(9)] = inst_66890);

return statearr_66946;
})();
if(cljs.core.truth_(inst_66892)){
var statearr_66947_66974 = state_66931__$1;
(statearr_66947_66974[(1)] = (8));

} else {
var statearr_66948_66975 = state_66931__$1;
(statearr_66948_66975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (14))){
var inst_66902 = (state_66931[(2)]);
var state_66931__$1 = state_66931;
var statearr_66949_66976 = state_66931__$1;
(statearr_66949_66976[(2)] = inst_66902);

(statearr_66949_66976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (16))){
var state_66931__$1 = state_66931;
var statearr_66950_66977 = state_66931__$1;
(statearr_66950_66977[(2)] = null);

(statearr_66950_66977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (10))){
var inst_66923 = (state_66931[(2)]);
var state_66931__$1 = (function (){var statearr_66951 = state_66931;
(statearr_66951[(11)] = inst_66923);

return statearr_66951;
})();
var statearr_66952_66978 = state_66931__$1;
(statearr_66952_66978[(2)] = null);

(statearr_66952_66978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66932 === (8))){
var inst_66890 = (state_66931[(9)]);
var inst_66894 = figwheel.client.reload_file_state_QMARK_.call(null,inst_66890,opts);
var state_66931__$1 = state_66931;
if(cljs.core.truth_(inst_66894)){
var statearr_66953_66979 = state_66931__$1;
(statearr_66953_66979[(1)] = (11));

} else {
var statearr_66954_66980 = state_66931__$1;
(statearr_66954_66980[(1)] = (12));

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
});})(c__48312__auto___66962,ch))
;
return ((function (switch__48198__auto__,c__48312__auto___66962,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0 = (function (){
var statearr_66958 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66958[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__);

(statearr_66958[(1)] = (1));

return statearr_66958;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1 = (function (state_66931){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_66931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e66959){if((e66959 instanceof Object)){
var ex__48202__auto__ = e66959;
var statearr_66960_66981 = state_66931;
(statearr_66960_66981[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66982 = state_66931;
state_66931 = G__66982;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__ = function(state_66931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1.call(this,state_66931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___66962,ch))
})();
var state__48314__auto__ = (function (){var statearr_66961 = f__48313__auto__.call(null);
(statearr_66961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___66962);

return statearr_66961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___66962,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__66983_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__66983_SHARP_));
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
var base_path_66986 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_66986){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e66985){if((e66985 instanceof Error)){
var e = e66985;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_66986], null));
} else {
var e = e66985;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_66986))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__66987){
var map__66996 = p__66987;
var map__66996__$1 = ((((!((map__66996 == null)))?((((map__66996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66996):map__66996);
var opts = map__66996__$1;
var build_id = cljs.core.get.call(null,map__66996__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__66996,map__66996__$1,opts,build_id){
return (function (p__66998){
var vec__66999 = p__66998;
var seq__67000 = cljs.core.seq.call(null,vec__66999);
var first__67001 = cljs.core.first.call(null,seq__67000);
var seq__67000__$1 = cljs.core.next.call(null,seq__67000);
var map__67002 = first__67001;
var map__67002__$1 = ((((!((map__67002 == null)))?((((map__67002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67002):map__67002);
var msg = map__67002__$1;
var msg_name = cljs.core.get.call(null,map__67002__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67000__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__66999,seq__67000,first__67001,seq__67000__$1,map__67002,map__67002__$1,msg,msg_name,_,map__66996,map__66996__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__66999,seq__67000,first__67001,seq__67000__$1,map__67002,map__67002__$1,msg,msg_name,_,map__66996,map__66996__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__66996,map__66996__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__67010){
var vec__67011 = p__67010;
var seq__67012 = cljs.core.seq.call(null,vec__67011);
var first__67013 = cljs.core.first.call(null,seq__67012);
var seq__67012__$1 = cljs.core.next.call(null,seq__67012);
var map__67014 = first__67013;
var map__67014__$1 = ((((!((map__67014 == null)))?((((map__67014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67014):map__67014);
var msg = map__67014__$1;
var msg_name = cljs.core.get.call(null,map__67014__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67012__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__67016){
var map__67028 = p__67016;
var map__67028__$1 = ((((!((map__67028 == null)))?((((map__67028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67028):map__67028);
var on_compile_warning = cljs.core.get.call(null,map__67028__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__67028__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__67028,map__67028__$1,on_compile_warning,on_compile_fail){
return (function (p__67030){
var vec__67031 = p__67030;
var seq__67032 = cljs.core.seq.call(null,vec__67031);
var first__67033 = cljs.core.first.call(null,seq__67032);
var seq__67032__$1 = cljs.core.next.call(null,seq__67032);
var map__67034 = first__67033;
var map__67034__$1 = ((((!((map__67034 == null)))?((((map__67034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67034):map__67034);
var msg = map__67034__$1;
var msg_name = cljs.core.get.call(null,map__67034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67032__$1;
var pred__67036 = cljs.core._EQ_;
var expr__67037 = msg_name;
if(cljs.core.truth_(pred__67036.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__67037))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__67036.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__67037))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__67028,map__67028__$1,on_compile_warning,on_compile_fail))
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
return (function (state_67265){
var state_val_67266 = (state_67265[(1)]);
if((state_val_67266 === (7))){
var inst_67185 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
if(cljs.core.truth_(inst_67185)){
var statearr_67267_67317 = state_67265__$1;
(statearr_67267_67317[(1)] = (8));

} else {
var statearr_67268_67318 = state_67265__$1;
(statearr_67268_67318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (20))){
var inst_67259 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67269_67319 = state_67265__$1;
(statearr_67269_67319[(2)] = inst_67259);

(statearr_67269_67319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (27))){
var inst_67255 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67270_67320 = state_67265__$1;
(statearr_67270_67320[(2)] = inst_67255);

(statearr_67270_67320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (1))){
var inst_67178 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_67265__$1 = state_67265;
if(cljs.core.truth_(inst_67178)){
var statearr_67271_67321 = state_67265__$1;
(statearr_67271_67321[(1)] = (2));

} else {
var statearr_67272_67322 = state_67265__$1;
(statearr_67272_67322[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (24))){
var inst_67257 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67273_67323 = state_67265__$1;
(statearr_67273_67323[(2)] = inst_67257);

(statearr_67273_67323[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (4))){
var inst_67263 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67265__$1,inst_67263);
} else {
if((state_val_67266 === (15))){
var inst_67261 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67274_67324 = state_67265__$1;
(statearr_67274_67324[(2)] = inst_67261);

(statearr_67274_67324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (21))){
var inst_67214 = (state_67265[(2)]);
var inst_67215 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67216 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67215);
var state_67265__$1 = (function (){var statearr_67275 = state_67265;
(statearr_67275[(7)] = inst_67214);

return statearr_67275;
})();
var statearr_67276_67325 = state_67265__$1;
(statearr_67276_67325[(2)] = inst_67216);

(statearr_67276_67325[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (31))){
var inst_67244 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_67265__$1 = state_67265;
if(cljs.core.truth_(inst_67244)){
var statearr_67277_67326 = state_67265__$1;
(statearr_67277_67326[(1)] = (34));

} else {
var statearr_67278_67327 = state_67265__$1;
(statearr_67278_67327[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (32))){
var inst_67253 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67279_67328 = state_67265__$1;
(statearr_67279_67328[(2)] = inst_67253);

(statearr_67279_67328[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (33))){
var inst_67240 = (state_67265[(2)]);
var inst_67241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67242 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67241);
var state_67265__$1 = (function (){var statearr_67280 = state_67265;
(statearr_67280[(8)] = inst_67240);

return statearr_67280;
})();
var statearr_67281_67329 = state_67265__$1;
(statearr_67281_67329[(2)] = inst_67242);

(statearr_67281_67329[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (13))){
var inst_67199 = figwheel.client.heads_up.clear.call(null);
var state_67265__$1 = state_67265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(16),inst_67199);
} else {
if((state_val_67266 === (22))){
var inst_67220 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67221 = figwheel.client.heads_up.append_warning_message.call(null,inst_67220);
var state_67265__$1 = state_67265;
var statearr_67282_67330 = state_67265__$1;
(statearr_67282_67330[(2)] = inst_67221);

(statearr_67282_67330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (36))){
var inst_67251 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67283_67331 = state_67265__$1;
(statearr_67283_67331[(2)] = inst_67251);

(statearr_67283_67331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (29))){
var inst_67231 = (state_67265[(2)]);
var inst_67232 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67233 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67232);
var state_67265__$1 = (function (){var statearr_67284 = state_67265;
(statearr_67284[(9)] = inst_67231);

return statearr_67284;
})();
var statearr_67285_67332 = state_67265__$1;
(statearr_67285_67332[(2)] = inst_67233);

(statearr_67285_67332[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (6))){
var inst_67180 = (state_67265[(10)]);
var state_67265__$1 = state_67265;
var statearr_67286_67333 = state_67265__$1;
(statearr_67286_67333[(2)] = inst_67180);

(statearr_67286_67333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (28))){
var inst_67227 = (state_67265[(2)]);
var inst_67228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67229 = figwheel.client.heads_up.display_warning.call(null,inst_67228);
var state_67265__$1 = (function (){var statearr_67287 = state_67265;
(statearr_67287[(11)] = inst_67227);

return statearr_67287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(29),inst_67229);
} else {
if((state_val_67266 === (25))){
var inst_67225 = figwheel.client.heads_up.clear.call(null);
var state_67265__$1 = state_67265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(28),inst_67225);
} else {
if((state_val_67266 === (34))){
var inst_67246 = figwheel.client.heads_up.flash_loaded.call(null);
var state_67265__$1 = state_67265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(37),inst_67246);
} else {
if((state_val_67266 === (17))){
var inst_67205 = (state_67265[(2)]);
var inst_67206 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67207 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67206);
var state_67265__$1 = (function (){var statearr_67288 = state_67265;
(statearr_67288[(12)] = inst_67205);

return statearr_67288;
})();
var statearr_67289_67334 = state_67265__$1;
(statearr_67289_67334[(2)] = inst_67207);

(statearr_67289_67334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (3))){
var inst_67197 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_67265__$1 = state_67265;
if(cljs.core.truth_(inst_67197)){
var statearr_67290_67335 = state_67265__$1;
(statearr_67290_67335[(1)] = (13));

} else {
var statearr_67291_67336 = state_67265__$1;
(statearr_67291_67336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (12))){
var inst_67193 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67292_67337 = state_67265__$1;
(statearr_67292_67337[(2)] = inst_67193);

(statearr_67292_67337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (2))){
var inst_67180 = (state_67265[(10)]);
var inst_67180__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_67265__$1 = (function (){var statearr_67293 = state_67265;
(statearr_67293[(10)] = inst_67180__$1);

return statearr_67293;
})();
if(cljs.core.truth_(inst_67180__$1)){
var statearr_67294_67338 = state_67265__$1;
(statearr_67294_67338[(1)] = (5));

} else {
var statearr_67295_67339 = state_67265__$1;
(statearr_67295_67339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (23))){
var inst_67223 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_67265__$1 = state_67265;
if(cljs.core.truth_(inst_67223)){
var statearr_67296_67340 = state_67265__$1;
(statearr_67296_67340[(1)] = (25));

} else {
var statearr_67297_67341 = state_67265__$1;
(statearr_67297_67341[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (35))){
var state_67265__$1 = state_67265;
var statearr_67298_67342 = state_67265__$1;
(statearr_67298_67342[(2)] = null);

(statearr_67298_67342[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (19))){
var inst_67218 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_67265__$1 = state_67265;
if(cljs.core.truth_(inst_67218)){
var statearr_67299_67343 = state_67265__$1;
(statearr_67299_67343[(1)] = (22));

} else {
var statearr_67300_67344 = state_67265__$1;
(statearr_67300_67344[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (11))){
var inst_67189 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67301_67345 = state_67265__$1;
(statearr_67301_67345[(2)] = inst_67189);

(statearr_67301_67345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (9))){
var inst_67191 = figwheel.client.heads_up.clear.call(null);
var state_67265__$1 = state_67265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(12),inst_67191);
} else {
if((state_val_67266 === (5))){
var inst_67182 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_67265__$1 = state_67265;
var statearr_67302_67346 = state_67265__$1;
(statearr_67302_67346[(2)] = inst_67182);

(statearr_67302_67346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (14))){
var inst_67209 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_67265__$1 = state_67265;
if(cljs.core.truth_(inst_67209)){
var statearr_67303_67347 = state_67265__$1;
(statearr_67303_67347[(1)] = (18));

} else {
var statearr_67304_67348 = state_67265__$1;
(statearr_67304_67348[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (26))){
var inst_67235 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_67265__$1 = state_67265;
if(cljs.core.truth_(inst_67235)){
var statearr_67305_67349 = state_67265__$1;
(statearr_67305_67349[(1)] = (30));

} else {
var statearr_67306_67350 = state_67265__$1;
(statearr_67306_67350[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (16))){
var inst_67201 = (state_67265[(2)]);
var inst_67202 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67203 = figwheel.client.heads_up.display_exception.call(null,inst_67202);
var state_67265__$1 = (function (){var statearr_67307 = state_67265;
(statearr_67307[(13)] = inst_67201);

return statearr_67307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(17),inst_67203);
} else {
if((state_val_67266 === (30))){
var inst_67237 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67238 = figwheel.client.heads_up.display_warning.call(null,inst_67237);
var state_67265__$1 = state_67265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(33),inst_67238);
} else {
if((state_val_67266 === (10))){
var inst_67195 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67308_67351 = state_67265__$1;
(statearr_67308_67351[(2)] = inst_67195);

(statearr_67308_67351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (18))){
var inst_67211 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67212 = figwheel.client.heads_up.display_exception.call(null,inst_67211);
var state_67265__$1 = state_67265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(21),inst_67212);
} else {
if((state_val_67266 === (37))){
var inst_67248 = (state_67265[(2)]);
var state_67265__$1 = state_67265;
var statearr_67309_67352 = state_67265__$1;
(statearr_67309_67352[(2)] = inst_67248);

(statearr_67309_67352[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67266 === (8))){
var inst_67187 = figwheel.client.heads_up.flash_loaded.call(null);
var state_67265__$1 = state_67265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67265__$1,(11),inst_67187);
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
var statearr_67313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67313[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__);

(statearr_67313[(1)] = (1));

return statearr_67313;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1 = (function (state_67265){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_67265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e67314){if((e67314 instanceof Object)){
var ex__48202__auto__ = e67314;
var statearr_67315_67353 = state_67265;
(statearr_67315_67353[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67354 = state_67265;
state_67265 = G__67354;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__ = function(state_67265){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1.call(this,state_67265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,msg_hist,msg_names,msg))
})();
var state__48314__auto__ = (function (){var statearr_67316 = f__48313__auto__.call(null);
(statearr_67316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_67316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,msg_hist,msg_names,msg))
);

return c__48312__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48312__auto___67417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___67417,ch){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___67417,ch){
return (function (state_67400){
var state_val_67401 = (state_67400[(1)]);
if((state_val_67401 === (1))){
var state_67400__$1 = state_67400;
var statearr_67402_67418 = state_67400__$1;
(statearr_67402_67418[(2)] = null);

(statearr_67402_67418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67401 === (2))){
var state_67400__$1 = state_67400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67400__$1,(4),ch);
} else {
if((state_val_67401 === (3))){
var inst_67398 = (state_67400[(2)]);
var state_67400__$1 = state_67400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67400__$1,inst_67398);
} else {
if((state_val_67401 === (4))){
var inst_67388 = (state_67400[(7)]);
var inst_67388__$1 = (state_67400[(2)]);
var state_67400__$1 = (function (){var statearr_67403 = state_67400;
(statearr_67403[(7)] = inst_67388__$1);

return statearr_67403;
})();
if(cljs.core.truth_(inst_67388__$1)){
var statearr_67404_67419 = state_67400__$1;
(statearr_67404_67419[(1)] = (5));

} else {
var statearr_67405_67420 = state_67400__$1;
(statearr_67405_67420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67401 === (5))){
var inst_67388 = (state_67400[(7)]);
var inst_67390 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_67388);
var state_67400__$1 = state_67400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67400__$1,(8),inst_67390);
} else {
if((state_val_67401 === (6))){
var state_67400__$1 = state_67400;
var statearr_67406_67421 = state_67400__$1;
(statearr_67406_67421[(2)] = null);

(statearr_67406_67421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67401 === (7))){
var inst_67396 = (state_67400[(2)]);
var state_67400__$1 = state_67400;
var statearr_67407_67422 = state_67400__$1;
(statearr_67407_67422[(2)] = inst_67396);

(statearr_67407_67422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67401 === (8))){
var inst_67392 = (state_67400[(2)]);
var state_67400__$1 = (function (){var statearr_67408 = state_67400;
(statearr_67408[(8)] = inst_67392);

return statearr_67408;
})();
var statearr_67409_67423 = state_67400__$1;
(statearr_67409_67423[(2)] = null);

(statearr_67409_67423[(1)] = (2));


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
});})(c__48312__auto___67417,ch))
;
return ((function (switch__48198__auto__,c__48312__auto___67417,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0 = (function (){
var statearr_67413 = [null,null,null,null,null,null,null,null,null];
(statearr_67413[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48199__auto__);

(statearr_67413[(1)] = (1));

return statearr_67413;
});
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1 = (function (state_67400){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_67400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e67414){if((e67414 instanceof Object)){
var ex__48202__auto__ = e67414;
var statearr_67415_67424 = state_67400;
(statearr_67415_67424[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67425 = state_67400;
state_67400 = G__67425;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__ = function(state_67400){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1.call(this,state_67400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___67417,ch))
})();
var state__48314__auto__ = (function (){var statearr_67416 = f__48313__auto__.call(null);
(statearr_67416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___67417);

return statearr_67416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___67417,ch))
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
return (function (state_67446){
var state_val_67447 = (state_67446[(1)]);
if((state_val_67447 === (1))){
var inst_67441 = cljs.core.async.timeout.call(null,(3000));
var state_67446__$1 = state_67446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67446__$1,(2),inst_67441);
} else {
if((state_val_67447 === (2))){
var inst_67443 = (state_67446[(2)]);
var inst_67444 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_67446__$1 = (function (){var statearr_67448 = state_67446;
(statearr_67448[(7)] = inst_67443);

return statearr_67448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67446__$1,inst_67444);
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
var statearr_67452 = [null,null,null,null,null,null,null,null];
(statearr_67452[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__);

(statearr_67452[(1)] = (1));

return statearr_67452;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1 = (function (state_67446){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_67446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e67453){if((e67453 instanceof Object)){
var ex__48202__auto__ = e67453;
var statearr_67454_67456 = state_67446;
(statearr_67454_67456[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67457 = state_67446;
state_67446 = G__67457;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__ = function(state_67446){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1.call(this,state_67446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_67455 = f__48313__auto__.call(null);
(statearr_67455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_67455;
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
return (function (state_67480){
var state_val_67481 = (state_67480[(1)]);
if((state_val_67481 === (1))){
var inst_67474 = cljs.core.async.timeout.call(null,(2000));
var state_67480__$1 = state_67480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67480__$1,(2),inst_67474);
} else {
if((state_val_67481 === (2))){
var inst_67476 = (state_67480[(2)]);
var inst_67477 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_67478 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_67477);
var state_67480__$1 = (function (){var statearr_67482 = state_67480;
(statearr_67482[(7)] = inst_67476);

return statearr_67482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67480__$1,inst_67478);
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
var statearr_67486 = [null,null,null,null,null,null,null,null];
(statearr_67486[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__);

(statearr_67486[(1)] = (1));

return statearr_67486;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1 = (function (state_67480){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_67480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e67487){if((e67487 instanceof Object)){
var ex__48202__auto__ = e67487;
var statearr_67488_67490 = state_67480;
(statearr_67488_67490[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67491 = state_67480;
state_67480 = G__67491;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__ = function(state_67480){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1.call(this,state_67480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,figwheel_version,temp__6753__auto__))
})();
var state__48314__auto__ = (function (){var statearr_67489 = f__48313__auto__.call(null);
(statearr_67489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_67489;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__67492){
var map__67496 = p__67492;
var map__67496__$1 = ((((!((map__67496 == null)))?((((map__67496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67496):map__67496);
var file = cljs.core.get.call(null,map__67496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67496__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67496__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__67498 = "";
var G__67498__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67498),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__67498);
var G__67498__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67498__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__67498__$1);
if(cljs.core.truth_((function (){var and__34543__auto__ = line;
if(cljs.core.truth_(and__34543__auto__)){
return column;
} else {
return and__34543__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67498__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__67498__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__67499){
var map__67506 = p__67499;
var map__67506__$1 = ((((!((map__67506 == null)))?((((map__67506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67506):map__67506);
var ed = map__67506__$1;
var formatted_exception = cljs.core.get.call(null,map__67506__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__67506__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__67506__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__67508_67512 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__67509_67513 = null;
var count__67510_67514 = (0);
var i__67511_67515 = (0);
while(true){
if((i__67511_67515 < count__67510_67514)){
var msg_67516 = cljs.core._nth.call(null,chunk__67509_67513,i__67511_67515);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_67516);

var G__67517 = seq__67508_67512;
var G__67518 = chunk__67509_67513;
var G__67519 = count__67510_67514;
var G__67520 = (i__67511_67515 + (1));
seq__67508_67512 = G__67517;
chunk__67509_67513 = G__67518;
count__67510_67514 = G__67519;
i__67511_67515 = G__67520;
continue;
} else {
var temp__6753__auto___67521 = cljs.core.seq.call(null,seq__67508_67512);
if(temp__6753__auto___67521){
var seq__67508_67522__$1 = temp__6753__auto___67521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67508_67522__$1)){
var c__35466__auto___67523 = cljs.core.chunk_first.call(null,seq__67508_67522__$1);
var G__67524 = cljs.core.chunk_rest.call(null,seq__67508_67522__$1);
var G__67525 = c__35466__auto___67523;
var G__67526 = cljs.core.count.call(null,c__35466__auto___67523);
var G__67527 = (0);
seq__67508_67512 = G__67524;
chunk__67509_67513 = G__67525;
count__67510_67514 = G__67526;
i__67511_67515 = G__67527;
continue;
} else {
var msg_67528 = cljs.core.first.call(null,seq__67508_67522__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_67528);

var G__67529 = cljs.core.next.call(null,seq__67508_67522__$1);
var G__67530 = null;
var G__67531 = (0);
var G__67532 = (0);
seq__67508_67512 = G__67529;
chunk__67509_67513 = G__67530;
count__67510_67514 = G__67531;
i__67511_67515 = G__67532;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__67533){
var map__67536 = p__67533;
var map__67536__$1 = ((((!((map__67536 == null)))?((((map__67536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67536):map__67536);
var w = map__67536__$1;
var message = cljs.core.get.call(null,map__67536__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/specs/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/specs/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__67548 = cljs.core.seq.call(null,plugins);
var chunk__67549 = null;
var count__67550 = (0);
var i__67551 = (0);
while(true){
if((i__67551 < count__67550)){
var vec__67552 = cljs.core._nth.call(null,chunk__67549,i__67551);
var k = cljs.core.nth.call(null,vec__67552,(0),null);
var plugin = cljs.core.nth.call(null,vec__67552,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67558 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67548,chunk__67549,count__67550,i__67551,pl_67558,vec__67552,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_67558.call(null,msg_hist);
});})(seq__67548,chunk__67549,count__67550,i__67551,pl_67558,vec__67552,k,plugin))
);
} else {
}

var G__67559 = seq__67548;
var G__67560 = chunk__67549;
var G__67561 = count__67550;
var G__67562 = (i__67551 + (1));
seq__67548 = G__67559;
chunk__67549 = G__67560;
count__67550 = G__67561;
i__67551 = G__67562;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__67548);
if(temp__6753__auto__){
var seq__67548__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67548__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__67548__$1);
var G__67563 = cljs.core.chunk_rest.call(null,seq__67548__$1);
var G__67564 = c__35466__auto__;
var G__67565 = cljs.core.count.call(null,c__35466__auto__);
var G__67566 = (0);
seq__67548 = G__67563;
chunk__67549 = G__67564;
count__67550 = G__67565;
i__67551 = G__67566;
continue;
} else {
var vec__67555 = cljs.core.first.call(null,seq__67548__$1);
var k = cljs.core.nth.call(null,vec__67555,(0),null);
var plugin = cljs.core.nth.call(null,vec__67555,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67567 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67548,chunk__67549,count__67550,i__67551,pl_67567,vec__67555,k,plugin,seq__67548__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_67567.call(null,msg_hist);
});})(seq__67548,chunk__67549,count__67550,i__67551,pl_67567,vec__67555,k,plugin,seq__67548__$1,temp__6753__auto__))
);
} else {
}

var G__67568 = cljs.core.next.call(null,seq__67548__$1);
var G__67569 = null;
var G__67570 = (0);
var G__67571 = (0);
seq__67548 = G__67568;
chunk__67549 = G__67569;
count__67550 = G__67570;
i__67551 = G__67571;
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
var args67572 = [];
var len__35776__auto___67579 = arguments.length;
var i__35777__auto___67580 = (0);
while(true){
if((i__35777__auto___67580 < len__35776__auto___67579)){
args67572.push((arguments[i__35777__auto___67580]));

var G__67581 = (i__35777__auto___67580 + (1));
i__35777__auto___67580 = G__67581;
continue;
} else {
}
break;
}

var G__67574 = args67572.length;
switch (G__67574) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args67572.length)].join('')));

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

var seq__67575_67583 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__67576_67584 = null;
var count__67577_67585 = (0);
var i__67578_67586 = (0);
while(true){
if((i__67578_67586 < count__67577_67585)){
var msg_67587 = cljs.core._nth.call(null,chunk__67576_67584,i__67578_67586);
figwheel.client.socket.handle_incoming_message.call(null,msg_67587);

var G__67588 = seq__67575_67583;
var G__67589 = chunk__67576_67584;
var G__67590 = count__67577_67585;
var G__67591 = (i__67578_67586 + (1));
seq__67575_67583 = G__67588;
chunk__67576_67584 = G__67589;
count__67577_67585 = G__67590;
i__67578_67586 = G__67591;
continue;
} else {
var temp__6753__auto___67592 = cljs.core.seq.call(null,seq__67575_67583);
if(temp__6753__auto___67592){
var seq__67575_67593__$1 = temp__6753__auto___67592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67575_67593__$1)){
var c__35466__auto___67594 = cljs.core.chunk_first.call(null,seq__67575_67593__$1);
var G__67595 = cljs.core.chunk_rest.call(null,seq__67575_67593__$1);
var G__67596 = c__35466__auto___67594;
var G__67597 = cljs.core.count.call(null,c__35466__auto___67594);
var G__67598 = (0);
seq__67575_67583 = G__67595;
chunk__67576_67584 = G__67596;
count__67577_67585 = G__67597;
i__67578_67586 = G__67598;
continue;
} else {
var msg_67599 = cljs.core.first.call(null,seq__67575_67593__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_67599);

var G__67600 = cljs.core.next.call(null,seq__67575_67593__$1);
var G__67601 = null;
var G__67602 = (0);
var G__67603 = (0);
seq__67575_67583 = G__67600;
chunk__67576_67584 = G__67601;
count__67577_67585 = G__67602;
i__67578_67586 = G__67603;
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
var len__35776__auto___67608 = arguments.length;
var i__35777__auto___67609 = (0);
while(true){
if((i__35777__auto___67609 < len__35776__auto___67608)){
args__35783__auto__.push((arguments[i__35777__auto___67609]));

var G__67610 = (i__35777__auto___67609 + (1));
i__35777__auto___67609 = G__67610;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__67605){
var map__67606 = p__67605;
var map__67606__$1 = ((((!((map__67606 == null)))?((((map__67606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67606):map__67606);
var opts = map__67606__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq67604){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67604));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e67612){if((e67612 instanceof Error)){
var e = e67612;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e67612;

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
return (function (p__67616){
var map__67617 = p__67616;
var map__67617__$1 = ((((!((map__67617 == null)))?((((map__67617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67617):map__67617);
var msg_name = cljs.core.get.call(null,map__67617__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491640783259