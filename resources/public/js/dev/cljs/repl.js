// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__106627){
var map__106652 = p__106627;
var map__106652__$1 = ((((!((map__106652 == null)))?((((map__106652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106652):map__106652);
var m = map__106652__$1;
var n = cljs.core.get.call(null,map__106652__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__106652__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__106654_106676 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__106655_106677 = null;
var count__106656_106678 = (0);
var i__106657_106679 = (0);
while(true){
if((i__106657_106679 < count__106656_106678)){
var f_106680 = cljs.core._nth.call(null,chunk__106655_106677,i__106657_106679);
cljs.core.println.call(null,"  ",f_106680);

var G__106681 = seq__106654_106676;
var G__106682 = chunk__106655_106677;
var G__106683 = count__106656_106678;
var G__106684 = (i__106657_106679 + (1));
seq__106654_106676 = G__106681;
chunk__106655_106677 = G__106682;
count__106656_106678 = G__106683;
i__106657_106679 = G__106684;
continue;
} else {
var temp__6753__auto___106685 = cljs.core.seq.call(null,seq__106654_106676);
if(temp__6753__auto___106685){
var seq__106654_106686__$1 = temp__6753__auto___106685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106654_106686__$1)){
var c__35466__auto___106687 = cljs.core.chunk_first.call(null,seq__106654_106686__$1);
var G__106688 = cljs.core.chunk_rest.call(null,seq__106654_106686__$1);
var G__106689 = c__35466__auto___106687;
var G__106690 = cljs.core.count.call(null,c__35466__auto___106687);
var G__106691 = (0);
seq__106654_106676 = G__106688;
chunk__106655_106677 = G__106689;
count__106656_106678 = G__106690;
i__106657_106679 = G__106691;
continue;
} else {
var f_106692 = cljs.core.first.call(null,seq__106654_106686__$1);
cljs.core.println.call(null,"  ",f_106692);

var G__106693 = cljs.core.next.call(null,seq__106654_106686__$1);
var G__106694 = null;
var G__106695 = (0);
var G__106696 = (0);
seq__106654_106676 = G__106693;
chunk__106655_106677 = G__106694;
count__106656_106678 = G__106695;
i__106657_106679 = G__106696;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_106697 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34555__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_106697);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_106697)))?cljs.core.second.call(null,arglists_106697):arglists_106697));
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
var seq__106658_106698 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__106659_106699 = null;
var count__106660_106700 = (0);
var i__106661_106701 = (0);
while(true){
if((i__106661_106701 < count__106660_106700)){
var vec__106662_106702 = cljs.core._nth.call(null,chunk__106659_106699,i__106661_106701);
var name_106703 = cljs.core.nth.call(null,vec__106662_106702,(0),null);
var map__106665_106704 = cljs.core.nth.call(null,vec__106662_106702,(1),null);
var map__106665_106705__$1 = ((((!((map__106665_106704 == null)))?((((map__106665_106704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106665_106704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106665_106704):map__106665_106704);
var doc_106706 = cljs.core.get.call(null,map__106665_106705__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_106707 = cljs.core.get.call(null,map__106665_106705__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_106703);

cljs.core.println.call(null," ",arglists_106707);

if(cljs.core.truth_(doc_106706)){
cljs.core.println.call(null," ",doc_106706);
} else {
}

var G__106708 = seq__106658_106698;
var G__106709 = chunk__106659_106699;
var G__106710 = count__106660_106700;
var G__106711 = (i__106661_106701 + (1));
seq__106658_106698 = G__106708;
chunk__106659_106699 = G__106709;
count__106660_106700 = G__106710;
i__106661_106701 = G__106711;
continue;
} else {
var temp__6753__auto___106712 = cljs.core.seq.call(null,seq__106658_106698);
if(temp__6753__auto___106712){
var seq__106658_106713__$1 = temp__6753__auto___106712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106658_106713__$1)){
var c__35466__auto___106714 = cljs.core.chunk_first.call(null,seq__106658_106713__$1);
var G__106715 = cljs.core.chunk_rest.call(null,seq__106658_106713__$1);
var G__106716 = c__35466__auto___106714;
var G__106717 = cljs.core.count.call(null,c__35466__auto___106714);
var G__106718 = (0);
seq__106658_106698 = G__106715;
chunk__106659_106699 = G__106716;
count__106660_106700 = G__106717;
i__106661_106701 = G__106718;
continue;
} else {
var vec__106667_106719 = cljs.core.first.call(null,seq__106658_106713__$1);
var name_106720 = cljs.core.nth.call(null,vec__106667_106719,(0),null);
var map__106670_106721 = cljs.core.nth.call(null,vec__106667_106719,(1),null);
var map__106670_106722__$1 = ((((!((map__106670_106721 == null)))?((((map__106670_106721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106670_106721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106670_106721):map__106670_106721);
var doc_106723 = cljs.core.get.call(null,map__106670_106722__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_106724 = cljs.core.get.call(null,map__106670_106722__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_106720);

cljs.core.println.call(null," ",arglists_106724);

if(cljs.core.truth_(doc_106723)){
cljs.core.println.call(null," ",doc_106723);
} else {
}

var G__106725 = cljs.core.next.call(null,seq__106658_106713__$1);
var G__106726 = null;
var G__106727 = (0);
var G__106728 = (0);
seq__106658_106698 = G__106725;
chunk__106659_106699 = G__106726;
count__106660_106700 = G__106727;
i__106661_106701 = G__106728;
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

var seq__106672 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__106673 = null;
var count__106674 = (0);
var i__106675 = (0);
while(true){
if((i__106675 < count__106674)){
var role = cljs.core._nth.call(null,chunk__106673,i__106675);
var temp__6753__auto___106729__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___106729__$1)){
var spec_106730 = temp__6753__auto___106729__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_106730));
} else {
}

var G__106731 = seq__106672;
var G__106732 = chunk__106673;
var G__106733 = count__106674;
var G__106734 = (i__106675 + (1));
seq__106672 = G__106731;
chunk__106673 = G__106732;
count__106674 = G__106733;
i__106675 = G__106734;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__106672);
if(temp__6753__auto____$1){
var seq__106672__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__106672__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__106672__$1);
var G__106735 = cljs.core.chunk_rest.call(null,seq__106672__$1);
var G__106736 = c__35466__auto__;
var G__106737 = cljs.core.count.call(null,c__35466__auto__);
var G__106738 = (0);
seq__106672 = G__106735;
chunk__106673 = G__106736;
count__106674 = G__106737;
i__106675 = G__106738;
continue;
} else {
var role = cljs.core.first.call(null,seq__106672__$1);
var temp__6753__auto___106739__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___106739__$2)){
var spec_106740 = temp__6753__auto___106739__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_106740));
} else {
}

var G__106741 = cljs.core.next.call(null,seq__106672__$1);
var G__106742 = null;
var G__106743 = (0);
var G__106744 = (0);
seq__106672 = G__106741;
chunk__106673 = G__106742;
count__106674 = G__106743;
i__106675 = G__106744;
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

//# sourceMappingURL=repl.js.map?rel=1491640860263