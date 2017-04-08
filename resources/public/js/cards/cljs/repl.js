// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__87956){
var map__87981 = p__87956;
var map__87981__$1 = ((((!((map__87981 == null)))?((((map__87981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87981):map__87981);
var m = map__87981__$1;
var n = cljs.core.get.call(null,map__87981__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__87981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__87983_88005 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__87984_88006 = null;
var count__87985_88007 = (0);
var i__87986_88008 = (0);
while(true){
if((i__87986_88008 < count__87985_88007)){
var f_88009 = cljs.core._nth.call(null,chunk__87984_88006,i__87986_88008);
cljs.core.println.call(null,"  ",f_88009);

var G__88010 = seq__87983_88005;
var G__88011 = chunk__87984_88006;
var G__88012 = count__87985_88007;
var G__88013 = (i__87986_88008 + (1));
seq__87983_88005 = G__88010;
chunk__87984_88006 = G__88011;
count__87985_88007 = G__88012;
i__87986_88008 = G__88013;
continue;
} else {
var temp__6753__auto___88014 = cljs.core.seq.call(null,seq__87983_88005);
if(temp__6753__auto___88014){
var seq__87983_88015__$1 = temp__6753__auto___88014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87983_88015__$1)){
var c__35466__auto___88016 = cljs.core.chunk_first.call(null,seq__87983_88015__$1);
var G__88017 = cljs.core.chunk_rest.call(null,seq__87983_88015__$1);
var G__88018 = c__35466__auto___88016;
var G__88019 = cljs.core.count.call(null,c__35466__auto___88016);
var G__88020 = (0);
seq__87983_88005 = G__88017;
chunk__87984_88006 = G__88018;
count__87985_88007 = G__88019;
i__87986_88008 = G__88020;
continue;
} else {
var f_88021 = cljs.core.first.call(null,seq__87983_88015__$1);
cljs.core.println.call(null,"  ",f_88021);

var G__88022 = cljs.core.next.call(null,seq__87983_88015__$1);
var G__88023 = null;
var G__88024 = (0);
var G__88025 = (0);
seq__87983_88005 = G__88022;
chunk__87984_88006 = G__88023;
count__87985_88007 = G__88024;
i__87986_88008 = G__88025;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_88026 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34555__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_88026);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_88026)))?cljs.core.second.call(null,arglists_88026):arglists_88026));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__87987_88027 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__87988_88028 = null;
var count__87989_88029 = (0);
var i__87990_88030 = (0);
while(true){
if((i__87990_88030 < count__87989_88029)){
var vec__87991_88031 = cljs.core._nth.call(null,chunk__87988_88028,i__87990_88030);
var name_88032 = cljs.core.nth.call(null,vec__87991_88031,(0),null);
var map__87994_88033 = cljs.core.nth.call(null,vec__87991_88031,(1),null);
var map__87994_88034__$1 = ((((!((map__87994_88033 == null)))?((((map__87994_88033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87994_88033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87994_88033):map__87994_88033);
var doc_88035 = cljs.core.get.call(null,map__87994_88034__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_88036 = cljs.core.get.call(null,map__87994_88034__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_88032);

cljs.core.println.call(null," ",arglists_88036);

if(cljs.core.truth_(doc_88035)){
cljs.core.println.call(null," ",doc_88035);
} else {
}

var G__88037 = seq__87987_88027;
var G__88038 = chunk__87988_88028;
var G__88039 = count__87989_88029;
var G__88040 = (i__87990_88030 + (1));
seq__87987_88027 = G__88037;
chunk__87988_88028 = G__88038;
count__87989_88029 = G__88039;
i__87990_88030 = G__88040;
continue;
} else {
var temp__6753__auto___88041 = cljs.core.seq.call(null,seq__87987_88027);
if(temp__6753__auto___88041){
var seq__87987_88042__$1 = temp__6753__auto___88041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87987_88042__$1)){
var c__35466__auto___88043 = cljs.core.chunk_first.call(null,seq__87987_88042__$1);
var G__88044 = cljs.core.chunk_rest.call(null,seq__87987_88042__$1);
var G__88045 = c__35466__auto___88043;
var G__88046 = cljs.core.count.call(null,c__35466__auto___88043);
var G__88047 = (0);
seq__87987_88027 = G__88044;
chunk__87988_88028 = G__88045;
count__87989_88029 = G__88046;
i__87990_88030 = G__88047;
continue;
} else {
var vec__87996_88048 = cljs.core.first.call(null,seq__87987_88042__$1);
var name_88049 = cljs.core.nth.call(null,vec__87996_88048,(0),null);
var map__87999_88050 = cljs.core.nth.call(null,vec__87996_88048,(1),null);
var map__87999_88051__$1 = ((((!((map__87999_88050 == null)))?((((map__87999_88050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87999_88050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87999_88050):map__87999_88050);
var doc_88052 = cljs.core.get.call(null,map__87999_88051__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_88053 = cljs.core.get.call(null,map__87999_88051__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_88049);

cljs.core.println.call(null," ",arglists_88053);

if(cljs.core.truth_(doc_88052)){
cljs.core.println.call(null," ",doc_88052);
} else {
}

var G__88054 = cljs.core.next.call(null,seq__87987_88042__$1);
var G__88055 = null;
var G__88056 = (0);
var G__88057 = (0);
seq__87987_88027 = G__88054;
chunk__87988_88028 = G__88055;
count__87989_88029 = G__88056;
i__87990_88030 = G__88057;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__88001 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__88002 = null;
var count__88003 = (0);
var i__88004 = (0);
while(true){
if((i__88004 < count__88003)){
var role = cljs.core._nth.call(null,chunk__88002,i__88004);
var temp__6753__auto___88058__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___88058__$1)){
var spec_88059 = temp__6753__auto___88058__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_88059));
} else {
}

var G__88060 = seq__88001;
var G__88061 = chunk__88002;
var G__88062 = count__88003;
var G__88063 = (i__88004 + (1));
seq__88001 = G__88060;
chunk__88002 = G__88061;
count__88003 = G__88062;
i__88004 = G__88063;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__88001);
if(temp__6753__auto____$1){
var seq__88001__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88001__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__88001__$1);
var G__88064 = cljs.core.chunk_rest.call(null,seq__88001__$1);
var G__88065 = c__35466__auto__;
var G__88066 = cljs.core.count.call(null,c__35466__auto__);
var G__88067 = (0);
seq__88001 = G__88064;
chunk__88002 = G__88065;
count__88003 = G__88066;
i__88004 = G__88067;
continue;
} else {
var role = cljs.core.first.call(null,seq__88001__$1);
var temp__6753__auto___88068__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___88068__$2)){
var spec_88069 = temp__6753__auto___88068__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_88069));
} else {
}

var G__88070 = cljs.core.next.call(null,seq__88001__$1);
var G__88071 = null;
var G__88072 = (0);
var G__88073 = (0);
seq__88001 = G__88070;
chunk__88002 = G__88071;
count__88003 = G__88072;
i__88004 = G__88073;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1491640823600