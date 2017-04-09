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
var args183002 = [];
var len__40427__auto___183008 = arguments.length;
var i__40428__auto___183009 = (0);
while(true){
if((i__40428__auto___183009 < len__40427__auto___183008)){
args183002.push((arguments[i__40428__auto___183009]));

var G__183010 = (i__40428__auto___183009 + (1));
i__40428__auto___183009 = G__183010;
continue;
} else {
}
break;
}

var G__183004 = args183002.length;
switch (G__183004) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183002.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async183005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async183005 = (function (f,blockable,meta183006){
this.f = f;
this.blockable = blockable;
this.meta183006 = meta183006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async183005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183007,meta183006__$1){
var self__ = this;
var _183007__$1 = this;
return (new cljs.core.async.t_cljs$core$async183005(self__.f,self__.blockable,meta183006__$1));
});


cljs.core.async.t_cljs$core$async183005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183007){
var self__ = this;
var _183007__$1 = this;
return self__.meta183006;
});


cljs.core.async.t_cljs$core$async183005.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async183005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async183005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async183005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async183005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta183006","meta183006",-1719629942,null)], null);
});

cljs.core.async.t_cljs$core$async183005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async183005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async183005";

cljs.core.async.t_cljs$core$async183005.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async183005");
});

cljs.core.async.__GT_t_cljs$core$async183005 = (function cljs$core$async$__GT_t_cljs$core$async183005(f__$1,blockable__$1,meta183006){
return (new cljs.core.async.t_cljs$core$async183005(f__$1,blockable__$1,meta183006));
});

}

return (new cljs.core.async.t_cljs$core$async183005(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args183014 = [];
var len__40427__auto___183017 = arguments.length;
var i__40428__auto___183018 = (0);
while(true){
if((i__40428__auto___183018 < len__40427__auto___183017)){
args183014.push((arguments[i__40428__auto___183018]));

var G__183019 = (i__40428__auto___183018 + (1));
i__40428__auto___183018 = G__183019;
continue;
} else {
}
break;
}

var G__183016 = args183014.length;
switch (G__183016) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183014.length)].join('')));

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
var args183021 = [];
var len__40427__auto___183024 = arguments.length;
var i__40428__auto___183025 = (0);
while(true){
if((i__40428__auto___183025 < len__40427__auto___183024)){
args183021.push((arguments[i__40428__auto___183025]));

var G__183026 = (i__40428__auto___183025 + (1));
i__40428__auto___183025 = G__183026;
continue;
} else {
}
break;
}

var G__183023 = args183021.length;
switch (G__183023) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183021.length)].join('')));

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
var args183028 = [];
var len__40427__auto___183031 = arguments.length;
var i__40428__auto___183032 = (0);
while(true){
if((i__40428__auto___183032 < len__40427__auto___183031)){
args183028.push((arguments[i__40428__auto___183032]));

var G__183033 = (i__40428__auto___183032 + (1));
i__40428__auto___183032 = G__183033;
continue;
} else {
}
break;
}

var G__183030 = args183028.length;
switch (G__183030) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183028.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_183035 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_183035);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_183035,ret){
return (function (){
return fn1.call(null,val_183035);
});})(val_183035,ret))
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
var args183036 = [];
var len__40427__auto___183039 = arguments.length;
var i__40428__auto___183040 = (0);
while(true){
if((i__40428__auto___183040 < len__40427__auto___183039)){
args183036.push((arguments[i__40428__auto___183040]));

var G__183041 = (i__40428__auto___183040 + (1));
i__40428__auto___183040 = G__183041;
continue;
} else {
}
break;
}

var G__183038 = args183036.length;
switch (G__183038) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183036.length)].join('')));

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
var n__40227__auto___183043 = n;
var x_183044 = (0);
while(true){
if((x_183044 < n__40227__auto___183043)){
(a[x_183044] = (0));

var G__183045 = (x_183044 + (1));
x_183044 = G__183045;
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

var G__183046 = (i + (1));
i = G__183046;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async183050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async183050 = (function (flag,meta183051){
this.flag = flag;
this.meta183051 = meta183051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async183050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_183052,meta183051__$1){
var self__ = this;
var _183052__$1 = this;
return (new cljs.core.async.t_cljs$core$async183050(self__.flag,meta183051__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async183050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_183052){
var self__ = this;
var _183052__$1 = this;
return self__.meta183051;
});})(flag))
;


cljs.core.async.t_cljs$core$async183050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async183050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async183050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async183050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async183050.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta183051","meta183051",-1356930667,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async183050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async183050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async183050";

cljs.core.async.t_cljs$core$async183050.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async183050");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async183050 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async183050(flag__$1,meta183051){
return (new cljs.core.async.t_cljs$core$async183050(flag__$1,meta183051));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async183050(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async183056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async183056 = (function (flag,cb,meta183057){
this.flag = flag;
this.cb = cb;
this.meta183057 = meta183057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async183056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183058,meta183057__$1){
var self__ = this;
var _183058__$1 = this;
return (new cljs.core.async.t_cljs$core$async183056(self__.flag,self__.cb,meta183057__$1));
});


cljs.core.async.t_cljs$core$async183056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183058){
var self__ = this;
var _183058__$1 = this;
return self__.meta183057;
});


cljs.core.async.t_cljs$core$async183056.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async183056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async183056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async183056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async183056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta183057","meta183057",933961574,null)], null);
});

cljs.core.async.t_cljs$core$async183056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async183056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async183056";

cljs.core.async.t_cljs$core$async183056.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async183056");
});

cljs.core.async.__GT_t_cljs$core$async183056 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async183056(flag__$1,cb__$1,meta183057){
return (new cljs.core.async.t_cljs$core$async183056(flag__$1,cb__$1,meta183057));
});

}

return (new cljs.core.async.t_cljs$core$async183056(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__183059_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__183059_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__183060_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__183060_SHARP_,port], null));
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
var G__183061 = (i + (1));
i = G__183061;
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
var len__40427__auto___183067 = arguments.length;
var i__40428__auto___183068 = (0);
while(true){
if((i__40428__auto___183068 < len__40427__auto___183067)){
args__40434__auto__.push((arguments[i__40428__auto___183068]));

var G__183069 = (i__40428__auto___183068 + (1));
i__40428__auto___183068 = G__183069;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__183064){
var map__183065 = p__183064;
var map__183065__$1 = ((((!((map__183065 == null)))?((((map__183065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__183065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__183065):map__183065);
var opts = map__183065__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq183062){
var G__183063 = cljs.core.first.call(null,seq183062);
var seq183062__$1 = cljs.core.next.call(null,seq183062);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__183063,seq183062__$1);
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
var args183070 = [];
var len__40427__auto___183120 = arguments.length;
var i__40428__auto___183121 = (0);
while(true){
if((i__40428__auto___183121 < len__40427__auto___183120)){
args183070.push((arguments[i__40428__auto___183121]));

var G__183122 = (i__40428__auto___183121 + (1));
i__40428__auto___183121 = G__183122;
continue;
} else {
}
break;
}

var G__183072 = args183070.length;
switch (G__183072) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183070.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44084__auto___183124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___183124){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___183124){
return (function (state_183096){
var state_val_183097 = (state_183096[(1)]);
if((state_val_183097 === (7))){
var inst_183092 = (state_183096[(2)]);
var state_183096__$1 = state_183096;
var statearr_183098_183125 = state_183096__$1;
(statearr_183098_183125[(2)] = inst_183092);

(statearr_183098_183125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (1))){
var state_183096__$1 = state_183096;
var statearr_183099_183126 = state_183096__$1;
(statearr_183099_183126[(2)] = null);

(statearr_183099_183126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (4))){
var inst_183075 = (state_183096[(7)]);
var inst_183075__$1 = (state_183096[(2)]);
var inst_183076 = (inst_183075__$1 == null);
var state_183096__$1 = (function (){var statearr_183100 = state_183096;
(statearr_183100[(7)] = inst_183075__$1);

return statearr_183100;
})();
if(cljs.core.truth_(inst_183076)){
var statearr_183101_183127 = state_183096__$1;
(statearr_183101_183127[(1)] = (5));

} else {
var statearr_183102_183128 = state_183096__$1;
(statearr_183102_183128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (13))){
var state_183096__$1 = state_183096;
var statearr_183103_183129 = state_183096__$1;
(statearr_183103_183129[(2)] = null);

(statearr_183103_183129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (6))){
var inst_183075 = (state_183096[(7)]);
var state_183096__$1 = state_183096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183096__$1,(11),to,inst_183075);
} else {
if((state_val_183097 === (3))){
var inst_183094 = (state_183096[(2)]);
var state_183096__$1 = state_183096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183096__$1,inst_183094);
} else {
if((state_val_183097 === (12))){
var state_183096__$1 = state_183096;
var statearr_183104_183130 = state_183096__$1;
(statearr_183104_183130[(2)] = null);

(statearr_183104_183130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (2))){
var state_183096__$1 = state_183096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183096__$1,(4),from);
} else {
if((state_val_183097 === (11))){
var inst_183085 = (state_183096[(2)]);
var state_183096__$1 = state_183096;
if(cljs.core.truth_(inst_183085)){
var statearr_183105_183131 = state_183096__$1;
(statearr_183105_183131[(1)] = (12));

} else {
var statearr_183106_183132 = state_183096__$1;
(statearr_183106_183132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (9))){
var state_183096__$1 = state_183096;
var statearr_183107_183133 = state_183096__$1;
(statearr_183107_183133[(2)] = null);

(statearr_183107_183133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (5))){
var state_183096__$1 = state_183096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_183108_183134 = state_183096__$1;
(statearr_183108_183134[(1)] = (8));

} else {
var statearr_183109_183135 = state_183096__$1;
(statearr_183109_183135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (14))){
var inst_183090 = (state_183096[(2)]);
var state_183096__$1 = state_183096;
var statearr_183110_183136 = state_183096__$1;
(statearr_183110_183136[(2)] = inst_183090);

(statearr_183110_183136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (10))){
var inst_183082 = (state_183096[(2)]);
var state_183096__$1 = state_183096;
var statearr_183111_183137 = state_183096__$1;
(statearr_183111_183137[(2)] = inst_183082);

(statearr_183111_183137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183097 === (8))){
var inst_183079 = cljs.core.async.close_BANG_.call(null,to);
var state_183096__$1 = state_183096;
var statearr_183112_183138 = state_183096__$1;
(statearr_183112_183138[(2)] = inst_183079);

(statearr_183112_183138[(1)] = (10));


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
});})(c__44084__auto___183124))
;
return ((function (switch__44061__auto__,c__44084__auto___183124){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_183116 = [null,null,null,null,null,null,null,null];
(statearr_183116[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_183116[(1)] = (1));

return statearr_183116;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_183096){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183117){if((e183117 instanceof Object)){
var ex__44065__auto__ = e183117;
var statearr_183118_183139 = state_183096;
(statearr_183118_183139[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183140 = state_183096;
state_183096 = G__183140;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_183096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_183096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___183124))
})();
var state__44086__auto__ = (function (){var statearr_183119 = f__44085__auto__.call(null);
(statearr_183119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___183124);

return statearr_183119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___183124))
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
return (function (p__183328){
var vec__183329 = p__183328;
var v = cljs.core.nth.call(null,vec__183329,(0),null);
var p = cljs.core.nth.call(null,vec__183329,(1),null);
var job = vec__183329;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44084__auto___183515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___183515,res,vec__183329,v,p,job,jobs,results){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___183515,res,vec__183329,v,p,job,jobs,results){
return (function (state_183336){
var state_val_183337 = (state_183336[(1)]);
if((state_val_183337 === (1))){
var state_183336__$1 = state_183336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183336__$1,(2),res,v);
} else {
if((state_val_183337 === (2))){
var inst_183333 = (state_183336[(2)]);
var inst_183334 = cljs.core.async.close_BANG_.call(null,res);
var state_183336__$1 = (function (){var statearr_183338 = state_183336;
(statearr_183338[(7)] = inst_183333);

return statearr_183338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183336__$1,inst_183334);
} else {
return null;
}
}
});})(c__44084__auto___183515,res,vec__183329,v,p,job,jobs,results))
;
return ((function (switch__44061__auto__,c__44084__auto___183515,res,vec__183329,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_183342 = [null,null,null,null,null,null,null,null];
(statearr_183342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_183342[(1)] = (1));

return statearr_183342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_183336){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183343){if((e183343 instanceof Object)){
var ex__44065__auto__ = e183343;
var statearr_183344_183516 = state_183336;
(statearr_183344_183516[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183517 = state_183336;
state_183336 = G__183517;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_183336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_183336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___183515,res,vec__183329,v,p,job,jobs,results))
})();
var state__44086__auto__ = (function (){var statearr_183345 = f__44085__auto__.call(null);
(statearr_183345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___183515);

return statearr_183345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___183515,res,vec__183329,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__183346){
var vec__183347 = p__183346;
var v = cljs.core.nth.call(null,vec__183347,(0),null);
var p = cljs.core.nth.call(null,vec__183347,(1),null);
var job = vec__183347;
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
var n__40227__auto___183518 = n;
var __183519 = (0);
while(true){
if((__183519 < n__40227__auto___183518)){
var G__183350_183520 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__183350_183520) {
case "compute":
var c__44084__auto___183522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__183519,c__44084__auto___183522,G__183350_183520,n__40227__auto___183518,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (__183519,c__44084__auto___183522,G__183350_183520,n__40227__auto___183518,jobs,results,process,async){
return (function (state_183363){
var state_val_183364 = (state_183363[(1)]);
if((state_val_183364 === (1))){
var state_183363__$1 = state_183363;
var statearr_183365_183523 = state_183363__$1;
(statearr_183365_183523[(2)] = null);

(statearr_183365_183523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183364 === (2))){
var state_183363__$1 = state_183363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183363__$1,(4),jobs);
} else {
if((state_val_183364 === (3))){
var inst_183361 = (state_183363[(2)]);
var state_183363__$1 = state_183363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183363__$1,inst_183361);
} else {
if((state_val_183364 === (4))){
var inst_183353 = (state_183363[(2)]);
var inst_183354 = process.call(null,inst_183353);
var state_183363__$1 = state_183363;
if(cljs.core.truth_(inst_183354)){
var statearr_183366_183524 = state_183363__$1;
(statearr_183366_183524[(1)] = (5));

} else {
var statearr_183367_183525 = state_183363__$1;
(statearr_183367_183525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183364 === (5))){
var state_183363__$1 = state_183363;
var statearr_183368_183526 = state_183363__$1;
(statearr_183368_183526[(2)] = null);

(statearr_183368_183526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183364 === (6))){
var state_183363__$1 = state_183363;
var statearr_183369_183527 = state_183363__$1;
(statearr_183369_183527[(2)] = null);

(statearr_183369_183527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183364 === (7))){
var inst_183359 = (state_183363[(2)]);
var state_183363__$1 = state_183363;
var statearr_183370_183528 = state_183363__$1;
(statearr_183370_183528[(2)] = inst_183359);

(statearr_183370_183528[(1)] = (3));


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
});})(__183519,c__44084__auto___183522,G__183350_183520,n__40227__auto___183518,jobs,results,process,async))
;
return ((function (__183519,switch__44061__auto__,c__44084__auto___183522,G__183350_183520,n__40227__auto___183518,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_183374 = [null,null,null,null,null,null,null];
(statearr_183374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_183374[(1)] = (1));

return statearr_183374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_183363){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183375){if((e183375 instanceof Object)){
var ex__44065__auto__ = e183375;
var statearr_183376_183529 = state_183363;
(statearr_183376_183529[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183530 = state_183363;
state_183363 = G__183530;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_183363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_183363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(__183519,switch__44061__auto__,c__44084__auto___183522,G__183350_183520,n__40227__auto___183518,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_183377 = f__44085__auto__.call(null);
(statearr_183377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___183522);

return statearr_183377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(__183519,c__44084__auto___183522,G__183350_183520,n__40227__auto___183518,jobs,results,process,async))
);


break;
case "async":
var c__44084__auto___183531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__183519,c__44084__auto___183531,G__183350_183520,n__40227__auto___183518,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (__183519,c__44084__auto___183531,G__183350_183520,n__40227__auto___183518,jobs,results,process,async){
return (function (state_183390){
var state_val_183391 = (state_183390[(1)]);
if((state_val_183391 === (1))){
var state_183390__$1 = state_183390;
var statearr_183392_183532 = state_183390__$1;
(statearr_183392_183532[(2)] = null);

(statearr_183392_183532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183391 === (2))){
var state_183390__$1 = state_183390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183390__$1,(4),jobs);
} else {
if((state_val_183391 === (3))){
var inst_183388 = (state_183390[(2)]);
var state_183390__$1 = state_183390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183390__$1,inst_183388);
} else {
if((state_val_183391 === (4))){
var inst_183380 = (state_183390[(2)]);
var inst_183381 = async.call(null,inst_183380);
var state_183390__$1 = state_183390;
if(cljs.core.truth_(inst_183381)){
var statearr_183393_183533 = state_183390__$1;
(statearr_183393_183533[(1)] = (5));

} else {
var statearr_183394_183534 = state_183390__$1;
(statearr_183394_183534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183391 === (5))){
var state_183390__$1 = state_183390;
var statearr_183395_183535 = state_183390__$1;
(statearr_183395_183535[(2)] = null);

(statearr_183395_183535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183391 === (6))){
var state_183390__$1 = state_183390;
var statearr_183396_183536 = state_183390__$1;
(statearr_183396_183536[(2)] = null);

(statearr_183396_183536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183391 === (7))){
var inst_183386 = (state_183390[(2)]);
var state_183390__$1 = state_183390;
var statearr_183397_183537 = state_183390__$1;
(statearr_183397_183537[(2)] = inst_183386);

(statearr_183397_183537[(1)] = (3));


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
});})(__183519,c__44084__auto___183531,G__183350_183520,n__40227__auto___183518,jobs,results,process,async))
;
return ((function (__183519,switch__44061__auto__,c__44084__auto___183531,G__183350_183520,n__40227__auto___183518,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_183401 = [null,null,null,null,null,null,null];
(statearr_183401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_183401[(1)] = (1));

return statearr_183401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_183390){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183402){if((e183402 instanceof Object)){
var ex__44065__auto__ = e183402;
var statearr_183403_183538 = state_183390;
(statearr_183403_183538[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183539 = state_183390;
state_183390 = G__183539;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_183390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_183390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(__183519,switch__44061__auto__,c__44084__auto___183531,G__183350_183520,n__40227__auto___183518,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_183404 = f__44085__auto__.call(null);
(statearr_183404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___183531);

return statearr_183404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(__183519,c__44084__auto___183531,G__183350_183520,n__40227__auto___183518,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__183540 = (__183519 + (1));
__183519 = G__183540;
continue;
} else {
}
break;
}

var c__44084__auto___183541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___183541,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___183541,jobs,results,process,async){
return (function (state_183426){
var state_val_183427 = (state_183426[(1)]);
if((state_val_183427 === (1))){
var state_183426__$1 = state_183426;
var statearr_183428_183542 = state_183426__$1;
(statearr_183428_183542[(2)] = null);

(statearr_183428_183542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183427 === (2))){
var state_183426__$1 = state_183426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183426__$1,(4),from);
} else {
if((state_val_183427 === (3))){
var inst_183424 = (state_183426[(2)]);
var state_183426__$1 = state_183426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183426__$1,inst_183424);
} else {
if((state_val_183427 === (4))){
var inst_183407 = (state_183426[(7)]);
var inst_183407__$1 = (state_183426[(2)]);
var inst_183408 = (inst_183407__$1 == null);
var state_183426__$1 = (function (){var statearr_183429 = state_183426;
(statearr_183429[(7)] = inst_183407__$1);

return statearr_183429;
})();
if(cljs.core.truth_(inst_183408)){
var statearr_183430_183543 = state_183426__$1;
(statearr_183430_183543[(1)] = (5));

} else {
var statearr_183431_183544 = state_183426__$1;
(statearr_183431_183544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183427 === (5))){
var inst_183410 = cljs.core.async.close_BANG_.call(null,jobs);
var state_183426__$1 = state_183426;
var statearr_183432_183545 = state_183426__$1;
(statearr_183432_183545[(2)] = inst_183410);

(statearr_183432_183545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183427 === (6))){
var inst_183407 = (state_183426[(7)]);
var inst_183412 = (state_183426[(8)]);
var inst_183412__$1 = cljs.core.async.chan.call(null,(1));
var inst_183413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_183414 = [inst_183407,inst_183412__$1];
var inst_183415 = (new cljs.core.PersistentVector(null,2,(5),inst_183413,inst_183414,null));
var state_183426__$1 = (function (){var statearr_183433 = state_183426;
(statearr_183433[(8)] = inst_183412__$1);

return statearr_183433;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183426__$1,(8),jobs,inst_183415);
} else {
if((state_val_183427 === (7))){
var inst_183422 = (state_183426[(2)]);
var state_183426__$1 = state_183426;
var statearr_183434_183546 = state_183426__$1;
(statearr_183434_183546[(2)] = inst_183422);

(statearr_183434_183546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183427 === (8))){
var inst_183412 = (state_183426[(8)]);
var inst_183417 = (state_183426[(2)]);
var state_183426__$1 = (function (){var statearr_183435 = state_183426;
(statearr_183435[(9)] = inst_183417);

return statearr_183435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183426__$1,(9),results,inst_183412);
} else {
if((state_val_183427 === (9))){
var inst_183419 = (state_183426[(2)]);
var state_183426__$1 = (function (){var statearr_183436 = state_183426;
(statearr_183436[(10)] = inst_183419);

return statearr_183436;
})();
var statearr_183437_183547 = state_183426__$1;
(statearr_183437_183547[(2)] = null);

(statearr_183437_183547[(1)] = (2));


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
});})(c__44084__auto___183541,jobs,results,process,async))
;
return ((function (switch__44061__auto__,c__44084__auto___183541,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_183441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_183441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_183441[(1)] = (1));

return statearr_183441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_183426){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183442){if((e183442 instanceof Object)){
var ex__44065__auto__ = e183442;
var statearr_183443_183548 = state_183426;
(statearr_183443_183548[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183549 = state_183426;
state_183426 = G__183549;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_183426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_183426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___183541,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_183444 = f__44085__auto__.call(null);
(statearr_183444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___183541);

return statearr_183444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___183541,jobs,results,process,async))
);


var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,jobs,results,process,async){
return (function (state_183482){
var state_val_183483 = (state_183482[(1)]);
if((state_val_183483 === (7))){
var inst_183478 = (state_183482[(2)]);
var state_183482__$1 = state_183482;
var statearr_183484_183550 = state_183482__$1;
(statearr_183484_183550[(2)] = inst_183478);

(statearr_183484_183550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (20))){
var state_183482__$1 = state_183482;
var statearr_183485_183551 = state_183482__$1;
(statearr_183485_183551[(2)] = null);

(statearr_183485_183551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (1))){
var state_183482__$1 = state_183482;
var statearr_183486_183552 = state_183482__$1;
(statearr_183486_183552[(2)] = null);

(statearr_183486_183552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (4))){
var inst_183447 = (state_183482[(7)]);
var inst_183447__$1 = (state_183482[(2)]);
var inst_183448 = (inst_183447__$1 == null);
var state_183482__$1 = (function (){var statearr_183487 = state_183482;
(statearr_183487[(7)] = inst_183447__$1);

return statearr_183487;
})();
if(cljs.core.truth_(inst_183448)){
var statearr_183488_183553 = state_183482__$1;
(statearr_183488_183553[(1)] = (5));

} else {
var statearr_183489_183554 = state_183482__$1;
(statearr_183489_183554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (15))){
var inst_183460 = (state_183482[(8)]);
var state_183482__$1 = state_183482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183482__$1,(18),to,inst_183460);
} else {
if((state_val_183483 === (21))){
var inst_183473 = (state_183482[(2)]);
var state_183482__$1 = state_183482;
var statearr_183490_183555 = state_183482__$1;
(statearr_183490_183555[(2)] = inst_183473);

(statearr_183490_183555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (13))){
var inst_183475 = (state_183482[(2)]);
var state_183482__$1 = (function (){var statearr_183491 = state_183482;
(statearr_183491[(9)] = inst_183475);

return statearr_183491;
})();
var statearr_183492_183556 = state_183482__$1;
(statearr_183492_183556[(2)] = null);

(statearr_183492_183556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (6))){
var inst_183447 = (state_183482[(7)]);
var state_183482__$1 = state_183482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183482__$1,(11),inst_183447);
} else {
if((state_val_183483 === (17))){
var inst_183468 = (state_183482[(2)]);
var state_183482__$1 = state_183482;
if(cljs.core.truth_(inst_183468)){
var statearr_183493_183557 = state_183482__$1;
(statearr_183493_183557[(1)] = (19));

} else {
var statearr_183494_183558 = state_183482__$1;
(statearr_183494_183558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (3))){
var inst_183480 = (state_183482[(2)]);
var state_183482__$1 = state_183482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183482__$1,inst_183480);
} else {
if((state_val_183483 === (12))){
var inst_183457 = (state_183482[(10)]);
var state_183482__$1 = state_183482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183482__$1,(14),inst_183457);
} else {
if((state_val_183483 === (2))){
var state_183482__$1 = state_183482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183482__$1,(4),results);
} else {
if((state_val_183483 === (19))){
var state_183482__$1 = state_183482;
var statearr_183495_183559 = state_183482__$1;
(statearr_183495_183559[(2)] = null);

(statearr_183495_183559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (11))){
var inst_183457 = (state_183482[(2)]);
var state_183482__$1 = (function (){var statearr_183496 = state_183482;
(statearr_183496[(10)] = inst_183457);

return statearr_183496;
})();
var statearr_183497_183560 = state_183482__$1;
(statearr_183497_183560[(2)] = null);

(statearr_183497_183560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (9))){
var state_183482__$1 = state_183482;
var statearr_183498_183561 = state_183482__$1;
(statearr_183498_183561[(2)] = null);

(statearr_183498_183561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (5))){
var state_183482__$1 = state_183482;
if(cljs.core.truth_(close_QMARK_)){
var statearr_183499_183562 = state_183482__$1;
(statearr_183499_183562[(1)] = (8));

} else {
var statearr_183500_183563 = state_183482__$1;
(statearr_183500_183563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (14))){
var inst_183462 = (state_183482[(11)]);
var inst_183460 = (state_183482[(8)]);
var inst_183460__$1 = (state_183482[(2)]);
var inst_183461 = (inst_183460__$1 == null);
var inst_183462__$1 = cljs.core.not.call(null,inst_183461);
var state_183482__$1 = (function (){var statearr_183501 = state_183482;
(statearr_183501[(11)] = inst_183462__$1);

(statearr_183501[(8)] = inst_183460__$1);

return statearr_183501;
})();
if(inst_183462__$1){
var statearr_183502_183564 = state_183482__$1;
(statearr_183502_183564[(1)] = (15));

} else {
var statearr_183503_183565 = state_183482__$1;
(statearr_183503_183565[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (16))){
var inst_183462 = (state_183482[(11)]);
var state_183482__$1 = state_183482;
var statearr_183504_183566 = state_183482__$1;
(statearr_183504_183566[(2)] = inst_183462);

(statearr_183504_183566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (10))){
var inst_183454 = (state_183482[(2)]);
var state_183482__$1 = state_183482;
var statearr_183505_183567 = state_183482__$1;
(statearr_183505_183567[(2)] = inst_183454);

(statearr_183505_183567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (18))){
var inst_183465 = (state_183482[(2)]);
var state_183482__$1 = state_183482;
var statearr_183506_183568 = state_183482__$1;
(statearr_183506_183568[(2)] = inst_183465);

(statearr_183506_183568[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183483 === (8))){
var inst_183451 = cljs.core.async.close_BANG_.call(null,to);
var state_183482__$1 = state_183482;
var statearr_183507_183569 = state_183482__$1;
(statearr_183507_183569[(2)] = inst_183451);

(statearr_183507_183569[(1)] = (10));


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
var statearr_183511 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_183511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_183511[(1)] = (1));

return statearr_183511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_183482){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183512){if((e183512 instanceof Object)){
var ex__44065__auto__ = e183512;
var statearr_183513_183570 = state_183482;
(statearr_183513_183570[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183571 = state_183482;
state_183482 = G__183571;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_183482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_183482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_183514 = f__44085__auto__.call(null);
(statearr_183514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_183514;
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
var args183572 = [];
var len__40427__auto___183575 = arguments.length;
var i__40428__auto___183576 = (0);
while(true){
if((i__40428__auto___183576 < len__40427__auto___183575)){
args183572.push((arguments[i__40428__auto___183576]));

var G__183577 = (i__40428__auto___183576 + (1));
i__40428__auto___183576 = G__183577;
continue;
} else {
}
break;
}

var G__183574 = args183572.length;
switch (G__183574) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183572.length)].join('')));

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
var args183579 = [];
var len__40427__auto___183582 = arguments.length;
var i__40428__auto___183583 = (0);
while(true){
if((i__40428__auto___183583 < len__40427__auto___183582)){
args183579.push((arguments[i__40428__auto___183583]));

var G__183584 = (i__40428__auto___183583 + (1));
i__40428__auto___183583 = G__183584;
continue;
} else {
}
break;
}

var G__183581 = args183579.length;
switch (G__183581) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183579.length)].join('')));

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
var args183586 = [];
var len__40427__auto___183639 = arguments.length;
var i__40428__auto___183640 = (0);
while(true){
if((i__40428__auto___183640 < len__40427__auto___183639)){
args183586.push((arguments[i__40428__auto___183640]));

var G__183641 = (i__40428__auto___183640 + (1));
i__40428__auto___183640 = G__183641;
continue;
} else {
}
break;
}

var G__183588 = args183586.length;
switch (G__183588) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183586.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44084__auto___183643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___183643,tc,fc){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___183643,tc,fc){
return (function (state_183614){
var state_val_183615 = (state_183614[(1)]);
if((state_val_183615 === (7))){
var inst_183610 = (state_183614[(2)]);
var state_183614__$1 = state_183614;
var statearr_183616_183644 = state_183614__$1;
(statearr_183616_183644[(2)] = inst_183610);

(statearr_183616_183644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (1))){
var state_183614__$1 = state_183614;
var statearr_183617_183645 = state_183614__$1;
(statearr_183617_183645[(2)] = null);

(statearr_183617_183645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (4))){
var inst_183591 = (state_183614[(7)]);
var inst_183591__$1 = (state_183614[(2)]);
var inst_183592 = (inst_183591__$1 == null);
var state_183614__$1 = (function (){var statearr_183618 = state_183614;
(statearr_183618[(7)] = inst_183591__$1);

return statearr_183618;
})();
if(cljs.core.truth_(inst_183592)){
var statearr_183619_183646 = state_183614__$1;
(statearr_183619_183646[(1)] = (5));

} else {
var statearr_183620_183647 = state_183614__$1;
(statearr_183620_183647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (13))){
var state_183614__$1 = state_183614;
var statearr_183621_183648 = state_183614__$1;
(statearr_183621_183648[(2)] = null);

(statearr_183621_183648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (6))){
var inst_183591 = (state_183614[(7)]);
var inst_183597 = p.call(null,inst_183591);
var state_183614__$1 = state_183614;
if(cljs.core.truth_(inst_183597)){
var statearr_183622_183649 = state_183614__$1;
(statearr_183622_183649[(1)] = (9));

} else {
var statearr_183623_183650 = state_183614__$1;
(statearr_183623_183650[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (3))){
var inst_183612 = (state_183614[(2)]);
var state_183614__$1 = state_183614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183614__$1,inst_183612);
} else {
if((state_val_183615 === (12))){
var state_183614__$1 = state_183614;
var statearr_183624_183651 = state_183614__$1;
(statearr_183624_183651[(2)] = null);

(statearr_183624_183651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (2))){
var state_183614__$1 = state_183614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183614__$1,(4),ch);
} else {
if((state_val_183615 === (11))){
var inst_183591 = (state_183614[(7)]);
var inst_183601 = (state_183614[(2)]);
var state_183614__$1 = state_183614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183614__$1,(8),inst_183601,inst_183591);
} else {
if((state_val_183615 === (9))){
var state_183614__$1 = state_183614;
var statearr_183625_183652 = state_183614__$1;
(statearr_183625_183652[(2)] = tc);

(statearr_183625_183652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (5))){
var inst_183594 = cljs.core.async.close_BANG_.call(null,tc);
var inst_183595 = cljs.core.async.close_BANG_.call(null,fc);
var state_183614__$1 = (function (){var statearr_183626 = state_183614;
(statearr_183626[(8)] = inst_183594);

return statearr_183626;
})();
var statearr_183627_183653 = state_183614__$1;
(statearr_183627_183653[(2)] = inst_183595);

(statearr_183627_183653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (14))){
var inst_183608 = (state_183614[(2)]);
var state_183614__$1 = state_183614;
var statearr_183628_183654 = state_183614__$1;
(statearr_183628_183654[(2)] = inst_183608);

(statearr_183628_183654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (10))){
var state_183614__$1 = state_183614;
var statearr_183629_183655 = state_183614__$1;
(statearr_183629_183655[(2)] = fc);

(statearr_183629_183655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183615 === (8))){
var inst_183603 = (state_183614[(2)]);
var state_183614__$1 = state_183614;
if(cljs.core.truth_(inst_183603)){
var statearr_183630_183656 = state_183614__$1;
(statearr_183630_183656[(1)] = (12));

} else {
var statearr_183631_183657 = state_183614__$1;
(statearr_183631_183657[(1)] = (13));

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
});})(c__44084__auto___183643,tc,fc))
;
return ((function (switch__44061__auto__,c__44084__auto___183643,tc,fc){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_183635 = [null,null,null,null,null,null,null,null,null];
(statearr_183635[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_183635[(1)] = (1));

return statearr_183635;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_183614){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183636){if((e183636 instanceof Object)){
var ex__44065__auto__ = e183636;
var statearr_183637_183658 = state_183614;
(statearr_183637_183658[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183659 = state_183614;
state_183614 = G__183659;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_183614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_183614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___183643,tc,fc))
})();
var state__44086__auto__ = (function (){var statearr_183638 = f__44085__auto__.call(null);
(statearr_183638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___183643);

return statearr_183638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___183643,tc,fc))
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
return (function (state_183723){
var state_val_183724 = (state_183723[(1)]);
if((state_val_183724 === (7))){
var inst_183719 = (state_183723[(2)]);
var state_183723__$1 = state_183723;
var statearr_183725_183746 = state_183723__$1;
(statearr_183725_183746[(2)] = inst_183719);

(statearr_183725_183746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183724 === (1))){
var inst_183703 = init;
var state_183723__$1 = (function (){var statearr_183726 = state_183723;
(statearr_183726[(7)] = inst_183703);

return statearr_183726;
})();
var statearr_183727_183747 = state_183723__$1;
(statearr_183727_183747[(2)] = null);

(statearr_183727_183747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183724 === (4))){
var inst_183706 = (state_183723[(8)]);
var inst_183706__$1 = (state_183723[(2)]);
var inst_183707 = (inst_183706__$1 == null);
var state_183723__$1 = (function (){var statearr_183728 = state_183723;
(statearr_183728[(8)] = inst_183706__$1);

return statearr_183728;
})();
if(cljs.core.truth_(inst_183707)){
var statearr_183729_183748 = state_183723__$1;
(statearr_183729_183748[(1)] = (5));

} else {
var statearr_183730_183749 = state_183723__$1;
(statearr_183730_183749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183724 === (6))){
var inst_183706 = (state_183723[(8)]);
var inst_183703 = (state_183723[(7)]);
var inst_183710 = (state_183723[(9)]);
var inst_183710__$1 = f.call(null,inst_183703,inst_183706);
var inst_183711 = cljs.core.reduced_QMARK_.call(null,inst_183710__$1);
var state_183723__$1 = (function (){var statearr_183731 = state_183723;
(statearr_183731[(9)] = inst_183710__$1);

return statearr_183731;
})();
if(inst_183711){
var statearr_183732_183750 = state_183723__$1;
(statearr_183732_183750[(1)] = (8));

} else {
var statearr_183733_183751 = state_183723__$1;
(statearr_183733_183751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183724 === (3))){
var inst_183721 = (state_183723[(2)]);
var state_183723__$1 = state_183723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183723__$1,inst_183721);
} else {
if((state_val_183724 === (2))){
var state_183723__$1 = state_183723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183723__$1,(4),ch);
} else {
if((state_val_183724 === (9))){
var inst_183710 = (state_183723[(9)]);
var inst_183703 = inst_183710;
var state_183723__$1 = (function (){var statearr_183734 = state_183723;
(statearr_183734[(7)] = inst_183703);

return statearr_183734;
})();
var statearr_183735_183752 = state_183723__$1;
(statearr_183735_183752[(2)] = null);

(statearr_183735_183752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183724 === (5))){
var inst_183703 = (state_183723[(7)]);
var state_183723__$1 = state_183723;
var statearr_183736_183753 = state_183723__$1;
(statearr_183736_183753[(2)] = inst_183703);

(statearr_183736_183753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183724 === (10))){
var inst_183717 = (state_183723[(2)]);
var state_183723__$1 = state_183723;
var statearr_183737_183754 = state_183723__$1;
(statearr_183737_183754[(2)] = inst_183717);

(statearr_183737_183754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183724 === (8))){
var inst_183710 = (state_183723[(9)]);
var inst_183713 = cljs.core.deref.call(null,inst_183710);
var state_183723__$1 = state_183723;
var statearr_183738_183755 = state_183723__$1;
(statearr_183738_183755[(2)] = inst_183713);

(statearr_183738_183755[(1)] = (10));


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
var statearr_183742 = [null,null,null,null,null,null,null,null,null,null];
(statearr_183742[(0)] = cljs$core$async$reduce_$_state_machine__44062__auto__);

(statearr_183742[(1)] = (1));

return statearr_183742;
});
var cljs$core$async$reduce_$_state_machine__44062__auto____1 = (function (state_183723){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183743){if((e183743 instanceof Object)){
var ex__44065__auto__ = e183743;
var statearr_183744_183756 = state_183723;
(statearr_183744_183756[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183757 = state_183723;
state_183723 = G__183757;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44062__auto__ = function(state_183723){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44062__auto____1.call(this,state_183723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44062__auto____0;
cljs$core$async$reduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44062__auto____1;
return cljs$core$async$reduce_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_183745 = f__44085__auto__.call(null);
(statearr_183745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_183745;
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
return (function (state_183777){
var state_val_183778 = (state_183777[(1)]);
if((state_val_183778 === (1))){
var inst_183772 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_183777__$1 = state_183777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_183777__$1,(2),inst_183772);
} else {
if((state_val_183778 === (2))){
var inst_183774 = (state_183777[(2)]);
var inst_183775 = f__$1.call(null,inst_183774);
var state_183777__$1 = state_183777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183777__$1,inst_183775);
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
var statearr_183782 = [null,null,null,null,null,null,null];
(statearr_183782[(0)] = cljs$core$async$transduce_$_state_machine__44062__auto__);

(statearr_183782[(1)] = (1));

return statearr_183782;
});
var cljs$core$async$transduce_$_state_machine__44062__auto____1 = (function (state_183777){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183783){if((e183783 instanceof Object)){
var ex__44065__auto__ = e183783;
var statearr_183784_183786 = state_183777;
(statearr_183784_183786[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183787 = state_183777;
state_183777 = G__183787;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44062__auto__ = function(state_183777){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44062__auto____1.call(this,state_183777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44062__auto____0;
cljs$core$async$transduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44062__auto____1;
return cljs$core$async$transduce_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,f__$1))
})();
var state__44086__auto__ = (function (){var statearr_183785 = f__44085__auto__.call(null);
(statearr_183785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_183785;
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
var args183788 = [];
var len__40427__auto___183840 = arguments.length;
var i__40428__auto___183841 = (0);
while(true){
if((i__40428__auto___183841 < len__40427__auto___183840)){
args183788.push((arguments[i__40428__auto___183841]));

var G__183842 = (i__40428__auto___183841 + (1));
i__40428__auto___183841 = G__183842;
continue;
} else {
}
break;
}

var G__183790 = args183788.length;
switch (G__183790) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args183788.length)].join('')));

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
return (function (state_183815){
var state_val_183816 = (state_183815[(1)]);
if((state_val_183816 === (7))){
var inst_183797 = (state_183815[(2)]);
var state_183815__$1 = state_183815;
var statearr_183817_183844 = state_183815__$1;
(statearr_183817_183844[(2)] = inst_183797);

(statearr_183817_183844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (1))){
var inst_183791 = cljs.core.seq.call(null,coll);
var inst_183792 = inst_183791;
var state_183815__$1 = (function (){var statearr_183818 = state_183815;
(statearr_183818[(7)] = inst_183792);

return statearr_183818;
})();
var statearr_183819_183845 = state_183815__$1;
(statearr_183819_183845[(2)] = null);

(statearr_183819_183845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (4))){
var inst_183792 = (state_183815[(7)]);
var inst_183795 = cljs.core.first.call(null,inst_183792);
var state_183815__$1 = state_183815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_183815__$1,(7),ch,inst_183795);
} else {
if((state_val_183816 === (13))){
var inst_183809 = (state_183815[(2)]);
var state_183815__$1 = state_183815;
var statearr_183820_183846 = state_183815__$1;
(statearr_183820_183846[(2)] = inst_183809);

(statearr_183820_183846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (6))){
var inst_183800 = (state_183815[(2)]);
var state_183815__$1 = state_183815;
if(cljs.core.truth_(inst_183800)){
var statearr_183821_183847 = state_183815__$1;
(statearr_183821_183847[(1)] = (8));

} else {
var statearr_183822_183848 = state_183815__$1;
(statearr_183822_183848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (3))){
var inst_183813 = (state_183815[(2)]);
var state_183815__$1 = state_183815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_183815__$1,inst_183813);
} else {
if((state_val_183816 === (12))){
var state_183815__$1 = state_183815;
var statearr_183823_183849 = state_183815__$1;
(statearr_183823_183849[(2)] = null);

(statearr_183823_183849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (2))){
var inst_183792 = (state_183815[(7)]);
var state_183815__$1 = state_183815;
if(cljs.core.truth_(inst_183792)){
var statearr_183824_183850 = state_183815__$1;
(statearr_183824_183850[(1)] = (4));

} else {
var statearr_183825_183851 = state_183815__$1;
(statearr_183825_183851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (11))){
var inst_183806 = cljs.core.async.close_BANG_.call(null,ch);
var state_183815__$1 = state_183815;
var statearr_183826_183852 = state_183815__$1;
(statearr_183826_183852[(2)] = inst_183806);

(statearr_183826_183852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (9))){
var state_183815__$1 = state_183815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_183827_183853 = state_183815__$1;
(statearr_183827_183853[(1)] = (11));

} else {
var statearr_183828_183854 = state_183815__$1;
(statearr_183828_183854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (5))){
var inst_183792 = (state_183815[(7)]);
var state_183815__$1 = state_183815;
var statearr_183829_183855 = state_183815__$1;
(statearr_183829_183855[(2)] = inst_183792);

(statearr_183829_183855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (10))){
var inst_183811 = (state_183815[(2)]);
var state_183815__$1 = state_183815;
var statearr_183830_183856 = state_183815__$1;
(statearr_183830_183856[(2)] = inst_183811);

(statearr_183830_183856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_183816 === (8))){
var inst_183792 = (state_183815[(7)]);
var inst_183802 = cljs.core.next.call(null,inst_183792);
var inst_183792__$1 = inst_183802;
var state_183815__$1 = (function (){var statearr_183831 = state_183815;
(statearr_183831[(7)] = inst_183792__$1);

return statearr_183831;
})();
var statearr_183832_183857 = state_183815__$1;
(statearr_183832_183857[(2)] = null);

(statearr_183832_183857[(1)] = (2));


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
var statearr_183836 = [null,null,null,null,null,null,null,null];
(statearr_183836[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_183836[(1)] = (1));

return statearr_183836;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_183815){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_183815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e183837){if((e183837 instanceof Object)){
var ex__44065__auto__ = e183837;
var statearr_183838_183858 = state_183815;
(statearr_183838_183858[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_183815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e183837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__183859 = state_183815;
state_183815 = G__183859;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_183815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_183815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_183839 = f__44085__auto__.call(null);
(statearr_183839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_183839;
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
if(typeof cljs.core.async.t_cljs$core$async184085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async184085 = (function (ch,cs,meta184086){
this.ch = ch;
this.cs = cs;
this.meta184086 = meta184086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async184085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_184087,meta184086__$1){
var self__ = this;
var _184087__$1 = this;
return (new cljs.core.async.t_cljs$core$async184085(self__.ch,self__.cs,meta184086__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async184085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_184087){
var self__ = this;
var _184087__$1 = this;
return self__.meta184086;
});})(cs))
;


cljs.core.async.t_cljs$core$async184085.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async184085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async184085.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async184085.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async184085.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async184085.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async184085.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta184086","meta184086",-1607773107,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async184085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async184085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async184085";

cljs.core.async.t_cljs$core$async184085.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async184085");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async184085 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async184085(ch__$1,cs__$1,meta184086){
return (new cljs.core.async.t_cljs$core$async184085(ch__$1,cs__$1,meta184086));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async184085(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44084__auto___184310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___184310,cs,m,dchan,dctr,done){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___184310,cs,m,dchan,dctr,done){
return (function (state_184222){
var state_val_184223 = (state_184222[(1)]);
if((state_val_184223 === (7))){
var inst_184218 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184224_184311 = state_184222__$1;
(statearr_184224_184311[(2)] = inst_184218);

(statearr_184224_184311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (20))){
var inst_184121 = (state_184222[(7)]);
var inst_184133 = cljs.core.first.call(null,inst_184121);
var inst_184134 = cljs.core.nth.call(null,inst_184133,(0),null);
var inst_184135 = cljs.core.nth.call(null,inst_184133,(1),null);
var state_184222__$1 = (function (){var statearr_184225 = state_184222;
(statearr_184225[(8)] = inst_184134);

return statearr_184225;
})();
if(cljs.core.truth_(inst_184135)){
var statearr_184226_184312 = state_184222__$1;
(statearr_184226_184312[(1)] = (22));

} else {
var statearr_184227_184313 = state_184222__$1;
(statearr_184227_184313[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (27))){
var inst_184170 = (state_184222[(9)]);
var inst_184163 = (state_184222[(10)]);
var inst_184090 = (state_184222[(11)]);
var inst_184165 = (state_184222[(12)]);
var inst_184170__$1 = cljs.core._nth.call(null,inst_184163,inst_184165);
var inst_184171 = cljs.core.async.put_BANG_.call(null,inst_184170__$1,inst_184090,done);
var state_184222__$1 = (function (){var statearr_184228 = state_184222;
(statearr_184228[(9)] = inst_184170__$1);

return statearr_184228;
})();
if(cljs.core.truth_(inst_184171)){
var statearr_184229_184314 = state_184222__$1;
(statearr_184229_184314[(1)] = (30));

} else {
var statearr_184230_184315 = state_184222__$1;
(statearr_184230_184315[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (1))){
var state_184222__$1 = state_184222;
var statearr_184231_184316 = state_184222__$1;
(statearr_184231_184316[(2)] = null);

(statearr_184231_184316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (24))){
var inst_184121 = (state_184222[(7)]);
var inst_184140 = (state_184222[(2)]);
var inst_184141 = cljs.core.next.call(null,inst_184121);
var inst_184099 = inst_184141;
var inst_184100 = null;
var inst_184101 = (0);
var inst_184102 = (0);
var state_184222__$1 = (function (){var statearr_184232 = state_184222;
(statearr_184232[(13)] = inst_184140);

(statearr_184232[(14)] = inst_184099);

(statearr_184232[(15)] = inst_184101);

(statearr_184232[(16)] = inst_184100);

(statearr_184232[(17)] = inst_184102);

return statearr_184232;
})();
var statearr_184233_184317 = state_184222__$1;
(statearr_184233_184317[(2)] = null);

(statearr_184233_184317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (39))){
var state_184222__$1 = state_184222;
var statearr_184237_184318 = state_184222__$1;
(statearr_184237_184318[(2)] = null);

(statearr_184237_184318[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (4))){
var inst_184090 = (state_184222[(11)]);
var inst_184090__$1 = (state_184222[(2)]);
var inst_184091 = (inst_184090__$1 == null);
var state_184222__$1 = (function (){var statearr_184238 = state_184222;
(statearr_184238[(11)] = inst_184090__$1);

return statearr_184238;
})();
if(cljs.core.truth_(inst_184091)){
var statearr_184239_184319 = state_184222__$1;
(statearr_184239_184319[(1)] = (5));

} else {
var statearr_184240_184320 = state_184222__$1;
(statearr_184240_184320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (15))){
var inst_184099 = (state_184222[(14)]);
var inst_184101 = (state_184222[(15)]);
var inst_184100 = (state_184222[(16)]);
var inst_184102 = (state_184222[(17)]);
var inst_184117 = (state_184222[(2)]);
var inst_184118 = (inst_184102 + (1));
var tmp184234 = inst_184099;
var tmp184235 = inst_184101;
var tmp184236 = inst_184100;
var inst_184099__$1 = tmp184234;
var inst_184100__$1 = tmp184236;
var inst_184101__$1 = tmp184235;
var inst_184102__$1 = inst_184118;
var state_184222__$1 = (function (){var statearr_184241 = state_184222;
(statearr_184241[(14)] = inst_184099__$1);

(statearr_184241[(15)] = inst_184101__$1);

(statearr_184241[(18)] = inst_184117);

(statearr_184241[(16)] = inst_184100__$1);

(statearr_184241[(17)] = inst_184102__$1);

return statearr_184241;
})();
var statearr_184242_184321 = state_184222__$1;
(statearr_184242_184321[(2)] = null);

(statearr_184242_184321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (21))){
var inst_184144 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184246_184322 = state_184222__$1;
(statearr_184246_184322[(2)] = inst_184144);

(statearr_184246_184322[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (31))){
var inst_184170 = (state_184222[(9)]);
var inst_184174 = done.call(null,null);
var inst_184175 = cljs.core.async.untap_STAR_.call(null,m,inst_184170);
var state_184222__$1 = (function (){var statearr_184247 = state_184222;
(statearr_184247[(19)] = inst_184174);

return statearr_184247;
})();
var statearr_184248_184323 = state_184222__$1;
(statearr_184248_184323[(2)] = inst_184175);

(statearr_184248_184323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (32))){
var inst_184164 = (state_184222[(20)]);
var inst_184163 = (state_184222[(10)]);
var inst_184162 = (state_184222[(21)]);
var inst_184165 = (state_184222[(12)]);
var inst_184177 = (state_184222[(2)]);
var inst_184178 = (inst_184165 + (1));
var tmp184243 = inst_184164;
var tmp184244 = inst_184163;
var tmp184245 = inst_184162;
var inst_184162__$1 = tmp184245;
var inst_184163__$1 = tmp184244;
var inst_184164__$1 = tmp184243;
var inst_184165__$1 = inst_184178;
var state_184222__$1 = (function (){var statearr_184249 = state_184222;
(statearr_184249[(20)] = inst_184164__$1);

(statearr_184249[(10)] = inst_184163__$1);

(statearr_184249[(21)] = inst_184162__$1);

(statearr_184249[(22)] = inst_184177);

(statearr_184249[(12)] = inst_184165__$1);

return statearr_184249;
})();
var statearr_184250_184324 = state_184222__$1;
(statearr_184250_184324[(2)] = null);

(statearr_184250_184324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (40))){
var inst_184190 = (state_184222[(23)]);
var inst_184194 = done.call(null,null);
var inst_184195 = cljs.core.async.untap_STAR_.call(null,m,inst_184190);
var state_184222__$1 = (function (){var statearr_184251 = state_184222;
(statearr_184251[(24)] = inst_184194);

return statearr_184251;
})();
var statearr_184252_184325 = state_184222__$1;
(statearr_184252_184325[(2)] = inst_184195);

(statearr_184252_184325[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (33))){
var inst_184181 = (state_184222[(25)]);
var inst_184183 = cljs.core.chunked_seq_QMARK_.call(null,inst_184181);
var state_184222__$1 = state_184222;
if(inst_184183){
var statearr_184253_184326 = state_184222__$1;
(statearr_184253_184326[(1)] = (36));

} else {
var statearr_184254_184327 = state_184222__$1;
(statearr_184254_184327[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (13))){
var inst_184111 = (state_184222[(26)]);
var inst_184114 = cljs.core.async.close_BANG_.call(null,inst_184111);
var state_184222__$1 = state_184222;
var statearr_184255_184328 = state_184222__$1;
(statearr_184255_184328[(2)] = inst_184114);

(statearr_184255_184328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (22))){
var inst_184134 = (state_184222[(8)]);
var inst_184137 = cljs.core.async.close_BANG_.call(null,inst_184134);
var state_184222__$1 = state_184222;
var statearr_184256_184329 = state_184222__$1;
(statearr_184256_184329[(2)] = inst_184137);

(statearr_184256_184329[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (36))){
var inst_184181 = (state_184222[(25)]);
var inst_184185 = cljs.core.chunk_first.call(null,inst_184181);
var inst_184186 = cljs.core.chunk_rest.call(null,inst_184181);
var inst_184187 = cljs.core.count.call(null,inst_184185);
var inst_184162 = inst_184186;
var inst_184163 = inst_184185;
var inst_184164 = inst_184187;
var inst_184165 = (0);
var state_184222__$1 = (function (){var statearr_184257 = state_184222;
(statearr_184257[(20)] = inst_184164);

(statearr_184257[(10)] = inst_184163);

(statearr_184257[(21)] = inst_184162);

(statearr_184257[(12)] = inst_184165);

return statearr_184257;
})();
var statearr_184258_184330 = state_184222__$1;
(statearr_184258_184330[(2)] = null);

(statearr_184258_184330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (41))){
var inst_184181 = (state_184222[(25)]);
var inst_184197 = (state_184222[(2)]);
var inst_184198 = cljs.core.next.call(null,inst_184181);
var inst_184162 = inst_184198;
var inst_184163 = null;
var inst_184164 = (0);
var inst_184165 = (0);
var state_184222__$1 = (function (){var statearr_184259 = state_184222;
(statearr_184259[(20)] = inst_184164);

(statearr_184259[(10)] = inst_184163);

(statearr_184259[(21)] = inst_184162);

(statearr_184259[(12)] = inst_184165);

(statearr_184259[(27)] = inst_184197);

return statearr_184259;
})();
var statearr_184260_184331 = state_184222__$1;
(statearr_184260_184331[(2)] = null);

(statearr_184260_184331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (43))){
var state_184222__$1 = state_184222;
var statearr_184261_184332 = state_184222__$1;
(statearr_184261_184332[(2)] = null);

(statearr_184261_184332[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (29))){
var inst_184206 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184262_184333 = state_184222__$1;
(statearr_184262_184333[(2)] = inst_184206);

(statearr_184262_184333[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (44))){
var inst_184215 = (state_184222[(2)]);
var state_184222__$1 = (function (){var statearr_184263 = state_184222;
(statearr_184263[(28)] = inst_184215);

return statearr_184263;
})();
var statearr_184264_184334 = state_184222__$1;
(statearr_184264_184334[(2)] = null);

(statearr_184264_184334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (6))){
var inst_184154 = (state_184222[(29)]);
var inst_184153 = cljs.core.deref.call(null,cs);
var inst_184154__$1 = cljs.core.keys.call(null,inst_184153);
var inst_184155 = cljs.core.count.call(null,inst_184154__$1);
var inst_184156 = cljs.core.reset_BANG_.call(null,dctr,inst_184155);
var inst_184161 = cljs.core.seq.call(null,inst_184154__$1);
var inst_184162 = inst_184161;
var inst_184163 = null;
var inst_184164 = (0);
var inst_184165 = (0);
var state_184222__$1 = (function (){var statearr_184265 = state_184222;
(statearr_184265[(20)] = inst_184164);

(statearr_184265[(29)] = inst_184154__$1);

(statearr_184265[(30)] = inst_184156);

(statearr_184265[(10)] = inst_184163);

(statearr_184265[(21)] = inst_184162);

(statearr_184265[(12)] = inst_184165);

return statearr_184265;
})();
var statearr_184266_184335 = state_184222__$1;
(statearr_184266_184335[(2)] = null);

(statearr_184266_184335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (28))){
var inst_184162 = (state_184222[(21)]);
var inst_184181 = (state_184222[(25)]);
var inst_184181__$1 = cljs.core.seq.call(null,inst_184162);
var state_184222__$1 = (function (){var statearr_184267 = state_184222;
(statearr_184267[(25)] = inst_184181__$1);

return statearr_184267;
})();
if(inst_184181__$1){
var statearr_184268_184336 = state_184222__$1;
(statearr_184268_184336[(1)] = (33));

} else {
var statearr_184269_184337 = state_184222__$1;
(statearr_184269_184337[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (25))){
var inst_184164 = (state_184222[(20)]);
var inst_184165 = (state_184222[(12)]);
var inst_184167 = (inst_184165 < inst_184164);
var inst_184168 = inst_184167;
var state_184222__$1 = state_184222;
if(cljs.core.truth_(inst_184168)){
var statearr_184270_184338 = state_184222__$1;
(statearr_184270_184338[(1)] = (27));

} else {
var statearr_184271_184339 = state_184222__$1;
(statearr_184271_184339[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (34))){
var state_184222__$1 = state_184222;
var statearr_184272_184340 = state_184222__$1;
(statearr_184272_184340[(2)] = null);

(statearr_184272_184340[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (17))){
var state_184222__$1 = state_184222;
var statearr_184273_184341 = state_184222__$1;
(statearr_184273_184341[(2)] = null);

(statearr_184273_184341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (3))){
var inst_184220 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184222__$1,inst_184220);
} else {
if((state_val_184223 === (12))){
var inst_184149 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184274_184342 = state_184222__$1;
(statearr_184274_184342[(2)] = inst_184149);

(statearr_184274_184342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (2))){
var state_184222__$1 = state_184222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184222__$1,(4),ch);
} else {
if((state_val_184223 === (23))){
var state_184222__$1 = state_184222;
var statearr_184275_184343 = state_184222__$1;
(statearr_184275_184343[(2)] = null);

(statearr_184275_184343[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (35))){
var inst_184204 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184276_184344 = state_184222__$1;
(statearr_184276_184344[(2)] = inst_184204);

(statearr_184276_184344[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (19))){
var inst_184121 = (state_184222[(7)]);
var inst_184125 = cljs.core.chunk_first.call(null,inst_184121);
var inst_184126 = cljs.core.chunk_rest.call(null,inst_184121);
var inst_184127 = cljs.core.count.call(null,inst_184125);
var inst_184099 = inst_184126;
var inst_184100 = inst_184125;
var inst_184101 = inst_184127;
var inst_184102 = (0);
var state_184222__$1 = (function (){var statearr_184277 = state_184222;
(statearr_184277[(14)] = inst_184099);

(statearr_184277[(15)] = inst_184101);

(statearr_184277[(16)] = inst_184100);

(statearr_184277[(17)] = inst_184102);

return statearr_184277;
})();
var statearr_184278_184345 = state_184222__$1;
(statearr_184278_184345[(2)] = null);

(statearr_184278_184345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (11))){
var inst_184099 = (state_184222[(14)]);
var inst_184121 = (state_184222[(7)]);
var inst_184121__$1 = cljs.core.seq.call(null,inst_184099);
var state_184222__$1 = (function (){var statearr_184279 = state_184222;
(statearr_184279[(7)] = inst_184121__$1);

return statearr_184279;
})();
if(inst_184121__$1){
var statearr_184280_184346 = state_184222__$1;
(statearr_184280_184346[(1)] = (16));

} else {
var statearr_184281_184347 = state_184222__$1;
(statearr_184281_184347[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (9))){
var inst_184151 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184282_184348 = state_184222__$1;
(statearr_184282_184348[(2)] = inst_184151);

(statearr_184282_184348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (5))){
var inst_184097 = cljs.core.deref.call(null,cs);
var inst_184098 = cljs.core.seq.call(null,inst_184097);
var inst_184099 = inst_184098;
var inst_184100 = null;
var inst_184101 = (0);
var inst_184102 = (0);
var state_184222__$1 = (function (){var statearr_184283 = state_184222;
(statearr_184283[(14)] = inst_184099);

(statearr_184283[(15)] = inst_184101);

(statearr_184283[(16)] = inst_184100);

(statearr_184283[(17)] = inst_184102);

return statearr_184283;
})();
var statearr_184284_184349 = state_184222__$1;
(statearr_184284_184349[(2)] = null);

(statearr_184284_184349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (14))){
var state_184222__$1 = state_184222;
var statearr_184285_184350 = state_184222__$1;
(statearr_184285_184350[(2)] = null);

(statearr_184285_184350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (45))){
var inst_184212 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184286_184351 = state_184222__$1;
(statearr_184286_184351[(2)] = inst_184212);

(statearr_184286_184351[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (26))){
var inst_184154 = (state_184222[(29)]);
var inst_184208 = (state_184222[(2)]);
var inst_184209 = cljs.core.seq.call(null,inst_184154);
var state_184222__$1 = (function (){var statearr_184287 = state_184222;
(statearr_184287[(31)] = inst_184208);

return statearr_184287;
})();
if(inst_184209){
var statearr_184288_184352 = state_184222__$1;
(statearr_184288_184352[(1)] = (42));

} else {
var statearr_184289_184353 = state_184222__$1;
(statearr_184289_184353[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (16))){
var inst_184121 = (state_184222[(7)]);
var inst_184123 = cljs.core.chunked_seq_QMARK_.call(null,inst_184121);
var state_184222__$1 = state_184222;
if(inst_184123){
var statearr_184290_184354 = state_184222__$1;
(statearr_184290_184354[(1)] = (19));

} else {
var statearr_184291_184355 = state_184222__$1;
(statearr_184291_184355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (38))){
var inst_184201 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184292_184356 = state_184222__$1;
(statearr_184292_184356[(2)] = inst_184201);

(statearr_184292_184356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (30))){
var state_184222__$1 = state_184222;
var statearr_184293_184357 = state_184222__$1;
(statearr_184293_184357[(2)] = null);

(statearr_184293_184357[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (10))){
var inst_184100 = (state_184222[(16)]);
var inst_184102 = (state_184222[(17)]);
var inst_184110 = cljs.core._nth.call(null,inst_184100,inst_184102);
var inst_184111 = cljs.core.nth.call(null,inst_184110,(0),null);
var inst_184112 = cljs.core.nth.call(null,inst_184110,(1),null);
var state_184222__$1 = (function (){var statearr_184294 = state_184222;
(statearr_184294[(26)] = inst_184111);

return statearr_184294;
})();
if(cljs.core.truth_(inst_184112)){
var statearr_184295_184358 = state_184222__$1;
(statearr_184295_184358[(1)] = (13));

} else {
var statearr_184296_184359 = state_184222__$1;
(statearr_184296_184359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (18))){
var inst_184147 = (state_184222[(2)]);
var state_184222__$1 = state_184222;
var statearr_184297_184360 = state_184222__$1;
(statearr_184297_184360[(2)] = inst_184147);

(statearr_184297_184360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (42))){
var state_184222__$1 = state_184222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184222__$1,(45),dchan);
} else {
if((state_val_184223 === (37))){
var inst_184090 = (state_184222[(11)]);
var inst_184181 = (state_184222[(25)]);
var inst_184190 = (state_184222[(23)]);
var inst_184190__$1 = cljs.core.first.call(null,inst_184181);
var inst_184191 = cljs.core.async.put_BANG_.call(null,inst_184190__$1,inst_184090,done);
var state_184222__$1 = (function (){var statearr_184298 = state_184222;
(statearr_184298[(23)] = inst_184190__$1);

return statearr_184298;
})();
if(cljs.core.truth_(inst_184191)){
var statearr_184299_184361 = state_184222__$1;
(statearr_184299_184361[(1)] = (39));

} else {
var statearr_184300_184362 = state_184222__$1;
(statearr_184300_184362[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184223 === (8))){
var inst_184101 = (state_184222[(15)]);
var inst_184102 = (state_184222[(17)]);
var inst_184104 = (inst_184102 < inst_184101);
var inst_184105 = inst_184104;
var state_184222__$1 = state_184222;
if(cljs.core.truth_(inst_184105)){
var statearr_184301_184363 = state_184222__$1;
(statearr_184301_184363[(1)] = (10));

} else {
var statearr_184302_184364 = state_184222__$1;
(statearr_184302_184364[(1)] = (11));

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
});})(c__44084__auto___184310,cs,m,dchan,dctr,done))
;
return ((function (switch__44061__auto__,c__44084__auto___184310,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44062__auto__ = null;
var cljs$core$async$mult_$_state_machine__44062__auto____0 = (function (){
var statearr_184306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_184306[(0)] = cljs$core$async$mult_$_state_machine__44062__auto__);

(statearr_184306[(1)] = (1));

return statearr_184306;
});
var cljs$core$async$mult_$_state_machine__44062__auto____1 = (function (state_184222){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_184222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e184307){if((e184307 instanceof Object)){
var ex__44065__auto__ = e184307;
var statearr_184308_184365 = state_184222;
(statearr_184308_184365[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184366 = state_184222;
state_184222 = G__184366;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44062__auto__ = function(state_184222){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44062__auto____1.call(this,state_184222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44062__auto____0;
cljs$core$async$mult_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44062__auto____1;
return cljs$core$async$mult_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___184310,cs,m,dchan,dctr,done))
})();
var state__44086__auto__ = (function (){var statearr_184309 = f__44085__auto__.call(null);
(statearr_184309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___184310);

return statearr_184309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___184310,cs,m,dchan,dctr,done))
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
var args184367 = [];
var len__40427__auto___184370 = arguments.length;
var i__40428__auto___184371 = (0);
while(true){
if((i__40428__auto___184371 < len__40427__auto___184370)){
args184367.push((arguments[i__40428__auto___184371]));

var G__184372 = (i__40428__auto___184371 + (1));
i__40428__auto___184371 = G__184372;
continue;
} else {
}
break;
}

var G__184369 = args184367.length;
switch (G__184369) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args184367.length)].join('')));

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
var len__40427__auto___184384 = arguments.length;
var i__40428__auto___184385 = (0);
while(true){
if((i__40428__auto___184385 < len__40427__auto___184384)){
args__40434__auto__.push((arguments[i__40428__auto___184385]));

var G__184386 = (i__40428__auto___184385 + (1));
i__40428__auto___184385 = G__184386;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((3) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40435__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__184378){
var map__184379 = p__184378;
var map__184379__$1 = ((((!((map__184379 == null)))?((((map__184379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__184379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__184379):map__184379);
var opts = map__184379__$1;
var statearr_184381_184387 = state;
(statearr_184381_184387[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__184379,map__184379__$1,opts){
return (function (val){
var statearr_184382_184388 = state;
(statearr_184382_184388[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__184379,map__184379__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_184383_184389 = state;
(statearr_184383_184389[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq184374){
var G__184375 = cljs.core.first.call(null,seq184374);
var seq184374__$1 = cljs.core.next.call(null,seq184374);
var G__184376 = cljs.core.first.call(null,seq184374__$1);
var seq184374__$2 = cljs.core.next.call(null,seq184374__$1);
var G__184377 = cljs.core.first.call(null,seq184374__$2);
var seq184374__$3 = cljs.core.next.call(null,seq184374__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__184375,G__184376,G__184377,seq184374__$3);
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
if(typeof cljs.core.async.t_cljs$core$async184557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async184557 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta184558){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta184558 = meta184558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_184559,meta184558__$1){
var self__ = this;
var _184559__$1 = this;
return (new cljs.core.async.t_cljs$core$async184557(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta184558__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_184559){
var self__ = this;
var _184559__$1 = this;
return self__.meta184558;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async184557.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async184557.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta184558","meta184558",1770960661,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async184557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async184557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async184557";

cljs.core.async.t_cljs$core$async184557.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async184557");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async184557 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async184557(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta184558){
return (new cljs.core.async.t_cljs$core$async184557(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta184558));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async184557(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44084__auto___184724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___184724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___184724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_184661){
var state_val_184662 = (state_184661[(1)]);
if((state_val_184662 === (7))){
var inst_184576 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
var statearr_184663_184725 = state_184661__$1;
(statearr_184663_184725[(2)] = inst_184576);

(statearr_184663_184725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (20))){
var inst_184588 = (state_184661[(7)]);
var state_184661__$1 = state_184661;
var statearr_184664_184726 = state_184661__$1;
(statearr_184664_184726[(2)] = inst_184588);

(statearr_184664_184726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (27))){
var state_184661__$1 = state_184661;
var statearr_184665_184727 = state_184661__$1;
(statearr_184665_184727[(2)] = null);

(statearr_184665_184727[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (1))){
var inst_184563 = (state_184661[(8)]);
var inst_184563__$1 = calc_state.call(null);
var inst_184565 = (inst_184563__$1 == null);
var inst_184566 = cljs.core.not.call(null,inst_184565);
var state_184661__$1 = (function (){var statearr_184666 = state_184661;
(statearr_184666[(8)] = inst_184563__$1);

return statearr_184666;
})();
if(inst_184566){
var statearr_184667_184728 = state_184661__$1;
(statearr_184667_184728[(1)] = (2));

} else {
var statearr_184668_184729 = state_184661__$1;
(statearr_184668_184729[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (24))){
var inst_184612 = (state_184661[(9)]);
var inst_184621 = (state_184661[(10)]);
var inst_184635 = (state_184661[(11)]);
var inst_184635__$1 = inst_184612.call(null,inst_184621);
var state_184661__$1 = (function (){var statearr_184669 = state_184661;
(statearr_184669[(11)] = inst_184635__$1);

return statearr_184669;
})();
if(cljs.core.truth_(inst_184635__$1)){
var statearr_184670_184730 = state_184661__$1;
(statearr_184670_184730[(1)] = (29));

} else {
var statearr_184671_184731 = state_184661__$1;
(statearr_184671_184731[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (4))){
var inst_184579 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
if(cljs.core.truth_(inst_184579)){
var statearr_184672_184732 = state_184661__$1;
(statearr_184672_184732[(1)] = (8));

} else {
var statearr_184673_184733 = state_184661__$1;
(statearr_184673_184733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (15))){
var inst_184606 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
if(cljs.core.truth_(inst_184606)){
var statearr_184674_184734 = state_184661__$1;
(statearr_184674_184734[(1)] = (19));

} else {
var statearr_184675_184735 = state_184661__$1;
(statearr_184675_184735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (21))){
var inst_184611 = (state_184661[(12)]);
var inst_184611__$1 = (state_184661[(2)]);
var inst_184612 = cljs.core.get.call(null,inst_184611__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_184613 = cljs.core.get.call(null,inst_184611__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_184614 = cljs.core.get.call(null,inst_184611__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_184661__$1 = (function (){var statearr_184676 = state_184661;
(statearr_184676[(9)] = inst_184612);

(statearr_184676[(12)] = inst_184611__$1);

(statearr_184676[(13)] = inst_184613);

return statearr_184676;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_184661__$1,(22),inst_184614);
} else {
if((state_val_184662 === (31))){
var inst_184643 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
if(cljs.core.truth_(inst_184643)){
var statearr_184677_184736 = state_184661__$1;
(statearr_184677_184736[(1)] = (32));

} else {
var statearr_184678_184737 = state_184661__$1;
(statearr_184678_184737[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (32))){
var inst_184620 = (state_184661[(14)]);
var state_184661__$1 = state_184661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_184661__$1,(35),out,inst_184620);
} else {
if((state_val_184662 === (33))){
var inst_184611 = (state_184661[(12)]);
var inst_184588 = inst_184611;
var state_184661__$1 = (function (){var statearr_184679 = state_184661;
(statearr_184679[(7)] = inst_184588);

return statearr_184679;
})();
var statearr_184680_184738 = state_184661__$1;
(statearr_184680_184738[(2)] = null);

(statearr_184680_184738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (13))){
var inst_184588 = (state_184661[(7)]);
var inst_184595 = inst_184588.cljs$lang$protocol_mask$partition0$;
var inst_184596 = (inst_184595 & (64));
var inst_184597 = inst_184588.cljs$core$ISeq$;
var inst_184598 = (cljs.core.PROTOCOL_SENTINEL === inst_184597);
var inst_184599 = (inst_184596) || (inst_184598);
var state_184661__$1 = state_184661;
if(cljs.core.truth_(inst_184599)){
var statearr_184681_184739 = state_184661__$1;
(statearr_184681_184739[(1)] = (16));

} else {
var statearr_184682_184740 = state_184661__$1;
(statearr_184682_184740[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (22))){
var inst_184620 = (state_184661[(14)]);
var inst_184621 = (state_184661[(10)]);
var inst_184619 = (state_184661[(2)]);
var inst_184620__$1 = cljs.core.nth.call(null,inst_184619,(0),null);
var inst_184621__$1 = cljs.core.nth.call(null,inst_184619,(1),null);
var inst_184622 = (inst_184620__$1 == null);
var inst_184623 = cljs.core._EQ_.call(null,inst_184621__$1,change);
var inst_184624 = (inst_184622) || (inst_184623);
var state_184661__$1 = (function (){var statearr_184683 = state_184661;
(statearr_184683[(14)] = inst_184620__$1);

(statearr_184683[(10)] = inst_184621__$1);

return statearr_184683;
})();
if(cljs.core.truth_(inst_184624)){
var statearr_184684_184741 = state_184661__$1;
(statearr_184684_184741[(1)] = (23));

} else {
var statearr_184685_184742 = state_184661__$1;
(statearr_184685_184742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (36))){
var inst_184611 = (state_184661[(12)]);
var inst_184588 = inst_184611;
var state_184661__$1 = (function (){var statearr_184686 = state_184661;
(statearr_184686[(7)] = inst_184588);

return statearr_184686;
})();
var statearr_184687_184743 = state_184661__$1;
(statearr_184687_184743[(2)] = null);

(statearr_184687_184743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (29))){
var inst_184635 = (state_184661[(11)]);
var state_184661__$1 = state_184661;
var statearr_184688_184744 = state_184661__$1;
(statearr_184688_184744[(2)] = inst_184635);

(statearr_184688_184744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (6))){
var state_184661__$1 = state_184661;
var statearr_184689_184745 = state_184661__$1;
(statearr_184689_184745[(2)] = false);

(statearr_184689_184745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (28))){
var inst_184631 = (state_184661[(2)]);
var inst_184632 = calc_state.call(null);
var inst_184588 = inst_184632;
var state_184661__$1 = (function (){var statearr_184690 = state_184661;
(statearr_184690[(7)] = inst_184588);

(statearr_184690[(15)] = inst_184631);

return statearr_184690;
})();
var statearr_184691_184746 = state_184661__$1;
(statearr_184691_184746[(2)] = null);

(statearr_184691_184746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (25))){
var inst_184657 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
var statearr_184692_184747 = state_184661__$1;
(statearr_184692_184747[(2)] = inst_184657);

(statearr_184692_184747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (34))){
var inst_184655 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
var statearr_184693_184748 = state_184661__$1;
(statearr_184693_184748[(2)] = inst_184655);

(statearr_184693_184748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (17))){
var state_184661__$1 = state_184661;
var statearr_184694_184749 = state_184661__$1;
(statearr_184694_184749[(2)] = false);

(statearr_184694_184749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (3))){
var state_184661__$1 = state_184661;
var statearr_184695_184750 = state_184661__$1;
(statearr_184695_184750[(2)] = false);

(statearr_184695_184750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (12))){
var inst_184659 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184661__$1,inst_184659);
} else {
if((state_val_184662 === (2))){
var inst_184563 = (state_184661[(8)]);
var inst_184568 = inst_184563.cljs$lang$protocol_mask$partition0$;
var inst_184569 = (inst_184568 & (64));
var inst_184570 = inst_184563.cljs$core$ISeq$;
var inst_184571 = (cljs.core.PROTOCOL_SENTINEL === inst_184570);
var inst_184572 = (inst_184569) || (inst_184571);
var state_184661__$1 = state_184661;
if(cljs.core.truth_(inst_184572)){
var statearr_184696_184751 = state_184661__$1;
(statearr_184696_184751[(1)] = (5));

} else {
var statearr_184697_184752 = state_184661__$1;
(statearr_184697_184752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (23))){
var inst_184620 = (state_184661[(14)]);
var inst_184626 = (inst_184620 == null);
var state_184661__$1 = state_184661;
if(cljs.core.truth_(inst_184626)){
var statearr_184698_184753 = state_184661__$1;
(statearr_184698_184753[(1)] = (26));

} else {
var statearr_184699_184754 = state_184661__$1;
(statearr_184699_184754[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (35))){
var inst_184646 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
if(cljs.core.truth_(inst_184646)){
var statearr_184700_184755 = state_184661__$1;
(statearr_184700_184755[(1)] = (36));

} else {
var statearr_184701_184756 = state_184661__$1;
(statearr_184701_184756[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (19))){
var inst_184588 = (state_184661[(7)]);
var inst_184608 = cljs.core.apply.call(null,cljs.core.hash_map,inst_184588);
var state_184661__$1 = state_184661;
var statearr_184702_184757 = state_184661__$1;
(statearr_184702_184757[(2)] = inst_184608);

(statearr_184702_184757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (11))){
var inst_184588 = (state_184661[(7)]);
var inst_184592 = (inst_184588 == null);
var inst_184593 = cljs.core.not.call(null,inst_184592);
var state_184661__$1 = state_184661;
if(inst_184593){
var statearr_184703_184758 = state_184661__$1;
(statearr_184703_184758[(1)] = (13));

} else {
var statearr_184704_184759 = state_184661__$1;
(statearr_184704_184759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (9))){
var inst_184563 = (state_184661[(8)]);
var state_184661__$1 = state_184661;
var statearr_184705_184760 = state_184661__$1;
(statearr_184705_184760[(2)] = inst_184563);

(statearr_184705_184760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (5))){
var state_184661__$1 = state_184661;
var statearr_184706_184761 = state_184661__$1;
(statearr_184706_184761[(2)] = true);

(statearr_184706_184761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (14))){
var state_184661__$1 = state_184661;
var statearr_184707_184762 = state_184661__$1;
(statearr_184707_184762[(2)] = false);

(statearr_184707_184762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (26))){
var inst_184621 = (state_184661[(10)]);
var inst_184628 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_184621);
var state_184661__$1 = state_184661;
var statearr_184708_184763 = state_184661__$1;
(statearr_184708_184763[(2)] = inst_184628);

(statearr_184708_184763[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (16))){
var state_184661__$1 = state_184661;
var statearr_184709_184764 = state_184661__$1;
(statearr_184709_184764[(2)] = true);

(statearr_184709_184764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (38))){
var inst_184651 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
var statearr_184710_184765 = state_184661__$1;
(statearr_184710_184765[(2)] = inst_184651);

(statearr_184710_184765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (30))){
var inst_184612 = (state_184661[(9)]);
var inst_184621 = (state_184661[(10)]);
var inst_184613 = (state_184661[(13)]);
var inst_184638 = cljs.core.empty_QMARK_.call(null,inst_184612);
var inst_184639 = inst_184613.call(null,inst_184621);
var inst_184640 = cljs.core.not.call(null,inst_184639);
var inst_184641 = (inst_184638) && (inst_184640);
var state_184661__$1 = state_184661;
var statearr_184711_184766 = state_184661__$1;
(statearr_184711_184766[(2)] = inst_184641);

(statearr_184711_184766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (10))){
var inst_184563 = (state_184661[(8)]);
var inst_184584 = (state_184661[(2)]);
var inst_184585 = cljs.core.get.call(null,inst_184584,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_184586 = cljs.core.get.call(null,inst_184584,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_184587 = cljs.core.get.call(null,inst_184584,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_184588 = inst_184563;
var state_184661__$1 = (function (){var statearr_184712 = state_184661;
(statearr_184712[(16)] = inst_184585);

(statearr_184712[(7)] = inst_184588);

(statearr_184712[(17)] = inst_184586);

(statearr_184712[(18)] = inst_184587);

return statearr_184712;
})();
var statearr_184713_184767 = state_184661__$1;
(statearr_184713_184767[(2)] = null);

(statearr_184713_184767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (18))){
var inst_184603 = (state_184661[(2)]);
var state_184661__$1 = state_184661;
var statearr_184714_184768 = state_184661__$1;
(statearr_184714_184768[(2)] = inst_184603);

(statearr_184714_184768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (37))){
var state_184661__$1 = state_184661;
var statearr_184715_184769 = state_184661__$1;
(statearr_184715_184769[(2)] = null);

(statearr_184715_184769[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184662 === (8))){
var inst_184563 = (state_184661[(8)]);
var inst_184581 = cljs.core.apply.call(null,cljs.core.hash_map,inst_184563);
var state_184661__$1 = state_184661;
var statearr_184716_184770 = state_184661__$1;
(statearr_184716_184770[(2)] = inst_184581);

(statearr_184716_184770[(1)] = (10));


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
});})(c__44084__auto___184724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44061__auto__,c__44084__auto___184724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44062__auto__ = null;
var cljs$core$async$mix_$_state_machine__44062__auto____0 = (function (){
var statearr_184720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_184720[(0)] = cljs$core$async$mix_$_state_machine__44062__auto__);

(statearr_184720[(1)] = (1));

return statearr_184720;
});
var cljs$core$async$mix_$_state_machine__44062__auto____1 = (function (state_184661){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_184661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e184721){if((e184721 instanceof Object)){
var ex__44065__auto__ = e184721;
var statearr_184722_184771 = state_184661;
(statearr_184722_184771[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184772 = state_184661;
state_184661 = G__184772;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44062__auto__ = function(state_184661){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44062__auto____1.call(this,state_184661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44062__auto____0;
cljs$core$async$mix_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44062__auto____1;
return cljs$core$async$mix_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___184724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44086__auto__ = (function (){var statearr_184723 = f__44085__auto__.call(null);
(statearr_184723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___184724);

return statearr_184723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___184724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args184773 = [];
var len__40427__auto___184776 = arguments.length;
var i__40428__auto___184777 = (0);
while(true){
if((i__40428__auto___184777 < len__40427__auto___184776)){
args184773.push((arguments[i__40428__auto___184777]));

var G__184778 = (i__40428__auto___184777 + (1));
i__40428__auto___184777 = G__184778;
continue;
} else {
}
break;
}

var G__184775 = args184773.length;
switch (G__184775) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args184773.length)].join('')));

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
var args184781 = [];
var len__40427__auto___184906 = arguments.length;
var i__40428__auto___184907 = (0);
while(true){
if((i__40428__auto___184907 < len__40427__auto___184906)){
args184781.push((arguments[i__40428__auto___184907]));

var G__184908 = (i__40428__auto___184907 + (1));
i__40428__auto___184907 = G__184908;
continue;
} else {
}
break;
}

var G__184783 = args184781.length;
switch (G__184783) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args184781.length)].join('')));

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
return (function (p1__184780_SHARP_){
if(cljs.core.truth_(p1__184780_SHARP_.call(null,topic))){
return p1__184780_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__184780_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__39206__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async184784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async184784 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta184785){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta184785 = meta184785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_184786,meta184785__$1){
var self__ = this;
var _184786__$1 = this;
return (new cljs.core.async.t_cljs$core$async184784(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta184785__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_184786){
var self__ = this;
var _184786__$1 = this;
return self__.meta184785;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async184784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async184784.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta184785","meta184785",1670115239,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async184784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async184784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async184784";

cljs.core.async.t_cljs$core$async184784.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async184784");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async184784 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async184784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta184785){
return (new cljs.core.async.t_cljs$core$async184784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta184785));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async184784(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44084__auto___184910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___184910,mults,ensure_mult,p){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___184910,mults,ensure_mult,p){
return (function (state_184858){
var state_val_184859 = (state_184858[(1)]);
if((state_val_184859 === (7))){
var inst_184854 = (state_184858[(2)]);
var state_184858__$1 = state_184858;
var statearr_184860_184911 = state_184858__$1;
(statearr_184860_184911[(2)] = inst_184854);

(statearr_184860_184911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (20))){
var state_184858__$1 = state_184858;
var statearr_184861_184912 = state_184858__$1;
(statearr_184861_184912[(2)] = null);

(statearr_184861_184912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (1))){
var state_184858__$1 = state_184858;
var statearr_184862_184913 = state_184858__$1;
(statearr_184862_184913[(2)] = null);

(statearr_184862_184913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (24))){
var inst_184837 = (state_184858[(7)]);
var inst_184846 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_184837);
var state_184858__$1 = state_184858;
var statearr_184863_184914 = state_184858__$1;
(statearr_184863_184914[(2)] = inst_184846);

(statearr_184863_184914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (4))){
var inst_184789 = (state_184858[(8)]);
var inst_184789__$1 = (state_184858[(2)]);
var inst_184790 = (inst_184789__$1 == null);
var state_184858__$1 = (function (){var statearr_184864 = state_184858;
(statearr_184864[(8)] = inst_184789__$1);

return statearr_184864;
})();
if(cljs.core.truth_(inst_184790)){
var statearr_184865_184915 = state_184858__$1;
(statearr_184865_184915[(1)] = (5));

} else {
var statearr_184866_184916 = state_184858__$1;
(statearr_184866_184916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (15))){
var inst_184831 = (state_184858[(2)]);
var state_184858__$1 = state_184858;
var statearr_184867_184917 = state_184858__$1;
(statearr_184867_184917[(2)] = inst_184831);

(statearr_184867_184917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (21))){
var inst_184851 = (state_184858[(2)]);
var state_184858__$1 = (function (){var statearr_184868 = state_184858;
(statearr_184868[(9)] = inst_184851);

return statearr_184868;
})();
var statearr_184869_184918 = state_184858__$1;
(statearr_184869_184918[(2)] = null);

(statearr_184869_184918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (13))){
var inst_184813 = (state_184858[(10)]);
var inst_184815 = cljs.core.chunked_seq_QMARK_.call(null,inst_184813);
var state_184858__$1 = state_184858;
if(inst_184815){
var statearr_184870_184919 = state_184858__$1;
(statearr_184870_184919[(1)] = (16));

} else {
var statearr_184871_184920 = state_184858__$1;
(statearr_184871_184920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (22))){
var inst_184843 = (state_184858[(2)]);
var state_184858__$1 = state_184858;
if(cljs.core.truth_(inst_184843)){
var statearr_184872_184921 = state_184858__$1;
(statearr_184872_184921[(1)] = (23));

} else {
var statearr_184873_184922 = state_184858__$1;
(statearr_184873_184922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (6))){
var inst_184837 = (state_184858[(7)]);
var inst_184839 = (state_184858[(11)]);
var inst_184789 = (state_184858[(8)]);
var inst_184837__$1 = topic_fn.call(null,inst_184789);
var inst_184838 = cljs.core.deref.call(null,mults);
var inst_184839__$1 = cljs.core.get.call(null,inst_184838,inst_184837__$1);
var state_184858__$1 = (function (){var statearr_184874 = state_184858;
(statearr_184874[(7)] = inst_184837__$1);

(statearr_184874[(11)] = inst_184839__$1);

return statearr_184874;
})();
if(cljs.core.truth_(inst_184839__$1)){
var statearr_184875_184923 = state_184858__$1;
(statearr_184875_184923[(1)] = (19));

} else {
var statearr_184876_184924 = state_184858__$1;
(statearr_184876_184924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (25))){
var inst_184848 = (state_184858[(2)]);
var state_184858__$1 = state_184858;
var statearr_184877_184925 = state_184858__$1;
(statearr_184877_184925[(2)] = inst_184848);

(statearr_184877_184925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (17))){
var inst_184813 = (state_184858[(10)]);
var inst_184822 = cljs.core.first.call(null,inst_184813);
var inst_184823 = cljs.core.async.muxch_STAR_.call(null,inst_184822);
var inst_184824 = cljs.core.async.close_BANG_.call(null,inst_184823);
var inst_184825 = cljs.core.next.call(null,inst_184813);
var inst_184799 = inst_184825;
var inst_184800 = null;
var inst_184801 = (0);
var inst_184802 = (0);
var state_184858__$1 = (function (){var statearr_184878 = state_184858;
(statearr_184878[(12)] = inst_184800);

(statearr_184878[(13)] = inst_184801);

(statearr_184878[(14)] = inst_184799);

(statearr_184878[(15)] = inst_184802);

(statearr_184878[(16)] = inst_184824);

return statearr_184878;
})();
var statearr_184879_184926 = state_184858__$1;
(statearr_184879_184926[(2)] = null);

(statearr_184879_184926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (3))){
var inst_184856 = (state_184858[(2)]);
var state_184858__$1 = state_184858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184858__$1,inst_184856);
} else {
if((state_val_184859 === (12))){
var inst_184833 = (state_184858[(2)]);
var state_184858__$1 = state_184858;
var statearr_184880_184927 = state_184858__$1;
(statearr_184880_184927[(2)] = inst_184833);

(statearr_184880_184927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (2))){
var state_184858__$1 = state_184858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184858__$1,(4),ch);
} else {
if((state_val_184859 === (23))){
var state_184858__$1 = state_184858;
var statearr_184881_184928 = state_184858__$1;
(statearr_184881_184928[(2)] = null);

(statearr_184881_184928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (19))){
var inst_184839 = (state_184858[(11)]);
var inst_184789 = (state_184858[(8)]);
var inst_184841 = cljs.core.async.muxch_STAR_.call(null,inst_184839);
var state_184858__$1 = state_184858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_184858__$1,(22),inst_184841,inst_184789);
} else {
if((state_val_184859 === (11))){
var inst_184799 = (state_184858[(14)]);
var inst_184813 = (state_184858[(10)]);
var inst_184813__$1 = cljs.core.seq.call(null,inst_184799);
var state_184858__$1 = (function (){var statearr_184882 = state_184858;
(statearr_184882[(10)] = inst_184813__$1);

return statearr_184882;
})();
if(inst_184813__$1){
var statearr_184883_184929 = state_184858__$1;
(statearr_184883_184929[(1)] = (13));

} else {
var statearr_184884_184930 = state_184858__$1;
(statearr_184884_184930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (9))){
var inst_184835 = (state_184858[(2)]);
var state_184858__$1 = state_184858;
var statearr_184885_184931 = state_184858__$1;
(statearr_184885_184931[(2)] = inst_184835);

(statearr_184885_184931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (5))){
var inst_184796 = cljs.core.deref.call(null,mults);
var inst_184797 = cljs.core.vals.call(null,inst_184796);
var inst_184798 = cljs.core.seq.call(null,inst_184797);
var inst_184799 = inst_184798;
var inst_184800 = null;
var inst_184801 = (0);
var inst_184802 = (0);
var state_184858__$1 = (function (){var statearr_184886 = state_184858;
(statearr_184886[(12)] = inst_184800);

(statearr_184886[(13)] = inst_184801);

(statearr_184886[(14)] = inst_184799);

(statearr_184886[(15)] = inst_184802);

return statearr_184886;
})();
var statearr_184887_184932 = state_184858__$1;
(statearr_184887_184932[(2)] = null);

(statearr_184887_184932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (14))){
var state_184858__$1 = state_184858;
var statearr_184891_184933 = state_184858__$1;
(statearr_184891_184933[(2)] = null);

(statearr_184891_184933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (16))){
var inst_184813 = (state_184858[(10)]);
var inst_184817 = cljs.core.chunk_first.call(null,inst_184813);
var inst_184818 = cljs.core.chunk_rest.call(null,inst_184813);
var inst_184819 = cljs.core.count.call(null,inst_184817);
var inst_184799 = inst_184818;
var inst_184800 = inst_184817;
var inst_184801 = inst_184819;
var inst_184802 = (0);
var state_184858__$1 = (function (){var statearr_184892 = state_184858;
(statearr_184892[(12)] = inst_184800);

(statearr_184892[(13)] = inst_184801);

(statearr_184892[(14)] = inst_184799);

(statearr_184892[(15)] = inst_184802);

return statearr_184892;
})();
var statearr_184893_184934 = state_184858__$1;
(statearr_184893_184934[(2)] = null);

(statearr_184893_184934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (10))){
var inst_184800 = (state_184858[(12)]);
var inst_184801 = (state_184858[(13)]);
var inst_184799 = (state_184858[(14)]);
var inst_184802 = (state_184858[(15)]);
var inst_184807 = cljs.core._nth.call(null,inst_184800,inst_184802);
var inst_184808 = cljs.core.async.muxch_STAR_.call(null,inst_184807);
var inst_184809 = cljs.core.async.close_BANG_.call(null,inst_184808);
var inst_184810 = (inst_184802 + (1));
var tmp184888 = inst_184800;
var tmp184889 = inst_184801;
var tmp184890 = inst_184799;
var inst_184799__$1 = tmp184890;
var inst_184800__$1 = tmp184888;
var inst_184801__$1 = tmp184889;
var inst_184802__$1 = inst_184810;
var state_184858__$1 = (function (){var statearr_184894 = state_184858;
(statearr_184894[(12)] = inst_184800__$1);

(statearr_184894[(13)] = inst_184801__$1);

(statearr_184894[(17)] = inst_184809);

(statearr_184894[(14)] = inst_184799__$1);

(statearr_184894[(15)] = inst_184802__$1);

return statearr_184894;
})();
var statearr_184895_184935 = state_184858__$1;
(statearr_184895_184935[(2)] = null);

(statearr_184895_184935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (18))){
var inst_184828 = (state_184858[(2)]);
var state_184858__$1 = state_184858;
var statearr_184896_184936 = state_184858__$1;
(statearr_184896_184936[(2)] = inst_184828);

(statearr_184896_184936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184859 === (8))){
var inst_184801 = (state_184858[(13)]);
var inst_184802 = (state_184858[(15)]);
var inst_184804 = (inst_184802 < inst_184801);
var inst_184805 = inst_184804;
var state_184858__$1 = state_184858;
if(cljs.core.truth_(inst_184805)){
var statearr_184897_184937 = state_184858__$1;
(statearr_184897_184937[(1)] = (10));

} else {
var statearr_184898_184938 = state_184858__$1;
(statearr_184898_184938[(1)] = (11));

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
});})(c__44084__auto___184910,mults,ensure_mult,p))
;
return ((function (switch__44061__auto__,c__44084__auto___184910,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_184902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_184902[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_184902[(1)] = (1));

return statearr_184902;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_184858){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_184858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e184903){if((e184903 instanceof Object)){
var ex__44065__auto__ = e184903;
var statearr_184904_184939 = state_184858;
(statearr_184904_184939[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e184903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__184940 = state_184858;
state_184858 = G__184940;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_184858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_184858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___184910,mults,ensure_mult,p))
})();
var state__44086__auto__ = (function (){var statearr_184905 = f__44085__auto__.call(null);
(statearr_184905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___184910);

return statearr_184905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___184910,mults,ensure_mult,p))
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
var args184941 = [];
var len__40427__auto___184944 = arguments.length;
var i__40428__auto___184945 = (0);
while(true){
if((i__40428__auto___184945 < len__40427__auto___184944)){
args184941.push((arguments[i__40428__auto___184945]));

var G__184946 = (i__40428__auto___184945 + (1));
i__40428__auto___184945 = G__184946;
continue;
} else {
}
break;
}

var G__184943 = args184941.length;
switch (G__184943) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args184941.length)].join('')));

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
var args184948 = [];
var len__40427__auto___184951 = arguments.length;
var i__40428__auto___184952 = (0);
while(true){
if((i__40428__auto___184952 < len__40427__auto___184951)){
args184948.push((arguments[i__40428__auto___184952]));

var G__184953 = (i__40428__auto___184952 + (1));
i__40428__auto___184952 = G__184953;
continue;
} else {
}
break;
}

var G__184950 = args184948.length;
switch (G__184950) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args184948.length)].join('')));

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
var args184955 = [];
var len__40427__auto___185026 = arguments.length;
var i__40428__auto___185027 = (0);
while(true){
if((i__40428__auto___185027 < len__40427__auto___185026)){
args184955.push((arguments[i__40428__auto___185027]));

var G__185028 = (i__40428__auto___185027 + (1));
i__40428__auto___185027 = G__185028;
continue;
} else {
}
break;
}

var G__184957 = args184955.length;
switch (G__184957) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args184955.length)].join('')));

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
var c__44084__auto___185030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___185030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___185030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_184996){
var state_val_184997 = (state_184996[(1)]);
if((state_val_184997 === (7))){
var state_184996__$1 = state_184996;
var statearr_184998_185031 = state_184996__$1;
(statearr_184998_185031[(2)] = null);

(statearr_184998_185031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (1))){
var state_184996__$1 = state_184996;
var statearr_184999_185032 = state_184996__$1;
(statearr_184999_185032[(2)] = null);

(statearr_184999_185032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (4))){
var inst_184960 = (state_184996[(7)]);
var inst_184962 = (inst_184960 < cnt);
var state_184996__$1 = state_184996;
if(cljs.core.truth_(inst_184962)){
var statearr_185000_185033 = state_184996__$1;
(statearr_185000_185033[(1)] = (6));

} else {
var statearr_185001_185034 = state_184996__$1;
(statearr_185001_185034[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (15))){
var inst_184992 = (state_184996[(2)]);
var state_184996__$1 = state_184996;
var statearr_185002_185035 = state_184996__$1;
(statearr_185002_185035[(2)] = inst_184992);

(statearr_185002_185035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (13))){
var inst_184985 = cljs.core.async.close_BANG_.call(null,out);
var state_184996__$1 = state_184996;
var statearr_185003_185036 = state_184996__$1;
(statearr_185003_185036[(2)] = inst_184985);

(statearr_185003_185036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (6))){
var state_184996__$1 = state_184996;
var statearr_185004_185037 = state_184996__$1;
(statearr_185004_185037[(2)] = null);

(statearr_185004_185037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (3))){
var inst_184994 = (state_184996[(2)]);
var state_184996__$1 = state_184996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_184996__$1,inst_184994);
} else {
if((state_val_184997 === (12))){
var inst_184982 = (state_184996[(8)]);
var inst_184982__$1 = (state_184996[(2)]);
var inst_184983 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_184982__$1);
var state_184996__$1 = (function (){var statearr_185005 = state_184996;
(statearr_185005[(8)] = inst_184982__$1);

return statearr_185005;
})();
if(cljs.core.truth_(inst_184983)){
var statearr_185006_185038 = state_184996__$1;
(statearr_185006_185038[(1)] = (13));

} else {
var statearr_185007_185039 = state_184996__$1;
(statearr_185007_185039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (2))){
var inst_184959 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_184960 = (0);
var state_184996__$1 = (function (){var statearr_185008 = state_184996;
(statearr_185008[(7)] = inst_184960);

(statearr_185008[(9)] = inst_184959);

return statearr_185008;
})();
var statearr_185009_185040 = state_184996__$1;
(statearr_185009_185040[(2)] = null);

(statearr_185009_185040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (11))){
var inst_184960 = (state_184996[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_184996,(10),Object,null,(9));
var inst_184969 = chs__$1.call(null,inst_184960);
var inst_184970 = done.call(null,inst_184960);
var inst_184971 = cljs.core.async.take_BANG_.call(null,inst_184969,inst_184970);
var state_184996__$1 = state_184996;
var statearr_185010_185041 = state_184996__$1;
(statearr_185010_185041[(2)] = inst_184971);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (9))){
var inst_184960 = (state_184996[(7)]);
var inst_184973 = (state_184996[(2)]);
var inst_184974 = (inst_184960 + (1));
var inst_184960__$1 = inst_184974;
var state_184996__$1 = (function (){var statearr_185011 = state_184996;
(statearr_185011[(10)] = inst_184973);

(statearr_185011[(7)] = inst_184960__$1);

return statearr_185011;
})();
var statearr_185012_185042 = state_184996__$1;
(statearr_185012_185042[(2)] = null);

(statearr_185012_185042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (5))){
var inst_184980 = (state_184996[(2)]);
var state_184996__$1 = (function (){var statearr_185013 = state_184996;
(statearr_185013[(11)] = inst_184980);

return statearr_185013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_184996__$1,(12),dchan);
} else {
if((state_val_184997 === (14))){
var inst_184982 = (state_184996[(8)]);
var inst_184987 = cljs.core.apply.call(null,f,inst_184982);
var state_184996__$1 = state_184996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_184996__$1,(16),out,inst_184987);
} else {
if((state_val_184997 === (16))){
var inst_184989 = (state_184996[(2)]);
var state_184996__$1 = (function (){var statearr_185014 = state_184996;
(statearr_185014[(12)] = inst_184989);

return statearr_185014;
})();
var statearr_185015_185043 = state_184996__$1;
(statearr_185015_185043[(2)] = null);

(statearr_185015_185043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (10))){
var inst_184964 = (state_184996[(2)]);
var inst_184965 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_184996__$1 = (function (){var statearr_185016 = state_184996;
(statearr_185016[(13)] = inst_184964);

return statearr_185016;
})();
var statearr_185017_185044 = state_184996__$1;
(statearr_185017_185044[(2)] = inst_184965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_184997 === (8))){
var inst_184978 = (state_184996[(2)]);
var state_184996__$1 = state_184996;
var statearr_185018_185045 = state_184996__$1;
(statearr_185018_185045[(2)] = inst_184978);

(statearr_185018_185045[(1)] = (5));


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
});})(c__44084__auto___185030,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44061__auto__,c__44084__auto___185030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_185022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_185022[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_185022[(1)] = (1));

return statearr_185022;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_184996){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_184996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e185023){if((e185023 instanceof Object)){
var ex__44065__auto__ = e185023;
var statearr_185024_185046 = state_184996;
(statearr_185024_185046[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_184996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e185023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__185047 = state_184996;
state_184996 = G__185047;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_184996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_184996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___185030,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44086__auto__ = (function (){var statearr_185025 = f__44085__auto__.call(null);
(statearr_185025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___185030);

return statearr_185025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___185030,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args185049 = [];
var len__40427__auto___185107 = arguments.length;
var i__40428__auto___185108 = (0);
while(true){
if((i__40428__auto___185108 < len__40427__auto___185107)){
args185049.push((arguments[i__40428__auto___185108]));

var G__185109 = (i__40428__auto___185108 + (1));
i__40428__auto___185108 = G__185109;
continue;
} else {
}
break;
}

var G__185051 = args185049.length;
switch (G__185051) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185049.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___185111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___185111,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___185111,out){
return (function (state_185083){
var state_val_185084 = (state_185083[(1)]);
if((state_val_185084 === (7))){
var inst_185063 = (state_185083[(7)]);
var inst_185062 = (state_185083[(8)]);
var inst_185062__$1 = (state_185083[(2)]);
var inst_185063__$1 = cljs.core.nth.call(null,inst_185062__$1,(0),null);
var inst_185064 = cljs.core.nth.call(null,inst_185062__$1,(1),null);
var inst_185065 = (inst_185063__$1 == null);
var state_185083__$1 = (function (){var statearr_185085 = state_185083;
(statearr_185085[(7)] = inst_185063__$1);

(statearr_185085[(8)] = inst_185062__$1);

(statearr_185085[(9)] = inst_185064);

return statearr_185085;
})();
if(cljs.core.truth_(inst_185065)){
var statearr_185086_185112 = state_185083__$1;
(statearr_185086_185112[(1)] = (8));

} else {
var statearr_185087_185113 = state_185083__$1;
(statearr_185087_185113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185084 === (1))){
var inst_185052 = cljs.core.vec.call(null,chs);
var inst_185053 = inst_185052;
var state_185083__$1 = (function (){var statearr_185088 = state_185083;
(statearr_185088[(10)] = inst_185053);

return statearr_185088;
})();
var statearr_185089_185114 = state_185083__$1;
(statearr_185089_185114[(2)] = null);

(statearr_185089_185114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185084 === (4))){
var inst_185053 = (state_185083[(10)]);
var state_185083__$1 = state_185083;
return cljs.core.async.ioc_alts_BANG_.call(null,state_185083__$1,(7),inst_185053);
} else {
if((state_val_185084 === (6))){
var inst_185079 = (state_185083[(2)]);
var state_185083__$1 = state_185083;
var statearr_185090_185115 = state_185083__$1;
(statearr_185090_185115[(2)] = inst_185079);

(statearr_185090_185115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185084 === (3))){
var inst_185081 = (state_185083[(2)]);
var state_185083__$1 = state_185083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185083__$1,inst_185081);
} else {
if((state_val_185084 === (2))){
var inst_185053 = (state_185083[(10)]);
var inst_185055 = cljs.core.count.call(null,inst_185053);
var inst_185056 = (inst_185055 > (0));
var state_185083__$1 = state_185083;
if(cljs.core.truth_(inst_185056)){
var statearr_185092_185116 = state_185083__$1;
(statearr_185092_185116[(1)] = (4));

} else {
var statearr_185093_185117 = state_185083__$1;
(statearr_185093_185117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185084 === (11))){
var inst_185053 = (state_185083[(10)]);
var inst_185072 = (state_185083[(2)]);
var tmp185091 = inst_185053;
var inst_185053__$1 = tmp185091;
var state_185083__$1 = (function (){var statearr_185094 = state_185083;
(statearr_185094[(10)] = inst_185053__$1);

(statearr_185094[(11)] = inst_185072);

return statearr_185094;
})();
var statearr_185095_185118 = state_185083__$1;
(statearr_185095_185118[(2)] = null);

(statearr_185095_185118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185084 === (9))){
var inst_185063 = (state_185083[(7)]);
var state_185083__$1 = state_185083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185083__$1,(11),out,inst_185063);
} else {
if((state_val_185084 === (5))){
var inst_185077 = cljs.core.async.close_BANG_.call(null,out);
var state_185083__$1 = state_185083;
var statearr_185096_185119 = state_185083__$1;
(statearr_185096_185119[(2)] = inst_185077);

(statearr_185096_185119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185084 === (10))){
var inst_185075 = (state_185083[(2)]);
var state_185083__$1 = state_185083;
var statearr_185097_185120 = state_185083__$1;
(statearr_185097_185120[(2)] = inst_185075);

(statearr_185097_185120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185084 === (8))){
var inst_185063 = (state_185083[(7)]);
var inst_185062 = (state_185083[(8)]);
var inst_185064 = (state_185083[(9)]);
var inst_185053 = (state_185083[(10)]);
var inst_185067 = (function (){var cs = inst_185053;
var vec__185058 = inst_185062;
var v = inst_185063;
var c = inst_185064;
return ((function (cs,vec__185058,v,c,inst_185063,inst_185062,inst_185064,inst_185053,state_val_185084,c__44084__auto___185111,out){
return (function (p1__185048_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__185048_SHARP_);
});
;})(cs,vec__185058,v,c,inst_185063,inst_185062,inst_185064,inst_185053,state_val_185084,c__44084__auto___185111,out))
})();
var inst_185068 = cljs.core.filterv.call(null,inst_185067,inst_185053);
var inst_185053__$1 = inst_185068;
var state_185083__$1 = (function (){var statearr_185098 = state_185083;
(statearr_185098[(10)] = inst_185053__$1);

return statearr_185098;
})();
var statearr_185099_185121 = state_185083__$1;
(statearr_185099_185121[(2)] = null);

(statearr_185099_185121[(1)] = (2));


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
});})(c__44084__auto___185111,out))
;
return ((function (switch__44061__auto__,c__44084__auto___185111,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_185103 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_185103[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_185103[(1)] = (1));

return statearr_185103;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_185083){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_185083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e185104){if((e185104 instanceof Object)){
var ex__44065__auto__ = e185104;
var statearr_185105_185122 = state_185083;
(statearr_185105_185122[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e185104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__185123 = state_185083;
state_185083 = G__185123;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_185083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_185083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___185111,out))
})();
var state__44086__auto__ = (function (){var statearr_185106 = f__44085__auto__.call(null);
(statearr_185106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___185111);

return statearr_185106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___185111,out))
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
var args185124 = [];
var len__40427__auto___185173 = arguments.length;
var i__40428__auto___185174 = (0);
while(true){
if((i__40428__auto___185174 < len__40427__auto___185173)){
args185124.push((arguments[i__40428__auto___185174]));

var G__185175 = (i__40428__auto___185174 + (1));
i__40428__auto___185174 = G__185175;
continue;
} else {
}
break;
}

var G__185126 = args185124.length;
switch (G__185126) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185124.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___185177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___185177,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___185177,out){
return (function (state_185150){
var state_val_185151 = (state_185150[(1)]);
if((state_val_185151 === (7))){
var inst_185132 = (state_185150[(7)]);
var inst_185132__$1 = (state_185150[(2)]);
var inst_185133 = (inst_185132__$1 == null);
var inst_185134 = cljs.core.not.call(null,inst_185133);
var state_185150__$1 = (function (){var statearr_185152 = state_185150;
(statearr_185152[(7)] = inst_185132__$1);

return statearr_185152;
})();
if(inst_185134){
var statearr_185153_185178 = state_185150__$1;
(statearr_185153_185178[(1)] = (8));

} else {
var statearr_185154_185179 = state_185150__$1;
(statearr_185154_185179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185151 === (1))){
var inst_185127 = (0);
var state_185150__$1 = (function (){var statearr_185155 = state_185150;
(statearr_185155[(8)] = inst_185127);

return statearr_185155;
})();
var statearr_185156_185180 = state_185150__$1;
(statearr_185156_185180[(2)] = null);

(statearr_185156_185180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185151 === (4))){
var state_185150__$1 = state_185150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_185150__$1,(7),ch);
} else {
if((state_val_185151 === (6))){
var inst_185145 = (state_185150[(2)]);
var state_185150__$1 = state_185150;
var statearr_185157_185181 = state_185150__$1;
(statearr_185157_185181[(2)] = inst_185145);

(statearr_185157_185181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185151 === (3))){
var inst_185147 = (state_185150[(2)]);
var inst_185148 = cljs.core.async.close_BANG_.call(null,out);
var state_185150__$1 = (function (){var statearr_185158 = state_185150;
(statearr_185158[(9)] = inst_185147);

return statearr_185158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185150__$1,inst_185148);
} else {
if((state_val_185151 === (2))){
var inst_185127 = (state_185150[(8)]);
var inst_185129 = (inst_185127 < n);
var state_185150__$1 = state_185150;
if(cljs.core.truth_(inst_185129)){
var statearr_185159_185182 = state_185150__$1;
(statearr_185159_185182[(1)] = (4));

} else {
var statearr_185160_185183 = state_185150__$1;
(statearr_185160_185183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185151 === (11))){
var inst_185127 = (state_185150[(8)]);
var inst_185137 = (state_185150[(2)]);
var inst_185138 = (inst_185127 + (1));
var inst_185127__$1 = inst_185138;
var state_185150__$1 = (function (){var statearr_185161 = state_185150;
(statearr_185161[(8)] = inst_185127__$1);

(statearr_185161[(10)] = inst_185137);

return statearr_185161;
})();
var statearr_185162_185184 = state_185150__$1;
(statearr_185162_185184[(2)] = null);

(statearr_185162_185184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185151 === (9))){
var state_185150__$1 = state_185150;
var statearr_185163_185185 = state_185150__$1;
(statearr_185163_185185[(2)] = null);

(statearr_185163_185185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185151 === (5))){
var state_185150__$1 = state_185150;
var statearr_185164_185186 = state_185150__$1;
(statearr_185164_185186[(2)] = null);

(statearr_185164_185186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185151 === (10))){
var inst_185142 = (state_185150[(2)]);
var state_185150__$1 = state_185150;
var statearr_185165_185187 = state_185150__$1;
(statearr_185165_185187[(2)] = inst_185142);

(statearr_185165_185187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185151 === (8))){
var inst_185132 = (state_185150[(7)]);
var state_185150__$1 = state_185150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185150__$1,(11),out,inst_185132);
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
});})(c__44084__auto___185177,out))
;
return ((function (switch__44061__auto__,c__44084__auto___185177,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_185169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_185169[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_185169[(1)] = (1));

return statearr_185169;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_185150){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_185150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e185170){if((e185170 instanceof Object)){
var ex__44065__auto__ = e185170;
var statearr_185171_185188 = state_185150;
(statearr_185171_185188[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e185170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__185189 = state_185150;
state_185150 = G__185189;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_185150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_185150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___185177,out))
})();
var state__44086__auto__ = (function (){var statearr_185172 = f__44085__auto__.call(null);
(statearr_185172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___185177);

return statearr_185172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___185177,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async185197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async185197 = (function (f,ch,meta185198){
this.f = f;
this.ch = ch;
this.meta185198 = meta185198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185199,meta185198__$1){
var self__ = this;
var _185199__$1 = this;
return (new cljs.core.async.t_cljs$core$async185197(self__.f,self__.ch,meta185198__$1));
});


cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185199){
var self__ = this;
var _185199__$1 = this;
return self__.meta185198;
});


cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async185200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async185200 = (function (f,ch,meta185198,_,fn1,meta185201){
this.f = f;
this.ch = ch;
this.meta185198 = meta185198;
this._ = _;
this.fn1 = fn1;
this.meta185201 = meta185201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async185200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_185202,meta185201__$1){
var self__ = this;
var _185202__$1 = this;
return (new cljs.core.async.t_cljs$core$async185200(self__.f,self__.ch,self__.meta185198,self__._,self__.fn1,meta185201__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async185200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_185202){
var self__ = this;
var _185202__$1 = this;
return self__.meta185201;
});})(___$1))
;


cljs.core.async.t_cljs$core$async185200.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async185200.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async185200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__185190_SHARP_){
return f1.call(null,(((p1__185190_SHARP_ == null))?null:self__.f.call(null,p1__185190_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async185200.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta185198","meta185198",-820239003,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async185197","cljs.core.async/t_cljs$core$async185197",-1982549388,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta185201","meta185201",-1769097478,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async185200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async185200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async185200";

cljs.core.async.t_cljs$core$async185200.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async185200");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async185200 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async185200(f__$1,ch__$1,meta185198__$1,___$2,fn1__$1,meta185201){
return (new cljs.core.async.t_cljs$core$async185200(f__$1,ch__$1,meta185198__$1,___$2,fn1__$1,meta185201));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async185200(self__.f,self__.ch,self__.meta185198,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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


cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async185197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta185198","meta185198",-820239003,null)], null);
});

cljs.core.async.t_cljs$core$async185197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async185197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async185197";

cljs.core.async.t_cljs$core$async185197.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async185197");
});

cljs.core.async.__GT_t_cljs$core$async185197 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async185197(f__$1,ch__$1,meta185198){
return (new cljs.core.async.t_cljs$core$async185197(f__$1,ch__$1,meta185198));
});

}

return (new cljs.core.async.t_cljs$core$async185197(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async185206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async185206 = (function (f,ch,meta185207){
this.f = f;
this.ch = ch;
this.meta185207 = meta185207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async185206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185208,meta185207__$1){
var self__ = this;
var _185208__$1 = this;
return (new cljs.core.async.t_cljs$core$async185206(self__.f,self__.ch,meta185207__$1));
});


cljs.core.async.t_cljs$core$async185206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185208){
var self__ = this;
var _185208__$1 = this;
return self__.meta185207;
});


cljs.core.async.t_cljs$core$async185206.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async185206.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async185206.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async185206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta185207","meta185207",-1226678661,null)], null);
});

cljs.core.async.t_cljs$core$async185206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async185206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async185206";

cljs.core.async.t_cljs$core$async185206.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async185206");
});

cljs.core.async.__GT_t_cljs$core$async185206 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async185206(f__$1,ch__$1,meta185207){
return (new cljs.core.async.t_cljs$core$async185206(f__$1,ch__$1,meta185207));
});

}

return (new cljs.core.async.t_cljs$core$async185206(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async185212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async185212 = (function (p,ch,meta185213){
this.p = p;
this.ch = ch;
this.meta185213 = meta185213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_185214,meta185213__$1){
var self__ = this;
var _185214__$1 = this;
return (new cljs.core.async.t_cljs$core$async185212(self__.p,self__.ch,meta185213__$1));
});


cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_185214){
var self__ = this;
var _185214__$1 = this;
return self__.meta185213;
});


cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async185212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async185212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta185213","meta185213",204594571,null)], null);
});

cljs.core.async.t_cljs$core$async185212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async185212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async185212";

cljs.core.async.t_cljs$core$async185212.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async185212");
});

cljs.core.async.__GT_t_cljs$core$async185212 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async185212(p__$1,ch__$1,meta185213){
return (new cljs.core.async.t_cljs$core$async185212(p__$1,ch__$1,meta185213));
});

}

return (new cljs.core.async.t_cljs$core$async185212(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args185215 = [];
var len__40427__auto___185259 = arguments.length;
var i__40428__auto___185260 = (0);
while(true){
if((i__40428__auto___185260 < len__40427__auto___185259)){
args185215.push((arguments[i__40428__auto___185260]));

var G__185261 = (i__40428__auto___185260 + (1));
i__40428__auto___185260 = G__185261;
continue;
} else {
}
break;
}

var G__185217 = args185215.length;
switch (G__185217) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185215.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___185263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___185263,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___185263,out){
return (function (state_185238){
var state_val_185239 = (state_185238[(1)]);
if((state_val_185239 === (7))){
var inst_185234 = (state_185238[(2)]);
var state_185238__$1 = state_185238;
var statearr_185240_185264 = state_185238__$1;
(statearr_185240_185264[(2)] = inst_185234);

(statearr_185240_185264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185239 === (1))){
var state_185238__$1 = state_185238;
var statearr_185241_185265 = state_185238__$1;
(statearr_185241_185265[(2)] = null);

(statearr_185241_185265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185239 === (4))){
var inst_185220 = (state_185238[(7)]);
var inst_185220__$1 = (state_185238[(2)]);
var inst_185221 = (inst_185220__$1 == null);
var state_185238__$1 = (function (){var statearr_185242 = state_185238;
(statearr_185242[(7)] = inst_185220__$1);

return statearr_185242;
})();
if(cljs.core.truth_(inst_185221)){
var statearr_185243_185266 = state_185238__$1;
(statearr_185243_185266[(1)] = (5));

} else {
var statearr_185244_185267 = state_185238__$1;
(statearr_185244_185267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185239 === (6))){
var inst_185220 = (state_185238[(7)]);
var inst_185225 = p.call(null,inst_185220);
var state_185238__$1 = state_185238;
if(cljs.core.truth_(inst_185225)){
var statearr_185245_185268 = state_185238__$1;
(statearr_185245_185268[(1)] = (8));

} else {
var statearr_185246_185269 = state_185238__$1;
(statearr_185246_185269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185239 === (3))){
var inst_185236 = (state_185238[(2)]);
var state_185238__$1 = state_185238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185238__$1,inst_185236);
} else {
if((state_val_185239 === (2))){
var state_185238__$1 = state_185238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_185238__$1,(4),ch);
} else {
if((state_val_185239 === (11))){
var inst_185228 = (state_185238[(2)]);
var state_185238__$1 = state_185238;
var statearr_185247_185270 = state_185238__$1;
(statearr_185247_185270[(2)] = inst_185228);

(statearr_185247_185270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185239 === (9))){
var state_185238__$1 = state_185238;
var statearr_185248_185271 = state_185238__$1;
(statearr_185248_185271[(2)] = null);

(statearr_185248_185271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185239 === (5))){
var inst_185223 = cljs.core.async.close_BANG_.call(null,out);
var state_185238__$1 = state_185238;
var statearr_185249_185272 = state_185238__$1;
(statearr_185249_185272[(2)] = inst_185223);

(statearr_185249_185272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185239 === (10))){
var inst_185231 = (state_185238[(2)]);
var state_185238__$1 = (function (){var statearr_185250 = state_185238;
(statearr_185250[(8)] = inst_185231);

return statearr_185250;
})();
var statearr_185251_185273 = state_185238__$1;
(statearr_185251_185273[(2)] = null);

(statearr_185251_185273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185239 === (8))){
var inst_185220 = (state_185238[(7)]);
var state_185238__$1 = state_185238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185238__$1,(11),out,inst_185220);
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
});})(c__44084__auto___185263,out))
;
return ((function (switch__44061__auto__,c__44084__auto___185263,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_185255 = [null,null,null,null,null,null,null,null,null];
(statearr_185255[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_185255[(1)] = (1));

return statearr_185255;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_185238){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_185238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e185256){if((e185256 instanceof Object)){
var ex__44065__auto__ = e185256;
var statearr_185257_185274 = state_185238;
(statearr_185257_185274[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e185256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__185275 = state_185238;
state_185238 = G__185275;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_185238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_185238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___185263,out))
})();
var state__44086__auto__ = (function (){var statearr_185258 = f__44085__auto__.call(null);
(statearr_185258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___185263);

return statearr_185258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___185263,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args185276 = [];
var len__40427__auto___185279 = arguments.length;
var i__40428__auto___185280 = (0);
while(true){
if((i__40428__auto___185280 < len__40427__auto___185279)){
args185276.push((arguments[i__40428__auto___185280]));

var G__185281 = (i__40428__auto___185280 + (1));
i__40428__auto___185280 = G__185281;
continue;
} else {
}
break;
}

var G__185278 = args185276.length;
switch (G__185278) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185276.length)].join('')));

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
return (function (state_185448){
var state_val_185449 = (state_185448[(1)]);
if((state_val_185449 === (7))){
var inst_185444 = (state_185448[(2)]);
var state_185448__$1 = state_185448;
var statearr_185450_185491 = state_185448__$1;
(statearr_185450_185491[(2)] = inst_185444);

(statearr_185450_185491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (20))){
var inst_185414 = (state_185448[(7)]);
var inst_185425 = (state_185448[(2)]);
var inst_185426 = cljs.core.next.call(null,inst_185414);
var inst_185400 = inst_185426;
var inst_185401 = null;
var inst_185402 = (0);
var inst_185403 = (0);
var state_185448__$1 = (function (){var statearr_185451 = state_185448;
(statearr_185451[(8)] = inst_185403);

(statearr_185451[(9)] = inst_185400);

(statearr_185451[(10)] = inst_185402);

(statearr_185451[(11)] = inst_185401);

(statearr_185451[(12)] = inst_185425);

return statearr_185451;
})();
var statearr_185452_185492 = state_185448__$1;
(statearr_185452_185492[(2)] = null);

(statearr_185452_185492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (1))){
var state_185448__$1 = state_185448;
var statearr_185453_185493 = state_185448__$1;
(statearr_185453_185493[(2)] = null);

(statearr_185453_185493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (4))){
var inst_185389 = (state_185448[(13)]);
var inst_185389__$1 = (state_185448[(2)]);
var inst_185390 = (inst_185389__$1 == null);
var state_185448__$1 = (function (){var statearr_185454 = state_185448;
(statearr_185454[(13)] = inst_185389__$1);

return statearr_185454;
})();
if(cljs.core.truth_(inst_185390)){
var statearr_185455_185494 = state_185448__$1;
(statearr_185455_185494[(1)] = (5));

} else {
var statearr_185456_185495 = state_185448__$1;
(statearr_185456_185495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (15))){
var state_185448__$1 = state_185448;
var statearr_185460_185496 = state_185448__$1;
(statearr_185460_185496[(2)] = null);

(statearr_185460_185496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (21))){
var state_185448__$1 = state_185448;
var statearr_185461_185497 = state_185448__$1;
(statearr_185461_185497[(2)] = null);

(statearr_185461_185497[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (13))){
var inst_185403 = (state_185448[(8)]);
var inst_185400 = (state_185448[(9)]);
var inst_185402 = (state_185448[(10)]);
var inst_185401 = (state_185448[(11)]);
var inst_185410 = (state_185448[(2)]);
var inst_185411 = (inst_185403 + (1));
var tmp185457 = inst_185400;
var tmp185458 = inst_185402;
var tmp185459 = inst_185401;
var inst_185400__$1 = tmp185457;
var inst_185401__$1 = tmp185459;
var inst_185402__$1 = tmp185458;
var inst_185403__$1 = inst_185411;
var state_185448__$1 = (function (){var statearr_185462 = state_185448;
(statearr_185462[(8)] = inst_185403__$1);

(statearr_185462[(14)] = inst_185410);

(statearr_185462[(9)] = inst_185400__$1);

(statearr_185462[(10)] = inst_185402__$1);

(statearr_185462[(11)] = inst_185401__$1);

return statearr_185462;
})();
var statearr_185463_185498 = state_185448__$1;
(statearr_185463_185498[(2)] = null);

(statearr_185463_185498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (22))){
var state_185448__$1 = state_185448;
var statearr_185464_185499 = state_185448__$1;
(statearr_185464_185499[(2)] = null);

(statearr_185464_185499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (6))){
var inst_185389 = (state_185448[(13)]);
var inst_185398 = f.call(null,inst_185389);
var inst_185399 = cljs.core.seq.call(null,inst_185398);
var inst_185400 = inst_185399;
var inst_185401 = null;
var inst_185402 = (0);
var inst_185403 = (0);
var state_185448__$1 = (function (){var statearr_185465 = state_185448;
(statearr_185465[(8)] = inst_185403);

(statearr_185465[(9)] = inst_185400);

(statearr_185465[(10)] = inst_185402);

(statearr_185465[(11)] = inst_185401);

return statearr_185465;
})();
var statearr_185466_185500 = state_185448__$1;
(statearr_185466_185500[(2)] = null);

(statearr_185466_185500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (17))){
var inst_185414 = (state_185448[(7)]);
var inst_185418 = cljs.core.chunk_first.call(null,inst_185414);
var inst_185419 = cljs.core.chunk_rest.call(null,inst_185414);
var inst_185420 = cljs.core.count.call(null,inst_185418);
var inst_185400 = inst_185419;
var inst_185401 = inst_185418;
var inst_185402 = inst_185420;
var inst_185403 = (0);
var state_185448__$1 = (function (){var statearr_185467 = state_185448;
(statearr_185467[(8)] = inst_185403);

(statearr_185467[(9)] = inst_185400);

(statearr_185467[(10)] = inst_185402);

(statearr_185467[(11)] = inst_185401);

return statearr_185467;
})();
var statearr_185468_185501 = state_185448__$1;
(statearr_185468_185501[(2)] = null);

(statearr_185468_185501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (3))){
var inst_185446 = (state_185448[(2)]);
var state_185448__$1 = state_185448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185448__$1,inst_185446);
} else {
if((state_val_185449 === (12))){
var inst_185434 = (state_185448[(2)]);
var state_185448__$1 = state_185448;
var statearr_185469_185502 = state_185448__$1;
(statearr_185469_185502[(2)] = inst_185434);

(statearr_185469_185502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (2))){
var state_185448__$1 = state_185448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_185448__$1,(4),in$);
} else {
if((state_val_185449 === (23))){
var inst_185442 = (state_185448[(2)]);
var state_185448__$1 = state_185448;
var statearr_185470_185503 = state_185448__$1;
(statearr_185470_185503[(2)] = inst_185442);

(statearr_185470_185503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (19))){
var inst_185429 = (state_185448[(2)]);
var state_185448__$1 = state_185448;
var statearr_185471_185504 = state_185448__$1;
(statearr_185471_185504[(2)] = inst_185429);

(statearr_185471_185504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (11))){
var inst_185400 = (state_185448[(9)]);
var inst_185414 = (state_185448[(7)]);
var inst_185414__$1 = cljs.core.seq.call(null,inst_185400);
var state_185448__$1 = (function (){var statearr_185472 = state_185448;
(statearr_185472[(7)] = inst_185414__$1);

return statearr_185472;
})();
if(inst_185414__$1){
var statearr_185473_185505 = state_185448__$1;
(statearr_185473_185505[(1)] = (14));

} else {
var statearr_185474_185506 = state_185448__$1;
(statearr_185474_185506[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (9))){
var inst_185436 = (state_185448[(2)]);
var inst_185437 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_185448__$1 = (function (){var statearr_185475 = state_185448;
(statearr_185475[(15)] = inst_185436);

return statearr_185475;
})();
if(cljs.core.truth_(inst_185437)){
var statearr_185476_185507 = state_185448__$1;
(statearr_185476_185507[(1)] = (21));

} else {
var statearr_185477_185508 = state_185448__$1;
(statearr_185477_185508[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (5))){
var inst_185392 = cljs.core.async.close_BANG_.call(null,out);
var state_185448__$1 = state_185448;
var statearr_185478_185509 = state_185448__$1;
(statearr_185478_185509[(2)] = inst_185392);

(statearr_185478_185509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (14))){
var inst_185414 = (state_185448[(7)]);
var inst_185416 = cljs.core.chunked_seq_QMARK_.call(null,inst_185414);
var state_185448__$1 = state_185448;
if(inst_185416){
var statearr_185479_185510 = state_185448__$1;
(statearr_185479_185510[(1)] = (17));

} else {
var statearr_185480_185511 = state_185448__$1;
(statearr_185480_185511[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (16))){
var inst_185432 = (state_185448[(2)]);
var state_185448__$1 = state_185448;
var statearr_185481_185512 = state_185448__$1;
(statearr_185481_185512[(2)] = inst_185432);

(statearr_185481_185512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185449 === (10))){
var inst_185403 = (state_185448[(8)]);
var inst_185401 = (state_185448[(11)]);
var inst_185408 = cljs.core._nth.call(null,inst_185401,inst_185403);
var state_185448__$1 = state_185448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185448__$1,(13),out,inst_185408);
} else {
if((state_val_185449 === (18))){
var inst_185414 = (state_185448[(7)]);
var inst_185423 = cljs.core.first.call(null,inst_185414);
var state_185448__$1 = state_185448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185448__$1,(20),out,inst_185423);
} else {
if((state_val_185449 === (8))){
var inst_185403 = (state_185448[(8)]);
var inst_185402 = (state_185448[(10)]);
var inst_185405 = (inst_185403 < inst_185402);
var inst_185406 = inst_185405;
var state_185448__$1 = state_185448;
if(cljs.core.truth_(inst_185406)){
var statearr_185482_185513 = state_185448__$1;
(statearr_185482_185513[(1)] = (10));

} else {
var statearr_185483_185514 = state_185448__$1;
(statearr_185483_185514[(1)] = (11));

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
var statearr_185487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_185487[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__);

(statearr_185487[(1)] = (1));

return statearr_185487;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1 = (function (state_185448){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_185448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e185488){if((e185488 instanceof Object)){
var ex__44065__auto__ = e185488;
var statearr_185489_185515 = state_185448;
(statearr_185489_185515[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e185488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__185516 = state_185448;
state_185448 = G__185516;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__ = function(state_185448){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1.call(this,state_185448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_185490 = f__44085__auto__.call(null);
(statearr_185490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_185490;
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
var args185517 = [];
var len__40427__auto___185520 = arguments.length;
var i__40428__auto___185521 = (0);
while(true){
if((i__40428__auto___185521 < len__40427__auto___185520)){
args185517.push((arguments[i__40428__auto___185521]));

var G__185522 = (i__40428__auto___185521 + (1));
i__40428__auto___185521 = G__185522;
continue;
} else {
}
break;
}

var G__185519 = args185517.length;
switch (G__185519) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185517.length)].join('')));

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
var args185524 = [];
var len__40427__auto___185527 = arguments.length;
var i__40428__auto___185528 = (0);
while(true){
if((i__40428__auto___185528 < len__40427__auto___185527)){
args185524.push((arguments[i__40428__auto___185528]));

var G__185529 = (i__40428__auto___185528 + (1));
i__40428__auto___185528 = G__185529;
continue;
} else {
}
break;
}

var G__185526 = args185524.length;
switch (G__185526) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185524.length)].join('')));

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
var args185531 = [];
var len__40427__auto___185582 = arguments.length;
var i__40428__auto___185583 = (0);
while(true){
if((i__40428__auto___185583 < len__40427__auto___185582)){
args185531.push((arguments[i__40428__auto___185583]));

var G__185584 = (i__40428__auto___185583 + (1));
i__40428__auto___185583 = G__185584;
continue;
} else {
}
break;
}

var G__185533 = args185531.length;
switch (G__185533) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185531.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___185586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___185586,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___185586,out){
return (function (state_185557){
var state_val_185558 = (state_185557[(1)]);
if((state_val_185558 === (7))){
var inst_185552 = (state_185557[(2)]);
var state_185557__$1 = state_185557;
var statearr_185559_185587 = state_185557__$1;
(statearr_185559_185587[(2)] = inst_185552);

(statearr_185559_185587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185558 === (1))){
var inst_185534 = null;
var state_185557__$1 = (function (){var statearr_185560 = state_185557;
(statearr_185560[(7)] = inst_185534);

return statearr_185560;
})();
var statearr_185561_185588 = state_185557__$1;
(statearr_185561_185588[(2)] = null);

(statearr_185561_185588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185558 === (4))){
var inst_185537 = (state_185557[(8)]);
var inst_185537__$1 = (state_185557[(2)]);
var inst_185538 = (inst_185537__$1 == null);
var inst_185539 = cljs.core.not.call(null,inst_185538);
var state_185557__$1 = (function (){var statearr_185562 = state_185557;
(statearr_185562[(8)] = inst_185537__$1);

return statearr_185562;
})();
if(inst_185539){
var statearr_185563_185589 = state_185557__$1;
(statearr_185563_185589[(1)] = (5));

} else {
var statearr_185564_185590 = state_185557__$1;
(statearr_185564_185590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185558 === (6))){
var state_185557__$1 = state_185557;
var statearr_185565_185591 = state_185557__$1;
(statearr_185565_185591[(2)] = null);

(statearr_185565_185591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185558 === (3))){
var inst_185554 = (state_185557[(2)]);
var inst_185555 = cljs.core.async.close_BANG_.call(null,out);
var state_185557__$1 = (function (){var statearr_185566 = state_185557;
(statearr_185566[(9)] = inst_185554);

return statearr_185566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185557__$1,inst_185555);
} else {
if((state_val_185558 === (2))){
var state_185557__$1 = state_185557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_185557__$1,(4),ch);
} else {
if((state_val_185558 === (11))){
var inst_185537 = (state_185557[(8)]);
var inst_185546 = (state_185557[(2)]);
var inst_185534 = inst_185537;
var state_185557__$1 = (function (){var statearr_185567 = state_185557;
(statearr_185567[(7)] = inst_185534);

(statearr_185567[(10)] = inst_185546);

return statearr_185567;
})();
var statearr_185568_185592 = state_185557__$1;
(statearr_185568_185592[(2)] = null);

(statearr_185568_185592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185558 === (9))){
var inst_185537 = (state_185557[(8)]);
var state_185557__$1 = state_185557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185557__$1,(11),out,inst_185537);
} else {
if((state_val_185558 === (5))){
var inst_185534 = (state_185557[(7)]);
var inst_185537 = (state_185557[(8)]);
var inst_185541 = cljs.core._EQ_.call(null,inst_185537,inst_185534);
var state_185557__$1 = state_185557;
if(inst_185541){
var statearr_185570_185593 = state_185557__$1;
(statearr_185570_185593[(1)] = (8));

} else {
var statearr_185571_185594 = state_185557__$1;
(statearr_185571_185594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185558 === (10))){
var inst_185549 = (state_185557[(2)]);
var state_185557__$1 = state_185557;
var statearr_185572_185595 = state_185557__$1;
(statearr_185572_185595[(2)] = inst_185549);

(statearr_185572_185595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185558 === (8))){
var inst_185534 = (state_185557[(7)]);
var tmp185569 = inst_185534;
var inst_185534__$1 = tmp185569;
var state_185557__$1 = (function (){var statearr_185573 = state_185557;
(statearr_185573[(7)] = inst_185534__$1);

return statearr_185573;
})();
var statearr_185574_185596 = state_185557__$1;
(statearr_185574_185596[(2)] = null);

(statearr_185574_185596[(1)] = (2));


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
});})(c__44084__auto___185586,out))
;
return ((function (switch__44061__auto__,c__44084__auto___185586,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_185578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_185578[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_185578[(1)] = (1));

return statearr_185578;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_185557){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_185557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e185579){if((e185579 instanceof Object)){
var ex__44065__auto__ = e185579;
var statearr_185580_185597 = state_185557;
(statearr_185580_185597[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e185579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__185598 = state_185557;
state_185557 = G__185598;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_185557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_185557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___185586,out))
})();
var state__44086__auto__ = (function (){var statearr_185581 = f__44085__auto__.call(null);
(statearr_185581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___185586);

return statearr_185581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___185586,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args185599 = [];
var len__40427__auto___185669 = arguments.length;
var i__40428__auto___185670 = (0);
while(true){
if((i__40428__auto___185670 < len__40427__auto___185669)){
args185599.push((arguments[i__40428__auto___185670]));

var G__185671 = (i__40428__auto___185670 + (1));
i__40428__auto___185670 = G__185671;
continue;
} else {
}
break;
}

var G__185601 = args185599.length;
switch (G__185601) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185599.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___185673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___185673,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___185673,out){
return (function (state_185639){
var state_val_185640 = (state_185639[(1)]);
if((state_val_185640 === (7))){
var inst_185635 = (state_185639[(2)]);
var state_185639__$1 = state_185639;
var statearr_185641_185674 = state_185639__$1;
(statearr_185641_185674[(2)] = inst_185635);

(statearr_185641_185674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (1))){
var inst_185602 = (new Array(n));
var inst_185603 = inst_185602;
var inst_185604 = (0);
var state_185639__$1 = (function (){var statearr_185642 = state_185639;
(statearr_185642[(7)] = inst_185604);

(statearr_185642[(8)] = inst_185603);

return statearr_185642;
})();
var statearr_185643_185675 = state_185639__$1;
(statearr_185643_185675[(2)] = null);

(statearr_185643_185675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (4))){
var inst_185607 = (state_185639[(9)]);
var inst_185607__$1 = (state_185639[(2)]);
var inst_185608 = (inst_185607__$1 == null);
var inst_185609 = cljs.core.not.call(null,inst_185608);
var state_185639__$1 = (function (){var statearr_185644 = state_185639;
(statearr_185644[(9)] = inst_185607__$1);

return statearr_185644;
})();
if(inst_185609){
var statearr_185645_185676 = state_185639__$1;
(statearr_185645_185676[(1)] = (5));

} else {
var statearr_185646_185677 = state_185639__$1;
(statearr_185646_185677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (15))){
var inst_185629 = (state_185639[(2)]);
var state_185639__$1 = state_185639;
var statearr_185647_185678 = state_185639__$1;
(statearr_185647_185678[(2)] = inst_185629);

(statearr_185647_185678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (13))){
var state_185639__$1 = state_185639;
var statearr_185648_185679 = state_185639__$1;
(statearr_185648_185679[(2)] = null);

(statearr_185648_185679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (6))){
var inst_185604 = (state_185639[(7)]);
var inst_185625 = (inst_185604 > (0));
var state_185639__$1 = state_185639;
if(cljs.core.truth_(inst_185625)){
var statearr_185649_185680 = state_185639__$1;
(statearr_185649_185680[(1)] = (12));

} else {
var statearr_185650_185681 = state_185639__$1;
(statearr_185650_185681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (3))){
var inst_185637 = (state_185639[(2)]);
var state_185639__$1 = state_185639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185639__$1,inst_185637);
} else {
if((state_val_185640 === (12))){
var inst_185603 = (state_185639[(8)]);
var inst_185627 = cljs.core.vec.call(null,inst_185603);
var state_185639__$1 = state_185639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185639__$1,(15),out,inst_185627);
} else {
if((state_val_185640 === (2))){
var state_185639__$1 = state_185639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_185639__$1,(4),ch);
} else {
if((state_val_185640 === (11))){
var inst_185619 = (state_185639[(2)]);
var inst_185620 = (new Array(n));
var inst_185603 = inst_185620;
var inst_185604 = (0);
var state_185639__$1 = (function (){var statearr_185651 = state_185639;
(statearr_185651[(7)] = inst_185604);

(statearr_185651[(10)] = inst_185619);

(statearr_185651[(8)] = inst_185603);

return statearr_185651;
})();
var statearr_185652_185682 = state_185639__$1;
(statearr_185652_185682[(2)] = null);

(statearr_185652_185682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (9))){
var inst_185603 = (state_185639[(8)]);
var inst_185617 = cljs.core.vec.call(null,inst_185603);
var state_185639__$1 = state_185639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185639__$1,(11),out,inst_185617);
} else {
if((state_val_185640 === (5))){
var inst_185604 = (state_185639[(7)]);
var inst_185612 = (state_185639[(11)]);
var inst_185603 = (state_185639[(8)]);
var inst_185607 = (state_185639[(9)]);
var inst_185611 = (inst_185603[inst_185604] = inst_185607);
var inst_185612__$1 = (inst_185604 + (1));
var inst_185613 = (inst_185612__$1 < n);
var state_185639__$1 = (function (){var statearr_185653 = state_185639;
(statearr_185653[(11)] = inst_185612__$1);

(statearr_185653[(12)] = inst_185611);

return statearr_185653;
})();
if(cljs.core.truth_(inst_185613)){
var statearr_185654_185683 = state_185639__$1;
(statearr_185654_185683[(1)] = (8));

} else {
var statearr_185655_185684 = state_185639__$1;
(statearr_185655_185684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (14))){
var inst_185632 = (state_185639[(2)]);
var inst_185633 = cljs.core.async.close_BANG_.call(null,out);
var state_185639__$1 = (function (){var statearr_185657 = state_185639;
(statearr_185657[(13)] = inst_185632);

return statearr_185657;
})();
var statearr_185658_185685 = state_185639__$1;
(statearr_185658_185685[(2)] = inst_185633);

(statearr_185658_185685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (10))){
var inst_185623 = (state_185639[(2)]);
var state_185639__$1 = state_185639;
var statearr_185659_185686 = state_185639__$1;
(statearr_185659_185686[(2)] = inst_185623);

(statearr_185659_185686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185640 === (8))){
var inst_185612 = (state_185639[(11)]);
var inst_185603 = (state_185639[(8)]);
var tmp185656 = inst_185603;
var inst_185603__$1 = tmp185656;
var inst_185604 = inst_185612;
var state_185639__$1 = (function (){var statearr_185660 = state_185639;
(statearr_185660[(7)] = inst_185604);

(statearr_185660[(8)] = inst_185603__$1);

return statearr_185660;
})();
var statearr_185661_185687 = state_185639__$1;
(statearr_185661_185687[(2)] = null);

(statearr_185661_185687[(1)] = (2));


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
});})(c__44084__auto___185673,out))
;
return ((function (switch__44061__auto__,c__44084__auto___185673,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_185665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_185665[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_185665[(1)] = (1));

return statearr_185665;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_185639){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_185639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e185666){if((e185666 instanceof Object)){
var ex__44065__auto__ = e185666;
var statearr_185667_185688 = state_185639;
(statearr_185667_185688[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e185666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__185689 = state_185639;
state_185639 = G__185689;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_185639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_185639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___185673,out))
})();
var state__44086__auto__ = (function (){var statearr_185668 = f__44085__auto__.call(null);
(statearr_185668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___185673);

return statearr_185668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___185673,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args185690 = [];
var len__40427__auto___185764 = arguments.length;
var i__40428__auto___185765 = (0);
while(true){
if((i__40428__auto___185765 < len__40427__auto___185764)){
args185690.push((arguments[i__40428__auto___185765]));

var G__185766 = (i__40428__auto___185765 + (1));
i__40428__auto___185765 = G__185766;
continue;
} else {
}
break;
}

var G__185692 = args185690.length;
switch (G__185692) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args185690.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___185768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___185768,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___185768,out){
return (function (state_185734){
var state_val_185735 = (state_185734[(1)]);
if((state_val_185735 === (7))){
var inst_185730 = (state_185734[(2)]);
var state_185734__$1 = state_185734;
var statearr_185736_185769 = state_185734__$1;
(statearr_185736_185769[(2)] = inst_185730);

(statearr_185736_185769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (1))){
var inst_185693 = [];
var inst_185694 = inst_185693;
var inst_185695 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_185734__$1 = (function (){var statearr_185737 = state_185734;
(statearr_185737[(7)] = inst_185695);

(statearr_185737[(8)] = inst_185694);

return statearr_185737;
})();
var statearr_185738_185770 = state_185734__$1;
(statearr_185738_185770[(2)] = null);

(statearr_185738_185770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (4))){
var inst_185698 = (state_185734[(9)]);
var inst_185698__$1 = (state_185734[(2)]);
var inst_185699 = (inst_185698__$1 == null);
var inst_185700 = cljs.core.not.call(null,inst_185699);
var state_185734__$1 = (function (){var statearr_185739 = state_185734;
(statearr_185739[(9)] = inst_185698__$1);

return statearr_185739;
})();
if(inst_185700){
var statearr_185740_185771 = state_185734__$1;
(statearr_185740_185771[(1)] = (5));

} else {
var statearr_185741_185772 = state_185734__$1;
(statearr_185741_185772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (15))){
var inst_185724 = (state_185734[(2)]);
var state_185734__$1 = state_185734;
var statearr_185742_185773 = state_185734__$1;
(statearr_185742_185773[(2)] = inst_185724);

(statearr_185742_185773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (13))){
var state_185734__$1 = state_185734;
var statearr_185743_185774 = state_185734__$1;
(statearr_185743_185774[(2)] = null);

(statearr_185743_185774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (6))){
var inst_185694 = (state_185734[(8)]);
var inst_185719 = inst_185694.length;
var inst_185720 = (inst_185719 > (0));
var state_185734__$1 = state_185734;
if(cljs.core.truth_(inst_185720)){
var statearr_185744_185775 = state_185734__$1;
(statearr_185744_185775[(1)] = (12));

} else {
var statearr_185745_185776 = state_185734__$1;
(statearr_185745_185776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (3))){
var inst_185732 = (state_185734[(2)]);
var state_185734__$1 = state_185734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_185734__$1,inst_185732);
} else {
if((state_val_185735 === (12))){
var inst_185694 = (state_185734[(8)]);
var inst_185722 = cljs.core.vec.call(null,inst_185694);
var state_185734__$1 = state_185734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185734__$1,(15),out,inst_185722);
} else {
if((state_val_185735 === (2))){
var state_185734__$1 = state_185734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_185734__$1,(4),ch);
} else {
if((state_val_185735 === (11))){
var inst_185698 = (state_185734[(9)]);
var inst_185702 = (state_185734[(10)]);
var inst_185712 = (state_185734[(2)]);
var inst_185713 = [];
var inst_185714 = inst_185713.push(inst_185698);
var inst_185694 = inst_185713;
var inst_185695 = inst_185702;
var state_185734__$1 = (function (){var statearr_185746 = state_185734;
(statearr_185746[(11)] = inst_185714);

(statearr_185746[(7)] = inst_185695);

(statearr_185746[(12)] = inst_185712);

(statearr_185746[(8)] = inst_185694);

return statearr_185746;
})();
var statearr_185747_185777 = state_185734__$1;
(statearr_185747_185777[(2)] = null);

(statearr_185747_185777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (9))){
var inst_185694 = (state_185734[(8)]);
var inst_185710 = cljs.core.vec.call(null,inst_185694);
var state_185734__$1 = state_185734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_185734__$1,(11),out,inst_185710);
} else {
if((state_val_185735 === (5))){
var inst_185695 = (state_185734[(7)]);
var inst_185698 = (state_185734[(9)]);
var inst_185702 = (state_185734[(10)]);
var inst_185702__$1 = f.call(null,inst_185698);
var inst_185703 = cljs.core._EQ_.call(null,inst_185702__$1,inst_185695);
var inst_185704 = cljs.core.keyword_identical_QMARK_.call(null,inst_185695,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_185705 = (inst_185703) || (inst_185704);
var state_185734__$1 = (function (){var statearr_185748 = state_185734;
(statearr_185748[(10)] = inst_185702__$1);

return statearr_185748;
})();
if(cljs.core.truth_(inst_185705)){
var statearr_185749_185778 = state_185734__$1;
(statearr_185749_185778[(1)] = (8));

} else {
var statearr_185750_185779 = state_185734__$1;
(statearr_185750_185779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (14))){
var inst_185727 = (state_185734[(2)]);
var inst_185728 = cljs.core.async.close_BANG_.call(null,out);
var state_185734__$1 = (function (){var statearr_185752 = state_185734;
(statearr_185752[(13)] = inst_185727);

return statearr_185752;
})();
var statearr_185753_185780 = state_185734__$1;
(statearr_185753_185780[(2)] = inst_185728);

(statearr_185753_185780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (10))){
var inst_185717 = (state_185734[(2)]);
var state_185734__$1 = state_185734;
var statearr_185754_185781 = state_185734__$1;
(statearr_185754_185781[(2)] = inst_185717);

(statearr_185754_185781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_185735 === (8))){
var inst_185698 = (state_185734[(9)]);
var inst_185694 = (state_185734[(8)]);
var inst_185702 = (state_185734[(10)]);
var inst_185707 = inst_185694.push(inst_185698);
var tmp185751 = inst_185694;
var inst_185694__$1 = tmp185751;
var inst_185695 = inst_185702;
var state_185734__$1 = (function (){var statearr_185755 = state_185734;
(statearr_185755[(7)] = inst_185695);

(statearr_185755[(8)] = inst_185694__$1);

(statearr_185755[(14)] = inst_185707);

return statearr_185755;
})();
var statearr_185756_185782 = state_185734__$1;
(statearr_185756_185782[(2)] = null);

(statearr_185756_185782[(1)] = (2));


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
});})(c__44084__auto___185768,out))
;
return ((function (switch__44061__auto__,c__44084__auto___185768,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_185760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_185760[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_185760[(1)] = (1));

return statearr_185760;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_185734){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_185734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e185761){if((e185761 instanceof Object)){
var ex__44065__auto__ = e185761;
var statearr_185762_185783 = state_185734;
(statearr_185762_185783[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_185734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e185761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__185784 = state_185734;
state_185734 = G__185784;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_185734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_185734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___185768,out))
})();
var state__44086__auto__ = (function (){var statearr_185763 = f__44085__auto__.call(null);
(statearr_185763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___185768);

return statearr_185763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___185768,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491715067168