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
var args189279 = [];
var len__40427__auto___189282 = arguments.length;
var i__40428__auto___189283 = (0);
while(true){
if((i__40428__auto___189283 < len__40427__auto___189282)){
args189279.push((arguments[i__40428__auto___189283]));

var G__189284 = (i__40428__auto___189283 + (1));
i__40428__auto___189283 = G__189284;
continue;
} else {
}
break;
}

var G__189281 = args189279.length;
switch (G__189281) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args189279.length)].join('')));

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
var len__40427__auto___189287 = arguments.length;
var i__40428__auto___189288 = (0);
while(true){
if((i__40428__auto___189288 < len__40427__auto___189287)){
args__40434__auto__.push((arguments[i__40428__auto___189288]));

var G__189289 = (i__40428__auto___189288 + (1));
i__40428__auto___189288 = G__189289;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq189286){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq189286));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__40434__auto__ = [];
var len__40427__auto___189291 = arguments.length;
var i__40428__auto___189292 = (0);
while(true){
if((i__40428__auto___189292 < len__40427__auto___189291)){
args__40434__auto__.push((arguments[i__40428__auto___189292]));

var G__189293 = (i__40428__auto___189292 + (1));
i__40428__auto___189292 = G__189293;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq189290){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq189290));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__189294){
var map__189297 = p__189294;
var map__189297__$1 = ((((!((map__189297 == null)))?((((map__189297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__189297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__189297):map__189297);
var message = cljs.core.get.call(null,map__189297__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__189297__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__44084__auto___189459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___189459,ch){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___189459,ch){
return (function (state_189428){
var state_val_189429 = (state_189428[(1)]);
if((state_val_189429 === (7))){
var inst_189424 = (state_189428[(2)]);
var state_189428__$1 = state_189428;
var statearr_189430_189460 = state_189428__$1;
(statearr_189430_189460[(2)] = inst_189424);

(statearr_189430_189460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (1))){
var state_189428__$1 = state_189428;
var statearr_189431_189461 = state_189428__$1;
(statearr_189431_189461[(2)] = null);

(statearr_189431_189461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (4))){
var inst_189381 = (state_189428[(7)]);
var inst_189381__$1 = (state_189428[(2)]);
var state_189428__$1 = (function (){var statearr_189432 = state_189428;
(statearr_189432[(7)] = inst_189381__$1);

return statearr_189432;
})();
if(cljs.core.truth_(inst_189381__$1)){
var statearr_189433_189462 = state_189428__$1;
(statearr_189433_189462[(1)] = (5));

} else {
var statearr_189434_189463 = state_189428__$1;
(statearr_189434_189463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (15))){
var inst_189388 = (state_189428[(8)]);
var inst_189403 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_189388);
var inst_189404 = cljs.core.first.call(null,inst_189403);
var inst_189405 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_189404);
var inst_189406 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_189405)].join('');
var inst_189407 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_189406);
var state_189428__$1 = state_189428;
var statearr_189435_189464 = state_189428__$1;
(statearr_189435_189464[(2)] = inst_189407);

(statearr_189435_189464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (13))){
var inst_189412 = (state_189428[(2)]);
var state_189428__$1 = state_189428;
var statearr_189436_189465 = state_189428__$1;
(statearr_189436_189465[(2)] = inst_189412);

(statearr_189436_189465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (6))){
var state_189428__$1 = state_189428;
var statearr_189437_189466 = state_189428__$1;
(statearr_189437_189466[(2)] = null);

(statearr_189437_189466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (17))){
var inst_189410 = (state_189428[(2)]);
var state_189428__$1 = state_189428;
var statearr_189438_189467 = state_189428__$1;
(statearr_189438_189467[(2)] = inst_189410);

(statearr_189438_189467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (3))){
var inst_189426 = (state_189428[(2)]);
var state_189428__$1 = state_189428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189428__$1,inst_189426);
} else {
if((state_val_189429 === (12))){
var inst_189387 = (state_189428[(9)]);
var inst_189401 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_189387,opts);
var state_189428__$1 = state_189428;
if(cljs.core.truth_(inst_189401)){
var statearr_189439_189468 = state_189428__$1;
(statearr_189439_189468[(1)] = (15));

} else {
var statearr_189440_189469 = state_189428__$1;
(statearr_189440_189469[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (2))){
var state_189428__$1 = state_189428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189428__$1,(4),ch);
} else {
if((state_val_189429 === (11))){
var inst_189388 = (state_189428[(8)]);
var inst_189393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_189394 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_189388);
var inst_189395 = cljs.core.async.timeout.call(null,(1000));
var inst_189396 = [inst_189394,inst_189395];
var inst_189397 = (new cljs.core.PersistentVector(null,2,(5),inst_189393,inst_189396,null));
var state_189428__$1 = state_189428;
return cljs.core.async.ioc_alts_BANG_.call(null,state_189428__$1,(14),inst_189397);
} else {
if((state_val_189429 === (9))){
var inst_189388 = (state_189428[(8)]);
var inst_189414 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_189415 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_189388);
var inst_189416 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_189415);
var inst_189417 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_189416)].join('');
var inst_189418 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_189417);
var state_189428__$1 = (function (){var statearr_189441 = state_189428;
(statearr_189441[(10)] = inst_189414);

return statearr_189441;
})();
var statearr_189442_189470 = state_189428__$1;
(statearr_189442_189470[(2)] = inst_189418);

(statearr_189442_189470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (5))){
var inst_189381 = (state_189428[(7)]);
var inst_189383 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_189384 = (new cljs.core.PersistentArrayMap(null,2,inst_189383,null));
var inst_189385 = (new cljs.core.PersistentHashSet(null,inst_189384,null));
var inst_189386 = figwheel.client.focus_msgs.call(null,inst_189385,inst_189381);
var inst_189387 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_189386);
var inst_189388 = cljs.core.first.call(null,inst_189386);
var inst_189389 = figwheel.client.autoload_QMARK_.call(null);
var state_189428__$1 = (function (){var statearr_189443 = state_189428;
(statearr_189443[(9)] = inst_189387);

(statearr_189443[(8)] = inst_189388);

return statearr_189443;
})();
if(cljs.core.truth_(inst_189389)){
var statearr_189444_189471 = state_189428__$1;
(statearr_189444_189471[(1)] = (8));

} else {
var statearr_189445_189472 = state_189428__$1;
(statearr_189445_189472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (14))){
var inst_189399 = (state_189428[(2)]);
var state_189428__$1 = state_189428;
var statearr_189446_189473 = state_189428__$1;
(statearr_189446_189473[(2)] = inst_189399);

(statearr_189446_189473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (16))){
var state_189428__$1 = state_189428;
var statearr_189447_189474 = state_189428__$1;
(statearr_189447_189474[(2)] = null);

(statearr_189447_189474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (10))){
var inst_189420 = (state_189428[(2)]);
var state_189428__$1 = (function (){var statearr_189448 = state_189428;
(statearr_189448[(11)] = inst_189420);

return statearr_189448;
})();
var statearr_189449_189475 = state_189428__$1;
(statearr_189449_189475[(2)] = null);

(statearr_189449_189475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189429 === (8))){
var inst_189387 = (state_189428[(9)]);
var inst_189391 = figwheel.client.reload_file_state_QMARK_.call(null,inst_189387,opts);
var state_189428__$1 = state_189428;
if(cljs.core.truth_(inst_189391)){
var statearr_189450_189476 = state_189428__$1;
(statearr_189450_189476[(1)] = (11));

} else {
var statearr_189451_189477 = state_189428__$1;
(statearr_189451_189477[(1)] = (12));

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
});})(c__44084__auto___189459,ch))
;
return ((function (switch__44061__auto__,c__44084__auto___189459,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0 = (function (){
var statearr_189455 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_189455[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__);

(statearr_189455[(1)] = (1));

return statearr_189455;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1 = (function (state_189428){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_189428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e189456){if((e189456 instanceof Object)){
var ex__44065__auto__ = e189456;
var statearr_189457_189478 = state_189428;
(statearr_189457_189478[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e189456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__189479 = state_189428;
state_189428 = G__189479;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__ = function(state_189428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1.call(this,state_189428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___189459,ch))
})();
var state__44086__auto__ = (function (){var statearr_189458 = f__44085__auto__.call(null);
(statearr_189458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___189459);

return statearr_189458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___189459,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__189480_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__189480_SHARP_));
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
var base_path_189483 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_189483){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e189482){if((e189482 instanceof Error)){
var e = e189482;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_189483], null));
} else {
var e = e189482;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_189483))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__189484){
var map__189493 = p__189484;
var map__189493__$1 = ((((!((map__189493 == null)))?((((map__189493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__189493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__189493):map__189493);
var opts = map__189493__$1;
var build_id = cljs.core.get.call(null,map__189493__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__189493,map__189493__$1,opts,build_id){
return (function (p__189495){
var vec__189496 = p__189495;
var seq__189497 = cljs.core.seq.call(null,vec__189496);
var first__189498 = cljs.core.first.call(null,seq__189497);
var seq__189497__$1 = cljs.core.next.call(null,seq__189497);
var map__189499 = first__189498;
var map__189499__$1 = ((((!((map__189499 == null)))?((((map__189499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__189499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__189499):map__189499);
var msg = map__189499__$1;
var msg_name = cljs.core.get.call(null,map__189499__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__189497__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__189496,seq__189497,first__189498,seq__189497__$1,map__189499,map__189499__$1,msg,msg_name,_,map__189493,map__189493__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__189496,seq__189497,first__189498,seq__189497__$1,map__189499,map__189499__$1,msg,msg_name,_,map__189493,map__189493__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__189493,map__189493__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__189507){
var vec__189508 = p__189507;
var seq__189509 = cljs.core.seq.call(null,vec__189508);
var first__189510 = cljs.core.first.call(null,seq__189509);
var seq__189509__$1 = cljs.core.next.call(null,seq__189509);
var map__189511 = first__189510;
var map__189511__$1 = ((((!((map__189511 == null)))?((((map__189511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__189511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__189511):map__189511);
var msg = map__189511__$1;
var msg_name = cljs.core.get.call(null,map__189511__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__189509__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__189513){
var map__189525 = p__189513;
var map__189525__$1 = ((((!((map__189525 == null)))?((((map__189525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__189525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__189525):map__189525);
var on_compile_warning = cljs.core.get.call(null,map__189525__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__189525__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__189525,map__189525__$1,on_compile_warning,on_compile_fail){
return (function (p__189527){
var vec__189528 = p__189527;
var seq__189529 = cljs.core.seq.call(null,vec__189528);
var first__189530 = cljs.core.first.call(null,seq__189529);
var seq__189529__$1 = cljs.core.next.call(null,seq__189529);
var map__189531 = first__189530;
var map__189531__$1 = ((((!((map__189531 == null)))?((((map__189531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__189531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__189531):map__189531);
var msg = map__189531__$1;
var msg_name = cljs.core.get.call(null,map__189531__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__189529__$1;
var pred__189533 = cljs.core._EQ_;
var expr__189534 = msg_name;
if(cljs.core.truth_(pred__189533.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__189534))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__189533.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__189534))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__189525,map__189525__$1,on_compile_warning,on_compile_fail))
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
return (function (state_189762){
var state_val_189763 = (state_189762[(1)]);
if((state_val_189763 === (7))){
var inst_189682 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
if(cljs.core.truth_(inst_189682)){
var statearr_189764_189814 = state_189762__$1;
(statearr_189764_189814[(1)] = (8));

} else {
var statearr_189765_189815 = state_189762__$1;
(statearr_189765_189815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (20))){
var inst_189756 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189766_189816 = state_189762__$1;
(statearr_189766_189816[(2)] = inst_189756);

(statearr_189766_189816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (27))){
var inst_189752 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189767_189817 = state_189762__$1;
(statearr_189767_189817[(2)] = inst_189752);

(statearr_189767_189817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (1))){
var inst_189675 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_189762__$1 = state_189762;
if(cljs.core.truth_(inst_189675)){
var statearr_189768_189818 = state_189762__$1;
(statearr_189768_189818[(1)] = (2));

} else {
var statearr_189769_189819 = state_189762__$1;
(statearr_189769_189819[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (24))){
var inst_189754 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189770_189820 = state_189762__$1;
(statearr_189770_189820[(2)] = inst_189754);

(statearr_189770_189820[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (4))){
var inst_189760 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189762__$1,inst_189760);
} else {
if((state_val_189763 === (15))){
var inst_189758 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189771_189821 = state_189762__$1;
(statearr_189771_189821[(2)] = inst_189758);

(statearr_189771_189821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (21))){
var inst_189711 = (state_189762[(2)]);
var inst_189712 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189713 = figwheel.client.auto_jump_to_error.call(null,opts,inst_189712);
var state_189762__$1 = (function (){var statearr_189772 = state_189762;
(statearr_189772[(7)] = inst_189711);

return statearr_189772;
})();
var statearr_189773_189822 = state_189762__$1;
(statearr_189773_189822[(2)] = inst_189713);

(statearr_189773_189822[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (31))){
var inst_189741 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_189762__$1 = state_189762;
if(cljs.core.truth_(inst_189741)){
var statearr_189774_189823 = state_189762__$1;
(statearr_189774_189823[(1)] = (34));

} else {
var statearr_189775_189824 = state_189762__$1;
(statearr_189775_189824[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (32))){
var inst_189750 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189776_189825 = state_189762__$1;
(statearr_189776_189825[(2)] = inst_189750);

(statearr_189776_189825[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (33))){
var inst_189737 = (state_189762[(2)]);
var inst_189738 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189739 = figwheel.client.auto_jump_to_error.call(null,opts,inst_189738);
var state_189762__$1 = (function (){var statearr_189777 = state_189762;
(statearr_189777[(8)] = inst_189737);

return statearr_189777;
})();
var statearr_189778_189826 = state_189762__$1;
(statearr_189778_189826[(2)] = inst_189739);

(statearr_189778_189826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (13))){
var inst_189696 = figwheel.client.heads_up.clear.call(null);
var state_189762__$1 = state_189762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(16),inst_189696);
} else {
if((state_val_189763 === (22))){
var inst_189717 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189718 = figwheel.client.heads_up.append_warning_message.call(null,inst_189717);
var state_189762__$1 = state_189762;
var statearr_189779_189827 = state_189762__$1;
(statearr_189779_189827[(2)] = inst_189718);

(statearr_189779_189827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (36))){
var inst_189748 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189780_189828 = state_189762__$1;
(statearr_189780_189828[(2)] = inst_189748);

(statearr_189780_189828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (29))){
var inst_189728 = (state_189762[(2)]);
var inst_189729 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189730 = figwheel.client.auto_jump_to_error.call(null,opts,inst_189729);
var state_189762__$1 = (function (){var statearr_189781 = state_189762;
(statearr_189781[(9)] = inst_189728);

return statearr_189781;
})();
var statearr_189782_189829 = state_189762__$1;
(statearr_189782_189829[(2)] = inst_189730);

(statearr_189782_189829[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (6))){
var inst_189677 = (state_189762[(10)]);
var state_189762__$1 = state_189762;
var statearr_189783_189830 = state_189762__$1;
(statearr_189783_189830[(2)] = inst_189677);

(statearr_189783_189830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (28))){
var inst_189724 = (state_189762[(2)]);
var inst_189725 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189726 = figwheel.client.heads_up.display_warning.call(null,inst_189725);
var state_189762__$1 = (function (){var statearr_189784 = state_189762;
(statearr_189784[(11)] = inst_189724);

return statearr_189784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(29),inst_189726);
} else {
if((state_val_189763 === (25))){
var inst_189722 = figwheel.client.heads_up.clear.call(null);
var state_189762__$1 = state_189762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(28),inst_189722);
} else {
if((state_val_189763 === (34))){
var inst_189743 = figwheel.client.heads_up.flash_loaded.call(null);
var state_189762__$1 = state_189762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(37),inst_189743);
} else {
if((state_val_189763 === (17))){
var inst_189702 = (state_189762[(2)]);
var inst_189703 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189704 = figwheel.client.auto_jump_to_error.call(null,opts,inst_189703);
var state_189762__$1 = (function (){var statearr_189785 = state_189762;
(statearr_189785[(12)] = inst_189702);

return statearr_189785;
})();
var statearr_189786_189831 = state_189762__$1;
(statearr_189786_189831[(2)] = inst_189704);

(statearr_189786_189831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (3))){
var inst_189694 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_189762__$1 = state_189762;
if(cljs.core.truth_(inst_189694)){
var statearr_189787_189832 = state_189762__$1;
(statearr_189787_189832[(1)] = (13));

} else {
var statearr_189788_189833 = state_189762__$1;
(statearr_189788_189833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (12))){
var inst_189690 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189789_189834 = state_189762__$1;
(statearr_189789_189834[(2)] = inst_189690);

(statearr_189789_189834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (2))){
var inst_189677 = (state_189762[(10)]);
var inst_189677__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_189762__$1 = (function (){var statearr_189790 = state_189762;
(statearr_189790[(10)] = inst_189677__$1);

return statearr_189790;
})();
if(cljs.core.truth_(inst_189677__$1)){
var statearr_189791_189835 = state_189762__$1;
(statearr_189791_189835[(1)] = (5));

} else {
var statearr_189792_189836 = state_189762__$1;
(statearr_189792_189836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (23))){
var inst_189720 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_189762__$1 = state_189762;
if(cljs.core.truth_(inst_189720)){
var statearr_189793_189837 = state_189762__$1;
(statearr_189793_189837[(1)] = (25));

} else {
var statearr_189794_189838 = state_189762__$1;
(statearr_189794_189838[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (35))){
var state_189762__$1 = state_189762;
var statearr_189795_189839 = state_189762__$1;
(statearr_189795_189839[(2)] = null);

(statearr_189795_189839[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (19))){
var inst_189715 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_189762__$1 = state_189762;
if(cljs.core.truth_(inst_189715)){
var statearr_189796_189840 = state_189762__$1;
(statearr_189796_189840[(1)] = (22));

} else {
var statearr_189797_189841 = state_189762__$1;
(statearr_189797_189841[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (11))){
var inst_189686 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189798_189842 = state_189762__$1;
(statearr_189798_189842[(2)] = inst_189686);

(statearr_189798_189842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (9))){
var inst_189688 = figwheel.client.heads_up.clear.call(null);
var state_189762__$1 = state_189762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(12),inst_189688);
} else {
if((state_val_189763 === (5))){
var inst_189679 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_189762__$1 = state_189762;
var statearr_189799_189843 = state_189762__$1;
(statearr_189799_189843[(2)] = inst_189679);

(statearr_189799_189843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (14))){
var inst_189706 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_189762__$1 = state_189762;
if(cljs.core.truth_(inst_189706)){
var statearr_189800_189844 = state_189762__$1;
(statearr_189800_189844[(1)] = (18));

} else {
var statearr_189801_189845 = state_189762__$1;
(statearr_189801_189845[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (26))){
var inst_189732 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_189762__$1 = state_189762;
if(cljs.core.truth_(inst_189732)){
var statearr_189802_189846 = state_189762__$1;
(statearr_189802_189846[(1)] = (30));

} else {
var statearr_189803_189847 = state_189762__$1;
(statearr_189803_189847[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (16))){
var inst_189698 = (state_189762[(2)]);
var inst_189699 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189700 = figwheel.client.heads_up.display_exception.call(null,inst_189699);
var state_189762__$1 = (function (){var statearr_189804 = state_189762;
(statearr_189804[(13)] = inst_189698);

return statearr_189804;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(17),inst_189700);
} else {
if((state_val_189763 === (30))){
var inst_189734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189735 = figwheel.client.heads_up.display_warning.call(null,inst_189734);
var state_189762__$1 = state_189762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(33),inst_189735);
} else {
if((state_val_189763 === (10))){
var inst_189692 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189805_189848 = state_189762__$1;
(statearr_189805_189848[(2)] = inst_189692);

(statearr_189805_189848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (18))){
var inst_189708 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_189709 = figwheel.client.heads_up.display_exception.call(null,inst_189708);
var state_189762__$1 = state_189762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(21),inst_189709);
} else {
if((state_val_189763 === (37))){
var inst_189745 = (state_189762[(2)]);
var state_189762__$1 = state_189762;
var statearr_189806_189849 = state_189762__$1;
(statearr_189806_189849[(2)] = inst_189745);

(statearr_189806_189849[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189763 === (8))){
var inst_189684 = figwheel.client.heads_up.flash_loaded.call(null);
var state_189762__$1 = state_189762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189762__$1,(11),inst_189684);
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
var statearr_189810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_189810[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__);

(statearr_189810[(1)] = (1));

return statearr_189810;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1 = (function (state_189762){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_189762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e189811){if((e189811 instanceof Object)){
var ex__44065__auto__ = e189811;
var statearr_189812_189850 = state_189762;
(statearr_189812_189850[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e189811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__189851 = state_189762;
state_189762 = G__189851;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__ = function(state_189762){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1.call(this,state_189762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,msg_hist,msg_names,msg))
})();
var state__44086__auto__ = (function (){var statearr_189813 = f__44085__auto__.call(null);
(statearr_189813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_189813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,msg_hist,msg_names,msg))
);

return c__44084__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44084__auto___189914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___189914,ch){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___189914,ch){
return (function (state_189897){
var state_val_189898 = (state_189897[(1)]);
if((state_val_189898 === (1))){
var state_189897__$1 = state_189897;
var statearr_189899_189915 = state_189897__$1;
(statearr_189899_189915[(2)] = null);

(statearr_189899_189915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189898 === (2))){
var state_189897__$1 = state_189897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189897__$1,(4),ch);
} else {
if((state_val_189898 === (3))){
var inst_189895 = (state_189897[(2)]);
var state_189897__$1 = state_189897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189897__$1,inst_189895);
} else {
if((state_val_189898 === (4))){
var inst_189885 = (state_189897[(7)]);
var inst_189885__$1 = (state_189897[(2)]);
var state_189897__$1 = (function (){var statearr_189900 = state_189897;
(statearr_189900[(7)] = inst_189885__$1);

return statearr_189900;
})();
if(cljs.core.truth_(inst_189885__$1)){
var statearr_189901_189916 = state_189897__$1;
(statearr_189901_189916[(1)] = (5));

} else {
var statearr_189902_189917 = state_189897__$1;
(statearr_189902_189917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189898 === (5))){
var inst_189885 = (state_189897[(7)]);
var inst_189887 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_189885);
var state_189897__$1 = state_189897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189897__$1,(8),inst_189887);
} else {
if((state_val_189898 === (6))){
var state_189897__$1 = state_189897;
var statearr_189903_189918 = state_189897__$1;
(statearr_189903_189918[(2)] = null);

(statearr_189903_189918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189898 === (7))){
var inst_189893 = (state_189897[(2)]);
var state_189897__$1 = state_189897;
var statearr_189904_189919 = state_189897__$1;
(statearr_189904_189919[(2)] = inst_189893);

(statearr_189904_189919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_189898 === (8))){
var inst_189889 = (state_189897[(2)]);
var state_189897__$1 = (function (){var statearr_189905 = state_189897;
(statearr_189905[(8)] = inst_189889);

return statearr_189905;
})();
var statearr_189906_189920 = state_189897__$1;
(statearr_189906_189920[(2)] = null);

(statearr_189906_189920[(1)] = (2));


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
});})(c__44084__auto___189914,ch))
;
return ((function (switch__44061__auto__,c__44084__auto___189914,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0 = (function (){
var statearr_189910 = [null,null,null,null,null,null,null,null,null];
(statearr_189910[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44062__auto__);

(statearr_189910[(1)] = (1));

return statearr_189910;
});
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1 = (function (state_189897){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_189897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e189911){if((e189911 instanceof Object)){
var ex__44065__auto__ = e189911;
var statearr_189912_189921 = state_189897;
(statearr_189912_189921[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e189911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__189922 = state_189897;
state_189897 = G__189922;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__ = function(state_189897){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1.call(this,state_189897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___189914,ch))
})();
var state__44086__auto__ = (function (){var statearr_189913 = f__44085__auto__.call(null);
(statearr_189913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___189914);

return statearr_189913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___189914,ch))
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
return (function (state_189943){
var state_val_189944 = (state_189943[(1)]);
if((state_val_189944 === (1))){
var inst_189938 = cljs.core.async.timeout.call(null,(3000));
var state_189943__$1 = state_189943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189943__$1,(2),inst_189938);
} else {
if((state_val_189944 === (2))){
var inst_189940 = (state_189943[(2)]);
var inst_189941 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_189943__$1 = (function (){var statearr_189945 = state_189943;
(statearr_189945[(7)] = inst_189940);

return statearr_189945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189943__$1,inst_189941);
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
var statearr_189949 = [null,null,null,null,null,null,null,null];
(statearr_189949[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__);

(statearr_189949[(1)] = (1));

return statearr_189949;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1 = (function (state_189943){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_189943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e189950){if((e189950 instanceof Object)){
var ex__44065__auto__ = e189950;
var statearr_189951_189953 = state_189943;
(statearr_189951_189953[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e189950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__189954 = state_189943;
state_189943 = G__189954;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__ = function(state_189943){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1.call(this,state_189943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_189952 = f__44085__auto__.call(null);
(statearr_189952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_189952;
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
return (function (state_189977){
var state_val_189978 = (state_189977[(1)]);
if((state_val_189978 === (1))){
var inst_189971 = cljs.core.async.timeout.call(null,(2000));
var state_189977__$1 = state_189977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_189977__$1,(2),inst_189971);
} else {
if((state_val_189978 === (2))){
var inst_189973 = (state_189977[(2)]);
var inst_189974 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_189975 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_189974);
var state_189977__$1 = (function (){var statearr_189979 = state_189977;
(statearr_189979[(7)] = inst_189973);

return statearr_189979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_189977__$1,inst_189975);
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
var statearr_189983 = [null,null,null,null,null,null,null,null];
(statearr_189983[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__);

(statearr_189983[(1)] = (1));

return statearr_189983;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1 = (function (state_189977){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_189977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e189984){if((e189984 instanceof Object)){
var ex__44065__auto__ = e189984;
var statearr_189985_189987 = state_189977;
(statearr_189985_189987[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_189977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e189984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__189988 = state_189977;
state_189977 = G__189988;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__ = function(state_189977){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1.call(this,state_189977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,figwheel_version,temp__6753__auto__))
})();
var state__44086__auto__ = (function (){var statearr_189986 = f__44085__auto__.call(null);
(statearr_189986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_189986;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__189989){
var map__189993 = p__189989;
var map__189993__$1 = ((((!((map__189993 == null)))?((((map__189993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__189993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__189993):map__189993);
var file = cljs.core.get.call(null,map__189993__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__189993__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__189993__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__189995 = "";
var G__189995__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__189995),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__189995);
var G__189995__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__189995__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__189995__$1);
if(cljs.core.truth_((function (){var and__39194__auto__ = line;
if(cljs.core.truth_(and__39194__auto__)){
return column;
} else {
return and__39194__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__189995__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__189995__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__189996){
var map__190003 = p__189996;
var map__190003__$1 = ((((!((map__190003 == null)))?((((map__190003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__190003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__190003):map__190003);
var ed = map__190003__$1;
var formatted_exception = cljs.core.get.call(null,map__190003__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__190003__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__190003__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__190005_190009 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__190006_190010 = null;
var count__190007_190011 = (0);
var i__190008_190012 = (0);
while(true){
if((i__190008_190012 < count__190007_190011)){
var msg_190013 = cljs.core._nth.call(null,chunk__190006_190010,i__190008_190012);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_190013);

var G__190014 = seq__190005_190009;
var G__190015 = chunk__190006_190010;
var G__190016 = count__190007_190011;
var G__190017 = (i__190008_190012 + (1));
seq__190005_190009 = G__190014;
chunk__190006_190010 = G__190015;
count__190007_190011 = G__190016;
i__190008_190012 = G__190017;
continue;
} else {
var temp__6753__auto___190018 = cljs.core.seq.call(null,seq__190005_190009);
if(temp__6753__auto___190018){
var seq__190005_190019__$1 = temp__6753__auto___190018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__190005_190019__$1)){
var c__40117__auto___190020 = cljs.core.chunk_first.call(null,seq__190005_190019__$1);
var G__190021 = cljs.core.chunk_rest.call(null,seq__190005_190019__$1);
var G__190022 = c__40117__auto___190020;
var G__190023 = cljs.core.count.call(null,c__40117__auto___190020);
var G__190024 = (0);
seq__190005_190009 = G__190021;
chunk__190006_190010 = G__190022;
count__190007_190011 = G__190023;
i__190008_190012 = G__190024;
continue;
} else {
var msg_190025 = cljs.core.first.call(null,seq__190005_190019__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_190025);

var G__190026 = cljs.core.next.call(null,seq__190005_190019__$1);
var G__190027 = null;
var G__190028 = (0);
var G__190029 = (0);
seq__190005_190009 = G__190026;
chunk__190006_190010 = G__190027;
count__190007_190011 = G__190028;
i__190008_190012 = G__190029;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__190030){
var map__190033 = p__190030;
var map__190033__$1 = ((((!((map__190033 == null)))?((((map__190033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__190033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__190033):map__190033);
var w = map__190033__$1;
var message = cljs.core.get.call(null,map__190033__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__190045 = cljs.core.seq.call(null,plugins);
var chunk__190046 = null;
var count__190047 = (0);
var i__190048 = (0);
while(true){
if((i__190048 < count__190047)){
var vec__190049 = cljs.core._nth.call(null,chunk__190046,i__190048);
var k = cljs.core.nth.call(null,vec__190049,(0),null);
var plugin = cljs.core.nth.call(null,vec__190049,(1),null);
if(cljs.core.truth_(plugin)){
var pl_190055 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__190045,chunk__190046,count__190047,i__190048,pl_190055,vec__190049,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_190055.call(null,msg_hist);
});})(seq__190045,chunk__190046,count__190047,i__190048,pl_190055,vec__190049,k,plugin))
);
} else {
}

var G__190056 = seq__190045;
var G__190057 = chunk__190046;
var G__190058 = count__190047;
var G__190059 = (i__190048 + (1));
seq__190045 = G__190056;
chunk__190046 = G__190057;
count__190047 = G__190058;
i__190048 = G__190059;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__190045);
if(temp__6753__auto__){
var seq__190045__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__190045__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__190045__$1);
var G__190060 = cljs.core.chunk_rest.call(null,seq__190045__$1);
var G__190061 = c__40117__auto__;
var G__190062 = cljs.core.count.call(null,c__40117__auto__);
var G__190063 = (0);
seq__190045 = G__190060;
chunk__190046 = G__190061;
count__190047 = G__190062;
i__190048 = G__190063;
continue;
} else {
var vec__190052 = cljs.core.first.call(null,seq__190045__$1);
var k = cljs.core.nth.call(null,vec__190052,(0),null);
var plugin = cljs.core.nth.call(null,vec__190052,(1),null);
if(cljs.core.truth_(plugin)){
var pl_190064 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__190045,chunk__190046,count__190047,i__190048,pl_190064,vec__190052,k,plugin,seq__190045__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_190064.call(null,msg_hist);
});})(seq__190045,chunk__190046,count__190047,i__190048,pl_190064,vec__190052,k,plugin,seq__190045__$1,temp__6753__auto__))
);
} else {
}

var G__190065 = cljs.core.next.call(null,seq__190045__$1);
var G__190066 = null;
var G__190067 = (0);
var G__190068 = (0);
seq__190045 = G__190065;
chunk__190046 = G__190066;
count__190047 = G__190067;
i__190048 = G__190068;
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
var args190069 = [];
var len__40427__auto___190076 = arguments.length;
var i__40428__auto___190077 = (0);
while(true){
if((i__40428__auto___190077 < len__40427__auto___190076)){
args190069.push((arguments[i__40428__auto___190077]));

var G__190078 = (i__40428__auto___190077 + (1));
i__40428__auto___190077 = G__190078;
continue;
} else {
}
break;
}

var G__190071 = args190069.length;
switch (G__190071) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args190069.length)].join('')));

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

var seq__190072_190080 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__190073_190081 = null;
var count__190074_190082 = (0);
var i__190075_190083 = (0);
while(true){
if((i__190075_190083 < count__190074_190082)){
var msg_190084 = cljs.core._nth.call(null,chunk__190073_190081,i__190075_190083);
figwheel.client.socket.handle_incoming_message.call(null,msg_190084);

var G__190085 = seq__190072_190080;
var G__190086 = chunk__190073_190081;
var G__190087 = count__190074_190082;
var G__190088 = (i__190075_190083 + (1));
seq__190072_190080 = G__190085;
chunk__190073_190081 = G__190086;
count__190074_190082 = G__190087;
i__190075_190083 = G__190088;
continue;
} else {
var temp__6753__auto___190089 = cljs.core.seq.call(null,seq__190072_190080);
if(temp__6753__auto___190089){
var seq__190072_190090__$1 = temp__6753__auto___190089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__190072_190090__$1)){
var c__40117__auto___190091 = cljs.core.chunk_first.call(null,seq__190072_190090__$1);
var G__190092 = cljs.core.chunk_rest.call(null,seq__190072_190090__$1);
var G__190093 = c__40117__auto___190091;
var G__190094 = cljs.core.count.call(null,c__40117__auto___190091);
var G__190095 = (0);
seq__190072_190080 = G__190092;
chunk__190073_190081 = G__190093;
count__190074_190082 = G__190094;
i__190075_190083 = G__190095;
continue;
} else {
var msg_190096 = cljs.core.first.call(null,seq__190072_190090__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_190096);

var G__190097 = cljs.core.next.call(null,seq__190072_190090__$1);
var G__190098 = null;
var G__190099 = (0);
var G__190100 = (0);
seq__190072_190080 = G__190097;
chunk__190073_190081 = G__190098;
count__190074_190082 = G__190099;
i__190075_190083 = G__190100;
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
var len__40427__auto___190105 = arguments.length;
var i__40428__auto___190106 = (0);
while(true){
if((i__40428__auto___190106 < len__40427__auto___190105)){
args__40434__auto__.push((arguments[i__40428__auto___190106]));

var G__190107 = (i__40428__auto___190106 + (1));
i__40428__auto___190106 = G__190107;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__190102){
var map__190103 = p__190102;
var map__190103__$1 = ((((!((map__190103 == null)))?((((map__190103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__190103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__190103):map__190103);
var opts = map__190103__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq190101){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq190101));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e190109){if((e190109 instanceof Error)){
var e = e190109;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e190109;

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
return (function (p__190113){
var map__190114 = p__190113;
var map__190114__$1 = ((((!((map__190114 == null)))?((((map__190114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__190114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__190114):map__190114);
var msg_name = cljs.core.get.call(null,map__190114__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491715074026