// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__209030){
var map__209055 = p__209030;
var map__209055__$1 = ((((!((map__209055 == null)))?((((map__209055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209055):map__209055);
var m = map__209055__$1;
var n = cljs.core.get.call(null,map__209055__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__209055__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__209057_209079 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__209058_209080 = null;
var count__209059_209081 = (0);
var i__209060_209082 = (0);
while(true){
if((i__209060_209082 < count__209059_209081)){
var f_209083 = cljs.core._nth.call(null,chunk__209058_209080,i__209060_209082);
cljs.core.println.call(null,"  ",f_209083);

var G__209084 = seq__209057_209079;
var G__209085 = chunk__209058_209080;
var G__209086 = count__209059_209081;
var G__209087 = (i__209060_209082 + (1));
seq__209057_209079 = G__209084;
chunk__209058_209080 = G__209085;
count__209059_209081 = G__209086;
i__209060_209082 = G__209087;
continue;
} else {
var temp__6753__auto___209088 = cljs.core.seq.call(null,seq__209057_209079);
if(temp__6753__auto___209088){
var seq__209057_209089__$1 = temp__6753__auto___209088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__209057_209089__$1)){
var c__40117__auto___209090 = cljs.core.chunk_first.call(null,seq__209057_209089__$1);
var G__209091 = cljs.core.chunk_rest.call(null,seq__209057_209089__$1);
var G__209092 = c__40117__auto___209090;
var G__209093 = cljs.core.count.call(null,c__40117__auto___209090);
var G__209094 = (0);
seq__209057_209079 = G__209091;
chunk__209058_209080 = G__209092;
count__209059_209081 = G__209093;
i__209060_209082 = G__209094;
continue;
} else {
var f_209095 = cljs.core.first.call(null,seq__209057_209089__$1);
cljs.core.println.call(null,"  ",f_209095);

var G__209096 = cljs.core.next.call(null,seq__209057_209089__$1);
var G__209097 = null;
var G__209098 = (0);
var G__209099 = (0);
seq__209057_209079 = G__209096;
chunk__209058_209080 = G__209097;
count__209059_209081 = G__209098;
i__209060_209082 = G__209099;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_209100 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39206__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_209100);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_209100)))?cljs.core.second.call(null,arglists_209100):arglists_209100));
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
var seq__209061_209101 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__209062_209102 = null;
var count__209063_209103 = (0);
var i__209064_209104 = (0);
while(true){
if((i__209064_209104 < count__209063_209103)){
var vec__209065_209105 = cljs.core._nth.call(null,chunk__209062_209102,i__209064_209104);
var name_209106 = cljs.core.nth.call(null,vec__209065_209105,(0),null);
var map__209068_209107 = cljs.core.nth.call(null,vec__209065_209105,(1),null);
var map__209068_209108__$1 = ((((!((map__209068_209107 == null)))?((((map__209068_209107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209068_209107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209068_209107):map__209068_209107);
var doc_209109 = cljs.core.get.call(null,map__209068_209108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_209110 = cljs.core.get.call(null,map__209068_209108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_209106);

cljs.core.println.call(null," ",arglists_209110);

if(cljs.core.truth_(doc_209109)){
cljs.core.println.call(null," ",doc_209109);
} else {
}

var G__209111 = seq__209061_209101;
var G__209112 = chunk__209062_209102;
var G__209113 = count__209063_209103;
var G__209114 = (i__209064_209104 + (1));
seq__209061_209101 = G__209111;
chunk__209062_209102 = G__209112;
count__209063_209103 = G__209113;
i__209064_209104 = G__209114;
continue;
} else {
var temp__6753__auto___209115 = cljs.core.seq.call(null,seq__209061_209101);
if(temp__6753__auto___209115){
var seq__209061_209116__$1 = temp__6753__auto___209115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__209061_209116__$1)){
var c__40117__auto___209117 = cljs.core.chunk_first.call(null,seq__209061_209116__$1);
var G__209118 = cljs.core.chunk_rest.call(null,seq__209061_209116__$1);
var G__209119 = c__40117__auto___209117;
var G__209120 = cljs.core.count.call(null,c__40117__auto___209117);
var G__209121 = (0);
seq__209061_209101 = G__209118;
chunk__209062_209102 = G__209119;
count__209063_209103 = G__209120;
i__209064_209104 = G__209121;
continue;
} else {
var vec__209070_209122 = cljs.core.first.call(null,seq__209061_209116__$1);
var name_209123 = cljs.core.nth.call(null,vec__209070_209122,(0),null);
var map__209073_209124 = cljs.core.nth.call(null,vec__209070_209122,(1),null);
var map__209073_209125__$1 = ((((!((map__209073_209124 == null)))?((((map__209073_209124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209073_209124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209073_209124):map__209073_209124);
var doc_209126 = cljs.core.get.call(null,map__209073_209125__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_209127 = cljs.core.get.call(null,map__209073_209125__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_209123);

cljs.core.println.call(null," ",arglists_209127);

if(cljs.core.truth_(doc_209126)){
cljs.core.println.call(null," ",doc_209126);
} else {
}

var G__209128 = cljs.core.next.call(null,seq__209061_209116__$1);
var G__209129 = null;
var G__209130 = (0);
var G__209131 = (0);
seq__209061_209101 = G__209128;
chunk__209062_209102 = G__209129;
count__209063_209103 = G__209130;
i__209064_209104 = G__209131;
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

var seq__209075 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__209076 = null;
var count__209077 = (0);
var i__209078 = (0);
while(true){
if((i__209078 < count__209077)){
var role = cljs.core._nth.call(null,chunk__209076,i__209078);
var temp__6753__auto___209132__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___209132__$1)){
var spec_209133 = temp__6753__auto___209132__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_209133));
} else {
}

var G__209134 = seq__209075;
var G__209135 = chunk__209076;
var G__209136 = count__209077;
var G__209137 = (i__209078 + (1));
seq__209075 = G__209134;
chunk__209076 = G__209135;
count__209077 = G__209136;
i__209078 = G__209137;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__209075);
if(temp__6753__auto____$1){
var seq__209075__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__209075__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__209075__$1);
var G__209138 = cljs.core.chunk_rest.call(null,seq__209075__$1);
var G__209139 = c__40117__auto__;
var G__209140 = cljs.core.count.call(null,c__40117__auto__);
var G__209141 = (0);
seq__209075 = G__209138;
chunk__209076 = G__209139;
count__209077 = G__209140;
i__209078 = G__209141;
continue;
} else {
var role = cljs.core.first.call(null,seq__209075__$1);
var temp__6753__auto___209142__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___209142__$2)){
var spec_209143 = temp__6753__auto___209142__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_209143));
} else {
}

var G__209144 = cljs.core.next.call(null,seq__209075__$1);
var G__209145 = null;
var G__209146 = (0);
var G__209147 = (0);
seq__209075 = G__209144;
chunk__209076 = G__209145;
count__209077 = G__209146;
i__209078 = G__209147;
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

//# sourceMappingURL=repl.js.map?rel=1491715109758