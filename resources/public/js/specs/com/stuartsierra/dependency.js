// Compiled by ClojureScript 1.9.494 {}
goog.provide('com.stuartsierra.dependency');
goog.require('cljs.core');
goog.require('clojure.set');

/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraph = function(){};

/**
 * Returns the set of immediate dependencies of node.
 */
com.stuartsierra.dependency.immediate_dependencies = (function com$stuartsierra$dependency$immediate_dependencies(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.immediate_dependencies[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.immediate_dependencies["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependencies",graph);
}
}
}
});

/**
 * Returns the set of immediate dependents of node.
 */
com.stuartsierra.dependency.immediate_dependents = (function com$stuartsierra$dependency$immediate_dependents(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.immediate_dependents[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.immediate_dependents["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependents",graph);
}
}
}
});

/**
 * Returns the set of all things which node depends on, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependencies = (function com$stuartsierra$dependency$transitive_dependencies(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.transitive_dependencies[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies",graph);
}
}
}
});

/**
 * Returns the set of all things which any node in node-set depends
 *  on, directly or transitively.
 */
com.stuartsierra.dependency.transitive_dependencies_set = (function com$stuartsierra$dependency$transitive_dependencies_set(graph,node_set){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2(graph,node_set);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.transitive_dependencies_set[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node_set);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.transitive_dependencies_set["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node_set);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies-set",graph);
}
}
}
});

/**
 * Returns the set of all things which depend upon node, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependents = (function com$stuartsierra$dependency$transitive_dependents(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.transitive_dependents[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.transitive_dependents["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents",graph);
}
}
}
});

/**
 * Returns the set of all things which depend upon any node in
 *  node-set, directly or transitively.
 */
com.stuartsierra.dependency.transitive_dependents_set = (function com$stuartsierra$dependency$transitive_dependents_set(graph,node_set){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2(graph,node_set);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.transitive_dependents_set[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node_set);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.transitive_dependents_set["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node_set);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents-set",graph);
}
}
}
});

/**
 * Returns the set of all nodes in graph.
 */
com.stuartsierra.dependency.nodes = (function com$stuartsierra$dependency$nodes(graph){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1(graph);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.nodes[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.nodes["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.nodes",graph);
}
}
}
});


/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraphUpdate = function(){};

/**
 * Returns a new graph with a dependency from node to dep ("node depends
 *  on dep"). Forbids circular dependencies.
 */
com.stuartsierra.dependency.depend = (function com$stuartsierra$dependency$depend(graph,node,dep){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.depend[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node,dep);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.depend["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node,dep);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.depend",graph);
}
}
}
});

/**
 * Returns a new graph with the dependency from node to dep removed.
 */
com.stuartsierra.dependency.remove_edge = (function com$stuartsierra$dependency$remove_edge(graph,node,dep){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.remove_edge[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node,dep);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.remove_edge["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node,dep);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-edge",graph);
}
}
}
});

/**
 * Returns a new dependency graph with all references to node removed.
 */
com.stuartsierra.dependency.remove_all = (function com$stuartsierra$dependency$remove_all(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.remove_all[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.remove_all["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-all",graph);
}
}
}
});

/**
 * Removes the node from the dependency graph without removing it as a
 *  dependency of other nodes. That is, removes all outgoing edges from
 *  node.
 */
com.stuartsierra.dependency.remove_node = (function com$stuartsierra$dependency$remove_node(graph,node){
if((!((graph == null))) && (!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 == null)))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else {
var x__35273__auto__ = (((graph == null))?null:graph);
var m__35274__auto__ = (com.stuartsierra.dependency.remove_node[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,graph,node);
} else {
var m__35274__auto____$1 = (com.stuartsierra.dependency.remove_node["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-node",graph);
}
}
}
});

com.stuartsierra.dependency.remove_from_map = (function com$stuartsierra$dependency$remove_from_map(amap,x){
return cljs.core.reduce.call(null,(function (m,p__63025){
var vec__63026 = p__63025;
var k = cljs.core.nth.call(null,vec__63026,(0),null);
var vs = cljs.core.nth.call(null,vec__63026,(1),null);
return cljs.core.assoc.call(null,m,k,cljs.core.disj.call(null,vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,amap,x));
});
/**
 * Recursively expands the set of dependency relationships starting
 *   at (get neighbors x), for each x in node-set
 */
com.stuartsierra.dependency.transitive = (function com$stuartsierra$dependency$transitive(neighbors,node_set){
var unexpanded = cljs.core.mapcat.call(null,neighbors,node_set);
var expanded = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__6751__auto__ = cljs.core.seq.call(null,unexpanded);
if(temp__6751__auto__){
var vec__63032 = temp__6751__auto__;
var seq__63033 = cljs.core.seq.call(null,vec__63032);
var first__63034 = cljs.core.first.call(null,seq__63033);
var seq__63033__$1 = cljs.core.next.call(null,seq__63033);
var node = first__63034;
var more = seq__63033__$1;
if(cljs.core.contains_QMARK_.call(null,expanded,node)){
var G__63035 = more;
var G__63036 = expanded;
unexpanded = G__63035;
expanded = G__63036;
continue;
} else {
var G__63037 = cljs.core.concat.call(null,more,neighbors.call(null,node));
var G__63038 = cljs.core.conj.call(null,expanded,node);
unexpanded = G__63037;
expanded = G__63038;
continue;
}
} else {
return expanded;
}
break;
}
});
com.stuartsierra.dependency.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.stuartsierra.dependency.DependencyGraph}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {com.stuartsierra.dependency.DependencyGraphUpdate}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.stuartsierra.dependency.MapDependencyGraph = (function (dependencies,dependents,__meta,__extmap,__hash){
this.dependencies = dependencies;
this.dependents = dependents;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k63040,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__63042 = (((k63040 instanceof cljs.core.Keyword))?k63040.fqn:null);
switch (G__63042) {
case "dependencies":
return self__.dependencies;

break;
case "dependents":
return self__.dependents;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63040,else__35233__auto__);

}
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#com.stuartsierra.dependency.MapDependencyGraph{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents],null))], null),self__.__extmap));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63039){
var self__ = this;
var G__63039__$1 = this;
return (new cljs.core.RecordIter((0),G__63039__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,self__.__extmap,self__.__hash));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
var self__ = this;
var this__35225__auto____$1 = this;
var h__34997__auto__ = self__.__hash;
if(!((h__34997__auto__ == null))){
return h__34997__auto__;
} else {
var h__34997__auto____$1 = cljs.core.hash_imap.call(null,this__35225__auto____$1);
self__.__hash = h__34997__auto____$1;

return h__34997__auto____$1;
}
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
var self__ = this;
var this__35226__auto____$1 = this;
if(cljs.core.truth_((function (){var and__34543__auto__ = other__35227__auto__;
if(cljs.core.truth_(and__34543__auto__)){
return ((this__35226__auto____$1.constructor === other__35227__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__35226__auto____$1,other__35227__auto__));
} else {
return and__34543__auto__;
}
})())){
return true;
} else {
return false;
}
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dependents","dependents",136812837),null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__63039){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__63043 = cljs.core.keyword_identical_QMARK_;
var expr__63044 = k__35238__auto__;
if(cljs.core.truth_(pred__63043.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),expr__63044))){
return (new com.stuartsierra.dependency.MapDependencyGraph(G__63039,self__.dependents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63043.call(null,new cljs.core.Keyword(null,"dependents","dependents",136812837),expr__63044))){
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,G__63039,self__.__meta,self__.__extmap,null));
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__63039),null));
}
}
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents],null))], null),self__.__extmap));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$ = cljs.core.PROTOCOL_SENTINEL;


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.call(null,self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.call(null,self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependencies,cljs.core.PersistentHashSet.createAsIfByAssoc([node], true));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependencies,node_set);
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependents,cljs.core.PersistentHashSet.createAsIfByAssoc([node], true));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive.call(null,self__.dependents,node_set);
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 = (function (graph){
var self__ = this;
var graph__$1 = this;
return clojure.set.union.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependencies)),cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependents)));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__63039){
var self__ = this;
var this__35229__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,G__63039,self__.__extmap,self__.__hash));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$ = cljs.core.PROTOCOL_SENTINEL;


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__34555__auto__ = cljs.core._EQ_.call(null,node,dep);
if(or__34555__auto__){
return or__34555__auto__;
} else {
return com.stuartsierra.dependency.depends_QMARK_.call(null,graph__$1,dep,node);
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Circular dependency between "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,dep))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.dependency","circular-dependency","com.stuartsierra.dependency/circular-dependency",1926538656),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"dependency","dependency",1300131203),dep], null));
} else {
}

return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),com.stuartsierra.dependency.set_conj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),com.stuartsierra.dependency.set_conj,node),null,null,null));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node),null,null,null));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(com.stuartsierra.dependency.remove_from_map.call(null,self__.dependencies,node),com.stuartsierra.dependency.remove_from_map.call(null,self__.dependents,node),null,null,null));
});


com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.dissoc.call(null,self__.dependencies,node),self__.dependents,null,null,null));
});

com.stuartsierra.dependency.MapDependencyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dependencies","dependencies",-1546371164,null),new cljs.core.Symbol(null,"dependents","dependents",1777344364,null)], null);
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$type = true;

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.stuartsierra.dependency/MapDependencyGraph");
});

com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"com.stuartsierra.dependency/MapDependencyGraph");
});

com.stuartsierra.dependency.__GT_MapDependencyGraph = (function com$stuartsierra$dependency$__GT_MapDependencyGraph(dependencies,dependents){
return (new com.stuartsierra.dependency.MapDependencyGraph(dependencies,dependents,null,null,null));
});

com.stuartsierra.dependency.map__GT_MapDependencyGraph = (function com$stuartsierra$dependency$map__GT_MapDependencyGraph(G__63041){
return (new com.stuartsierra.dependency.MapDependencyGraph(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(G__63041),new cljs.core.Keyword(null,"dependents","dependents",136812837).cljs$core$IFn$_invoke$arity$1(G__63041),null,cljs.core.dissoc.call(null,G__63041,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837)),null));
});

/**
 * Returns a new, empty, dependency graph.
 */
com.stuartsierra.dependency.graph = (function com$stuartsierra$dependency$graph(){
return com.stuartsierra.dependency.__GT_MapDependencyGraph.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * True if x is directly or transitively dependent on y.
 */
com.stuartsierra.dependency.depends_QMARK_ = (function com$stuartsierra$dependency$depends_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_.call(null,com.stuartsierra.dependency.transitive_dependencies.call(null,graph,x),y);
});
/**
 * True if y is a dependent of x.
 */
com.stuartsierra.dependency.dependent_QMARK_ = (function com$stuartsierra$dependency$dependent_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_.call(null,com.stuartsierra.dependency.transitive_dependents.call(null,graph,x),y);
});
/**
 * Returns a topologically-sorted list of nodes in graph.
 */
com.stuartsierra.dependency.topo_sort = (function com$stuartsierra$dependency$topo_sort(graph){
var sorted = cljs.core.List.EMPTY;
var g = graph;
var todo = cljs.core.set.call(null,cljs.core.filter.call(null,((function (sorted,g){
return (function (p1__63047_SHARP_){
return cljs.core.empty_QMARK_.call(null,com.stuartsierra.dependency.immediate_dependents.call(null,graph,p1__63047_SHARP_));
});})(sorted,g))
,com.stuartsierra.dependency.nodes.call(null,graph)));
while(true){
if(cljs.core.empty_QMARK_.call(null,todo)){
return sorted;
} else {
var vec__63054 = cljs.core.seq.call(null,todo);
var seq__63055 = cljs.core.seq.call(null,vec__63054);
var first__63056 = cljs.core.first.call(null,seq__63055);
var seq__63055__$1 = cljs.core.next.call(null,seq__63055);
var node = first__63056;
var more = seq__63055__$1;
var deps = com.stuartsierra.dependency.immediate_dependencies.call(null,g,node);
var vec__63057 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,deps__$1)){
var d = cljs.core.first.call(null,deps__$1);
var g_SINGLEQUOTE_ = com.stuartsierra.dependency.remove_edge.call(null,g__$1,node,d);
if(cljs.core.empty_QMARK_.call(null,com.stuartsierra.dependency.immediate_dependents.call(null,g_SINGLEQUOTE_,d))){
var G__63060 = cljs.core.rest.call(null,deps__$1);
var G__63061 = g_SINGLEQUOTE_;
var G__63062 = cljs.core.conj.call(null,add,d);
deps__$1 = G__63060;
g__$1 = G__63061;
add = G__63062;
continue;
} else {
var G__63063 = cljs.core.rest.call(null,deps__$1);
var G__63064 = g_SINGLEQUOTE_;
var G__63065 = add;
deps__$1 = G__63063;
g__$1 = G__63064;
add = G__63065;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.call(null,vec__63057,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63057,(1),null);
var G__63066 = cljs.core.cons.call(null,node,sorted);
var G__63067 = com.stuartsierra.dependency.remove_node.call(null,g_SINGLEQUOTE_,node);
var G__63068 = clojure.set.union.call(null,cljs.core.set.call(null,more),cljs.core.set.call(null,add));
sorted = G__63066;
g = G__63067;
todo = G__63068;
continue;
}
break;
}
});
com.stuartsierra.dependency.max_number = Number.MAX_VALUE;
/**
 * Returns a comparator fn which produces a topological sort based on
 *   the dependencies in graph. Nodes not present in the graph will sort
 *   after nodes in the graph.
 */
com.stuartsierra.dependency.topo_comparator = (function com$stuartsierra$dependency$topo_comparator(graph){
var pos = cljs.core.zipmap.call(null,com.stuartsierra.dependency.topo_sort.call(null,graph),cljs.core.range.call(null));
return ((function (pos){
return (function (a,b){
return cljs.core.compare.call(null,cljs.core.get.call(null,pos,a,com.stuartsierra.dependency.max_number),cljs.core.get.call(null,pos,b,com.stuartsierra.dependency.max_number));
});
;})(pos))
});

//# sourceMappingURL=dependency.js.map?rel=1491640778314