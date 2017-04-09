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
var args201588 = [];
var len__40427__auto___201594 = arguments.length;
var i__40428__auto___201595 = (0);
while(true){
if((i__40428__auto___201595 < len__40427__auto___201594)){
args201588.push((arguments[i__40428__auto___201595]));

var G__201596 = (i__40428__auto___201595 + (1));
i__40428__auto___201595 = G__201596;
continue;
} else {
}
break;
}

var G__201590 = args201588.length;
switch (G__201590) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args201588.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async201591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async201591 = (function (f,blockable,meta201592){
this.f = f;
this.blockable = blockable;
this.meta201592 = meta201592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async201591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_201593,meta201592__$1){
var self__ = this;
var _201593__$1 = this;
return (new cljs.core.async.t_cljs$core$async201591(self__.f,self__.blockable,meta201592__$1));
});


cljs.core.async.t_cljs$core$async201591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_201593){
var self__ = this;
var _201593__$1 = this;
return self__.meta201592;
});


cljs.core.async.t_cljs$core$async201591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async201591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async201591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async201591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async201591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta201592","meta201592",-1746849007,null)], null);
});

cljs.core.async.t_cljs$core$async201591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async201591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async201591";

cljs.core.async.t_cljs$core$async201591.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async201591");
});

cljs.core.async.__GT_t_cljs$core$async201591 = (function cljs$core$async$__GT_t_cljs$core$async201591(f__$1,blockable__$1,meta201592){
return (new cljs.core.async.t_cljs$core$async201591(f__$1,blockable__$1,meta201592));
});

}

return (new cljs.core.async.t_cljs$core$async201591(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args201600 = [];
var len__40427__auto___201603 = arguments.length;
var i__40428__auto___201604 = (0);
while(true){
if((i__40428__auto___201604 < len__40427__auto___201603)){
args201600.push((arguments[i__40428__auto___201604]));

var G__201605 = (i__40428__auto___201604 + (1));
i__40428__auto___201604 = G__201605;
continue;
} else {
}
break;
}

var G__201602 = args201600.length;
switch (G__201602) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args201600.length)].join('')));

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
var args201607 = [];
var len__40427__auto___201610 = arguments.length;
var i__40428__auto___201611 = (0);
while(true){
if((i__40428__auto___201611 < len__40427__auto___201610)){
args201607.push((arguments[i__40428__auto___201611]));

var G__201612 = (i__40428__auto___201611 + (1));
i__40428__auto___201611 = G__201612;
continue;
} else {
}
break;
}

var G__201609 = args201607.length;
switch (G__201609) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args201607.length)].join('')));

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
var args201614 = [];
var len__40427__auto___201617 = arguments.length;
var i__40428__auto___201618 = (0);
while(true){
if((i__40428__auto___201618 < len__40427__auto___201617)){
args201614.push((arguments[i__40428__auto___201618]));

var G__201619 = (i__40428__auto___201618 + (1));
i__40428__auto___201618 = G__201619;
continue;
} else {
}
break;
}

var G__201616 = args201614.length;
switch (G__201616) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args201614.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_201621 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_201621);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_201621,ret){
return (function (){
return fn1.call(null,val_201621);
});})(val_201621,ret))
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
var args201622 = [];
var len__40427__auto___201625 = arguments.length;
var i__40428__auto___201626 = (0);
while(true){
if((i__40428__auto___201626 < len__40427__auto___201625)){
args201622.push((arguments[i__40428__auto___201626]));

var G__201627 = (i__40428__auto___201626 + (1));
i__40428__auto___201626 = G__201627;
continue;
} else {
}
break;
}

var G__201624 = args201622.length;
switch (G__201624) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args201622.length)].join('')));

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
var n__40227__auto___201629 = n;
var x_201630 = (0);
while(true){
if((x_201630 < n__40227__auto___201629)){
(a[x_201630] = (0));

var G__201631 = (x_201630 + (1));
x_201630 = G__201631;
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

var G__201632 = (i + (1));
i = G__201632;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async201636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async201636 = (function (flag,meta201637){
this.flag = flag;
this.meta201637 = meta201637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async201636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_201638,meta201637__$1){
var self__ = this;
var _201638__$1 = this;
return (new cljs.core.async.t_cljs$core$async201636(self__.flag,meta201637__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async201636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_201638){
var self__ = this;
var _201638__$1 = this;
return self__.meta201637;
});})(flag))
;


cljs.core.async.t_cljs$core$async201636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async201636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async201636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async201636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async201636.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta201637","meta201637",-711515555,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async201636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async201636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async201636";

cljs.core.async.t_cljs$core$async201636.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async201636");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async201636 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async201636(flag__$1,meta201637){
return (new cljs.core.async.t_cljs$core$async201636(flag__$1,meta201637));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async201636(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async201642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async201642 = (function (flag,cb,meta201643){
this.flag = flag;
this.cb = cb;
this.meta201643 = meta201643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async201642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_201644,meta201643__$1){
var self__ = this;
var _201644__$1 = this;
return (new cljs.core.async.t_cljs$core$async201642(self__.flag,self__.cb,meta201643__$1));
});


cljs.core.async.t_cljs$core$async201642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_201644){
var self__ = this;
var _201644__$1 = this;
return self__.meta201643;
});


cljs.core.async.t_cljs$core$async201642.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async201642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async201642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async201642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async201642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta201643","meta201643",953285836,null)], null);
});

cljs.core.async.t_cljs$core$async201642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async201642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async201642";

cljs.core.async.t_cljs$core$async201642.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async201642");
});

cljs.core.async.__GT_t_cljs$core$async201642 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async201642(flag__$1,cb__$1,meta201643){
return (new cljs.core.async.t_cljs$core$async201642(flag__$1,cb__$1,meta201643));
});

}

return (new cljs.core.async.t_cljs$core$async201642(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__201645_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__201645_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__201646_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__201646_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__39206__auto__ = wport;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return port;
}
})()], null));
} else {
var G__201647 = (i + (1));
i = G__201647;
continue;
}
} else {
return null;
}
break;
}
})();
var or__39206__auto__ = ret;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__39194__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__39194__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__39194__auto__;
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
var args__40434__auto__ = [];
var len__40427__auto___201653 = arguments.length;
var i__40428__auto___201654 = (0);
while(true){
if((i__40428__auto___201654 < len__40427__auto___201653)){
args__40434__auto__.push((arguments[i__40428__auto___201654]));

var G__201655 = (i__40428__auto___201654 + (1));
i__40428__auto___201654 = G__201655;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__201650){
var map__201651 = p__201650;
var map__201651__$1 = ((((!((map__201651 == null)))?((((map__201651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__201651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__201651):map__201651);
var opts = map__201651__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq201648){
var G__201649 = cljs.core.first.call(null,seq201648);
var seq201648__$1 = cljs.core.next.call(null,seq201648);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__201649,seq201648__$1);
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
var args201656 = [];
var len__40427__auto___201706 = arguments.length;
var i__40428__auto___201707 = (0);
while(true){
if((i__40428__auto___201707 < len__40427__auto___201706)){
args201656.push((arguments[i__40428__auto___201707]));

var G__201708 = (i__40428__auto___201707 + (1));
i__40428__auto___201707 = G__201708;
continue;
} else {
}
break;
}

var G__201658 = args201656.length;
switch (G__201658) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args201656.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44084__auto___201710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___201710){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___201710){
return (function (state_201682){
var state_val_201683 = (state_201682[(1)]);
if((state_val_201683 === (7))){
var inst_201678 = (state_201682[(2)]);
var state_201682__$1 = state_201682;
var statearr_201684_201711 = state_201682__$1;
(statearr_201684_201711[(2)] = inst_201678);

(statearr_201684_201711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (1))){
var state_201682__$1 = state_201682;
var statearr_201685_201712 = state_201682__$1;
(statearr_201685_201712[(2)] = null);

(statearr_201685_201712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (4))){
var inst_201661 = (state_201682[(7)]);
var inst_201661__$1 = (state_201682[(2)]);
var inst_201662 = (inst_201661__$1 == null);
var state_201682__$1 = (function (){var statearr_201686 = state_201682;
(statearr_201686[(7)] = inst_201661__$1);

return statearr_201686;
})();
if(cljs.core.truth_(inst_201662)){
var statearr_201687_201713 = state_201682__$1;
(statearr_201687_201713[(1)] = (5));

} else {
var statearr_201688_201714 = state_201682__$1;
(statearr_201688_201714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (13))){
var state_201682__$1 = state_201682;
var statearr_201689_201715 = state_201682__$1;
(statearr_201689_201715[(2)] = null);

(statearr_201689_201715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (6))){
var inst_201661 = (state_201682[(7)]);
var state_201682__$1 = state_201682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_201682__$1,(11),to,inst_201661);
} else {
if((state_val_201683 === (3))){
var inst_201680 = (state_201682[(2)]);
var state_201682__$1 = state_201682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_201682__$1,inst_201680);
} else {
if((state_val_201683 === (12))){
var state_201682__$1 = state_201682;
var statearr_201690_201716 = state_201682__$1;
(statearr_201690_201716[(2)] = null);

(statearr_201690_201716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (2))){
var state_201682__$1 = state_201682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_201682__$1,(4),from);
} else {
if((state_val_201683 === (11))){
var inst_201671 = (state_201682[(2)]);
var state_201682__$1 = state_201682;
if(cljs.core.truth_(inst_201671)){
var statearr_201691_201717 = state_201682__$1;
(statearr_201691_201717[(1)] = (12));

} else {
var statearr_201692_201718 = state_201682__$1;
(statearr_201692_201718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (9))){
var state_201682__$1 = state_201682;
var statearr_201693_201719 = state_201682__$1;
(statearr_201693_201719[(2)] = null);

(statearr_201693_201719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (5))){
var state_201682__$1 = state_201682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_201694_201720 = state_201682__$1;
(statearr_201694_201720[(1)] = (8));

} else {
var statearr_201695_201721 = state_201682__$1;
(statearr_201695_201721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (14))){
var inst_201676 = (state_201682[(2)]);
var state_201682__$1 = state_201682;
var statearr_201696_201722 = state_201682__$1;
(statearr_201696_201722[(2)] = inst_201676);

(statearr_201696_201722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (10))){
var inst_201668 = (state_201682[(2)]);
var state_201682__$1 = state_201682;
var statearr_201697_201723 = state_201682__$1;
(statearr_201697_201723[(2)] = inst_201668);

(statearr_201697_201723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201683 === (8))){
var inst_201665 = cljs.core.async.close_BANG_.call(null,to);
var state_201682__$1 = state_201682;
var statearr_201698_201724 = state_201682__$1;
(statearr_201698_201724[(2)] = inst_201665);

(statearr_201698_201724[(1)] = (10));


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
});})(c__44084__auto___201710))
;
return ((function (switch__44061__auto__,c__44084__auto___201710){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_201702 = [null,null,null,null,null,null,null,null];
(statearr_201702[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_201702[(1)] = (1));

return statearr_201702;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_201682){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_201682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e201703){if((e201703 instanceof Object)){
var ex__44065__auto__ = e201703;
var statearr_201704_201725 = state_201682;
(statearr_201704_201725[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_201682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e201703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__201726 = state_201682;
state_201682 = G__201726;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_201682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_201682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___201710))
})();
var state__44086__auto__ = (function (){var statearr_201705 = f__44085__auto__.call(null);
(statearr_201705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___201710);

return statearr_201705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___201710))
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
return (function (p__201914){
var vec__201915 = p__201914;
var v = cljs.core.nth.call(null,vec__201915,(0),null);
var p = cljs.core.nth.call(null,vec__201915,(1),null);
var job = vec__201915;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44084__auto___202101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___202101,res,vec__201915,v,p,job,jobs,results){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___202101,res,vec__201915,v,p,job,jobs,results){
return (function (state_201922){
var state_val_201923 = (state_201922[(1)]);
if((state_val_201923 === (1))){
var state_201922__$1 = state_201922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_201922__$1,(2),res,v);
} else {
if((state_val_201923 === (2))){
var inst_201919 = (state_201922[(2)]);
var inst_201920 = cljs.core.async.close_BANG_.call(null,res);
var state_201922__$1 = (function (){var statearr_201924 = state_201922;
(statearr_201924[(7)] = inst_201919);

return statearr_201924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_201922__$1,inst_201920);
} else {
return null;
}
}
});})(c__44084__auto___202101,res,vec__201915,v,p,job,jobs,results))
;
return ((function (switch__44061__auto__,c__44084__auto___202101,res,vec__201915,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_201928 = [null,null,null,null,null,null,null,null];
(statearr_201928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_201928[(1)] = (1));

return statearr_201928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_201922){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_201922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e201929){if((e201929 instanceof Object)){
var ex__44065__auto__ = e201929;
var statearr_201930_202102 = state_201922;
(statearr_201930_202102[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_201922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e201929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202103 = state_201922;
state_201922 = G__202103;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_201922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_201922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___202101,res,vec__201915,v,p,job,jobs,results))
})();
var state__44086__auto__ = (function (){var statearr_201931 = f__44085__auto__.call(null);
(statearr_201931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___202101);

return statearr_201931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___202101,res,vec__201915,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__201932){
var vec__201933 = p__201932;
var v = cljs.core.nth.call(null,vec__201933,(0),null);
var p = cljs.core.nth.call(null,vec__201933,(1),null);
var job = vec__201933;
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
var n__40227__auto___202104 = n;
var __202105 = (0);
while(true){
if((__202105 < n__40227__auto___202104)){
var G__201936_202106 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__201936_202106) {
case "compute":
var c__44084__auto___202108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__202105,c__44084__auto___202108,G__201936_202106,n__40227__auto___202104,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (__202105,c__44084__auto___202108,G__201936_202106,n__40227__auto___202104,jobs,results,process,async){
return (function (state_201949){
var state_val_201950 = (state_201949[(1)]);
if((state_val_201950 === (1))){
var state_201949__$1 = state_201949;
var statearr_201951_202109 = state_201949__$1;
(statearr_201951_202109[(2)] = null);

(statearr_201951_202109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201950 === (2))){
var state_201949__$1 = state_201949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_201949__$1,(4),jobs);
} else {
if((state_val_201950 === (3))){
var inst_201947 = (state_201949[(2)]);
var state_201949__$1 = state_201949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_201949__$1,inst_201947);
} else {
if((state_val_201950 === (4))){
var inst_201939 = (state_201949[(2)]);
var inst_201940 = process.call(null,inst_201939);
var state_201949__$1 = state_201949;
if(cljs.core.truth_(inst_201940)){
var statearr_201952_202110 = state_201949__$1;
(statearr_201952_202110[(1)] = (5));

} else {
var statearr_201953_202111 = state_201949__$1;
(statearr_201953_202111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201950 === (5))){
var state_201949__$1 = state_201949;
var statearr_201954_202112 = state_201949__$1;
(statearr_201954_202112[(2)] = null);

(statearr_201954_202112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201950 === (6))){
var state_201949__$1 = state_201949;
var statearr_201955_202113 = state_201949__$1;
(statearr_201955_202113[(2)] = null);

(statearr_201955_202113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201950 === (7))){
var inst_201945 = (state_201949[(2)]);
var state_201949__$1 = state_201949;
var statearr_201956_202114 = state_201949__$1;
(statearr_201956_202114[(2)] = inst_201945);

(statearr_201956_202114[(1)] = (3));


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
});})(__202105,c__44084__auto___202108,G__201936_202106,n__40227__auto___202104,jobs,results,process,async))
;
return ((function (__202105,switch__44061__auto__,c__44084__auto___202108,G__201936_202106,n__40227__auto___202104,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_201960 = [null,null,null,null,null,null,null];
(statearr_201960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_201960[(1)] = (1));

return statearr_201960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_201949){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_201949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e201961){if((e201961 instanceof Object)){
var ex__44065__auto__ = e201961;
var statearr_201962_202115 = state_201949;
(statearr_201962_202115[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_201949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e201961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202116 = state_201949;
state_201949 = G__202116;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_201949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_201949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(__202105,switch__44061__auto__,c__44084__auto___202108,G__201936_202106,n__40227__auto___202104,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_201963 = f__44085__auto__.call(null);
(statearr_201963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___202108);

return statearr_201963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(__202105,c__44084__auto___202108,G__201936_202106,n__40227__auto___202104,jobs,results,process,async))
);


break;
case "async":
var c__44084__auto___202117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__202105,c__44084__auto___202117,G__201936_202106,n__40227__auto___202104,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (__202105,c__44084__auto___202117,G__201936_202106,n__40227__auto___202104,jobs,results,process,async){
return (function (state_201976){
var state_val_201977 = (state_201976[(1)]);
if((state_val_201977 === (1))){
var state_201976__$1 = state_201976;
var statearr_201978_202118 = state_201976__$1;
(statearr_201978_202118[(2)] = null);

(statearr_201978_202118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201977 === (2))){
var state_201976__$1 = state_201976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_201976__$1,(4),jobs);
} else {
if((state_val_201977 === (3))){
var inst_201974 = (state_201976[(2)]);
var state_201976__$1 = state_201976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_201976__$1,inst_201974);
} else {
if((state_val_201977 === (4))){
var inst_201966 = (state_201976[(2)]);
var inst_201967 = async.call(null,inst_201966);
var state_201976__$1 = state_201976;
if(cljs.core.truth_(inst_201967)){
var statearr_201979_202119 = state_201976__$1;
(statearr_201979_202119[(1)] = (5));

} else {
var statearr_201980_202120 = state_201976__$1;
(statearr_201980_202120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201977 === (5))){
var state_201976__$1 = state_201976;
var statearr_201981_202121 = state_201976__$1;
(statearr_201981_202121[(2)] = null);

(statearr_201981_202121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201977 === (6))){
var state_201976__$1 = state_201976;
var statearr_201982_202122 = state_201976__$1;
(statearr_201982_202122[(2)] = null);

(statearr_201982_202122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_201977 === (7))){
var inst_201972 = (state_201976[(2)]);
var state_201976__$1 = state_201976;
var statearr_201983_202123 = state_201976__$1;
(statearr_201983_202123[(2)] = inst_201972);

(statearr_201983_202123[(1)] = (3));


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
});})(__202105,c__44084__auto___202117,G__201936_202106,n__40227__auto___202104,jobs,results,process,async))
;
return ((function (__202105,switch__44061__auto__,c__44084__auto___202117,G__201936_202106,n__40227__auto___202104,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_201987 = [null,null,null,null,null,null,null];
(statearr_201987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_201987[(1)] = (1));

return statearr_201987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_201976){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_201976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e201988){if((e201988 instanceof Object)){
var ex__44065__auto__ = e201988;
var statearr_201989_202124 = state_201976;
(statearr_201989_202124[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_201976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e201988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202125 = state_201976;
state_201976 = G__202125;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_201976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_201976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(__202105,switch__44061__auto__,c__44084__auto___202117,G__201936_202106,n__40227__auto___202104,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_201990 = f__44085__auto__.call(null);
(statearr_201990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___202117);

return statearr_201990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(__202105,c__44084__auto___202117,G__201936_202106,n__40227__auto___202104,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__202126 = (__202105 + (1));
__202105 = G__202126;
continue;
} else {
}
break;
}

var c__44084__auto___202127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___202127,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___202127,jobs,results,process,async){
return (function (state_202012){
var state_val_202013 = (state_202012[(1)]);
if((state_val_202013 === (1))){
var state_202012__$1 = state_202012;
var statearr_202014_202128 = state_202012__$1;
(statearr_202014_202128[(2)] = null);

(statearr_202014_202128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202013 === (2))){
var state_202012__$1 = state_202012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202012__$1,(4),from);
} else {
if((state_val_202013 === (3))){
var inst_202010 = (state_202012[(2)]);
var state_202012__$1 = state_202012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202012__$1,inst_202010);
} else {
if((state_val_202013 === (4))){
var inst_201993 = (state_202012[(7)]);
var inst_201993__$1 = (state_202012[(2)]);
var inst_201994 = (inst_201993__$1 == null);
var state_202012__$1 = (function (){var statearr_202015 = state_202012;
(statearr_202015[(7)] = inst_201993__$1);

return statearr_202015;
})();
if(cljs.core.truth_(inst_201994)){
var statearr_202016_202129 = state_202012__$1;
(statearr_202016_202129[(1)] = (5));

} else {
var statearr_202017_202130 = state_202012__$1;
(statearr_202017_202130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202013 === (5))){
var inst_201996 = cljs.core.async.close_BANG_.call(null,jobs);
var state_202012__$1 = state_202012;
var statearr_202018_202131 = state_202012__$1;
(statearr_202018_202131[(2)] = inst_201996);

(statearr_202018_202131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202013 === (6))){
var inst_201998 = (state_202012[(8)]);
var inst_201993 = (state_202012[(7)]);
var inst_201998__$1 = cljs.core.async.chan.call(null,(1));
var inst_201999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_202000 = [inst_201993,inst_201998__$1];
var inst_202001 = (new cljs.core.PersistentVector(null,2,(5),inst_201999,inst_202000,null));
var state_202012__$1 = (function (){var statearr_202019 = state_202012;
(statearr_202019[(8)] = inst_201998__$1);

return statearr_202019;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_202012__$1,(8),jobs,inst_202001);
} else {
if((state_val_202013 === (7))){
var inst_202008 = (state_202012[(2)]);
var state_202012__$1 = state_202012;
var statearr_202020_202132 = state_202012__$1;
(statearr_202020_202132[(2)] = inst_202008);

(statearr_202020_202132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202013 === (8))){
var inst_201998 = (state_202012[(8)]);
var inst_202003 = (state_202012[(2)]);
var state_202012__$1 = (function (){var statearr_202021 = state_202012;
(statearr_202021[(9)] = inst_202003);

return statearr_202021;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_202012__$1,(9),results,inst_201998);
} else {
if((state_val_202013 === (9))){
var inst_202005 = (state_202012[(2)]);
var state_202012__$1 = (function (){var statearr_202022 = state_202012;
(statearr_202022[(10)] = inst_202005);

return statearr_202022;
})();
var statearr_202023_202133 = state_202012__$1;
(statearr_202023_202133[(2)] = null);

(statearr_202023_202133[(1)] = (2));


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
});})(c__44084__auto___202127,jobs,results,process,async))
;
return ((function (switch__44061__auto__,c__44084__auto___202127,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_202027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_202027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_202027[(1)] = (1));

return statearr_202027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_202012){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_202012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e202028){if((e202028 instanceof Object)){
var ex__44065__auto__ = e202028;
var statearr_202029_202134 = state_202012;
(statearr_202029_202134[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e202028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202135 = state_202012;
state_202012 = G__202135;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_202012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_202012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___202127,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_202030 = f__44085__auto__.call(null);
(statearr_202030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___202127);

return statearr_202030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___202127,jobs,results,process,async))
);


var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,jobs,results,process,async){
return (function (state_202068){
var state_val_202069 = (state_202068[(1)]);
if((state_val_202069 === (7))){
var inst_202064 = (state_202068[(2)]);
var state_202068__$1 = state_202068;
var statearr_202070_202136 = state_202068__$1;
(statearr_202070_202136[(2)] = inst_202064);

(statearr_202070_202136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (20))){
var state_202068__$1 = state_202068;
var statearr_202071_202137 = state_202068__$1;
(statearr_202071_202137[(2)] = null);

(statearr_202071_202137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (1))){
var state_202068__$1 = state_202068;
var statearr_202072_202138 = state_202068__$1;
(statearr_202072_202138[(2)] = null);

(statearr_202072_202138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (4))){
var inst_202033 = (state_202068[(7)]);
var inst_202033__$1 = (state_202068[(2)]);
var inst_202034 = (inst_202033__$1 == null);
var state_202068__$1 = (function (){var statearr_202073 = state_202068;
(statearr_202073[(7)] = inst_202033__$1);

return statearr_202073;
})();
if(cljs.core.truth_(inst_202034)){
var statearr_202074_202139 = state_202068__$1;
(statearr_202074_202139[(1)] = (5));

} else {
var statearr_202075_202140 = state_202068__$1;
(statearr_202075_202140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (15))){
var inst_202046 = (state_202068[(8)]);
var state_202068__$1 = state_202068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_202068__$1,(18),to,inst_202046);
} else {
if((state_val_202069 === (21))){
var inst_202059 = (state_202068[(2)]);
var state_202068__$1 = state_202068;
var statearr_202076_202141 = state_202068__$1;
(statearr_202076_202141[(2)] = inst_202059);

(statearr_202076_202141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (13))){
var inst_202061 = (state_202068[(2)]);
var state_202068__$1 = (function (){var statearr_202077 = state_202068;
(statearr_202077[(9)] = inst_202061);

return statearr_202077;
})();
var statearr_202078_202142 = state_202068__$1;
(statearr_202078_202142[(2)] = null);

(statearr_202078_202142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (6))){
var inst_202033 = (state_202068[(7)]);
var state_202068__$1 = state_202068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202068__$1,(11),inst_202033);
} else {
if((state_val_202069 === (17))){
var inst_202054 = (state_202068[(2)]);
var state_202068__$1 = state_202068;
if(cljs.core.truth_(inst_202054)){
var statearr_202079_202143 = state_202068__$1;
(statearr_202079_202143[(1)] = (19));

} else {
var statearr_202080_202144 = state_202068__$1;
(statearr_202080_202144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (3))){
var inst_202066 = (state_202068[(2)]);
var state_202068__$1 = state_202068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202068__$1,inst_202066);
} else {
if((state_val_202069 === (12))){
var inst_202043 = (state_202068[(10)]);
var state_202068__$1 = state_202068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202068__$1,(14),inst_202043);
} else {
if((state_val_202069 === (2))){
var state_202068__$1 = state_202068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202068__$1,(4),results);
} else {
if((state_val_202069 === (19))){
var state_202068__$1 = state_202068;
var statearr_202081_202145 = state_202068__$1;
(statearr_202081_202145[(2)] = null);

(statearr_202081_202145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (11))){
var inst_202043 = (state_202068[(2)]);
var state_202068__$1 = (function (){var statearr_202082 = state_202068;
(statearr_202082[(10)] = inst_202043);

return statearr_202082;
})();
var statearr_202083_202146 = state_202068__$1;
(statearr_202083_202146[(2)] = null);

(statearr_202083_202146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (9))){
var state_202068__$1 = state_202068;
var statearr_202084_202147 = state_202068__$1;
(statearr_202084_202147[(2)] = null);

(statearr_202084_202147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (5))){
var state_202068__$1 = state_202068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_202085_202148 = state_202068__$1;
(statearr_202085_202148[(1)] = (8));

} else {
var statearr_202086_202149 = state_202068__$1;
(statearr_202086_202149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (14))){
var inst_202048 = (state_202068[(11)]);
var inst_202046 = (state_202068[(8)]);
var inst_202046__$1 = (state_202068[(2)]);
var inst_202047 = (inst_202046__$1 == null);
var inst_202048__$1 = cljs.core.not.call(null,inst_202047);
var state_202068__$1 = (function (){var statearr_202087 = state_202068;
(statearr_202087[(11)] = inst_202048__$1);

(statearr_202087[(8)] = inst_202046__$1);

return statearr_202087;
})();
if(inst_202048__$1){
var statearr_202088_202150 = state_202068__$1;
(statearr_202088_202150[(1)] = (15));

} else {
var statearr_202089_202151 = state_202068__$1;
(statearr_202089_202151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (16))){
var inst_202048 = (state_202068[(11)]);
var state_202068__$1 = state_202068;
var statearr_202090_202152 = state_202068__$1;
(statearr_202090_202152[(2)] = inst_202048);

(statearr_202090_202152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (10))){
var inst_202040 = (state_202068[(2)]);
var state_202068__$1 = state_202068;
var statearr_202091_202153 = state_202068__$1;
(statearr_202091_202153[(2)] = inst_202040);

(statearr_202091_202153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (18))){
var inst_202051 = (state_202068[(2)]);
var state_202068__$1 = state_202068;
var statearr_202092_202154 = state_202068__$1;
(statearr_202092_202154[(2)] = inst_202051);

(statearr_202092_202154[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202069 === (8))){
var inst_202037 = cljs.core.async.close_BANG_.call(null,to);
var state_202068__$1 = state_202068;
var statearr_202093_202155 = state_202068__$1;
(statearr_202093_202155[(2)] = inst_202037);

(statearr_202093_202155[(1)] = (10));


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
});})(c__44084__auto__,jobs,results,process,async))
;
return ((function (switch__44061__auto__,c__44084__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_202097 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_202097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_202097[(1)] = (1));

return statearr_202097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_202068){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_202068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e202098){if((e202098 instanceof Object)){
var ex__44065__auto__ = e202098;
var statearr_202099_202156 = state_202068;
(statearr_202099_202156[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e202098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202157 = state_202068;
state_202068 = G__202157;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_202068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_202068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_202100 = f__44085__auto__.call(null);
(statearr_202100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_202100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,jobs,results,process,async))
);

return c__44084__auto__;
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
var args202158 = [];
var len__40427__auto___202161 = arguments.length;
var i__40428__auto___202162 = (0);
while(true){
if((i__40428__auto___202162 < len__40427__auto___202161)){
args202158.push((arguments[i__40428__auto___202162]));

var G__202163 = (i__40428__auto___202162 + (1));
i__40428__auto___202162 = G__202163;
continue;
} else {
}
break;
}

var G__202160 = args202158.length;
switch (G__202160) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args202158.length)].join('')));

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
var args202165 = [];
var len__40427__auto___202168 = arguments.length;
var i__40428__auto___202169 = (0);
while(true){
if((i__40428__auto___202169 < len__40427__auto___202168)){
args202165.push((arguments[i__40428__auto___202169]));

var G__202170 = (i__40428__auto___202169 + (1));
i__40428__auto___202169 = G__202170;
continue;
} else {
}
break;
}

var G__202167 = args202165.length;
switch (G__202167) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args202165.length)].join('')));

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
var args202172 = [];
var len__40427__auto___202225 = arguments.length;
var i__40428__auto___202226 = (0);
while(true){
if((i__40428__auto___202226 < len__40427__auto___202225)){
args202172.push((arguments[i__40428__auto___202226]));

var G__202227 = (i__40428__auto___202226 + (1));
i__40428__auto___202226 = G__202227;
continue;
} else {
}
break;
}

var G__202174 = args202172.length;
switch (G__202174) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args202172.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44084__auto___202229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___202229,tc,fc){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___202229,tc,fc){
return (function (state_202200){
var state_val_202201 = (state_202200[(1)]);
if((state_val_202201 === (7))){
var inst_202196 = (state_202200[(2)]);
var state_202200__$1 = state_202200;
var statearr_202202_202230 = state_202200__$1;
(statearr_202202_202230[(2)] = inst_202196);

(statearr_202202_202230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (1))){
var state_202200__$1 = state_202200;
var statearr_202203_202231 = state_202200__$1;
(statearr_202203_202231[(2)] = null);

(statearr_202203_202231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (4))){
var inst_202177 = (state_202200[(7)]);
var inst_202177__$1 = (state_202200[(2)]);
var inst_202178 = (inst_202177__$1 == null);
var state_202200__$1 = (function (){var statearr_202204 = state_202200;
(statearr_202204[(7)] = inst_202177__$1);

return statearr_202204;
})();
if(cljs.core.truth_(inst_202178)){
var statearr_202205_202232 = state_202200__$1;
(statearr_202205_202232[(1)] = (5));

} else {
var statearr_202206_202233 = state_202200__$1;
(statearr_202206_202233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (13))){
var state_202200__$1 = state_202200;
var statearr_202207_202234 = state_202200__$1;
(statearr_202207_202234[(2)] = null);

(statearr_202207_202234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (6))){
var inst_202177 = (state_202200[(7)]);
var inst_202183 = p.call(null,inst_202177);
var state_202200__$1 = state_202200;
if(cljs.core.truth_(inst_202183)){
var statearr_202208_202235 = state_202200__$1;
(statearr_202208_202235[(1)] = (9));

} else {
var statearr_202209_202236 = state_202200__$1;
(statearr_202209_202236[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (3))){
var inst_202198 = (state_202200[(2)]);
var state_202200__$1 = state_202200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202200__$1,inst_202198);
} else {
if((state_val_202201 === (12))){
var state_202200__$1 = state_202200;
var statearr_202210_202237 = state_202200__$1;
(statearr_202210_202237[(2)] = null);

(statearr_202210_202237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (2))){
var state_202200__$1 = state_202200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202200__$1,(4),ch);
} else {
if((state_val_202201 === (11))){
var inst_202177 = (state_202200[(7)]);
var inst_202187 = (state_202200[(2)]);
var state_202200__$1 = state_202200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_202200__$1,(8),inst_202187,inst_202177);
} else {
if((state_val_202201 === (9))){
var state_202200__$1 = state_202200;
var statearr_202211_202238 = state_202200__$1;
(statearr_202211_202238[(2)] = tc);

(statearr_202211_202238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (5))){
var inst_202180 = cljs.core.async.close_BANG_.call(null,tc);
var inst_202181 = cljs.core.async.close_BANG_.call(null,fc);
var state_202200__$1 = (function (){var statearr_202212 = state_202200;
(statearr_202212[(8)] = inst_202180);

return statearr_202212;
})();
var statearr_202213_202239 = state_202200__$1;
(statearr_202213_202239[(2)] = inst_202181);

(statearr_202213_202239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (14))){
var inst_202194 = (state_202200[(2)]);
var state_202200__$1 = state_202200;
var statearr_202214_202240 = state_202200__$1;
(statearr_202214_202240[(2)] = inst_202194);

(statearr_202214_202240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (10))){
var state_202200__$1 = state_202200;
var statearr_202215_202241 = state_202200__$1;
(statearr_202215_202241[(2)] = fc);

(statearr_202215_202241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202201 === (8))){
var inst_202189 = (state_202200[(2)]);
var state_202200__$1 = state_202200;
if(cljs.core.truth_(inst_202189)){
var statearr_202216_202242 = state_202200__$1;
(statearr_202216_202242[(1)] = (12));

} else {
var statearr_202217_202243 = state_202200__$1;
(statearr_202217_202243[(1)] = (13));

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
});})(c__44084__auto___202229,tc,fc))
;
return ((function (switch__44061__auto__,c__44084__auto___202229,tc,fc){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_202221 = [null,null,null,null,null,null,null,null,null];
(statearr_202221[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_202221[(1)] = (1));

return statearr_202221;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_202200){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_202200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e202222){if((e202222 instanceof Object)){
var ex__44065__auto__ = e202222;
var statearr_202223_202244 = state_202200;
(statearr_202223_202244[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e202222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202245 = state_202200;
state_202200 = G__202245;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_202200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_202200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___202229,tc,fc))
})();
var state__44086__auto__ = (function (){var statearr_202224 = f__44085__auto__.call(null);
(statearr_202224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___202229);

return statearr_202224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___202229,tc,fc))
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
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__){
return (function (state_202309){
var state_val_202310 = (state_202309[(1)]);
if((state_val_202310 === (7))){
var inst_202305 = (state_202309[(2)]);
var state_202309__$1 = state_202309;
var statearr_202311_202332 = state_202309__$1;
(statearr_202311_202332[(2)] = inst_202305);

(statearr_202311_202332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202310 === (1))){
var inst_202289 = init;
var state_202309__$1 = (function (){var statearr_202312 = state_202309;
(statearr_202312[(7)] = inst_202289);

return statearr_202312;
})();
var statearr_202313_202333 = state_202309__$1;
(statearr_202313_202333[(2)] = null);

(statearr_202313_202333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202310 === (4))){
var inst_202292 = (state_202309[(8)]);
var inst_202292__$1 = (state_202309[(2)]);
var inst_202293 = (inst_202292__$1 == null);
var state_202309__$1 = (function (){var statearr_202314 = state_202309;
(statearr_202314[(8)] = inst_202292__$1);

return statearr_202314;
})();
if(cljs.core.truth_(inst_202293)){
var statearr_202315_202334 = state_202309__$1;
(statearr_202315_202334[(1)] = (5));

} else {
var statearr_202316_202335 = state_202309__$1;
(statearr_202316_202335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202310 === (6))){
var inst_202289 = (state_202309[(7)]);
var inst_202292 = (state_202309[(8)]);
var inst_202296 = (state_202309[(9)]);
var inst_202296__$1 = f.call(null,inst_202289,inst_202292);
var inst_202297 = cljs.core.reduced_QMARK_.call(null,inst_202296__$1);
var state_202309__$1 = (function (){var statearr_202317 = state_202309;
(statearr_202317[(9)] = inst_202296__$1);

return statearr_202317;
})();
if(inst_202297){
var statearr_202318_202336 = state_202309__$1;
(statearr_202318_202336[(1)] = (8));

} else {
var statearr_202319_202337 = state_202309__$1;
(statearr_202319_202337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202310 === (3))){
var inst_202307 = (state_202309[(2)]);
var state_202309__$1 = state_202309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202309__$1,inst_202307);
} else {
if((state_val_202310 === (2))){
var state_202309__$1 = state_202309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202309__$1,(4),ch);
} else {
if((state_val_202310 === (9))){
var inst_202296 = (state_202309[(9)]);
var inst_202289 = inst_202296;
var state_202309__$1 = (function (){var statearr_202320 = state_202309;
(statearr_202320[(7)] = inst_202289);

return statearr_202320;
})();
var statearr_202321_202338 = state_202309__$1;
(statearr_202321_202338[(2)] = null);

(statearr_202321_202338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202310 === (5))){
var inst_202289 = (state_202309[(7)]);
var state_202309__$1 = state_202309;
var statearr_202322_202339 = state_202309__$1;
(statearr_202322_202339[(2)] = inst_202289);

(statearr_202322_202339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202310 === (10))){
var inst_202303 = (state_202309[(2)]);
var state_202309__$1 = state_202309;
var statearr_202323_202340 = state_202309__$1;
(statearr_202323_202340[(2)] = inst_202303);

(statearr_202323_202340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202310 === (8))){
var inst_202296 = (state_202309[(9)]);
var inst_202299 = cljs.core.deref.call(null,inst_202296);
var state_202309__$1 = state_202309;
var statearr_202324_202341 = state_202309__$1;
(statearr_202324_202341[(2)] = inst_202299);

(statearr_202324_202341[(1)] = (10));


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
});})(c__44084__auto__))
;
return ((function (switch__44061__auto__,c__44084__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44062__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44062__auto____0 = (function (){
var statearr_202328 = [null,null,null,null,null,null,null,null,null,null];
(statearr_202328[(0)] = cljs$core$async$reduce_$_state_machine__44062__auto__);

(statearr_202328[(1)] = (1));

return statearr_202328;
});
var cljs$core$async$reduce_$_state_machine__44062__auto____1 = (function (state_202309){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_202309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e202329){if((e202329 instanceof Object)){
var ex__44065__auto__ = e202329;
var statearr_202330_202342 = state_202309;
(statearr_202330_202342[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e202329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202343 = state_202309;
state_202309 = G__202343;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44062__auto__ = function(state_202309){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44062__auto____1.call(this,state_202309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44062__auto____0;
cljs$core$async$reduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44062__auto____1;
return cljs$core$async$reduce_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_202331 = f__44085__auto__.call(null);
(statearr_202331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_202331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__))
);

return c__44084__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,f__$1){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,f__$1){
return (function (state_202363){
var state_val_202364 = (state_202363[(1)]);
if((state_val_202364 === (1))){
var inst_202358 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_202363__$1 = state_202363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202363__$1,(2),inst_202358);
} else {
if((state_val_202364 === (2))){
var inst_202360 = (state_202363[(2)]);
var inst_202361 = f__$1.call(null,inst_202360);
var state_202363__$1 = state_202363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202363__$1,inst_202361);
} else {
return null;
}
}
});})(c__44084__auto__,f__$1))
;
return ((function (switch__44061__auto__,c__44084__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44062__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44062__auto____0 = (function (){
var statearr_202368 = [null,null,null,null,null,null,null];
(statearr_202368[(0)] = cljs$core$async$transduce_$_state_machine__44062__auto__);

(statearr_202368[(1)] = (1));

return statearr_202368;
});
var cljs$core$async$transduce_$_state_machine__44062__auto____1 = (function (state_202363){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_202363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e202369){if((e202369 instanceof Object)){
var ex__44065__auto__ = e202369;
var statearr_202370_202372 = state_202363;
(statearr_202370_202372[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e202369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202373 = state_202363;
state_202363 = G__202373;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44062__auto__ = function(state_202363){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44062__auto____1.call(this,state_202363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44062__auto____0;
cljs$core$async$transduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44062__auto____1;
return cljs$core$async$transduce_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,f__$1))
})();
var state__44086__auto__ = (function (){var statearr_202371 = f__44085__auto__.call(null);
(statearr_202371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_202371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__,f__$1))
);

return c__44084__auto__;
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
var args202374 = [];
var len__40427__auto___202426 = arguments.length;
var i__40428__auto___202427 = (0);
while(true){
if((i__40428__auto___202427 < len__40427__auto___202426)){
args202374.push((arguments[i__40428__auto___202427]));

var G__202428 = (i__40428__auto___202427 + (1));
i__40428__auto___202427 = G__202428;
continue;
} else {
}
break;
}

var G__202376 = args202374.length;
switch (G__202376) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args202374.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__){
return (function (state_202401){
var state_val_202402 = (state_202401[(1)]);
if((state_val_202402 === (7))){
var inst_202383 = (state_202401[(2)]);
var state_202401__$1 = state_202401;
var statearr_202403_202430 = state_202401__$1;
(statearr_202403_202430[(2)] = inst_202383);

(statearr_202403_202430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (1))){
var inst_202377 = cljs.core.seq.call(null,coll);
var inst_202378 = inst_202377;
var state_202401__$1 = (function (){var statearr_202404 = state_202401;
(statearr_202404[(7)] = inst_202378);

return statearr_202404;
})();
var statearr_202405_202431 = state_202401__$1;
(statearr_202405_202431[(2)] = null);

(statearr_202405_202431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (4))){
var inst_202378 = (state_202401[(7)]);
var inst_202381 = cljs.core.first.call(null,inst_202378);
var state_202401__$1 = state_202401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_202401__$1,(7),ch,inst_202381);
} else {
if((state_val_202402 === (13))){
var inst_202395 = (state_202401[(2)]);
var state_202401__$1 = state_202401;
var statearr_202406_202432 = state_202401__$1;
(statearr_202406_202432[(2)] = inst_202395);

(statearr_202406_202432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (6))){
var inst_202386 = (state_202401[(2)]);
var state_202401__$1 = state_202401;
if(cljs.core.truth_(inst_202386)){
var statearr_202407_202433 = state_202401__$1;
(statearr_202407_202433[(1)] = (8));

} else {
var statearr_202408_202434 = state_202401__$1;
(statearr_202408_202434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (3))){
var inst_202399 = (state_202401[(2)]);
var state_202401__$1 = state_202401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202401__$1,inst_202399);
} else {
if((state_val_202402 === (12))){
var state_202401__$1 = state_202401;
var statearr_202409_202435 = state_202401__$1;
(statearr_202409_202435[(2)] = null);

(statearr_202409_202435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (2))){
var inst_202378 = (state_202401[(7)]);
var state_202401__$1 = state_202401;
if(cljs.core.truth_(inst_202378)){
var statearr_202410_202436 = state_202401__$1;
(statearr_202410_202436[(1)] = (4));

} else {
var statearr_202411_202437 = state_202401__$1;
(statearr_202411_202437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (11))){
var inst_202392 = cljs.core.async.close_BANG_.call(null,ch);
var state_202401__$1 = state_202401;
var statearr_202412_202438 = state_202401__$1;
(statearr_202412_202438[(2)] = inst_202392);

(statearr_202412_202438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (9))){
var state_202401__$1 = state_202401;
if(cljs.core.truth_(close_QMARK_)){
var statearr_202413_202439 = state_202401__$1;
(statearr_202413_202439[(1)] = (11));

} else {
var statearr_202414_202440 = state_202401__$1;
(statearr_202414_202440[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (5))){
var inst_202378 = (state_202401[(7)]);
var state_202401__$1 = state_202401;
var statearr_202415_202441 = state_202401__$1;
(statearr_202415_202441[(2)] = inst_202378);

(statearr_202415_202441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (10))){
var inst_202397 = (state_202401[(2)]);
var state_202401__$1 = state_202401;
var statearr_202416_202442 = state_202401__$1;
(statearr_202416_202442[(2)] = inst_202397);

(statearr_202416_202442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202402 === (8))){
var inst_202378 = (state_202401[(7)]);
var inst_202388 = cljs.core.next.call(null,inst_202378);
var inst_202378__$1 = inst_202388;
var state_202401__$1 = (function (){var statearr_202417 = state_202401;
(statearr_202417[(7)] = inst_202378__$1);

return statearr_202417;
})();
var statearr_202418_202443 = state_202401__$1;
(statearr_202418_202443[(2)] = null);

(statearr_202418_202443[(1)] = (2));


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
});})(c__44084__auto__))
;
return ((function (switch__44061__auto__,c__44084__auto__){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_202422 = [null,null,null,null,null,null,null,null];
(statearr_202422[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_202422[(1)] = (1));

return statearr_202422;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_202401){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_202401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e202423){if((e202423 instanceof Object)){
var ex__44065__auto__ = e202423;
var statearr_202424_202444 = state_202401;
(statearr_202424_202444[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e202423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202445 = state_202401;
state_202401 = G__202445;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_202401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_202401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_202425 = f__44085__auto__.call(null);
(statearr_202425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_202425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__))
);

return c__44084__auto__;
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
var x__39924__auto__ = (((_ == null))?null:_);
var m__39925__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,_);
} else {
var m__39925__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,_);
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
var x__39924__auto__ = (((m == null))?null:m);
var m__39925__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__39925__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__39924__auto__ = (((m == null))?null:m);
var m__39925__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,m,ch);
} else {
var m__39925__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,m,ch);
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
var x__39924__auto__ = (((m == null))?null:m);
var m__39925__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,m);
} else {
var m__39925__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async202671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async202671 = (function (ch,cs,meta202672){
this.ch = ch;
this.cs = cs;
this.meta202672 = meta202672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async202671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_202673,meta202672__$1){
var self__ = this;
var _202673__$1 = this;
return (new cljs.core.async.t_cljs$core$async202671(self__.ch,self__.cs,meta202672__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async202671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_202673){
var self__ = this;
var _202673__$1 = this;
return self__.meta202672;
});})(cs))
;


cljs.core.async.t_cljs$core$async202671.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async202671.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async202671.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async202671.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async202671.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async202671.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async202671.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta202672","meta202672",2104987674,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async202671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async202671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async202671";

cljs.core.async.t_cljs$core$async202671.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async202671");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async202671 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async202671(ch__$1,cs__$1,meta202672){
return (new cljs.core.async.t_cljs$core$async202671(ch__$1,cs__$1,meta202672));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async202671(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44084__auto___202896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___202896,cs,m,dchan,dctr,done){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___202896,cs,m,dchan,dctr,done){
return (function (state_202808){
var state_val_202809 = (state_202808[(1)]);
if((state_val_202809 === (7))){
var inst_202804 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202810_202897 = state_202808__$1;
(statearr_202810_202897[(2)] = inst_202804);

(statearr_202810_202897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (20))){
var inst_202707 = (state_202808[(7)]);
var inst_202719 = cljs.core.first.call(null,inst_202707);
var inst_202720 = cljs.core.nth.call(null,inst_202719,(0),null);
var inst_202721 = cljs.core.nth.call(null,inst_202719,(1),null);
var state_202808__$1 = (function (){var statearr_202811 = state_202808;
(statearr_202811[(8)] = inst_202720);

return statearr_202811;
})();
if(cljs.core.truth_(inst_202721)){
var statearr_202812_202898 = state_202808__$1;
(statearr_202812_202898[(1)] = (22));

} else {
var statearr_202813_202899 = state_202808__$1;
(statearr_202813_202899[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (27))){
var inst_202756 = (state_202808[(9)]);
var inst_202676 = (state_202808[(10)]);
var inst_202749 = (state_202808[(11)]);
var inst_202751 = (state_202808[(12)]);
var inst_202756__$1 = cljs.core._nth.call(null,inst_202749,inst_202751);
var inst_202757 = cljs.core.async.put_BANG_.call(null,inst_202756__$1,inst_202676,done);
var state_202808__$1 = (function (){var statearr_202814 = state_202808;
(statearr_202814[(9)] = inst_202756__$1);

return statearr_202814;
})();
if(cljs.core.truth_(inst_202757)){
var statearr_202815_202900 = state_202808__$1;
(statearr_202815_202900[(1)] = (30));

} else {
var statearr_202816_202901 = state_202808__$1;
(statearr_202816_202901[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (1))){
var state_202808__$1 = state_202808;
var statearr_202817_202902 = state_202808__$1;
(statearr_202817_202902[(2)] = null);

(statearr_202817_202902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (24))){
var inst_202707 = (state_202808[(7)]);
var inst_202726 = (state_202808[(2)]);
var inst_202727 = cljs.core.next.call(null,inst_202707);
var inst_202685 = inst_202727;
var inst_202686 = null;
var inst_202687 = (0);
var inst_202688 = (0);
var state_202808__$1 = (function (){var statearr_202818 = state_202808;
(statearr_202818[(13)] = inst_202726);

(statearr_202818[(14)] = inst_202688);

(statearr_202818[(15)] = inst_202685);

(statearr_202818[(16)] = inst_202687);

(statearr_202818[(17)] = inst_202686);

return statearr_202818;
})();
var statearr_202819_202903 = state_202808__$1;
(statearr_202819_202903[(2)] = null);

(statearr_202819_202903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (39))){
var state_202808__$1 = state_202808;
var statearr_202823_202904 = state_202808__$1;
(statearr_202823_202904[(2)] = null);

(statearr_202823_202904[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (4))){
var inst_202676 = (state_202808[(10)]);
var inst_202676__$1 = (state_202808[(2)]);
var inst_202677 = (inst_202676__$1 == null);
var state_202808__$1 = (function (){var statearr_202824 = state_202808;
(statearr_202824[(10)] = inst_202676__$1);

return statearr_202824;
})();
if(cljs.core.truth_(inst_202677)){
var statearr_202825_202905 = state_202808__$1;
(statearr_202825_202905[(1)] = (5));

} else {
var statearr_202826_202906 = state_202808__$1;
(statearr_202826_202906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (15))){
var inst_202688 = (state_202808[(14)]);
var inst_202685 = (state_202808[(15)]);
var inst_202687 = (state_202808[(16)]);
var inst_202686 = (state_202808[(17)]);
var inst_202703 = (state_202808[(2)]);
var inst_202704 = (inst_202688 + (1));
var tmp202820 = inst_202685;
var tmp202821 = inst_202687;
var tmp202822 = inst_202686;
var inst_202685__$1 = tmp202820;
var inst_202686__$1 = tmp202822;
var inst_202687__$1 = tmp202821;
var inst_202688__$1 = inst_202704;
var state_202808__$1 = (function (){var statearr_202827 = state_202808;
(statearr_202827[(14)] = inst_202688__$1);

(statearr_202827[(18)] = inst_202703);

(statearr_202827[(15)] = inst_202685__$1);

(statearr_202827[(16)] = inst_202687__$1);

(statearr_202827[(17)] = inst_202686__$1);

return statearr_202827;
})();
var statearr_202828_202907 = state_202808__$1;
(statearr_202828_202907[(2)] = null);

(statearr_202828_202907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (21))){
var inst_202730 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202832_202908 = state_202808__$1;
(statearr_202832_202908[(2)] = inst_202730);

(statearr_202832_202908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (31))){
var inst_202756 = (state_202808[(9)]);
var inst_202760 = done.call(null,null);
var inst_202761 = cljs.core.async.untap_STAR_.call(null,m,inst_202756);
var state_202808__$1 = (function (){var statearr_202833 = state_202808;
(statearr_202833[(19)] = inst_202760);

return statearr_202833;
})();
var statearr_202834_202909 = state_202808__$1;
(statearr_202834_202909[(2)] = inst_202761);

(statearr_202834_202909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (32))){
var inst_202748 = (state_202808[(20)]);
var inst_202749 = (state_202808[(11)]);
var inst_202751 = (state_202808[(12)]);
var inst_202750 = (state_202808[(21)]);
var inst_202763 = (state_202808[(2)]);
var inst_202764 = (inst_202751 + (1));
var tmp202829 = inst_202748;
var tmp202830 = inst_202749;
var tmp202831 = inst_202750;
var inst_202748__$1 = tmp202829;
var inst_202749__$1 = tmp202830;
var inst_202750__$1 = tmp202831;
var inst_202751__$1 = inst_202764;
var state_202808__$1 = (function (){var statearr_202835 = state_202808;
(statearr_202835[(22)] = inst_202763);

(statearr_202835[(20)] = inst_202748__$1);

(statearr_202835[(11)] = inst_202749__$1);

(statearr_202835[(12)] = inst_202751__$1);

(statearr_202835[(21)] = inst_202750__$1);

return statearr_202835;
})();
var statearr_202836_202910 = state_202808__$1;
(statearr_202836_202910[(2)] = null);

(statearr_202836_202910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (40))){
var inst_202776 = (state_202808[(23)]);
var inst_202780 = done.call(null,null);
var inst_202781 = cljs.core.async.untap_STAR_.call(null,m,inst_202776);
var state_202808__$1 = (function (){var statearr_202837 = state_202808;
(statearr_202837[(24)] = inst_202780);

return statearr_202837;
})();
var statearr_202838_202911 = state_202808__$1;
(statearr_202838_202911[(2)] = inst_202781);

(statearr_202838_202911[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (33))){
var inst_202767 = (state_202808[(25)]);
var inst_202769 = cljs.core.chunked_seq_QMARK_.call(null,inst_202767);
var state_202808__$1 = state_202808;
if(inst_202769){
var statearr_202839_202912 = state_202808__$1;
(statearr_202839_202912[(1)] = (36));

} else {
var statearr_202840_202913 = state_202808__$1;
(statearr_202840_202913[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (13))){
var inst_202697 = (state_202808[(26)]);
var inst_202700 = cljs.core.async.close_BANG_.call(null,inst_202697);
var state_202808__$1 = state_202808;
var statearr_202841_202914 = state_202808__$1;
(statearr_202841_202914[(2)] = inst_202700);

(statearr_202841_202914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (22))){
var inst_202720 = (state_202808[(8)]);
var inst_202723 = cljs.core.async.close_BANG_.call(null,inst_202720);
var state_202808__$1 = state_202808;
var statearr_202842_202915 = state_202808__$1;
(statearr_202842_202915[(2)] = inst_202723);

(statearr_202842_202915[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (36))){
var inst_202767 = (state_202808[(25)]);
var inst_202771 = cljs.core.chunk_first.call(null,inst_202767);
var inst_202772 = cljs.core.chunk_rest.call(null,inst_202767);
var inst_202773 = cljs.core.count.call(null,inst_202771);
var inst_202748 = inst_202772;
var inst_202749 = inst_202771;
var inst_202750 = inst_202773;
var inst_202751 = (0);
var state_202808__$1 = (function (){var statearr_202843 = state_202808;
(statearr_202843[(20)] = inst_202748);

(statearr_202843[(11)] = inst_202749);

(statearr_202843[(12)] = inst_202751);

(statearr_202843[(21)] = inst_202750);

return statearr_202843;
})();
var statearr_202844_202916 = state_202808__$1;
(statearr_202844_202916[(2)] = null);

(statearr_202844_202916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (41))){
var inst_202767 = (state_202808[(25)]);
var inst_202783 = (state_202808[(2)]);
var inst_202784 = cljs.core.next.call(null,inst_202767);
var inst_202748 = inst_202784;
var inst_202749 = null;
var inst_202750 = (0);
var inst_202751 = (0);
var state_202808__$1 = (function (){var statearr_202845 = state_202808;
(statearr_202845[(20)] = inst_202748);

(statearr_202845[(27)] = inst_202783);

(statearr_202845[(11)] = inst_202749);

(statearr_202845[(12)] = inst_202751);

(statearr_202845[(21)] = inst_202750);

return statearr_202845;
})();
var statearr_202846_202917 = state_202808__$1;
(statearr_202846_202917[(2)] = null);

(statearr_202846_202917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (43))){
var state_202808__$1 = state_202808;
var statearr_202847_202918 = state_202808__$1;
(statearr_202847_202918[(2)] = null);

(statearr_202847_202918[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (29))){
var inst_202792 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202848_202919 = state_202808__$1;
(statearr_202848_202919[(2)] = inst_202792);

(statearr_202848_202919[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (44))){
var inst_202801 = (state_202808[(2)]);
var state_202808__$1 = (function (){var statearr_202849 = state_202808;
(statearr_202849[(28)] = inst_202801);

return statearr_202849;
})();
var statearr_202850_202920 = state_202808__$1;
(statearr_202850_202920[(2)] = null);

(statearr_202850_202920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (6))){
var inst_202740 = (state_202808[(29)]);
var inst_202739 = cljs.core.deref.call(null,cs);
var inst_202740__$1 = cljs.core.keys.call(null,inst_202739);
var inst_202741 = cljs.core.count.call(null,inst_202740__$1);
var inst_202742 = cljs.core.reset_BANG_.call(null,dctr,inst_202741);
var inst_202747 = cljs.core.seq.call(null,inst_202740__$1);
var inst_202748 = inst_202747;
var inst_202749 = null;
var inst_202750 = (0);
var inst_202751 = (0);
var state_202808__$1 = (function (){var statearr_202851 = state_202808;
(statearr_202851[(29)] = inst_202740__$1);

(statearr_202851[(20)] = inst_202748);

(statearr_202851[(30)] = inst_202742);

(statearr_202851[(11)] = inst_202749);

(statearr_202851[(12)] = inst_202751);

(statearr_202851[(21)] = inst_202750);

return statearr_202851;
})();
var statearr_202852_202921 = state_202808__$1;
(statearr_202852_202921[(2)] = null);

(statearr_202852_202921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (28))){
var inst_202748 = (state_202808[(20)]);
var inst_202767 = (state_202808[(25)]);
var inst_202767__$1 = cljs.core.seq.call(null,inst_202748);
var state_202808__$1 = (function (){var statearr_202853 = state_202808;
(statearr_202853[(25)] = inst_202767__$1);

return statearr_202853;
})();
if(inst_202767__$1){
var statearr_202854_202922 = state_202808__$1;
(statearr_202854_202922[(1)] = (33));

} else {
var statearr_202855_202923 = state_202808__$1;
(statearr_202855_202923[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (25))){
var inst_202751 = (state_202808[(12)]);
var inst_202750 = (state_202808[(21)]);
var inst_202753 = (inst_202751 < inst_202750);
var inst_202754 = inst_202753;
var state_202808__$1 = state_202808;
if(cljs.core.truth_(inst_202754)){
var statearr_202856_202924 = state_202808__$1;
(statearr_202856_202924[(1)] = (27));

} else {
var statearr_202857_202925 = state_202808__$1;
(statearr_202857_202925[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (34))){
var state_202808__$1 = state_202808;
var statearr_202858_202926 = state_202808__$1;
(statearr_202858_202926[(2)] = null);

(statearr_202858_202926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (17))){
var state_202808__$1 = state_202808;
var statearr_202859_202927 = state_202808__$1;
(statearr_202859_202927[(2)] = null);

(statearr_202859_202927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (3))){
var inst_202806 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202808__$1,inst_202806);
} else {
if((state_val_202809 === (12))){
var inst_202735 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202860_202928 = state_202808__$1;
(statearr_202860_202928[(2)] = inst_202735);

(statearr_202860_202928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (2))){
var state_202808__$1 = state_202808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202808__$1,(4),ch);
} else {
if((state_val_202809 === (23))){
var state_202808__$1 = state_202808;
var statearr_202861_202929 = state_202808__$1;
(statearr_202861_202929[(2)] = null);

(statearr_202861_202929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (35))){
var inst_202790 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202862_202930 = state_202808__$1;
(statearr_202862_202930[(2)] = inst_202790);

(statearr_202862_202930[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (19))){
var inst_202707 = (state_202808[(7)]);
var inst_202711 = cljs.core.chunk_first.call(null,inst_202707);
var inst_202712 = cljs.core.chunk_rest.call(null,inst_202707);
var inst_202713 = cljs.core.count.call(null,inst_202711);
var inst_202685 = inst_202712;
var inst_202686 = inst_202711;
var inst_202687 = inst_202713;
var inst_202688 = (0);
var state_202808__$1 = (function (){var statearr_202863 = state_202808;
(statearr_202863[(14)] = inst_202688);

(statearr_202863[(15)] = inst_202685);

(statearr_202863[(16)] = inst_202687);

(statearr_202863[(17)] = inst_202686);

return statearr_202863;
})();
var statearr_202864_202931 = state_202808__$1;
(statearr_202864_202931[(2)] = null);

(statearr_202864_202931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (11))){
var inst_202707 = (state_202808[(7)]);
var inst_202685 = (state_202808[(15)]);
var inst_202707__$1 = cljs.core.seq.call(null,inst_202685);
var state_202808__$1 = (function (){var statearr_202865 = state_202808;
(statearr_202865[(7)] = inst_202707__$1);

return statearr_202865;
})();
if(inst_202707__$1){
var statearr_202866_202932 = state_202808__$1;
(statearr_202866_202932[(1)] = (16));

} else {
var statearr_202867_202933 = state_202808__$1;
(statearr_202867_202933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (9))){
var inst_202737 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202868_202934 = state_202808__$1;
(statearr_202868_202934[(2)] = inst_202737);

(statearr_202868_202934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (5))){
var inst_202683 = cljs.core.deref.call(null,cs);
var inst_202684 = cljs.core.seq.call(null,inst_202683);
var inst_202685 = inst_202684;
var inst_202686 = null;
var inst_202687 = (0);
var inst_202688 = (0);
var state_202808__$1 = (function (){var statearr_202869 = state_202808;
(statearr_202869[(14)] = inst_202688);

(statearr_202869[(15)] = inst_202685);

(statearr_202869[(16)] = inst_202687);

(statearr_202869[(17)] = inst_202686);

return statearr_202869;
})();
var statearr_202870_202935 = state_202808__$1;
(statearr_202870_202935[(2)] = null);

(statearr_202870_202935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (14))){
var state_202808__$1 = state_202808;
var statearr_202871_202936 = state_202808__$1;
(statearr_202871_202936[(2)] = null);

(statearr_202871_202936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (45))){
var inst_202798 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202872_202937 = state_202808__$1;
(statearr_202872_202937[(2)] = inst_202798);

(statearr_202872_202937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (26))){
var inst_202740 = (state_202808[(29)]);
var inst_202794 = (state_202808[(2)]);
var inst_202795 = cljs.core.seq.call(null,inst_202740);
var state_202808__$1 = (function (){var statearr_202873 = state_202808;
(statearr_202873[(31)] = inst_202794);

return statearr_202873;
})();
if(inst_202795){
var statearr_202874_202938 = state_202808__$1;
(statearr_202874_202938[(1)] = (42));

} else {
var statearr_202875_202939 = state_202808__$1;
(statearr_202875_202939[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (16))){
var inst_202707 = (state_202808[(7)]);
var inst_202709 = cljs.core.chunked_seq_QMARK_.call(null,inst_202707);
var state_202808__$1 = state_202808;
if(inst_202709){
var statearr_202876_202940 = state_202808__$1;
(statearr_202876_202940[(1)] = (19));

} else {
var statearr_202877_202941 = state_202808__$1;
(statearr_202877_202941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (38))){
var inst_202787 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202878_202942 = state_202808__$1;
(statearr_202878_202942[(2)] = inst_202787);

(statearr_202878_202942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (30))){
var state_202808__$1 = state_202808;
var statearr_202879_202943 = state_202808__$1;
(statearr_202879_202943[(2)] = null);

(statearr_202879_202943[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (10))){
var inst_202688 = (state_202808[(14)]);
var inst_202686 = (state_202808[(17)]);
var inst_202696 = cljs.core._nth.call(null,inst_202686,inst_202688);
var inst_202697 = cljs.core.nth.call(null,inst_202696,(0),null);
var inst_202698 = cljs.core.nth.call(null,inst_202696,(1),null);
var state_202808__$1 = (function (){var statearr_202880 = state_202808;
(statearr_202880[(26)] = inst_202697);

return statearr_202880;
})();
if(cljs.core.truth_(inst_202698)){
var statearr_202881_202944 = state_202808__$1;
(statearr_202881_202944[(1)] = (13));

} else {
var statearr_202882_202945 = state_202808__$1;
(statearr_202882_202945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (18))){
var inst_202733 = (state_202808[(2)]);
var state_202808__$1 = state_202808;
var statearr_202883_202946 = state_202808__$1;
(statearr_202883_202946[(2)] = inst_202733);

(statearr_202883_202946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (42))){
var state_202808__$1 = state_202808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202808__$1,(45),dchan);
} else {
if((state_val_202809 === (37))){
var inst_202776 = (state_202808[(23)]);
var inst_202767 = (state_202808[(25)]);
var inst_202676 = (state_202808[(10)]);
var inst_202776__$1 = cljs.core.first.call(null,inst_202767);
var inst_202777 = cljs.core.async.put_BANG_.call(null,inst_202776__$1,inst_202676,done);
var state_202808__$1 = (function (){var statearr_202884 = state_202808;
(statearr_202884[(23)] = inst_202776__$1);

return statearr_202884;
})();
if(cljs.core.truth_(inst_202777)){
var statearr_202885_202947 = state_202808__$1;
(statearr_202885_202947[(1)] = (39));

} else {
var statearr_202886_202948 = state_202808__$1;
(statearr_202886_202948[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_202809 === (8))){
var inst_202688 = (state_202808[(14)]);
var inst_202687 = (state_202808[(16)]);
var inst_202690 = (inst_202688 < inst_202687);
var inst_202691 = inst_202690;
var state_202808__$1 = state_202808;
if(cljs.core.truth_(inst_202691)){
var statearr_202887_202949 = state_202808__$1;
(statearr_202887_202949[(1)] = (10));

} else {
var statearr_202888_202950 = state_202808__$1;
(statearr_202888_202950[(1)] = (11));

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
});})(c__44084__auto___202896,cs,m,dchan,dctr,done))
;
return ((function (switch__44061__auto__,c__44084__auto___202896,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44062__auto__ = null;
var cljs$core$async$mult_$_state_machine__44062__auto____0 = (function (){
var statearr_202892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_202892[(0)] = cljs$core$async$mult_$_state_machine__44062__auto__);

(statearr_202892[(1)] = (1));

return statearr_202892;
});
var cljs$core$async$mult_$_state_machine__44062__auto____1 = (function (state_202808){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_202808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e202893){if((e202893 instanceof Object)){
var ex__44065__auto__ = e202893;
var statearr_202894_202951 = state_202808;
(statearr_202894_202951[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e202893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__202952 = state_202808;
state_202808 = G__202952;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44062__auto__ = function(state_202808){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44062__auto____1.call(this,state_202808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44062__auto____0;
cljs$core$async$mult_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44062__auto____1;
return cljs$core$async$mult_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___202896,cs,m,dchan,dctr,done))
})();
var state__44086__auto__ = (function (){var statearr_202895 = f__44085__auto__.call(null);
(statearr_202895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___202896);

return statearr_202895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___202896,cs,m,dchan,dctr,done))
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
var args202953 = [];
var len__40427__auto___202956 = arguments.length;
var i__40428__auto___202957 = (0);
while(true){
if((i__40428__auto___202957 < len__40427__auto___202956)){
args202953.push((arguments[i__40428__auto___202957]));

var G__202958 = (i__40428__auto___202957 + (1));
i__40428__auto___202957 = G__202958;
continue;
} else {
}
break;
}

var G__202955 = args202953.length;
switch (G__202955) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args202953.length)].join('')));

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
var x__39924__auto__ = (((m == null))?null:m);
var m__39925__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,m,ch);
} else {
var m__39925__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,m,ch);
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
var x__39924__auto__ = (((m == null))?null:m);
var m__39925__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,m,ch);
} else {
var m__39925__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,m,ch);
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
var x__39924__auto__ = (((m == null))?null:m);
var m__39925__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,m);
} else {
var m__39925__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,m);
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
var x__39924__auto__ = (((m == null))?null:m);
var m__39925__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,m,state_map);
} else {
var m__39925__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,m,state_map);
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
var x__39924__auto__ = (((m == null))?null:m);
var m__39925__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,m,mode);
} else {
var m__39925__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__40434__auto__ = [];
var len__40427__auto___202970 = arguments.length;
var i__40428__auto___202971 = (0);
while(true){
if((i__40428__auto___202971 < len__40427__auto___202970)){
args__40434__auto__.push((arguments[i__40428__auto___202971]));

var G__202972 = (i__40428__auto___202971 + (1));
i__40428__auto___202971 = G__202972;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((3) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40435__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__202964){
var map__202965 = p__202964;
var map__202965__$1 = ((((!((map__202965 == null)))?((((map__202965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__202965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__202965):map__202965);
var opts = map__202965__$1;
var statearr_202967_202973 = state;
(statearr_202967_202973[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__202965,map__202965__$1,opts){
return (function (val){
var statearr_202968_202974 = state;
(statearr_202968_202974[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__202965,map__202965__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_202969_202975 = state;
(statearr_202969_202975[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq202960){
var G__202961 = cljs.core.first.call(null,seq202960);
var seq202960__$1 = cljs.core.next.call(null,seq202960);
var G__202962 = cljs.core.first.call(null,seq202960__$1);
var seq202960__$2 = cljs.core.next.call(null,seq202960__$1);
var G__202963 = cljs.core.first.call(null,seq202960__$2);
var seq202960__$3 = cljs.core.next.call(null,seq202960__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__202961,G__202962,G__202963,seq202960__$3);
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
if(typeof cljs.core.async.t_cljs$core$async203143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async203143 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta203144){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta203144 = meta203144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_203145,meta203144__$1){
var self__ = this;
var _203145__$1 = this;
return (new cljs.core.async.t_cljs$core$async203143(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta203144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_203145){
var self__ = this;
var _203145__$1 = this;
return self__.meta203144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async203143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async203143.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta203144","meta203144",-2085957636,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async203143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async203143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async203143";

cljs.core.async.t_cljs$core$async203143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async203143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async203143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async203143(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta203144){
return (new cljs.core.async.t_cljs$core$async203143(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta203144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async203143(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44084__auto___203310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___203310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___203310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_203247){
var state_val_203248 = (state_203247[(1)]);
if((state_val_203248 === (7))){
var inst_203162 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
var statearr_203249_203311 = state_203247__$1;
(statearr_203249_203311[(2)] = inst_203162);

(statearr_203249_203311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (20))){
var inst_203174 = (state_203247[(7)]);
var state_203247__$1 = state_203247;
var statearr_203250_203312 = state_203247__$1;
(statearr_203250_203312[(2)] = inst_203174);

(statearr_203250_203312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (27))){
var state_203247__$1 = state_203247;
var statearr_203251_203313 = state_203247__$1;
(statearr_203251_203313[(2)] = null);

(statearr_203251_203313[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (1))){
var inst_203149 = (state_203247[(8)]);
var inst_203149__$1 = calc_state.call(null);
var inst_203151 = (inst_203149__$1 == null);
var inst_203152 = cljs.core.not.call(null,inst_203151);
var state_203247__$1 = (function (){var statearr_203252 = state_203247;
(statearr_203252[(8)] = inst_203149__$1);

return statearr_203252;
})();
if(inst_203152){
var statearr_203253_203314 = state_203247__$1;
(statearr_203253_203314[(1)] = (2));

} else {
var statearr_203254_203315 = state_203247__$1;
(statearr_203254_203315[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (24))){
var inst_203198 = (state_203247[(9)]);
var inst_203221 = (state_203247[(10)]);
var inst_203207 = (state_203247[(11)]);
var inst_203221__$1 = inst_203198.call(null,inst_203207);
var state_203247__$1 = (function (){var statearr_203255 = state_203247;
(statearr_203255[(10)] = inst_203221__$1);

return statearr_203255;
})();
if(cljs.core.truth_(inst_203221__$1)){
var statearr_203256_203316 = state_203247__$1;
(statearr_203256_203316[(1)] = (29));

} else {
var statearr_203257_203317 = state_203247__$1;
(statearr_203257_203317[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (4))){
var inst_203165 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
if(cljs.core.truth_(inst_203165)){
var statearr_203258_203318 = state_203247__$1;
(statearr_203258_203318[(1)] = (8));

} else {
var statearr_203259_203319 = state_203247__$1;
(statearr_203259_203319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (15))){
var inst_203192 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
if(cljs.core.truth_(inst_203192)){
var statearr_203260_203320 = state_203247__$1;
(statearr_203260_203320[(1)] = (19));

} else {
var statearr_203261_203321 = state_203247__$1;
(statearr_203261_203321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (21))){
var inst_203197 = (state_203247[(12)]);
var inst_203197__$1 = (state_203247[(2)]);
var inst_203198 = cljs.core.get.call(null,inst_203197__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_203199 = cljs.core.get.call(null,inst_203197__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_203200 = cljs.core.get.call(null,inst_203197__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_203247__$1 = (function (){var statearr_203262 = state_203247;
(statearr_203262[(9)] = inst_203198);

(statearr_203262[(12)] = inst_203197__$1);

(statearr_203262[(13)] = inst_203199);

return statearr_203262;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_203247__$1,(22),inst_203200);
} else {
if((state_val_203248 === (31))){
var inst_203229 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
if(cljs.core.truth_(inst_203229)){
var statearr_203263_203322 = state_203247__$1;
(statearr_203263_203322[(1)] = (32));

} else {
var statearr_203264_203323 = state_203247__$1;
(statearr_203264_203323[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (32))){
var inst_203206 = (state_203247[(14)]);
var state_203247__$1 = state_203247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203247__$1,(35),out,inst_203206);
} else {
if((state_val_203248 === (33))){
var inst_203197 = (state_203247[(12)]);
var inst_203174 = inst_203197;
var state_203247__$1 = (function (){var statearr_203265 = state_203247;
(statearr_203265[(7)] = inst_203174);

return statearr_203265;
})();
var statearr_203266_203324 = state_203247__$1;
(statearr_203266_203324[(2)] = null);

(statearr_203266_203324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (13))){
var inst_203174 = (state_203247[(7)]);
var inst_203181 = inst_203174.cljs$lang$protocol_mask$partition0$;
var inst_203182 = (inst_203181 & (64));
var inst_203183 = inst_203174.cljs$core$ISeq$;
var inst_203184 = (cljs.core.PROTOCOL_SENTINEL === inst_203183);
var inst_203185 = (inst_203182) || (inst_203184);
var state_203247__$1 = state_203247;
if(cljs.core.truth_(inst_203185)){
var statearr_203267_203325 = state_203247__$1;
(statearr_203267_203325[(1)] = (16));

} else {
var statearr_203268_203326 = state_203247__$1;
(statearr_203268_203326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (22))){
var inst_203206 = (state_203247[(14)]);
var inst_203207 = (state_203247[(11)]);
var inst_203205 = (state_203247[(2)]);
var inst_203206__$1 = cljs.core.nth.call(null,inst_203205,(0),null);
var inst_203207__$1 = cljs.core.nth.call(null,inst_203205,(1),null);
var inst_203208 = (inst_203206__$1 == null);
var inst_203209 = cljs.core._EQ_.call(null,inst_203207__$1,change);
var inst_203210 = (inst_203208) || (inst_203209);
var state_203247__$1 = (function (){var statearr_203269 = state_203247;
(statearr_203269[(14)] = inst_203206__$1);

(statearr_203269[(11)] = inst_203207__$1);

return statearr_203269;
})();
if(cljs.core.truth_(inst_203210)){
var statearr_203270_203327 = state_203247__$1;
(statearr_203270_203327[(1)] = (23));

} else {
var statearr_203271_203328 = state_203247__$1;
(statearr_203271_203328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (36))){
var inst_203197 = (state_203247[(12)]);
var inst_203174 = inst_203197;
var state_203247__$1 = (function (){var statearr_203272 = state_203247;
(statearr_203272[(7)] = inst_203174);

return statearr_203272;
})();
var statearr_203273_203329 = state_203247__$1;
(statearr_203273_203329[(2)] = null);

(statearr_203273_203329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (29))){
var inst_203221 = (state_203247[(10)]);
var state_203247__$1 = state_203247;
var statearr_203274_203330 = state_203247__$1;
(statearr_203274_203330[(2)] = inst_203221);

(statearr_203274_203330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (6))){
var state_203247__$1 = state_203247;
var statearr_203275_203331 = state_203247__$1;
(statearr_203275_203331[(2)] = false);

(statearr_203275_203331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (28))){
var inst_203217 = (state_203247[(2)]);
var inst_203218 = calc_state.call(null);
var inst_203174 = inst_203218;
var state_203247__$1 = (function (){var statearr_203276 = state_203247;
(statearr_203276[(7)] = inst_203174);

(statearr_203276[(15)] = inst_203217);

return statearr_203276;
})();
var statearr_203277_203332 = state_203247__$1;
(statearr_203277_203332[(2)] = null);

(statearr_203277_203332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (25))){
var inst_203243 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
var statearr_203278_203333 = state_203247__$1;
(statearr_203278_203333[(2)] = inst_203243);

(statearr_203278_203333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (34))){
var inst_203241 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
var statearr_203279_203334 = state_203247__$1;
(statearr_203279_203334[(2)] = inst_203241);

(statearr_203279_203334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (17))){
var state_203247__$1 = state_203247;
var statearr_203280_203335 = state_203247__$1;
(statearr_203280_203335[(2)] = false);

(statearr_203280_203335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (3))){
var state_203247__$1 = state_203247;
var statearr_203281_203336 = state_203247__$1;
(statearr_203281_203336[(2)] = false);

(statearr_203281_203336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (12))){
var inst_203245 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203247__$1,inst_203245);
} else {
if((state_val_203248 === (2))){
var inst_203149 = (state_203247[(8)]);
var inst_203154 = inst_203149.cljs$lang$protocol_mask$partition0$;
var inst_203155 = (inst_203154 & (64));
var inst_203156 = inst_203149.cljs$core$ISeq$;
var inst_203157 = (cljs.core.PROTOCOL_SENTINEL === inst_203156);
var inst_203158 = (inst_203155) || (inst_203157);
var state_203247__$1 = state_203247;
if(cljs.core.truth_(inst_203158)){
var statearr_203282_203337 = state_203247__$1;
(statearr_203282_203337[(1)] = (5));

} else {
var statearr_203283_203338 = state_203247__$1;
(statearr_203283_203338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (23))){
var inst_203206 = (state_203247[(14)]);
var inst_203212 = (inst_203206 == null);
var state_203247__$1 = state_203247;
if(cljs.core.truth_(inst_203212)){
var statearr_203284_203339 = state_203247__$1;
(statearr_203284_203339[(1)] = (26));

} else {
var statearr_203285_203340 = state_203247__$1;
(statearr_203285_203340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (35))){
var inst_203232 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
if(cljs.core.truth_(inst_203232)){
var statearr_203286_203341 = state_203247__$1;
(statearr_203286_203341[(1)] = (36));

} else {
var statearr_203287_203342 = state_203247__$1;
(statearr_203287_203342[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (19))){
var inst_203174 = (state_203247[(7)]);
var inst_203194 = cljs.core.apply.call(null,cljs.core.hash_map,inst_203174);
var state_203247__$1 = state_203247;
var statearr_203288_203343 = state_203247__$1;
(statearr_203288_203343[(2)] = inst_203194);

(statearr_203288_203343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (11))){
var inst_203174 = (state_203247[(7)]);
var inst_203178 = (inst_203174 == null);
var inst_203179 = cljs.core.not.call(null,inst_203178);
var state_203247__$1 = state_203247;
if(inst_203179){
var statearr_203289_203344 = state_203247__$1;
(statearr_203289_203344[(1)] = (13));

} else {
var statearr_203290_203345 = state_203247__$1;
(statearr_203290_203345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (9))){
var inst_203149 = (state_203247[(8)]);
var state_203247__$1 = state_203247;
var statearr_203291_203346 = state_203247__$1;
(statearr_203291_203346[(2)] = inst_203149);

(statearr_203291_203346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (5))){
var state_203247__$1 = state_203247;
var statearr_203292_203347 = state_203247__$1;
(statearr_203292_203347[(2)] = true);

(statearr_203292_203347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (14))){
var state_203247__$1 = state_203247;
var statearr_203293_203348 = state_203247__$1;
(statearr_203293_203348[(2)] = false);

(statearr_203293_203348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (26))){
var inst_203207 = (state_203247[(11)]);
var inst_203214 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_203207);
var state_203247__$1 = state_203247;
var statearr_203294_203349 = state_203247__$1;
(statearr_203294_203349[(2)] = inst_203214);

(statearr_203294_203349[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (16))){
var state_203247__$1 = state_203247;
var statearr_203295_203350 = state_203247__$1;
(statearr_203295_203350[(2)] = true);

(statearr_203295_203350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (38))){
var inst_203237 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
var statearr_203296_203351 = state_203247__$1;
(statearr_203296_203351[(2)] = inst_203237);

(statearr_203296_203351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (30))){
var inst_203198 = (state_203247[(9)]);
var inst_203207 = (state_203247[(11)]);
var inst_203199 = (state_203247[(13)]);
var inst_203224 = cljs.core.empty_QMARK_.call(null,inst_203198);
var inst_203225 = inst_203199.call(null,inst_203207);
var inst_203226 = cljs.core.not.call(null,inst_203225);
var inst_203227 = (inst_203224) && (inst_203226);
var state_203247__$1 = state_203247;
var statearr_203297_203352 = state_203247__$1;
(statearr_203297_203352[(2)] = inst_203227);

(statearr_203297_203352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (10))){
var inst_203149 = (state_203247[(8)]);
var inst_203170 = (state_203247[(2)]);
var inst_203171 = cljs.core.get.call(null,inst_203170,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_203172 = cljs.core.get.call(null,inst_203170,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_203173 = cljs.core.get.call(null,inst_203170,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_203174 = inst_203149;
var state_203247__$1 = (function (){var statearr_203298 = state_203247;
(statearr_203298[(16)] = inst_203173);

(statearr_203298[(17)] = inst_203171);

(statearr_203298[(7)] = inst_203174);

(statearr_203298[(18)] = inst_203172);

return statearr_203298;
})();
var statearr_203299_203353 = state_203247__$1;
(statearr_203299_203353[(2)] = null);

(statearr_203299_203353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (18))){
var inst_203189 = (state_203247[(2)]);
var state_203247__$1 = state_203247;
var statearr_203300_203354 = state_203247__$1;
(statearr_203300_203354[(2)] = inst_203189);

(statearr_203300_203354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (37))){
var state_203247__$1 = state_203247;
var statearr_203301_203355 = state_203247__$1;
(statearr_203301_203355[(2)] = null);

(statearr_203301_203355[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203248 === (8))){
var inst_203149 = (state_203247[(8)]);
var inst_203167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_203149);
var state_203247__$1 = state_203247;
var statearr_203302_203356 = state_203247__$1;
(statearr_203302_203356[(2)] = inst_203167);

(statearr_203302_203356[(1)] = (10));


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
});})(c__44084__auto___203310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44061__auto__,c__44084__auto___203310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44062__auto__ = null;
var cljs$core$async$mix_$_state_machine__44062__auto____0 = (function (){
var statearr_203306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_203306[(0)] = cljs$core$async$mix_$_state_machine__44062__auto__);

(statearr_203306[(1)] = (1));

return statearr_203306;
});
var cljs$core$async$mix_$_state_machine__44062__auto____1 = (function (state_203247){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_203247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e203307){if((e203307 instanceof Object)){
var ex__44065__auto__ = e203307;
var statearr_203308_203357 = state_203247;
(statearr_203308_203357[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203358 = state_203247;
state_203247 = G__203358;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44062__auto__ = function(state_203247){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44062__auto____1.call(this,state_203247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44062__auto____0;
cljs$core$async$mix_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44062__auto____1;
return cljs$core$async$mix_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___203310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44086__auto__ = (function (){var statearr_203309 = f__44085__auto__.call(null);
(statearr_203309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___203310);

return statearr_203309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___203310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__39924__auto__ = (((p == null))?null:p);
var m__39925__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__39925__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__39924__auto__ = (((p == null))?null:p);
var m__39925__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,p,v,ch);
} else {
var m__39925__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args203359 = [];
var len__40427__auto___203362 = arguments.length;
var i__40428__auto___203363 = (0);
while(true){
if((i__40428__auto___203363 < len__40427__auto___203362)){
args203359.push((arguments[i__40428__auto___203363]));

var G__203364 = (i__40428__auto___203363 + (1));
i__40428__auto___203363 = G__203364;
continue;
} else {
}
break;
}

var G__203361 = args203359.length;
switch (G__203361) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203359.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__39924__auto__ = (((p == null))?null:p);
var m__39925__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,p);
} else {
var m__39925__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,p);
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
var x__39924__auto__ = (((p == null))?null:p);
var m__39925__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__39924__auto__)]);
if(!((m__39925__auto__ == null))){
return m__39925__auto__.call(null,p,v);
} else {
var m__39925__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__39925__auto____$1 == null))){
return m__39925__auto____$1.call(null,p,v);
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
var args203367 = [];
var len__40427__auto___203492 = arguments.length;
var i__40428__auto___203493 = (0);
while(true){
if((i__40428__auto___203493 < len__40427__auto___203492)){
args203367.push((arguments[i__40428__auto___203493]));

var G__203494 = (i__40428__auto___203493 + (1));
i__40428__auto___203493 = G__203494;
continue;
} else {
}
break;
}

var G__203369 = args203367.length;
switch (G__203369) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203367.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__39206__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__39206__auto__,mults){
return (function (p1__203366_SHARP_){
if(cljs.core.truth_(p1__203366_SHARP_.call(null,topic))){
return p1__203366_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__203366_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__39206__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async203370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async203370 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta203371){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta203371 = meta203371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_203372,meta203371__$1){
var self__ = this;
var _203372__$1 = this;
return (new cljs.core.async.t_cljs$core$async203370(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta203371__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_203372){
var self__ = this;
var _203372__$1 = this;
return self__.meta203371;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async203370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async203370.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta203371","meta203371",283835097,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async203370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async203370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async203370";

cljs.core.async.t_cljs$core$async203370.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async203370");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async203370 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async203370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta203371){
return (new cljs.core.async.t_cljs$core$async203370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta203371));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async203370(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44084__auto___203496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___203496,mults,ensure_mult,p){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___203496,mults,ensure_mult,p){
return (function (state_203444){
var state_val_203445 = (state_203444[(1)]);
if((state_val_203445 === (7))){
var inst_203440 = (state_203444[(2)]);
var state_203444__$1 = state_203444;
var statearr_203446_203497 = state_203444__$1;
(statearr_203446_203497[(2)] = inst_203440);

(statearr_203446_203497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (20))){
var state_203444__$1 = state_203444;
var statearr_203447_203498 = state_203444__$1;
(statearr_203447_203498[(2)] = null);

(statearr_203447_203498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (1))){
var state_203444__$1 = state_203444;
var statearr_203448_203499 = state_203444__$1;
(statearr_203448_203499[(2)] = null);

(statearr_203448_203499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (24))){
var inst_203423 = (state_203444[(7)]);
var inst_203432 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_203423);
var state_203444__$1 = state_203444;
var statearr_203449_203500 = state_203444__$1;
(statearr_203449_203500[(2)] = inst_203432);

(statearr_203449_203500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (4))){
var inst_203375 = (state_203444[(8)]);
var inst_203375__$1 = (state_203444[(2)]);
var inst_203376 = (inst_203375__$1 == null);
var state_203444__$1 = (function (){var statearr_203450 = state_203444;
(statearr_203450[(8)] = inst_203375__$1);

return statearr_203450;
})();
if(cljs.core.truth_(inst_203376)){
var statearr_203451_203501 = state_203444__$1;
(statearr_203451_203501[(1)] = (5));

} else {
var statearr_203452_203502 = state_203444__$1;
(statearr_203452_203502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (15))){
var inst_203417 = (state_203444[(2)]);
var state_203444__$1 = state_203444;
var statearr_203453_203503 = state_203444__$1;
(statearr_203453_203503[(2)] = inst_203417);

(statearr_203453_203503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (21))){
var inst_203437 = (state_203444[(2)]);
var state_203444__$1 = (function (){var statearr_203454 = state_203444;
(statearr_203454[(9)] = inst_203437);

return statearr_203454;
})();
var statearr_203455_203504 = state_203444__$1;
(statearr_203455_203504[(2)] = null);

(statearr_203455_203504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (13))){
var inst_203399 = (state_203444[(10)]);
var inst_203401 = cljs.core.chunked_seq_QMARK_.call(null,inst_203399);
var state_203444__$1 = state_203444;
if(inst_203401){
var statearr_203456_203505 = state_203444__$1;
(statearr_203456_203505[(1)] = (16));

} else {
var statearr_203457_203506 = state_203444__$1;
(statearr_203457_203506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (22))){
var inst_203429 = (state_203444[(2)]);
var state_203444__$1 = state_203444;
if(cljs.core.truth_(inst_203429)){
var statearr_203458_203507 = state_203444__$1;
(statearr_203458_203507[(1)] = (23));

} else {
var statearr_203459_203508 = state_203444__$1;
(statearr_203459_203508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (6))){
var inst_203375 = (state_203444[(8)]);
var inst_203425 = (state_203444[(11)]);
var inst_203423 = (state_203444[(7)]);
var inst_203423__$1 = topic_fn.call(null,inst_203375);
var inst_203424 = cljs.core.deref.call(null,mults);
var inst_203425__$1 = cljs.core.get.call(null,inst_203424,inst_203423__$1);
var state_203444__$1 = (function (){var statearr_203460 = state_203444;
(statearr_203460[(11)] = inst_203425__$1);

(statearr_203460[(7)] = inst_203423__$1);

return statearr_203460;
})();
if(cljs.core.truth_(inst_203425__$1)){
var statearr_203461_203509 = state_203444__$1;
(statearr_203461_203509[(1)] = (19));

} else {
var statearr_203462_203510 = state_203444__$1;
(statearr_203462_203510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (25))){
var inst_203434 = (state_203444[(2)]);
var state_203444__$1 = state_203444;
var statearr_203463_203511 = state_203444__$1;
(statearr_203463_203511[(2)] = inst_203434);

(statearr_203463_203511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (17))){
var inst_203399 = (state_203444[(10)]);
var inst_203408 = cljs.core.first.call(null,inst_203399);
var inst_203409 = cljs.core.async.muxch_STAR_.call(null,inst_203408);
var inst_203410 = cljs.core.async.close_BANG_.call(null,inst_203409);
var inst_203411 = cljs.core.next.call(null,inst_203399);
var inst_203385 = inst_203411;
var inst_203386 = null;
var inst_203387 = (0);
var inst_203388 = (0);
var state_203444__$1 = (function (){var statearr_203464 = state_203444;
(statearr_203464[(12)] = inst_203386);

(statearr_203464[(13)] = inst_203410);

(statearr_203464[(14)] = inst_203385);

(statearr_203464[(15)] = inst_203388);

(statearr_203464[(16)] = inst_203387);

return statearr_203464;
})();
var statearr_203465_203512 = state_203444__$1;
(statearr_203465_203512[(2)] = null);

(statearr_203465_203512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (3))){
var inst_203442 = (state_203444[(2)]);
var state_203444__$1 = state_203444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203444__$1,inst_203442);
} else {
if((state_val_203445 === (12))){
var inst_203419 = (state_203444[(2)]);
var state_203444__$1 = state_203444;
var statearr_203466_203513 = state_203444__$1;
(statearr_203466_203513[(2)] = inst_203419);

(statearr_203466_203513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (2))){
var state_203444__$1 = state_203444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203444__$1,(4),ch);
} else {
if((state_val_203445 === (23))){
var state_203444__$1 = state_203444;
var statearr_203467_203514 = state_203444__$1;
(statearr_203467_203514[(2)] = null);

(statearr_203467_203514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (19))){
var inst_203375 = (state_203444[(8)]);
var inst_203425 = (state_203444[(11)]);
var inst_203427 = cljs.core.async.muxch_STAR_.call(null,inst_203425);
var state_203444__$1 = state_203444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203444__$1,(22),inst_203427,inst_203375);
} else {
if((state_val_203445 === (11))){
var inst_203385 = (state_203444[(14)]);
var inst_203399 = (state_203444[(10)]);
var inst_203399__$1 = cljs.core.seq.call(null,inst_203385);
var state_203444__$1 = (function (){var statearr_203468 = state_203444;
(statearr_203468[(10)] = inst_203399__$1);

return statearr_203468;
})();
if(inst_203399__$1){
var statearr_203469_203515 = state_203444__$1;
(statearr_203469_203515[(1)] = (13));

} else {
var statearr_203470_203516 = state_203444__$1;
(statearr_203470_203516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (9))){
var inst_203421 = (state_203444[(2)]);
var state_203444__$1 = state_203444;
var statearr_203471_203517 = state_203444__$1;
(statearr_203471_203517[(2)] = inst_203421);

(statearr_203471_203517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (5))){
var inst_203382 = cljs.core.deref.call(null,mults);
var inst_203383 = cljs.core.vals.call(null,inst_203382);
var inst_203384 = cljs.core.seq.call(null,inst_203383);
var inst_203385 = inst_203384;
var inst_203386 = null;
var inst_203387 = (0);
var inst_203388 = (0);
var state_203444__$1 = (function (){var statearr_203472 = state_203444;
(statearr_203472[(12)] = inst_203386);

(statearr_203472[(14)] = inst_203385);

(statearr_203472[(15)] = inst_203388);

(statearr_203472[(16)] = inst_203387);

return statearr_203472;
})();
var statearr_203473_203518 = state_203444__$1;
(statearr_203473_203518[(2)] = null);

(statearr_203473_203518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (14))){
var state_203444__$1 = state_203444;
var statearr_203477_203519 = state_203444__$1;
(statearr_203477_203519[(2)] = null);

(statearr_203477_203519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (16))){
var inst_203399 = (state_203444[(10)]);
var inst_203403 = cljs.core.chunk_first.call(null,inst_203399);
var inst_203404 = cljs.core.chunk_rest.call(null,inst_203399);
var inst_203405 = cljs.core.count.call(null,inst_203403);
var inst_203385 = inst_203404;
var inst_203386 = inst_203403;
var inst_203387 = inst_203405;
var inst_203388 = (0);
var state_203444__$1 = (function (){var statearr_203478 = state_203444;
(statearr_203478[(12)] = inst_203386);

(statearr_203478[(14)] = inst_203385);

(statearr_203478[(15)] = inst_203388);

(statearr_203478[(16)] = inst_203387);

return statearr_203478;
})();
var statearr_203479_203520 = state_203444__$1;
(statearr_203479_203520[(2)] = null);

(statearr_203479_203520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (10))){
var inst_203386 = (state_203444[(12)]);
var inst_203385 = (state_203444[(14)]);
var inst_203388 = (state_203444[(15)]);
var inst_203387 = (state_203444[(16)]);
var inst_203393 = cljs.core._nth.call(null,inst_203386,inst_203388);
var inst_203394 = cljs.core.async.muxch_STAR_.call(null,inst_203393);
var inst_203395 = cljs.core.async.close_BANG_.call(null,inst_203394);
var inst_203396 = (inst_203388 + (1));
var tmp203474 = inst_203386;
var tmp203475 = inst_203385;
var tmp203476 = inst_203387;
var inst_203385__$1 = tmp203475;
var inst_203386__$1 = tmp203474;
var inst_203387__$1 = tmp203476;
var inst_203388__$1 = inst_203396;
var state_203444__$1 = (function (){var statearr_203480 = state_203444;
(statearr_203480[(12)] = inst_203386__$1);

(statearr_203480[(14)] = inst_203385__$1);

(statearr_203480[(15)] = inst_203388__$1);

(statearr_203480[(17)] = inst_203395);

(statearr_203480[(16)] = inst_203387__$1);

return statearr_203480;
})();
var statearr_203481_203521 = state_203444__$1;
(statearr_203481_203521[(2)] = null);

(statearr_203481_203521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (18))){
var inst_203414 = (state_203444[(2)]);
var state_203444__$1 = state_203444;
var statearr_203482_203522 = state_203444__$1;
(statearr_203482_203522[(2)] = inst_203414);

(statearr_203482_203522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203445 === (8))){
var inst_203388 = (state_203444[(15)]);
var inst_203387 = (state_203444[(16)]);
var inst_203390 = (inst_203388 < inst_203387);
var inst_203391 = inst_203390;
var state_203444__$1 = state_203444;
if(cljs.core.truth_(inst_203391)){
var statearr_203483_203523 = state_203444__$1;
(statearr_203483_203523[(1)] = (10));

} else {
var statearr_203484_203524 = state_203444__$1;
(statearr_203484_203524[(1)] = (11));

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
});})(c__44084__auto___203496,mults,ensure_mult,p))
;
return ((function (switch__44061__auto__,c__44084__auto___203496,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_203488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_203488[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_203488[(1)] = (1));

return statearr_203488;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_203444){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_203444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e203489){if((e203489 instanceof Object)){
var ex__44065__auto__ = e203489;
var statearr_203490_203525 = state_203444;
(statearr_203490_203525[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203526 = state_203444;
state_203444 = G__203526;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_203444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_203444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___203496,mults,ensure_mult,p))
})();
var state__44086__auto__ = (function (){var statearr_203491 = f__44085__auto__.call(null);
(statearr_203491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___203496);

return statearr_203491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___203496,mults,ensure_mult,p))
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
var args203527 = [];
var len__40427__auto___203530 = arguments.length;
var i__40428__auto___203531 = (0);
while(true){
if((i__40428__auto___203531 < len__40427__auto___203530)){
args203527.push((arguments[i__40428__auto___203531]));

var G__203532 = (i__40428__auto___203531 + (1));
i__40428__auto___203531 = G__203532;
continue;
} else {
}
break;
}

var G__203529 = args203527.length;
switch (G__203529) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203527.length)].join('')));

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
var args203534 = [];
var len__40427__auto___203537 = arguments.length;
var i__40428__auto___203538 = (0);
while(true){
if((i__40428__auto___203538 < len__40427__auto___203537)){
args203534.push((arguments[i__40428__auto___203538]));

var G__203539 = (i__40428__auto___203538 + (1));
i__40428__auto___203538 = G__203539;
continue;
} else {
}
break;
}

var G__203536 = args203534.length;
switch (G__203536) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203534.length)].join('')));

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
var args203541 = [];
var len__40427__auto___203612 = arguments.length;
var i__40428__auto___203613 = (0);
while(true){
if((i__40428__auto___203613 < len__40427__auto___203612)){
args203541.push((arguments[i__40428__auto___203613]));

var G__203614 = (i__40428__auto___203613 + (1));
i__40428__auto___203613 = G__203614;
continue;
} else {
}
break;
}

var G__203543 = args203541.length;
switch (G__203543) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203541.length)].join('')));

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
var c__44084__auto___203616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___203616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___203616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_203582){
var state_val_203583 = (state_203582[(1)]);
if((state_val_203583 === (7))){
var state_203582__$1 = state_203582;
var statearr_203584_203617 = state_203582__$1;
(statearr_203584_203617[(2)] = null);

(statearr_203584_203617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (1))){
var state_203582__$1 = state_203582;
var statearr_203585_203618 = state_203582__$1;
(statearr_203585_203618[(2)] = null);

(statearr_203585_203618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (4))){
var inst_203546 = (state_203582[(7)]);
var inst_203548 = (inst_203546 < cnt);
var state_203582__$1 = state_203582;
if(cljs.core.truth_(inst_203548)){
var statearr_203586_203619 = state_203582__$1;
(statearr_203586_203619[(1)] = (6));

} else {
var statearr_203587_203620 = state_203582__$1;
(statearr_203587_203620[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (15))){
var inst_203578 = (state_203582[(2)]);
var state_203582__$1 = state_203582;
var statearr_203588_203621 = state_203582__$1;
(statearr_203588_203621[(2)] = inst_203578);

(statearr_203588_203621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (13))){
var inst_203571 = cljs.core.async.close_BANG_.call(null,out);
var state_203582__$1 = state_203582;
var statearr_203589_203622 = state_203582__$1;
(statearr_203589_203622[(2)] = inst_203571);

(statearr_203589_203622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (6))){
var state_203582__$1 = state_203582;
var statearr_203590_203623 = state_203582__$1;
(statearr_203590_203623[(2)] = null);

(statearr_203590_203623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (3))){
var inst_203580 = (state_203582[(2)]);
var state_203582__$1 = state_203582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203582__$1,inst_203580);
} else {
if((state_val_203583 === (12))){
var inst_203568 = (state_203582[(8)]);
var inst_203568__$1 = (state_203582[(2)]);
var inst_203569 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_203568__$1);
var state_203582__$1 = (function (){var statearr_203591 = state_203582;
(statearr_203591[(8)] = inst_203568__$1);

return statearr_203591;
})();
if(cljs.core.truth_(inst_203569)){
var statearr_203592_203624 = state_203582__$1;
(statearr_203592_203624[(1)] = (13));

} else {
var statearr_203593_203625 = state_203582__$1;
(statearr_203593_203625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (2))){
var inst_203545 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_203546 = (0);
var state_203582__$1 = (function (){var statearr_203594 = state_203582;
(statearr_203594[(7)] = inst_203546);

(statearr_203594[(9)] = inst_203545);

return statearr_203594;
})();
var statearr_203595_203626 = state_203582__$1;
(statearr_203595_203626[(2)] = null);

(statearr_203595_203626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (11))){
var inst_203546 = (state_203582[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_203582,(10),Object,null,(9));
var inst_203555 = chs__$1.call(null,inst_203546);
var inst_203556 = done.call(null,inst_203546);
var inst_203557 = cljs.core.async.take_BANG_.call(null,inst_203555,inst_203556);
var state_203582__$1 = state_203582;
var statearr_203596_203627 = state_203582__$1;
(statearr_203596_203627[(2)] = inst_203557);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203582__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (9))){
var inst_203546 = (state_203582[(7)]);
var inst_203559 = (state_203582[(2)]);
var inst_203560 = (inst_203546 + (1));
var inst_203546__$1 = inst_203560;
var state_203582__$1 = (function (){var statearr_203597 = state_203582;
(statearr_203597[(10)] = inst_203559);

(statearr_203597[(7)] = inst_203546__$1);

return statearr_203597;
})();
var statearr_203598_203628 = state_203582__$1;
(statearr_203598_203628[(2)] = null);

(statearr_203598_203628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (5))){
var inst_203566 = (state_203582[(2)]);
var state_203582__$1 = (function (){var statearr_203599 = state_203582;
(statearr_203599[(11)] = inst_203566);

return statearr_203599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203582__$1,(12),dchan);
} else {
if((state_val_203583 === (14))){
var inst_203568 = (state_203582[(8)]);
var inst_203573 = cljs.core.apply.call(null,f,inst_203568);
var state_203582__$1 = state_203582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203582__$1,(16),out,inst_203573);
} else {
if((state_val_203583 === (16))){
var inst_203575 = (state_203582[(2)]);
var state_203582__$1 = (function (){var statearr_203600 = state_203582;
(statearr_203600[(12)] = inst_203575);

return statearr_203600;
})();
var statearr_203601_203629 = state_203582__$1;
(statearr_203601_203629[(2)] = null);

(statearr_203601_203629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (10))){
var inst_203550 = (state_203582[(2)]);
var inst_203551 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_203582__$1 = (function (){var statearr_203602 = state_203582;
(statearr_203602[(13)] = inst_203550);

return statearr_203602;
})();
var statearr_203603_203630 = state_203582__$1;
(statearr_203603_203630[(2)] = inst_203551);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203582__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203583 === (8))){
var inst_203564 = (state_203582[(2)]);
var state_203582__$1 = state_203582;
var statearr_203604_203631 = state_203582__$1;
(statearr_203604_203631[(2)] = inst_203564);

(statearr_203604_203631[(1)] = (5));


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
});})(c__44084__auto___203616,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44061__auto__,c__44084__auto___203616,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_203608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_203608[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_203608[(1)] = (1));

return statearr_203608;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_203582){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_203582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e203609){if((e203609 instanceof Object)){
var ex__44065__auto__ = e203609;
var statearr_203610_203632 = state_203582;
(statearr_203610_203632[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203633 = state_203582;
state_203582 = G__203633;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_203582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_203582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___203616,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44086__auto__ = (function (){var statearr_203611 = f__44085__auto__.call(null);
(statearr_203611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___203616);

return statearr_203611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___203616,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args203635 = [];
var len__40427__auto___203693 = arguments.length;
var i__40428__auto___203694 = (0);
while(true){
if((i__40428__auto___203694 < len__40427__auto___203693)){
args203635.push((arguments[i__40428__auto___203694]));

var G__203695 = (i__40428__auto___203694 + (1));
i__40428__auto___203694 = G__203695;
continue;
} else {
}
break;
}

var G__203637 = args203635.length;
switch (G__203637) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203635.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___203697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___203697,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___203697,out){
return (function (state_203669){
var state_val_203670 = (state_203669[(1)]);
if((state_val_203670 === (7))){
var inst_203648 = (state_203669[(7)]);
var inst_203649 = (state_203669[(8)]);
var inst_203648__$1 = (state_203669[(2)]);
var inst_203649__$1 = cljs.core.nth.call(null,inst_203648__$1,(0),null);
var inst_203650 = cljs.core.nth.call(null,inst_203648__$1,(1),null);
var inst_203651 = (inst_203649__$1 == null);
var state_203669__$1 = (function (){var statearr_203671 = state_203669;
(statearr_203671[(7)] = inst_203648__$1);

(statearr_203671[(9)] = inst_203650);

(statearr_203671[(8)] = inst_203649__$1);

return statearr_203671;
})();
if(cljs.core.truth_(inst_203651)){
var statearr_203672_203698 = state_203669__$1;
(statearr_203672_203698[(1)] = (8));

} else {
var statearr_203673_203699 = state_203669__$1;
(statearr_203673_203699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203670 === (1))){
var inst_203638 = cljs.core.vec.call(null,chs);
var inst_203639 = inst_203638;
var state_203669__$1 = (function (){var statearr_203674 = state_203669;
(statearr_203674[(10)] = inst_203639);

return statearr_203674;
})();
var statearr_203675_203700 = state_203669__$1;
(statearr_203675_203700[(2)] = null);

(statearr_203675_203700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203670 === (4))){
var inst_203639 = (state_203669[(10)]);
var state_203669__$1 = state_203669;
return cljs.core.async.ioc_alts_BANG_.call(null,state_203669__$1,(7),inst_203639);
} else {
if((state_val_203670 === (6))){
var inst_203665 = (state_203669[(2)]);
var state_203669__$1 = state_203669;
var statearr_203676_203701 = state_203669__$1;
(statearr_203676_203701[(2)] = inst_203665);

(statearr_203676_203701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203670 === (3))){
var inst_203667 = (state_203669[(2)]);
var state_203669__$1 = state_203669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203669__$1,inst_203667);
} else {
if((state_val_203670 === (2))){
var inst_203639 = (state_203669[(10)]);
var inst_203641 = cljs.core.count.call(null,inst_203639);
var inst_203642 = (inst_203641 > (0));
var state_203669__$1 = state_203669;
if(cljs.core.truth_(inst_203642)){
var statearr_203678_203702 = state_203669__$1;
(statearr_203678_203702[(1)] = (4));

} else {
var statearr_203679_203703 = state_203669__$1;
(statearr_203679_203703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203670 === (11))){
var inst_203639 = (state_203669[(10)]);
var inst_203658 = (state_203669[(2)]);
var tmp203677 = inst_203639;
var inst_203639__$1 = tmp203677;
var state_203669__$1 = (function (){var statearr_203680 = state_203669;
(statearr_203680[(11)] = inst_203658);

(statearr_203680[(10)] = inst_203639__$1);

return statearr_203680;
})();
var statearr_203681_203704 = state_203669__$1;
(statearr_203681_203704[(2)] = null);

(statearr_203681_203704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203670 === (9))){
var inst_203649 = (state_203669[(8)]);
var state_203669__$1 = state_203669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203669__$1,(11),out,inst_203649);
} else {
if((state_val_203670 === (5))){
var inst_203663 = cljs.core.async.close_BANG_.call(null,out);
var state_203669__$1 = state_203669;
var statearr_203682_203705 = state_203669__$1;
(statearr_203682_203705[(2)] = inst_203663);

(statearr_203682_203705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203670 === (10))){
var inst_203661 = (state_203669[(2)]);
var state_203669__$1 = state_203669;
var statearr_203683_203706 = state_203669__$1;
(statearr_203683_203706[(2)] = inst_203661);

(statearr_203683_203706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203670 === (8))){
var inst_203648 = (state_203669[(7)]);
var inst_203650 = (state_203669[(9)]);
var inst_203649 = (state_203669[(8)]);
var inst_203639 = (state_203669[(10)]);
var inst_203653 = (function (){var cs = inst_203639;
var vec__203644 = inst_203648;
var v = inst_203649;
var c = inst_203650;
return ((function (cs,vec__203644,v,c,inst_203648,inst_203650,inst_203649,inst_203639,state_val_203670,c__44084__auto___203697,out){
return (function (p1__203634_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__203634_SHARP_);
});
;})(cs,vec__203644,v,c,inst_203648,inst_203650,inst_203649,inst_203639,state_val_203670,c__44084__auto___203697,out))
})();
var inst_203654 = cljs.core.filterv.call(null,inst_203653,inst_203639);
var inst_203639__$1 = inst_203654;
var state_203669__$1 = (function (){var statearr_203684 = state_203669;
(statearr_203684[(10)] = inst_203639__$1);

return statearr_203684;
})();
var statearr_203685_203707 = state_203669__$1;
(statearr_203685_203707[(2)] = null);

(statearr_203685_203707[(1)] = (2));


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
});})(c__44084__auto___203697,out))
;
return ((function (switch__44061__auto__,c__44084__auto___203697,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_203689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_203689[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_203689[(1)] = (1));

return statearr_203689;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_203669){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_203669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e203690){if((e203690 instanceof Object)){
var ex__44065__auto__ = e203690;
var statearr_203691_203708 = state_203669;
(statearr_203691_203708[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203709 = state_203669;
state_203669 = G__203709;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_203669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_203669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___203697,out))
})();
var state__44086__auto__ = (function (){var statearr_203692 = f__44085__auto__.call(null);
(statearr_203692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___203697);

return statearr_203692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___203697,out))
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
var args203710 = [];
var len__40427__auto___203759 = arguments.length;
var i__40428__auto___203760 = (0);
while(true){
if((i__40428__auto___203760 < len__40427__auto___203759)){
args203710.push((arguments[i__40428__auto___203760]));

var G__203761 = (i__40428__auto___203760 + (1));
i__40428__auto___203760 = G__203761;
continue;
} else {
}
break;
}

var G__203712 = args203710.length;
switch (G__203712) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203710.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___203763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___203763,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___203763,out){
return (function (state_203736){
var state_val_203737 = (state_203736[(1)]);
if((state_val_203737 === (7))){
var inst_203718 = (state_203736[(7)]);
var inst_203718__$1 = (state_203736[(2)]);
var inst_203719 = (inst_203718__$1 == null);
var inst_203720 = cljs.core.not.call(null,inst_203719);
var state_203736__$1 = (function (){var statearr_203738 = state_203736;
(statearr_203738[(7)] = inst_203718__$1);

return statearr_203738;
})();
if(inst_203720){
var statearr_203739_203764 = state_203736__$1;
(statearr_203739_203764[(1)] = (8));

} else {
var statearr_203740_203765 = state_203736__$1;
(statearr_203740_203765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203737 === (1))){
var inst_203713 = (0);
var state_203736__$1 = (function (){var statearr_203741 = state_203736;
(statearr_203741[(8)] = inst_203713);

return statearr_203741;
})();
var statearr_203742_203766 = state_203736__$1;
(statearr_203742_203766[(2)] = null);

(statearr_203742_203766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203737 === (4))){
var state_203736__$1 = state_203736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203736__$1,(7),ch);
} else {
if((state_val_203737 === (6))){
var inst_203731 = (state_203736[(2)]);
var state_203736__$1 = state_203736;
var statearr_203743_203767 = state_203736__$1;
(statearr_203743_203767[(2)] = inst_203731);

(statearr_203743_203767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203737 === (3))){
var inst_203733 = (state_203736[(2)]);
var inst_203734 = cljs.core.async.close_BANG_.call(null,out);
var state_203736__$1 = (function (){var statearr_203744 = state_203736;
(statearr_203744[(9)] = inst_203733);

return statearr_203744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203736__$1,inst_203734);
} else {
if((state_val_203737 === (2))){
var inst_203713 = (state_203736[(8)]);
var inst_203715 = (inst_203713 < n);
var state_203736__$1 = state_203736;
if(cljs.core.truth_(inst_203715)){
var statearr_203745_203768 = state_203736__$1;
(statearr_203745_203768[(1)] = (4));

} else {
var statearr_203746_203769 = state_203736__$1;
(statearr_203746_203769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203737 === (11))){
var inst_203713 = (state_203736[(8)]);
var inst_203723 = (state_203736[(2)]);
var inst_203724 = (inst_203713 + (1));
var inst_203713__$1 = inst_203724;
var state_203736__$1 = (function (){var statearr_203747 = state_203736;
(statearr_203747[(8)] = inst_203713__$1);

(statearr_203747[(10)] = inst_203723);

return statearr_203747;
})();
var statearr_203748_203770 = state_203736__$1;
(statearr_203748_203770[(2)] = null);

(statearr_203748_203770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203737 === (9))){
var state_203736__$1 = state_203736;
var statearr_203749_203771 = state_203736__$1;
(statearr_203749_203771[(2)] = null);

(statearr_203749_203771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203737 === (5))){
var state_203736__$1 = state_203736;
var statearr_203750_203772 = state_203736__$1;
(statearr_203750_203772[(2)] = null);

(statearr_203750_203772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203737 === (10))){
var inst_203728 = (state_203736[(2)]);
var state_203736__$1 = state_203736;
var statearr_203751_203773 = state_203736__$1;
(statearr_203751_203773[(2)] = inst_203728);

(statearr_203751_203773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203737 === (8))){
var inst_203718 = (state_203736[(7)]);
var state_203736__$1 = state_203736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203736__$1,(11),out,inst_203718);
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
});})(c__44084__auto___203763,out))
;
return ((function (switch__44061__auto__,c__44084__auto___203763,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_203755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_203755[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_203755[(1)] = (1));

return statearr_203755;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_203736){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_203736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e203756){if((e203756 instanceof Object)){
var ex__44065__auto__ = e203756;
var statearr_203757_203774 = state_203736;
(statearr_203757_203774[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203775 = state_203736;
state_203736 = G__203775;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_203736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_203736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___203763,out))
})();
var state__44086__auto__ = (function (){var statearr_203758 = f__44085__auto__.call(null);
(statearr_203758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___203763);

return statearr_203758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___203763,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async203783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async203783 = (function (f,ch,meta203784){
this.f = f;
this.ch = ch;
this.meta203784 = meta203784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_203785,meta203784__$1){
var self__ = this;
var _203785__$1 = this;
return (new cljs.core.async.t_cljs$core$async203783(self__.f,self__.ch,meta203784__$1));
});


cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_203785){
var self__ = this;
var _203785__$1 = this;
return self__.meta203784;
});


cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async203786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async203786 = (function (f,ch,meta203784,_,fn1,meta203787){
this.f = f;
this.ch = ch;
this.meta203784 = meta203784;
this._ = _;
this.fn1 = fn1;
this.meta203787 = meta203787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async203786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_203788,meta203787__$1){
var self__ = this;
var _203788__$1 = this;
return (new cljs.core.async.t_cljs$core$async203786(self__.f,self__.ch,self__.meta203784,self__._,self__.fn1,meta203787__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async203786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_203788){
var self__ = this;
var _203788__$1 = this;
return self__.meta203787;
});})(___$1))
;


cljs.core.async.t_cljs$core$async203786.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async203786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async203786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__203776_SHARP_){
return f1.call(null,(((p1__203776_SHARP_ == null))?null:self__.f.call(null,p1__203776_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async203786.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta203784","meta203784",-20970562,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async203783","cljs.core.async/t_cljs$core$async203783",996105874,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta203787","meta203787",-1372467137,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async203786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async203786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async203786";

cljs.core.async.t_cljs$core$async203786.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async203786");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async203786 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async203786(f__$1,ch__$1,meta203784__$1,___$2,fn1__$1,meta203787){
return (new cljs.core.async.t_cljs$core$async203786(f__$1,ch__$1,meta203784__$1,___$2,fn1__$1,meta203787));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async203786(self__.f,self__.ch,self__.meta203784,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__39194__auto__ = ret;
if(cljs.core.truth_(and__39194__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__39194__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async203783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta203784","meta203784",-20970562,null)], null);
});

cljs.core.async.t_cljs$core$async203783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async203783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async203783";

cljs.core.async.t_cljs$core$async203783.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async203783");
});

cljs.core.async.__GT_t_cljs$core$async203783 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async203783(f__$1,ch__$1,meta203784){
return (new cljs.core.async.t_cljs$core$async203783(f__$1,ch__$1,meta203784));
});

}

return (new cljs.core.async.t_cljs$core$async203783(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async203792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async203792 = (function (f,ch,meta203793){
this.f = f;
this.ch = ch;
this.meta203793 = meta203793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async203792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_203794,meta203793__$1){
var self__ = this;
var _203794__$1 = this;
return (new cljs.core.async.t_cljs$core$async203792(self__.f,self__.ch,meta203793__$1));
});


cljs.core.async.t_cljs$core$async203792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_203794){
var self__ = this;
var _203794__$1 = this;
return self__.meta203793;
});


cljs.core.async.t_cljs$core$async203792.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async203792.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async203792.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async203792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta203793","meta203793",-1336377610,null)], null);
});

cljs.core.async.t_cljs$core$async203792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async203792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async203792";

cljs.core.async.t_cljs$core$async203792.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async203792");
});

cljs.core.async.__GT_t_cljs$core$async203792 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async203792(f__$1,ch__$1,meta203793){
return (new cljs.core.async.t_cljs$core$async203792(f__$1,ch__$1,meta203793));
});

}

return (new cljs.core.async.t_cljs$core$async203792(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async203798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async203798 = (function (p,ch,meta203799){
this.p = p;
this.ch = ch;
this.meta203799 = meta203799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_203800,meta203799__$1){
var self__ = this;
var _203800__$1 = this;
return (new cljs.core.async.t_cljs$core$async203798(self__.p,self__.ch,meta203799__$1));
});


cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_203800){
var self__ = this;
var _203800__$1 = this;
return self__.meta203799;
});


cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async203798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async203798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta203799","meta203799",471083953,null)], null);
});

cljs.core.async.t_cljs$core$async203798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async203798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async203798";

cljs.core.async.t_cljs$core$async203798.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async203798");
});

cljs.core.async.__GT_t_cljs$core$async203798 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async203798(p__$1,ch__$1,meta203799){
return (new cljs.core.async.t_cljs$core$async203798(p__$1,ch__$1,meta203799));
});

}

return (new cljs.core.async.t_cljs$core$async203798(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args203801 = [];
var len__40427__auto___203845 = arguments.length;
var i__40428__auto___203846 = (0);
while(true){
if((i__40428__auto___203846 < len__40427__auto___203845)){
args203801.push((arguments[i__40428__auto___203846]));

var G__203847 = (i__40428__auto___203846 + (1));
i__40428__auto___203846 = G__203847;
continue;
} else {
}
break;
}

var G__203803 = args203801.length;
switch (G__203803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203801.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___203849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___203849,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___203849,out){
return (function (state_203824){
var state_val_203825 = (state_203824[(1)]);
if((state_val_203825 === (7))){
var inst_203820 = (state_203824[(2)]);
var state_203824__$1 = state_203824;
var statearr_203826_203850 = state_203824__$1;
(statearr_203826_203850[(2)] = inst_203820);

(statearr_203826_203850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203825 === (1))){
var state_203824__$1 = state_203824;
var statearr_203827_203851 = state_203824__$1;
(statearr_203827_203851[(2)] = null);

(statearr_203827_203851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203825 === (4))){
var inst_203806 = (state_203824[(7)]);
var inst_203806__$1 = (state_203824[(2)]);
var inst_203807 = (inst_203806__$1 == null);
var state_203824__$1 = (function (){var statearr_203828 = state_203824;
(statearr_203828[(7)] = inst_203806__$1);

return statearr_203828;
})();
if(cljs.core.truth_(inst_203807)){
var statearr_203829_203852 = state_203824__$1;
(statearr_203829_203852[(1)] = (5));

} else {
var statearr_203830_203853 = state_203824__$1;
(statearr_203830_203853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203825 === (6))){
var inst_203806 = (state_203824[(7)]);
var inst_203811 = p.call(null,inst_203806);
var state_203824__$1 = state_203824;
if(cljs.core.truth_(inst_203811)){
var statearr_203831_203854 = state_203824__$1;
(statearr_203831_203854[(1)] = (8));

} else {
var statearr_203832_203855 = state_203824__$1;
(statearr_203832_203855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203825 === (3))){
var inst_203822 = (state_203824[(2)]);
var state_203824__$1 = state_203824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203824__$1,inst_203822);
} else {
if((state_val_203825 === (2))){
var state_203824__$1 = state_203824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203824__$1,(4),ch);
} else {
if((state_val_203825 === (11))){
var inst_203814 = (state_203824[(2)]);
var state_203824__$1 = state_203824;
var statearr_203833_203856 = state_203824__$1;
(statearr_203833_203856[(2)] = inst_203814);

(statearr_203833_203856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203825 === (9))){
var state_203824__$1 = state_203824;
var statearr_203834_203857 = state_203824__$1;
(statearr_203834_203857[(2)] = null);

(statearr_203834_203857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203825 === (5))){
var inst_203809 = cljs.core.async.close_BANG_.call(null,out);
var state_203824__$1 = state_203824;
var statearr_203835_203858 = state_203824__$1;
(statearr_203835_203858[(2)] = inst_203809);

(statearr_203835_203858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203825 === (10))){
var inst_203817 = (state_203824[(2)]);
var state_203824__$1 = (function (){var statearr_203836 = state_203824;
(statearr_203836[(8)] = inst_203817);

return statearr_203836;
})();
var statearr_203837_203859 = state_203824__$1;
(statearr_203837_203859[(2)] = null);

(statearr_203837_203859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203825 === (8))){
var inst_203806 = (state_203824[(7)]);
var state_203824__$1 = state_203824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203824__$1,(11),out,inst_203806);
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
});})(c__44084__auto___203849,out))
;
return ((function (switch__44061__auto__,c__44084__auto___203849,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_203841 = [null,null,null,null,null,null,null,null,null];
(statearr_203841[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_203841[(1)] = (1));

return statearr_203841;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_203824){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_203824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e203842){if((e203842 instanceof Object)){
var ex__44065__auto__ = e203842;
var statearr_203843_203860 = state_203824;
(statearr_203843_203860[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203861 = state_203824;
state_203824 = G__203861;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_203824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_203824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___203849,out))
})();
var state__44086__auto__ = (function (){var statearr_203844 = f__44085__auto__.call(null);
(statearr_203844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___203849);

return statearr_203844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___203849,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args203862 = [];
var len__40427__auto___203865 = arguments.length;
var i__40428__auto___203866 = (0);
while(true){
if((i__40428__auto___203866 < len__40427__auto___203865)){
args203862.push((arguments[i__40428__auto___203866]));

var G__203867 = (i__40428__auto___203866 + (1));
i__40428__auto___203866 = G__203867;
continue;
} else {
}
break;
}

var G__203864 = args203862.length;
switch (G__203864) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args203862.length)].join('')));

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
var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__){
return (function (state_204034){
var state_val_204035 = (state_204034[(1)]);
if((state_val_204035 === (7))){
var inst_204030 = (state_204034[(2)]);
var state_204034__$1 = state_204034;
var statearr_204036_204077 = state_204034__$1;
(statearr_204036_204077[(2)] = inst_204030);

(statearr_204036_204077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (20))){
var inst_204000 = (state_204034[(7)]);
var inst_204011 = (state_204034[(2)]);
var inst_204012 = cljs.core.next.call(null,inst_204000);
var inst_203986 = inst_204012;
var inst_203987 = null;
var inst_203988 = (0);
var inst_203989 = (0);
var state_204034__$1 = (function (){var statearr_204037 = state_204034;
(statearr_204037[(8)] = inst_203988);

(statearr_204037[(9)] = inst_203987);

(statearr_204037[(10)] = inst_203989);

(statearr_204037[(11)] = inst_204011);

(statearr_204037[(12)] = inst_203986);

return statearr_204037;
})();
var statearr_204038_204078 = state_204034__$1;
(statearr_204038_204078[(2)] = null);

(statearr_204038_204078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (1))){
var state_204034__$1 = state_204034;
var statearr_204039_204079 = state_204034__$1;
(statearr_204039_204079[(2)] = null);

(statearr_204039_204079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (4))){
var inst_203975 = (state_204034[(13)]);
var inst_203975__$1 = (state_204034[(2)]);
var inst_203976 = (inst_203975__$1 == null);
var state_204034__$1 = (function (){var statearr_204040 = state_204034;
(statearr_204040[(13)] = inst_203975__$1);

return statearr_204040;
})();
if(cljs.core.truth_(inst_203976)){
var statearr_204041_204080 = state_204034__$1;
(statearr_204041_204080[(1)] = (5));

} else {
var statearr_204042_204081 = state_204034__$1;
(statearr_204042_204081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (15))){
var state_204034__$1 = state_204034;
var statearr_204046_204082 = state_204034__$1;
(statearr_204046_204082[(2)] = null);

(statearr_204046_204082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (21))){
var state_204034__$1 = state_204034;
var statearr_204047_204083 = state_204034__$1;
(statearr_204047_204083[(2)] = null);

(statearr_204047_204083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (13))){
var inst_203988 = (state_204034[(8)]);
var inst_203987 = (state_204034[(9)]);
var inst_203989 = (state_204034[(10)]);
var inst_203986 = (state_204034[(12)]);
var inst_203996 = (state_204034[(2)]);
var inst_203997 = (inst_203989 + (1));
var tmp204043 = inst_203988;
var tmp204044 = inst_203987;
var tmp204045 = inst_203986;
var inst_203986__$1 = tmp204045;
var inst_203987__$1 = tmp204044;
var inst_203988__$1 = tmp204043;
var inst_203989__$1 = inst_203997;
var state_204034__$1 = (function (){var statearr_204048 = state_204034;
(statearr_204048[(14)] = inst_203996);

(statearr_204048[(8)] = inst_203988__$1);

(statearr_204048[(9)] = inst_203987__$1);

(statearr_204048[(10)] = inst_203989__$1);

(statearr_204048[(12)] = inst_203986__$1);

return statearr_204048;
})();
var statearr_204049_204084 = state_204034__$1;
(statearr_204049_204084[(2)] = null);

(statearr_204049_204084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (22))){
var state_204034__$1 = state_204034;
var statearr_204050_204085 = state_204034__$1;
(statearr_204050_204085[(2)] = null);

(statearr_204050_204085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (6))){
var inst_203975 = (state_204034[(13)]);
var inst_203984 = f.call(null,inst_203975);
var inst_203985 = cljs.core.seq.call(null,inst_203984);
var inst_203986 = inst_203985;
var inst_203987 = null;
var inst_203988 = (0);
var inst_203989 = (0);
var state_204034__$1 = (function (){var statearr_204051 = state_204034;
(statearr_204051[(8)] = inst_203988);

(statearr_204051[(9)] = inst_203987);

(statearr_204051[(10)] = inst_203989);

(statearr_204051[(12)] = inst_203986);

return statearr_204051;
})();
var statearr_204052_204086 = state_204034__$1;
(statearr_204052_204086[(2)] = null);

(statearr_204052_204086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (17))){
var inst_204000 = (state_204034[(7)]);
var inst_204004 = cljs.core.chunk_first.call(null,inst_204000);
var inst_204005 = cljs.core.chunk_rest.call(null,inst_204000);
var inst_204006 = cljs.core.count.call(null,inst_204004);
var inst_203986 = inst_204005;
var inst_203987 = inst_204004;
var inst_203988 = inst_204006;
var inst_203989 = (0);
var state_204034__$1 = (function (){var statearr_204053 = state_204034;
(statearr_204053[(8)] = inst_203988);

(statearr_204053[(9)] = inst_203987);

(statearr_204053[(10)] = inst_203989);

(statearr_204053[(12)] = inst_203986);

return statearr_204053;
})();
var statearr_204054_204087 = state_204034__$1;
(statearr_204054_204087[(2)] = null);

(statearr_204054_204087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (3))){
var inst_204032 = (state_204034[(2)]);
var state_204034__$1 = state_204034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204034__$1,inst_204032);
} else {
if((state_val_204035 === (12))){
var inst_204020 = (state_204034[(2)]);
var state_204034__$1 = state_204034;
var statearr_204055_204088 = state_204034__$1;
(statearr_204055_204088[(2)] = inst_204020);

(statearr_204055_204088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (2))){
var state_204034__$1 = state_204034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204034__$1,(4),in$);
} else {
if((state_val_204035 === (23))){
var inst_204028 = (state_204034[(2)]);
var state_204034__$1 = state_204034;
var statearr_204056_204089 = state_204034__$1;
(statearr_204056_204089[(2)] = inst_204028);

(statearr_204056_204089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (19))){
var inst_204015 = (state_204034[(2)]);
var state_204034__$1 = state_204034;
var statearr_204057_204090 = state_204034__$1;
(statearr_204057_204090[(2)] = inst_204015);

(statearr_204057_204090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (11))){
var inst_204000 = (state_204034[(7)]);
var inst_203986 = (state_204034[(12)]);
var inst_204000__$1 = cljs.core.seq.call(null,inst_203986);
var state_204034__$1 = (function (){var statearr_204058 = state_204034;
(statearr_204058[(7)] = inst_204000__$1);

return statearr_204058;
})();
if(inst_204000__$1){
var statearr_204059_204091 = state_204034__$1;
(statearr_204059_204091[(1)] = (14));

} else {
var statearr_204060_204092 = state_204034__$1;
(statearr_204060_204092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (9))){
var inst_204022 = (state_204034[(2)]);
var inst_204023 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_204034__$1 = (function (){var statearr_204061 = state_204034;
(statearr_204061[(15)] = inst_204022);

return statearr_204061;
})();
if(cljs.core.truth_(inst_204023)){
var statearr_204062_204093 = state_204034__$1;
(statearr_204062_204093[(1)] = (21));

} else {
var statearr_204063_204094 = state_204034__$1;
(statearr_204063_204094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (5))){
var inst_203978 = cljs.core.async.close_BANG_.call(null,out);
var state_204034__$1 = state_204034;
var statearr_204064_204095 = state_204034__$1;
(statearr_204064_204095[(2)] = inst_203978);

(statearr_204064_204095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (14))){
var inst_204000 = (state_204034[(7)]);
var inst_204002 = cljs.core.chunked_seq_QMARK_.call(null,inst_204000);
var state_204034__$1 = state_204034;
if(inst_204002){
var statearr_204065_204096 = state_204034__$1;
(statearr_204065_204096[(1)] = (17));

} else {
var statearr_204066_204097 = state_204034__$1;
(statearr_204066_204097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (16))){
var inst_204018 = (state_204034[(2)]);
var state_204034__$1 = state_204034;
var statearr_204067_204098 = state_204034__$1;
(statearr_204067_204098[(2)] = inst_204018);

(statearr_204067_204098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204035 === (10))){
var inst_203987 = (state_204034[(9)]);
var inst_203989 = (state_204034[(10)]);
var inst_203994 = cljs.core._nth.call(null,inst_203987,inst_203989);
var state_204034__$1 = state_204034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204034__$1,(13),out,inst_203994);
} else {
if((state_val_204035 === (18))){
var inst_204000 = (state_204034[(7)]);
var inst_204009 = cljs.core.first.call(null,inst_204000);
var state_204034__$1 = state_204034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204034__$1,(20),out,inst_204009);
} else {
if((state_val_204035 === (8))){
var inst_203988 = (state_204034[(8)]);
var inst_203989 = (state_204034[(10)]);
var inst_203991 = (inst_203989 < inst_203988);
var inst_203992 = inst_203991;
var state_204034__$1 = state_204034;
if(cljs.core.truth_(inst_203992)){
var statearr_204068_204099 = state_204034__$1;
(statearr_204068_204099[(1)] = (10));

} else {
var statearr_204069_204100 = state_204034__$1;
(statearr_204069_204100[(1)] = (11));

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
});})(c__44084__auto__))
;
return ((function (switch__44061__auto__,c__44084__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_204073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_204073[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__);

(statearr_204073[(1)] = (1));

return statearr_204073;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1 = (function (state_204034){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_204034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e204074){if((e204074 instanceof Object)){
var ex__44065__auto__ = e204074;
var statearr_204075_204101 = state_204034;
(statearr_204075_204101[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204102 = state_204034;
state_204034 = G__204102;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__ = function(state_204034){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1.call(this,state_204034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_204076 = f__44085__auto__.call(null);
(statearr_204076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_204076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto__))
);

return c__44084__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args204103 = [];
var len__40427__auto___204106 = arguments.length;
var i__40428__auto___204107 = (0);
while(true){
if((i__40428__auto___204107 < len__40427__auto___204106)){
args204103.push((arguments[i__40428__auto___204107]));

var G__204108 = (i__40428__auto___204107 + (1));
i__40428__auto___204107 = G__204108;
continue;
} else {
}
break;
}

var G__204105 = args204103.length;
switch (G__204105) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args204103.length)].join('')));

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
var args204110 = [];
var len__40427__auto___204113 = arguments.length;
var i__40428__auto___204114 = (0);
while(true){
if((i__40428__auto___204114 < len__40427__auto___204113)){
args204110.push((arguments[i__40428__auto___204114]));

var G__204115 = (i__40428__auto___204114 + (1));
i__40428__auto___204114 = G__204115;
continue;
} else {
}
break;
}

var G__204112 = args204110.length;
switch (G__204112) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args204110.length)].join('')));

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
var args204117 = [];
var len__40427__auto___204168 = arguments.length;
var i__40428__auto___204169 = (0);
while(true){
if((i__40428__auto___204169 < len__40427__auto___204168)){
args204117.push((arguments[i__40428__auto___204169]));

var G__204170 = (i__40428__auto___204169 + (1));
i__40428__auto___204169 = G__204170;
continue;
} else {
}
break;
}

var G__204119 = args204117.length;
switch (G__204119) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args204117.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___204172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___204172,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___204172,out){
return (function (state_204143){
var state_val_204144 = (state_204143[(1)]);
if((state_val_204144 === (7))){
var inst_204138 = (state_204143[(2)]);
var state_204143__$1 = state_204143;
var statearr_204145_204173 = state_204143__$1;
(statearr_204145_204173[(2)] = inst_204138);

(statearr_204145_204173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204144 === (1))){
var inst_204120 = null;
var state_204143__$1 = (function (){var statearr_204146 = state_204143;
(statearr_204146[(7)] = inst_204120);

return statearr_204146;
})();
var statearr_204147_204174 = state_204143__$1;
(statearr_204147_204174[(2)] = null);

(statearr_204147_204174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204144 === (4))){
var inst_204123 = (state_204143[(8)]);
var inst_204123__$1 = (state_204143[(2)]);
var inst_204124 = (inst_204123__$1 == null);
var inst_204125 = cljs.core.not.call(null,inst_204124);
var state_204143__$1 = (function (){var statearr_204148 = state_204143;
(statearr_204148[(8)] = inst_204123__$1);

return statearr_204148;
})();
if(inst_204125){
var statearr_204149_204175 = state_204143__$1;
(statearr_204149_204175[(1)] = (5));

} else {
var statearr_204150_204176 = state_204143__$1;
(statearr_204150_204176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204144 === (6))){
var state_204143__$1 = state_204143;
var statearr_204151_204177 = state_204143__$1;
(statearr_204151_204177[(2)] = null);

(statearr_204151_204177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204144 === (3))){
var inst_204140 = (state_204143[(2)]);
var inst_204141 = cljs.core.async.close_BANG_.call(null,out);
var state_204143__$1 = (function (){var statearr_204152 = state_204143;
(statearr_204152[(9)] = inst_204140);

return statearr_204152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204143__$1,inst_204141);
} else {
if((state_val_204144 === (2))){
var state_204143__$1 = state_204143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204143__$1,(4),ch);
} else {
if((state_val_204144 === (11))){
var inst_204123 = (state_204143[(8)]);
var inst_204132 = (state_204143[(2)]);
var inst_204120 = inst_204123;
var state_204143__$1 = (function (){var statearr_204153 = state_204143;
(statearr_204153[(10)] = inst_204132);

(statearr_204153[(7)] = inst_204120);

return statearr_204153;
})();
var statearr_204154_204178 = state_204143__$1;
(statearr_204154_204178[(2)] = null);

(statearr_204154_204178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204144 === (9))){
var inst_204123 = (state_204143[(8)]);
var state_204143__$1 = state_204143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204143__$1,(11),out,inst_204123);
} else {
if((state_val_204144 === (5))){
var inst_204120 = (state_204143[(7)]);
var inst_204123 = (state_204143[(8)]);
var inst_204127 = cljs.core._EQ_.call(null,inst_204123,inst_204120);
var state_204143__$1 = state_204143;
if(inst_204127){
var statearr_204156_204179 = state_204143__$1;
(statearr_204156_204179[(1)] = (8));

} else {
var statearr_204157_204180 = state_204143__$1;
(statearr_204157_204180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204144 === (10))){
var inst_204135 = (state_204143[(2)]);
var state_204143__$1 = state_204143;
var statearr_204158_204181 = state_204143__$1;
(statearr_204158_204181[(2)] = inst_204135);

(statearr_204158_204181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204144 === (8))){
var inst_204120 = (state_204143[(7)]);
var tmp204155 = inst_204120;
var inst_204120__$1 = tmp204155;
var state_204143__$1 = (function (){var statearr_204159 = state_204143;
(statearr_204159[(7)] = inst_204120__$1);

return statearr_204159;
})();
var statearr_204160_204182 = state_204143__$1;
(statearr_204160_204182[(2)] = null);

(statearr_204160_204182[(1)] = (2));


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
});})(c__44084__auto___204172,out))
;
return ((function (switch__44061__auto__,c__44084__auto___204172,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_204164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_204164[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_204164[(1)] = (1));

return statearr_204164;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_204143){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_204143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e204165){if((e204165 instanceof Object)){
var ex__44065__auto__ = e204165;
var statearr_204166_204183 = state_204143;
(statearr_204166_204183[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204184 = state_204143;
state_204143 = G__204184;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_204143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_204143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___204172,out))
})();
var state__44086__auto__ = (function (){var statearr_204167 = f__44085__auto__.call(null);
(statearr_204167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___204172);

return statearr_204167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___204172,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args204185 = [];
var len__40427__auto___204255 = arguments.length;
var i__40428__auto___204256 = (0);
while(true){
if((i__40428__auto___204256 < len__40427__auto___204255)){
args204185.push((arguments[i__40428__auto___204256]));

var G__204257 = (i__40428__auto___204256 + (1));
i__40428__auto___204256 = G__204257;
continue;
} else {
}
break;
}

var G__204187 = args204185.length;
switch (G__204187) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args204185.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___204259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___204259,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___204259,out){
return (function (state_204225){
var state_val_204226 = (state_204225[(1)]);
if((state_val_204226 === (7))){
var inst_204221 = (state_204225[(2)]);
var state_204225__$1 = state_204225;
var statearr_204227_204260 = state_204225__$1;
(statearr_204227_204260[(2)] = inst_204221);

(statearr_204227_204260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (1))){
var inst_204188 = (new Array(n));
var inst_204189 = inst_204188;
var inst_204190 = (0);
var state_204225__$1 = (function (){var statearr_204228 = state_204225;
(statearr_204228[(7)] = inst_204190);

(statearr_204228[(8)] = inst_204189);

return statearr_204228;
})();
var statearr_204229_204261 = state_204225__$1;
(statearr_204229_204261[(2)] = null);

(statearr_204229_204261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (4))){
var inst_204193 = (state_204225[(9)]);
var inst_204193__$1 = (state_204225[(2)]);
var inst_204194 = (inst_204193__$1 == null);
var inst_204195 = cljs.core.not.call(null,inst_204194);
var state_204225__$1 = (function (){var statearr_204230 = state_204225;
(statearr_204230[(9)] = inst_204193__$1);

return statearr_204230;
})();
if(inst_204195){
var statearr_204231_204262 = state_204225__$1;
(statearr_204231_204262[(1)] = (5));

} else {
var statearr_204232_204263 = state_204225__$1;
(statearr_204232_204263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (15))){
var inst_204215 = (state_204225[(2)]);
var state_204225__$1 = state_204225;
var statearr_204233_204264 = state_204225__$1;
(statearr_204233_204264[(2)] = inst_204215);

(statearr_204233_204264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (13))){
var state_204225__$1 = state_204225;
var statearr_204234_204265 = state_204225__$1;
(statearr_204234_204265[(2)] = null);

(statearr_204234_204265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (6))){
var inst_204190 = (state_204225[(7)]);
var inst_204211 = (inst_204190 > (0));
var state_204225__$1 = state_204225;
if(cljs.core.truth_(inst_204211)){
var statearr_204235_204266 = state_204225__$1;
(statearr_204235_204266[(1)] = (12));

} else {
var statearr_204236_204267 = state_204225__$1;
(statearr_204236_204267[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (3))){
var inst_204223 = (state_204225[(2)]);
var state_204225__$1 = state_204225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204225__$1,inst_204223);
} else {
if((state_val_204226 === (12))){
var inst_204189 = (state_204225[(8)]);
var inst_204213 = cljs.core.vec.call(null,inst_204189);
var state_204225__$1 = state_204225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204225__$1,(15),out,inst_204213);
} else {
if((state_val_204226 === (2))){
var state_204225__$1 = state_204225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204225__$1,(4),ch);
} else {
if((state_val_204226 === (11))){
var inst_204205 = (state_204225[(2)]);
var inst_204206 = (new Array(n));
var inst_204189 = inst_204206;
var inst_204190 = (0);
var state_204225__$1 = (function (){var statearr_204237 = state_204225;
(statearr_204237[(7)] = inst_204190);

(statearr_204237[(8)] = inst_204189);

(statearr_204237[(10)] = inst_204205);

return statearr_204237;
})();
var statearr_204238_204268 = state_204225__$1;
(statearr_204238_204268[(2)] = null);

(statearr_204238_204268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (9))){
var inst_204189 = (state_204225[(8)]);
var inst_204203 = cljs.core.vec.call(null,inst_204189);
var state_204225__$1 = state_204225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204225__$1,(11),out,inst_204203);
} else {
if((state_val_204226 === (5))){
var inst_204190 = (state_204225[(7)]);
var inst_204189 = (state_204225[(8)]);
var inst_204198 = (state_204225[(11)]);
var inst_204193 = (state_204225[(9)]);
var inst_204197 = (inst_204189[inst_204190] = inst_204193);
var inst_204198__$1 = (inst_204190 + (1));
var inst_204199 = (inst_204198__$1 < n);
var state_204225__$1 = (function (){var statearr_204239 = state_204225;
(statearr_204239[(11)] = inst_204198__$1);

(statearr_204239[(12)] = inst_204197);

return statearr_204239;
})();
if(cljs.core.truth_(inst_204199)){
var statearr_204240_204269 = state_204225__$1;
(statearr_204240_204269[(1)] = (8));

} else {
var statearr_204241_204270 = state_204225__$1;
(statearr_204241_204270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (14))){
var inst_204218 = (state_204225[(2)]);
var inst_204219 = cljs.core.async.close_BANG_.call(null,out);
var state_204225__$1 = (function (){var statearr_204243 = state_204225;
(statearr_204243[(13)] = inst_204218);

return statearr_204243;
})();
var statearr_204244_204271 = state_204225__$1;
(statearr_204244_204271[(2)] = inst_204219);

(statearr_204244_204271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (10))){
var inst_204209 = (state_204225[(2)]);
var state_204225__$1 = state_204225;
var statearr_204245_204272 = state_204225__$1;
(statearr_204245_204272[(2)] = inst_204209);

(statearr_204245_204272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204226 === (8))){
var inst_204189 = (state_204225[(8)]);
var inst_204198 = (state_204225[(11)]);
var tmp204242 = inst_204189;
var inst_204189__$1 = tmp204242;
var inst_204190 = inst_204198;
var state_204225__$1 = (function (){var statearr_204246 = state_204225;
(statearr_204246[(7)] = inst_204190);

(statearr_204246[(8)] = inst_204189__$1);

return statearr_204246;
})();
var statearr_204247_204273 = state_204225__$1;
(statearr_204247_204273[(2)] = null);

(statearr_204247_204273[(1)] = (2));


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
});})(c__44084__auto___204259,out))
;
return ((function (switch__44061__auto__,c__44084__auto___204259,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_204251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_204251[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_204251[(1)] = (1));

return statearr_204251;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_204225){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_204225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e204252){if((e204252 instanceof Object)){
var ex__44065__auto__ = e204252;
var statearr_204253_204274 = state_204225;
(statearr_204253_204274[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204275 = state_204225;
state_204225 = G__204275;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_204225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_204225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___204259,out))
})();
var state__44086__auto__ = (function (){var statearr_204254 = f__44085__auto__.call(null);
(statearr_204254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___204259);

return statearr_204254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___204259,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args204276 = [];
var len__40427__auto___204350 = arguments.length;
var i__40428__auto___204351 = (0);
while(true){
if((i__40428__auto___204351 < len__40427__auto___204350)){
args204276.push((arguments[i__40428__auto___204351]));

var G__204352 = (i__40428__auto___204351 + (1));
i__40428__auto___204351 = G__204352;
continue;
} else {
}
break;
}

var G__204278 = args204276.length;
switch (G__204278) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args204276.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___204354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___204354,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___204354,out){
return (function (state_204320){
var state_val_204321 = (state_204320[(1)]);
if((state_val_204321 === (7))){
var inst_204316 = (state_204320[(2)]);
var state_204320__$1 = state_204320;
var statearr_204322_204355 = state_204320__$1;
(statearr_204322_204355[(2)] = inst_204316);

(statearr_204322_204355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (1))){
var inst_204279 = [];
var inst_204280 = inst_204279;
var inst_204281 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_204320__$1 = (function (){var statearr_204323 = state_204320;
(statearr_204323[(7)] = inst_204281);

(statearr_204323[(8)] = inst_204280);

return statearr_204323;
})();
var statearr_204324_204356 = state_204320__$1;
(statearr_204324_204356[(2)] = null);

(statearr_204324_204356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (4))){
var inst_204284 = (state_204320[(9)]);
var inst_204284__$1 = (state_204320[(2)]);
var inst_204285 = (inst_204284__$1 == null);
var inst_204286 = cljs.core.not.call(null,inst_204285);
var state_204320__$1 = (function (){var statearr_204325 = state_204320;
(statearr_204325[(9)] = inst_204284__$1);

return statearr_204325;
})();
if(inst_204286){
var statearr_204326_204357 = state_204320__$1;
(statearr_204326_204357[(1)] = (5));

} else {
var statearr_204327_204358 = state_204320__$1;
(statearr_204327_204358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (15))){
var inst_204310 = (state_204320[(2)]);
var state_204320__$1 = state_204320;
var statearr_204328_204359 = state_204320__$1;
(statearr_204328_204359[(2)] = inst_204310);

(statearr_204328_204359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (13))){
var state_204320__$1 = state_204320;
var statearr_204329_204360 = state_204320__$1;
(statearr_204329_204360[(2)] = null);

(statearr_204329_204360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (6))){
var inst_204280 = (state_204320[(8)]);
var inst_204305 = inst_204280.length;
var inst_204306 = (inst_204305 > (0));
var state_204320__$1 = state_204320;
if(cljs.core.truth_(inst_204306)){
var statearr_204330_204361 = state_204320__$1;
(statearr_204330_204361[(1)] = (12));

} else {
var statearr_204331_204362 = state_204320__$1;
(statearr_204331_204362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (3))){
var inst_204318 = (state_204320[(2)]);
var state_204320__$1 = state_204320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204320__$1,inst_204318);
} else {
if((state_val_204321 === (12))){
var inst_204280 = (state_204320[(8)]);
var inst_204308 = cljs.core.vec.call(null,inst_204280);
var state_204320__$1 = state_204320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204320__$1,(15),out,inst_204308);
} else {
if((state_val_204321 === (2))){
var state_204320__$1 = state_204320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204320__$1,(4),ch);
} else {
if((state_val_204321 === (11))){
var inst_204284 = (state_204320[(9)]);
var inst_204288 = (state_204320[(10)]);
var inst_204298 = (state_204320[(2)]);
var inst_204299 = [];
var inst_204300 = inst_204299.push(inst_204284);
var inst_204280 = inst_204299;
var inst_204281 = inst_204288;
var state_204320__$1 = (function (){var statearr_204332 = state_204320;
(statearr_204332[(11)] = inst_204298);

(statearr_204332[(12)] = inst_204300);

(statearr_204332[(7)] = inst_204281);

(statearr_204332[(8)] = inst_204280);

return statearr_204332;
})();
var statearr_204333_204363 = state_204320__$1;
(statearr_204333_204363[(2)] = null);

(statearr_204333_204363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (9))){
var inst_204280 = (state_204320[(8)]);
var inst_204296 = cljs.core.vec.call(null,inst_204280);
var state_204320__$1 = state_204320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204320__$1,(11),out,inst_204296);
} else {
if((state_val_204321 === (5))){
var inst_204281 = (state_204320[(7)]);
var inst_204284 = (state_204320[(9)]);
var inst_204288 = (state_204320[(10)]);
var inst_204288__$1 = f.call(null,inst_204284);
var inst_204289 = cljs.core._EQ_.call(null,inst_204288__$1,inst_204281);
var inst_204290 = cljs.core.keyword_identical_QMARK_.call(null,inst_204281,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_204291 = (inst_204289) || (inst_204290);
var state_204320__$1 = (function (){var statearr_204334 = state_204320;
(statearr_204334[(10)] = inst_204288__$1);

return statearr_204334;
})();
if(cljs.core.truth_(inst_204291)){
var statearr_204335_204364 = state_204320__$1;
(statearr_204335_204364[(1)] = (8));

} else {
var statearr_204336_204365 = state_204320__$1;
(statearr_204336_204365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (14))){
var inst_204313 = (state_204320[(2)]);
var inst_204314 = cljs.core.async.close_BANG_.call(null,out);
var state_204320__$1 = (function (){var statearr_204338 = state_204320;
(statearr_204338[(13)] = inst_204313);

return statearr_204338;
})();
var statearr_204339_204366 = state_204320__$1;
(statearr_204339_204366[(2)] = inst_204314);

(statearr_204339_204366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (10))){
var inst_204303 = (state_204320[(2)]);
var state_204320__$1 = state_204320;
var statearr_204340_204367 = state_204320__$1;
(statearr_204340_204367[(2)] = inst_204303);

(statearr_204340_204367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204321 === (8))){
var inst_204284 = (state_204320[(9)]);
var inst_204288 = (state_204320[(10)]);
var inst_204280 = (state_204320[(8)]);
var inst_204293 = inst_204280.push(inst_204284);
var tmp204337 = inst_204280;
var inst_204280__$1 = tmp204337;
var inst_204281 = inst_204288;
var state_204320__$1 = (function (){var statearr_204341 = state_204320;
(statearr_204341[(14)] = inst_204293);

(statearr_204341[(7)] = inst_204281);

(statearr_204341[(8)] = inst_204280__$1);

return statearr_204341;
})();
var statearr_204342_204368 = state_204320__$1;
(statearr_204342_204368[(2)] = null);

(statearr_204342_204368[(1)] = (2));


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
});})(c__44084__auto___204354,out))
;
return ((function (switch__44061__auto__,c__44084__auto___204354,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_204346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_204346[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_204346[(1)] = (1));

return statearr_204346;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_204320){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_204320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e204347){if((e204347 instanceof Object)){
var ex__44065__auto__ = e204347;
var statearr_204348_204369 = state_204320;
(statearr_204348_204369[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204370 = state_204320;
state_204320 = G__204370;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_204320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_204320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___204354,out))
})();
var state__44086__auto__ = (function (){var statearr_204349 = f__44085__auto__.call(null);
(statearr_204349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___204354);

return statearr_204349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___204354,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491715103049