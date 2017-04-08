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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__86934_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__86934_SHARP_));
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
var seq__86939 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__86940 = null;
var count__86941 = (0);
var i__86942 = (0);
while(true){
if((i__86942 < count__86941)){
var n = cljs.core._nth.call(null,chunk__86940,i__86942);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__86943 = seq__86939;
var G__86944 = chunk__86940;
var G__86945 = count__86941;
var G__86946 = (i__86942 + (1));
seq__86939 = G__86943;
chunk__86940 = G__86944;
count__86941 = G__86945;
i__86942 = G__86946;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__86939);
if(temp__6753__auto__){
var seq__86939__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86939__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__86939__$1);
var G__86947 = cljs.core.chunk_rest.call(null,seq__86939__$1);
var G__86948 = c__35466__auto__;
var G__86949 = cljs.core.count.call(null,c__35466__auto__);
var G__86950 = (0);
seq__86939 = G__86947;
chunk__86940 = G__86948;
count__86941 = G__86949;
i__86942 = G__86950;
continue;
} else {
var n = cljs.core.first.call(null,seq__86939__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__86951 = cljs.core.next.call(null,seq__86939__$1);
var G__86952 = null;
var G__86953 = (0);
var G__86954 = (0);
seq__86939 = G__86951;
chunk__86940 = G__86952;
count__86941 = G__86953;
i__86942 = G__86954;
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

var seq__87005_87016 = cljs.core.seq.call(null,deps);
var chunk__87006_87017 = null;
var count__87007_87018 = (0);
var i__87008_87019 = (0);
while(true){
if((i__87008_87019 < count__87007_87018)){
var dep_87020 = cljs.core._nth.call(null,chunk__87006_87017,i__87008_87019);
topo_sort_helper_STAR_.call(null,dep_87020,(depth + (1)),state);

var G__87021 = seq__87005_87016;
var G__87022 = chunk__87006_87017;
var G__87023 = count__87007_87018;
var G__87024 = (i__87008_87019 + (1));
seq__87005_87016 = G__87021;
chunk__87006_87017 = G__87022;
count__87007_87018 = G__87023;
i__87008_87019 = G__87024;
continue;
} else {
var temp__6753__auto___87025 = cljs.core.seq.call(null,seq__87005_87016);
if(temp__6753__auto___87025){
var seq__87005_87026__$1 = temp__6753__auto___87025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87005_87026__$1)){
var c__35466__auto___87027 = cljs.core.chunk_first.call(null,seq__87005_87026__$1);
var G__87028 = cljs.core.chunk_rest.call(null,seq__87005_87026__$1);
var G__87029 = c__35466__auto___87027;
var G__87030 = cljs.core.count.call(null,c__35466__auto___87027);
var G__87031 = (0);
seq__87005_87016 = G__87028;
chunk__87006_87017 = G__87029;
count__87007_87018 = G__87030;
i__87008_87019 = G__87031;
continue;
} else {
var dep_87032 = cljs.core.first.call(null,seq__87005_87026__$1);
topo_sort_helper_STAR_.call(null,dep_87032,(depth + (1)),state);

var G__87033 = cljs.core.next.call(null,seq__87005_87026__$1);
var G__87034 = null;
var G__87035 = (0);
var G__87036 = (0);
seq__87005_87016 = G__87033;
chunk__87006_87017 = G__87034;
count__87007_87018 = G__87035;
i__87008_87019 = G__87036;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__87009){
var vec__87013 = p__87009;
var seq__87014 = cljs.core.seq.call(null,vec__87013);
var first__87015 = cljs.core.first.call(null,seq__87014);
var seq__87014__$1 = cljs.core.next.call(null,seq__87014);
var x = first__87015;
var xs = seq__87014__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__87013,seq__87014,first__87015,seq__87014__$1,x,xs,get_deps__$1){
return (function (p1__86955_SHARP_){
return clojure.set.difference.call(null,p1__86955_SHARP_,x);
});})(vec__87013,seq__87014,first__87015,seq__87014__$1,x,xs,get_deps__$1))
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
var seq__87049 = cljs.core.seq.call(null,provides);
var chunk__87050 = null;
var count__87051 = (0);
var i__87052 = (0);
while(true){
if((i__87052 < count__87051)){
var prov = cljs.core._nth.call(null,chunk__87050,i__87052);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__87053_87061 = cljs.core.seq.call(null,requires);
var chunk__87054_87062 = null;
var count__87055_87063 = (0);
var i__87056_87064 = (0);
while(true){
if((i__87056_87064 < count__87055_87063)){
var req_87065 = cljs.core._nth.call(null,chunk__87054_87062,i__87056_87064);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_87065,prov);

var G__87066 = seq__87053_87061;
var G__87067 = chunk__87054_87062;
var G__87068 = count__87055_87063;
var G__87069 = (i__87056_87064 + (1));
seq__87053_87061 = G__87066;
chunk__87054_87062 = G__87067;
count__87055_87063 = G__87068;
i__87056_87064 = G__87069;
continue;
} else {
var temp__6753__auto___87070 = cljs.core.seq.call(null,seq__87053_87061);
if(temp__6753__auto___87070){
var seq__87053_87071__$1 = temp__6753__auto___87070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87053_87071__$1)){
var c__35466__auto___87072 = cljs.core.chunk_first.call(null,seq__87053_87071__$1);
var G__87073 = cljs.core.chunk_rest.call(null,seq__87053_87071__$1);
var G__87074 = c__35466__auto___87072;
var G__87075 = cljs.core.count.call(null,c__35466__auto___87072);
var G__87076 = (0);
seq__87053_87061 = G__87073;
chunk__87054_87062 = G__87074;
count__87055_87063 = G__87075;
i__87056_87064 = G__87076;
continue;
} else {
var req_87077 = cljs.core.first.call(null,seq__87053_87071__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_87077,prov);

var G__87078 = cljs.core.next.call(null,seq__87053_87071__$1);
var G__87079 = null;
var G__87080 = (0);
var G__87081 = (0);
seq__87053_87061 = G__87078;
chunk__87054_87062 = G__87079;
count__87055_87063 = G__87080;
i__87056_87064 = G__87081;
continue;
}
} else {
}
}
break;
}

var G__87082 = seq__87049;
var G__87083 = chunk__87050;
var G__87084 = count__87051;
var G__87085 = (i__87052 + (1));
seq__87049 = G__87082;
chunk__87050 = G__87083;
count__87051 = G__87084;
i__87052 = G__87085;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__87049);
if(temp__6753__auto__){
var seq__87049__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87049__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__87049__$1);
var G__87086 = cljs.core.chunk_rest.call(null,seq__87049__$1);
var G__87087 = c__35466__auto__;
var G__87088 = cljs.core.count.call(null,c__35466__auto__);
var G__87089 = (0);
seq__87049 = G__87086;
chunk__87050 = G__87087;
count__87051 = G__87088;
i__87052 = G__87089;
continue;
} else {
var prov = cljs.core.first.call(null,seq__87049__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__87057_87090 = cljs.core.seq.call(null,requires);
var chunk__87058_87091 = null;
var count__87059_87092 = (0);
var i__87060_87093 = (0);
while(true){
if((i__87060_87093 < count__87059_87092)){
var req_87094 = cljs.core._nth.call(null,chunk__87058_87091,i__87060_87093);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_87094,prov);

var G__87095 = seq__87057_87090;
var G__87096 = chunk__87058_87091;
var G__87097 = count__87059_87092;
var G__87098 = (i__87060_87093 + (1));
seq__87057_87090 = G__87095;
chunk__87058_87091 = G__87096;
count__87059_87092 = G__87097;
i__87060_87093 = G__87098;
continue;
} else {
var temp__6753__auto___87099__$1 = cljs.core.seq.call(null,seq__87057_87090);
if(temp__6753__auto___87099__$1){
var seq__87057_87100__$1 = temp__6753__auto___87099__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87057_87100__$1)){
var c__35466__auto___87101 = cljs.core.chunk_first.call(null,seq__87057_87100__$1);
var G__87102 = cljs.core.chunk_rest.call(null,seq__87057_87100__$1);
var G__87103 = c__35466__auto___87101;
var G__87104 = cljs.core.count.call(null,c__35466__auto___87101);
var G__87105 = (0);
seq__87057_87090 = G__87102;
chunk__87058_87091 = G__87103;
count__87059_87092 = G__87104;
i__87060_87093 = G__87105;
continue;
} else {
var req_87106 = cljs.core.first.call(null,seq__87057_87100__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_87106,prov);

var G__87107 = cljs.core.next.call(null,seq__87057_87100__$1);
var G__87108 = null;
var G__87109 = (0);
var G__87110 = (0);
seq__87057_87090 = G__87107;
chunk__87058_87091 = G__87108;
count__87059_87092 = G__87109;
i__87060_87093 = G__87110;
continue;
}
} else {
}
}
break;
}

var G__87111 = cljs.core.next.call(null,seq__87049__$1);
var G__87112 = null;
var G__87113 = (0);
var G__87114 = (0);
seq__87049 = G__87111;
chunk__87050 = G__87112;
count__87051 = G__87113;
i__87052 = G__87114;
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
var seq__87119_87123 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__87120_87124 = null;
var count__87121_87125 = (0);
var i__87122_87126 = (0);
while(true){
if((i__87122_87126 < count__87121_87125)){
var ns_87127 = cljs.core._nth.call(null,chunk__87120_87124,i__87122_87126);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_87127);

var G__87128 = seq__87119_87123;
var G__87129 = chunk__87120_87124;
var G__87130 = count__87121_87125;
var G__87131 = (i__87122_87126 + (1));
seq__87119_87123 = G__87128;
chunk__87120_87124 = G__87129;
count__87121_87125 = G__87130;
i__87122_87126 = G__87131;
continue;
} else {
var temp__6753__auto___87132 = cljs.core.seq.call(null,seq__87119_87123);
if(temp__6753__auto___87132){
var seq__87119_87133__$1 = temp__6753__auto___87132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87119_87133__$1)){
var c__35466__auto___87134 = cljs.core.chunk_first.call(null,seq__87119_87133__$1);
var G__87135 = cljs.core.chunk_rest.call(null,seq__87119_87133__$1);
var G__87136 = c__35466__auto___87134;
var G__87137 = cljs.core.count.call(null,c__35466__auto___87134);
var G__87138 = (0);
seq__87119_87123 = G__87135;
chunk__87120_87124 = G__87136;
count__87121_87125 = G__87137;
i__87122_87126 = G__87138;
continue;
} else {
var ns_87139 = cljs.core.first.call(null,seq__87119_87133__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_87139);

var G__87140 = cljs.core.next.call(null,seq__87119_87133__$1);
var G__87141 = null;
var G__87142 = (0);
var G__87143 = (0);
seq__87119_87123 = G__87140;
chunk__87120_87124 = G__87141;
count__87121_87125 = G__87142;
i__87122_87126 = G__87143;
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
var G__87144__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__87144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__87145__i = 0, G__87145__a = new Array(arguments.length -  0);
while (G__87145__i < G__87145__a.length) {G__87145__a[G__87145__i] = arguments[G__87145__i + 0]; ++G__87145__i;}
  args = new cljs.core.IndexedSeq(G__87145__a,0);
} 
return G__87144__delegate.call(this,args);};
G__87144.cljs$lang$maxFixedArity = 0;
G__87144.cljs$lang$applyTo = (function (arglist__87146){
var args = cljs.core.seq(arglist__87146);
return G__87144__delegate(args);
});
G__87144.cljs$core$IFn$_invoke$arity$variadic = G__87144__delegate;
return G__87144;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__87147 = cljs.core._EQ_;
var expr__87148 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__87147.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__87148))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__87147,expr__87148){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__87147,expr__87148))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__87147,expr__87148){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e87150){if((e87150 instanceof Error)){
var e = e87150;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e87150;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__87147,expr__87148))
} else {
if(cljs.core.truth_(pred__87147.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__87148))){
return ((function (pred__87147,expr__87148){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__87147,expr__87148){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__87147,expr__87148))
);

return deferred.addErrback(((function (deferred,pred__87147,expr__87148){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__87147,expr__87148))
);
});
;})(pred__87147,expr__87148))
} else {
if(cljs.core.truth_(pred__87147.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__87148))){
return ((function (pred__87147,expr__87148){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e87151){if((e87151 instanceof Error)){
var e = e87151;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e87151;

}
}})());
});
;})(pred__87147,expr__87148))
} else {
return ((function (pred__87147,expr__87148){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__87147,expr__87148))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__87152,callback){
var map__87155 = p__87152;
var map__87155__$1 = ((((!((map__87155 == null)))?((((map__87155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87155):map__87155);
var file_msg = map__87155__$1;
var request_url = cljs.core.get.call(null,map__87155__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__87155,map__87155__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__87155,map__87155__$1,file_msg,request_url))
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
return (function (state_87179){
var state_val_87180 = (state_87179[(1)]);
if((state_val_87180 === (7))){
var inst_87175 = (state_87179[(2)]);
var state_87179__$1 = state_87179;
var statearr_87181_87201 = state_87179__$1;
(statearr_87181_87201[(2)] = inst_87175);

(statearr_87181_87201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87180 === (1))){
var state_87179__$1 = state_87179;
var statearr_87182_87202 = state_87179__$1;
(statearr_87182_87202[(2)] = null);

(statearr_87182_87202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87180 === (4))){
var inst_87159 = (state_87179[(7)]);
var inst_87159__$1 = (state_87179[(2)]);
var state_87179__$1 = (function (){var statearr_87183 = state_87179;
(statearr_87183[(7)] = inst_87159__$1);

return statearr_87183;
})();
if(cljs.core.truth_(inst_87159__$1)){
var statearr_87184_87203 = state_87179__$1;
(statearr_87184_87203[(1)] = (5));

} else {
var statearr_87185_87204 = state_87179__$1;
(statearr_87185_87204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87180 === (6))){
var state_87179__$1 = state_87179;
var statearr_87186_87205 = state_87179__$1;
(statearr_87186_87205[(2)] = null);

(statearr_87186_87205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87180 === (3))){
var inst_87177 = (state_87179[(2)]);
var state_87179__$1 = state_87179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87179__$1,inst_87177);
} else {
if((state_val_87180 === (2))){
var state_87179__$1 = state_87179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87179__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_87180 === (11))){
var inst_87171 = (state_87179[(2)]);
var state_87179__$1 = (function (){var statearr_87187 = state_87179;
(statearr_87187[(8)] = inst_87171);

return statearr_87187;
})();
var statearr_87188_87206 = state_87179__$1;
(statearr_87188_87206[(2)] = null);

(statearr_87188_87206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87180 === (9))){
var inst_87165 = (state_87179[(9)]);
var inst_87163 = (state_87179[(10)]);
var inst_87167 = inst_87165.call(null,inst_87163);
var state_87179__$1 = state_87179;
var statearr_87189_87207 = state_87179__$1;
(statearr_87189_87207[(2)] = inst_87167);

(statearr_87189_87207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87180 === (5))){
var inst_87159 = (state_87179[(7)]);
var inst_87161 = figwheel.client.file_reloading.blocking_load.call(null,inst_87159);
var state_87179__$1 = state_87179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87179__$1,(8),inst_87161);
} else {
if((state_val_87180 === (10))){
var inst_87163 = (state_87179[(10)]);
var inst_87169 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_87163);
var state_87179__$1 = state_87179;
var statearr_87190_87208 = state_87179__$1;
(statearr_87190_87208[(2)] = inst_87169);

(statearr_87190_87208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87180 === (8))){
var inst_87165 = (state_87179[(9)]);
var inst_87159 = (state_87179[(7)]);
var inst_87163 = (state_87179[(2)]);
var inst_87164 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_87165__$1 = cljs.core.get.call(null,inst_87164,inst_87159);
var state_87179__$1 = (function (){var statearr_87191 = state_87179;
(statearr_87191[(9)] = inst_87165__$1);

(statearr_87191[(10)] = inst_87163);

return statearr_87191;
})();
if(cljs.core.truth_(inst_87165__$1)){
var statearr_87192_87209 = state_87179__$1;
(statearr_87192_87209[(1)] = (9));

} else {
var statearr_87193_87210 = state_87179__$1;
(statearr_87193_87210[(1)] = (10));

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
var statearr_87197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_87197[(0)] = figwheel$client$file_reloading$state_machine__48199__auto__);

(statearr_87197[(1)] = (1));

return statearr_87197;
});
var figwheel$client$file_reloading$state_machine__48199__auto____1 = (function (state_87179){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_87179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e87198){if((e87198 instanceof Object)){
var ex__48202__auto__ = e87198;
var statearr_87199_87211 = state_87179;
(statearr_87199_87211[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87212 = state_87179;
state_87179 = G__87212;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48199__auto__ = function(state_87179){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48199__auto____1.call(this,state_87179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48199__auto____0;
figwheel$client$file_reloading$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48199__auto____1;
return figwheel$client$file_reloading$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_87200 = f__48313__auto__.call(null);
(statearr_87200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_87200;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__87213,callback){
var map__87216 = p__87213;
var map__87216__$1 = ((((!((map__87216 == null)))?((((map__87216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87216):map__87216);
var file_msg = map__87216__$1;
var namespace = cljs.core.get.call(null,map__87216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__87216,map__87216__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__87216,map__87216__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__87218){
var map__87221 = p__87218;
var map__87221__$1 = ((((!((map__87221 == null)))?((((map__87221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87221):map__87221);
var file_msg = map__87221__$1;
var namespace = cljs.core.get.call(null,map__87221__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__87223){
var map__87226 = p__87223;
var map__87226__$1 = ((((!((map__87226 == null)))?((((map__87226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87226):map__87226);
var file_msg = map__87226__$1;
var namespace = cljs.core.get.call(null,map__87226__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__87228,callback){
var map__87231 = p__87228;
var map__87231__$1 = ((((!((map__87231 == null)))?((((map__87231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87231):map__87231);
var file_msg = map__87231__$1;
var request_url = cljs.core.get.call(null,map__87231__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__87231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__48312__auto___87335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___87335,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___87335,out){
return (function (state_87317){
var state_val_87318 = (state_87317[(1)]);
if((state_val_87318 === (1))){
var inst_87291 = cljs.core.seq.call(null,files);
var inst_87292 = cljs.core.first.call(null,inst_87291);
var inst_87293 = cljs.core.next.call(null,inst_87291);
var inst_87294 = files;
var state_87317__$1 = (function (){var statearr_87319 = state_87317;
(statearr_87319[(7)] = inst_87293);

(statearr_87319[(8)] = inst_87292);

(statearr_87319[(9)] = inst_87294);

return statearr_87319;
})();
var statearr_87320_87336 = state_87317__$1;
(statearr_87320_87336[(2)] = null);

(statearr_87320_87336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87318 === (2))){
var inst_87300 = (state_87317[(10)]);
var inst_87294 = (state_87317[(9)]);
var inst_87299 = cljs.core.seq.call(null,inst_87294);
var inst_87300__$1 = cljs.core.first.call(null,inst_87299);
var inst_87301 = cljs.core.next.call(null,inst_87299);
var inst_87302 = (inst_87300__$1 == null);
var inst_87303 = cljs.core.not.call(null,inst_87302);
var state_87317__$1 = (function (){var statearr_87321 = state_87317;
(statearr_87321[(10)] = inst_87300__$1);

(statearr_87321[(11)] = inst_87301);

return statearr_87321;
})();
if(inst_87303){
var statearr_87322_87337 = state_87317__$1;
(statearr_87322_87337[(1)] = (4));

} else {
var statearr_87323_87338 = state_87317__$1;
(statearr_87323_87338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87318 === (3))){
var inst_87315 = (state_87317[(2)]);
var state_87317__$1 = state_87317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87317__$1,inst_87315);
} else {
if((state_val_87318 === (4))){
var inst_87300 = (state_87317[(10)]);
var inst_87305 = figwheel.client.file_reloading.reload_js_file.call(null,inst_87300);
var state_87317__$1 = state_87317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87317__$1,(7),inst_87305);
} else {
if((state_val_87318 === (5))){
var inst_87311 = cljs.core.async.close_BANG_.call(null,out);
var state_87317__$1 = state_87317;
var statearr_87324_87339 = state_87317__$1;
(statearr_87324_87339[(2)] = inst_87311);

(statearr_87324_87339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87318 === (6))){
var inst_87313 = (state_87317[(2)]);
var state_87317__$1 = state_87317;
var statearr_87325_87340 = state_87317__$1;
(statearr_87325_87340[(2)] = inst_87313);

(statearr_87325_87340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87318 === (7))){
var inst_87301 = (state_87317[(11)]);
var inst_87307 = (state_87317[(2)]);
var inst_87308 = cljs.core.async.put_BANG_.call(null,out,inst_87307);
var inst_87294 = inst_87301;
var state_87317__$1 = (function (){var statearr_87326 = state_87317;
(statearr_87326[(12)] = inst_87308);

(statearr_87326[(9)] = inst_87294);

return statearr_87326;
})();
var statearr_87327_87341 = state_87317__$1;
(statearr_87327_87341[(2)] = null);

(statearr_87327_87341[(1)] = (2));


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
});})(c__48312__auto___87335,out))
;
return ((function (switch__48198__auto__,c__48312__auto___87335,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0 = (function (){
var statearr_87331 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87331[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__);

(statearr_87331[(1)] = (1));

return statearr_87331;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1 = (function (state_87317){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_87317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e87332){if((e87332 instanceof Object)){
var ex__48202__auto__ = e87332;
var statearr_87333_87342 = state_87317;
(statearr_87333_87342[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87343 = state_87317;
state_87317 = G__87343;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__ = function(state_87317){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1.call(this,state_87317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___87335,out))
})();
var state__48314__auto__ = (function (){var statearr_87334 = f__48313__auto__.call(null);
(statearr_87334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___87335);

return statearr_87334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___87335,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__87344,opts){
var map__87348 = p__87344;
var map__87348__$1 = ((((!((map__87348 == null)))?((((map__87348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87348):map__87348);
var eval_body = cljs.core.get.call(null,map__87348__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__87348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e87350){var e = e87350;
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
return (function (p1__87351_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__87351_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__87360){
var vec__87361 = p__87360;
var k = cljs.core.nth.call(null,vec__87361,(0),null);
var v = cljs.core.nth.call(null,vec__87361,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__87364){
var vec__87365 = p__87364;
var k = cljs.core.nth.call(null,vec__87365,(0),null);
var v = cljs.core.nth.call(null,vec__87365,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__87371,p__87372){
var map__87620 = p__87371;
var map__87620__$1 = ((((!((map__87620 == null)))?((((map__87620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87620):map__87620);
var opts = map__87620__$1;
var before_jsload = cljs.core.get.call(null,map__87620__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__87620__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__87620__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__87621 = p__87372;
var map__87621__$1 = ((((!((map__87621 == null)))?((((map__87621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87621):map__87621);
var msg = map__87621__$1;
var files = cljs.core.get.call(null,map__87621__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__87621__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__87621__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_87775){
var state_val_87776 = (state_87775[(1)]);
if((state_val_87776 === (7))){
var inst_87637 = (state_87775[(7)]);
var inst_87638 = (state_87775[(8)]);
var inst_87635 = (state_87775[(9)]);
var inst_87636 = (state_87775[(10)]);
var inst_87643 = cljs.core._nth.call(null,inst_87636,inst_87638);
var inst_87644 = figwheel.client.file_reloading.eval_body.call(null,inst_87643,opts);
var inst_87645 = (inst_87638 + (1));
var tmp87777 = inst_87637;
var tmp87778 = inst_87635;
var tmp87779 = inst_87636;
var inst_87635__$1 = tmp87778;
var inst_87636__$1 = tmp87779;
var inst_87637__$1 = tmp87777;
var inst_87638__$1 = inst_87645;
var state_87775__$1 = (function (){var statearr_87780 = state_87775;
(statearr_87780[(7)] = inst_87637__$1);

(statearr_87780[(8)] = inst_87638__$1);

(statearr_87780[(9)] = inst_87635__$1);

(statearr_87780[(10)] = inst_87636__$1);

(statearr_87780[(11)] = inst_87644);

return statearr_87780;
})();
var statearr_87781_87867 = state_87775__$1;
(statearr_87781_87867[(2)] = null);

(statearr_87781_87867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (20))){
var inst_87678 = (state_87775[(12)]);
var inst_87686 = figwheel.client.file_reloading.sort_files.call(null,inst_87678);
var state_87775__$1 = state_87775;
var statearr_87782_87868 = state_87775__$1;
(statearr_87782_87868[(2)] = inst_87686);

(statearr_87782_87868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (27))){
var state_87775__$1 = state_87775;
var statearr_87783_87869 = state_87775__$1;
(statearr_87783_87869[(2)] = null);

(statearr_87783_87869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (1))){
var inst_87627 = (state_87775[(13)]);
var inst_87624 = before_jsload.call(null,files);
var inst_87625 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_87626 = (function (){return ((function (inst_87627,inst_87624,inst_87625,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__87368_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__87368_SHARP_);
});
;})(inst_87627,inst_87624,inst_87625,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_87627__$1 = cljs.core.filter.call(null,inst_87626,files);
var inst_87628 = cljs.core.not_empty.call(null,inst_87627__$1);
var state_87775__$1 = (function (){var statearr_87784 = state_87775;
(statearr_87784[(14)] = inst_87624);

(statearr_87784[(13)] = inst_87627__$1);

(statearr_87784[(15)] = inst_87625);

return statearr_87784;
})();
if(cljs.core.truth_(inst_87628)){
var statearr_87785_87870 = state_87775__$1;
(statearr_87785_87870[(1)] = (2));

} else {
var statearr_87786_87871 = state_87775__$1;
(statearr_87786_87871[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (24))){
var state_87775__$1 = state_87775;
var statearr_87787_87872 = state_87775__$1;
(statearr_87787_87872[(2)] = null);

(statearr_87787_87872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (39))){
var inst_87728 = (state_87775[(16)]);
var state_87775__$1 = state_87775;
var statearr_87788_87873 = state_87775__$1;
(statearr_87788_87873[(2)] = inst_87728);

(statearr_87788_87873[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (46))){
var inst_87770 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
var statearr_87789_87874 = state_87775__$1;
(statearr_87789_87874[(2)] = inst_87770);

(statearr_87789_87874[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (4))){
var inst_87672 = (state_87775[(2)]);
var inst_87673 = cljs.core.List.EMPTY;
var inst_87674 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_87673);
var inst_87675 = (function (){return ((function (inst_87672,inst_87673,inst_87674,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__87369_SHARP_){
var and__34543__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__87369_SHARP_);
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__87369_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__87369_SHARP_)));
} else {
return and__34543__auto__;
}
});
;})(inst_87672,inst_87673,inst_87674,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_87676 = cljs.core.filter.call(null,inst_87675,files);
var inst_87677 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_87678 = cljs.core.concat.call(null,inst_87676,inst_87677);
var state_87775__$1 = (function (){var statearr_87790 = state_87775;
(statearr_87790[(17)] = inst_87672);

(statearr_87790[(18)] = inst_87674);

(statearr_87790[(12)] = inst_87678);

return statearr_87790;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_87791_87875 = state_87775__$1;
(statearr_87791_87875[(1)] = (16));

} else {
var statearr_87792_87876 = state_87775__$1;
(statearr_87792_87876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (15))){
var inst_87662 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
var statearr_87793_87877 = state_87775__$1;
(statearr_87793_87877[(2)] = inst_87662);

(statearr_87793_87877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (21))){
var inst_87688 = (state_87775[(19)]);
var inst_87688__$1 = (state_87775[(2)]);
var inst_87689 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_87688__$1);
var state_87775__$1 = (function (){var statearr_87794 = state_87775;
(statearr_87794[(19)] = inst_87688__$1);

return statearr_87794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87775__$1,(22),inst_87689);
} else {
if((state_val_87776 === (31))){
var inst_87773 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87775__$1,inst_87773);
} else {
if((state_val_87776 === (32))){
var inst_87728 = (state_87775[(16)]);
var inst_87733 = inst_87728.cljs$lang$protocol_mask$partition0$;
var inst_87734 = (inst_87733 & (64));
var inst_87735 = inst_87728.cljs$core$ISeq$;
var inst_87736 = (cljs.core.PROTOCOL_SENTINEL === inst_87735);
var inst_87737 = (inst_87734) || (inst_87736);
var state_87775__$1 = state_87775;
if(cljs.core.truth_(inst_87737)){
var statearr_87795_87878 = state_87775__$1;
(statearr_87795_87878[(1)] = (35));

} else {
var statearr_87796_87879 = state_87775__$1;
(statearr_87796_87879[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (40))){
var inst_87750 = (state_87775[(20)]);
var inst_87749 = (state_87775[(2)]);
var inst_87750__$1 = cljs.core.get.call(null,inst_87749,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_87751 = cljs.core.get.call(null,inst_87749,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_87752 = cljs.core.not_empty.call(null,inst_87750__$1);
var state_87775__$1 = (function (){var statearr_87797 = state_87775;
(statearr_87797[(21)] = inst_87751);

(statearr_87797[(20)] = inst_87750__$1);

return statearr_87797;
})();
if(cljs.core.truth_(inst_87752)){
var statearr_87798_87880 = state_87775__$1;
(statearr_87798_87880[(1)] = (41));

} else {
var statearr_87799_87881 = state_87775__$1;
(statearr_87799_87881[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (33))){
var state_87775__$1 = state_87775;
var statearr_87800_87882 = state_87775__$1;
(statearr_87800_87882[(2)] = false);

(statearr_87800_87882[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (13))){
var inst_87648 = (state_87775[(22)]);
var inst_87652 = cljs.core.chunk_first.call(null,inst_87648);
var inst_87653 = cljs.core.chunk_rest.call(null,inst_87648);
var inst_87654 = cljs.core.count.call(null,inst_87652);
var inst_87635 = inst_87653;
var inst_87636 = inst_87652;
var inst_87637 = inst_87654;
var inst_87638 = (0);
var state_87775__$1 = (function (){var statearr_87801 = state_87775;
(statearr_87801[(7)] = inst_87637);

(statearr_87801[(8)] = inst_87638);

(statearr_87801[(9)] = inst_87635);

(statearr_87801[(10)] = inst_87636);

return statearr_87801;
})();
var statearr_87802_87883 = state_87775__$1;
(statearr_87802_87883[(2)] = null);

(statearr_87802_87883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (22))){
var inst_87688 = (state_87775[(19)]);
var inst_87692 = (state_87775[(23)]);
var inst_87696 = (state_87775[(24)]);
var inst_87691 = (state_87775[(25)]);
var inst_87691__$1 = (state_87775[(2)]);
var inst_87692__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_87691__$1);
var inst_87693 = (function (){var all_files = inst_87688;
var res_SINGLEQUOTE_ = inst_87691__$1;
var res = inst_87692__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_87688,inst_87692,inst_87696,inst_87691,inst_87691__$1,inst_87692__$1,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__87370_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__87370_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_87688,inst_87692,inst_87696,inst_87691,inst_87691__$1,inst_87692__$1,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_87694 = cljs.core.filter.call(null,inst_87693,inst_87691__$1);
var inst_87695 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_87696__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_87695);
var inst_87697 = cljs.core.not_empty.call(null,inst_87696__$1);
var state_87775__$1 = (function (){var statearr_87803 = state_87775;
(statearr_87803[(26)] = inst_87694);

(statearr_87803[(23)] = inst_87692__$1);

(statearr_87803[(24)] = inst_87696__$1);

(statearr_87803[(25)] = inst_87691__$1);

return statearr_87803;
})();
if(cljs.core.truth_(inst_87697)){
var statearr_87804_87884 = state_87775__$1;
(statearr_87804_87884[(1)] = (23));

} else {
var statearr_87805_87885 = state_87775__$1;
(statearr_87805_87885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (36))){
var state_87775__$1 = state_87775;
var statearr_87806_87886 = state_87775__$1;
(statearr_87806_87886[(2)] = false);

(statearr_87806_87886[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (41))){
var inst_87750 = (state_87775[(20)]);
var inst_87754 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_87755 = cljs.core.map.call(null,inst_87754,inst_87750);
var inst_87756 = cljs.core.pr_str.call(null,inst_87755);
var inst_87757 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_87756)].join('');
var inst_87758 = figwheel.client.utils.log.call(null,inst_87757);
var state_87775__$1 = state_87775;
var statearr_87807_87887 = state_87775__$1;
(statearr_87807_87887[(2)] = inst_87758);

(statearr_87807_87887[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (43))){
var inst_87751 = (state_87775[(21)]);
var inst_87761 = (state_87775[(2)]);
var inst_87762 = cljs.core.not_empty.call(null,inst_87751);
var state_87775__$1 = (function (){var statearr_87808 = state_87775;
(statearr_87808[(27)] = inst_87761);

return statearr_87808;
})();
if(cljs.core.truth_(inst_87762)){
var statearr_87809_87888 = state_87775__$1;
(statearr_87809_87888[(1)] = (44));

} else {
var statearr_87810_87889 = state_87775__$1;
(statearr_87810_87889[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (29))){
var inst_87688 = (state_87775[(19)]);
var inst_87694 = (state_87775[(26)]);
var inst_87692 = (state_87775[(23)]);
var inst_87696 = (state_87775[(24)]);
var inst_87728 = (state_87775[(16)]);
var inst_87691 = (state_87775[(25)]);
var inst_87724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_87727 = (function (){var all_files = inst_87688;
var res_SINGLEQUOTE_ = inst_87691;
var res = inst_87692;
var files_not_loaded = inst_87694;
var dependencies_that_loaded = inst_87696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_87688,inst_87694,inst_87692,inst_87696,inst_87728,inst_87691,inst_87724,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__87726){
var map__87811 = p__87726;
var map__87811__$1 = ((((!((map__87811 == null)))?((((map__87811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87811):map__87811);
var namespace = cljs.core.get.call(null,map__87811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_87688,inst_87694,inst_87692,inst_87696,inst_87728,inst_87691,inst_87724,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_87728__$1 = cljs.core.group_by.call(null,inst_87727,inst_87694);
var inst_87730 = (inst_87728__$1 == null);
var inst_87731 = cljs.core.not.call(null,inst_87730);
var state_87775__$1 = (function (){var statearr_87813 = state_87775;
(statearr_87813[(16)] = inst_87728__$1);

(statearr_87813[(28)] = inst_87724);

return statearr_87813;
})();
if(inst_87731){
var statearr_87814_87890 = state_87775__$1;
(statearr_87814_87890[(1)] = (32));

} else {
var statearr_87815_87891 = state_87775__$1;
(statearr_87815_87891[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (44))){
var inst_87751 = (state_87775[(21)]);
var inst_87764 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_87751);
var inst_87765 = cljs.core.pr_str.call(null,inst_87764);
var inst_87766 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_87765)].join('');
var inst_87767 = figwheel.client.utils.log.call(null,inst_87766);
var state_87775__$1 = state_87775;
var statearr_87816_87892 = state_87775__$1;
(statearr_87816_87892[(2)] = inst_87767);

(statearr_87816_87892[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (6))){
var inst_87669 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
var statearr_87817_87893 = state_87775__$1;
(statearr_87817_87893[(2)] = inst_87669);

(statearr_87817_87893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (28))){
var inst_87694 = (state_87775[(26)]);
var inst_87721 = (state_87775[(2)]);
var inst_87722 = cljs.core.not_empty.call(null,inst_87694);
var state_87775__$1 = (function (){var statearr_87818 = state_87775;
(statearr_87818[(29)] = inst_87721);

return statearr_87818;
})();
if(cljs.core.truth_(inst_87722)){
var statearr_87819_87894 = state_87775__$1;
(statearr_87819_87894[(1)] = (29));

} else {
var statearr_87820_87895 = state_87775__$1;
(statearr_87820_87895[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (25))){
var inst_87692 = (state_87775[(23)]);
var inst_87708 = (state_87775[(2)]);
var inst_87709 = cljs.core.not_empty.call(null,inst_87692);
var state_87775__$1 = (function (){var statearr_87821 = state_87775;
(statearr_87821[(30)] = inst_87708);

return statearr_87821;
})();
if(cljs.core.truth_(inst_87709)){
var statearr_87822_87896 = state_87775__$1;
(statearr_87822_87896[(1)] = (26));

} else {
var statearr_87823_87897 = state_87775__$1;
(statearr_87823_87897[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (34))){
var inst_87744 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
if(cljs.core.truth_(inst_87744)){
var statearr_87824_87898 = state_87775__$1;
(statearr_87824_87898[(1)] = (38));

} else {
var statearr_87825_87899 = state_87775__$1;
(statearr_87825_87899[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (17))){
var state_87775__$1 = state_87775;
var statearr_87826_87900 = state_87775__$1;
(statearr_87826_87900[(2)] = recompile_dependents);

(statearr_87826_87900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (3))){
var state_87775__$1 = state_87775;
var statearr_87827_87901 = state_87775__$1;
(statearr_87827_87901[(2)] = null);

(statearr_87827_87901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (12))){
var inst_87665 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
var statearr_87828_87902 = state_87775__$1;
(statearr_87828_87902[(2)] = inst_87665);

(statearr_87828_87902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (2))){
var inst_87627 = (state_87775[(13)]);
var inst_87634 = cljs.core.seq.call(null,inst_87627);
var inst_87635 = inst_87634;
var inst_87636 = null;
var inst_87637 = (0);
var inst_87638 = (0);
var state_87775__$1 = (function (){var statearr_87829 = state_87775;
(statearr_87829[(7)] = inst_87637);

(statearr_87829[(8)] = inst_87638);

(statearr_87829[(9)] = inst_87635);

(statearr_87829[(10)] = inst_87636);

return statearr_87829;
})();
var statearr_87830_87903 = state_87775__$1;
(statearr_87830_87903[(2)] = null);

(statearr_87830_87903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (23))){
var inst_87688 = (state_87775[(19)]);
var inst_87694 = (state_87775[(26)]);
var inst_87692 = (state_87775[(23)]);
var inst_87696 = (state_87775[(24)]);
var inst_87691 = (state_87775[(25)]);
var inst_87699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_87701 = (function (){var all_files = inst_87688;
var res_SINGLEQUOTE_ = inst_87691;
var res = inst_87692;
var files_not_loaded = inst_87694;
var dependencies_that_loaded = inst_87696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_87688,inst_87694,inst_87692,inst_87696,inst_87691,inst_87699,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__87700){
var map__87831 = p__87700;
var map__87831__$1 = ((((!((map__87831 == null)))?((((map__87831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87831):map__87831);
var request_url = cljs.core.get.call(null,map__87831__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_87688,inst_87694,inst_87692,inst_87696,inst_87691,inst_87699,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_87702 = cljs.core.reverse.call(null,inst_87696);
var inst_87703 = cljs.core.map.call(null,inst_87701,inst_87702);
var inst_87704 = cljs.core.pr_str.call(null,inst_87703);
var inst_87705 = figwheel.client.utils.log.call(null,inst_87704);
var state_87775__$1 = (function (){var statearr_87833 = state_87775;
(statearr_87833[(31)] = inst_87699);

return statearr_87833;
})();
var statearr_87834_87904 = state_87775__$1;
(statearr_87834_87904[(2)] = inst_87705);

(statearr_87834_87904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (35))){
var state_87775__$1 = state_87775;
var statearr_87835_87905 = state_87775__$1;
(statearr_87835_87905[(2)] = true);

(statearr_87835_87905[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (19))){
var inst_87678 = (state_87775[(12)]);
var inst_87684 = figwheel.client.file_reloading.expand_files.call(null,inst_87678);
var state_87775__$1 = state_87775;
var statearr_87836_87906 = state_87775__$1;
(statearr_87836_87906[(2)] = inst_87684);

(statearr_87836_87906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (11))){
var state_87775__$1 = state_87775;
var statearr_87837_87907 = state_87775__$1;
(statearr_87837_87907[(2)] = null);

(statearr_87837_87907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (9))){
var inst_87667 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
var statearr_87838_87908 = state_87775__$1;
(statearr_87838_87908[(2)] = inst_87667);

(statearr_87838_87908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (5))){
var inst_87637 = (state_87775[(7)]);
var inst_87638 = (state_87775[(8)]);
var inst_87640 = (inst_87638 < inst_87637);
var inst_87641 = inst_87640;
var state_87775__$1 = state_87775;
if(cljs.core.truth_(inst_87641)){
var statearr_87839_87909 = state_87775__$1;
(statearr_87839_87909[(1)] = (7));

} else {
var statearr_87840_87910 = state_87775__$1;
(statearr_87840_87910[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (14))){
var inst_87648 = (state_87775[(22)]);
var inst_87657 = cljs.core.first.call(null,inst_87648);
var inst_87658 = figwheel.client.file_reloading.eval_body.call(null,inst_87657,opts);
var inst_87659 = cljs.core.next.call(null,inst_87648);
var inst_87635 = inst_87659;
var inst_87636 = null;
var inst_87637 = (0);
var inst_87638 = (0);
var state_87775__$1 = (function (){var statearr_87841 = state_87775;
(statearr_87841[(7)] = inst_87637);

(statearr_87841[(8)] = inst_87638);

(statearr_87841[(9)] = inst_87635);

(statearr_87841[(10)] = inst_87636);

(statearr_87841[(32)] = inst_87658);

return statearr_87841;
})();
var statearr_87842_87911 = state_87775__$1;
(statearr_87842_87911[(2)] = null);

(statearr_87842_87911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (45))){
var state_87775__$1 = state_87775;
var statearr_87843_87912 = state_87775__$1;
(statearr_87843_87912[(2)] = null);

(statearr_87843_87912[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (26))){
var inst_87688 = (state_87775[(19)]);
var inst_87694 = (state_87775[(26)]);
var inst_87692 = (state_87775[(23)]);
var inst_87696 = (state_87775[(24)]);
var inst_87691 = (state_87775[(25)]);
var inst_87711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_87713 = (function (){var all_files = inst_87688;
var res_SINGLEQUOTE_ = inst_87691;
var res = inst_87692;
var files_not_loaded = inst_87694;
var dependencies_that_loaded = inst_87696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_87688,inst_87694,inst_87692,inst_87696,inst_87691,inst_87711,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__87712){
var map__87844 = p__87712;
var map__87844__$1 = ((((!((map__87844 == null)))?((((map__87844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87844):map__87844);
var namespace = cljs.core.get.call(null,map__87844__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__87844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_87688,inst_87694,inst_87692,inst_87696,inst_87691,inst_87711,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_87714 = cljs.core.map.call(null,inst_87713,inst_87692);
var inst_87715 = cljs.core.pr_str.call(null,inst_87714);
var inst_87716 = figwheel.client.utils.log.call(null,inst_87715);
var inst_87717 = (function (){var all_files = inst_87688;
var res_SINGLEQUOTE_ = inst_87691;
var res = inst_87692;
var files_not_loaded = inst_87694;
var dependencies_that_loaded = inst_87696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_87688,inst_87694,inst_87692,inst_87696,inst_87691,inst_87711,inst_87713,inst_87714,inst_87715,inst_87716,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_87688,inst_87694,inst_87692,inst_87696,inst_87691,inst_87711,inst_87713,inst_87714,inst_87715,inst_87716,state_val_87776,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_87718 = setTimeout(inst_87717,(10));
var state_87775__$1 = (function (){var statearr_87846 = state_87775;
(statearr_87846[(33)] = inst_87716);

(statearr_87846[(34)] = inst_87711);

return statearr_87846;
})();
var statearr_87847_87913 = state_87775__$1;
(statearr_87847_87913[(2)] = inst_87718);

(statearr_87847_87913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (16))){
var state_87775__$1 = state_87775;
var statearr_87848_87914 = state_87775__$1;
(statearr_87848_87914[(2)] = reload_dependents);

(statearr_87848_87914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (38))){
var inst_87728 = (state_87775[(16)]);
var inst_87746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_87728);
var state_87775__$1 = state_87775;
var statearr_87849_87915 = state_87775__$1;
(statearr_87849_87915[(2)] = inst_87746);

(statearr_87849_87915[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (30))){
var state_87775__$1 = state_87775;
var statearr_87850_87916 = state_87775__$1;
(statearr_87850_87916[(2)] = null);

(statearr_87850_87916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (10))){
var inst_87648 = (state_87775[(22)]);
var inst_87650 = cljs.core.chunked_seq_QMARK_.call(null,inst_87648);
var state_87775__$1 = state_87775;
if(inst_87650){
var statearr_87851_87917 = state_87775__$1;
(statearr_87851_87917[(1)] = (13));

} else {
var statearr_87852_87918 = state_87775__$1;
(statearr_87852_87918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (18))){
var inst_87682 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
if(cljs.core.truth_(inst_87682)){
var statearr_87853_87919 = state_87775__$1;
(statearr_87853_87919[(1)] = (19));

} else {
var statearr_87854_87920 = state_87775__$1;
(statearr_87854_87920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (42))){
var state_87775__$1 = state_87775;
var statearr_87855_87921 = state_87775__$1;
(statearr_87855_87921[(2)] = null);

(statearr_87855_87921[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (37))){
var inst_87741 = (state_87775[(2)]);
var state_87775__$1 = state_87775;
var statearr_87856_87922 = state_87775__$1;
(statearr_87856_87922[(2)] = inst_87741);

(statearr_87856_87922[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87776 === (8))){
var inst_87635 = (state_87775[(9)]);
var inst_87648 = (state_87775[(22)]);
var inst_87648__$1 = cljs.core.seq.call(null,inst_87635);
var state_87775__$1 = (function (){var statearr_87857 = state_87775;
(statearr_87857[(22)] = inst_87648__$1);

return statearr_87857;
})();
if(inst_87648__$1){
var statearr_87858_87923 = state_87775__$1;
(statearr_87858_87923[(1)] = (10));

} else {
var statearr_87859_87924 = state_87775__$1;
(statearr_87859_87924[(1)] = (11));

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
});})(c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48198__auto__,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0 = (function (){
var statearr_87863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87863[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__);

(statearr_87863[(1)] = (1));

return statearr_87863;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1 = (function (state_87775){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_87775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e87864){if((e87864 instanceof Object)){
var ex__48202__auto__ = e87864;
var statearr_87865_87925 = state_87775;
(statearr_87865_87925[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87926 = state_87775;
state_87775 = G__87926;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__ = function(state_87775){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1.call(this,state_87775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48314__auto__ = (function (){var statearr_87866 = f__48313__auto__.call(null);
(statearr_87866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_87866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,map__87620,map__87620__$1,opts,before_jsload,on_jsload,reload_dependents,map__87621,map__87621__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48312__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__87929,link){
var map__87932 = p__87929;
var map__87932__$1 = ((((!((map__87932 == null)))?((((map__87932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87932):map__87932);
var file = cljs.core.get.call(null,map__87932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__87932,map__87932__$1,file){
return (function (p1__87927_SHARP_,p2__87928_SHARP_){
if(cljs.core._EQ_.call(null,p1__87927_SHARP_,p2__87928_SHARP_)){
return p1__87927_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__87932,map__87932__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__87938){
var map__87939 = p__87938;
var map__87939__$1 = ((((!((map__87939 == null)))?((((map__87939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87939):map__87939);
var match_length = cljs.core.get.call(null,map__87939__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__87939__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__87934_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__87934_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__87941_SHARP_,p2__87942_SHARP_){
return cljs.core.assoc.call(null,p1__87941_SHARP_,cljs.core.get.call(null,p2__87942_SHARP_,key),p2__87942_SHARP_);
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
var loaded_f_datas_87943 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_87943);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_87943);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__87944,p__87945){
var map__87950 = p__87944;
var map__87950__$1 = ((((!((map__87950 == null)))?((((map__87950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87950):map__87950);
var on_cssload = cljs.core.get.call(null,map__87950__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__87951 = p__87945;
var map__87951__$1 = ((((!((map__87951 == null)))?((((map__87951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87951):map__87951);
var files_msg = map__87951__$1;
var files = cljs.core.get.call(null,map__87951__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1491640823514