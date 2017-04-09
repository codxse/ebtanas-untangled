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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__187818_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__187818_SHARP_));
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
var seq__187823 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__187824 = null;
var count__187825 = (0);
var i__187826 = (0);
while(true){
if((i__187826 < count__187825)){
var n = cljs.core._nth.call(null,chunk__187824,i__187826);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__187827 = seq__187823;
var G__187828 = chunk__187824;
var G__187829 = count__187825;
var G__187830 = (i__187826 + (1));
seq__187823 = G__187827;
chunk__187824 = G__187828;
count__187825 = G__187829;
i__187826 = G__187830;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__187823);
if(temp__6753__auto__){
var seq__187823__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__187823__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__187823__$1);
var G__187831 = cljs.core.chunk_rest.call(null,seq__187823__$1);
var G__187832 = c__40117__auto__;
var G__187833 = cljs.core.count.call(null,c__40117__auto__);
var G__187834 = (0);
seq__187823 = G__187831;
chunk__187824 = G__187832;
count__187825 = G__187833;
i__187826 = G__187834;
continue;
} else {
var n = cljs.core.first.call(null,seq__187823__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__187835 = cljs.core.next.call(null,seq__187823__$1);
var G__187836 = null;
var G__187837 = (0);
var G__187838 = (0);
seq__187823 = G__187835;
chunk__187824 = G__187836;
count__187825 = G__187837;
i__187826 = G__187838;
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

var seq__187889_187900 = cljs.core.seq.call(null,deps);
var chunk__187890_187901 = null;
var count__187891_187902 = (0);
var i__187892_187903 = (0);
while(true){
if((i__187892_187903 < count__187891_187902)){
var dep_187904 = cljs.core._nth.call(null,chunk__187890_187901,i__187892_187903);
topo_sort_helper_STAR_.call(null,dep_187904,(depth + (1)),state);

var G__187905 = seq__187889_187900;
var G__187906 = chunk__187890_187901;
var G__187907 = count__187891_187902;
var G__187908 = (i__187892_187903 + (1));
seq__187889_187900 = G__187905;
chunk__187890_187901 = G__187906;
count__187891_187902 = G__187907;
i__187892_187903 = G__187908;
continue;
} else {
var temp__6753__auto___187909 = cljs.core.seq.call(null,seq__187889_187900);
if(temp__6753__auto___187909){
var seq__187889_187910__$1 = temp__6753__auto___187909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__187889_187910__$1)){
var c__40117__auto___187911 = cljs.core.chunk_first.call(null,seq__187889_187910__$1);
var G__187912 = cljs.core.chunk_rest.call(null,seq__187889_187910__$1);
var G__187913 = c__40117__auto___187911;
var G__187914 = cljs.core.count.call(null,c__40117__auto___187911);
var G__187915 = (0);
seq__187889_187900 = G__187912;
chunk__187890_187901 = G__187913;
count__187891_187902 = G__187914;
i__187892_187903 = G__187915;
continue;
} else {
var dep_187916 = cljs.core.first.call(null,seq__187889_187910__$1);
topo_sort_helper_STAR_.call(null,dep_187916,(depth + (1)),state);

var G__187917 = cljs.core.next.call(null,seq__187889_187910__$1);
var G__187918 = null;
var G__187919 = (0);
var G__187920 = (0);
seq__187889_187900 = G__187917;
chunk__187890_187901 = G__187918;
count__187891_187902 = G__187919;
i__187892_187903 = G__187920;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__187893){
var vec__187897 = p__187893;
var seq__187898 = cljs.core.seq.call(null,vec__187897);
var first__187899 = cljs.core.first.call(null,seq__187898);
var seq__187898__$1 = cljs.core.next.call(null,seq__187898);
var x = first__187899;
var xs = seq__187898__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__187897,seq__187898,first__187899,seq__187898__$1,x,xs,get_deps__$1){
return (function (p1__187839_SHARP_){
return clojure.set.difference.call(null,p1__187839_SHARP_,x);
});})(vec__187897,seq__187898,first__187899,seq__187898__$1,x,xs,get_deps__$1))
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
var seq__187933 = cljs.core.seq.call(null,provides);
var chunk__187934 = null;
var count__187935 = (0);
var i__187936 = (0);
while(true){
if((i__187936 < count__187935)){
var prov = cljs.core._nth.call(null,chunk__187934,i__187936);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__187937_187945 = cljs.core.seq.call(null,requires);
var chunk__187938_187946 = null;
var count__187939_187947 = (0);
var i__187940_187948 = (0);
while(true){
if((i__187940_187948 < count__187939_187947)){
var req_187949 = cljs.core._nth.call(null,chunk__187938_187946,i__187940_187948);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_187949,prov);

var G__187950 = seq__187937_187945;
var G__187951 = chunk__187938_187946;
var G__187952 = count__187939_187947;
var G__187953 = (i__187940_187948 + (1));
seq__187937_187945 = G__187950;
chunk__187938_187946 = G__187951;
count__187939_187947 = G__187952;
i__187940_187948 = G__187953;
continue;
} else {
var temp__6753__auto___187954 = cljs.core.seq.call(null,seq__187937_187945);
if(temp__6753__auto___187954){
var seq__187937_187955__$1 = temp__6753__auto___187954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__187937_187955__$1)){
var c__40117__auto___187956 = cljs.core.chunk_first.call(null,seq__187937_187955__$1);
var G__187957 = cljs.core.chunk_rest.call(null,seq__187937_187955__$1);
var G__187958 = c__40117__auto___187956;
var G__187959 = cljs.core.count.call(null,c__40117__auto___187956);
var G__187960 = (0);
seq__187937_187945 = G__187957;
chunk__187938_187946 = G__187958;
count__187939_187947 = G__187959;
i__187940_187948 = G__187960;
continue;
} else {
var req_187961 = cljs.core.first.call(null,seq__187937_187955__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_187961,prov);

var G__187962 = cljs.core.next.call(null,seq__187937_187955__$1);
var G__187963 = null;
var G__187964 = (0);
var G__187965 = (0);
seq__187937_187945 = G__187962;
chunk__187938_187946 = G__187963;
count__187939_187947 = G__187964;
i__187940_187948 = G__187965;
continue;
}
} else {
}
}
break;
}

var G__187966 = seq__187933;
var G__187967 = chunk__187934;
var G__187968 = count__187935;
var G__187969 = (i__187936 + (1));
seq__187933 = G__187966;
chunk__187934 = G__187967;
count__187935 = G__187968;
i__187936 = G__187969;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__187933);
if(temp__6753__auto__){
var seq__187933__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__187933__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__187933__$1);
var G__187970 = cljs.core.chunk_rest.call(null,seq__187933__$1);
var G__187971 = c__40117__auto__;
var G__187972 = cljs.core.count.call(null,c__40117__auto__);
var G__187973 = (0);
seq__187933 = G__187970;
chunk__187934 = G__187971;
count__187935 = G__187972;
i__187936 = G__187973;
continue;
} else {
var prov = cljs.core.first.call(null,seq__187933__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__187941_187974 = cljs.core.seq.call(null,requires);
var chunk__187942_187975 = null;
var count__187943_187976 = (0);
var i__187944_187977 = (0);
while(true){
if((i__187944_187977 < count__187943_187976)){
var req_187978 = cljs.core._nth.call(null,chunk__187942_187975,i__187944_187977);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_187978,prov);

var G__187979 = seq__187941_187974;
var G__187980 = chunk__187942_187975;
var G__187981 = count__187943_187976;
var G__187982 = (i__187944_187977 + (1));
seq__187941_187974 = G__187979;
chunk__187942_187975 = G__187980;
count__187943_187976 = G__187981;
i__187944_187977 = G__187982;
continue;
} else {
var temp__6753__auto___187983__$1 = cljs.core.seq.call(null,seq__187941_187974);
if(temp__6753__auto___187983__$1){
var seq__187941_187984__$1 = temp__6753__auto___187983__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__187941_187984__$1)){
var c__40117__auto___187985 = cljs.core.chunk_first.call(null,seq__187941_187984__$1);
var G__187986 = cljs.core.chunk_rest.call(null,seq__187941_187984__$1);
var G__187987 = c__40117__auto___187985;
var G__187988 = cljs.core.count.call(null,c__40117__auto___187985);
var G__187989 = (0);
seq__187941_187974 = G__187986;
chunk__187942_187975 = G__187987;
count__187943_187976 = G__187988;
i__187944_187977 = G__187989;
continue;
} else {
var req_187990 = cljs.core.first.call(null,seq__187941_187984__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_187990,prov);

var G__187991 = cljs.core.next.call(null,seq__187941_187984__$1);
var G__187992 = null;
var G__187993 = (0);
var G__187994 = (0);
seq__187941_187974 = G__187991;
chunk__187942_187975 = G__187992;
count__187943_187976 = G__187993;
i__187944_187977 = G__187994;
continue;
}
} else {
}
}
break;
}

var G__187995 = cljs.core.next.call(null,seq__187933__$1);
var G__187996 = null;
var G__187997 = (0);
var G__187998 = (0);
seq__187933 = G__187995;
chunk__187934 = G__187996;
count__187935 = G__187997;
i__187936 = G__187998;
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
var seq__188003_188007 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__188004_188008 = null;
var count__188005_188009 = (0);
var i__188006_188010 = (0);
while(true){
if((i__188006_188010 < count__188005_188009)){
var ns_188011 = cljs.core._nth.call(null,chunk__188004_188008,i__188006_188010);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_188011);

var G__188012 = seq__188003_188007;
var G__188013 = chunk__188004_188008;
var G__188014 = count__188005_188009;
var G__188015 = (i__188006_188010 + (1));
seq__188003_188007 = G__188012;
chunk__188004_188008 = G__188013;
count__188005_188009 = G__188014;
i__188006_188010 = G__188015;
continue;
} else {
var temp__6753__auto___188016 = cljs.core.seq.call(null,seq__188003_188007);
if(temp__6753__auto___188016){
var seq__188003_188017__$1 = temp__6753__auto___188016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__188003_188017__$1)){
var c__40117__auto___188018 = cljs.core.chunk_first.call(null,seq__188003_188017__$1);
var G__188019 = cljs.core.chunk_rest.call(null,seq__188003_188017__$1);
var G__188020 = c__40117__auto___188018;
var G__188021 = cljs.core.count.call(null,c__40117__auto___188018);
var G__188022 = (0);
seq__188003_188007 = G__188019;
chunk__188004_188008 = G__188020;
count__188005_188009 = G__188021;
i__188006_188010 = G__188022;
continue;
} else {
var ns_188023 = cljs.core.first.call(null,seq__188003_188017__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_188023);

var G__188024 = cljs.core.next.call(null,seq__188003_188017__$1);
var G__188025 = null;
var G__188026 = (0);
var G__188027 = (0);
seq__188003_188007 = G__188024;
chunk__188004_188008 = G__188025;
count__188005_188009 = G__188026;
i__188006_188010 = G__188027;
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
var G__188028__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__188028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__188029__i = 0, G__188029__a = new Array(arguments.length -  0);
while (G__188029__i < G__188029__a.length) {G__188029__a[G__188029__i] = arguments[G__188029__i + 0]; ++G__188029__i;}
  args = new cljs.core.IndexedSeq(G__188029__a,0);
} 
return G__188028__delegate.call(this,args);};
G__188028.cljs$lang$maxFixedArity = 0;
G__188028.cljs$lang$applyTo = (function (arglist__188030){
var args = cljs.core.seq(arglist__188030);
return G__188028__delegate(args);
});
G__188028.cljs$core$IFn$_invoke$arity$variadic = G__188028__delegate;
return G__188028;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__188031 = cljs.core._EQ_;
var expr__188032 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__188031.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__188032))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__188031,expr__188032){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__188031,expr__188032))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__188031,expr__188032){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e188034){if((e188034 instanceof Error)){
var e = e188034;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e188034;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__188031,expr__188032))
} else {
if(cljs.core.truth_(pred__188031.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__188032))){
return ((function (pred__188031,expr__188032){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__188031,expr__188032){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__188031,expr__188032))
);

return deferred.addErrback(((function (deferred,pred__188031,expr__188032){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__188031,expr__188032))
);
});
;})(pred__188031,expr__188032))
} else {
if(cljs.core.truth_(pred__188031.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__188032))){
return ((function (pred__188031,expr__188032){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e188035){if((e188035 instanceof Error)){
var e = e188035;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e188035;

}
}})());
});
;})(pred__188031,expr__188032))
} else {
return ((function (pred__188031,expr__188032){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__188031,expr__188032))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__188036,callback){
var map__188039 = p__188036;
var map__188039__$1 = ((((!((map__188039 == null)))?((((map__188039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188039):map__188039);
var file_msg = map__188039__$1;
var request_url = cljs.core.get.call(null,map__188039__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__188039,map__188039__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__188039,map__188039__$1,file_msg,request_url))
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
return (function (state_188063){
var state_val_188064 = (state_188063[(1)]);
if((state_val_188064 === (7))){
var inst_188059 = (state_188063[(2)]);
var state_188063__$1 = state_188063;
var statearr_188065_188085 = state_188063__$1;
(statearr_188065_188085[(2)] = inst_188059);

(statearr_188065_188085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188064 === (1))){
var state_188063__$1 = state_188063;
var statearr_188066_188086 = state_188063__$1;
(statearr_188066_188086[(2)] = null);

(statearr_188066_188086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188064 === (4))){
var inst_188043 = (state_188063[(7)]);
var inst_188043__$1 = (state_188063[(2)]);
var state_188063__$1 = (function (){var statearr_188067 = state_188063;
(statearr_188067[(7)] = inst_188043__$1);

return statearr_188067;
})();
if(cljs.core.truth_(inst_188043__$1)){
var statearr_188068_188087 = state_188063__$1;
(statearr_188068_188087[(1)] = (5));

} else {
var statearr_188069_188088 = state_188063__$1;
(statearr_188069_188088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188064 === (6))){
var state_188063__$1 = state_188063;
var statearr_188070_188089 = state_188063__$1;
(statearr_188070_188089[(2)] = null);

(statearr_188070_188089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188064 === (3))){
var inst_188061 = (state_188063[(2)]);
var state_188063__$1 = state_188063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188063__$1,inst_188061);
} else {
if((state_val_188064 === (2))){
var state_188063__$1 = state_188063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_188063__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_188064 === (11))){
var inst_188055 = (state_188063[(2)]);
var state_188063__$1 = (function (){var statearr_188071 = state_188063;
(statearr_188071[(8)] = inst_188055);

return statearr_188071;
})();
var statearr_188072_188090 = state_188063__$1;
(statearr_188072_188090[(2)] = null);

(statearr_188072_188090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188064 === (9))){
var inst_188049 = (state_188063[(9)]);
var inst_188047 = (state_188063[(10)]);
var inst_188051 = inst_188049.call(null,inst_188047);
var state_188063__$1 = state_188063;
var statearr_188073_188091 = state_188063__$1;
(statearr_188073_188091[(2)] = inst_188051);

(statearr_188073_188091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188064 === (5))){
var inst_188043 = (state_188063[(7)]);
var inst_188045 = figwheel.client.file_reloading.blocking_load.call(null,inst_188043);
var state_188063__$1 = state_188063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_188063__$1,(8),inst_188045);
} else {
if((state_val_188064 === (10))){
var inst_188047 = (state_188063[(10)]);
var inst_188053 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_188047);
var state_188063__$1 = state_188063;
var statearr_188074_188092 = state_188063__$1;
(statearr_188074_188092[(2)] = inst_188053);

(statearr_188074_188092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188064 === (8))){
var inst_188049 = (state_188063[(9)]);
var inst_188043 = (state_188063[(7)]);
var inst_188047 = (state_188063[(2)]);
var inst_188048 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_188049__$1 = cljs.core.get.call(null,inst_188048,inst_188043);
var state_188063__$1 = (function (){var statearr_188075 = state_188063;
(statearr_188075[(9)] = inst_188049__$1);

(statearr_188075[(10)] = inst_188047);

return statearr_188075;
})();
if(cljs.core.truth_(inst_188049__$1)){
var statearr_188076_188093 = state_188063__$1;
(statearr_188076_188093[(1)] = (9));

} else {
var statearr_188077_188094 = state_188063__$1;
(statearr_188077_188094[(1)] = (10));

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
var statearr_188081 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_188081[(0)] = figwheel$client$file_reloading$state_machine__44062__auto__);

(statearr_188081[(1)] = (1));

return statearr_188081;
});
var figwheel$client$file_reloading$state_machine__44062__auto____1 = (function (state_188063){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_188063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e188082){if((e188082 instanceof Object)){
var ex__44065__auto__ = e188082;
var statearr_188083_188095 = state_188063;
(statearr_188083_188095[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e188082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__188096 = state_188063;
state_188063 = G__188096;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44062__auto__ = function(state_188063){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44062__auto____1.call(this,state_188063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44062__auto____0;
figwheel$client$file_reloading$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44062__auto____1;
return figwheel$client$file_reloading$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_188084 = f__44085__auto__.call(null);
(statearr_188084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_188084;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__188097,callback){
var map__188100 = p__188097;
var map__188100__$1 = ((((!((map__188100 == null)))?((((map__188100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188100):map__188100);
var file_msg = map__188100__$1;
var namespace = cljs.core.get.call(null,map__188100__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__188100,map__188100__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__188100,map__188100__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__188102){
var map__188105 = p__188102;
var map__188105__$1 = ((((!((map__188105 == null)))?((((map__188105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188105):map__188105);
var file_msg = map__188105__$1;
var namespace = cljs.core.get.call(null,map__188105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__188107){
var map__188110 = p__188107;
var map__188110__$1 = ((((!((map__188110 == null)))?((((map__188110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188110):map__188110);
var file_msg = map__188110__$1;
var namespace = cljs.core.get.call(null,map__188110__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__188112,callback){
var map__188115 = p__188112;
var map__188115__$1 = ((((!((map__188115 == null)))?((((map__188115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188115):map__188115);
var file_msg = map__188115__$1;
var request_url = cljs.core.get.call(null,map__188115__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__188115__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__44084__auto___188219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___188219,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___188219,out){
return (function (state_188201){
var state_val_188202 = (state_188201[(1)]);
if((state_val_188202 === (1))){
var inst_188175 = cljs.core.seq.call(null,files);
var inst_188176 = cljs.core.first.call(null,inst_188175);
var inst_188177 = cljs.core.next.call(null,inst_188175);
var inst_188178 = files;
var state_188201__$1 = (function (){var statearr_188203 = state_188201;
(statearr_188203[(7)] = inst_188178);

(statearr_188203[(8)] = inst_188177);

(statearr_188203[(9)] = inst_188176);

return statearr_188203;
})();
var statearr_188204_188220 = state_188201__$1;
(statearr_188204_188220[(2)] = null);

(statearr_188204_188220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188202 === (2))){
var inst_188184 = (state_188201[(10)]);
var inst_188178 = (state_188201[(7)]);
var inst_188183 = cljs.core.seq.call(null,inst_188178);
var inst_188184__$1 = cljs.core.first.call(null,inst_188183);
var inst_188185 = cljs.core.next.call(null,inst_188183);
var inst_188186 = (inst_188184__$1 == null);
var inst_188187 = cljs.core.not.call(null,inst_188186);
var state_188201__$1 = (function (){var statearr_188205 = state_188201;
(statearr_188205[(11)] = inst_188185);

(statearr_188205[(10)] = inst_188184__$1);

return statearr_188205;
})();
if(inst_188187){
var statearr_188206_188221 = state_188201__$1;
(statearr_188206_188221[(1)] = (4));

} else {
var statearr_188207_188222 = state_188201__$1;
(statearr_188207_188222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188202 === (3))){
var inst_188199 = (state_188201[(2)]);
var state_188201__$1 = state_188201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188201__$1,inst_188199);
} else {
if((state_val_188202 === (4))){
var inst_188184 = (state_188201[(10)]);
var inst_188189 = figwheel.client.file_reloading.reload_js_file.call(null,inst_188184);
var state_188201__$1 = state_188201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_188201__$1,(7),inst_188189);
} else {
if((state_val_188202 === (5))){
var inst_188195 = cljs.core.async.close_BANG_.call(null,out);
var state_188201__$1 = state_188201;
var statearr_188208_188223 = state_188201__$1;
(statearr_188208_188223[(2)] = inst_188195);

(statearr_188208_188223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188202 === (6))){
var inst_188197 = (state_188201[(2)]);
var state_188201__$1 = state_188201;
var statearr_188209_188224 = state_188201__$1;
(statearr_188209_188224[(2)] = inst_188197);

(statearr_188209_188224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188202 === (7))){
var inst_188185 = (state_188201[(11)]);
var inst_188191 = (state_188201[(2)]);
var inst_188192 = cljs.core.async.put_BANG_.call(null,out,inst_188191);
var inst_188178 = inst_188185;
var state_188201__$1 = (function (){var statearr_188210 = state_188201;
(statearr_188210[(12)] = inst_188192);

(statearr_188210[(7)] = inst_188178);

return statearr_188210;
})();
var statearr_188211_188225 = state_188201__$1;
(statearr_188211_188225[(2)] = null);

(statearr_188211_188225[(1)] = (2));


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
});})(c__44084__auto___188219,out))
;
return ((function (switch__44061__auto__,c__44084__auto___188219,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0 = (function (){
var statearr_188215 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_188215[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__);

(statearr_188215[(1)] = (1));

return statearr_188215;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1 = (function (state_188201){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_188201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e188216){if((e188216 instanceof Object)){
var ex__44065__auto__ = e188216;
var statearr_188217_188226 = state_188201;
(statearr_188217_188226[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e188216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__188227 = state_188201;
state_188201 = G__188227;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__ = function(state_188201){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1.call(this,state_188201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___188219,out))
})();
var state__44086__auto__ = (function (){var statearr_188218 = f__44085__auto__.call(null);
(statearr_188218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___188219);

return statearr_188218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___188219,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__188228,opts){
var map__188232 = p__188228;
var map__188232__$1 = ((((!((map__188232 == null)))?((((map__188232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188232):map__188232);
var eval_body = cljs.core.get.call(null,map__188232__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__188232__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e188234){var e = e188234;
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
return (function (p1__188235_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__188235_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__188244){
var vec__188245 = p__188244;
var k = cljs.core.nth.call(null,vec__188245,(0),null);
var v = cljs.core.nth.call(null,vec__188245,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__188248){
var vec__188249 = p__188248;
var k = cljs.core.nth.call(null,vec__188249,(0),null);
var v = cljs.core.nth.call(null,vec__188249,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__188255,p__188256){
var map__188504 = p__188255;
var map__188504__$1 = ((((!((map__188504 == null)))?((((map__188504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188504):map__188504);
var opts = map__188504__$1;
var before_jsload = cljs.core.get.call(null,map__188504__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__188504__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__188504__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__188505 = p__188256;
var map__188505__$1 = ((((!((map__188505 == null)))?((((map__188505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188505):map__188505);
var msg = map__188505__$1;
var files = cljs.core.get.call(null,map__188505__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__188505__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__188505__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_188659){
var state_val_188660 = (state_188659[(1)]);
if((state_val_188660 === (7))){
var inst_188519 = (state_188659[(7)]);
var inst_188521 = (state_188659[(8)]);
var inst_188520 = (state_188659[(9)]);
var inst_188522 = (state_188659[(10)]);
var inst_188527 = cljs.core._nth.call(null,inst_188520,inst_188522);
var inst_188528 = figwheel.client.file_reloading.eval_body.call(null,inst_188527,opts);
var inst_188529 = (inst_188522 + (1));
var tmp188661 = inst_188519;
var tmp188662 = inst_188521;
var tmp188663 = inst_188520;
var inst_188519__$1 = tmp188661;
var inst_188520__$1 = tmp188663;
var inst_188521__$1 = tmp188662;
var inst_188522__$1 = inst_188529;
var state_188659__$1 = (function (){var statearr_188664 = state_188659;
(statearr_188664[(7)] = inst_188519__$1);

(statearr_188664[(8)] = inst_188521__$1);

(statearr_188664[(11)] = inst_188528);

(statearr_188664[(9)] = inst_188520__$1);

(statearr_188664[(10)] = inst_188522__$1);

return statearr_188664;
})();
var statearr_188665_188751 = state_188659__$1;
(statearr_188665_188751[(2)] = null);

(statearr_188665_188751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (20))){
var inst_188562 = (state_188659[(12)]);
var inst_188570 = figwheel.client.file_reloading.sort_files.call(null,inst_188562);
var state_188659__$1 = state_188659;
var statearr_188666_188752 = state_188659__$1;
(statearr_188666_188752[(2)] = inst_188570);

(statearr_188666_188752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (27))){
var state_188659__$1 = state_188659;
var statearr_188667_188753 = state_188659__$1;
(statearr_188667_188753[(2)] = null);

(statearr_188667_188753[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (1))){
var inst_188511 = (state_188659[(13)]);
var inst_188508 = before_jsload.call(null,files);
var inst_188509 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_188510 = (function (){return ((function (inst_188511,inst_188508,inst_188509,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__188252_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__188252_SHARP_);
});
;})(inst_188511,inst_188508,inst_188509,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_188511__$1 = cljs.core.filter.call(null,inst_188510,files);
var inst_188512 = cljs.core.not_empty.call(null,inst_188511__$1);
var state_188659__$1 = (function (){var statearr_188668 = state_188659;
(statearr_188668[(14)] = inst_188509);

(statearr_188668[(15)] = inst_188508);

(statearr_188668[(13)] = inst_188511__$1);

return statearr_188668;
})();
if(cljs.core.truth_(inst_188512)){
var statearr_188669_188754 = state_188659__$1;
(statearr_188669_188754[(1)] = (2));

} else {
var statearr_188670_188755 = state_188659__$1;
(statearr_188670_188755[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (24))){
var state_188659__$1 = state_188659;
var statearr_188671_188756 = state_188659__$1;
(statearr_188671_188756[(2)] = null);

(statearr_188671_188756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (39))){
var inst_188612 = (state_188659[(16)]);
var state_188659__$1 = state_188659;
var statearr_188672_188757 = state_188659__$1;
(statearr_188672_188757[(2)] = inst_188612);

(statearr_188672_188757[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (46))){
var inst_188654 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
var statearr_188673_188758 = state_188659__$1;
(statearr_188673_188758[(2)] = inst_188654);

(statearr_188673_188758[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (4))){
var inst_188556 = (state_188659[(2)]);
var inst_188557 = cljs.core.List.EMPTY;
var inst_188558 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_188557);
var inst_188559 = (function (){return ((function (inst_188556,inst_188557,inst_188558,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__188253_SHARP_){
var and__39194__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__188253_SHARP_);
if(cljs.core.truth_(and__39194__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__188253_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__188253_SHARP_)));
} else {
return and__39194__auto__;
}
});
;})(inst_188556,inst_188557,inst_188558,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_188560 = cljs.core.filter.call(null,inst_188559,files);
var inst_188561 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_188562 = cljs.core.concat.call(null,inst_188560,inst_188561);
var state_188659__$1 = (function (){var statearr_188674 = state_188659;
(statearr_188674[(17)] = inst_188558);

(statearr_188674[(18)] = inst_188556);

(statearr_188674[(12)] = inst_188562);

return statearr_188674;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_188675_188759 = state_188659__$1;
(statearr_188675_188759[(1)] = (16));

} else {
var statearr_188676_188760 = state_188659__$1;
(statearr_188676_188760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (15))){
var inst_188546 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
var statearr_188677_188761 = state_188659__$1;
(statearr_188677_188761[(2)] = inst_188546);

(statearr_188677_188761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (21))){
var inst_188572 = (state_188659[(19)]);
var inst_188572__$1 = (state_188659[(2)]);
var inst_188573 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_188572__$1);
var state_188659__$1 = (function (){var statearr_188678 = state_188659;
(statearr_188678[(19)] = inst_188572__$1);

return statearr_188678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_188659__$1,(22),inst_188573);
} else {
if((state_val_188660 === (31))){
var inst_188657 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_188659__$1,inst_188657);
} else {
if((state_val_188660 === (32))){
var inst_188612 = (state_188659[(16)]);
var inst_188617 = inst_188612.cljs$lang$protocol_mask$partition0$;
var inst_188618 = (inst_188617 & (64));
var inst_188619 = inst_188612.cljs$core$ISeq$;
var inst_188620 = (cljs.core.PROTOCOL_SENTINEL === inst_188619);
var inst_188621 = (inst_188618) || (inst_188620);
var state_188659__$1 = state_188659;
if(cljs.core.truth_(inst_188621)){
var statearr_188679_188762 = state_188659__$1;
(statearr_188679_188762[(1)] = (35));

} else {
var statearr_188680_188763 = state_188659__$1;
(statearr_188680_188763[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (40))){
var inst_188634 = (state_188659[(20)]);
var inst_188633 = (state_188659[(2)]);
var inst_188634__$1 = cljs.core.get.call(null,inst_188633,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_188635 = cljs.core.get.call(null,inst_188633,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_188636 = cljs.core.not_empty.call(null,inst_188634__$1);
var state_188659__$1 = (function (){var statearr_188681 = state_188659;
(statearr_188681[(21)] = inst_188635);

(statearr_188681[(20)] = inst_188634__$1);

return statearr_188681;
})();
if(cljs.core.truth_(inst_188636)){
var statearr_188682_188764 = state_188659__$1;
(statearr_188682_188764[(1)] = (41));

} else {
var statearr_188683_188765 = state_188659__$1;
(statearr_188683_188765[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (33))){
var state_188659__$1 = state_188659;
var statearr_188684_188766 = state_188659__$1;
(statearr_188684_188766[(2)] = false);

(statearr_188684_188766[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (13))){
var inst_188532 = (state_188659[(22)]);
var inst_188536 = cljs.core.chunk_first.call(null,inst_188532);
var inst_188537 = cljs.core.chunk_rest.call(null,inst_188532);
var inst_188538 = cljs.core.count.call(null,inst_188536);
var inst_188519 = inst_188537;
var inst_188520 = inst_188536;
var inst_188521 = inst_188538;
var inst_188522 = (0);
var state_188659__$1 = (function (){var statearr_188685 = state_188659;
(statearr_188685[(7)] = inst_188519);

(statearr_188685[(8)] = inst_188521);

(statearr_188685[(9)] = inst_188520);

(statearr_188685[(10)] = inst_188522);

return statearr_188685;
})();
var statearr_188686_188767 = state_188659__$1;
(statearr_188686_188767[(2)] = null);

(statearr_188686_188767[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (22))){
var inst_188572 = (state_188659[(19)]);
var inst_188575 = (state_188659[(23)]);
var inst_188580 = (state_188659[(24)]);
var inst_188576 = (state_188659[(25)]);
var inst_188575__$1 = (state_188659[(2)]);
var inst_188576__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_188575__$1);
var inst_188577 = (function (){var all_files = inst_188572;
var res_SINGLEQUOTE_ = inst_188575__$1;
var res = inst_188576__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_188572,inst_188575,inst_188580,inst_188576,inst_188575__$1,inst_188576__$1,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__188254_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__188254_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_188572,inst_188575,inst_188580,inst_188576,inst_188575__$1,inst_188576__$1,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_188578 = cljs.core.filter.call(null,inst_188577,inst_188575__$1);
var inst_188579 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_188580__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_188579);
var inst_188581 = cljs.core.not_empty.call(null,inst_188580__$1);
var state_188659__$1 = (function (){var statearr_188687 = state_188659;
(statearr_188687[(23)] = inst_188575__$1);

(statearr_188687[(24)] = inst_188580__$1);

(statearr_188687[(26)] = inst_188578);

(statearr_188687[(25)] = inst_188576__$1);

return statearr_188687;
})();
if(cljs.core.truth_(inst_188581)){
var statearr_188688_188768 = state_188659__$1;
(statearr_188688_188768[(1)] = (23));

} else {
var statearr_188689_188769 = state_188659__$1;
(statearr_188689_188769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (36))){
var state_188659__$1 = state_188659;
var statearr_188690_188770 = state_188659__$1;
(statearr_188690_188770[(2)] = false);

(statearr_188690_188770[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (41))){
var inst_188634 = (state_188659[(20)]);
var inst_188638 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_188639 = cljs.core.map.call(null,inst_188638,inst_188634);
var inst_188640 = cljs.core.pr_str.call(null,inst_188639);
var inst_188641 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_188640)].join('');
var inst_188642 = figwheel.client.utils.log.call(null,inst_188641);
var state_188659__$1 = state_188659;
var statearr_188691_188771 = state_188659__$1;
(statearr_188691_188771[(2)] = inst_188642);

(statearr_188691_188771[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (43))){
var inst_188635 = (state_188659[(21)]);
var inst_188645 = (state_188659[(2)]);
var inst_188646 = cljs.core.not_empty.call(null,inst_188635);
var state_188659__$1 = (function (){var statearr_188692 = state_188659;
(statearr_188692[(27)] = inst_188645);

return statearr_188692;
})();
if(cljs.core.truth_(inst_188646)){
var statearr_188693_188772 = state_188659__$1;
(statearr_188693_188772[(1)] = (44));

} else {
var statearr_188694_188773 = state_188659__$1;
(statearr_188694_188773[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (29))){
var inst_188612 = (state_188659[(16)]);
var inst_188572 = (state_188659[(19)]);
var inst_188575 = (state_188659[(23)]);
var inst_188580 = (state_188659[(24)]);
var inst_188578 = (state_188659[(26)]);
var inst_188576 = (state_188659[(25)]);
var inst_188608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_188611 = (function (){var all_files = inst_188572;
var res_SINGLEQUOTE_ = inst_188575;
var res = inst_188576;
var files_not_loaded = inst_188578;
var dependencies_that_loaded = inst_188580;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_188612,inst_188572,inst_188575,inst_188580,inst_188578,inst_188576,inst_188608,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__188610){
var map__188695 = p__188610;
var map__188695__$1 = ((((!((map__188695 == null)))?((((map__188695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188695):map__188695);
var namespace = cljs.core.get.call(null,map__188695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_188612,inst_188572,inst_188575,inst_188580,inst_188578,inst_188576,inst_188608,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_188612__$1 = cljs.core.group_by.call(null,inst_188611,inst_188578);
var inst_188614 = (inst_188612__$1 == null);
var inst_188615 = cljs.core.not.call(null,inst_188614);
var state_188659__$1 = (function (){var statearr_188697 = state_188659;
(statearr_188697[(28)] = inst_188608);

(statearr_188697[(16)] = inst_188612__$1);

return statearr_188697;
})();
if(inst_188615){
var statearr_188698_188774 = state_188659__$1;
(statearr_188698_188774[(1)] = (32));

} else {
var statearr_188699_188775 = state_188659__$1;
(statearr_188699_188775[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (44))){
var inst_188635 = (state_188659[(21)]);
var inst_188648 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_188635);
var inst_188649 = cljs.core.pr_str.call(null,inst_188648);
var inst_188650 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_188649)].join('');
var inst_188651 = figwheel.client.utils.log.call(null,inst_188650);
var state_188659__$1 = state_188659;
var statearr_188700_188776 = state_188659__$1;
(statearr_188700_188776[(2)] = inst_188651);

(statearr_188700_188776[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (6))){
var inst_188553 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
var statearr_188701_188777 = state_188659__$1;
(statearr_188701_188777[(2)] = inst_188553);

(statearr_188701_188777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (28))){
var inst_188578 = (state_188659[(26)]);
var inst_188605 = (state_188659[(2)]);
var inst_188606 = cljs.core.not_empty.call(null,inst_188578);
var state_188659__$1 = (function (){var statearr_188702 = state_188659;
(statearr_188702[(29)] = inst_188605);

return statearr_188702;
})();
if(cljs.core.truth_(inst_188606)){
var statearr_188703_188778 = state_188659__$1;
(statearr_188703_188778[(1)] = (29));

} else {
var statearr_188704_188779 = state_188659__$1;
(statearr_188704_188779[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (25))){
var inst_188576 = (state_188659[(25)]);
var inst_188592 = (state_188659[(2)]);
var inst_188593 = cljs.core.not_empty.call(null,inst_188576);
var state_188659__$1 = (function (){var statearr_188705 = state_188659;
(statearr_188705[(30)] = inst_188592);

return statearr_188705;
})();
if(cljs.core.truth_(inst_188593)){
var statearr_188706_188780 = state_188659__$1;
(statearr_188706_188780[(1)] = (26));

} else {
var statearr_188707_188781 = state_188659__$1;
(statearr_188707_188781[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (34))){
var inst_188628 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
if(cljs.core.truth_(inst_188628)){
var statearr_188708_188782 = state_188659__$1;
(statearr_188708_188782[(1)] = (38));

} else {
var statearr_188709_188783 = state_188659__$1;
(statearr_188709_188783[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (17))){
var state_188659__$1 = state_188659;
var statearr_188710_188784 = state_188659__$1;
(statearr_188710_188784[(2)] = recompile_dependents);

(statearr_188710_188784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (3))){
var state_188659__$1 = state_188659;
var statearr_188711_188785 = state_188659__$1;
(statearr_188711_188785[(2)] = null);

(statearr_188711_188785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (12))){
var inst_188549 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
var statearr_188712_188786 = state_188659__$1;
(statearr_188712_188786[(2)] = inst_188549);

(statearr_188712_188786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (2))){
var inst_188511 = (state_188659[(13)]);
var inst_188518 = cljs.core.seq.call(null,inst_188511);
var inst_188519 = inst_188518;
var inst_188520 = null;
var inst_188521 = (0);
var inst_188522 = (0);
var state_188659__$1 = (function (){var statearr_188713 = state_188659;
(statearr_188713[(7)] = inst_188519);

(statearr_188713[(8)] = inst_188521);

(statearr_188713[(9)] = inst_188520);

(statearr_188713[(10)] = inst_188522);

return statearr_188713;
})();
var statearr_188714_188787 = state_188659__$1;
(statearr_188714_188787[(2)] = null);

(statearr_188714_188787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (23))){
var inst_188572 = (state_188659[(19)]);
var inst_188575 = (state_188659[(23)]);
var inst_188580 = (state_188659[(24)]);
var inst_188578 = (state_188659[(26)]);
var inst_188576 = (state_188659[(25)]);
var inst_188583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_188585 = (function (){var all_files = inst_188572;
var res_SINGLEQUOTE_ = inst_188575;
var res = inst_188576;
var files_not_loaded = inst_188578;
var dependencies_that_loaded = inst_188580;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_188572,inst_188575,inst_188580,inst_188578,inst_188576,inst_188583,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__188584){
var map__188715 = p__188584;
var map__188715__$1 = ((((!((map__188715 == null)))?((((map__188715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188715):map__188715);
var request_url = cljs.core.get.call(null,map__188715__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_188572,inst_188575,inst_188580,inst_188578,inst_188576,inst_188583,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_188586 = cljs.core.reverse.call(null,inst_188580);
var inst_188587 = cljs.core.map.call(null,inst_188585,inst_188586);
var inst_188588 = cljs.core.pr_str.call(null,inst_188587);
var inst_188589 = figwheel.client.utils.log.call(null,inst_188588);
var state_188659__$1 = (function (){var statearr_188717 = state_188659;
(statearr_188717[(31)] = inst_188583);

return statearr_188717;
})();
var statearr_188718_188788 = state_188659__$1;
(statearr_188718_188788[(2)] = inst_188589);

(statearr_188718_188788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (35))){
var state_188659__$1 = state_188659;
var statearr_188719_188789 = state_188659__$1;
(statearr_188719_188789[(2)] = true);

(statearr_188719_188789[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (19))){
var inst_188562 = (state_188659[(12)]);
var inst_188568 = figwheel.client.file_reloading.expand_files.call(null,inst_188562);
var state_188659__$1 = state_188659;
var statearr_188720_188790 = state_188659__$1;
(statearr_188720_188790[(2)] = inst_188568);

(statearr_188720_188790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (11))){
var state_188659__$1 = state_188659;
var statearr_188721_188791 = state_188659__$1;
(statearr_188721_188791[(2)] = null);

(statearr_188721_188791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (9))){
var inst_188551 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
var statearr_188722_188792 = state_188659__$1;
(statearr_188722_188792[(2)] = inst_188551);

(statearr_188722_188792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (5))){
var inst_188521 = (state_188659[(8)]);
var inst_188522 = (state_188659[(10)]);
var inst_188524 = (inst_188522 < inst_188521);
var inst_188525 = inst_188524;
var state_188659__$1 = state_188659;
if(cljs.core.truth_(inst_188525)){
var statearr_188723_188793 = state_188659__$1;
(statearr_188723_188793[(1)] = (7));

} else {
var statearr_188724_188794 = state_188659__$1;
(statearr_188724_188794[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (14))){
var inst_188532 = (state_188659[(22)]);
var inst_188541 = cljs.core.first.call(null,inst_188532);
var inst_188542 = figwheel.client.file_reloading.eval_body.call(null,inst_188541,opts);
var inst_188543 = cljs.core.next.call(null,inst_188532);
var inst_188519 = inst_188543;
var inst_188520 = null;
var inst_188521 = (0);
var inst_188522 = (0);
var state_188659__$1 = (function (){var statearr_188725 = state_188659;
(statearr_188725[(7)] = inst_188519);

(statearr_188725[(32)] = inst_188542);

(statearr_188725[(8)] = inst_188521);

(statearr_188725[(9)] = inst_188520);

(statearr_188725[(10)] = inst_188522);

return statearr_188725;
})();
var statearr_188726_188795 = state_188659__$1;
(statearr_188726_188795[(2)] = null);

(statearr_188726_188795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (45))){
var state_188659__$1 = state_188659;
var statearr_188727_188796 = state_188659__$1;
(statearr_188727_188796[(2)] = null);

(statearr_188727_188796[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (26))){
var inst_188572 = (state_188659[(19)]);
var inst_188575 = (state_188659[(23)]);
var inst_188580 = (state_188659[(24)]);
var inst_188578 = (state_188659[(26)]);
var inst_188576 = (state_188659[(25)]);
var inst_188595 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_188597 = (function (){var all_files = inst_188572;
var res_SINGLEQUOTE_ = inst_188575;
var res = inst_188576;
var files_not_loaded = inst_188578;
var dependencies_that_loaded = inst_188580;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_188572,inst_188575,inst_188580,inst_188578,inst_188576,inst_188595,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__188596){
var map__188728 = p__188596;
var map__188728__$1 = ((((!((map__188728 == null)))?((((map__188728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188728):map__188728);
var namespace = cljs.core.get.call(null,map__188728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__188728__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_188572,inst_188575,inst_188580,inst_188578,inst_188576,inst_188595,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_188598 = cljs.core.map.call(null,inst_188597,inst_188576);
var inst_188599 = cljs.core.pr_str.call(null,inst_188598);
var inst_188600 = figwheel.client.utils.log.call(null,inst_188599);
var inst_188601 = (function (){var all_files = inst_188572;
var res_SINGLEQUOTE_ = inst_188575;
var res = inst_188576;
var files_not_loaded = inst_188578;
var dependencies_that_loaded = inst_188580;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_188572,inst_188575,inst_188580,inst_188578,inst_188576,inst_188595,inst_188597,inst_188598,inst_188599,inst_188600,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_188572,inst_188575,inst_188580,inst_188578,inst_188576,inst_188595,inst_188597,inst_188598,inst_188599,inst_188600,state_val_188660,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_188602 = setTimeout(inst_188601,(10));
var state_188659__$1 = (function (){var statearr_188730 = state_188659;
(statearr_188730[(33)] = inst_188595);

(statearr_188730[(34)] = inst_188600);

return statearr_188730;
})();
var statearr_188731_188797 = state_188659__$1;
(statearr_188731_188797[(2)] = inst_188602);

(statearr_188731_188797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (16))){
var state_188659__$1 = state_188659;
var statearr_188732_188798 = state_188659__$1;
(statearr_188732_188798[(2)] = reload_dependents);

(statearr_188732_188798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (38))){
var inst_188612 = (state_188659[(16)]);
var inst_188630 = cljs.core.apply.call(null,cljs.core.hash_map,inst_188612);
var state_188659__$1 = state_188659;
var statearr_188733_188799 = state_188659__$1;
(statearr_188733_188799[(2)] = inst_188630);

(statearr_188733_188799[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (30))){
var state_188659__$1 = state_188659;
var statearr_188734_188800 = state_188659__$1;
(statearr_188734_188800[(2)] = null);

(statearr_188734_188800[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (10))){
var inst_188532 = (state_188659[(22)]);
var inst_188534 = cljs.core.chunked_seq_QMARK_.call(null,inst_188532);
var state_188659__$1 = state_188659;
if(inst_188534){
var statearr_188735_188801 = state_188659__$1;
(statearr_188735_188801[(1)] = (13));

} else {
var statearr_188736_188802 = state_188659__$1;
(statearr_188736_188802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (18))){
var inst_188566 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
if(cljs.core.truth_(inst_188566)){
var statearr_188737_188803 = state_188659__$1;
(statearr_188737_188803[(1)] = (19));

} else {
var statearr_188738_188804 = state_188659__$1;
(statearr_188738_188804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (42))){
var state_188659__$1 = state_188659;
var statearr_188739_188805 = state_188659__$1;
(statearr_188739_188805[(2)] = null);

(statearr_188739_188805[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (37))){
var inst_188625 = (state_188659[(2)]);
var state_188659__$1 = state_188659;
var statearr_188740_188806 = state_188659__$1;
(statearr_188740_188806[(2)] = inst_188625);

(statearr_188740_188806[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_188660 === (8))){
var inst_188532 = (state_188659[(22)]);
var inst_188519 = (state_188659[(7)]);
var inst_188532__$1 = cljs.core.seq.call(null,inst_188519);
var state_188659__$1 = (function (){var statearr_188741 = state_188659;
(statearr_188741[(22)] = inst_188532__$1);

return statearr_188741;
})();
if(inst_188532__$1){
var statearr_188742_188807 = state_188659__$1;
(statearr_188742_188807[(1)] = (10));

} else {
var statearr_188743_188808 = state_188659__$1;
(statearr_188743_188808[(1)] = (11));

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
});})(c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44061__auto__,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0 = (function (){
var statearr_188747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_188747[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__);

(statearr_188747[(1)] = (1));

return statearr_188747;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1 = (function (state_188659){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_188659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e188748){if((e188748 instanceof Object)){
var ex__44065__auto__ = e188748;
var statearr_188749_188809 = state_188659;
(statearr_188749_188809[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_188659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e188748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__188810 = state_188659;
state_188659 = G__188810;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__ = function(state_188659){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1.call(this,state_188659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44086__auto__ = (function (){var statearr_188750 = f__44085__auto__.call(null);
(statearr_188750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_188750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,map__188504,map__188504__$1,opts,before_jsload,on_jsload,reload_dependents,map__188505,map__188505__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44084__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__188813,link){
var map__188816 = p__188813;
var map__188816__$1 = ((((!((map__188816 == null)))?((((map__188816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188816):map__188816);
var file = cljs.core.get.call(null,map__188816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__188816,map__188816__$1,file){
return (function (p1__188811_SHARP_,p2__188812_SHARP_){
if(cljs.core._EQ_.call(null,p1__188811_SHARP_,p2__188812_SHARP_)){
return p1__188811_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__188816,map__188816__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__188822){
var map__188823 = p__188822;
var map__188823__$1 = ((((!((map__188823 == null)))?((((map__188823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188823):map__188823);
var match_length = cljs.core.get.call(null,map__188823__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__188823__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__188818_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__188818_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__188825_SHARP_,p2__188826_SHARP_){
return cljs.core.assoc.call(null,p1__188825_SHARP_,cljs.core.get.call(null,p2__188826_SHARP_,key),p2__188826_SHARP_);
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
var loaded_f_datas_188827 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_188827);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_188827);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__188828,p__188829){
var map__188834 = p__188828;
var map__188834__$1 = ((((!((map__188834 == null)))?((((map__188834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188834):map__188834);
var on_cssload = cljs.core.get.call(null,map__188834__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__188835 = p__188829;
var map__188835__$1 = ((((!((map__188835 == null)))?((((map__188835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__188835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__188835):map__188835);
var files_msg = map__188835__$1;
var files = cljs.core.get.call(null,map__188835__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1491715072626