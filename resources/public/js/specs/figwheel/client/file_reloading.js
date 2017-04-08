// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__34555__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__34555__auto__){
return or__34555__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__34555__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__65321_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__65321_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__65326 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__65327 = null;
var count__65328 = (0);
var i__65329 = (0);
while(true){
if((i__65329 < count__65328)){
var n = cljs.core._nth.call(null,chunk__65327,i__65329);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65330 = seq__65326;
var G__65331 = chunk__65327;
var G__65332 = count__65328;
var G__65333 = (i__65329 + (1));
seq__65326 = G__65330;
chunk__65327 = G__65331;
count__65328 = G__65332;
i__65329 = G__65333;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__65326);
if(temp__6753__auto__){
var seq__65326__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65326__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__65326__$1);
var G__65334 = cljs.core.chunk_rest.call(null,seq__65326__$1);
var G__65335 = c__35466__auto__;
var G__65336 = cljs.core.count.call(null,c__35466__auto__);
var G__65337 = (0);
seq__65326 = G__65334;
chunk__65327 = G__65335;
count__65328 = G__65336;
i__65329 = G__65337;
continue;
} else {
var n = cljs.core.first.call(null,seq__65326__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65338 = cljs.core.next.call(null,seq__65326__$1);
var G__65339 = null;
var G__65340 = (0);
var G__65341 = (0);
seq__65326 = G__65338;
chunk__65327 = G__65339;
count__65328 = G__65340;
i__65329 = G__65341;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__65392_65403 = cljs.core.seq.call(null,deps);
var chunk__65393_65404 = null;
var count__65394_65405 = (0);
var i__65395_65406 = (0);
while(true){
if((i__65395_65406 < count__65394_65405)){
var dep_65407 = cljs.core._nth.call(null,chunk__65393_65404,i__65395_65406);
topo_sort_helper_STAR_.call(null,dep_65407,(depth + (1)),state);

var G__65408 = seq__65392_65403;
var G__65409 = chunk__65393_65404;
var G__65410 = count__65394_65405;
var G__65411 = (i__65395_65406 + (1));
seq__65392_65403 = G__65408;
chunk__65393_65404 = G__65409;
count__65394_65405 = G__65410;
i__65395_65406 = G__65411;
continue;
} else {
var temp__6753__auto___65412 = cljs.core.seq.call(null,seq__65392_65403);
if(temp__6753__auto___65412){
var seq__65392_65413__$1 = temp__6753__auto___65412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65392_65413__$1)){
var c__35466__auto___65414 = cljs.core.chunk_first.call(null,seq__65392_65413__$1);
var G__65415 = cljs.core.chunk_rest.call(null,seq__65392_65413__$1);
var G__65416 = c__35466__auto___65414;
var G__65417 = cljs.core.count.call(null,c__35466__auto___65414);
var G__65418 = (0);
seq__65392_65403 = G__65415;
chunk__65393_65404 = G__65416;
count__65394_65405 = G__65417;
i__65395_65406 = G__65418;
continue;
} else {
var dep_65419 = cljs.core.first.call(null,seq__65392_65413__$1);
topo_sort_helper_STAR_.call(null,dep_65419,(depth + (1)),state);

var G__65420 = cljs.core.next.call(null,seq__65392_65413__$1);
var G__65421 = null;
var G__65422 = (0);
var G__65423 = (0);
seq__65392_65403 = G__65420;
chunk__65393_65404 = G__65421;
count__65394_65405 = G__65422;
i__65395_65406 = G__65423;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__65396){
var vec__65400 = p__65396;
var seq__65401 = cljs.core.seq.call(null,vec__65400);
var first__65402 = cljs.core.first.call(null,seq__65401);
var seq__65401__$1 = cljs.core.next.call(null,seq__65401);
var x = first__65402;
var xs = seq__65401__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__65400,seq__65401,first__65402,seq__65401__$1,x,xs,get_deps__$1){
return (function (p1__65342_SHARP_){
return clojure.set.difference.call(null,p1__65342_SHARP_,x);
});})(vec__65400,seq__65401,first__65402,seq__65401__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__65436 = cljs.core.seq.call(null,provides);
var chunk__65437 = null;
var count__65438 = (0);
var i__65439 = (0);
while(true){
if((i__65439 < count__65438)){
var prov = cljs.core._nth.call(null,chunk__65437,i__65439);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65440_65448 = cljs.core.seq.call(null,requires);
var chunk__65441_65449 = null;
var count__65442_65450 = (0);
var i__65443_65451 = (0);
while(true){
if((i__65443_65451 < count__65442_65450)){
var req_65452 = cljs.core._nth.call(null,chunk__65441_65449,i__65443_65451);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65452,prov);

var G__65453 = seq__65440_65448;
var G__65454 = chunk__65441_65449;
var G__65455 = count__65442_65450;
var G__65456 = (i__65443_65451 + (1));
seq__65440_65448 = G__65453;
chunk__65441_65449 = G__65454;
count__65442_65450 = G__65455;
i__65443_65451 = G__65456;
continue;
} else {
var temp__6753__auto___65457 = cljs.core.seq.call(null,seq__65440_65448);
if(temp__6753__auto___65457){
var seq__65440_65458__$1 = temp__6753__auto___65457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65440_65458__$1)){
var c__35466__auto___65459 = cljs.core.chunk_first.call(null,seq__65440_65458__$1);
var G__65460 = cljs.core.chunk_rest.call(null,seq__65440_65458__$1);
var G__65461 = c__35466__auto___65459;
var G__65462 = cljs.core.count.call(null,c__35466__auto___65459);
var G__65463 = (0);
seq__65440_65448 = G__65460;
chunk__65441_65449 = G__65461;
count__65442_65450 = G__65462;
i__65443_65451 = G__65463;
continue;
} else {
var req_65464 = cljs.core.first.call(null,seq__65440_65458__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65464,prov);

var G__65465 = cljs.core.next.call(null,seq__65440_65458__$1);
var G__65466 = null;
var G__65467 = (0);
var G__65468 = (0);
seq__65440_65448 = G__65465;
chunk__65441_65449 = G__65466;
count__65442_65450 = G__65467;
i__65443_65451 = G__65468;
continue;
}
} else {
}
}
break;
}

var G__65469 = seq__65436;
var G__65470 = chunk__65437;
var G__65471 = count__65438;
var G__65472 = (i__65439 + (1));
seq__65436 = G__65469;
chunk__65437 = G__65470;
count__65438 = G__65471;
i__65439 = G__65472;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__65436);
if(temp__6753__auto__){
var seq__65436__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65436__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__65436__$1);
var G__65473 = cljs.core.chunk_rest.call(null,seq__65436__$1);
var G__65474 = c__35466__auto__;
var G__65475 = cljs.core.count.call(null,c__35466__auto__);
var G__65476 = (0);
seq__65436 = G__65473;
chunk__65437 = G__65474;
count__65438 = G__65475;
i__65439 = G__65476;
continue;
} else {
var prov = cljs.core.first.call(null,seq__65436__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65444_65477 = cljs.core.seq.call(null,requires);
var chunk__65445_65478 = null;
var count__65446_65479 = (0);
var i__65447_65480 = (0);
while(true){
if((i__65447_65480 < count__65446_65479)){
var req_65481 = cljs.core._nth.call(null,chunk__65445_65478,i__65447_65480);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65481,prov);

var G__65482 = seq__65444_65477;
var G__65483 = chunk__65445_65478;
var G__65484 = count__65446_65479;
var G__65485 = (i__65447_65480 + (1));
seq__65444_65477 = G__65482;
chunk__65445_65478 = G__65483;
count__65446_65479 = G__65484;
i__65447_65480 = G__65485;
continue;
} else {
var temp__6753__auto___65486__$1 = cljs.core.seq.call(null,seq__65444_65477);
if(temp__6753__auto___65486__$1){
var seq__65444_65487__$1 = temp__6753__auto___65486__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65444_65487__$1)){
var c__35466__auto___65488 = cljs.core.chunk_first.call(null,seq__65444_65487__$1);
var G__65489 = cljs.core.chunk_rest.call(null,seq__65444_65487__$1);
var G__65490 = c__35466__auto___65488;
var G__65491 = cljs.core.count.call(null,c__35466__auto___65488);
var G__65492 = (0);
seq__65444_65477 = G__65489;
chunk__65445_65478 = G__65490;
count__65446_65479 = G__65491;
i__65447_65480 = G__65492;
continue;
} else {
var req_65493 = cljs.core.first.call(null,seq__65444_65487__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65493,prov);

var G__65494 = cljs.core.next.call(null,seq__65444_65487__$1);
var G__65495 = null;
var G__65496 = (0);
var G__65497 = (0);
seq__65444_65477 = G__65494;
chunk__65445_65478 = G__65495;
count__65446_65479 = G__65496;
i__65447_65480 = G__65497;
continue;
}
} else {
}
}
break;
}

var G__65498 = cljs.core.next.call(null,seq__65436__$1);
var G__65499 = null;
var G__65500 = (0);
var G__65501 = (0);
seq__65436 = G__65498;
chunk__65437 = G__65499;
count__65438 = G__65500;
i__65439 = G__65501;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__65506_65510 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__65507_65511 = null;
var count__65508_65512 = (0);
var i__65509_65513 = (0);
while(true){
if((i__65509_65513 < count__65508_65512)){
var ns_65514 = cljs.core._nth.call(null,chunk__65507_65511,i__65509_65513);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65514);

var G__65515 = seq__65506_65510;
var G__65516 = chunk__65507_65511;
var G__65517 = count__65508_65512;
var G__65518 = (i__65509_65513 + (1));
seq__65506_65510 = G__65515;
chunk__65507_65511 = G__65516;
count__65508_65512 = G__65517;
i__65509_65513 = G__65518;
continue;
} else {
var temp__6753__auto___65519 = cljs.core.seq.call(null,seq__65506_65510);
if(temp__6753__auto___65519){
var seq__65506_65520__$1 = temp__6753__auto___65519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65506_65520__$1)){
var c__35466__auto___65521 = cljs.core.chunk_first.call(null,seq__65506_65520__$1);
var G__65522 = cljs.core.chunk_rest.call(null,seq__65506_65520__$1);
var G__65523 = c__35466__auto___65521;
var G__65524 = cljs.core.count.call(null,c__35466__auto___65521);
var G__65525 = (0);
seq__65506_65510 = G__65522;
chunk__65507_65511 = G__65523;
count__65508_65512 = G__65524;
i__65509_65513 = G__65525;
continue;
} else {
var ns_65526 = cljs.core.first.call(null,seq__65506_65520__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65526);

var G__65527 = cljs.core.next.call(null,seq__65506_65520__$1);
var G__65528 = null;
var G__65529 = (0);
var G__65530 = (0);
seq__65506_65510 = G__65527;
chunk__65507_65511 = G__65528;
count__65508_65512 = G__65529;
i__65509_65513 = G__65530;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__34555__auto__ = goog.require__;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__65531__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__65531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65532__i = 0, G__65532__a = new Array(arguments.length -  0);
while (G__65532__i < G__65532__a.length) {G__65532__a[G__65532__i] = arguments[G__65532__i + 0]; ++G__65532__i;}
  args = new cljs.core.IndexedSeq(G__65532__a,0);
} 
return G__65531__delegate.call(this,args);};
G__65531.cljs$lang$maxFixedArity = 0;
G__65531.cljs$lang$applyTo = (function (arglist__65533){
var args = cljs.core.seq(arglist__65533);
return G__65531__delegate(args);
});
G__65531.cljs$core$IFn$_invoke$arity$variadic = G__65531__delegate;
return G__65531;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__65534 = cljs.core._EQ_;
var expr__65535 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__65534.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__65535))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__65534,expr__65535){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__65534,expr__65535))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__65534,expr__65535){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e65537){if((e65537 instanceof Error)){
var e = e65537;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65537;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__65534,expr__65535))
} else {
if(cljs.core.truth_(pred__65534.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__65535))){
return ((function (pred__65534,expr__65535){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__65534,expr__65535){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__65534,expr__65535))
);

return deferred.addErrback(((function (deferred,pred__65534,expr__65535){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__65534,expr__65535))
);
});
;})(pred__65534,expr__65535))
} else {
if(cljs.core.truth_(pred__65534.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__65535))){
return ((function (pred__65534,expr__65535){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e65538){if((e65538 instanceof Error)){
var e = e65538;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65538;

}
}})());
});
;})(pred__65534,expr__65535))
} else {
return ((function (pred__65534,expr__65535){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__65534,expr__65535))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__65539,callback){
var map__65542 = p__65539;
var map__65542__$1 = ((((!((map__65542 == null)))?((((map__65542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65542):map__65542);
var file_msg = map__65542__$1;
var request_url = cljs.core.get.call(null,map__65542__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__65542,map__65542__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__65542,map__65542__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__){
return (function (state_65566){
var state_val_65567 = (state_65566[(1)]);
if((state_val_65567 === (7))){
var inst_65562 = (state_65566[(2)]);
var state_65566__$1 = state_65566;
var statearr_65568_65588 = state_65566__$1;
(statearr_65568_65588[(2)] = inst_65562);

(statearr_65568_65588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65567 === (1))){
var state_65566__$1 = state_65566;
var statearr_65569_65589 = state_65566__$1;
(statearr_65569_65589[(2)] = null);

(statearr_65569_65589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65567 === (4))){
var inst_65546 = (state_65566[(7)]);
var inst_65546__$1 = (state_65566[(2)]);
var state_65566__$1 = (function (){var statearr_65570 = state_65566;
(statearr_65570[(7)] = inst_65546__$1);

return statearr_65570;
})();
if(cljs.core.truth_(inst_65546__$1)){
var statearr_65571_65590 = state_65566__$1;
(statearr_65571_65590[(1)] = (5));

} else {
var statearr_65572_65591 = state_65566__$1;
(statearr_65572_65591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65567 === (6))){
var state_65566__$1 = state_65566;
var statearr_65573_65592 = state_65566__$1;
(statearr_65573_65592[(2)] = null);

(statearr_65573_65592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65567 === (3))){
var inst_65564 = (state_65566[(2)]);
var state_65566__$1 = state_65566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65566__$1,inst_65564);
} else {
if((state_val_65567 === (2))){
var state_65566__$1 = state_65566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65566__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_65567 === (11))){
var inst_65558 = (state_65566[(2)]);
var state_65566__$1 = (function (){var statearr_65574 = state_65566;
(statearr_65574[(8)] = inst_65558);

return statearr_65574;
})();
var statearr_65575_65593 = state_65566__$1;
(statearr_65575_65593[(2)] = null);

(statearr_65575_65593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65567 === (9))){
var inst_65552 = (state_65566[(9)]);
var inst_65550 = (state_65566[(10)]);
var inst_65554 = inst_65552.call(null,inst_65550);
var state_65566__$1 = state_65566;
var statearr_65576_65594 = state_65566__$1;
(statearr_65576_65594[(2)] = inst_65554);

(statearr_65576_65594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65567 === (5))){
var inst_65546 = (state_65566[(7)]);
var inst_65548 = figwheel.client.file_reloading.blocking_load.call(null,inst_65546);
var state_65566__$1 = state_65566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65566__$1,(8),inst_65548);
} else {
if((state_val_65567 === (10))){
var inst_65550 = (state_65566[(10)]);
var inst_65556 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_65550);
var state_65566__$1 = state_65566;
var statearr_65577_65595 = state_65566__$1;
(statearr_65577_65595[(2)] = inst_65556);

(statearr_65577_65595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65567 === (8))){
var inst_65552 = (state_65566[(9)]);
var inst_65546 = (state_65566[(7)]);
var inst_65550 = (state_65566[(2)]);
var inst_65551 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_65552__$1 = cljs.core.get.call(null,inst_65551,inst_65546);
var state_65566__$1 = (function (){var statearr_65578 = state_65566;
(statearr_65578[(9)] = inst_65552__$1);

(statearr_65578[(10)] = inst_65550);

return statearr_65578;
})();
if(cljs.core.truth_(inst_65552__$1)){
var statearr_65579_65596 = state_65566__$1;
(statearr_65579_65596[(1)] = (9));

} else {
var statearr_65580_65597 = state_65566__$1;
(statearr_65580_65597[(1)] = (10));

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
});})(c__48312__auto__))
;
return ((function (switch__48198__auto__,c__48312__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__48199__auto__ = null;
var figwheel$client$file_reloading$state_machine__48199__auto____0 = (function (){
var statearr_65584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65584[(0)] = figwheel$client$file_reloading$state_machine__48199__auto__);

(statearr_65584[(1)] = (1));

return statearr_65584;
});
var figwheel$client$file_reloading$state_machine__48199__auto____1 = (function (state_65566){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_65566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e65585){if((e65585 instanceof Object)){
var ex__48202__auto__ = e65585;
var statearr_65586_65598 = state_65566;
(statearr_65586_65598[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65599 = state_65566;
state_65566 = G__65599;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48199__auto__ = function(state_65566){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48199__auto____1.call(this,state_65566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48199__auto____0;
figwheel$client$file_reloading$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48199__auto____1;
return figwheel$client$file_reloading$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_65587 = f__48313__auto__.call(null);
(statearr_65587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_65587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__))
);

return c__48312__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__65600,callback){
var map__65603 = p__65600;
var map__65603__$1 = ((((!((map__65603 == null)))?((((map__65603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65603):map__65603);
var file_msg = map__65603__$1;
var namespace = cljs.core.get.call(null,map__65603__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__65603,map__65603__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__65603,map__65603__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__65605){
var map__65608 = p__65605;
var map__65608__$1 = ((((!((map__65608 == null)))?((((map__65608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65608):map__65608);
var file_msg = map__65608__$1;
var namespace = cljs.core.get.call(null,map__65608__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__65610){
var map__65613 = p__65610;
var map__65613__$1 = ((((!((map__65613 == null)))?((((map__65613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65613):map__65613);
var file_msg = map__65613__$1;
var namespace = cljs.core.get.call(null,map__65613__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__34543__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__34543__auto__){
var or__34555__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
var or__34555__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34555__auto____$1)){
return or__34555__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__34543__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__65615,callback){
var map__65618 = p__65615;
var map__65618__$1 = ((((!((map__65618 == null)))?((((map__65618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65618):map__65618);
var file_msg = map__65618__$1;
var request_url = cljs.core.get.call(null,map__65618__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__65618__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__48312__auto___65722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___65722,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___65722,out){
return (function (state_65704){
var state_val_65705 = (state_65704[(1)]);
if((state_val_65705 === (1))){
var inst_65678 = cljs.core.seq.call(null,files);
var inst_65679 = cljs.core.first.call(null,inst_65678);
var inst_65680 = cljs.core.next.call(null,inst_65678);
var inst_65681 = files;
var state_65704__$1 = (function (){var statearr_65706 = state_65704;
(statearr_65706[(7)] = inst_65681);

(statearr_65706[(8)] = inst_65679);

(statearr_65706[(9)] = inst_65680);

return statearr_65706;
})();
var statearr_65707_65723 = state_65704__$1;
(statearr_65707_65723[(2)] = null);

(statearr_65707_65723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65705 === (2))){
var inst_65681 = (state_65704[(7)]);
var inst_65687 = (state_65704[(10)]);
var inst_65686 = cljs.core.seq.call(null,inst_65681);
var inst_65687__$1 = cljs.core.first.call(null,inst_65686);
var inst_65688 = cljs.core.next.call(null,inst_65686);
var inst_65689 = (inst_65687__$1 == null);
var inst_65690 = cljs.core.not.call(null,inst_65689);
var state_65704__$1 = (function (){var statearr_65708 = state_65704;
(statearr_65708[(11)] = inst_65688);

(statearr_65708[(10)] = inst_65687__$1);

return statearr_65708;
})();
if(inst_65690){
var statearr_65709_65724 = state_65704__$1;
(statearr_65709_65724[(1)] = (4));

} else {
var statearr_65710_65725 = state_65704__$1;
(statearr_65710_65725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65705 === (3))){
var inst_65702 = (state_65704[(2)]);
var state_65704__$1 = state_65704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65704__$1,inst_65702);
} else {
if((state_val_65705 === (4))){
var inst_65687 = (state_65704[(10)]);
var inst_65692 = figwheel.client.file_reloading.reload_js_file.call(null,inst_65687);
var state_65704__$1 = state_65704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65704__$1,(7),inst_65692);
} else {
if((state_val_65705 === (5))){
var inst_65698 = cljs.core.async.close_BANG_.call(null,out);
var state_65704__$1 = state_65704;
var statearr_65711_65726 = state_65704__$1;
(statearr_65711_65726[(2)] = inst_65698);

(statearr_65711_65726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65705 === (6))){
var inst_65700 = (state_65704[(2)]);
var state_65704__$1 = state_65704;
var statearr_65712_65727 = state_65704__$1;
(statearr_65712_65727[(2)] = inst_65700);

(statearr_65712_65727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65705 === (7))){
var inst_65688 = (state_65704[(11)]);
var inst_65694 = (state_65704[(2)]);
var inst_65695 = cljs.core.async.put_BANG_.call(null,out,inst_65694);
var inst_65681 = inst_65688;
var state_65704__$1 = (function (){var statearr_65713 = state_65704;
(statearr_65713[(7)] = inst_65681);

(statearr_65713[(12)] = inst_65695);

return statearr_65713;
})();
var statearr_65714_65728 = state_65704__$1;
(statearr_65714_65728[(2)] = null);

(statearr_65714_65728[(1)] = (2));


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
});})(c__48312__auto___65722,out))
;
return ((function (switch__48198__auto__,c__48312__auto___65722,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0 = (function (){
var statearr_65718 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65718[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__);

(statearr_65718[(1)] = (1));

return statearr_65718;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1 = (function (state_65704){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_65704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e65719){if((e65719 instanceof Object)){
var ex__48202__auto__ = e65719;
var statearr_65720_65729 = state_65704;
(statearr_65720_65729[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65730 = state_65704;
state_65704 = G__65730;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__ = function(state_65704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1.call(this,state_65704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___65722,out))
})();
var state__48314__auto__ = (function (){var statearr_65721 = f__48313__auto__.call(null);
(statearr_65721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___65722);

return statearr_65721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___65722,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__65731,opts){
var map__65735 = p__65731;
var map__65735__$1 = ((((!((map__65735 == null)))?((((map__65735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65735):map__65735);
var eval_body = cljs.core.get.call(null,map__65735__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__65735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__34543__auto__ = eval_body;
if(cljs.core.truth_(and__34543__auto__)){
return typeof eval_body === 'string';
} else {
return and__34543__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e65737){var e = e65737;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__65738_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65738_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__65747){
var vec__65748 = p__65747;
var k = cljs.core.nth.call(null,vec__65748,(0),null);
var v = cljs.core.nth.call(null,vec__65748,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__65751){
var vec__65752 = p__65751;
var k = cljs.core.nth.call(null,vec__65752,(0),null);
var v = cljs.core.nth.call(null,vec__65752,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__65758,p__65759){
var map__66007 = p__65758;
var map__66007__$1 = ((((!((map__66007 == null)))?((((map__66007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66007):map__66007);
var opts = map__66007__$1;
var before_jsload = cljs.core.get.call(null,map__66007__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__66007__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__66007__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__66008 = p__65759;
var map__66008__$1 = ((((!((map__66008 == null)))?((((map__66008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66008):map__66008);
var msg = map__66008__$1;
var files = cljs.core.get.call(null,map__66008__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__66008__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__66008__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_66162){
var state_val_66163 = (state_66162[(1)]);
if((state_val_66163 === (7))){
var inst_66023 = (state_66162[(7)]);
var inst_66025 = (state_66162[(8)]);
var inst_66022 = (state_66162[(9)]);
var inst_66024 = (state_66162[(10)]);
var inst_66030 = cljs.core._nth.call(null,inst_66023,inst_66025);
var inst_66031 = figwheel.client.file_reloading.eval_body.call(null,inst_66030,opts);
var inst_66032 = (inst_66025 + (1));
var tmp66164 = inst_66023;
var tmp66165 = inst_66022;
var tmp66166 = inst_66024;
var inst_66022__$1 = tmp66165;
var inst_66023__$1 = tmp66164;
var inst_66024__$1 = tmp66166;
var inst_66025__$1 = inst_66032;
var state_66162__$1 = (function (){var statearr_66167 = state_66162;
(statearr_66167[(7)] = inst_66023__$1);

(statearr_66167[(8)] = inst_66025__$1);

(statearr_66167[(11)] = inst_66031);

(statearr_66167[(9)] = inst_66022__$1);

(statearr_66167[(10)] = inst_66024__$1);

return statearr_66167;
})();
var statearr_66168_66254 = state_66162__$1;
(statearr_66168_66254[(2)] = null);

(statearr_66168_66254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (20))){
var inst_66065 = (state_66162[(12)]);
var inst_66073 = figwheel.client.file_reloading.sort_files.call(null,inst_66065);
var state_66162__$1 = state_66162;
var statearr_66169_66255 = state_66162__$1;
(statearr_66169_66255[(2)] = inst_66073);

(statearr_66169_66255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (27))){
var state_66162__$1 = state_66162;
var statearr_66170_66256 = state_66162__$1;
(statearr_66170_66256[(2)] = null);

(statearr_66170_66256[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (1))){
var inst_66014 = (state_66162[(13)]);
var inst_66011 = before_jsload.call(null,files);
var inst_66012 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_66013 = (function (){return ((function (inst_66014,inst_66011,inst_66012,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65755_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65755_SHARP_);
});
;})(inst_66014,inst_66011,inst_66012,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66014__$1 = cljs.core.filter.call(null,inst_66013,files);
var inst_66015 = cljs.core.not_empty.call(null,inst_66014__$1);
var state_66162__$1 = (function (){var statearr_66171 = state_66162;
(statearr_66171[(14)] = inst_66012);

(statearr_66171[(13)] = inst_66014__$1);

(statearr_66171[(15)] = inst_66011);

return statearr_66171;
})();
if(cljs.core.truth_(inst_66015)){
var statearr_66172_66257 = state_66162__$1;
(statearr_66172_66257[(1)] = (2));

} else {
var statearr_66173_66258 = state_66162__$1;
(statearr_66173_66258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (24))){
var state_66162__$1 = state_66162;
var statearr_66174_66259 = state_66162__$1;
(statearr_66174_66259[(2)] = null);

(statearr_66174_66259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (39))){
var inst_66115 = (state_66162[(16)]);
var state_66162__$1 = state_66162;
var statearr_66175_66260 = state_66162__$1;
(statearr_66175_66260[(2)] = inst_66115);

(statearr_66175_66260[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (46))){
var inst_66157 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
var statearr_66176_66261 = state_66162__$1;
(statearr_66176_66261[(2)] = inst_66157);

(statearr_66176_66261[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (4))){
var inst_66059 = (state_66162[(2)]);
var inst_66060 = cljs.core.List.EMPTY;
var inst_66061 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_66060);
var inst_66062 = (function (){return ((function (inst_66059,inst_66060,inst_66061,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65756_SHARP_){
var and__34543__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65756_SHARP_);
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65756_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__65756_SHARP_)));
} else {
return and__34543__auto__;
}
});
;})(inst_66059,inst_66060,inst_66061,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66063 = cljs.core.filter.call(null,inst_66062,files);
var inst_66064 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_66065 = cljs.core.concat.call(null,inst_66063,inst_66064);
var state_66162__$1 = (function (){var statearr_66177 = state_66162;
(statearr_66177[(17)] = inst_66061);

(statearr_66177[(12)] = inst_66065);

(statearr_66177[(18)] = inst_66059);

return statearr_66177;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_66178_66262 = state_66162__$1;
(statearr_66178_66262[(1)] = (16));

} else {
var statearr_66179_66263 = state_66162__$1;
(statearr_66179_66263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (15))){
var inst_66049 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
var statearr_66180_66264 = state_66162__$1;
(statearr_66180_66264[(2)] = inst_66049);

(statearr_66180_66264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (21))){
var inst_66075 = (state_66162[(19)]);
var inst_66075__$1 = (state_66162[(2)]);
var inst_66076 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_66075__$1);
var state_66162__$1 = (function (){var statearr_66181 = state_66162;
(statearr_66181[(19)] = inst_66075__$1);

return statearr_66181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66162__$1,(22),inst_66076);
} else {
if((state_val_66163 === (31))){
var inst_66160 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66162__$1,inst_66160);
} else {
if((state_val_66163 === (32))){
var inst_66115 = (state_66162[(16)]);
var inst_66120 = inst_66115.cljs$lang$protocol_mask$partition0$;
var inst_66121 = (inst_66120 & (64));
var inst_66122 = inst_66115.cljs$core$ISeq$;
var inst_66123 = (cljs.core.PROTOCOL_SENTINEL === inst_66122);
var inst_66124 = (inst_66121) || (inst_66123);
var state_66162__$1 = state_66162;
if(cljs.core.truth_(inst_66124)){
var statearr_66182_66265 = state_66162__$1;
(statearr_66182_66265[(1)] = (35));

} else {
var statearr_66183_66266 = state_66162__$1;
(statearr_66183_66266[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (40))){
var inst_66137 = (state_66162[(20)]);
var inst_66136 = (state_66162[(2)]);
var inst_66137__$1 = cljs.core.get.call(null,inst_66136,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_66138 = cljs.core.get.call(null,inst_66136,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_66139 = cljs.core.not_empty.call(null,inst_66137__$1);
var state_66162__$1 = (function (){var statearr_66184 = state_66162;
(statearr_66184[(21)] = inst_66138);

(statearr_66184[(20)] = inst_66137__$1);

return statearr_66184;
})();
if(cljs.core.truth_(inst_66139)){
var statearr_66185_66267 = state_66162__$1;
(statearr_66185_66267[(1)] = (41));

} else {
var statearr_66186_66268 = state_66162__$1;
(statearr_66186_66268[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (33))){
var state_66162__$1 = state_66162;
var statearr_66187_66269 = state_66162__$1;
(statearr_66187_66269[(2)] = false);

(statearr_66187_66269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (13))){
var inst_66035 = (state_66162[(22)]);
var inst_66039 = cljs.core.chunk_first.call(null,inst_66035);
var inst_66040 = cljs.core.chunk_rest.call(null,inst_66035);
var inst_66041 = cljs.core.count.call(null,inst_66039);
var inst_66022 = inst_66040;
var inst_66023 = inst_66039;
var inst_66024 = inst_66041;
var inst_66025 = (0);
var state_66162__$1 = (function (){var statearr_66188 = state_66162;
(statearr_66188[(7)] = inst_66023);

(statearr_66188[(8)] = inst_66025);

(statearr_66188[(9)] = inst_66022);

(statearr_66188[(10)] = inst_66024);

return statearr_66188;
})();
var statearr_66189_66270 = state_66162__$1;
(statearr_66189_66270[(2)] = null);

(statearr_66189_66270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (22))){
var inst_66083 = (state_66162[(23)]);
var inst_66079 = (state_66162[(24)]);
var inst_66078 = (state_66162[(25)]);
var inst_66075 = (state_66162[(19)]);
var inst_66078__$1 = (state_66162[(2)]);
var inst_66079__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66078__$1);
var inst_66080 = (function (){var all_files = inst_66075;
var res_SINGLEQUOTE_ = inst_66078__$1;
var res = inst_66079__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_66083,inst_66079,inst_66078,inst_66075,inst_66078__$1,inst_66079__$1,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65757_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__65757_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_66083,inst_66079,inst_66078,inst_66075,inst_66078__$1,inst_66079__$1,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66081 = cljs.core.filter.call(null,inst_66080,inst_66078__$1);
var inst_66082 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_66083__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66082);
var inst_66084 = cljs.core.not_empty.call(null,inst_66083__$1);
var state_66162__$1 = (function (){var statearr_66190 = state_66162;
(statearr_66190[(23)] = inst_66083__$1);

(statearr_66190[(26)] = inst_66081);

(statearr_66190[(24)] = inst_66079__$1);

(statearr_66190[(25)] = inst_66078__$1);

return statearr_66190;
})();
if(cljs.core.truth_(inst_66084)){
var statearr_66191_66271 = state_66162__$1;
(statearr_66191_66271[(1)] = (23));

} else {
var statearr_66192_66272 = state_66162__$1;
(statearr_66192_66272[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (36))){
var state_66162__$1 = state_66162;
var statearr_66193_66273 = state_66162__$1;
(statearr_66193_66273[(2)] = false);

(statearr_66193_66273[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (41))){
var inst_66137 = (state_66162[(20)]);
var inst_66141 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_66142 = cljs.core.map.call(null,inst_66141,inst_66137);
var inst_66143 = cljs.core.pr_str.call(null,inst_66142);
var inst_66144 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66143)].join('');
var inst_66145 = figwheel.client.utils.log.call(null,inst_66144);
var state_66162__$1 = state_66162;
var statearr_66194_66274 = state_66162__$1;
(statearr_66194_66274[(2)] = inst_66145);

(statearr_66194_66274[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (43))){
var inst_66138 = (state_66162[(21)]);
var inst_66148 = (state_66162[(2)]);
var inst_66149 = cljs.core.not_empty.call(null,inst_66138);
var state_66162__$1 = (function (){var statearr_66195 = state_66162;
(statearr_66195[(27)] = inst_66148);

return statearr_66195;
})();
if(cljs.core.truth_(inst_66149)){
var statearr_66196_66275 = state_66162__$1;
(statearr_66196_66275[(1)] = (44));

} else {
var statearr_66197_66276 = state_66162__$1;
(statearr_66197_66276[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (29))){
var inst_66083 = (state_66162[(23)]);
var inst_66081 = (state_66162[(26)]);
var inst_66079 = (state_66162[(24)]);
var inst_66078 = (state_66162[(25)]);
var inst_66115 = (state_66162[(16)]);
var inst_66075 = (state_66162[(19)]);
var inst_66111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_66114 = (function (){var all_files = inst_66075;
var res_SINGLEQUOTE_ = inst_66078;
var res = inst_66079;
var files_not_loaded = inst_66081;
var dependencies_that_loaded = inst_66083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66083,inst_66081,inst_66079,inst_66078,inst_66115,inst_66075,inst_66111,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66113){
var map__66198 = p__66113;
var map__66198__$1 = ((((!((map__66198 == null)))?((((map__66198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66198):map__66198);
var namespace = cljs.core.get.call(null,map__66198__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66083,inst_66081,inst_66079,inst_66078,inst_66115,inst_66075,inst_66111,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66115__$1 = cljs.core.group_by.call(null,inst_66114,inst_66081);
var inst_66117 = (inst_66115__$1 == null);
var inst_66118 = cljs.core.not.call(null,inst_66117);
var state_66162__$1 = (function (){var statearr_66200 = state_66162;
(statearr_66200[(28)] = inst_66111);

(statearr_66200[(16)] = inst_66115__$1);

return statearr_66200;
})();
if(inst_66118){
var statearr_66201_66277 = state_66162__$1;
(statearr_66201_66277[(1)] = (32));

} else {
var statearr_66202_66278 = state_66162__$1;
(statearr_66202_66278[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (44))){
var inst_66138 = (state_66162[(21)]);
var inst_66151 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66138);
var inst_66152 = cljs.core.pr_str.call(null,inst_66151);
var inst_66153 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66152)].join('');
var inst_66154 = figwheel.client.utils.log.call(null,inst_66153);
var state_66162__$1 = state_66162;
var statearr_66203_66279 = state_66162__$1;
(statearr_66203_66279[(2)] = inst_66154);

(statearr_66203_66279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (6))){
var inst_66056 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
var statearr_66204_66280 = state_66162__$1;
(statearr_66204_66280[(2)] = inst_66056);

(statearr_66204_66280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (28))){
var inst_66081 = (state_66162[(26)]);
var inst_66108 = (state_66162[(2)]);
var inst_66109 = cljs.core.not_empty.call(null,inst_66081);
var state_66162__$1 = (function (){var statearr_66205 = state_66162;
(statearr_66205[(29)] = inst_66108);

return statearr_66205;
})();
if(cljs.core.truth_(inst_66109)){
var statearr_66206_66281 = state_66162__$1;
(statearr_66206_66281[(1)] = (29));

} else {
var statearr_66207_66282 = state_66162__$1;
(statearr_66207_66282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (25))){
var inst_66079 = (state_66162[(24)]);
var inst_66095 = (state_66162[(2)]);
var inst_66096 = cljs.core.not_empty.call(null,inst_66079);
var state_66162__$1 = (function (){var statearr_66208 = state_66162;
(statearr_66208[(30)] = inst_66095);

return statearr_66208;
})();
if(cljs.core.truth_(inst_66096)){
var statearr_66209_66283 = state_66162__$1;
(statearr_66209_66283[(1)] = (26));

} else {
var statearr_66210_66284 = state_66162__$1;
(statearr_66210_66284[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (34))){
var inst_66131 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
if(cljs.core.truth_(inst_66131)){
var statearr_66211_66285 = state_66162__$1;
(statearr_66211_66285[(1)] = (38));

} else {
var statearr_66212_66286 = state_66162__$1;
(statearr_66212_66286[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (17))){
var state_66162__$1 = state_66162;
var statearr_66213_66287 = state_66162__$1;
(statearr_66213_66287[(2)] = recompile_dependents);

(statearr_66213_66287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (3))){
var state_66162__$1 = state_66162;
var statearr_66214_66288 = state_66162__$1;
(statearr_66214_66288[(2)] = null);

(statearr_66214_66288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (12))){
var inst_66052 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
var statearr_66215_66289 = state_66162__$1;
(statearr_66215_66289[(2)] = inst_66052);

(statearr_66215_66289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (2))){
var inst_66014 = (state_66162[(13)]);
var inst_66021 = cljs.core.seq.call(null,inst_66014);
var inst_66022 = inst_66021;
var inst_66023 = null;
var inst_66024 = (0);
var inst_66025 = (0);
var state_66162__$1 = (function (){var statearr_66216 = state_66162;
(statearr_66216[(7)] = inst_66023);

(statearr_66216[(8)] = inst_66025);

(statearr_66216[(9)] = inst_66022);

(statearr_66216[(10)] = inst_66024);

return statearr_66216;
})();
var statearr_66217_66290 = state_66162__$1;
(statearr_66217_66290[(2)] = null);

(statearr_66217_66290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (23))){
var inst_66083 = (state_66162[(23)]);
var inst_66081 = (state_66162[(26)]);
var inst_66079 = (state_66162[(24)]);
var inst_66078 = (state_66162[(25)]);
var inst_66075 = (state_66162[(19)]);
var inst_66086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_66088 = (function (){var all_files = inst_66075;
var res_SINGLEQUOTE_ = inst_66078;
var res = inst_66079;
var files_not_loaded = inst_66081;
var dependencies_that_loaded = inst_66083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66083,inst_66081,inst_66079,inst_66078,inst_66075,inst_66086,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66087){
var map__66218 = p__66087;
var map__66218__$1 = ((((!((map__66218 == null)))?((((map__66218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66218):map__66218);
var request_url = cljs.core.get.call(null,map__66218__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66083,inst_66081,inst_66079,inst_66078,inst_66075,inst_66086,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66089 = cljs.core.reverse.call(null,inst_66083);
var inst_66090 = cljs.core.map.call(null,inst_66088,inst_66089);
var inst_66091 = cljs.core.pr_str.call(null,inst_66090);
var inst_66092 = figwheel.client.utils.log.call(null,inst_66091);
var state_66162__$1 = (function (){var statearr_66220 = state_66162;
(statearr_66220[(31)] = inst_66086);

return statearr_66220;
})();
var statearr_66221_66291 = state_66162__$1;
(statearr_66221_66291[(2)] = inst_66092);

(statearr_66221_66291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (35))){
var state_66162__$1 = state_66162;
var statearr_66222_66292 = state_66162__$1;
(statearr_66222_66292[(2)] = true);

(statearr_66222_66292[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (19))){
var inst_66065 = (state_66162[(12)]);
var inst_66071 = figwheel.client.file_reloading.expand_files.call(null,inst_66065);
var state_66162__$1 = state_66162;
var statearr_66223_66293 = state_66162__$1;
(statearr_66223_66293[(2)] = inst_66071);

(statearr_66223_66293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (11))){
var state_66162__$1 = state_66162;
var statearr_66224_66294 = state_66162__$1;
(statearr_66224_66294[(2)] = null);

(statearr_66224_66294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (9))){
var inst_66054 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
var statearr_66225_66295 = state_66162__$1;
(statearr_66225_66295[(2)] = inst_66054);

(statearr_66225_66295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (5))){
var inst_66025 = (state_66162[(8)]);
var inst_66024 = (state_66162[(10)]);
var inst_66027 = (inst_66025 < inst_66024);
var inst_66028 = inst_66027;
var state_66162__$1 = state_66162;
if(cljs.core.truth_(inst_66028)){
var statearr_66226_66296 = state_66162__$1;
(statearr_66226_66296[(1)] = (7));

} else {
var statearr_66227_66297 = state_66162__$1;
(statearr_66227_66297[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (14))){
var inst_66035 = (state_66162[(22)]);
var inst_66044 = cljs.core.first.call(null,inst_66035);
var inst_66045 = figwheel.client.file_reloading.eval_body.call(null,inst_66044,opts);
var inst_66046 = cljs.core.next.call(null,inst_66035);
var inst_66022 = inst_66046;
var inst_66023 = null;
var inst_66024 = (0);
var inst_66025 = (0);
var state_66162__$1 = (function (){var statearr_66228 = state_66162;
(statearr_66228[(7)] = inst_66023);

(statearr_66228[(8)] = inst_66025);

(statearr_66228[(32)] = inst_66045);

(statearr_66228[(9)] = inst_66022);

(statearr_66228[(10)] = inst_66024);

return statearr_66228;
})();
var statearr_66229_66298 = state_66162__$1;
(statearr_66229_66298[(2)] = null);

(statearr_66229_66298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (45))){
var state_66162__$1 = state_66162;
var statearr_66230_66299 = state_66162__$1;
(statearr_66230_66299[(2)] = null);

(statearr_66230_66299[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (26))){
var inst_66083 = (state_66162[(23)]);
var inst_66081 = (state_66162[(26)]);
var inst_66079 = (state_66162[(24)]);
var inst_66078 = (state_66162[(25)]);
var inst_66075 = (state_66162[(19)]);
var inst_66098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_66100 = (function (){var all_files = inst_66075;
var res_SINGLEQUOTE_ = inst_66078;
var res = inst_66079;
var files_not_loaded = inst_66081;
var dependencies_that_loaded = inst_66083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66083,inst_66081,inst_66079,inst_66078,inst_66075,inst_66098,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66099){
var map__66231 = p__66099;
var map__66231__$1 = ((((!((map__66231 == null)))?((((map__66231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66231):map__66231);
var namespace = cljs.core.get.call(null,map__66231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__66231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66083,inst_66081,inst_66079,inst_66078,inst_66075,inst_66098,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66101 = cljs.core.map.call(null,inst_66100,inst_66079);
var inst_66102 = cljs.core.pr_str.call(null,inst_66101);
var inst_66103 = figwheel.client.utils.log.call(null,inst_66102);
var inst_66104 = (function (){var all_files = inst_66075;
var res_SINGLEQUOTE_ = inst_66078;
var res = inst_66079;
var files_not_loaded = inst_66081;
var dependencies_that_loaded = inst_66083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66083,inst_66081,inst_66079,inst_66078,inst_66075,inst_66098,inst_66100,inst_66101,inst_66102,inst_66103,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66083,inst_66081,inst_66079,inst_66078,inst_66075,inst_66098,inst_66100,inst_66101,inst_66102,inst_66103,state_val_66163,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66105 = setTimeout(inst_66104,(10));
var state_66162__$1 = (function (){var statearr_66233 = state_66162;
(statearr_66233[(33)] = inst_66098);

(statearr_66233[(34)] = inst_66103);

return statearr_66233;
})();
var statearr_66234_66300 = state_66162__$1;
(statearr_66234_66300[(2)] = inst_66105);

(statearr_66234_66300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (16))){
var state_66162__$1 = state_66162;
var statearr_66235_66301 = state_66162__$1;
(statearr_66235_66301[(2)] = reload_dependents);

(statearr_66235_66301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (38))){
var inst_66115 = (state_66162[(16)]);
var inst_66133 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66115);
var state_66162__$1 = state_66162;
var statearr_66236_66302 = state_66162__$1;
(statearr_66236_66302[(2)] = inst_66133);

(statearr_66236_66302[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (30))){
var state_66162__$1 = state_66162;
var statearr_66237_66303 = state_66162__$1;
(statearr_66237_66303[(2)] = null);

(statearr_66237_66303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (10))){
var inst_66035 = (state_66162[(22)]);
var inst_66037 = cljs.core.chunked_seq_QMARK_.call(null,inst_66035);
var state_66162__$1 = state_66162;
if(inst_66037){
var statearr_66238_66304 = state_66162__$1;
(statearr_66238_66304[(1)] = (13));

} else {
var statearr_66239_66305 = state_66162__$1;
(statearr_66239_66305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (18))){
var inst_66069 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
if(cljs.core.truth_(inst_66069)){
var statearr_66240_66306 = state_66162__$1;
(statearr_66240_66306[(1)] = (19));

} else {
var statearr_66241_66307 = state_66162__$1;
(statearr_66241_66307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (42))){
var state_66162__$1 = state_66162;
var statearr_66242_66308 = state_66162__$1;
(statearr_66242_66308[(2)] = null);

(statearr_66242_66308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (37))){
var inst_66128 = (state_66162[(2)]);
var state_66162__$1 = state_66162;
var statearr_66243_66309 = state_66162__$1;
(statearr_66243_66309[(2)] = inst_66128);

(statearr_66243_66309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66163 === (8))){
var inst_66035 = (state_66162[(22)]);
var inst_66022 = (state_66162[(9)]);
var inst_66035__$1 = cljs.core.seq.call(null,inst_66022);
var state_66162__$1 = (function (){var statearr_66244 = state_66162;
(statearr_66244[(22)] = inst_66035__$1);

return statearr_66244;
})();
if(inst_66035__$1){
var statearr_66245_66310 = state_66162__$1;
(statearr_66245_66310[(1)] = (10));

} else {
var statearr_66246_66311 = state_66162__$1;
(statearr_66246_66311[(1)] = (11));

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
});})(c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48198__auto__,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0 = (function (){
var statearr_66250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66250[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__);

(statearr_66250[(1)] = (1));

return statearr_66250;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1 = (function (state_66162){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_66162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e66251){if((e66251 instanceof Object)){
var ex__48202__auto__ = e66251;
var statearr_66252_66312 = state_66162;
(statearr_66252_66312[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66313 = state_66162;
state_66162 = G__66313;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__ = function(state_66162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1.call(this,state_66162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48314__auto__ = (function (){var statearr_66253 = f__48313__auto__.call(null);
(statearr_66253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_66253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,map__66007,map__66007__$1,opts,before_jsload,on_jsload,reload_dependents,map__66008,map__66008__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48312__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66316,link){
var map__66319 = p__66316;
var map__66319__$1 = ((((!((map__66319 == null)))?((((map__66319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66319):map__66319);
var file = cljs.core.get.call(null,map__66319__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__66319,map__66319__$1,file){
return (function (p1__66314_SHARP_,p2__66315_SHARP_){
if(cljs.core._EQ_.call(null,p1__66314_SHARP_,p2__66315_SHARP_)){
return p1__66314_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__66319,map__66319__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66325){
var map__66326 = p__66325;
var map__66326__$1 = ((((!((map__66326 == null)))?((((map__66326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66326):map__66326);
var match_length = cljs.core.get.call(null,map__66326__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__66326__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66321_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66321_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66328_SHARP_,p2__66329_SHARP_){
return cljs.core.assoc.call(null,p1__66328_SHARP_,cljs.core.get.call(null,p2__66329_SHARP_,key),p2__66329_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6751__auto__)){
var link = temp__6751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6751__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6751__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_66330 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_66330);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_66330);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66331,p__66332){
var map__66337 = p__66331;
var map__66337__$1 = ((((!((map__66337 == null)))?((((map__66337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66337):map__66337);
var on_cssload = cljs.core.get.call(null,map__66337__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__66338 = p__66332;
var map__66338__$1 = ((((!((map__66338 == null)))?((((map__66338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66338):map__66338);
var files_msg = map__66338__$1;
var files = cljs.core.get.call(null,map__66338__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6753__auto__)){
var f_datas = temp__6753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1491640782210