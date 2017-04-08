// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66343){
var map__66368 = p__66343;
var map__66368__$1 = ((((!((map__66368 == null)))?((((map__66368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66368):map__66368);
var m = map__66368__$1;
var n = cljs.core.get.call(null,map__66368__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__66368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__66370_66392 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66371_66393 = null;
var count__66372_66394 = (0);
var i__66373_66395 = (0);
while(true){
if((i__66373_66395 < count__66372_66394)){
var f_66396 = cljs.core._nth.call(null,chunk__66371_66393,i__66373_66395);
cljs.core.println.call(null,"  ",f_66396);

var G__66397 = seq__66370_66392;
var G__66398 = chunk__66371_66393;
var G__66399 = count__66372_66394;
var G__66400 = (i__66373_66395 + (1));
seq__66370_66392 = G__66397;
chunk__66371_66393 = G__66398;
count__66372_66394 = G__66399;
i__66373_66395 = G__66400;
continue;
} else {
var temp__6753__auto___66401 = cljs.core.seq.call(null,seq__66370_66392);
if(temp__6753__auto___66401){
var seq__66370_66402__$1 = temp__6753__auto___66401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66370_66402__$1)){
var c__35466__auto___66403 = cljs.core.chunk_first.call(null,seq__66370_66402__$1);
var G__66404 = cljs.core.chunk_rest.call(null,seq__66370_66402__$1);
var G__66405 = c__35466__auto___66403;
var G__66406 = cljs.core.count.call(null,c__35466__auto___66403);
var G__66407 = (0);
seq__66370_66392 = G__66404;
chunk__66371_66393 = G__66405;
count__66372_66394 = G__66406;
i__66373_66395 = G__66407;
continue;
} else {
var f_66408 = cljs.core.first.call(null,seq__66370_66402__$1);
cljs.core.println.call(null,"  ",f_66408);

var G__66409 = cljs.core.next.call(null,seq__66370_66402__$1);
var G__66410 = null;
var G__66411 = (0);
var G__66412 = (0);
seq__66370_66392 = G__66409;
chunk__66371_66393 = G__66410;
count__66372_66394 = G__66411;
i__66373_66395 = G__66412;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66413 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34555__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_66413);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_66413)))?cljs.core.second.call(null,arglists_66413):arglists_66413));
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
var seq__66374_66414 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66375_66415 = null;
var count__66376_66416 = (0);
var i__66377_66417 = (0);
while(true){
if((i__66377_66417 < count__66376_66416)){
var vec__66378_66418 = cljs.core._nth.call(null,chunk__66375_66415,i__66377_66417);
var name_66419 = cljs.core.nth.call(null,vec__66378_66418,(0),null);
var map__66381_66420 = cljs.core.nth.call(null,vec__66378_66418,(1),null);
var map__66381_66421__$1 = ((((!((map__66381_66420 == null)))?((((map__66381_66420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66381_66420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66381_66420):map__66381_66420);
var doc_66422 = cljs.core.get.call(null,map__66381_66421__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66423 = cljs.core.get.call(null,map__66381_66421__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66419);

cljs.core.println.call(null," ",arglists_66423);

if(cljs.core.truth_(doc_66422)){
cljs.core.println.call(null," ",doc_66422);
} else {
}

var G__66424 = seq__66374_66414;
var G__66425 = chunk__66375_66415;
var G__66426 = count__66376_66416;
var G__66427 = (i__66377_66417 + (1));
seq__66374_66414 = G__66424;
chunk__66375_66415 = G__66425;
count__66376_66416 = G__66426;
i__66377_66417 = G__66427;
continue;
} else {
var temp__6753__auto___66428 = cljs.core.seq.call(null,seq__66374_66414);
if(temp__6753__auto___66428){
var seq__66374_66429__$1 = temp__6753__auto___66428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66374_66429__$1)){
var c__35466__auto___66430 = cljs.core.chunk_first.call(null,seq__66374_66429__$1);
var G__66431 = cljs.core.chunk_rest.call(null,seq__66374_66429__$1);
var G__66432 = c__35466__auto___66430;
var G__66433 = cljs.core.count.call(null,c__35466__auto___66430);
var G__66434 = (0);
seq__66374_66414 = G__66431;
chunk__66375_66415 = G__66432;
count__66376_66416 = G__66433;
i__66377_66417 = G__66434;
continue;
} else {
var vec__66383_66435 = cljs.core.first.call(null,seq__66374_66429__$1);
var name_66436 = cljs.core.nth.call(null,vec__66383_66435,(0),null);
var map__66386_66437 = cljs.core.nth.call(null,vec__66383_66435,(1),null);
var map__66386_66438__$1 = ((((!((map__66386_66437 == null)))?((((map__66386_66437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66386_66437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66386_66437):map__66386_66437);
var doc_66439 = cljs.core.get.call(null,map__66386_66438__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66440 = cljs.core.get.call(null,map__66386_66438__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66436);

cljs.core.println.call(null," ",arglists_66440);

if(cljs.core.truth_(doc_66439)){
cljs.core.println.call(null," ",doc_66439);
} else {
}

var G__66441 = cljs.core.next.call(null,seq__66374_66429__$1);
var G__66442 = null;
var G__66443 = (0);
var G__66444 = (0);
seq__66374_66414 = G__66441;
chunk__66375_66415 = G__66442;
count__66376_66416 = G__66443;
i__66377_66417 = G__66444;
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

var seq__66388 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66389 = null;
var count__66390 = (0);
var i__66391 = (0);
while(true){
if((i__66391 < count__66390)){
var role = cljs.core._nth.call(null,chunk__66389,i__66391);
var temp__6753__auto___66445__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___66445__$1)){
var spec_66446 = temp__6753__auto___66445__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_66446));
} else {
}

var G__66447 = seq__66388;
var G__66448 = chunk__66389;
var G__66449 = count__66390;
var G__66450 = (i__66391 + (1));
seq__66388 = G__66447;
chunk__66389 = G__66448;
count__66390 = G__66449;
i__66391 = G__66450;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__66388);
if(temp__6753__auto____$1){
var seq__66388__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66388__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__66388__$1);
var G__66451 = cljs.core.chunk_rest.call(null,seq__66388__$1);
var G__66452 = c__35466__auto__;
var G__66453 = cljs.core.count.call(null,c__35466__auto__);
var G__66454 = (0);
seq__66388 = G__66451;
chunk__66389 = G__66452;
count__66390 = G__66453;
i__66391 = G__66454;
continue;
} else {
var role = cljs.core.first.call(null,seq__66388__$1);
var temp__6753__auto___66455__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___66455__$2)){
var spec_66456 = temp__6753__auto___66455__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_66456));
} else {
}

var G__66457 = cljs.core.next.call(null,seq__66388__$1);
var G__66458 = null;
var G__66459 = (0);
var G__66460 = (0);
seq__66388 = G__66457;
chunk__66389 = G__66458;
count__66390 = G__66459;
i__66391 = G__66460;
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

//# sourceMappingURL=repl.js.map?rel=1491640782321