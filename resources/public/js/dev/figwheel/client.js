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
var args107066 = [];
var len__35776__auto___107069 = arguments.length;
var i__35777__auto___107070 = (0);
while(true){
if((i__35777__auto___107070 < len__35776__auto___107069)){
args107066.push((arguments[i__35777__auto___107070]));

var G__107071 = (i__35777__auto___107070 + (1));
i__35777__auto___107070 = G__107071;
continue;
} else {
}
break;
}

var G__107068 = args107066.length;
switch (G__107068) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args107066.length)].join('')));

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
var len__35776__auto___107074 = arguments.length;
var i__35777__auto___107075 = (0);
while(true){
if((i__35777__auto___107075 < len__35776__auto___107074)){
args__35783__auto__.push((arguments[i__35777__auto___107075]));

var G__107076 = (i__35777__auto___107075 + (1));
i__35777__auto___107075 = G__107076;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq107073){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107073));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35783__auto__ = [];
var len__35776__auto___107078 = arguments.length;
var i__35777__auto___107079 = (0);
while(true){
if((i__35777__auto___107079 < len__35776__auto___107078)){
args__35783__auto__.push((arguments[i__35777__auto___107079]));

var G__107080 = (i__35777__auto___107079 + (1));
i__35777__auto___107079 = G__107080;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq107077){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107077));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__107081){
var map__107084 = p__107081;
var map__107084__$1 = ((((!((map__107084 == null)))?((((map__107084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107084):map__107084);
var message = cljs.core.get.call(null,map__107084__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__107084__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__48312__auto___107246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___107246,ch){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___107246,ch){
return (function (state_107215){
var state_val_107216 = (state_107215[(1)]);
if((state_val_107216 === (7))){
var inst_107211 = (state_107215[(2)]);
var state_107215__$1 = state_107215;
var statearr_107217_107247 = state_107215__$1;
(statearr_107217_107247[(2)] = inst_107211);

(statearr_107217_107247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (1))){
var state_107215__$1 = state_107215;
var statearr_107218_107248 = state_107215__$1;
(statearr_107218_107248[(2)] = null);

(statearr_107218_107248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (4))){
var inst_107168 = (state_107215[(7)]);
var inst_107168__$1 = (state_107215[(2)]);
var state_107215__$1 = (function (){var statearr_107219 = state_107215;
(statearr_107219[(7)] = inst_107168__$1);

return statearr_107219;
})();
if(cljs.core.truth_(inst_107168__$1)){
var statearr_107220_107249 = state_107215__$1;
(statearr_107220_107249[(1)] = (5));

} else {
var statearr_107221_107250 = state_107215__$1;
(statearr_107221_107250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (15))){
var inst_107175 = (state_107215[(8)]);
var inst_107190 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_107175);
var inst_107191 = cljs.core.first.call(null,inst_107190);
var inst_107192 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_107191);
var inst_107193 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_107192)].join('');
var inst_107194 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_107193);
var state_107215__$1 = state_107215;
var statearr_107222_107251 = state_107215__$1;
(statearr_107222_107251[(2)] = inst_107194);

(statearr_107222_107251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (13))){
var inst_107199 = (state_107215[(2)]);
var state_107215__$1 = state_107215;
var statearr_107223_107252 = state_107215__$1;
(statearr_107223_107252[(2)] = inst_107199);

(statearr_107223_107252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (6))){
var state_107215__$1 = state_107215;
var statearr_107224_107253 = state_107215__$1;
(statearr_107224_107253[(2)] = null);

(statearr_107224_107253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (17))){
var inst_107197 = (state_107215[(2)]);
var state_107215__$1 = state_107215;
var statearr_107225_107254 = state_107215__$1;
(statearr_107225_107254[(2)] = inst_107197);

(statearr_107225_107254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (3))){
var inst_107213 = (state_107215[(2)]);
var state_107215__$1 = state_107215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107215__$1,inst_107213);
} else {
if((state_val_107216 === (12))){
var inst_107174 = (state_107215[(9)]);
var inst_107188 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_107174,opts);
var state_107215__$1 = state_107215;
if(cljs.core.truth_(inst_107188)){
var statearr_107226_107255 = state_107215__$1;
(statearr_107226_107255[(1)] = (15));

} else {
var statearr_107227_107256 = state_107215__$1;
(statearr_107227_107256[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (2))){
var state_107215__$1 = state_107215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107215__$1,(4),ch);
} else {
if((state_val_107216 === (11))){
var inst_107175 = (state_107215[(8)]);
var inst_107180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107181 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_107175);
var inst_107182 = cljs.core.async.timeout.call(null,(1000));
var inst_107183 = [inst_107181,inst_107182];
var inst_107184 = (new cljs.core.PersistentVector(null,2,(5),inst_107180,inst_107183,null));
var state_107215__$1 = state_107215;
return cljs.core.async.ioc_alts_BANG_.call(null,state_107215__$1,(14),inst_107184);
} else {
if((state_val_107216 === (9))){
var inst_107175 = (state_107215[(8)]);
var inst_107201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_107202 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_107175);
var inst_107203 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_107202);
var inst_107204 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_107203)].join('');
var inst_107205 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_107204);
var state_107215__$1 = (function (){var statearr_107228 = state_107215;
(statearr_107228[(10)] = inst_107201);

return statearr_107228;
})();
var statearr_107229_107257 = state_107215__$1;
(statearr_107229_107257[(2)] = inst_107205);

(statearr_107229_107257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (5))){
var inst_107168 = (state_107215[(7)]);
var inst_107170 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_107171 = (new cljs.core.PersistentArrayMap(null,2,inst_107170,null));
var inst_107172 = (new cljs.core.PersistentHashSet(null,inst_107171,null));
var inst_107173 = figwheel.client.focus_msgs.call(null,inst_107172,inst_107168);
var inst_107174 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_107173);
var inst_107175 = cljs.core.first.call(null,inst_107173);
var inst_107176 = figwheel.client.autoload_QMARK_.call(null);
var state_107215__$1 = (function (){var statearr_107230 = state_107215;
(statearr_107230[(8)] = inst_107175);

(statearr_107230[(9)] = inst_107174);

return statearr_107230;
})();
if(cljs.core.truth_(inst_107176)){
var statearr_107231_107258 = state_107215__$1;
(statearr_107231_107258[(1)] = (8));

} else {
var statearr_107232_107259 = state_107215__$1;
(statearr_107232_107259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (14))){
var inst_107186 = (state_107215[(2)]);
var state_107215__$1 = state_107215;
var statearr_107233_107260 = state_107215__$1;
(statearr_107233_107260[(2)] = inst_107186);

(statearr_107233_107260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (16))){
var state_107215__$1 = state_107215;
var statearr_107234_107261 = state_107215__$1;
(statearr_107234_107261[(2)] = null);

(statearr_107234_107261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (10))){
var inst_107207 = (state_107215[(2)]);
var state_107215__$1 = (function (){var statearr_107235 = state_107215;
(statearr_107235[(11)] = inst_107207);

return statearr_107235;
})();
var statearr_107236_107262 = state_107215__$1;
(statearr_107236_107262[(2)] = null);

(statearr_107236_107262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107216 === (8))){
var inst_107174 = (state_107215[(9)]);
var inst_107178 = figwheel.client.reload_file_state_QMARK_.call(null,inst_107174,opts);
var state_107215__$1 = state_107215;
if(cljs.core.truth_(inst_107178)){
var statearr_107237_107263 = state_107215__$1;
(statearr_107237_107263[(1)] = (11));

} else {
var statearr_107238_107264 = state_107215__$1;
(statearr_107238_107264[(1)] = (12));

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
});})(c__48312__auto___107246,ch))
;
return ((function (switch__48198__auto__,c__48312__auto___107246,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0 = (function (){
var statearr_107242 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107242[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__);

(statearr_107242[(1)] = (1));

return statearr_107242;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1 = (function (state_107215){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_107215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e107243){if((e107243 instanceof Object)){
var ex__48202__auto__ = e107243;
var statearr_107244_107265 = state_107215;
(statearr_107244_107265[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107266 = state_107215;
state_107215 = G__107266;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__ = function(state_107215){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1.call(this,state_107215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48199__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___107246,ch))
})();
var state__48314__auto__ = (function (){var statearr_107245 = f__48313__auto__.call(null);
(statearr_107245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___107246);

return statearr_107245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___107246,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__107267_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__107267_SHARP_));
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
var base_path_107270 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_107270){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e107269){if((e107269 instanceof Error)){
var e = e107269;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_107270], null));
} else {
var e = e107269;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_107270))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__107271){
var map__107280 = p__107271;
var map__107280__$1 = ((((!((map__107280 == null)))?((((map__107280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107280):map__107280);
var opts = map__107280__$1;
var build_id = cljs.core.get.call(null,map__107280__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__107280,map__107280__$1,opts,build_id){
return (function (p__107282){
var vec__107283 = p__107282;
var seq__107284 = cljs.core.seq.call(null,vec__107283);
var first__107285 = cljs.core.first.call(null,seq__107284);
var seq__107284__$1 = cljs.core.next.call(null,seq__107284);
var map__107286 = first__107285;
var map__107286__$1 = ((((!((map__107286 == null)))?((((map__107286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107286):map__107286);
var msg = map__107286__$1;
var msg_name = cljs.core.get.call(null,map__107286__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__107284__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__107283,seq__107284,first__107285,seq__107284__$1,map__107286,map__107286__$1,msg,msg_name,_,map__107280,map__107280__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__107283,seq__107284,first__107285,seq__107284__$1,map__107286,map__107286__$1,msg,msg_name,_,map__107280,map__107280__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__107280,map__107280__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__107294){
var vec__107295 = p__107294;
var seq__107296 = cljs.core.seq.call(null,vec__107295);
var first__107297 = cljs.core.first.call(null,seq__107296);
var seq__107296__$1 = cljs.core.next.call(null,seq__107296);
var map__107298 = first__107297;
var map__107298__$1 = ((((!((map__107298 == null)))?((((map__107298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107298):map__107298);
var msg = map__107298__$1;
var msg_name = cljs.core.get.call(null,map__107298__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__107296__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__107300){
var map__107312 = p__107300;
var map__107312__$1 = ((((!((map__107312 == null)))?((((map__107312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107312):map__107312);
var on_compile_warning = cljs.core.get.call(null,map__107312__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__107312__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__107312,map__107312__$1,on_compile_warning,on_compile_fail){
return (function (p__107314){
var vec__107315 = p__107314;
var seq__107316 = cljs.core.seq.call(null,vec__107315);
var first__107317 = cljs.core.first.call(null,seq__107316);
var seq__107316__$1 = cljs.core.next.call(null,seq__107316);
var map__107318 = first__107317;
var map__107318__$1 = ((((!((map__107318 == null)))?((((map__107318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107318):map__107318);
var msg = map__107318__$1;
var msg_name = cljs.core.get.call(null,map__107318__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__107316__$1;
var pred__107320 = cljs.core._EQ_;
var expr__107321 = msg_name;
if(cljs.core.truth_(pred__107320.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__107321))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__107320.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__107321))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__107312,map__107312__$1,on_compile_warning,on_compile_fail))
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
return (function (state_107549){
var state_val_107550 = (state_107549[(1)]);
if((state_val_107550 === (7))){
var inst_107469 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
if(cljs.core.truth_(inst_107469)){
var statearr_107551_107601 = state_107549__$1;
(statearr_107551_107601[(1)] = (8));

} else {
var statearr_107552_107602 = state_107549__$1;
(statearr_107552_107602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (20))){
var inst_107543 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107553_107603 = state_107549__$1;
(statearr_107553_107603[(2)] = inst_107543);

(statearr_107553_107603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (27))){
var inst_107539 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107554_107604 = state_107549__$1;
(statearr_107554_107604[(2)] = inst_107539);

(statearr_107554_107604[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (1))){
var inst_107462 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_107549__$1 = state_107549;
if(cljs.core.truth_(inst_107462)){
var statearr_107555_107605 = state_107549__$1;
(statearr_107555_107605[(1)] = (2));

} else {
var statearr_107556_107606 = state_107549__$1;
(statearr_107556_107606[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (24))){
var inst_107541 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107557_107607 = state_107549__$1;
(statearr_107557_107607[(2)] = inst_107541);

(statearr_107557_107607[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (4))){
var inst_107547 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107549__$1,inst_107547);
} else {
if((state_val_107550 === (15))){
var inst_107545 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107558_107608 = state_107549__$1;
(statearr_107558_107608[(2)] = inst_107545);

(statearr_107558_107608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (21))){
var inst_107498 = (state_107549[(2)]);
var inst_107499 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107500 = figwheel.client.auto_jump_to_error.call(null,opts,inst_107499);
var state_107549__$1 = (function (){var statearr_107559 = state_107549;
(statearr_107559[(7)] = inst_107498);

return statearr_107559;
})();
var statearr_107560_107609 = state_107549__$1;
(statearr_107560_107609[(2)] = inst_107500);

(statearr_107560_107609[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (31))){
var inst_107528 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_107549__$1 = state_107549;
if(cljs.core.truth_(inst_107528)){
var statearr_107561_107610 = state_107549__$1;
(statearr_107561_107610[(1)] = (34));

} else {
var statearr_107562_107611 = state_107549__$1;
(statearr_107562_107611[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (32))){
var inst_107537 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107563_107612 = state_107549__$1;
(statearr_107563_107612[(2)] = inst_107537);

(statearr_107563_107612[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (33))){
var inst_107524 = (state_107549[(2)]);
var inst_107525 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107526 = figwheel.client.auto_jump_to_error.call(null,opts,inst_107525);
var state_107549__$1 = (function (){var statearr_107564 = state_107549;
(statearr_107564[(8)] = inst_107524);

return statearr_107564;
})();
var statearr_107565_107613 = state_107549__$1;
(statearr_107565_107613[(2)] = inst_107526);

(statearr_107565_107613[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (13))){
var inst_107483 = figwheel.client.heads_up.clear.call(null);
var state_107549__$1 = state_107549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(16),inst_107483);
} else {
if((state_val_107550 === (22))){
var inst_107504 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107505 = figwheel.client.heads_up.append_warning_message.call(null,inst_107504);
var state_107549__$1 = state_107549;
var statearr_107566_107614 = state_107549__$1;
(statearr_107566_107614[(2)] = inst_107505);

(statearr_107566_107614[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (36))){
var inst_107535 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107567_107615 = state_107549__$1;
(statearr_107567_107615[(2)] = inst_107535);

(statearr_107567_107615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (29))){
var inst_107515 = (state_107549[(2)]);
var inst_107516 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107517 = figwheel.client.auto_jump_to_error.call(null,opts,inst_107516);
var state_107549__$1 = (function (){var statearr_107568 = state_107549;
(statearr_107568[(9)] = inst_107515);

return statearr_107568;
})();
var statearr_107569_107616 = state_107549__$1;
(statearr_107569_107616[(2)] = inst_107517);

(statearr_107569_107616[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (6))){
var inst_107464 = (state_107549[(10)]);
var state_107549__$1 = state_107549;
var statearr_107570_107617 = state_107549__$1;
(statearr_107570_107617[(2)] = inst_107464);

(statearr_107570_107617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (28))){
var inst_107511 = (state_107549[(2)]);
var inst_107512 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107513 = figwheel.client.heads_up.display_warning.call(null,inst_107512);
var state_107549__$1 = (function (){var statearr_107571 = state_107549;
(statearr_107571[(11)] = inst_107511);

return statearr_107571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(29),inst_107513);
} else {
if((state_val_107550 === (25))){
var inst_107509 = figwheel.client.heads_up.clear.call(null);
var state_107549__$1 = state_107549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(28),inst_107509);
} else {
if((state_val_107550 === (34))){
var inst_107530 = figwheel.client.heads_up.flash_loaded.call(null);
var state_107549__$1 = state_107549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(37),inst_107530);
} else {
if((state_val_107550 === (17))){
var inst_107489 = (state_107549[(2)]);
var inst_107490 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107491 = figwheel.client.auto_jump_to_error.call(null,opts,inst_107490);
var state_107549__$1 = (function (){var statearr_107572 = state_107549;
(statearr_107572[(12)] = inst_107489);

return statearr_107572;
})();
var statearr_107573_107618 = state_107549__$1;
(statearr_107573_107618[(2)] = inst_107491);

(statearr_107573_107618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (3))){
var inst_107481 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_107549__$1 = state_107549;
if(cljs.core.truth_(inst_107481)){
var statearr_107574_107619 = state_107549__$1;
(statearr_107574_107619[(1)] = (13));

} else {
var statearr_107575_107620 = state_107549__$1;
(statearr_107575_107620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (12))){
var inst_107477 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107576_107621 = state_107549__$1;
(statearr_107576_107621[(2)] = inst_107477);

(statearr_107576_107621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (2))){
var inst_107464 = (state_107549[(10)]);
var inst_107464__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_107549__$1 = (function (){var statearr_107577 = state_107549;
(statearr_107577[(10)] = inst_107464__$1);

return statearr_107577;
})();
if(cljs.core.truth_(inst_107464__$1)){
var statearr_107578_107622 = state_107549__$1;
(statearr_107578_107622[(1)] = (5));

} else {
var statearr_107579_107623 = state_107549__$1;
(statearr_107579_107623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (23))){
var inst_107507 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_107549__$1 = state_107549;
if(cljs.core.truth_(inst_107507)){
var statearr_107580_107624 = state_107549__$1;
(statearr_107580_107624[(1)] = (25));

} else {
var statearr_107581_107625 = state_107549__$1;
(statearr_107581_107625[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (35))){
var state_107549__$1 = state_107549;
var statearr_107582_107626 = state_107549__$1;
(statearr_107582_107626[(2)] = null);

(statearr_107582_107626[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (19))){
var inst_107502 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_107549__$1 = state_107549;
if(cljs.core.truth_(inst_107502)){
var statearr_107583_107627 = state_107549__$1;
(statearr_107583_107627[(1)] = (22));

} else {
var statearr_107584_107628 = state_107549__$1;
(statearr_107584_107628[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (11))){
var inst_107473 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107585_107629 = state_107549__$1;
(statearr_107585_107629[(2)] = inst_107473);

(statearr_107585_107629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (9))){
var inst_107475 = figwheel.client.heads_up.clear.call(null);
var state_107549__$1 = state_107549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(12),inst_107475);
} else {
if((state_val_107550 === (5))){
var inst_107466 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_107549__$1 = state_107549;
var statearr_107586_107630 = state_107549__$1;
(statearr_107586_107630[(2)] = inst_107466);

(statearr_107586_107630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (14))){
var inst_107493 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_107549__$1 = state_107549;
if(cljs.core.truth_(inst_107493)){
var statearr_107587_107631 = state_107549__$1;
(statearr_107587_107631[(1)] = (18));

} else {
var statearr_107588_107632 = state_107549__$1;
(statearr_107588_107632[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (26))){
var inst_107519 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_107549__$1 = state_107549;
if(cljs.core.truth_(inst_107519)){
var statearr_107589_107633 = state_107549__$1;
(statearr_107589_107633[(1)] = (30));

} else {
var statearr_107590_107634 = state_107549__$1;
(statearr_107590_107634[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (16))){
var inst_107485 = (state_107549[(2)]);
var inst_107486 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107487 = figwheel.client.heads_up.display_exception.call(null,inst_107486);
var state_107549__$1 = (function (){var statearr_107591 = state_107549;
(statearr_107591[(13)] = inst_107485);

return statearr_107591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(17),inst_107487);
} else {
if((state_val_107550 === (30))){
var inst_107521 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107522 = figwheel.client.heads_up.display_warning.call(null,inst_107521);
var state_107549__$1 = state_107549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(33),inst_107522);
} else {
if((state_val_107550 === (10))){
var inst_107479 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107592_107635 = state_107549__$1;
(statearr_107592_107635[(2)] = inst_107479);

(statearr_107592_107635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (18))){
var inst_107495 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_107496 = figwheel.client.heads_up.display_exception.call(null,inst_107495);
var state_107549__$1 = state_107549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(21),inst_107496);
} else {
if((state_val_107550 === (37))){
var inst_107532 = (state_107549[(2)]);
var state_107549__$1 = state_107549;
var statearr_107593_107636 = state_107549__$1;
(statearr_107593_107636[(2)] = inst_107532);

(statearr_107593_107636[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107550 === (8))){
var inst_107471 = figwheel.client.heads_up.flash_loaded.call(null);
var state_107549__$1 = state_107549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107549__$1,(11),inst_107471);
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
var statearr_107597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107597[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__);

(statearr_107597[(1)] = (1));

return statearr_107597;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1 = (function (state_107549){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_107549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e107598){if((e107598 instanceof Object)){
var ex__48202__auto__ = e107598;
var statearr_107599_107637 = state_107549;
(statearr_107599_107637[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107638 = state_107549;
state_107549 = G__107638;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__ = function(state_107549){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1.call(this,state_107549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,msg_hist,msg_names,msg))
})();
var state__48314__auto__ = (function (){var statearr_107600 = f__48313__auto__.call(null);
(statearr_107600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_107600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,msg_hist,msg_names,msg))
);

return c__48312__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48312__auto___107701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___107701,ch){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___107701,ch){
return (function (state_107684){
var state_val_107685 = (state_107684[(1)]);
if((state_val_107685 === (1))){
var state_107684__$1 = state_107684;
var statearr_107686_107702 = state_107684__$1;
(statearr_107686_107702[(2)] = null);

(statearr_107686_107702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107685 === (2))){
var state_107684__$1 = state_107684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107684__$1,(4),ch);
} else {
if((state_val_107685 === (3))){
var inst_107682 = (state_107684[(2)]);
var state_107684__$1 = state_107684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107684__$1,inst_107682);
} else {
if((state_val_107685 === (4))){
var inst_107672 = (state_107684[(7)]);
var inst_107672__$1 = (state_107684[(2)]);
var state_107684__$1 = (function (){var statearr_107687 = state_107684;
(statearr_107687[(7)] = inst_107672__$1);

return statearr_107687;
})();
if(cljs.core.truth_(inst_107672__$1)){
var statearr_107688_107703 = state_107684__$1;
(statearr_107688_107703[(1)] = (5));

} else {
var statearr_107689_107704 = state_107684__$1;
(statearr_107689_107704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107685 === (5))){
var inst_107672 = (state_107684[(7)]);
var inst_107674 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_107672);
var state_107684__$1 = state_107684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107684__$1,(8),inst_107674);
} else {
if((state_val_107685 === (6))){
var state_107684__$1 = state_107684;
var statearr_107690_107705 = state_107684__$1;
(statearr_107690_107705[(2)] = null);

(statearr_107690_107705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107685 === (7))){
var inst_107680 = (state_107684[(2)]);
var state_107684__$1 = state_107684;
var statearr_107691_107706 = state_107684__$1;
(statearr_107691_107706[(2)] = inst_107680);

(statearr_107691_107706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107685 === (8))){
var inst_107676 = (state_107684[(2)]);
var state_107684__$1 = (function (){var statearr_107692 = state_107684;
(statearr_107692[(8)] = inst_107676);

return statearr_107692;
})();
var statearr_107693_107707 = state_107684__$1;
(statearr_107693_107707[(2)] = null);

(statearr_107693_107707[(1)] = (2));


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
});})(c__48312__auto___107701,ch))
;
return ((function (switch__48198__auto__,c__48312__auto___107701,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0 = (function (){
var statearr_107697 = [null,null,null,null,null,null,null,null,null];
(statearr_107697[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48199__auto__);

(statearr_107697[(1)] = (1));

return statearr_107697;
});
var figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1 = (function (state_107684){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_107684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e107698){if((e107698 instanceof Object)){
var ex__48202__auto__ = e107698;
var statearr_107699_107708 = state_107684;
(statearr_107699_107708[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107709 = state_107684;
state_107684 = G__107709;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__ = function(state_107684){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1.call(this,state_107684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48199__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48199__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___107701,ch))
})();
var state__48314__auto__ = (function (){var statearr_107700 = f__48313__auto__.call(null);
(statearr_107700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___107701);

return statearr_107700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___107701,ch))
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
return (function (state_107730){
var state_val_107731 = (state_107730[(1)]);
if((state_val_107731 === (1))){
var inst_107725 = cljs.core.async.timeout.call(null,(3000));
var state_107730__$1 = state_107730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107730__$1,(2),inst_107725);
} else {
if((state_val_107731 === (2))){
var inst_107727 = (state_107730[(2)]);
var inst_107728 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_107730__$1 = (function (){var statearr_107732 = state_107730;
(statearr_107732[(7)] = inst_107727);

return statearr_107732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107730__$1,inst_107728);
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
var statearr_107736 = [null,null,null,null,null,null,null,null];
(statearr_107736[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__);

(statearr_107736[(1)] = (1));

return statearr_107736;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1 = (function (state_107730){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_107730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e107737){if((e107737 instanceof Object)){
var ex__48202__auto__ = e107737;
var statearr_107738_107740 = state_107730;
(statearr_107738_107740[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107741 = state_107730;
state_107730 = G__107741;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__ = function(state_107730){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1.call(this,state_107730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48199__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_107739 = f__48313__auto__.call(null);
(statearr_107739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_107739;
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
return (function (state_107764){
var state_val_107765 = (state_107764[(1)]);
if((state_val_107765 === (1))){
var inst_107758 = cljs.core.async.timeout.call(null,(2000));
var state_107764__$1 = state_107764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_107764__$1,(2),inst_107758);
} else {
if((state_val_107765 === (2))){
var inst_107760 = (state_107764[(2)]);
var inst_107761 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_107762 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_107761);
var state_107764__$1 = (function (){var statearr_107766 = state_107764;
(statearr_107766[(7)] = inst_107760);

return statearr_107766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107764__$1,inst_107762);
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
var statearr_107770 = [null,null,null,null,null,null,null,null];
(statearr_107770[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__);

(statearr_107770[(1)] = (1));

return statearr_107770;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1 = (function (state_107764){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_107764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e107771){if((e107771 instanceof Object)){
var ex__48202__auto__ = e107771;
var statearr_107772_107774 = state_107764;
(statearr_107772_107774[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e107771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107775 = state_107764;
state_107764 = G__107775;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__ = function(state_107764){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1.call(this,state_107764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,figwheel_version,temp__6753__auto__))
})();
var state__48314__auto__ = (function (){var statearr_107773 = f__48313__auto__.call(null);
(statearr_107773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_107773;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__107776){
var map__107780 = p__107776;
var map__107780__$1 = ((((!((map__107780 == null)))?((((map__107780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107780):map__107780);
var file = cljs.core.get.call(null,map__107780__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__107780__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__107780__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__107782 = "";
var G__107782__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__107782),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__107782);
var G__107782__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__107782__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__107782__$1);
if(cljs.core.truth_((function (){var and__34543__auto__ = line;
if(cljs.core.truth_(and__34543__auto__)){
return column;
} else {
return and__34543__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__107782__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__107782__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__107783){
var map__107790 = p__107783;
var map__107790__$1 = ((((!((map__107790 == null)))?((((map__107790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107790):map__107790);
var ed = map__107790__$1;
var formatted_exception = cljs.core.get.call(null,map__107790__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__107790__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__107790__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__107792_107796 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__107793_107797 = null;
var count__107794_107798 = (0);
var i__107795_107799 = (0);
while(true){
if((i__107795_107799 < count__107794_107798)){
var msg_107800 = cljs.core._nth.call(null,chunk__107793_107797,i__107795_107799);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_107800);

var G__107801 = seq__107792_107796;
var G__107802 = chunk__107793_107797;
var G__107803 = count__107794_107798;
var G__107804 = (i__107795_107799 + (1));
seq__107792_107796 = G__107801;
chunk__107793_107797 = G__107802;
count__107794_107798 = G__107803;
i__107795_107799 = G__107804;
continue;
} else {
var temp__6753__auto___107805 = cljs.core.seq.call(null,seq__107792_107796);
if(temp__6753__auto___107805){
var seq__107792_107806__$1 = temp__6753__auto___107805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__107792_107806__$1)){
var c__35466__auto___107807 = cljs.core.chunk_first.call(null,seq__107792_107806__$1);
var G__107808 = cljs.core.chunk_rest.call(null,seq__107792_107806__$1);
var G__107809 = c__35466__auto___107807;
var G__107810 = cljs.core.count.call(null,c__35466__auto___107807);
var G__107811 = (0);
seq__107792_107796 = G__107808;
chunk__107793_107797 = G__107809;
count__107794_107798 = G__107810;
i__107795_107799 = G__107811;
continue;
} else {
var msg_107812 = cljs.core.first.call(null,seq__107792_107806__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_107812);

var G__107813 = cljs.core.next.call(null,seq__107792_107806__$1);
var G__107814 = null;
var G__107815 = (0);
var G__107816 = (0);
seq__107792_107796 = G__107813;
chunk__107793_107797 = G__107814;
count__107794_107798 = G__107815;
i__107795_107799 = G__107816;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__107817){
var map__107820 = p__107817;
var map__107820__$1 = ((((!((map__107820 == null)))?((((map__107820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107820):map__107820);
var w = map__107820__$1;
var message = cljs.core.get.call(null,map__107820__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/dev/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/dev/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__107832 = cljs.core.seq.call(null,plugins);
var chunk__107833 = null;
var count__107834 = (0);
var i__107835 = (0);
while(true){
if((i__107835 < count__107834)){
var vec__107836 = cljs.core._nth.call(null,chunk__107833,i__107835);
var k = cljs.core.nth.call(null,vec__107836,(0),null);
var plugin = cljs.core.nth.call(null,vec__107836,(1),null);
if(cljs.core.truth_(plugin)){
var pl_107842 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__107832,chunk__107833,count__107834,i__107835,pl_107842,vec__107836,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_107842.call(null,msg_hist);
});})(seq__107832,chunk__107833,count__107834,i__107835,pl_107842,vec__107836,k,plugin))
);
} else {
}

var G__107843 = seq__107832;
var G__107844 = chunk__107833;
var G__107845 = count__107834;
var G__107846 = (i__107835 + (1));
seq__107832 = G__107843;
chunk__107833 = G__107844;
count__107834 = G__107845;
i__107835 = G__107846;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__107832);
if(temp__6753__auto__){
var seq__107832__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__107832__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__107832__$1);
var G__107847 = cljs.core.chunk_rest.call(null,seq__107832__$1);
var G__107848 = c__35466__auto__;
var G__107849 = cljs.core.count.call(null,c__35466__auto__);
var G__107850 = (0);
seq__107832 = G__107847;
chunk__107833 = G__107848;
count__107834 = G__107849;
i__107835 = G__107850;
continue;
} else {
var vec__107839 = cljs.core.first.call(null,seq__107832__$1);
var k = cljs.core.nth.call(null,vec__107839,(0),null);
var plugin = cljs.core.nth.call(null,vec__107839,(1),null);
if(cljs.core.truth_(plugin)){
var pl_107851 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__107832,chunk__107833,count__107834,i__107835,pl_107851,vec__107839,k,plugin,seq__107832__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_107851.call(null,msg_hist);
});})(seq__107832,chunk__107833,count__107834,i__107835,pl_107851,vec__107839,k,plugin,seq__107832__$1,temp__6753__auto__))
);
} else {
}

var G__107852 = cljs.core.next.call(null,seq__107832__$1);
var G__107853 = null;
var G__107854 = (0);
var G__107855 = (0);
seq__107832 = G__107852;
chunk__107833 = G__107853;
count__107834 = G__107854;
i__107835 = G__107855;
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
var args107856 = [];
var len__35776__auto___107863 = arguments.length;
var i__35777__auto___107864 = (0);
while(true){
if((i__35777__auto___107864 < len__35776__auto___107863)){
args107856.push((arguments[i__35777__auto___107864]));

var G__107865 = (i__35777__auto___107864 + (1));
i__35777__auto___107864 = G__107865;
continue;
} else {
}
break;
}

var G__107858 = args107856.length;
switch (G__107858) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args107856.length)].join('')));

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

var seq__107859_107867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__107860_107868 = null;
var count__107861_107869 = (0);
var i__107862_107870 = (0);
while(true){
if((i__107862_107870 < count__107861_107869)){
var msg_107871 = cljs.core._nth.call(null,chunk__107860_107868,i__107862_107870);
figwheel.client.socket.handle_incoming_message.call(null,msg_107871);

var G__107872 = seq__107859_107867;
var G__107873 = chunk__107860_107868;
var G__107874 = count__107861_107869;
var G__107875 = (i__107862_107870 + (1));
seq__107859_107867 = G__107872;
chunk__107860_107868 = G__107873;
count__107861_107869 = G__107874;
i__107862_107870 = G__107875;
continue;
} else {
var temp__6753__auto___107876 = cljs.core.seq.call(null,seq__107859_107867);
if(temp__6753__auto___107876){
var seq__107859_107877__$1 = temp__6753__auto___107876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__107859_107877__$1)){
var c__35466__auto___107878 = cljs.core.chunk_first.call(null,seq__107859_107877__$1);
var G__107879 = cljs.core.chunk_rest.call(null,seq__107859_107877__$1);
var G__107880 = c__35466__auto___107878;
var G__107881 = cljs.core.count.call(null,c__35466__auto___107878);
var G__107882 = (0);
seq__107859_107867 = G__107879;
chunk__107860_107868 = G__107880;
count__107861_107869 = G__107881;
i__107862_107870 = G__107882;
continue;
} else {
var msg_107883 = cljs.core.first.call(null,seq__107859_107877__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_107883);

var G__107884 = cljs.core.next.call(null,seq__107859_107877__$1);
var G__107885 = null;
var G__107886 = (0);
var G__107887 = (0);
seq__107859_107867 = G__107884;
chunk__107860_107868 = G__107885;
count__107861_107869 = G__107886;
i__107862_107870 = G__107887;
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
var len__35776__auto___107892 = arguments.length;
var i__35777__auto___107893 = (0);
while(true){
if((i__35777__auto___107893 < len__35776__auto___107892)){
args__35783__auto__.push((arguments[i__35777__auto___107893]));

var G__107894 = (i__35777__auto___107893 + (1));
i__35777__auto___107893 = G__107894;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__107889){
var map__107890 = p__107889;
var map__107890__$1 = ((((!((map__107890 == null)))?((((map__107890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107890):map__107890);
var opts = map__107890__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq107888){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq107888));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e107896){if((e107896 instanceof Error)){
var e = e107896;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e107896;

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
return (function (p__107900){
var map__107901 = p__107900;
var map__107901__$1 = ((((!((map__107901 == null)))?((((map__107901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__107901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107901):map__107901);
var msg_name = cljs.core.get.call(null,map__107901__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491640860938