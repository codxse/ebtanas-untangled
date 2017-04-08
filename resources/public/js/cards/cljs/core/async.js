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
var args79654 = [];
var len__35776__auto___79660 = arguments.length;
var i__35777__auto___79661 = (0);
while(true){
if((i__35777__auto___79661 < len__35776__auto___79660)){
args79654.push((arguments[i__35777__auto___79661]));

var G__79662 = (i__35777__auto___79661 + (1));
i__35777__auto___79661 = G__79662;
continue;
} else {
}
break;
}

var G__79656 = args79654.length;
switch (G__79656) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args79654.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async79657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79657 = (function (f,blockable,meta79658){
this.f = f;
this.blockable = blockable;
this.meta79658 = meta79658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async79657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79659,meta79658__$1){
var self__ = this;
var _79659__$1 = this;
return (new cljs.core.async.t_cljs$core$async79657(self__.f,self__.blockable,meta79658__$1));
});


cljs.core.async.t_cljs$core$async79657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79659){
var self__ = this;
var _79659__$1 = this;
return self__.meta79658;
});


cljs.core.async.t_cljs$core$async79657.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async79657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async79657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async79657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async79657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta79658","meta79658",-2096374473,null)], null);
});

cljs.core.async.t_cljs$core$async79657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79657";

cljs.core.async.t_cljs$core$async79657.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async79657");
});

cljs.core.async.__GT_t_cljs$core$async79657 = (function cljs$core$async$__GT_t_cljs$core$async79657(f__$1,blockable__$1,meta79658){
return (new cljs.core.async.t_cljs$core$async79657(f__$1,blockable__$1,meta79658));
});

}

return (new cljs.core.async.t_cljs$core$async79657(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args79666 = [];
var len__35776__auto___79669 = arguments.length;
var i__35777__auto___79670 = (0);
while(true){
if((i__35777__auto___79670 < len__35776__auto___79669)){
args79666.push((arguments[i__35777__auto___79670]));

var G__79671 = (i__35777__auto___79670 + (1));
i__35777__auto___79670 = G__79671;
continue;
} else {
}
break;
}

var G__79668 = args79666.length;
switch (G__79668) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args79666.length)].join('')));

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
var args79673 = [];
var len__35776__auto___79676 = arguments.length;
var i__35777__auto___79677 = (0);
while(true){
if((i__35777__auto___79677 < len__35776__auto___79676)){
args79673.push((arguments[i__35777__auto___79677]));

var G__79678 = (i__35777__auto___79677 + (1));
i__35777__auto___79677 = G__79678;
continue;
} else {
}
break;
}

var G__79675 = args79673.length;
switch (G__79675) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args79673.length)].join('')));

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
var args79680 = [];
var len__35776__auto___79683 = arguments.length;
var i__35777__auto___79684 = (0);
while(true){
if((i__35777__auto___79684 < len__35776__auto___79683)){
args79680.push((arguments[i__35777__auto___79684]));

var G__79685 = (i__35777__auto___79684 + (1));
i__35777__auto___79684 = G__79685;
continue;
} else {
}
break;
}

var G__79682 = args79680.length;
switch (G__79682) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args79680.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_79687 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_79687);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_79687,ret){
return (function (){
return fn1.call(null,val_79687);
});})(val_79687,ret))
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
var args79688 = [];
var len__35776__auto___79691 = arguments.length;
var i__35777__auto___79692 = (0);
while(true){
if((i__35777__auto___79692 < len__35776__auto___79691)){
args79688.push((arguments[i__35777__auto___79692]));

var G__79693 = (i__35777__auto___79692 + (1));
i__35777__auto___79692 = G__79693;
continue;
} else {
}
break;
}

var G__79690 = args79688.length;
switch (G__79690) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args79688.length)].join('')));

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
var n__35576__auto___79695 = n;
var x_79696 = (0);
while(true){
if((x_79696 < n__35576__auto___79695)){
(a[x_79696] = (0));

var G__79697 = (x_79696 + (1));
x_79696 = G__79697;
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

var G__79698 = (i + (1));
i = G__79698;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async79702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79702 = (function (flag,meta79703){
this.flag = flag;
this.meta79703 = meta79703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async79702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_79704,meta79703__$1){
var self__ = this;
var _79704__$1 = this;
return (new cljs.core.async.t_cljs$core$async79702(self__.flag,meta79703__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async79702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_79704){
var self__ = this;
var _79704__$1 = this;
return self__.meta79703;
});})(flag))
;


cljs.core.async.t_cljs$core$async79702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async79702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async79702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async79702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async79702.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta79703","meta79703",1181718155,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async79702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79702";

cljs.core.async.t_cljs$core$async79702.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async79702");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async79702 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async79702(flag__$1,meta79703){
return (new cljs.core.async.t_cljs$core$async79702(flag__$1,meta79703));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async79702(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async79708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79708 = (function (flag,cb,meta79709){
this.flag = flag;
this.cb = cb;
this.meta79709 = meta79709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async79708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79710,meta79709__$1){
var self__ = this;
var _79710__$1 = this;
return (new cljs.core.async.t_cljs$core$async79708(self__.flag,self__.cb,meta79709__$1));
});


cljs.core.async.t_cljs$core$async79708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79710){
var self__ = this;
var _79710__$1 = this;
return self__.meta79709;
});


cljs.core.async.t_cljs$core$async79708.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async79708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async79708.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async79708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async79708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta79709","meta79709",1857490723,null)], null);
});

cljs.core.async.t_cljs$core$async79708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79708";

cljs.core.async.t_cljs$core$async79708.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async79708");
});

cljs.core.async.__GT_t_cljs$core$async79708 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async79708(flag__$1,cb__$1,meta79709){
return (new cljs.core.async.t_cljs$core$async79708(flag__$1,cb__$1,meta79709));
});

}

return (new cljs.core.async.t_cljs$core$async79708(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__79711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79711_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__79712_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79712_SHARP_,port], null));
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
var G__79713 = (i + (1));
i = G__79713;
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
var len__35776__auto___79719 = arguments.length;
var i__35777__auto___79720 = (0);
while(true){
if((i__35777__auto___79720 < len__35776__auto___79719)){
args__35783__auto__.push((arguments[i__35777__auto___79720]));

var G__79721 = (i__35777__auto___79720 + (1));
i__35777__auto___79720 = G__79721;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__79716){
var map__79717 = p__79716;
var map__79717__$1 = ((((!((map__79717 == null)))?((((map__79717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79717):map__79717);
var opts = map__79717__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq79714){
var G__79715 = cljs.core.first.call(null,seq79714);
var seq79714__$1 = cljs.core.next.call(null,seq79714);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__79715,seq79714__$1);
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
var args79722 = [];
var len__35776__auto___79772 = arguments.length;
var i__35777__auto___79773 = (0);
while(true){
if((i__35777__auto___79773 < len__35776__auto___79772)){
args79722.push((arguments[i__35777__auto___79773]));

var G__79774 = (i__35777__auto___79773 + (1));
i__35777__auto___79773 = G__79774;
continue;
} else {
}
break;
}

var G__79724 = args79722.length;
switch (G__79724) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args79722.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48312__auto___79776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___79776){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___79776){
return (function (state_79748){
var state_val_79749 = (state_79748[(1)]);
if((state_val_79749 === (7))){
var inst_79744 = (state_79748[(2)]);
var state_79748__$1 = state_79748;
var statearr_79750_79777 = state_79748__$1;
(statearr_79750_79777[(2)] = inst_79744);

(statearr_79750_79777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (1))){
var state_79748__$1 = state_79748;
var statearr_79751_79778 = state_79748__$1;
(statearr_79751_79778[(2)] = null);

(statearr_79751_79778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (4))){
var inst_79727 = (state_79748[(7)]);
var inst_79727__$1 = (state_79748[(2)]);
var inst_79728 = (inst_79727__$1 == null);
var state_79748__$1 = (function (){var statearr_79752 = state_79748;
(statearr_79752[(7)] = inst_79727__$1);

return statearr_79752;
})();
if(cljs.core.truth_(inst_79728)){
var statearr_79753_79779 = state_79748__$1;
(statearr_79753_79779[(1)] = (5));

} else {
var statearr_79754_79780 = state_79748__$1;
(statearr_79754_79780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (13))){
var state_79748__$1 = state_79748;
var statearr_79755_79781 = state_79748__$1;
(statearr_79755_79781[(2)] = null);

(statearr_79755_79781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (6))){
var inst_79727 = (state_79748[(7)]);
var state_79748__$1 = state_79748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79748__$1,(11),to,inst_79727);
} else {
if((state_val_79749 === (3))){
var inst_79746 = (state_79748[(2)]);
var state_79748__$1 = state_79748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79748__$1,inst_79746);
} else {
if((state_val_79749 === (12))){
var state_79748__$1 = state_79748;
var statearr_79756_79782 = state_79748__$1;
(statearr_79756_79782[(2)] = null);

(statearr_79756_79782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (2))){
var state_79748__$1 = state_79748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79748__$1,(4),from);
} else {
if((state_val_79749 === (11))){
var inst_79737 = (state_79748[(2)]);
var state_79748__$1 = state_79748;
if(cljs.core.truth_(inst_79737)){
var statearr_79757_79783 = state_79748__$1;
(statearr_79757_79783[(1)] = (12));

} else {
var statearr_79758_79784 = state_79748__$1;
(statearr_79758_79784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (9))){
var state_79748__$1 = state_79748;
var statearr_79759_79785 = state_79748__$1;
(statearr_79759_79785[(2)] = null);

(statearr_79759_79785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (5))){
var state_79748__$1 = state_79748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79760_79786 = state_79748__$1;
(statearr_79760_79786[(1)] = (8));

} else {
var statearr_79761_79787 = state_79748__$1;
(statearr_79761_79787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (14))){
var inst_79742 = (state_79748[(2)]);
var state_79748__$1 = state_79748;
var statearr_79762_79788 = state_79748__$1;
(statearr_79762_79788[(2)] = inst_79742);

(statearr_79762_79788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (10))){
var inst_79734 = (state_79748[(2)]);
var state_79748__$1 = state_79748;
var statearr_79763_79789 = state_79748__$1;
(statearr_79763_79789[(2)] = inst_79734);

(statearr_79763_79789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79749 === (8))){
var inst_79731 = cljs.core.async.close_BANG_.call(null,to);
var state_79748__$1 = state_79748;
var statearr_79764_79790 = state_79748__$1;
(statearr_79764_79790[(2)] = inst_79731);

(statearr_79764_79790[(1)] = (10));


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
});})(c__48312__auto___79776))
;
return ((function (switch__48198__auto__,c__48312__auto___79776){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_79768 = [null,null,null,null,null,null,null,null];
(statearr_79768[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_79768[(1)] = (1));

return statearr_79768;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_79748){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_79748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e79769){if((e79769 instanceof Object)){
var ex__48202__auto__ = e79769;
var statearr_79770_79791 = state_79748;
(statearr_79770_79791[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79792 = state_79748;
state_79748 = G__79792;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_79748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_79748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___79776))
})();
var state__48314__auto__ = (function (){var statearr_79771 = f__48313__auto__.call(null);
(statearr_79771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___79776);

return statearr_79771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___79776))
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
return (function (p__79980){
var vec__79981 = p__79980;
var v = cljs.core.nth.call(null,vec__79981,(0),null);
var p = cljs.core.nth.call(null,vec__79981,(1),null);
var job = vec__79981;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48312__auto___80167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___80167,res,vec__79981,v,p,job,jobs,results){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___80167,res,vec__79981,v,p,job,jobs,results){
return (function (state_79988){
var state_val_79989 = (state_79988[(1)]);
if((state_val_79989 === (1))){
var state_79988__$1 = state_79988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79988__$1,(2),res,v);
} else {
if((state_val_79989 === (2))){
var inst_79985 = (state_79988[(2)]);
var inst_79986 = cljs.core.async.close_BANG_.call(null,res);
var state_79988__$1 = (function (){var statearr_79990 = state_79988;
(statearr_79990[(7)] = inst_79985);

return statearr_79990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79988__$1,inst_79986);
} else {
return null;
}
}
});})(c__48312__auto___80167,res,vec__79981,v,p,job,jobs,results))
;
return ((function (switch__48198__auto__,c__48312__auto___80167,res,vec__79981,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_79994 = [null,null,null,null,null,null,null,null];
(statearr_79994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_79994[(1)] = (1));

return statearr_79994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_79988){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_79988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e79995){if((e79995 instanceof Object)){
var ex__48202__auto__ = e79995;
var statearr_79996_80168 = state_79988;
(statearr_79996_80168[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80169 = state_79988;
state_79988 = G__80169;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_79988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_79988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___80167,res,vec__79981,v,p,job,jobs,results))
})();
var state__48314__auto__ = (function (){var statearr_79997 = f__48313__auto__.call(null);
(statearr_79997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___80167);

return statearr_79997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___80167,res,vec__79981,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__79998){
var vec__79999 = p__79998;
var v = cljs.core.nth.call(null,vec__79999,(0),null);
var p = cljs.core.nth.call(null,vec__79999,(1),null);
var job = vec__79999;
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
var n__35576__auto___80170 = n;
var __80171 = (0);
while(true){
if((__80171 < n__35576__auto___80170)){
var G__80002_80172 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__80002_80172) {
case "compute":
var c__48312__auto___80174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__80171,c__48312__auto___80174,G__80002_80172,n__35576__auto___80170,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (__80171,c__48312__auto___80174,G__80002_80172,n__35576__auto___80170,jobs,results,process,async){
return (function (state_80015){
var state_val_80016 = (state_80015[(1)]);
if((state_val_80016 === (1))){
var state_80015__$1 = state_80015;
var statearr_80017_80175 = state_80015__$1;
(statearr_80017_80175[(2)] = null);

(statearr_80017_80175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80016 === (2))){
var state_80015__$1 = state_80015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80015__$1,(4),jobs);
} else {
if((state_val_80016 === (3))){
var inst_80013 = (state_80015[(2)]);
var state_80015__$1 = state_80015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80015__$1,inst_80013);
} else {
if((state_val_80016 === (4))){
var inst_80005 = (state_80015[(2)]);
var inst_80006 = process.call(null,inst_80005);
var state_80015__$1 = state_80015;
if(cljs.core.truth_(inst_80006)){
var statearr_80018_80176 = state_80015__$1;
(statearr_80018_80176[(1)] = (5));

} else {
var statearr_80019_80177 = state_80015__$1;
(statearr_80019_80177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80016 === (5))){
var state_80015__$1 = state_80015;
var statearr_80020_80178 = state_80015__$1;
(statearr_80020_80178[(2)] = null);

(statearr_80020_80178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80016 === (6))){
var state_80015__$1 = state_80015;
var statearr_80021_80179 = state_80015__$1;
(statearr_80021_80179[(2)] = null);

(statearr_80021_80179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80016 === (7))){
var inst_80011 = (state_80015[(2)]);
var state_80015__$1 = state_80015;
var statearr_80022_80180 = state_80015__$1;
(statearr_80022_80180[(2)] = inst_80011);

(statearr_80022_80180[(1)] = (3));


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
});})(__80171,c__48312__auto___80174,G__80002_80172,n__35576__auto___80170,jobs,results,process,async))
;
return ((function (__80171,switch__48198__auto__,c__48312__auto___80174,G__80002_80172,n__35576__auto___80170,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_80026 = [null,null,null,null,null,null,null];
(statearr_80026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_80026[(1)] = (1));

return statearr_80026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_80015){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80027){if((e80027 instanceof Object)){
var ex__48202__auto__ = e80027;
var statearr_80028_80181 = state_80015;
(statearr_80028_80181[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80182 = state_80015;
state_80015 = G__80182;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_80015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_80015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(__80171,switch__48198__auto__,c__48312__auto___80174,G__80002_80172,n__35576__auto___80170,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_80029 = f__48313__auto__.call(null);
(statearr_80029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___80174);

return statearr_80029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(__80171,c__48312__auto___80174,G__80002_80172,n__35576__auto___80170,jobs,results,process,async))
);


break;
case "async":
var c__48312__auto___80183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__80171,c__48312__auto___80183,G__80002_80172,n__35576__auto___80170,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (__80171,c__48312__auto___80183,G__80002_80172,n__35576__auto___80170,jobs,results,process,async){
return (function (state_80042){
var state_val_80043 = (state_80042[(1)]);
if((state_val_80043 === (1))){
var state_80042__$1 = state_80042;
var statearr_80044_80184 = state_80042__$1;
(statearr_80044_80184[(2)] = null);

(statearr_80044_80184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80043 === (2))){
var state_80042__$1 = state_80042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80042__$1,(4),jobs);
} else {
if((state_val_80043 === (3))){
var inst_80040 = (state_80042[(2)]);
var state_80042__$1 = state_80042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80042__$1,inst_80040);
} else {
if((state_val_80043 === (4))){
var inst_80032 = (state_80042[(2)]);
var inst_80033 = async.call(null,inst_80032);
var state_80042__$1 = state_80042;
if(cljs.core.truth_(inst_80033)){
var statearr_80045_80185 = state_80042__$1;
(statearr_80045_80185[(1)] = (5));

} else {
var statearr_80046_80186 = state_80042__$1;
(statearr_80046_80186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80043 === (5))){
var state_80042__$1 = state_80042;
var statearr_80047_80187 = state_80042__$1;
(statearr_80047_80187[(2)] = null);

(statearr_80047_80187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80043 === (6))){
var state_80042__$1 = state_80042;
var statearr_80048_80188 = state_80042__$1;
(statearr_80048_80188[(2)] = null);

(statearr_80048_80188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80043 === (7))){
var inst_80038 = (state_80042[(2)]);
var state_80042__$1 = state_80042;
var statearr_80049_80189 = state_80042__$1;
(statearr_80049_80189[(2)] = inst_80038);

(statearr_80049_80189[(1)] = (3));


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
});})(__80171,c__48312__auto___80183,G__80002_80172,n__35576__auto___80170,jobs,results,process,async))
;
return ((function (__80171,switch__48198__auto__,c__48312__auto___80183,G__80002_80172,n__35576__auto___80170,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_80053 = [null,null,null,null,null,null,null];
(statearr_80053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_80053[(1)] = (1));

return statearr_80053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_80042){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80054){if((e80054 instanceof Object)){
var ex__48202__auto__ = e80054;
var statearr_80055_80190 = state_80042;
(statearr_80055_80190[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80191 = state_80042;
state_80042 = G__80191;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_80042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_80042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(__80171,switch__48198__auto__,c__48312__auto___80183,G__80002_80172,n__35576__auto___80170,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_80056 = f__48313__auto__.call(null);
(statearr_80056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___80183);

return statearr_80056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(__80171,c__48312__auto___80183,G__80002_80172,n__35576__auto___80170,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__80192 = (__80171 + (1));
__80171 = G__80192;
continue;
} else {
}
break;
}

var c__48312__auto___80193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___80193,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___80193,jobs,results,process,async){
return (function (state_80078){
var state_val_80079 = (state_80078[(1)]);
if((state_val_80079 === (1))){
var state_80078__$1 = state_80078;
var statearr_80080_80194 = state_80078__$1;
(statearr_80080_80194[(2)] = null);

(statearr_80080_80194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80079 === (2))){
var state_80078__$1 = state_80078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80078__$1,(4),from);
} else {
if((state_val_80079 === (3))){
var inst_80076 = (state_80078[(2)]);
var state_80078__$1 = state_80078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80078__$1,inst_80076);
} else {
if((state_val_80079 === (4))){
var inst_80059 = (state_80078[(7)]);
var inst_80059__$1 = (state_80078[(2)]);
var inst_80060 = (inst_80059__$1 == null);
var state_80078__$1 = (function (){var statearr_80081 = state_80078;
(statearr_80081[(7)] = inst_80059__$1);

return statearr_80081;
})();
if(cljs.core.truth_(inst_80060)){
var statearr_80082_80195 = state_80078__$1;
(statearr_80082_80195[(1)] = (5));

} else {
var statearr_80083_80196 = state_80078__$1;
(statearr_80083_80196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80079 === (5))){
var inst_80062 = cljs.core.async.close_BANG_.call(null,jobs);
var state_80078__$1 = state_80078;
var statearr_80084_80197 = state_80078__$1;
(statearr_80084_80197[(2)] = inst_80062);

(statearr_80084_80197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80079 === (6))){
var inst_80064 = (state_80078[(8)]);
var inst_80059 = (state_80078[(7)]);
var inst_80064__$1 = cljs.core.async.chan.call(null,(1));
var inst_80065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80066 = [inst_80059,inst_80064__$1];
var inst_80067 = (new cljs.core.PersistentVector(null,2,(5),inst_80065,inst_80066,null));
var state_80078__$1 = (function (){var statearr_80085 = state_80078;
(statearr_80085[(8)] = inst_80064__$1);

return statearr_80085;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80078__$1,(8),jobs,inst_80067);
} else {
if((state_val_80079 === (7))){
var inst_80074 = (state_80078[(2)]);
var state_80078__$1 = state_80078;
var statearr_80086_80198 = state_80078__$1;
(statearr_80086_80198[(2)] = inst_80074);

(statearr_80086_80198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80079 === (8))){
var inst_80064 = (state_80078[(8)]);
var inst_80069 = (state_80078[(2)]);
var state_80078__$1 = (function (){var statearr_80087 = state_80078;
(statearr_80087[(9)] = inst_80069);

return statearr_80087;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80078__$1,(9),results,inst_80064);
} else {
if((state_val_80079 === (9))){
var inst_80071 = (state_80078[(2)]);
var state_80078__$1 = (function (){var statearr_80088 = state_80078;
(statearr_80088[(10)] = inst_80071);

return statearr_80088;
})();
var statearr_80089_80199 = state_80078__$1;
(statearr_80089_80199[(2)] = null);

(statearr_80089_80199[(1)] = (2));


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
});})(c__48312__auto___80193,jobs,results,process,async))
;
return ((function (switch__48198__auto__,c__48312__auto___80193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0 = (function (){
var statearr_80093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_80093[(1)] = (1));

return statearr_80093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_80078){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80094){if((e80094 instanceof Object)){
var ex__48202__auto__ = e80094;
var statearr_80095_80200 = state_80078;
(statearr_80095_80200[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80201 = state_80078;
state_80078 = G__80201;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_80078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_80078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___80193,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_80096 = f__48313__auto__.call(null);
(statearr_80096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___80193);

return statearr_80096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___80193,jobs,results,process,async))
);


var c__48312__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto__,jobs,results,process,async){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto__,jobs,results,process,async){
return (function (state_80134){
var state_val_80135 = (state_80134[(1)]);
if((state_val_80135 === (7))){
var inst_80130 = (state_80134[(2)]);
var state_80134__$1 = state_80134;
var statearr_80136_80202 = state_80134__$1;
(statearr_80136_80202[(2)] = inst_80130);

(statearr_80136_80202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (20))){
var state_80134__$1 = state_80134;
var statearr_80137_80203 = state_80134__$1;
(statearr_80137_80203[(2)] = null);

(statearr_80137_80203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (1))){
var state_80134__$1 = state_80134;
var statearr_80138_80204 = state_80134__$1;
(statearr_80138_80204[(2)] = null);

(statearr_80138_80204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (4))){
var inst_80099 = (state_80134[(7)]);
var inst_80099__$1 = (state_80134[(2)]);
var inst_80100 = (inst_80099__$1 == null);
var state_80134__$1 = (function (){var statearr_80139 = state_80134;
(statearr_80139[(7)] = inst_80099__$1);

return statearr_80139;
})();
if(cljs.core.truth_(inst_80100)){
var statearr_80140_80205 = state_80134__$1;
(statearr_80140_80205[(1)] = (5));

} else {
var statearr_80141_80206 = state_80134__$1;
(statearr_80141_80206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (15))){
var inst_80112 = (state_80134[(8)]);
var state_80134__$1 = state_80134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80134__$1,(18),to,inst_80112);
} else {
if((state_val_80135 === (21))){
var inst_80125 = (state_80134[(2)]);
var state_80134__$1 = state_80134;
var statearr_80142_80207 = state_80134__$1;
(statearr_80142_80207[(2)] = inst_80125);

(statearr_80142_80207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (13))){
var inst_80127 = (state_80134[(2)]);
var state_80134__$1 = (function (){var statearr_80143 = state_80134;
(statearr_80143[(9)] = inst_80127);

return statearr_80143;
})();
var statearr_80144_80208 = state_80134__$1;
(statearr_80144_80208[(2)] = null);

(statearr_80144_80208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (6))){
var inst_80099 = (state_80134[(7)]);
var state_80134__$1 = state_80134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80134__$1,(11),inst_80099);
} else {
if((state_val_80135 === (17))){
var inst_80120 = (state_80134[(2)]);
var state_80134__$1 = state_80134;
if(cljs.core.truth_(inst_80120)){
var statearr_80145_80209 = state_80134__$1;
(statearr_80145_80209[(1)] = (19));

} else {
var statearr_80146_80210 = state_80134__$1;
(statearr_80146_80210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (3))){
var inst_80132 = (state_80134[(2)]);
var state_80134__$1 = state_80134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80134__$1,inst_80132);
} else {
if((state_val_80135 === (12))){
var inst_80109 = (state_80134[(10)]);
var state_80134__$1 = state_80134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80134__$1,(14),inst_80109);
} else {
if((state_val_80135 === (2))){
var state_80134__$1 = state_80134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80134__$1,(4),results);
} else {
if((state_val_80135 === (19))){
var state_80134__$1 = state_80134;
var statearr_80147_80211 = state_80134__$1;
(statearr_80147_80211[(2)] = null);

(statearr_80147_80211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (11))){
var inst_80109 = (state_80134[(2)]);
var state_80134__$1 = (function (){var statearr_80148 = state_80134;
(statearr_80148[(10)] = inst_80109);

return statearr_80148;
})();
var statearr_80149_80212 = state_80134__$1;
(statearr_80149_80212[(2)] = null);

(statearr_80149_80212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (9))){
var state_80134__$1 = state_80134;
var statearr_80150_80213 = state_80134__$1;
(statearr_80150_80213[(2)] = null);

(statearr_80150_80213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (5))){
var state_80134__$1 = state_80134;
if(cljs.core.truth_(close_QMARK_)){
var statearr_80151_80214 = state_80134__$1;
(statearr_80151_80214[(1)] = (8));

} else {
var statearr_80152_80215 = state_80134__$1;
(statearr_80152_80215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (14))){
var inst_80114 = (state_80134[(11)]);
var inst_80112 = (state_80134[(8)]);
var inst_80112__$1 = (state_80134[(2)]);
var inst_80113 = (inst_80112__$1 == null);
var inst_80114__$1 = cljs.core.not.call(null,inst_80113);
var state_80134__$1 = (function (){var statearr_80153 = state_80134;
(statearr_80153[(11)] = inst_80114__$1);

(statearr_80153[(8)] = inst_80112__$1);

return statearr_80153;
})();
if(inst_80114__$1){
var statearr_80154_80216 = state_80134__$1;
(statearr_80154_80216[(1)] = (15));

} else {
var statearr_80155_80217 = state_80134__$1;
(statearr_80155_80217[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (16))){
var inst_80114 = (state_80134[(11)]);
var state_80134__$1 = state_80134;
var statearr_80156_80218 = state_80134__$1;
(statearr_80156_80218[(2)] = inst_80114);

(statearr_80156_80218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (10))){
var inst_80106 = (state_80134[(2)]);
var state_80134__$1 = state_80134;
var statearr_80157_80219 = state_80134__$1;
(statearr_80157_80219[(2)] = inst_80106);

(statearr_80157_80219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (18))){
var inst_80117 = (state_80134[(2)]);
var state_80134__$1 = state_80134;
var statearr_80158_80220 = state_80134__$1;
(statearr_80158_80220[(2)] = inst_80117);

(statearr_80158_80220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80135 === (8))){
var inst_80103 = cljs.core.async.close_BANG_.call(null,to);
var state_80134__$1 = state_80134;
var statearr_80159_80221 = state_80134__$1;
(statearr_80159_80221[(2)] = inst_80103);

(statearr_80159_80221[(1)] = (10));


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
var statearr_80163 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__);

(statearr_80163[(1)] = (1));

return statearr_80163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1 = (function (state_80134){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80164){if((e80164 instanceof Object)){
var ex__48202__auto__ = e80164;
var statearr_80165_80222 = state_80134;
(statearr_80165_80222[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80223 = state_80134;
state_80134 = G__80223;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__ = function(state_80134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1.call(this,state_80134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,jobs,results,process,async))
})();
var state__48314__auto__ = (function (){var statearr_80166 = f__48313__auto__.call(null);
(statearr_80166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_80166;
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
var args80224 = [];
var len__35776__auto___80227 = arguments.length;
var i__35777__auto___80228 = (0);
while(true){
if((i__35777__auto___80228 < len__35776__auto___80227)){
args80224.push((arguments[i__35777__auto___80228]));

var G__80229 = (i__35777__auto___80228 + (1));
i__35777__auto___80228 = G__80229;
continue;
} else {
}
break;
}

var G__80226 = args80224.length;
switch (G__80226) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80224.length)].join('')));

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
var args80231 = [];
var len__35776__auto___80234 = arguments.length;
var i__35777__auto___80235 = (0);
while(true){
if((i__35777__auto___80235 < len__35776__auto___80234)){
args80231.push((arguments[i__35777__auto___80235]));

var G__80236 = (i__35777__auto___80235 + (1));
i__35777__auto___80235 = G__80236;
continue;
} else {
}
break;
}

var G__80233 = args80231.length;
switch (G__80233) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80231.length)].join('')));

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
var args80238 = [];
var len__35776__auto___80291 = arguments.length;
var i__35777__auto___80292 = (0);
while(true){
if((i__35777__auto___80292 < len__35776__auto___80291)){
args80238.push((arguments[i__35777__auto___80292]));

var G__80293 = (i__35777__auto___80292 + (1));
i__35777__auto___80292 = G__80293;
continue;
} else {
}
break;
}

var G__80240 = args80238.length;
switch (G__80240) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80238.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__48312__auto___80295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___80295,tc,fc){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___80295,tc,fc){
return (function (state_80266){
var state_val_80267 = (state_80266[(1)]);
if((state_val_80267 === (7))){
var inst_80262 = (state_80266[(2)]);
var state_80266__$1 = state_80266;
var statearr_80268_80296 = state_80266__$1;
(statearr_80268_80296[(2)] = inst_80262);

(statearr_80268_80296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (1))){
var state_80266__$1 = state_80266;
var statearr_80269_80297 = state_80266__$1;
(statearr_80269_80297[(2)] = null);

(statearr_80269_80297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (4))){
var inst_80243 = (state_80266[(7)]);
var inst_80243__$1 = (state_80266[(2)]);
var inst_80244 = (inst_80243__$1 == null);
var state_80266__$1 = (function (){var statearr_80270 = state_80266;
(statearr_80270[(7)] = inst_80243__$1);

return statearr_80270;
})();
if(cljs.core.truth_(inst_80244)){
var statearr_80271_80298 = state_80266__$1;
(statearr_80271_80298[(1)] = (5));

} else {
var statearr_80272_80299 = state_80266__$1;
(statearr_80272_80299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (13))){
var state_80266__$1 = state_80266;
var statearr_80273_80300 = state_80266__$1;
(statearr_80273_80300[(2)] = null);

(statearr_80273_80300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (6))){
var inst_80243 = (state_80266[(7)]);
var inst_80249 = p.call(null,inst_80243);
var state_80266__$1 = state_80266;
if(cljs.core.truth_(inst_80249)){
var statearr_80274_80301 = state_80266__$1;
(statearr_80274_80301[(1)] = (9));

} else {
var statearr_80275_80302 = state_80266__$1;
(statearr_80275_80302[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (3))){
var inst_80264 = (state_80266[(2)]);
var state_80266__$1 = state_80266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80266__$1,inst_80264);
} else {
if((state_val_80267 === (12))){
var state_80266__$1 = state_80266;
var statearr_80276_80303 = state_80266__$1;
(statearr_80276_80303[(2)] = null);

(statearr_80276_80303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (2))){
var state_80266__$1 = state_80266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80266__$1,(4),ch);
} else {
if((state_val_80267 === (11))){
var inst_80243 = (state_80266[(7)]);
var inst_80253 = (state_80266[(2)]);
var state_80266__$1 = state_80266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80266__$1,(8),inst_80253,inst_80243);
} else {
if((state_val_80267 === (9))){
var state_80266__$1 = state_80266;
var statearr_80277_80304 = state_80266__$1;
(statearr_80277_80304[(2)] = tc);

(statearr_80277_80304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (5))){
var inst_80246 = cljs.core.async.close_BANG_.call(null,tc);
var inst_80247 = cljs.core.async.close_BANG_.call(null,fc);
var state_80266__$1 = (function (){var statearr_80278 = state_80266;
(statearr_80278[(8)] = inst_80246);

return statearr_80278;
})();
var statearr_80279_80305 = state_80266__$1;
(statearr_80279_80305[(2)] = inst_80247);

(statearr_80279_80305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (14))){
var inst_80260 = (state_80266[(2)]);
var state_80266__$1 = state_80266;
var statearr_80280_80306 = state_80266__$1;
(statearr_80280_80306[(2)] = inst_80260);

(statearr_80280_80306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (10))){
var state_80266__$1 = state_80266;
var statearr_80281_80307 = state_80266__$1;
(statearr_80281_80307[(2)] = fc);

(statearr_80281_80307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80267 === (8))){
var inst_80255 = (state_80266[(2)]);
var state_80266__$1 = state_80266;
if(cljs.core.truth_(inst_80255)){
var statearr_80282_80308 = state_80266__$1;
(statearr_80282_80308[(1)] = (12));

} else {
var statearr_80283_80309 = state_80266__$1;
(statearr_80283_80309[(1)] = (13));

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
});})(c__48312__auto___80295,tc,fc))
;
return ((function (switch__48198__auto__,c__48312__auto___80295,tc,fc){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_80287 = [null,null,null,null,null,null,null,null,null];
(statearr_80287[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_80287[(1)] = (1));

return statearr_80287;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_80266){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80288){if((e80288 instanceof Object)){
var ex__48202__auto__ = e80288;
var statearr_80289_80310 = state_80266;
(statearr_80289_80310[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80311 = state_80266;
state_80266 = G__80311;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_80266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_80266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___80295,tc,fc))
})();
var state__48314__auto__ = (function (){var statearr_80290 = f__48313__auto__.call(null);
(statearr_80290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___80295);

return statearr_80290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___80295,tc,fc))
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
return (function (state_80375){
var state_val_80376 = (state_80375[(1)]);
if((state_val_80376 === (7))){
var inst_80371 = (state_80375[(2)]);
var state_80375__$1 = state_80375;
var statearr_80377_80398 = state_80375__$1;
(statearr_80377_80398[(2)] = inst_80371);

(statearr_80377_80398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80376 === (1))){
var inst_80355 = init;
var state_80375__$1 = (function (){var statearr_80378 = state_80375;
(statearr_80378[(7)] = inst_80355);

return statearr_80378;
})();
var statearr_80379_80399 = state_80375__$1;
(statearr_80379_80399[(2)] = null);

(statearr_80379_80399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80376 === (4))){
var inst_80358 = (state_80375[(8)]);
var inst_80358__$1 = (state_80375[(2)]);
var inst_80359 = (inst_80358__$1 == null);
var state_80375__$1 = (function (){var statearr_80380 = state_80375;
(statearr_80380[(8)] = inst_80358__$1);

return statearr_80380;
})();
if(cljs.core.truth_(inst_80359)){
var statearr_80381_80400 = state_80375__$1;
(statearr_80381_80400[(1)] = (5));

} else {
var statearr_80382_80401 = state_80375__$1;
(statearr_80382_80401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80376 === (6))){
var inst_80355 = (state_80375[(7)]);
var inst_80362 = (state_80375[(9)]);
var inst_80358 = (state_80375[(8)]);
var inst_80362__$1 = f.call(null,inst_80355,inst_80358);
var inst_80363 = cljs.core.reduced_QMARK_.call(null,inst_80362__$1);
var state_80375__$1 = (function (){var statearr_80383 = state_80375;
(statearr_80383[(9)] = inst_80362__$1);

return statearr_80383;
})();
if(inst_80363){
var statearr_80384_80402 = state_80375__$1;
(statearr_80384_80402[(1)] = (8));

} else {
var statearr_80385_80403 = state_80375__$1;
(statearr_80385_80403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80376 === (3))){
var inst_80373 = (state_80375[(2)]);
var state_80375__$1 = state_80375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80375__$1,inst_80373);
} else {
if((state_val_80376 === (2))){
var state_80375__$1 = state_80375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80375__$1,(4),ch);
} else {
if((state_val_80376 === (9))){
var inst_80362 = (state_80375[(9)]);
var inst_80355 = inst_80362;
var state_80375__$1 = (function (){var statearr_80386 = state_80375;
(statearr_80386[(7)] = inst_80355);

return statearr_80386;
})();
var statearr_80387_80404 = state_80375__$1;
(statearr_80387_80404[(2)] = null);

(statearr_80387_80404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80376 === (5))){
var inst_80355 = (state_80375[(7)]);
var state_80375__$1 = state_80375;
var statearr_80388_80405 = state_80375__$1;
(statearr_80388_80405[(2)] = inst_80355);

(statearr_80388_80405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80376 === (10))){
var inst_80369 = (state_80375[(2)]);
var state_80375__$1 = state_80375;
var statearr_80389_80406 = state_80375__$1;
(statearr_80389_80406[(2)] = inst_80369);

(statearr_80389_80406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80376 === (8))){
var inst_80362 = (state_80375[(9)]);
var inst_80365 = cljs.core.deref.call(null,inst_80362);
var state_80375__$1 = state_80375;
var statearr_80390_80407 = state_80375__$1;
(statearr_80390_80407[(2)] = inst_80365);

(statearr_80390_80407[(1)] = (10));


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
var statearr_80394 = [null,null,null,null,null,null,null,null,null,null];
(statearr_80394[(0)] = cljs$core$async$reduce_$_state_machine__48199__auto__);

(statearr_80394[(1)] = (1));

return statearr_80394;
});
var cljs$core$async$reduce_$_state_machine__48199__auto____1 = (function (state_80375){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80395){if((e80395 instanceof Object)){
var ex__48202__auto__ = e80395;
var statearr_80396_80408 = state_80375;
(statearr_80396_80408[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80409 = state_80375;
state_80375 = G__80409;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48199__auto__ = function(state_80375){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48199__auto____1.call(this,state_80375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48199__auto____0;
cljs$core$async$reduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48199__auto____1;
return cljs$core$async$reduce_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_80397 = f__48313__auto__.call(null);
(statearr_80397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_80397;
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
return (function (state_80429){
var state_val_80430 = (state_80429[(1)]);
if((state_val_80430 === (1))){
var inst_80424 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_80429__$1 = state_80429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80429__$1,(2),inst_80424);
} else {
if((state_val_80430 === (2))){
var inst_80426 = (state_80429[(2)]);
var inst_80427 = f__$1.call(null,inst_80426);
var state_80429__$1 = state_80429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80429__$1,inst_80427);
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
var statearr_80434 = [null,null,null,null,null,null,null];
(statearr_80434[(0)] = cljs$core$async$transduce_$_state_machine__48199__auto__);

(statearr_80434[(1)] = (1));

return statearr_80434;
});
var cljs$core$async$transduce_$_state_machine__48199__auto____1 = (function (state_80429){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80435){if((e80435 instanceof Object)){
var ex__48202__auto__ = e80435;
var statearr_80436_80438 = state_80429;
(statearr_80436_80438[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80439 = state_80429;
state_80429 = G__80439;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48199__auto__ = function(state_80429){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48199__auto____1.call(this,state_80429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48199__auto____0;
cljs$core$async$transduce_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48199__auto____1;
return cljs$core$async$transduce_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__,f__$1))
})();
var state__48314__auto__ = (function (){var statearr_80437 = f__48313__auto__.call(null);
(statearr_80437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_80437;
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
var args80440 = [];
var len__35776__auto___80492 = arguments.length;
var i__35777__auto___80493 = (0);
while(true){
if((i__35777__auto___80493 < len__35776__auto___80492)){
args80440.push((arguments[i__35777__auto___80493]));

var G__80494 = (i__35777__auto___80493 + (1));
i__35777__auto___80493 = G__80494;
continue;
} else {
}
break;
}

var G__80442 = args80440.length;
switch (G__80442) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args80440.length)].join('')));

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
return (function (state_80467){
var state_val_80468 = (state_80467[(1)]);
if((state_val_80468 === (7))){
var inst_80449 = (state_80467[(2)]);
var state_80467__$1 = state_80467;
var statearr_80469_80496 = state_80467__$1;
(statearr_80469_80496[(2)] = inst_80449);

(statearr_80469_80496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (1))){
var inst_80443 = cljs.core.seq.call(null,coll);
var inst_80444 = inst_80443;
var state_80467__$1 = (function (){var statearr_80470 = state_80467;
(statearr_80470[(7)] = inst_80444);

return statearr_80470;
})();
var statearr_80471_80497 = state_80467__$1;
(statearr_80471_80497[(2)] = null);

(statearr_80471_80497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (4))){
var inst_80444 = (state_80467[(7)]);
var inst_80447 = cljs.core.first.call(null,inst_80444);
var state_80467__$1 = state_80467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80467__$1,(7),ch,inst_80447);
} else {
if((state_val_80468 === (13))){
var inst_80461 = (state_80467[(2)]);
var state_80467__$1 = state_80467;
var statearr_80472_80498 = state_80467__$1;
(statearr_80472_80498[(2)] = inst_80461);

(statearr_80472_80498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (6))){
var inst_80452 = (state_80467[(2)]);
var state_80467__$1 = state_80467;
if(cljs.core.truth_(inst_80452)){
var statearr_80473_80499 = state_80467__$1;
(statearr_80473_80499[(1)] = (8));

} else {
var statearr_80474_80500 = state_80467__$1;
(statearr_80474_80500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (3))){
var inst_80465 = (state_80467[(2)]);
var state_80467__$1 = state_80467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80467__$1,inst_80465);
} else {
if((state_val_80468 === (12))){
var state_80467__$1 = state_80467;
var statearr_80475_80501 = state_80467__$1;
(statearr_80475_80501[(2)] = null);

(statearr_80475_80501[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (2))){
var inst_80444 = (state_80467[(7)]);
var state_80467__$1 = state_80467;
if(cljs.core.truth_(inst_80444)){
var statearr_80476_80502 = state_80467__$1;
(statearr_80476_80502[(1)] = (4));

} else {
var statearr_80477_80503 = state_80467__$1;
(statearr_80477_80503[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (11))){
var inst_80458 = cljs.core.async.close_BANG_.call(null,ch);
var state_80467__$1 = state_80467;
var statearr_80478_80504 = state_80467__$1;
(statearr_80478_80504[(2)] = inst_80458);

(statearr_80478_80504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (9))){
var state_80467__$1 = state_80467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_80479_80505 = state_80467__$1;
(statearr_80479_80505[(1)] = (11));

} else {
var statearr_80480_80506 = state_80467__$1;
(statearr_80480_80506[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (5))){
var inst_80444 = (state_80467[(7)]);
var state_80467__$1 = state_80467;
var statearr_80481_80507 = state_80467__$1;
(statearr_80481_80507[(2)] = inst_80444);

(statearr_80481_80507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (10))){
var inst_80463 = (state_80467[(2)]);
var state_80467__$1 = state_80467;
var statearr_80482_80508 = state_80467__$1;
(statearr_80482_80508[(2)] = inst_80463);

(statearr_80482_80508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80468 === (8))){
var inst_80444 = (state_80467[(7)]);
var inst_80454 = cljs.core.next.call(null,inst_80444);
var inst_80444__$1 = inst_80454;
var state_80467__$1 = (function (){var statearr_80483 = state_80467;
(statearr_80483[(7)] = inst_80444__$1);

return statearr_80483;
})();
var statearr_80484_80509 = state_80467__$1;
(statearr_80484_80509[(2)] = null);

(statearr_80484_80509[(1)] = (2));


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
var statearr_80488 = [null,null,null,null,null,null,null,null];
(statearr_80488[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_80488[(1)] = (1));

return statearr_80488;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_80467){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80489){if((e80489 instanceof Object)){
var ex__48202__auto__ = e80489;
var statearr_80490_80510 = state_80467;
(statearr_80490_80510[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80511 = state_80467;
state_80467 = G__80511;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_80467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_80467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_80491 = f__48313__auto__.call(null);
(statearr_80491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_80491;
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
if(typeof cljs.core.async.t_cljs$core$async80737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80737 = (function (ch,cs,meta80738){
this.ch = ch;
this.cs = cs;
this.meta80738 = meta80738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async80737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_80739,meta80738__$1){
var self__ = this;
var _80739__$1 = this;
return (new cljs.core.async.t_cljs$core$async80737(self__.ch,self__.cs,meta80738__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async80737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_80739){
var self__ = this;
var _80739__$1 = this;
return self__.meta80738;
});})(cs))
;


cljs.core.async.t_cljs$core$async80737.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async80737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async80737.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async80737.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async80737.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async80737.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async80737.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta80738","meta80738",-1779966180,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async80737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80737";

cljs.core.async.t_cljs$core$async80737.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async80737");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async80737 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async80737(ch__$1,cs__$1,meta80738){
return (new cljs.core.async.t_cljs$core$async80737(ch__$1,cs__$1,meta80738));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async80737(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__48312__auto___80962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___80962,cs,m,dchan,dctr,done){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___80962,cs,m,dchan,dctr,done){
return (function (state_80874){
var state_val_80875 = (state_80874[(1)]);
if((state_val_80875 === (7))){
var inst_80870 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80876_80963 = state_80874__$1;
(statearr_80876_80963[(2)] = inst_80870);

(statearr_80876_80963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (20))){
var inst_80773 = (state_80874[(7)]);
var inst_80785 = cljs.core.first.call(null,inst_80773);
var inst_80786 = cljs.core.nth.call(null,inst_80785,(0),null);
var inst_80787 = cljs.core.nth.call(null,inst_80785,(1),null);
var state_80874__$1 = (function (){var statearr_80877 = state_80874;
(statearr_80877[(8)] = inst_80786);

return statearr_80877;
})();
if(cljs.core.truth_(inst_80787)){
var statearr_80878_80964 = state_80874__$1;
(statearr_80878_80964[(1)] = (22));

} else {
var statearr_80879_80965 = state_80874__$1;
(statearr_80879_80965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (27))){
var inst_80742 = (state_80874[(9)]);
var inst_80822 = (state_80874[(10)]);
var inst_80815 = (state_80874[(11)]);
var inst_80817 = (state_80874[(12)]);
var inst_80822__$1 = cljs.core._nth.call(null,inst_80815,inst_80817);
var inst_80823 = cljs.core.async.put_BANG_.call(null,inst_80822__$1,inst_80742,done);
var state_80874__$1 = (function (){var statearr_80880 = state_80874;
(statearr_80880[(10)] = inst_80822__$1);

return statearr_80880;
})();
if(cljs.core.truth_(inst_80823)){
var statearr_80881_80966 = state_80874__$1;
(statearr_80881_80966[(1)] = (30));

} else {
var statearr_80882_80967 = state_80874__$1;
(statearr_80882_80967[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (1))){
var state_80874__$1 = state_80874;
var statearr_80883_80968 = state_80874__$1;
(statearr_80883_80968[(2)] = null);

(statearr_80883_80968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (24))){
var inst_80773 = (state_80874[(7)]);
var inst_80792 = (state_80874[(2)]);
var inst_80793 = cljs.core.next.call(null,inst_80773);
var inst_80751 = inst_80793;
var inst_80752 = null;
var inst_80753 = (0);
var inst_80754 = (0);
var state_80874__$1 = (function (){var statearr_80884 = state_80874;
(statearr_80884[(13)] = inst_80792);

(statearr_80884[(14)] = inst_80754);

(statearr_80884[(15)] = inst_80751);

(statearr_80884[(16)] = inst_80752);

(statearr_80884[(17)] = inst_80753);

return statearr_80884;
})();
var statearr_80885_80969 = state_80874__$1;
(statearr_80885_80969[(2)] = null);

(statearr_80885_80969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (39))){
var state_80874__$1 = state_80874;
var statearr_80889_80970 = state_80874__$1;
(statearr_80889_80970[(2)] = null);

(statearr_80889_80970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (4))){
var inst_80742 = (state_80874[(9)]);
var inst_80742__$1 = (state_80874[(2)]);
var inst_80743 = (inst_80742__$1 == null);
var state_80874__$1 = (function (){var statearr_80890 = state_80874;
(statearr_80890[(9)] = inst_80742__$1);

return statearr_80890;
})();
if(cljs.core.truth_(inst_80743)){
var statearr_80891_80971 = state_80874__$1;
(statearr_80891_80971[(1)] = (5));

} else {
var statearr_80892_80972 = state_80874__$1;
(statearr_80892_80972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (15))){
var inst_80754 = (state_80874[(14)]);
var inst_80751 = (state_80874[(15)]);
var inst_80752 = (state_80874[(16)]);
var inst_80753 = (state_80874[(17)]);
var inst_80769 = (state_80874[(2)]);
var inst_80770 = (inst_80754 + (1));
var tmp80886 = inst_80751;
var tmp80887 = inst_80752;
var tmp80888 = inst_80753;
var inst_80751__$1 = tmp80886;
var inst_80752__$1 = tmp80887;
var inst_80753__$1 = tmp80888;
var inst_80754__$1 = inst_80770;
var state_80874__$1 = (function (){var statearr_80893 = state_80874;
(statearr_80893[(14)] = inst_80754__$1);

(statearr_80893[(15)] = inst_80751__$1);

(statearr_80893[(16)] = inst_80752__$1);

(statearr_80893[(18)] = inst_80769);

(statearr_80893[(17)] = inst_80753__$1);

return statearr_80893;
})();
var statearr_80894_80973 = state_80874__$1;
(statearr_80894_80973[(2)] = null);

(statearr_80894_80973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (21))){
var inst_80796 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80898_80974 = state_80874__$1;
(statearr_80898_80974[(2)] = inst_80796);

(statearr_80898_80974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (31))){
var inst_80822 = (state_80874[(10)]);
var inst_80826 = done.call(null,null);
var inst_80827 = cljs.core.async.untap_STAR_.call(null,m,inst_80822);
var state_80874__$1 = (function (){var statearr_80899 = state_80874;
(statearr_80899[(19)] = inst_80826);

return statearr_80899;
})();
var statearr_80900_80975 = state_80874__$1;
(statearr_80900_80975[(2)] = inst_80827);

(statearr_80900_80975[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (32))){
var inst_80814 = (state_80874[(20)]);
var inst_80816 = (state_80874[(21)]);
var inst_80815 = (state_80874[(11)]);
var inst_80817 = (state_80874[(12)]);
var inst_80829 = (state_80874[(2)]);
var inst_80830 = (inst_80817 + (1));
var tmp80895 = inst_80814;
var tmp80896 = inst_80816;
var tmp80897 = inst_80815;
var inst_80814__$1 = tmp80895;
var inst_80815__$1 = tmp80897;
var inst_80816__$1 = tmp80896;
var inst_80817__$1 = inst_80830;
var state_80874__$1 = (function (){var statearr_80901 = state_80874;
(statearr_80901[(20)] = inst_80814__$1);

(statearr_80901[(21)] = inst_80816__$1);

(statearr_80901[(11)] = inst_80815__$1);

(statearr_80901[(22)] = inst_80829);

(statearr_80901[(12)] = inst_80817__$1);

return statearr_80901;
})();
var statearr_80902_80976 = state_80874__$1;
(statearr_80902_80976[(2)] = null);

(statearr_80902_80976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (40))){
var inst_80842 = (state_80874[(23)]);
var inst_80846 = done.call(null,null);
var inst_80847 = cljs.core.async.untap_STAR_.call(null,m,inst_80842);
var state_80874__$1 = (function (){var statearr_80903 = state_80874;
(statearr_80903[(24)] = inst_80846);

return statearr_80903;
})();
var statearr_80904_80977 = state_80874__$1;
(statearr_80904_80977[(2)] = inst_80847);

(statearr_80904_80977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (33))){
var inst_80833 = (state_80874[(25)]);
var inst_80835 = cljs.core.chunked_seq_QMARK_.call(null,inst_80833);
var state_80874__$1 = state_80874;
if(inst_80835){
var statearr_80905_80978 = state_80874__$1;
(statearr_80905_80978[(1)] = (36));

} else {
var statearr_80906_80979 = state_80874__$1;
(statearr_80906_80979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (13))){
var inst_80763 = (state_80874[(26)]);
var inst_80766 = cljs.core.async.close_BANG_.call(null,inst_80763);
var state_80874__$1 = state_80874;
var statearr_80907_80980 = state_80874__$1;
(statearr_80907_80980[(2)] = inst_80766);

(statearr_80907_80980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (22))){
var inst_80786 = (state_80874[(8)]);
var inst_80789 = cljs.core.async.close_BANG_.call(null,inst_80786);
var state_80874__$1 = state_80874;
var statearr_80908_80981 = state_80874__$1;
(statearr_80908_80981[(2)] = inst_80789);

(statearr_80908_80981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (36))){
var inst_80833 = (state_80874[(25)]);
var inst_80837 = cljs.core.chunk_first.call(null,inst_80833);
var inst_80838 = cljs.core.chunk_rest.call(null,inst_80833);
var inst_80839 = cljs.core.count.call(null,inst_80837);
var inst_80814 = inst_80838;
var inst_80815 = inst_80837;
var inst_80816 = inst_80839;
var inst_80817 = (0);
var state_80874__$1 = (function (){var statearr_80909 = state_80874;
(statearr_80909[(20)] = inst_80814);

(statearr_80909[(21)] = inst_80816);

(statearr_80909[(11)] = inst_80815);

(statearr_80909[(12)] = inst_80817);

return statearr_80909;
})();
var statearr_80910_80982 = state_80874__$1;
(statearr_80910_80982[(2)] = null);

(statearr_80910_80982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (41))){
var inst_80833 = (state_80874[(25)]);
var inst_80849 = (state_80874[(2)]);
var inst_80850 = cljs.core.next.call(null,inst_80833);
var inst_80814 = inst_80850;
var inst_80815 = null;
var inst_80816 = (0);
var inst_80817 = (0);
var state_80874__$1 = (function (){var statearr_80911 = state_80874;
(statearr_80911[(20)] = inst_80814);

(statearr_80911[(27)] = inst_80849);

(statearr_80911[(21)] = inst_80816);

(statearr_80911[(11)] = inst_80815);

(statearr_80911[(12)] = inst_80817);

return statearr_80911;
})();
var statearr_80912_80983 = state_80874__$1;
(statearr_80912_80983[(2)] = null);

(statearr_80912_80983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (43))){
var state_80874__$1 = state_80874;
var statearr_80913_80984 = state_80874__$1;
(statearr_80913_80984[(2)] = null);

(statearr_80913_80984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (29))){
var inst_80858 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80914_80985 = state_80874__$1;
(statearr_80914_80985[(2)] = inst_80858);

(statearr_80914_80985[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (44))){
var inst_80867 = (state_80874[(2)]);
var state_80874__$1 = (function (){var statearr_80915 = state_80874;
(statearr_80915[(28)] = inst_80867);

return statearr_80915;
})();
var statearr_80916_80986 = state_80874__$1;
(statearr_80916_80986[(2)] = null);

(statearr_80916_80986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (6))){
var inst_80806 = (state_80874[(29)]);
var inst_80805 = cljs.core.deref.call(null,cs);
var inst_80806__$1 = cljs.core.keys.call(null,inst_80805);
var inst_80807 = cljs.core.count.call(null,inst_80806__$1);
var inst_80808 = cljs.core.reset_BANG_.call(null,dctr,inst_80807);
var inst_80813 = cljs.core.seq.call(null,inst_80806__$1);
var inst_80814 = inst_80813;
var inst_80815 = null;
var inst_80816 = (0);
var inst_80817 = (0);
var state_80874__$1 = (function (){var statearr_80917 = state_80874;
(statearr_80917[(29)] = inst_80806__$1);

(statearr_80917[(30)] = inst_80808);

(statearr_80917[(20)] = inst_80814);

(statearr_80917[(21)] = inst_80816);

(statearr_80917[(11)] = inst_80815);

(statearr_80917[(12)] = inst_80817);

return statearr_80917;
})();
var statearr_80918_80987 = state_80874__$1;
(statearr_80918_80987[(2)] = null);

(statearr_80918_80987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (28))){
var inst_80833 = (state_80874[(25)]);
var inst_80814 = (state_80874[(20)]);
var inst_80833__$1 = cljs.core.seq.call(null,inst_80814);
var state_80874__$1 = (function (){var statearr_80919 = state_80874;
(statearr_80919[(25)] = inst_80833__$1);

return statearr_80919;
})();
if(inst_80833__$1){
var statearr_80920_80988 = state_80874__$1;
(statearr_80920_80988[(1)] = (33));

} else {
var statearr_80921_80989 = state_80874__$1;
(statearr_80921_80989[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (25))){
var inst_80816 = (state_80874[(21)]);
var inst_80817 = (state_80874[(12)]);
var inst_80819 = (inst_80817 < inst_80816);
var inst_80820 = inst_80819;
var state_80874__$1 = state_80874;
if(cljs.core.truth_(inst_80820)){
var statearr_80922_80990 = state_80874__$1;
(statearr_80922_80990[(1)] = (27));

} else {
var statearr_80923_80991 = state_80874__$1;
(statearr_80923_80991[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (34))){
var state_80874__$1 = state_80874;
var statearr_80924_80992 = state_80874__$1;
(statearr_80924_80992[(2)] = null);

(statearr_80924_80992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (17))){
var state_80874__$1 = state_80874;
var statearr_80925_80993 = state_80874__$1;
(statearr_80925_80993[(2)] = null);

(statearr_80925_80993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (3))){
var inst_80872 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80874__$1,inst_80872);
} else {
if((state_val_80875 === (12))){
var inst_80801 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80926_80994 = state_80874__$1;
(statearr_80926_80994[(2)] = inst_80801);

(statearr_80926_80994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (2))){
var state_80874__$1 = state_80874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80874__$1,(4),ch);
} else {
if((state_val_80875 === (23))){
var state_80874__$1 = state_80874;
var statearr_80927_80995 = state_80874__$1;
(statearr_80927_80995[(2)] = null);

(statearr_80927_80995[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (35))){
var inst_80856 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80928_80996 = state_80874__$1;
(statearr_80928_80996[(2)] = inst_80856);

(statearr_80928_80996[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (19))){
var inst_80773 = (state_80874[(7)]);
var inst_80777 = cljs.core.chunk_first.call(null,inst_80773);
var inst_80778 = cljs.core.chunk_rest.call(null,inst_80773);
var inst_80779 = cljs.core.count.call(null,inst_80777);
var inst_80751 = inst_80778;
var inst_80752 = inst_80777;
var inst_80753 = inst_80779;
var inst_80754 = (0);
var state_80874__$1 = (function (){var statearr_80929 = state_80874;
(statearr_80929[(14)] = inst_80754);

(statearr_80929[(15)] = inst_80751);

(statearr_80929[(16)] = inst_80752);

(statearr_80929[(17)] = inst_80753);

return statearr_80929;
})();
var statearr_80930_80997 = state_80874__$1;
(statearr_80930_80997[(2)] = null);

(statearr_80930_80997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (11))){
var inst_80751 = (state_80874[(15)]);
var inst_80773 = (state_80874[(7)]);
var inst_80773__$1 = cljs.core.seq.call(null,inst_80751);
var state_80874__$1 = (function (){var statearr_80931 = state_80874;
(statearr_80931[(7)] = inst_80773__$1);

return statearr_80931;
})();
if(inst_80773__$1){
var statearr_80932_80998 = state_80874__$1;
(statearr_80932_80998[(1)] = (16));

} else {
var statearr_80933_80999 = state_80874__$1;
(statearr_80933_80999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (9))){
var inst_80803 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80934_81000 = state_80874__$1;
(statearr_80934_81000[(2)] = inst_80803);

(statearr_80934_81000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (5))){
var inst_80749 = cljs.core.deref.call(null,cs);
var inst_80750 = cljs.core.seq.call(null,inst_80749);
var inst_80751 = inst_80750;
var inst_80752 = null;
var inst_80753 = (0);
var inst_80754 = (0);
var state_80874__$1 = (function (){var statearr_80935 = state_80874;
(statearr_80935[(14)] = inst_80754);

(statearr_80935[(15)] = inst_80751);

(statearr_80935[(16)] = inst_80752);

(statearr_80935[(17)] = inst_80753);

return statearr_80935;
})();
var statearr_80936_81001 = state_80874__$1;
(statearr_80936_81001[(2)] = null);

(statearr_80936_81001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (14))){
var state_80874__$1 = state_80874;
var statearr_80937_81002 = state_80874__$1;
(statearr_80937_81002[(2)] = null);

(statearr_80937_81002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (45))){
var inst_80864 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80938_81003 = state_80874__$1;
(statearr_80938_81003[(2)] = inst_80864);

(statearr_80938_81003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (26))){
var inst_80806 = (state_80874[(29)]);
var inst_80860 = (state_80874[(2)]);
var inst_80861 = cljs.core.seq.call(null,inst_80806);
var state_80874__$1 = (function (){var statearr_80939 = state_80874;
(statearr_80939[(31)] = inst_80860);

return statearr_80939;
})();
if(inst_80861){
var statearr_80940_81004 = state_80874__$1;
(statearr_80940_81004[(1)] = (42));

} else {
var statearr_80941_81005 = state_80874__$1;
(statearr_80941_81005[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (16))){
var inst_80773 = (state_80874[(7)]);
var inst_80775 = cljs.core.chunked_seq_QMARK_.call(null,inst_80773);
var state_80874__$1 = state_80874;
if(inst_80775){
var statearr_80942_81006 = state_80874__$1;
(statearr_80942_81006[(1)] = (19));

} else {
var statearr_80943_81007 = state_80874__$1;
(statearr_80943_81007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (38))){
var inst_80853 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80944_81008 = state_80874__$1;
(statearr_80944_81008[(2)] = inst_80853);

(statearr_80944_81008[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (30))){
var state_80874__$1 = state_80874;
var statearr_80945_81009 = state_80874__$1;
(statearr_80945_81009[(2)] = null);

(statearr_80945_81009[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (10))){
var inst_80754 = (state_80874[(14)]);
var inst_80752 = (state_80874[(16)]);
var inst_80762 = cljs.core._nth.call(null,inst_80752,inst_80754);
var inst_80763 = cljs.core.nth.call(null,inst_80762,(0),null);
var inst_80764 = cljs.core.nth.call(null,inst_80762,(1),null);
var state_80874__$1 = (function (){var statearr_80946 = state_80874;
(statearr_80946[(26)] = inst_80763);

return statearr_80946;
})();
if(cljs.core.truth_(inst_80764)){
var statearr_80947_81010 = state_80874__$1;
(statearr_80947_81010[(1)] = (13));

} else {
var statearr_80948_81011 = state_80874__$1;
(statearr_80948_81011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (18))){
var inst_80799 = (state_80874[(2)]);
var state_80874__$1 = state_80874;
var statearr_80949_81012 = state_80874__$1;
(statearr_80949_81012[(2)] = inst_80799);

(statearr_80949_81012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (42))){
var state_80874__$1 = state_80874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80874__$1,(45),dchan);
} else {
if((state_val_80875 === (37))){
var inst_80742 = (state_80874[(9)]);
var inst_80833 = (state_80874[(25)]);
var inst_80842 = (state_80874[(23)]);
var inst_80842__$1 = cljs.core.first.call(null,inst_80833);
var inst_80843 = cljs.core.async.put_BANG_.call(null,inst_80842__$1,inst_80742,done);
var state_80874__$1 = (function (){var statearr_80950 = state_80874;
(statearr_80950[(23)] = inst_80842__$1);

return statearr_80950;
})();
if(cljs.core.truth_(inst_80843)){
var statearr_80951_81013 = state_80874__$1;
(statearr_80951_81013[(1)] = (39));

} else {
var statearr_80952_81014 = state_80874__$1;
(statearr_80952_81014[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80875 === (8))){
var inst_80754 = (state_80874[(14)]);
var inst_80753 = (state_80874[(17)]);
var inst_80756 = (inst_80754 < inst_80753);
var inst_80757 = inst_80756;
var state_80874__$1 = state_80874;
if(cljs.core.truth_(inst_80757)){
var statearr_80953_81015 = state_80874__$1;
(statearr_80953_81015[(1)] = (10));

} else {
var statearr_80954_81016 = state_80874__$1;
(statearr_80954_81016[(1)] = (11));

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
});})(c__48312__auto___80962,cs,m,dchan,dctr,done))
;
return ((function (switch__48198__auto__,c__48312__auto___80962,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48199__auto__ = null;
var cljs$core$async$mult_$_state_machine__48199__auto____0 = (function (){
var statearr_80958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80958[(0)] = cljs$core$async$mult_$_state_machine__48199__auto__);

(statearr_80958[(1)] = (1));

return statearr_80958;
});
var cljs$core$async$mult_$_state_machine__48199__auto____1 = (function (state_80874){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_80874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e80959){if((e80959 instanceof Object)){
var ex__48202__auto__ = e80959;
var statearr_80960_81017 = state_80874;
(statearr_80960_81017[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81018 = state_80874;
state_80874 = G__81018;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48199__auto__ = function(state_80874){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48199__auto____1.call(this,state_80874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48199__auto____0;
cljs$core$async$mult_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48199__auto____1;
return cljs$core$async$mult_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___80962,cs,m,dchan,dctr,done))
})();
var state__48314__auto__ = (function (){var statearr_80961 = f__48313__auto__.call(null);
(statearr_80961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___80962);

return statearr_80961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___80962,cs,m,dchan,dctr,done))
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
var args81019 = [];
var len__35776__auto___81022 = arguments.length;
var i__35777__auto___81023 = (0);
while(true){
if((i__35777__auto___81023 < len__35776__auto___81022)){
args81019.push((arguments[i__35777__auto___81023]));

var G__81024 = (i__35777__auto___81023 + (1));
i__35777__auto___81023 = G__81024;
continue;
} else {
}
break;
}

var G__81021 = args81019.length;
switch (G__81021) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81019.length)].join('')));

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
var len__35776__auto___81036 = arguments.length;
var i__35777__auto___81037 = (0);
while(true){
if((i__35777__auto___81037 < len__35776__auto___81036)){
args__35783__auto__.push((arguments[i__35777__auto___81037]));

var G__81038 = (i__35777__auto___81037 + (1));
i__35777__auto___81037 = G__81038;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((3) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35784__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__81030){
var map__81031 = p__81030;
var map__81031__$1 = ((((!((map__81031 == null)))?((((map__81031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81031):map__81031);
var opts = map__81031__$1;
var statearr_81033_81039 = state;
(statearr_81033_81039[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__81031,map__81031__$1,opts){
return (function (val){
var statearr_81034_81040 = state;
(statearr_81034_81040[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__81031,map__81031__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_81035_81041 = state;
(statearr_81035_81041[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq81026){
var G__81027 = cljs.core.first.call(null,seq81026);
var seq81026__$1 = cljs.core.next.call(null,seq81026);
var G__81028 = cljs.core.first.call(null,seq81026__$1);
var seq81026__$2 = cljs.core.next.call(null,seq81026__$1);
var G__81029 = cljs.core.first.call(null,seq81026__$2);
var seq81026__$3 = cljs.core.next.call(null,seq81026__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__81027,G__81028,G__81029,seq81026__$3);
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
if(typeof cljs.core.async.t_cljs$core$async81209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81209 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta81210){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta81210 = meta81210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_81211,meta81210__$1){
var self__ = this;
var _81211__$1 = this;
return (new cljs.core.async.t_cljs$core$async81209(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta81210__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_81211){
var self__ = this;
var _81211__$1 = this;
return self__.meta81210;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async81209.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async81209.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta81210","meta81210",-2032216820,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async81209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async81209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81209";

cljs.core.async.t_cljs$core$async81209.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async81209");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async81209 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async81209(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta81210){
return (new cljs.core.async.t_cljs$core$async81209(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta81210));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async81209(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48312__auto___81376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___81376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___81376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_81313){
var state_val_81314 = (state_81313[(1)]);
if((state_val_81314 === (7))){
var inst_81228 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
var statearr_81315_81377 = state_81313__$1;
(statearr_81315_81377[(2)] = inst_81228);

(statearr_81315_81377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (20))){
var inst_81240 = (state_81313[(7)]);
var state_81313__$1 = state_81313;
var statearr_81316_81378 = state_81313__$1;
(statearr_81316_81378[(2)] = inst_81240);

(statearr_81316_81378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (27))){
var state_81313__$1 = state_81313;
var statearr_81317_81379 = state_81313__$1;
(statearr_81317_81379[(2)] = null);

(statearr_81317_81379[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (1))){
var inst_81215 = (state_81313[(8)]);
var inst_81215__$1 = calc_state.call(null);
var inst_81217 = (inst_81215__$1 == null);
var inst_81218 = cljs.core.not.call(null,inst_81217);
var state_81313__$1 = (function (){var statearr_81318 = state_81313;
(statearr_81318[(8)] = inst_81215__$1);

return statearr_81318;
})();
if(inst_81218){
var statearr_81319_81380 = state_81313__$1;
(statearr_81319_81380[(1)] = (2));

} else {
var statearr_81320_81381 = state_81313__$1;
(statearr_81320_81381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (24))){
var inst_81287 = (state_81313[(9)]);
var inst_81264 = (state_81313[(10)]);
var inst_81273 = (state_81313[(11)]);
var inst_81287__$1 = inst_81264.call(null,inst_81273);
var state_81313__$1 = (function (){var statearr_81321 = state_81313;
(statearr_81321[(9)] = inst_81287__$1);

return statearr_81321;
})();
if(cljs.core.truth_(inst_81287__$1)){
var statearr_81322_81382 = state_81313__$1;
(statearr_81322_81382[(1)] = (29));

} else {
var statearr_81323_81383 = state_81313__$1;
(statearr_81323_81383[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (4))){
var inst_81231 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
if(cljs.core.truth_(inst_81231)){
var statearr_81324_81384 = state_81313__$1;
(statearr_81324_81384[(1)] = (8));

} else {
var statearr_81325_81385 = state_81313__$1;
(statearr_81325_81385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (15))){
var inst_81258 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
if(cljs.core.truth_(inst_81258)){
var statearr_81326_81386 = state_81313__$1;
(statearr_81326_81386[(1)] = (19));

} else {
var statearr_81327_81387 = state_81313__$1;
(statearr_81327_81387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (21))){
var inst_81263 = (state_81313[(12)]);
var inst_81263__$1 = (state_81313[(2)]);
var inst_81264 = cljs.core.get.call(null,inst_81263__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_81265 = cljs.core.get.call(null,inst_81263__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_81266 = cljs.core.get.call(null,inst_81263__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_81313__$1 = (function (){var statearr_81328 = state_81313;
(statearr_81328[(13)] = inst_81265);

(statearr_81328[(10)] = inst_81264);

(statearr_81328[(12)] = inst_81263__$1);

return statearr_81328;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81313__$1,(22),inst_81266);
} else {
if((state_val_81314 === (31))){
var inst_81295 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
if(cljs.core.truth_(inst_81295)){
var statearr_81329_81388 = state_81313__$1;
(statearr_81329_81388[(1)] = (32));

} else {
var statearr_81330_81389 = state_81313__$1;
(statearr_81330_81389[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (32))){
var inst_81272 = (state_81313[(14)]);
var state_81313__$1 = state_81313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81313__$1,(35),out,inst_81272);
} else {
if((state_val_81314 === (33))){
var inst_81263 = (state_81313[(12)]);
var inst_81240 = inst_81263;
var state_81313__$1 = (function (){var statearr_81331 = state_81313;
(statearr_81331[(7)] = inst_81240);

return statearr_81331;
})();
var statearr_81332_81390 = state_81313__$1;
(statearr_81332_81390[(2)] = null);

(statearr_81332_81390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (13))){
var inst_81240 = (state_81313[(7)]);
var inst_81247 = inst_81240.cljs$lang$protocol_mask$partition0$;
var inst_81248 = (inst_81247 & (64));
var inst_81249 = inst_81240.cljs$core$ISeq$;
var inst_81250 = (cljs.core.PROTOCOL_SENTINEL === inst_81249);
var inst_81251 = (inst_81248) || (inst_81250);
var state_81313__$1 = state_81313;
if(cljs.core.truth_(inst_81251)){
var statearr_81333_81391 = state_81313__$1;
(statearr_81333_81391[(1)] = (16));

} else {
var statearr_81334_81392 = state_81313__$1;
(statearr_81334_81392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (22))){
var inst_81272 = (state_81313[(14)]);
var inst_81273 = (state_81313[(11)]);
var inst_81271 = (state_81313[(2)]);
var inst_81272__$1 = cljs.core.nth.call(null,inst_81271,(0),null);
var inst_81273__$1 = cljs.core.nth.call(null,inst_81271,(1),null);
var inst_81274 = (inst_81272__$1 == null);
var inst_81275 = cljs.core._EQ_.call(null,inst_81273__$1,change);
var inst_81276 = (inst_81274) || (inst_81275);
var state_81313__$1 = (function (){var statearr_81335 = state_81313;
(statearr_81335[(14)] = inst_81272__$1);

(statearr_81335[(11)] = inst_81273__$1);

return statearr_81335;
})();
if(cljs.core.truth_(inst_81276)){
var statearr_81336_81393 = state_81313__$1;
(statearr_81336_81393[(1)] = (23));

} else {
var statearr_81337_81394 = state_81313__$1;
(statearr_81337_81394[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (36))){
var inst_81263 = (state_81313[(12)]);
var inst_81240 = inst_81263;
var state_81313__$1 = (function (){var statearr_81338 = state_81313;
(statearr_81338[(7)] = inst_81240);

return statearr_81338;
})();
var statearr_81339_81395 = state_81313__$1;
(statearr_81339_81395[(2)] = null);

(statearr_81339_81395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (29))){
var inst_81287 = (state_81313[(9)]);
var state_81313__$1 = state_81313;
var statearr_81340_81396 = state_81313__$1;
(statearr_81340_81396[(2)] = inst_81287);

(statearr_81340_81396[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (6))){
var state_81313__$1 = state_81313;
var statearr_81341_81397 = state_81313__$1;
(statearr_81341_81397[(2)] = false);

(statearr_81341_81397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (28))){
var inst_81283 = (state_81313[(2)]);
var inst_81284 = calc_state.call(null);
var inst_81240 = inst_81284;
var state_81313__$1 = (function (){var statearr_81342 = state_81313;
(statearr_81342[(7)] = inst_81240);

(statearr_81342[(15)] = inst_81283);

return statearr_81342;
})();
var statearr_81343_81398 = state_81313__$1;
(statearr_81343_81398[(2)] = null);

(statearr_81343_81398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (25))){
var inst_81309 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
var statearr_81344_81399 = state_81313__$1;
(statearr_81344_81399[(2)] = inst_81309);

(statearr_81344_81399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (34))){
var inst_81307 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
var statearr_81345_81400 = state_81313__$1;
(statearr_81345_81400[(2)] = inst_81307);

(statearr_81345_81400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (17))){
var state_81313__$1 = state_81313;
var statearr_81346_81401 = state_81313__$1;
(statearr_81346_81401[(2)] = false);

(statearr_81346_81401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (3))){
var state_81313__$1 = state_81313;
var statearr_81347_81402 = state_81313__$1;
(statearr_81347_81402[(2)] = false);

(statearr_81347_81402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (12))){
var inst_81311 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81313__$1,inst_81311);
} else {
if((state_val_81314 === (2))){
var inst_81215 = (state_81313[(8)]);
var inst_81220 = inst_81215.cljs$lang$protocol_mask$partition0$;
var inst_81221 = (inst_81220 & (64));
var inst_81222 = inst_81215.cljs$core$ISeq$;
var inst_81223 = (cljs.core.PROTOCOL_SENTINEL === inst_81222);
var inst_81224 = (inst_81221) || (inst_81223);
var state_81313__$1 = state_81313;
if(cljs.core.truth_(inst_81224)){
var statearr_81348_81403 = state_81313__$1;
(statearr_81348_81403[(1)] = (5));

} else {
var statearr_81349_81404 = state_81313__$1;
(statearr_81349_81404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (23))){
var inst_81272 = (state_81313[(14)]);
var inst_81278 = (inst_81272 == null);
var state_81313__$1 = state_81313;
if(cljs.core.truth_(inst_81278)){
var statearr_81350_81405 = state_81313__$1;
(statearr_81350_81405[(1)] = (26));

} else {
var statearr_81351_81406 = state_81313__$1;
(statearr_81351_81406[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (35))){
var inst_81298 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
if(cljs.core.truth_(inst_81298)){
var statearr_81352_81407 = state_81313__$1;
(statearr_81352_81407[(1)] = (36));

} else {
var statearr_81353_81408 = state_81313__$1;
(statearr_81353_81408[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (19))){
var inst_81240 = (state_81313[(7)]);
var inst_81260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_81240);
var state_81313__$1 = state_81313;
var statearr_81354_81409 = state_81313__$1;
(statearr_81354_81409[(2)] = inst_81260);

(statearr_81354_81409[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (11))){
var inst_81240 = (state_81313[(7)]);
var inst_81244 = (inst_81240 == null);
var inst_81245 = cljs.core.not.call(null,inst_81244);
var state_81313__$1 = state_81313;
if(inst_81245){
var statearr_81355_81410 = state_81313__$1;
(statearr_81355_81410[(1)] = (13));

} else {
var statearr_81356_81411 = state_81313__$1;
(statearr_81356_81411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (9))){
var inst_81215 = (state_81313[(8)]);
var state_81313__$1 = state_81313;
var statearr_81357_81412 = state_81313__$1;
(statearr_81357_81412[(2)] = inst_81215);

(statearr_81357_81412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (5))){
var state_81313__$1 = state_81313;
var statearr_81358_81413 = state_81313__$1;
(statearr_81358_81413[(2)] = true);

(statearr_81358_81413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (14))){
var state_81313__$1 = state_81313;
var statearr_81359_81414 = state_81313__$1;
(statearr_81359_81414[(2)] = false);

(statearr_81359_81414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (26))){
var inst_81273 = (state_81313[(11)]);
var inst_81280 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_81273);
var state_81313__$1 = state_81313;
var statearr_81360_81415 = state_81313__$1;
(statearr_81360_81415[(2)] = inst_81280);

(statearr_81360_81415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (16))){
var state_81313__$1 = state_81313;
var statearr_81361_81416 = state_81313__$1;
(statearr_81361_81416[(2)] = true);

(statearr_81361_81416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (38))){
var inst_81303 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
var statearr_81362_81417 = state_81313__$1;
(statearr_81362_81417[(2)] = inst_81303);

(statearr_81362_81417[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (30))){
var inst_81265 = (state_81313[(13)]);
var inst_81264 = (state_81313[(10)]);
var inst_81273 = (state_81313[(11)]);
var inst_81290 = cljs.core.empty_QMARK_.call(null,inst_81264);
var inst_81291 = inst_81265.call(null,inst_81273);
var inst_81292 = cljs.core.not.call(null,inst_81291);
var inst_81293 = (inst_81290) && (inst_81292);
var state_81313__$1 = state_81313;
var statearr_81363_81418 = state_81313__$1;
(statearr_81363_81418[(2)] = inst_81293);

(statearr_81363_81418[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (10))){
var inst_81215 = (state_81313[(8)]);
var inst_81236 = (state_81313[(2)]);
var inst_81237 = cljs.core.get.call(null,inst_81236,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_81238 = cljs.core.get.call(null,inst_81236,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_81239 = cljs.core.get.call(null,inst_81236,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_81240 = inst_81215;
var state_81313__$1 = (function (){var statearr_81364 = state_81313;
(statearr_81364[(16)] = inst_81237);

(statearr_81364[(7)] = inst_81240);

(statearr_81364[(17)] = inst_81238);

(statearr_81364[(18)] = inst_81239);

return statearr_81364;
})();
var statearr_81365_81419 = state_81313__$1;
(statearr_81365_81419[(2)] = null);

(statearr_81365_81419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (18))){
var inst_81255 = (state_81313[(2)]);
var state_81313__$1 = state_81313;
var statearr_81366_81420 = state_81313__$1;
(statearr_81366_81420[(2)] = inst_81255);

(statearr_81366_81420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (37))){
var state_81313__$1 = state_81313;
var statearr_81367_81421 = state_81313__$1;
(statearr_81367_81421[(2)] = null);

(statearr_81367_81421[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81314 === (8))){
var inst_81215 = (state_81313[(8)]);
var inst_81233 = cljs.core.apply.call(null,cljs.core.hash_map,inst_81215);
var state_81313__$1 = state_81313;
var statearr_81368_81422 = state_81313__$1;
(statearr_81368_81422[(2)] = inst_81233);

(statearr_81368_81422[(1)] = (10));


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
});})(c__48312__auto___81376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48198__auto__,c__48312__auto___81376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48199__auto__ = null;
var cljs$core$async$mix_$_state_machine__48199__auto____0 = (function (){
var statearr_81372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81372[(0)] = cljs$core$async$mix_$_state_machine__48199__auto__);

(statearr_81372[(1)] = (1));

return statearr_81372;
});
var cljs$core$async$mix_$_state_machine__48199__auto____1 = (function (state_81313){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_81313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e81373){if((e81373 instanceof Object)){
var ex__48202__auto__ = e81373;
var statearr_81374_81423 = state_81313;
(statearr_81374_81423[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81424 = state_81313;
state_81313 = G__81424;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48199__auto__ = function(state_81313){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48199__auto____1.call(this,state_81313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48199__auto____0;
cljs$core$async$mix_$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48199__auto____1;
return cljs$core$async$mix_$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___81376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48314__auto__ = (function (){var statearr_81375 = f__48313__auto__.call(null);
(statearr_81375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___81376);

return statearr_81375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___81376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args81425 = [];
var len__35776__auto___81428 = arguments.length;
var i__35777__auto___81429 = (0);
while(true){
if((i__35777__auto___81429 < len__35776__auto___81428)){
args81425.push((arguments[i__35777__auto___81429]));

var G__81430 = (i__35777__auto___81429 + (1));
i__35777__auto___81429 = G__81430;
continue;
} else {
}
break;
}

var G__81427 = args81425.length;
switch (G__81427) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81425.length)].join('')));

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
var args81433 = [];
var len__35776__auto___81558 = arguments.length;
var i__35777__auto___81559 = (0);
while(true){
if((i__35777__auto___81559 < len__35776__auto___81558)){
args81433.push((arguments[i__35777__auto___81559]));

var G__81560 = (i__35777__auto___81559 + (1));
i__35777__auto___81559 = G__81560;
continue;
} else {
}
break;
}

var G__81435 = args81433.length;
switch (G__81435) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81433.length)].join('')));

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
return (function (p1__81432_SHARP_){
if(cljs.core.truth_(p1__81432_SHARP_.call(null,topic))){
return p1__81432_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__81432_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34555__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async81436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81436 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta81437){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta81437 = meta81437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_81438,meta81437__$1){
var self__ = this;
var _81438__$1 = this;
return (new cljs.core.async.t_cljs$core$async81436(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta81437__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_81438){
var self__ = this;
var _81438__$1 = this;
return self__.meta81437;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async81436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async81436.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta81437","meta81437",517834558,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async81436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async81436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81436";

cljs.core.async.t_cljs$core$async81436.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async81436");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async81436 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async81436(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta81437){
return (new cljs.core.async.t_cljs$core$async81436(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta81437));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async81436(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48312__auto___81562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___81562,mults,ensure_mult,p){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___81562,mults,ensure_mult,p){
return (function (state_81510){
var state_val_81511 = (state_81510[(1)]);
if((state_val_81511 === (7))){
var inst_81506 = (state_81510[(2)]);
var state_81510__$1 = state_81510;
var statearr_81512_81563 = state_81510__$1;
(statearr_81512_81563[(2)] = inst_81506);

(statearr_81512_81563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (20))){
var state_81510__$1 = state_81510;
var statearr_81513_81564 = state_81510__$1;
(statearr_81513_81564[(2)] = null);

(statearr_81513_81564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (1))){
var state_81510__$1 = state_81510;
var statearr_81514_81565 = state_81510__$1;
(statearr_81514_81565[(2)] = null);

(statearr_81514_81565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (24))){
var inst_81489 = (state_81510[(7)]);
var inst_81498 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_81489);
var state_81510__$1 = state_81510;
var statearr_81515_81566 = state_81510__$1;
(statearr_81515_81566[(2)] = inst_81498);

(statearr_81515_81566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (4))){
var inst_81441 = (state_81510[(8)]);
var inst_81441__$1 = (state_81510[(2)]);
var inst_81442 = (inst_81441__$1 == null);
var state_81510__$1 = (function (){var statearr_81516 = state_81510;
(statearr_81516[(8)] = inst_81441__$1);

return statearr_81516;
})();
if(cljs.core.truth_(inst_81442)){
var statearr_81517_81567 = state_81510__$1;
(statearr_81517_81567[(1)] = (5));

} else {
var statearr_81518_81568 = state_81510__$1;
(statearr_81518_81568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (15))){
var inst_81483 = (state_81510[(2)]);
var state_81510__$1 = state_81510;
var statearr_81519_81569 = state_81510__$1;
(statearr_81519_81569[(2)] = inst_81483);

(statearr_81519_81569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (21))){
var inst_81503 = (state_81510[(2)]);
var state_81510__$1 = (function (){var statearr_81520 = state_81510;
(statearr_81520[(9)] = inst_81503);

return statearr_81520;
})();
var statearr_81521_81570 = state_81510__$1;
(statearr_81521_81570[(2)] = null);

(statearr_81521_81570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (13))){
var inst_81465 = (state_81510[(10)]);
var inst_81467 = cljs.core.chunked_seq_QMARK_.call(null,inst_81465);
var state_81510__$1 = state_81510;
if(inst_81467){
var statearr_81522_81571 = state_81510__$1;
(statearr_81522_81571[(1)] = (16));

} else {
var statearr_81523_81572 = state_81510__$1;
(statearr_81523_81572[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (22))){
var inst_81495 = (state_81510[(2)]);
var state_81510__$1 = state_81510;
if(cljs.core.truth_(inst_81495)){
var statearr_81524_81573 = state_81510__$1;
(statearr_81524_81573[(1)] = (23));

} else {
var statearr_81525_81574 = state_81510__$1;
(statearr_81525_81574[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (6))){
var inst_81489 = (state_81510[(7)]);
var inst_81441 = (state_81510[(8)]);
var inst_81491 = (state_81510[(11)]);
var inst_81489__$1 = topic_fn.call(null,inst_81441);
var inst_81490 = cljs.core.deref.call(null,mults);
var inst_81491__$1 = cljs.core.get.call(null,inst_81490,inst_81489__$1);
var state_81510__$1 = (function (){var statearr_81526 = state_81510;
(statearr_81526[(7)] = inst_81489__$1);

(statearr_81526[(11)] = inst_81491__$1);

return statearr_81526;
})();
if(cljs.core.truth_(inst_81491__$1)){
var statearr_81527_81575 = state_81510__$1;
(statearr_81527_81575[(1)] = (19));

} else {
var statearr_81528_81576 = state_81510__$1;
(statearr_81528_81576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (25))){
var inst_81500 = (state_81510[(2)]);
var state_81510__$1 = state_81510;
var statearr_81529_81577 = state_81510__$1;
(statearr_81529_81577[(2)] = inst_81500);

(statearr_81529_81577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (17))){
var inst_81465 = (state_81510[(10)]);
var inst_81474 = cljs.core.first.call(null,inst_81465);
var inst_81475 = cljs.core.async.muxch_STAR_.call(null,inst_81474);
var inst_81476 = cljs.core.async.close_BANG_.call(null,inst_81475);
var inst_81477 = cljs.core.next.call(null,inst_81465);
var inst_81451 = inst_81477;
var inst_81452 = null;
var inst_81453 = (0);
var inst_81454 = (0);
var state_81510__$1 = (function (){var statearr_81530 = state_81510;
(statearr_81530[(12)] = inst_81453);

(statearr_81530[(13)] = inst_81452);

(statearr_81530[(14)] = inst_81476);

(statearr_81530[(15)] = inst_81454);

(statearr_81530[(16)] = inst_81451);

return statearr_81530;
})();
var statearr_81531_81578 = state_81510__$1;
(statearr_81531_81578[(2)] = null);

(statearr_81531_81578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (3))){
var inst_81508 = (state_81510[(2)]);
var state_81510__$1 = state_81510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81510__$1,inst_81508);
} else {
if((state_val_81511 === (12))){
var inst_81485 = (state_81510[(2)]);
var state_81510__$1 = state_81510;
var statearr_81532_81579 = state_81510__$1;
(statearr_81532_81579[(2)] = inst_81485);

(statearr_81532_81579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (2))){
var state_81510__$1 = state_81510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81510__$1,(4),ch);
} else {
if((state_val_81511 === (23))){
var state_81510__$1 = state_81510;
var statearr_81533_81580 = state_81510__$1;
(statearr_81533_81580[(2)] = null);

(statearr_81533_81580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (19))){
var inst_81441 = (state_81510[(8)]);
var inst_81491 = (state_81510[(11)]);
var inst_81493 = cljs.core.async.muxch_STAR_.call(null,inst_81491);
var state_81510__$1 = state_81510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81510__$1,(22),inst_81493,inst_81441);
} else {
if((state_val_81511 === (11))){
var inst_81465 = (state_81510[(10)]);
var inst_81451 = (state_81510[(16)]);
var inst_81465__$1 = cljs.core.seq.call(null,inst_81451);
var state_81510__$1 = (function (){var statearr_81534 = state_81510;
(statearr_81534[(10)] = inst_81465__$1);

return statearr_81534;
})();
if(inst_81465__$1){
var statearr_81535_81581 = state_81510__$1;
(statearr_81535_81581[(1)] = (13));

} else {
var statearr_81536_81582 = state_81510__$1;
(statearr_81536_81582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (9))){
var inst_81487 = (state_81510[(2)]);
var state_81510__$1 = state_81510;
var statearr_81537_81583 = state_81510__$1;
(statearr_81537_81583[(2)] = inst_81487);

(statearr_81537_81583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (5))){
var inst_81448 = cljs.core.deref.call(null,mults);
var inst_81449 = cljs.core.vals.call(null,inst_81448);
var inst_81450 = cljs.core.seq.call(null,inst_81449);
var inst_81451 = inst_81450;
var inst_81452 = null;
var inst_81453 = (0);
var inst_81454 = (0);
var state_81510__$1 = (function (){var statearr_81538 = state_81510;
(statearr_81538[(12)] = inst_81453);

(statearr_81538[(13)] = inst_81452);

(statearr_81538[(15)] = inst_81454);

(statearr_81538[(16)] = inst_81451);

return statearr_81538;
})();
var statearr_81539_81584 = state_81510__$1;
(statearr_81539_81584[(2)] = null);

(statearr_81539_81584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (14))){
var state_81510__$1 = state_81510;
var statearr_81543_81585 = state_81510__$1;
(statearr_81543_81585[(2)] = null);

(statearr_81543_81585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (16))){
var inst_81465 = (state_81510[(10)]);
var inst_81469 = cljs.core.chunk_first.call(null,inst_81465);
var inst_81470 = cljs.core.chunk_rest.call(null,inst_81465);
var inst_81471 = cljs.core.count.call(null,inst_81469);
var inst_81451 = inst_81470;
var inst_81452 = inst_81469;
var inst_81453 = inst_81471;
var inst_81454 = (0);
var state_81510__$1 = (function (){var statearr_81544 = state_81510;
(statearr_81544[(12)] = inst_81453);

(statearr_81544[(13)] = inst_81452);

(statearr_81544[(15)] = inst_81454);

(statearr_81544[(16)] = inst_81451);

return statearr_81544;
})();
var statearr_81545_81586 = state_81510__$1;
(statearr_81545_81586[(2)] = null);

(statearr_81545_81586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (10))){
var inst_81453 = (state_81510[(12)]);
var inst_81452 = (state_81510[(13)]);
var inst_81454 = (state_81510[(15)]);
var inst_81451 = (state_81510[(16)]);
var inst_81459 = cljs.core._nth.call(null,inst_81452,inst_81454);
var inst_81460 = cljs.core.async.muxch_STAR_.call(null,inst_81459);
var inst_81461 = cljs.core.async.close_BANG_.call(null,inst_81460);
var inst_81462 = (inst_81454 + (1));
var tmp81540 = inst_81453;
var tmp81541 = inst_81452;
var tmp81542 = inst_81451;
var inst_81451__$1 = tmp81542;
var inst_81452__$1 = tmp81541;
var inst_81453__$1 = tmp81540;
var inst_81454__$1 = inst_81462;
var state_81510__$1 = (function (){var statearr_81546 = state_81510;
(statearr_81546[(12)] = inst_81453__$1);

(statearr_81546[(13)] = inst_81452__$1);

(statearr_81546[(17)] = inst_81461);

(statearr_81546[(15)] = inst_81454__$1);

(statearr_81546[(16)] = inst_81451__$1);

return statearr_81546;
})();
var statearr_81547_81587 = state_81510__$1;
(statearr_81547_81587[(2)] = null);

(statearr_81547_81587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (18))){
var inst_81480 = (state_81510[(2)]);
var state_81510__$1 = state_81510;
var statearr_81548_81588 = state_81510__$1;
(statearr_81548_81588[(2)] = inst_81480);

(statearr_81548_81588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81511 === (8))){
var inst_81453 = (state_81510[(12)]);
var inst_81454 = (state_81510[(15)]);
var inst_81456 = (inst_81454 < inst_81453);
var inst_81457 = inst_81456;
var state_81510__$1 = state_81510;
if(cljs.core.truth_(inst_81457)){
var statearr_81549_81589 = state_81510__$1;
(statearr_81549_81589[(1)] = (10));

} else {
var statearr_81550_81590 = state_81510__$1;
(statearr_81550_81590[(1)] = (11));

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
});})(c__48312__auto___81562,mults,ensure_mult,p))
;
return ((function (switch__48198__auto__,c__48312__auto___81562,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_81554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81554[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_81554[(1)] = (1));

return statearr_81554;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_81510){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_81510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e81555){if((e81555 instanceof Object)){
var ex__48202__auto__ = e81555;
var statearr_81556_81591 = state_81510;
(statearr_81556_81591[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81592 = state_81510;
state_81510 = G__81592;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_81510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_81510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___81562,mults,ensure_mult,p))
})();
var state__48314__auto__ = (function (){var statearr_81557 = f__48313__auto__.call(null);
(statearr_81557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___81562);

return statearr_81557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___81562,mults,ensure_mult,p))
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
var args81593 = [];
var len__35776__auto___81596 = arguments.length;
var i__35777__auto___81597 = (0);
while(true){
if((i__35777__auto___81597 < len__35776__auto___81596)){
args81593.push((arguments[i__35777__auto___81597]));

var G__81598 = (i__35777__auto___81597 + (1));
i__35777__auto___81597 = G__81598;
continue;
} else {
}
break;
}

var G__81595 = args81593.length;
switch (G__81595) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81593.length)].join('')));

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
var args81600 = [];
var len__35776__auto___81603 = arguments.length;
var i__35777__auto___81604 = (0);
while(true){
if((i__35777__auto___81604 < len__35776__auto___81603)){
args81600.push((arguments[i__35777__auto___81604]));

var G__81605 = (i__35777__auto___81604 + (1));
i__35777__auto___81604 = G__81605;
continue;
} else {
}
break;
}

var G__81602 = args81600.length;
switch (G__81602) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81600.length)].join('')));

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
var args81607 = [];
var len__35776__auto___81678 = arguments.length;
var i__35777__auto___81679 = (0);
while(true){
if((i__35777__auto___81679 < len__35776__auto___81678)){
args81607.push((arguments[i__35777__auto___81679]));

var G__81680 = (i__35777__auto___81679 + (1));
i__35777__auto___81679 = G__81680;
continue;
} else {
}
break;
}

var G__81609 = args81607.length;
switch (G__81609) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81607.length)].join('')));

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
var c__48312__auto___81682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___81682,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___81682,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_81648){
var state_val_81649 = (state_81648[(1)]);
if((state_val_81649 === (7))){
var state_81648__$1 = state_81648;
var statearr_81650_81683 = state_81648__$1;
(statearr_81650_81683[(2)] = null);

(statearr_81650_81683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (1))){
var state_81648__$1 = state_81648;
var statearr_81651_81684 = state_81648__$1;
(statearr_81651_81684[(2)] = null);

(statearr_81651_81684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (4))){
var inst_81612 = (state_81648[(7)]);
var inst_81614 = (inst_81612 < cnt);
var state_81648__$1 = state_81648;
if(cljs.core.truth_(inst_81614)){
var statearr_81652_81685 = state_81648__$1;
(statearr_81652_81685[(1)] = (6));

} else {
var statearr_81653_81686 = state_81648__$1;
(statearr_81653_81686[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (15))){
var inst_81644 = (state_81648[(2)]);
var state_81648__$1 = state_81648;
var statearr_81654_81687 = state_81648__$1;
(statearr_81654_81687[(2)] = inst_81644);

(statearr_81654_81687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (13))){
var inst_81637 = cljs.core.async.close_BANG_.call(null,out);
var state_81648__$1 = state_81648;
var statearr_81655_81688 = state_81648__$1;
(statearr_81655_81688[(2)] = inst_81637);

(statearr_81655_81688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (6))){
var state_81648__$1 = state_81648;
var statearr_81656_81689 = state_81648__$1;
(statearr_81656_81689[(2)] = null);

(statearr_81656_81689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (3))){
var inst_81646 = (state_81648[(2)]);
var state_81648__$1 = state_81648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81648__$1,inst_81646);
} else {
if((state_val_81649 === (12))){
var inst_81634 = (state_81648[(8)]);
var inst_81634__$1 = (state_81648[(2)]);
var inst_81635 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_81634__$1);
var state_81648__$1 = (function (){var statearr_81657 = state_81648;
(statearr_81657[(8)] = inst_81634__$1);

return statearr_81657;
})();
if(cljs.core.truth_(inst_81635)){
var statearr_81658_81690 = state_81648__$1;
(statearr_81658_81690[(1)] = (13));

} else {
var statearr_81659_81691 = state_81648__$1;
(statearr_81659_81691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (2))){
var inst_81611 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_81612 = (0);
var state_81648__$1 = (function (){var statearr_81660 = state_81648;
(statearr_81660[(7)] = inst_81612);

(statearr_81660[(9)] = inst_81611);

return statearr_81660;
})();
var statearr_81661_81692 = state_81648__$1;
(statearr_81661_81692[(2)] = null);

(statearr_81661_81692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (11))){
var inst_81612 = (state_81648[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_81648,(10),Object,null,(9));
var inst_81621 = chs__$1.call(null,inst_81612);
var inst_81622 = done.call(null,inst_81612);
var inst_81623 = cljs.core.async.take_BANG_.call(null,inst_81621,inst_81622);
var state_81648__$1 = state_81648;
var statearr_81662_81693 = state_81648__$1;
(statearr_81662_81693[(2)] = inst_81623);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81648__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (9))){
var inst_81612 = (state_81648[(7)]);
var inst_81625 = (state_81648[(2)]);
var inst_81626 = (inst_81612 + (1));
var inst_81612__$1 = inst_81626;
var state_81648__$1 = (function (){var statearr_81663 = state_81648;
(statearr_81663[(7)] = inst_81612__$1);

(statearr_81663[(10)] = inst_81625);

return statearr_81663;
})();
var statearr_81664_81694 = state_81648__$1;
(statearr_81664_81694[(2)] = null);

(statearr_81664_81694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (5))){
var inst_81632 = (state_81648[(2)]);
var state_81648__$1 = (function (){var statearr_81665 = state_81648;
(statearr_81665[(11)] = inst_81632);

return statearr_81665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81648__$1,(12),dchan);
} else {
if((state_val_81649 === (14))){
var inst_81634 = (state_81648[(8)]);
var inst_81639 = cljs.core.apply.call(null,f,inst_81634);
var state_81648__$1 = state_81648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81648__$1,(16),out,inst_81639);
} else {
if((state_val_81649 === (16))){
var inst_81641 = (state_81648[(2)]);
var state_81648__$1 = (function (){var statearr_81666 = state_81648;
(statearr_81666[(12)] = inst_81641);

return statearr_81666;
})();
var statearr_81667_81695 = state_81648__$1;
(statearr_81667_81695[(2)] = null);

(statearr_81667_81695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (10))){
var inst_81616 = (state_81648[(2)]);
var inst_81617 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_81648__$1 = (function (){var statearr_81668 = state_81648;
(statearr_81668[(13)] = inst_81616);

return statearr_81668;
})();
var statearr_81669_81696 = state_81648__$1;
(statearr_81669_81696[(2)] = inst_81617);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81648__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81649 === (8))){
var inst_81630 = (state_81648[(2)]);
var state_81648__$1 = state_81648;
var statearr_81670_81697 = state_81648__$1;
(statearr_81670_81697[(2)] = inst_81630);

(statearr_81670_81697[(1)] = (5));


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
});})(c__48312__auto___81682,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48198__auto__,c__48312__auto___81682,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_81674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81674[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_81674[(1)] = (1));

return statearr_81674;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_81648){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_81648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e81675){if((e81675 instanceof Object)){
var ex__48202__auto__ = e81675;
var statearr_81676_81698 = state_81648;
(statearr_81676_81698[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81699 = state_81648;
state_81648 = G__81699;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_81648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_81648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___81682,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48314__auto__ = (function (){var statearr_81677 = f__48313__auto__.call(null);
(statearr_81677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___81682);

return statearr_81677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___81682,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args81701 = [];
var len__35776__auto___81759 = arguments.length;
var i__35777__auto___81760 = (0);
while(true){
if((i__35777__auto___81760 < len__35776__auto___81759)){
args81701.push((arguments[i__35777__auto___81760]));

var G__81761 = (i__35777__auto___81760 + (1));
i__35777__auto___81760 = G__81761;
continue;
} else {
}
break;
}

var G__81703 = args81701.length;
switch (G__81703) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81701.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___81763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___81763,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___81763,out){
return (function (state_81735){
var state_val_81736 = (state_81735[(1)]);
if((state_val_81736 === (7))){
var inst_81714 = (state_81735[(7)]);
var inst_81715 = (state_81735[(8)]);
var inst_81714__$1 = (state_81735[(2)]);
var inst_81715__$1 = cljs.core.nth.call(null,inst_81714__$1,(0),null);
var inst_81716 = cljs.core.nth.call(null,inst_81714__$1,(1),null);
var inst_81717 = (inst_81715__$1 == null);
var state_81735__$1 = (function (){var statearr_81737 = state_81735;
(statearr_81737[(7)] = inst_81714__$1);

(statearr_81737[(9)] = inst_81716);

(statearr_81737[(8)] = inst_81715__$1);

return statearr_81737;
})();
if(cljs.core.truth_(inst_81717)){
var statearr_81738_81764 = state_81735__$1;
(statearr_81738_81764[(1)] = (8));

} else {
var statearr_81739_81765 = state_81735__$1;
(statearr_81739_81765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81736 === (1))){
var inst_81704 = cljs.core.vec.call(null,chs);
var inst_81705 = inst_81704;
var state_81735__$1 = (function (){var statearr_81740 = state_81735;
(statearr_81740[(10)] = inst_81705);

return statearr_81740;
})();
var statearr_81741_81766 = state_81735__$1;
(statearr_81741_81766[(2)] = null);

(statearr_81741_81766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81736 === (4))){
var inst_81705 = (state_81735[(10)]);
var state_81735__$1 = state_81735;
return cljs.core.async.ioc_alts_BANG_.call(null,state_81735__$1,(7),inst_81705);
} else {
if((state_val_81736 === (6))){
var inst_81731 = (state_81735[(2)]);
var state_81735__$1 = state_81735;
var statearr_81742_81767 = state_81735__$1;
(statearr_81742_81767[(2)] = inst_81731);

(statearr_81742_81767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81736 === (3))){
var inst_81733 = (state_81735[(2)]);
var state_81735__$1 = state_81735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81735__$1,inst_81733);
} else {
if((state_val_81736 === (2))){
var inst_81705 = (state_81735[(10)]);
var inst_81707 = cljs.core.count.call(null,inst_81705);
var inst_81708 = (inst_81707 > (0));
var state_81735__$1 = state_81735;
if(cljs.core.truth_(inst_81708)){
var statearr_81744_81768 = state_81735__$1;
(statearr_81744_81768[(1)] = (4));

} else {
var statearr_81745_81769 = state_81735__$1;
(statearr_81745_81769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81736 === (11))){
var inst_81705 = (state_81735[(10)]);
var inst_81724 = (state_81735[(2)]);
var tmp81743 = inst_81705;
var inst_81705__$1 = tmp81743;
var state_81735__$1 = (function (){var statearr_81746 = state_81735;
(statearr_81746[(11)] = inst_81724);

(statearr_81746[(10)] = inst_81705__$1);

return statearr_81746;
})();
var statearr_81747_81770 = state_81735__$1;
(statearr_81747_81770[(2)] = null);

(statearr_81747_81770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81736 === (9))){
var inst_81715 = (state_81735[(8)]);
var state_81735__$1 = state_81735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81735__$1,(11),out,inst_81715);
} else {
if((state_val_81736 === (5))){
var inst_81729 = cljs.core.async.close_BANG_.call(null,out);
var state_81735__$1 = state_81735;
var statearr_81748_81771 = state_81735__$1;
(statearr_81748_81771[(2)] = inst_81729);

(statearr_81748_81771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81736 === (10))){
var inst_81727 = (state_81735[(2)]);
var state_81735__$1 = state_81735;
var statearr_81749_81772 = state_81735__$1;
(statearr_81749_81772[(2)] = inst_81727);

(statearr_81749_81772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81736 === (8))){
var inst_81714 = (state_81735[(7)]);
var inst_81716 = (state_81735[(9)]);
var inst_81715 = (state_81735[(8)]);
var inst_81705 = (state_81735[(10)]);
var inst_81719 = (function (){var cs = inst_81705;
var vec__81710 = inst_81714;
var v = inst_81715;
var c = inst_81716;
return ((function (cs,vec__81710,v,c,inst_81714,inst_81716,inst_81715,inst_81705,state_val_81736,c__48312__auto___81763,out){
return (function (p1__81700_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__81700_SHARP_);
});
;})(cs,vec__81710,v,c,inst_81714,inst_81716,inst_81715,inst_81705,state_val_81736,c__48312__auto___81763,out))
})();
var inst_81720 = cljs.core.filterv.call(null,inst_81719,inst_81705);
var inst_81705__$1 = inst_81720;
var state_81735__$1 = (function (){var statearr_81750 = state_81735;
(statearr_81750[(10)] = inst_81705__$1);

return statearr_81750;
})();
var statearr_81751_81773 = state_81735__$1;
(statearr_81751_81773[(2)] = null);

(statearr_81751_81773[(1)] = (2));


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
});})(c__48312__auto___81763,out))
;
return ((function (switch__48198__auto__,c__48312__auto___81763,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_81755 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81755[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_81755[(1)] = (1));

return statearr_81755;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_81735){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_81735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e81756){if((e81756 instanceof Object)){
var ex__48202__auto__ = e81756;
var statearr_81757_81774 = state_81735;
(statearr_81757_81774[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81775 = state_81735;
state_81735 = G__81775;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_81735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_81735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___81763,out))
})();
var state__48314__auto__ = (function (){var statearr_81758 = f__48313__auto__.call(null);
(statearr_81758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___81763);

return statearr_81758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___81763,out))
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
var args81776 = [];
var len__35776__auto___81825 = arguments.length;
var i__35777__auto___81826 = (0);
while(true){
if((i__35777__auto___81826 < len__35776__auto___81825)){
args81776.push((arguments[i__35777__auto___81826]));

var G__81827 = (i__35777__auto___81826 + (1));
i__35777__auto___81826 = G__81827;
continue;
} else {
}
break;
}

var G__81778 = args81776.length;
switch (G__81778) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81776.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___81829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___81829,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___81829,out){
return (function (state_81802){
var state_val_81803 = (state_81802[(1)]);
if((state_val_81803 === (7))){
var inst_81784 = (state_81802[(7)]);
var inst_81784__$1 = (state_81802[(2)]);
var inst_81785 = (inst_81784__$1 == null);
var inst_81786 = cljs.core.not.call(null,inst_81785);
var state_81802__$1 = (function (){var statearr_81804 = state_81802;
(statearr_81804[(7)] = inst_81784__$1);

return statearr_81804;
})();
if(inst_81786){
var statearr_81805_81830 = state_81802__$1;
(statearr_81805_81830[(1)] = (8));

} else {
var statearr_81806_81831 = state_81802__$1;
(statearr_81806_81831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81803 === (1))){
var inst_81779 = (0);
var state_81802__$1 = (function (){var statearr_81807 = state_81802;
(statearr_81807[(8)] = inst_81779);

return statearr_81807;
})();
var statearr_81808_81832 = state_81802__$1;
(statearr_81808_81832[(2)] = null);

(statearr_81808_81832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81803 === (4))){
var state_81802__$1 = state_81802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81802__$1,(7),ch);
} else {
if((state_val_81803 === (6))){
var inst_81797 = (state_81802[(2)]);
var state_81802__$1 = state_81802;
var statearr_81809_81833 = state_81802__$1;
(statearr_81809_81833[(2)] = inst_81797);

(statearr_81809_81833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81803 === (3))){
var inst_81799 = (state_81802[(2)]);
var inst_81800 = cljs.core.async.close_BANG_.call(null,out);
var state_81802__$1 = (function (){var statearr_81810 = state_81802;
(statearr_81810[(9)] = inst_81799);

return statearr_81810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81802__$1,inst_81800);
} else {
if((state_val_81803 === (2))){
var inst_81779 = (state_81802[(8)]);
var inst_81781 = (inst_81779 < n);
var state_81802__$1 = state_81802;
if(cljs.core.truth_(inst_81781)){
var statearr_81811_81834 = state_81802__$1;
(statearr_81811_81834[(1)] = (4));

} else {
var statearr_81812_81835 = state_81802__$1;
(statearr_81812_81835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81803 === (11))){
var inst_81779 = (state_81802[(8)]);
var inst_81789 = (state_81802[(2)]);
var inst_81790 = (inst_81779 + (1));
var inst_81779__$1 = inst_81790;
var state_81802__$1 = (function (){var statearr_81813 = state_81802;
(statearr_81813[(8)] = inst_81779__$1);

(statearr_81813[(10)] = inst_81789);

return statearr_81813;
})();
var statearr_81814_81836 = state_81802__$1;
(statearr_81814_81836[(2)] = null);

(statearr_81814_81836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81803 === (9))){
var state_81802__$1 = state_81802;
var statearr_81815_81837 = state_81802__$1;
(statearr_81815_81837[(2)] = null);

(statearr_81815_81837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81803 === (5))){
var state_81802__$1 = state_81802;
var statearr_81816_81838 = state_81802__$1;
(statearr_81816_81838[(2)] = null);

(statearr_81816_81838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81803 === (10))){
var inst_81794 = (state_81802[(2)]);
var state_81802__$1 = state_81802;
var statearr_81817_81839 = state_81802__$1;
(statearr_81817_81839[(2)] = inst_81794);

(statearr_81817_81839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81803 === (8))){
var inst_81784 = (state_81802[(7)]);
var state_81802__$1 = state_81802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81802__$1,(11),out,inst_81784);
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
});})(c__48312__auto___81829,out))
;
return ((function (switch__48198__auto__,c__48312__auto___81829,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_81821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_81821[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_81821[(1)] = (1));

return statearr_81821;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_81802){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_81802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e81822){if((e81822 instanceof Object)){
var ex__48202__auto__ = e81822;
var statearr_81823_81840 = state_81802;
(statearr_81823_81840[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81841 = state_81802;
state_81802 = G__81841;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_81802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_81802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___81829,out))
})();
var state__48314__auto__ = (function (){var statearr_81824 = f__48313__auto__.call(null);
(statearr_81824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___81829);

return statearr_81824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___81829,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async81849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81849 = (function (f,ch,meta81850){
this.f = f;
this.ch = ch;
this.meta81850 = meta81850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81851,meta81850__$1){
var self__ = this;
var _81851__$1 = this;
return (new cljs.core.async.t_cljs$core$async81849(self__.f,self__.ch,meta81850__$1));
});


cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81851){
var self__ = this;
var _81851__$1 = this;
return self__.meta81850;
});


cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async81852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81852 = (function (f,ch,meta81850,_,fn1,meta81853){
this.f = f;
this.ch = ch;
this.meta81850 = meta81850;
this._ = _;
this.fn1 = fn1;
this.meta81853 = meta81853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async81852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_81854,meta81853__$1){
var self__ = this;
var _81854__$1 = this;
return (new cljs.core.async.t_cljs$core$async81852(self__.f,self__.ch,self__.meta81850,self__._,self__.fn1,meta81853__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async81852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_81854){
var self__ = this;
var _81854__$1 = this;
return self__.meta81853;
});})(___$1))
;


cljs.core.async.t_cljs$core$async81852.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async81852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async81852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__81842_SHARP_){
return f1.call(null,(((p1__81842_SHARP_ == null))?null:self__.f.call(null,p1__81842_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async81852.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta81850","meta81850",-1150769515,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async81849","cljs.core.async/t_cljs$core$async81849",-1812258111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta81853","meta81853",687750626,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async81852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async81852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81852";

cljs.core.async.t_cljs$core$async81852.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async81852");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async81852 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async81852(f__$1,ch__$1,meta81850__$1,___$2,fn1__$1,meta81853){
return (new cljs.core.async.t_cljs$core$async81852(f__$1,ch__$1,meta81850__$1,___$2,fn1__$1,meta81853));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async81852(self__.f,self__.ch,self__.meta81850,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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


cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async81849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta81850","meta81850",-1150769515,null)], null);
});

cljs.core.async.t_cljs$core$async81849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async81849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81849";

cljs.core.async.t_cljs$core$async81849.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async81849");
});

cljs.core.async.__GT_t_cljs$core$async81849 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async81849(f__$1,ch__$1,meta81850){
return (new cljs.core.async.t_cljs$core$async81849(f__$1,ch__$1,meta81850));
});

}

return (new cljs.core.async.t_cljs$core$async81849(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async81858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81858 = (function (f,ch,meta81859){
this.f = f;
this.ch = ch;
this.meta81859 = meta81859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async81858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81860,meta81859__$1){
var self__ = this;
var _81860__$1 = this;
return (new cljs.core.async.t_cljs$core$async81858(self__.f,self__.ch,meta81859__$1));
});


cljs.core.async.t_cljs$core$async81858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81860){
var self__ = this;
var _81860__$1 = this;
return self__.meta81859;
});


cljs.core.async.t_cljs$core$async81858.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async81858.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async81858.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async81858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta81859","meta81859",-1231905127,null)], null);
});

cljs.core.async.t_cljs$core$async81858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async81858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81858";

cljs.core.async.t_cljs$core$async81858.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async81858");
});

cljs.core.async.__GT_t_cljs$core$async81858 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async81858(f__$1,ch__$1,meta81859){
return (new cljs.core.async.t_cljs$core$async81858(f__$1,ch__$1,meta81859));
});

}

return (new cljs.core.async.t_cljs$core$async81858(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async81864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81864 = (function (p,ch,meta81865){
this.p = p;
this.ch = ch;
this.meta81865 = meta81865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81866,meta81865__$1){
var self__ = this;
var _81866__$1 = this;
return (new cljs.core.async.t_cljs$core$async81864(self__.p,self__.ch,meta81865__$1));
});


cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81866){
var self__ = this;
var _81866__$1 = this;
return self__.meta81865;
});


cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async81864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async81864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta81865","meta81865",345161571,null)], null);
});

cljs.core.async.t_cljs$core$async81864.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async81864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81864";

cljs.core.async.t_cljs$core$async81864.cljs$lang$ctorPrWriter = (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"cljs.core.async/t_cljs$core$async81864");
});

cljs.core.async.__GT_t_cljs$core$async81864 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async81864(p__$1,ch__$1,meta81865){
return (new cljs.core.async.t_cljs$core$async81864(p__$1,ch__$1,meta81865));
});

}

return (new cljs.core.async.t_cljs$core$async81864(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args81867 = [];
var len__35776__auto___81911 = arguments.length;
var i__35777__auto___81912 = (0);
while(true){
if((i__35777__auto___81912 < len__35776__auto___81911)){
args81867.push((arguments[i__35777__auto___81912]));

var G__81913 = (i__35777__auto___81912 + (1));
i__35777__auto___81912 = G__81913;
continue;
} else {
}
break;
}

var G__81869 = args81867.length;
switch (G__81869) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81867.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___81915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___81915,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___81915,out){
return (function (state_81890){
var state_val_81891 = (state_81890[(1)]);
if((state_val_81891 === (7))){
var inst_81886 = (state_81890[(2)]);
var state_81890__$1 = state_81890;
var statearr_81892_81916 = state_81890__$1;
(statearr_81892_81916[(2)] = inst_81886);

(statearr_81892_81916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81891 === (1))){
var state_81890__$1 = state_81890;
var statearr_81893_81917 = state_81890__$1;
(statearr_81893_81917[(2)] = null);

(statearr_81893_81917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81891 === (4))){
var inst_81872 = (state_81890[(7)]);
var inst_81872__$1 = (state_81890[(2)]);
var inst_81873 = (inst_81872__$1 == null);
var state_81890__$1 = (function (){var statearr_81894 = state_81890;
(statearr_81894[(7)] = inst_81872__$1);

return statearr_81894;
})();
if(cljs.core.truth_(inst_81873)){
var statearr_81895_81918 = state_81890__$1;
(statearr_81895_81918[(1)] = (5));

} else {
var statearr_81896_81919 = state_81890__$1;
(statearr_81896_81919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81891 === (6))){
var inst_81872 = (state_81890[(7)]);
var inst_81877 = p.call(null,inst_81872);
var state_81890__$1 = state_81890;
if(cljs.core.truth_(inst_81877)){
var statearr_81897_81920 = state_81890__$1;
(statearr_81897_81920[(1)] = (8));

} else {
var statearr_81898_81921 = state_81890__$1;
(statearr_81898_81921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81891 === (3))){
var inst_81888 = (state_81890[(2)]);
var state_81890__$1 = state_81890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81890__$1,inst_81888);
} else {
if((state_val_81891 === (2))){
var state_81890__$1 = state_81890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81890__$1,(4),ch);
} else {
if((state_val_81891 === (11))){
var inst_81880 = (state_81890[(2)]);
var state_81890__$1 = state_81890;
var statearr_81899_81922 = state_81890__$1;
(statearr_81899_81922[(2)] = inst_81880);

(statearr_81899_81922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81891 === (9))){
var state_81890__$1 = state_81890;
var statearr_81900_81923 = state_81890__$1;
(statearr_81900_81923[(2)] = null);

(statearr_81900_81923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81891 === (5))){
var inst_81875 = cljs.core.async.close_BANG_.call(null,out);
var state_81890__$1 = state_81890;
var statearr_81901_81924 = state_81890__$1;
(statearr_81901_81924[(2)] = inst_81875);

(statearr_81901_81924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81891 === (10))){
var inst_81883 = (state_81890[(2)]);
var state_81890__$1 = (function (){var statearr_81902 = state_81890;
(statearr_81902[(8)] = inst_81883);

return statearr_81902;
})();
var statearr_81903_81925 = state_81890__$1;
(statearr_81903_81925[(2)] = null);

(statearr_81903_81925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81891 === (8))){
var inst_81872 = (state_81890[(7)]);
var state_81890__$1 = state_81890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81890__$1,(11),out,inst_81872);
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
});})(c__48312__auto___81915,out))
;
return ((function (switch__48198__auto__,c__48312__auto___81915,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_81907 = [null,null,null,null,null,null,null,null,null];
(statearr_81907[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_81907[(1)] = (1));

return statearr_81907;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_81890){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_81890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e81908){if((e81908 instanceof Object)){
var ex__48202__auto__ = e81908;
var statearr_81909_81926 = state_81890;
(statearr_81909_81926[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81927 = state_81890;
state_81890 = G__81927;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_81890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_81890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___81915,out))
})();
var state__48314__auto__ = (function (){var statearr_81910 = f__48313__auto__.call(null);
(statearr_81910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___81915);

return statearr_81910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___81915,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args81928 = [];
var len__35776__auto___81931 = arguments.length;
var i__35777__auto___81932 = (0);
while(true){
if((i__35777__auto___81932 < len__35776__auto___81931)){
args81928.push((arguments[i__35777__auto___81932]));

var G__81933 = (i__35777__auto___81932 + (1));
i__35777__auto___81932 = G__81933;
continue;
} else {
}
break;
}

var G__81930 = args81928.length;
switch (G__81930) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args81928.length)].join('')));

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
return (function (state_82100){
var state_val_82101 = (state_82100[(1)]);
if((state_val_82101 === (7))){
var inst_82096 = (state_82100[(2)]);
var state_82100__$1 = state_82100;
var statearr_82102_82143 = state_82100__$1;
(statearr_82102_82143[(2)] = inst_82096);

(statearr_82102_82143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (20))){
var inst_82066 = (state_82100[(7)]);
var inst_82077 = (state_82100[(2)]);
var inst_82078 = cljs.core.next.call(null,inst_82066);
var inst_82052 = inst_82078;
var inst_82053 = null;
var inst_82054 = (0);
var inst_82055 = (0);
var state_82100__$1 = (function (){var statearr_82103 = state_82100;
(statearr_82103[(8)] = inst_82054);

(statearr_82103[(9)] = inst_82077);

(statearr_82103[(10)] = inst_82053);

(statearr_82103[(11)] = inst_82055);

(statearr_82103[(12)] = inst_82052);

return statearr_82103;
})();
var statearr_82104_82144 = state_82100__$1;
(statearr_82104_82144[(2)] = null);

(statearr_82104_82144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (1))){
var state_82100__$1 = state_82100;
var statearr_82105_82145 = state_82100__$1;
(statearr_82105_82145[(2)] = null);

(statearr_82105_82145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (4))){
var inst_82041 = (state_82100[(13)]);
var inst_82041__$1 = (state_82100[(2)]);
var inst_82042 = (inst_82041__$1 == null);
var state_82100__$1 = (function (){var statearr_82106 = state_82100;
(statearr_82106[(13)] = inst_82041__$1);

return statearr_82106;
})();
if(cljs.core.truth_(inst_82042)){
var statearr_82107_82146 = state_82100__$1;
(statearr_82107_82146[(1)] = (5));

} else {
var statearr_82108_82147 = state_82100__$1;
(statearr_82108_82147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (15))){
var state_82100__$1 = state_82100;
var statearr_82112_82148 = state_82100__$1;
(statearr_82112_82148[(2)] = null);

(statearr_82112_82148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (21))){
var state_82100__$1 = state_82100;
var statearr_82113_82149 = state_82100__$1;
(statearr_82113_82149[(2)] = null);

(statearr_82113_82149[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (13))){
var inst_82054 = (state_82100[(8)]);
var inst_82053 = (state_82100[(10)]);
var inst_82055 = (state_82100[(11)]);
var inst_82052 = (state_82100[(12)]);
var inst_82062 = (state_82100[(2)]);
var inst_82063 = (inst_82055 + (1));
var tmp82109 = inst_82054;
var tmp82110 = inst_82053;
var tmp82111 = inst_82052;
var inst_82052__$1 = tmp82111;
var inst_82053__$1 = tmp82110;
var inst_82054__$1 = tmp82109;
var inst_82055__$1 = inst_82063;
var state_82100__$1 = (function (){var statearr_82114 = state_82100;
(statearr_82114[(8)] = inst_82054__$1);

(statearr_82114[(10)] = inst_82053__$1);

(statearr_82114[(11)] = inst_82055__$1);

(statearr_82114[(12)] = inst_82052__$1);

(statearr_82114[(14)] = inst_82062);

return statearr_82114;
})();
var statearr_82115_82150 = state_82100__$1;
(statearr_82115_82150[(2)] = null);

(statearr_82115_82150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (22))){
var state_82100__$1 = state_82100;
var statearr_82116_82151 = state_82100__$1;
(statearr_82116_82151[(2)] = null);

(statearr_82116_82151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (6))){
var inst_82041 = (state_82100[(13)]);
var inst_82050 = f.call(null,inst_82041);
var inst_82051 = cljs.core.seq.call(null,inst_82050);
var inst_82052 = inst_82051;
var inst_82053 = null;
var inst_82054 = (0);
var inst_82055 = (0);
var state_82100__$1 = (function (){var statearr_82117 = state_82100;
(statearr_82117[(8)] = inst_82054);

(statearr_82117[(10)] = inst_82053);

(statearr_82117[(11)] = inst_82055);

(statearr_82117[(12)] = inst_82052);

return statearr_82117;
})();
var statearr_82118_82152 = state_82100__$1;
(statearr_82118_82152[(2)] = null);

(statearr_82118_82152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (17))){
var inst_82066 = (state_82100[(7)]);
var inst_82070 = cljs.core.chunk_first.call(null,inst_82066);
var inst_82071 = cljs.core.chunk_rest.call(null,inst_82066);
var inst_82072 = cljs.core.count.call(null,inst_82070);
var inst_82052 = inst_82071;
var inst_82053 = inst_82070;
var inst_82054 = inst_82072;
var inst_82055 = (0);
var state_82100__$1 = (function (){var statearr_82119 = state_82100;
(statearr_82119[(8)] = inst_82054);

(statearr_82119[(10)] = inst_82053);

(statearr_82119[(11)] = inst_82055);

(statearr_82119[(12)] = inst_82052);

return statearr_82119;
})();
var statearr_82120_82153 = state_82100__$1;
(statearr_82120_82153[(2)] = null);

(statearr_82120_82153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (3))){
var inst_82098 = (state_82100[(2)]);
var state_82100__$1 = state_82100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82100__$1,inst_82098);
} else {
if((state_val_82101 === (12))){
var inst_82086 = (state_82100[(2)]);
var state_82100__$1 = state_82100;
var statearr_82121_82154 = state_82100__$1;
(statearr_82121_82154[(2)] = inst_82086);

(statearr_82121_82154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (2))){
var state_82100__$1 = state_82100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82100__$1,(4),in$);
} else {
if((state_val_82101 === (23))){
var inst_82094 = (state_82100[(2)]);
var state_82100__$1 = state_82100;
var statearr_82122_82155 = state_82100__$1;
(statearr_82122_82155[(2)] = inst_82094);

(statearr_82122_82155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (19))){
var inst_82081 = (state_82100[(2)]);
var state_82100__$1 = state_82100;
var statearr_82123_82156 = state_82100__$1;
(statearr_82123_82156[(2)] = inst_82081);

(statearr_82123_82156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (11))){
var inst_82052 = (state_82100[(12)]);
var inst_82066 = (state_82100[(7)]);
var inst_82066__$1 = cljs.core.seq.call(null,inst_82052);
var state_82100__$1 = (function (){var statearr_82124 = state_82100;
(statearr_82124[(7)] = inst_82066__$1);

return statearr_82124;
})();
if(inst_82066__$1){
var statearr_82125_82157 = state_82100__$1;
(statearr_82125_82157[(1)] = (14));

} else {
var statearr_82126_82158 = state_82100__$1;
(statearr_82126_82158[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (9))){
var inst_82088 = (state_82100[(2)]);
var inst_82089 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_82100__$1 = (function (){var statearr_82127 = state_82100;
(statearr_82127[(15)] = inst_82088);

return statearr_82127;
})();
if(cljs.core.truth_(inst_82089)){
var statearr_82128_82159 = state_82100__$1;
(statearr_82128_82159[(1)] = (21));

} else {
var statearr_82129_82160 = state_82100__$1;
(statearr_82129_82160[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (5))){
var inst_82044 = cljs.core.async.close_BANG_.call(null,out);
var state_82100__$1 = state_82100;
var statearr_82130_82161 = state_82100__$1;
(statearr_82130_82161[(2)] = inst_82044);

(statearr_82130_82161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (14))){
var inst_82066 = (state_82100[(7)]);
var inst_82068 = cljs.core.chunked_seq_QMARK_.call(null,inst_82066);
var state_82100__$1 = state_82100;
if(inst_82068){
var statearr_82131_82162 = state_82100__$1;
(statearr_82131_82162[(1)] = (17));

} else {
var statearr_82132_82163 = state_82100__$1;
(statearr_82132_82163[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (16))){
var inst_82084 = (state_82100[(2)]);
var state_82100__$1 = state_82100;
var statearr_82133_82164 = state_82100__$1;
(statearr_82133_82164[(2)] = inst_82084);

(statearr_82133_82164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82101 === (10))){
var inst_82053 = (state_82100[(10)]);
var inst_82055 = (state_82100[(11)]);
var inst_82060 = cljs.core._nth.call(null,inst_82053,inst_82055);
var state_82100__$1 = state_82100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82100__$1,(13),out,inst_82060);
} else {
if((state_val_82101 === (18))){
var inst_82066 = (state_82100[(7)]);
var inst_82075 = cljs.core.first.call(null,inst_82066);
var state_82100__$1 = state_82100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82100__$1,(20),out,inst_82075);
} else {
if((state_val_82101 === (8))){
var inst_82054 = (state_82100[(8)]);
var inst_82055 = (state_82100[(11)]);
var inst_82057 = (inst_82055 < inst_82054);
var inst_82058 = inst_82057;
var state_82100__$1 = state_82100;
if(cljs.core.truth_(inst_82058)){
var statearr_82134_82165 = state_82100__$1;
(statearr_82134_82165[(1)] = (10));

} else {
var statearr_82135_82166 = state_82100__$1;
(statearr_82135_82166[(1)] = (11));

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
var statearr_82139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82139[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__);

(statearr_82139[(1)] = (1));

return statearr_82139;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1 = (function (state_82100){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_82100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e82140){if((e82140 instanceof Object)){
var ex__48202__auto__ = e82140;
var statearr_82141_82167 = state_82100;
(statearr_82141_82167[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82168 = state_82100;
state_82100 = G__82168;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__ = function(state_82100){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1.call(this,state_82100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48199__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto__))
})();
var state__48314__auto__ = (function (){var statearr_82142 = f__48313__auto__.call(null);
(statearr_82142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto__);

return statearr_82142;
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
var args82169 = [];
var len__35776__auto___82172 = arguments.length;
var i__35777__auto___82173 = (0);
while(true){
if((i__35777__auto___82173 < len__35776__auto___82172)){
args82169.push((arguments[i__35777__auto___82173]));

var G__82174 = (i__35777__auto___82173 + (1));
i__35777__auto___82173 = G__82174;
continue;
} else {
}
break;
}

var G__82171 = args82169.length;
switch (G__82171) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82169.length)].join('')));

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
var args82176 = [];
var len__35776__auto___82179 = arguments.length;
var i__35777__auto___82180 = (0);
while(true){
if((i__35777__auto___82180 < len__35776__auto___82179)){
args82176.push((arguments[i__35777__auto___82180]));

var G__82181 = (i__35777__auto___82180 + (1));
i__35777__auto___82180 = G__82181;
continue;
} else {
}
break;
}

var G__82178 = args82176.length;
switch (G__82178) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82176.length)].join('')));

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
var args82183 = [];
var len__35776__auto___82234 = arguments.length;
var i__35777__auto___82235 = (0);
while(true){
if((i__35777__auto___82235 < len__35776__auto___82234)){
args82183.push((arguments[i__35777__auto___82235]));

var G__82236 = (i__35777__auto___82235 + (1));
i__35777__auto___82235 = G__82236;
continue;
} else {
}
break;
}

var G__82185 = args82183.length;
switch (G__82185) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82183.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___82238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___82238,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___82238,out){
return (function (state_82209){
var state_val_82210 = (state_82209[(1)]);
if((state_val_82210 === (7))){
var inst_82204 = (state_82209[(2)]);
var state_82209__$1 = state_82209;
var statearr_82211_82239 = state_82209__$1;
(statearr_82211_82239[(2)] = inst_82204);

(statearr_82211_82239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82210 === (1))){
var inst_82186 = null;
var state_82209__$1 = (function (){var statearr_82212 = state_82209;
(statearr_82212[(7)] = inst_82186);

return statearr_82212;
})();
var statearr_82213_82240 = state_82209__$1;
(statearr_82213_82240[(2)] = null);

(statearr_82213_82240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82210 === (4))){
var inst_82189 = (state_82209[(8)]);
var inst_82189__$1 = (state_82209[(2)]);
var inst_82190 = (inst_82189__$1 == null);
var inst_82191 = cljs.core.not.call(null,inst_82190);
var state_82209__$1 = (function (){var statearr_82214 = state_82209;
(statearr_82214[(8)] = inst_82189__$1);

return statearr_82214;
})();
if(inst_82191){
var statearr_82215_82241 = state_82209__$1;
(statearr_82215_82241[(1)] = (5));

} else {
var statearr_82216_82242 = state_82209__$1;
(statearr_82216_82242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82210 === (6))){
var state_82209__$1 = state_82209;
var statearr_82217_82243 = state_82209__$1;
(statearr_82217_82243[(2)] = null);

(statearr_82217_82243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82210 === (3))){
var inst_82206 = (state_82209[(2)]);
var inst_82207 = cljs.core.async.close_BANG_.call(null,out);
var state_82209__$1 = (function (){var statearr_82218 = state_82209;
(statearr_82218[(9)] = inst_82206);

return statearr_82218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82209__$1,inst_82207);
} else {
if((state_val_82210 === (2))){
var state_82209__$1 = state_82209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82209__$1,(4),ch);
} else {
if((state_val_82210 === (11))){
var inst_82189 = (state_82209[(8)]);
var inst_82198 = (state_82209[(2)]);
var inst_82186 = inst_82189;
var state_82209__$1 = (function (){var statearr_82219 = state_82209;
(statearr_82219[(10)] = inst_82198);

(statearr_82219[(7)] = inst_82186);

return statearr_82219;
})();
var statearr_82220_82244 = state_82209__$1;
(statearr_82220_82244[(2)] = null);

(statearr_82220_82244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82210 === (9))){
var inst_82189 = (state_82209[(8)]);
var state_82209__$1 = state_82209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82209__$1,(11),out,inst_82189);
} else {
if((state_val_82210 === (5))){
var inst_82189 = (state_82209[(8)]);
var inst_82186 = (state_82209[(7)]);
var inst_82193 = cljs.core._EQ_.call(null,inst_82189,inst_82186);
var state_82209__$1 = state_82209;
if(inst_82193){
var statearr_82222_82245 = state_82209__$1;
(statearr_82222_82245[(1)] = (8));

} else {
var statearr_82223_82246 = state_82209__$1;
(statearr_82223_82246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82210 === (10))){
var inst_82201 = (state_82209[(2)]);
var state_82209__$1 = state_82209;
var statearr_82224_82247 = state_82209__$1;
(statearr_82224_82247[(2)] = inst_82201);

(statearr_82224_82247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82210 === (8))){
var inst_82186 = (state_82209[(7)]);
var tmp82221 = inst_82186;
var inst_82186__$1 = tmp82221;
var state_82209__$1 = (function (){var statearr_82225 = state_82209;
(statearr_82225[(7)] = inst_82186__$1);

return statearr_82225;
})();
var statearr_82226_82248 = state_82209__$1;
(statearr_82226_82248[(2)] = null);

(statearr_82226_82248[(1)] = (2));


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
});})(c__48312__auto___82238,out))
;
return ((function (switch__48198__auto__,c__48312__auto___82238,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_82230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_82230[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_82230[(1)] = (1));

return statearr_82230;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_82209){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_82209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e82231){if((e82231 instanceof Object)){
var ex__48202__auto__ = e82231;
var statearr_82232_82249 = state_82209;
(statearr_82232_82249[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82250 = state_82209;
state_82209 = G__82250;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_82209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_82209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___82238,out))
})();
var state__48314__auto__ = (function (){var statearr_82233 = f__48313__auto__.call(null);
(statearr_82233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___82238);

return statearr_82233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___82238,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args82251 = [];
var len__35776__auto___82321 = arguments.length;
var i__35777__auto___82322 = (0);
while(true){
if((i__35777__auto___82322 < len__35776__auto___82321)){
args82251.push((arguments[i__35777__auto___82322]));

var G__82323 = (i__35777__auto___82322 + (1));
i__35777__auto___82322 = G__82323;
continue;
} else {
}
break;
}

var G__82253 = args82251.length;
switch (G__82253) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82251.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___82325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___82325,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___82325,out){
return (function (state_82291){
var state_val_82292 = (state_82291[(1)]);
if((state_val_82292 === (7))){
var inst_82287 = (state_82291[(2)]);
var state_82291__$1 = state_82291;
var statearr_82293_82326 = state_82291__$1;
(statearr_82293_82326[(2)] = inst_82287);

(statearr_82293_82326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (1))){
var inst_82254 = (new Array(n));
var inst_82255 = inst_82254;
var inst_82256 = (0);
var state_82291__$1 = (function (){var statearr_82294 = state_82291;
(statearr_82294[(7)] = inst_82255);

(statearr_82294[(8)] = inst_82256);

return statearr_82294;
})();
var statearr_82295_82327 = state_82291__$1;
(statearr_82295_82327[(2)] = null);

(statearr_82295_82327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (4))){
var inst_82259 = (state_82291[(9)]);
var inst_82259__$1 = (state_82291[(2)]);
var inst_82260 = (inst_82259__$1 == null);
var inst_82261 = cljs.core.not.call(null,inst_82260);
var state_82291__$1 = (function (){var statearr_82296 = state_82291;
(statearr_82296[(9)] = inst_82259__$1);

return statearr_82296;
})();
if(inst_82261){
var statearr_82297_82328 = state_82291__$1;
(statearr_82297_82328[(1)] = (5));

} else {
var statearr_82298_82329 = state_82291__$1;
(statearr_82298_82329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (15))){
var inst_82281 = (state_82291[(2)]);
var state_82291__$1 = state_82291;
var statearr_82299_82330 = state_82291__$1;
(statearr_82299_82330[(2)] = inst_82281);

(statearr_82299_82330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (13))){
var state_82291__$1 = state_82291;
var statearr_82300_82331 = state_82291__$1;
(statearr_82300_82331[(2)] = null);

(statearr_82300_82331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (6))){
var inst_82256 = (state_82291[(8)]);
var inst_82277 = (inst_82256 > (0));
var state_82291__$1 = state_82291;
if(cljs.core.truth_(inst_82277)){
var statearr_82301_82332 = state_82291__$1;
(statearr_82301_82332[(1)] = (12));

} else {
var statearr_82302_82333 = state_82291__$1;
(statearr_82302_82333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (3))){
var inst_82289 = (state_82291[(2)]);
var state_82291__$1 = state_82291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82291__$1,inst_82289);
} else {
if((state_val_82292 === (12))){
var inst_82255 = (state_82291[(7)]);
var inst_82279 = cljs.core.vec.call(null,inst_82255);
var state_82291__$1 = state_82291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82291__$1,(15),out,inst_82279);
} else {
if((state_val_82292 === (2))){
var state_82291__$1 = state_82291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82291__$1,(4),ch);
} else {
if((state_val_82292 === (11))){
var inst_82271 = (state_82291[(2)]);
var inst_82272 = (new Array(n));
var inst_82255 = inst_82272;
var inst_82256 = (0);
var state_82291__$1 = (function (){var statearr_82303 = state_82291;
(statearr_82303[(7)] = inst_82255);

(statearr_82303[(8)] = inst_82256);

(statearr_82303[(10)] = inst_82271);

return statearr_82303;
})();
var statearr_82304_82334 = state_82291__$1;
(statearr_82304_82334[(2)] = null);

(statearr_82304_82334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (9))){
var inst_82255 = (state_82291[(7)]);
var inst_82269 = cljs.core.vec.call(null,inst_82255);
var state_82291__$1 = state_82291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82291__$1,(11),out,inst_82269);
} else {
if((state_val_82292 === (5))){
var inst_82259 = (state_82291[(9)]);
var inst_82255 = (state_82291[(7)]);
var inst_82264 = (state_82291[(11)]);
var inst_82256 = (state_82291[(8)]);
var inst_82263 = (inst_82255[inst_82256] = inst_82259);
var inst_82264__$1 = (inst_82256 + (1));
var inst_82265 = (inst_82264__$1 < n);
var state_82291__$1 = (function (){var statearr_82305 = state_82291;
(statearr_82305[(11)] = inst_82264__$1);

(statearr_82305[(12)] = inst_82263);

return statearr_82305;
})();
if(cljs.core.truth_(inst_82265)){
var statearr_82306_82335 = state_82291__$1;
(statearr_82306_82335[(1)] = (8));

} else {
var statearr_82307_82336 = state_82291__$1;
(statearr_82307_82336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (14))){
var inst_82284 = (state_82291[(2)]);
var inst_82285 = cljs.core.async.close_BANG_.call(null,out);
var state_82291__$1 = (function (){var statearr_82309 = state_82291;
(statearr_82309[(13)] = inst_82284);

return statearr_82309;
})();
var statearr_82310_82337 = state_82291__$1;
(statearr_82310_82337[(2)] = inst_82285);

(statearr_82310_82337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (10))){
var inst_82275 = (state_82291[(2)]);
var state_82291__$1 = state_82291;
var statearr_82311_82338 = state_82291__$1;
(statearr_82311_82338[(2)] = inst_82275);

(statearr_82311_82338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82292 === (8))){
var inst_82255 = (state_82291[(7)]);
var inst_82264 = (state_82291[(11)]);
var tmp82308 = inst_82255;
var inst_82255__$1 = tmp82308;
var inst_82256 = inst_82264;
var state_82291__$1 = (function (){var statearr_82312 = state_82291;
(statearr_82312[(7)] = inst_82255__$1);

(statearr_82312[(8)] = inst_82256);

return statearr_82312;
})();
var statearr_82313_82339 = state_82291__$1;
(statearr_82313_82339[(2)] = null);

(statearr_82313_82339[(1)] = (2));


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
});})(c__48312__auto___82325,out))
;
return ((function (switch__48198__auto__,c__48312__auto___82325,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_82317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82317[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_82317[(1)] = (1));

return statearr_82317;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_82291){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_82291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e82318){if((e82318 instanceof Object)){
var ex__48202__auto__ = e82318;
var statearr_82319_82340 = state_82291;
(statearr_82319_82340[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82341 = state_82291;
state_82291 = G__82341;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_82291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_82291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___82325,out))
})();
var state__48314__auto__ = (function (){var statearr_82320 = f__48313__auto__.call(null);
(statearr_82320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___82325);

return statearr_82320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___82325,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args82342 = [];
var len__35776__auto___82416 = arguments.length;
var i__35777__auto___82417 = (0);
while(true){
if((i__35777__auto___82417 < len__35776__auto___82416)){
args82342.push((arguments[i__35777__auto___82417]));

var G__82418 = (i__35777__auto___82417 + (1));
i__35777__auto___82417 = G__82418;
continue;
} else {
}
break;
}

var G__82344 = args82342.length;
switch (G__82344) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args82342.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48312__auto___82420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48312__auto___82420,out){
return (function (){
var f__48313__auto__ = (function (){var switch__48198__auto__ = ((function (c__48312__auto___82420,out){
return (function (state_82386){
var state_val_82387 = (state_82386[(1)]);
if((state_val_82387 === (7))){
var inst_82382 = (state_82386[(2)]);
var state_82386__$1 = state_82386;
var statearr_82388_82421 = state_82386__$1;
(statearr_82388_82421[(2)] = inst_82382);

(statearr_82388_82421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (1))){
var inst_82345 = [];
var inst_82346 = inst_82345;
var inst_82347 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_82386__$1 = (function (){var statearr_82389 = state_82386;
(statearr_82389[(7)] = inst_82346);

(statearr_82389[(8)] = inst_82347);

return statearr_82389;
})();
var statearr_82390_82422 = state_82386__$1;
(statearr_82390_82422[(2)] = null);

(statearr_82390_82422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (4))){
var inst_82350 = (state_82386[(9)]);
var inst_82350__$1 = (state_82386[(2)]);
var inst_82351 = (inst_82350__$1 == null);
var inst_82352 = cljs.core.not.call(null,inst_82351);
var state_82386__$1 = (function (){var statearr_82391 = state_82386;
(statearr_82391[(9)] = inst_82350__$1);

return statearr_82391;
})();
if(inst_82352){
var statearr_82392_82423 = state_82386__$1;
(statearr_82392_82423[(1)] = (5));

} else {
var statearr_82393_82424 = state_82386__$1;
(statearr_82393_82424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (15))){
var inst_82376 = (state_82386[(2)]);
var state_82386__$1 = state_82386;
var statearr_82394_82425 = state_82386__$1;
(statearr_82394_82425[(2)] = inst_82376);

(statearr_82394_82425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (13))){
var state_82386__$1 = state_82386;
var statearr_82395_82426 = state_82386__$1;
(statearr_82395_82426[(2)] = null);

(statearr_82395_82426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (6))){
var inst_82346 = (state_82386[(7)]);
var inst_82371 = inst_82346.length;
var inst_82372 = (inst_82371 > (0));
var state_82386__$1 = state_82386;
if(cljs.core.truth_(inst_82372)){
var statearr_82396_82427 = state_82386__$1;
(statearr_82396_82427[(1)] = (12));

} else {
var statearr_82397_82428 = state_82386__$1;
(statearr_82397_82428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (3))){
var inst_82384 = (state_82386[(2)]);
var state_82386__$1 = state_82386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82386__$1,inst_82384);
} else {
if((state_val_82387 === (12))){
var inst_82346 = (state_82386[(7)]);
var inst_82374 = cljs.core.vec.call(null,inst_82346);
var state_82386__$1 = state_82386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82386__$1,(15),out,inst_82374);
} else {
if((state_val_82387 === (2))){
var state_82386__$1 = state_82386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82386__$1,(4),ch);
} else {
if((state_val_82387 === (11))){
var inst_82350 = (state_82386[(9)]);
var inst_82354 = (state_82386[(10)]);
var inst_82364 = (state_82386[(2)]);
var inst_82365 = [];
var inst_82366 = inst_82365.push(inst_82350);
var inst_82346 = inst_82365;
var inst_82347 = inst_82354;
var state_82386__$1 = (function (){var statearr_82398 = state_82386;
(statearr_82398[(7)] = inst_82346);

(statearr_82398[(8)] = inst_82347);

(statearr_82398[(11)] = inst_82364);

(statearr_82398[(12)] = inst_82366);

return statearr_82398;
})();
var statearr_82399_82429 = state_82386__$1;
(statearr_82399_82429[(2)] = null);

(statearr_82399_82429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (9))){
var inst_82346 = (state_82386[(7)]);
var inst_82362 = cljs.core.vec.call(null,inst_82346);
var state_82386__$1 = state_82386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82386__$1,(11),out,inst_82362);
} else {
if((state_val_82387 === (5))){
var inst_82347 = (state_82386[(8)]);
var inst_82350 = (state_82386[(9)]);
var inst_82354 = (state_82386[(10)]);
var inst_82354__$1 = f.call(null,inst_82350);
var inst_82355 = cljs.core._EQ_.call(null,inst_82354__$1,inst_82347);
var inst_82356 = cljs.core.keyword_identical_QMARK_.call(null,inst_82347,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_82357 = (inst_82355) || (inst_82356);
var state_82386__$1 = (function (){var statearr_82400 = state_82386;
(statearr_82400[(10)] = inst_82354__$1);

return statearr_82400;
})();
if(cljs.core.truth_(inst_82357)){
var statearr_82401_82430 = state_82386__$1;
(statearr_82401_82430[(1)] = (8));

} else {
var statearr_82402_82431 = state_82386__$1;
(statearr_82402_82431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (14))){
var inst_82379 = (state_82386[(2)]);
var inst_82380 = cljs.core.async.close_BANG_.call(null,out);
var state_82386__$1 = (function (){var statearr_82404 = state_82386;
(statearr_82404[(13)] = inst_82379);

return statearr_82404;
})();
var statearr_82405_82432 = state_82386__$1;
(statearr_82405_82432[(2)] = inst_82380);

(statearr_82405_82432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (10))){
var inst_82369 = (state_82386[(2)]);
var state_82386__$1 = state_82386;
var statearr_82406_82433 = state_82386__$1;
(statearr_82406_82433[(2)] = inst_82369);

(statearr_82406_82433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82387 === (8))){
var inst_82346 = (state_82386[(7)]);
var inst_82350 = (state_82386[(9)]);
var inst_82354 = (state_82386[(10)]);
var inst_82359 = inst_82346.push(inst_82350);
var tmp82403 = inst_82346;
var inst_82346__$1 = tmp82403;
var inst_82347 = inst_82354;
var state_82386__$1 = (function (){var statearr_82407 = state_82386;
(statearr_82407[(7)] = inst_82346__$1);

(statearr_82407[(8)] = inst_82347);

(statearr_82407[(14)] = inst_82359);

return statearr_82407;
})();
var statearr_82408_82434 = state_82386__$1;
(statearr_82408_82434[(2)] = null);

(statearr_82408_82434[(1)] = (2));


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
});})(c__48312__auto___82420,out))
;
return ((function (switch__48198__auto__,c__48312__auto___82420,out){
return (function() {
var cljs$core$async$state_machine__48199__auto__ = null;
var cljs$core$async$state_machine__48199__auto____0 = (function (){
var statearr_82412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82412[(0)] = cljs$core$async$state_machine__48199__auto__);

(statearr_82412[(1)] = (1));

return statearr_82412;
});
var cljs$core$async$state_machine__48199__auto____1 = (function (state_82386){
while(true){
var ret_value__48200__auto__ = (function (){try{while(true){
var result__48201__auto__ = switch__48198__auto__.call(null,state_82386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48201__auto__;
}
break;
}
}catch (e82413){if((e82413 instanceof Object)){
var ex__48202__auto__ = e82413;
var statearr_82414_82435 = state_82386;
(statearr_82414_82435[(5)] = ex__48202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82436 = state_82386;
state_82386 = G__82436;
continue;
} else {
return ret_value__48200__auto__;
}
break;
}
});
cljs$core$async$state_machine__48199__auto__ = function(state_82386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48199__auto____1.call(this,state_82386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48199__auto____0;
cljs$core$async$state_machine__48199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48199__auto____1;
return cljs$core$async$state_machine__48199__auto__;
})()
;})(switch__48198__auto__,c__48312__auto___82420,out))
})();
var state__48314__auto__ = (function (){var statearr_82415 = f__48313__auto__.call(null);
(statearr_82415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48312__auto___82420);

return statearr_82415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48314__auto__);
});})(c__48312__auto___82420,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491640816614