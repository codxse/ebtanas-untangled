// Compiled by ClojureScript 1.9.494 {}
goog.provide('garden.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k104643,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__104645 = (((k104643 instanceof cljs.core.Keyword))?k104643.fqn:null);
switch (G__104645) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k104643,else__35233__auto__);

}
});


garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#garden.types.CSSUnit{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});


garden.types.CSSUnit.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__104642){
var self__ = this;
var G__104642__$1 = this;
return (new cljs.core.RecordIter((0),G__104642__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});


garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__104642){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__104646 = cljs.core.keyword_identical_QMARK_;
var expr__104647 = k__35238__auto__;
if(cljs.core.truth_(pred__104646.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__104647))){
return (new garden.types.CSSUnit(G__104642,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__104646.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__104647))){
return (new garden.types.CSSUnit(self__.unit,G__104642,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__104642),null));
}
}
});


garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});


garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__104642){
var self__ = this;
var this__35229__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__104642,self__.__extmap,self__.__hash));
});


garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__104644){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__104644),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__104644),null,cljs.core.dissoc.call(null,G__104644,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k104651,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__104653 = (((k104651 instanceof cljs.core.Keyword))?k104651.fqn:null);
switch (G__104653) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k104651,else__35233__auto__);

}
});


garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#garden.types.CSSFunction{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});


garden.types.CSSFunction.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__104650){
var self__ = this;
var G__104650__$1 = this;
return (new cljs.core.RecordIter((0),G__104650__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});


garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__104650){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__104654 = cljs.core.keyword_identical_QMARK_;
var expr__104655 = k__35238__auto__;
if(cljs.core.truth_(pred__104654.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__104655))){
return (new garden.types.CSSFunction(G__104650,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__104654.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__104655))){
return (new garden.types.CSSFunction(self__.function$,G__104650,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__104650),null));
}
}
});


garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});


garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__104650){
var self__ = this;
var this__35229__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__104650,self__.__extmap,self__.__hash));
});


garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__104652){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__104652),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__104652),null,cljs.core.dissoc.call(null,G__104652,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k104659,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__104661 = (((k104659 instanceof cljs.core.Keyword))?k104659.fqn:null);
switch (G__104661) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k104659,else__35233__auto__);

}
});


garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#garden.types.CSSAtRule{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});


garden.types.CSSAtRule.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__104658){
var self__ = this;
var G__104658__$1 = this;
return (new cljs.core.RecordIter((0),G__104658__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});


garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__104658){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__104662 = cljs.core.keyword_identical_QMARK_;
var expr__104663 = k__35238__auto__;
if(cljs.core.truth_(pred__104662.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__104663))){
return (new garden.types.CSSAtRule(G__104658,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__104662.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__104663))){
return (new garden.types.CSSAtRule(self__.identifier,G__104658,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__104658),null));
}
}
});


garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});


garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__104658){
var self__ = this;
var this__35229__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__104658,self__.__extmap,self__.__hash));
});


garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__104660){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__104660),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__104660),null,cljs.core.dissoc.call(null,G__104660,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


//# sourceMappingURL=types.js.map?rel=1491640853988