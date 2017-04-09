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
var args228025 = [];
var len__40427__auto___228028 = arguments.length;
var i__40428__auto___228029 = (0);
while(true){
if((i__40428__auto___228029 < len__40427__auto___228028)){
args228025.push((arguments[i__40428__auto___228029]));

var G__228030 = (i__40428__auto___228029 + (1));
i__40428__auto___228029 = G__228030;
continue;
} else {
}
break;
}

var G__228027 = args228025.length;
switch (G__228027) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args228025.length)].join('')));

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
var len__40427__auto___228033 = arguments.length;
var i__40428__auto___228034 = (0);
while(true){
if((i__40428__auto___228034 < len__40427__auto___228033)){
args__40434__auto__.push((arguments[i__40428__auto___228034]));

var G__228035 = (i__40428__auto___228034 + (1));
i__40428__auto___228034 = G__228035;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq228032){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228032));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__40434__auto__ = [];
var len__40427__auto___228037 = arguments.length;
var i__40428__auto___228038 = (0);
while(true){
if((i__40428__auto___228038 < len__40427__auto___228037)){
args__40434__auto__.push((arguments[i__40428__auto___228038]));

var G__228039 = (i__40428__auto___228038 + (1));
i__40428__auto___228038 = G__228039;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq228036){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228036));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__228040){
var map__228043 = p__228040;
var map__228043__$1 = ((((!((map__228043 == null)))?((((map__228043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228043):map__228043);
var message = cljs.core.get.call(null,map__228043__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__228043__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__44084__auto___228205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___228205,ch){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___228205,ch){
return (function (state_228174){
var state_val_228175 = (state_228174[(1)]);
if((state_val_228175 === (7))){
var inst_228170 = (state_228174[(2)]);
var state_228174__$1 = state_228174;
var statearr_228176_228206 = state_228174__$1;
(statearr_228176_228206[(2)] = inst_228170);

(statearr_228176_228206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (1))){
var state_228174__$1 = state_228174;
var statearr_228177_228207 = state_228174__$1;
(statearr_228177_228207[(2)] = null);

(statearr_228177_228207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (4))){
var inst_228127 = (state_228174[(7)]);
var inst_228127__$1 = (state_228174[(2)]);
var state_228174__$1 = (function (){var statearr_228178 = state_228174;
(statearr_228178[(7)] = inst_228127__$1);

return statearr_228178;
})();
if(cljs.core.truth_(inst_228127__$1)){
var statearr_228179_228208 = state_228174__$1;
(statearr_228179_228208[(1)] = (5));

} else {
var statearr_228180_228209 = state_228174__$1;
(statearr_228180_228209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (15))){
var inst_228134 = (state_228174[(8)]);
var inst_228149 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_228134);
var inst_228150 = cljs.core.first.call(null,inst_228149);
var inst_228151 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_228150);
var inst_228152 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_228151)].join('');
var inst_228153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_228152);
var state_228174__$1 = state_228174;
var statearr_228181_228210 = state_228174__$1;
(statearr_228181_228210[(2)] = inst_228153);

(statearr_228181_228210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (13))){
var inst_228158 = (state_228174[(2)]);
var state_228174__$1 = state_228174;
var statearr_228182_228211 = state_228174__$1;
(statearr_228182_228211[(2)] = inst_228158);

(statearr_228182_228211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (6))){
var state_228174__$1 = state_228174;
var statearr_228183_228212 = state_228174__$1;
(statearr_228183_228212[(2)] = null);

(statearr_228183_228212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (17))){
var inst_228156 = (state_228174[(2)]);
var state_228174__$1 = state_228174;
var statearr_228184_228213 = state_228174__$1;
(statearr_228184_228213[(2)] = inst_228156);

(statearr_228184_228213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (3))){
var inst_228172 = (state_228174[(2)]);
var state_228174__$1 = state_228174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_228174__$1,inst_228172);
} else {
if((state_val_228175 === (12))){
var inst_228133 = (state_228174[(9)]);
var inst_228147 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_228133,opts);
var state_228174__$1 = state_228174;
if(cljs.core.truth_(inst_228147)){
var statearr_228185_228214 = state_228174__$1;
(statearr_228185_228214[(1)] = (15));

} else {
var statearr_228186_228215 = state_228174__$1;
(statearr_228186_228215[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (2))){
var state_228174__$1 = state_228174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228174__$1,(4),ch);
} else {
if((state_val_228175 === (11))){
var inst_228134 = (state_228174[(8)]);
var inst_228139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_228140 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_228134);
var inst_228141 = cljs.core.async.timeout.call(null,(1000));
var inst_228142 = [inst_228140,inst_228141];
var inst_228143 = (new cljs.core.PersistentVector(null,2,(5),inst_228139,inst_228142,null));
var state_228174__$1 = state_228174;
return cljs.core.async.ioc_alts_BANG_.call(null,state_228174__$1,(14),inst_228143);
} else {
if((state_val_228175 === (9))){
var inst_228134 = (state_228174[(8)]);
var inst_228160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_228161 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_228134);
var inst_228162 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_228161);
var inst_228163 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_228162)].join('');
var inst_228164 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_228163);
var state_228174__$1 = (function (){var statearr_228187 = state_228174;
(statearr_228187[(10)] = inst_228160);

return statearr_228187;
})();
var statearr_228188_228216 = state_228174__$1;
(statearr_228188_228216[(2)] = inst_228164);

(statearr_228188_228216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (5))){
var inst_228127 = (state_228174[(7)]);
var inst_228129 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_228130 = (new cljs.core.PersistentArrayMap(null,2,inst_228129,null));
var inst_228131 = (new cljs.core.PersistentHashSet(null,inst_228130,null));
var inst_228132 = figwheel.client.focus_msgs.call(null,inst_228131,inst_228127);
var inst_228133 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_228132);
var inst_228134 = cljs.core.first.call(null,inst_228132);
var inst_228135 = figwheel.client.autoload_QMARK_.call(null);
var state_228174__$1 = (function (){var statearr_228189 = state_228174;
(statearr_228189[(8)] = inst_228134);

(statearr_228189[(9)] = inst_228133);

return statearr_228189;
})();
if(cljs.core.truth_(inst_228135)){
var statearr_228190_228217 = state_228174__$1;
(statearr_228190_228217[(1)] = (8));

} else {
var statearr_228191_228218 = state_228174__$1;
(statearr_228191_228218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (14))){
var inst_228145 = (state_228174[(2)]);
var state_228174__$1 = state_228174;
var statearr_228192_228219 = state_228174__$1;
(statearr_228192_228219[(2)] = inst_228145);

(statearr_228192_228219[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (16))){
var state_228174__$1 = state_228174;
var statearr_228193_228220 = state_228174__$1;
(statearr_228193_228220[(2)] = null);

(statearr_228193_228220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (10))){
var inst_228166 = (state_228174[(2)]);
var state_228174__$1 = (function (){var statearr_228194 = state_228174;
(statearr_228194[(11)] = inst_228166);

return statearr_228194;
})();
var statearr_228195_228221 = state_228174__$1;
(statearr_228195_228221[(2)] = null);

(statearr_228195_228221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228175 === (8))){
var inst_228133 = (state_228174[(9)]);
var inst_228137 = figwheel.client.reload_file_state_QMARK_.call(null,inst_228133,opts);
var state_228174__$1 = state_228174;
if(cljs.core.truth_(inst_228137)){
var statearr_228196_228222 = state_228174__$1;
(statearr_228196_228222[(1)] = (11));

} else {
var statearr_228197_228223 = state_228174__$1;
(statearr_228197_228223[(1)] = (12));

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
});})(c__44084__auto___228205,ch))
;
return ((function (switch__44061__auto__,c__44084__auto___228205,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0 = (function (){
var statearr_228201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_228201[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__);

(statearr_228201[(1)] = (1));

return statearr_228201;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1 = (function (state_228174){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_228174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e228202){if((e228202 instanceof Object)){
var ex__44065__auto__ = e228202;
var statearr_228203_228224 = state_228174;
(statearr_228203_228224[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_228174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e228202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__228225 = state_228174;
state_228174 = G__228225;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__ = function(state_228174){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1.call(this,state_228174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44062__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___228205,ch))
})();
var state__44086__auto__ = (function (){var statearr_228204 = f__44085__auto__.call(null);
(statearr_228204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___228205);

return statearr_228204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___228205,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__228226_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__228226_SHARP_));
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
var base_path_228229 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_228229){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e228228){if((e228228 instanceof Error)){
var e = e228228;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_228229], null));
} else {
var e = e228228;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_228229))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__228230){
var map__228239 = p__228230;
var map__228239__$1 = ((((!((map__228239 == null)))?((((map__228239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228239):map__228239);
var opts = map__228239__$1;
var build_id = cljs.core.get.call(null,map__228239__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__228239,map__228239__$1,opts,build_id){
return (function (p__228241){
var vec__228242 = p__228241;
var seq__228243 = cljs.core.seq.call(null,vec__228242);
var first__228244 = cljs.core.first.call(null,seq__228243);
var seq__228243__$1 = cljs.core.next.call(null,seq__228243);
var map__228245 = first__228244;
var map__228245__$1 = ((((!((map__228245 == null)))?((((map__228245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228245):map__228245);
var msg = map__228245__$1;
var msg_name = cljs.core.get.call(null,map__228245__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__228243__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__228242,seq__228243,first__228244,seq__228243__$1,map__228245,map__228245__$1,msg,msg_name,_,map__228239,map__228239__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__228242,seq__228243,first__228244,seq__228243__$1,map__228245,map__228245__$1,msg,msg_name,_,map__228239,map__228239__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__228239,map__228239__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__228253){
var vec__228254 = p__228253;
var seq__228255 = cljs.core.seq.call(null,vec__228254);
var first__228256 = cljs.core.first.call(null,seq__228255);
var seq__228255__$1 = cljs.core.next.call(null,seq__228255);
var map__228257 = first__228256;
var map__228257__$1 = ((((!((map__228257 == null)))?((((map__228257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228257):map__228257);
var msg = map__228257__$1;
var msg_name = cljs.core.get.call(null,map__228257__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__228255__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__228259){
var map__228271 = p__228259;
var map__228271__$1 = ((((!((map__228271 == null)))?((((map__228271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228271):map__228271);
var on_compile_warning = cljs.core.get.call(null,map__228271__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__228271__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__228271,map__228271__$1,on_compile_warning,on_compile_fail){
return (function (p__228273){
var vec__228274 = p__228273;
var seq__228275 = cljs.core.seq.call(null,vec__228274);
var first__228276 = cljs.core.first.call(null,seq__228275);
var seq__228275__$1 = cljs.core.next.call(null,seq__228275);
var map__228277 = first__228276;
var map__228277__$1 = ((((!((map__228277 == null)))?((((map__228277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228277):map__228277);
var msg = map__228277__$1;
var msg_name = cljs.core.get.call(null,map__228277__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__228275__$1;
var pred__228279 = cljs.core._EQ_;
var expr__228280 = msg_name;
if(cljs.core.truth_(pred__228279.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__228280))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__228279.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__228280))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__228271,map__228271__$1,on_compile_warning,on_compile_fail))
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
return (function (state_228508){
var state_val_228509 = (state_228508[(1)]);
if((state_val_228509 === (7))){
var inst_228428 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
if(cljs.core.truth_(inst_228428)){
var statearr_228510_228560 = state_228508__$1;
(statearr_228510_228560[(1)] = (8));

} else {
var statearr_228511_228561 = state_228508__$1;
(statearr_228511_228561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (20))){
var inst_228502 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228512_228562 = state_228508__$1;
(statearr_228512_228562[(2)] = inst_228502);

(statearr_228512_228562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (27))){
var inst_228498 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228513_228563 = state_228508__$1;
(statearr_228513_228563[(2)] = inst_228498);

(statearr_228513_228563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (1))){
var inst_228421 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_228508__$1 = state_228508;
if(cljs.core.truth_(inst_228421)){
var statearr_228514_228564 = state_228508__$1;
(statearr_228514_228564[(1)] = (2));

} else {
var statearr_228515_228565 = state_228508__$1;
(statearr_228515_228565[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (24))){
var inst_228500 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228516_228566 = state_228508__$1;
(statearr_228516_228566[(2)] = inst_228500);

(statearr_228516_228566[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (4))){
var inst_228506 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_228508__$1,inst_228506);
} else {
if((state_val_228509 === (15))){
var inst_228504 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228517_228567 = state_228508__$1;
(statearr_228517_228567[(2)] = inst_228504);

(statearr_228517_228567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (21))){
var inst_228457 = (state_228508[(2)]);
var inst_228458 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228459 = figwheel.client.auto_jump_to_error.call(null,opts,inst_228458);
var state_228508__$1 = (function (){var statearr_228518 = state_228508;
(statearr_228518[(7)] = inst_228457);

return statearr_228518;
})();
var statearr_228519_228568 = state_228508__$1;
(statearr_228519_228568[(2)] = inst_228459);

(statearr_228519_228568[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (31))){
var inst_228487 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_228508__$1 = state_228508;
if(cljs.core.truth_(inst_228487)){
var statearr_228520_228569 = state_228508__$1;
(statearr_228520_228569[(1)] = (34));

} else {
var statearr_228521_228570 = state_228508__$1;
(statearr_228521_228570[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (32))){
var inst_228496 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228522_228571 = state_228508__$1;
(statearr_228522_228571[(2)] = inst_228496);

(statearr_228522_228571[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (33))){
var inst_228483 = (state_228508[(2)]);
var inst_228484 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228485 = figwheel.client.auto_jump_to_error.call(null,opts,inst_228484);
var state_228508__$1 = (function (){var statearr_228523 = state_228508;
(statearr_228523[(8)] = inst_228483);

return statearr_228523;
})();
var statearr_228524_228572 = state_228508__$1;
(statearr_228524_228572[(2)] = inst_228485);

(statearr_228524_228572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (13))){
var inst_228442 = figwheel.client.heads_up.clear.call(null);
var state_228508__$1 = state_228508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(16),inst_228442);
} else {
if((state_val_228509 === (22))){
var inst_228463 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228464 = figwheel.client.heads_up.append_warning_message.call(null,inst_228463);
var state_228508__$1 = state_228508;
var statearr_228525_228573 = state_228508__$1;
(statearr_228525_228573[(2)] = inst_228464);

(statearr_228525_228573[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (36))){
var inst_228494 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228526_228574 = state_228508__$1;
(statearr_228526_228574[(2)] = inst_228494);

(statearr_228526_228574[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (29))){
var inst_228474 = (state_228508[(2)]);
var inst_228475 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228476 = figwheel.client.auto_jump_to_error.call(null,opts,inst_228475);
var state_228508__$1 = (function (){var statearr_228527 = state_228508;
(statearr_228527[(9)] = inst_228474);

return statearr_228527;
})();
var statearr_228528_228575 = state_228508__$1;
(statearr_228528_228575[(2)] = inst_228476);

(statearr_228528_228575[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (6))){
var inst_228423 = (state_228508[(10)]);
var state_228508__$1 = state_228508;
var statearr_228529_228576 = state_228508__$1;
(statearr_228529_228576[(2)] = inst_228423);

(statearr_228529_228576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (28))){
var inst_228470 = (state_228508[(2)]);
var inst_228471 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228472 = figwheel.client.heads_up.display_warning.call(null,inst_228471);
var state_228508__$1 = (function (){var statearr_228530 = state_228508;
(statearr_228530[(11)] = inst_228470);

return statearr_228530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(29),inst_228472);
} else {
if((state_val_228509 === (25))){
var inst_228468 = figwheel.client.heads_up.clear.call(null);
var state_228508__$1 = state_228508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(28),inst_228468);
} else {
if((state_val_228509 === (34))){
var inst_228489 = figwheel.client.heads_up.flash_loaded.call(null);
var state_228508__$1 = state_228508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(37),inst_228489);
} else {
if((state_val_228509 === (17))){
var inst_228448 = (state_228508[(2)]);
var inst_228449 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228450 = figwheel.client.auto_jump_to_error.call(null,opts,inst_228449);
var state_228508__$1 = (function (){var statearr_228531 = state_228508;
(statearr_228531[(12)] = inst_228448);

return statearr_228531;
})();
var statearr_228532_228577 = state_228508__$1;
(statearr_228532_228577[(2)] = inst_228450);

(statearr_228532_228577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (3))){
var inst_228440 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_228508__$1 = state_228508;
if(cljs.core.truth_(inst_228440)){
var statearr_228533_228578 = state_228508__$1;
(statearr_228533_228578[(1)] = (13));

} else {
var statearr_228534_228579 = state_228508__$1;
(statearr_228534_228579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (12))){
var inst_228436 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228535_228580 = state_228508__$1;
(statearr_228535_228580[(2)] = inst_228436);

(statearr_228535_228580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (2))){
var inst_228423 = (state_228508[(10)]);
var inst_228423__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_228508__$1 = (function (){var statearr_228536 = state_228508;
(statearr_228536[(10)] = inst_228423__$1);

return statearr_228536;
})();
if(cljs.core.truth_(inst_228423__$1)){
var statearr_228537_228581 = state_228508__$1;
(statearr_228537_228581[(1)] = (5));

} else {
var statearr_228538_228582 = state_228508__$1;
(statearr_228538_228582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (23))){
var inst_228466 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_228508__$1 = state_228508;
if(cljs.core.truth_(inst_228466)){
var statearr_228539_228583 = state_228508__$1;
(statearr_228539_228583[(1)] = (25));

} else {
var statearr_228540_228584 = state_228508__$1;
(statearr_228540_228584[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (35))){
var state_228508__$1 = state_228508;
var statearr_228541_228585 = state_228508__$1;
(statearr_228541_228585[(2)] = null);

(statearr_228541_228585[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (19))){
var inst_228461 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_228508__$1 = state_228508;
if(cljs.core.truth_(inst_228461)){
var statearr_228542_228586 = state_228508__$1;
(statearr_228542_228586[(1)] = (22));

} else {
var statearr_228543_228587 = state_228508__$1;
(statearr_228543_228587[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (11))){
var inst_228432 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228544_228588 = state_228508__$1;
(statearr_228544_228588[(2)] = inst_228432);

(statearr_228544_228588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (9))){
var inst_228434 = figwheel.client.heads_up.clear.call(null);
var state_228508__$1 = state_228508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(12),inst_228434);
} else {
if((state_val_228509 === (5))){
var inst_228425 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_228508__$1 = state_228508;
var statearr_228545_228589 = state_228508__$1;
(statearr_228545_228589[(2)] = inst_228425);

(statearr_228545_228589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (14))){
var inst_228452 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_228508__$1 = state_228508;
if(cljs.core.truth_(inst_228452)){
var statearr_228546_228590 = state_228508__$1;
(statearr_228546_228590[(1)] = (18));

} else {
var statearr_228547_228591 = state_228508__$1;
(statearr_228547_228591[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (26))){
var inst_228478 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_228508__$1 = state_228508;
if(cljs.core.truth_(inst_228478)){
var statearr_228548_228592 = state_228508__$1;
(statearr_228548_228592[(1)] = (30));

} else {
var statearr_228549_228593 = state_228508__$1;
(statearr_228549_228593[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (16))){
var inst_228444 = (state_228508[(2)]);
var inst_228445 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228446 = figwheel.client.heads_up.display_exception.call(null,inst_228445);
var state_228508__$1 = (function (){var statearr_228550 = state_228508;
(statearr_228550[(13)] = inst_228444);

return statearr_228550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(17),inst_228446);
} else {
if((state_val_228509 === (30))){
var inst_228480 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228481 = figwheel.client.heads_up.display_warning.call(null,inst_228480);
var state_228508__$1 = state_228508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(33),inst_228481);
} else {
if((state_val_228509 === (10))){
var inst_228438 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228551_228594 = state_228508__$1;
(statearr_228551_228594[(2)] = inst_228438);

(statearr_228551_228594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (18))){
var inst_228454 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_228455 = figwheel.client.heads_up.display_exception.call(null,inst_228454);
var state_228508__$1 = state_228508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(21),inst_228455);
} else {
if((state_val_228509 === (37))){
var inst_228491 = (state_228508[(2)]);
var state_228508__$1 = state_228508;
var statearr_228552_228595 = state_228508__$1;
(statearr_228552_228595[(2)] = inst_228491);

(statearr_228552_228595[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228509 === (8))){
var inst_228430 = figwheel.client.heads_up.flash_loaded.call(null);
var state_228508__$1 = state_228508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228508__$1,(11),inst_228430);
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
var statearr_228556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_228556[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__);

(statearr_228556[(1)] = (1));

return statearr_228556;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1 = (function (state_228508){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_228508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e228557){if((e228557 instanceof Object)){
var ex__44065__auto__ = e228557;
var statearr_228558_228596 = state_228508;
(statearr_228558_228596[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_228508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e228557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__228597 = state_228508;
state_228508 = G__228597;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__ = function(state_228508){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1.call(this,state_228508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,msg_hist,msg_names,msg))
})();
var state__44086__auto__ = (function (){var statearr_228559 = f__44085__auto__.call(null);
(statearr_228559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_228559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,msg_hist,msg_names,msg))
);

return c__44084__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44084__auto___228660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___228660,ch){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___228660,ch){
return (function (state_228643){
var state_val_228644 = (state_228643[(1)]);
if((state_val_228644 === (1))){
var state_228643__$1 = state_228643;
var statearr_228645_228661 = state_228643__$1;
(statearr_228645_228661[(2)] = null);

(statearr_228645_228661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228644 === (2))){
var state_228643__$1 = state_228643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228643__$1,(4),ch);
} else {
if((state_val_228644 === (3))){
var inst_228641 = (state_228643[(2)]);
var state_228643__$1 = state_228643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_228643__$1,inst_228641);
} else {
if((state_val_228644 === (4))){
var inst_228631 = (state_228643[(7)]);
var inst_228631__$1 = (state_228643[(2)]);
var state_228643__$1 = (function (){var statearr_228646 = state_228643;
(statearr_228646[(7)] = inst_228631__$1);

return statearr_228646;
})();
if(cljs.core.truth_(inst_228631__$1)){
var statearr_228647_228662 = state_228643__$1;
(statearr_228647_228662[(1)] = (5));

} else {
var statearr_228648_228663 = state_228643__$1;
(statearr_228648_228663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228644 === (5))){
var inst_228631 = (state_228643[(7)]);
var inst_228633 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_228631);
var state_228643__$1 = state_228643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228643__$1,(8),inst_228633);
} else {
if((state_val_228644 === (6))){
var state_228643__$1 = state_228643;
var statearr_228649_228664 = state_228643__$1;
(statearr_228649_228664[(2)] = null);

(statearr_228649_228664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228644 === (7))){
var inst_228639 = (state_228643[(2)]);
var state_228643__$1 = state_228643;
var statearr_228650_228665 = state_228643__$1;
(statearr_228650_228665[(2)] = inst_228639);

(statearr_228650_228665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_228644 === (8))){
var inst_228635 = (state_228643[(2)]);
var state_228643__$1 = (function (){var statearr_228651 = state_228643;
(statearr_228651[(8)] = inst_228635);

return statearr_228651;
})();
var statearr_228652_228666 = state_228643__$1;
(statearr_228652_228666[(2)] = null);

(statearr_228652_228666[(1)] = (2));


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
});})(c__44084__auto___228660,ch))
;
return ((function (switch__44061__auto__,c__44084__auto___228660,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0 = (function (){
var statearr_228656 = [null,null,null,null,null,null,null,null,null];
(statearr_228656[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44062__auto__);

(statearr_228656[(1)] = (1));

return statearr_228656;
});
var figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1 = (function (state_228643){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_228643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e228657){if((e228657 instanceof Object)){
var ex__44065__auto__ = e228657;
var statearr_228658_228667 = state_228643;
(statearr_228658_228667[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_228643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e228657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__228668 = state_228643;
state_228643 = G__228668;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__ = function(state_228643){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1.call(this,state_228643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44062__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44062__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___228660,ch))
})();
var state__44086__auto__ = (function (){var statearr_228659 = f__44085__auto__.call(null);
(statearr_228659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___228660);

return statearr_228659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___228660,ch))
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
return (function (state_228689){
var state_val_228690 = (state_228689[(1)]);
if((state_val_228690 === (1))){
var inst_228684 = cljs.core.async.timeout.call(null,(3000));
var state_228689__$1 = state_228689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228689__$1,(2),inst_228684);
} else {
if((state_val_228690 === (2))){
var inst_228686 = (state_228689[(2)]);
var inst_228687 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_228689__$1 = (function (){var statearr_228691 = state_228689;
(statearr_228691[(7)] = inst_228686);

return statearr_228691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_228689__$1,inst_228687);
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
var statearr_228695 = [null,null,null,null,null,null,null,null];
(statearr_228695[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__);

(statearr_228695[(1)] = (1));

return statearr_228695;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1 = (function (state_228689){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_228689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e228696){if((e228696 instanceof Object)){
var ex__44065__auto__ = e228696;
var statearr_228697_228699 = state_228689;
(statearr_228697_228699[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_228689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e228696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__228700 = state_228689;
state_228689 = G__228700;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__ = function(state_228689){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1.call(this,state_228689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44062__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_228698 = f__44085__auto__.call(null);
(statearr_228698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_228698;
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
return (function (state_228723){
var state_val_228724 = (state_228723[(1)]);
if((state_val_228724 === (1))){
var inst_228717 = cljs.core.async.timeout.call(null,(2000));
var state_228723__$1 = state_228723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_228723__$1,(2),inst_228717);
} else {
if((state_val_228724 === (2))){
var inst_228719 = (state_228723[(2)]);
var inst_228720 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_228721 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_228720);
var state_228723__$1 = (function (){var statearr_228725 = state_228723;
(statearr_228725[(7)] = inst_228719);

return statearr_228725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_228723__$1,inst_228721);
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
var statearr_228729 = [null,null,null,null,null,null,null,null];
(statearr_228729[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__);

(statearr_228729[(1)] = (1));

return statearr_228729;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1 = (function (state_228723){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_228723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e228730){if((e228730 instanceof Object)){
var ex__44065__auto__ = e228730;
var statearr_228731_228733 = state_228723;
(statearr_228731_228733[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_228723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e228730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__228734 = state_228723;
state_228723 = G__228734;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__ = function(state_228723){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1.call(this,state_228723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,figwheel_version,temp__6753__auto__))
})();
var state__44086__auto__ = (function (){var statearr_228732 = f__44085__auto__.call(null);
(statearr_228732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_228732;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__228735){
var map__228739 = p__228735;
var map__228739__$1 = ((((!((map__228739 == null)))?((((map__228739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228739):map__228739);
var file = cljs.core.get.call(null,map__228739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__228739__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__228739__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__228741 = "";
var G__228741__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__228741),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__228741);
var G__228741__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__228741__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__228741__$1);
if(cljs.core.truth_((function (){var and__39194__auto__ = line;
if(cljs.core.truth_(and__39194__auto__)){
return column;
} else {
return and__39194__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__228741__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__228741__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__228742){
var map__228749 = p__228742;
var map__228749__$1 = ((((!((map__228749 == null)))?((((map__228749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228749):map__228749);
var ed = map__228749__$1;
var formatted_exception = cljs.core.get.call(null,map__228749__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__228749__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__228749__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__228751_228755 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__228752_228756 = null;
var count__228753_228757 = (0);
var i__228754_228758 = (0);
while(true){
if((i__228754_228758 < count__228753_228757)){
var msg_228759 = cljs.core._nth.call(null,chunk__228752_228756,i__228754_228758);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_228759);

var G__228760 = seq__228751_228755;
var G__228761 = chunk__228752_228756;
var G__228762 = count__228753_228757;
var G__228763 = (i__228754_228758 + (1));
seq__228751_228755 = G__228760;
chunk__228752_228756 = G__228761;
count__228753_228757 = G__228762;
i__228754_228758 = G__228763;
continue;
} else {
var temp__6753__auto___228764 = cljs.core.seq.call(null,seq__228751_228755);
if(temp__6753__auto___228764){
var seq__228751_228765__$1 = temp__6753__auto___228764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__228751_228765__$1)){
var c__40117__auto___228766 = cljs.core.chunk_first.call(null,seq__228751_228765__$1);
var G__228767 = cljs.core.chunk_rest.call(null,seq__228751_228765__$1);
var G__228768 = c__40117__auto___228766;
var G__228769 = cljs.core.count.call(null,c__40117__auto___228766);
var G__228770 = (0);
seq__228751_228755 = G__228767;
chunk__228752_228756 = G__228768;
count__228753_228757 = G__228769;
i__228754_228758 = G__228770;
continue;
} else {
var msg_228771 = cljs.core.first.call(null,seq__228751_228765__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_228771);

var G__228772 = cljs.core.next.call(null,seq__228751_228765__$1);
var G__228773 = null;
var G__228774 = (0);
var G__228775 = (0);
seq__228751_228755 = G__228772;
chunk__228752_228756 = G__228773;
count__228753_228757 = G__228774;
i__228754_228758 = G__228775;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__228776){
var map__228779 = p__228776;
var map__228779__$1 = ((((!((map__228779 == null)))?((((map__228779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228779):map__228779);
var w = map__228779__$1;
var message = cljs.core.get.call(null,map__228779__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__228791 = cljs.core.seq.call(null,plugins);
var chunk__228792 = null;
var count__228793 = (0);
var i__228794 = (0);
while(true){
if((i__228794 < count__228793)){
var vec__228795 = cljs.core._nth.call(null,chunk__228792,i__228794);
var k = cljs.core.nth.call(null,vec__228795,(0),null);
var plugin = cljs.core.nth.call(null,vec__228795,(1),null);
if(cljs.core.truth_(plugin)){
var pl_228801 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__228791,chunk__228792,count__228793,i__228794,pl_228801,vec__228795,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_228801.call(null,msg_hist);
});})(seq__228791,chunk__228792,count__228793,i__228794,pl_228801,vec__228795,k,plugin))
);
} else {
}

var G__228802 = seq__228791;
var G__228803 = chunk__228792;
var G__228804 = count__228793;
var G__228805 = (i__228794 + (1));
seq__228791 = G__228802;
chunk__228792 = G__228803;
count__228793 = G__228804;
i__228794 = G__228805;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__228791);
if(temp__6753__auto__){
var seq__228791__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__228791__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__228791__$1);
var G__228806 = cljs.core.chunk_rest.call(null,seq__228791__$1);
var G__228807 = c__40117__auto__;
var G__228808 = cljs.core.count.call(null,c__40117__auto__);
var G__228809 = (0);
seq__228791 = G__228806;
chunk__228792 = G__228807;
count__228793 = G__228808;
i__228794 = G__228809;
continue;
} else {
var vec__228798 = cljs.core.first.call(null,seq__228791__$1);
var k = cljs.core.nth.call(null,vec__228798,(0),null);
var plugin = cljs.core.nth.call(null,vec__228798,(1),null);
if(cljs.core.truth_(plugin)){
var pl_228810 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__228791,chunk__228792,count__228793,i__228794,pl_228810,vec__228798,k,plugin,seq__228791__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_228810.call(null,msg_hist);
});})(seq__228791,chunk__228792,count__228793,i__228794,pl_228810,vec__228798,k,plugin,seq__228791__$1,temp__6753__auto__))
);
} else {
}

var G__228811 = cljs.core.next.call(null,seq__228791__$1);
var G__228812 = null;
var G__228813 = (0);
var G__228814 = (0);
seq__228791 = G__228811;
chunk__228792 = G__228812;
count__228793 = G__228813;
i__228794 = G__228814;
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
var args228815 = [];
var len__40427__auto___228822 = arguments.length;
var i__40428__auto___228823 = (0);
while(true){
if((i__40428__auto___228823 < len__40427__auto___228822)){
args228815.push((arguments[i__40428__auto___228823]));

var G__228824 = (i__40428__auto___228823 + (1));
i__40428__auto___228823 = G__228824;
continue;
} else {
}
break;
}

var G__228817 = args228815.length;
switch (G__228817) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args228815.length)].join('')));

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

var seq__228818_228826 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__228819_228827 = null;
var count__228820_228828 = (0);
var i__228821_228829 = (0);
while(true){
if((i__228821_228829 < count__228820_228828)){
var msg_228830 = cljs.core._nth.call(null,chunk__228819_228827,i__228821_228829);
figwheel.client.socket.handle_incoming_message.call(null,msg_228830);

var G__228831 = seq__228818_228826;
var G__228832 = chunk__228819_228827;
var G__228833 = count__228820_228828;
var G__228834 = (i__228821_228829 + (1));
seq__228818_228826 = G__228831;
chunk__228819_228827 = G__228832;
count__228820_228828 = G__228833;
i__228821_228829 = G__228834;
continue;
} else {
var temp__6753__auto___228835 = cljs.core.seq.call(null,seq__228818_228826);
if(temp__6753__auto___228835){
var seq__228818_228836__$1 = temp__6753__auto___228835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__228818_228836__$1)){
var c__40117__auto___228837 = cljs.core.chunk_first.call(null,seq__228818_228836__$1);
var G__228838 = cljs.core.chunk_rest.call(null,seq__228818_228836__$1);
var G__228839 = c__40117__auto___228837;
var G__228840 = cljs.core.count.call(null,c__40117__auto___228837);
var G__228841 = (0);
seq__228818_228826 = G__228838;
chunk__228819_228827 = G__228839;
count__228820_228828 = G__228840;
i__228821_228829 = G__228841;
continue;
} else {
var msg_228842 = cljs.core.first.call(null,seq__228818_228836__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_228842);

var G__228843 = cljs.core.next.call(null,seq__228818_228836__$1);
var G__228844 = null;
var G__228845 = (0);
var G__228846 = (0);
seq__228818_228826 = G__228843;
chunk__228819_228827 = G__228844;
count__228820_228828 = G__228845;
i__228821_228829 = G__228846;
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
var len__40427__auto___228851 = arguments.length;
var i__40428__auto___228852 = (0);
while(true){
if((i__40428__auto___228852 < len__40427__auto___228851)){
args__40434__auto__.push((arguments[i__40428__auto___228852]));

var G__228853 = (i__40428__auto___228852 + (1));
i__40428__auto___228852 = G__228853;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__228848){
var map__228849 = p__228848;
var map__228849__$1 = ((((!((map__228849 == null)))?((((map__228849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228849):map__228849);
var opts = map__228849__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq228847){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq228847));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e228855){if((e228855 instanceof Error)){
var e = e228855;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e228855;

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
return (function (p__228859){
var map__228860 = p__228859;
var map__228860__$1 = ((((!((map__228860 == null)))?((((map__228860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__228860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__228860):map__228860);
var msg_name = cljs.core.get.call(null,map__228860__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491715148514