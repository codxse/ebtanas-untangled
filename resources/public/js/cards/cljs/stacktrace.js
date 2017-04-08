// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__35586__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35587__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35588__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35589__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35590__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__,hierarchy__35590__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__,hierarchy__35590__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35590__auto__,method_table__35586__auto__,prefer_table__35587__auto__,method_cache__35588__auto__,cached_hierarchy__35589__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__34555__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__91969 = cljs.core.reduce.call(null,((function (xs){
return (function (p__91975,p__91976){
var vec__91977 = p__91975;
var pre = cljs.core.nth.call(null,vec__91977,(0),null);
var post = cljs.core.nth.call(null,vec__91977,(1),null);
var vec__91980 = p__91976;
var x = cljs.core.nth.call(null,vec__91980,(0),null);
var i = cljs.core.nth.call(null,vec__91980,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__91969,(0),null);
var vec__91972 = cljs.core.nth.call(null,vec__91969,(1),null);
var line = cljs.core.nth.call(null,vec__91972,(0),null);
var column = cljs.core.nth.call(null,vec__91972,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__91983 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__91983,"(","");
} else {
return G__91983;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__91984 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__91984,")","");
} else {
return G__91984;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__91985 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__91985,")","");
} else {
return G__91985;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__91986,file,p__91987){
var map__91992 = p__91986;
var map__91992__$1 = ((((!((map__91992 == null)))?((((map__91992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91992):map__91992);
var repl_env = map__91992__$1;
var host = cljs.core.get.call(null,map__91992__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__91992__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__91992__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__91993 = p__91987;
var map__91993__$1 = ((((!((map__91993 == null)))?((((map__91993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91993):map__91993);
var opts = map__91993__$1;
var asset_path = cljs.core.get.call(null,map__91993__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__34555__auto__ = host_port;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return port;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__34555__auto__ = (function (){var and__34543__auto__ = asset_path;
if(cljs.core.truth_(and__34543__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('')),"");
} else {
var temp__6751__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__6751__auto__)){
var asset_root = temp__6751__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Could not relativize URL "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__92002 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__92002,(0),null);
var flc = cljs.core.nth.call(null,vec__92002,(1),null);
var vec__92005 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__92005,(0),null);
var line = cljs.core.nth.call(null,vec__92005,(1),null);
var column = cljs.core.nth.call(null,vec__92005,(2),null);
if(cljs.core.truth_((function (){var and__34543__auto__ = file;
if(cljs.core.truth_(and__34543__auto__)){
var and__34543__auto____$1 = function$;
if(cljs.core.truth_(and__34543__auto____$1)){
var and__34543__auto____$2 = line;
if(cljs.core.truth_(and__34543__auto____$2)){
return column;
} else {
return and__34543__auto____$2;
}
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__92010_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__92010_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__92009_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__92009_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__92008_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__92008_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__92017 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__92017,(0),null);
var flc = cljs.core.nth.call(null,vec__92017,(1),null);
var vec__92020 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__92020,(0),null);
var line = cljs.core.nth.call(null,vec__92020,(1),null);
var column = cljs.core.nth.call(null,vec__92020,(2),null);
if(cljs.core.truth_((function (){var and__34543__auto__ = file;
if(cljs.core.truth_(and__34543__auto__)){
var and__34543__auto____$1 = function$;
if(cljs.core.truth_(and__34543__auto____$1)){
var and__34543__auto____$2 = line;
if(cljs.core.truth_(and__34543__auto____$2)){
return column;
} else {
return and__34543__auto____$2;
}
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__92025_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__92025_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__92024_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__92024_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__92023_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__92023_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__92032 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__92032,(0),null);
var flc = cljs.core.nth.call(null,vec__92032,(1),null);
var vec__92035 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__92035,(0),null);
var line = cljs.core.nth.call(null,vec__92035,(1),null);
var column = cljs.core.nth.call(null,vec__92035,(2),null);
if(cljs.core.truth_((function (){var and__34543__auto__ = file;
if(cljs.core.truth_(and__34543__auto__)){
var and__34543__auto____$1 = function$;
if(cljs.core.truth_(and__34543__auto____$1)){
var and__34543__auto____$2 = line;
if(cljs.core.truth_(and__34543__auto____$2)){
return column;
} else {
return and__34543__auto____$2;
}
} else {
return and__34543__auto____$1;
}
} else {
return and__34543__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__92040_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__92040_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__92039_SHARP_){
return cljs.core._EQ_.call(null,p1__92039_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__92038_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__92038_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__92041){
var map__92042 = p__92041;
var map__92042__$1 = ((((!((map__92042 == null)))?((((map__92042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92042):map__92042);
var opts = map__92042__$1;
var output_dir = cljs.core.get.call(null,map__92042__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__92042,map__92042__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__92062 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__92062,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__92062,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__92065 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__92065,(0),null);
var function$ = cljs.core.nth.call(null,vec__92065,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__34543__auto__ = line;
if(cljs.core.truth_(and__34543__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__34543__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__92042,map__92042__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__92068){
var map__92069 = p__92068;
var map__92069__$1 = ((((!((map__92069 == null)))?((((map__92069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92069):map__92069);
var opts = map__92069__$1;
var output_dir = cljs.core.get.call(null,map__92069__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__92069,map__92069__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__92089 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__92089,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__92089,(1),null);
var vec__92092 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__92092,(0),null);
var line_part = cljs.core.nth.call(null,vec__92092,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__34543__auto__ = line_part;
if(cljs.core.truth_(and__34543__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__34543__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__92069,map__92069__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__92095){
var map__92096 = p__92095;
var map__92096__$1 = ((((!((map__92096 == null)))?((((map__92096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92096):map__92096);
var opts = map__92096__$1;
var output_dir = cljs.core.get.call(null,map__92096__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__92096,map__92096__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__34543__auto__ = x;
if(cljs.core.truth_(and__34543__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__34543__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});})(map__92096,map__92096__$1,opts,output_dir))
;
var process_frame = ((function (map__92096,map__92096__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__92119 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__92119,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__92119,(1),null);
var vec__92122 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__92122,(0),null);
var line_part = cljs.core.nth.call(null,vec__92122,(1),null);
var col_part = cljs.core.nth.call(null,vec__92122,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__92125 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__92125,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join(''),"");
} else {
return G__92125;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});})(map__92096,map__92096__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__34555__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__92126_SHARP_){
return (p1__92126_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__92127_SHARP_,p2__92128_SHARP_){
return p1__92127_SHARP_.call(null,p2__92128_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__6751__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__6751__auto__)){
var columns = temp__6751__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__92129,sms,opts){
var map__92135 = p__92129;
var map__92135__$1 = ((((!((map__92135 == null)))?((((map__92135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92135):map__92135);
var function$ = cljs.core.get.call(null,map__92135__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__92135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__92135__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__92135__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__92137 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__92137,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__92137,(1),null);
var call = cljs.core.nth.call(null,vec__92137,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("NO_SOURCE_FILE"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args92142 = [];
var len__35776__auto___92145 = arguments.length;
var i__35777__auto___92146 = (0);
while(true){
if((i__35777__auto___92146 < len__35776__auto___92145)){
args92142.push((arguments[i__35777__auto___92146]));

var G__92147 = (i__35777__auto___92146 + (1));
i__35777__auto___92146 = G__92147;
continue;
} else {
}
break;
}

var G__92144 = args92142.length;
switch (G__92144) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args92142.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__92140_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__92140_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__92141_SHARP_){
return cljs.core.dissoc.call(null,p1__92141_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args92149 = [];
var len__35776__auto___92162 = arguments.length;
var i__35777__auto___92163 = (0);
while(true){
if((i__35777__auto___92163 < len__35776__auto___92162)){
args92149.push((arguments[i__35777__auto___92163]));

var G__92164 = (i__35777__auto___92163 + (1));
i__35777__auto___92163 = G__92164;
continue;
} else {
}
break;
}

var G__92151 = args92149.length;
switch (G__92151) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args92149.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__35647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_92152_92166 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_92153_92167 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_92152_92166,_STAR_print_fn_STAR_92153_92167,sb__35647__auto__){
return (function (x__35648__auto__){
return sb__35647__auto__.append(x__35648__auto__);
});})(_STAR_print_newline_STAR_92152_92166,_STAR_print_fn_STAR_92153_92167,sb__35647__auto__))
;

try{var seq__92154_92168 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__92155_92169 = null;
var count__92156_92170 = (0);
var i__92157_92171 = (0);
while(true){
if((i__92157_92171 < count__92156_92170)){
var map__92158_92172 = cljs.core._nth.call(null,chunk__92155_92169,i__92157_92171);
var map__92158_92173__$1 = ((((!((map__92158_92172 == null)))?((((map__92158_92172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92158_92172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92158_92172):map__92158_92172);
var function_92174 = cljs.core.get.call(null,map__92158_92173__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_92175 = cljs.core.get.call(null,map__92158_92173__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_92176 = cljs.core.get.call(null,map__92158_92173__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_92177 = cljs.core.get.call(null,map__92158_92173__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_92174)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_92174),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_92175),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_92176)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_92176)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_92177)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_92177)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));

var G__92178 = seq__92154_92168;
var G__92179 = chunk__92155_92169;
var G__92180 = count__92156_92170;
var G__92181 = (i__92157_92171 + (1));
seq__92154_92168 = G__92178;
chunk__92155_92169 = G__92179;
count__92156_92170 = G__92180;
i__92157_92171 = G__92181;
continue;
} else {
var temp__6753__auto___92182 = cljs.core.seq.call(null,seq__92154_92168);
if(temp__6753__auto___92182){
var seq__92154_92183__$1 = temp__6753__auto___92182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__92154_92183__$1)){
var c__35466__auto___92184 = cljs.core.chunk_first.call(null,seq__92154_92183__$1);
var G__92185 = cljs.core.chunk_rest.call(null,seq__92154_92183__$1);
var G__92186 = c__35466__auto___92184;
var G__92187 = cljs.core.count.call(null,c__35466__auto___92184);
var G__92188 = (0);
seq__92154_92168 = G__92185;
chunk__92155_92169 = G__92186;
count__92156_92170 = G__92187;
i__92157_92171 = G__92188;
continue;
} else {
var map__92160_92189 = cljs.core.first.call(null,seq__92154_92183__$1);
var map__92160_92190__$1 = ((((!((map__92160_92189 == null)))?((((map__92160_92189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92160_92189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__92160_92189):map__92160_92189);
var function_92191 = cljs.core.get.call(null,map__92160_92190__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_92192 = cljs.core.get.call(null,map__92160_92190__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_92193 = cljs.core.get.call(null,map__92160_92190__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_92194 = cljs.core.get.call(null,map__92160_92190__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_92191)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_92191),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_92192),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_92193)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_92193)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_92194)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_92194)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));

var G__92195 = cljs.core.next.call(null,seq__92154_92183__$1);
var G__92196 = null;
var G__92197 = (0);
var G__92198 = (0);
seq__92154_92168 = G__92195;
chunk__92155_92169 = G__92196;
count__92156_92170 = G__92197;
i__92157_92171 = G__92198;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_92153_92167;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_92152_92166;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__35647__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=stacktrace.js.map?rel=1491640829059