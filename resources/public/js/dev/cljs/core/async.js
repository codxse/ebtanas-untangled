// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args100683 = [];
var len__35776__auto___100689 = arguments.length;
var i__35777__auto___100690 = (0);
while(true){
if((i__35777__auto___100690 < len__35776__auto___100689)){
args100683.push((arguments[i__35777__auto___100690]));

var G__100691 = (i__35777__auto___100690 + (1));
i__35777__auto___100690 = G__100691;
continue;
} else {
}
break;
}

var G__100685 = args100683.length;
switch (G__100685) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args100683.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async100686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async100686 = (function (f,blockable,meta100687){
this.f = f;
this.blockable = blockable;
this.meta100687 = meta100687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async100686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100688,meta100687__$1){
var self__ = this;
var _100688__$1 = this;
return (new cljs.core.async.t_cljs$core$async100686(self__.f,self__.blockable,meta100687__$1));
});


cljs.core.async.t_cljs$core$async100686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100688){
var self__ = this;
var _100688__$1 = this;
return self__.meta100687;
});


cljs.core.async.t_cljs$core$async100686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async100686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async100686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async100686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async100686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta100687","meta100687",165991391,null)], null);
});

cljs.core.async.t_cljs$core$async100686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async100686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async100686";

cljs.core.async.t_cljs$core$async100686.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async100686");
});

cljs.core.async.__GT_t_cljs$core$async100686 = (function cljs$core$async$__GT_t_cljs$core$async100686(f__$1,blockable__$1,meta100687){
return (new cljs.core.async.t_cljs$core$async100686(f__$1,blockable__$1,meta100687));
});

}

return (new cljs.core.async.t_cljs$core$async100686(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args100695 = [];
var len__35776__auto___100698 = arguments.length;
var i__35777__auto___100699 = (0);
while(true){
if((i__35777__auto___100699 < len__35776__auto___100698)){
args100695.push((arguments[i__35777__auto___100699]));

var G__100700 = (i__35777__auto___100699 + (1));
i__35777__auto___100699 = G__100700;
continue;
} else {
}
break;
}

var G__100697 = args100695.length;
switch (G__100697) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args100695.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args100702 = [];
var len__35776__auto___100705 = arguments.length;
var i__35777__auto___100706 = (0);
while(true){
if((i__35777__auto___100706 < len__35776__auto___100705)){
args100702.push((arguments[i__35777__auto___100706]));

var G__100707 = (i__35777__auto___100706 + (1));
i__35777__auto___100706 = G__100707;
continue;
} else {
}
break;
}

var G__100704 = args100702.length;
switch (G__100704) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args100702.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args100709 = [];
var len__35776__auto___100712 = arguments.length;
var i__35777__auto___100713 = (0);
while(true){
if((i__35777__auto___100713 < len__35776__auto___100712)){
args100709.push((arguments[i__35777__auto___100713]));

var G__100714 = (i__35777__auto___100713 + (1));
i__35777__auto___100713 = G__100714;
continue;
} else {
}
break;
}

var G__100711 = args100709.length;
switch (G__100711) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args100709.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_100716 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_100716);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_100716,ret){
return (function (){
return fn1.call(null,val_100716);
});})(val_100716,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args100717 = [];
var len__35776__auto___100720 = arguments.length;
var i__35777__auto___100721 = (0);
while(true){
if((i__35777__auto___100721 < len__35776__auto___100720)){
args100717.push((arguments[i__35777__auto___100721]));

var G__100722 = (i__35777__auto___100721 + (1));
i__35777__auto___100721 = G__100722;
continue;
} else {
}
break;
}

var G__100719 = args100717.length;
switch (G__100719) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args100717.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__35576__auto___100724 = n;
var x_100725 = (0);
while(true){
if((x_100725 < n__35576__auto___100724)){
(a[x_100725] = (0));

var G__100726 = (x_100725 + (1));
x_100725 = G__100726;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__100727 = (i + (1));
i = G__100727;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async100731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async100731 = (function (flag,meta100732){
this.flag = flag;
this.meta100732 = meta100732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async100731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_100733,meta100732__$1){
var self__ = this;
var _100733__$1 = this;
return (new cljs.core.async.t_cljs$core$async100731(self__.flag,meta100732__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async100731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_100733){
var self__ = this;
var _100733__$1 = this;
return self__.meta100732;
});})(flag))
;


cljs.core.async.t_cljs$core$async100731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async100731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async100731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async100731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async100731.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta100732","meta100732",-6526674,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async100731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async100731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async100731";

cljs.core.async.t_cljs$core$async100731.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async100731");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async100731 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async100731(flag__$1,meta100732){
return (new cljs.core.async.t_cljs$core$async100731(flag__$1,meta100732));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async100731(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async100737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async100737 = (function (flag,cb,meta100738){
this.flag = flag;
this.cb = cb;
this.meta100738 = meta100738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async100737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_100739,meta100738__$1){
var self__ = this;
var _100739__$1 = this;
return (new cljs.core.async.t_cljs$core$async100737(self__.flag,self__.cb,meta100738__$1));
});


cljs.core.async.t_cljs$core$async100737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_100739){
var self__ = this;
var _100739__$1 = this;
return self__.meta100738;
});


cljs.core.async.t_cljs$core$async100737.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async100737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async100737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async100737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async100737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta100738","meta100738",1865925241,null)], null);
});

cljs.core.async.t_cljs$core$async100737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async100737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async100737";

cljs.core.async.t_cljs$core$async100737.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async100737");
});

cljs.core.async.__GT_t_cljs$core$async100737 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async100737(flag__$1,cb__$1,meta100738){
return (new cljs.core.async.t_cljs$core$async100737(flag__$1,cb__$1,meta100738));
});

}

return (new cljs.core.async.t_cljs$core$async100737(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__100740_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__100740_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__100741_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__100741_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34555__auto__ = wport;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return port;
}
})()], null));
} else {
var G__100742 = (i + (1));
i = G__100742;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34555__auto__ = ret;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__34543__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34543__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34543__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___100748 = arguments.length;
var i__35777__auto___100749 = (0);
while(true){
if((i__35777__auto___100749 < len__35776__auto___100748)){
args__35783__auto__.push((arguments[i__35777__auto___100749]));

var G__100750 = (i__35777__auto___100749 + (1));
i__35777__auto___100749 = G__100750;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__100745){
var map__100746 = p__100745;
var map__100746__$1 = ((((!((map__100746 == null)))?((((map__100746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__100746):map__100746);
var opts = map__100746__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq100743){
var G__100744 = cljs.core.first.call(null,seq100743);
var seq100743__$1 = cljs.core.next.call(null,seq100743);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__100744,seq100743__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args100751 = [];
var len__35776__auto___100801 = arguments.length;
var i__35777__auto___100802 = (0);
while(true){
if((i__35777__auto___100802 < len__35776__auto___100801)){
args100751.push((arguments[i__35777__auto___100802]));

var G__100803 = (i__35777__auto___100802 + (1));
i__35777__auto___100802 = G__100803;
continue;
} else {
}
break;
}

var G__100753 = args100751.length;
switch (G__100753) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args100751.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48312__auto___100805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___100805){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___100805){
return (function (state_100777){
var state_val_100778 = (state_100777[(1)]);
if((state_val_100778 === (7))){
var inst_100773 = (state_100777[(2)]);
var state_100777__$1 = state_100777;
var statearr_100779_100806 = state_100777__$1;
(statearr_100779_100806[(2)] = inst_100773);

(statearr_100779_100806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (1))){
var state_100777__$1 = state_100777;
var statearr_100780_100807 = state_100777__$1;
(statearr_100780_100807[(2)] = null);

(statearr_100780_100807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (4))){
var inst_100756 = (state_100777[(7)]);
var inst_100756__$1 = (state_100777[(2)]);
var inst_100757 = (inst_100756__$1 == null);
var state_100777__$1 = (function (){var statearr_100781 = state_100777;
(statearr_100781[(7)] = inst_100756__$1);

return statearr_100781;
})();
if(cljs.core.truth_(inst_100757)){
var statearr_100782_100808 = state_100777__$1;
(statearr_100782_100808[(1)] = (5));

} else {
var statearr_100783_100809 = state_100777__$1;
(statearr_100783_100809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (13))){
var state_100777__$1 = state_100777;
var statearr_100784_100810 = state_100777__$1;
(statearr_100784_100810[(2)] = null);

(statearr_100784_100810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (6))){
var inst_100756 = (state_100777[(7)]);
var state_100777__$1 = state_100777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_100777__$1,(11),to,inst_100756);
} else {
if((state_val_100778 === (3))){
var inst_100775 = (state_100777[(2)]);
var state_100777__$1 = state_100777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_100777__$1,inst_100775);
} else {
if((state_val_100778 === (12))){
var state_100777__$1 = state_100777;
var statearr_100785_100811 = state_100777__$1;
(statearr_100785_100811[(2)] = null);

(statearr_100785_100811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (2))){
var state_100777__$1 = state_100777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_100777__$1,(4),from);
} else {
if((state_val_100778 === (11))){
var inst_100766 = (state_100777[(2)]);
var state_100777__$1 = state_100777;
if(cljs.core.truth_(inst_100766)){
var statearr_100786_100812 = state_100777__$1;
(statearr_100786_100812[(1)] = (12));

} else {
var statearr_100787_100813 = state_100777__$1;
(statearr_100787_100813[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (9))){
var state_100777__$1 = state_100777;
var statearr_100788_100814 = state_100777__$1;
(statearr_100788_100814[(2)] = null);

(statearr_100788_100814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (5))){
var state_100777__$1 = state_100777;
if(cljs.core.truth_(close_QMARK_)){
var statearr_100789_100815 = state_100777__$1;
(statearr_100789_100815[(1)] = (8));

} else {
var statearr_100790_100816 = state_100777__$1;
(statearr_100790_100816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (14))){
var inst_100771 = (state_100777[(2)]);
var state_100777__$1 = state_100777;
var statearr_100791_100817 = state_100777__$1;
(statearr_100791_100817[(2)] = inst_100771);

(statearr_100791_100817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (10))){
var inst_100763 = (state_100777[(2)]);
var state_100777__$1 = state_100777;
var statearr_100792_100818 = state_100777__$1;
(statearr_100792_100818[(2)] = inst_100763);

(statearr_100792_100818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_100778 === (8))){
var inst_100760 = cljs.core.async.close_BANG_.call(null,to);
var state_100777__$1 = state_100777;
var statearr_100793_100819 = state_100777__$1;
(statearr_100793_100819[(2)] = inst_100760);

(statearr_100793_100819[(1)] = (10));


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
});})(c__48312__auto___100805))
;
return ((function (switch__48198__auto__,c__48312__auto___100805){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_100797 = [null,null,null,null,null,null,null,null];
(statearr_100797[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_100797[(1)] = (1));

return statearr_100797;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_100777){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_100777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e100798){if((e100798 instanceof Object)){
var ex__48202__auto__ = e100798;
var statearr_100799_100820 = state_100777;
(statearr_100799_100820[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_100777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e100798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100821 = state_100777;
state_100777 = G__100821;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_100777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_100777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___100805))
})();
var state__48314__auto__ = (function (){var statearr_100800 = f__48313__auto__.call(null);
(statearr_100800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___100805);

return statearr_100800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___100805))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__101009){
var vec__101010 = p__101009;
var v = cljs.core.nth.call(null,vec__101010,(0),null);
var p = cljs.core.nth.call(null,vec__101010,(1),null);
var job = vec__101010;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48312__auto___101196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___101196,res,vec__101010,v,p,job,jobs,results){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___101196,res,vec__101010,v,p,job,jobs,results){
return (function (state_101017){
var state_val_101018 = (state_101017[(1)]);
if((state_val_101018 === (1))){
var state_101017__$1 = state_101017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101017__$1,(2),res,v);
} else {
if((state_val_101018 === (2))){
var inst_101014 = (state_101017[(2)]);
var inst_101015 = cljs.core.async.close_BANG_.call(null,res);
var state_101017__$1 = (function (){var statearr_101019 = state_101017;
(statearr_101019[(7)] = inst_101014);

return statearr_101019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101017__$1,inst_101015);
} else {
return null;
}
}
});})(c__48312__auto___101196,res,vec__101010,v,p,job,jobs,results))
;
return ((function (switch__48198__auto__,c__48312__auto___101196,res,vec__101010,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_101023 = [null,null,null,null,null,null,null,null];
(statearr_101023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_101023[(1)] = (1));

return statearr_101023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_101017){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101024){if((e101024 instanceof Object)){
var ex__48202__auto__ = e101024;
var statearr_101025_101197 = state_101017;
(statearr_101025_101197[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101198 = state_101017;
state_101017 = G__101198;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_101017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_101017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___101196,res,vec__101010,v,p,job,jobs,results))
})();
var state__48314__auto__ = (function (){var statearr_101026 = f__48313__auto__.call(null);
(statearr_101026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___101196);

return statearr_101026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___101196,res,vec__101010,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__101027){
var vec__101028 = p__101027;
var v = cljs.core.nth.call(null,vec__101028,(0),null);
var p = cljs.core.nth.call(null,vec__101028,(1),null);
var job = vec__101028;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__35576__auto___101199 = n;
var __101200 = (0);
while(true){
if((__101200 < n__35576__auto___101199)){
var G__101031_101201 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__101031_101201) {
case "compute":
var c__48312__auto___101203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__101200,c__48312__auto___101203,G__101031_101201,n__35576__auto___101199,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (__101200,c__48312__auto___101203,G__101031_101201,n__35576__auto___101199,jobs,results,process,async){
return (function (state_101044){
var state_val_101045 = (state_101044[(1)]);
if((state_val_101045 === (1))){
var state_101044__$1 = state_101044;
var statearr_101046_101204 = state_101044__$1;
(statearr_101046_101204[(2)] = null);

(statearr_101046_101204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101045 === (2))){
var state_101044__$1 = state_101044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101044__$1,(4),jobs);
} else {
if((state_val_101045 === (3))){
var inst_101042 = (state_101044[(2)]);
var state_101044__$1 = state_101044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101044__$1,inst_101042);
} else {
if((state_val_101045 === (4))){
var inst_101034 = (state_101044[(2)]);
var inst_101035 = process.call(null,inst_101034);
var state_101044__$1 = state_101044;
if(cljs.core.truth_(inst_101035)){
var statearr_101047_101205 = state_101044__$1;
(statearr_101047_101205[(1)] = (5));

} else {
var statearr_101048_101206 = state_101044__$1;
(statearr_101048_101206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101045 === (5))){
var state_101044__$1 = state_101044;
var statearr_101049_101207 = state_101044__$1;
(statearr_101049_101207[(2)] = null);

(statearr_101049_101207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101045 === (6))){
var state_101044__$1 = state_101044;
var statearr_101050_101208 = state_101044__$1;
(statearr_101050_101208[(2)] = null);

(statearr_101050_101208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101045 === (7))){
var inst_101040 = (state_101044[(2)]);
var state_101044__$1 = state_101044;
var statearr_101051_101209 = state_101044__$1;
(statearr_101051_101209[(2)] = inst_101040);

(statearr_101051_101209[(1)] = (3));


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
});})(__101200,c__48312__auto___101203,G__101031_101201,n__35576__auto___101199,jobs,results,process,async))
;
return ((function (__101200,switch__48198__auto__,c__48312__auto___101203,G__101031_101201,n__35576__auto___101199,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_101055 = [null,null,null,null,null,null,null];
(statearr_101055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_101055[(1)] = (1));

return statearr_101055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_101044){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101056){if((e101056 instanceof Object)){
var ex__48202__auto__ = e101056;
var statearr_101057_101210 = state_101044;
(statearr_101057_101210[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101211 = state_101044;
state_101044 = G__101211;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_101044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_101044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(__101200,switch__48198__auto__,c__48312__auto___101203,G__101031_101201,n__35576__auto___101199,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_101058 = f__48313__auto__.call(null);
(statearr_101058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___101203);

return statearr_101058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(__101200,c__48312__auto___101203,G__101031_101201,n__35576__auto___101199,jobs,results,process,async))
);


break;
case "async":
var c__48312__auto___101212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__101200,c__48312__auto___101212,G__101031_101201,n__35576__auto___101199,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (__101200,c__48312__auto___101212,G__101031_101201,n__35576__auto___101199,jobs,results,process,async){
return (function (state_101071){
var state_val_101072 = (state_101071[(1)]);
if((state_val_101072 === (1))){
var state_101071__$1 = state_101071;
var statearr_101073_101213 = state_101071__$1;
(statearr_101073_101213[(2)] = null);

(statearr_101073_101213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101072 === (2))){
var state_101071__$1 = state_101071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101071__$1,(4),jobs);
} else {
if((state_val_101072 === (3))){
var inst_101069 = (state_101071[(2)]);
var state_101071__$1 = state_101071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101071__$1,inst_101069);
} else {
if((state_val_101072 === (4))){
var inst_101061 = (state_101071[(2)]);
var inst_101062 = async.call(null,inst_101061);
var state_101071__$1 = state_101071;
if(cljs.core.truth_(inst_101062)){
var statearr_101074_101214 = state_101071__$1;
(statearr_101074_101214[(1)] = (5));

} else {
var statearr_101075_101215 = state_101071__$1;
(statearr_101075_101215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101072 === (5))){
var state_101071__$1 = state_101071;
var statearr_101076_101216 = state_101071__$1;
(statearr_101076_101216[(2)] = null);

(statearr_101076_101216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101072 === (6))){
var state_101071__$1 = state_101071;
var statearr_101077_101217 = state_101071__$1;
(statearr_101077_101217[(2)] = null);

(statearr_101077_101217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101072 === (7))){
var inst_101067 = (state_101071[(2)]);
var state_101071__$1 = state_101071;
var statearr_101078_101218 = state_101071__$1;
(statearr_101078_101218[(2)] = inst_101067);

(statearr_101078_101218[(1)] = (3));


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
});})(__101200,c__48312__auto___101212,G__101031_101201,n__35576__auto___101199,jobs,results,process,async))
;
return ((function (__101200,switch__48198__auto__,c__48312__auto___101212,G__101031_101201,n__35576__auto___101199,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_101082 = [null,null,null,null,null,null,null];
(statearr_101082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_101082[(1)] = (1));

return statearr_101082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_101071){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101083){if((e101083 instanceof Object)){
var ex__48202__auto__ = e101083;
var statearr_101084_101219 = state_101071;
(statearr_101084_101219[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101220 = state_101071;
state_101071 = G__101220;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_101071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_101071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(__101200,switch__48198__auto__,c__48312__auto___101212,G__101031_101201,n__35576__auto___101199,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_101085 = f__48313__auto__.call(null);
(statearr_101085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___101212);

return statearr_101085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(__101200,c__48312__auto___101212,G__101031_101201,n__35576__auto___101199,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__101221 = (__101200 + (1));
__101200 = G__101221;
continue;
} else {
}
break;
}

var c__48312__auto___101222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___101222,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___101222,jobs,results,process,async){
return (function (state_101107){
var state_val_101108 = (state_101107[(1)]);
if((state_val_101108 === (1))){
var state_101107__$1 = state_101107;
var statearr_101109_101223 = state_101107__$1;
(statearr_101109_101223[(2)] = null);

(statearr_101109_101223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101108 === (2))){
var state_101107__$1 = state_101107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101107__$1,(4),from);
} else {
if((state_val_101108 === (3))){
var inst_101105 = (state_101107[(2)]);
var state_101107__$1 = state_101107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101107__$1,inst_101105);
} else {
if((state_val_101108 === (4))){
var inst_101088 = (state_101107[(7)]);
var inst_101088__$1 = (state_101107[(2)]);
var inst_101089 = (inst_101088__$1 == null);
var state_101107__$1 = (function (){var statearr_101110 = state_101107;
(statearr_101110[(7)] = inst_101088__$1);

return statearr_101110;
})();
if(cljs.core.truth_(inst_101089)){
var statearr_101111_101224 = state_101107__$1;
(statearr_101111_101224[(1)] = (5));

} else {
var statearr_101112_101225 = state_101107__$1;
(statearr_101112_101225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101108 === (5))){
var inst_101091 = cljs.core.async.close_BANG_.call(null,jobs);
var state_101107__$1 = state_101107;
var statearr_101113_101226 = state_101107__$1;
(statearr_101113_101226[(2)] = inst_101091);

(statearr_101113_101226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101108 === (6))){
var inst_101093 = (state_101107[(8)]);
var inst_101088 = (state_101107[(7)]);
var inst_101093__$1 = cljs.core.async.chan.call(null,(1));
var inst_101094 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_101095 = [inst_101088,inst_101093__$1];
var inst_101096 = (new cljs.core.PersistentVector(null,2,(5),inst_101094,inst_101095,null));
var state_101107__$1 = (function (){var statearr_101114 = state_101107;
(statearr_101114[(8)] = inst_101093__$1);

return statearr_101114;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101107__$1,(8),jobs,inst_101096);
} else {
if((state_val_101108 === (7))){
var inst_101103 = (state_101107[(2)]);
var state_101107__$1 = state_101107;
var statearr_101115_101227 = state_101107__$1;
(statearr_101115_101227[(2)] = inst_101103);

(statearr_101115_101227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101108 === (8))){
var inst_101093 = (state_101107[(8)]);
var inst_101098 = (state_101107[(2)]);
var state_101107__$1 = (function (){var statearr_101116 = state_101107;
(statearr_101116[(9)] = inst_101098);

return statearr_101116;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101107__$1,(9),results,inst_101093);
} else {
if((state_val_101108 === (9))){
var inst_101100 = (state_101107[(2)]);
var state_101107__$1 = (function (){var statearr_101117 = state_101107;
(statearr_101117[(10)] = inst_101100);

return statearr_101117;
})();
var statearr_101118_101228 = state_101107__$1;
(statearr_101118_101228[(2)] = null);

(statearr_101118_101228[(1)] = (2));


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
});})(c__48312__auto___101222,jobs,results,process,async))
;
return ((function (switch__48198__auto__,c__48312__auto___101222,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_101122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_101122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_101122[(1)] = (1));

return statearr_101122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_101107){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101123){if((e101123 instanceof Object)){
var ex__48202__auto__ = e101123;
var statearr_101124_101229 = state_101107;
(statearr_101124_101229[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101230 = state_101107;
state_101107 = G__101230;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_101107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_101107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___101222,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_101125 = f__48313__auto__.call(null);
(statearr_101125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___101222);

return statearr_101125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___101222,jobs,results,process,async))
);


var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,jobs,results,process,async){
return (function (state_101163){
var state_val_101164 = (state_101163[(1)]);
if((state_val_101164 === (7))){
var inst_101159 = (state_101163[(2)]);
var state_101163__$1 = state_101163;
var statearr_101165_101231 = state_101163__$1;
(statearr_101165_101231[(2)] = inst_101159);

(statearr_101165_101231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (20))){
var state_101163__$1 = state_101163;
var statearr_101166_101232 = state_101163__$1;
(statearr_101166_101232[(2)] = null);

(statearr_101166_101232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (1))){
var state_101163__$1 = state_101163;
var statearr_101167_101233 = state_101163__$1;
(statearr_101167_101233[(2)] = null);

(statearr_101167_101233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (4))){
var inst_101128 = (state_101163[(7)]);
var inst_101128__$1 = (state_101163[(2)]);
var inst_101129 = (inst_101128__$1 == null);
var state_101163__$1 = (function (){var statearr_101168 = state_101163;
(statearr_101168[(7)] = inst_101128__$1);

return statearr_101168;
})();
if(cljs.core.truth_(inst_101129)){
var statearr_101169_101234 = state_101163__$1;
(statearr_101169_101234[(1)] = (5));

} else {
var statearr_101170_101235 = state_101163__$1;
(statearr_101170_101235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (15))){
var inst_101141 = (state_101163[(8)]);
var state_101163__$1 = state_101163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101163__$1,(18),to,inst_101141);
} else {
if((state_val_101164 === (21))){
var inst_101154 = (state_101163[(2)]);
var state_101163__$1 = state_101163;
var statearr_101171_101236 = state_101163__$1;
(statearr_101171_101236[(2)] = inst_101154);

(statearr_101171_101236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (13))){
var inst_101156 = (state_101163[(2)]);
var state_101163__$1 = (function (){var statearr_101172 = state_101163;
(statearr_101172[(9)] = inst_101156);

return statearr_101172;
})();
var statearr_101173_101237 = state_101163__$1;
(statearr_101173_101237[(2)] = null);

(statearr_101173_101237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (6))){
var inst_101128 = (state_101163[(7)]);
var state_101163__$1 = state_101163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101163__$1,(11),inst_101128);
} else {
if((state_val_101164 === (17))){
var inst_101149 = (state_101163[(2)]);
var state_101163__$1 = state_101163;
if(cljs.core.truth_(inst_101149)){
var statearr_101174_101238 = state_101163__$1;
(statearr_101174_101238[(1)] = (19));

} else {
var statearr_101175_101239 = state_101163__$1;
(statearr_101175_101239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (3))){
var inst_101161 = (state_101163[(2)]);
var state_101163__$1 = state_101163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101163__$1,inst_101161);
} else {
if((state_val_101164 === (12))){
var inst_101138 = (state_101163[(10)]);
var state_101163__$1 = state_101163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101163__$1,(14),inst_101138);
} else {
if((state_val_101164 === (2))){
var state_101163__$1 = state_101163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101163__$1,(4),results);
} else {
if((state_val_101164 === (19))){
var state_101163__$1 = state_101163;
var statearr_101176_101240 = state_101163__$1;
(statearr_101176_101240[(2)] = null);

(statearr_101176_101240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (11))){
var inst_101138 = (state_101163[(2)]);
var state_101163__$1 = (function (){var statearr_101177 = state_101163;
(statearr_101177[(10)] = inst_101138);

return statearr_101177;
})();
var statearr_101178_101241 = state_101163__$1;
(statearr_101178_101241[(2)] = null);

(statearr_101178_101241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (9))){
var state_101163__$1 = state_101163;
var statearr_101179_101242 = state_101163__$1;
(statearr_101179_101242[(2)] = null);

(statearr_101179_101242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (5))){
var state_101163__$1 = state_101163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_101180_101243 = state_101163__$1;
(statearr_101180_101243[(1)] = (8));

} else {
var statearr_101181_101244 = state_101163__$1;
(statearr_101181_101244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (14))){
var inst_101143 = (state_101163[(11)]);
var inst_101141 = (state_101163[(8)]);
var inst_101141__$1 = (state_101163[(2)]);
var inst_101142 = (inst_101141__$1 == null);
var inst_101143__$1 = cljs.core.not.call(null,inst_101142);
var state_101163__$1 = (function (){var statearr_101182 = state_101163;
(statearr_101182[(11)] = inst_101143__$1);

(statearr_101182[(8)] = inst_101141__$1);

return statearr_101182;
})();
if(inst_101143__$1){
var statearr_101183_101245 = state_101163__$1;
(statearr_101183_101245[(1)] = (15));

} else {
var statearr_101184_101246 = state_101163__$1;
(statearr_101184_101246[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (16))){
var inst_101143 = (state_101163[(11)]);
var state_101163__$1 = state_101163;
var statearr_101185_101247 = state_101163__$1;
(statearr_101185_101247[(2)] = inst_101143);

(statearr_101185_101247[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (10))){
var inst_101135 = (state_101163[(2)]);
var state_101163__$1 = state_101163;
var statearr_101186_101248 = state_101163__$1;
(statearr_101186_101248[(2)] = inst_101135);

(statearr_101186_101248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (18))){
var inst_101146 = (state_101163[(2)]);
var state_101163__$1 = state_101163;
var statearr_101187_101249 = state_101163__$1;
(statearr_101187_101249[(2)] = inst_101146);

(statearr_101187_101249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101164 === (8))){
var inst_101132 = cljs.core.async.close_BANG_.call(null,to);
var state_101163__$1 = state_101163;
var statearr_101188_101250 = state_101163__$1;
(statearr_101188_101250[(2)] = inst_101132);

(statearr_101188_101250[(1)] = (10));


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
});})(c__48312__auto__,jobs,results,process,async))
;
return ((function (switch__48198__auto__,c__48312__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_101192 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_101192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_101192[(1)] = (1));

return statearr_101192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_101163){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101193){if((e101193 instanceof Object)){
var ex__48202__auto__ = e101193;
var statearr_101194_101251 = state_101163;
(statearr_101194_101251[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101252 = state_101163;
state_101163 = G__101252;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_101163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_101163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_101195 = f__48313__auto__.call(null);
(statearr_101195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_101195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,jobs,results,process,async))
);

return c__48312__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args101253 = [];
var len__35776__auto___101256 = arguments.length;
var i__35777__auto___101257 = (0);
while(true){
if((i__35777__auto___101257 < len__35776__auto___101256)){
args101253.push((arguments[i__35777__auto___101257]));

var G__101258 = (i__35777__auto___101257 + (1));
i__35777__auto___101257 = G__101258;
continue;
} else {
}
break;
}

var G__101255 = args101253.length;
switch (G__101255) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args101253.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args101260 = [];
var len__35776__auto___101263 = arguments.length;
var i__35777__auto___101264 = (0);
while(true){
if((i__35777__auto___101264 < len__35776__auto___101263)){
args101260.push((arguments[i__35777__auto___101264]));

var G__101265 = (i__35777__auto___101264 + (1));
i__35777__auto___101264 = G__101265;
continue;
} else {
}
break;
}

var G__101262 = args101260.length;
switch (G__101262) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args101260.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args101267 = [];
var len__35776__auto___101320 = arguments.length;
var i__35777__auto___101321 = (0);
while(true){
if((i__35777__auto___101321 < len__35776__auto___101320)){
args101267.push((arguments[i__35777__auto___101321]));

var G__101322 = (i__35777__auto___101321 + (1));
i__35777__auto___101321 = G__101322;
continue;
} else {
}
break;
}

var G__101269 = args101267.length;
switch (G__101269) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args101267.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__48312__auto___101324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___101324,tc,fc){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___101324,tc,fc){
return (function (state_101295){
var state_val_101296 = (state_101295[(1)]);
if((state_val_101296 === (7))){
var inst_101291 = (state_101295[(2)]);
var state_101295__$1 = state_101295;
var statearr_101297_101325 = state_101295__$1;
(statearr_101297_101325[(2)] = inst_101291);

(statearr_101297_101325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (1))){
var state_101295__$1 = state_101295;
var statearr_101298_101326 = state_101295__$1;
(statearr_101298_101326[(2)] = null);

(statearr_101298_101326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (4))){
var inst_101272 = (state_101295[(7)]);
var inst_101272__$1 = (state_101295[(2)]);
var inst_101273 = (inst_101272__$1 == null);
var state_101295__$1 = (function (){var statearr_101299 = state_101295;
(statearr_101299[(7)] = inst_101272__$1);

return statearr_101299;
})();
if(cljs.core.truth_(inst_101273)){
var statearr_101300_101327 = state_101295__$1;
(statearr_101300_101327[(1)] = (5));

} else {
var statearr_101301_101328 = state_101295__$1;
(statearr_101301_101328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (13))){
var state_101295__$1 = state_101295;
var statearr_101302_101329 = state_101295__$1;
(statearr_101302_101329[(2)] = null);

(statearr_101302_101329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (6))){
var inst_101272 = (state_101295[(7)]);
var inst_101278 = p.call(null,inst_101272);
var state_101295__$1 = state_101295;
if(cljs.core.truth_(inst_101278)){
var statearr_101303_101330 = state_101295__$1;
(statearr_101303_101330[(1)] = (9));

} else {
var statearr_101304_101331 = state_101295__$1;
(statearr_101304_101331[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (3))){
var inst_101293 = (state_101295[(2)]);
var state_101295__$1 = state_101295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101295__$1,inst_101293);
} else {
if((state_val_101296 === (12))){
var state_101295__$1 = state_101295;
var statearr_101305_101332 = state_101295__$1;
(statearr_101305_101332[(2)] = null);

(statearr_101305_101332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (2))){
var state_101295__$1 = state_101295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101295__$1,(4),ch);
} else {
if((state_val_101296 === (11))){
var inst_101272 = (state_101295[(7)]);
var inst_101282 = (state_101295[(2)]);
var state_101295__$1 = state_101295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101295__$1,(8),inst_101282,inst_101272);
} else {
if((state_val_101296 === (9))){
var state_101295__$1 = state_101295;
var statearr_101306_101333 = state_101295__$1;
(statearr_101306_101333[(2)] = tc);

(statearr_101306_101333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (5))){
var inst_101275 = cljs.core.async.close_BANG_.call(null,tc);
var inst_101276 = cljs.core.async.close_BANG_.call(null,fc);
var state_101295__$1 = (function (){var statearr_101307 = state_101295;
(statearr_101307[(8)] = inst_101275);

return statearr_101307;
})();
var statearr_101308_101334 = state_101295__$1;
(statearr_101308_101334[(2)] = inst_101276);

(statearr_101308_101334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (14))){
var inst_101289 = (state_101295[(2)]);
var state_101295__$1 = state_101295;
var statearr_101309_101335 = state_101295__$1;
(statearr_101309_101335[(2)] = inst_101289);

(statearr_101309_101335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (10))){
var state_101295__$1 = state_101295;
var statearr_101310_101336 = state_101295__$1;
(statearr_101310_101336[(2)] = fc);

(statearr_101310_101336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101296 === (8))){
var inst_101284 = (state_101295[(2)]);
var state_101295__$1 = state_101295;
if(cljs.core.truth_(inst_101284)){
var statearr_101311_101337 = state_101295__$1;
(statearr_101311_101337[(1)] = (12));

} else {
var statearr_101312_101338 = state_101295__$1;
(statearr_101312_101338[(1)] = (13));

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
});})(c__48312__auto___101324,tc,fc))
;
return ((function (switch__48198__auto__,c__48312__auto___101324,tc,fc){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_101316 = [null,null,null,null,null,null,null,null,null];
(statearr_101316[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_101316[(1)] = (1));

return statearr_101316;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_101295){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101317){if((e101317 instanceof Object)){
var ex__48202__auto__ = e101317;
var statearr_101318_101339 = state_101295;
(statearr_101318_101339[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101340 = state_101295;
state_101295 = G__101340;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_101295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_101295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___101324,tc,fc))
})();
var state__48314__auto__ = (function (){var statearr_101319 = f__48313__auto__.call(null);
(statearr_101319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___101324);

return statearr_101319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___101324,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__){
return (function (state_101404){
var state_val_101405 = (state_101404[(1)]);
if((state_val_101405 === (7))){
var inst_101400 = (state_101404[(2)]);
var state_101404__$1 = state_101404;
var statearr_101406_101427 = state_101404__$1;
(statearr_101406_101427[(2)] = inst_101400);

(statearr_101406_101427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101405 === (1))){
var inst_101384 = init;
var state_101404__$1 = (function (){var statearr_101407 = state_101404;
(statearr_101407[(7)] = inst_101384);

return statearr_101407;
})();
var statearr_101408_101428 = state_101404__$1;
(statearr_101408_101428[(2)] = null);

(statearr_101408_101428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101405 === (4))){
var inst_101387 = (state_101404[(8)]);
var inst_101387__$1 = (state_101404[(2)]);
var inst_101388 = (inst_101387__$1 == null);
var state_101404__$1 = (function (){var statearr_101409 = state_101404;
(statearr_101409[(8)] = inst_101387__$1);

return statearr_101409;
})();
if(cljs.core.truth_(inst_101388)){
var statearr_101410_101429 = state_101404__$1;
(statearr_101410_101429[(1)] = (5));

} else {
var statearr_101411_101430 = state_101404__$1;
(statearr_101411_101430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101405 === (6))){
var inst_101387 = (state_101404[(8)]);
var inst_101391 = (state_101404[(9)]);
var inst_101384 = (state_101404[(7)]);
var inst_101391__$1 = f.call(null,inst_101384,inst_101387);
var inst_101392 = cljs.core.reduced_QMARK_.call(null,inst_101391__$1);
var state_101404__$1 = (function (){var statearr_101412 = state_101404;
(statearr_101412[(9)] = inst_101391__$1);

return statearr_101412;
})();
if(inst_101392){
var statearr_101413_101431 = state_101404__$1;
(statearr_101413_101431[(1)] = (8));

} else {
var statearr_101414_101432 = state_101404__$1;
(statearr_101414_101432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101405 === (3))){
var inst_101402 = (state_101404[(2)]);
var state_101404__$1 = state_101404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101404__$1,inst_101402);
} else {
if((state_val_101405 === (2))){
var state_101404__$1 = state_101404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101404__$1,(4),ch);
} else {
if((state_val_101405 === (9))){
var inst_101391 = (state_101404[(9)]);
var inst_101384 = inst_101391;
var state_101404__$1 = (function (){var statearr_101415 = state_101404;
(statearr_101415[(7)] = inst_101384);

return statearr_101415;
})();
var statearr_101416_101433 = state_101404__$1;
(statearr_101416_101433[(2)] = null);

(statearr_101416_101433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101405 === (5))){
var inst_101384 = (state_101404[(7)]);
var state_101404__$1 = state_101404;
var statearr_101417_101434 = state_101404__$1;
(statearr_101417_101434[(2)] = inst_101384);

(statearr_101417_101434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101405 === (10))){
var inst_101398 = (state_101404[(2)]);
var state_101404__$1 = state_101404;
var statearr_101418_101435 = state_101404__$1;
(statearr_101418_101435[(2)] = inst_101398);

(statearr_101418_101435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101405 === (8))){
var inst_101391 = (state_101404[(9)]);
var inst_101394 = cljs.core.deref.call(null,inst_101391);
var state_101404__$1 = state_101404;
var statearr_101419_101436 = state_101404__$1;
(statearr_101419_101436[(2)] = inst_101394);

(statearr_101419_101436[(1)] = (10));


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
});})(c__48312__auto__))
;
return ((function (switch__48198__auto__,c__48312__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48199__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48199__auto____0 = (function (){
var statearr_101423 = [null,null,null,null,null,null,null,null,null,null];
(statearr_101423[(0)] = cljs$core$async$reduce_$_state_machine__48199__auto__);

(statearr_101423[(1)] = (1));

return statearr_101423;
});
var cljs$core$async$reduce_$_state_machine__48199__auto____1 = (function (state_101404){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101424){if((e101424 instanceof Object)){
var ex__48202__auto__ = e101424;
var statearr_101425_101437 = state_101404;
(statearr_101425_101437[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101438 = state_101404;
state_101404 = G__101438;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48199__auto__ = function(state_101404){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48199__auto____1.call(this,state_101404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48199__auto____0;
cljs$core$async$reduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48199__auto____1;
return cljs$core$async$reduce_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_101426 = f__48313__auto__.call(null);
(statearr_101426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_101426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__))
);

return c__48312__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,f__$1){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,f__$1){
return (function (state_101458){
var state_val_101459 = (state_101458[(1)]);
if((state_val_101459 === (1))){
var inst_101453 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_101458__$1 = state_101458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101458__$1,(2),inst_101453);
} else {
if((state_val_101459 === (2))){
var inst_101455 = (state_101458[(2)]);
var inst_101456 = f__$1.call(null,inst_101455);
var state_101458__$1 = state_101458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101458__$1,inst_101456);
} else {
return null;
}
}
});})(c__48312__auto__,f__$1))
;
return ((function (switch__48198__auto__,c__48312__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__48199__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48199__auto____0 = (function (){
var statearr_101463 = [null,null,null,null,null,null,null];
(statearr_101463[(0)] = cljs$core$async$transduce_$_state_machine__48199__auto__);

(statearr_101463[(1)] = (1));

return statearr_101463;
});
var cljs$core$async$transduce_$_state_machine__48199__auto____1 = (function (state_101458){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101464){if((e101464 instanceof Object)){
var ex__48202__auto__ = e101464;
var statearr_101465_101467 = state_101458;
(statearr_101465_101467[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101468 = state_101458;
state_101458 = G__101468;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48199__auto__ = function(state_101458){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48199__auto____1.call(this,state_101458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48199__auto____0;
cljs$core$async$transduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48199__auto____1;
return cljs$core$async$transduce_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,f__$1))
})();
var state__48314__auto__ = (function (){var statearr_101466 = f__48313__auto__.call(null);
(statearr_101466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_101466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__,f__$1))
);

return c__48312__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args101469 = [];
var len__35776__auto___101521 = arguments.length;
var i__35777__auto___101522 = (0);
while(true){
if((i__35777__auto___101522 < len__35776__auto___101521)){
args101469.push((arguments[i__35777__auto___101522]));

var G__101523 = (i__35777__auto___101522 + (1));
i__35777__auto___101522 = G__101523;
continue;
} else {
}
break;
}

var G__101471 = args101469.length;
switch (G__101471) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args101469.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__){
return (function (state_101496){
var state_val_101497 = (state_101496[(1)]);
if((state_val_101497 === (7))){
var inst_101478 = (state_101496[(2)]);
var state_101496__$1 = state_101496;
var statearr_101498_101525 = state_101496__$1;
(statearr_101498_101525[(2)] = inst_101478);

(statearr_101498_101525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (1))){
var inst_101472 = cljs.core.seq.call(null,coll);
var inst_101473 = inst_101472;
var state_101496__$1 = (function (){var statearr_101499 = state_101496;
(statearr_101499[(7)] = inst_101473);

return statearr_101499;
})();
var statearr_101500_101526 = state_101496__$1;
(statearr_101500_101526[(2)] = null);

(statearr_101500_101526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (4))){
var inst_101473 = (state_101496[(7)]);
var inst_101476 = cljs.core.first.call(null,inst_101473);
var state_101496__$1 = state_101496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_101496__$1,(7),ch,inst_101476);
} else {
if((state_val_101497 === (13))){
var inst_101490 = (state_101496[(2)]);
var state_101496__$1 = state_101496;
var statearr_101501_101527 = state_101496__$1;
(statearr_101501_101527[(2)] = inst_101490);

(statearr_101501_101527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (6))){
var inst_101481 = (state_101496[(2)]);
var state_101496__$1 = state_101496;
if(cljs.core.truth_(inst_101481)){
var statearr_101502_101528 = state_101496__$1;
(statearr_101502_101528[(1)] = (8));

} else {
var statearr_101503_101529 = state_101496__$1;
(statearr_101503_101529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (3))){
var inst_101494 = (state_101496[(2)]);
var state_101496__$1 = state_101496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101496__$1,inst_101494);
} else {
if((state_val_101497 === (12))){
var state_101496__$1 = state_101496;
var statearr_101504_101530 = state_101496__$1;
(statearr_101504_101530[(2)] = null);

(statearr_101504_101530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (2))){
var inst_101473 = (state_101496[(7)]);
var state_101496__$1 = state_101496;
if(cljs.core.truth_(inst_101473)){
var statearr_101505_101531 = state_101496__$1;
(statearr_101505_101531[(1)] = (4));

} else {
var statearr_101506_101532 = state_101496__$1;
(statearr_101506_101532[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (11))){
var inst_101487 = cljs.core.async.close_BANG_.call(null,ch);
var state_101496__$1 = state_101496;
var statearr_101507_101533 = state_101496__$1;
(statearr_101507_101533[(2)] = inst_101487);

(statearr_101507_101533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (9))){
var state_101496__$1 = state_101496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_101508_101534 = state_101496__$1;
(statearr_101508_101534[(1)] = (11));

} else {
var statearr_101509_101535 = state_101496__$1;
(statearr_101509_101535[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (5))){
var inst_101473 = (state_101496[(7)]);
var state_101496__$1 = state_101496;
var statearr_101510_101536 = state_101496__$1;
(statearr_101510_101536[(2)] = inst_101473);

(statearr_101510_101536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (10))){
var inst_101492 = (state_101496[(2)]);
var state_101496__$1 = state_101496;
var statearr_101511_101537 = state_101496__$1;
(statearr_101511_101537[(2)] = inst_101492);

(statearr_101511_101537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101497 === (8))){
var inst_101473 = (state_101496[(7)]);
var inst_101483 = cljs.core.next.call(null,inst_101473);
var inst_101473__$1 = inst_101483;
var state_101496__$1 = (function (){var statearr_101512 = state_101496;
(statearr_101512[(7)] = inst_101473__$1);

return statearr_101512;
})();
var statearr_101513_101538 = state_101496__$1;
(statearr_101513_101538[(2)] = null);

(statearr_101513_101538[(1)] = (2));


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
});})(c__48312__auto__))
;
return ((function (switch__48198__auto__,c__48312__auto__){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_101517 = [null,null,null,null,null,null,null,null];
(statearr_101517[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_101517[(1)] = (1));

return statearr_101517;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_101496){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101518){if((e101518 instanceof Object)){
var ex__48202__auto__ = e101518;
var statearr_101519_101539 = state_101496;
(statearr_101519_101539[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101540 = state_101496;
state_101496 = G__101540;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_101496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_101496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_101520 = f__48313__auto__.call(null);
(statearr_101520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_101520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__))
);

return c__48312__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__35273__auto__ = (((_ == null))?null:_);
var m__35274__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,_);
} else {
var m__35274__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__35273__auto__ = (((m == null))?null:m);
var m__35274__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35274__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__35273__auto__ = (((m == null))?null:m);
var m__35274__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,m,ch);
} else {
var m__35274__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__35273__auto__ = (((m == null))?null:m);
var m__35274__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,m);
} else {
var m__35274__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async101766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async101766 = (function (ch,cs,meta101767){
this.ch = ch;
this.cs = cs;
this.meta101767 = meta101767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async101766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_101768,meta101767__$1){
var self__ = this;
var _101768__$1 = this;
return (new cljs.core.async.t_cljs$core$async101766(self__.ch,self__.cs,meta101767__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async101766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_101768){
var self__ = this;
var _101768__$1 = this;
return self__.meta101767;
});})(cs))
;


cljs.core.async.t_cljs$core$async101766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async101766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async101766.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async101766.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async101766.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async101766.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async101766.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta101767","meta101767",777358494,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async101766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async101766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async101766";

cljs.core.async.t_cljs$core$async101766.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async101766");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async101766 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async101766(ch__$1,cs__$1,meta101767){
return (new cljs.core.async.t_cljs$core$async101766(ch__$1,cs__$1,meta101767));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async101766(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__48312__auto___101991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___101991,cs,m,dchan,dctr,done){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___101991,cs,m,dchan,dctr,done){
return (function (state_101903){
var state_val_101904 = (state_101903[(1)]);
if((state_val_101904 === (7))){
var inst_101899 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101905_101992 = state_101903__$1;
(statearr_101905_101992[(2)] = inst_101899);

(statearr_101905_101992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (20))){
var inst_101802 = (state_101903[(7)]);
var inst_101814 = cljs.core.first.call(null,inst_101802);
var inst_101815 = cljs.core.nth.call(null,inst_101814,(0),null);
var inst_101816 = cljs.core.nth.call(null,inst_101814,(1),null);
var state_101903__$1 = (function (){var statearr_101906 = state_101903;
(statearr_101906[(8)] = inst_101815);

return statearr_101906;
})();
if(cljs.core.truth_(inst_101816)){
var statearr_101907_101993 = state_101903__$1;
(statearr_101907_101993[(1)] = (22));

} else {
var statearr_101908_101994 = state_101903__$1;
(statearr_101908_101994[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (27))){
var inst_101771 = (state_101903[(9)]);
var inst_101851 = (state_101903[(10)]);
var inst_101844 = (state_101903[(11)]);
var inst_101846 = (state_101903[(12)]);
var inst_101851__$1 = cljs.core._nth.call(null,inst_101844,inst_101846);
var inst_101852 = cljs.core.async.put_BANG_.call(null,inst_101851__$1,inst_101771,done);
var state_101903__$1 = (function (){var statearr_101909 = state_101903;
(statearr_101909[(10)] = inst_101851__$1);

return statearr_101909;
})();
if(cljs.core.truth_(inst_101852)){
var statearr_101910_101995 = state_101903__$1;
(statearr_101910_101995[(1)] = (30));

} else {
var statearr_101911_101996 = state_101903__$1;
(statearr_101911_101996[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (1))){
var state_101903__$1 = state_101903;
var statearr_101912_101997 = state_101903__$1;
(statearr_101912_101997[(2)] = null);

(statearr_101912_101997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (24))){
var inst_101802 = (state_101903[(7)]);
var inst_101821 = (state_101903[(2)]);
var inst_101822 = cljs.core.next.call(null,inst_101802);
var inst_101780 = inst_101822;
var inst_101781 = null;
var inst_101782 = (0);
var inst_101783 = (0);
var state_101903__$1 = (function (){var statearr_101913 = state_101903;
(statearr_101913[(13)] = inst_101780);

(statearr_101913[(14)] = inst_101783);

(statearr_101913[(15)] = inst_101821);

(statearr_101913[(16)] = inst_101782);

(statearr_101913[(17)] = inst_101781);

return statearr_101913;
})();
var statearr_101914_101998 = state_101903__$1;
(statearr_101914_101998[(2)] = null);

(statearr_101914_101998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (39))){
var state_101903__$1 = state_101903;
var statearr_101918_101999 = state_101903__$1;
(statearr_101918_101999[(2)] = null);

(statearr_101918_101999[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (4))){
var inst_101771 = (state_101903[(9)]);
var inst_101771__$1 = (state_101903[(2)]);
var inst_101772 = (inst_101771__$1 == null);
var state_101903__$1 = (function (){var statearr_101919 = state_101903;
(statearr_101919[(9)] = inst_101771__$1);

return statearr_101919;
})();
if(cljs.core.truth_(inst_101772)){
var statearr_101920_102000 = state_101903__$1;
(statearr_101920_102000[(1)] = (5));

} else {
var statearr_101921_102001 = state_101903__$1;
(statearr_101921_102001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (15))){
var inst_101780 = (state_101903[(13)]);
var inst_101783 = (state_101903[(14)]);
var inst_101782 = (state_101903[(16)]);
var inst_101781 = (state_101903[(17)]);
var inst_101798 = (state_101903[(2)]);
var inst_101799 = (inst_101783 + (1));
var tmp101915 = inst_101780;
var tmp101916 = inst_101782;
var tmp101917 = inst_101781;
var inst_101780__$1 = tmp101915;
var inst_101781__$1 = tmp101917;
var inst_101782__$1 = tmp101916;
var inst_101783__$1 = inst_101799;
var state_101903__$1 = (function (){var statearr_101922 = state_101903;
(statearr_101922[(13)] = inst_101780__$1);

(statearr_101922[(14)] = inst_101783__$1);

(statearr_101922[(18)] = inst_101798);

(statearr_101922[(16)] = inst_101782__$1);

(statearr_101922[(17)] = inst_101781__$1);

return statearr_101922;
})();
var statearr_101923_102002 = state_101903__$1;
(statearr_101923_102002[(2)] = null);

(statearr_101923_102002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (21))){
var inst_101825 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101927_102003 = state_101903__$1;
(statearr_101927_102003[(2)] = inst_101825);

(statearr_101927_102003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (31))){
var inst_101851 = (state_101903[(10)]);
var inst_101855 = done.call(null,null);
var inst_101856 = cljs.core.async.untap_STAR_.call(null,m,inst_101851);
var state_101903__$1 = (function (){var statearr_101928 = state_101903;
(statearr_101928[(19)] = inst_101855);

return statearr_101928;
})();
var statearr_101929_102004 = state_101903__$1;
(statearr_101929_102004[(2)] = inst_101856);

(statearr_101929_102004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (32))){
var inst_101845 = (state_101903[(20)]);
var inst_101843 = (state_101903[(21)]);
var inst_101844 = (state_101903[(11)]);
var inst_101846 = (state_101903[(12)]);
var inst_101858 = (state_101903[(2)]);
var inst_101859 = (inst_101846 + (1));
var tmp101924 = inst_101845;
var tmp101925 = inst_101843;
var tmp101926 = inst_101844;
var inst_101843__$1 = tmp101925;
var inst_101844__$1 = tmp101926;
var inst_101845__$1 = tmp101924;
var inst_101846__$1 = inst_101859;
var state_101903__$1 = (function (){var statearr_101930 = state_101903;
(statearr_101930[(22)] = inst_101858);

(statearr_101930[(20)] = inst_101845__$1);

(statearr_101930[(21)] = inst_101843__$1);

(statearr_101930[(11)] = inst_101844__$1);

(statearr_101930[(12)] = inst_101846__$1);

return statearr_101930;
})();
var statearr_101931_102005 = state_101903__$1;
(statearr_101931_102005[(2)] = null);

(statearr_101931_102005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (40))){
var inst_101871 = (state_101903[(23)]);
var inst_101875 = done.call(null,null);
var inst_101876 = cljs.core.async.untap_STAR_.call(null,m,inst_101871);
var state_101903__$1 = (function (){var statearr_101932 = state_101903;
(statearr_101932[(24)] = inst_101875);

return statearr_101932;
})();
var statearr_101933_102006 = state_101903__$1;
(statearr_101933_102006[(2)] = inst_101876);

(statearr_101933_102006[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (33))){
var inst_101862 = (state_101903[(25)]);
var inst_101864 = cljs.core.chunked_seq_QMARK_.call(null,inst_101862);
var state_101903__$1 = state_101903;
if(inst_101864){
var statearr_101934_102007 = state_101903__$1;
(statearr_101934_102007[(1)] = (36));

} else {
var statearr_101935_102008 = state_101903__$1;
(statearr_101935_102008[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (13))){
var inst_101792 = (state_101903[(26)]);
var inst_101795 = cljs.core.async.close_BANG_.call(null,inst_101792);
var state_101903__$1 = state_101903;
var statearr_101936_102009 = state_101903__$1;
(statearr_101936_102009[(2)] = inst_101795);

(statearr_101936_102009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (22))){
var inst_101815 = (state_101903[(8)]);
var inst_101818 = cljs.core.async.close_BANG_.call(null,inst_101815);
var state_101903__$1 = state_101903;
var statearr_101937_102010 = state_101903__$1;
(statearr_101937_102010[(2)] = inst_101818);

(statearr_101937_102010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (36))){
var inst_101862 = (state_101903[(25)]);
var inst_101866 = cljs.core.chunk_first.call(null,inst_101862);
var inst_101867 = cljs.core.chunk_rest.call(null,inst_101862);
var inst_101868 = cljs.core.count.call(null,inst_101866);
var inst_101843 = inst_101867;
var inst_101844 = inst_101866;
var inst_101845 = inst_101868;
var inst_101846 = (0);
var state_101903__$1 = (function (){var statearr_101938 = state_101903;
(statearr_101938[(20)] = inst_101845);

(statearr_101938[(21)] = inst_101843);

(statearr_101938[(11)] = inst_101844);

(statearr_101938[(12)] = inst_101846);

return statearr_101938;
})();
var statearr_101939_102011 = state_101903__$1;
(statearr_101939_102011[(2)] = null);

(statearr_101939_102011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (41))){
var inst_101862 = (state_101903[(25)]);
var inst_101878 = (state_101903[(2)]);
var inst_101879 = cljs.core.next.call(null,inst_101862);
var inst_101843 = inst_101879;
var inst_101844 = null;
var inst_101845 = (0);
var inst_101846 = (0);
var state_101903__$1 = (function (){var statearr_101940 = state_101903;
(statearr_101940[(27)] = inst_101878);

(statearr_101940[(20)] = inst_101845);

(statearr_101940[(21)] = inst_101843);

(statearr_101940[(11)] = inst_101844);

(statearr_101940[(12)] = inst_101846);

return statearr_101940;
})();
var statearr_101941_102012 = state_101903__$1;
(statearr_101941_102012[(2)] = null);

(statearr_101941_102012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (43))){
var state_101903__$1 = state_101903;
var statearr_101942_102013 = state_101903__$1;
(statearr_101942_102013[(2)] = null);

(statearr_101942_102013[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (29))){
var inst_101887 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101943_102014 = state_101903__$1;
(statearr_101943_102014[(2)] = inst_101887);

(statearr_101943_102014[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (44))){
var inst_101896 = (state_101903[(2)]);
var state_101903__$1 = (function (){var statearr_101944 = state_101903;
(statearr_101944[(28)] = inst_101896);

return statearr_101944;
})();
var statearr_101945_102015 = state_101903__$1;
(statearr_101945_102015[(2)] = null);

(statearr_101945_102015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (6))){
var inst_101835 = (state_101903[(29)]);
var inst_101834 = cljs.core.deref.call(null,cs);
var inst_101835__$1 = cljs.core.keys.call(null,inst_101834);
var inst_101836 = cljs.core.count.call(null,inst_101835__$1);
var inst_101837 = cljs.core.reset_BANG_.call(null,dctr,inst_101836);
var inst_101842 = cljs.core.seq.call(null,inst_101835__$1);
var inst_101843 = inst_101842;
var inst_101844 = null;
var inst_101845 = (0);
var inst_101846 = (0);
var state_101903__$1 = (function (){var statearr_101946 = state_101903;
(statearr_101946[(20)] = inst_101845);

(statearr_101946[(30)] = inst_101837);

(statearr_101946[(29)] = inst_101835__$1);

(statearr_101946[(21)] = inst_101843);

(statearr_101946[(11)] = inst_101844);

(statearr_101946[(12)] = inst_101846);

return statearr_101946;
})();
var statearr_101947_102016 = state_101903__$1;
(statearr_101947_102016[(2)] = null);

(statearr_101947_102016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (28))){
var inst_101862 = (state_101903[(25)]);
var inst_101843 = (state_101903[(21)]);
var inst_101862__$1 = cljs.core.seq.call(null,inst_101843);
var state_101903__$1 = (function (){var statearr_101948 = state_101903;
(statearr_101948[(25)] = inst_101862__$1);

return statearr_101948;
})();
if(inst_101862__$1){
var statearr_101949_102017 = state_101903__$1;
(statearr_101949_102017[(1)] = (33));

} else {
var statearr_101950_102018 = state_101903__$1;
(statearr_101950_102018[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (25))){
var inst_101845 = (state_101903[(20)]);
var inst_101846 = (state_101903[(12)]);
var inst_101848 = (inst_101846 < inst_101845);
var inst_101849 = inst_101848;
var state_101903__$1 = state_101903;
if(cljs.core.truth_(inst_101849)){
var statearr_101951_102019 = state_101903__$1;
(statearr_101951_102019[(1)] = (27));

} else {
var statearr_101952_102020 = state_101903__$1;
(statearr_101952_102020[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (34))){
var state_101903__$1 = state_101903;
var statearr_101953_102021 = state_101903__$1;
(statearr_101953_102021[(2)] = null);

(statearr_101953_102021[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (17))){
var state_101903__$1 = state_101903;
var statearr_101954_102022 = state_101903__$1;
(statearr_101954_102022[(2)] = null);

(statearr_101954_102022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (3))){
var inst_101901 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101903__$1,inst_101901);
} else {
if((state_val_101904 === (12))){
var inst_101830 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101955_102023 = state_101903__$1;
(statearr_101955_102023[(2)] = inst_101830);

(statearr_101955_102023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (2))){
var state_101903__$1 = state_101903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101903__$1,(4),ch);
} else {
if((state_val_101904 === (23))){
var state_101903__$1 = state_101903;
var statearr_101956_102024 = state_101903__$1;
(statearr_101956_102024[(2)] = null);

(statearr_101956_102024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (35))){
var inst_101885 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101957_102025 = state_101903__$1;
(statearr_101957_102025[(2)] = inst_101885);

(statearr_101957_102025[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (19))){
var inst_101802 = (state_101903[(7)]);
var inst_101806 = cljs.core.chunk_first.call(null,inst_101802);
var inst_101807 = cljs.core.chunk_rest.call(null,inst_101802);
var inst_101808 = cljs.core.count.call(null,inst_101806);
var inst_101780 = inst_101807;
var inst_101781 = inst_101806;
var inst_101782 = inst_101808;
var inst_101783 = (0);
var state_101903__$1 = (function (){var statearr_101958 = state_101903;
(statearr_101958[(13)] = inst_101780);

(statearr_101958[(14)] = inst_101783);

(statearr_101958[(16)] = inst_101782);

(statearr_101958[(17)] = inst_101781);

return statearr_101958;
})();
var statearr_101959_102026 = state_101903__$1;
(statearr_101959_102026[(2)] = null);

(statearr_101959_102026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (11))){
var inst_101780 = (state_101903[(13)]);
var inst_101802 = (state_101903[(7)]);
var inst_101802__$1 = cljs.core.seq.call(null,inst_101780);
var state_101903__$1 = (function (){var statearr_101960 = state_101903;
(statearr_101960[(7)] = inst_101802__$1);

return statearr_101960;
})();
if(inst_101802__$1){
var statearr_101961_102027 = state_101903__$1;
(statearr_101961_102027[(1)] = (16));

} else {
var statearr_101962_102028 = state_101903__$1;
(statearr_101962_102028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (9))){
var inst_101832 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101963_102029 = state_101903__$1;
(statearr_101963_102029[(2)] = inst_101832);

(statearr_101963_102029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (5))){
var inst_101778 = cljs.core.deref.call(null,cs);
var inst_101779 = cljs.core.seq.call(null,inst_101778);
var inst_101780 = inst_101779;
var inst_101781 = null;
var inst_101782 = (0);
var inst_101783 = (0);
var state_101903__$1 = (function (){var statearr_101964 = state_101903;
(statearr_101964[(13)] = inst_101780);

(statearr_101964[(14)] = inst_101783);

(statearr_101964[(16)] = inst_101782);

(statearr_101964[(17)] = inst_101781);

return statearr_101964;
})();
var statearr_101965_102030 = state_101903__$1;
(statearr_101965_102030[(2)] = null);

(statearr_101965_102030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (14))){
var state_101903__$1 = state_101903;
var statearr_101966_102031 = state_101903__$1;
(statearr_101966_102031[(2)] = null);

(statearr_101966_102031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (45))){
var inst_101893 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101967_102032 = state_101903__$1;
(statearr_101967_102032[(2)] = inst_101893);

(statearr_101967_102032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (26))){
var inst_101835 = (state_101903[(29)]);
var inst_101889 = (state_101903[(2)]);
var inst_101890 = cljs.core.seq.call(null,inst_101835);
var state_101903__$1 = (function (){var statearr_101968 = state_101903;
(statearr_101968[(31)] = inst_101889);

return statearr_101968;
})();
if(inst_101890){
var statearr_101969_102033 = state_101903__$1;
(statearr_101969_102033[(1)] = (42));

} else {
var statearr_101970_102034 = state_101903__$1;
(statearr_101970_102034[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (16))){
var inst_101802 = (state_101903[(7)]);
var inst_101804 = cljs.core.chunked_seq_QMARK_.call(null,inst_101802);
var state_101903__$1 = state_101903;
if(inst_101804){
var statearr_101971_102035 = state_101903__$1;
(statearr_101971_102035[(1)] = (19));

} else {
var statearr_101972_102036 = state_101903__$1;
(statearr_101972_102036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (38))){
var inst_101882 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101973_102037 = state_101903__$1;
(statearr_101973_102037[(2)] = inst_101882);

(statearr_101973_102037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (30))){
var state_101903__$1 = state_101903;
var statearr_101974_102038 = state_101903__$1;
(statearr_101974_102038[(2)] = null);

(statearr_101974_102038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (10))){
var inst_101783 = (state_101903[(14)]);
var inst_101781 = (state_101903[(17)]);
var inst_101791 = cljs.core._nth.call(null,inst_101781,inst_101783);
var inst_101792 = cljs.core.nth.call(null,inst_101791,(0),null);
var inst_101793 = cljs.core.nth.call(null,inst_101791,(1),null);
var state_101903__$1 = (function (){var statearr_101975 = state_101903;
(statearr_101975[(26)] = inst_101792);

return statearr_101975;
})();
if(cljs.core.truth_(inst_101793)){
var statearr_101976_102039 = state_101903__$1;
(statearr_101976_102039[(1)] = (13));

} else {
var statearr_101977_102040 = state_101903__$1;
(statearr_101977_102040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (18))){
var inst_101828 = (state_101903[(2)]);
var state_101903__$1 = state_101903;
var statearr_101978_102041 = state_101903__$1;
(statearr_101978_102041[(2)] = inst_101828);

(statearr_101978_102041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (42))){
var state_101903__$1 = state_101903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101903__$1,(45),dchan);
} else {
if((state_val_101904 === (37))){
var inst_101862 = (state_101903[(25)]);
var inst_101771 = (state_101903[(9)]);
var inst_101871 = (state_101903[(23)]);
var inst_101871__$1 = cljs.core.first.call(null,inst_101862);
var inst_101872 = cljs.core.async.put_BANG_.call(null,inst_101871__$1,inst_101771,done);
var state_101903__$1 = (function (){var statearr_101979 = state_101903;
(statearr_101979[(23)] = inst_101871__$1);

return statearr_101979;
})();
if(cljs.core.truth_(inst_101872)){
var statearr_101980_102042 = state_101903__$1;
(statearr_101980_102042[(1)] = (39));

} else {
var statearr_101981_102043 = state_101903__$1;
(statearr_101981_102043[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101904 === (8))){
var inst_101783 = (state_101903[(14)]);
var inst_101782 = (state_101903[(16)]);
var inst_101785 = (inst_101783 < inst_101782);
var inst_101786 = inst_101785;
var state_101903__$1 = state_101903;
if(cljs.core.truth_(inst_101786)){
var statearr_101982_102044 = state_101903__$1;
(statearr_101982_102044[(1)] = (10));

} else {
var statearr_101983_102045 = state_101903__$1;
(statearr_101983_102045[(1)] = (11));

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
});})(c__48312__auto___101991,cs,m,dchan,dctr,done))
;
return ((function (switch__48198__auto__,c__48312__auto___101991,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48199__auto__ = null;
var cljs$core$async$mult_$_state_machine__48199__auto____0 = (function (){
var statearr_101987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_101987[(0)] = cljs$core$async$mult_$_state_machine__48199__auto__);

(statearr_101987[(1)] = (1));

return statearr_101987;
});
var cljs$core$async$mult_$_state_machine__48199__auto____1 = (function (state_101903){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_101903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e101988){if((e101988 instanceof Object)){
var ex__48202__auto__ = e101988;
var statearr_101989_102046 = state_101903;
(statearr_101989_102046[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102047 = state_101903;
state_101903 = G__102047;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48199__auto__ = function(state_101903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48199__auto____1.call(this,state_101903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48199__auto____0;
cljs$core$async$mult_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48199__auto____1;
return cljs$core$async$mult_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___101991,cs,m,dchan,dctr,done))
})();
var state__48314__auto__ = (function (){var statearr_101990 = f__48313__auto__.call(null);
(statearr_101990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___101991);

return statearr_101990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___101991,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args102048 = [];
var len__35776__auto___102051 = arguments.length;
var i__35777__auto___102052 = (0);
while(true){
if((i__35777__auto___102052 < len__35776__auto___102051)){
args102048.push((arguments[i__35777__auto___102052]));

var G__102053 = (i__35777__auto___102052 + (1));
i__35777__auto___102052 = G__102053;
continue;
} else {
}
break;
}

var G__102050 = args102048.length;
switch (G__102050) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102048.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__35273__auto__ = (((m == null))?null:m);
var m__35274__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,m,ch);
} else {
var m__35274__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__35273__auto__ = (((m == null))?null:m);
var m__35274__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,m,ch);
} else {
var m__35274__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__35273__auto__ = (((m == null))?null:m);
var m__35274__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,m);
} else {
var m__35274__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__35273__auto__ = (((m == null))?null:m);
var m__35274__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,m,state_map);
} else {
var m__35274__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__35273__auto__ = (((m == null))?null:m);
var m__35274__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,m,mode);
} else {
var m__35274__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35783__auto__ = [];
var len__35776__auto___102065 = arguments.length;
var i__35777__auto___102066 = (0);
while(true){
if((i__35777__auto___102066 < len__35776__auto___102065)){
args__35783__auto__.push((arguments[i__35777__auto___102066]));

var G__102067 = (i__35777__auto___102066 + (1));
i__35777__auto___102066 = G__102067;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((3) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35784__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__102059){
var map__102060 = p__102059;
var map__102060__$1 = ((((!((map__102060 == null)))?((((map__102060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__102060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__102060):map__102060);
var opts = map__102060__$1;
var statearr_102062_102068 = state;
(statearr_102062_102068[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__102060,map__102060__$1,opts){
return (function (val){
var statearr_102063_102069 = state;
(statearr_102063_102069[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__102060,map__102060__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_102064_102070 = state;
(statearr_102064_102070[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq102055){
var G__102056 = cljs.core.first.call(null,seq102055);
var seq102055__$1 = cljs.core.next.call(null,seq102055);
var G__102057 = cljs.core.first.call(null,seq102055__$1);
var seq102055__$2 = cljs.core.next.call(null,seq102055__$1);
var G__102058 = cljs.core.first.call(null,seq102055__$2);
var seq102055__$3 = cljs.core.next.call(null,seq102055__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__102056,G__102057,G__102058,seq102055__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async102238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async102238 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta102239){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta102239 = meta102239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_102240,meta102239__$1){
var self__ = this;
var _102240__$1 = this;
return (new cljs.core.async.t_cljs$core$async102238(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta102239__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_102240){
var self__ = this;
var _102240__$1 = this;
return self__.meta102239;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async102238.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async102238.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta102239","meta102239",-781273930,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async102238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async102238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async102238";

cljs.core.async.t_cljs$core$async102238.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async102238");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async102238 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async102238(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta102239){
return (new cljs.core.async.t_cljs$core$async102238(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta102239));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async102238(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48312__auto___102405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___102405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___102405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_102342){
var state_val_102343 = (state_102342[(1)]);
if((state_val_102343 === (7))){
var inst_102257 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
var statearr_102344_102406 = state_102342__$1;
(statearr_102344_102406[(2)] = inst_102257);

(statearr_102344_102406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (20))){
var inst_102269 = (state_102342[(7)]);
var state_102342__$1 = state_102342;
var statearr_102345_102407 = state_102342__$1;
(statearr_102345_102407[(2)] = inst_102269);

(statearr_102345_102407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (27))){
var state_102342__$1 = state_102342;
var statearr_102346_102408 = state_102342__$1;
(statearr_102346_102408[(2)] = null);

(statearr_102346_102408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (1))){
var inst_102244 = (state_102342[(8)]);
var inst_102244__$1 = calc_state.call(null);
var inst_102246 = (inst_102244__$1 == null);
var inst_102247 = cljs.core.not.call(null,inst_102246);
var state_102342__$1 = (function (){var statearr_102347 = state_102342;
(statearr_102347[(8)] = inst_102244__$1);

return statearr_102347;
})();
if(inst_102247){
var statearr_102348_102409 = state_102342__$1;
(statearr_102348_102409[(1)] = (2));

} else {
var statearr_102349_102410 = state_102342__$1;
(statearr_102349_102410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (24))){
var inst_102293 = (state_102342[(9)]);
var inst_102302 = (state_102342[(10)]);
var inst_102316 = (state_102342[(11)]);
var inst_102316__$1 = inst_102293.call(null,inst_102302);
var state_102342__$1 = (function (){var statearr_102350 = state_102342;
(statearr_102350[(11)] = inst_102316__$1);

return statearr_102350;
})();
if(cljs.core.truth_(inst_102316__$1)){
var statearr_102351_102411 = state_102342__$1;
(statearr_102351_102411[(1)] = (29));

} else {
var statearr_102352_102412 = state_102342__$1;
(statearr_102352_102412[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (4))){
var inst_102260 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
if(cljs.core.truth_(inst_102260)){
var statearr_102353_102413 = state_102342__$1;
(statearr_102353_102413[(1)] = (8));

} else {
var statearr_102354_102414 = state_102342__$1;
(statearr_102354_102414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (15))){
var inst_102287 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
if(cljs.core.truth_(inst_102287)){
var statearr_102355_102415 = state_102342__$1;
(statearr_102355_102415[(1)] = (19));

} else {
var statearr_102356_102416 = state_102342__$1;
(statearr_102356_102416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (21))){
var inst_102292 = (state_102342[(12)]);
var inst_102292__$1 = (state_102342[(2)]);
var inst_102293 = cljs.core.get.call(null,inst_102292__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_102294 = cljs.core.get.call(null,inst_102292__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_102295 = cljs.core.get.call(null,inst_102292__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_102342__$1 = (function (){var statearr_102357 = state_102342;
(statearr_102357[(12)] = inst_102292__$1);

(statearr_102357[(13)] = inst_102294);

(statearr_102357[(9)] = inst_102293);

return statearr_102357;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_102342__$1,(22),inst_102295);
} else {
if((state_val_102343 === (31))){
var inst_102324 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
if(cljs.core.truth_(inst_102324)){
var statearr_102358_102417 = state_102342__$1;
(statearr_102358_102417[(1)] = (32));

} else {
var statearr_102359_102418 = state_102342__$1;
(statearr_102359_102418[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (32))){
var inst_102301 = (state_102342[(14)]);
var state_102342__$1 = state_102342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102342__$1,(35),out,inst_102301);
} else {
if((state_val_102343 === (33))){
var inst_102292 = (state_102342[(12)]);
var inst_102269 = inst_102292;
var state_102342__$1 = (function (){var statearr_102360 = state_102342;
(statearr_102360[(7)] = inst_102269);

return statearr_102360;
})();
var statearr_102361_102419 = state_102342__$1;
(statearr_102361_102419[(2)] = null);

(statearr_102361_102419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (13))){
var inst_102269 = (state_102342[(7)]);
var inst_102276 = inst_102269.cljs$lang$protocol_mask$partition0$;
var inst_102277 = (inst_102276 & (64));
var inst_102278 = inst_102269.cljs$core$ISeq$;
var inst_102279 = (cljs.core.PROTOCOL_SENTINEL === inst_102278);
var inst_102280 = (inst_102277) || (inst_102279);
var state_102342__$1 = state_102342;
if(cljs.core.truth_(inst_102280)){
var statearr_102362_102420 = state_102342__$1;
(statearr_102362_102420[(1)] = (16));

} else {
var statearr_102363_102421 = state_102342__$1;
(statearr_102363_102421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (22))){
var inst_102302 = (state_102342[(10)]);
var inst_102301 = (state_102342[(14)]);
var inst_102300 = (state_102342[(2)]);
var inst_102301__$1 = cljs.core.nth.call(null,inst_102300,(0),null);
var inst_102302__$1 = cljs.core.nth.call(null,inst_102300,(1),null);
var inst_102303 = (inst_102301__$1 == null);
var inst_102304 = cljs.core._EQ_.call(null,inst_102302__$1,change);
var inst_102305 = (inst_102303) || (inst_102304);
var state_102342__$1 = (function (){var statearr_102364 = state_102342;
(statearr_102364[(10)] = inst_102302__$1);

(statearr_102364[(14)] = inst_102301__$1);

return statearr_102364;
})();
if(cljs.core.truth_(inst_102305)){
var statearr_102365_102422 = state_102342__$1;
(statearr_102365_102422[(1)] = (23));

} else {
var statearr_102366_102423 = state_102342__$1;
(statearr_102366_102423[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (36))){
var inst_102292 = (state_102342[(12)]);
var inst_102269 = inst_102292;
var state_102342__$1 = (function (){var statearr_102367 = state_102342;
(statearr_102367[(7)] = inst_102269);

return statearr_102367;
})();
var statearr_102368_102424 = state_102342__$1;
(statearr_102368_102424[(2)] = null);

(statearr_102368_102424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (29))){
var inst_102316 = (state_102342[(11)]);
var state_102342__$1 = state_102342;
var statearr_102369_102425 = state_102342__$1;
(statearr_102369_102425[(2)] = inst_102316);

(statearr_102369_102425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (6))){
var state_102342__$1 = state_102342;
var statearr_102370_102426 = state_102342__$1;
(statearr_102370_102426[(2)] = false);

(statearr_102370_102426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (28))){
var inst_102312 = (state_102342[(2)]);
var inst_102313 = calc_state.call(null);
var inst_102269 = inst_102313;
var state_102342__$1 = (function (){var statearr_102371 = state_102342;
(statearr_102371[(7)] = inst_102269);

(statearr_102371[(15)] = inst_102312);

return statearr_102371;
})();
var statearr_102372_102427 = state_102342__$1;
(statearr_102372_102427[(2)] = null);

(statearr_102372_102427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (25))){
var inst_102338 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
var statearr_102373_102428 = state_102342__$1;
(statearr_102373_102428[(2)] = inst_102338);

(statearr_102373_102428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (34))){
var inst_102336 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
var statearr_102374_102429 = state_102342__$1;
(statearr_102374_102429[(2)] = inst_102336);

(statearr_102374_102429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (17))){
var state_102342__$1 = state_102342;
var statearr_102375_102430 = state_102342__$1;
(statearr_102375_102430[(2)] = false);

(statearr_102375_102430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (3))){
var state_102342__$1 = state_102342;
var statearr_102376_102431 = state_102342__$1;
(statearr_102376_102431[(2)] = false);

(statearr_102376_102431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (12))){
var inst_102340 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102342__$1,inst_102340);
} else {
if((state_val_102343 === (2))){
var inst_102244 = (state_102342[(8)]);
var inst_102249 = inst_102244.cljs$lang$protocol_mask$partition0$;
var inst_102250 = (inst_102249 & (64));
var inst_102251 = inst_102244.cljs$core$ISeq$;
var inst_102252 = (cljs.core.PROTOCOL_SENTINEL === inst_102251);
var inst_102253 = (inst_102250) || (inst_102252);
var state_102342__$1 = state_102342;
if(cljs.core.truth_(inst_102253)){
var statearr_102377_102432 = state_102342__$1;
(statearr_102377_102432[(1)] = (5));

} else {
var statearr_102378_102433 = state_102342__$1;
(statearr_102378_102433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (23))){
var inst_102301 = (state_102342[(14)]);
var inst_102307 = (inst_102301 == null);
var state_102342__$1 = state_102342;
if(cljs.core.truth_(inst_102307)){
var statearr_102379_102434 = state_102342__$1;
(statearr_102379_102434[(1)] = (26));

} else {
var statearr_102380_102435 = state_102342__$1;
(statearr_102380_102435[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (35))){
var inst_102327 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
if(cljs.core.truth_(inst_102327)){
var statearr_102381_102436 = state_102342__$1;
(statearr_102381_102436[(1)] = (36));

} else {
var statearr_102382_102437 = state_102342__$1;
(statearr_102382_102437[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (19))){
var inst_102269 = (state_102342[(7)]);
var inst_102289 = cljs.core.apply.call(null,cljs.core.hash_map,inst_102269);
var state_102342__$1 = state_102342;
var statearr_102383_102438 = state_102342__$1;
(statearr_102383_102438[(2)] = inst_102289);

(statearr_102383_102438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (11))){
var inst_102269 = (state_102342[(7)]);
var inst_102273 = (inst_102269 == null);
var inst_102274 = cljs.core.not.call(null,inst_102273);
var state_102342__$1 = state_102342;
if(inst_102274){
var statearr_102384_102439 = state_102342__$1;
(statearr_102384_102439[(1)] = (13));

} else {
var statearr_102385_102440 = state_102342__$1;
(statearr_102385_102440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (9))){
var inst_102244 = (state_102342[(8)]);
var state_102342__$1 = state_102342;
var statearr_102386_102441 = state_102342__$1;
(statearr_102386_102441[(2)] = inst_102244);

(statearr_102386_102441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (5))){
var state_102342__$1 = state_102342;
var statearr_102387_102442 = state_102342__$1;
(statearr_102387_102442[(2)] = true);

(statearr_102387_102442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (14))){
var state_102342__$1 = state_102342;
var statearr_102388_102443 = state_102342__$1;
(statearr_102388_102443[(2)] = false);

(statearr_102388_102443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (26))){
var inst_102302 = (state_102342[(10)]);
var inst_102309 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_102302);
var state_102342__$1 = state_102342;
var statearr_102389_102444 = state_102342__$1;
(statearr_102389_102444[(2)] = inst_102309);

(statearr_102389_102444[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (16))){
var state_102342__$1 = state_102342;
var statearr_102390_102445 = state_102342__$1;
(statearr_102390_102445[(2)] = true);

(statearr_102390_102445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (38))){
var inst_102332 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
var statearr_102391_102446 = state_102342__$1;
(statearr_102391_102446[(2)] = inst_102332);

(statearr_102391_102446[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (30))){
var inst_102294 = (state_102342[(13)]);
var inst_102293 = (state_102342[(9)]);
var inst_102302 = (state_102342[(10)]);
var inst_102319 = cljs.core.empty_QMARK_.call(null,inst_102293);
var inst_102320 = inst_102294.call(null,inst_102302);
var inst_102321 = cljs.core.not.call(null,inst_102320);
var inst_102322 = (inst_102319) && (inst_102321);
var state_102342__$1 = state_102342;
var statearr_102392_102447 = state_102342__$1;
(statearr_102392_102447[(2)] = inst_102322);

(statearr_102392_102447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (10))){
var inst_102244 = (state_102342[(8)]);
var inst_102265 = (state_102342[(2)]);
var inst_102266 = cljs.core.get.call(null,inst_102265,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_102267 = cljs.core.get.call(null,inst_102265,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_102268 = cljs.core.get.call(null,inst_102265,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_102269 = inst_102244;
var state_102342__$1 = (function (){var statearr_102393 = state_102342;
(statearr_102393[(16)] = inst_102267);

(statearr_102393[(17)] = inst_102266);

(statearr_102393[(7)] = inst_102269);

(statearr_102393[(18)] = inst_102268);

return statearr_102393;
})();
var statearr_102394_102448 = state_102342__$1;
(statearr_102394_102448[(2)] = null);

(statearr_102394_102448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (18))){
var inst_102284 = (state_102342[(2)]);
var state_102342__$1 = state_102342;
var statearr_102395_102449 = state_102342__$1;
(statearr_102395_102449[(2)] = inst_102284);

(statearr_102395_102449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (37))){
var state_102342__$1 = state_102342;
var statearr_102396_102450 = state_102342__$1;
(statearr_102396_102450[(2)] = null);

(statearr_102396_102450[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102343 === (8))){
var inst_102244 = (state_102342[(8)]);
var inst_102262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_102244);
var state_102342__$1 = state_102342;
var statearr_102397_102451 = state_102342__$1;
(statearr_102397_102451[(2)] = inst_102262);

(statearr_102397_102451[(1)] = (10));


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
});})(c__48312__auto___102405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48198__auto__,c__48312__auto___102405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48199__auto__ = null;
var cljs$core$async$mix_$_state_machine__48199__auto____0 = (function (){
var statearr_102401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102401[(0)] = cljs$core$async$mix_$_state_machine__48199__auto__);

(statearr_102401[(1)] = (1));

return statearr_102401;
});
var cljs$core$async$mix_$_state_machine__48199__auto____1 = (function (state_102342){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_102342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e102402){if((e102402 instanceof Object)){
var ex__48202__auto__ = e102402;
var statearr_102403_102452 = state_102342;
(statearr_102403_102452[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102453 = state_102342;
state_102342 = G__102453;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48199__auto__ = function(state_102342){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48199__auto____1.call(this,state_102342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48199__auto____0;
cljs$core$async$mix_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48199__auto____1;
return cljs$core$async$mix_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___102405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48314__auto__ = (function (){var statearr_102404 = f__48313__auto__.call(null);
(statearr_102404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___102405);

return statearr_102404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___102405,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__35273__auto__ = (((p == null))?null:p);
var m__35274__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35274__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__35273__auto__ = (((p == null))?null:p);
var m__35274__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,p,v,ch);
} else {
var m__35274__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args102454 = [];
var len__35776__auto___102457 = arguments.length;
var i__35777__auto___102458 = (0);
while(true){
if((i__35777__auto___102458 < len__35776__auto___102457)){
args102454.push((arguments[i__35777__auto___102458]));

var G__102459 = (i__35777__auto___102458 + (1));
i__35777__auto___102458 = G__102459;
continue;
} else {
}
break;
}

var G__102456 = args102454.length;
switch (G__102456) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102454.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35273__auto__ = (((p == null))?null:p);
var m__35274__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,p);
} else {
var m__35274__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__35273__auto__ = (((p == null))?null:p);
var m__35274__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,p,v);
} else {
var m__35274__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args102462 = [];
var len__35776__auto___102587 = arguments.length;
var i__35777__auto___102588 = (0);
while(true){
if((i__35777__auto___102588 < len__35776__auto___102587)){
args102462.push((arguments[i__35777__auto___102588]));

var G__102589 = (i__35777__auto___102588 + (1));
i__35777__auto___102588 = G__102589;
continue;
} else {
}
break;
}

var G__102464 = args102462.length;
switch (G__102464) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102462.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34555__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34555__auto__,mults){
return (function (p1__102461_SHARP_){
if(cljs.core.truth_(p1__102461_SHARP_.call(null,topic))){
return p1__102461_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__102461_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34555__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async102465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async102465 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta102466){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta102466 = meta102466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_102467,meta102466__$1){
var self__ = this;
var _102467__$1 = this;
return (new cljs.core.async.t_cljs$core$async102465(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta102466__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_102467){
var self__ = this;
var _102467__$1 = this;
return self__.meta102466;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async102465.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async102465.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta102466","meta102466",-1329066740,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async102465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async102465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async102465";

cljs.core.async.t_cljs$core$async102465.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async102465");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async102465 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async102465(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta102466){
return (new cljs.core.async.t_cljs$core$async102465(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta102466));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async102465(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48312__auto___102591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___102591,mults,ensure_mult,p){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___102591,mults,ensure_mult,p){
return (function (state_102539){
var state_val_102540 = (state_102539[(1)]);
if((state_val_102540 === (7))){
var inst_102535 = (state_102539[(2)]);
var state_102539__$1 = state_102539;
var statearr_102541_102592 = state_102539__$1;
(statearr_102541_102592[(2)] = inst_102535);

(statearr_102541_102592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (20))){
var state_102539__$1 = state_102539;
var statearr_102542_102593 = state_102539__$1;
(statearr_102542_102593[(2)] = null);

(statearr_102542_102593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (1))){
var state_102539__$1 = state_102539;
var statearr_102543_102594 = state_102539__$1;
(statearr_102543_102594[(2)] = null);

(statearr_102543_102594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (24))){
var inst_102518 = (state_102539[(7)]);
var inst_102527 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_102518);
var state_102539__$1 = state_102539;
var statearr_102544_102595 = state_102539__$1;
(statearr_102544_102595[(2)] = inst_102527);

(statearr_102544_102595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (4))){
var inst_102470 = (state_102539[(8)]);
var inst_102470__$1 = (state_102539[(2)]);
var inst_102471 = (inst_102470__$1 == null);
var state_102539__$1 = (function (){var statearr_102545 = state_102539;
(statearr_102545[(8)] = inst_102470__$1);

return statearr_102545;
})();
if(cljs.core.truth_(inst_102471)){
var statearr_102546_102596 = state_102539__$1;
(statearr_102546_102596[(1)] = (5));

} else {
var statearr_102547_102597 = state_102539__$1;
(statearr_102547_102597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (15))){
var inst_102512 = (state_102539[(2)]);
var state_102539__$1 = state_102539;
var statearr_102548_102598 = state_102539__$1;
(statearr_102548_102598[(2)] = inst_102512);

(statearr_102548_102598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (21))){
var inst_102532 = (state_102539[(2)]);
var state_102539__$1 = (function (){var statearr_102549 = state_102539;
(statearr_102549[(9)] = inst_102532);

return statearr_102549;
})();
var statearr_102550_102599 = state_102539__$1;
(statearr_102550_102599[(2)] = null);

(statearr_102550_102599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (13))){
var inst_102494 = (state_102539[(10)]);
var inst_102496 = cljs.core.chunked_seq_QMARK_.call(null,inst_102494);
var state_102539__$1 = state_102539;
if(inst_102496){
var statearr_102551_102600 = state_102539__$1;
(statearr_102551_102600[(1)] = (16));

} else {
var statearr_102552_102601 = state_102539__$1;
(statearr_102552_102601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (22))){
var inst_102524 = (state_102539[(2)]);
var state_102539__$1 = state_102539;
if(cljs.core.truth_(inst_102524)){
var statearr_102553_102602 = state_102539__$1;
(statearr_102553_102602[(1)] = (23));

} else {
var statearr_102554_102603 = state_102539__$1;
(statearr_102554_102603[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (6))){
var inst_102520 = (state_102539[(11)]);
var inst_102470 = (state_102539[(8)]);
var inst_102518 = (state_102539[(7)]);
var inst_102518__$1 = topic_fn.call(null,inst_102470);
var inst_102519 = cljs.core.deref.call(null,mults);
var inst_102520__$1 = cljs.core.get.call(null,inst_102519,inst_102518__$1);
var state_102539__$1 = (function (){var statearr_102555 = state_102539;
(statearr_102555[(11)] = inst_102520__$1);

(statearr_102555[(7)] = inst_102518__$1);

return statearr_102555;
})();
if(cljs.core.truth_(inst_102520__$1)){
var statearr_102556_102604 = state_102539__$1;
(statearr_102556_102604[(1)] = (19));

} else {
var statearr_102557_102605 = state_102539__$1;
(statearr_102557_102605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (25))){
var inst_102529 = (state_102539[(2)]);
var state_102539__$1 = state_102539;
var statearr_102558_102606 = state_102539__$1;
(statearr_102558_102606[(2)] = inst_102529);

(statearr_102558_102606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (17))){
var inst_102494 = (state_102539[(10)]);
var inst_102503 = cljs.core.first.call(null,inst_102494);
var inst_102504 = cljs.core.async.muxch_STAR_.call(null,inst_102503);
var inst_102505 = cljs.core.async.close_BANG_.call(null,inst_102504);
var inst_102506 = cljs.core.next.call(null,inst_102494);
var inst_102480 = inst_102506;
var inst_102481 = null;
var inst_102482 = (0);
var inst_102483 = (0);
var state_102539__$1 = (function (){var statearr_102559 = state_102539;
(statearr_102559[(12)] = inst_102482);

(statearr_102559[(13)] = inst_102481);

(statearr_102559[(14)] = inst_102480);

(statearr_102559[(15)] = inst_102483);

(statearr_102559[(16)] = inst_102505);

return statearr_102559;
})();
var statearr_102560_102607 = state_102539__$1;
(statearr_102560_102607[(2)] = null);

(statearr_102560_102607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (3))){
var inst_102537 = (state_102539[(2)]);
var state_102539__$1 = state_102539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102539__$1,inst_102537);
} else {
if((state_val_102540 === (12))){
var inst_102514 = (state_102539[(2)]);
var state_102539__$1 = state_102539;
var statearr_102561_102608 = state_102539__$1;
(statearr_102561_102608[(2)] = inst_102514);

(statearr_102561_102608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (2))){
var state_102539__$1 = state_102539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102539__$1,(4),ch);
} else {
if((state_val_102540 === (23))){
var state_102539__$1 = state_102539;
var statearr_102562_102609 = state_102539__$1;
(statearr_102562_102609[(2)] = null);

(statearr_102562_102609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (19))){
var inst_102520 = (state_102539[(11)]);
var inst_102470 = (state_102539[(8)]);
var inst_102522 = cljs.core.async.muxch_STAR_.call(null,inst_102520);
var state_102539__$1 = state_102539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102539__$1,(22),inst_102522,inst_102470);
} else {
if((state_val_102540 === (11))){
var inst_102480 = (state_102539[(14)]);
var inst_102494 = (state_102539[(10)]);
var inst_102494__$1 = cljs.core.seq.call(null,inst_102480);
var state_102539__$1 = (function (){var statearr_102563 = state_102539;
(statearr_102563[(10)] = inst_102494__$1);

return statearr_102563;
})();
if(inst_102494__$1){
var statearr_102564_102610 = state_102539__$1;
(statearr_102564_102610[(1)] = (13));

} else {
var statearr_102565_102611 = state_102539__$1;
(statearr_102565_102611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (9))){
var inst_102516 = (state_102539[(2)]);
var state_102539__$1 = state_102539;
var statearr_102566_102612 = state_102539__$1;
(statearr_102566_102612[(2)] = inst_102516);

(statearr_102566_102612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (5))){
var inst_102477 = cljs.core.deref.call(null,mults);
var inst_102478 = cljs.core.vals.call(null,inst_102477);
var inst_102479 = cljs.core.seq.call(null,inst_102478);
var inst_102480 = inst_102479;
var inst_102481 = null;
var inst_102482 = (0);
var inst_102483 = (0);
var state_102539__$1 = (function (){var statearr_102567 = state_102539;
(statearr_102567[(12)] = inst_102482);

(statearr_102567[(13)] = inst_102481);

(statearr_102567[(14)] = inst_102480);

(statearr_102567[(15)] = inst_102483);

return statearr_102567;
})();
var statearr_102568_102613 = state_102539__$1;
(statearr_102568_102613[(2)] = null);

(statearr_102568_102613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (14))){
var state_102539__$1 = state_102539;
var statearr_102572_102614 = state_102539__$1;
(statearr_102572_102614[(2)] = null);

(statearr_102572_102614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (16))){
var inst_102494 = (state_102539[(10)]);
var inst_102498 = cljs.core.chunk_first.call(null,inst_102494);
var inst_102499 = cljs.core.chunk_rest.call(null,inst_102494);
var inst_102500 = cljs.core.count.call(null,inst_102498);
var inst_102480 = inst_102499;
var inst_102481 = inst_102498;
var inst_102482 = inst_102500;
var inst_102483 = (0);
var state_102539__$1 = (function (){var statearr_102573 = state_102539;
(statearr_102573[(12)] = inst_102482);

(statearr_102573[(13)] = inst_102481);

(statearr_102573[(14)] = inst_102480);

(statearr_102573[(15)] = inst_102483);

return statearr_102573;
})();
var statearr_102574_102615 = state_102539__$1;
(statearr_102574_102615[(2)] = null);

(statearr_102574_102615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (10))){
var inst_102482 = (state_102539[(12)]);
var inst_102481 = (state_102539[(13)]);
var inst_102480 = (state_102539[(14)]);
var inst_102483 = (state_102539[(15)]);
var inst_102488 = cljs.core._nth.call(null,inst_102481,inst_102483);
var inst_102489 = cljs.core.async.muxch_STAR_.call(null,inst_102488);
var inst_102490 = cljs.core.async.close_BANG_.call(null,inst_102489);
var inst_102491 = (inst_102483 + (1));
var tmp102569 = inst_102482;
var tmp102570 = inst_102481;
var tmp102571 = inst_102480;
var inst_102480__$1 = tmp102571;
var inst_102481__$1 = tmp102570;
var inst_102482__$1 = tmp102569;
var inst_102483__$1 = inst_102491;
var state_102539__$1 = (function (){var statearr_102575 = state_102539;
(statearr_102575[(17)] = inst_102490);

(statearr_102575[(12)] = inst_102482__$1);

(statearr_102575[(13)] = inst_102481__$1);

(statearr_102575[(14)] = inst_102480__$1);

(statearr_102575[(15)] = inst_102483__$1);

return statearr_102575;
})();
var statearr_102576_102616 = state_102539__$1;
(statearr_102576_102616[(2)] = null);

(statearr_102576_102616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (18))){
var inst_102509 = (state_102539[(2)]);
var state_102539__$1 = state_102539;
var statearr_102577_102617 = state_102539__$1;
(statearr_102577_102617[(2)] = inst_102509);

(statearr_102577_102617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102540 === (8))){
var inst_102482 = (state_102539[(12)]);
var inst_102483 = (state_102539[(15)]);
var inst_102485 = (inst_102483 < inst_102482);
var inst_102486 = inst_102485;
var state_102539__$1 = state_102539;
if(cljs.core.truth_(inst_102486)){
var statearr_102578_102618 = state_102539__$1;
(statearr_102578_102618[(1)] = (10));

} else {
var statearr_102579_102619 = state_102539__$1;
(statearr_102579_102619[(1)] = (11));

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
});})(c__48312__auto___102591,mults,ensure_mult,p))
;
return ((function (switch__48198__auto__,c__48312__auto___102591,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_102583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102583[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_102583[(1)] = (1));

return statearr_102583;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_102539){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_102539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e102584){if((e102584 instanceof Object)){
var ex__48202__auto__ = e102584;
var statearr_102585_102620 = state_102539;
(statearr_102585_102620[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102621 = state_102539;
state_102539 = G__102621;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_102539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_102539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___102591,mults,ensure_mult,p))
})();
var state__48314__auto__ = (function (){var statearr_102586 = f__48313__auto__.call(null);
(statearr_102586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___102591);

return statearr_102586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___102591,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args102622 = [];
var len__35776__auto___102625 = arguments.length;
var i__35777__auto___102626 = (0);
while(true){
if((i__35777__auto___102626 < len__35776__auto___102625)){
args102622.push((arguments[i__35777__auto___102626]));

var G__102627 = (i__35777__auto___102626 + (1));
i__35777__auto___102626 = G__102627;
continue;
} else {
}
break;
}

var G__102624 = args102622.length;
switch (G__102624) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102622.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args102629 = [];
var len__35776__auto___102632 = arguments.length;
var i__35777__auto___102633 = (0);
while(true){
if((i__35777__auto___102633 < len__35776__auto___102632)){
args102629.push((arguments[i__35777__auto___102633]));

var G__102634 = (i__35777__auto___102633 + (1));
i__35777__auto___102633 = G__102634;
continue;
} else {
}
break;
}

var G__102631 = args102629.length;
switch (G__102631) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102629.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args102636 = [];
var len__35776__auto___102707 = arguments.length;
var i__35777__auto___102708 = (0);
while(true){
if((i__35777__auto___102708 < len__35776__auto___102707)){
args102636.push((arguments[i__35777__auto___102708]));

var G__102709 = (i__35777__auto___102708 + (1));
i__35777__auto___102708 = G__102709;
continue;
} else {
}
break;
}

var G__102638 = args102636.length;
switch (G__102638) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102636.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__48312__auto___102711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___102711,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___102711,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_102677){
var state_val_102678 = (state_102677[(1)]);
if((state_val_102678 === (7))){
var state_102677__$1 = state_102677;
var statearr_102679_102712 = state_102677__$1;
(statearr_102679_102712[(2)] = null);

(statearr_102679_102712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (1))){
var state_102677__$1 = state_102677;
var statearr_102680_102713 = state_102677__$1;
(statearr_102680_102713[(2)] = null);

(statearr_102680_102713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (4))){
var inst_102641 = (state_102677[(7)]);
var inst_102643 = (inst_102641 < cnt);
var state_102677__$1 = state_102677;
if(cljs.core.truth_(inst_102643)){
var statearr_102681_102714 = state_102677__$1;
(statearr_102681_102714[(1)] = (6));

} else {
var statearr_102682_102715 = state_102677__$1;
(statearr_102682_102715[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (15))){
var inst_102673 = (state_102677[(2)]);
var state_102677__$1 = state_102677;
var statearr_102683_102716 = state_102677__$1;
(statearr_102683_102716[(2)] = inst_102673);

(statearr_102683_102716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (13))){
var inst_102666 = cljs.core.async.close_BANG_.call(null,out);
var state_102677__$1 = state_102677;
var statearr_102684_102717 = state_102677__$1;
(statearr_102684_102717[(2)] = inst_102666);

(statearr_102684_102717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (6))){
var state_102677__$1 = state_102677;
var statearr_102685_102718 = state_102677__$1;
(statearr_102685_102718[(2)] = null);

(statearr_102685_102718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (3))){
var inst_102675 = (state_102677[(2)]);
var state_102677__$1 = state_102677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102677__$1,inst_102675);
} else {
if((state_val_102678 === (12))){
var inst_102663 = (state_102677[(8)]);
var inst_102663__$1 = (state_102677[(2)]);
var inst_102664 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_102663__$1);
var state_102677__$1 = (function (){var statearr_102686 = state_102677;
(statearr_102686[(8)] = inst_102663__$1);

return statearr_102686;
})();
if(cljs.core.truth_(inst_102664)){
var statearr_102687_102719 = state_102677__$1;
(statearr_102687_102719[(1)] = (13));

} else {
var statearr_102688_102720 = state_102677__$1;
(statearr_102688_102720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (2))){
var inst_102640 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_102641 = (0);
var state_102677__$1 = (function (){var statearr_102689 = state_102677;
(statearr_102689[(7)] = inst_102641);

(statearr_102689[(9)] = inst_102640);

return statearr_102689;
})();
var statearr_102690_102721 = state_102677__$1;
(statearr_102690_102721[(2)] = null);

(statearr_102690_102721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (11))){
var inst_102641 = (state_102677[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_102677,(10),Object,null,(9));
var inst_102650 = chs__$1.call(null,inst_102641);
var inst_102651 = done.call(null,inst_102641);
var inst_102652 = cljs.core.async.take_BANG_.call(null,inst_102650,inst_102651);
var state_102677__$1 = state_102677;
var statearr_102691_102722 = state_102677__$1;
(statearr_102691_102722[(2)] = inst_102652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (9))){
var inst_102641 = (state_102677[(7)]);
var inst_102654 = (state_102677[(2)]);
var inst_102655 = (inst_102641 + (1));
var inst_102641__$1 = inst_102655;
var state_102677__$1 = (function (){var statearr_102692 = state_102677;
(statearr_102692[(10)] = inst_102654);

(statearr_102692[(7)] = inst_102641__$1);

return statearr_102692;
})();
var statearr_102693_102723 = state_102677__$1;
(statearr_102693_102723[(2)] = null);

(statearr_102693_102723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (5))){
var inst_102661 = (state_102677[(2)]);
var state_102677__$1 = (function (){var statearr_102694 = state_102677;
(statearr_102694[(11)] = inst_102661);

return statearr_102694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102677__$1,(12),dchan);
} else {
if((state_val_102678 === (14))){
var inst_102663 = (state_102677[(8)]);
var inst_102668 = cljs.core.apply.call(null,f,inst_102663);
var state_102677__$1 = state_102677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102677__$1,(16),out,inst_102668);
} else {
if((state_val_102678 === (16))){
var inst_102670 = (state_102677[(2)]);
var state_102677__$1 = (function (){var statearr_102695 = state_102677;
(statearr_102695[(12)] = inst_102670);

return statearr_102695;
})();
var statearr_102696_102724 = state_102677__$1;
(statearr_102696_102724[(2)] = null);

(statearr_102696_102724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (10))){
var inst_102645 = (state_102677[(2)]);
var inst_102646 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_102677__$1 = (function (){var statearr_102697 = state_102677;
(statearr_102697[(13)] = inst_102645);

return statearr_102697;
})();
var statearr_102698_102725 = state_102677__$1;
(statearr_102698_102725[(2)] = inst_102646);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102678 === (8))){
var inst_102659 = (state_102677[(2)]);
var state_102677__$1 = state_102677;
var statearr_102699_102726 = state_102677__$1;
(statearr_102699_102726[(2)] = inst_102659);

(statearr_102699_102726[(1)] = (5));


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
});})(c__48312__auto___102711,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48198__auto__,c__48312__auto___102711,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_102703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102703[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_102703[(1)] = (1));

return statearr_102703;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_102677){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_102677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e102704){if((e102704 instanceof Object)){
var ex__48202__auto__ = e102704;
var statearr_102705_102727 = state_102677;
(statearr_102705_102727[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102728 = state_102677;
state_102677 = G__102728;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_102677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_102677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___102711,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48314__auto__ = (function (){var statearr_102706 = f__48313__auto__.call(null);
(statearr_102706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___102711);

return statearr_102706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___102711,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args102730 = [];
var len__35776__auto___102788 = arguments.length;
var i__35777__auto___102789 = (0);
while(true){
if((i__35777__auto___102789 < len__35776__auto___102788)){
args102730.push((arguments[i__35777__auto___102789]));

var G__102790 = (i__35777__auto___102789 + (1));
i__35777__auto___102789 = G__102790;
continue;
} else {
}
break;
}

var G__102732 = args102730.length;
switch (G__102732) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102730.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___102792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___102792,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___102792,out){
return (function (state_102764){
var state_val_102765 = (state_102764[(1)]);
if((state_val_102765 === (7))){
var inst_102743 = (state_102764[(7)]);
var inst_102744 = (state_102764[(8)]);
var inst_102743__$1 = (state_102764[(2)]);
var inst_102744__$1 = cljs.core.nth.call(null,inst_102743__$1,(0),null);
var inst_102745 = cljs.core.nth.call(null,inst_102743__$1,(1),null);
var inst_102746 = (inst_102744__$1 == null);
var state_102764__$1 = (function (){var statearr_102766 = state_102764;
(statearr_102766[(7)] = inst_102743__$1);

(statearr_102766[(8)] = inst_102744__$1);

(statearr_102766[(9)] = inst_102745);

return statearr_102766;
})();
if(cljs.core.truth_(inst_102746)){
var statearr_102767_102793 = state_102764__$1;
(statearr_102767_102793[(1)] = (8));

} else {
var statearr_102768_102794 = state_102764__$1;
(statearr_102768_102794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102765 === (1))){
var inst_102733 = cljs.core.vec.call(null,chs);
var inst_102734 = inst_102733;
var state_102764__$1 = (function (){var statearr_102769 = state_102764;
(statearr_102769[(10)] = inst_102734);

return statearr_102769;
})();
var statearr_102770_102795 = state_102764__$1;
(statearr_102770_102795[(2)] = null);

(statearr_102770_102795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102765 === (4))){
var inst_102734 = (state_102764[(10)]);
var state_102764__$1 = state_102764;
return cljs.core.async.ioc_alts_BANG_.call(null,state_102764__$1,(7),inst_102734);
} else {
if((state_val_102765 === (6))){
var inst_102760 = (state_102764[(2)]);
var state_102764__$1 = state_102764;
var statearr_102771_102796 = state_102764__$1;
(statearr_102771_102796[(2)] = inst_102760);

(statearr_102771_102796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102765 === (3))){
var inst_102762 = (state_102764[(2)]);
var state_102764__$1 = state_102764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102764__$1,inst_102762);
} else {
if((state_val_102765 === (2))){
var inst_102734 = (state_102764[(10)]);
var inst_102736 = cljs.core.count.call(null,inst_102734);
var inst_102737 = (inst_102736 > (0));
var state_102764__$1 = state_102764;
if(cljs.core.truth_(inst_102737)){
var statearr_102773_102797 = state_102764__$1;
(statearr_102773_102797[(1)] = (4));

} else {
var statearr_102774_102798 = state_102764__$1;
(statearr_102774_102798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102765 === (11))){
var inst_102734 = (state_102764[(10)]);
var inst_102753 = (state_102764[(2)]);
var tmp102772 = inst_102734;
var inst_102734__$1 = tmp102772;
var state_102764__$1 = (function (){var statearr_102775 = state_102764;
(statearr_102775[(11)] = inst_102753);

(statearr_102775[(10)] = inst_102734__$1);

return statearr_102775;
})();
var statearr_102776_102799 = state_102764__$1;
(statearr_102776_102799[(2)] = null);

(statearr_102776_102799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102765 === (9))){
var inst_102744 = (state_102764[(8)]);
var state_102764__$1 = state_102764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102764__$1,(11),out,inst_102744);
} else {
if((state_val_102765 === (5))){
var inst_102758 = cljs.core.async.close_BANG_.call(null,out);
var state_102764__$1 = state_102764;
var statearr_102777_102800 = state_102764__$1;
(statearr_102777_102800[(2)] = inst_102758);

(statearr_102777_102800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102765 === (10))){
var inst_102756 = (state_102764[(2)]);
var state_102764__$1 = state_102764;
var statearr_102778_102801 = state_102764__$1;
(statearr_102778_102801[(2)] = inst_102756);

(statearr_102778_102801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102765 === (8))){
var inst_102743 = (state_102764[(7)]);
var inst_102744 = (state_102764[(8)]);
var inst_102734 = (state_102764[(10)]);
var inst_102745 = (state_102764[(9)]);
var inst_102748 = (function (){var cs = inst_102734;
var vec__102739 = inst_102743;
var v = inst_102744;
var c = inst_102745;
return ((function (cs,vec__102739,v,c,inst_102743,inst_102744,inst_102734,inst_102745,state_val_102765,c__48312__auto___102792,out){
return (function (p1__102729_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__102729_SHARP_);
});
;})(cs,vec__102739,v,c,inst_102743,inst_102744,inst_102734,inst_102745,state_val_102765,c__48312__auto___102792,out))
})();
var inst_102749 = cljs.core.filterv.call(null,inst_102748,inst_102734);
var inst_102734__$1 = inst_102749;
var state_102764__$1 = (function (){var statearr_102779 = state_102764;
(statearr_102779[(10)] = inst_102734__$1);

return statearr_102779;
})();
var statearr_102780_102802 = state_102764__$1;
(statearr_102780_102802[(2)] = null);

(statearr_102780_102802[(1)] = (2));


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
});})(c__48312__auto___102792,out))
;
return ((function (switch__48198__auto__,c__48312__auto___102792,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_102784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102784[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_102784[(1)] = (1));

return statearr_102784;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_102764){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_102764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e102785){if((e102785 instanceof Object)){
var ex__48202__auto__ = e102785;
var statearr_102786_102803 = state_102764;
(statearr_102786_102803[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102804 = state_102764;
state_102764 = G__102804;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_102764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_102764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___102792,out))
})();
var state__48314__auto__ = (function (){var statearr_102787 = f__48313__auto__.call(null);
(statearr_102787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___102792);

return statearr_102787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___102792,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args102805 = [];
var len__35776__auto___102854 = arguments.length;
var i__35777__auto___102855 = (0);
while(true){
if((i__35777__auto___102855 < len__35776__auto___102854)){
args102805.push((arguments[i__35777__auto___102855]));

var G__102856 = (i__35777__auto___102855 + (1));
i__35777__auto___102855 = G__102856;
continue;
} else {
}
break;
}

var G__102807 = args102805.length;
switch (G__102807) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102805.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___102858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___102858,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___102858,out){
return (function (state_102831){
var state_val_102832 = (state_102831[(1)]);
if((state_val_102832 === (7))){
var inst_102813 = (state_102831[(7)]);
var inst_102813__$1 = (state_102831[(2)]);
var inst_102814 = (inst_102813__$1 == null);
var inst_102815 = cljs.core.not.call(null,inst_102814);
var state_102831__$1 = (function (){var statearr_102833 = state_102831;
(statearr_102833[(7)] = inst_102813__$1);

return statearr_102833;
})();
if(inst_102815){
var statearr_102834_102859 = state_102831__$1;
(statearr_102834_102859[(1)] = (8));

} else {
var statearr_102835_102860 = state_102831__$1;
(statearr_102835_102860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102832 === (1))){
var inst_102808 = (0);
var state_102831__$1 = (function (){var statearr_102836 = state_102831;
(statearr_102836[(8)] = inst_102808);

return statearr_102836;
})();
var statearr_102837_102861 = state_102831__$1;
(statearr_102837_102861[(2)] = null);

(statearr_102837_102861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102832 === (4))){
var state_102831__$1 = state_102831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102831__$1,(7),ch);
} else {
if((state_val_102832 === (6))){
var inst_102826 = (state_102831[(2)]);
var state_102831__$1 = state_102831;
var statearr_102838_102862 = state_102831__$1;
(statearr_102838_102862[(2)] = inst_102826);

(statearr_102838_102862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102832 === (3))){
var inst_102828 = (state_102831[(2)]);
var inst_102829 = cljs.core.async.close_BANG_.call(null,out);
var state_102831__$1 = (function (){var statearr_102839 = state_102831;
(statearr_102839[(9)] = inst_102828);

return statearr_102839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102831__$1,inst_102829);
} else {
if((state_val_102832 === (2))){
var inst_102808 = (state_102831[(8)]);
var inst_102810 = (inst_102808 < n);
var state_102831__$1 = state_102831;
if(cljs.core.truth_(inst_102810)){
var statearr_102840_102863 = state_102831__$1;
(statearr_102840_102863[(1)] = (4));

} else {
var statearr_102841_102864 = state_102831__$1;
(statearr_102841_102864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102832 === (11))){
var inst_102808 = (state_102831[(8)]);
var inst_102818 = (state_102831[(2)]);
var inst_102819 = (inst_102808 + (1));
var inst_102808__$1 = inst_102819;
var state_102831__$1 = (function (){var statearr_102842 = state_102831;
(statearr_102842[(8)] = inst_102808__$1);

(statearr_102842[(10)] = inst_102818);

return statearr_102842;
})();
var statearr_102843_102865 = state_102831__$1;
(statearr_102843_102865[(2)] = null);

(statearr_102843_102865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102832 === (9))){
var state_102831__$1 = state_102831;
var statearr_102844_102866 = state_102831__$1;
(statearr_102844_102866[(2)] = null);

(statearr_102844_102866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102832 === (5))){
var state_102831__$1 = state_102831;
var statearr_102845_102867 = state_102831__$1;
(statearr_102845_102867[(2)] = null);

(statearr_102845_102867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102832 === (10))){
var inst_102823 = (state_102831[(2)]);
var state_102831__$1 = state_102831;
var statearr_102846_102868 = state_102831__$1;
(statearr_102846_102868[(2)] = inst_102823);

(statearr_102846_102868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102832 === (8))){
var inst_102813 = (state_102831[(7)]);
var state_102831__$1 = state_102831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102831__$1,(11),out,inst_102813);
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
});})(c__48312__auto___102858,out))
;
return ((function (switch__48198__auto__,c__48312__auto___102858,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_102850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_102850[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_102850[(1)] = (1));

return statearr_102850;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_102831){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_102831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e102851){if((e102851 instanceof Object)){
var ex__48202__auto__ = e102851;
var statearr_102852_102869 = state_102831;
(statearr_102852_102869[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102870 = state_102831;
state_102831 = G__102870;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_102831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_102831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___102858,out))
})();
var state__48314__auto__ = (function (){var statearr_102853 = f__48313__auto__.call(null);
(statearr_102853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___102858);

return statearr_102853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___102858,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async102878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async102878 = (function (f,ch,meta102879){
this.f = f;
this.ch = ch;
this.meta102879 = meta102879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_102880,meta102879__$1){
var self__ = this;
var _102880__$1 = this;
return (new cljs.core.async.t_cljs$core$async102878(self__.f,self__.ch,meta102879__$1));
});


cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_102880){
var self__ = this;
var _102880__$1 = this;
return self__.meta102879;
});


cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async102881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async102881 = (function (f,ch,meta102879,_,fn1,meta102882){
this.f = f;
this.ch = ch;
this.meta102879 = meta102879;
this._ = _;
this.fn1 = fn1;
this.meta102882 = meta102882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async102881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_102883,meta102882__$1){
var self__ = this;
var _102883__$1 = this;
return (new cljs.core.async.t_cljs$core$async102881(self__.f,self__.ch,self__.meta102879,self__._,self__.fn1,meta102882__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async102881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_102883){
var self__ = this;
var _102883__$1 = this;
return self__.meta102882;
});})(___$1))
;


cljs.core.async.t_cljs$core$async102881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async102881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async102881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__102871_SHARP_){
return f1.call(null,(((p1__102871_SHARP_ == null))?null:self__.f.call(null,p1__102871_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async102881.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta102879","meta102879",-946966720,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async102878","cljs.core.async/t_cljs$core$async102878",1508289591,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta102882","meta102882",1069036097,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async102881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async102881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async102881";

cljs.core.async.t_cljs$core$async102881.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async102881");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async102881 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async102881(f__$1,ch__$1,meta102879__$1,___$2,fn1__$1,meta102882){
return (new cljs.core.async.t_cljs$core$async102881(f__$1,ch__$1,meta102879__$1,___$2,fn1__$1,meta102882));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async102881(self__.f,self__.ch,self__.meta102879,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34543__auto__ = ret;
if(cljs.core.truth_(and__34543__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34543__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async102878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta102879","meta102879",-946966720,null)], null);
});

cljs.core.async.t_cljs$core$async102878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async102878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async102878";

cljs.core.async.t_cljs$core$async102878.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async102878");
});

cljs.core.async.__GT_t_cljs$core$async102878 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async102878(f__$1,ch__$1,meta102879){
return (new cljs.core.async.t_cljs$core$async102878(f__$1,ch__$1,meta102879));
});

}

return (new cljs.core.async.t_cljs$core$async102878(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async102887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async102887 = (function (f,ch,meta102888){
this.f = f;
this.ch = ch;
this.meta102888 = meta102888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async102887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_102889,meta102888__$1){
var self__ = this;
var _102889__$1 = this;
return (new cljs.core.async.t_cljs$core$async102887(self__.f,self__.ch,meta102888__$1));
});


cljs.core.async.t_cljs$core$async102887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_102889){
var self__ = this;
var _102889__$1 = this;
return self__.meta102888;
});


cljs.core.async.t_cljs$core$async102887.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async102887.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async102887.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async102887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta102888","meta102888",-1122364119,null)], null);
});

cljs.core.async.t_cljs$core$async102887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async102887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async102887";

cljs.core.async.t_cljs$core$async102887.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async102887");
});

cljs.core.async.__GT_t_cljs$core$async102887 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async102887(f__$1,ch__$1,meta102888){
return (new cljs.core.async.t_cljs$core$async102887(f__$1,ch__$1,meta102888));
});

}

return (new cljs.core.async.t_cljs$core$async102887(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async102893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async102893 = (function (p,ch,meta102894){
this.p = p;
this.ch = ch;
this.meta102894 = meta102894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_102895,meta102894__$1){
var self__ = this;
var _102895__$1 = this;
return (new cljs.core.async.t_cljs$core$async102893(self__.p,self__.ch,meta102894__$1));
});


cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_102895){
var self__ = this;
var _102895__$1 = this;
return self__.meta102894;
});


cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async102893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async102893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta102894","meta102894",-50550667,null)], null);
});

cljs.core.async.t_cljs$core$async102893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async102893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async102893";

cljs.core.async.t_cljs$core$async102893.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async102893");
});

cljs.core.async.__GT_t_cljs$core$async102893 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async102893(p__$1,ch__$1,meta102894){
return (new cljs.core.async.t_cljs$core$async102893(p__$1,ch__$1,meta102894));
});

}

return (new cljs.core.async.t_cljs$core$async102893(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args102896 = [];
var len__35776__auto___102940 = arguments.length;
var i__35777__auto___102941 = (0);
while(true){
if((i__35777__auto___102941 < len__35776__auto___102940)){
args102896.push((arguments[i__35777__auto___102941]));

var G__102942 = (i__35777__auto___102941 + (1));
i__35777__auto___102941 = G__102942;
continue;
} else {
}
break;
}

var G__102898 = args102896.length;
switch (G__102898) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102896.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___102944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___102944,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___102944,out){
return (function (state_102919){
var state_val_102920 = (state_102919[(1)]);
if((state_val_102920 === (7))){
var inst_102915 = (state_102919[(2)]);
var state_102919__$1 = state_102919;
var statearr_102921_102945 = state_102919__$1;
(statearr_102921_102945[(2)] = inst_102915);

(statearr_102921_102945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102920 === (1))){
var state_102919__$1 = state_102919;
var statearr_102922_102946 = state_102919__$1;
(statearr_102922_102946[(2)] = null);

(statearr_102922_102946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102920 === (4))){
var inst_102901 = (state_102919[(7)]);
var inst_102901__$1 = (state_102919[(2)]);
var inst_102902 = (inst_102901__$1 == null);
var state_102919__$1 = (function (){var statearr_102923 = state_102919;
(statearr_102923[(7)] = inst_102901__$1);

return statearr_102923;
})();
if(cljs.core.truth_(inst_102902)){
var statearr_102924_102947 = state_102919__$1;
(statearr_102924_102947[(1)] = (5));

} else {
var statearr_102925_102948 = state_102919__$1;
(statearr_102925_102948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102920 === (6))){
var inst_102901 = (state_102919[(7)]);
var inst_102906 = p.call(null,inst_102901);
var state_102919__$1 = state_102919;
if(cljs.core.truth_(inst_102906)){
var statearr_102926_102949 = state_102919__$1;
(statearr_102926_102949[(1)] = (8));

} else {
var statearr_102927_102950 = state_102919__$1;
(statearr_102927_102950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102920 === (3))){
var inst_102917 = (state_102919[(2)]);
var state_102919__$1 = state_102919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_102919__$1,inst_102917);
} else {
if((state_val_102920 === (2))){
var state_102919__$1 = state_102919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_102919__$1,(4),ch);
} else {
if((state_val_102920 === (11))){
var inst_102909 = (state_102919[(2)]);
var state_102919__$1 = state_102919;
var statearr_102928_102951 = state_102919__$1;
(statearr_102928_102951[(2)] = inst_102909);

(statearr_102928_102951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102920 === (9))){
var state_102919__$1 = state_102919;
var statearr_102929_102952 = state_102919__$1;
(statearr_102929_102952[(2)] = null);

(statearr_102929_102952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102920 === (5))){
var inst_102904 = cljs.core.async.close_BANG_.call(null,out);
var state_102919__$1 = state_102919;
var statearr_102930_102953 = state_102919__$1;
(statearr_102930_102953[(2)] = inst_102904);

(statearr_102930_102953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102920 === (10))){
var inst_102912 = (state_102919[(2)]);
var state_102919__$1 = (function (){var statearr_102931 = state_102919;
(statearr_102931[(8)] = inst_102912);

return statearr_102931;
})();
var statearr_102932_102954 = state_102919__$1;
(statearr_102932_102954[(2)] = null);

(statearr_102932_102954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102920 === (8))){
var inst_102901 = (state_102919[(7)]);
var state_102919__$1 = state_102919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_102919__$1,(11),out,inst_102901);
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
});})(c__48312__auto___102944,out))
;
return ((function (switch__48198__auto__,c__48312__auto___102944,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_102936 = [null,null,null,null,null,null,null,null,null];
(statearr_102936[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_102936[(1)] = (1));

return statearr_102936;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_102919){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_102919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e102937){if((e102937 instanceof Object)){
var ex__48202__auto__ = e102937;
var statearr_102938_102955 = state_102919;
(statearr_102938_102955[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_102919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e102937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102956 = state_102919;
state_102919 = G__102956;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_102919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_102919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___102944,out))
})();
var state__48314__auto__ = (function (){var statearr_102939 = f__48313__auto__.call(null);
(statearr_102939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___102944);

return statearr_102939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___102944,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args102957 = [];
var len__35776__auto___102960 = arguments.length;
var i__35777__auto___102961 = (0);
while(true){
if((i__35777__auto___102961 < len__35776__auto___102960)){
args102957.push((arguments[i__35777__auto___102961]));

var G__102962 = (i__35777__auto___102961 + (1));
i__35777__auto___102961 = G__102962;
continue;
} else {
}
break;
}

var G__102959 = args102957.length;
switch (G__102959) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args102957.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__){
return (function (state_103129){
var state_val_103130 = (state_103129[(1)]);
if((state_val_103130 === (7))){
var inst_103125 = (state_103129[(2)]);
var state_103129__$1 = state_103129;
var statearr_103131_103172 = state_103129__$1;
(statearr_103131_103172[(2)] = inst_103125);

(statearr_103131_103172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (20))){
var inst_103095 = (state_103129[(7)]);
var inst_103106 = (state_103129[(2)]);
var inst_103107 = cljs.core.next.call(null,inst_103095);
var inst_103081 = inst_103107;
var inst_103082 = null;
var inst_103083 = (0);
var inst_103084 = (0);
var state_103129__$1 = (function (){var statearr_103132 = state_103129;
(statearr_103132[(8)] = inst_103082);

(statearr_103132[(9)] = inst_103081);

(statearr_103132[(10)] = inst_103106);

(statearr_103132[(11)] = inst_103084);

(statearr_103132[(12)] = inst_103083);

return statearr_103132;
})();
var statearr_103133_103173 = state_103129__$1;
(statearr_103133_103173[(2)] = null);

(statearr_103133_103173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (1))){
var state_103129__$1 = state_103129;
var statearr_103134_103174 = state_103129__$1;
(statearr_103134_103174[(2)] = null);

(statearr_103134_103174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (4))){
var inst_103070 = (state_103129[(13)]);
var inst_103070__$1 = (state_103129[(2)]);
var inst_103071 = (inst_103070__$1 == null);
var state_103129__$1 = (function (){var statearr_103135 = state_103129;
(statearr_103135[(13)] = inst_103070__$1);

return statearr_103135;
})();
if(cljs.core.truth_(inst_103071)){
var statearr_103136_103175 = state_103129__$1;
(statearr_103136_103175[(1)] = (5));

} else {
var statearr_103137_103176 = state_103129__$1;
(statearr_103137_103176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (15))){
var state_103129__$1 = state_103129;
var statearr_103141_103177 = state_103129__$1;
(statearr_103141_103177[(2)] = null);

(statearr_103141_103177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (21))){
var state_103129__$1 = state_103129;
var statearr_103142_103178 = state_103129__$1;
(statearr_103142_103178[(2)] = null);

(statearr_103142_103178[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (13))){
var inst_103082 = (state_103129[(8)]);
var inst_103081 = (state_103129[(9)]);
var inst_103084 = (state_103129[(11)]);
var inst_103083 = (state_103129[(12)]);
var inst_103091 = (state_103129[(2)]);
var inst_103092 = (inst_103084 + (1));
var tmp103138 = inst_103082;
var tmp103139 = inst_103081;
var tmp103140 = inst_103083;
var inst_103081__$1 = tmp103139;
var inst_103082__$1 = tmp103138;
var inst_103083__$1 = tmp103140;
var inst_103084__$1 = inst_103092;
var state_103129__$1 = (function (){var statearr_103143 = state_103129;
(statearr_103143[(8)] = inst_103082__$1);

(statearr_103143[(14)] = inst_103091);

(statearr_103143[(9)] = inst_103081__$1);

(statearr_103143[(11)] = inst_103084__$1);

(statearr_103143[(12)] = inst_103083__$1);

return statearr_103143;
})();
var statearr_103144_103179 = state_103129__$1;
(statearr_103144_103179[(2)] = null);

(statearr_103144_103179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (22))){
var state_103129__$1 = state_103129;
var statearr_103145_103180 = state_103129__$1;
(statearr_103145_103180[(2)] = null);

(statearr_103145_103180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (6))){
var inst_103070 = (state_103129[(13)]);
var inst_103079 = f.call(null,inst_103070);
var inst_103080 = cljs.core.seq.call(null,inst_103079);
var inst_103081 = inst_103080;
var inst_103082 = null;
var inst_103083 = (0);
var inst_103084 = (0);
var state_103129__$1 = (function (){var statearr_103146 = state_103129;
(statearr_103146[(8)] = inst_103082);

(statearr_103146[(9)] = inst_103081);

(statearr_103146[(11)] = inst_103084);

(statearr_103146[(12)] = inst_103083);

return statearr_103146;
})();
var statearr_103147_103181 = state_103129__$1;
(statearr_103147_103181[(2)] = null);

(statearr_103147_103181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (17))){
var inst_103095 = (state_103129[(7)]);
var inst_103099 = cljs.core.chunk_first.call(null,inst_103095);
var inst_103100 = cljs.core.chunk_rest.call(null,inst_103095);
var inst_103101 = cljs.core.count.call(null,inst_103099);
var inst_103081 = inst_103100;
var inst_103082 = inst_103099;
var inst_103083 = inst_103101;
var inst_103084 = (0);
var state_103129__$1 = (function (){var statearr_103148 = state_103129;
(statearr_103148[(8)] = inst_103082);

(statearr_103148[(9)] = inst_103081);

(statearr_103148[(11)] = inst_103084);

(statearr_103148[(12)] = inst_103083);

return statearr_103148;
})();
var statearr_103149_103182 = state_103129__$1;
(statearr_103149_103182[(2)] = null);

(statearr_103149_103182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (3))){
var inst_103127 = (state_103129[(2)]);
var state_103129__$1 = state_103129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103129__$1,inst_103127);
} else {
if((state_val_103130 === (12))){
var inst_103115 = (state_103129[(2)]);
var state_103129__$1 = state_103129;
var statearr_103150_103183 = state_103129__$1;
(statearr_103150_103183[(2)] = inst_103115);

(statearr_103150_103183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (2))){
var state_103129__$1 = state_103129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103129__$1,(4),in$);
} else {
if((state_val_103130 === (23))){
var inst_103123 = (state_103129[(2)]);
var state_103129__$1 = state_103129;
var statearr_103151_103184 = state_103129__$1;
(statearr_103151_103184[(2)] = inst_103123);

(statearr_103151_103184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (19))){
var inst_103110 = (state_103129[(2)]);
var state_103129__$1 = state_103129;
var statearr_103152_103185 = state_103129__$1;
(statearr_103152_103185[(2)] = inst_103110);

(statearr_103152_103185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (11))){
var inst_103081 = (state_103129[(9)]);
var inst_103095 = (state_103129[(7)]);
var inst_103095__$1 = cljs.core.seq.call(null,inst_103081);
var state_103129__$1 = (function (){var statearr_103153 = state_103129;
(statearr_103153[(7)] = inst_103095__$1);

return statearr_103153;
})();
if(inst_103095__$1){
var statearr_103154_103186 = state_103129__$1;
(statearr_103154_103186[(1)] = (14));

} else {
var statearr_103155_103187 = state_103129__$1;
(statearr_103155_103187[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (9))){
var inst_103117 = (state_103129[(2)]);
var inst_103118 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_103129__$1 = (function (){var statearr_103156 = state_103129;
(statearr_103156[(15)] = inst_103117);

return statearr_103156;
})();
if(cljs.core.truth_(inst_103118)){
var statearr_103157_103188 = state_103129__$1;
(statearr_103157_103188[(1)] = (21));

} else {
var statearr_103158_103189 = state_103129__$1;
(statearr_103158_103189[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (5))){
var inst_103073 = cljs.core.async.close_BANG_.call(null,out);
var state_103129__$1 = state_103129;
var statearr_103159_103190 = state_103129__$1;
(statearr_103159_103190[(2)] = inst_103073);

(statearr_103159_103190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (14))){
var inst_103095 = (state_103129[(7)]);
var inst_103097 = cljs.core.chunked_seq_QMARK_.call(null,inst_103095);
var state_103129__$1 = state_103129;
if(inst_103097){
var statearr_103160_103191 = state_103129__$1;
(statearr_103160_103191[(1)] = (17));

} else {
var statearr_103161_103192 = state_103129__$1;
(statearr_103161_103192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (16))){
var inst_103113 = (state_103129[(2)]);
var state_103129__$1 = state_103129;
var statearr_103162_103193 = state_103129__$1;
(statearr_103162_103193[(2)] = inst_103113);

(statearr_103162_103193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103130 === (10))){
var inst_103082 = (state_103129[(8)]);
var inst_103084 = (state_103129[(11)]);
var inst_103089 = cljs.core._nth.call(null,inst_103082,inst_103084);
var state_103129__$1 = state_103129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103129__$1,(13),out,inst_103089);
} else {
if((state_val_103130 === (18))){
var inst_103095 = (state_103129[(7)]);
var inst_103104 = cljs.core.first.call(null,inst_103095);
var state_103129__$1 = state_103129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103129__$1,(20),out,inst_103104);
} else {
if((state_val_103130 === (8))){
var inst_103084 = (state_103129[(11)]);
var inst_103083 = (state_103129[(12)]);
var inst_103086 = (inst_103084 < inst_103083);
var inst_103087 = inst_103086;
var state_103129__$1 = state_103129;
if(cljs.core.truth_(inst_103087)){
var statearr_103163_103194 = state_103129__$1;
(statearr_103163_103194[(1)] = (10));

} else {
var statearr_103164_103195 = state_103129__$1;
(statearr_103164_103195[(1)] = (11));

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
});})(c__48312__auto__))
;
return ((function (switch__48198__auto__,c__48312__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_103168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__);

(statearr_103168[(1)] = (1));

return statearr_103168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1 = (function (state_103129){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_103129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e103169){if((e103169 instanceof Object)){
var ex__48202__auto__ = e103169;
var statearr_103170_103196 = state_103129;
(statearr_103170_103196[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103197 = state_103129;
state_103129 = G__103197;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__ = function(state_103129){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1.call(this,state_103129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_103171 = f__48313__auto__.call(null);
(statearr_103171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_103171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto__))
);

return c__48312__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args103198 = [];
var len__35776__auto___103201 = arguments.length;
var i__35777__auto___103202 = (0);
while(true){
if((i__35777__auto___103202 < len__35776__auto___103201)){
args103198.push((arguments[i__35777__auto___103202]));

var G__103203 = (i__35777__auto___103202 + (1));
i__35777__auto___103202 = G__103203;
continue;
} else {
}
break;
}

var G__103200 = args103198.length;
switch (G__103200) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args103198.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args103205 = [];
var len__35776__auto___103208 = arguments.length;
var i__35777__auto___103209 = (0);
while(true){
if((i__35777__auto___103209 < len__35776__auto___103208)){
args103205.push((arguments[i__35777__auto___103209]));

var G__103210 = (i__35777__auto___103209 + (1));
i__35777__auto___103209 = G__103210;
continue;
} else {
}
break;
}

var G__103207 = args103205.length;
switch (G__103207) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args103205.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args103212 = [];
var len__35776__auto___103263 = arguments.length;
var i__35777__auto___103264 = (0);
while(true){
if((i__35777__auto___103264 < len__35776__auto___103263)){
args103212.push((arguments[i__35777__auto___103264]));

var G__103265 = (i__35777__auto___103264 + (1));
i__35777__auto___103264 = G__103265;
continue;
} else {
}
break;
}

var G__103214 = args103212.length;
switch (G__103214) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args103212.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___103267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___103267,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___103267,out){
return (function (state_103238){
var state_val_103239 = (state_103238[(1)]);
if((state_val_103239 === (7))){
var inst_103233 = (state_103238[(2)]);
var state_103238__$1 = state_103238;
var statearr_103240_103268 = state_103238__$1;
(statearr_103240_103268[(2)] = inst_103233);

(statearr_103240_103268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103239 === (1))){
var inst_103215 = null;
var state_103238__$1 = (function (){var statearr_103241 = state_103238;
(statearr_103241[(7)] = inst_103215);

return statearr_103241;
})();
var statearr_103242_103269 = state_103238__$1;
(statearr_103242_103269[(2)] = null);

(statearr_103242_103269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103239 === (4))){
var inst_103218 = (state_103238[(8)]);
var inst_103218__$1 = (state_103238[(2)]);
var inst_103219 = (inst_103218__$1 == null);
var inst_103220 = cljs.core.not.call(null,inst_103219);
var state_103238__$1 = (function (){var statearr_103243 = state_103238;
(statearr_103243[(8)] = inst_103218__$1);

return statearr_103243;
})();
if(inst_103220){
var statearr_103244_103270 = state_103238__$1;
(statearr_103244_103270[(1)] = (5));

} else {
var statearr_103245_103271 = state_103238__$1;
(statearr_103245_103271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103239 === (6))){
var state_103238__$1 = state_103238;
var statearr_103246_103272 = state_103238__$1;
(statearr_103246_103272[(2)] = null);

(statearr_103246_103272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103239 === (3))){
var inst_103235 = (state_103238[(2)]);
var inst_103236 = cljs.core.async.close_BANG_.call(null,out);
var state_103238__$1 = (function (){var statearr_103247 = state_103238;
(statearr_103247[(9)] = inst_103235);

return statearr_103247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103238__$1,inst_103236);
} else {
if((state_val_103239 === (2))){
var state_103238__$1 = state_103238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103238__$1,(4),ch);
} else {
if((state_val_103239 === (11))){
var inst_103218 = (state_103238[(8)]);
var inst_103227 = (state_103238[(2)]);
var inst_103215 = inst_103218;
var state_103238__$1 = (function (){var statearr_103248 = state_103238;
(statearr_103248[(7)] = inst_103215);

(statearr_103248[(10)] = inst_103227);

return statearr_103248;
})();
var statearr_103249_103273 = state_103238__$1;
(statearr_103249_103273[(2)] = null);

(statearr_103249_103273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103239 === (9))){
var inst_103218 = (state_103238[(8)]);
var state_103238__$1 = state_103238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103238__$1,(11),out,inst_103218);
} else {
if((state_val_103239 === (5))){
var inst_103218 = (state_103238[(8)]);
var inst_103215 = (state_103238[(7)]);
var inst_103222 = cljs.core._EQ_.call(null,inst_103218,inst_103215);
var state_103238__$1 = state_103238;
if(inst_103222){
var statearr_103251_103274 = state_103238__$1;
(statearr_103251_103274[(1)] = (8));

} else {
var statearr_103252_103275 = state_103238__$1;
(statearr_103252_103275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103239 === (10))){
var inst_103230 = (state_103238[(2)]);
var state_103238__$1 = state_103238;
var statearr_103253_103276 = state_103238__$1;
(statearr_103253_103276[(2)] = inst_103230);

(statearr_103253_103276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103239 === (8))){
var inst_103215 = (state_103238[(7)]);
var tmp103250 = inst_103215;
var inst_103215__$1 = tmp103250;
var state_103238__$1 = (function (){var statearr_103254 = state_103238;
(statearr_103254[(7)] = inst_103215__$1);

return statearr_103254;
})();
var statearr_103255_103277 = state_103238__$1;
(statearr_103255_103277[(2)] = null);

(statearr_103255_103277[(1)] = (2));


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
});})(c__48312__auto___103267,out))
;
return ((function (switch__48198__auto__,c__48312__auto___103267,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_103259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_103259[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_103259[(1)] = (1));

return statearr_103259;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_103238){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_103238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e103260){if((e103260 instanceof Object)){
var ex__48202__auto__ = e103260;
var statearr_103261_103278 = state_103238;
(statearr_103261_103278[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103279 = state_103238;
state_103238 = G__103279;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_103238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_103238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___103267,out))
})();
var state__48314__auto__ = (function (){var statearr_103262 = f__48313__auto__.call(null);
(statearr_103262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___103267);

return statearr_103262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___103267,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args103280 = [];
var len__35776__auto___103350 = arguments.length;
var i__35777__auto___103351 = (0);
while(true){
if((i__35777__auto___103351 < len__35776__auto___103350)){
args103280.push((arguments[i__35777__auto___103351]));

var G__103352 = (i__35777__auto___103351 + (1));
i__35777__auto___103351 = G__103352;
continue;
} else {
}
break;
}

var G__103282 = args103280.length;
switch (G__103282) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args103280.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___103354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___103354,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___103354,out){
return (function (state_103320){
var state_val_103321 = (state_103320[(1)]);
if((state_val_103321 === (7))){
var inst_103316 = (state_103320[(2)]);
var state_103320__$1 = state_103320;
var statearr_103322_103355 = state_103320__$1;
(statearr_103322_103355[(2)] = inst_103316);

(statearr_103322_103355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (1))){
var inst_103283 = (new Array(n));
var inst_103284 = inst_103283;
var inst_103285 = (0);
var state_103320__$1 = (function (){var statearr_103323 = state_103320;
(statearr_103323[(7)] = inst_103284);

(statearr_103323[(8)] = inst_103285);

return statearr_103323;
})();
var statearr_103324_103356 = state_103320__$1;
(statearr_103324_103356[(2)] = null);

(statearr_103324_103356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (4))){
var inst_103288 = (state_103320[(9)]);
var inst_103288__$1 = (state_103320[(2)]);
var inst_103289 = (inst_103288__$1 == null);
var inst_103290 = cljs.core.not.call(null,inst_103289);
var state_103320__$1 = (function (){var statearr_103325 = state_103320;
(statearr_103325[(9)] = inst_103288__$1);

return statearr_103325;
})();
if(inst_103290){
var statearr_103326_103357 = state_103320__$1;
(statearr_103326_103357[(1)] = (5));

} else {
var statearr_103327_103358 = state_103320__$1;
(statearr_103327_103358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (15))){
var inst_103310 = (state_103320[(2)]);
var state_103320__$1 = state_103320;
var statearr_103328_103359 = state_103320__$1;
(statearr_103328_103359[(2)] = inst_103310);

(statearr_103328_103359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (13))){
var state_103320__$1 = state_103320;
var statearr_103329_103360 = state_103320__$1;
(statearr_103329_103360[(2)] = null);

(statearr_103329_103360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (6))){
var inst_103285 = (state_103320[(8)]);
var inst_103306 = (inst_103285 > (0));
var state_103320__$1 = state_103320;
if(cljs.core.truth_(inst_103306)){
var statearr_103330_103361 = state_103320__$1;
(statearr_103330_103361[(1)] = (12));

} else {
var statearr_103331_103362 = state_103320__$1;
(statearr_103331_103362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (3))){
var inst_103318 = (state_103320[(2)]);
var state_103320__$1 = state_103320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103320__$1,inst_103318);
} else {
if((state_val_103321 === (12))){
var inst_103284 = (state_103320[(7)]);
var inst_103308 = cljs.core.vec.call(null,inst_103284);
var state_103320__$1 = state_103320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103320__$1,(15),out,inst_103308);
} else {
if((state_val_103321 === (2))){
var state_103320__$1 = state_103320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103320__$1,(4),ch);
} else {
if((state_val_103321 === (11))){
var inst_103300 = (state_103320[(2)]);
var inst_103301 = (new Array(n));
var inst_103284 = inst_103301;
var inst_103285 = (0);
var state_103320__$1 = (function (){var statearr_103332 = state_103320;
(statearr_103332[(7)] = inst_103284);

(statearr_103332[(10)] = inst_103300);

(statearr_103332[(8)] = inst_103285);

return statearr_103332;
})();
var statearr_103333_103363 = state_103320__$1;
(statearr_103333_103363[(2)] = null);

(statearr_103333_103363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (9))){
var inst_103284 = (state_103320[(7)]);
var inst_103298 = cljs.core.vec.call(null,inst_103284);
var state_103320__$1 = state_103320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103320__$1,(11),out,inst_103298);
} else {
if((state_val_103321 === (5))){
var inst_103288 = (state_103320[(9)]);
var inst_103284 = (state_103320[(7)]);
var inst_103293 = (state_103320[(11)]);
var inst_103285 = (state_103320[(8)]);
var inst_103292 = (inst_103284[inst_103285] = inst_103288);
var inst_103293__$1 = (inst_103285 + (1));
var inst_103294 = (inst_103293__$1 < n);
var state_103320__$1 = (function (){var statearr_103334 = state_103320;
(statearr_103334[(12)] = inst_103292);

(statearr_103334[(11)] = inst_103293__$1);

return statearr_103334;
})();
if(cljs.core.truth_(inst_103294)){
var statearr_103335_103364 = state_103320__$1;
(statearr_103335_103364[(1)] = (8));

} else {
var statearr_103336_103365 = state_103320__$1;
(statearr_103336_103365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (14))){
var inst_103313 = (state_103320[(2)]);
var inst_103314 = cljs.core.async.close_BANG_.call(null,out);
var state_103320__$1 = (function (){var statearr_103338 = state_103320;
(statearr_103338[(13)] = inst_103313);

return statearr_103338;
})();
var statearr_103339_103366 = state_103320__$1;
(statearr_103339_103366[(2)] = inst_103314);

(statearr_103339_103366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (10))){
var inst_103304 = (state_103320[(2)]);
var state_103320__$1 = state_103320;
var statearr_103340_103367 = state_103320__$1;
(statearr_103340_103367[(2)] = inst_103304);

(statearr_103340_103367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103321 === (8))){
var inst_103284 = (state_103320[(7)]);
var inst_103293 = (state_103320[(11)]);
var tmp103337 = inst_103284;
var inst_103284__$1 = tmp103337;
var inst_103285 = inst_103293;
var state_103320__$1 = (function (){var statearr_103341 = state_103320;
(statearr_103341[(7)] = inst_103284__$1);

(statearr_103341[(8)] = inst_103285);

return statearr_103341;
})();
var statearr_103342_103368 = state_103320__$1;
(statearr_103342_103368[(2)] = null);

(statearr_103342_103368[(1)] = (2));


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
});})(c__48312__auto___103354,out))
;
return ((function (switch__48198__auto__,c__48312__auto___103354,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_103346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103346[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_103346[(1)] = (1));

return statearr_103346;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_103320){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_103320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e103347){if((e103347 instanceof Object)){
var ex__48202__auto__ = e103347;
var statearr_103348_103369 = state_103320;
(statearr_103348_103369[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103370 = state_103320;
state_103320 = G__103370;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_103320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_103320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___103354,out))
})();
var state__48314__auto__ = (function (){var statearr_103349 = f__48313__auto__.call(null);
(statearr_103349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___103354);

return statearr_103349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___103354,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args103371 = [];
var len__35776__auto___103445 = arguments.length;
var i__35777__auto___103446 = (0);
while(true){
if((i__35777__auto___103446 < len__35776__auto___103445)){
args103371.push((arguments[i__35777__auto___103446]));

var G__103447 = (i__35777__auto___103446 + (1));
i__35777__auto___103446 = G__103447;
continue;
} else {
}
break;
}

var G__103373 = args103371.length;
switch (G__103373) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args103371.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___103449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___103449,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___103449,out){
return (function (state_103415){
var state_val_103416 = (state_103415[(1)]);
if((state_val_103416 === (7))){
var inst_103411 = (state_103415[(2)]);
var state_103415__$1 = state_103415;
var statearr_103417_103450 = state_103415__$1;
(statearr_103417_103450[(2)] = inst_103411);

(statearr_103417_103450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (1))){
var inst_103374 = [];
var inst_103375 = inst_103374;
var inst_103376 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_103415__$1 = (function (){var statearr_103418 = state_103415;
(statearr_103418[(7)] = inst_103376);

(statearr_103418[(8)] = inst_103375);

return statearr_103418;
})();
var statearr_103419_103451 = state_103415__$1;
(statearr_103419_103451[(2)] = null);

(statearr_103419_103451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (4))){
var inst_103379 = (state_103415[(9)]);
var inst_103379__$1 = (state_103415[(2)]);
var inst_103380 = (inst_103379__$1 == null);
var inst_103381 = cljs.core.not.call(null,inst_103380);
var state_103415__$1 = (function (){var statearr_103420 = state_103415;
(statearr_103420[(9)] = inst_103379__$1);

return statearr_103420;
})();
if(inst_103381){
var statearr_103421_103452 = state_103415__$1;
(statearr_103421_103452[(1)] = (5));

} else {
var statearr_103422_103453 = state_103415__$1;
(statearr_103422_103453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (15))){
var inst_103405 = (state_103415[(2)]);
var state_103415__$1 = state_103415;
var statearr_103423_103454 = state_103415__$1;
(statearr_103423_103454[(2)] = inst_103405);

(statearr_103423_103454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (13))){
var state_103415__$1 = state_103415;
var statearr_103424_103455 = state_103415__$1;
(statearr_103424_103455[(2)] = null);

(statearr_103424_103455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (6))){
var inst_103375 = (state_103415[(8)]);
var inst_103400 = inst_103375.length;
var inst_103401 = (inst_103400 > (0));
var state_103415__$1 = state_103415;
if(cljs.core.truth_(inst_103401)){
var statearr_103425_103456 = state_103415__$1;
(statearr_103425_103456[(1)] = (12));

} else {
var statearr_103426_103457 = state_103415__$1;
(statearr_103426_103457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (3))){
var inst_103413 = (state_103415[(2)]);
var state_103415__$1 = state_103415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_103415__$1,inst_103413);
} else {
if((state_val_103416 === (12))){
var inst_103375 = (state_103415[(8)]);
var inst_103403 = cljs.core.vec.call(null,inst_103375);
var state_103415__$1 = state_103415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103415__$1,(15),out,inst_103403);
} else {
if((state_val_103416 === (2))){
var state_103415__$1 = state_103415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_103415__$1,(4),ch);
} else {
if((state_val_103416 === (11))){
var inst_103383 = (state_103415[(10)]);
var inst_103379 = (state_103415[(9)]);
var inst_103393 = (state_103415[(2)]);
var inst_103394 = [];
var inst_103395 = inst_103394.push(inst_103379);
var inst_103375 = inst_103394;
var inst_103376 = inst_103383;
var state_103415__$1 = (function (){var statearr_103427 = state_103415;
(statearr_103427[(7)] = inst_103376);

(statearr_103427[(11)] = inst_103395);

(statearr_103427[(12)] = inst_103393);

(statearr_103427[(8)] = inst_103375);

return statearr_103427;
})();
var statearr_103428_103458 = state_103415__$1;
(statearr_103428_103458[(2)] = null);

(statearr_103428_103458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (9))){
var inst_103375 = (state_103415[(8)]);
var inst_103391 = cljs.core.vec.call(null,inst_103375);
var state_103415__$1 = state_103415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_103415__$1,(11),out,inst_103391);
} else {
if((state_val_103416 === (5))){
var inst_103376 = (state_103415[(7)]);
var inst_103383 = (state_103415[(10)]);
var inst_103379 = (state_103415[(9)]);
var inst_103383__$1 = f.call(null,inst_103379);
var inst_103384 = cljs.core._EQ_.call(null,inst_103383__$1,inst_103376);
var inst_103385 = cljs.core.keyword_identical_QMARK_.call(null,inst_103376,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_103386 = (inst_103384) || (inst_103385);
var state_103415__$1 = (function (){var statearr_103429 = state_103415;
(statearr_103429[(10)] = inst_103383__$1);

return statearr_103429;
})();
if(cljs.core.truth_(inst_103386)){
var statearr_103430_103459 = state_103415__$1;
(statearr_103430_103459[(1)] = (8));

} else {
var statearr_103431_103460 = state_103415__$1;
(statearr_103431_103460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (14))){
var inst_103408 = (state_103415[(2)]);
var inst_103409 = cljs.core.async.close_BANG_.call(null,out);
var state_103415__$1 = (function (){var statearr_103433 = state_103415;
(statearr_103433[(13)] = inst_103408);

return statearr_103433;
})();
var statearr_103434_103461 = state_103415__$1;
(statearr_103434_103461[(2)] = inst_103409);

(statearr_103434_103461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (10))){
var inst_103398 = (state_103415[(2)]);
var state_103415__$1 = state_103415;
var statearr_103435_103462 = state_103415__$1;
(statearr_103435_103462[(2)] = inst_103398);

(statearr_103435_103462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103416 === (8))){
var inst_103383 = (state_103415[(10)]);
var inst_103379 = (state_103415[(9)]);
var inst_103375 = (state_103415[(8)]);
var inst_103388 = inst_103375.push(inst_103379);
var tmp103432 = inst_103375;
var inst_103375__$1 = tmp103432;
var inst_103376 = inst_103383;
var state_103415__$1 = (function (){var statearr_103436 = state_103415;
(statearr_103436[(7)] = inst_103376);

(statearr_103436[(14)] = inst_103388);

(statearr_103436[(8)] = inst_103375__$1);

return statearr_103436;
})();
var statearr_103437_103463 = state_103415__$1;
(statearr_103437_103463[(2)] = null);

(statearr_103437_103463[(1)] = (2));


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
});})(c__48312__auto___103449,out))
;
return ((function (switch__48198__auto__,c__48312__auto___103449,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_103441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103441[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_103441[(1)] = (1));

return statearr_103441;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_103415){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_103415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e103442){if((e103442 instanceof Object)){
var ex__48202__auto__ = e103442;
var statearr_103443_103464 = state_103415;
(statearr_103443_103464[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_103415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e103442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103465 = state_103415;
state_103415 = G__103465;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_103415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_103415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___103449,out))
})();
var state__48314__auto__ = (function (){var statearr_103444 = f__48313__auto__.call(null);
(statearr_103444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___103449);

return statearr_103444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___103449,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491640852409