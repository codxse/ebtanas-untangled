// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__227586){
var map__227611 = p__227586;
var map__227611__$1 = ((((!((map__227611 == null)))?((((map__227611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227611):map__227611);
var m = map__227611__$1;
var n = cljs.core.get.call(null,map__227611__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__227611__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__227613_227635 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__227614_227636 = null;
var count__227615_227637 = (0);
var i__227616_227638 = (0);
while(true){
if((i__227616_227638 < count__227615_227637)){
var f_227639 = cljs.core._nth.call(null,chunk__227614_227636,i__227616_227638);
cljs.core.println.call(null,"  ",f_227639);

var G__227640 = seq__227613_227635;
var G__227641 = chunk__227614_227636;
var G__227642 = count__227615_227637;
var G__227643 = (i__227616_227638 + (1));
seq__227613_227635 = G__227640;
chunk__227614_227636 = G__227641;
count__227615_227637 = G__227642;
i__227616_227638 = G__227643;
continue;
} else {
var temp__6753__auto___227644 = cljs.core.seq.call(null,seq__227613_227635);
if(temp__6753__auto___227644){
var seq__227613_227645__$1 = temp__6753__auto___227644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__227613_227645__$1)){
var c__40117__auto___227646 = cljs.core.chunk_first.call(null,seq__227613_227645__$1);
var G__227647 = cljs.core.chunk_rest.call(null,seq__227613_227645__$1);
var G__227648 = c__40117__auto___227646;
var G__227649 = cljs.core.count.call(null,c__40117__auto___227646);
var G__227650 = (0);
seq__227613_227635 = G__227647;
chunk__227614_227636 = G__227648;
count__227615_227637 = G__227649;
i__227616_227638 = G__227650;
continue;
} else {
var f_227651 = cljs.core.first.call(null,seq__227613_227645__$1);
cljs.core.println.call(null,"  ",f_227651);

var G__227652 = cljs.core.next.call(null,seq__227613_227645__$1);
var G__227653 = null;
var G__227654 = (0);
var G__227655 = (0);
seq__227613_227635 = G__227652;
chunk__227614_227636 = G__227653;
count__227615_227637 = G__227654;
i__227616_227638 = G__227655;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_227656 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__39206__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_227656);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_227656)))?cljs.core.second.call(null,arglists_227656):arglists_227656));
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
var seq__227617_227657 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__227618_227658 = null;
var count__227619_227659 = (0);
var i__227620_227660 = (0);
while(true){
if((i__227620_227660 < count__227619_227659)){
var vec__227621_227661 = cljs.core._nth.call(null,chunk__227618_227658,i__227620_227660);
var name_227662 = cljs.core.nth.call(null,vec__227621_227661,(0),null);
var map__227624_227663 = cljs.core.nth.call(null,vec__227621_227661,(1),null);
var map__227624_227664__$1 = ((((!((map__227624_227663 == null)))?((((map__227624_227663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227624_227663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227624_227663):map__227624_227663);
var doc_227665 = cljs.core.get.call(null,map__227624_227664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_227666 = cljs.core.get.call(null,map__227624_227664__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_227662);

cljs.core.println.call(null," ",arglists_227666);

if(cljs.core.truth_(doc_227665)){
cljs.core.println.call(null," ",doc_227665);
} else {
}

var G__227667 = seq__227617_227657;
var G__227668 = chunk__227618_227658;
var G__227669 = count__227619_227659;
var G__227670 = (i__227620_227660 + (1));
seq__227617_227657 = G__227667;
chunk__227618_227658 = G__227668;
count__227619_227659 = G__227669;
i__227620_227660 = G__227670;
continue;
} else {
var temp__6753__auto___227671 = cljs.core.seq.call(null,seq__227617_227657);
if(temp__6753__auto___227671){
var seq__227617_227672__$1 = temp__6753__auto___227671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__227617_227672__$1)){
var c__40117__auto___227673 = cljs.core.chunk_first.call(null,seq__227617_227672__$1);
var G__227674 = cljs.core.chunk_rest.call(null,seq__227617_227672__$1);
var G__227675 = c__40117__auto___227673;
var G__227676 = cljs.core.count.call(null,c__40117__auto___227673);
var G__227677 = (0);
seq__227617_227657 = G__227674;
chunk__227618_227658 = G__227675;
count__227619_227659 = G__227676;
i__227620_227660 = G__227677;
continue;
} else {
var vec__227626_227678 = cljs.core.first.call(null,seq__227617_227672__$1);
var name_227679 = cljs.core.nth.call(null,vec__227626_227678,(0),null);
var map__227629_227680 = cljs.core.nth.call(null,vec__227626_227678,(1),null);
var map__227629_227681__$1 = ((((!((map__227629_227680 == null)))?((((map__227629_227680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227629_227680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227629_227680):map__227629_227680);
var doc_227682 = cljs.core.get.call(null,map__227629_227681__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_227683 = cljs.core.get.call(null,map__227629_227681__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_227679);

cljs.core.println.call(null," ",arglists_227683);

if(cljs.core.truth_(doc_227682)){
cljs.core.println.call(null," ",doc_227682);
} else {
}

var G__227684 = cljs.core.next.call(null,seq__227617_227672__$1);
var G__227685 = null;
var G__227686 = (0);
var G__227687 = (0);
seq__227617_227657 = G__227684;
chunk__227618_227658 = G__227685;
count__227619_227659 = G__227686;
i__227620_227660 = G__227687;
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

var seq__227631 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__227632 = null;
var count__227633 = (0);
var i__227634 = (0);
while(true){
if((i__227634 < count__227633)){
var role = cljs.core._nth.call(null,chunk__227632,i__227634);
var temp__6753__auto___227688__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___227688__$1)){
var spec_227689 = temp__6753__auto___227688__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_227689));
} else {
}

var G__227690 = seq__227631;
var G__227691 = chunk__227632;
var G__227692 = count__227633;
var G__227693 = (i__227634 + (1));
seq__227631 = G__227690;
chunk__227632 = G__227691;
count__227633 = G__227692;
i__227634 = G__227693;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__227631);
if(temp__6753__auto____$1){
var seq__227631__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__227631__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__227631__$1);
var G__227694 = cljs.core.chunk_rest.call(null,seq__227631__$1);
var G__227695 = c__40117__auto__;
var G__227696 = cljs.core.count.call(null,c__40117__auto__);
var G__227697 = (0);
seq__227631 = G__227694;
chunk__227632 = G__227695;
count__227633 = G__227696;
i__227634 = G__227697;
continue;
} else {
var role = cljs.core.first.call(null,seq__227631__$1);
var temp__6753__auto___227698__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___227698__$2)){
var spec_227699 = temp__6753__auto___227698__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_227699));
} else {
}

var G__227700 = cljs.core.next.call(null,seq__227631__$1);
var G__227701 = null;
var G__227702 = (0);
var G__227703 = (0);
seq__227631 = G__227700;
chunk__227632 = G__227701;
count__227633 = G__227702;
i__227634 = G__227703;
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

//# sourceMappingURL=repl.js.map?rel=1491715147748