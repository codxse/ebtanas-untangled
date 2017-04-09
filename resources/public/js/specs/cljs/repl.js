// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__188840){
var map__188865 = p__188840;
var map__188865__$1 = ((((!((map__188865 == null)))?((((map__188865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188865):map__188865);
var m = map__188865__$1;
var n = cljs.core.get.call(null,map__188865__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__188865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__188867_188889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__188868_188890 = null;
var count__188869_188891 = (0);
var i__188870_188892 = (0);
while(true){
if((i__188870_188892 < count__188869_188891)){
var f_188893 = cljs.core._nth.call(null,chunk__188868_188890,i__188870_188892);
cljs.core.println.call(null,"  ",f_188893);

var G__188894 = seq__188867_188889;
var G__188895 = chunk__188868_188890;
var G__188896 = count__188869_188891;
var G__188897 = (i__188870_188892 + (1));
seq__188867_188889 = G__188894;
chunk__188868_188890 = G__188895;
count__188869_188891 = G__188896;
i__188870_188892 = G__188897;
continue;
} else {
var temp__6753__auto___188898 = cljs.core.seq.call(null,seq__188867_188889);
if(temp__6753__auto___188898){
var seq__188867_188899__$1 = temp__6753__auto___188898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__188867_188899__$1)){
var c__40117__auto___188900 = cljs.core.chunk_first.call(null,seq__188867_188899__$1);
var G__188901 = cljs.core.chunk_rest.call(null,seq__188867_188899__$1);
var G__188902 = c__40117__auto___188900;
var G__188903 = cljs.core.count.call(null,c__40117__auto___188900);
var G__188904 = (0);
seq__188867_188889 = G__188901;
chunk__188868_188890 = G__188902;
count__188869_188891 = G__188903;
i__188870_188892 = G__188904;
continue;
} else {
var f_188905 = cljs.core.first.call(null,seq__188867_188899__$1);
cljs.core.println.call(null,"  ",f_188905);

var G__188906 = cljs.core.next.call(null,seq__188867_188899__$1);
var G__188907 = null;
var G__188908 = (0);
var G__188909 = (0);
seq__188867_188889 = G__188906;
chunk__188868_188890 = G__188907;
count__188869_188891 = G__188908;
i__188870_188892 = G__188909;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_188910 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39206__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_188910);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_188910)))?cljs.core.second.call(null,arglists_188910):arglists_188910));
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
var seq__188871_188911 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__188872_188912 = null;
var count__188873_188913 = (0);
var i__188874_188914 = (0);
while(true){
if((i__188874_188914 < count__188873_188913)){
var vec__188875_188915 = cljs.core._nth.call(null,chunk__188872_188912,i__188874_188914);
var name_188916 = cljs.core.nth.call(null,vec__188875_188915,(0),null);
var map__188878_188917 = cljs.core.nth.call(null,vec__188875_188915,(1),null);
var map__188878_188918__$1 = ((((!((map__188878_188917 == null)))?((((map__188878_188917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188878_188917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188878_188917):map__188878_188917);
var doc_188919 = cljs.core.get.call(null,map__188878_188918__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_188920 = cljs.core.get.call(null,map__188878_188918__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_188916);

cljs.core.println.call(null," ",arglists_188920);

if(cljs.core.truth_(doc_188919)){
cljs.core.println.call(null," ",doc_188919);
} else {
}

var G__188921 = seq__188871_188911;
var G__188922 = chunk__188872_188912;
var G__188923 = count__188873_188913;
var G__188924 = (i__188874_188914 + (1));
seq__188871_188911 = G__188921;
chunk__188872_188912 = G__188922;
count__188873_188913 = G__188923;
i__188874_188914 = G__188924;
continue;
} else {
var temp__6753__auto___188925 = cljs.core.seq.call(null,seq__188871_188911);
if(temp__6753__auto___188925){
var seq__188871_188926__$1 = temp__6753__auto___188925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__188871_188926__$1)){
var c__40117__auto___188927 = cljs.core.chunk_first.call(null,seq__188871_188926__$1);
var G__188928 = cljs.core.chunk_rest.call(null,seq__188871_188926__$1);
var G__188929 = c__40117__auto___188927;
var G__188930 = cljs.core.count.call(null,c__40117__auto___188927);
var G__188931 = (0);
seq__188871_188911 = G__188928;
chunk__188872_188912 = G__188929;
count__188873_188913 = G__188930;
i__188874_188914 = G__188931;
continue;
} else {
var vec__188880_188932 = cljs.core.first.call(null,seq__188871_188926__$1);
var name_188933 = cljs.core.nth.call(null,vec__188880_188932,(0),null);
var map__188883_188934 = cljs.core.nth.call(null,vec__188880_188932,(1),null);
var map__188883_188935__$1 = ((((!((map__188883_188934 == null)))?((((map__188883_188934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188883_188934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188883_188934):map__188883_188934);
var doc_188936 = cljs.core.get.call(null,map__188883_188935__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_188937 = cljs.core.get.call(null,map__188883_188935__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_188933);

cljs.core.println.call(null," ",arglists_188937);

if(cljs.core.truth_(doc_188936)){
cljs.core.println.call(null," ",doc_188936);
} else {
}

var G__188938 = cljs.core.next.call(null,seq__188871_188926__$1);
var G__188939 = null;
var G__188940 = (0);
var G__188941 = (0);
seq__188871_188911 = G__188938;
chunk__188872_188912 = G__188939;
count__188873_188913 = G__188940;
i__188874_188914 = G__188941;
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

var seq__188885 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__188886 = null;
var count__188887 = (0);
var i__188888 = (0);
while(true){
if((i__188888 < count__188887)){
var role = cljs.core._nth.call(null,chunk__188886,i__188888);
var temp__6753__auto___188942__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___188942__$1)){
var spec_188943 = temp__6753__auto___188942__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_188943));
} else {
}

var G__188944 = seq__188885;
var G__188945 = chunk__188886;
var G__188946 = count__188887;
var G__188947 = (i__188888 + (1));
seq__188885 = G__188944;
chunk__188886 = G__188945;
count__188887 = G__188946;
i__188888 = G__188947;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__188885);
if(temp__6753__auto____$1){
var seq__188885__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__188885__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__188885__$1);
var G__188948 = cljs.core.chunk_rest.call(null,seq__188885__$1);
var G__188949 = c__40117__auto__;
var G__188950 = cljs.core.count.call(null,c__40117__auto__);
var G__188951 = (0);
seq__188885 = G__188948;
chunk__188886 = G__188949;
count__188887 = G__188950;
i__188888 = G__188951;
continue;
} else {
var role = cljs.core.first.call(null,seq__188885__$1);
var temp__6753__auto___188952__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___188952__$2)){
var spec_188953 = temp__6753__auto___188952__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_188953));
} else {
}

var G__188954 = cljs.core.next.call(null,seq__188885__$1);
var G__188955 = null;
var G__188956 = (0);
var G__188957 = (0);
seq__188885 = G__188954;
chunk__188886 = G__188955;
count__188887 = G__188956;
i__188888 = G__188957;
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

//# sourceMappingURL=repl.js.map?rel=1491715072770