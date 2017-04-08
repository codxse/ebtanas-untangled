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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__105605_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__105605_SHARP_));
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
var seq__105610 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__105611 = null;
var count__105612 = (0);
var i__105613 = (0);
while(true){
if((i__105613 < count__105612)){
var n = cljs.core._nth.call(null,chunk__105611,i__105613);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__105614 = seq__105610;
var G__105615 = chunk__105611;
var G__105616 = count__105612;
var G__105617 = (i__105613 + (1));
seq__105610 = G__105614;
chunk__105611 = G__105615;
count__105612 = G__105616;
i__105613 = G__105617;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__105610);
if(temp__6753__auto__){
var seq__105610__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__105610__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__105610__$1);
var G__105618 = cljs.core.chunk_rest.call(null,seq__105610__$1);
var G__105619 = c__35466__auto__;
var G__105620 = cljs.core.count.call(null,c__35466__auto__);
var G__105621 = (0);
seq__105610 = G__105618;
chunk__105611 = G__105619;
count__105612 = G__105620;
i__105613 = G__105621;
continue;
} else {
var n = cljs.core.first.call(null,seq__105610__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__105622 = cljs.core.next.call(null,seq__105610__$1);
var G__105623 = null;
var G__105624 = (0);
var G__105625 = (0);
seq__105610 = G__105622;
chunk__105611 = G__105623;
count__105612 = G__105624;
i__105613 = G__105625;
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

var seq__105676_105687 = cljs.core.seq.call(null,deps);
var chunk__105677_105688 = null;
var count__105678_105689 = (0);
var i__105679_105690 = (0);
while(true){
if((i__105679_105690 < count__105678_105689)){
var dep_105691 = cljs.core._nth.call(null,chunk__105677_105688,i__105679_105690);
topo_sort_helper_STAR_.call(null,dep_105691,(depth + (1)),state);

var G__105692 = seq__105676_105687;
var G__105693 = chunk__105677_105688;
var G__105694 = count__105678_105689;
var G__105695 = (i__105679_105690 + (1));
seq__105676_105687 = G__105692;
chunk__105677_105688 = G__105693;
count__105678_105689 = G__105694;
i__105679_105690 = G__105695;
continue;
} else {
var temp__6753__auto___105696 = cljs.core.seq.call(null,seq__105676_105687);
if(temp__6753__auto___105696){
var seq__105676_105697__$1 = temp__6753__auto___105696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__105676_105697__$1)){
var c__35466__auto___105698 = cljs.core.chunk_first.call(null,seq__105676_105697__$1);
var G__105699 = cljs.core.chunk_rest.call(null,seq__105676_105697__$1);
var G__105700 = c__35466__auto___105698;
var G__105701 = cljs.core.count.call(null,c__35466__auto___105698);
var G__105702 = (0);
seq__105676_105687 = G__105699;
chunk__105677_105688 = G__105700;
count__105678_105689 = G__105701;
i__105679_105690 = G__105702;
continue;
} else {
var dep_105703 = cljs.core.first.call(null,seq__105676_105697__$1);
topo_sort_helper_STAR_.call(null,dep_105703,(depth + (1)),state);

var G__105704 = cljs.core.next.call(null,seq__105676_105697__$1);
var G__105705 = null;
var G__105706 = (0);
var G__105707 = (0);
seq__105676_105687 = G__105704;
chunk__105677_105688 = G__105705;
count__105678_105689 = G__105706;
i__105679_105690 = G__105707;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__105680){
var vec__105684 = p__105680;
var seq__105685 = cljs.core.seq.call(null,vec__105684);
var first__105686 = cljs.core.first.call(null,seq__105685);
var seq__105685__$1 = cljs.core.next.call(null,seq__105685);
var x = first__105686;
var xs = seq__105685__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__105684,seq__105685,first__105686,seq__105685__$1,x,xs,get_deps__$1){
return (function (p1__105626_SHARP_){
return clojure.set.difference.call(null,p1__105626_SHARP_,x);
});})(vec__105684,seq__105685,first__105686,seq__105685__$1,x,xs,get_deps__$1))
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
var seq__105720 = cljs.core.seq.call(null,provides);
var chunk__105721 = null;
var count__105722 = (0);
var i__105723 = (0);
while(true){
if((i__105723 < count__105722)){
var prov = cljs.core._nth.call(null,chunk__105721,i__105723);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__105724_105732 = cljs.core.seq.call(null,requires);
var chunk__105725_105733 = null;
var count__105726_105734 = (0);
var i__105727_105735 = (0);
while(true){
if((i__105727_105735 < count__105726_105734)){
var req_105736 = cljs.core._nth.call(null,chunk__105725_105733,i__105727_105735);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_105736,prov);

var G__105737 = seq__105724_105732;
var G__105738 = chunk__105725_105733;
var G__105739 = count__105726_105734;
var G__105740 = (i__105727_105735 + (1));
seq__105724_105732 = G__105737;
chunk__105725_105733 = G__105738;
count__105726_105734 = G__105739;
i__105727_105735 = G__105740;
continue;
} else {
var temp__6753__auto___105741 = cljs.core.seq.call(null,seq__105724_105732);
if(temp__6753__auto___105741){
var seq__105724_105742__$1 = temp__6753__auto___105741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__105724_105742__$1)){
var c__35466__auto___105743 = cljs.core.chunk_first.call(null,seq__105724_105742__$1);
var G__105744 = cljs.core.chunk_rest.call(null,seq__105724_105742__$1);
var G__105745 = c__35466__auto___105743;
var G__105746 = cljs.core.count.call(null,c__35466__auto___105743);
var G__105747 = (0);
seq__105724_105732 = G__105744;
chunk__105725_105733 = G__105745;
count__105726_105734 = G__105746;
i__105727_105735 = G__105747;
continue;
} else {
var req_105748 = cljs.core.first.call(null,seq__105724_105742__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_105748,prov);

var G__105749 = cljs.core.next.call(null,seq__105724_105742__$1);
var G__105750 = null;
var G__105751 = (0);
var G__105752 = (0);
seq__105724_105732 = G__105749;
chunk__105725_105733 = G__105750;
count__105726_105734 = G__105751;
i__105727_105735 = G__105752;
continue;
}
} else {
}
}
break;
}

var G__105753 = seq__105720;
var G__105754 = chunk__105721;
var G__105755 = count__105722;
var G__105756 = (i__105723 + (1));
seq__105720 = G__105753;
chunk__105721 = G__105754;
count__105722 = G__105755;
i__105723 = G__105756;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__105720);
if(temp__6753__auto__){
var seq__105720__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__105720__$1)){
var c__35466__auto__ = cljs.core.chunk_first.call(null,seq__105720__$1);
var G__105757 = cljs.core.chunk_rest.call(null,seq__105720__$1);
var G__105758 = c__35466__auto__;
var G__105759 = cljs.core.count.call(null,c__35466__auto__);
var G__105760 = (0);
seq__105720 = G__105757;
chunk__105721 = G__105758;
count__105722 = G__105759;
i__105723 = G__105760;
continue;
} else {
var prov = cljs.core.first.call(null,seq__105720__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__105728_105761 = cljs.core.seq.call(null,requires);
var chunk__105729_105762 = null;
var count__105730_105763 = (0);
var i__105731_105764 = (0);
while(true){
if((i__105731_105764 < count__105730_105763)){
var req_105765 = cljs.core._nth.call(null,chunk__105729_105762,i__105731_105764);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_105765,prov);

var G__105766 = seq__105728_105761;
var G__105767 = chunk__105729_105762;
var G__105768 = count__105730_105763;
var G__105769 = (i__105731_105764 + (1));
seq__105728_105761 = G__105766;
chunk__105729_105762 = G__105767;
count__105730_105763 = G__105768;
i__105731_105764 = G__105769;
continue;
} else {
var temp__6753__auto___105770__$1 = cljs.core.seq.call(null,seq__105728_105761);
if(temp__6753__auto___105770__$1){
var seq__105728_105771__$1 = temp__6753__auto___105770__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__105728_105771__$1)){
var c__35466__auto___105772 = cljs.core.chunk_first.call(null,seq__105728_105771__$1);
var G__105773 = cljs.core.chunk_rest.call(null,seq__105728_105771__$1);
var G__105774 = c__35466__auto___105772;
var G__105775 = cljs.core.count.call(null,c__35466__auto___105772);
var G__105776 = (0);
seq__105728_105761 = G__105773;
chunk__105729_105762 = G__105774;
count__105730_105763 = G__105775;
i__105731_105764 = G__105776;
continue;
} else {
var req_105777 = cljs.core.first.call(null,seq__105728_105771__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_105777,prov);

var G__105778 = cljs.core.next.call(null,seq__105728_105771__$1);
var G__105779 = null;
var G__105780 = (0);
var G__105781 = (0);
seq__105728_105761 = G__105778;
chunk__105729_105762 = G__105779;
count__105730_105763 = G__105780;
i__105731_105764 = G__105781;
continue;
}
} else {
}
}
break;
}

var G__105782 = cljs.core.next.call(null,seq__105720__$1);
var G__105783 = null;
var G__105784 = (0);
var G__105785 = (0);
seq__105720 = G__105782;
chunk__105721 = G__105783;
count__105722 = G__105784;
i__105723 = G__105785;
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
var seq__105790_105794 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__105791_105795 = null;
var count__105792_105796 = (0);
var i__105793_105797 = (0);
while(true){
if((i__105793_105797 < count__105792_105796)){
var ns_105798 = cljs.core._nth.call(null,chunk__105791_105795,i__105793_105797);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_105798);

var G__105799 = seq__105790_105794;
var G__105800 = chunk__105791_105795;
var G__105801 = count__105792_105796;
var G__105802 = (i__105793_105797 + (1));
seq__105790_105794 = G__105799;
chunk__105791_105795 = G__105800;
count__105792_105796 = G__105801;
i__105793_105797 = G__105802;
continue;
} else {
var temp__6753__auto___105803 = cljs.core.seq.call(null,seq__105790_105794);
if(temp__6753__auto___105803){
var seq__105790_105804__$1 = temp__6753__auto___105803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__105790_105804__$1)){
var c__35466__auto___105805 = cljs.core.chunk_first.call(null,seq__105790_105804__$1);
var G__105806 = cljs.core.chunk_rest.call(null,seq__105790_105804__$1);
var G__105807 = c__35466__auto___105805;
var G__105808 = cljs.core.count.call(null,c__35466__auto___105805);
var G__105809 = (0);
seq__105790_105794 = G__105806;
chunk__105791_105795 = G__105807;
count__105792_105796 = G__105808;
i__105793_105797 = G__105809;
continue;
} else {
var ns_105810 = cljs.core.first.call(null,seq__105790_105804__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_105810);

var G__105811 = cljs.core.next.call(null,seq__105790_105804__$1);
var G__105812 = null;
var G__105813 = (0);
var G__105814 = (0);
seq__105790_105794 = G__105811;
chunk__105791_105795 = G__105812;
count__105792_105796 = G__105813;
i__105793_105797 = G__105814;
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
var G__105815__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__105815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__105816__i = 0, G__105816__a = new Array(arguments.length -  0);
while (G__105816__i < G__105816__a.length) {G__105816__a[G__105816__i] = arguments[G__105816__i + 0]; ++G__105816__i;}
  args = new cljs.core.IndexedSeq(G__105816__a,0);
} 
return G__105815__delegate.call(this,args);};
G__105815.cljs$lang$maxFixedArity = 0;
G__105815.cljs$lang$applyTo = (function (arglist__105817){
var args = cljs.core.seq(arglist__105817);
return G__105815__delegate(args);
});
G__105815.cljs$core$IFn$_invoke$arity$variadic = G__105815__delegate;
return G__105815;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__105818 = cljs.core._EQ_;
var expr__105819 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__105818.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__105819))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__105818,expr__105819){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__105818,expr__105819))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__105818,expr__105819){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e105821){if((e105821 instanceof Error)){
var e = e105821;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e105821;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__105818,expr__105819))
} else {
if(cljs.core.truth_(pred__105818.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__105819))){
return ((function (pred__105818,expr__105819){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__105818,expr__105819){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__105818,expr__105819))
);

return deferred.addErrback(((function (deferred,pred__105818,expr__105819){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__105818,expr__105819))
);
});
;})(pred__105818,expr__105819))
} else {
if(cljs.core.truth_(pred__105818.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__105819))){
return ((function (pred__105818,expr__105819){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e105822){if((e105822 instanceof Error)){
var e = e105822;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e105822;

}
}})());
});
;})(pred__105818,expr__105819))
} else {
return ((function (pred__105818,expr__105819){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__105818,expr__105819))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__105823,callback){
var map__105826 = p__105823;
var map__105826__$1 = ((((!((map__105826 == null)))?((((map__105826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105826):map__105826);
var file_msg = map__105826__$1;
var request_url = cljs.core.get.call(null,map__105826__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__105826,map__105826__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__105826,map__105826__$1,file_msg,request_url))
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
return (function (state_105850){
var state_val_105851 = (state_105850[(1)]);
if((state_val_105851 === (7))){
var inst_105846 = (state_105850[(2)]);
var state_105850__$1 = state_105850;
var statearr_105852_105872 = state_105850__$1;
(statearr_105852_105872[(2)] = inst_105846);

(statearr_105852_105872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105851 === (1))){
var state_105850__$1 = state_105850;
var statearr_105853_105873 = state_105850__$1;
(statearr_105853_105873[(2)] = null);

(statearr_105853_105873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105851 === (4))){
var inst_105830 = (state_105850[(7)]);
var inst_105830__$1 = (state_105850[(2)]);
var state_105850__$1 = (function (){var statearr_105854 = state_105850;
(statearr_105854[(7)] = inst_105830__$1);

return statearr_105854;
})();
if(cljs.core.truth_(inst_105830__$1)){
var statearr_105855_105874 = state_105850__$1;
(statearr_105855_105874[(1)] = (5));

} else {
var statearr_105856_105875 = state_105850__$1;
(statearr_105856_105875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105851 === (6))){
var state_105850__$1 = state_105850;
var statearr_105857_105876 = state_105850__$1;
(statearr_105857_105876[(2)] = null);

(statearr_105857_105876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105851 === (3))){
var inst_105848 = (state_105850[(2)]);
var state_105850__$1 = state_105850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105850__$1,inst_105848);
} else {
if((state_val_105851 === (2))){
var state_105850__$1 = state_105850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105850__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_105851 === (11))){
var inst_105842 = (state_105850[(2)]);
var state_105850__$1 = (function (){var statearr_105858 = state_105850;
(statearr_105858[(8)] = inst_105842);

return statearr_105858;
})();
var statearr_105859_105877 = state_105850__$1;
(statearr_105859_105877[(2)] = null);

(statearr_105859_105877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105851 === (9))){
var inst_105836 = (state_105850[(9)]);
var inst_105834 = (state_105850[(10)]);
var inst_105838 = inst_105836.call(null,inst_105834);
var state_105850__$1 = state_105850;
var statearr_105860_105878 = state_105850__$1;
(statearr_105860_105878[(2)] = inst_105838);

(statearr_105860_105878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105851 === (5))){
var inst_105830 = (state_105850[(7)]);
var inst_105832 = figwheel.client.file_reloading.blocking_load.call(null,inst_105830);
var state_105850__$1 = state_105850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105850__$1,(8),inst_105832);
} else {
if((state_val_105851 === (10))){
var inst_105834 = (state_105850[(10)]);
var inst_105840 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_105834);
var state_105850__$1 = state_105850;
var statearr_105861_105879 = state_105850__$1;
(statearr_105861_105879[(2)] = inst_105840);

(statearr_105861_105879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105851 === (8))){
var inst_105836 = (state_105850[(9)]);
var inst_105830 = (state_105850[(7)]);
var inst_105834 = (state_105850[(2)]);
var inst_105835 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_105836__$1 = cljs.core.get.call(null,inst_105835,inst_105830);
var state_105850__$1 = (function (){var statearr_105862 = state_105850;
(statearr_105862[(9)] = inst_105836__$1);

(statearr_105862[(10)] = inst_105834);

return statearr_105862;
})();
if(cljs.core.truth_(inst_105836__$1)){
var statearr_105863_105880 = state_105850__$1;
(statearr_105863_105880[(1)] = (9));

} else {
var statearr_105864_105881 = state_105850__$1;
(statearr_105864_105881[(1)] = (10));

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
var statearr_105868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_105868[(0)] = figwheel$client$file_reloading$state_machine__48199__auto__);

(statearr_105868[(1)] = (1));

return statearr_105868;
});
var figwheel$client$file_reloading$state_machine__48199__auto____1 = (function (state_105850){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_105850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e105869){if((e105869 instanceof Object)){
var ex__48202__auto__ = e105869;
var statearr_105870_105882 = state_105850;
(statearr_105870_105882[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e105869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__105883 = state_105850;
state_105850 = G__105883;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48199__auto__ = function(state_105850){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48199__auto____1.call(this,state_105850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48199__auto____0;
figwheel$client$file_reloading$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48199__auto____1;
return figwheel$client$file_reloading$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_105871 = f__48313__auto__.call(null);
(statearr_105871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_105871;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__105884,callback){
var map__105887 = p__105884;
var map__105887__$1 = ((((!((map__105887 == null)))?((((map__105887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105887):map__105887);
var file_msg = map__105887__$1;
var namespace = cljs.core.get.call(null,map__105887__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__105887,map__105887__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__105887,map__105887__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__105889){
var map__105892 = p__105889;
var map__105892__$1 = ((((!((map__105892 == null)))?((((map__105892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105892):map__105892);
var file_msg = map__105892__$1;
var namespace = cljs.core.get.call(null,map__105892__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__105894){
var map__105897 = p__105894;
var map__105897__$1 = ((((!((map__105897 == null)))?((((map__105897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105897):map__105897);
var file_msg = map__105897__$1;
var namespace = cljs.core.get.call(null,map__105897__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__105899,callback){
var map__105902 = p__105899;
var map__105902__$1 = ((((!((map__105902 == null)))?((((map__105902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__105902):map__105902);
var file_msg = map__105902__$1;
var request_url = cljs.core.get.call(null,map__105902__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__105902__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__48312__auto___106006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___106006,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___106006,out){
return (function (state_105988){
var state_val_105989 = (state_105988[(1)]);
if((state_val_105989 === (1))){
var inst_105962 = cljs.core.seq.call(null,files);
var inst_105963 = cljs.core.first.call(null,inst_105962);
var inst_105964 = cljs.core.next.call(null,inst_105962);
var inst_105965 = files;
var state_105988__$1 = (function (){var statearr_105990 = state_105988;
(statearr_105990[(7)] = inst_105963);

(statearr_105990[(8)] = inst_105964);

(statearr_105990[(9)] = inst_105965);

return statearr_105990;
})();
var statearr_105991_106007 = state_105988__$1;
(statearr_105991_106007[(2)] = null);

(statearr_105991_106007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105989 === (2))){
var inst_105965 = (state_105988[(9)]);
var inst_105971 = (state_105988[(10)]);
var inst_105970 = cljs.core.seq.call(null,inst_105965);
var inst_105971__$1 = cljs.core.first.call(null,inst_105970);
var inst_105972 = cljs.core.next.call(null,inst_105970);
var inst_105973 = (inst_105971__$1 == null);
var inst_105974 = cljs.core.not.call(null,inst_105973);
var state_105988__$1 = (function (){var statearr_105992 = state_105988;
(statearr_105992[(10)] = inst_105971__$1);

(statearr_105992[(11)] = inst_105972);

return statearr_105992;
})();
if(inst_105974){
var statearr_105993_106008 = state_105988__$1;
(statearr_105993_106008[(1)] = (4));

} else {
var statearr_105994_106009 = state_105988__$1;
(statearr_105994_106009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105989 === (3))){
var inst_105986 = (state_105988[(2)]);
var state_105988__$1 = state_105988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105988__$1,inst_105986);
} else {
if((state_val_105989 === (4))){
var inst_105971 = (state_105988[(10)]);
var inst_105976 = figwheel.client.file_reloading.reload_js_file.call(null,inst_105971);
var state_105988__$1 = state_105988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105988__$1,(7),inst_105976);
} else {
if((state_val_105989 === (5))){
var inst_105982 = cljs.core.async.close_BANG_.call(null,out);
var state_105988__$1 = state_105988;
var statearr_105995_106010 = state_105988__$1;
(statearr_105995_106010[(2)] = inst_105982);

(statearr_105995_106010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105989 === (6))){
var inst_105984 = (state_105988[(2)]);
var state_105988__$1 = state_105988;
var statearr_105996_106011 = state_105988__$1;
(statearr_105996_106011[(2)] = inst_105984);

(statearr_105996_106011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105989 === (7))){
var inst_105972 = (state_105988[(11)]);
var inst_105978 = (state_105988[(2)]);
var inst_105979 = cljs.core.async.put_BANG_.call(null,out,inst_105978);
var inst_105965 = inst_105972;
var state_105988__$1 = (function (){var statearr_105997 = state_105988;
(statearr_105997[(9)] = inst_105965);

(statearr_105997[(12)] = inst_105979);

return statearr_105997;
})();
var statearr_105998_106012 = state_105988__$1;
(statearr_105998_106012[(2)] = null);

(statearr_105998_106012[(1)] = (2));


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
});})(c__48312__auto___106006,out))
;
return ((function (switch__48198__auto__,c__48312__auto___106006,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0 = (function (){
var statearr_106002 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106002[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__);

(statearr_106002[(1)] = (1));

return statearr_106002;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1 = (function (state_105988){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_105988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e106003){if((e106003 instanceof Object)){
var ex__48202__auto__ = e106003;
var statearr_106004_106013 = state_105988;
(statearr_106004_106013[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106014 = state_105988;
state_105988 = G__106014;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__ = function(state_105988){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1.call(this,state_105988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___106006,out))
})();
var state__48314__auto__ = (function (){var statearr_106005 = f__48313__auto__.call(null);
(statearr_106005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___106006);

return statearr_106005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___106006,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__106015,opts){
var map__106019 = p__106015;
var map__106019__$1 = ((((!((map__106019 == null)))?((((map__106019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106019):map__106019);
var eval_body = cljs.core.get.call(null,map__106019__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__106019__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e106021){var e = e106021;
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
return (function (p1__106022_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__106022_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__106031){
var vec__106032 = p__106031;
var k = cljs.core.nth.call(null,vec__106032,(0),null);
var v = cljs.core.nth.call(null,vec__106032,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__106035){
var vec__106036 = p__106035;
var k = cljs.core.nth.call(null,vec__106036,(0),null);
var v = cljs.core.nth.call(null,vec__106036,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__106042,p__106043){
var map__106291 = p__106042;
var map__106291__$1 = ((((!((map__106291 == null)))?((((map__106291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106291):map__106291);
var opts = map__106291__$1;
var before_jsload = cljs.core.get.call(null,map__106291__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__106291__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__106291__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__106292 = p__106043;
var map__106292__$1 = ((((!((map__106292 == null)))?((((map__106292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106292):map__106292);
var msg = map__106292__$1;
var files = cljs.core.get.call(null,map__106292__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__106292__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__106292__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_106446){
var state_val_106447 = (state_106446[(1)]);
if((state_val_106447 === (7))){
var inst_106306 = (state_106446[(7)]);
var inst_106307 = (state_106446[(8)]);
var inst_106308 = (state_106446[(9)]);
var inst_106309 = (state_106446[(10)]);
var inst_106314 = cljs.core._nth.call(null,inst_106307,inst_106309);
var inst_106315 = figwheel.client.file_reloading.eval_body.call(null,inst_106314,opts);
var inst_106316 = (inst_106309 + (1));
var tmp106448 = inst_106306;
var tmp106449 = inst_106307;
var tmp106450 = inst_106308;
var inst_106306__$1 = tmp106448;
var inst_106307__$1 = tmp106449;
var inst_106308__$1 = tmp106450;
var inst_106309__$1 = inst_106316;
var state_106446__$1 = (function (){var statearr_106451 = state_106446;
(statearr_106451[(7)] = inst_106306__$1);

(statearr_106451[(8)] = inst_106307__$1);

(statearr_106451[(11)] = inst_106315);

(statearr_106451[(9)] = inst_106308__$1);

(statearr_106451[(10)] = inst_106309__$1);

return statearr_106451;
})();
var statearr_106452_106538 = state_106446__$1;
(statearr_106452_106538[(2)] = null);

(statearr_106452_106538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (20))){
var inst_106349 = (state_106446[(12)]);
var inst_106357 = figwheel.client.file_reloading.sort_files.call(null,inst_106349);
var state_106446__$1 = state_106446;
var statearr_106453_106539 = state_106446__$1;
(statearr_106453_106539[(2)] = inst_106357);

(statearr_106453_106539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (27))){
var state_106446__$1 = state_106446;
var statearr_106454_106540 = state_106446__$1;
(statearr_106454_106540[(2)] = null);

(statearr_106454_106540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (1))){
var inst_106298 = (state_106446[(13)]);
var inst_106295 = before_jsload.call(null,files);
var inst_106296 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_106297 = (function (){return ((function (inst_106298,inst_106295,inst_106296,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__106039_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__106039_SHARP_);
});
;})(inst_106298,inst_106295,inst_106296,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_106298__$1 = cljs.core.filter.call(null,inst_106297,files);
var inst_106299 = cljs.core.not_empty.call(null,inst_106298__$1);
var state_106446__$1 = (function (){var statearr_106455 = state_106446;
(statearr_106455[(14)] = inst_106295);

(statearr_106455[(15)] = inst_106296);

(statearr_106455[(13)] = inst_106298__$1);

return statearr_106455;
})();
if(cljs.core.truth_(inst_106299)){
var statearr_106456_106541 = state_106446__$1;
(statearr_106456_106541[(1)] = (2));

} else {
var statearr_106457_106542 = state_106446__$1;
(statearr_106457_106542[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (24))){
var state_106446__$1 = state_106446;
var statearr_106458_106543 = state_106446__$1;
(statearr_106458_106543[(2)] = null);

(statearr_106458_106543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (39))){
var inst_106399 = (state_106446[(16)]);
var state_106446__$1 = state_106446;
var statearr_106459_106544 = state_106446__$1;
(statearr_106459_106544[(2)] = inst_106399);

(statearr_106459_106544[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (46))){
var inst_106441 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
var statearr_106460_106545 = state_106446__$1;
(statearr_106460_106545[(2)] = inst_106441);

(statearr_106460_106545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (4))){
var inst_106343 = (state_106446[(2)]);
var inst_106344 = cljs.core.List.EMPTY;
var inst_106345 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_106344);
var inst_106346 = (function (){return ((function (inst_106343,inst_106344,inst_106345,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__106040_SHARP_){
var and__34543__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__106040_SHARP_);
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__106040_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__106040_SHARP_)));
} else {
return and__34543__auto__;
}
});
;})(inst_106343,inst_106344,inst_106345,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_106347 = cljs.core.filter.call(null,inst_106346,files);
var inst_106348 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_106349 = cljs.core.concat.call(null,inst_106347,inst_106348);
var state_106446__$1 = (function (){var statearr_106461 = state_106446;
(statearr_106461[(17)] = inst_106343);

(statearr_106461[(18)] = inst_106345);

(statearr_106461[(12)] = inst_106349);

return statearr_106461;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_106462_106546 = state_106446__$1;
(statearr_106462_106546[(1)] = (16));

} else {
var statearr_106463_106547 = state_106446__$1;
(statearr_106463_106547[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (15))){
var inst_106333 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
var statearr_106464_106548 = state_106446__$1;
(statearr_106464_106548[(2)] = inst_106333);

(statearr_106464_106548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (21))){
var inst_106359 = (state_106446[(19)]);
var inst_106359__$1 = (state_106446[(2)]);
var inst_106360 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_106359__$1);
var state_106446__$1 = (function (){var statearr_106465 = state_106446;
(statearr_106465[(19)] = inst_106359__$1);

return statearr_106465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_106446__$1,(22),inst_106360);
} else {
if((state_val_106447 === (31))){
var inst_106444 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_106446__$1,inst_106444);
} else {
if((state_val_106447 === (32))){
var inst_106399 = (state_106446[(16)]);
var inst_106404 = inst_106399.cljs$lang$protocol_mask$partition0$;
var inst_106405 = (inst_106404 & (64));
var inst_106406 = inst_106399.cljs$core$ISeq$;
var inst_106407 = (cljs.core.PROTOCOL_SENTINEL === inst_106406);
var inst_106408 = (inst_106405) || (inst_106407);
var state_106446__$1 = state_106446;
if(cljs.core.truth_(inst_106408)){
var statearr_106466_106549 = state_106446__$1;
(statearr_106466_106549[(1)] = (35));

} else {
var statearr_106467_106550 = state_106446__$1;
(statearr_106467_106550[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (40))){
var inst_106421 = (state_106446[(20)]);
var inst_106420 = (state_106446[(2)]);
var inst_106421__$1 = cljs.core.get.call(null,inst_106420,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_106422 = cljs.core.get.call(null,inst_106420,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_106423 = cljs.core.not_empty.call(null,inst_106421__$1);
var state_106446__$1 = (function (){var statearr_106468 = state_106446;
(statearr_106468[(20)] = inst_106421__$1);

(statearr_106468[(21)] = inst_106422);

return statearr_106468;
})();
if(cljs.core.truth_(inst_106423)){
var statearr_106469_106551 = state_106446__$1;
(statearr_106469_106551[(1)] = (41));

} else {
var statearr_106470_106552 = state_106446__$1;
(statearr_106470_106552[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (33))){
var state_106446__$1 = state_106446;
var statearr_106471_106553 = state_106446__$1;
(statearr_106471_106553[(2)] = false);

(statearr_106471_106553[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (13))){
var inst_106319 = (state_106446[(22)]);
var inst_106323 = cljs.core.chunk_first.call(null,inst_106319);
var inst_106324 = cljs.core.chunk_rest.call(null,inst_106319);
var inst_106325 = cljs.core.count.call(null,inst_106323);
var inst_106306 = inst_106324;
var inst_106307 = inst_106323;
var inst_106308 = inst_106325;
var inst_106309 = (0);
var state_106446__$1 = (function (){var statearr_106472 = state_106446;
(statearr_106472[(7)] = inst_106306);

(statearr_106472[(8)] = inst_106307);

(statearr_106472[(9)] = inst_106308);

(statearr_106472[(10)] = inst_106309);

return statearr_106472;
})();
var statearr_106473_106554 = state_106446__$1;
(statearr_106473_106554[(2)] = null);

(statearr_106473_106554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (22))){
var inst_106367 = (state_106446[(23)]);
var inst_106359 = (state_106446[(19)]);
var inst_106362 = (state_106446[(24)]);
var inst_106363 = (state_106446[(25)]);
var inst_106362__$1 = (state_106446[(2)]);
var inst_106363__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_106362__$1);
var inst_106364 = (function (){var all_files = inst_106359;
var res_SINGLEQUOTE_ = inst_106362__$1;
var res = inst_106363__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_106367,inst_106359,inst_106362,inst_106363,inst_106362__$1,inst_106363__$1,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__106041_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__106041_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_106367,inst_106359,inst_106362,inst_106363,inst_106362__$1,inst_106363__$1,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_106365 = cljs.core.filter.call(null,inst_106364,inst_106362__$1);
var inst_106366 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_106367__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_106366);
var inst_106368 = cljs.core.not_empty.call(null,inst_106367__$1);
var state_106446__$1 = (function (){var statearr_106474 = state_106446;
(statearr_106474[(26)] = inst_106365);

(statearr_106474[(23)] = inst_106367__$1);

(statearr_106474[(24)] = inst_106362__$1);

(statearr_106474[(25)] = inst_106363__$1);

return statearr_106474;
})();
if(cljs.core.truth_(inst_106368)){
var statearr_106475_106555 = state_106446__$1;
(statearr_106475_106555[(1)] = (23));

} else {
var statearr_106476_106556 = state_106446__$1;
(statearr_106476_106556[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (36))){
var state_106446__$1 = state_106446;
var statearr_106477_106557 = state_106446__$1;
(statearr_106477_106557[(2)] = false);

(statearr_106477_106557[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (41))){
var inst_106421 = (state_106446[(20)]);
var inst_106425 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_106426 = cljs.core.map.call(null,inst_106425,inst_106421);
var inst_106427 = cljs.core.pr_str.call(null,inst_106426);
var inst_106428 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_106427)].join('');
var inst_106429 = figwheel.client.utils.log.call(null,inst_106428);
var state_106446__$1 = state_106446;
var statearr_106478_106558 = state_106446__$1;
(statearr_106478_106558[(2)] = inst_106429);

(statearr_106478_106558[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (43))){
var inst_106422 = (state_106446[(21)]);
var inst_106432 = (state_106446[(2)]);
var inst_106433 = cljs.core.not_empty.call(null,inst_106422);
var state_106446__$1 = (function (){var statearr_106479 = state_106446;
(statearr_106479[(27)] = inst_106432);

return statearr_106479;
})();
if(cljs.core.truth_(inst_106433)){
var statearr_106480_106559 = state_106446__$1;
(statearr_106480_106559[(1)] = (44));

} else {
var statearr_106481_106560 = state_106446__$1;
(statearr_106481_106560[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (29))){
var inst_106365 = (state_106446[(26)]);
var inst_106367 = (state_106446[(23)]);
var inst_106359 = (state_106446[(19)]);
var inst_106362 = (state_106446[(24)]);
var inst_106363 = (state_106446[(25)]);
var inst_106399 = (state_106446[(16)]);
var inst_106395 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_106398 = (function (){var all_files = inst_106359;
var res_SINGLEQUOTE_ = inst_106362;
var res = inst_106363;
var files_not_loaded = inst_106365;
var dependencies_that_loaded = inst_106367;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_106365,inst_106367,inst_106359,inst_106362,inst_106363,inst_106399,inst_106395,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__106397){
var map__106482 = p__106397;
var map__106482__$1 = ((((!((map__106482 == null)))?((((map__106482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106482):map__106482);
var namespace = cljs.core.get.call(null,map__106482__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_106365,inst_106367,inst_106359,inst_106362,inst_106363,inst_106399,inst_106395,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_106399__$1 = cljs.core.group_by.call(null,inst_106398,inst_106365);
var inst_106401 = (inst_106399__$1 == null);
var inst_106402 = cljs.core.not.call(null,inst_106401);
var state_106446__$1 = (function (){var statearr_106484 = state_106446;
(statearr_106484[(28)] = inst_106395);

(statearr_106484[(16)] = inst_106399__$1);

return statearr_106484;
})();
if(inst_106402){
var statearr_106485_106561 = state_106446__$1;
(statearr_106485_106561[(1)] = (32));

} else {
var statearr_106486_106562 = state_106446__$1;
(statearr_106486_106562[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (44))){
var inst_106422 = (state_106446[(21)]);
var inst_106435 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_106422);
var inst_106436 = cljs.core.pr_str.call(null,inst_106435);
var inst_106437 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_106436)].join('');
var inst_106438 = figwheel.client.utils.log.call(null,inst_106437);
var state_106446__$1 = state_106446;
var statearr_106487_106563 = state_106446__$1;
(statearr_106487_106563[(2)] = inst_106438);

(statearr_106487_106563[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (6))){
var inst_106340 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
var statearr_106488_106564 = state_106446__$1;
(statearr_106488_106564[(2)] = inst_106340);

(statearr_106488_106564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (28))){
var inst_106365 = (state_106446[(26)]);
var inst_106392 = (state_106446[(2)]);
var inst_106393 = cljs.core.not_empty.call(null,inst_106365);
var state_106446__$1 = (function (){var statearr_106489 = state_106446;
(statearr_106489[(29)] = inst_106392);

return statearr_106489;
})();
if(cljs.core.truth_(inst_106393)){
var statearr_106490_106565 = state_106446__$1;
(statearr_106490_106565[(1)] = (29));

} else {
var statearr_106491_106566 = state_106446__$1;
(statearr_106491_106566[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (25))){
var inst_106363 = (state_106446[(25)]);
var inst_106379 = (state_106446[(2)]);
var inst_106380 = cljs.core.not_empty.call(null,inst_106363);
var state_106446__$1 = (function (){var statearr_106492 = state_106446;
(statearr_106492[(30)] = inst_106379);

return statearr_106492;
})();
if(cljs.core.truth_(inst_106380)){
var statearr_106493_106567 = state_106446__$1;
(statearr_106493_106567[(1)] = (26));

} else {
var statearr_106494_106568 = state_106446__$1;
(statearr_106494_106568[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (34))){
var inst_106415 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
if(cljs.core.truth_(inst_106415)){
var statearr_106495_106569 = state_106446__$1;
(statearr_106495_106569[(1)] = (38));

} else {
var statearr_106496_106570 = state_106446__$1;
(statearr_106496_106570[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (17))){
var state_106446__$1 = state_106446;
var statearr_106497_106571 = state_106446__$1;
(statearr_106497_106571[(2)] = recompile_dependents);

(statearr_106497_106571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (3))){
var state_106446__$1 = state_106446;
var statearr_106498_106572 = state_106446__$1;
(statearr_106498_106572[(2)] = null);

(statearr_106498_106572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (12))){
var inst_106336 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
var statearr_106499_106573 = state_106446__$1;
(statearr_106499_106573[(2)] = inst_106336);

(statearr_106499_106573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (2))){
var inst_106298 = (state_106446[(13)]);
var inst_106305 = cljs.core.seq.call(null,inst_106298);
var inst_106306 = inst_106305;
var inst_106307 = null;
var inst_106308 = (0);
var inst_106309 = (0);
var state_106446__$1 = (function (){var statearr_106500 = state_106446;
(statearr_106500[(7)] = inst_106306);

(statearr_106500[(8)] = inst_106307);

(statearr_106500[(9)] = inst_106308);

(statearr_106500[(10)] = inst_106309);

return statearr_106500;
})();
var statearr_106501_106574 = state_106446__$1;
(statearr_106501_106574[(2)] = null);

(statearr_106501_106574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (23))){
var inst_106365 = (state_106446[(26)]);
var inst_106367 = (state_106446[(23)]);
var inst_106359 = (state_106446[(19)]);
var inst_106362 = (state_106446[(24)]);
var inst_106363 = (state_106446[(25)]);
var inst_106370 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_106372 = (function (){var all_files = inst_106359;
var res_SINGLEQUOTE_ = inst_106362;
var res = inst_106363;
var files_not_loaded = inst_106365;
var dependencies_that_loaded = inst_106367;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_106365,inst_106367,inst_106359,inst_106362,inst_106363,inst_106370,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__106371){
var map__106502 = p__106371;
var map__106502__$1 = ((((!((map__106502 == null)))?((((map__106502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106502):map__106502);
var request_url = cljs.core.get.call(null,map__106502__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_106365,inst_106367,inst_106359,inst_106362,inst_106363,inst_106370,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_106373 = cljs.core.reverse.call(null,inst_106367);
var inst_106374 = cljs.core.map.call(null,inst_106372,inst_106373);
var inst_106375 = cljs.core.pr_str.call(null,inst_106374);
var inst_106376 = figwheel.client.utils.log.call(null,inst_106375);
var state_106446__$1 = (function (){var statearr_106504 = state_106446;
(statearr_106504[(31)] = inst_106370);

return statearr_106504;
})();
var statearr_106505_106575 = state_106446__$1;
(statearr_106505_106575[(2)] = inst_106376);

(statearr_106505_106575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (35))){
var state_106446__$1 = state_106446;
var statearr_106506_106576 = state_106446__$1;
(statearr_106506_106576[(2)] = true);

(statearr_106506_106576[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (19))){
var inst_106349 = (state_106446[(12)]);
var inst_106355 = figwheel.client.file_reloading.expand_files.call(null,inst_106349);
var state_106446__$1 = state_106446;
var statearr_106507_106577 = state_106446__$1;
(statearr_106507_106577[(2)] = inst_106355);

(statearr_106507_106577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (11))){
var state_106446__$1 = state_106446;
var statearr_106508_106578 = state_106446__$1;
(statearr_106508_106578[(2)] = null);

(statearr_106508_106578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (9))){
var inst_106338 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
var statearr_106509_106579 = state_106446__$1;
(statearr_106509_106579[(2)] = inst_106338);

(statearr_106509_106579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (5))){
var inst_106308 = (state_106446[(9)]);
var inst_106309 = (state_106446[(10)]);
var inst_106311 = (inst_106309 < inst_106308);
var inst_106312 = inst_106311;
var state_106446__$1 = state_106446;
if(cljs.core.truth_(inst_106312)){
var statearr_106510_106580 = state_106446__$1;
(statearr_106510_106580[(1)] = (7));

} else {
var statearr_106511_106581 = state_106446__$1;
(statearr_106511_106581[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (14))){
var inst_106319 = (state_106446[(22)]);
var inst_106328 = cljs.core.first.call(null,inst_106319);
var inst_106329 = figwheel.client.file_reloading.eval_body.call(null,inst_106328,opts);
var inst_106330 = cljs.core.next.call(null,inst_106319);
var inst_106306 = inst_106330;
var inst_106307 = null;
var inst_106308 = (0);
var inst_106309 = (0);
var state_106446__$1 = (function (){var statearr_106512 = state_106446;
(statearr_106512[(32)] = inst_106329);

(statearr_106512[(7)] = inst_106306);

(statearr_106512[(8)] = inst_106307);

(statearr_106512[(9)] = inst_106308);

(statearr_106512[(10)] = inst_106309);

return statearr_106512;
})();
var statearr_106513_106582 = state_106446__$1;
(statearr_106513_106582[(2)] = null);

(statearr_106513_106582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (45))){
var state_106446__$1 = state_106446;
var statearr_106514_106583 = state_106446__$1;
(statearr_106514_106583[(2)] = null);

(statearr_106514_106583[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (26))){
var inst_106365 = (state_106446[(26)]);
var inst_106367 = (state_106446[(23)]);
var inst_106359 = (state_106446[(19)]);
var inst_106362 = (state_106446[(24)]);
var inst_106363 = (state_106446[(25)]);
var inst_106382 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_106384 = (function (){var all_files = inst_106359;
var res_SINGLEQUOTE_ = inst_106362;
var res = inst_106363;
var files_not_loaded = inst_106365;
var dependencies_that_loaded = inst_106367;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_106365,inst_106367,inst_106359,inst_106362,inst_106363,inst_106382,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__106383){
var map__106515 = p__106383;
var map__106515__$1 = ((((!((map__106515 == null)))?((((map__106515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106515):map__106515);
var namespace = cljs.core.get.call(null,map__106515__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__106515__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_106365,inst_106367,inst_106359,inst_106362,inst_106363,inst_106382,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_106385 = cljs.core.map.call(null,inst_106384,inst_106363);
var inst_106386 = cljs.core.pr_str.call(null,inst_106385);
var inst_106387 = figwheel.client.utils.log.call(null,inst_106386);
var inst_106388 = (function (){var all_files = inst_106359;
var res_SINGLEQUOTE_ = inst_106362;
var res = inst_106363;
var files_not_loaded = inst_106365;
var dependencies_that_loaded = inst_106367;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_106365,inst_106367,inst_106359,inst_106362,inst_106363,inst_106382,inst_106384,inst_106385,inst_106386,inst_106387,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_106365,inst_106367,inst_106359,inst_106362,inst_106363,inst_106382,inst_106384,inst_106385,inst_106386,inst_106387,state_val_106447,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_106389 = setTimeout(inst_106388,(10));
var state_106446__$1 = (function (){var statearr_106517 = state_106446;
(statearr_106517[(33)] = inst_106387);

(statearr_106517[(34)] = inst_106382);

return statearr_106517;
})();
var statearr_106518_106584 = state_106446__$1;
(statearr_106518_106584[(2)] = inst_106389);

(statearr_106518_106584[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (16))){
var state_106446__$1 = state_106446;
var statearr_106519_106585 = state_106446__$1;
(statearr_106519_106585[(2)] = reload_dependents);

(statearr_106519_106585[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (38))){
var inst_106399 = (state_106446[(16)]);
var inst_106417 = cljs.core.apply.call(null,cljs.core.hash_map,inst_106399);
var state_106446__$1 = state_106446;
var statearr_106520_106586 = state_106446__$1;
(statearr_106520_106586[(2)] = inst_106417);

(statearr_106520_106586[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (30))){
var state_106446__$1 = state_106446;
var statearr_106521_106587 = state_106446__$1;
(statearr_106521_106587[(2)] = null);

(statearr_106521_106587[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (10))){
var inst_106319 = (state_106446[(22)]);
var inst_106321 = cljs.core.chunked_seq_QMARK_.call(null,inst_106319);
var state_106446__$1 = state_106446;
if(inst_106321){
var statearr_106522_106588 = state_106446__$1;
(statearr_106522_106588[(1)] = (13));

} else {
var statearr_106523_106589 = state_106446__$1;
(statearr_106523_106589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (18))){
var inst_106353 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
if(cljs.core.truth_(inst_106353)){
var statearr_106524_106590 = state_106446__$1;
(statearr_106524_106590[(1)] = (19));

} else {
var statearr_106525_106591 = state_106446__$1;
(statearr_106525_106591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (42))){
var state_106446__$1 = state_106446;
var statearr_106526_106592 = state_106446__$1;
(statearr_106526_106592[(2)] = null);

(statearr_106526_106592[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (37))){
var inst_106412 = (state_106446[(2)]);
var state_106446__$1 = state_106446;
var statearr_106527_106593 = state_106446__$1;
(statearr_106527_106593[(2)] = inst_106412);

(statearr_106527_106593[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106447 === (8))){
var inst_106306 = (state_106446[(7)]);
var inst_106319 = (state_106446[(22)]);
var inst_106319__$1 = cljs.core.seq.call(null,inst_106306);
var state_106446__$1 = (function (){var statearr_106528 = state_106446;
(statearr_106528[(22)] = inst_106319__$1);

return statearr_106528;
})();
if(inst_106319__$1){
var statearr_106529_106594 = state_106446__$1;
(statearr_106529_106594[(1)] = (10));

} else {
var statearr_106530_106595 = state_106446__$1;
(statearr_106530_106595[(1)] = (11));

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
});})(c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48198__auto__,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0 = (function (){
var statearr_106534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106534[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__);

(statearr_106534[(1)] = (1));

return statearr_106534;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1 = (function (state_106446){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_106446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e106535){if((e106535 instanceof Object)){
var ex__48202__auto__ = e106535;
var statearr_106536_106596 = state_106446;
(statearr_106536_106596[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_106446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e106535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106597 = state_106446;
state_106446 = G__106597;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__ = function(state_106446){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1.call(this,state_106446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48314__auto__ = (function (){var statearr_106537 = f__48313__auto__.call(null);
(statearr_106537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_106537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,map__106291,map__106291__$1,opts,before_jsload,on_jsload,reload_dependents,map__106292,map__106292__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48312__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__106600,link){
var map__106603 = p__106600;
var map__106603__$1 = ((((!((map__106603 == null)))?((((map__106603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106603):map__106603);
var file = cljs.core.get.call(null,map__106603__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__106603,map__106603__$1,file){
return (function (p1__106598_SHARP_,p2__106599_SHARP_){
if(cljs.core._EQ_.call(null,p1__106598_SHARP_,p2__106599_SHARP_)){
return p1__106598_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__106603,map__106603__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__106609){
var map__106610 = p__106609;
var map__106610__$1 = ((((!((map__106610 == null)))?((((map__106610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106610):map__106610);
var match_length = cljs.core.get.call(null,map__106610__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__106610__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__106605_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__106605_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__106612_SHARP_,p2__106613_SHARP_){
return cljs.core.assoc.call(null,p1__106612_SHARP_,cljs.core.get.call(null,p2__106613_SHARP_,key),p2__106613_SHARP_);
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
var loaded_f_datas_106614 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_106614);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_106614);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__106615,p__106616){
var map__106621 = p__106615;
var map__106621__$1 = ((((!((map__106621 == null)))?((((map__106621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106621):map__106621);
var on_cssload = cljs.core.get.call(null,map__106621__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__106622 = p__106616;
var map__106622__$1 = ((((!((map__106622 == null)))?((((map__106622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__106622):map__106622);
var files_msg = map__106622__$1;
var files = cljs.core.get.call(null,map__106622__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1491640860135