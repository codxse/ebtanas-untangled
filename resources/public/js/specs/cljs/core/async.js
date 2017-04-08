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
var args48371 = [];
var len__35776__auto___48377 = arguments.length;
var i__35777__auto___48378 = (0);
while(true){
if((i__35777__auto___48378 < len__35776__auto___48377)){
args48371.push((arguments[i__35777__auto___48378]));

var G__48379 = (i__35777__auto___48378 + (1));
i__35777__auto___48378 = G__48379;
continue;
} else {
}
break;
}

var G__48373 = args48371.length;
switch (G__48373) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48371.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async48374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48374 = (function (f,blockable,meta48375){
this.f = f;
this.blockable = blockable;
this.meta48375 = meta48375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48376,meta48375__$1){
var self__ = this;
var _48376__$1 = this;
return (new cljs.core.async.t_cljs$core$async48374(self__.f,self__.blockable,meta48375__$1));
});


cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48376){
var self__ = this;
var _48376__$1 = this;
return self__.meta48375;
});


cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48375","meta48375",43503312,null)], null);
});

cljs.core.async.t_cljs$core$async48374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48374";

cljs.core.async.t_cljs$core$async48374.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async48374");
});

cljs.core.async.__GT_t_cljs$core$async48374 = (function cljs$core$async$__GT_t_cljs$core$async48374(f__$1,blockable__$1,meta48375){
return (new cljs.core.async.t_cljs$core$async48374(f__$1,blockable__$1,meta48375));
});

}

return (new cljs.core.async.t_cljs$core$async48374(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args48383 = [];
var len__35776__auto___48386 = arguments.length;
var i__35777__auto___48387 = (0);
while(true){
if((i__35777__auto___48387 < len__35776__auto___48386)){
args48383.push((arguments[i__35777__auto___48387]));

var G__48388 = (i__35777__auto___48387 + (1));
i__35777__auto___48387 = G__48388;
continue;
} else {
}
break;
}

var G__48385 = args48383.length;
switch (G__48385) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48383.length)].join('')));

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
var args48390 = [];
var len__35776__auto___48393 = arguments.length;
var i__35777__auto___48394 = (0);
while(true){
if((i__35777__auto___48394 < len__35776__auto___48393)){
args48390.push((arguments[i__35777__auto___48394]));

var G__48395 = (i__35777__auto___48394 + (1));
i__35777__auto___48394 = G__48395;
continue;
} else {
}
break;
}

var G__48392 = args48390.length;
switch (G__48392) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48390.length)].join('')));

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
var args48397 = [];
var len__35776__auto___48400 = arguments.length;
var i__35777__auto___48401 = (0);
while(true){
if((i__35777__auto___48401 < len__35776__auto___48400)){
args48397.push((arguments[i__35777__auto___48401]));

var G__48402 = (i__35777__auto___48401 + (1));
i__35777__auto___48401 = G__48402;
continue;
} else {
}
break;
}

var G__48399 = args48397.length;
switch (G__48399) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48397.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_48404 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48404);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48404,ret){
return (function (){
return fn1.call(null,val_48404);
});})(val_48404,ret))
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
var args48405 = [];
var len__35776__auto___48408 = arguments.length;
var i__35777__auto___48409 = (0);
while(true){
if((i__35777__auto___48409 < len__35776__auto___48408)){
args48405.push((arguments[i__35777__auto___48409]));

var G__48410 = (i__35777__auto___48409 + (1));
i__35777__auto___48409 = G__48410;
continue;
} else {
}
break;
}

var G__48407 = args48405.length;
switch (G__48407) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48405.length)].join('')));

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
var n__35576__auto___48412 = n;
var x_48413 = (0);
while(true){
if((x_48413 < n__35576__auto___48412)){
(a[x_48413] = (0));

var G__48414 = (x_48413 + (1));
x_48413 = G__48414;
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

var G__48415 = (i + (1));
i = G__48415;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48419 = (function (flag,meta48420){
this.flag = flag;
this.meta48420 = meta48420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async48419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48421,meta48420__$1){
var self__ = this;
var _48421__$1 = this;
return (new cljs.core.async.t_cljs$core$async48419(self__.flag,meta48420__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async48419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48421){
var self__ = this;
var _48421__$1 = this;
return self__.meta48420;
});})(flag))
;


cljs.core.async.t_cljs$core$async48419.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async48419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async48419.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async48419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48419.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48420","meta48420",175441081,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48419";

cljs.core.async.t_cljs$core$async48419.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async48419");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async48419 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48419(flag__$1,meta48420){
return (new cljs.core.async.t_cljs$core$async48419(flag__$1,meta48420));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48419(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48425 = (function (flag,cb,meta48426){
this.flag = flag;
this.cb = cb;
this.meta48426 = meta48426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48427,meta48426__$1){
var self__ = this;
var _48427__$1 = this;
return (new cljs.core.async.t_cljs$core$async48425(self__.flag,self__.cb,meta48426__$1));
});


cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48427){
var self__ = this;
var _48427__$1 = this;
return self__.meta48426;
});


cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48426","meta48426",2007823713,null)], null);
});

cljs.core.async.t_cljs$core$async48425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48425";

cljs.core.async.t_cljs$core$async48425.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async48425");
});

cljs.core.async.__GT_t_cljs$core$async48425 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48425(flag__$1,cb__$1,meta48426){
return (new cljs.core.async.t_cljs$core$async48425(flag__$1,cb__$1,meta48426));
});

}

return (new cljs.core.async.t_cljs$core$async48425(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__48428_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48428_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48429_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48429_SHARP_,port], null));
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
var G__48430 = (i + (1));
i = G__48430;
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
var len__35776__auto___48436 = arguments.length;
var i__35777__auto___48437 = (0);
while(true){
if((i__35777__auto___48437 < len__35776__auto___48436)){
args__35783__auto__.push((arguments[i__35777__auto___48437]));

var G__48438 = (i__35777__auto___48437 + (1));
i__35777__auto___48437 = G__48438;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48433){
var map__48434 = p__48433;
var map__48434__$1 = ((((!((map__48434 == null)))?((((map__48434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48434):map__48434);
var opts = map__48434__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48431){
var G__48432 = cljs.core.first.call(null,seq48431);
var seq48431__$1 = cljs.core.next.call(null,seq48431);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48432,seq48431__$1);
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
var args48439 = [];
var len__35776__auto___48489 = arguments.length;
var i__35777__auto___48490 = (0);
while(true){
if((i__35777__auto___48490 < len__35776__auto___48489)){
args48439.push((arguments[i__35777__auto___48490]));

var G__48491 = (i__35777__auto___48490 + (1));
i__35777__auto___48490 = G__48491;
continue;
} else {
}
break;
}

var G__48441 = args48439.length;
switch (G__48441) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48439.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48312__auto___48493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___48493){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___48493){
return (function (state_48465){
var state_val_48466 = (state_48465[(1)]);
if((state_val_48466 === (7))){
var inst_48461 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
var statearr_48467_48494 = state_48465__$1;
(statearr_48467_48494[(2)] = inst_48461);

(statearr_48467_48494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (1))){
var state_48465__$1 = state_48465;
var statearr_48468_48495 = state_48465__$1;
(statearr_48468_48495[(2)] = null);

(statearr_48468_48495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (4))){
var inst_48444 = (state_48465[(7)]);
var inst_48444__$1 = (state_48465[(2)]);
var inst_48445 = (inst_48444__$1 == null);
var state_48465__$1 = (function (){var statearr_48469 = state_48465;
(statearr_48469[(7)] = inst_48444__$1);

return statearr_48469;
})();
if(cljs.core.truth_(inst_48445)){
var statearr_48470_48496 = state_48465__$1;
(statearr_48470_48496[(1)] = (5));

} else {
var statearr_48471_48497 = state_48465__$1;
(statearr_48471_48497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (13))){
var state_48465__$1 = state_48465;
var statearr_48472_48498 = state_48465__$1;
(statearr_48472_48498[(2)] = null);

(statearr_48472_48498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (6))){
var inst_48444 = (state_48465[(7)]);
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48465__$1,(11),to,inst_48444);
} else {
if((state_val_48466 === (3))){
var inst_48463 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48465__$1,inst_48463);
} else {
if((state_val_48466 === (12))){
var state_48465__$1 = state_48465;
var statearr_48473_48499 = state_48465__$1;
(statearr_48473_48499[(2)] = null);

(statearr_48473_48499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (2))){
var state_48465__$1 = state_48465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48465__$1,(4),from);
} else {
if((state_val_48466 === (11))){
var inst_48454 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
if(cljs.core.truth_(inst_48454)){
var statearr_48474_48500 = state_48465__$1;
(statearr_48474_48500[(1)] = (12));

} else {
var statearr_48475_48501 = state_48465__$1;
(statearr_48475_48501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (9))){
var state_48465__$1 = state_48465;
var statearr_48476_48502 = state_48465__$1;
(statearr_48476_48502[(2)] = null);

(statearr_48476_48502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (5))){
var state_48465__$1 = state_48465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48477_48503 = state_48465__$1;
(statearr_48477_48503[(1)] = (8));

} else {
var statearr_48478_48504 = state_48465__$1;
(statearr_48478_48504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (14))){
var inst_48459 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
var statearr_48479_48505 = state_48465__$1;
(statearr_48479_48505[(2)] = inst_48459);

(statearr_48479_48505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (10))){
var inst_48451 = (state_48465[(2)]);
var state_48465__$1 = state_48465;
var statearr_48480_48506 = state_48465__$1;
(statearr_48480_48506[(2)] = inst_48451);

(statearr_48480_48506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48466 === (8))){
var inst_48448 = cljs.core.async.close_BANG_.call(null,to);
var state_48465__$1 = state_48465;
var statearr_48481_48507 = state_48465__$1;
(statearr_48481_48507[(2)] = inst_48448);

(statearr_48481_48507[(1)] = (10));


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
});})(c__48312__auto___48493))
;
return ((function (switch__48198__auto__,c__48312__auto___48493){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_48485 = [null,null,null,null,null,null,null,null];
(statearr_48485[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_48485[(1)] = (1));

return statearr_48485;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_48465){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_48465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e48486){if((e48486 instanceof Object)){
var ex__48202__auto__ = e48486;
var statearr_48487_48508 = state_48465;
(statearr_48487_48508[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48509 = state_48465;
state_48465 = G__48509;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_48465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_48465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___48493))
})();
var state__48314__auto__ = (function (){var statearr_48488 = f__48313__auto__.call(null);
(statearr_48488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___48493);

return statearr_48488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___48493))
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
return (function (p__48697){
var vec__48698 = p__48697;
var v = cljs.core.nth.call(null,vec__48698,(0),null);
var p = cljs.core.nth.call(null,vec__48698,(1),null);
var job = vec__48698;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48312__auto___48884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___48884,res,vec__48698,v,p,job,jobs,results){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___48884,res,vec__48698,v,p,job,jobs,results){
return (function (state_48705){
var state_val_48706 = (state_48705[(1)]);
if((state_val_48706 === (1))){
var state_48705__$1 = state_48705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48705__$1,(2),res,v);
} else {
if((state_val_48706 === (2))){
var inst_48702 = (state_48705[(2)]);
var inst_48703 = cljs.core.async.close_BANG_.call(null,res);
var state_48705__$1 = (function (){var statearr_48707 = state_48705;
(statearr_48707[(7)] = inst_48702);

return statearr_48707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48705__$1,inst_48703);
} else {
return null;
}
}
});})(c__48312__auto___48884,res,vec__48698,v,p,job,jobs,results))
;
return ((function (switch__48198__auto__,c__48312__auto___48884,res,vec__48698,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_48711 = [null,null,null,null,null,null,null,null];
(statearr_48711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_48711[(1)] = (1));

return statearr_48711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_48705){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_48705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e48712){if((e48712 instanceof Object)){
var ex__48202__auto__ = e48712;
var statearr_48713_48885 = state_48705;
(statearr_48713_48885[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48886 = state_48705;
state_48705 = G__48886;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_48705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_48705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___48884,res,vec__48698,v,p,job,jobs,results))
})();
var state__48314__auto__ = (function (){var statearr_48714 = f__48313__auto__.call(null);
(statearr_48714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___48884);

return statearr_48714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___48884,res,vec__48698,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48715){
var vec__48716 = p__48715;
var v = cljs.core.nth.call(null,vec__48716,(0),null);
var p = cljs.core.nth.call(null,vec__48716,(1),null);
var job = vec__48716;
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
var n__35576__auto___48887 = n;
var __48888 = (0);
while(true){
if((__48888 < n__35576__auto___48887)){
var G__48719_48889 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48719_48889) {
case "compute":
var c__48312__auto___48891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48888,c__48312__auto___48891,G__48719_48889,n__35576__auto___48887,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (__48888,c__48312__auto___48891,G__48719_48889,n__35576__auto___48887,jobs,results,process,async){
return (function (state_48732){
var state_val_48733 = (state_48732[(1)]);
if((state_val_48733 === (1))){
var state_48732__$1 = state_48732;
var statearr_48734_48892 = state_48732__$1;
(statearr_48734_48892[(2)] = null);

(statearr_48734_48892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (2))){
var state_48732__$1 = state_48732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48732__$1,(4),jobs);
} else {
if((state_val_48733 === (3))){
var inst_48730 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48732__$1,inst_48730);
} else {
if((state_val_48733 === (4))){
var inst_48722 = (state_48732[(2)]);
var inst_48723 = process.call(null,inst_48722);
var state_48732__$1 = state_48732;
if(cljs.core.truth_(inst_48723)){
var statearr_48735_48893 = state_48732__$1;
(statearr_48735_48893[(1)] = (5));

} else {
var statearr_48736_48894 = state_48732__$1;
(statearr_48736_48894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (5))){
var state_48732__$1 = state_48732;
var statearr_48737_48895 = state_48732__$1;
(statearr_48737_48895[(2)] = null);

(statearr_48737_48895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (6))){
var state_48732__$1 = state_48732;
var statearr_48738_48896 = state_48732__$1;
(statearr_48738_48896[(2)] = null);

(statearr_48738_48896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48733 === (7))){
var inst_48728 = (state_48732[(2)]);
var state_48732__$1 = state_48732;
var statearr_48739_48897 = state_48732__$1;
(statearr_48739_48897[(2)] = inst_48728);

(statearr_48739_48897[(1)] = (3));


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
});})(__48888,c__48312__auto___48891,G__48719_48889,n__35576__auto___48887,jobs,results,process,async))
;
return ((function (__48888,switch__48198__auto__,c__48312__auto___48891,G__48719_48889,n__35576__auto___48887,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_48743 = [null,null,null,null,null,null,null];
(statearr_48743[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_48743[(1)] = (1));

return statearr_48743;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_48732){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_48732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e48744){if((e48744 instanceof Object)){
var ex__48202__auto__ = e48744;
var statearr_48745_48898 = state_48732;
(statearr_48745_48898[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48899 = state_48732;
state_48732 = G__48899;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_48732){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_48732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(__48888,switch__48198__auto__,c__48312__auto___48891,G__48719_48889,n__35576__auto___48887,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_48746 = f__48313__auto__.call(null);
(statearr_48746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___48891);

return statearr_48746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(__48888,c__48312__auto___48891,G__48719_48889,n__35576__auto___48887,jobs,results,process,async))
);


break;
case "async":
var c__48312__auto___48900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48888,c__48312__auto___48900,G__48719_48889,n__35576__auto___48887,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (__48888,c__48312__auto___48900,G__48719_48889,n__35576__auto___48887,jobs,results,process,async){
return (function (state_48759){
var state_val_48760 = (state_48759[(1)]);
if((state_val_48760 === (1))){
var state_48759__$1 = state_48759;
var statearr_48761_48901 = state_48759__$1;
(statearr_48761_48901[(2)] = null);

(statearr_48761_48901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (2))){
var state_48759__$1 = state_48759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48759__$1,(4),jobs);
} else {
if((state_val_48760 === (3))){
var inst_48757 = (state_48759[(2)]);
var state_48759__$1 = state_48759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48759__$1,inst_48757);
} else {
if((state_val_48760 === (4))){
var inst_48749 = (state_48759[(2)]);
var inst_48750 = async.call(null,inst_48749);
var state_48759__$1 = state_48759;
if(cljs.core.truth_(inst_48750)){
var statearr_48762_48902 = state_48759__$1;
(statearr_48762_48902[(1)] = (5));

} else {
var statearr_48763_48903 = state_48759__$1;
(statearr_48763_48903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (5))){
var state_48759__$1 = state_48759;
var statearr_48764_48904 = state_48759__$1;
(statearr_48764_48904[(2)] = null);

(statearr_48764_48904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (6))){
var state_48759__$1 = state_48759;
var statearr_48765_48905 = state_48759__$1;
(statearr_48765_48905[(2)] = null);

(statearr_48765_48905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (7))){
var inst_48755 = (state_48759[(2)]);
var state_48759__$1 = state_48759;
var statearr_48766_48906 = state_48759__$1;
(statearr_48766_48906[(2)] = inst_48755);

(statearr_48766_48906[(1)] = (3));


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
});})(__48888,c__48312__auto___48900,G__48719_48889,n__35576__auto___48887,jobs,results,process,async))
;
return ((function (__48888,switch__48198__auto__,c__48312__auto___48900,G__48719_48889,n__35576__auto___48887,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_48770 = [null,null,null,null,null,null,null];
(statearr_48770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_48770[(1)] = (1));

return statearr_48770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_48759){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_48759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e48771){if((e48771 instanceof Object)){
var ex__48202__auto__ = e48771;
var statearr_48772_48907 = state_48759;
(statearr_48772_48907[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48908 = state_48759;
state_48759 = G__48908;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_48759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_48759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(__48888,switch__48198__auto__,c__48312__auto___48900,G__48719_48889,n__35576__auto___48887,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_48773 = f__48313__auto__.call(null);
(statearr_48773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___48900);

return statearr_48773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(__48888,c__48312__auto___48900,G__48719_48889,n__35576__auto___48887,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__48909 = (__48888 + (1));
__48888 = G__48909;
continue;
} else {
}
break;
}

var c__48312__auto___48910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___48910,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___48910,jobs,results,process,async){
return (function (state_48795){
var state_val_48796 = (state_48795[(1)]);
if((state_val_48796 === (1))){
var state_48795__$1 = state_48795;
var statearr_48797_48911 = state_48795__$1;
(statearr_48797_48911[(2)] = null);

(statearr_48797_48911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48796 === (2))){
var state_48795__$1 = state_48795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48795__$1,(4),from);
} else {
if((state_val_48796 === (3))){
var inst_48793 = (state_48795[(2)]);
var state_48795__$1 = state_48795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48795__$1,inst_48793);
} else {
if((state_val_48796 === (4))){
var inst_48776 = (state_48795[(7)]);
var inst_48776__$1 = (state_48795[(2)]);
var inst_48777 = (inst_48776__$1 == null);
var state_48795__$1 = (function (){var statearr_48798 = state_48795;
(statearr_48798[(7)] = inst_48776__$1);

return statearr_48798;
})();
if(cljs.core.truth_(inst_48777)){
var statearr_48799_48912 = state_48795__$1;
(statearr_48799_48912[(1)] = (5));

} else {
var statearr_48800_48913 = state_48795__$1;
(statearr_48800_48913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48796 === (5))){
var inst_48779 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48795__$1 = state_48795;
var statearr_48801_48914 = state_48795__$1;
(statearr_48801_48914[(2)] = inst_48779);

(statearr_48801_48914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48796 === (6))){
var inst_48781 = (state_48795[(8)]);
var inst_48776 = (state_48795[(7)]);
var inst_48781__$1 = cljs.core.async.chan.call(null,(1));
var inst_48782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48783 = [inst_48776,inst_48781__$1];
var inst_48784 = (new cljs.core.PersistentVector(null,2,(5),inst_48782,inst_48783,null));
var state_48795__$1 = (function (){var statearr_48802 = state_48795;
(statearr_48802[(8)] = inst_48781__$1);

return statearr_48802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48795__$1,(8),jobs,inst_48784);
} else {
if((state_val_48796 === (7))){
var inst_48791 = (state_48795[(2)]);
var state_48795__$1 = state_48795;
var statearr_48803_48915 = state_48795__$1;
(statearr_48803_48915[(2)] = inst_48791);

(statearr_48803_48915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48796 === (8))){
var inst_48781 = (state_48795[(8)]);
var inst_48786 = (state_48795[(2)]);
var state_48795__$1 = (function (){var statearr_48804 = state_48795;
(statearr_48804[(9)] = inst_48786);

return statearr_48804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48795__$1,(9),results,inst_48781);
} else {
if((state_val_48796 === (9))){
var inst_48788 = (state_48795[(2)]);
var state_48795__$1 = (function (){var statearr_48805 = state_48795;
(statearr_48805[(10)] = inst_48788);

return statearr_48805;
})();
var statearr_48806_48916 = state_48795__$1;
(statearr_48806_48916[(2)] = null);

(statearr_48806_48916[(1)] = (2));


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
});})(c__48312__auto___48910,jobs,results,process,async))
;
return ((function (switch__48198__auto__,c__48312__auto___48910,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_48810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_48810[(1)] = (1));

return statearr_48810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_48795){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_48795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e48811){if((e48811 instanceof Object)){
var ex__48202__auto__ = e48811;
var statearr_48812_48917 = state_48795;
(statearr_48812_48917[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48918 = state_48795;
state_48795 = G__48918;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_48795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_48795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___48910,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_48813 = f__48313__auto__.call(null);
(statearr_48813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___48910);

return statearr_48813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___48910,jobs,results,process,async))
);


var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,jobs,results,process,async){
return (function (state_48851){
var state_val_48852 = (state_48851[(1)]);
if((state_val_48852 === (7))){
var inst_48847 = (state_48851[(2)]);
var state_48851__$1 = state_48851;
var statearr_48853_48919 = state_48851__$1;
(statearr_48853_48919[(2)] = inst_48847);

(statearr_48853_48919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (20))){
var state_48851__$1 = state_48851;
var statearr_48854_48920 = state_48851__$1;
(statearr_48854_48920[(2)] = null);

(statearr_48854_48920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (1))){
var state_48851__$1 = state_48851;
var statearr_48855_48921 = state_48851__$1;
(statearr_48855_48921[(2)] = null);

(statearr_48855_48921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (4))){
var inst_48816 = (state_48851[(7)]);
var inst_48816__$1 = (state_48851[(2)]);
var inst_48817 = (inst_48816__$1 == null);
var state_48851__$1 = (function (){var statearr_48856 = state_48851;
(statearr_48856[(7)] = inst_48816__$1);

return statearr_48856;
})();
if(cljs.core.truth_(inst_48817)){
var statearr_48857_48922 = state_48851__$1;
(statearr_48857_48922[(1)] = (5));

} else {
var statearr_48858_48923 = state_48851__$1;
(statearr_48858_48923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (15))){
var inst_48829 = (state_48851[(8)]);
var state_48851__$1 = state_48851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48851__$1,(18),to,inst_48829);
} else {
if((state_val_48852 === (21))){
var inst_48842 = (state_48851[(2)]);
var state_48851__$1 = state_48851;
var statearr_48859_48924 = state_48851__$1;
(statearr_48859_48924[(2)] = inst_48842);

(statearr_48859_48924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (13))){
var inst_48844 = (state_48851[(2)]);
var state_48851__$1 = (function (){var statearr_48860 = state_48851;
(statearr_48860[(9)] = inst_48844);

return statearr_48860;
})();
var statearr_48861_48925 = state_48851__$1;
(statearr_48861_48925[(2)] = null);

(statearr_48861_48925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (6))){
var inst_48816 = (state_48851[(7)]);
var state_48851__$1 = state_48851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48851__$1,(11),inst_48816);
} else {
if((state_val_48852 === (17))){
var inst_48837 = (state_48851[(2)]);
var state_48851__$1 = state_48851;
if(cljs.core.truth_(inst_48837)){
var statearr_48862_48926 = state_48851__$1;
(statearr_48862_48926[(1)] = (19));

} else {
var statearr_48863_48927 = state_48851__$1;
(statearr_48863_48927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (3))){
var inst_48849 = (state_48851[(2)]);
var state_48851__$1 = state_48851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48851__$1,inst_48849);
} else {
if((state_val_48852 === (12))){
var inst_48826 = (state_48851[(10)]);
var state_48851__$1 = state_48851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48851__$1,(14),inst_48826);
} else {
if((state_val_48852 === (2))){
var state_48851__$1 = state_48851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48851__$1,(4),results);
} else {
if((state_val_48852 === (19))){
var state_48851__$1 = state_48851;
var statearr_48864_48928 = state_48851__$1;
(statearr_48864_48928[(2)] = null);

(statearr_48864_48928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (11))){
var inst_48826 = (state_48851[(2)]);
var state_48851__$1 = (function (){var statearr_48865 = state_48851;
(statearr_48865[(10)] = inst_48826);

return statearr_48865;
})();
var statearr_48866_48929 = state_48851__$1;
(statearr_48866_48929[(2)] = null);

(statearr_48866_48929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (9))){
var state_48851__$1 = state_48851;
var statearr_48867_48930 = state_48851__$1;
(statearr_48867_48930[(2)] = null);

(statearr_48867_48930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (5))){
var state_48851__$1 = state_48851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48868_48931 = state_48851__$1;
(statearr_48868_48931[(1)] = (8));

} else {
var statearr_48869_48932 = state_48851__$1;
(statearr_48869_48932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (14))){
var inst_48831 = (state_48851[(11)]);
var inst_48829 = (state_48851[(8)]);
var inst_48829__$1 = (state_48851[(2)]);
var inst_48830 = (inst_48829__$1 == null);
var inst_48831__$1 = cljs.core.not.call(null,inst_48830);
var state_48851__$1 = (function (){var statearr_48870 = state_48851;
(statearr_48870[(11)] = inst_48831__$1);

(statearr_48870[(8)] = inst_48829__$1);

return statearr_48870;
})();
if(inst_48831__$1){
var statearr_48871_48933 = state_48851__$1;
(statearr_48871_48933[(1)] = (15));

} else {
var statearr_48872_48934 = state_48851__$1;
(statearr_48872_48934[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (16))){
var inst_48831 = (state_48851[(11)]);
var state_48851__$1 = state_48851;
var statearr_48873_48935 = state_48851__$1;
(statearr_48873_48935[(2)] = inst_48831);

(statearr_48873_48935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (10))){
var inst_48823 = (state_48851[(2)]);
var state_48851__$1 = state_48851;
var statearr_48874_48936 = state_48851__$1;
(statearr_48874_48936[(2)] = inst_48823);

(statearr_48874_48936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (18))){
var inst_48834 = (state_48851[(2)]);
var state_48851__$1 = state_48851;
var statearr_48875_48937 = state_48851__$1;
(statearr_48875_48937[(2)] = inst_48834);

(statearr_48875_48937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48852 === (8))){
var inst_48820 = cljs.core.async.close_BANG_.call(null,to);
var state_48851__$1 = state_48851;
var statearr_48876_48938 = state_48851__$1;
(statearr_48876_48938[(2)] = inst_48820);

(statearr_48876_48938[(1)] = (10));


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
var statearr_48880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_48880[(1)] = (1));

return statearr_48880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_48851){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_48851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e48881){if((e48881 instanceof Object)){
var ex__48202__auto__ = e48881;
var statearr_48882_48939 = state_48851;
(statearr_48882_48939[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48940 = state_48851;
state_48851 = G__48940;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_48851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_48851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_48883 = f__48313__auto__.call(null);
(statearr_48883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_48883;
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
var args48941 = [];
var len__35776__auto___48944 = arguments.length;
var i__35777__auto___48945 = (0);
while(true){
if((i__35777__auto___48945 < len__35776__auto___48944)){
args48941.push((arguments[i__35777__auto___48945]));

var G__48946 = (i__35777__auto___48945 + (1));
i__35777__auto___48945 = G__48946;
continue;
} else {
}
break;
}

var G__48943 = args48941.length;
switch (G__48943) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48941.length)].join('')));

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
var args48948 = [];
var len__35776__auto___48951 = arguments.length;
var i__35777__auto___48952 = (0);
while(true){
if((i__35777__auto___48952 < len__35776__auto___48951)){
args48948.push((arguments[i__35777__auto___48952]));

var G__48953 = (i__35777__auto___48952 + (1));
i__35777__auto___48952 = G__48953;
continue;
} else {
}
break;
}

var G__48950 = args48948.length;
switch (G__48950) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48948.length)].join('')));

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
var args48955 = [];
var len__35776__auto___49008 = arguments.length;
var i__35777__auto___49009 = (0);
while(true){
if((i__35777__auto___49009 < len__35776__auto___49008)){
args48955.push((arguments[i__35777__auto___49009]));

var G__49010 = (i__35777__auto___49009 + (1));
i__35777__auto___49009 = G__49010;
continue;
} else {
}
break;
}

var G__48957 = args48955.length;
switch (G__48957) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48955.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__48312__auto___49012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___49012,tc,fc){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___49012,tc,fc){
return (function (state_48983){
var state_val_48984 = (state_48983[(1)]);
if((state_val_48984 === (7))){
var inst_48979 = (state_48983[(2)]);
var state_48983__$1 = state_48983;
var statearr_48985_49013 = state_48983__$1;
(statearr_48985_49013[(2)] = inst_48979);

(statearr_48985_49013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (1))){
var state_48983__$1 = state_48983;
var statearr_48986_49014 = state_48983__$1;
(statearr_48986_49014[(2)] = null);

(statearr_48986_49014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (4))){
var inst_48960 = (state_48983[(7)]);
var inst_48960__$1 = (state_48983[(2)]);
var inst_48961 = (inst_48960__$1 == null);
var state_48983__$1 = (function (){var statearr_48987 = state_48983;
(statearr_48987[(7)] = inst_48960__$1);

return statearr_48987;
})();
if(cljs.core.truth_(inst_48961)){
var statearr_48988_49015 = state_48983__$1;
(statearr_48988_49015[(1)] = (5));

} else {
var statearr_48989_49016 = state_48983__$1;
(statearr_48989_49016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (13))){
var state_48983__$1 = state_48983;
var statearr_48990_49017 = state_48983__$1;
(statearr_48990_49017[(2)] = null);

(statearr_48990_49017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (6))){
var inst_48960 = (state_48983[(7)]);
var inst_48966 = p.call(null,inst_48960);
var state_48983__$1 = state_48983;
if(cljs.core.truth_(inst_48966)){
var statearr_48991_49018 = state_48983__$1;
(statearr_48991_49018[(1)] = (9));

} else {
var statearr_48992_49019 = state_48983__$1;
(statearr_48992_49019[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (3))){
var inst_48981 = (state_48983[(2)]);
var state_48983__$1 = state_48983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48983__$1,inst_48981);
} else {
if((state_val_48984 === (12))){
var state_48983__$1 = state_48983;
var statearr_48993_49020 = state_48983__$1;
(statearr_48993_49020[(2)] = null);

(statearr_48993_49020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (2))){
var state_48983__$1 = state_48983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48983__$1,(4),ch);
} else {
if((state_val_48984 === (11))){
var inst_48960 = (state_48983[(7)]);
var inst_48970 = (state_48983[(2)]);
var state_48983__$1 = state_48983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48983__$1,(8),inst_48970,inst_48960);
} else {
if((state_val_48984 === (9))){
var state_48983__$1 = state_48983;
var statearr_48994_49021 = state_48983__$1;
(statearr_48994_49021[(2)] = tc);

(statearr_48994_49021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (5))){
var inst_48963 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48964 = cljs.core.async.close_BANG_.call(null,fc);
var state_48983__$1 = (function (){var statearr_48995 = state_48983;
(statearr_48995[(8)] = inst_48963);

return statearr_48995;
})();
var statearr_48996_49022 = state_48983__$1;
(statearr_48996_49022[(2)] = inst_48964);

(statearr_48996_49022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (14))){
var inst_48977 = (state_48983[(2)]);
var state_48983__$1 = state_48983;
var statearr_48997_49023 = state_48983__$1;
(statearr_48997_49023[(2)] = inst_48977);

(statearr_48997_49023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (10))){
var state_48983__$1 = state_48983;
var statearr_48998_49024 = state_48983__$1;
(statearr_48998_49024[(2)] = fc);

(statearr_48998_49024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48984 === (8))){
var inst_48972 = (state_48983[(2)]);
var state_48983__$1 = state_48983;
if(cljs.core.truth_(inst_48972)){
var statearr_48999_49025 = state_48983__$1;
(statearr_48999_49025[(1)] = (12));

} else {
var statearr_49000_49026 = state_48983__$1;
(statearr_49000_49026[(1)] = (13));

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
});})(c__48312__auto___49012,tc,fc))
;
return ((function (switch__48198__auto__,c__48312__auto___49012,tc,fc){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_49004 = [null,null,null,null,null,null,null,null,null];
(statearr_49004[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_49004[(1)] = (1));

return statearr_49004;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_48983){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_48983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e49005){if((e49005 instanceof Object)){
var ex__48202__auto__ = e49005;
var statearr_49006_49027 = state_48983;
(statearr_49006_49027[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49028 = state_48983;
state_48983 = G__49028;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_48983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_48983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___49012,tc,fc))
})();
var state__48314__auto__ = (function (){var statearr_49007 = f__48313__auto__.call(null);
(statearr_49007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___49012);

return statearr_49007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___49012,tc,fc))
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
return (function (state_49092){
var state_val_49093 = (state_49092[(1)]);
if((state_val_49093 === (7))){
var inst_49088 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
var statearr_49094_49115 = state_49092__$1;
(statearr_49094_49115[(2)] = inst_49088);

(statearr_49094_49115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (1))){
var inst_49072 = init;
var state_49092__$1 = (function (){var statearr_49095 = state_49092;
(statearr_49095[(7)] = inst_49072);

return statearr_49095;
})();
var statearr_49096_49116 = state_49092__$1;
(statearr_49096_49116[(2)] = null);

(statearr_49096_49116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (4))){
var inst_49075 = (state_49092[(8)]);
var inst_49075__$1 = (state_49092[(2)]);
var inst_49076 = (inst_49075__$1 == null);
var state_49092__$1 = (function (){var statearr_49097 = state_49092;
(statearr_49097[(8)] = inst_49075__$1);

return statearr_49097;
})();
if(cljs.core.truth_(inst_49076)){
var statearr_49098_49117 = state_49092__$1;
(statearr_49098_49117[(1)] = (5));

} else {
var statearr_49099_49118 = state_49092__$1;
(statearr_49099_49118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (6))){
var inst_49072 = (state_49092[(7)]);
var inst_49079 = (state_49092[(9)]);
var inst_49075 = (state_49092[(8)]);
var inst_49079__$1 = f.call(null,inst_49072,inst_49075);
var inst_49080 = cljs.core.reduced_QMARK_.call(null,inst_49079__$1);
var state_49092__$1 = (function (){var statearr_49100 = state_49092;
(statearr_49100[(9)] = inst_49079__$1);

return statearr_49100;
})();
if(inst_49080){
var statearr_49101_49119 = state_49092__$1;
(statearr_49101_49119[(1)] = (8));

} else {
var statearr_49102_49120 = state_49092__$1;
(statearr_49102_49120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (3))){
var inst_49090 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49092__$1,inst_49090);
} else {
if((state_val_49093 === (2))){
var state_49092__$1 = state_49092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49092__$1,(4),ch);
} else {
if((state_val_49093 === (9))){
var inst_49079 = (state_49092[(9)]);
var inst_49072 = inst_49079;
var state_49092__$1 = (function (){var statearr_49103 = state_49092;
(statearr_49103[(7)] = inst_49072);

return statearr_49103;
})();
var statearr_49104_49121 = state_49092__$1;
(statearr_49104_49121[(2)] = null);

(statearr_49104_49121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (5))){
var inst_49072 = (state_49092[(7)]);
var state_49092__$1 = state_49092;
var statearr_49105_49122 = state_49092__$1;
(statearr_49105_49122[(2)] = inst_49072);

(statearr_49105_49122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (10))){
var inst_49086 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
var statearr_49106_49123 = state_49092__$1;
(statearr_49106_49123[(2)] = inst_49086);

(statearr_49106_49123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (8))){
var inst_49079 = (state_49092[(9)]);
var inst_49082 = cljs.core.deref.call(null,inst_49079);
var state_49092__$1 = state_49092;
var statearr_49107_49124 = state_49092__$1;
(statearr_49107_49124[(2)] = inst_49082);

(statearr_49107_49124[(1)] = (10));


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
var statearr_49111 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49111[(0)] = cljs$core$async$reduce_$_state_machine__48199__auto__);

(statearr_49111[(1)] = (1));

return statearr_49111;
});
var cljs$core$async$reduce_$_state_machine__48199__auto____1 = (function (state_49092){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_49092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e49112){if((e49112 instanceof Object)){
var ex__48202__auto__ = e49112;
var statearr_49113_49125 = state_49092;
(statearr_49113_49125[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49126 = state_49092;
state_49092 = G__49126;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48199__auto__ = function(state_49092){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48199__auto____1.call(this,state_49092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48199__auto____0;
cljs$core$async$reduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48199__auto____1;
return cljs$core$async$reduce_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_49114 = f__48313__auto__.call(null);
(statearr_49114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_49114;
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
return (function (state_49146){
var state_val_49147 = (state_49146[(1)]);
if((state_val_49147 === (1))){
var inst_49141 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_49146__$1 = state_49146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49146__$1,(2),inst_49141);
} else {
if((state_val_49147 === (2))){
var inst_49143 = (state_49146[(2)]);
var inst_49144 = f__$1.call(null,inst_49143);
var state_49146__$1 = state_49146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49146__$1,inst_49144);
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
var statearr_49151 = [null,null,null,null,null,null,null];
(statearr_49151[(0)] = cljs$core$async$transduce_$_state_machine__48199__auto__);

(statearr_49151[(1)] = (1));

return statearr_49151;
});
var cljs$core$async$transduce_$_state_machine__48199__auto____1 = (function (state_49146){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_49146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e49152){if((e49152 instanceof Object)){
var ex__48202__auto__ = e49152;
var statearr_49153_49155 = state_49146;
(statearr_49153_49155[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49156 = state_49146;
state_49146 = G__49156;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48199__auto__ = function(state_49146){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48199__auto____1.call(this,state_49146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48199__auto____0;
cljs$core$async$transduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48199__auto____1;
return cljs$core$async$transduce_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,f__$1))
})();
var state__48314__auto__ = (function (){var statearr_49154 = f__48313__auto__.call(null);
(statearr_49154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_49154;
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
var args49157 = [];
var len__35776__auto___49209 = arguments.length;
var i__35777__auto___49210 = (0);
while(true){
if((i__35777__auto___49210 < len__35776__auto___49209)){
args49157.push((arguments[i__35777__auto___49210]));

var G__49211 = (i__35777__auto___49210 + (1));
i__35777__auto___49210 = G__49211;
continue;
} else {
}
break;
}

var G__49159 = args49157.length;
switch (G__49159) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49157.length)].join('')));

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
return (function (state_49184){
var state_val_49185 = (state_49184[(1)]);
if((state_val_49185 === (7))){
var inst_49166 = (state_49184[(2)]);
var state_49184__$1 = state_49184;
var statearr_49186_49213 = state_49184__$1;
(statearr_49186_49213[(2)] = inst_49166);

(statearr_49186_49213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (1))){
var inst_49160 = cljs.core.seq.call(null,coll);
var inst_49161 = inst_49160;
var state_49184__$1 = (function (){var statearr_49187 = state_49184;
(statearr_49187[(7)] = inst_49161);

return statearr_49187;
})();
var statearr_49188_49214 = state_49184__$1;
(statearr_49188_49214[(2)] = null);

(statearr_49188_49214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (4))){
var inst_49161 = (state_49184[(7)]);
var inst_49164 = cljs.core.first.call(null,inst_49161);
var state_49184__$1 = state_49184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49184__$1,(7),ch,inst_49164);
} else {
if((state_val_49185 === (13))){
var inst_49178 = (state_49184[(2)]);
var state_49184__$1 = state_49184;
var statearr_49189_49215 = state_49184__$1;
(statearr_49189_49215[(2)] = inst_49178);

(statearr_49189_49215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (6))){
var inst_49169 = (state_49184[(2)]);
var state_49184__$1 = state_49184;
if(cljs.core.truth_(inst_49169)){
var statearr_49190_49216 = state_49184__$1;
(statearr_49190_49216[(1)] = (8));

} else {
var statearr_49191_49217 = state_49184__$1;
(statearr_49191_49217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (3))){
var inst_49182 = (state_49184[(2)]);
var state_49184__$1 = state_49184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49184__$1,inst_49182);
} else {
if((state_val_49185 === (12))){
var state_49184__$1 = state_49184;
var statearr_49192_49218 = state_49184__$1;
(statearr_49192_49218[(2)] = null);

(statearr_49192_49218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (2))){
var inst_49161 = (state_49184[(7)]);
var state_49184__$1 = state_49184;
if(cljs.core.truth_(inst_49161)){
var statearr_49193_49219 = state_49184__$1;
(statearr_49193_49219[(1)] = (4));

} else {
var statearr_49194_49220 = state_49184__$1;
(statearr_49194_49220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (11))){
var inst_49175 = cljs.core.async.close_BANG_.call(null,ch);
var state_49184__$1 = state_49184;
var statearr_49195_49221 = state_49184__$1;
(statearr_49195_49221[(2)] = inst_49175);

(statearr_49195_49221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (9))){
var state_49184__$1 = state_49184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49196_49222 = state_49184__$1;
(statearr_49196_49222[(1)] = (11));

} else {
var statearr_49197_49223 = state_49184__$1;
(statearr_49197_49223[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (5))){
var inst_49161 = (state_49184[(7)]);
var state_49184__$1 = state_49184;
var statearr_49198_49224 = state_49184__$1;
(statearr_49198_49224[(2)] = inst_49161);

(statearr_49198_49224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (10))){
var inst_49180 = (state_49184[(2)]);
var state_49184__$1 = state_49184;
var statearr_49199_49225 = state_49184__$1;
(statearr_49199_49225[(2)] = inst_49180);

(statearr_49199_49225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49185 === (8))){
var inst_49161 = (state_49184[(7)]);
var inst_49171 = cljs.core.next.call(null,inst_49161);
var inst_49161__$1 = inst_49171;
var state_49184__$1 = (function (){var statearr_49200 = state_49184;
(statearr_49200[(7)] = inst_49161__$1);

return statearr_49200;
})();
var statearr_49201_49226 = state_49184__$1;
(statearr_49201_49226[(2)] = null);

(statearr_49201_49226[(1)] = (2));


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
var statearr_49205 = [null,null,null,null,null,null,null,null];
(statearr_49205[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_49205[(1)] = (1));

return statearr_49205;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_49184){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_49184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e49206){if((e49206 instanceof Object)){
var ex__48202__auto__ = e49206;
var statearr_49207_49227 = state_49184;
(statearr_49207_49227[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49228 = state_49184;
state_49184 = G__49228;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_49184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_49184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_49208 = f__48313__auto__.call(null);
(statearr_49208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_49208;
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
if(typeof cljs.core.async.t_cljs$core$async49454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49454 = (function (ch,cs,meta49455){
this.ch = ch;
this.cs = cs;
this.meta49455 = meta49455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async49454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49456,meta49455__$1){
var self__ = this;
var _49456__$1 = this;
return (new cljs.core.async.t_cljs$core$async49454(self__.ch,self__.cs,meta49455__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async49454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49456){
var self__ = this;
var _49456__$1 = this;
return self__.meta49455;
});})(cs))
;


cljs.core.async.t_cljs$core$async49454.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async49454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async49454.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async49454.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async49454.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async49454.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49454.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49455","meta49455",-1118355559,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async49454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49454";

cljs.core.async.t_cljs$core$async49454.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async49454");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async49454 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async49454(ch__$1,cs__$1,meta49455){
return (new cljs.core.async.t_cljs$core$async49454(ch__$1,cs__$1,meta49455));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async49454(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__48312__auto___49679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___49679,cs,m,dchan,dctr,done){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___49679,cs,m,dchan,dctr,done){
return (function (state_49591){
var state_val_49592 = (state_49591[(1)]);
if((state_val_49592 === (7))){
var inst_49587 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49593_49680 = state_49591__$1;
(statearr_49593_49680[(2)] = inst_49587);

(statearr_49593_49680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (20))){
var inst_49490 = (state_49591[(7)]);
var inst_49502 = cljs.core.first.call(null,inst_49490);
var inst_49503 = cljs.core.nth.call(null,inst_49502,(0),null);
var inst_49504 = cljs.core.nth.call(null,inst_49502,(1),null);
var state_49591__$1 = (function (){var statearr_49594 = state_49591;
(statearr_49594[(8)] = inst_49503);

return statearr_49594;
})();
if(cljs.core.truth_(inst_49504)){
var statearr_49595_49681 = state_49591__$1;
(statearr_49595_49681[(1)] = (22));

} else {
var statearr_49596_49682 = state_49591__$1;
(statearr_49596_49682[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (27))){
var inst_49534 = (state_49591[(9)]);
var inst_49539 = (state_49591[(10)]);
var inst_49459 = (state_49591[(11)]);
var inst_49532 = (state_49591[(12)]);
var inst_49539__$1 = cljs.core._nth.call(null,inst_49532,inst_49534);
var inst_49540 = cljs.core.async.put_BANG_.call(null,inst_49539__$1,inst_49459,done);
var state_49591__$1 = (function (){var statearr_49597 = state_49591;
(statearr_49597[(10)] = inst_49539__$1);

return statearr_49597;
})();
if(cljs.core.truth_(inst_49540)){
var statearr_49598_49683 = state_49591__$1;
(statearr_49598_49683[(1)] = (30));

} else {
var statearr_49599_49684 = state_49591__$1;
(statearr_49599_49684[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (1))){
var state_49591__$1 = state_49591;
var statearr_49600_49685 = state_49591__$1;
(statearr_49600_49685[(2)] = null);

(statearr_49600_49685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (24))){
var inst_49490 = (state_49591[(7)]);
var inst_49509 = (state_49591[(2)]);
var inst_49510 = cljs.core.next.call(null,inst_49490);
var inst_49468 = inst_49510;
var inst_49469 = null;
var inst_49470 = (0);
var inst_49471 = (0);
var state_49591__$1 = (function (){var statearr_49601 = state_49591;
(statearr_49601[(13)] = inst_49509);

(statearr_49601[(14)] = inst_49468);

(statearr_49601[(15)] = inst_49469);

(statearr_49601[(16)] = inst_49471);

(statearr_49601[(17)] = inst_49470);

return statearr_49601;
})();
var statearr_49602_49686 = state_49591__$1;
(statearr_49602_49686[(2)] = null);

(statearr_49602_49686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (39))){
var state_49591__$1 = state_49591;
var statearr_49606_49687 = state_49591__$1;
(statearr_49606_49687[(2)] = null);

(statearr_49606_49687[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (4))){
var inst_49459 = (state_49591[(11)]);
var inst_49459__$1 = (state_49591[(2)]);
var inst_49460 = (inst_49459__$1 == null);
var state_49591__$1 = (function (){var statearr_49607 = state_49591;
(statearr_49607[(11)] = inst_49459__$1);

return statearr_49607;
})();
if(cljs.core.truth_(inst_49460)){
var statearr_49608_49688 = state_49591__$1;
(statearr_49608_49688[(1)] = (5));

} else {
var statearr_49609_49689 = state_49591__$1;
(statearr_49609_49689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (15))){
var inst_49468 = (state_49591[(14)]);
var inst_49469 = (state_49591[(15)]);
var inst_49471 = (state_49591[(16)]);
var inst_49470 = (state_49591[(17)]);
var inst_49486 = (state_49591[(2)]);
var inst_49487 = (inst_49471 + (1));
var tmp49603 = inst_49468;
var tmp49604 = inst_49469;
var tmp49605 = inst_49470;
var inst_49468__$1 = tmp49603;
var inst_49469__$1 = tmp49604;
var inst_49470__$1 = tmp49605;
var inst_49471__$1 = inst_49487;
var state_49591__$1 = (function (){var statearr_49610 = state_49591;
(statearr_49610[(14)] = inst_49468__$1);

(statearr_49610[(15)] = inst_49469__$1);

(statearr_49610[(16)] = inst_49471__$1);

(statearr_49610[(18)] = inst_49486);

(statearr_49610[(17)] = inst_49470__$1);

return statearr_49610;
})();
var statearr_49611_49690 = state_49591__$1;
(statearr_49611_49690[(2)] = null);

(statearr_49611_49690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (21))){
var inst_49513 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49615_49691 = state_49591__$1;
(statearr_49615_49691[(2)] = inst_49513);

(statearr_49615_49691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (31))){
var inst_49539 = (state_49591[(10)]);
var inst_49543 = done.call(null,null);
var inst_49544 = cljs.core.async.untap_STAR_.call(null,m,inst_49539);
var state_49591__$1 = (function (){var statearr_49616 = state_49591;
(statearr_49616[(19)] = inst_49543);

return statearr_49616;
})();
var statearr_49617_49692 = state_49591__$1;
(statearr_49617_49692[(2)] = inst_49544);

(statearr_49617_49692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (32))){
var inst_49534 = (state_49591[(9)]);
var inst_49531 = (state_49591[(20)]);
var inst_49532 = (state_49591[(12)]);
var inst_49533 = (state_49591[(21)]);
var inst_49546 = (state_49591[(2)]);
var inst_49547 = (inst_49534 + (1));
var tmp49612 = inst_49531;
var tmp49613 = inst_49532;
var tmp49614 = inst_49533;
var inst_49531__$1 = tmp49612;
var inst_49532__$1 = tmp49613;
var inst_49533__$1 = tmp49614;
var inst_49534__$1 = inst_49547;
var state_49591__$1 = (function (){var statearr_49618 = state_49591;
(statearr_49618[(9)] = inst_49534__$1);

(statearr_49618[(20)] = inst_49531__$1);

(statearr_49618[(12)] = inst_49532__$1);

(statearr_49618[(21)] = inst_49533__$1);

(statearr_49618[(22)] = inst_49546);

return statearr_49618;
})();
var statearr_49619_49693 = state_49591__$1;
(statearr_49619_49693[(2)] = null);

(statearr_49619_49693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (40))){
var inst_49559 = (state_49591[(23)]);
var inst_49563 = done.call(null,null);
var inst_49564 = cljs.core.async.untap_STAR_.call(null,m,inst_49559);
var state_49591__$1 = (function (){var statearr_49620 = state_49591;
(statearr_49620[(24)] = inst_49563);

return statearr_49620;
})();
var statearr_49621_49694 = state_49591__$1;
(statearr_49621_49694[(2)] = inst_49564);

(statearr_49621_49694[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (33))){
var inst_49550 = (state_49591[(25)]);
var inst_49552 = cljs.core.chunked_seq_QMARK_.call(null,inst_49550);
var state_49591__$1 = state_49591;
if(inst_49552){
var statearr_49622_49695 = state_49591__$1;
(statearr_49622_49695[(1)] = (36));

} else {
var statearr_49623_49696 = state_49591__$1;
(statearr_49623_49696[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (13))){
var inst_49480 = (state_49591[(26)]);
var inst_49483 = cljs.core.async.close_BANG_.call(null,inst_49480);
var state_49591__$1 = state_49591;
var statearr_49624_49697 = state_49591__$1;
(statearr_49624_49697[(2)] = inst_49483);

(statearr_49624_49697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (22))){
var inst_49503 = (state_49591[(8)]);
var inst_49506 = cljs.core.async.close_BANG_.call(null,inst_49503);
var state_49591__$1 = state_49591;
var statearr_49625_49698 = state_49591__$1;
(statearr_49625_49698[(2)] = inst_49506);

(statearr_49625_49698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (36))){
var inst_49550 = (state_49591[(25)]);
var inst_49554 = cljs.core.chunk_first.call(null,inst_49550);
var inst_49555 = cljs.core.chunk_rest.call(null,inst_49550);
var inst_49556 = cljs.core.count.call(null,inst_49554);
var inst_49531 = inst_49555;
var inst_49532 = inst_49554;
var inst_49533 = inst_49556;
var inst_49534 = (0);
var state_49591__$1 = (function (){var statearr_49626 = state_49591;
(statearr_49626[(9)] = inst_49534);

(statearr_49626[(20)] = inst_49531);

(statearr_49626[(12)] = inst_49532);

(statearr_49626[(21)] = inst_49533);

return statearr_49626;
})();
var statearr_49627_49699 = state_49591__$1;
(statearr_49627_49699[(2)] = null);

(statearr_49627_49699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (41))){
var inst_49550 = (state_49591[(25)]);
var inst_49566 = (state_49591[(2)]);
var inst_49567 = cljs.core.next.call(null,inst_49550);
var inst_49531 = inst_49567;
var inst_49532 = null;
var inst_49533 = (0);
var inst_49534 = (0);
var state_49591__$1 = (function (){var statearr_49628 = state_49591;
(statearr_49628[(9)] = inst_49534);

(statearr_49628[(20)] = inst_49531);

(statearr_49628[(27)] = inst_49566);

(statearr_49628[(12)] = inst_49532);

(statearr_49628[(21)] = inst_49533);

return statearr_49628;
})();
var statearr_49629_49700 = state_49591__$1;
(statearr_49629_49700[(2)] = null);

(statearr_49629_49700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (43))){
var state_49591__$1 = state_49591;
var statearr_49630_49701 = state_49591__$1;
(statearr_49630_49701[(2)] = null);

(statearr_49630_49701[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (29))){
var inst_49575 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49631_49702 = state_49591__$1;
(statearr_49631_49702[(2)] = inst_49575);

(statearr_49631_49702[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (44))){
var inst_49584 = (state_49591[(2)]);
var state_49591__$1 = (function (){var statearr_49632 = state_49591;
(statearr_49632[(28)] = inst_49584);

return statearr_49632;
})();
var statearr_49633_49703 = state_49591__$1;
(statearr_49633_49703[(2)] = null);

(statearr_49633_49703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (6))){
var inst_49523 = (state_49591[(29)]);
var inst_49522 = cljs.core.deref.call(null,cs);
var inst_49523__$1 = cljs.core.keys.call(null,inst_49522);
var inst_49524 = cljs.core.count.call(null,inst_49523__$1);
var inst_49525 = cljs.core.reset_BANG_.call(null,dctr,inst_49524);
var inst_49530 = cljs.core.seq.call(null,inst_49523__$1);
var inst_49531 = inst_49530;
var inst_49532 = null;
var inst_49533 = (0);
var inst_49534 = (0);
var state_49591__$1 = (function (){var statearr_49634 = state_49591;
(statearr_49634[(29)] = inst_49523__$1);

(statearr_49634[(9)] = inst_49534);

(statearr_49634[(20)] = inst_49531);

(statearr_49634[(12)] = inst_49532);

(statearr_49634[(21)] = inst_49533);

(statearr_49634[(30)] = inst_49525);

return statearr_49634;
})();
var statearr_49635_49704 = state_49591__$1;
(statearr_49635_49704[(2)] = null);

(statearr_49635_49704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (28))){
var inst_49531 = (state_49591[(20)]);
var inst_49550 = (state_49591[(25)]);
var inst_49550__$1 = cljs.core.seq.call(null,inst_49531);
var state_49591__$1 = (function (){var statearr_49636 = state_49591;
(statearr_49636[(25)] = inst_49550__$1);

return statearr_49636;
})();
if(inst_49550__$1){
var statearr_49637_49705 = state_49591__$1;
(statearr_49637_49705[(1)] = (33));

} else {
var statearr_49638_49706 = state_49591__$1;
(statearr_49638_49706[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (25))){
var inst_49534 = (state_49591[(9)]);
var inst_49533 = (state_49591[(21)]);
var inst_49536 = (inst_49534 < inst_49533);
var inst_49537 = inst_49536;
var state_49591__$1 = state_49591;
if(cljs.core.truth_(inst_49537)){
var statearr_49639_49707 = state_49591__$1;
(statearr_49639_49707[(1)] = (27));

} else {
var statearr_49640_49708 = state_49591__$1;
(statearr_49640_49708[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (34))){
var state_49591__$1 = state_49591;
var statearr_49641_49709 = state_49591__$1;
(statearr_49641_49709[(2)] = null);

(statearr_49641_49709[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (17))){
var state_49591__$1 = state_49591;
var statearr_49642_49710 = state_49591__$1;
(statearr_49642_49710[(2)] = null);

(statearr_49642_49710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (3))){
var inst_49589 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49591__$1,inst_49589);
} else {
if((state_val_49592 === (12))){
var inst_49518 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49643_49711 = state_49591__$1;
(statearr_49643_49711[(2)] = inst_49518);

(statearr_49643_49711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (2))){
var state_49591__$1 = state_49591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49591__$1,(4),ch);
} else {
if((state_val_49592 === (23))){
var state_49591__$1 = state_49591;
var statearr_49644_49712 = state_49591__$1;
(statearr_49644_49712[(2)] = null);

(statearr_49644_49712[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (35))){
var inst_49573 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49645_49713 = state_49591__$1;
(statearr_49645_49713[(2)] = inst_49573);

(statearr_49645_49713[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (19))){
var inst_49490 = (state_49591[(7)]);
var inst_49494 = cljs.core.chunk_first.call(null,inst_49490);
var inst_49495 = cljs.core.chunk_rest.call(null,inst_49490);
var inst_49496 = cljs.core.count.call(null,inst_49494);
var inst_49468 = inst_49495;
var inst_49469 = inst_49494;
var inst_49470 = inst_49496;
var inst_49471 = (0);
var state_49591__$1 = (function (){var statearr_49646 = state_49591;
(statearr_49646[(14)] = inst_49468);

(statearr_49646[(15)] = inst_49469);

(statearr_49646[(16)] = inst_49471);

(statearr_49646[(17)] = inst_49470);

return statearr_49646;
})();
var statearr_49647_49714 = state_49591__$1;
(statearr_49647_49714[(2)] = null);

(statearr_49647_49714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (11))){
var inst_49468 = (state_49591[(14)]);
var inst_49490 = (state_49591[(7)]);
var inst_49490__$1 = cljs.core.seq.call(null,inst_49468);
var state_49591__$1 = (function (){var statearr_49648 = state_49591;
(statearr_49648[(7)] = inst_49490__$1);

return statearr_49648;
})();
if(inst_49490__$1){
var statearr_49649_49715 = state_49591__$1;
(statearr_49649_49715[(1)] = (16));

} else {
var statearr_49650_49716 = state_49591__$1;
(statearr_49650_49716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (9))){
var inst_49520 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49651_49717 = state_49591__$1;
(statearr_49651_49717[(2)] = inst_49520);

(statearr_49651_49717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (5))){
var inst_49466 = cljs.core.deref.call(null,cs);
var inst_49467 = cljs.core.seq.call(null,inst_49466);
var inst_49468 = inst_49467;
var inst_49469 = null;
var inst_49470 = (0);
var inst_49471 = (0);
var state_49591__$1 = (function (){var statearr_49652 = state_49591;
(statearr_49652[(14)] = inst_49468);

(statearr_49652[(15)] = inst_49469);

(statearr_49652[(16)] = inst_49471);

(statearr_49652[(17)] = inst_49470);

return statearr_49652;
})();
var statearr_49653_49718 = state_49591__$1;
(statearr_49653_49718[(2)] = null);

(statearr_49653_49718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (14))){
var state_49591__$1 = state_49591;
var statearr_49654_49719 = state_49591__$1;
(statearr_49654_49719[(2)] = null);

(statearr_49654_49719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (45))){
var inst_49581 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49655_49720 = state_49591__$1;
(statearr_49655_49720[(2)] = inst_49581);

(statearr_49655_49720[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (26))){
var inst_49523 = (state_49591[(29)]);
var inst_49577 = (state_49591[(2)]);
var inst_49578 = cljs.core.seq.call(null,inst_49523);
var state_49591__$1 = (function (){var statearr_49656 = state_49591;
(statearr_49656[(31)] = inst_49577);

return statearr_49656;
})();
if(inst_49578){
var statearr_49657_49721 = state_49591__$1;
(statearr_49657_49721[(1)] = (42));

} else {
var statearr_49658_49722 = state_49591__$1;
(statearr_49658_49722[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (16))){
var inst_49490 = (state_49591[(7)]);
var inst_49492 = cljs.core.chunked_seq_QMARK_.call(null,inst_49490);
var state_49591__$1 = state_49591;
if(inst_49492){
var statearr_49659_49723 = state_49591__$1;
(statearr_49659_49723[(1)] = (19));

} else {
var statearr_49660_49724 = state_49591__$1;
(statearr_49660_49724[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (38))){
var inst_49570 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49661_49725 = state_49591__$1;
(statearr_49661_49725[(2)] = inst_49570);

(statearr_49661_49725[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (30))){
var state_49591__$1 = state_49591;
var statearr_49662_49726 = state_49591__$1;
(statearr_49662_49726[(2)] = null);

(statearr_49662_49726[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (10))){
var inst_49469 = (state_49591[(15)]);
var inst_49471 = (state_49591[(16)]);
var inst_49479 = cljs.core._nth.call(null,inst_49469,inst_49471);
var inst_49480 = cljs.core.nth.call(null,inst_49479,(0),null);
var inst_49481 = cljs.core.nth.call(null,inst_49479,(1),null);
var state_49591__$1 = (function (){var statearr_49663 = state_49591;
(statearr_49663[(26)] = inst_49480);

return statearr_49663;
})();
if(cljs.core.truth_(inst_49481)){
var statearr_49664_49727 = state_49591__$1;
(statearr_49664_49727[(1)] = (13));

} else {
var statearr_49665_49728 = state_49591__$1;
(statearr_49665_49728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (18))){
var inst_49516 = (state_49591[(2)]);
var state_49591__$1 = state_49591;
var statearr_49666_49729 = state_49591__$1;
(statearr_49666_49729[(2)] = inst_49516);

(statearr_49666_49729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (42))){
var state_49591__$1 = state_49591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49591__$1,(45),dchan);
} else {
if((state_val_49592 === (37))){
var inst_49550 = (state_49591[(25)]);
var inst_49459 = (state_49591[(11)]);
var inst_49559 = (state_49591[(23)]);
var inst_49559__$1 = cljs.core.first.call(null,inst_49550);
var inst_49560 = cljs.core.async.put_BANG_.call(null,inst_49559__$1,inst_49459,done);
var state_49591__$1 = (function (){var statearr_49667 = state_49591;
(statearr_49667[(23)] = inst_49559__$1);

return statearr_49667;
})();
if(cljs.core.truth_(inst_49560)){
var statearr_49668_49730 = state_49591__$1;
(statearr_49668_49730[(1)] = (39));

} else {
var statearr_49669_49731 = state_49591__$1;
(statearr_49669_49731[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49592 === (8))){
var inst_49471 = (state_49591[(16)]);
var inst_49470 = (state_49591[(17)]);
var inst_49473 = (inst_49471 < inst_49470);
var inst_49474 = inst_49473;
var state_49591__$1 = state_49591;
if(cljs.core.truth_(inst_49474)){
var statearr_49670_49732 = state_49591__$1;
(statearr_49670_49732[(1)] = (10));

} else {
var statearr_49671_49733 = state_49591__$1;
(statearr_49671_49733[(1)] = (11));

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
});})(c__48312__auto___49679,cs,m,dchan,dctr,done))
;
return ((function (switch__48198__auto__,c__48312__auto___49679,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48199__auto__ = null;
var cljs$core$async$mult_$_state_machine__48199__auto____0 = (function (){
var statearr_49675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49675[(0)] = cljs$core$async$mult_$_state_machine__48199__auto__);

(statearr_49675[(1)] = (1));

return statearr_49675;
});
var cljs$core$async$mult_$_state_machine__48199__auto____1 = (function (state_49591){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_49591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e49676){if((e49676 instanceof Object)){
var ex__48202__auto__ = e49676;
var statearr_49677_49734 = state_49591;
(statearr_49677_49734[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49735 = state_49591;
state_49591 = G__49735;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48199__auto__ = function(state_49591){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48199__auto____1.call(this,state_49591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48199__auto____0;
cljs$core$async$mult_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48199__auto____1;
return cljs$core$async$mult_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___49679,cs,m,dchan,dctr,done))
})();
var state__48314__auto__ = (function (){var statearr_49678 = f__48313__auto__.call(null);
(statearr_49678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___49679);

return statearr_49678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___49679,cs,m,dchan,dctr,done))
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
var args49736 = [];
var len__35776__auto___49739 = arguments.length;
var i__35777__auto___49740 = (0);
while(true){
if((i__35777__auto___49740 < len__35776__auto___49739)){
args49736.push((arguments[i__35777__auto___49740]));

var G__49741 = (i__35777__auto___49740 + (1));
i__35777__auto___49740 = G__49741;
continue;
} else {
}
break;
}

var G__49738 = args49736.length;
switch (G__49738) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49736.length)].join('')));

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
var len__35776__auto___49753 = arguments.length;
var i__35777__auto___49754 = (0);
while(true){
if((i__35777__auto___49754 < len__35776__auto___49753)){
args__35783__auto__.push((arguments[i__35777__auto___49754]));

var G__49755 = (i__35777__auto___49754 + (1));
i__35777__auto___49754 = G__49755;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((3) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35784__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49747){
var map__49748 = p__49747;
var map__49748__$1 = ((((!((map__49748 == null)))?((((map__49748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49748):map__49748);
var opts = map__49748__$1;
var statearr_49750_49756 = state;
(statearr_49750_49756[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__49748,map__49748__$1,opts){
return (function (val){
var statearr_49751_49757 = state;
(statearr_49751_49757[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49748,map__49748__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_49752_49758 = state;
(statearr_49752_49758[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49743){
var G__49744 = cljs.core.first.call(null,seq49743);
var seq49743__$1 = cljs.core.next.call(null,seq49743);
var G__49745 = cljs.core.first.call(null,seq49743__$1);
var seq49743__$2 = cljs.core.next.call(null,seq49743__$1);
var G__49746 = cljs.core.first.call(null,seq49743__$2);
var seq49743__$3 = cljs.core.next.call(null,seq49743__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49744,G__49745,G__49746,seq49743__$3);
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
if(typeof cljs.core.async.t_cljs$core$async49926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49926 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta49927){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta49927 = meta49927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49928,meta49927__$1){
var self__ = this;
var _49928__$1 = this;
return (new cljs.core.async.t_cljs$core$async49926(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta49927__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49928){
var self__ = this;
var _49928__$1 = this;
return self__.meta49927;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async49926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async49926.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta49927","meta49927",-1135031079,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49926";

cljs.core.async.t_cljs$core$async49926.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async49926");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async49926 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49926(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49927){
return (new cljs.core.async.t_cljs$core$async49926(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49927));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49926(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48312__auto___50093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___50093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___50093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50030){
var state_val_50031 = (state_50030[(1)]);
if((state_val_50031 === (7))){
var inst_49945 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
var statearr_50032_50094 = state_50030__$1;
(statearr_50032_50094[(2)] = inst_49945);

(statearr_50032_50094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (20))){
var inst_49957 = (state_50030[(7)]);
var state_50030__$1 = state_50030;
var statearr_50033_50095 = state_50030__$1;
(statearr_50033_50095[(2)] = inst_49957);

(statearr_50033_50095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (27))){
var state_50030__$1 = state_50030;
var statearr_50034_50096 = state_50030__$1;
(statearr_50034_50096[(2)] = null);

(statearr_50034_50096[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (1))){
var inst_49932 = (state_50030[(8)]);
var inst_49932__$1 = calc_state.call(null);
var inst_49934 = (inst_49932__$1 == null);
var inst_49935 = cljs.core.not.call(null,inst_49934);
var state_50030__$1 = (function (){var statearr_50035 = state_50030;
(statearr_50035[(8)] = inst_49932__$1);

return statearr_50035;
})();
if(inst_49935){
var statearr_50036_50097 = state_50030__$1;
(statearr_50036_50097[(1)] = (2));

} else {
var statearr_50037_50098 = state_50030__$1;
(statearr_50037_50098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (24))){
var inst_49981 = (state_50030[(9)]);
var inst_49990 = (state_50030[(10)]);
var inst_50004 = (state_50030[(11)]);
var inst_50004__$1 = inst_49981.call(null,inst_49990);
var state_50030__$1 = (function (){var statearr_50038 = state_50030;
(statearr_50038[(11)] = inst_50004__$1);

return statearr_50038;
})();
if(cljs.core.truth_(inst_50004__$1)){
var statearr_50039_50099 = state_50030__$1;
(statearr_50039_50099[(1)] = (29));

} else {
var statearr_50040_50100 = state_50030__$1;
(statearr_50040_50100[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (4))){
var inst_49948 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
if(cljs.core.truth_(inst_49948)){
var statearr_50041_50101 = state_50030__$1;
(statearr_50041_50101[(1)] = (8));

} else {
var statearr_50042_50102 = state_50030__$1;
(statearr_50042_50102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (15))){
var inst_49975 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
if(cljs.core.truth_(inst_49975)){
var statearr_50043_50103 = state_50030__$1;
(statearr_50043_50103[(1)] = (19));

} else {
var statearr_50044_50104 = state_50030__$1;
(statearr_50044_50104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (21))){
var inst_49980 = (state_50030[(12)]);
var inst_49980__$1 = (state_50030[(2)]);
var inst_49981 = cljs.core.get.call(null,inst_49980__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49982 = cljs.core.get.call(null,inst_49980__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49983 = cljs.core.get.call(null,inst_49980__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50030__$1 = (function (){var statearr_50045 = state_50030;
(statearr_50045[(9)] = inst_49981);

(statearr_50045[(12)] = inst_49980__$1);

(statearr_50045[(13)] = inst_49982);

return statearr_50045;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_50030__$1,(22),inst_49983);
} else {
if((state_val_50031 === (31))){
var inst_50012 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
if(cljs.core.truth_(inst_50012)){
var statearr_50046_50105 = state_50030__$1;
(statearr_50046_50105[(1)] = (32));

} else {
var statearr_50047_50106 = state_50030__$1;
(statearr_50047_50106[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (32))){
var inst_49989 = (state_50030[(14)]);
var state_50030__$1 = state_50030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50030__$1,(35),out,inst_49989);
} else {
if((state_val_50031 === (33))){
var inst_49980 = (state_50030[(12)]);
var inst_49957 = inst_49980;
var state_50030__$1 = (function (){var statearr_50048 = state_50030;
(statearr_50048[(7)] = inst_49957);

return statearr_50048;
})();
var statearr_50049_50107 = state_50030__$1;
(statearr_50049_50107[(2)] = null);

(statearr_50049_50107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (13))){
var inst_49957 = (state_50030[(7)]);
var inst_49964 = inst_49957.cljs$lang$protocol_mask$partition0$;
var inst_49965 = (inst_49964 & (64));
var inst_49966 = inst_49957.cljs$core$ISeq$;
var inst_49967 = (cljs.core.PROTOCOL_SENTINEL === inst_49966);
var inst_49968 = (inst_49965) || (inst_49967);
var state_50030__$1 = state_50030;
if(cljs.core.truth_(inst_49968)){
var statearr_50050_50108 = state_50030__$1;
(statearr_50050_50108[(1)] = (16));

} else {
var statearr_50051_50109 = state_50030__$1;
(statearr_50051_50109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (22))){
var inst_49990 = (state_50030[(10)]);
var inst_49989 = (state_50030[(14)]);
var inst_49988 = (state_50030[(2)]);
var inst_49989__$1 = cljs.core.nth.call(null,inst_49988,(0),null);
var inst_49990__$1 = cljs.core.nth.call(null,inst_49988,(1),null);
var inst_49991 = (inst_49989__$1 == null);
var inst_49992 = cljs.core._EQ_.call(null,inst_49990__$1,change);
var inst_49993 = (inst_49991) || (inst_49992);
var state_50030__$1 = (function (){var statearr_50052 = state_50030;
(statearr_50052[(10)] = inst_49990__$1);

(statearr_50052[(14)] = inst_49989__$1);

return statearr_50052;
})();
if(cljs.core.truth_(inst_49993)){
var statearr_50053_50110 = state_50030__$1;
(statearr_50053_50110[(1)] = (23));

} else {
var statearr_50054_50111 = state_50030__$1;
(statearr_50054_50111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (36))){
var inst_49980 = (state_50030[(12)]);
var inst_49957 = inst_49980;
var state_50030__$1 = (function (){var statearr_50055 = state_50030;
(statearr_50055[(7)] = inst_49957);

return statearr_50055;
})();
var statearr_50056_50112 = state_50030__$1;
(statearr_50056_50112[(2)] = null);

(statearr_50056_50112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (29))){
var inst_50004 = (state_50030[(11)]);
var state_50030__$1 = state_50030;
var statearr_50057_50113 = state_50030__$1;
(statearr_50057_50113[(2)] = inst_50004);

(statearr_50057_50113[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (6))){
var state_50030__$1 = state_50030;
var statearr_50058_50114 = state_50030__$1;
(statearr_50058_50114[(2)] = false);

(statearr_50058_50114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (28))){
var inst_50000 = (state_50030[(2)]);
var inst_50001 = calc_state.call(null);
var inst_49957 = inst_50001;
var state_50030__$1 = (function (){var statearr_50059 = state_50030;
(statearr_50059[(7)] = inst_49957);

(statearr_50059[(15)] = inst_50000);

return statearr_50059;
})();
var statearr_50060_50115 = state_50030__$1;
(statearr_50060_50115[(2)] = null);

(statearr_50060_50115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (25))){
var inst_50026 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
var statearr_50061_50116 = state_50030__$1;
(statearr_50061_50116[(2)] = inst_50026);

(statearr_50061_50116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (34))){
var inst_50024 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
var statearr_50062_50117 = state_50030__$1;
(statearr_50062_50117[(2)] = inst_50024);

(statearr_50062_50117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (17))){
var state_50030__$1 = state_50030;
var statearr_50063_50118 = state_50030__$1;
(statearr_50063_50118[(2)] = false);

(statearr_50063_50118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (3))){
var state_50030__$1 = state_50030;
var statearr_50064_50119 = state_50030__$1;
(statearr_50064_50119[(2)] = false);

(statearr_50064_50119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (12))){
var inst_50028 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50030__$1,inst_50028);
} else {
if((state_val_50031 === (2))){
var inst_49932 = (state_50030[(8)]);
var inst_49937 = inst_49932.cljs$lang$protocol_mask$partition0$;
var inst_49938 = (inst_49937 & (64));
var inst_49939 = inst_49932.cljs$core$ISeq$;
var inst_49940 = (cljs.core.PROTOCOL_SENTINEL === inst_49939);
var inst_49941 = (inst_49938) || (inst_49940);
var state_50030__$1 = state_50030;
if(cljs.core.truth_(inst_49941)){
var statearr_50065_50120 = state_50030__$1;
(statearr_50065_50120[(1)] = (5));

} else {
var statearr_50066_50121 = state_50030__$1;
(statearr_50066_50121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (23))){
var inst_49989 = (state_50030[(14)]);
var inst_49995 = (inst_49989 == null);
var state_50030__$1 = state_50030;
if(cljs.core.truth_(inst_49995)){
var statearr_50067_50122 = state_50030__$1;
(statearr_50067_50122[(1)] = (26));

} else {
var statearr_50068_50123 = state_50030__$1;
(statearr_50068_50123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (35))){
var inst_50015 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
if(cljs.core.truth_(inst_50015)){
var statearr_50069_50124 = state_50030__$1;
(statearr_50069_50124[(1)] = (36));

} else {
var statearr_50070_50125 = state_50030__$1;
(statearr_50070_50125[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (19))){
var inst_49957 = (state_50030[(7)]);
var inst_49977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49957);
var state_50030__$1 = state_50030;
var statearr_50071_50126 = state_50030__$1;
(statearr_50071_50126[(2)] = inst_49977);

(statearr_50071_50126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (11))){
var inst_49957 = (state_50030[(7)]);
var inst_49961 = (inst_49957 == null);
var inst_49962 = cljs.core.not.call(null,inst_49961);
var state_50030__$1 = state_50030;
if(inst_49962){
var statearr_50072_50127 = state_50030__$1;
(statearr_50072_50127[(1)] = (13));

} else {
var statearr_50073_50128 = state_50030__$1;
(statearr_50073_50128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (9))){
var inst_49932 = (state_50030[(8)]);
var state_50030__$1 = state_50030;
var statearr_50074_50129 = state_50030__$1;
(statearr_50074_50129[(2)] = inst_49932);

(statearr_50074_50129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (5))){
var state_50030__$1 = state_50030;
var statearr_50075_50130 = state_50030__$1;
(statearr_50075_50130[(2)] = true);

(statearr_50075_50130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (14))){
var state_50030__$1 = state_50030;
var statearr_50076_50131 = state_50030__$1;
(statearr_50076_50131[(2)] = false);

(statearr_50076_50131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (26))){
var inst_49990 = (state_50030[(10)]);
var inst_49997 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49990);
var state_50030__$1 = state_50030;
var statearr_50077_50132 = state_50030__$1;
(statearr_50077_50132[(2)] = inst_49997);

(statearr_50077_50132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (16))){
var state_50030__$1 = state_50030;
var statearr_50078_50133 = state_50030__$1;
(statearr_50078_50133[(2)] = true);

(statearr_50078_50133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (38))){
var inst_50020 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
var statearr_50079_50134 = state_50030__$1;
(statearr_50079_50134[(2)] = inst_50020);

(statearr_50079_50134[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (30))){
var inst_49981 = (state_50030[(9)]);
var inst_49990 = (state_50030[(10)]);
var inst_49982 = (state_50030[(13)]);
var inst_50007 = cljs.core.empty_QMARK_.call(null,inst_49981);
var inst_50008 = inst_49982.call(null,inst_49990);
var inst_50009 = cljs.core.not.call(null,inst_50008);
var inst_50010 = (inst_50007) && (inst_50009);
var state_50030__$1 = state_50030;
var statearr_50080_50135 = state_50030__$1;
(statearr_50080_50135[(2)] = inst_50010);

(statearr_50080_50135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (10))){
var inst_49932 = (state_50030[(8)]);
var inst_49953 = (state_50030[(2)]);
var inst_49954 = cljs.core.get.call(null,inst_49953,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49955 = cljs.core.get.call(null,inst_49953,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49956 = cljs.core.get.call(null,inst_49953,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49957 = inst_49932;
var state_50030__$1 = (function (){var statearr_50081 = state_50030;
(statearr_50081[(16)] = inst_49954);

(statearr_50081[(17)] = inst_49956);

(statearr_50081[(7)] = inst_49957);

(statearr_50081[(18)] = inst_49955);

return statearr_50081;
})();
var statearr_50082_50136 = state_50030__$1;
(statearr_50082_50136[(2)] = null);

(statearr_50082_50136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (18))){
var inst_49972 = (state_50030[(2)]);
var state_50030__$1 = state_50030;
var statearr_50083_50137 = state_50030__$1;
(statearr_50083_50137[(2)] = inst_49972);

(statearr_50083_50137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (37))){
var state_50030__$1 = state_50030;
var statearr_50084_50138 = state_50030__$1;
(statearr_50084_50138[(2)] = null);

(statearr_50084_50138[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50031 === (8))){
var inst_49932 = (state_50030[(8)]);
var inst_49950 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49932);
var state_50030__$1 = state_50030;
var statearr_50085_50139 = state_50030__$1;
(statearr_50085_50139[(2)] = inst_49950);

(statearr_50085_50139[(1)] = (10));


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
});})(c__48312__auto___50093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48198__auto__,c__48312__auto___50093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48199__auto__ = null;
var cljs$core$async$mix_$_state_machine__48199__auto____0 = (function (){
var statearr_50089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50089[(0)] = cljs$core$async$mix_$_state_machine__48199__auto__);

(statearr_50089[(1)] = (1));

return statearr_50089;
});
var cljs$core$async$mix_$_state_machine__48199__auto____1 = (function (state_50030){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_50030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e50090){if((e50090 instanceof Object)){
var ex__48202__auto__ = e50090;
var statearr_50091_50140 = state_50030;
(statearr_50091_50140[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50141 = state_50030;
state_50030 = G__50141;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48199__auto__ = function(state_50030){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48199__auto____1.call(this,state_50030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48199__auto____0;
cljs$core$async$mix_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48199__auto____1;
return cljs$core$async$mix_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___50093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48314__auto__ = (function (){var statearr_50092 = f__48313__auto__.call(null);
(statearr_50092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___50093);

return statearr_50092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___50093,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args50142 = [];
var len__35776__auto___50145 = arguments.length;
var i__35777__auto___50146 = (0);
while(true){
if((i__35777__auto___50146 < len__35776__auto___50145)){
args50142.push((arguments[i__35777__auto___50146]));

var G__50147 = (i__35777__auto___50146 + (1));
i__35777__auto___50146 = G__50147;
continue;
} else {
}
break;
}

var G__50144 = args50142.length;
switch (G__50144) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50142.length)].join('')));

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
var args50150 = [];
var len__35776__auto___50275 = arguments.length;
var i__35777__auto___50276 = (0);
while(true){
if((i__35777__auto___50276 < len__35776__auto___50275)){
args50150.push((arguments[i__35777__auto___50276]));

var G__50277 = (i__35777__auto___50276 + (1));
i__35777__auto___50276 = G__50277;
continue;
} else {
}
break;
}

var G__50152 = args50150.length;
switch (G__50152) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50150.length)].join('')));

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
return (function (p1__50149_SHARP_){
if(cljs.core.truth_(p1__50149_SHARP_.call(null,topic))){
return p1__50149_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__50149_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34555__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async50153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50153 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50154){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50154 = meta50154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50155,meta50154__$1){
var self__ = this;
var _50155__$1 = this;
return (new cljs.core.async.t_cljs$core$async50153(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50154__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50155){
var self__ = this;
var _50155__$1 = this;
return self__.meta50154;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async50153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50153.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50154","meta50154",1900175603,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50153";

cljs.core.async.t_cljs$core$async50153.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async50153");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async50153 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50154){
return (new cljs.core.async.t_cljs$core$async50153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50154));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50153(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48312__auto___50279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___50279,mults,ensure_mult,p){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___50279,mults,ensure_mult,p){
return (function (state_50227){
var state_val_50228 = (state_50227[(1)]);
if((state_val_50228 === (7))){
var inst_50223 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
var statearr_50229_50280 = state_50227__$1;
(statearr_50229_50280[(2)] = inst_50223);

(statearr_50229_50280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (20))){
var state_50227__$1 = state_50227;
var statearr_50230_50281 = state_50227__$1;
(statearr_50230_50281[(2)] = null);

(statearr_50230_50281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (1))){
var state_50227__$1 = state_50227;
var statearr_50231_50282 = state_50227__$1;
(statearr_50231_50282[(2)] = null);

(statearr_50231_50282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (24))){
var inst_50206 = (state_50227[(7)]);
var inst_50215 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_50206);
var state_50227__$1 = state_50227;
var statearr_50232_50283 = state_50227__$1;
(statearr_50232_50283[(2)] = inst_50215);

(statearr_50232_50283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (4))){
var inst_50158 = (state_50227[(8)]);
var inst_50158__$1 = (state_50227[(2)]);
var inst_50159 = (inst_50158__$1 == null);
var state_50227__$1 = (function (){var statearr_50233 = state_50227;
(statearr_50233[(8)] = inst_50158__$1);

return statearr_50233;
})();
if(cljs.core.truth_(inst_50159)){
var statearr_50234_50284 = state_50227__$1;
(statearr_50234_50284[(1)] = (5));

} else {
var statearr_50235_50285 = state_50227__$1;
(statearr_50235_50285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (15))){
var inst_50200 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
var statearr_50236_50286 = state_50227__$1;
(statearr_50236_50286[(2)] = inst_50200);

(statearr_50236_50286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (21))){
var inst_50220 = (state_50227[(2)]);
var state_50227__$1 = (function (){var statearr_50237 = state_50227;
(statearr_50237[(9)] = inst_50220);

return statearr_50237;
})();
var statearr_50238_50287 = state_50227__$1;
(statearr_50238_50287[(2)] = null);

(statearr_50238_50287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (13))){
var inst_50182 = (state_50227[(10)]);
var inst_50184 = cljs.core.chunked_seq_QMARK_.call(null,inst_50182);
var state_50227__$1 = state_50227;
if(inst_50184){
var statearr_50239_50288 = state_50227__$1;
(statearr_50239_50288[(1)] = (16));

} else {
var statearr_50240_50289 = state_50227__$1;
(statearr_50240_50289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (22))){
var inst_50212 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
if(cljs.core.truth_(inst_50212)){
var statearr_50241_50290 = state_50227__$1;
(statearr_50241_50290[(1)] = (23));

} else {
var statearr_50242_50291 = state_50227__$1;
(statearr_50242_50291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (6))){
var inst_50206 = (state_50227[(7)]);
var inst_50208 = (state_50227[(11)]);
var inst_50158 = (state_50227[(8)]);
var inst_50206__$1 = topic_fn.call(null,inst_50158);
var inst_50207 = cljs.core.deref.call(null,mults);
var inst_50208__$1 = cljs.core.get.call(null,inst_50207,inst_50206__$1);
var state_50227__$1 = (function (){var statearr_50243 = state_50227;
(statearr_50243[(7)] = inst_50206__$1);

(statearr_50243[(11)] = inst_50208__$1);

return statearr_50243;
})();
if(cljs.core.truth_(inst_50208__$1)){
var statearr_50244_50292 = state_50227__$1;
(statearr_50244_50292[(1)] = (19));

} else {
var statearr_50245_50293 = state_50227__$1;
(statearr_50245_50293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (25))){
var inst_50217 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
var statearr_50246_50294 = state_50227__$1;
(statearr_50246_50294[(2)] = inst_50217);

(statearr_50246_50294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (17))){
var inst_50182 = (state_50227[(10)]);
var inst_50191 = cljs.core.first.call(null,inst_50182);
var inst_50192 = cljs.core.async.muxch_STAR_.call(null,inst_50191);
var inst_50193 = cljs.core.async.close_BANG_.call(null,inst_50192);
var inst_50194 = cljs.core.next.call(null,inst_50182);
var inst_50168 = inst_50194;
var inst_50169 = null;
var inst_50170 = (0);
var inst_50171 = (0);
var state_50227__$1 = (function (){var statearr_50247 = state_50227;
(statearr_50247[(12)] = inst_50170);

(statearr_50247[(13)] = inst_50169);

(statearr_50247[(14)] = inst_50171);

(statearr_50247[(15)] = inst_50193);

(statearr_50247[(16)] = inst_50168);

return statearr_50247;
})();
var statearr_50248_50295 = state_50227__$1;
(statearr_50248_50295[(2)] = null);

(statearr_50248_50295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (3))){
var inst_50225 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50227__$1,inst_50225);
} else {
if((state_val_50228 === (12))){
var inst_50202 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
var statearr_50249_50296 = state_50227__$1;
(statearr_50249_50296[(2)] = inst_50202);

(statearr_50249_50296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (2))){
var state_50227__$1 = state_50227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50227__$1,(4),ch);
} else {
if((state_val_50228 === (23))){
var state_50227__$1 = state_50227;
var statearr_50250_50297 = state_50227__$1;
(statearr_50250_50297[(2)] = null);

(statearr_50250_50297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (19))){
var inst_50208 = (state_50227[(11)]);
var inst_50158 = (state_50227[(8)]);
var inst_50210 = cljs.core.async.muxch_STAR_.call(null,inst_50208);
var state_50227__$1 = state_50227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50227__$1,(22),inst_50210,inst_50158);
} else {
if((state_val_50228 === (11))){
var inst_50182 = (state_50227[(10)]);
var inst_50168 = (state_50227[(16)]);
var inst_50182__$1 = cljs.core.seq.call(null,inst_50168);
var state_50227__$1 = (function (){var statearr_50251 = state_50227;
(statearr_50251[(10)] = inst_50182__$1);

return statearr_50251;
})();
if(inst_50182__$1){
var statearr_50252_50298 = state_50227__$1;
(statearr_50252_50298[(1)] = (13));

} else {
var statearr_50253_50299 = state_50227__$1;
(statearr_50253_50299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (9))){
var inst_50204 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
var statearr_50254_50300 = state_50227__$1;
(statearr_50254_50300[(2)] = inst_50204);

(statearr_50254_50300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (5))){
var inst_50165 = cljs.core.deref.call(null,mults);
var inst_50166 = cljs.core.vals.call(null,inst_50165);
var inst_50167 = cljs.core.seq.call(null,inst_50166);
var inst_50168 = inst_50167;
var inst_50169 = null;
var inst_50170 = (0);
var inst_50171 = (0);
var state_50227__$1 = (function (){var statearr_50255 = state_50227;
(statearr_50255[(12)] = inst_50170);

(statearr_50255[(13)] = inst_50169);

(statearr_50255[(14)] = inst_50171);

(statearr_50255[(16)] = inst_50168);

return statearr_50255;
})();
var statearr_50256_50301 = state_50227__$1;
(statearr_50256_50301[(2)] = null);

(statearr_50256_50301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (14))){
var state_50227__$1 = state_50227;
var statearr_50260_50302 = state_50227__$1;
(statearr_50260_50302[(2)] = null);

(statearr_50260_50302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (16))){
var inst_50182 = (state_50227[(10)]);
var inst_50186 = cljs.core.chunk_first.call(null,inst_50182);
var inst_50187 = cljs.core.chunk_rest.call(null,inst_50182);
var inst_50188 = cljs.core.count.call(null,inst_50186);
var inst_50168 = inst_50187;
var inst_50169 = inst_50186;
var inst_50170 = inst_50188;
var inst_50171 = (0);
var state_50227__$1 = (function (){var statearr_50261 = state_50227;
(statearr_50261[(12)] = inst_50170);

(statearr_50261[(13)] = inst_50169);

(statearr_50261[(14)] = inst_50171);

(statearr_50261[(16)] = inst_50168);

return statearr_50261;
})();
var statearr_50262_50303 = state_50227__$1;
(statearr_50262_50303[(2)] = null);

(statearr_50262_50303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (10))){
var inst_50170 = (state_50227[(12)]);
var inst_50169 = (state_50227[(13)]);
var inst_50171 = (state_50227[(14)]);
var inst_50168 = (state_50227[(16)]);
var inst_50176 = cljs.core._nth.call(null,inst_50169,inst_50171);
var inst_50177 = cljs.core.async.muxch_STAR_.call(null,inst_50176);
var inst_50178 = cljs.core.async.close_BANG_.call(null,inst_50177);
var inst_50179 = (inst_50171 + (1));
var tmp50257 = inst_50170;
var tmp50258 = inst_50169;
var tmp50259 = inst_50168;
var inst_50168__$1 = tmp50259;
var inst_50169__$1 = tmp50258;
var inst_50170__$1 = tmp50257;
var inst_50171__$1 = inst_50179;
var state_50227__$1 = (function (){var statearr_50263 = state_50227;
(statearr_50263[(17)] = inst_50178);

(statearr_50263[(12)] = inst_50170__$1);

(statearr_50263[(13)] = inst_50169__$1);

(statearr_50263[(14)] = inst_50171__$1);

(statearr_50263[(16)] = inst_50168__$1);

return statearr_50263;
})();
var statearr_50264_50304 = state_50227__$1;
(statearr_50264_50304[(2)] = null);

(statearr_50264_50304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (18))){
var inst_50197 = (state_50227[(2)]);
var state_50227__$1 = state_50227;
var statearr_50265_50305 = state_50227__$1;
(statearr_50265_50305[(2)] = inst_50197);

(statearr_50265_50305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50228 === (8))){
var inst_50170 = (state_50227[(12)]);
var inst_50171 = (state_50227[(14)]);
var inst_50173 = (inst_50171 < inst_50170);
var inst_50174 = inst_50173;
var state_50227__$1 = state_50227;
if(cljs.core.truth_(inst_50174)){
var statearr_50266_50306 = state_50227__$1;
(statearr_50266_50306[(1)] = (10));

} else {
var statearr_50267_50307 = state_50227__$1;
(statearr_50267_50307[(1)] = (11));

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
});})(c__48312__auto___50279,mults,ensure_mult,p))
;
return ((function (switch__48198__auto__,c__48312__auto___50279,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_50271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50271[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_50271[(1)] = (1));

return statearr_50271;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_50227){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_50227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e50272){if((e50272 instanceof Object)){
var ex__48202__auto__ = e50272;
var statearr_50273_50308 = state_50227;
(statearr_50273_50308[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50309 = state_50227;
state_50227 = G__50309;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_50227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_50227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___50279,mults,ensure_mult,p))
})();
var state__48314__auto__ = (function (){var statearr_50274 = f__48313__auto__.call(null);
(statearr_50274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___50279);

return statearr_50274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___50279,mults,ensure_mult,p))
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
var args50310 = [];
var len__35776__auto___50313 = arguments.length;
var i__35777__auto___50314 = (0);
while(true){
if((i__35777__auto___50314 < len__35776__auto___50313)){
args50310.push((arguments[i__35777__auto___50314]));

var G__50315 = (i__35777__auto___50314 + (1));
i__35777__auto___50314 = G__50315;
continue;
} else {
}
break;
}

var G__50312 = args50310.length;
switch (G__50312) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50310.length)].join('')));

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
var args50317 = [];
var len__35776__auto___50320 = arguments.length;
var i__35777__auto___50321 = (0);
while(true){
if((i__35777__auto___50321 < len__35776__auto___50320)){
args50317.push((arguments[i__35777__auto___50321]));

var G__50322 = (i__35777__auto___50321 + (1));
i__35777__auto___50321 = G__50322;
continue;
} else {
}
break;
}

var G__50319 = args50317.length;
switch (G__50319) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50317.length)].join('')));

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
var args50324 = [];
var len__35776__auto___50395 = arguments.length;
var i__35777__auto___50396 = (0);
while(true){
if((i__35777__auto___50396 < len__35776__auto___50395)){
args50324.push((arguments[i__35777__auto___50396]));

var G__50397 = (i__35777__auto___50396 + (1));
i__35777__auto___50396 = G__50397;
continue;
} else {
}
break;
}

var G__50326 = args50324.length;
switch (G__50326) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50324.length)].join('')));

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
var c__48312__auto___50399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___50399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___50399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50365){
var state_val_50366 = (state_50365[(1)]);
if((state_val_50366 === (7))){
var state_50365__$1 = state_50365;
var statearr_50367_50400 = state_50365__$1;
(statearr_50367_50400[(2)] = null);

(statearr_50367_50400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (1))){
var state_50365__$1 = state_50365;
var statearr_50368_50401 = state_50365__$1;
(statearr_50368_50401[(2)] = null);

(statearr_50368_50401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (4))){
var inst_50329 = (state_50365[(7)]);
var inst_50331 = (inst_50329 < cnt);
var state_50365__$1 = state_50365;
if(cljs.core.truth_(inst_50331)){
var statearr_50369_50402 = state_50365__$1;
(statearr_50369_50402[(1)] = (6));

} else {
var statearr_50370_50403 = state_50365__$1;
(statearr_50370_50403[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (15))){
var inst_50361 = (state_50365[(2)]);
var state_50365__$1 = state_50365;
var statearr_50371_50404 = state_50365__$1;
(statearr_50371_50404[(2)] = inst_50361);

(statearr_50371_50404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (13))){
var inst_50354 = cljs.core.async.close_BANG_.call(null,out);
var state_50365__$1 = state_50365;
var statearr_50372_50405 = state_50365__$1;
(statearr_50372_50405[(2)] = inst_50354);

(statearr_50372_50405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (6))){
var state_50365__$1 = state_50365;
var statearr_50373_50406 = state_50365__$1;
(statearr_50373_50406[(2)] = null);

(statearr_50373_50406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (3))){
var inst_50363 = (state_50365[(2)]);
var state_50365__$1 = state_50365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50365__$1,inst_50363);
} else {
if((state_val_50366 === (12))){
var inst_50351 = (state_50365[(8)]);
var inst_50351__$1 = (state_50365[(2)]);
var inst_50352 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50351__$1);
var state_50365__$1 = (function (){var statearr_50374 = state_50365;
(statearr_50374[(8)] = inst_50351__$1);

return statearr_50374;
})();
if(cljs.core.truth_(inst_50352)){
var statearr_50375_50407 = state_50365__$1;
(statearr_50375_50407[(1)] = (13));

} else {
var statearr_50376_50408 = state_50365__$1;
(statearr_50376_50408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (2))){
var inst_50328 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_50329 = (0);
var state_50365__$1 = (function (){var statearr_50377 = state_50365;
(statearr_50377[(7)] = inst_50329);

(statearr_50377[(9)] = inst_50328);

return statearr_50377;
})();
var statearr_50378_50409 = state_50365__$1;
(statearr_50378_50409[(2)] = null);

(statearr_50378_50409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (11))){
var inst_50329 = (state_50365[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50365,(10),Object,null,(9));
var inst_50338 = chs__$1.call(null,inst_50329);
var inst_50339 = done.call(null,inst_50329);
var inst_50340 = cljs.core.async.take_BANG_.call(null,inst_50338,inst_50339);
var state_50365__$1 = state_50365;
var statearr_50379_50410 = state_50365__$1;
(statearr_50379_50410[(2)] = inst_50340);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (9))){
var inst_50329 = (state_50365[(7)]);
var inst_50342 = (state_50365[(2)]);
var inst_50343 = (inst_50329 + (1));
var inst_50329__$1 = inst_50343;
var state_50365__$1 = (function (){var statearr_50380 = state_50365;
(statearr_50380[(10)] = inst_50342);

(statearr_50380[(7)] = inst_50329__$1);

return statearr_50380;
})();
var statearr_50381_50411 = state_50365__$1;
(statearr_50381_50411[(2)] = null);

(statearr_50381_50411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (5))){
var inst_50349 = (state_50365[(2)]);
var state_50365__$1 = (function (){var statearr_50382 = state_50365;
(statearr_50382[(11)] = inst_50349);

return statearr_50382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50365__$1,(12),dchan);
} else {
if((state_val_50366 === (14))){
var inst_50351 = (state_50365[(8)]);
var inst_50356 = cljs.core.apply.call(null,f,inst_50351);
var state_50365__$1 = state_50365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50365__$1,(16),out,inst_50356);
} else {
if((state_val_50366 === (16))){
var inst_50358 = (state_50365[(2)]);
var state_50365__$1 = (function (){var statearr_50383 = state_50365;
(statearr_50383[(12)] = inst_50358);

return statearr_50383;
})();
var statearr_50384_50412 = state_50365__$1;
(statearr_50384_50412[(2)] = null);

(statearr_50384_50412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (10))){
var inst_50333 = (state_50365[(2)]);
var inst_50334 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50365__$1 = (function (){var statearr_50385 = state_50365;
(statearr_50385[(13)] = inst_50333);

return statearr_50385;
})();
var statearr_50386_50413 = state_50365__$1;
(statearr_50386_50413[(2)] = inst_50334);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50366 === (8))){
var inst_50347 = (state_50365[(2)]);
var state_50365__$1 = state_50365;
var statearr_50387_50414 = state_50365__$1;
(statearr_50387_50414[(2)] = inst_50347);

(statearr_50387_50414[(1)] = (5));


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
});})(c__48312__auto___50399,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48198__auto__,c__48312__auto___50399,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_50391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50391[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_50391[(1)] = (1));

return statearr_50391;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_50365){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_50365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e50392){if((e50392 instanceof Object)){
var ex__48202__auto__ = e50392;
var statearr_50393_50415 = state_50365;
(statearr_50393_50415[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50416 = state_50365;
state_50365 = G__50416;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_50365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_50365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___50399,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48314__auto__ = (function (){var statearr_50394 = f__48313__auto__.call(null);
(statearr_50394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___50399);

return statearr_50394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___50399,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args50418 = [];
var len__35776__auto___50476 = arguments.length;
var i__35777__auto___50477 = (0);
while(true){
if((i__35777__auto___50477 < len__35776__auto___50476)){
args50418.push((arguments[i__35777__auto___50477]));

var G__50478 = (i__35777__auto___50477 + (1));
i__35777__auto___50477 = G__50478;
continue;
} else {
}
break;
}

var G__50420 = args50418.length;
switch (G__50420) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50418.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___50480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___50480,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___50480,out){
return (function (state_50452){
var state_val_50453 = (state_50452[(1)]);
if((state_val_50453 === (7))){
var inst_50431 = (state_50452[(7)]);
var inst_50432 = (state_50452[(8)]);
var inst_50431__$1 = (state_50452[(2)]);
var inst_50432__$1 = cljs.core.nth.call(null,inst_50431__$1,(0),null);
var inst_50433 = cljs.core.nth.call(null,inst_50431__$1,(1),null);
var inst_50434 = (inst_50432__$1 == null);
var state_50452__$1 = (function (){var statearr_50454 = state_50452;
(statearr_50454[(7)] = inst_50431__$1);

(statearr_50454[(8)] = inst_50432__$1);

(statearr_50454[(9)] = inst_50433);

return statearr_50454;
})();
if(cljs.core.truth_(inst_50434)){
var statearr_50455_50481 = state_50452__$1;
(statearr_50455_50481[(1)] = (8));

} else {
var statearr_50456_50482 = state_50452__$1;
(statearr_50456_50482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (1))){
var inst_50421 = cljs.core.vec.call(null,chs);
var inst_50422 = inst_50421;
var state_50452__$1 = (function (){var statearr_50457 = state_50452;
(statearr_50457[(10)] = inst_50422);

return statearr_50457;
})();
var statearr_50458_50483 = state_50452__$1;
(statearr_50458_50483[(2)] = null);

(statearr_50458_50483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (4))){
var inst_50422 = (state_50452[(10)]);
var state_50452__$1 = state_50452;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50452__$1,(7),inst_50422);
} else {
if((state_val_50453 === (6))){
var inst_50448 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50459_50484 = state_50452__$1;
(statearr_50459_50484[(2)] = inst_50448);

(statearr_50459_50484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (3))){
var inst_50450 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50452__$1,inst_50450);
} else {
if((state_val_50453 === (2))){
var inst_50422 = (state_50452[(10)]);
var inst_50424 = cljs.core.count.call(null,inst_50422);
var inst_50425 = (inst_50424 > (0));
var state_50452__$1 = state_50452;
if(cljs.core.truth_(inst_50425)){
var statearr_50461_50485 = state_50452__$1;
(statearr_50461_50485[(1)] = (4));

} else {
var statearr_50462_50486 = state_50452__$1;
(statearr_50462_50486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (11))){
var inst_50422 = (state_50452[(10)]);
var inst_50441 = (state_50452[(2)]);
var tmp50460 = inst_50422;
var inst_50422__$1 = tmp50460;
var state_50452__$1 = (function (){var statearr_50463 = state_50452;
(statearr_50463[(11)] = inst_50441);

(statearr_50463[(10)] = inst_50422__$1);

return statearr_50463;
})();
var statearr_50464_50487 = state_50452__$1;
(statearr_50464_50487[(2)] = null);

(statearr_50464_50487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (9))){
var inst_50432 = (state_50452[(8)]);
var state_50452__$1 = state_50452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50452__$1,(11),out,inst_50432);
} else {
if((state_val_50453 === (5))){
var inst_50446 = cljs.core.async.close_BANG_.call(null,out);
var state_50452__$1 = state_50452;
var statearr_50465_50488 = state_50452__$1;
(statearr_50465_50488[(2)] = inst_50446);

(statearr_50465_50488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (10))){
var inst_50444 = (state_50452[(2)]);
var state_50452__$1 = state_50452;
var statearr_50466_50489 = state_50452__$1;
(statearr_50466_50489[(2)] = inst_50444);

(statearr_50466_50489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50453 === (8))){
var inst_50431 = (state_50452[(7)]);
var inst_50422 = (state_50452[(10)]);
var inst_50432 = (state_50452[(8)]);
var inst_50433 = (state_50452[(9)]);
var inst_50436 = (function (){var cs = inst_50422;
var vec__50427 = inst_50431;
var v = inst_50432;
var c = inst_50433;
return ((function (cs,vec__50427,v,c,inst_50431,inst_50422,inst_50432,inst_50433,state_val_50453,c__48312__auto___50480,out){
return (function (p1__50417_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50417_SHARP_);
});
;})(cs,vec__50427,v,c,inst_50431,inst_50422,inst_50432,inst_50433,state_val_50453,c__48312__auto___50480,out))
})();
var inst_50437 = cljs.core.filterv.call(null,inst_50436,inst_50422);
var inst_50422__$1 = inst_50437;
var state_50452__$1 = (function (){var statearr_50467 = state_50452;
(statearr_50467[(10)] = inst_50422__$1);

return statearr_50467;
})();
var statearr_50468_50490 = state_50452__$1;
(statearr_50468_50490[(2)] = null);

(statearr_50468_50490[(1)] = (2));


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
});})(c__48312__auto___50480,out))
;
return ((function (switch__48198__auto__,c__48312__auto___50480,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_50472 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50472[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_50472[(1)] = (1));

return statearr_50472;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_50452){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_50452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e50473){if((e50473 instanceof Object)){
var ex__48202__auto__ = e50473;
var statearr_50474_50491 = state_50452;
(statearr_50474_50491[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50492 = state_50452;
state_50452 = G__50492;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_50452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_50452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___50480,out))
})();
var state__48314__auto__ = (function (){var statearr_50475 = f__48313__auto__.call(null);
(statearr_50475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___50480);

return statearr_50475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___50480,out))
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
var args50493 = [];
var len__35776__auto___50542 = arguments.length;
var i__35777__auto___50543 = (0);
while(true){
if((i__35777__auto___50543 < len__35776__auto___50542)){
args50493.push((arguments[i__35777__auto___50543]));

var G__50544 = (i__35777__auto___50543 + (1));
i__35777__auto___50543 = G__50544;
continue;
} else {
}
break;
}

var G__50495 = args50493.length;
switch (G__50495) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50493.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___50546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___50546,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___50546,out){
return (function (state_50519){
var state_val_50520 = (state_50519[(1)]);
if((state_val_50520 === (7))){
var inst_50501 = (state_50519[(7)]);
var inst_50501__$1 = (state_50519[(2)]);
var inst_50502 = (inst_50501__$1 == null);
var inst_50503 = cljs.core.not.call(null,inst_50502);
var state_50519__$1 = (function (){var statearr_50521 = state_50519;
(statearr_50521[(7)] = inst_50501__$1);

return statearr_50521;
})();
if(inst_50503){
var statearr_50522_50547 = state_50519__$1;
(statearr_50522_50547[(1)] = (8));

} else {
var statearr_50523_50548 = state_50519__$1;
(statearr_50523_50548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50520 === (1))){
var inst_50496 = (0);
var state_50519__$1 = (function (){var statearr_50524 = state_50519;
(statearr_50524[(8)] = inst_50496);

return statearr_50524;
})();
var statearr_50525_50549 = state_50519__$1;
(statearr_50525_50549[(2)] = null);

(statearr_50525_50549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50520 === (4))){
var state_50519__$1 = state_50519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50519__$1,(7),ch);
} else {
if((state_val_50520 === (6))){
var inst_50514 = (state_50519[(2)]);
var state_50519__$1 = state_50519;
var statearr_50526_50550 = state_50519__$1;
(statearr_50526_50550[(2)] = inst_50514);

(statearr_50526_50550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50520 === (3))){
var inst_50516 = (state_50519[(2)]);
var inst_50517 = cljs.core.async.close_BANG_.call(null,out);
var state_50519__$1 = (function (){var statearr_50527 = state_50519;
(statearr_50527[(9)] = inst_50516);

return statearr_50527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50519__$1,inst_50517);
} else {
if((state_val_50520 === (2))){
var inst_50496 = (state_50519[(8)]);
var inst_50498 = (inst_50496 < n);
var state_50519__$1 = state_50519;
if(cljs.core.truth_(inst_50498)){
var statearr_50528_50551 = state_50519__$1;
(statearr_50528_50551[(1)] = (4));

} else {
var statearr_50529_50552 = state_50519__$1;
(statearr_50529_50552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50520 === (11))){
var inst_50496 = (state_50519[(8)]);
var inst_50506 = (state_50519[(2)]);
var inst_50507 = (inst_50496 + (1));
var inst_50496__$1 = inst_50507;
var state_50519__$1 = (function (){var statearr_50530 = state_50519;
(statearr_50530[(8)] = inst_50496__$1);

(statearr_50530[(10)] = inst_50506);

return statearr_50530;
})();
var statearr_50531_50553 = state_50519__$1;
(statearr_50531_50553[(2)] = null);

(statearr_50531_50553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50520 === (9))){
var state_50519__$1 = state_50519;
var statearr_50532_50554 = state_50519__$1;
(statearr_50532_50554[(2)] = null);

(statearr_50532_50554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50520 === (5))){
var state_50519__$1 = state_50519;
var statearr_50533_50555 = state_50519__$1;
(statearr_50533_50555[(2)] = null);

(statearr_50533_50555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50520 === (10))){
var inst_50511 = (state_50519[(2)]);
var state_50519__$1 = state_50519;
var statearr_50534_50556 = state_50519__$1;
(statearr_50534_50556[(2)] = inst_50511);

(statearr_50534_50556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50520 === (8))){
var inst_50501 = (state_50519[(7)]);
var state_50519__$1 = state_50519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50519__$1,(11),out,inst_50501);
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
});})(c__48312__auto___50546,out))
;
return ((function (switch__48198__auto__,c__48312__auto___50546,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_50538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50538[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_50538[(1)] = (1));

return statearr_50538;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_50519){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_50519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e50539){if((e50539 instanceof Object)){
var ex__48202__auto__ = e50539;
var statearr_50540_50557 = state_50519;
(statearr_50540_50557[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50558 = state_50519;
state_50519 = G__50558;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_50519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_50519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___50546,out))
})();
var state__48314__auto__ = (function (){var statearr_50541 = f__48313__auto__.call(null);
(statearr_50541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___50546);

return statearr_50541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___50546,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50566 = (function (f,ch,meta50567){
this.f = f;
this.ch = ch;
this.meta50567 = meta50567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50568,meta50567__$1){
var self__ = this;
var _50568__$1 = this;
return (new cljs.core.async.t_cljs$core$async50566(self__.f,self__.ch,meta50567__$1));
});


cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50568){
var self__ = this;
var _50568__$1 = this;
return self__.meta50567;
});


cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async50569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50569 = (function (f,ch,meta50567,_,fn1,meta50570){
this.f = f;
this.ch = ch;
this.meta50567 = meta50567;
this._ = _;
this.fn1 = fn1;
this.meta50570 = meta50570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async50569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50571,meta50570__$1){
var self__ = this;
var _50571__$1 = this;
return (new cljs.core.async.t_cljs$core$async50569(self__.f,self__.ch,self__.meta50567,self__._,self__.fn1,meta50570__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async50569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50571){
var self__ = this;
var _50571__$1 = this;
return self__.meta50570;
});})(___$1))
;


cljs.core.async.t_cljs$core$async50569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async50569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async50569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50559_SHARP_){
return f1.call(null,(((p1__50559_SHARP_ == null))?null:self__.f.call(null,p1__50559_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async50569.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50567","meta50567",-1018880853,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50566","cljs.core.async/t_cljs$core$async50566",1304559272,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50570","meta50570",-1755914916,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50569";

cljs.core.async.t_cljs$core$async50569.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async50569");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async50569 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50569(f__$1,ch__$1,meta50567__$1,___$2,fn1__$1,meta50570){
return (new cljs.core.async.t_cljs$core$async50569(f__$1,ch__$1,meta50567__$1,___$2,fn1__$1,meta50570));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async50569(self__.f,self__.ch,self__.meta50567,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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


cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async50566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50567","meta50567",-1018880853,null)], null);
});

cljs.core.async.t_cljs$core$async50566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50566";

cljs.core.async.t_cljs$core$async50566.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async50566");
});

cljs.core.async.__GT_t_cljs$core$async50566 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50566(f__$1,ch__$1,meta50567){
return (new cljs.core.async.t_cljs$core$async50566(f__$1,ch__$1,meta50567));
});

}

return (new cljs.core.async.t_cljs$core$async50566(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50575 = (function (f,ch,meta50576){
this.f = f;
this.ch = ch;
this.meta50576 = meta50576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50577,meta50576__$1){
var self__ = this;
var _50577__$1 = this;
return (new cljs.core.async.t_cljs$core$async50575(self__.f,self__.ch,meta50576__$1));
});


cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50577){
var self__ = this;
var _50577__$1 = this;
return self__.meta50576;
});


cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async50575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50576","meta50576",-603171748,null)], null);
});

cljs.core.async.t_cljs$core$async50575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50575";

cljs.core.async.t_cljs$core$async50575.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async50575");
});

cljs.core.async.__GT_t_cljs$core$async50575 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50575(f__$1,ch__$1,meta50576){
return (new cljs.core.async.t_cljs$core$async50575(f__$1,ch__$1,meta50576));
});

}

return (new cljs.core.async.t_cljs$core$async50575(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async50581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50581 = (function (p,ch,meta50582){
this.p = p;
this.ch = ch;
this.meta50582 = meta50582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50583,meta50582__$1){
var self__ = this;
var _50583__$1 = this;
return (new cljs.core.async.t_cljs$core$async50581(self__.p,self__.ch,meta50582__$1));
});


cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50583){
var self__ = this;
var _50583__$1 = this;
return self__.meta50582;
});


cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async50581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async50581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50582","meta50582",250409025,null)], null);
});

cljs.core.async.t_cljs$core$async50581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50581";

cljs.core.async.t_cljs$core$async50581.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async50581");
});

cljs.core.async.__GT_t_cljs$core$async50581 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50581(p__$1,ch__$1,meta50582){
return (new cljs.core.async.t_cljs$core$async50581(p__$1,ch__$1,meta50582));
});

}

return (new cljs.core.async.t_cljs$core$async50581(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args50584 = [];
var len__35776__auto___50628 = arguments.length;
var i__35777__auto___50629 = (0);
while(true){
if((i__35777__auto___50629 < len__35776__auto___50628)){
args50584.push((arguments[i__35777__auto___50629]));

var G__50630 = (i__35777__auto___50629 + (1));
i__35777__auto___50629 = G__50630;
continue;
} else {
}
break;
}

var G__50586 = args50584.length;
switch (G__50586) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50584.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___50632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___50632,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___50632,out){
return (function (state_50607){
var state_val_50608 = (state_50607[(1)]);
if((state_val_50608 === (7))){
var inst_50603 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
var statearr_50609_50633 = state_50607__$1;
(statearr_50609_50633[(2)] = inst_50603);

(statearr_50609_50633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (1))){
var state_50607__$1 = state_50607;
var statearr_50610_50634 = state_50607__$1;
(statearr_50610_50634[(2)] = null);

(statearr_50610_50634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (4))){
var inst_50589 = (state_50607[(7)]);
var inst_50589__$1 = (state_50607[(2)]);
var inst_50590 = (inst_50589__$1 == null);
var state_50607__$1 = (function (){var statearr_50611 = state_50607;
(statearr_50611[(7)] = inst_50589__$1);

return statearr_50611;
})();
if(cljs.core.truth_(inst_50590)){
var statearr_50612_50635 = state_50607__$1;
(statearr_50612_50635[(1)] = (5));

} else {
var statearr_50613_50636 = state_50607__$1;
(statearr_50613_50636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (6))){
var inst_50589 = (state_50607[(7)]);
var inst_50594 = p.call(null,inst_50589);
var state_50607__$1 = state_50607;
if(cljs.core.truth_(inst_50594)){
var statearr_50614_50637 = state_50607__$1;
(statearr_50614_50637[(1)] = (8));

} else {
var statearr_50615_50638 = state_50607__$1;
(statearr_50615_50638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (3))){
var inst_50605 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50607__$1,inst_50605);
} else {
if((state_val_50608 === (2))){
var state_50607__$1 = state_50607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50607__$1,(4),ch);
} else {
if((state_val_50608 === (11))){
var inst_50597 = (state_50607[(2)]);
var state_50607__$1 = state_50607;
var statearr_50616_50639 = state_50607__$1;
(statearr_50616_50639[(2)] = inst_50597);

(statearr_50616_50639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (9))){
var state_50607__$1 = state_50607;
var statearr_50617_50640 = state_50607__$1;
(statearr_50617_50640[(2)] = null);

(statearr_50617_50640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (5))){
var inst_50592 = cljs.core.async.close_BANG_.call(null,out);
var state_50607__$1 = state_50607;
var statearr_50618_50641 = state_50607__$1;
(statearr_50618_50641[(2)] = inst_50592);

(statearr_50618_50641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (10))){
var inst_50600 = (state_50607[(2)]);
var state_50607__$1 = (function (){var statearr_50619 = state_50607;
(statearr_50619[(8)] = inst_50600);

return statearr_50619;
})();
var statearr_50620_50642 = state_50607__$1;
(statearr_50620_50642[(2)] = null);

(statearr_50620_50642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50608 === (8))){
var inst_50589 = (state_50607[(7)]);
var state_50607__$1 = state_50607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50607__$1,(11),out,inst_50589);
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
});})(c__48312__auto___50632,out))
;
return ((function (switch__48198__auto__,c__48312__auto___50632,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_50624 = [null,null,null,null,null,null,null,null,null];
(statearr_50624[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_50624[(1)] = (1));

return statearr_50624;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_50607){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_50607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e50625){if((e50625 instanceof Object)){
var ex__48202__auto__ = e50625;
var statearr_50626_50643 = state_50607;
(statearr_50626_50643[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50644 = state_50607;
state_50607 = G__50644;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_50607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_50607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___50632,out))
})();
var state__48314__auto__ = (function (){var statearr_50627 = f__48313__auto__.call(null);
(statearr_50627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___50632);

return statearr_50627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___50632,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args50645 = [];
var len__35776__auto___50648 = arguments.length;
var i__35777__auto___50649 = (0);
while(true){
if((i__35777__auto___50649 < len__35776__auto___50648)){
args50645.push((arguments[i__35777__auto___50649]));

var G__50650 = (i__35777__auto___50649 + (1));
i__35777__auto___50649 = G__50650;
continue;
} else {
}
break;
}

var G__50647 = args50645.length;
switch (G__50647) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50645.length)].join('')));

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
return (function (state_50817){
var state_val_50818 = (state_50817[(1)]);
if((state_val_50818 === (7))){
var inst_50813 = (state_50817[(2)]);
var state_50817__$1 = state_50817;
var statearr_50819_50860 = state_50817__$1;
(statearr_50819_50860[(2)] = inst_50813);

(statearr_50819_50860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (20))){
var inst_50783 = (state_50817[(7)]);
var inst_50794 = (state_50817[(2)]);
var inst_50795 = cljs.core.next.call(null,inst_50783);
var inst_50769 = inst_50795;
var inst_50770 = null;
var inst_50771 = (0);
var inst_50772 = (0);
var state_50817__$1 = (function (){var statearr_50820 = state_50817;
(statearr_50820[(8)] = inst_50769);

(statearr_50820[(9)] = inst_50770);

(statearr_50820[(10)] = inst_50771);

(statearr_50820[(11)] = inst_50772);

(statearr_50820[(12)] = inst_50794);

return statearr_50820;
})();
var statearr_50821_50861 = state_50817__$1;
(statearr_50821_50861[(2)] = null);

(statearr_50821_50861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (1))){
var state_50817__$1 = state_50817;
var statearr_50822_50862 = state_50817__$1;
(statearr_50822_50862[(2)] = null);

(statearr_50822_50862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (4))){
var inst_50758 = (state_50817[(13)]);
var inst_50758__$1 = (state_50817[(2)]);
var inst_50759 = (inst_50758__$1 == null);
var state_50817__$1 = (function (){var statearr_50823 = state_50817;
(statearr_50823[(13)] = inst_50758__$1);

return statearr_50823;
})();
if(cljs.core.truth_(inst_50759)){
var statearr_50824_50863 = state_50817__$1;
(statearr_50824_50863[(1)] = (5));

} else {
var statearr_50825_50864 = state_50817__$1;
(statearr_50825_50864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (15))){
var state_50817__$1 = state_50817;
var statearr_50829_50865 = state_50817__$1;
(statearr_50829_50865[(2)] = null);

(statearr_50829_50865[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (21))){
var state_50817__$1 = state_50817;
var statearr_50830_50866 = state_50817__$1;
(statearr_50830_50866[(2)] = null);

(statearr_50830_50866[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (13))){
var inst_50769 = (state_50817[(8)]);
var inst_50770 = (state_50817[(9)]);
var inst_50771 = (state_50817[(10)]);
var inst_50772 = (state_50817[(11)]);
var inst_50779 = (state_50817[(2)]);
var inst_50780 = (inst_50772 + (1));
var tmp50826 = inst_50769;
var tmp50827 = inst_50770;
var tmp50828 = inst_50771;
var inst_50769__$1 = tmp50826;
var inst_50770__$1 = tmp50827;
var inst_50771__$1 = tmp50828;
var inst_50772__$1 = inst_50780;
var state_50817__$1 = (function (){var statearr_50831 = state_50817;
(statearr_50831[(8)] = inst_50769__$1);

(statearr_50831[(9)] = inst_50770__$1);

(statearr_50831[(10)] = inst_50771__$1);

(statearr_50831[(14)] = inst_50779);

(statearr_50831[(11)] = inst_50772__$1);

return statearr_50831;
})();
var statearr_50832_50867 = state_50817__$1;
(statearr_50832_50867[(2)] = null);

(statearr_50832_50867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (22))){
var state_50817__$1 = state_50817;
var statearr_50833_50868 = state_50817__$1;
(statearr_50833_50868[(2)] = null);

(statearr_50833_50868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (6))){
var inst_50758 = (state_50817[(13)]);
var inst_50767 = f.call(null,inst_50758);
var inst_50768 = cljs.core.seq.call(null,inst_50767);
var inst_50769 = inst_50768;
var inst_50770 = null;
var inst_50771 = (0);
var inst_50772 = (0);
var state_50817__$1 = (function (){var statearr_50834 = state_50817;
(statearr_50834[(8)] = inst_50769);

(statearr_50834[(9)] = inst_50770);

(statearr_50834[(10)] = inst_50771);

(statearr_50834[(11)] = inst_50772);

return statearr_50834;
})();
var statearr_50835_50869 = state_50817__$1;
(statearr_50835_50869[(2)] = null);

(statearr_50835_50869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (17))){
var inst_50783 = (state_50817[(7)]);
var inst_50787 = cljs.core.chunk_first.call(null,inst_50783);
var inst_50788 = cljs.core.chunk_rest.call(null,inst_50783);
var inst_50789 = cljs.core.count.call(null,inst_50787);
var inst_50769 = inst_50788;
var inst_50770 = inst_50787;
var inst_50771 = inst_50789;
var inst_50772 = (0);
var state_50817__$1 = (function (){var statearr_50836 = state_50817;
(statearr_50836[(8)] = inst_50769);

(statearr_50836[(9)] = inst_50770);

(statearr_50836[(10)] = inst_50771);

(statearr_50836[(11)] = inst_50772);

return statearr_50836;
})();
var statearr_50837_50870 = state_50817__$1;
(statearr_50837_50870[(2)] = null);

(statearr_50837_50870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (3))){
var inst_50815 = (state_50817[(2)]);
var state_50817__$1 = state_50817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50817__$1,inst_50815);
} else {
if((state_val_50818 === (12))){
var inst_50803 = (state_50817[(2)]);
var state_50817__$1 = state_50817;
var statearr_50838_50871 = state_50817__$1;
(statearr_50838_50871[(2)] = inst_50803);

(statearr_50838_50871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (2))){
var state_50817__$1 = state_50817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50817__$1,(4),in$);
} else {
if((state_val_50818 === (23))){
var inst_50811 = (state_50817[(2)]);
var state_50817__$1 = state_50817;
var statearr_50839_50872 = state_50817__$1;
(statearr_50839_50872[(2)] = inst_50811);

(statearr_50839_50872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (19))){
var inst_50798 = (state_50817[(2)]);
var state_50817__$1 = state_50817;
var statearr_50840_50873 = state_50817__$1;
(statearr_50840_50873[(2)] = inst_50798);

(statearr_50840_50873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (11))){
var inst_50769 = (state_50817[(8)]);
var inst_50783 = (state_50817[(7)]);
var inst_50783__$1 = cljs.core.seq.call(null,inst_50769);
var state_50817__$1 = (function (){var statearr_50841 = state_50817;
(statearr_50841[(7)] = inst_50783__$1);

return statearr_50841;
})();
if(inst_50783__$1){
var statearr_50842_50874 = state_50817__$1;
(statearr_50842_50874[(1)] = (14));

} else {
var statearr_50843_50875 = state_50817__$1;
(statearr_50843_50875[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (9))){
var inst_50805 = (state_50817[(2)]);
var inst_50806 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_50817__$1 = (function (){var statearr_50844 = state_50817;
(statearr_50844[(15)] = inst_50805);

return statearr_50844;
})();
if(cljs.core.truth_(inst_50806)){
var statearr_50845_50876 = state_50817__$1;
(statearr_50845_50876[(1)] = (21));

} else {
var statearr_50846_50877 = state_50817__$1;
(statearr_50846_50877[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (5))){
var inst_50761 = cljs.core.async.close_BANG_.call(null,out);
var state_50817__$1 = state_50817;
var statearr_50847_50878 = state_50817__$1;
(statearr_50847_50878[(2)] = inst_50761);

(statearr_50847_50878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (14))){
var inst_50783 = (state_50817[(7)]);
var inst_50785 = cljs.core.chunked_seq_QMARK_.call(null,inst_50783);
var state_50817__$1 = state_50817;
if(inst_50785){
var statearr_50848_50879 = state_50817__$1;
(statearr_50848_50879[(1)] = (17));

} else {
var statearr_50849_50880 = state_50817__$1;
(statearr_50849_50880[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (16))){
var inst_50801 = (state_50817[(2)]);
var state_50817__$1 = state_50817;
var statearr_50850_50881 = state_50817__$1;
(statearr_50850_50881[(2)] = inst_50801);

(statearr_50850_50881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50818 === (10))){
var inst_50770 = (state_50817[(9)]);
var inst_50772 = (state_50817[(11)]);
var inst_50777 = cljs.core._nth.call(null,inst_50770,inst_50772);
var state_50817__$1 = state_50817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50817__$1,(13),out,inst_50777);
} else {
if((state_val_50818 === (18))){
var inst_50783 = (state_50817[(7)]);
var inst_50792 = cljs.core.first.call(null,inst_50783);
var state_50817__$1 = state_50817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50817__$1,(20),out,inst_50792);
} else {
if((state_val_50818 === (8))){
var inst_50771 = (state_50817[(10)]);
var inst_50772 = (state_50817[(11)]);
var inst_50774 = (inst_50772 < inst_50771);
var inst_50775 = inst_50774;
var state_50817__$1 = state_50817;
if(cljs.core.truth_(inst_50775)){
var statearr_50851_50882 = state_50817__$1;
(statearr_50851_50882[(1)] = (10));

} else {
var statearr_50852_50883 = state_50817__$1;
(statearr_50852_50883[(1)] = (11));

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
var statearr_50856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50856[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__);

(statearr_50856[(1)] = (1));

return statearr_50856;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1 = (function (state_50817){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_50817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e50857){if((e50857 instanceof Object)){
var ex__48202__auto__ = e50857;
var statearr_50858_50884 = state_50817;
(statearr_50858_50884[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50885 = state_50817;
state_50817 = G__50885;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__ = function(state_50817){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1.call(this,state_50817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_50859 = f__48313__auto__.call(null);
(statearr_50859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_50859;
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
var args50886 = [];
var len__35776__auto___50889 = arguments.length;
var i__35777__auto___50890 = (0);
while(true){
if((i__35777__auto___50890 < len__35776__auto___50889)){
args50886.push((arguments[i__35777__auto___50890]));

var G__50891 = (i__35777__auto___50890 + (1));
i__35777__auto___50890 = G__50891;
continue;
} else {
}
break;
}

var G__50888 = args50886.length;
switch (G__50888) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50886.length)].join('')));

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
var args50893 = [];
var len__35776__auto___50896 = arguments.length;
var i__35777__auto___50897 = (0);
while(true){
if((i__35777__auto___50897 < len__35776__auto___50896)){
args50893.push((arguments[i__35777__auto___50897]));

var G__50898 = (i__35777__auto___50897 + (1));
i__35777__auto___50897 = G__50898;
continue;
} else {
}
break;
}

var G__50895 = args50893.length;
switch (G__50895) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50893.length)].join('')));

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
var args50900 = [];
var len__35776__auto___50951 = arguments.length;
var i__35777__auto___50952 = (0);
while(true){
if((i__35777__auto___50952 < len__35776__auto___50951)){
args50900.push((arguments[i__35777__auto___50952]));

var G__50953 = (i__35777__auto___50952 + (1));
i__35777__auto___50952 = G__50953;
continue;
} else {
}
break;
}

var G__50902 = args50900.length;
switch (G__50902) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50900.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___50955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___50955,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___50955,out){
return (function (state_50926){
var state_val_50927 = (state_50926[(1)]);
if((state_val_50927 === (7))){
var inst_50921 = (state_50926[(2)]);
var state_50926__$1 = state_50926;
var statearr_50928_50956 = state_50926__$1;
(statearr_50928_50956[(2)] = inst_50921);

(statearr_50928_50956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50927 === (1))){
var inst_50903 = null;
var state_50926__$1 = (function (){var statearr_50929 = state_50926;
(statearr_50929[(7)] = inst_50903);

return statearr_50929;
})();
var statearr_50930_50957 = state_50926__$1;
(statearr_50930_50957[(2)] = null);

(statearr_50930_50957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50927 === (4))){
var inst_50906 = (state_50926[(8)]);
var inst_50906__$1 = (state_50926[(2)]);
var inst_50907 = (inst_50906__$1 == null);
var inst_50908 = cljs.core.not.call(null,inst_50907);
var state_50926__$1 = (function (){var statearr_50931 = state_50926;
(statearr_50931[(8)] = inst_50906__$1);

return statearr_50931;
})();
if(inst_50908){
var statearr_50932_50958 = state_50926__$1;
(statearr_50932_50958[(1)] = (5));

} else {
var statearr_50933_50959 = state_50926__$1;
(statearr_50933_50959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50927 === (6))){
var state_50926__$1 = state_50926;
var statearr_50934_50960 = state_50926__$1;
(statearr_50934_50960[(2)] = null);

(statearr_50934_50960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50927 === (3))){
var inst_50923 = (state_50926[(2)]);
var inst_50924 = cljs.core.async.close_BANG_.call(null,out);
var state_50926__$1 = (function (){var statearr_50935 = state_50926;
(statearr_50935[(9)] = inst_50923);

return statearr_50935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50926__$1,inst_50924);
} else {
if((state_val_50927 === (2))){
var state_50926__$1 = state_50926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50926__$1,(4),ch);
} else {
if((state_val_50927 === (11))){
var inst_50906 = (state_50926[(8)]);
var inst_50915 = (state_50926[(2)]);
var inst_50903 = inst_50906;
var state_50926__$1 = (function (){var statearr_50936 = state_50926;
(statearr_50936[(7)] = inst_50903);

(statearr_50936[(10)] = inst_50915);

return statearr_50936;
})();
var statearr_50937_50961 = state_50926__$1;
(statearr_50937_50961[(2)] = null);

(statearr_50937_50961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50927 === (9))){
var inst_50906 = (state_50926[(8)]);
var state_50926__$1 = state_50926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50926__$1,(11),out,inst_50906);
} else {
if((state_val_50927 === (5))){
var inst_50906 = (state_50926[(8)]);
var inst_50903 = (state_50926[(7)]);
var inst_50910 = cljs.core._EQ_.call(null,inst_50906,inst_50903);
var state_50926__$1 = state_50926;
if(inst_50910){
var statearr_50939_50962 = state_50926__$1;
(statearr_50939_50962[(1)] = (8));

} else {
var statearr_50940_50963 = state_50926__$1;
(statearr_50940_50963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50927 === (10))){
var inst_50918 = (state_50926[(2)]);
var state_50926__$1 = state_50926;
var statearr_50941_50964 = state_50926__$1;
(statearr_50941_50964[(2)] = inst_50918);

(statearr_50941_50964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50927 === (8))){
var inst_50903 = (state_50926[(7)]);
var tmp50938 = inst_50903;
var inst_50903__$1 = tmp50938;
var state_50926__$1 = (function (){var statearr_50942 = state_50926;
(statearr_50942[(7)] = inst_50903__$1);

return statearr_50942;
})();
var statearr_50943_50965 = state_50926__$1;
(statearr_50943_50965[(2)] = null);

(statearr_50943_50965[(1)] = (2));


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
});})(c__48312__auto___50955,out))
;
return ((function (switch__48198__auto__,c__48312__auto___50955,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_50947 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50947[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_50947[(1)] = (1));

return statearr_50947;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_50926){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_50926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e50948){if((e50948 instanceof Object)){
var ex__48202__auto__ = e50948;
var statearr_50949_50966 = state_50926;
(statearr_50949_50966[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50967 = state_50926;
state_50926 = G__50967;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_50926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_50926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___50955,out))
})();
var state__48314__auto__ = (function (){var statearr_50950 = f__48313__auto__.call(null);
(statearr_50950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___50955);

return statearr_50950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___50955,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args50968 = [];
var len__35776__auto___51038 = arguments.length;
var i__35777__auto___51039 = (0);
while(true){
if((i__35777__auto___51039 < len__35776__auto___51038)){
args50968.push((arguments[i__35777__auto___51039]));

var G__51040 = (i__35777__auto___51039 + (1));
i__35777__auto___51039 = G__51040;
continue;
} else {
}
break;
}

var G__50970 = args50968.length;
switch (G__50970) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50968.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___51042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___51042,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___51042,out){
return (function (state_51008){
var state_val_51009 = (state_51008[(1)]);
if((state_val_51009 === (7))){
var inst_51004 = (state_51008[(2)]);
var state_51008__$1 = state_51008;
var statearr_51010_51043 = state_51008__$1;
(statearr_51010_51043[(2)] = inst_51004);

(statearr_51010_51043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (1))){
var inst_50971 = (new Array(n));
var inst_50972 = inst_50971;
var inst_50973 = (0);
var state_51008__$1 = (function (){var statearr_51011 = state_51008;
(statearr_51011[(7)] = inst_50972);

(statearr_51011[(8)] = inst_50973);

return statearr_51011;
})();
var statearr_51012_51044 = state_51008__$1;
(statearr_51012_51044[(2)] = null);

(statearr_51012_51044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (4))){
var inst_50976 = (state_51008[(9)]);
var inst_50976__$1 = (state_51008[(2)]);
var inst_50977 = (inst_50976__$1 == null);
var inst_50978 = cljs.core.not.call(null,inst_50977);
var state_51008__$1 = (function (){var statearr_51013 = state_51008;
(statearr_51013[(9)] = inst_50976__$1);

return statearr_51013;
})();
if(inst_50978){
var statearr_51014_51045 = state_51008__$1;
(statearr_51014_51045[(1)] = (5));

} else {
var statearr_51015_51046 = state_51008__$1;
(statearr_51015_51046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (15))){
var inst_50998 = (state_51008[(2)]);
var state_51008__$1 = state_51008;
var statearr_51016_51047 = state_51008__$1;
(statearr_51016_51047[(2)] = inst_50998);

(statearr_51016_51047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (13))){
var state_51008__$1 = state_51008;
var statearr_51017_51048 = state_51008__$1;
(statearr_51017_51048[(2)] = null);

(statearr_51017_51048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (6))){
var inst_50973 = (state_51008[(8)]);
var inst_50994 = (inst_50973 > (0));
var state_51008__$1 = state_51008;
if(cljs.core.truth_(inst_50994)){
var statearr_51018_51049 = state_51008__$1;
(statearr_51018_51049[(1)] = (12));

} else {
var statearr_51019_51050 = state_51008__$1;
(statearr_51019_51050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (3))){
var inst_51006 = (state_51008[(2)]);
var state_51008__$1 = state_51008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51008__$1,inst_51006);
} else {
if((state_val_51009 === (12))){
var inst_50972 = (state_51008[(7)]);
var inst_50996 = cljs.core.vec.call(null,inst_50972);
var state_51008__$1 = state_51008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51008__$1,(15),out,inst_50996);
} else {
if((state_val_51009 === (2))){
var state_51008__$1 = state_51008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51008__$1,(4),ch);
} else {
if((state_val_51009 === (11))){
var inst_50988 = (state_51008[(2)]);
var inst_50989 = (new Array(n));
var inst_50972 = inst_50989;
var inst_50973 = (0);
var state_51008__$1 = (function (){var statearr_51020 = state_51008;
(statearr_51020[(7)] = inst_50972);

(statearr_51020[(8)] = inst_50973);

(statearr_51020[(10)] = inst_50988);

return statearr_51020;
})();
var statearr_51021_51051 = state_51008__$1;
(statearr_51021_51051[(2)] = null);

(statearr_51021_51051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (9))){
var inst_50972 = (state_51008[(7)]);
var inst_50986 = cljs.core.vec.call(null,inst_50972);
var state_51008__$1 = state_51008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51008__$1,(11),out,inst_50986);
} else {
if((state_val_51009 === (5))){
var inst_50976 = (state_51008[(9)]);
var inst_50972 = (state_51008[(7)]);
var inst_50973 = (state_51008[(8)]);
var inst_50981 = (state_51008[(11)]);
var inst_50980 = (inst_50972[inst_50973] = inst_50976);
var inst_50981__$1 = (inst_50973 + (1));
var inst_50982 = (inst_50981__$1 < n);
var state_51008__$1 = (function (){var statearr_51022 = state_51008;
(statearr_51022[(12)] = inst_50980);

(statearr_51022[(11)] = inst_50981__$1);

return statearr_51022;
})();
if(cljs.core.truth_(inst_50982)){
var statearr_51023_51052 = state_51008__$1;
(statearr_51023_51052[(1)] = (8));

} else {
var statearr_51024_51053 = state_51008__$1;
(statearr_51024_51053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (14))){
var inst_51001 = (state_51008[(2)]);
var inst_51002 = cljs.core.async.close_BANG_.call(null,out);
var state_51008__$1 = (function (){var statearr_51026 = state_51008;
(statearr_51026[(13)] = inst_51001);

return statearr_51026;
})();
var statearr_51027_51054 = state_51008__$1;
(statearr_51027_51054[(2)] = inst_51002);

(statearr_51027_51054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (10))){
var inst_50992 = (state_51008[(2)]);
var state_51008__$1 = state_51008;
var statearr_51028_51055 = state_51008__$1;
(statearr_51028_51055[(2)] = inst_50992);

(statearr_51028_51055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51009 === (8))){
var inst_50972 = (state_51008[(7)]);
var inst_50981 = (state_51008[(11)]);
var tmp51025 = inst_50972;
var inst_50972__$1 = tmp51025;
var inst_50973 = inst_50981;
var state_51008__$1 = (function (){var statearr_51029 = state_51008;
(statearr_51029[(7)] = inst_50972__$1);

(statearr_51029[(8)] = inst_50973);

return statearr_51029;
})();
var statearr_51030_51056 = state_51008__$1;
(statearr_51030_51056[(2)] = null);

(statearr_51030_51056[(1)] = (2));


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
});})(c__48312__auto___51042,out))
;
return ((function (switch__48198__auto__,c__48312__auto___51042,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_51034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51034[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_51034[(1)] = (1));

return statearr_51034;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_51008){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_51008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e51035){if((e51035 instanceof Object)){
var ex__48202__auto__ = e51035;
var statearr_51036_51057 = state_51008;
(statearr_51036_51057[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51058 = state_51008;
state_51008 = G__51058;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_51008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_51008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___51042,out))
})();
var state__48314__auto__ = (function (){var statearr_51037 = f__48313__auto__.call(null);
(statearr_51037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___51042);

return statearr_51037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___51042,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args51059 = [];
var len__35776__auto___51133 = arguments.length;
var i__35777__auto___51134 = (0);
while(true){
if((i__35777__auto___51134 < len__35776__auto___51133)){
args51059.push((arguments[i__35777__auto___51134]));

var G__51135 = (i__35777__auto___51134 + (1));
i__35777__auto___51134 = G__51135;
continue;
} else {
}
break;
}

var G__51061 = args51059.length;
switch (G__51061) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51059.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___51137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___51137,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___51137,out){
return (function (state_51103){
var state_val_51104 = (state_51103[(1)]);
if((state_val_51104 === (7))){
var inst_51099 = (state_51103[(2)]);
var state_51103__$1 = state_51103;
var statearr_51105_51138 = state_51103__$1;
(statearr_51105_51138[(2)] = inst_51099);

(statearr_51105_51138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (1))){
var inst_51062 = [];
var inst_51063 = inst_51062;
var inst_51064 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51103__$1 = (function (){var statearr_51106 = state_51103;
(statearr_51106[(7)] = inst_51064);

(statearr_51106[(8)] = inst_51063);

return statearr_51106;
})();
var statearr_51107_51139 = state_51103__$1;
(statearr_51107_51139[(2)] = null);

(statearr_51107_51139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (4))){
var inst_51067 = (state_51103[(9)]);
var inst_51067__$1 = (state_51103[(2)]);
var inst_51068 = (inst_51067__$1 == null);
var inst_51069 = cljs.core.not.call(null,inst_51068);
var state_51103__$1 = (function (){var statearr_51108 = state_51103;
(statearr_51108[(9)] = inst_51067__$1);

return statearr_51108;
})();
if(inst_51069){
var statearr_51109_51140 = state_51103__$1;
(statearr_51109_51140[(1)] = (5));

} else {
var statearr_51110_51141 = state_51103__$1;
(statearr_51110_51141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (15))){
var inst_51093 = (state_51103[(2)]);
var state_51103__$1 = state_51103;
var statearr_51111_51142 = state_51103__$1;
(statearr_51111_51142[(2)] = inst_51093);

(statearr_51111_51142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (13))){
var state_51103__$1 = state_51103;
var statearr_51112_51143 = state_51103__$1;
(statearr_51112_51143[(2)] = null);

(statearr_51112_51143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (6))){
var inst_51063 = (state_51103[(8)]);
var inst_51088 = inst_51063.length;
var inst_51089 = (inst_51088 > (0));
var state_51103__$1 = state_51103;
if(cljs.core.truth_(inst_51089)){
var statearr_51113_51144 = state_51103__$1;
(statearr_51113_51144[(1)] = (12));

} else {
var statearr_51114_51145 = state_51103__$1;
(statearr_51114_51145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (3))){
var inst_51101 = (state_51103[(2)]);
var state_51103__$1 = state_51103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51103__$1,inst_51101);
} else {
if((state_val_51104 === (12))){
var inst_51063 = (state_51103[(8)]);
var inst_51091 = cljs.core.vec.call(null,inst_51063);
var state_51103__$1 = state_51103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51103__$1,(15),out,inst_51091);
} else {
if((state_val_51104 === (2))){
var state_51103__$1 = state_51103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51103__$1,(4),ch);
} else {
if((state_val_51104 === (11))){
var inst_51071 = (state_51103[(10)]);
var inst_51067 = (state_51103[(9)]);
var inst_51081 = (state_51103[(2)]);
var inst_51082 = [];
var inst_51083 = inst_51082.push(inst_51067);
var inst_51063 = inst_51082;
var inst_51064 = inst_51071;
var state_51103__$1 = (function (){var statearr_51115 = state_51103;
(statearr_51115[(7)] = inst_51064);

(statearr_51115[(8)] = inst_51063);

(statearr_51115[(11)] = inst_51081);

(statearr_51115[(12)] = inst_51083);

return statearr_51115;
})();
var statearr_51116_51146 = state_51103__$1;
(statearr_51116_51146[(2)] = null);

(statearr_51116_51146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (9))){
var inst_51063 = (state_51103[(8)]);
var inst_51079 = cljs.core.vec.call(null,inst_51063);
var state_51103__$1 = state_51103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51103__$1,(11),out,inst_51079);
} else {
if((state_val_51104 === (5))){
var inst_51064 = (state_51103[(7)]);
var inst_51071 = (state_51103[(10)]);
var inst_51067 = (state_51103[(9)]);
var inst_51071__$1 = f.call(null,inst_51067);
var inst_51072 = cljs.core._EQ_.call(null,inst_51071__$1,inst_51064);
var inst_51073 = cljs.core.keyword_identical_QMARK_.call(null,inst_51064,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51074 = (inst_51072) || (inst_51073);
var state_51103__$1 = (function (){var statearr_51117 = state_51103;
(statearr_51117[(10)] = inst_51071__$1);

return statearr_51117;
})();
if(cljs.core.truth_(inst_51074)){
var statearr_51118_51147 = state_51103__$1;
(statearr_51118_51147[(1)] = (8));

} else {
var statearr_51119_51148 = state_51103__$1;
(statearr_51119_51148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (14))){
var inst_51096 = (state_51103[(2)]);
var inst_51097 = cljs.core.async.close_BANG_.call(null,out);
var state_51103__$1 = (function (){var statearr_51121 = state_51103;
(statearr_51121[(13)] = inst_51096);

return statearr_51121;
})();
var statearr_51122_51149 = state_51103__$1;
(statearr_51122_51149[(2)] = inst_51097);

(statearr_51122_51149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (10))){
var inst_51086 = (state_51103[(2)]);
var state_51103__$1 = state_51103;
var statearr_51123_51150 = state_51103__$1;
(statearr_51123_51150[(2)] = inst_51086);

(statearr_51123_51150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51104 === (8))){
var inst_51063 = (state_51103[(8)]);
var inst_51071 = (state_51103[(10)]);
var inst_51067 = (state_51103[(9)]);
var inst_51076 = inst_51063.push(inst_51067);
var tmp51120 = inst_51063;
var inst_51063__$1 = tmp51120;
var inst_51064 = inst_51071;
var state_51103__$1 = (function (){var statearr_51124 = state_51103;
(statearr_51124[(7)] = inst_51064);

(statearr_51124[(8)] = inst_51063__$1);

(statearr_51124[(14)] = inst_51076);

return statearr_51124;
})();
var statearr_51125_51151 = state_51103__$1;
(statearr_51125_51151[(2)] = null);

(statearr_51125_51151[(1)] = (2));


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
});})(c__48312__auto___51137,out))
;
return ((function (switch__48198__auto__,c__48312__auto___51137,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_51129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51129[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_51129[(1)] = (1));

return statearr_51129;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_51103){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_51103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e51130){if((e51130 instanceof Object)){
var ex__48202__auto__ = e51130;
var statearr_51131_51152 = state_51103;
(statearr_51131_51152[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51153 = state_51103;
state_51103 = G__51153;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_51103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_51103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___51137,out))
})();
var state__48314__auto__ = (function (){var statearr_51132 = f__48313__auto__.call(null);
(statearr_51132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___51137);

return statearr_51132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___51137,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491640764412