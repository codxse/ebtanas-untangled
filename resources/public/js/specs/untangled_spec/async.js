// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.async');
goog.require('cljs.core');
goog.require('cljs.pprint');

/**
 * @interface
 */
untangled_spec.async.IAsyncQueue = function(){};

/**
 * Returns the current time on the simulated clock, in ms
 */
untangled_spec.async.current_time = (function untangled_spec$async$current_time(this$){
if((!((this$ == null))) && (!((this$.untangled_spec$async$IAsyncQueue$current_time$arity$1 == null)))){
return this$.untangled_spec$async$IAsyncQueue$current_time$arity$1(this$);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (untangled_spec.async.current_time[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$);
} else {
var m__35274__auto____$1 = (untangled_spec.async.current_time["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IAsyncQueue.current-time",this$);
}
}
}
});

/**
 * Returns the first event on the queue
 */
untangled_spec.async.peek_event = (function untangled_spec$async$peek_event(this$){
if((!((this$ == null))) && (!((this$.untangled_spec$async$IAsyncQueue$peek_event$arity$1 == null)))){
return this$.untangled_spec$async$IAsyncQueue$peek_event$arity$1(this$);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (untangled_spec.async.peek_event[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$);
} else {
var m__35274__auto____$1 = (untangled_spec.async.peek_event["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IAsyncQueue.peek-event",this$);
}
}
}
});

/**
 * Move the clock forward by the specified number of ms, triggering events (even those added by interstitial triggers) in the correct order up to (and including) events that coincide with the final time.
 */
untangled_spec.async.advance_clock = (function untangled_spec$async$advance_clock(this$,ms){
if((!((this$ == null))) && (!((this$.untangled_spec$async$IAsyncQueue$advance_clock$arity$2 == null)))){
return this$.untangled_spec$async$IAsyncQueue$advance_clock$arity$2(this$,ms);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (untangled_spec.async.advance_clock[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$,ms);
} else {
var m__35274__auto____$1 = (untangled_spec.async.advance_clock["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$,ms);
} else {
throw cljs.core.missing_protocol.call(null,"IAsyncQueue.advance-clock",this$);
}
}
}
});

/**
 * Schedule an event which should occur at some time in the future (offset from now).
 */
untangled_spec.async.schedule_event = (function untangled_spec$async$schedule_event(this$,ms_from_now,fn_to_call){
if((!((this$ == null))) && (!((this$.untangled_spec$async$IAsyncQueue$schedule_event$arity$3 == null)))){
return this$.untangled_spec$async$IAsyncQueue$schedule_event$arity$3(this$,ms_from_now,fn_to_call);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (untangled_spec.async.schedule_event[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$,ms_from_now,fn_to_call);
} else {
var m__35274__auto____$1 = (untangled_spec.async.schedule_event["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$,ms_from_now,fn_to_call);
} else {
throw cljs.core.missing_protocol.call(null,"IAsyncQueue.schedule-event",this$);
}
}
}
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
untangled_spec.async.Event = (function (abs_time,fn_to_call,__meta,__extmap,__hash){
this.abs_time = abs_time;
this.fn_to_call = fn_to_call;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled_spec.async.Event.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


untangled_spec.async.Event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k62628,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__62630 = (((k62628 instanceof cljs.core.Keyword))?k62628.fqn:null);
switch (G__62630) {
case "abs-time":
return self__.abs_time;

break;
case "fn-to-call":
return self__.fn_to_call;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62628,else__35233__auto__);

}
});


untangled_spec.async.Event.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#untangled-spec.async.Event{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abs-time","abs-time",59488074),self__.abs_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn-to-call","fn-to-call",-596918373),self__.fn_to_call],null))], null),self__.__extmap));
});


untangled_spec.async.Event.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.async.Event.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62627){
var self__ = this;
var G__62627__$1 = this;
return (new cljs.core.RecordIter((0),G__62627__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abs-time","abs-time",59488074),new cljs.core.Keyword(null,"fn-to-call","fn-to-call",-596918373)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled_spec.async.Event.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


untangled_spec.async.Event.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new untangled_spec.async.Event(self__.abs_time,self__.fn_to_call,self__.__meta,self__.__extmap,self__.__hash));
});


untangled_spec.async.Event.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


untangled_spec.async.Event.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


untangled_spec.async.Event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


untangled_spec.async.Event.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"abs-time","abs-time",59488074),null,new cljs.core.Keyword(null,"fn-to-call","fn-to-call",-596918373),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new untangled_spec.async.Event(self__.abs_time,self__.fn_to_call,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


untangled_spec.async.Event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__62627){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__62631 = cljs.core.keyword_identical_QMARK_;
var expr__62632 = k__35238__auto__;
if(cljs.core.truth_(pred__62631.call(null,new cljs.core.Keyword(null,"abs-time","abs-time",59488074),expr__62632))){
return (new untangled_spec.async.Event(G__62627,self__.fn_to_call,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62631.call(null,new cljs.core.Keyword(null,"fn-to-call","fn-to-call",-596918373),expr__62632))){
return (new untangled_spec.async.Event(self__.abs_time,G__62627,self__.__meta,self__.__extmap,null));
} else {
return (new untangled_spec.async.Event(self__.abs_time,self__.fn_to_call,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__62627),null));
}
}
});


untangled_spec.async.Event.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"abs-time","abs-time",59488074),self__.abs_time],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn-to-call","fn-to-call",-596918373),self__.fn_to_call],null))], null),self__.__extmap));
});


untangled_spec.async.Event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__62627){
var self__ = this;
var this__35229__auto____$1 = this;
return (new untangled_spec.async.Event(self__.abs_time,self__.fn_to_call,G__62627,self__.__extmap,self__.__hash));
});


untangled_spec.async.Event.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

untangled_spec.async.Event.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"abs-time","abs-time",1700019601,null),new cljs.core.Symbol(null,"fn-to-call","fn-to-call",1043613154,null)], null);
});

untangled_spec.async.Event.cljs$lang$type = true;

untangled_spec.async.Event.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled-spec.async/Event");
});

untangled_spec.async.Event.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"untangled-spec.async/Event");
});

untangled_spec.async.__GT_Event = (function untangled_spec$async$__GT_Event(abs_time,fn_to_call){
return (new untangled_spec.async.Event(abs_time,fn_to_call,null,null,null));
});

untangled_spec.async.map__GT_Event = (function untangled_spec$async$map__GT_Event(G__62629){
return (new untangled_spec.async.Event(new cljs.core.Keyword(null,"abs-time","abs-time",59488074).cljs$core$IFn$_invoke$arity$1(G__62629),new cljs.core.Keyword(null,"fn-to-call","fn-to-call",-596918373).cljs$core$IFn$_invoke$arity$1(G__62629),null,cljs.core.dissoc.call(null,G__62629,new cljs.core.Keyword(null,"abs-time","abs-time",59488074),new cljs.core.Keyword(null,"fn-to-call","fn-to-call",-596918373)),null));
});

/**
 * Triggers the first event in the queue (runs it), and removes it from the queue.
 */
untangled_spec.async.process_first_event_BANG_ = (function untangled_spec$async$process_first_event_BANG_(queue){
var temp__6751__auto__ = untangled_spec.async.peek_event.call(null,queue);
if(cljs.core.truth_(temp__6751__auto__)){
var evt = temp__6751__auto__;
new cljs.core.Keyword(null,"fn-to-call","fn-to-call",-596918373).cljs$core$IFn$_invoke$arity$1(evt).call(null);

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"schedule","schedule",349275266).cljs$core$IFn$_invoke$arity$1(queue),((function (evt,temp__6751__auto__){
return (function (p1__62635_SHARP_){
return cljs.core.dissoc.call(null,p1__62635_SHARP_,new cljs.core.Keyword(null,"abs-time","abs-time",59488074).cljs$core$IFn$_invoke$arity$1(evt));
});})(evt,temp__6751__auto__))
);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {untangled_spec.async.IAsyncQueue}
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
untangled_spec.async.AsyncQueue = (function (schedule,now,__meta,__extmap,__hash){
this.schedule = schedule;
this.now = now;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

untangled_spec.async.AsyncQueue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__35230__auto__,k__35231__auto__){
var self__ = this;
var this__35230__auto____$1 = this;
return this__35230__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__35231__auto__,null);
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__35232__auto__,k62638,else__35233__auto__){
var self__ = this;
var this__35232__auto____$1 = this;
var G__62640 = (((k62638 instanceof cljs.core.Keyword))?k62638.fqn:null);
switch (G__62640) {
case "schedule":
return self__.schedule;

break;
case "now":
return self__.now;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62638,else__35233__auto__);

}
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__35244__auto__,writer__35245__auto__,opts__35246__auto__){
var self__ = this;
var this__35244__auto____$1 = this;
var pr_pair__35247__auto__ = ((function (this__35244__auto____$1){
return (function (keyval__35248__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,cljs.core.pr_writer,""," ","",opts__35246__auto__,keyval__35248__auto__);
});})(this__35244__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__35245__auto__,pr_pair__35247__auto__,"#untangled-spec.async.AsyncQueue{",", ","}",opts__35246__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schedule","schedule",349275266),self__.schedule],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"now","now",-1650525531),self__.now],null))], null),self__.__extmap));
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.async.AsyncQueue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62637){
var self__ = this;
var G__62637__$1 = this;
return (new cljs.core.RecordIter((0),G__62637__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schedule","schedule",349275266),new cljs.core.Keyword(null,"now","now",-1650525531)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__35228__auto__){
var self__ = this;
var this__35228__auto____$1 = this;
return self__.__meta;
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__35224__auto__){
var self__ = this;
var this__35224__auto____$1 = this;
return (new untangled_spec.async.AsyncQueue(self__.schedule,self__.now,self__.__meta,self__.__extmap,self__.__hash));
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__35234__auto__){
var self__ = this;
var this__35234__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__35225__auto__){
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


untangled_spec.async.AsyncQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__35226__auto__,other__35227__auto__){
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


untangled_spec.async.AsyncQueue.prototype.untangled_spec$async$IAsyncQueue$ = cljs.core.PROTOCOL_SENTINEL;


untangled_spec.async.AsyncQueue.prototype.untangled_spec$async$IAsyncQueue$current_time$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(this$__$1));
});


untangled_spec.async.AsyncQueue.prototype.untangled_spec$async$IAsyncQueue$peek_event$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"schedule","schedule",349275266).cljs$core$IFn$_invoke$arity$1(this$__$1))));
});


untangled_spec.async.AsyncQueue.prototype.untangled_spec$async$IAsyncQueue$advance_clock$arity$2 = (function (this$,ms){
var self__ = this;
var this$__$1 = this;
var stop_time = (ms + cljs.core.deref.call(null,new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(this$__$1)));
var evt_62645 = this$__$1.untangled_spec$async$IAsyncQueue$peek_event$arity$1(null);
while(true){
var now_62646__$1 = (function (){var or__34555__auto__ = new cljs.core.Keyword(null,"abs-time","abs-time",59488074).cljs$core$IFn$_invoke$arity$1(evt_62645);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return (stop_time + (1));
}
})();
if((now_62646__$1 <= stop_time)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(this$__$1),now_62646__$1);

untangled_spec.async.process_first_event_BANG_.call(null,this$__$1);

var G__62647 = this$__$1.untangled_spec$async$IAsyncQueue$peek_event$arity$1(null);
evt_62645 = G__62647;
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(this$__$1),stop_time);
});


untangled_spec.async.AsyncQueue.prototype.untangled_spec$async$IAsyncQueue$schedule_event$arity$3 = (function (this$,ms_from_now,fn_to_call){
var self__ = this;
var this$__$1 = this;
var tm = (ms_from_now + cljs.core.deref.call(null,new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(this$__$1)));
var event = (new untangled_spec.async.Event(tm,fn_to_call,null,null,null));
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"schedule","schedule",349275266).cljs$core$IFn$_invoke$arity$1(this$__$1)),tm)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Schedule already contains an event "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms_from_now),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ms from 'now' which would generate an indeterminant ordering for your events. Please offset your submission time a bit")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"schedule","schedule",349275266).cljs$core$IFn$_invoke$arity$1(this$__$1),((function (tm,event,this$__$1){
return (function (p1__62636_SHARP_){
return cljs.core.assoc.call(null,p1__62636_SHARP_,new cljs.core.Keyword(null,"abs-time","abs-time",59488074).cljs$core$IFn$_invoke$arity$1(event),event);
});})(tm,event,this$__$1))
);
}
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__35239__auto__,k__35240__auto__){
var self__ = this;
var this__35239__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schedule","schedule",349275266),null,new cljs.core.Keyword(null,"now","now",-1650525531),null], null), null),k__35240__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__35239__auto____$1),self__.__meta),k__35240__auto__);
} else {
return (new untangled_spec.async.AsyncQueue(self__.schedule,self__.now,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__35240__auto__)),null));
}
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__35237__auto__,k__35238__auto__,G__62637){
var self__ = this;
var this__35237__auto____$1 = this;
var pred__62641 = cljs.core.keyword_identical_QMARK_;
var expr__62642 = k__35238__auto__;
if(cljs.core.truth_(pred__62641.call(null,new cljs.core.Keyword(null,"schedule","schedule",349275266),expr__62642))){
return (new untangled_spec.async.AsyncQueue(G__62637,self__.now,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62641.call(null,new cljs.core.Keyword(null,"now","now",-1650525531),expr__62642))){
return (new untangled_spec.async.AsyncQueue(self__.schedule,G__62637,self__.__meta,self__.__extmap,null));
} else {
return (new untangled_spec.async.AsyncQueue(self__.schedule,self__.now,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__35238__auto__,G__62637),null));
}
}
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__35242__auto__){
var self__ = this;
var this__35242__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schedule","schedule",349275266),self__.schedule],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"now","now",-1650525531),self__.now],null))], null),self__.__extmap));
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__35229__auto__,G__62637){
var self__ = this;
var this__35229__auto____$1 = this;
return (new untangled_spec.async.AsyncQueue(self__.schedule,self__.now,G__62637,self__.__extmap,self__.__hash));
});


untangled_spec.async.AsyncQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__35235__auto__,entry__35236__auto__){
var self__ = this;
var this__35235__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__35236__auto__)){
return this__35235__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__35236__auto__,(0)),cljs.core._nth.call(null,entry__35236__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__35235__auto____$1,entry__35236__auto__);
}
});

untangled_spec.async.AsyncQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schedule","schedule",1989806793,null),new cljs.core.Symbol(null,"now","now",-9994004,null)], null);
});

untangled_spec.async.AsyncQueue.cljs$lang$type = true;

untangled_spec.async.AsyncQueue.cljs$lang$ctorPrSeq = (function (this__35266__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"untangled-spec.async/AsyncQueue");
});

untangled_spec.async.AsyncQueue.cljs$lang$ctorPrWriter = (function (this__35266__auto__,writer__35267__auto__){
return cljs.core._write.call(null,writer__35267__auto__,"untangled-spec.async/AsyncQueue");
});

untangled_spec.async.__GT_AsyncQueue = (function untangled_spec$async$__GT_AsyncQueue(schedule,now){
return (new untangled_spec.async.AsyncQueue(schedule,now,null,null,null));
});

untangled_spec.async.map__GT_AsyncQueue = (function untangled_spec$async$map__GT_AsyncQueue(G__62639){
return (new untangled_spec.async.AsyncQueue(new cljs.core.Keyword(null,"schedule","schedule",349275266).cljs$core$IFn$_invoke$arity$1(G__62639),new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(G__62639),null,cljs.core.dissoc.call(null,G__62639,new cljs.core.Keyword(null,"schedule","schedule",349275266),new cljs.core.Keyword(null,"now","now",-1650525531)),null));
});

/**
 * Build an asynchronous event simulation queue.
 */
untangled_spec.async.make_async_queue = (function untangled_spec$async$make_async_queue(){
return (new untangled_spec.async.AsyncQueue(cljs.core.atom.call(null,cljs.core.sorted_map.call(null)),cljs.core.atom.call(null,(0)),null,null,null));
});

//# sourceMappingURL=async.js.map?rel=1491640777453