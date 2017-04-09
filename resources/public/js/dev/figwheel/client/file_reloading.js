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
var or__39206__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__39206__auto__){
return or__39206__auto__;
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
var or__39206__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__226564_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__226564_SHARP_));
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
var seq__226569 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__226570 = null;
var count__226571 = (0);
var i__226572 = (0);
while(true){
if((i__226572 < count__226571)){
var n = cljs.core._nth.call(null,chunk__226570,i__226572);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__226573 = seq__226569;
var G__226574 = chunk__226570;
var G__226575 = count__226571;
var G__226576 = (i__226572 + (1));
seq__226569 = G__226573;
chunk__226570 = G__226574;
count__226571 = G__226575;
i__226572 = G__226576;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__226569);
if(temp__6753__auto__){
var seq__226569__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226569__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__226569__$1);
var G__226577 = cljs.core.chunk_rest.call(null,seq__226569__$1);
var G__226578 = c__40117__auto__;
var G__226579 = cljs.core.count.call(null,c__40117__auto__);
var G__226580 = (0);
seq__226569 = G__226577;
chunk__226570 = G__226578;
count__226571 = G__226579;
i__226572 = G__226580;
continue;
} else {
var n = cljs.core.first.call(null,seq__226569__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__226581 = cljs.core.next.call(null,seq__226569__$1);
var G__226582 = null;
var G__226583 = (0);
var G__226584 = (0);
seq__226569 = G__226581;
chunk__226570 = G__226582;
count__226571 = G__226583;
i__226572 = G__226584;
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

var seq__226635_226646 = cljs.core.seq.call(null,deps);
var chunk__226636_226647 = null;
var count__226637_226648 = (0);
var i__226638_226649 = (0);
while(true){
if((i__226638_226649 < count__226637_226648)){
var dep_226650 = cljs.core._nth.call(null,chunk__226636_226647,i__226638_226649);
topo_sort_helper_STAR_.call(null,dep_226650,(depth + (1)),state);

var G__226651 = seq__226635_226646;
var G__226652 = chunk__226636_226647;
var G__226653 = count__226637_226648;
var G__226654 = (i__226638_226649 + (1));
seq__226635_226646 = G__226651;
chunk__226636_226647 = G__226652;
count__226637_226648 = G__226653;
i__226638_226649 = G__226654;
continue;
} else {
var temp__6753__auto___226655 = cljs.core.seq.call(null,seq__226635_226646);
if(temp__6753__auto___226655){
var seq__226635_226656__$1 = temp__6753__auto___226655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226635_226656__$1)){
var c__40117__auto___226657 = cljs.core.chunk_first.call(null,seq__226635_226656__$1);
var G__226658 = cljs.core.chunk_rest.call(null,seq__226635_226656__$1);
var G__226659 = c__40117__auto___226657;
var G__226660 = cljs.core.count.call(null,c__40117__auto___226657);
var G__226661 = (0);
seq__226635_226646 = G__226658;
chunk__226636_226647 = G__226659;
count__226637_226648 = G__226660;
i__226638_226649 = G__226661;
continue;
} else {
var dep_226662 = cljs.core.first.call(null,seq__226635_226656__$1);
topo_sort_helper_STAR_.call(null,dep_226662,(depth + (1)),state);

var G__226663 = cljs.core.next.call(null,seq__226635_226656__$1);
var G__226664 = null;
var G__226665 = (0);
var G__226666 = (0);
seq__226635_226646 = G__226663;
chunk__226636_226647 = G__226664;
count__226637_226648 = G__226665;
i__226638_226649 = G__226666;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__226639){
var vec__226643 = p__226639;
var seq__226644 = cljs.core.seq.call(null,vec__226643);
var first__226645 = cljs.core.first.call(null,seq__226644);
var seq__226644__$1 = cljs.core.next.call(null,seq__226644);
var x = first__226645;
var xs = seq__226644__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__226643,seq__226644,first__226645,seq__226644__$1,x,xs,get_deps__$1){
return (function (p1__226585_SHARP_){
return clojure.set.difference.call(null,p1__226585_SHARP_,x);
});})(vec__226643,seq__226644,first__226645,seq__226644__$1,x,xs,get_deps__$1))
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
var seq__226679 = cljs.core.seq.call(null,provides);
var chunk__226680 = null;
var count__226681 = (0);
var i__226682 = (0);
while(true){
if((i__226682 < count__226681)){
var prov = cljs.core._nth.call(null,chunk__226680,i__226682);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__226683_226691 = cljs.core.seq.call(null,requires);
var chunk__226684_226692 = null;
var count__226685_226693 = (0);
var i__226686_226694 = (0);
while(true){
if((i__226686_226694 < count__226685_226693)){
var req_226695 = cljs.core._nth.call(null,chunk__226684_226692,i__226686_226694);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_226695,prov);

var G__226696 = seq__226683_226691;
var G__226697 = chunk__226684_226692;
var G__226698 = count__226685_226693;
var G__226699 = (i__226686_226694 + (1));
seq__226683_226691 = G__226696;
chunk__226684_226692 = G__226697;
count__226685_226693 = G__226698;
i__226686_226694 = G__226699;
continue;
} else {
var temp__6753__auto___226700 = cljs.core.seq.call(null,seq__226683_226691);
if(temp__6753__auto___226700){
var seq__226683_226701__$1 = temp__6753__auto___226700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226683_226701__$1)){
var c__40117__auto___226702 = cljs.core.chunk_first.call(null,seq__226683_226701__$1);
var G__226703 = cljs.core.chunk_rest.call(null,seq__226683_226701__$1);
var G__226704 = c__40117__auto___226702;
var G__226705 = cljs.core.count.call(null,c__40117__auto___226702);
var G__226706 = (0);
seq__226683_226691 = G__226703;
chunk__226684_226692 = G__226704;
count__226685_226693 = G__226705;
i__226686_226694 = G__226706;
continue;
} else {
var req_226707 = cljs.core.first.call(null,seq__226683_226701__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_226707,prov);

var G__226708 = cljs.core.next.call(null,seq__226683_226701__$1);
var G__226709 = null;
var G__226710 = (0);
var G__226711 = (0);
seq__226683_226691 = G__226708;
chunk__226684_226692 = G__226709;
count__226685_226693 = G__226710;
i__226686_226694 = G__226711;
continue;
}
} else {
}
}
break;
}

var G__226712 = seq__226679;
var G__226713 = chunk__226680;
var G__226714 = count__226681;
var G__226715 = (i__226682 + (1));
seq__226679 = G__226712;
chunk__226680 = G__226713;
count__226681 = G__226714;
i__226682 = G__226715;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__226679);
if(temp__6753__auto__){
var seq__226679__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226679__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__226679__$1);
var G__226716 = cljs.core.chunk_rest.call(null,seq__226679__$1);
var G__226717 = c__40117__auto__;
var G__226718 = cljs.core.count.call(null,c__40117__auto__);
var G__226719 = (0);
seq__226679 = G__226716;
chunk__226680 = G__226717;
count__226681 = G__226718;
i__226682 = G__226719;
continue;
} else {
var prov = cljs.core.first.call(null,seq__226679__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__226687_226720 = cljs.core.seq.call(null,requires);
var chunk__226688_226721 = null;
var count__226689_226722 = (0);
var i__226690_226723 = (0);
while(true){
if((i__226690_226723 < count__226689_226722)){
var req_226724 = cljs.core._nth.call(null,chunk__226688_226721,i__226690_226723);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_226724,prov);

var G__226725 = seq__226687_226720;
var G__226726 = chunk__226688_226721;
var G__226727 = count__226689_226722;
var G__226728 = (i__226690_226723 + (1));
seq__226687_226720 = G__226725;
chunk__226688_226721 = G__226726;
count__226689_226722 = G__226727;
i__226690_226723 = G__226728;
continue;
} else {
var temp__6753__auto___226729__$1 = cljs.core.seq.call(null,seq__226687_226720);
if(temp__6753__auto___226729__$1){
var seq__226687_226730__$1 = temp__6753__auto___226729__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226687_226730__$1)){
var c__40117__auto___226731 = cljs.core.chunk_first.call(null,seq__226687_226730__$1);
var G__226732 = cljs.core.chunk_rest.call(null,seq__226687_226730__$1);
var G__226733 = c__40117__auto___226731;
var G__226734 = cljs.core.count.call(null,c__40117__auto___226731);
var G__226735 = (0);
seq__226687_226720 = G__226732;
chunk__226688_226721 = G__226733;
count__226689_226722 = G__226734;
i__226690_226723 = G__226735;
continue;
} else {
var req_226736 = cljs.core.first.call(null,seq__226687_226730__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_226736,prov);

var G__226737 = cljs.core.next.call(null,seq__226687_226730__$1);
var G__226738 = null;
var G__226739 = (0);
var G__226740 = (0);
seq__226687_226720 = G__226737;
chunk__226688_226721 = G__226738;
count__226689_226722 = G__226739;
i__226690_226723 = G__226740;
continue;
}
} else {
}
}
break;
}

var G__226741 = cljs.core.next.call(null,seq__226679__$1);
var G__226742 = null;
var G__226743 = (0);
var G__226744 = (0);
seq__226679 = G__226741;
chunk__226680 = G__226742;
count__226681 = G__226743;
i__226682 = G__226744;
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
var seq__226749_226753 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__226750_226754 = null;
var count__226751_226755 = (0);
var i__226752_226756 = (0);
while(true){
if((i__226752_226756 < count__226751_226755)){
var ns_226757 = cljs.core._nth.call(null,chunk__226750_226754,i__226752_226756);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_226757);

var G__226758 = seq__226749_226753;
var G__226759 = chunk__226750_226754;
var G__226760 = count__226751_226755;
var G__226761 = (i__226752_226756 + (1));
seq__226749_226753 = G__226758;
chunk__226750_226754 = G__226759;
count__226751_226755 = G__226760;
i__226752_226756 = G__226761;
continue;
} else {
var temp__6753__auto___226762 = cljs.core.seq.call(null,seq__226749_226753);
if(temp__6753__auto___226762){
var seq__226749_226763__$1 = temp__6753__auto___226762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226749_226763__$1)){
var c__40117__auto___226764 = cljs.core.chunk_first.call(null,seq__226749_226763__$1);
var G__226765 = cljs.core.chunk_rest.call(null,seq__226749_226763__$1);
var G__226766 = c__40117__auto___226764;
var G__226767 = cljs.core.count.call(null,c__40117__auto___226764);
var G__226768 = (0);
seq__226749_226753 = G__226765;
chunk__226750_226754 = G__226766;
count__226751_226755 = G__226767;
i__226752_226756 = G__226768;
continue;
} else {
var ns_226769 = cljs.core.first.call(null,seq__226749_226763__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_226769);

var G__226770 = cljs.core.next.call(null,seq__226749_226763__$1);
var G__226771 = null;
var G__226772 = (0);
var G__226773 = (0);
seq__226749_226753 = G__226770;
chunk__226750_226754 = G__226771;
count__226751_226755 = G__226772;
i__226752_226756 = G__226773;
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
goog.require_figwheel_backup_ = (function (){var or__39206__auto__ = goog.require__;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
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
var G__226774__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__226774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__226775__i = 0, G__226775__a = new Array(arguments.length -  0);
while (G__226775__i < G__226775__a.length) {G__226775__a[G__226775__i] = arguments[G__226775__i + 0]; ++G__226775__i;}
  args = new cljs.core.IndexedSeq(G__226775__a,0);
} 
return G__226774__delegate.call(this,args);};
G__226774.cljs$lang$maxFixedArity = 0;
G__226774.cljs$lang$applyTo = (function (arglist__226776){
var args = cljs.core.seq(arglist__226776);
return G__226774__delegate(args);
});
G__226774.cljs$core$IFn$_invoke$arity$variadic = G__226774__delegate;
return G__226774;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__226777 = cljs.core._EQ_;
var expr__226778 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__226777.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__226778))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__226777,expr__226778){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__226777,expr__226778))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__226777,expr__226778){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e226780){if((e226780 instanceof Error)){
var e = e226780;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e226780;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__226777,expr__226778))
} else {
if(cljs.core.truth_(pred__226777.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__226778))){
return ((function (pred__226777,expr__226778){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__226777,expr__226778){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__226777,expr__226778))
);

return deferred.addErrback(((function (deferred,pred__226777,expr__226778){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__226777,expr__226778))
);
});
;})(pred__226777,expr__226778))
} else {
if(cljs.core.truth_(pred__226777.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__226778))){
return ((function (pred__226777,expr__226778){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e226781){if((e226781 instanceof Error)){
var e = e226781;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e226781;

}
}})());
});
;})(pred__226777,expr__226778))
} else {
return ((function (pred__226777,expr__226778){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__226777,expr__226778))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__226782,callback){
var map__226785 = p__226782;
var map__226785__$1 = ((((!((map__226785 == null)))?((((map__226785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226785):map__226785);
var file_msg = map__226785__$1;
var request_url = cljs.core.get.call(null,map__226785__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__226785,map__226785__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__226785,map__226785__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__){
return (function (state_226809){
var state_val_226810 = (state_226809[(1)]);
if((state_val_226810 === (7))){
var inst_226805 = (state_226809[(2)]);
var state_226809__$1 = state_226809;
var statearr_226811_226831 = state_226809__$1;
(statearr_226811_226831[(2)] = inst_226805);

(statearr_226811_226831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226810 === (1))){
var state_226809__$1 = state_226809;
var statearr_226812_226832 = state_226809__$1;
(statearr_226812_226832[(2)] = null);

(statearr_226812_226832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226810 === (4))){
var inst_226789 = (state_226809[(7)]);
var inst_226789__$1 = (state_226809[(2)]);
var state_226809__$1 = (function (){var statearr_226813 = state_226809;
(statearr_226813[(7)] = inst_226789__$1);

return statearr_226813;
})();
if(cljs.core.truth_(inst_226789__$1)){
var statearr_226814_226833 = state_226809__$1;
(statearr_226814_226833[(1)] = (5));

} else {
var statearr_226815_226834 = state_226809__$1;
(statearr_226815_226834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226810 === (6))){
var state_226809__$1 = state_226809;
var statearr_226816_226835 = state_226809__$1;
(statearr_226816_226835[(2)] = null);

(statearr_226816_226835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226810 === (3))){
var inst_226807 = (state_226809[(2)]);
var state_226809__$1 = state_226809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226809__$1,inst_226807);
} else {
if((state_val_226810 === (2))){
var state_226809__$1 = state_226809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226809__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_226810 === (11))){
var inst_226801 = (state_226809[(2)]);
var state_226809__$1 = (function (){var statearr_226817 = state_226809;
(statearr_226817[(8)] = inst_226801);

return statearr_226817;
})();
var statearr_226818_226836 = state_226809__$1;
(statearr_226818_226836[(2)] = null);

(statearr_226818_226836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226810 === (9))){
var inst_226793 = (state_226809[(9)]);
var inst_226795 = (state_226809[(10)]);
var inst_226797 = inst_226795.call(null,inst_226793);
var state_226809__$1 = state_226809;
var statearr_226819_226837 = state_226809__$1;
(statearr_226819_226837[(2)] = inst_226797);

(statearr_226819_226837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226810 === (5))){
var inst_226789 = (state_226809[(7)]);
var inst_226791 = figwheel.client.file_reloading.blocking_load.call(null,inst_226789);
var state_226809__$1 = state_226809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226809__$1,(8),inst_226791);
} else {
if((state_val_226810 === (10))){
var inst_226793 = (state_226809[(9)]);
var inst_226799 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_226793);
var state_226809__$1 = state_226809;
var statearr_226820_226838 = state_226809__$1;
(statearr_226820_226838[(2)] = inst_226799);

(statearr_226820_226838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226810 === (8))){
var inst_226789 = (state_226809[(7)]);
var inst_226795 = (state_226809[(10)]);
var inst_226793 = (state_226809[(2)]);
var inst_226794 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_226795__$1 = cljs.core.get.call(null,inst_226794,inst_226789);
var state_226809__$1 = (function (){var statearr_226821 = state_226809;
(statearr_226821[(9)] = inst_226793);

(statearr_226821[(10)] = inst_226795__$1);

return statearr_226821;
})();
if(cljs.core.truth_(inst_226795__$1)){
var statearr_226822_226839 = state_226809__$1;
(statearr_226822_226839[(1)] = (9));

} else {
var statearr_226823_226840 = state_226809__$1;
(statearr_226823_226840[(1)] = (10));

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
});})(c__44084__auto__))
;
return ((function (switch__44061__auto__,c__44084__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44062__auto__ = null;
var figwheel$client$file_reloading$state_machine__44062__auto____0 = (function (){
var statearr_226827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_226827[(0)] = figwheel$client$file_reloading$state_machine__44062__auto__);

(statearr_226827[(1)] = (1));

return statearr_226827;
});
var figwheel$client$file_reloading$state_machine__44062__auto____1 = (function (state_226809){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_226809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e226828){if((e226828 instanceof Object)){
var ex__44065__auto__ = e226828;
var statearr_226829_226841 = state_226809;
(statearr_226829_226841[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e226828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__226842 = state_226809;
state_226809 = G__226842;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44062__auto__ = function(state_226809){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44062__auto____1.call(this,state_226809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44062__auto____0;
figwheel$client$file_reloading$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44062__auto____1;
return figwheel$client$file_reloading$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_226830 = f__44085__auto__.call(null);
(statearr_226830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_226830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__))
);

return c__44084__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__226843,callback){
var map__226846 = p__226843;
var map__226846__$1 = ((((!((map__226846 == null)))?((((map__226846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226846):map__226846);
var file_msg = map__226846__$1;
var namespace = cljs.core.get.call(null,map__226846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__226846,map__226846__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__226846,map__226846__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__226848){
var map__226851 = p__226848;
var map__226851__$1 = ((((!((map__226851 == null)))?((((map__226851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226851):map__226851);
var file_msg = map__226851__$1;
var namespace = cljs.core.get.call(null,map__226851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__226853){
var map__226856 = p__226853;
var map__226856__$1 = ((((!((map__226856 == null)))?((((map__226856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226856):map__226856);
var file_msg = map__226856__$1;
var namespace = cljs.core.get.call(null,map__226856__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__39194__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__39194__auto__){
var or__39206__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
var or__39206__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__39206__auto____$1)){
return or__39206__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__39194__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__226858,callback){
var map__226861 = p__226858;
var map__226861__$1 = ((((!((map__226861 == null)))?((((map__226861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226861):map__226861);
var file_msg = map__226861__$1;
var request_url = cljs.core.get.call(null,map__226861__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__226861__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__44084__auto___226965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___226965,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___226965,out){
return (function (state_226947){
var state_val_226948 = (state_226947[(1)]);
if((state_val_226948 === (1))){
var inst_226921 = cljs.core.seq.call(null,files);
var inst_226922 = cljs.core.first.call(null,inst_226921);
var inst_226923 = cljs.core.next.call(null,inst_226921);
var inst_226924 = files;
var state_226947__$1 = (function (){var statearr_226949 = state_226947;
(statearr_226949[(7)] = inst_226922);

(statearr_226949[(8)] = inst_226923);

(statearr_226949[(9)] = inst_226924);

return statearr_226949;
})();
var statearr_226950_226966 = state_226947__$1;
(statearr_226950_226966[(2)] = null);

(statearr_226950_226966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226948 === (2))){
var inst_226930 = (state_226947[(10)]);
var inst_226924 = (state_226947[(9)]);
var inst_226929 = cljs.core.seq.call(null,inst_226924);
var inst_226930__$1 = cljs.core.first.call(null,inst_226929);
var inst_226931 = cljs.core.next.call(null,inst_226929);
var inst_226932 = (inst_226930__$1 == null);
var inst_226933 = cljs.core.not.call(null,inst_226932);
var state_226947__$1 = (function (){var statearr_226951 = state_226947;
(statearr_226951[(10)] = inst_226930__$1);

(statearr_226951[(11)] = inst_226931);

return statearr_226951;
})();
if(inst_226933){
var statearr_226952_226967 = state_226947__$1;
(statearr_226952_226967[(1)] = (4));

} else {
var statearr_226953_226968 = state_226947__$1;
(statearr_226953_226968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226948 === (3))){
var inst_226945 = (state_226947[(2)]);
var state_226947__$1 = state_226947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226947__$1,inst_226945);
} else {
if((state_val_226948 === (4))){
var inst_226930 = (state_226947[(10)]);
var inst_226935 = figwheel.client.file_reloading.reload_js_file.call(null,inst_226930);
var state_226947__$1 = state_226947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226947__$1,(7),inst_226935);
} else {
if((state_val_226948 === (5))){
var inst_226941 = cljs.core.async.close_BANG_.call(null,out);
var state_226947__$1 = state_226947;
var statearr_226954_226969 = state_226947__$1;
(statearr_226954_226969[(2)] = inst_226941);

(statearr_226954_226969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226948 === (6))){
var inst_226943 = (state_226947[(2)]);
var state_226947__$1 = state_226947;
var statearr_226955_226970 = state_226947__$1;
(statearr_226955_226970[(2)] = inst_226943);

(statearr_226955_226970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_226948 === (7))){
var inst_226931 = (state_226947[(11)]);
var inst_226937 = (state_226947[(2)]);
var inst_226938 = cljs.core.async.put_BANG_.call(null,out,inst_226937);
var inst_226924 = inst_226931;
var state_226947__$1 = (function (){var statearr_226956 = state_226947;
(statearr_226956[(9)] = inst_226924);

(statearr_226956[(12)] = inst_226938);

return statearr_226956;
})();
var statearr_226957_226971 = state_226947__$1;
(statearr_226957_226971[(2)] = null);

(statearr_226957_226971[(1)] = (2));


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
});})(c__44084__auto___226965,out))
;
return ((function (switch__44061__auto__,c__44084__auto___226965,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0 = (function (){
var statearr_226961 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_226961[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__);

(statearr_226961[(1)] = (1));

return statearr_226961;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1 = (function (state_226947){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_226947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e226962){if((e226962 instanceof Object)){
var ex__44065__auto__ = e226962;
var statearr_226963_226972 = state_226947;
(statearr_226963_226972[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e226962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__226973 = state_226947;
state_226947 = G__226973;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__ = function(state_226947){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1.call(this,state_226947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___226965,out))
})();
var state__44086__auto__ = (function (){var statearr_226964 = f__44085__auto__.call(null);
(statearr_226964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___226965);

return statearr_226964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___226965,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__226974,opts){
var map__226978 = p__226974;
var map__226978__$1 = ((((!((map__226978 == null)))?((((map__226978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__226978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__226978):map__226978);
var eval_body = cljs.core.get.call(null,map__226978__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__226978__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__39194__auto__ = eval_body;
if(cljs.core.truth_(and__39194__auto__)){
return typeof eval_body === 'string';
} else {
return and__39194__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e226980){var e = e226980;
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
return (function (p1__226981_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__226981_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__226990){
var vec__226991 = p__226990;
var k = cljs.core.nth.call(null,vec__226991,(0),null);
var v = cljs.core.nth.call(null,vec__226991,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__226994){
var vec__226995 = p__226994;
var k = cljs.core.nth.call(null,vec__226995,(0),null);
var v = cljs.core.nth.call(null,vec__226995,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__227001,p__227002){
var map__227250 = p__227001;
var map__227250__$1 = ((((!((map__227250 == null)))?((((map__227250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227250):map__227250);
var opts = map__227250__$1;
var before_jsload = cljs.core.get.call(null,map__227250__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__227250__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__227250__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__227251 = p__227002;
var map__227251__$1 = ((((!((map__227251 == null)))?((((map__227251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227251):map__227251);
var msg = map__227251__$1;
var files = cljs.core.get.call(null,map__227251__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__227251__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__227251__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_227405){
var state_val_227406 = (state_227405[(1)]);
if((state_val_227406 === (7))){
var inst_227266 = (state_227405[(7)]);
var inst_227267 = (state_227405[(8)]);
var inst_227268 = (state_227405[(9)]);
var inst_227265 = (state_227405[(10)]);
var inst_227273 = cljs.core._nth.call(null,inst_227266,inst_227268);
var inst_227274 = figwheel.client.file_reloading.eval_body.call(null,inst_227273,opts);
var inst_227275 = (inst_227268 + (1));
var tmp227407 = inst_227266;
var tmp227408 = inst_227267;
var tmp227409 = inst_227265;
var inst_227265__$1 = tmp227409;
var inst_227266__$1 = tmp227407;
var inst_227267__$1 = tmp227408;
var inst_227268__$1 = inst_227275;
var state_227405__$1 = (function (){var statearr_227410 = state_227405;
(statearr_227410[(7)] = inst_227266__$1);

(statearr_227410[(8)] = inst_227267__$1);

(statearr_227410[(11)] = inst_227274);

(statearr_227410[(9)] = inst_227268__$1);

(statearr_227410[(10)] = inst_227265__$1);

return statearr_227410;
})();
var statearr_227411_227497 = state_227405__$1;
(statearr_227411_227497[(2)] = null);

(statearr_227411_227497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (20))){
var inst_227308 = (state_227405[(12)]);
var inst_227316 = figwheel.client.file_reloading.sort_files.call(null,inst_227308);
var state_227405__$1 = state_227405;
var statearr_227412_227498 = state_227405__$1;
(statearr_227412_227498[(2)] = inst_227316);

(statearr_227412_227498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (27))){
var state_227405__$1 = state_227405;
var statearr_227413_227499 = state_227405__$1;
(statearr_227413_227499[(2)] = null);

(statearr_227413_227499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (1))){
var inst_227257 = (state_227405[(13)]);
var inst_227254 = before_jsload.call(null,files);
var inst_227255 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_227256 = (function (){return ((function (inst_227257,inst_227254,inst_227255,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__226998_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__226998_SHARP_);
});
;})(inst_227257,inst_227254,inst_227255,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_227257__$1 = cljs.core.filter.call(null,inst_227256,files);
var inst_227258 = cljs.core.not_empty.call(null,inst_227257__$1);
var state_227405__$1 = (function (){var statearr_227414 = state_227405;
(statearr_227414[(13)] = inst_227257__$1);

(statearr_227414[(14)] = inst_227255);

(statearr_227414[(15)] = inst_227254);

return statearr_227414;
})();
if(cljs.core.truth_(inst_227258)){
var statearr_227415_227500 = state_227405__$1;
(statearr_227415_227500[(1)] = (2));

} else {
var statearr_227416_227501 = state_227405__$1;
(statearr_227416_227501[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (24))){
var state_227405__$1 = state_227405;
var statearr_227417_227502 = state_227405__$1;
(statearr_227417_227502[(2)] = null);

(statearr_227417_227502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (39))){
var inst_227358 = (state_227405[(16)]);
var state_227405__$1 = state_227405;
var statearr_227418_227503 = state_227405__$1;
(statearr_227418_227503[(2)] = inst_227358);

(statearr_227418_227503[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (46))){
var inst_227400 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
var statearr_227419_227504 = state_227405__$1;
(statearr_227419_227504[(2)] = inst_227400);

(statearr_227419_227504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (4))){
var inst_227302 = (state_227405[(2)]);
var inst_227303 = cljs.core.List.EMPTY;
var inst_227304 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_227303);
var inst_227305 = (function (){return ((function (inst_227302,inst_227303,inst_227304,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__226999_SHARP_){
var and__39194__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__226999_SHARP_);
if(cljs.core.truth_(and__39194__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__226999_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__226999_SHARP_)));
} else {
return and__39194__auto__;
}
});
;})(inst_227302,inst_227303,inst_227304,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_227306 = cljs.core.filter.call(null,inst_227305,files);
var inst_227307 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_227308 = cljs.core.concat.call(null,inst_227306,inst_227307);
var state_227405__$1 = (function (){var statearr_227420 = state_227405;
(statearr_227420[(17)] = inst_227302);

(statearr_227420[(12)] = inst_227308);

(statearr_227420[(18)] = inst_227304);

return statearr_227420;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_227421_227505 = state_227405__$1;
(statearr_227421_227505[(1)] = (16));

} else {
var statearr_227422_227506 = state_227405__$1;
(statearr_227422_227506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (15))){
var inst_227292 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
var statearr_227423_227507 = state_227405__$1;
(statearr_227423_227507[(2)] = inst_227292);

(statearr_227423_227507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (21))){
var inst_227318 = (state_227405[(19)]);
var inst_227318__$1 = (state_227405[(2)]);
var inst_227319 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_227318__$1);
var state_227405__$1 = (function (){var statearr_227424 = state_227405;
(statearr_227424[(19)] = inst_227318__$1);

return statearr_227424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_227405__$1,(22),inst_227319);
} else {
if((state_val_227406 === (31))){
var inst_227403 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_227405__$1,inst_227403);
} else {
if((state_val_227406 === (32))){
var inst_227358 = (state_227405[(16)]);
var inst_227363 = inst_227358.cljs$lang$protocol_mask$partition0$;
var inst_227364 = (inst_227363 & (64));
var inst_227365 = inst_227358.cljs$core$ISeq$;
var inst_227366 = (cljs.core.PROTOCOL_SENTINEL === inst_227365);
var inst_227367 = (inst_227364) || (inst_227366);
var state_227405__$1 = state_227405;
if(cljs.core.truth_(inst_227367)){
var statearr_227425_227508 = state_227405__$1;
(statearr_227425_227508[(1)] = (35));

} else {
var statearr_227426_227509 = state_227405__$1;
(statearr_227426_227509[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (40))){
var inst_227380 = (state_227405[(20)]);
var inst_227379 = (state_227405[(2)]);
var inst_227380__$1 = cljs.core.get.call(null,inst_227379,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_227381 = cljs.core.get.call(null,inst_227379,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_227382 = cljs.core.not_empty.call(null,inst_227380__$1);
var state_227405__$1 = (function (){var statearr_227427 = state_227405;
(statearr_227427[(21)] = inst_227381);

(statearr_227427[(20)] = inst_227380__$1);

return statearr_227427;
})();
if(cljs.core.truth_(inst_227382)){
var statearr_227428_227510 = state_227405__$1;
(statearr_227428_227510[(1)] = (41));

} else {
var statearr_227429_227511 = state_227405__$1;
(statearr_227429_227511[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (33))){
var state_227405__$1 = state_227405;
var statearr_227430_227512 = state_227405__$1;
(statearr_227430_227512[(2)] = false);

(statearr_227430_227512[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (13))){
var inst_227278 = (state_227405[(22)]);
var inst_227282 = cljs.core.chunk_first.call(null,inst_227278);
var inst_227283 = cljs.core.chunk_rest.call(null,inst_227278);
var inst_227284 = cljs.core.count.call(null,inst_227282);
var inst_227265 = inst_227283;
var inst_227266 = inst_227282;
var inst_227267 = inst_227284;
var inst_227268 = (0);
var state_227405__$1 = (function (){var statearr_227431 = state_227405;
(statearr_227431[(7)] = inst_227266);

(statearr_227431[(8)] = inst_227267);

(statearr_227431[(9)] = inst_227268);

(statearr_227431[(10)] = inst_227265);

return statearr_227431;
})();
var statearr_227432_227513 = state_227405__$1;
(statearr_227432_227513[(2)] = null);

(statearr_227432_227513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (22))){
var inst_227326 = (state_227405[(23)]);
var inst_227321 = (state_227405[(24)]);
var inst_227318 = (state_227405[(19)]);
var inst_227322 = (state_227405[(25)]);
var inst_227321__$1 = (state_227405[(2)]);
var inst_227322__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_227321__$1);
var inst_227323 = (function (){var all_files = inst_227318;
var res_SINGLEQUOTE_ = inst_227321__$1;
var res = inst_227322__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_227326,inst_227321,inst_227318,inst_227322,inst_227321__$1,inst_227322__$1,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__227000_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__227000_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_227326,inst_227321,inst_227318,inst_227322,inst_227321__$1,inst_227322__$1,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_227324 = cljs.core.filter.call(null,inst_227323,inst_227321__$1);
var inst_227325 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_227326__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_227325);
var inst_227327 = cljs.core.not_empty.call(null,inst_227326__$1);
var state_227405__$1 = (function (){var statearr_227433 = state_227405;
(statearr_227433[(23)] = inst_227326__$1);

(statearr_227433[(24)] = inst_227321__$1);

(statearr_227433[(26)] = inst_227324);

(statearr_227433[(25)] = inst_227322__$1);

return statearr_227433;
})();
if(cljs.core.truth_(inst_227327)){
var statearr_227434_227514 = state_227405__$1;
(statearr_227434_227514[(1)] = (23));

} else {
var statearr_227435_227515 = state_227405__$1;
(statearr_227435_227515[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (36))){
var state_227405__$1 = state_227405;
var statearr_227436_227516 = state_227405__$1;
(statearr_227436_227516[(2)] = false);

(statearr_227436_227516[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (41))){
var inst_227380 = (state_227405[(20)]);
var inst_227384 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_227385 = cljs.core.map.call(null,inst_227384,inst_227380);
var inst_227386 = cljs.core.pr_str.call(null,inst_227385);
var inst_227387 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_227386)].join('');
var inst_227388 = figwheel.client.utils.log.call(null,inst_227387);
var state_227405__$1 = state_227405;
var statearr_227437_227517 = state_227405__$1;
(statearr_227437_227517[(2)] = inst_227388);

(statearr_227437_227517[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (43))){
var inst_227381 = (state_227405[(21)]);
var inst_227391 = (state_227405[(2)]);
var inst_227392 = cljs.core.not_empty.call(null,inst_227381);
var state_227405__$1 = (function (){var statearr_227438 = state_227405;
(statearr_227438[(27)] = inst_227391);

return statearr_227438;
})();
if(cljs.core.truth_(inst_227392)){
var statearr_227439_227518 = state_227405__$1;
(statearr_227439_227518[(1)] = (44));

} else {
var statearr_227440_227519 = state_227405__$1;
(statearr_227440_227519[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (29))){
var inst_227358 = (state_227405[(16)]);
var inst_227326 = (state_227405[(23)]);
var inst_227321 = (state_227405[(24)]);
var inst_227318 = (state_227405[(19)]);
var inst_227324 = (state_227405[(26)]);
var inst_227322 = (state_227405[(25)]);
var inst_227354 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_227357 = (function (){var all_files = inst_227318;
var res_SINGLEQUOTE_ = inst_227321;
var res = inst_227322;
var files_not_loaded = inst_227324;
var dependencies_that_loaded = inst_227326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_227358,inst_227326,inst_227321,inst_227318,inst_227324,inst_227322,inst_227354,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__227356){
var map__227441 = p__227356;
var map__227441__$1 = ((((!((map__227441 == null)))?((((map__227441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227441):map__227441);
var namespace = cljs.core.get.call(null,map__227441__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_227358,inst_227326,inst_227321,inst_227318,inst_227324,inst_227322,inst_227354,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_227358__$1 = cljs.core.group_by.call(null,inst_227357,inst_227324);
var inst_227360 = (inst_227358__$1 == null);
var inst_227361 = cljs.core.not.call(null,inst_227360);
var state_227405__$1 = (function (){var statearr_227443 = state_227405;
(statearr_227443[(16)] = inst_227358__$1);

(statearr_227443[(28)] = inst_227354);

return statearr_227443;
})();
if(inst_227361){
var statearr_227444_227520 = state_227405__$1;
(statearr_227444_227520[(1)] = (32));

} else {
var statearr_227445_227521 = state_227405__$1;
(statearr_227445_227521[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (44))){
var inst_227381 = (state_227405[(21)]);
var inst_227394 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_227381);
var inst_227395 = cljs.core.pr_str.call(null,inst_227394);
var inst_227396 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_227395)].join('');
var inst_227397 = figwheel.client.utils.log.call(null,inst_227396);
var state_227405__$1 = state_227405;
var statearr_227446_227522 = state_227405__$1;
(statearr_227446_227522[(2)] = inst_227397);

(statearr_227446_227522[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (6))){
var inst_227299 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
var statearr_227447_227523 = state_227405__$1;
(statearr_227447_227523[(2)] = inst_227299);

(statearr_227447_227523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (28))){
var inst_227324 = (state_227405[(26)]);
var inst_227351 = (state_227405[(2)]);
var inst_227352 = cljs.core.not_empty.call(null,inst_227324);
var state_227405__$1 = (function (){var statearr_227448 = state_227405;
(statearr_227448[(29)] = inst_227351);

return statearr_227448;
})();
if(cljs.core.truth_(inst_227352)){
var statearr_227449_227524 = state_227405__$1;
(statearr_227449_227524[(1)] = (29));

} else {
var statearr_227450_227525 = state_227405__$1;
(statearr_227450_227525[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (25))){
var inst_227322 = (state_227405[(25)]);
var inst_227338 = (state_227405[(2)]);
var inst_227339 = cljs.core.not_empty.call(null,inst_227322);
var state_227405__$1 = (function (){var statearr_227451 = state_227405;
(statearr_227451[(30)] = inst_227338);

return statearr_227451;
})();
if(cljs.core.truth_(inst_227339)){
var statearr_227452_227526 = state_227405__$1;
(statearr_227452_227526[(1)] = (26));

} else {
var statearr_227453_227527 = state_227405__$1;
(statearr_227453_227527[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (34))){
var inst_227374 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
if(cljs.core.truth_(inst_227374)){
var statearr_227454_227528 = state_227405__$1;
(statearr_227454_227528[(1)] = (38));

} else {
var statearr_227455_227529 = state_227405__$1;
(statearr_227455_227529[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (17))){
var state_227405__$1 = state_227405;
var statearr_227456_227530 = state_227405__$1;
(statearr_227456_227530[(2)] = recompile_dependents);

(statearr_227456_227530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (3))){
var state_227405__$1 = state_227405;
var statearr_227457_227531 = state_227405__$1;
(statearr_227457_227531[(2)] = null);

(statearr_227457_227531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (12))){
var inst_227295 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
var statearr_227458_227532 = state_227405__$1;
(statearr_227458_227532[(2)] = inst_227295);

(statearr_227458_227532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (2))){
var inst_227257 = (state_227405[(13)]);
var inst_227264 = cljs.core.seq.call(null,inst_227257);
var inst_227265 = inst_227264;
var inst_227266 = null;
var inst_227267 = (0);
var inst_227268 = (0);
var state_227405__$1 = (function (){var statearr_227459 = state_227405;
(statearr_227459[(7)] = inst_227266);

(statearr_227459[(8)] = inst_227267);

(statearr_227459[(9)] = inst_227268);

(statearr_227459[(10)] = inst_227265);

return statearr_227459;
})();
var statearr_227460_227533 = state_227405__$1;
(statearr_227460_227533[(2)] = null);

(statearr_227460_227533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (23))){
var inst_227326 = (state_227405[(23)]);
var inst_227321 = (state_227405[(24)]);
var inst_227318 = (state_227405[(19)]);
var inst_227324 = (state_227405[(26)]);
var inst_227322 = (state_227405[(25)]);
var inst_227329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_227331 = (function (){var all_files = inst_227318;
var res_SINGLEQUOTE_ = inst_227321;
var res = inst_227322;
var files_not_loaded = inst_227324;
var dependencies_that_loaded = inst_227326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_227326,inst_227321,inst_227318,inst_227324,inst_227322,inst_227329,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__227330){
var map__227461 = p__227330;
var map__227461__$1 = ((((!((map__227461 == null)))?((((map__227461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227461):map__227461);
var request_url = cljs.core.get.call(null,map__227461__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_227326,inst_227321,inst_227318,inst_227324,inst_227322,inst_227329,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_227332 = cljs.core.reverse.call(null,inst_227326);
var inst_227333 = cljs.core.map.call(null,inst_227331,inst_227332);
var inst_227334 = cljs.core.pr_str.call(null,inst_227333);
var inst_227335 = figwheel.client.utils.log.call(null,inst_227334);
var state_227405__$1 = (function (){var statearr_227463 = state_227405;
(statearr_227463[(31)] = inst_227329);

return statearr_227463;
})();
var statearr_227464_227534 = state_227405__$1;
(statearr_227464_227534[(2)] = inst_227335);

(statearr_227464_227534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (35))){
var state_227405__$1 = state_227405;
var statearr_227465_227535 = state_227405__$1;
(statearr_227465_227535[(2)] = true);

(statearr_227465_227535[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (19))){
var inst_227308 = (state_227405[(12)]);
var inst_227314 = figwheel.client.file_reloading.expand_files.call(null,inst_227308);
var state_227405__$1 = state_227405;
var statearr_227466_227536 = state_227405__$1;
(statearr_227466_227536[(2)] = inst_227314);

(statearr_227466_227536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (11))){
var state_227405__$1 = state_227405;
var statearr_227467_227537 = state_227405__$1;
(statearr_227467_227537[(2)] = null);

(statearr_227467_227537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (9))){
var inst_227297 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
var statearr_227468_227538 = state_227405__$1;
(statearr_227468_227538[(2)] = inst_227297);

(statearr_227468_227538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (5))){
var inst_227267 = (state_227405[(8)]);
var inst_227268 = (state_227405[(9)]);
var inst_227270 = (inst_227268 < inst_227267);
var inst_227271 = inst_227270;
var state_227405__$1 = state_227405;
if(cljs.core.truth_(inst_227271)){
var statearr_227469_227539 = state_227405__$1;
(statearr_227469_227539[(1)] = (7));

} else {
var statearr_227470_227540 = state_227405__$1;
(statearr_227470_227540[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (14))){
var inst_227278 = (state_227405[(22)]);
var inst_227287 = cljs.core.first.call(null,inst_227278);
var inst_227288 = figwheel.client.file_reloading.eval_body.call(null,inst_227287,opts);
var inst_227289 = cljs.core.next.call(null,inst_227278);
var inst_227265 = inst_227289;
var inst_227266 = null;
var inst_227267 = (0);
var inst_227268 = (0);
var state_227405__$1 = (function (){var statearr_227471 = state_227405;
(statearr_227471[(32)] = inst_227288);

(statearr_227471[(7)] = inst_227266);

(statearr_227471[(8)] = inst_227267);

(statearr_227471[(9)] = inst_227268);

(statearr_227471[(10)] = inst_227265);

return statearr_227471;
})();
var statearr_227472_227541 = state_227405__$1;
(statearr_227472_227541[(2)] = null);

(statearr_227472_227541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (45))){
var state_227405__$1 = state_227405;
var statearr_227473_227542 = state_227405__$1;
(statearr_227473_227542[(2)] = null);

(statearr_227473_227542[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (26))){
var inst_227326 = (state_227405[(23)]);
var inst_227321 = (state_227405[(24)]);
var inst_227318 = (state_227405[(19)]);
var inst_227324 = (state_227405[(26)]);
var inst_227322 = (state_227405[(25)]);
var inst_227341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_227343 = (function (){var all_files = inst_227318;
var res_SINGLEQUOTE_ = inst_227321;
var res = inst_227322;
var files_not_loaded = inst_227324;
var dependencies_that_loaded = inst_227326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_227326,inst_227321,inst_227318,inst_227324,inst_227322,inst_227341,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__227342){
var map__227474 = p__227342;
var map__227474__$1 = ((((!((map__227474 == null)))?((((map__227474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227474):map__227474);
var namespace = cljs.core.get.call(null,map__227474__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__227474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_227326,inst_227321,inst_227318,inst_227324,inst_227322,inst_227341,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_227344 = cljs.core.map.call(null,inst_227343,inst_227322);
var inst_227345 = cljs.core.pr_str.call(null,inst_227344);
var inst_227346 = figwheel.client.utils.log.call(null,inst_227345);
var inst_227347 = (function (){var all_files = inst_227318;
var res_SINGLEQUOTE_ = inst_227321;
var res = inst_227322;
var files_not_loaded = inst_227324;
var dependencies_that_loaded = inst_227326;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_227326,inst_227321,inst_227318,inst_227324,inst_227322,inst_227341,inst_227343,inst_227344,inst_227345,inst_227346,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_227326,inst_227321,inst_227318,inst_227324,inst_227322,inst_227341,inst_227343,inst_227344,inst_227345,inst_227346,state_val_227406,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_227348 = setTimeout(inst_227347,(10));
var state_227405__$1 = (function (){var statearr_227476 = state_227405;
(statearr_227476[(33)] = inst_227341);

(statearr_227476[(34)] = inst_227346);

return statearr_227476;
})();
var statearr_227477_227543 = state_227405__$1;
(statearr_227477_227543[(2)] = inst_227348);

(statearr_227477_227543[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (16))){
var state_227405__$1 = state_227405;
var statearr_227478_227544 = state_227405__$1;
(statearr_227478_227544[(2)] = reload_dependents);

(statearr_227478_227544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (38))){
var inst_227358 = (state_227405[(16)]);
var inst_227376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_227358);
var state_227405__$1 = state_227405;
var statearr_227479_227545 = state_227405__$1;
(statearr_227479_227545[(2)] = inst_227376);

(statearr_227479_227545[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (30))){
var state_227405__$1 = state_227405;
var statearr_227480_227546 = state_227405__$1;
(statearr_227480_227546[(2)] = null);

(statearr_227480_227546[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (10))){
var inst_227278 = (state_227405[(22)]);
var inst_227280 = cljs.core.chunked_seq_QMARK_.call(null,inst_227278);
var state_227405__$1 = state_227405;
if(inst_227280){
var statearr_227481_227547 = state_227405__$1;
(statearr_227481_227547[(1)] = (13));

} else {
var statearr_227482_227548 = state_227405__$1;
(statearr_227482_227548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (18))){
var inst_227312 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
if(cljs.core.truth_(inst_227312)){
var statearr_227483_227549 = state_227405__$1;
(statearr_227483_227549[(1)] = (19));

} else {
var statearr_227484_227550 = state_227405__$1;
(statearr_227484_227550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (42))){
var state_227405__$1 = state_227405;
var statearr_227485_227551 = state_227405__$1;
(statearr_227485_227551[(2)] = null);

(statearr_227485_227551[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (37))){
var inst_227371 = (state_227405[(2)]);
var state_227405__$1 = state_227405;
var statearr_227486_227552 = state_227405__$1;
(statearr_227486_227552[(2)] = inst_227371);

(statearr_227486_227552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_227406 === (8))){
var inst_227278 = (state_227405[(22)]);
var inst_227265 = (state_227405[(10)]);
var inst_227278__$1 = cljs.core.seq.call(null,inst_227265);
var state_227405__$1 = (function (){var statearr_227487 = state_227405;
(statearr_227487[(22)] = inst_227278__$1);

return statearr_227487;
})();
if(inst_227278__$1){
var statearr_227488_227553 = state_227405__$1;
(statearr_227488_227553[(1)] = (10));

} else {
var statearr_227489_227554 = state_227405__$1;
(statearr_227489_227554[(1)] = (11));

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
});})(c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44061__auto__,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0 = (function (){
var statearr_227493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_227493[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__);

(statearr_227493[(1)] = (1));

return statearr_227493;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1 = (function (state_227405){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_227405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e227494){if((e227494 instanceof Object)){
var ex__44065__auto__ = e227494;
var statearr_227495_227555 = state_227405;
(statearr_227495_227555[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_227405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e227494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__227556 = state_227405;
state_227405 = G__227556;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__ = function(state_227405){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1.call(this,state_227405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44086__auto__ = (function (){var statearr_227496 = f__44085__auto__.call(null);
(statearr_227496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_227496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,map__227250,map__227250__$1,opts,before_jsload,on_jsload,reload_dependents,map__227251,map__227251__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44084__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__227559,link){
var map__227562 = p__227559;
var map__227562__$1 = ((((!((map__227562 == null)))?((((map__227562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227562):map__227562);
var file = cljs.core.get.call(null,map__227562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__227562,map__227562__$1,file){
return (function (p1__227557_SHARP_,p2__227558_SHARP_){
if(cljs.core._EQ_.call(null,p1__227557_SHARP_,p2__227558_SHARP_)){
return p1__227557_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__227562,map__227562__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__227568){
var map__227569 = p__227568;
var map__227569__$1 = ((((!((map__227569 == null)))?((((map__227569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227569):map__227569);
var match_length = cljs.core.get.call(null,map__227569__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__227569__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__227564_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__227564_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__227571_SHARP_,p2__227572_SHARP_){
return cljs.core.assoc.call(null,p1__227571_SHARP_,cljs.core.get.call(null,p2__227572_SHARP_,key),p2__227572_SHARP_);
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
var loaded_f_datas_227573 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_227573);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_227573);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__227574,p__227575){
var map__227580 = p__227574;
var map__227580__$1 = ((((!((map__227580 == null)))?((((map__227580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227580):map__227580);
var on_cssload = cljs.core.get.call(null,map__227580__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__227581 = p__227575;
var map__227581__$1 = ((((!((map__227581 == null)))?((((map__227581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__227581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__227581):map__227581);
var files_msg = map__227581__$1;
var files = cljs.core.get.call(null,map__227581__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1491715147646