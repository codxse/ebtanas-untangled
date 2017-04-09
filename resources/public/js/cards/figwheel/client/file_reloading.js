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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__208008_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__208008_SHARP_));
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
var seq__208013 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__208014 = null;
var count__208015 = (0);
var i__208016 = (0);
while(true){
if((i__208016 < count__208015)){
var n = cljs.core._nth.call(null,chunk__208014,i__208016);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__208017 = seq__208013;
var G__208018 = chunk__208014;
var G__208019 = count__208015;
var G__208020 = (i__208016 + (1));
seq__208013 = G__208017;
chunk__208014 = G__208018;
count__208015 = G__208019;
i__208016 = G__208020;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__208013);
if(temp__6753__auto__){
var seq__208013__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__208013__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__208013__$1);
var G__208021 = cljs.core.chunk_rest.call(null,seq__208013__$1);
var G__208022 = c__40117__auto__;
var G__208023 = cljs.core.count.call(null,c__40117__auto__);
var G__208024 = (0);
seq__208013 = G__208021;
chunk__208014 = G__208022;
count__208015 = G__208023;
i__208016 = G__208024;
continue;
} else {
var n = cljs.core.first.call(null,seq__208013__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__208025 = cljs.core.next.call(null,seq__208013__$1);
var G__208026 = null;
var G__208027 = (0);
var G__208028 = (0);
seq__208013 = G__208025;
chunk__208014 = G__208026;
count__208015 = G__208027;
i__208016 = G__208028;
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

var seq__208079_208090 = cljs.core.seq.call(null,deps);
var chunk__208080_208091 = null;
var count__208081_208092 = (0);
var i__208082_208093 = (0);
while(true){
if((i__208082_208093 < count__208081_208092)){
var dep_208094 = cljs.core._nth.call(null,chunk__208080_208091,i__208082_208093);
topo_sort_helper_STAR_.call(null,dep_208094,(depth + (1)),state);

var G__208095 = seq__208079_208090;
var G__208096 = chunk__208080_208091;
var G__208097 = count__208081_208092;
var G__208098 = (i__208082_208093 + (1));
seq__208079_208090 = G__208095;
chunk__208080_208091 = G__208096;
count__208081_208092 = G__208097;
i__208082_208093 = G__208098;
continue;
} else {
var temp__6753__auto___208099 = cljs.core.seq.call(null,seq__208079_208090);
if(temp__6753__auto___208099){
var seq__208079_208100__$1 = temp__6753__auto___208099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__208079_208100__$1)){
var c__40117__auto___208101 = cljs.core.chunk_first.call(null,seq__208079_208100__$1);
var G__208102 = cljs.core.chunk_rest.call(null,seq__208079_208100__$1);
var G__208103 = c__40117__auto___208101;
var G__208104 = cljs.core.count.call(null,c__40117__auto___208101);
var G__208105 = (0);
seq__208079_208090 = G__208102;
chunk__208080_208091 = G__208103;
count__208081_208092 = G__208104;
i__208082_208093 = G__208105;
continue;
} else {
var dep_208106 = cljs.core.first.call(null,seq__208079_208100__$1);
topo_sort_helper_STAR_.call(null,dep_208106,(depth + (1)),state);

var G__208107 = cljs.core.next.call(null,seq__208079_208100__$1);
var G__208108 = null;
var G__208109 = (0);
var G__208110 = (0);
seq__208079_208090 = G__208107;
chunk__208080_208091 = G__208108;
count__208081_208092 = G__208109;
i__208082_208093 = G__208110;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__208083){
var vec__208087 = p__208083;
var seq__208088 = cljs.core.seq.call(null,vec__208087);
var first__208089 = cljs.core.first.call(null,seq__208088);
var seq__208088__$1 = cljs.core.next.call(null,seq__208088);
var x = first__208089;
var xs = seq__208088__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__208087,seq__208088,first__208089,seq__208088__$1,x,xs,get_deps__$1){
return (function (p1__208029_SHARP_){
return clojure.set.difference.call(null,p1__208029_SHARP_,x);
});})(vec__208087,seq__208088,first__208089,seq__208088__$1,x,xs,get_deps__$1))
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
var seq__208123 = cljs.core.seq.call(null,provides);
var chunk__208124 = null;
var count__208125 = (0);
var i__208126 = (0);
while(true){
if((i__208126 < count__208125)){
var prov = cljs.core._nth.call(null,chunk__208124,i__208126);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__208127_208135 = cljs.core.seq.call(null,requires);
var chunk__208128_208136 = null;
var count__208129_208137 = (0);
var i__208130_208138 = (0);
while(true){
if((i__208130_208138 < count__208129_208137)){
var req_208139 = cljs.core._nth.call(null,chunk__208128_208136,i__208130_208138);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_208139,prov);

var G__208140 = seq__208127_208135;
var G__208141 = chunk__208128_208136;
var G__208142 = count__208129_208137;
var G__208143 = (i__208130_208138 + (1));
seq__208127_208135 = G__208140;
chunk__208128_208136 = G__208141;
count__208129_208137 = G__208142;
i__208130_208138 = G__208143;
continue;
} else {
var temp__6753__auto___208144 = cljs.core.seq.call(null,seq__208127_208135);
if(temp__6753__auto___208144){
var seq__208127_208145__$1 = temp__6753__auto___208144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__208127_208145__$1)){
var c__40117__auto___208146 = cljs.core.chunk_first.call(null,seq__208127_208145__$1);
var G__208147 = cljs.core.chunk_rest.call(null,seq__208127_208145__$1);
var G__208148 = c__40117__auto___208146;
var G__208149 = cljs.core.count.call(null,c__40117__auto___208146);
var G__208150 = (0);
seq__208127_208135 = G__208147;
chunk__208128_208136 = G__208148;
count__208129_208137 = G__208149;
i__208130_208138 = G__208150;
continue;
} else {
var req_208151 = cljs.core.first.call(null,seq__208127_208145__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_208151,prov);

var G__208152 = cljs.core.next.call(null,seq__208127_208145__$1);
var G__208153 = null;
var G__208154 = (0);
var G__208155 = (0);
seq__208127_208135 = G__208152;
chunk__208128_208136 = G__208153;
count__208129_208137 = G__208154;
i__208130_208138 = G__208155;
continue;
}
} else {
}
}
break;
}

var G__208156 = seq__208123;
var G__208157 = chunk__208124;
var G__208158 = count__208125;
var G__208159 = (i__208126 + (1));
seq__208123 = G__208156;
chunk__208124 = G__208157;
count__208125 = G__208158;
i__208126 = G__208159;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__208123);
if(temp__6753__auto__){
var seq__208123__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__208123__$1)){
var c__40117__auto__ = cljs.core.chunk_first.call(null,seq__208123__$1);
var G__208160 = cljs.core.chunk_rest.call(null,seq__208123__$1);
var G__208161 = c__40117__auto__;
var G__208162 = cljs.core.count.call(null,c__40117__auto__);
var G__208163 = (0);
seq__208123 = G__208160;
chunk__208124 = G__208161;
count__208125 = G__208162;
i__208126 = G__208163;
continue;
} else {
var prov = cljs.core.first.call(null,seq__208123__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__208131_208164 = cljs.core.seq.call(null,requires);
var chunk__208132_208165 = null;
var count__208133_208166 = (0);
var i__208134_208167 = (0);
while(true){
if((i__208134_208167 < count__208133_208166)){
var req_208168 = cljs.core._nth.call(null,chunk__208132_208165,i__208134_208167);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_208168,prov);

var G__208169 = seq__208131_208164;
var G__208170 = chunk__208132_208165;
var G__208171 = count__208133_208166;
var G__208172 = (i__208134_208167 + (1));
seq__208131_208164 = G__208169;
chunk__208132_208165 = G__208170;
count__208133_208166 = G__208171;
i__208134_208167 = G__208172;
continue;
} else {
var temp__6753__auto___208173__$1 = cljs.core.seq.call(null,seq__208131_208164);
if(temp__6753__auto___208173__$1){
var seq__208131_208174__$1 = temp__6753__auto___208173__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__208131_208174__$1)){
var c__40117__auto___208175 = cljs.core.chunk_first.call(null,seq__208131_208174__$1);
var G__208176 = cljs.core.chunk_rest.call(null,seq__208131_208174__$1);
var G__208177 = c__40117__auto___208175;
var G__208178 = cljs.core.count.call(null,c__40117__auto___208175);
var G__208179 = (0);
seq__208131_208164 = G__208176;
chunk__208132_208165 = G__208177;
count__208133_208166 = G__208178;
i__208134_208167 = G__208179;
continue;
} else {
var req_208180 = cljs.core.first.call(null,seq__208131_208174__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_208180,prov);

var G__208181 = cljs.core.next.call(null,seq__208131_208174__$1);
var G__208182 = null;
var G__208183 = (0);
var G__208184 = (0);
seq__208131_208164 = G__208181;
chunk__208132_208165 = G__208182;
count__208133_208166 = G__208183;
i__208134_208167 = G__208184;
continue;
}
} else {
}
}
break;
}

var G__208185 = cljs.core.next.call(null,seq__208123__$1);
var G__208186 = null;
var G__208187 = (0);
var G__208188 = (0);
seq__208123 = G__208185;
chunk__208124 = G__208186;
count__208125 = G__208187;
i__208126 = G__208188;
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
var seq__208193_208197 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__208194_208198 = null;
var count__208195_208199 = (0);
var i__208196_208200 = (0);
while(true){
if((i__208196_208200 < count__208195_208199)){
var ns_208201 = cljs.core._nth.call(null,chunk__208194_208198,i__208196_208200);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_208201);

var G__208202 = seq__208193_208197;
var G__208203 = chunk__208194_208198;
var G__208204 = count__208195_208199;
var G__208205 = (i__208196_208200 + (1));
seq__208193_208197 = G__208202;
chunk__208194_208198 = G__208203;
count__208195_208199 = G__208204;
i__208196_208200 = G__208205;
continue;
} else {
var temp__6753__auto___208206 = cljs.core.seq.call(null,seq__208193_208197);
if(temp__6753__auto___208206){
var seq__208193_208207__$1 = temp__6753__auto___208206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__208193_208207__$1)){
var c__40117__auto___208208 = cljs.core.chunk_first.call(null,seq__208193_208207__$1);
var G__208209 = cljs.core.chunk_rest.call(null,seq__208193_208207__$1);
var G__208210 = c__40117__auto___208208;
var G__208211 = cljs.core.count.call(null,c__40117__auto___208208);
var G__208212 = (0);
seq__208193_208197 = G__208209;
chunk__208194_208198 = G__208210;
count__208195_208199 = G__208211;
i__208196_208200 = G__208212;
continue;
} else {
var ns_208213 = cljs.core.first.call(null,seq__208193_208207__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_208213);

var G__208214 = cljs.core.next.call(null,seq__208193_208207__$1);
var G__208215 = null;
var G__208216 = (0);
var G__208217 = (0);
seq__208193_208197 = G__208214;
chunk__208194_208198 = G__208215;
count__208195_208199 = G__208216;
i__208196_208200 = G__208217;
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
var G__208218__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__208218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__208219__i = 0, G__208219__a = new Array(arguments.length -  0);
while (G__208219__i < G__208219__a.length) {G__208219__a[G__208219__i] = arguments[G__208219__i + 0]; ++G__208219__i;}
  args = new cljs.core.IndexedSeq(G__208219__a,0);
} 
return G__208218__delegate.call(this,args);};
G__208218.cljs$lang$maxFixedArity = 0;
G__208218.cljs$lang$applyTo = (function (arglist__208220){
var args = cljs.core.seq(arglist__208220);
return G__208218__delegate(args);
});
G__208218.cljs$core$IFn$_invoke$arity$variadic = G__208218__delegate;
return G__208218;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__208221 = cljs.core._EQ_;
var expr__208222 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__208221.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__208222))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__208221,expr__208222){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__208221,expr__208222))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__208221,expr__208222){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e208224){if((e208224 instanceof Error)){
var e = e208224;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e208224;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__208221,expr__208222))
} else {
if(cljs.core.truth_(pred__208221.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__208222))){
return ((function (pred__208221,expr__208222){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__208221,expr__208222){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__208221,expr__208222))
);

return deferred.addErrback(((function (deferred,pred__208221,expr__208222){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__208221,expr__208222))
);
});
;})(pred__208221,expr__208222))
} else {
if(cljs.core.truth_(pred__208221.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__208222))){
return ((function (pred__208221,expr__208222){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e208225){if((e208225 instanceof Error)){
var e = e208225;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e208225;

}
}})());
});
;})(pred__208221,expr__208222))
} else {
return ((function (pred__208221,expr__208222){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__208221,expr__208222))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__208226,callback){
var map__208229 = p__208226;
var map__208229__$1 = ((((!((map__208229 == null)))?((((map__208229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208229.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208229):map__208229);
var file_msg = map__208229__$1;
var request_url = cljs.core.get.call(null,map__208229__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__208229,map__208229__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__208229,map__208229__$1,file_msg,request_url))
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
return (function (state_208253){
var state_val_208254 = (state_208253[(1)]);
if((state_val_208254 === (7))){
var inst_208249 = (state_208253[(2)]);
var state_208253__$1 = state_208253;
var statearr_208255_208275 = state_208253__$1;
(statearr_208255_208275[(2)] = inst_208249);

(statearr_208255_208275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208254 === (1))){
var state_208253__$1 = state_208253;
var statearr_208256_208276 = state_208253__$1;
(statearr_208256_208276[(2)] = null);

(statearr_208256_208276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208254 === (4))){
var inst_208233 = (state_208253[(7)]);
var inst_208233__$1 = (state_208253[(2)]);
var state_208253__$1 = (function (){var statearr_208257 = state_208253;
(statearr_208257[(7)] = inst_208233__$1);

return statearr_208257;
})();
if(cljs.core.truth_(inst_208233__$1)){
var statearr_208258_208277 = state_208253__$1;
(statearr_208258_208277[(1)] = (5));

} else {
var statearr_208259_208278 = state_208253__$1;
(statearr_208259_208278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208254 === (6))){
var state_208253__$1 = state_208253;
var statearr_208260_208279 = state_208253__$1;
(statearr_208260_208279[(2)] = null);

(statearr_208260_208279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208254 === (3))){
var inst_208251 = (state_208253[(2)]);
var state_208253__$1 = state_208253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208253__$1,inst_208251);
} else {
if((state_val_208254 === (2))){
var state_208253__$1 = state_208253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208253__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_208254 === (11))){
var inst_208245 = (state_208253[(2)]);
var state_208253__$1 = (function (){var statearr_208261 = state_208253;
(statearr_208261[(8)] = inst_208245);

return statearr_208261;
})();
var statearr_208262_208280 = state_208253__$1;
(statearr_208262_208280[(2)] = null);

(statearr_208262_208280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208254 === (9))){
var inst_208239 = (state_208253[(9)]);
var inst_208237 = (state_208253[(10)]);
var inst_208241 = inst_208239.call(null,inst_208237);
var state_208253__$1 = state_208253;
var statearr_208263_208281 = state_208253__$1;
(statearr_208263_208281[(2)] = inst_208241);

(statearr_208263_208281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208254 === (5))){
var inst_208233 = (state_208253[(7)]);
var inst_208235 = figwheel.client.file_reloading.blocking_load.call(null,inst_208233);
var state_208253__$1 = state_208253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208253__$1,(8),inst_208235);
} else {
if((state_val_208254 === (10))){
var inst_208237 = (state_208253[(10)]);
var inst_208243 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_208237);
var state_208253__$1 = state_208253;
var statearr_208264_208282 = state_208253__$1;
(statearr_208264_208282[(2)] = inst_208243);

(statearr_208264_208282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208254 === (8))){
var inst_208239 = (state_208253[(9)]);
var inst_208233 = (state_208253[(7)]);
var inst_208237 = (state_208253[(2)]);
var inst_208238 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_208239__$1 = cljs.core.get.call(null,inst_208238,inst_208233);
var state_208253__$1 = (function (){var statearr_208265 = state_208253;
(statearr_208265[(9)] = inst_208239__$1);

(statearr_208265[(10)] = inst_208237);

return statearr_208265;
})();
if(cljs.core.truth_(inst_208239__$1)){
var statearr_208266_208283 = state_208253__$1;
(statearr_208266_208283[(1)] = (9));

} else {
var statearr_208267_208284 = state_208253__$1;
(statearr_208267_208284[(1)] = (10));

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
var statearr_208271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_208271[(0)] = figwheel$client$file_reloading$state_machine__44062__auto__);

(statearr_208271[(1)] = (1));

return statearr_208271;
});
var figwheel$client$file_reloading$state_machine__44062__auto____1 = (function (state_208253){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_208253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e208272){if((e208272 instanceof Object)){
var ex__44065__auto__ = e208272;
var statearr_208273_208285 = state_208253;
(statearr_208273_208285[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e208272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__208286 = state_208253;
state_208253 = G__208286;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44062__auto__ = function(state_208253){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44062__auto____1.call(this,state_208253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44062__auto____0;
figwheel$client$file_reloading$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44062__auto____1;
return figwheel$client$file_reloading$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_208274 = f__44085__auto__.call(null);
(statearr_208274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_208274;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__208287,callback){
var map__208290 = p__208287;
var map__208290__$1 = ((((!((map__208290 == null)))?((((map__208290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208290):map__208290);
var file_msg = map__208290__$1;
var namespace = cljs.core.get.call(null,map__208290__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__208290,map__208290__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__208290,map__208290__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__208292){
var map__208295 = p__208292;
var map__208295__$1 = ((((!((map__208295 == null)))?((((map__208295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208295):map__208295);
var file_msg = map__208295__$1;
var namespace = cljs.core.get.call(null,map__208295__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__208297){
var map__208300 = p__208297;
var map__208300__$1 = ((((!((map__208300 == null)))?((((map__208300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208300):map__208300);
var file_msg = map__208300__$1;
var namespace = cljs.core.get.call(null,map__208300__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__208302,callback){
var map__208305 = p__208302;
var map__208305__$1 = ((((!((map__208305 == null)))?((((map__208305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208305):map__208305);
var file_msg = map__208305__$1;
var request_url = cljs.core.get.call(null,map__208305__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__208305__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__44084__auto___208409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___208409,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___208409,out){
return (function (state_208391){
var state_val_208392 = (state_208391[(1)]);
if((state_val_208392 === (1))){
var inst_208365 = cljs.core.seq.call(null,files);
var inst_208366 = cljs.core.first.call(null,inst_208365);
var inst_208367 = cljs.core.next.call(null,inst_208365);
var inst_208368 = files;
var state_208391__$1 = (function (){var statearr_208393 = state_208391;
(statearr_208393[(7)] = inst_208367);

(statearr_208393[(8)] = inst_208366);

(statearr_208393[(9)] = inst_208368);

return statearr_208393;
})();
var statearr_208394_208410 = state_208391__$1;
(statearr_208394_208410[(2)] = null);

(statearr_208394_208410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208392 === (2))){
var inst_208374 = (state_208391[(10)]);
var inst_208368 = (state_208391[(9)]);
var inst_208373 = cljs.core.seq.call(null,inst_208368);
var inst_208374__$1 = cljs.core.first.call(null,inst_208373);
var inst_208375 = cljs.core.next.call(null,inst_208373);
var inst_208376 = (inst_208374__$1 == null);
var inst_208377 = cljs.core.not.call(null,inst_208376);
var state_208391__$1 = (function (){var statearr_208395 = state_208391;
(statearr_208395[(11)] = inst_208375);

(statearr_208395[(10)] = inst_208374__$1);

return statearr_208395;
})();
if(inst_208377){
var statearr_208396_208411 = state_208391__$1;
(statearr_208396_208411[(1)] = (4));

} else {
var statearr_208397_208412 = state_208391__$1;
(statearr_208397_208412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208392 === (3))){
var inst_208389 = (state_208391[(2)]);
var state_208391__$1 = state_208391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208391__$1,inst_208389);
} else {
if((state_val_208392 === (4))){
var inst_208374 = (state_208391[(10)]);
var inst_208379 = figwheel.client.file_reloading.reload_js_file.call(null,inst_208374);
var state_208391__$1 = state_208391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208391__$1,(7),inst_208379);
} else {
if((state_val_208392 === (5))){
var inst_208385 = cljs.core.async.close_BANG_.call(null,out);
var state_208391__$1 = state_208391;
var statearr_208398_208413 = state_208391__$1;
(statearr_208398_208413[(2)] = inst_208385);

(statearr_208398_208413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208392 === (6))){
var inst_208387 = (state_208391[(2)]);
var state_208391__$1 = state_208391;
var statearr_208399_208414 = state_208391__$1;
(statearr_208399_208414[(2)] = inst_208387);

(statearr_208399_208414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208392 === (7))){
var inst_208375 = (state_208391[(11)]);
var inst_208381 = (state_208391[(2)]);
var inst_208382 = cljs.core.async.put_BANG_.call(null,out,inst_208381);
var inst_208368 = inst_208375;
var state_208391__$1 = (function (){var statearr_208400 = state_208391;
(statearr_208400[(12)] = inst_208382);

(statearr_208400[(9)] = inst_208368);

return statearr_208400;
})();
var statearr_208401_208415 = state_208391__$1;
(statearr_208401_208415[(2)] = null);

(statearr_208401_208415[(1)] = (2));


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
});})(c__44084__auto___208409,out))
;
return ((function (switch__44061__auto__,c__44084__auto___208409,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0 = (function (){
var statearr_208405 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_208405[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__);

(statearr_208405[(1)] = (1));

return statearr_208405;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1 = (function (state_208391){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_208391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e208406){if((e208406 instanceof Object)){
var ex__44065__auto__ = e208406;
var statearr_208407_208416 = state_208391;
(statearr_208407_208416[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e208406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__208417 = state_208391;
state_208391 = G__208417;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__ = function(state_208391){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1.call(this,state_208391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___208409,out))
})();
var state__44086__auto__ = (function (){var statearr_208408 = f__44085__auto__.call(null);
(statearr_208408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___208409);

return statearr_208408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___208409,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__208418,opts){
var map__208422 = p__208418;
var map__208422__$1 = ((((!((map__208422 == null)))?((((map__208422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208422):map__208422);
var eval_body = cljs.core.get.call(null,map__208422__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__208422__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e208424){var e = e208424;
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
return (function (p1__208425_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__208425_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__208434){
var vec__208435 = p__208434;
var k = cljs.core.nth.call(null,vec__208435,(0),null);
var v = cljs.core.nth.call(null,vec__208435,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__208438){
var vec__208439 = p__208438;
var k = cljs.core.nth.call(null,vec__208439,(0),null);
var v = cljs.core.nth.call(null,vec__208439,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__208445,p__208446){
var map__208694 = p__208445;
var map__208694__$1 = ((((!((map__208694 == null)))?((((map__208694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208694):map__208694);
var opts = map__208694__$1;
var before_jsload = cljs.core.get.call(null,map__208694__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__208694__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__208694__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__208695 = p__208446;
var map__208695__$1 = ((((!((map__208695 == null)))?((((map__208695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208695):map__208695);
var msg = map__208695__$1;
var files = cljs.core.get.call(null,map__208695__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__208695__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__208695__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_208849){
var state_val_208850 = (state_208849[(1)]);
if((state_val_208850 === (7))){
var inst_208712 = (state_208849[(7)]);
var inst_208711 = (state_208849[(8)]);
var inst_208709 = (state_208849[(9)]);
var inst_208710 = (state_208849[(10)]);
var inst_208717 = cljs.core._nth.call(null,inst_208710,inst_208712);
var inst_208718 = figwheel.client.file_reloading.eval_body.call(null,inst_208717,opts);
var inst_208719 = (inst_208712 + (1));
var tmp208851 = inst_208711;
var tmp208852 = inst_208709;
var tmp208853 = inst_208710;
var inst_208709__$1 = tmp208852;
var inst_208710__$1 = tmp208853;
var inst_208711__$1 = tmp208851;
var inst_208712__$1 = inst_208719;
var state_208849__$1 = (function (){var statearr_208854 = state_208849;
(statearr_208854[(7)] = inst_208712__$1);

(statearr_208854[(11)] = inst_208718);

(statearr_208854[(8)] = inst_208711__$1);

(statearr_208854[(9)] = inst_208709__$1);

(statearr_208854[(10)] = inst_208710__$1);

return statearr_208854;
})();
var statearr_208855_208941 = state_208849__$1;
(statearr_208855_208941[(2)] = null);

(statearr_208855_208941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (20))){
var inst_208752 = (state_208849[(12)]);
var inst_208760 = figwheel.client.file_reloading.sort_files.call(null,inst_208752);
var state_208849__$1 = state_208849;
var statearr_208856_208942 = state_208849__$1;
(statearr_208856_208942[(2)] = inst_208760);

(statearr_208856_208942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (27))){
var state_208849__$1 = state_208849;
var statearr_208857_208943 = state_208849__$1;
(statearr_208857_208943[(2)] = null);

(statearr_208857_208943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (1))){
var inst_208701 = (state_208849[(13)]);
var inst_208698 = before_jsload.call(null,files);
var inst_208699 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_208700 = (function (){return ((function (inst_208701,inst_208698,inst_208699,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__208442_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__208442_SHARP_);
});
;})(inst_208701,inst_208698,inst_208699,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_208701__$1 = cljs.core.filter.call(null,inst_208700,files);
var inst_208702 = cljs.core.not_empty.call(null,inst_208701__$1);
var state_208849__$1 = (function (){var statearr_208858 = state_208849;
(statearr_208858[(14)] = inst_208698);

(statearr_208858[(15)] = inst_208699);

(statearr_208858[(13)] = inst_208701__$1);

return statearr_208858;
})();
if(cljs.core.truth_(inst_208702)){
var statearr_208859_208944 = state_208849__$1;
(statearr_208859_208944[(1)] = (2));

} else {
var statearr_208860_208945 = state_208849__$1;
(statearr_208860_208945[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (24))){
var state_208849__$1 = state_208849;
var statearr_208861_208946 = state_208849__$1;
(statearr_208861_208946[(2)] = null);

(statearr_208861_208946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (39))){
var inst_208802 = (state_208849[(16)]);
var state_208849__$1 = state_208849;
var statearr_208862_208947 = state_208849__$1;
(statearr_208862_208947[(2)] = inst_208802);

(statearr_208862_208947[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (46))){
var inst_208844 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
var statearr_208863_208948 = state_208849__$1;
(statearr_208863_208948[(2)] = inst_208844);

(statearr_208863_208948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (4))){
var inst_208746 = (state_208849[(2)]);
var inst_208747 = cljs.core.List.EMPTY;
var inst_208748 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_208747);
var inst_208749 = (function (){return ((function (inst_208746,inst_208747,inst_208748,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__208443_SHARP_){
var and__39194__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__208443_SHARP_);
if(cljs.core.truth_(and__39194__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__208443_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__208443_SHARP_)));
} else {
return and__39194__auto__;
}
});
;})(inst_208746,inst_208747,inst_208748,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_208750 = cljs.core.filter.call(null,inst_208749,files);
var inst_208751 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_208752 = cljs.core.concat.call(null,inst_208750,inst_208751);
var state_208849__$1 = (function (){var statearr_208864 = state_208849;
(statearr_208864[(12)] = inst_208752);

(statearr_208864[(17)] = inst_208746);

(statearr_208864[(18)] = inst_208748);

return statearr_208864;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_208865_208949 = state_208849__$1;
(statearr_208865_208949[(1)] = (16));

} else {
var statearr_208866_208950 = state_208849__$1;
(statearr_208866_208950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (15))){
var inst_208736 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
var statearr_208867_208951 = state_208849__$1;
(statearr_208867_208951[(2)] = inst_208736);

(statearr_208867_208951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (21))){
var inst_208762 = (state_208849[(19)]);
var inst_208762__$1 = (state_208849[(2)]);
var inst_208763 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_208762__$1);
var state_208849__$1 = (function (){var statearr_208868 = state_208849;
(statearr_208868[(19)] = inst_208762__$1);

return statearr_208868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208849__$1,(22),inst_208763);
} else {
if((state_val_208850 === (31))){
var inst_208847 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208849__$1,inst_208847);
} else {
if((state_val_208850 === (32))){
var inst_208802 = (state_208849[(16)]);
var inst_208807 = inst_208802.cljs$lang$protocol_mask$partition0$;
var inst_208808 = (inst_208807 & (64));
var inst_208809 = inst_208802.cljs$core$ISeq$;
var inst_208810 = (cljs.core.PROTOCOL_SENTINEL === inst_208809);
var inst_208811 = (inst_208808) || (inst_208810);
var state_208849__$1 = state_208849;
if(cljs.core.truth_(inst_208811)){
var statearr_208869_208952 = state_208849__$1;
(statearr_208869_208952[(1)] = (35));

} else {
var statearr_208870_208953 = state_208849__$1;
(statearr_208870_208953[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (40))){
var inst_208824 = (state_208849[(20)]);
var inst_208823 = (state_208849[(2)]);
var inst_208824__$1 = cljs.core.get.call(null,inst_208823,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_208825 = cljs.core.get.call(null,inst_208823,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_208826 = cljs.core.not_empty.call(null,inst_208824__$1);
var state_208849__$1 = (function (){var statearr_208871 = state_208849;
(statearr_208871[(20)] = inst_208824__$1);

(statearr_208871[(21)] = inst_208825);

return statearr_208871;
})();
if(cljs.core.truth_(inst_208826)){
var statearr_208872_208954 = state_208849__$1;
(statearr_208872_208954[(1)] = (41));

} else {
var statearr_208873_208955 = state_208849__$1;
(statearr_208873_208955[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (33))){
var state_208849__$1 = state_208849;
var statearr_208874_208956 = state_208849__$1;
(statearr_208874_208956[(2)] = false);

(statearr_208874_208956[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (13))){
var inst_208722 = (state_208849[(22)]);
var inst_208726 = cljs.core.chunk_first.call(null,inst_208722);
var inst_208727 = cljs.core.chunk_rest.call(null,inst_208722);
var inst_208728 = cljs.core.count.call(null,inst_208726);
var inst_208709 = inst_208727;
var inst_208710 = inst_208726;
var inst_208711 = inst_208728;
var inst_208712 = (0);
var state_208849__$1 = (function (){var statearr_208875 = state_208849;
(statearr_208875[(7)] = inst_208712);

(statearr_208875[(8)] = inst_208711);

(statearr_208875[(9)] = inst_208709);

(statearr_208875[(10)] = inst_208710);

return statearr_208875;
})();
var statearr_208876_208957 = state_208849__$1;
(statearr_208876_208957[(2)] = null);

(statearr_208876_208957[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (22))){
var inst_208766 = (state_208849[(23)]);
var inst_208762 = (state_208849[(19)]);
var inst_208765 = (state_208849[(24)]);
var inst_208770 = (state_208849[(25)]);
var inst_208765__$1 = (state_208849[(2)]);
var inst_208766__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_208765__$1);
var inst_208767 = (function (){var all_files = inst_208762;
var res_SINGLEQUOTE_ = inst_208765__$1;
var res = inst_208766__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_208766,inst_208762,inst_208765,inst_208770,inst_208765__$1,inst_208766__$1,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__208444_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__208444_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_208766,inst_208762,inst_208765,inst_208770,inst_208765__$1,inst_208766__$1,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_208768 = cljs.core.filter.call(null,inst_208767,inst_208765__$1);
var inst_208769 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_208770__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_208769);
var inst_208771 = cljs.core.not_empty.call(null,inst_208770__$1);
var state_208849__$1 = (function (){var statearr_208877 = state_208849;
(statearr_208877[(23)] = inst_208766__$1);

(statearr_208877[(24)] = inst_208765__$1);

(statearr_208877[(25)] = inst_208770__$1);

(statearr_208877[(26)] = inst_208768);

return statearr_208877;
})();
if(cljs.core.truth_(inst_208771)){
var statearr_208878_208958 = state_208849__$1;
(statearr_208878_208958[(1)] = (23));

} else {
var statearr_208879_208959 = state_208849__$1;
(statearr_208879_208959[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (36))){
var state_208849__$1 = state_208849;
var statearr_208880_208960 = state_208849__$1;
(statearr_208880_208960[(2)] = false);

(statearr_208880_208960[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (41))){
var inst_208824 = (state_208849[(20)]);
var inst_208828 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_208829 = cljs.core.map.call(null,inst_208828,inst_208824);
var inst_208830 = cljs.core.pr_str.call(null,inst_208829);
var inst_208831 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_208830)].join('');
var inst_208832 = figwheel.client.utils.log.call(null,inst_208831);
var state_208849__$1 = state_208849;
var statearr_208881_208961 = state_208849__$1;
(statearr_208881_208961[(2)] = inst_208832);

(statearr_208881_208961[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (43))){
var inst_208825 = (state_208849[(21)]);
var inst_208835 = (state_208849[(2)]);
var inst_208836 = cljs.core.not_empty.call(null,inst_208825);
var state_208849__$1 = (function (){var statearr_208882 = state_208849;
(statearr_208882[(27)] = inst_208835);

return statearr_208882;
})();
if(cljs.core.truth_(inst_208836)){
var statearr_208883_208962 = state_208849__$1;
(statearr_208883_208962[(1)] = (44));

} else {
var statearr_208884_208963 = state_208849__$1;
(statearr_208884_208963[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (29))){
var inst_208766 = (state_208849[(23)]);
var inst_208762 = (state_208849[(19)]);
var inst_208765 = (state_208849[(24)]);
var inst_208802 = (state_208849[(16)]);
var inst_208770 = (state_208849[(25)]);
var inst_208768 = (state_208849[(26)]);
var inst_208798 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_208801 = (function (){var all_files = inst_208762;
var res_SINGLEQUOTE_ = inst_208765;
var res = inst_208766;
var files_not_loaded = inst_208768;
var dependencies_that_loaded = inst_208770;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_208766,inst_208762,inst_208765,inst_208802,inst_208770,inst_208768,inst_208798,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__208800){
var map__208885 = p__208800;
var map__208885__$1 = ((((!((map__208885 == null)))?((((map__208885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208885):map__208885);
var namespace = cljs.core.get.call(null,map__208885__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_208766,inst_208762,inst_208765,inst_208802,inst_208770,inst_208768,inst_208798,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_208802__$1 = cljs.core.group_by.call(null,inst_208801,inst_208768);
var inst_208804 = (inst_208802__$1 == null);
var inst_208805 = cljs.core.not.call(null,inst_208804);
var state_208849__$1 = (function (){var statearr_208887 = state_208849;
(statearr_208887[(28)] = inst_208798);

(statearr_208887[(16)] = inst_208802__$1);

return statearr_208887;
})();
if(inst_208805){
var statearr_208888_208964 = state_208849__$1;
(statearr_208888_208964[(1)] = (32));

} else {
var statearr_208889_208965 = state_208849__$1;
(statearr_208889_208965[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (44))){
var inst_208825 = (state_208849[(21)]);
var inst_208838 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_208825);
var inst_208839 = cljs.core.pr_str.call(null,inst_208838);
var inst_208840 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_208839)].join('');
var inst_208841 = figwheel.client.utils.log.call(null,inst_208840);
var state_208849__$1 = state_208849;
var statearr_208890_208966 = state_208849__$1;
(statearr_208890_208966[(2)] = inst_208841);

(statearr_208890_208966[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (6))){
var inst_208743 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
var statearr_208891_208967 = state_208849__$1;
(statearr_208891_208967[(2)] = inst_208743);

(statearr_208891_208967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (28))){
var inst_208768 = (state_208849[(26)]);
var inst_208795 = (state_208849[(2)]);
var inst_208796 = cljs.core.not_empty.call(null,inst_208768);
var state_208849__$1 = (function (){var statearr_208892 = state_208849;
(statearr_208892[(29)] = inst_208795);

return statearr_208892;
})();
if(cljs.core.truth_(inst_208796)){
var statearr_208893_208968 = state_208849__$1;
(statearr_208893_208968[(1)] = (29));

} else {
var statearr_208894_208969 = state_208849__$1;
(statearr_208894_208969[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (25))){
var inst_208766 = (state_208849[(23)]);
var inst_208782 = (state_208849[(2)]);
var inst_208783 = cljs.core.not_empty.call(null,inst_208766);
var state_208849__$1 = (function (){var statearr_208895 = state_208849;
(statearr_208895[(30)] = inst_208782);

return statearr_208895;
})();
if(cljs.core.truth_(inst_208783)){
var statearr_208896_208970 = state_208849__$1;
(statearr_208896_208970[(1)] = (26));

} else {
var statearr_208897_208971 = state_208849__$1;
(statearr_208897_208971[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (34))){
var inst_208818 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
if(cljs.core.truth_(inst_208818)){
var statearr_208898_208972 = state_208849__$1;
(statearr_208898_208972[(1)] = (38));

} else {
var statearr_208899_208973 = state_208849__$1;
(statearr_208899_208973[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (17))){
var state_208849__$1 = state_208849;
var statearr_208900_208974 = state_208849__$1;
(statearr_208900_208974[(2)] = recompile_dependents);

(statearr_208900_208974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (3))){
var state_208849__$1 = state_208849;
var statearr_208901_208975 = state_208849__$1;
(statearr_208901_208975[(2)] = null);

(statearr_208901_208975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (12))){
var inst_208739 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
var statearr_208902_208976 = state_208849__$1;
(statearr_208902_208976[(2)] = inst_208739);

(statearr_208902_208976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (2))){
var inst_208701 = (state_208849[(13)]);
var inst_208708 = cljs.core.seq.call(null,inst_208701);
var inst_208709 = inst_208708;
var inst_208710 = null;
var inst_208711 = (0);
var inst_208712 = (0);
var state_208849__$1 = (function (){var statearr_208903 = state_208849;
(statearr_208903[(7)] = inst_208712);

(statearr_208903[(8)] = inst_208711);

(statearr_208903[(9)] = inst_208709);

(statearr_208903[(10)] = inst_208710);

return statearr_208903;
})();
var statearr_208904_208977 = state_208849__$1;
(statearr_208904_208977[(2)] = null);

(statearr_208904_208977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (23))){
var inst_208766 = (state_208849[(23)]);
var inst_208762 = (state_208849[(19)]);
var inst_208765 = (state_208849[(24)]);
var inst_208770 = (state_208849[(25)]);
var inst_208768 = (state_208849[(26)]);
var inst_208773 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_208775 = (function (){var all_files = inst_208762;
var res_SINGLEQUOTE_ = inst_208765;
var res = inst_208766;
var files_not_loaded = inst_208768;
var dependencies_that_loaded = inst_208770;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_208766,inst_208762,inst_208765,inst_208770,inst_208768,inst_208773,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__208774){
var map__208905 = p__208774;
var map__208905__$1 = ((((!((map__208905 == null)))?((((map__208905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208905):map__208905);
var request_url = cljs.core.get.call(null,map__208905__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_208766,inst_208762,inst_208765,inst_208770,inst_208768,inst_208773,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_208776 = cljs.core.reverse.call(null,inst_208770);
var inst_208777 = cljs.core.map.call(null,inst_208775,inst_208776);
var inst_208778 = cljs.core.pr_str.call(null,inst_208777);
var inst_208779 = figwheel.client.utils.log.call(null,inst_208778);
var state_208849__$1 = (function (){var statearr_208907 = state_208849;
(statearr_208907[(31)] = inst_208773);

return statearr_208907;
})();
var statearr_208908_208978 = state_208849__$1;
(statearr_208908_208978[(2)] = inst_208779);

(statearr_208908_208978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (35))){
var state_208849__$1 = state_208849;
var statearr_208909_208979 = state_208849__$1;
(statearr_208909_208979[(2)] = true);

(statearr_208909_208979[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (19))){
var inst_208752 = (state_208849[(12)]);
var inst_208758 = figwheel.client.file_reloading.expand_files.call(null,inst_208752);
var state_208849__$1 = state_208849;
var statearr_208910_208980 = state_208849__$1;
(statearr_208910_208980[(2)] = inst_208758);

(statearr_208910_208980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (11))){
var state_208849__$1 = state_208849;
var statearr_208911_208981 = state_208849__$1;
(statearr_208911_208981[(2)] = null);

(statearr_208911_208981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (9))){
var inst_208741 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
var statearr_208912_208982 = state_208849__$1;
(statearr_208912_208982[(2)] = inst_208741);

(statearr_208912_208982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (5))){
var inst_208712 = (state_208849[(7)]);
var inst_208711 = (state_208849[(8)]);
var inst_208714 = (inst_208712 < inst_208711);
var inst_208715 = inst_208714;
var state_208849__$1 = state_208849;
if(cljs.core.truth_(inst_208715)){
var statearr_208913_208983 = state_208849__$1;
(statearr_208913_208983[(1)] = (7));

} else {
var statearr_208914_208984 = state_208849__$1;
(statearr_208914_208984[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (14))){
var inst_208722 = (state_208849[(22)]);
var inst_208731 = cljs.core.first.call(null,inst_208722);
var inst_208732 = figwheel.client.file_reloading.eval_body.call(null,inst_208731,opts);
var inst_208733 = cljs.core.next.call(null,inst_208722);
var inst_208709 = inst_208733;
var inst_208710 = null;
var inst_208711 = (0);
var inst_208712 = (0);
var state_208849__$1 = (function (){var statearr_208915 = state_208849;
(statearr_208915[(7)] = inst_208712);

(statearr_208915[(8)] = inst_208711);

(statearr_208915[(9)] = inst_208709);

(statearr_208915[(32)] = inst_208732);

(statearr_208915[(10)] = inst_208710);

return statearr_208915;
})();
var statearr_208916_208985 = state_208849__$1;
(statearr_208916_208985[(2)] = null);

(statearr_208916_208985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (45))){
var state_208849__$1 = state_208849;
var statearr_208917_208986 = state_208849__$1;
(statearr_208917_208986[(2)] = null);

(statearr_208917_208986[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (26))){
var inst_208766 = (state_208849[(23)]);
var inst_208762 = (state_208849[(19)]);
var inst_208765 = (state_208849[(24)]);
var inst_208770 = (state_208849[(25)]);
var inst_208768 = (state_208849[(26)]);
var inst_208785 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_208787 = (function (){var all_files = inst_208762;
var res_SINGLEQUOTE_ = inst_208765;
var res = inst_208766;
var files_not_loaded = inst_208768;
var dependencies_that_loaded = inst_208770;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_208766,inst_208762,inst_208765,inst_208770,inst_208768,inst_208785,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__208786){
var map__208918 = p__208786;
var map__208918__$1 = ((((!((map__208918 == null)))?((((map__208918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__208918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__208918):map__208918);
var namespace = cljs.core.get.call(null,map__208918__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__208918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_208766,inst_208762,inst_208765,inst_208770,inst_208768,inst_208785,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_208788 = cljs.core.map.call(null,inst_208787,inst_208766);
var inst_208789 = cljs.core.pr_str.call(null,inst_208788);
var inst_208790 = figwheel.client.utils.log.call(null,inst_208789);
var inst_208791 = (function (){var all_files = inst_208762;
var res_SINGLEQUOTE_ = inst_208765;
var res = inst_208766;
var files_not_loaded = inst_208768;
var dependencies_that_loaded = inst_208770;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_208766,inst_208762,inst_208765,inst_208770,inst_208768,inst_208785,inst_208787,inst_208788,inst_208789,inst_208790,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_208766,inst_208762,inst_208765,inst_208770,inst_208768,inst_208785,inst_208787,inst_208788,inst_208789,inst_208790,state_val_208850,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_208792 = setTimeout(inst_208791,(10));
var state_208849__$1 = (function (){var statearr_208920 = state_208849;
(statearr_208920[(33)] = inst_208785);

(statearr_208920[(34)] = inst_208790);

return statearr_208920;
})();
var statearr_208921_208987 = state_208849__$1;
(statearr_208921_208987[(2)] = inst_208792);

(statearr_208921_208987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (16))){
var state_208849__$1 = state_208849;
var statearr_208922_208988 = state_208849__$1;
(statearr_208922_208988[(2)] = reload_dependents);

(statearr_208922_208988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (38))){
var inst_208802 = (state_208849[(16)]);
var inst_208820 = cljs.core.apply.call(null,cljs.core.hash_map,inst_208802);
var state_208849__$1 = state_208849;
var statearr_208923_208989 = state_208849__$1;
(statearr_208923_208989[(2)] = inst_208820);

(statearr_208923_208989[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (30))){
var state_208849__$1 = state_208849;
var statearr_208924_208990 = state_208849__$1;
(statearr_208924_208990[(2)] = null);

(statearr_208924_208990[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (10))){
var inst_208722 = (state_208849[(22)]);
var inst_208724 = cljs.core.chunked_seq_QMARK_.call(null,inst_208722);
var state_208849__$1 = state_208849;
if(inst_208724){
var statearr_208925_208991 = state_208849__$1;
(statearr_208925_208991[(1)] = (13));

} else {
var statearr_208926_208992 = state_208849__$1;
(statearr_208926_208992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (18))){
var inst_208756 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
if(cljs.core.truth_(inst_208756)){
var statearr_208927_208993 = state_208849__$1;
(statearr_208927_208993[(1)] = (19));

} else {
var statearr_208928_208994 = state_208849__$1;
(statearr_208928_208994[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (42))){
var state_208849__$1 = state_208849;
var statearr_208929_208995 = state_208849__$1;
(statearr_208929_208995[(2)] = null);

(statearr_208929_208995[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (37))){
var inst_208815 = (state_208849[(2)]);
var state_208849__$1 = state_208849;
var statearr_208930_208996 = state_208849__$1;
(statearr_208930_208996[(2)] = inst_208815);

(statearr_208930_208996[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_208850 === (8))){
var inst_208722 = (state_208849[(22)]);
var inst_208709 = (state_208849[(9)]);
var inst_208722__$1 = cljs.core.seq.call(null,inst_208709);
var state_208849__$1 = (function (){var statearr_208931 = state_208849;
(statearr_208931[(22)] = inst_208722__$1);

return statearr_208931;
})();
if(inst_208722__$1){
var statearr_208932_208997 = state_208849__$1;
(statearr_208932_208997[(1)] = (10));

} else {
var statearr_208933_208998 = state_208849__$1;
(statearr_208933_208998[(1)] = (11));

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
});})(c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44061__auto__,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0 = (function (){
var statearr_208937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_208937[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__);

(statearr_208937[(1)] = (1));

return statearr_208937;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1 = (function (state_208849){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_208849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e208938){if((e208938 instanceof Object)){
var ex__44065__auto__ = e208938;
var statearr_208939_208999 = state_208849;
(statearr_208939_208999[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e208938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__209000 = state_208849;
state_208849 = G__209000;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__ = function(state_208849){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1.call(this,state_208849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44086__auto__ = (function (){var statearr_208940 = f__44085__auto__.call(null);
(statearr_208940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_208940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,map__208694,map__208694__$1,opts,before_jsload,on_jsload,reload_dependents,map__208695,map__208695__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44084__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__209003,link){
var map__209006 = p__209003;
var map__209006__$1 = ((((!((map__209006 == null)))?((((map__209006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209006):map__209006);
var file = cljs.core.get.call(null,map__209006__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__209006,map__209006__$1,file){
return (function (p1__209001_SHARP_,p2__209002_SHARP_){
if(cljs.core._EQ_.call(null,p1__209001_SHARP_,p2__209002_SHARP_)){
return p1__209001_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__209006,map__209006__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__209012){
var map__209013 = p__209012;
var map__209013__$1 = ((((!((map__209013 == null)))?((((map__209013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209013):map__209013);
var match_length = cljs.core.get.call(null,map__209013__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__209013__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__209008_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__209008_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__209015_SHARP_,p2__209016_SHARP_){
return cljs.core.assoc.call(null,p1__209015_SHARP_,cljs.core.get.call(null,p2__209016_SHARP_,key),p2__209016_SHARP_);
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
var loaded_f_datas_209017 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_209017);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_209017);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__209018,p__209019){
var map__209024 = p__209018;
var map__209024__$1 = ((((!((map__209024 == null)))?((((map__209024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209024):map__209024);
var on_cssload = cljs.core.get.call(null,map__209024__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__209025 = p__209019;
var map__209025__$1 = ((((!((map__209025 == null)))?((((map__209025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__209025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__209025):map__209025);
var files_msg = map__209025__$1;
var files = cljs.core.get.call(null,map__209025__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1491715109645