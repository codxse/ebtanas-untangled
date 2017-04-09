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
var args221754 = [];
var len__40427__auto___221760 = arguments.length;
var i__40428__auto___221761 = (0);
while(true){
if((i__40428__auto___221761 < len__40427__auto___221760)){
args221754.push((arguments[i__40428__auto___221761]));

var G__221762 = (i__40428__auto___221761 + (1));
i__40428__auto___221761 = G__221762;
continue;
} else {
}
break;
}

var G__221756 = args221754.length;
switch (G__221756) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args221754.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async221757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async221757 = (function (f,blockable,meta221758){
this.f = f;
this.blockable = blockable;
this.meta221758 = meta221758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async221757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_221759,meta221758__$1){
var self__ = this;
var _221759__$1 = this;
return (new cljs.core.async.t_cljs$core$async221757(self__.f,self__.blockable,meta221758__$1));
});


cljs.core.async.t_cljs$core$async221757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_221759){
var self__ = this;
var _221759__$1 = this;
return self__.meta221758;
});


cljs.core.async.t_cljs$core$async221757.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async221757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async221757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async221757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async221757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta221758","meta221758",-1741734527,null)], null);
});

cljs.core.async.t_cljs$core$async221757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async221757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async221757";

cljs.core.async.t_cljs$core$async221757.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async221757");
});

cljs.core.async.__GT_t_cljs$core$async221757 = (function cljs$core$async$__GT_t_cljs$core$async221757(f__$1,blockable__$1,meta221758){
return (new cljs.core.async.t_cljs$core$async221757(f__$1,blockable__$1,meta221758));
});

}

return (new cljs.core.async.t_cljs$core$async221757(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args221766 = [];
var len__40427__auto___221769 = arguments.length;
var i__40428__auto___221770 = (0);
while(true){
if((i__40428__auto___221770 < len__40427__auto___221769)){
args221766.push((arguments[i__40428__auto___221770]));

var G__221771 = (i__40428__auto___221770 + (1));
i__40428__auto___221770 = G__221771;
continue;
} else {
}
break;
}

var G__221768 = args221766.length;
switch (G__221768) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args221766.length)].join('')));

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
var args221773 = [];
var len__40427__auto___221776 = arguments.length;
var i__40428__auto___221777 = (0);
while(true){
if((i__40428__auto___221777 < len__40427__auto___221776)){
args221773.push((arguments[i__40428__auto___221777]));

var G__221778 = (i__40428__auto___221777 + (1));
i__40428__auto___221777 = G__221778;
continue;
} else {
}
break;
}

var G__221775 = args221773.length;
switch (G__221775) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args221773.length)].join('')));

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
var args221780 = [];
var len__40427__auto___221783 = arguments.length;
var i__40428__auto___221784 = (0);
while(true){
if((i__40428__auto___221784 < len__40427__auto___221783)){
args221780.push((arguments[i__40428__auto___221784]));

var G__221785 = (i__40428__auto___221784 + (1));
i__40428__auto___221784 = G__221785;
continue;
} else {
}
break;
}

var G__221782 = args221780.length;
switch (G__221782) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args221780.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_221787 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_221787);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_221787,ret){
return (function (){
return fn1.call(null,val_221787);
});})(val_221787,ret))
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
var args221788 = [];
var len__40427__auto___221791 = arguments.length;
var i__40428__auto___221792 = (0);
while(true){
if((i__40428__auto___221792 < len__40427__auto___221791)){
args221788.push((arguments[i__40428__auto___221792]));

var G__221793 = (i__40428__auto___221792 + (1));
i__40428__auto___221792 = G__221793;
continue;
} else {
}
break;
}

var G__221790 = args221788.length;
switch (G__221790) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args221788.length)].join('')));

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
var n__40227__auto___221795 = n;
var x_221796 = (0);
while(true){
if((x_221796 < n__40227__auto___221795)){
(a[x_221796] = (0));

var G__221797 = (x_221796 + (1));
x_221796 = G__221797;
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

var G__221798 = (i + (1));
i = G__221798;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async221802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async221802 = (function (flag,meta221803){
this.flag = flag;
this.meta221803 = meta221803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async221802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_221804,meta221803__$1){
var self__ = this;
var _221804__$1 = this;
return (new cljs.core.async.t_cljs$core$async221802(self__.flag,meta221803__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async221802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_221804){
var self__ = this;
var _221804__$1 = this;
return self__.meta221803;
});})(flag))
;


cljs.core.async.t_cljs$core$async221802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async221802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async221802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async221802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async221802.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta221803","meta221803",-731545081,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async221802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async221802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async221802";

cljs.core.async.t_cljs$core$async221802.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async221802");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async221802 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async221802(flag__$1,meta221803){
return (new cljs.core.async.t_cljs$core$async221802(flag__$1,meta221803));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async221802(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async221808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async221808 = (function (flag,cb,meta221809){
this.flag = flag;
this.cb = cb;
this.meta221809 = meta221809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async221808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_221810,meta221809__$1){
var self__ = this;
var _221810__$1 = this;
return (new cljs.core.async.t_cljs$core$async221808(self__.flag,self__.cb,meta221809__$1));
});


cljs.core.async.t_cljs$core$async221808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_221810){
var self__ = this;
var _221810__$1 = this;
return self__.meta221809;
});


cljs.core.async.t_cljs$core$async221808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async221808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async221808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async221808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async221808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta221809","meta221809",1097115006,null)], null);
});

cljs.core.async.t_cljs$core$async221808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async221808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async221808";

cljs.core.async.t_cljs$core$async221808.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async221808");
});

cljs.core.async.__GT_t_cljs$core$async221808 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async221808(flag__$1,cb__$1,meta221809){
return (new cljs.core.async.t_cljs$core$async221808(flag__$1,cb__$1,meta221809));
});

}

return (new cljs.core.async.t_cljs$core$async221808(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__221811_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__221811_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__221812_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__221812_SHARP_,port], null));
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
var G__221813 = (i + (1));
i = G__221813;
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
var len__40427__auto___221819 = arguments.length;
var i__40428__auto___221820 = (0);
while(true){
if((i__40428__auto___221820 < len__40427__auto___221819)){
args__40434__auto__.push((arguments[i__40428__auto___221820]));

var G__221821 = (i__40428__auto___221820 + (1));
i__40428__auto___221820 = G__221821;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__221816){
var map__221817 = p__221816;
var map__221817__$1 = ((((!((map__221817 == null)))?((((map__221817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__221817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__221817):map__221817);
var opts = map__221817__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq221814){
var G__221815 = cljs.core.first.call(null,seq221814);
var seq221814__$1 = cljs.core.next.call(null,seq221814);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__221815,seq221814__$1);
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
var args221822 = [];
var len__40427__auto___221872 = arguments.length;
var i__40428__auto___221873 = (0);
while(true){
if((i__40428__auto___221873 < len__40427__auto___221872)){
args221822.push((arguments[i__40428__auto___221873]));

var G__221874 = (i__40428__auto___221873 + (1));
i__40428__auto___221873 = G__221874;
continue;
} else {
}
break;
}

var G__221824 = args221822.length;
switch (G__221824) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args221822.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44084__auto___221876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___221876){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___221876){
return (function (state_221848){
var state_val_221849 = (state_221848[(1)]);
if((state_val_221849 === (7))){
var inst_221844 = (state_221848[(2)]);
var state_221848__$1 = state_221848;
var statearr_221850_221877 = state_221848__$1;
(statearr_221850_221877[(2)] = inst_221844);

(statearr_221850_221877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (1))){
var state_221848__$1 = state_221848;
var statearr_221851_221878 = state_221848__$1;
(statearr_221851_221878[(2)] = null);

(statearr_221851_221878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (4))){
var inst_221827 = (state_221848[(7)]);
var inst_221827__$1 = (state_221848[(2)]);
var inst_221828 = (inst_221827__$1 == null);
var state_221848__$1 = (function (){var statearr_221852 = state_221848;
(statearr_221852[(7)] = inst_221827__$1);

return statearr_221852;
})();
if(cljs.core.truth_(inst_221828)){
var statearr_221853_221879 = state_221848__$1;
(statearr_221853_221879[(1)] = (5));

} else {
var statearr_221854_221880 = state_221848__$1;
(statearr_221854_221880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (13))){
var state_221848__$1 = state_221848;
var statearr_221855_221881 = state_221848__$1;
(statearr_221855_221881[(2)] = null);

(statearr_221855_221881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (6))){
var inst_221827 = (state_221848[(7)]);
var state_221848__$1 = state_221848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_221848__$1,(11),to,inst_221827);
} else {
if((state_val_221849 === (3))){
var inst_221846 = (state_221848[(2)]);
var state_221848__$1 = state_221848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_221848__$1,inst_221846);
} else {
if((state_val_221849 === (12))){
var state_221848__$1 = state_221848;
var statearr_221856_221882 = state_221848__$1;
(statearr_221856_221882[(2)] = null);

(statearr_221856_221882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (2))){
var state_221848__$1 = state_221848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_221848__$1,(4),from);
} else {
if((state_val_221849 === (11))){
var inst_221837 = (state_221848[(2)]);
var state_221848__$1 = state_221848;
if(cljs.core.truth_(inst_221837)){
var statearr_221857_221883 = state_221848__$1;
(statearr_221857_221883[(1)] = (12));

} else {
var statearr_221858_221884 = state_221848__$1;
(statearr_221858_221884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (9))){
var state_221848__$1 = state_221848;
var statearr_221859_221885 = state_221848__$1;
(statearr_221859_221885[(2)] = null);

(statearr_221859_221885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (5))){
var state_221848__$1 = state_221848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_221860_221886 = state_221848__$1;
(statearr_221860_221886[(1)] = (8));

} else {
var statearr_221861_221887 = state_221848__$1;
(statearr_221861_221887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (14))){
var inst_221842 = (state_221848[(2)]);
var state_221848__$1 = state_221848;
var statearr_221862_221888 = state_221848__$1;
(statearr_221862_221888[(2)] = inst_221842);

(statearr_221862_221888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (10))){
var inst_221834 = (state_221848[(2)]);
var state_221848__$1 = state_221848;
var statearr_221863_221889 = state_221848__$1;
(statearr_221863_221889[(2)] = inst_221834);

(statearr_221863_221889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_221849 === (8))){
var inst_221831 = cljs.core.async.close_BANG_.call(null,to);
var state_221848__$1 = state_221848;
var statearr_221864_221890 = state_221848__$1;
(statearr_221864_221890[(2)] = inst_221831);

(statearr_221864_221890[(1)] = (10));


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
});})(c__44084__auto___221876))
;
return ((function (switch__44061__auto__,c__44084__auto___221876){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_221868 = [null,null,null,null,null,null,null,null];
(statearr_221868[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_221868[(1)] = (1));

return statearr_221868;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_221848){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_221848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e221869){if((e221869 instanceof Object)){
var ex__44065__auto__ = e221869;
var statearr_221870_221891 = state_221848;
(statearr_221870_221891[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_221848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e221869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__221892 = state_221848;
state_221848 = G__221892;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_221848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_221848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___221876))
})();
var state__44086__auto__ = (function (){var statearr_221871 = f__44085__auto__.call(null);
(statearr_221871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___221876);

return statearr_221871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___221876))
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
return (function (p__222080){
var vec__222081 = p__222080;
var v = cljs.core.nth.call(null,vec__222081,(0),null);
var p = cljs.core.nth.call(null,vec__222081,(1),null);
var job = vec__222081;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44084__auto___222267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___222267,res,vec__222081,v,p,job,jobs,results){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___222267,res,vec__222081,v,p,job,jobs,results){
return (function (state_222088){
var state_val_222089 = (state_222088[(1)]);
if((state_val_222089 === (1))){
var state_222088__$1 = state_222088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_222088__$1,(2),res,v);
} else {
if((state_val_222089 === (2))){
var inst_222085 = (state_222088[(2)]);
var inst_222086 = cljs.core.async.close_BANG_.call(null,res);
var state_222088__$1 = (function (){var statearr_222090 = state_222088;
(statearr_222090[(7)] = inst_222085);

return statearr_222090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222088__$1,inst_222086);
} else {
return null;
}
}
});})(c__44084__auto___222267,res,vec__222081,v,p,job,jobs,results))
;
return ((function (switch__44061__auto__,c__44084__auto___222267,res,vec__222081,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_222094 = [null,null,null,null,null,null,null,null];
(statearr_222094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_222094[(1)] = (1));

return statearr_222094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_222088){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222095){if((e222095 instanceof Object)){
var ex__44065__auto__ = e222095;
var statearr_222096_222268 = state_222088;
(statearr_222096_222268[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222269 = state_222088;
state_222088 = G__222269;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_222088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_222088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___222267,res,vec__222081,v,p,job,jobs,results))
})();
var state__44086__auto__ = (function (){var statearr_222097 = f__44085__auto__.call(null);
(statearr_222097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___222267);

return statearr_222097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___222267,res,vec__222081,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__222098){
var vec__222099 = p__222098;
var v = cljs.core.nth.call(null,vec__222099,(0),null);
var p = cljs.core.nth.call(null,vec__222099,(1),null);
var job = vec__222099;
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
var n__40227__auto___222270 = n;
var __222271 = (0);
while(true){
if((__222271 < n__40227__auto___222270)){
var G__222102_222272 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__222102_222272) {
case "compute":
var c__44084__auto___222274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__222271,c__44084__auto___222274,G__222102_222272,n__40227__auto___222270,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (__222271,c__44084__auto___222274,G__222102_222272,n__40227__auto___222270,jobs,results,process,async){
return (function (state_222115){
var state_val_222116 = (state_222115[(1)]);
if((state_val_222116 === (1))){
var state_222115__$1 = state_222115;
var statearr_222117_222275 = state_222115__$1;
(statearr_222117_222275[(2)] = null);

(statearr_222117_222275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222116 === (2))){
var state_222115__$1 = state_222115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222115__$1,(4),jobs);
} else {
if((state_val_222116 === (3))){
var inst_222113 = (state_222115[(2)]);
var state_222115__$1 = state_222115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222115__$1,inst_222113);
} else {
if((state_val_222116 === (4))){
var inst_222105 = (state_222115[(2)]);
var inst_222106 = process.call(null,inst_222105);
var state_222115__$1 = state_222115;
if(cljs.core.truth_(inst_222106)){
var statearr_222118_222276 = state_222115__$1;
(statearr_222118_222276[(1)] = (5));

} else {
var statearr_222119_222277 = state_222115__$1;
(statearr_222119_222277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222116 === (5))){
var state_222115__$1 = state_222115;
var statearr_222120_222278 = state_222115__$1;
(statearr_222120_222278[(2)] = null);

(statearr_222120_222278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222116 === (6))){
var state_222115__$1 = state_222115;
var statearr_222121_222279 = state_222115__$1;
(statearr_222121_222279[(2)] = null);

(statearr_222121_222279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222116 === (7))){
var inst_222111 = (state_222115[(2)]);
var state_222115__$1 = state_222115;
var statearr_222122_222280 = state_222115__$1;
(statearr_222122_222280[(2)] = inst_222111);

(statearr_222122_222280[(1)] = (3));


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
});})(__222271,c__44084__auto___222274,G__222102_222272,n__40227__auto___222270,jobs,results,process,async))
;
return ((function (__222271,switch__44061__auto__,c__44084__auto___222274,G__222102_222272,n__40227__auto___222270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_222126 = [null,null,null,null,null,null,null];
(statearr_222126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_222126[(1)] = (1));

return statearr_222126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_222115){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222127){if((e222127 instanceof Object)){
var ex__44065__auto__ = e222127;
var statearr_222128_222281 = state_222115;
(statearr_222128_222281[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222282 = state_222115;
state_222115 = G__222282;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_222115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_222115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(__222271,switch__44061__auto__,c__44084__auto___222274,G__222102_222272,n__40227__auto___222270,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_222129 = f__44085__auto__.call(null);
(statearr_222129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___222274);

return statearr_222129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(__222271,c__44084__auto___222274,G__222102_222272,n__40227__auto___222270,jobs,results,process,async))
);


break;
case "async":
var c__44084__auto___222283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__222271,c__44084__auto___222283,G__222102_222272,n__40227__auto___222270,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (__222271,c__44084__auto___222283,G__222102_222272,n__40227__auto___222270,jobs,results,process,async){
return (function (state_222142){
var state_val_222143 = (state_222142[(1)]);
if((state_val_222143 === (1))){
var state_222142__$1 = state_222142;
var statearr_222144_222284 = state_222142__$1;
(statearr_222144_222284[(2)] = null);

(statearr_222144_222284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222143 === (2))){
var state_222142__$1 = state_222142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222142__$1,(4),jobs);
} else {
if((state_val_222143 === (3))){
var inst_222140 = (state_222142[(2)]);
var state_222142__$1 = state_222142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222142__$1,inst_222140);
} else {
if((state_val_222143 === (4))){
var inst_222132 = (state_222142[(2)]);
var inst_222133 = async.call(null,inst_222132);
var state_222142__$1 = state_222142;
if(cljs.core.truth_(inst_222133)){
var statearr_222145_222285 = state_222142__$1;
(statearr_222145_222285[(1)] = (5));

} else {
var statearr_222146_222286 = state_222142__$1;
(statearr_222146_222286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222143 === (5))){
var state_222142__$1 = state_222142;
var statearr_222147_222287 = state_222142__$1;
(statearr_222147_222287[(2)] = null);

(statearr_222147_222287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222143 === (6))){
var state_222142__$1 = state_222142;
var statearr_222148_222288 = state_222142__$1;
(statearr_222148_222288[(2)] = null);

(statearr_222148_222288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222143 === (7))){
var inst_222138 = (state_222142[(2)]);
var state_222142__$1 = state_222142;
var statearr_222149_222289 = state_222142__$1;
(statearr_222149_222289[(2)] = inst_222138);

(statearr_222149_222289[(1)] = (3));


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
});})(__222271,c__44084__auto___222283,G__222102_222272,n__40227__auto___222270,jobs,results,process,async))
;
return ((function (__222271,switch__44061__auto__,c__44084__auto___222283,G__222102_222272,n__40227__auto___222270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_222153 = [null,null,null,null,null,null,null];
(statearr_222153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_222153[(1)] = (1));

return statearr_222153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_222142){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222154){if((e222154 instanceof Object)){
var ex__44065__auto__ = e222154;
var statearr_222155_222290 = state_222142;
(statearr_222155_222290[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222291 = state_222142;
state_222142 = G__222291;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_222142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_222142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(__222271,switch__44061__auto__,c__44084__auto___222283,G__222102_222272,n__40227__auto___222270,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_222156 = f__44085__auto__.call(null);
(statearr_222156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___222283);

return statearr_222156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(__222271,c__44084__auto___222283,G__222102_222272,n__40227__auto___222270,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__222292 = (__222271 + (1));
__222271 = G__222292;
continue;
} else {
}
break;
}

var c__44084__auto___222293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___222293,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___222293,jobs,results,process,async){
return (function (state_222178){
var state_val_222179 = (state_222178[(1)]);
if((state_val_222179 === (1))){
var state_222178__$1 = state_222178;
var statearr_222180_222294 = state_222178__$1;
(statearr_222180_222294[(2)] = null);

(statearr_222180_222294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222179 === (2))){
var state_222178__$1 = state_222178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222178__$1,(4),from);
} else {
if((state_val_222179 === (3))){
var inst_222176 = (state_222178[(2)]);
var state_222178__$1 = state_222178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222178__$1,inst_222176);
} else {
if((state_val_222179 === (4))){
var inst_222159 = (state_222178[(7)]);
var inst_222159__$1 = (state_222178[(2)]);
var inst_222160 = (inst_222159__$1 == null);
var state_222178__$1 = (function (){var statearr_222181 = state_222178;
(statearr_222181[(7)] = inst_222159__$1);

return statearr_222181;
})();
if(cljs.core.truth_(inst_222160)){
var statearr_222182_222295 = state_222178__$1;
(statearr_222182_222295[(1)] = (5));

} else {
var statearr_222183_222296 = state_222178__$1;
(statearr_222183_222296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222179 === (5))){
var inst_222162 = cljs.core.async.close_BANG_.call(null,jobs);
var state_222178__$1 = state_222178;
var statearr_222184_222297 = state_222178__$1;
(statearr_222184_222297[(2)] = inst_222162);

(statearr_222184_222297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222179 === (6))){
var inst_222164 = (state_222178[(8)]);
var inst_222159 = (state_222178[(7)]);
var inst_222164__$1 = cljs.core.async.chan.call(null,(1));
var inst_222165 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_222166 = [inst_222159,inst_222164__$1];
var inst_222167 = (new cljs.core.PersistentVector(null,2,(5),inst_222165,inst_222166,null));
var state_222178__$1 = (function (){var statearr_222185 = state_222178;
(statearr_222185[(8)] = inst_222164__$1);

return statearr_222185;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_222178__$1,(8),jobs,inst_222167);
} else {
if((state_val_222179 === (7))){
var inst_222174 = (state_222178[(2)]);
var state_222178__$1 = state_222178;
var statearr_222186_222298 = state_222178__$1;
(statearr_222186_222298[(2)] = inst_222174);

(statearr_222186_222298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222179 === (8))){
var inst_222164 = (state_222178[(8)]);
var inst_222169 = (state_222178[(2)]);
var state_222178__$1 = (function (){var statearr_222187 = state_222178;
(statearr_222187[(9)] = inst_222169);

return statearr_222187;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_222178__$1,(9),results,inst_222164);
} else {
if((state_val_222179 === (9))){
var inst_222171 = (state_222178[(2)]);
var state_222178__$1 = (function (){var statearr_222188 = state_222178;
(statearr_222188[(10)] = inst_222171);

return statearr_222188;
})();
var statearr_222189_222299 = state_222178__$1;
(statearr_222189_222299[(2)] = null);

(statearr_222189_222299[(1)] = (2));


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
});})(c__44084__auto___222293,jobs,results,process,async))
;
return ((function (switch__44061__auto__,c__44084__auto___222293,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0 = (function (){
var statearr_222193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_222193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_222193[(1)] = (1));

return statearr_222193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_222178){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222194){if((e222194 instanceof Object)){
var ex__44065__auto__ = e222194;
var statearr_222195_222300 = state_222178;
(statearr_222195_222300[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222301 = state_222178;
state_222178 = G__222301;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_222178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_222178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___222293,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_222196 = f__44085__auto__.call(null);
(statearr_222196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___222293);

return statearr_222196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___222293,jobs,results,process,async))
);


var c__44084__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto__,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto__,jobs,results,process,async){
return (function (state_222234){
var state_val_222235 = (state_222234[(1)]);
if((state_val_222235 === (7))){
var inst_222230 = (state_222234[(2)]);
var state_222234__$1 = state_222234;
var statearr_222236_222302 = state_222234__$1;
(statearr_222236_222302[(2)] = inst_222230);

(statearr_222236_222302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (20))){
var state_222234__$1 = state_222234;
var statearr_222237_222303 = state_222234__$1;
(statearr_222237_222303[(2)] = null);

(statearr_222237_222303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (1))){
var state_222234__$1 = state_222234;
var statearr_222238_222304 = state_222234__$1;
(statearr_222238_222304[(2)] = null);

(statearr_222238_222304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (4))){
var inst_222199 = (state_222234[(7)]);
var inst_222199__$1 = (state_222234[(2)]);
var inst_222200 = (inst_222199__$1 == null);
var state_222234__$1 = (function (){var statearr_222239 = state_222234;
(statearr_222239[(7)] = inst_222199__$1);

return statearr_222239;
})();
if(cljs.core.truth_(inst_222200)){
var statearr_222240_222305 = state_222234__$1;
(statearr_222240_222305[(1)] = (5));

} else {
var statearr_222241_222306 = state_222234__$1;
(statearr_222241_222306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (15))){
var inst_222212 = (state_222234[(8)]);
var state_222234__$1 = state_222234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_222234__$1,(18),to,inst_222212);
} else {
if((state_val_222235 === (21))){
var inst_222225 = (state_222234[(2)]);
var state_222234__$1 = state_222234;
var statearr_222242_222307 = state_222234__$1;
(statearr_222242_222307[(2)] = inst_222225);

(statearr_222242_222307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (13))){
var inst_222227 = (state_222234[(2)]);
var state_222234__$1 = (function (){var statearr_222243 = state_222234;
(statearr_222243[(9)] = inst_222227);

return statearr_222243;
})();
var statearr_222244_222308 = state_222234__$1;
(statearr_222244_222308[(2)] = null);

(statearr_222244_222308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (6))){
var inst_222199 = (state_222234[(7)]);
var state_222234__$1 = state_222234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222234__$1,(11),inst_222199);
} else {
if((state_val_222235 === (17))){
var inst_222220 = (state_222234[(2)]);
var state_222234__$1 = state_222234;
if(cljs.core.truth_(inst_222220)){
var statearr_222245_222309 = state_222234__$1;
(statearr_222245_222309[(1)] = (19));

} else {
var statearr_222246_222310 = state_222234__$1;
(statearr_222246_222310[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (3))){
var inst_222232 = (state_222234[(2)]);
var state_222234__$1 = state_222234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222234__$1,inst_222232);
} else {
if((state_val_222235 === (12))){
var inst_222209 = (state_222234[(10)]);
var state_222234__$1 = state_222234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222234__$1,(14),inst_222209);
} else {
if((state_val_222235 === (2))){
var state_222234__$1 = state_222234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222234__$1,(4),results);
} else {
if((state_val_222235 === (19))){
var state_222234__$1 = state_222234;
var statearr_222247_222311 = state_222234__$1;
(statearr_222247_222311[(2)] = null);

(statearr_222247_222311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (11))){
var inst_222209 = (state_222234[(2)]);
var state_222234__$1 = (function (){var statearr_222248 = state_222234;
(statearr_222248[(10)] = inst_222209);

return statearr_222248;
})();
var statearr_222249_222312 = state_222234__$1;
(statearr_222249_222312[(2)] = null);

(statearr_222249_222312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (9))){
var state_222234__$1 = state_222234;
var statearr_222250_222313 = state_222234__$1;
(statearr_222250_222313[(2)] = null);

(statearr_222250_222313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (5))){
var state_222234__$1 = state_222234;
if(cljs.core.truth_(close_QMARK_)){
var statearr_222251_222314 = state_222234__$1;
(statearr_222251_222314[(1)] = (8));

} else {
var statearr_222252_222315 = state_222234__$1;
(statearr_222252_222315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (14))){
var inst_222214 = (state_222234[(11)]);
var inst_222212 = (state_222234[(8)]);
var inst_222212__$1 = (state_222234[(2)]);
var inst_222213 = (inst_222212__$1 == null);
var inst_222214__$1 = cljs.core.not.call(null,inst_222213);
var state_222234__$1 = (function (){var statearr_222253 = state_222234;
(statearr_222253[(11)] = inst_222214__$1);

(statearr_222253[(8)] = inst_222212__$1);

return statearr_222253;
})();
if(inst_222214__$1){
var statearr_222254_222316 = state_222234__$1;
(statearr_222254_222316[(1)] = (15));

} else {
var statearr_222255_222317 = state_222234__$1;
(statearr_222255_222317[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (16))){
var inst_222214 = (state_222234[(11)]);
var state_222234__$1 = state_222234;
var statearr_222256_222318 = state_222234__$1;
(statearr_222256_222318[(2)] = inst_222214);

(statearr_222256_222318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (10))){
var inst_222206 = (state_222234[(2)]);
var state_222234__$1 = state_222234;
var statearr_222257_222319 = state_222234__$1;
(statearr_222257_222319[(2)] = inst_222206);

(statearr_222257_222319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (18))){
var inst_222217 = (state_222234[(2)]);
var state_222234__$1 = state_222234;
var statearr_222258_222320 = state_222234__$1;
(statearr_222258_222320[(2)] = inst_222217);

(statearr_222258_222320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222235 === (8))){
var inst_222203 = cljs.core.async.close_BANG_.call(null,to);
var state_222234__$1 = state_222234;
var statearr_222259_222321 = state_222234__$1;
(statearr_222259_222321[(2)] = inst_222203);

(statearr_222259_222321[(1)] = (10));


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
var statearr_222263 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_222263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__);

(statearr_222263[(1)] = (1));

return statearr_222263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1 = (function (state_222234){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222264){if((e222264 instanceof Object)){
var ex__44065__auto__ = e222264;
var statearr_222265_222322 = state_222234;
(statearr_222265_222322[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222323 = state_222234;
state_222234 = G__222323;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__ = function(state_222234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1.call(this,state_222234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_222266 = f__44085__auto__.call(null);
(statearr_222266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_222266;
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
var args222324 = [];
var len__40427__auto___222327 = arguments.length;
var i__40428__auto___222328 = (0);
while(true){
if((i__40428__auto___222328 < len__40427__auto___222327)){
args222324.push((arguments[i__40428__auto___222328]));

var G__222329 = (i__40428__auto___222328 + (1));
i__40428__auto___222328 = G__222329;
continue;
} else {
}
break;
}

var G__222326 = args222324.length;
switch (G__222326) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args222324.length)].join('')));

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
var args222331 = [];
var len__40427__auto___222334 = arguments.length;
var i__40428__auto___222335 = (0);
while(true){
if((i__40428__auto___222335 < len__40427__auto___222334)){
args222331.push((arguments[i__40428__auto___222335]));

var G__222336 = (i__40428__auto___222335 + (1));
i__40428__auto___222335 = G__222336;
continue;
} else {
}
break;
}

var G__222333 = args222331.length;
switch (G__222333) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args222331.length)].join('')));

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
var args222338 = [];
var len__40427__auto___222391 = arguments.length;
var i__40428__auto___222392 = (0);
while(true){
if((i__40428__auto___222392 < len__40427__auto___222391)){
args222338.push((arguments[i__40428__auto___222392]));

var G__222393 = (i__40428__auto___222392 + (1));
i__40428__auto___222392 = G__222393;
continue;
} else {
}
break;
}

var G__222340 = args222338.length;
switch (G__222340) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args222338.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44084__auto___222395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___222395,tc,fc){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___222395,tc,fc){
return (function (state_222366){
var state_val_222367 = (state_222366[(1)]);
if((state_val_222367 === (7))){
var inst_222362 = (state_222366[(2)]);
var state_222366__$1 = state_222366;
var statearr_222368_222396 = state_222366__$1;
(statearr_222368_222396[(2)] = inst_222362);

(statearr_222368_222396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (1))){
var state_222366__$1 = state_222366;
var statearr_222369_222397 = state_222366__$1;
(statearr_222369_222397[(2)] = null);

(statearr_222369_222397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (4))){
var inst_222343 = (state_222366[(7)]);
var inst_222343__$1 = (state_222366[(2)]);
var inst_222344 = (inst_222343__$1 == null);
var state_222366__$1 = (function (){var statearr_222370 = state_222366;
(statearr_222370[(7)] = inst_222343__$1);

return statearr_222370;
})();
if(cljs.core.truth_(inst_222344)){
var statearr_222371_222398 = state_222366__$1;
(statearr_222371_222398[(1)] = (5));

} else {
var statearr_222372_222399 = state_222366__$1;
(statearr_222372_222399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (13))){
var state_222366__$1 = state_222366;
var statearr_222373_222400 = state_222366__$1;
(statearr_222373_222400[(2)] = null);

(statearr_222373_222400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (6))){
var inst_222343 = (state_222366[(7)]);
var inst_222349 = p.call(null,inst_222343);
var state_222366__$1 = state_222366;
if(cljs.core.truth_(inst_222349)){
var statearr_222374_222401 = state_222366__$1;
(statearr_222374_222401[(1)] = (9));

} else {
var statearr_222375_222402 = state_222366__$1;
(statearr_222375_222402[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (3))){
var inst_222364 = (state_222366[(2)]);
var state_222366__$1 = state_222366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222366__$1,inst_222364);
} else {
if((state_val_222367 === (12))){
var state_222366__$1 = state_222366;
var statearr_222376_222403 = state_222366__$1;
(statearr_222376_222403[(2)] = null);

(statearr_222376_222403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (2))){
var state_222366__$1 = state_222366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222366__$1,(4),ch);
} else {
if((state_val_222367 === (11))){
var inst_222343 = (state_222366[(7)]);
var inst_222353 = (state_222366[(2)]);
var state_222366__$1 = state_222366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_222366__$1,(8),inst_222353,inst_222343);
} else {
if((state_val_222367 === (9))){
var state_222366__$1 = state_222366;
var statearr_222377_222404 = state_222366__$1;
(statearr_222377_222404[(2)] = tc);

(statearr_222377_222404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (5))){
var inst_222346 = cljs.core.async.close_BANG_.call(null,tc);
var inst_222347 = cljs.core.async.close_BANG_.call(null,fc);
var state_222366__$1 = (function (){var statearr_222378 = state_222366;
(statearr_222378[(8)] = inst_222346);

return statearr_222378;
})();
var statearr_222379_222405 = state_222366__$1;
(statearr_222379_222405[(2)] = inst_222347);

(statearr_222379_222405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (14))){
var inst_222360 = (state_222366[(2)]);
var state_222366__$1 = state_222366;
var statearr_222380_222406 = state_222366__$1;
(statearr_222380_222406[(2)] = inst_222360);

(statearr_222380_222406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (10))){
var state_222366__$1 = state_222366;
var statearr_222381_222407 = state_222366__$1;
(statearr_222381_222407[(2)] = fc);

(statearr_222381_222407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222367 === (8))){
var inst_222355 = (state_222366[(2)]);
var state_222366__$1 = state_222366;
if(cljs.core.truth_(inst_222355)){
var statearr_222382_222408 = state_222366__$1;
(statearr_222382_222408[(1)] = (12));

} else {
var statearr_222383_222409 = state_222366__$1;
(statearr_222383_222409[(1)] = (13));

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
});})(c__44084__auto___222395,tc,fc))
;
return ((function (switch__44061__auto__,c__44084__auto___222395,tc,fc){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_222387 = [null,null,null,null,null,null,null,null,null];
(statearr_222387[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_222387[(1)] = (1));

return statearr_222387;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_222366){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222388){if((e222388 instanceof Object)){
var ex__44065__auto__ = e222388;
var statearr_222389_222410 = state_222366;
(statearr_222389_222410[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222411 = state_222366;
state_222366 = G__222411;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_222366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_222366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___222395,tc,fc))
})();
var state__44086__auto__ = (function (){var statearr_222390 = f__44085__auto__.call(null);
(statearr_222390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___222395);

return statearr_222390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___222395,tc,fc))
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
return (function (state_222475){
var state_val_222476 = (state_222475[(1)]);
if((state_val_222476 === (7))){
var inst_222471 = (state_222475[(2)]);
var state_222475__$1 = state_222475;
var statearr_222477_222498 = state_222475__$1;
(statearr_222477_222498[(2)] = inst_222471);

(statearr_222477_222498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222476 === (1))){
var inst_222455 = init;
var state_222475__$1 = (function (){var statearr_222478 = state_222475;
(statearr_222478[(7)] = inst_222455);

return statearr_222478;
})();
var statearr_222479_222499 = state_222475__$1;
(statearr_222479_222499[(2)] = null);

(statearr_222479_222499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222476 === (4))){
var inst_222458 = (state_222475[(8)]);
var inst_222458__$1 = (state_222475[(2)]);
var inst_222459 = (inst_222458__$1 == null);
var state_222475__$1 = (function (){var statearr_222480 = state_222475;
(statearr_222480[(8)] = inst_222458__$1);

return statearr_222480;
})();
if(cljs.core.truth_(inst_222459)){
var statearr_222481_222500 = state_222475__$1;
(statearr_222481_222500[(1)] = (5));

} else {
var statearr_222482_222501 = state_222475__$1;
(statearr_222482_222501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222476 === (6))){
var inst_222455 = (state_222475[(7)]);
var inst_222458 = (state_222475[(8)]);
var inst_222462 = (state_222475[(9)]);
var inst_222462__$1 = f.call(null,inst_222455,inst_222458);
var inst_222463 = cljs.core.reduced_QMARK_.call(null,inst_222462__$1);
var state_222475__$1 = (function (){var statearr_222483 = state_222475;
(statearr_222483[(9)] = inst_222462__$1);

return statearr_222483;
})();
if(inst_222463){
var statearr_222484_222502 = state_222475__$1;
(statearr_222484_222502[(1)] = (8));

} else {
var statearr_222485_222503 = state_222475__$1;
(statearr_222485_222503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222476 === (3))){
var inst_222473 = (state_222475[(2)]);
var state_222475__$1 = state_222475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222475__$1,inst_222473);
} else {
if((state_val_222476 === (2))){
var state_222475__$1 = state_222475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222475__$1,(4),ch);
} else {
if((state_val_222476 === (9))){
var inst_222462 = (state_222475[(9)]);
var inst_222455 = inst_222462;
var state_222475__$1 = (function (){var statearr_222486 = state_222475;
(statearr_222486[(7)] = inst_222455);

return statearr_222486;
})();
var statearr_222487_222504 = state_222475__$1;
(statearr_222487_222504[(2)] = null);

(statearr_222487_222504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222476 === (5))){
var inst_222455 = (state_222475[(7)]);
var state_222475__$1 = state_222475;
var statearr_222488_222505 = state_222475__$1;
(statearr_222488_222505[(2)] = inst_222455);

(statearr_222488_222505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222476 === (10))){
var inst_222469 = (state_222475[(2)]);
var state_222475__$1 = state_222475;
var statearr_222489_222506 = state_222475__$1;
(statearr_222489_222506[(2)] = inst_222469);

(statearr_222489_222506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222476 === (8))){
var inst_222462 = (state_222475[(9)]);
var inst_222465 = cljs.core.deref.call(null,inst_222462);
var state_222475__$1 = state_222475;
var statearr_222490_222507 = state_222475__$1;
(statearr_222490_222507[(2)] = inst_222465);

(statearr_222490_222507[(1)] = (10));


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
var statearr_222494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_222494[(0)] = cljs$core$async$reduce_$_state_machine__44062__auto__);

(statearr_222494[(1)] = (1));

return statearr_222494;
});
var cljs$core$async$reduce_$_state_machine__44062__auto____1 = (function (state_222475){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222495){if((e222495 instanceof Object)){
var ex__44065__auto__ = e222495;
var statearr_222496_222508 = state_222475;
(statearr_222496_222508[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222509 = state_222475;
state_222475 = G__222509;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44062__auto__ = function(state_222475){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44062__auto____1.call(this,state_222475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44062__auto____0;
cljs$core$async$reduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44062__auto____1;
return cljs$core$async$reduce_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_222497 = f__44085__auto__.call(null);
(statearr_222497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_222497;
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
return (function (state_222529){
var state_val_222530 = (state_222529[(1)]);
if((state_val_222530 === (1))){
var inst_222524 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_222529__$1 = state_222529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222529__$1,(2),inst_222524);
} else {
if((state_val_222530 === (2))){
var inst_222526 = (state_222529[(2)]);
var inst_222527 = f__$1.call(null,inst_222526);
var state_222529__$1 = state_222529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222529__$1,inst_222527);
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
var statearr_222534 = [null,null,null,null,null,null,null];
(statearr_222534[(0)] = cljs$core$async$transduce_$_state_machine__44062__auto__);

(statearr_222534[(1)] = (1));

return statearr_222534;
});
var cljs$core$async$transduce_$_state_machine__44062__auto____1 = (function (state_222529){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222535){if((e222535 instanceof Object)){
var ex__44065__auto__ = e222535;
var statearr_222536_222538 = state_222529;
(statearr_222536_222538[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222539 = state_222529;
state_222529 = G__222539;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44062__auto__ = function(state_222529){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44062__auto____1.call(this,state_222529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44062__auto____0;
cljs$core$async$transduce_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44062__auto____1;
return cljs$core$async$transduce_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__,f__$1))
})();
var state__44086__auto__ = (function (){var statearr_222537 = f__44085__auto__.call(null);
(statearr_222537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_222537;
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
var args222540 = [];
var len__40427__auto___222592 = arguments.length;
var i__40428__auto___222593 = (0);
while(true){
if((i__40428__auto___222593 < len__40427__auto___222592)){
args222540.push((arguments[i__40428__auto___222593]));

var G__222594 = (i__40428__auto___222593 + (1));
i__40428__auto___222593 = G__222594;
continue;
} else {
}
break;
}

var G__222542 = args222540.length;
switch (G__222542) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args222540.length)].join('')));

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
return (function (state_222567){
var state_val_222568 = (state_222567[(1)]);
if((state_val_222568 === (7))){
var inst_222549 = (state_222567[(2)]);
var state_222567__$1 = state_222567;
var statearr_222569_222596 = state_222567__$1;
(statearr_222569_222596[(2)] = inst_222549);

(statearr_222569_222596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (1))){
var inst_222543 = cljs.core.seq.call(null,coll);
var inst_222544 = inst_222543;
var state_222567__$1 = (function (){var statearr_222570 = state_222567;
(statearr_222570[(7)] = inst_222544);

return statearr_222570;
})();
var statearr_222571_222597 = state_222567__$1;
(statearr_222571_222597[(2)] = null);

(statearr_222571_222597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (4))){
var inst_222544 = (state_222567[(7)]);
var inst_222547 = cljs.core.first.call(null,inst_222544);
var state_222567__$1 = state_222567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_222567__$1,(7),ch,inst_222547);
} else {
if((state_val_222568 === (13))){
var inst_222561 = (state_222567[(2)]);
var state_222567__$1 = state_222567;
var statearr_222572_222598 = state_222567__$1;
(statearr_222572_222598[(2)] = inst_222561);

(statearr_222572_222598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (6))){
var inst_222552 = (state_222567[(2)]);
var state_222567__$1 = state_222567;
if(cljs.core.truth_(inst_222552)){
var statearr_222573_222599 = state_222567__$1;
(statearr_222573_222599[(1)] = (8));

} else {
var statearr_222574_222600 = state_222567__$1;
(statearr_222574_222600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (3))){
var inst_222565 = (state_222567[(2)]);
var state_222567__$1 = state_222567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222567__$1,inst_222565);
} else {
if((state_val_222568 === (12))){
var state_222567__$1 = state_222567;
var statearr_222575_222601 = state_222567__$1;
(statearr_222575_222601[(2)] = null);

(statearr_222575_222601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (2))){
var inst_222544 = (state_222567[(7)]);
var state_222567__$1 = state_222567;
if(cljs.core.truth_(inst_222544)){
var statearr_222576_222602 = state_222567__$1;
(statearr_222576_222602[(1)] = (4));

} else {
var statearr_222577_222603 = state_222567__$1;
(statearr_222577_222603[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (11))){
var inst_222558 = cljs.core.async.close_BANG_.call(null,ch);
var state_222567__$1 = state_222567;
var statearr_222578_222604 = state_222567__$1;
(statearr_222578_222604[(2)] = inst_222558);

(statearr_222578_222604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (9))){
var state_222567__$1 = state_222567;
if(cljs.core.truth_(close_QMARK_)){
var statearr_222579_222605 = state_222567__$1;
(statearr_222579_222605[(1)] = (11));

} else {
var statearr_222580_222606 = state_222567__$1;
(statearr_222580_222606[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (5))){
var inst_222544 = (state_222567[(7)]);
var state_222567__$1 = state_222567;
var statearr_222581_222607 = state_222567__$1;
(statearr_222581_222607[(2)] = inst_222544);

(statearr_222581_222607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (10))){
var inst_222563 = (state_222567[(2)]);
var state_222567__$1 = state_222567;
var statearr_222582_222608 = state_222567__$1;
(statearr_222582_222608[(2)] = inst_222563);

(statearr_222582_222608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222568 === (8))){
var inst_222544 = (state_222567[(7)]);
var inst_222554 = cljs.core.next.call(null,inst_222544);
var inst_222544__$1 = inst_222554;
var state_222567__$1 = (function (){var statearr_222583 = state_222567;
(statearr_222583[(7)] = inst_222544__$1);

return statearr_222583;
})();
var statearr_222584_222609 = state_222567__$1;
(statearr_222584_222609[(2)] = null);

(statearr_222584_222609[(1)] = (2));


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
var statearr_222588 = [null,null,null,null,null,null,null,null];
(statearr_222588[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_222588[(1)] = (1));

return statearr_222588;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_222567){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e222589){if((e222589 instanceof Object)){
var ex__44065__auto__ = e222589;
var statearr_222590_222610 = state_222567;
(statearr_222590_222610[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e222589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__222611 = state_222567;
state_222567 = G__222611;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_222567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_222567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_222591 = f__44085__auto__.call(null);
(statearr_222591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_222591;
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
if(typeof cljs.core.async.t_cljs$core$async222837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async222837 = (function (ch,cs,meta222838){
this.ch = ch;
this.cs = cs;
this.meta222838 = meta222838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async222837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_222839,meta222838__$1){
var self__ = this;
var _222839__$1 = this;
return (new cljs.core.async.t_cljs$core$async222837(self__.ch,self__.cs,meta222838__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async222837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_222839){
var self__ = this;
var _222839__$1 = this;
return self__.meta222838;
});})(cs))
;


cljs.core.async.t_cljs$core$async222837.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async222837.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async222837.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async222837.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async222837.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async222837.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async222837.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta222838","meta222838",-517715596,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async222837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async222837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async222837";

cljs.core.async.t_cljs$core$async222837.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async222837");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async222837 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async222837(ch__$1,cs__$1,meta222838){
return (new cljs.core.async.t_cljs$core$async222837(ch__$1,cs__$1,meta222838));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async222837(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44084__auto___223062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___223062,cs,m,dchan,dctr,done){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___223062,cs,m,dchan,dctr,done){
return (function (state_222974){
var state_val_222975 = (state_222974[(1)]);
if((state_val_222975 === (7))){
var inst_222970 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_222976_223063 = state_222974__$1;
(statearr_222976_223063[(2)] = inst_222970);

(statearr_222976_223063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (20))){
var inst_222873 = (state_222974[(7)]);
var inst_222885 = cljs.core.first.call(null,inst_222873);
var inst_222886 = cljs.core.nth.call(null,inst_222885,(0),null);
var inst_222887 = cljs.core.nth.call(null,inst_222885,(1),null);
var state_222974__$1 = (function (){var statearr_222977 = state_222974;
(statearr_222977[(8)] = inst_222886);

return statearr_222977;
})();
if(cljs.core.truth_(inst_222887)){
var statearr_222978_223064 = state_222974__$1;
(statearr_222978_223064[(1)] = (22));

} else {
var statearr_222979_223065 = state_222974__$1;
(statearr_222979_223065[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (27))){
var inst_222922 = (state_222974[(9)]);
var inst_222917 = (state_222974[(10)]);
var inst_222842 = (state_222974[(11)]);
var inst_222915 = (state_222974[(12)]);
var inst_222922__$1 = cljs.core._nth.call(null,inst_222915,inst_222917);
var inst_222923 = cljs.core.async.put_BANG_.call(null,inst_222922__$1,inst_222842,done);
var state_222974__$1 = (function (){var statearr_222980 = state_222974;
(statearr_222980[(9)] = inst_222922__$1);

return statearr_222980;
})();
if(cljs.core.truth_(inst_222923)){
var statearr_222981_223066 = state_222974__$1;
(statearr_222981_223066[(1)] = (30));

} else {
var statearr_222982_223067 = state_222974__$1;
(statearr_222982_223067[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (1))){
var state_222974__$1 = state_222974;
var statearr_222983_223068 = state_222974__$1;
(statearr_222983_223068[(2)] = null);

(statearr_222983_223068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (24))){
var inst_222873 = (state_222974[(7)]);
var inst_222892 = (state_222974[(2)]);
var inst_222893 = cljs.core.next.call(null,inst_222873);
var inst_222851 = inst_222893;
var inst_222852 = null;
var inst_222853 = (0);
var inst_222854 = (0);
var state_222974__$1 = (function (){var statearr_222984 = state_222974;
(statearr_222984[(13)] = inst_222851);

(statearr_222984[(14)] = inst_222852);

(statearr_222984[(15)] = inst_222854);

(statearr_222984[(16)] = inst_222853);

(statearr_222984[(17)] = inst_222892);

return statearr_222984;
})();
var statearr_222985_223069 = state_222974__$1;
(statearr_222985_223069[(2)] = null);

(statearr_222985_223069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (39))){
var state_222974__$1 = state_222974;
var statearr_222989_223070 = state_222974__$1;
(statearr_222989_223070[(2)] = null);

(statearr_222989_223070[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (4))){
var inst_222842 = (state_222974[(11)]);
var inst_222842__$1 = (state_222974[(2)]);
var inst_222843 = (inst_222842__$1 == null);
var state_222974__$1 = (function (){var statearr_222990 = state_222974;
(statearr_222990[(11)] = inst_222842__$1);

return statearr_222990;
})();
if(cljs.core.truth_(inst_222843)){
var statearr_222991_223071 = state_222974__$1;
(statearr_222991_223071[(1)] = (5));

} else {
var statearr_222992_223072 = state_222974__$1;
(statearr_222992_223072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (15))){
var inst_222851 = (state_222974[(13)]);
var inst_222852 = (state_222974[(14)]);
var inst_222854 = (state_222974[(15)]);
var inst_222853 = (state_222974[(16)]);
var inst_222869 = (state_222974[(2)]);
var inst_222870 = (inst_222854 + (1));
var tmp222986 = inst_222851;
var tmp222987 = inst_222852;
var tmp222988 = inst_222853;
var inst_222851__$1 = tmp222986;
var inst_222852__$1 = tmp222987;
var inst_222853__$1 = tmp222988;
var inst_222854__$1 = inst_222870;
var state_222974__$1 = (function (){var statearr_222993 = state_222974;
(statearr_222993[(13)] = inst_222851__$1);

(statearr_222993[(14)] = inst_222852__$1);

(statearr_222993[(15)] = inst_222854__$1);

(statearr_222993[(18)] = inst_222869);

(statearr_222993[(16)] = inst_222853__$1);

return statearr_222993;
})();
var statearr_222994_223073 = state_222974__$1;
(statearr_222994_223073[(2)] = null);

(statearr_222994_223073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (21))){
var inst_222896 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_222998_223074 = state_222974__$1;
(statearr_222998_223074[(2)] = inst_222896);

(statearr_222998_223074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (31))){
var inst_222922 = (state_222974[(9)]);
var inst_222926 = done.call(null,null);
var inst_222927 = cljs.core.async.untap_STAR_.call(null,m,inst_222922);
var state_222974__$1 = (function (){var statearr_222999 = state_222974;
(statearr_222999[(19)] = inst_222926);

return statearr_222999;
})();
var statearr_223000_223075 = state_222974__$1;
(statearr_223000_223075[(2)] = inst_222927);

(statearr_223000_223075[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (32))){
var inst_222916 = (state_222974[(20)]);
var inst_222917 = (state_222974[(10)]);
var inst_222914 = (state_222974[(21)]);
var inst_222915 = (state_222974[(12)]);
var inst_222929 = (state_222974[(2)]);
var inst_222930 = (inst_222917 + (1));
var tmp222995 = inst_222916;
var tmp222996 = inst_222914;
var tmp222997 = inst_222915;
var inst_222914__$1 = tmp222996;
var inst_222915__$1 = tmp222997;
var inst_222916__$1 = tmp222995;
var inst_222917__$1 = inst_222930;
var state_222974__$1 = (function (){var statearr_223001 = state_222974;
(statearr_223001[(22)] = inst_222929);

(statearr_223001[(20)] = inst_222916__$1);

(statearr_223001[(10)] = inst_222917__$1);

(statearr_223001[(21)] = inst_222914__$1);

(statearr_223001[(12)] = inst_222915__$1);

return statearr_223001;
})();
var statearr_223002_223076 = state_222974__$1;
(statearr_223002_223076[(2)] = null);

(statearr_223002_223076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (40))){
var inst_222942 = (state_222974[(23)]);
var inst_222946 = done.call(null,null);
var inst_222947 = cljs.core.async.untap_STAR_.call(null,m,inst_222942);
var state_222974__$1 = (function (){var statearr_223003 = state_222974;
(statearr_223003[(24)] = inst_222946);

return statearr_223003;
})();
var statearr_223004_223077 = state_222974__$1;
(statearr_223004_223077[(2)] = inst_222947);

(statearr_223004_223077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (33))){
var inst_222933 = (state_222974[(25)]);
var inst_222935 = cljs.core.chunked_seq_QMARK_.call(null,inst_222933);
var state_222974__$1 = state_222974;
if(inst_222935){
var statearr_223005_223078 = state_222974__$1;
(statearr_223005_223078[(1)] = (36));

} else {
var statearr_223006_223079 = state_222974__$1;
(statearr_223006_223079[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (13))){
var inst_222863 = (state_222974[(26)]);
var inst_222866 = cljs.core.async.close_BANG_.call(null,inst_222863);
var state_222974__$1 = state_222974;
var statearr_223007_223080 = state_222974__$1;
(statearr_223007_223080[(2)] = inst_222866);

(statearr_223007_223080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (22))){
var inst_222886 = (state_222974[(8)]);
var inst_222889 = cljs.core.async.close_BANG_.call(null,inst_222886);
var state_222974__$1 = state_222974;
var statearr_223008_223081 = state_222974__$1;
(statearr_223008_223081[(2)] = inst_222889);

(statearr_223008_223081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (36))){
var inst_222933 = (state_222974[(25)]);
var inst_222937 = cljs.core.chunk_first.call(null,inst_222933);
var inst_222938 = cljs.core.chunk_rest.call(null,inst_222933);
var inst_222939 = cljs.core.count.call(null,inst_222937);
var inst_222914 = inst_222938;
var inst_222915 = inst_222937;
var inst_222916 = inst_222939;
var inst_222917 = (0);
var state_222974__$1 = (function (){var statearr_223009 = state_222974;
(statearr_223009[(20)] = inst_222916);

(statearr_223009[(10)] = inst_222917);

(statearr_223009[(21)] = inst_222914);

(statearr_223009[(12)] = inst_222915);

return statearr_223009;
})();
var statearr_223010_223082 = state_222974__$1;
(statearr_223010_223082[(2)] = null);

(statearr_223010_223082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (41))){
var inst_222933 = (state_222974[(25)]);
var inst_222949 = (state_222974[(2)]);
var inst_222950 = cljs.core.next.call(null,inst_222933);
var inst_222914 = inst_222950;
var inst_222915 = null;
var inst_222916 = (0);
var inst_222917 = (0);
var state_222974__$1 = (function (){var statearr_223011 = state_222974;
(statearr_223011[(20)] = inst_222916);

(statearr_223011[(10)] = inst_222917);

(statearr_223011[(21)] = inst_222914);

(statearr_223011[(12)] = inst_222915);

(statearr_223011[(27)] = inst_222949);

return statearr_223011;
})();
var statearr_223012_223083 = state_222974__$1;
(statearr_223012_223083[(2)] = null);

(statearr_223012_223083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (43))){
var state_222974__$1 = state_222974;
var statearr_223013_223084 = state_222974__$1;
(statearr_223013_223084[(2)] = null);

(statearr_223013_223084[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (29))){
var inst_222958 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_223014_223085 = state_222974__$1;
(statearr_223014_223085[(2)] = inst_222958);

(statearr_223014_223085[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (44))){
var inst_222967 = (state_222974[(2)]);
var state_222974__$1 = (function (){var statearr_223015 = state_222974;
(statearr_223015[(28)] = inst_222967);

return statearr_223015;
})();
var statearr_223016_223086 = state_222974__$1;
(statearr_223016_223086[(2)] = null);

(statearr_223016_223086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (6))){
var inst_222906 = (state_222974[(29)]);
var inst_222905 = cljs.core.deref.call(null,cs);
var inst_222906__$1 = cljs.core.keys.call(null,inst_222905);
var inst_222907 = cljs.core.count.call(null,inst_222906__$1);
var inst_222908 = cljs.core.reset_BANG_.call(null,dctr,inst_222907);
var inst_222913 = cljs.core.seq.call(null,inst_222906__$1);
var inst_222914 = inst_222913;
var inst_222915 = null;
var inst_222916 = (0);
var inst_222917 = (0);
var state_222974__$1 = (function (){var statearr_223017 = state_222974;
(statearr_223017[(30)] = inst_222908);

(statearr_223017[(20)] = inst_222916);

(statearr_223017[(10)] = inst_222917);

(statearr_223017[(21)] = inst_222914);

(statearr_223017[(12)] = inst_222915);

(statearr_223017[(29)] = inst_222906__$1);

return statearr_223017;
})();
var statearr_223018_223087 = state_222974__$1;
(statearr_223018_223087[(2)] = null);

(statearr_223018_223087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (28))){
var inst_222914 = (state_222974[(21)]);
var inst_222933 = (state_222974[(25)]);
var inst_222933__$1 = cljs.core.seq.call(null,inst_222914);
var state_222974__$1 = (function (){var statearr_223019 = state_222974;
(statearr_223019[(25)] = inst_222933__$1);

return statearr_223019;
})();
if(inst_222933__$1){
var statearr_223020_223088 = state_222974__$1;
(statearr_223020_223088[(1)] = (33));

} else {
var statearr_223021_223089 = state_222974__$1;
(statearr_223021_223089[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (25))){
var inst_222916 = (state_222974[(20)]);
var inst_222917 = (state_222974[(10)]);
var inst_222919 = (inst_222917 < inst_222916);
var inst_222920 = inst_222919;
var state_222974__$1 = state_222974;
if(cljs.core.truth_(inst_222920)){
var statearr_223022_223090 = state_222974__$1;
(statearr_223022_223090[(1)] = (27));

} else {
var statearr_223023_223091 = state_222974__$1;
(statearr_223023_223091[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (34))){
var state_222974__$1 = state_222974;
var statearr_223024_223092 = state_222974__$1;
(statearr_223024_223092[(2)] = null);

(statearr_223024_223092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (17))){
var state_222974__$1 = state_222974;
var statearr_223025_223093 = state_222974__$1;
(statearr_223025_223093[(2)] = null);

(statearr_223025_223093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (3))){
var inst_222972 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_222974__$1,inst_222972);
} else {
if((state_val_222975 === (12))){
var inst_222901 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_223026_223094 = state_222974__$1;
(statearr_223026_223094[(2)] = inst_222901);

(statearr_223026_223094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (2))){
var state_222974__$1 = state_222974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222974__$1,(4),ch);
} else {
if((state_val_222975 === (23))){
var state_222974__$1 = state_222974;
var statearr_223027_223095 = state_222974__$1;
(statearr_223027_223095[(2)] = null);

(statearr_223027_223095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (35))){
var inst_222956 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_223028_223096 = state_222974__$1;
(statearr_223028_223096[(2)] = inst_222956);

(statearr_223028_223096[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (19))){
var inst_222873 = (state_222974[(7)]);
var inst_222877 = cljs.core.chunk_first.call(null,inst_222873);
var inst_222878 = cljs.core.chunk_rest.call(null,inst_222873);
var inst_222879 = cljs.core.count.call(null,inst_222877);
var inst_222851 = inst_222878;
var inst_222852 = inst_222877;
var inst_222853 = inst_222879;
var inst_222854 = (0);
var state_222974__$1 = (function (){var statearr_223029 = state_222974;
(statearr_223029[(13)] = inst_222851);

(statearr_223029[(14)] = inst_222852);

(statearr_223029[(15)] = inst_222854);

(statearr_223029[(16)] = inst_222853);

return statearr_223029;
})();
var statearr_223030_223097 = state_222974__$1;
(statearr_223030_223097[(2)] = null);

(statearr_223030_223097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (11))){
var inst_222851 = (state_222974[(13)]);
var inst_222873 = (state_222974[(7)]);
var inst_222873__$1 = cljs.core.seq.call(null,inst_222851);
var state_222974__$1 = (function (){var statearr_223031 = state_222974;
(statearr_223031[(7)] = inst_222873__$1);

return statearr_223031;
})();
if(inst_222873__$1){
var statearr_223032_223098 = state_222974__$1;
(statearr_223032_223098[(1)] = (16));

} else {
var statearr_223033_223099 = state_222974__$1;
(statearr_223033_223099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (9))){
var inst_222903 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_223034_223100 = state_222974__$1;
(statearr_223034_223100[(2)] = inst_222903);

(statearr_223034_223100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (5))){
var inst_222849 = cljs.core.deref.call(null,cs);
var inst_222850 = cljs.core.seq.call(null,inst_222849);
var inst_222851 = inst_222850;
var inst_222852 = null;
var inst_222853 = (0);
var inst_222854 = (0);
var state_222974__$1 = (function (){var statearr_223035 = state_222974;
(statearr_223035[(13)] = inst_222851);

(statearr_223035[(14)] = inst_222852);

(statearr_223035[(15)] = inst_222854);

(statearr_223035[(16)] = inst_222853);

return statearr_223035;
})();
var statearr_223036_223101 = state_222974__$1;
(statearr_223036_223101[(2)] = null);

(statearr_223036_223101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (14))){
var state_222974__$1 = state_222974;
var statearr_223037_223102 = state_222974__$1;
(statearr_223037_223102[(2)] = null);

(statearr_223037_223102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (45))){
var inst_222964 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_223038_223103 = state_222974__$1;
(statearr_223038_223103[(2)] = inst_222964);

(statearr_223038_223103[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (26))){
var inst_222906 = (state_222974[(29)]);
var inst_222960 = (state_222974[(2)]);
var inst_222961 = cljs.core.seq.call(null,inst_222906);
var state_222974__$1 = (function (){var statearr_223039 = state_222974;
(statearr_223039[(31)] = inst_222960);

return statearr_223039;
})();
if(inst_222961){
var statearr_223040_223104 = state_222974__$1;
(statearr_223040_223104[(1)] = (42));

} else {
var statearr_223041_223105 = state_222974__$1;
(statearr_223041_223105[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (16))){
var inst_222873 = (state_222974[(7)]);
var inst_222875 = cljs.core.chunked_seq_QMARK_.call(null,inst_222873);
var state_222974__$1 = state_222974;
if(inst_222875){
var statearr_223042_223106 = state_222974__$1;
(statearr_223042_223106[(1)] = (19));

} else {
var statearr_223043_223107 = state_222974__$1;
(statearr_223043_223107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (38))){
var inst_222953 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_223044_223108 = state_222974__$1;
(statearr_223044_223108[(2)] = inst_222953);

(statearr_223044_223108[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (30))){
var state_222974__$1 = state_222974;
var statearr_223045_223109 = state_222974__$1;
(statearr_223045_223109[(2)] = null);

(statearr_223045_223109[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (10))){
var inst_222852 = (state_222974[(14)]);
var inst_222854 = (state_222974[(15)]);
var inst_222862 = cljs.core._nth.call(null,inst_222852,inst_222854);
var inst_222863 = cljs.core.nth.call(null,inst_222862,(0),null);
var inst_222864 = cljs.core.nth.call(null,inst_222862,(1),null);
var state_222974__$1 = (function (){var statearr_223046 = state_222974;
(statearr_223046[(26)] = inst_222863);

return statearr_223046;
})();
if(cljs.core.truth_(inst_222864)){
var statearr_223047_223110 = state_222974__$1;
(statearr_223047_223110[(1)] = (13));

} else {
var statearr_223048_223111 = state_222974__$1;
(statearr_223048_223111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (18))){
var inst_222899 = (state_222974[(2)]);
var state_222974__$1 = state_222974;
var statearr_223049_223112 = state_222974__$1;
(statearr_223049_223112[(2)] = inst_222899);

(statearr_223049_223112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (42))){
var state_222974__$1 = state_222974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_222974__$1,(45),dchan);
} else {
if((state_val_222975 === (37))){
var inst_222942 = (state_222974[(23)]);
var inst_222842 = (state_222974[(11)]);
var inst_222933 = (state_222974[(25)]);
var inst_222942__$1 = cljs.core.first.call(null,inst_222933);
var inst_222943 = cljs.core.async.put_BANG_.call(null,inst_222942__$1,inst_222842,done);
var state_222974__$1 = (function (){var statearr_223050 = state_222974;
(statearr_223050[(23)] = inst_222942__$1);

return statearr_223050;
})();
if(cljs.core.truth_(inst_222943)){
var statearr_223051_223113 = state_222974__$1;
(statearr_223051_223113[(1)] = (39));

} else {
var statearr_223052_223114 = state_222974__$1;
(statearr_223052_223114[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_222975 === (8))){
var inst_222854 = (state_222974[(15)]);
var inst_222853 = (state_222974[(16)]);
var inst_222856 = (inst_222854 < inst_222853);
var inst_222857 = inst_222856;
var state_222974__$1 = state_222974;
if(cljs.core.truth_(inst_222857)){
var statearr_223053_223115 = state_222974__$1;
(statearr_223053_223115[(1)] = (10));

} else {
var statearr_223054_223116 = state_222974__$1;
(statearr_223054_223116[(1)] = (11));

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
});})(c__44084__auto___223062,cs,m,dchan,dctr,done))
;
return ((function (switch__44061__auto__,c__44084__auto___223062,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44062__auto__ = null;
var cljs$core$async$mult_$_state_machine__44062__auto____0 = (function (){
var statearr_223058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_223058[(0)] = cljs$core$async$mult_$_state_machine__44062__auto__);

(statearr_223058[(1)] = (1));

return statearr_223058;
});
var cljs$core$async$mult_$_state_machine__44062__auto____1 = (function (state_222974){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_222974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e223059){if((e223059 instanceof Object)){
var ex__44065__auto__ = e223059;
var statearr_223060_223117 = state_222974;
(statearr_223060_223117[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_222974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e223059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__223118 = state_222974;
state_222974 = G__223118;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44062__auto__ = function(state_222974){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44062__auto____1.call(this,state_222974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44062__auto____0;
cljs$core$async$mult_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44062__auto____1;
return cljs$core$async$mult_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___223062,cs,m,dchan,dctr,done))
})();
var state__44086__auto__ = (function (){var statearr_223061 = f__44085__auto__.call(null);
(statearr_223061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___223062);

return statearr_223061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___223062,cs,m,dchan,dctr,done))
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
var args223119 = [];
var len__40427__auto___223122 = arguments.length;
var i__40428__auto___223123 = (0);
while(true){
if((i__40428__auto___223123 < len__40427__auto___223122)){
args223119.push((arguments[i__40428__auto___223123]));

var G__223124 = (i__40428__auto___223123 + (1));
i__40428__auto___223123 = G__223124;
continue;
} else {
}
break;
}

var G__223121 = args223119.length;
switch (G__223121) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223119.length)].join('')));

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
var len__40427__auto___223136 = arguments.length;
var i__40428__auto___223137 = (0);
while(true){
if((i__40428__auto___223137 < len__40427__auto___223136)){
args__40434__auto__.push((arguments[i__40428__auto___223137]));

var G__223138 = (i__40428__auto___223137 + (1));
i__40428__auto___223137 = G__223138;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((3) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__40435__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__223130){
var map__223131 = p__223130;
var map__223131__$1 = ((((!((map__223131 == null)))?((((map__223131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__223131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__223131):map__223131);
var opts = map__223131__$1;
var statearr_223133_223139 = state;
(statearr_223133_223139[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__223131,map__223131__$1,opts){
return (function (val){
var statearr_223134_223140 = state;
(statearr_223134_223140[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__223131,map__223131__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_223135_223141 = state;
(statearr_223135_223141[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq223126){
var G__223127 = cljs.core.first.call(null,seq223126);
var seq223126__$1 = cljs.core.next.call(null,seq223126);
var G__223128 = cljs.core.first.call(null,seq223126__$1);
var seq223126__$2 = cljs.core.next.call(null,seq223126__$1);
var G__223129 = cljs.core.first.call(null,seq223126__$2);
var seq223126__$3 = cljs.core.next.call(null,seq223126__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__223127,G__223128,G__223129,seq223126__$3);
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
if(typeof cljs.core.async.t_cljs$core$async223309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async223309 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta223310){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta223310 = meta223310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_223311,meta223310__$1){
var self__ = this;
var _223311__$1 = this;
return (new cljs.core.async.t_cljs$core$async223309(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta223310__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_223311){
var self__ = this;
var _223311__$1 = this;
return self__.meta223310;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async223309.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async223309.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta223310","meta223310",-1758196013,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async223309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async223309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async223309";

cljs.core.async.t_cljs$core$async223309.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async223309");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async223309 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async223309(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta223310){
return (new cljs.core.async.t_cljs$core$async223309(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta223310));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async223309(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44084__auto___223476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___223476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___223476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_223413){
var state_val_223414 = (state_223413[(1)]);
if((state_val_223414 === (7))){
var inst_223328 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
var statearr_223415_223477 = state_223413__$1;
(statearr_223415_223477[(2)] = inst_223328);

(statearr_223415_223477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (20))){
var inst_223340 = (state_223413[(7)]);
var state_223413__$1 = state_223413;
var statearr_223416_223478 = state_223413__$1;
(statearr_223416_223478[(2)] = inst_223340);

(statearr_223416_223478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (27))){
var state_223413__$1 = state_223413;
var statearr_223417_223479 = state_223413__$1;
(statearr_223417_223479[(2)] = null);

(statearr_223417_223479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (1))){
var inst_223315 = (state_223413[(8)]);
var inst_223315__$1 = calc_state.call(null);
var inst_223317 = (inst_223315__$1 == null);
var inst_223318 = cljs.core.not.call(null,inst_223317);
var state_223413__$1 = (function (){var statearr_223418 = state_223413;
(statearr_223418[(8)] = inst_223315__$1);

return statearr_223418;
})();
if(inst_223318){
var statearr_223419_223480 = state_223413__$1;
(statearr_223419_223480[(1)] = (2));

} else {
var statearr_223420_223481 = state_223413__$1;
(statearr_223420_223481[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (24))){
var inst_223364 = (state_223413[(9)]);
var inst_223373 = (state_223413[(10)]);
var inst_223387 = (state_223413[(11)]);
var inst_223387__$1 = inst_223364.call(null,inst_223373);
var state_223413__$1 = (function (){var statearr_223421 = state_223413;
(statearr_223421[(11)] = inst_223387__$1);

return statearr_223421;
})();
if(cljs.core.truth_(inst_223387__$1)){
var statearr_223422_223482 = state_223413__$1;
(statearr_223422_223482[(1)] = (29));

} else {
var statearr_223423_223483 = state_223413__$1;
(statearr_223423_223483[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (4))){
var inst_223331 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
if(cljs.core.truth_(inst_223331)){
var statearr_223424_223484 = state_223413__$1;
(statearr_223424_223484[(1)] = (8));

} else {
var statearr_223425_223485 = state_223413__$1;
(statearr_223425_223485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (15))){
var inst_223358 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
if(cljs.core.truth_(inst_223358)){
var statearr_223426_223486 = state_223413__$1;
(statearr_223426_223486[(1)] = (19));

} else {
var statearr_223427_223487 = state_223413__$1;
(statearr_223427_223487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (21))){
var inst_223363 = (state_223413[(12)]);
var inst_223363__$1 = (state_223413[(2)]);
var inst_223364 = cljs.core.get.call(null,inst_223363__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_223365 = cljs.core.get.call(null,inst_223363__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_223366 = cljs.core.get.call(null,inst_223363__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_223413__$1 = (function (){var statearr_223428 = state_223413;
(statearr_223428[(9)] = inst_223364);

(statearr_223428[(12)] = inst_223363__$1);

(statearr_223428[(13)] = inst_223365);

return statearr_223428;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_223413__$1,(22),inst_223366);
} else {
if((state_val_223414 === (31))){
var inst_223395 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
if(cljs.core.truth_(inst_223395)){
var statearr_223429_223488 = state_223413__$1;
(statearr_223429_223488[(1)] = (32));

} else {
var statearr_223430_223489 = state_223413__$1;
(statearr_223430_223489[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (32))){
var inst_223372 = (state_223413[(14)]);
var state_223413__$1 = state_223413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_223413__$1,(35),out,inst_223372);
} else {
if((state_val_223414 === (33))){
var inst_223363 = (state_223413[(12)]);
var inst_223340 = inst_223363;
var state_223413__$1 = (function (){var statearr_223431 = state_223413;
(statearr_223431[(7)] = inst_223340);

return statearr_223431;
})();
var statearr_223432_223490 = state_223413__$1;
(statearr_223432_223490[(2)] = null);

(statearr_223432_223490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (13))){
var inst_223340 = (state_223413[(7)]);
var inst_223347 = inst_223340.cljs$lang$protocol_mask$partition0$;
var inst_223348 = (inst_223347 & (64));
var inst_223349 = inst_223340.cljs$core$ISeq$;
var inst_223350 = (cljs.core.PROTOCOL_SENTINEL === inst_223349);
var inst_223351 = (inst_223348) || (inst_223350);
var state_223413__$1 = state_223413;
if(cljs.core.truth_(inst_223351)){
var statearr_223433_223491 = state_223413__$1;
(statearr_223433_223491[(1)] = (16));

} else {
var statearr_223434_223492 = state_223413__$1;
(statearr_223434_223492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (22))){
var inst_223373 = (state_223413[(10)]);
var inst_223372 = (state_223413[(14)]);
var inst_223371 = (state_223413[(2)]);
var inst_223372__$1 = cljs.core.nth.call(null,inst_223371,(0),null);
var inst_223373__$1 = cljs.core.nth.call(null,inst_223371,(1),null);
var inst_223374 = (inst_223372__$1 == null);
var inst_223375 = cljs.core._EQ_.call(null,inst_223373__$1,change);
var inst_223376 = (inst_223374) || (inst_223375);
var state_223413__$1 = (function (){var statearr_223435 = state_223413;
(statearr_223435[(10)] = inst_223373__$1);

(statearr_223435[(14)] = inst_223372__$1);

return statearr_223435;
})();
if(cljs.core.truth_(inst_223376)){
var statearr_223436_223493 = state_223413__$1;
(statearr_223436_223493[(1)] = (23));

} else {
var statearr_223437_223494 = state_223413__$1;
(statearr_223437_223494[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (36))){
var inst_223363 = (state_223413[(12)]);
var inst_223340 = inst_223363;
var state_223413__$1 = (function (){var statearr_223438 = state_223413;
(statearr_223438[(7)] = inst_223340);

return statearr_223438;
})();
var statearr_223439_223495 = state_223413__$1;
(statearr_223439_223495[(2)] = null);

(statearr_223439_223495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (29))){
var inst_223387 = (state_223413[(11)]);
var state_223413__$1 = state_223413;
var statearr_223440_223496 = state_223413__$1;
(statearr_223440_223496[(2)] = inst_223387);

(statearr_223440_223496[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (6))){
var state_223413__$1 = state_223413;
var statearr_223441_223497 = state_223413__$1;
(statearr_223441_223497[(2)] = false);

(statearr_223441_223497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (28))){
var inst_223383 = (state_223413[(2)]);
var inst_223384 = calc_state.call(null);
var inst_223340 = inst_223384;
var state_223413__$1 = (function (){var statearr_223442 = state_223413;
(statearr_223442[(7)] = inst_223340);

(statearr_223442[(15)] = inst_223383);

return statearr_223442;
})();
var statearr_223443_223498 = state_223413__$1;
(statearr_223443_223498[(2)] = null);

(statearr_223443_223498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (25))){
var inst_223409 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
var statearr_223444_223499 = state_223413__$1;
(statearr_223444_223499[(2)] = inst_223409);

(statearr_223444_223499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (34))){
var inst_223407 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
var statearr_223445_223500 = state_223413__$1;
(statearr_223445_223500[(2)] = inst_223407);

(statearr_223445_223500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (17))){
var state_223413__$1 = state_223413;
var statearr_223446_223501 = state_223413__$1;
(statearr_223446_223501[(2)] = false);

(statearr_223446_223501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (3))){
var state_223413__$1 = state_223413;
var statearr_223447_223502 = state_223413__$1;
(statearr_223447_223502[(2)] = false);

(statearr_223447_223502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (12))){
var inst_223411 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_223413__$1,inst_223411);
} else {
if((state_val_223414 === (2))){
var inst_223315 = (state_223413[(8)]);
var inst_223320 = inst_223315.cljs$lang$protocol_mask$partition0$;
var inst_223321 = (inst_223320 & (64));
var inst_223322 = inst_223315.cljs$core$ISeq$;
var inst_223323 = (cljs.core.PROTOCOL_SENTINEL === inst_223322);
var inst_223324 = (inst_223321) || (inst_223323);
var state_223413__$1 = state_223413;
if(cljs.core.truth_(inst_223324)){
var statearr_223448_223503 = state_223413__$1;
(statearr_223448_223503[(1)] = (5));

} else {
var statearr_223449_223504 = state_223413__$1;
(statearr_223449_223504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (23))){
var inst_223372 = (state_223413[(14)]);
var inst_223378 = (inst_223372 == null);
var state_223413__$1 = state_223413;
if(cljs.core.truth_(inst_223378)){
var statearr_223450_223505 = state_223413__$1;
(statearr_223450_223505[(1)] = (26));

} else {
var statearr_223451_223506 = state_223413__$1;
(statearr_223451_223506[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (35))){
var inst_223398 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
if(cljs.core.truth_(inst_223398)){
var statearr_223452_223507 = state_223413__$1;
(statearr_223452_223507[(1)] = (36));

} else {
var statearr_223453_223508 = state_223413__$1;
(statearr_223453_223508[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (19))){
var inst_223340 = (state_223413[(7)]);
var inst_223360 = cljs.core.apply.call(null,cljs.core.hash_map,inst_223340);
var state_223413__$1 = state_223413;
var statearr_223454_223509 = state_223413__$1;
(statearr_223454_223509[(2)] = inst_223360);

(statearr_223454_223509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (11))){
var inst_223340 = (state_223413[(7)]);
var inst_223344 = (inst_223340 == null);
var inst_223345 = cljs.core.not.call(null,inst_223344);
var state_223413__$1 = state_223413;
if(inst_223345){
var statearr_223455_223510 = state_223413__$1;
(statearr_223455_223510[(1)] = (13));

} else {
var statearr_223456_223511 = state_223413__$1;
(statearr_223456_223511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (9))){
var inst_223315 = (state_223413[(8)]);
var state_223413__$1 = state_223413;
var statearr_223457_223512 = state_223413__$1;
(statearr_223457_223512[(2)] = inst_223315);

(statearr_223457_223512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (5))){
var state_223413__$1 = state_223413;
var statearr_223458_223513 = state_223413__$1;
(statearr_223458_223513[(2)] = true);

(statearr_223458_223513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (14))){
var state_223413__$1 = state_223413;
var statearr_223459_223514 = state_223413__$1;
(statearr_223459_223514[(2)] = false);

(statearr_223459_223514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (26))){
var inst_223373 = (state_223413[(10)]);
var inst_223380 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_223373);
var state_223413__$1 = state_223413;
var statearr_223460_223515 = state_223413__$1;
(statearr_223460_223515[(2)] = inst_223380);

(statearr_223460_223515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (16))){
var state_223413__$1 = state_223413;
var statearr_223461_223516 = state_223413__$1;
(statearr_223461_223516[(2)] = true);

(statearr_223461_223516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (38))){
var inst_223403 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
var statearr_223462_223517 = state_223413__$1;
(statearr_223462_223517[(2)] = inst_223403);

(statearr_223462_223517[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (30))){
var inst_223364 = (state_223413[(9)]);
var inst_223365 = (state_223413[(13)]);
var inst_223373 = (state_223413[(10)]);
var inst_223390 = cljs.core.empty_QMARK_.call(null,inst_223364);
var inst_223391 = inst_223365.call(null,inst_223373);
var inst_223392 = cljs.core.not.call(null,inst_223391);
var inst_223393 = (inst_223390) && (inst_223392);
var state_223413__$1 = state_223413;
var statearr_223463_223518 = state_223413__$1;
(statearr_223463_223518[(2)] = inst_223393);

(statearr_223463_223518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (10))){
var inst_223315 = (state_223413[(8)]);
var inst_223336 = (state_223413[(2)]);
var inst_223337 = cljs.core.get.call(null,inst_223336,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_223338 = cljs.core.get.call(null,inst_223336,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_223339 = cljs.core.get.call(null,inst_223336,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_223340 = inst_223315;
var state_223413__$1 = (function (){var statearr_223464 = state_223413;
(statearr_223464[(7)] = inst_223340);

(statearr_223464[(16)] = inst_223337);

(statearr_223464[(17)] = inst_223338);

(statearr_223464[(18)] = inst_223339);

return statearr_223464;
})();
var statearr_223465_223519 = state_223413__$1;
(statearr_223465_223519[(2)] = null);

(statearr_223465_223519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (18))){
var inst_223355 = (state_223413[(2)]);
var state_223413__$1 = state_223413;
var statearr_223466_223520 = state_223413__$1;
(statearr_223466_223520[(2)] = inst_223355);

(statearr_223466_223520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (37))){
var state_223413__$1 = state_223413;
var statearr_223467_223521 = state_223413__$1;
(statearr_223467_223521[(2)] = null);

(statearr_223467_223521[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223414 === (8))){
var inst_223315 = (state_223413[(8)]);
var inst_223333 = cljs.core.apply.call(null,cljs.core.hash_map,inst_223315);
var state_223413__$1 = state_223413;
var statearr_223468_223522 = state_223413__$1;
(statearr_223468_223522[(2)] = inst_223333);

(statearr_223468_223522[(1)] = (10));


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
});})(c__44084__auto___223476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44061__auto__,c__44084__auto___223476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44062__auto__ = null;
var cljs$core$async$mix_$_state_machine__44062__auto____0 = (function (){
var statearr_223472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_223472[(0)] = cljs$core$async$mix_$_state_machine__44062__auto__);

(statearr_223472[(1)] = (1));

return statearr_223472;
});
var cljs$core$async$mix_$_state_machine__44062__auto____1 = (function (state_223413){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_223413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e223473){if((e223473 instanceof Object)){
var ex__44065__auto__ = e223473;
var statearr_223474_223523 = state_223413;
(statearr_223474_223523[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_223413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e223473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__223524 = state_223413;
state_223413 = G__223524;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44062__auto__ = function(state_223413){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44062__auto____1.call(this,state_223413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44062__auto____0;
cljs$core$async$mix_$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44062__auto____1;
return cljs$core$async$mix_$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___223476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44086__auto__ = (function (){var statearr_223475 = f__44085__auto__.call(null);
(statearr_223475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___223476);

return statearr_223475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___223476,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args223525 = [];
var len__40427__auto___223528 = arguments.length;
var i__40428__auto___223529 = (0);
while(true){
if((i__40428__auto___223529 < len__40427__auto___223528)){
args223525.push((arguments[i__40428__auto___223529]));

var G__223530 = (i__40428__auto___223529 + (1));
i__40428__auto___223529 = G__223530;
continue;
} else {
}
break;
}

var G__223527 = args223525.length;
switch (G__223527) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223525.length)].join('')));

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
var args223533 = [];
var len__40427__auto___223658 = arguments.length;
var i__40428__auto___223659 = (0);
while(true){
if((i__40428__auto___223659 < len__40427__auto___223658)){
args223533.push((arguments[i__40428__auto___223659]));

var G__223660 = (i__40428__auto___223659 + (1));
i__40428__auto___223659 = G__223660;
continue;
} else {
}
break;
}

var G__223535 = args223533.length;
switch (G__223535) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223533.length)].join('')));

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
return (function (p1__223532_SHARP_){
if(cljs.core.truth_(p1__223532_SHARP_.call(null,topic))){
return p1__223532_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__223532_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__39206__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async223536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async223536 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta223537){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta223537 = meta223537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_223538,meta223537__$1){
var self__ = this;
var _223538__$1 = this;
return (new cljs.core.async.t_cljs$core$async223536(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta223537__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_223538){
var self__ = this;
var _223538__$1 = this;
return self__.meta223537;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async223536.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async223536.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta223537","meta223537",548532363,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async223536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async223536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async223536";

cljs.core.async.t_cljs$core$async223536.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async223536");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async223536 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async223536(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta223537){
return (new cljs.core.async.t_cljs$core$async223536(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta223537));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async223536(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44084__auto___223662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___223662,mults,ensure_mult,p){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___223662,mults,ensure_mult,p){
return (function (state_223610){
var state_val_223611 = (state_223610[(1)]);
if((state_val_223611 === (7))){
var inst_223606 = (state_223610[(2)]);
var state_223610__$1 = state_223610;
var statearr_223612_223663 = state_223610__$1;
(statearr_223612_223663[(2)] = inst_223606);

(statearr_223612_223663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (20))){
var state_223610__$1 = state_223610;
var statearr_223613_223664 = state_223610__$1;
(statearr_223613_223664[(2)] = null);

(statearr_223613_223664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (1))){
var state_223610__$1 = state_223610;
var statearr_223614_223665 = state_223610__$1;
(statearr_223614_223665[(2)] = null);

(statearr_223614_223665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (24))){
var inst_223589 = (state_223610[(7)]);
var inst_223598 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_223589);
var state_223610__$1 = state_223610;
var statearr_223615_223666 = state_223610__$1;
(statearr_223615_223666[(2)] = inst_223598);

(statearr_223615_223666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (4))){
var inst_223541 = (state_223610[(8)]);
var inst_223541__$1 = (state_223610[(2)]);
var inst_223542 = (inst_223541__$1 == null);
var state_223610__$1 = (function (){var statearr_223616 = state_223610;
(statearr_223616[(8)] = inst_223541__$1);

return statearr_223616;
})();
if(cljs.core.truth_(inst_223542)){
var statearr_223617_223667 = state_223610__$1;
(statearr_223617_223667[(1)] = (5));

} else {
var statearr_223618_223668 = state_223610__$1;
(statearr_223618_223668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (15))){
var inst_223583 = (state_223610[(2)]);
var state_223610__$1 = state_223610;
var statearr_223619_223669 = state_223610__$1;
(statearr_223619_223669[(2)] = inst_223583);

(statearr_223619_223669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (21))){
var inst_223603 = (state_223610[(2)]);
var state_223610__$1 = (function (){var statearr_223620 = state_223610;
(statearr_223620[(9)] = inst_223603);

return statearr_223620;
})();
var statearr_223621_223670 = state_223610__$1;
(statearr_223621_223670[(2)] = null);

(statearr_223621_223670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (13))){
var inst_223565 = (state_223610[(10)]);
var inst_223567 = cljs.core.chunked_seq_QMARK_.call(null,inst_223565);
var state_223610__$1 = state_223610;
if(inst_223567){
var statearr_223622_223671 = state_223610__$1;
(statearr_223622_223671[(1)] = (16));

} else {
var statearr_223623_223672 = state_223610__$1;
(statearr_223623_223672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (22))){
var inst_223595 = (state_223610[(2)]);
var state_223610__$1 = state_223610;
if(cljs.core.truth_(inst_223595)){
var statearr_223624_223673 = state_223610__$1;
(statearr_223624_223673[(1)] = (23));

} else {
var statearr_223625_223674 = state_223610__$1;
(statearr_223625_223674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (6))){
var inst_223591 = (state_223610[(11)]);
var inst_223589 = (state_223610[(7)]);
var inst_223541 = (state_223610[(8)]);
var inst_223589__$1 = topic_fn.call(null,inst_223541);
var inst_223590 = cljs.core.deref.call(null,mults);
var inst_223591__$1 = cljs.core.get.call(null,inst_223590,inst_223589__$1);
var state_223610__$1 = (function (){var statearr_223626 = state_223610;
(statearr_223626[(11)] = inst_223591__$1);

(statearr_223626[(7)] = inst_223589__$1);

return statearr_223626;
})();
if(cljs.core.truth_(inst_223591__$1)){
var statearr_223627_223675 = state_223610__$1;
(statearr_223627_223675[(1)] = (19));

} else {
var statearr_223628_223676 = state_223610__$1;
(statearr_223628_223676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (25))){
var inst_223600 = (state_223610[(2)]);
var state_223610__$1 = state_223610;
var statearr_223629_223677 = state_223610__$1;
(statearr_223629_223677[(2)] = inst_223600);

(statearr_223629_223677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (17))){
var inst_223565 = (state_223610[(10)]);
var inst_223574 = cljs.core.first.call(null,inst_223565);
var inst_223575 = cljs.core.async.muxch_STAR_.call(null,inst_223574);
var inst_223576 = cljs.core.async.close_BANG_.call(null,inst_223575);
var inst_223577 = cljs.core.next.call(null,inst_223565);
var inst_223551 = inst_223577;
var inst_223552 = null;
var inst_223553 = (0);
var inst_223554 = (0);
var state_223610__$1 = (function (){var statearr_223630 = state_223610;
(statearr_223630[(12)] = inst_223551);

(statearr_223630[(13)] = inst_223554);

(statearr_223630[(14)] = inst_223553);

(statearr_223630[(15)] = inst_223576);

(statearr_223630[(16)] = inst_223552);

return statearr_223630;
})();
var statearr_223631_223678 = state_223610__$1;
(statearr_223631_223678[(2)] = null);

(statearr_223631_223678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (3))){
var inst_223608 = (state_223610[(2)]);
var state_223610__$1 = state_223610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_223610__$1,inst_223608);
} else {
if((state_val_223611 === (12))){
var inst_223585 = (state_223610[(2)]);
var state_223610__$1 = state_223610;
var statearr_223632_223679 = state_223610__$1;
(statearr_223632_223679[(2)] = inst_223585);

(statearr_223632_223679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (2))){
var state_223610__$1 = state_223610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_223610__$1,(4),ch);
} else {
if((state_val_223611 === (23))){
var state_223610__$1 = state_223610;
var statearr_223633_223680 = state_223610__$1;
(statearr_223633_223680[(2)] = null);

(statearr_223633_223680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (19))){
var inst_223591 = (state_223610[(11)]);
var inst_223541 = (state_223610[(8)]);
var inst_223593 = cljs.core.async.muxch_STAR_.call(null,inst_223591);
var state_223610__$1 = state_223610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_223610__$1,(22),inst_223593,inst_223541);
} else {
if((state_val_223611 === (11))){
var inst_223551 = (state_223610[(12)]);
var inst_223565 = (state_223610[(10)]);
var inst_223565__$1 = cljs.core.seq.call(null,inst_223551);
var state_223610__$1 = (function (){var statearr_223634 = state_223610;
(statearr_223634[(10)] = inst_223565__$1);

return statearr_223634;
})();
if(inst_223565__$1){
var statearr_223635_223681 = state_223610__$1;
(statearr_223635_223681[(1)] = (13));

} else {
var statearr_223636_223682 = state_223610__$1;
(statearr_223636_223682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (9))){
var inst_223587 = (state_223610[(2)]);
var state_223610__$1 = state_223610;
var statearr_223637_223683 = state_223610__$1;
(statearr_223637_223683[(2)] = inst_223587);

(statearr_223637_223683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (5))){
var inst_223548 = cljs.core.deref.call(null,mults);
var inst_223549 = cljs.core.vals.call(null,inst_223548);
var inst_223550 = cljs.core.seq.call(null,inst_223549);
var inst_223551 = inst_223550;
var inst_223552 = null;
var inst_223553 = (0);
var inst_223554 = (0);
var state_223610__$1 = (function (){var statearr_223638 = state_223610;
(statearr_223638[(12)] = inst_223551);

(statearr_223638[(13)] = inst_223554);

(statearr_223638[(14)] = inst_223553);

(statearr_223638[(16)] = inst_223552);

return statearr_223638;
})();
var statearr_223639_223684 = state_223610__$1;
(statearr_223639_223684[(2)] = null);

(statearr_223639_223684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (14))){
var state_223610__$1 = state_223610;
var statearr_223643_223685 = state_223610__$1;
(statearr_223643_223685[(2)] = null);

(statearr_223643_223685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (16))){
var inst_223565 = (state_223610[(10)]);
var inst_223569 = cljs.core.chunk_first.call(null,inst_223565);
var inst_223570 = cljs.core.chunk_rest.call(null,inst_223565);
var inst_223571 = cljs.core.count.call(null,inst_223569);
var inst_223551 = inst_223570;
var inst_223552 = inst_223569;
var inst_223553 = inst_223571;
var inst_223554 = (0);
var state_223610__$1 = (function (){var statearr_223644 = state_223610;
(statearr_223644[(12)] = inst_223551);

(statearr_223644[(13)] = inst_223554);

(statearr_223644[(14)] = inst_223553);

(statearr_223644[(16)] = inst_223552);

return statearr_223644;
})();
var statearr_223645_223686 = state_223610__$1;
(statearr_223645_223686[(2)] = null);

(statearr_223645_223686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (10))){
var inst_223551 = (state_223610[(12)]);
var inst_223554 = (state_223610[(13)]);
var inst_223553 = (state_223610[(14)]);
var inst_223552 = (state_223610[(16)]);
var inst_223559 = cljs.core._nth.call(null,inst_223552,inst_223554);
var inst_223560 = cljs.core.async.muxch_STAR_.call(null,inst_223559);
var inst_223561 = cljs.core.async.close_BANG_.call(null,inst_223560);
var inst_223562 = (inst_223554 + (1));
var tmp223640 = inst_223551;
var tmp223641 = inst_223553;
var tmp223642 = inst_223552;
var inst_223551__$1 = tmp223640;
var inst_223552__$1 = tmp223642;
var inst_223553__$1 = tmp223641;
var inst_223554__$1 = inst_223562;
var state_223610__$1 = (function (){var statearr_223646 = state_223610;
(statearr_223646[(12)] = inst_223551__$1);

(statearr_223646[(17)] = inst_223561);

(statearr_223646[(13)] = inst_223554__$1);

(statearr_223646[(14)] = inst_223553__$1);

(statearr_223646[(16)] = inst_223552__$1);

return statearr_223646;
})();
var statearr_223647_223687 = state_223610__$1;
(statearr_223647_223687[(2)] = null);

(statearr_223647_223687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (18))){
var inst_223580 = (state_223610[(2)]);
var state_223610__$1 = state_223610;
var statearr_223648_223688 = state_223610__$1;
(statearr_223648_223688[(2)] = inst_223580);

(statearr_223648_223688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223611 === (8))){
var inst_223554 = (state_223610[(13)]);
var inst_223553 = (state_223610[(14)]);
var inst_223556 = (inst_223554 < inst_223553);
var inst_223557 = inst_223556;
var state_223610__$1 = state_223610;
if(cljs.core.truth_(inst_223557)){
var statearr_223649_223689 = state_223610__$1;
(statearr_223649_223689[(1)] = (10));

} else {
var statearr_223650_223690 = state_223610__$1;
(statearr_223650_223690[(1)] = (11));

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
});})(c__44084__auto___223662,mults,ensure_mult,p))
;
return ((function (switch__44061__auto__,c__44084__auto___223662,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_223654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_223654[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_223654[(1)] = (1));

return statearr_223654;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_223610){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_223610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e223655){if((e223655 instanceof Object)){
var ex__44065__auto__ = e223655;
var statearr_223656_223691 = state_223610;
(statearr_223656_223691[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_223610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e223655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__223692 = state_223610;
state_223610 = G__223692;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_223610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_223610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___223662,mults,ensure_mult,p))
})();
var state__44086__auto__ = (function (){var statearr_223657 = f__44085__auto__.call(null);
(statearr_223657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___223662);

return statearr_223657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___223662,mults,ensure_mult,p))
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
var args223693 = [];
var len__40427__auto___223696 = arguments.length;
var i__40428__auto___223697 = (0);
while(true){
if((i__40428__auto___223697 < len__40427__auto___223696)){
args223693.push((arguments[i__40428__auto___223697]));

var G__223698 = (i__40428__auto___223697 + (1));
i__40428__auto___223697 = G__223698;
continue;
} else {
}
break;
}

var G__223695 = args223693.length;
switch (G__223695) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223693.length)].join('')));

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
var args223700 = [];
var len__40427__auto___223703 = arguments.length;
var i__40428__auto___223704 = (0);
while(true){
if((i__40428__auto___223704 < len__40427__auto___223703)){
args223700.push((arguments[i__40428__auto___223704]));

var G__223705 = (i__40428__auto___223704 + (1));
i__40428__auto___223704 = G__223705;
continue;
} else {
}
break;
}

var G__223702 = args223700.length;
switch (G__223702) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223700.length)].join('')));

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
var args223707 = [];
var len__40427__auto___223778 = arguments.length;
var i__40428__auto___223779 = (0);
while(true){
if((i__40428__auto___223779 < len__40427__auto___223778)){
args223707.push((arguments[i__40428__auto___223779]));

var G__223780 = (i__40428__auto___223779 + (1));
i__40428__auto___223779 = G__223780;
continue;
} else {
}
break;
}

var G__223709 = args223707.length;
switch (G__223709) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223707.length)].join('')));

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
var c__44084__auto___223782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___223782,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___223782,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_223748){
var state_val_223749 = (state_223748[(1)]);
if((state_val_223749 === (7))){
var state_223748__$1 = state_223748;
var statearr_223750_223783 = state_223748__$1;
(statearr_223750_223783[(2)] = null);

(statearr_223750_223783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (1))){
var state_223748__$1 = state_223748;
var statearr_223751_223784 = state_223748__$1;
(statearr_223751_223784[(2)] = null);

(statearr_223751_223784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (4))){
var inst_223712 = (state_223748[(7)]);
var inst_223714 = (inst_223712 < cnt);
var state_223748__$1 = state_223748;
if(cljs.core.truth_(inst_223714)){
var statearr_223752_223785 = state_223748__$1;
(statearr_223752_223785[(1)] = (6));

} else {
var statearr_223753_223786 = state_223748__$1;
(statearr_223753_223786[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (15))){
var inst_223744 = (state_223748[(2)]);
var state_223748__$1 = state_223748;
var statearr_223754_223787 = state_223748__$1;
(statearr_223754_223787[(2)] = inst_223744);

(statearr_223754_223787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (13))){
var inst_223737 = cljs.core.async.close_BANG_.call(null,out);
var state_223748__$1 = state_223748;
var statearr_223755_223788 = state_223748__$1;
(statearr_223755_223788[(2)] = inst_223737);

(statearr_223755_223788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (6))){
var state_223748__$1 = state_223748;
var statearr_223756_223789 = state_223748__$1;
(statearr_223756_223789[(2)] = null);

(statearr_223756_223789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (3))){
var inst_223746 = (state_223748[(2)]);
var state_223748__$1 = state_223748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_223748__$1,inst_223746);
} else {
if((state_val_223749 === (12))){
var inst_223734 = (state_223748[(8)]);
var inst_223734__$1 = (state_223748[(2)]);
var inst_223735 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_223734__$1);
var state_223748__$1 = (function (){var statearr_223757 = state_223748;
(statearr_223757[(8)] = inst_223734__$1);

return statearr_223757;
})();
if(cljs.core.truth_(inst_223735)){
var statearr_223758_223790 = state_223748__$1;
(statearr_223758_223790[(1)] = (13));

} else {
var statearr_223759_223791 = state_223748__$1;
(statearr_223759_223791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (2))){
var inst_223711 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_223712 = (0);
var state_223748__$1 = (function (){var statearr_223760 = state_223748;
(statearr_223760[(7)] = inst_223712);

(statearr_223760[(9)] = inst_223711);

return statearr_223760;
})();
var statearr_223761_223792 = state_223748__$1;
(statearr_223761_223792[(2)] = null);

(statearr_223761_223792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (11))){
var inst_223712 = (state_223748[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_223748,(10),Object,null,(9));
var inst_223721 = chs__$1.call(null,inst_223712);
var inst_223722 = done.call(null,inst_223712);
var inst_223723 = cljs.core.async.take_BANG_.call(null,inst_223721,inst_223722);
var state_223748__$1 = state_223748;
var statearr_223762_223793 = state_223748__$1;
(statearr_223762_223793[(2)] = inst_223723);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_223748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (9))){
var inst_223712 = (state_223748[(7)]);
var inst_223725 = (state_223748[(2)]);
var inst_223726 = (inst_223712 + (1));
var inst_223712__$1 = inst_223726;
var state_223748__$1 = (function (){var statearr_223763 = state_223748;
(statearr_223763[(7)] = inst_223712__$1);

(statearr_223763[(10)] = inst_223725);

return statearr_223763;
})();
var statearr_223764_223794 = state_223748__$1;
(statearr_223764_223794[(2)] = null);

(statearr_223764_223794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (5))){
var inst_223732 = (state_223748[(2)]);
var state_223748__$1 = (function (){var statearr_223765 = state_223748;
(statearr_223765[(11)] = inst_223732);

return statearr_223765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_223748__$1,(12),dchan);
} else {
if((state_val_223749 === (14))){
var inst_223734 = (state_223748[(8)]);
var inst_223739 = cljs.core.apply.call(null,f,inst_223734);
var state_223748__$1 = state_223748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_223748__$1,(16),out,inst_223739);
} else {
if((state_val_223749 === (16))){
var inst_223741 = (state_223748[(2)]);
var state_223748__$1 = (function (){var statearr_223766 = state_223748;
(statearr_223766[(12)] = inst_223741);

return statearr_223766;
})();
var statearr_223767_223795 = state_223748__$1;
(statearr_223767_223795[(2)] = null);

(statearr_223767_223795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (10))){
var inst_223716 = (state_223748[(2)]);
var inst_223717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_223748__$1 = (function (){var statearr_223768 = state_223748;
(statearr_223768[(13)] = inst_223716);

return statearr_223768;
})();
var statearr_223769_223796 = state_223748__$1;
(statearr_223769_223796[(2)] = inst_223717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_223748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223749 === (8))){
var inst_223730 = (state_223748[(2)]);
var state_223748__$1 = state_223748;
var statearr_223770_223797 = state_223748__$1;
(statearr_223770_223797[(2)] = inst_223730);

(statearr_223770_223797[(1)] = (5));


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
});})(c__44084__auto___223782,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44061__auto__,c__44084__auto___223782,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_223774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_223774[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_223774[(1)] = (1));

return statearr_223774;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_223748){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_223748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e223775){if((e223775 instanceof Object)){
var ex__44065__auto__ = e223775;
var statearr_223776_223798 = state_223748;
(statearr_223776_223798[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_223748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e223775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__223799 = state_223748;
state_223748 = G__223799;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_223748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_223748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___223782,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44086__auto__ = (function (){var statearr_223777 = f__44085__auto__.call(null);
(statearr_223777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___223782);

return statearr_223777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___223782,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args223801 = [];
var len__40427__auto___223859 = arguments.length;
var i__40428__auto___223860 = (0);
while(true){
if((i__40428__auto___223860 < len__40427__auto___223859)){
args223801.push((arguments[i__40428__auto___223860]));

var G__223861 = (i__40428__auto___223860 + (1));
i__40428__auto___223860 = G__223861;
continue;
} else {
}
break;
}

var G__223803 = args223801.length;
switch (G__223803) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223801.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___223863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___223863,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___223863,out){
return (function (state_223835){
var state_val_223836 = (state_223835[(1)]);
if((state_val_223836 === (7))){
var inst_223814 = (state_223835[(7)]);
var inst_223815 = (state_223835[(8)]);
var inst_223814__$1 = (state_223835[(2)]);
var inst_223815__$1 = cljs.core.nth.call(null,inst_223814__$1,(0),null);
var inst_223816 = cljs.core.nth.call(null,inst_223814__$1,(1),null);
var inst_223817 = (inst_223815__$1 == null);
var state_223835__$1 = (function (){var statearr_223837 = state_223835;
(statearr_223837[(7)] = inst_223814__$1);

(statearr_223837[(9)] = inst_223816);

(statearr_223837[(8)] = inst_223815__$1);

return statearr_223837;
})();
if(cljs.core.truth_(inst_223817)){
var statearr_223838_223864 = state_223835__$1;
(statearr_223838_223864[(1)] = (8));

} else {
var statearr_223839_223865 = state_223835__$1;
(statearr_223839_223865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223836 === (1))){
var inst_223804 = cljs.core.vec.call(null,chs);
var inst_223805 = inst_223804;
var state_223835__$1 = (function (){var statearr_223840 = state_223835;
(statearr_223840[(10)] = inst_223805);

return statearr_223840;
})();
var statearr_223841_223866 = state_223835__$1;
(statearr_223841_223866[(2)] = null);

(statearr_223841_223866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223836 === (4))){
var inst_223805 = (state_223835[(10)]);
var state_223835__$1 = state_223835;
return cljs.core.async.ioc_alts_BANG_.call(null,state_223835__$1,(7),inst_223805);
} else {
if((state_val_223836 === (6))){
var inst_223831 = (state_223835[(2)]);
var state_223835__$1 = state_223835;
var statearr_223842_223867 = state_223835__$1;
(statearr_223842_223867[(2)] = inst_223831);

(statearr_223842_223867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223836 === (3))){
var inst_223833 = (state_223835[(2)]);
var state_223835__$1 = state_223835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_223835__$1,inst_223833);
} else {
if((state_val_223836 === (2))){
var inst_223805 = (state_223835[(10)]);
var inst_223807 = cljs.core.count.call(null,inst_223805);
var inst_223808 = (inst_223807 > (0));
var state_223835__$1 = state_223835;
if(cljs.core.truth_(inst_223808)){
var statearr_223844_223868 = state_223835__$1;
(statearr_223844_223868[(1)] = (4));

} else {
var statearr_223845_223869 = state_223835__$1;
(statearr_223845_223869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223836 === (11))){
var inst_223805 = (state_223835[(10)]);
var inst_223824 = (state_223835[(2)]);
var tmp223843 = inst_223805;
var inst_223805__$1 = tmp223843;
var state_223835__$1 = (function (){var statearr_223846 = state_223835;
(statearr_223846[(10)] = inst_223805__$1);

(statearr_223846[(11)] = inst_223824);

return statearr_223846;
})();
var statearr_223847_223870 = state_223835__$1;
(statearr_223847_223870[(2)] = null);

(statearr_223847_223870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223836 === (9))){
var inst_223815 = (state_223835[(8)]);
var state_223835__$1 = state_223835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_223835__$1,(11),out,inst_223815);
} else {
if((state_val_223836 === (5))){
var inst_223829 = cljs.core.async.close_BANG_.call(null,out);
var state_223835__$1 = state_223835;
var statearr_223848_223871 = state_223835__$1;
(statearr_223848_223871[(2)] = inst_223829);

(statearr_223848_223871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223836 === (10))){
var inst_223827 = (state_223835[(2)]);
var state_223835__$1 = state_223835;
var statearr_223849_223872 = state_223835__$1;
(statearr_223849_223872[(2)] = inst_223827);

(statearr_223849_223872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223836 === (8))){
var inst_223814 = (state_223835[(7)]);
var inst_223805 = (state_223835[(10)]);
var inst_223816 = (state_223835[(9)]);
var inst_223815 = (state_223835[(8)]);
var inst_223819 = (function (){var cs = inst_223805;
var vec__223810 = inst_223814;
var v = inst_223815;
var c = inst_223816;
return ((function (cs,vec__223810,v,c,inst_223814,inst_223805,inst_223816,inst_223815,state_val_223836,c__44084__auto___223863,out){
return (function (p1__223800_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__223800_SHARP_);
});
;})(cs,vec__223810,v,c,inst_223814,inst_223805,inst_223816,inst_223815,state_val_223836,c__44084__auto___223863,out))
})();
var inst_223820 = cljs.core.filterv.call(null,inst_223819,inst_223805);
var inst_223805__$1 = inst_223820;
var state_223835__$1 = (function (){var statearr_223850 = state_223835;
(statearr_223850[(10)] = inst_223805__$1);

return statearr_223850;
})();
var statearr_223851_223873 = state_223835__$1;
(statearr_223851_223873[(2)] = null);

(statearr_223851_223873[(1)] = (2));


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
});})(c__44084__auto___223863,out))
;
return ((function (switch__44061__auto__,c__44084__auto___223863,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_223855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_223855[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_223855[(1)] = (1));

return statearr_223855;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_223835){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_223835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e223856){if((e223856 instanceof Object)){
var ex__44065__auto__ = e223856;
var statearr_223857_223874 = state_223835;
(statearr_223857_223874[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_223835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e223856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__223875 = state_223835;
state_223835 = G__223875;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_223835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_223835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___223863,out))
})();
var state__44086__auto__ = (function (){var statearr_223858 = f__44085__auto__.call(null);
(statearr_223858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___223863);

return statearr_223858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___223863,out))
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
var args223876 = [];
var len__40427__auto___223925 = arguments.length;
var i__40428__auto___223926 = (0);
while(true){
if((i__40428__auto___223926 < len__40427__auto___223925)){
args223876.push((arguments[i__40428__auto___223926]));

var G__223927 = (i__40428__auto___223926 + (1));
i__40428__auto___223926 = G__223927;
continue;
} else {
}
break;
}

var G__223878 = args223876.length;
switch (G__223878) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223876.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___223929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___223929,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___223929,out){
return (function (state_223902){
var state_val_223903 = (state_223902[(1)]);
if((state_val_223903 === (7))){
var inst_223884 = (state_223902[(7)]);
var inst_223884__$1 = (state_223902[(2)]);
var inst_223885 = (inst_223884__$1 == null);
var inst_223886 = cljs.core.not.call(null,inst_223885);
var state_223902__$1 = (function (){var statearr_223904 = state_223902;
(statearr_223904[(7)] = inst_223884__$1);

return statearr_223904;
})();
if(inst_223886){
var statearr_223905_223930 = state_223902__$1;
(statearr_223905_223930[(1)] = (8));

} else {
var statearr_223906_223931 = state_223902__$1;
(statearr_223906_223931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223903 === (1))){
var inst_223879 = (0);
var state_223902__$1 = (function (){var statearr_223907 = state_223902;
(statearr_223907[(8)] = inst_223879);

return statearr_223907;
})();
var statearr_223908_223932 = state_223902__$1;
(statearr_223908_223932[(2)] = null);

(statearr_223908_223932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223903 === (4))){
var state_223902__$1 = state_223902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_223902__$1,(7),ch);
} else {
if((state_val_223903 === (6))){
var inst_223897 = (state_223902[(2)]);
var state_223902__$1 = state_223902;
var statearr_223909_223933 = state_223902__$1;
(statearr_223909_223933[(2)] = inst_223897);

(statearr_223909_223933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223903 === (3))){
var inst_223899 = (state_223902[(2)]);
var inst_223900 = cljs.core.async.close_BANG_.call(null,out);
var state_223902__$1 = (function (){var statearr_223910 = state_223902;
(statearr_223910[(9)] = inst_223899);

return statearr_223910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_223902__$1,inst_223900);
} else {
if((state_val_223903 === (2))){
var inst_223879 = (state_223902[(8)]);
var inst_223881 = (inst_223879 < n);
var state_223902__$1 = state_223902;
if(cljs.core.truth_(inst_223881)){
var statearr_223911_223934 = state_223902__$1;
(statearr_223911_223934[(1)] = (4));

} else {
var statearr_223912_223935 = state_223902__$1;
(statearr_223912_223935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223903 === (11))){
var inst_223879 = (state_223902[(8)]);
var inst_223889 = (state_223902[(2)]);
var inst_223890 = (inst_223879 + (1));
var inst_223879__$1 = inst_223890;
var state_223902__$1 = (function (){var statearr_223913 = state_223902;
(statearr_223913[(8)] = inst_223879__$1);

(statearr_223913[(10)] = inst_223889);

return statearr_223913;
})();
var statearr_223914_223936 = state_223902__$1;
(statearr_223914_223936[(2)] = null);

(statearr_223914_223936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223903 === (9))){
var state_223902__$1 = state_223902;
var statearr_223915_223937 = state_223902__$1;
(statearr_223915_223937[(2)] = null);

(statearr_223915_223937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223903 === (5))){
var state_223902__$1 = state_223902;
var statearr_223916_223938 = state_223902__$1;
(statearr_223916_223938[(2)] = null);

(statearr_223916_223938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223903 === (10))){
var inst_223894 = (state_223902[(2)]);
var state_223902__$1 = state_223902;
var statearr_223917_223939 = state_223902__$1;
(statearr_223917_223939[(2)] = inst_223894);

(statearr_223917_223939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223903 === (8))){
var inst_223884 = (state_223902[(7)]);
var state_223902__$1 = state_223902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_223902__$1,(11),out,inst_223884);
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
});})(c__44084__auto___223929,out))
;
return ((function (switch__44061__auto__,c__44084__auto___223929,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_223921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_223921[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_223921[(1)] = (1));

return statearr_223921;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_223902){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_223902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e223922){if((e223922 instanceof Object)){
var ex__44065__auto__ = e223922;
var statearr_223923_223940 = state_223902;
(statearr_223923_223940[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_223902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e223922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__223941 = state_223902;
state_223902 = G__223941;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_223902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_223902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___223929,out))
})();
var state__44086__auto__ = (function (){var statearr_223924 = f__44085__auto__.call(null);
(statearr_223924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___223929);

return statearr_223924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___223929,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async223949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async223949 = (function (f,ch,meta223950){
this.f = f;
this.ch = ch;
this.meta223950 = meta223950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_223951,meta223950__$1){
var self__ = this;
var _223951__$1 = this;
return (new cljs.core.async.t_cljs$core$async223949(self__.f,self__.ch,meta223950__$1));
});


cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_223951){
var self__ = this;
var _223951__$1 = this;
return self__.meta223950;
});


cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async223952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async223952 = (function (f,ch,meta223950,_,fn1,meta223953){
this.f = f;
this.ch = ch;
this.meta223950 = meta223950;
this._ = _;
this.fn1 = fn1;
this.meta223953 = meta223953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async223952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_223954,meta223953__$1){
var self__ = this;
var _223954__$1 = this;
return (new cljs.core.async.t_cljs$core$async223952(self__.f,self__.ch,self__.meta223950,self__._,self__.fn1,meta223953__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async223952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_223954){
var self__ = this;
var _223954__$1 = this;
return self__.meta223953;
});})(___$1))
;


cljs.core.async.t_cljs$core$async223952.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async223952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async223952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__223942_SHARP_){
return f1.call(null,(((p1__223942_SHARP_ == null))?null:self__.f.call(null,p1__223942_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async223952.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta223950","meta223950",-181795311,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async223949","cljs.core.async/t_cljs$core$async223949",333841115,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta223953","meta223953",-2023903214,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async223952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async223952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async223952";

cljs.core.async.t_cljs$core$async223952.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async223952");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async223952 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async223952(f__$1,ch__$1,meta223950__$1,___$2,fn1__$1,meta223953){
return (new cljs.core.async.t_cljs$core$async223952(f__$1,ch__$1,meta223950__$1,___$2,fn1__$1,meta223953));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async223952(self__.f,self__.ch,self__.meta223950,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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


cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async223949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta223950","meta223950",-181795311,null)], null);
});

cljs.core.async.t_cljs$core$async223949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async223949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async223949";

cljs.core.async.t_cljs$core$async223949.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async223949");
});

cljs.core.async.__GT_t_cljs$core$async223949 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async223949(f__$1,ch__$1,meta223950){
return (new cljs.core.async.t_cljs$core$async223949(f__$1,ch__$1,meta223950));
});

}

return (new cljs.core.async.t_cljs$core$async223949(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async223958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async223958 = (function (f,ch,meta223959){
this.f = f;
this.ch = ch;
this.meta223959 = meta223959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async223958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_223960,meta223959__$1){
var self__ = this;
var _223960__$1 = this;
return (new cljs.core.async.t_cljs$core$async223958(self__.f,self__.ch,meta223959__$1));
});


cljs.core.async.t_cljs$core$async223958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_223960){
var self__ = this;
var _223960__$1 = this;
return self__.meta223959;
});


cljs.core.async.t_cljs$core$async223958.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async223958.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async223958.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async223958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta223959","meta223959",1760776431,null)], null);
});

cljs.core.async.t_cljs$core$async223958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async223958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async223958";

cljs.core.async.t_cljs$core$async223958.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async223958");
});

cljs.core.async.__GT_t_cljs$core$async223958 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async223958(f__$1,ch__$1,meta223959){
return (new cljs.core.async.t_cljs$core$async223958(f__$1,ch__$1,meta223959));
});

}

return (new cljs.core.async.t_cljs$core$async223958(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async223964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async223964 = (function (p,ch,meta223965){
this.p = p;
this.ch = ch;
this.meta223965 = meta223965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_223966,meta223965__$1){
var self__ = this;
var _223966__$1 = this;
return (new cljs.core.async.t_cljs$core$async223964(self__.p,self__.ch,meta223965__$1));
});


cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_223966){
var self__ = this;
var _223966__$1 = this;
return self__.meta223965;
});


cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async223964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async223964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta223965","meta223965",974152990,null)], null);
});

cljs.core.async.t_cljs$core$async223964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async223964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async223964";

cljs.core.async.t_cljs$core$async223964.cljs$lang$ctorPrWriter = (function (this__39863__auto__,writer__39864__auto__,opt__39865__auto__){
return cljs.core._write.call(null,writer__39864__auto__,"cljs.core.async/t_cljs$core$async223964");
});

cljs.core.async.__GT_t_cljs$core$async223964 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async223964(p__$1,ch__$1,meta223965){
return (new cljs.core.async.t_cljs$core$async223964(p__$1,ch__$1,meta223965));
});

}

return (new cljs.core.async.t_cljs$core$async223964(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args223967 = [];
var len__40427__auto___224011 = arguments.length;
var i__40428__auto___224012 = (0);
while(true){
if((i__40428__auto___224012 < len__40427__auto___224011)){
args223967.push((arguments[i__40428__auto___224012]));

var G__224013 = (i__40428__auto___224012 + (1));
i__40428__auto___224012 = G__224013;
continue;
} else {
}
break;
}

var G__223969 = args223967.length;
switch (G__223969) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args223967.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___224015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___224015,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___224015,out){
return (function (state_223990){
var state_val_223991 = (state_223990[(1)]);
if((state_val_223991 === (7))){
var inst_223986 = (state_223990[(2)]);
var state_223990__$1 = state_223990;
var statearr_223992_224016 = state_223990__$1;
(statearr_223992_224016[(2)] = inst_223986);

(statearr_223992_224016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223991 === (1))){
var state_223990__$1 = state_223990;
var statearr_223993_224017 = state_223990__$1;
(statearr_223993_224017[(2)] = null);

(statearr_223993_224017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223991 === (4))){
var inst_223972 = (state_223990[(7)]);
var inst_223972__$1 = (state_223990[(2)]);
var inst_223973 = (inst_223972__$1 == null);
var state_223990__$1 = (function (){var statearr_223994 = state_223990;
(statearr_223994[(7)] = inst_223972__$1);

return statearr_223994;
})();
if(cljs.core.truth_(inst_223973)){
var statearr_223995_224018 = state_223990__$1;
(statearr_223995_224018[(1)] = (5));

} else {
var statearr_223996_224019 = state_223990__$1;
(statearr_223996_224019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223991 === (6))){
var inst_223972 = (state_223990[(7)]);
var inst_223977 = p.call(null,inst_223972);
var state_223990__$1 = state_223990;
if(cljs.core.truth_(inst_223977)){
var statearr_223997_224020 = state_223990__$1;
(statearr_223997_224020[(1)] = (8));

} else {
var statearr_223998_224021 = state_223990__$1;
(statearr_223998_224021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223991 === (3))){
var inst_223988 = (state_223990[(2)]);
var state_223990__$1 = state_223990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_223990__$1,inst_223988);
} else {
if((state_val_223991 === (2))){
var state_223990__$1 = state_223990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_223990__$1,(4),ch);
} else {
if((state_val_223991 === (11))){
var inst_223980 = (state_223990[(2)]);
var state_223990__$1 = state_223990;
var statearr_223999_224022 = state_223990__$1;
(statearr_223999_224022[(2)] = inst_223980);

(statearr_223999_224022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223991 === (9))){
var state_223990__$1 = state_223990;
var statearr_224000_224023 = state_223990__$1;
(statearr_224000_224023[(2)] = null);

(statearr_224000_224023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223991 === (5))){
var inst_223975 = cljs.core.async.close_BANG_.call(null,out);
var state_223990__$1 = state_223990;
var statearr_224001_224024 = state_223990__$1;
(statearr_224001_224024[(2)] = inst_223975);

(statearr_224001_224024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223991 === (10))){
var inst_223983 = (state_223990[(2)]);
var state_223990__$1 = (function (){var statearr_224002 = state_223990;
(statearr_224002[(8)] = inst_223983);

return statearr_224002;
})();
var statearr_224003_224025 = state_223990__$1;
(statearr_224003_224025[(2)] = null);

(statearr_224003_224025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_223991 === (8))){
var inst_223972 = (state_223990[(7)]);
var state_223990__$1 = state_223990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_223990__$1,(11),out,inst_223972);
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
});})(c__44084__auto___224015,out))
;
return ((function (switch__44061__auto__,c__44084__auto___224015,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_224007 = [null,null,null,null,null,null,null,null,null];
(statearr_224007[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_224007[(1)] = (1));

return statearr_224007;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_223990){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_223990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e224008){if((e224008 instanceof Object)){
var ex__44065__auto__ = e224008;
var statearr_224009_224026 = state_223990;
(statearr_224009_224026[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_223990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e224008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__224027 = state_223990;
state_223990 = G__224027;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_223990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_223990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___224015,out))
})();
var state__44086__auto__ = (function (){var statearr_224010 = f__44085__auto__.call(null);
(statearr_224010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___224015);

return statearr_224010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___224015,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args224028 = [];
var len__40427__auto___224031 = arguments.length;
var i__40428__auto___224032 = (0);
while(true){
if((i__40428__auto___224032 < len__40427__auto___224031)){
args224028.push((arguments[i__40428__auto___224032]));

var G__224033 = (i__40428__auto___224032 + (1));
i__40428__auto___224032 = G__224033;
continue;
} else {
}
break;
}

var G__224030 = args224028.length;
switch (G__224030) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args224028.length)].join('')));

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
return (function (state_224200){
var state_val_224201 = (state_224200[(1)]);
if((state_val_224201 === (7))){
var inst_224196 = (state_224200[(2)]);
var state_224200__$1 = state_224200;
var statearr_224202_224243 = state_224200__$1;
(statearr_224202_224243[(2)] = inst_224196);

(statearr_224202_224243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (20))){
var inst_224166 = (state_224200[(7)]);
var inst_224177 = (state_224200[(2)]);
var inst_224178 = cljs.core.next.call(null,inst_224166);
var inst_224152 = inst_224178;
var inst_224153 = null;
var inst_224154 = (0);
var inst_224155 = (0);
var state_224200__$1 = (function (){var statearr_224203 = state_224200;
(statearr_224203[(8)] = inst_224177);

(statearr_224203[(9)] = inst_224154);

(statearr_224203[(10)] = inst_224152);

(statearr_224203[(11)] = inst_224155);

(statearr_224203[(12)] = inst_224153);

return statearr_224203;
})();
var statearr_224204_224244 = state_224200__$1;
(statearr_224204_224244[(2)] = null);

(statearr_224204_224244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (1))){
var state_224200__$1 = state_224200;
var statearr_224205_224245 = state_224200__$1;
(statearr_224205_224245[(2)] = null);

(statearr_224205_224245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (4))){
var inst_224141 = (state_224200[(13)]);
var inst_224141__$1 = (state_224200[(2)]);
var inst_224142 = (inst_224141__$1 == null);
var state_224200__$1 = (function (){var statearr_224206 = state_224200;
(statearr_224206[(13)] = inst_224141__$1);

return statearr_224206;
})();
if(cljs.core.truth_(inst_224142)){
var statearr_224207_224246 = state_224200__$1;
(statearr_224207_224246[(1)] = (5));

} else {
var statearr_224208_224247 = state_224200__$1;
(statearr_224208_224247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (15))){
var state_224200__$1 = state_224200;
var statearr_224212_224248 = state_224200__$1;
(statearr_224212_224248[(2)] = null);

(statearr_224212_224248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (21))){
var state_224200__$1 = state_224200;
var statearr_224213_224249 = state_224200__$1;
(statearr_224213_224249[(2)] = null);

(statearr_224213_224249[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (13))){
var inst_224154 = (state_224200[(9)]);
var inst_224152 = (state_224200[(10)]);
var inst_224155 = (state_224200[(11)]);
var inst_224153 = (state_224200[(12)]);
var inst_224162 = (state_224200[(2)]);
var inst_224163 = (inst_224155 + (1));
var tmp224209 = inst_224154;
var tmp224210 = inst_224152;
var tmp224211 = inst_224153;
var inst_224152__$1 = tmp224210;
var inst_224153__$1 = tmp224211;
var inst_224154__$1 = tmp224209;
var inst_224155__$1 = inst_224163;
var state_224200__$1 = (function (){var statearr_224214 = state_224200;
(statearr_224214[(14)] = inst_224162);

(statearr_224214[(9)] = inst_224154__$1);

(statearr_224214[(10)] = inst_224152__$1);

(statearr_224214[(11)] = inst_224155__$1);

(statearr_224214[(12)] = inst_224153__$1);

return statearr_224214;
})();
var statearr_224215_224250 = state_224200__$1;
(statearr_224215_224250[(2)] = null);

(statearr_224215_224250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (22))){
var state_224200__$1 = state_224200;
var statearr_224216_224251 = state_224200__$1;
(statearr_224216_224251[(2)] = null);

(statearr_224216_224251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (6))){
var inst_224141 = (state_224200[(13)]);
var inst_224150 = f.call(null,inst_224141);
var inst_224151 = cljs.core.seq.call(null,inst_224150);
var inst_224152 = inst_224151;
var inst_224153 = null;
var inst_224154 = (0);
var inst_224155 = (0);
var state_224200__$1 = (function (){var statearr_224217 = state_224200;
(statearr_224217[(9)] = inst_224154);

(statearr_224217[(10)] = inst_224152);

(statearr_224217[(11)] = inst_224155);

(statearr_224217[(12)] = inst_224153);

return statearr_224217;
})();
var statearr_224218_224252 = state_224200__$1;
(statearr_224218_224252[(2)] = null);

(statearr_224218_224252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (17))){
var inst_224166 = (state_224200[(7)]);
var inst_224170 = cljs.core.chunk_first.call(null,inst_224166);
var inst_224171 = cljs.core.chunk_rest.call(null,inst_224166);
var inst_224172 = cljs.core.count.call(null,inst_224170);
var inst_224152 = inst_224171;
var inst_224153 = inst_224170;
var inst_224154 = inst_224172;
var inst_224155 = (0);
var state_224200__$1 = (function (){var statearr_224219 = state_224200;
(statearr_224219[(9)] = inst_224154);

(statearr_224219[(10)] = inst_224152);

(statearr_224219[(11)] = inst_224155);

(statearr_224219[(12)] = inst_224153);

return statearr_224219;
})();
var statearr_224220_224253 = state_224200__$1;
(statearr_224220_224253[(2)] = null);

(statearr_224220_224253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (3))){
var inst_224198 = (state_224200[(2)]);
var state_224200__$1 = state_224200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_224200__$1,inst_224198);
} else {
if((state_val_224201 === (12))){
var inst_224186 = (state_224200[(2)]);
var state_224200__$1 = state_224200;
var statearr_224221_224254 = state_224200__$1;
(statearr_224221_224254[(2)] = inst_224186);

(statearr_224221_224254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (2))){
var state_224200__$1 = state_224200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_224200__$1,(4),in$);
} else {
if((state_val_224201 === (23))){
var inst_224194 = (state_224200[(2)]);
var state_224200__$1 = state_224200;
var statearr_224222_224255 = state_224200__$1;
(statearr_224222_224255[(2)] = inst_224194);

(statearr_224222_224255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (19))){
var inst_224181 = (state_224200[(2)]);
var state_224200__$1 = state_224200;
var statearr_224223_224256 = state_224200__$1;
(statearr_224223_224256[(2)] = inst_224181);

(statearr_224223_224256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (11))){
var inst_224166 = (state_224200[(7)]);
var inst_224152 = (state_224200[(10)]);
var inst_224166__$1 = cljs.core.seq.call(null,inst_224152);
var state_224200__$1 = (function (){var statearr_224224 = state_224200;
(statearr_224224[(7)] = inst_224166__$1);

return statearr_224224;
})();
if(inst_224166__$1){
var statearr_224225_224257 = state_224200__$1;
(statearr_224225_224257[(1)] = (14));

} else {
var statearr_224226_224258 = state_224200__$1;
(statearr_224226_224258[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (9))){
var inst_224188 = (state_224200[(2)]);
var inst_224189 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_224200__$1 = (function (){var statearr_224227 = state_224200;
(statearr_224227[(15)] = inst_224188);

return statearr_224227;
})();
if(cljs.core.truth_(inst_224189)){
var statearr_224228_224259 = state_224200__$1;
(statearr_224228_224259[(1)] = (21));

} else {
var statearr_224229_224260 = state_224200__$1;
(statearr_224229_224260[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (5))){
var inst_224144 = cljs.core.async.close_BANG_.call(null,out);
var state_224200__$1 = state_224200;
var statearr_224230_224261 = state_224200__$1;
(statearr_224230_224261[(2)] = inst_224144);

(statearr_224230_224261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (14))){
var inst_224166 = (state_224200[(7)]);
var inst_224168 = cljs.core.chunked_seq_QMARK_.call(null,inst_224166);
var state_224200__$1 = state_224200;
if(inst_224168){
var statearr_224231_224262 = state_224200__$1;
(statearr_224231_224262[(1)] = (17));

} else {
var statearr_224232_224263 = state_224200__$1;
(statearr_224232_224263[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (16))){
var inst_224184 = (state_224200[(2)]);
var state_224200__$1 = state_224200;
var statearr_224233_224264 = state_224200__$1;
(statearr_224233_224264[(2)] = inst_224184);

(statearr_224233_224264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224201 === (10))){
var inst_224155 = (state_224200[(11)]);
var inst_224153 = (state_224200[(12)]);
var inst_224160 = cljs.core._nth.call(null,inst_224153,inst_224155);
var state_224200__$1 = state_224200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_224200__$1,(13),out,inst_224160);
} else {
if((state_val_224201 === (18))){
var inst_224166 = (state_224200[(7)]);
var inst_224175 = cljs.core.first.call(null,inst_224166);
var state_224200__$1 = state_224200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_224200__$1,(20),out,inst_224175);
} else {
if((state_val_224201 === (8))){
var inst_224154 = (state_224200[(9)]);
var inst_224155 = (state_224200[(11)]);
var inst_224157 = (inst_224155 < inst_224154);
var inst_224158 = inst_224157;
var state_224200__$1 = state_224200;
if(cljs.core.truth_(inst_224158)){
var statearr_224234_224265 = state_224200__$1;
(statearr_224234_224265[(1)] = (10));

} else {
var statearr_224235_224266 = state_224200__$1;
(statearr_224235_224266[(1)] = (11));

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
var statearr_224239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_224239[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__);

(statearr_224239[(1)] = (1));

return statearr_224239;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1 = (function (state_224200){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_224200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e224240){if((e224240 instanceof Object)){
var ex__44065__auto__ = e224240;
var statearr_224241_224267 = state_224200;
(statearr_224241_224267[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_224200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e224240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__224268 = state_224200;
state_224200 = G__224268;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__ = function(state_224200){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1.call(this,state_224200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44062__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto__))
})();
var state__44086__auto__ = (function (){var statearr_224242 = f__44085__auto__.call(null);
(statearr_224242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto__);

return statearr_224242;
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
var args224269 = [];
var len__40427__auto___224272 = arguments.length;
var i__40428__auto___224273 = (0);
while(true){
if((i__40428__auto___224273 < len__40427__auto___224272)){
args224269.push((arguments[i__40428__auto___224273]));

var G__224274 = (i__40428__auto___224273 + (1));
i__40428__auto___224273 = G__224274;
continue;
} else {
}
break;
}

var G__224271 = args224269.length;
switch (G__224271) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args224269.length)].join('')));

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
var args224276 = [];
var len__40427__auto___224279 = arguments.length;
var i__40428__auto___224280 = (0);
while(true){
if((i__40428__auto___224280 < len__40427__auto___224279)){
args224276.push((arguments[i__40428__auto___224280]));

var G__224281 = (i__40428__auto___224280 + (1));
i__40428__auto___224280 = G__224281;
continue;
} else {
}
break;
}

var G__224278 = args224276.length;
switch (G__224278) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args224276.length)].join('')));

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
var args224283 = [];
var len__40427__auto___224334 = arguments.length;
var i__40428__auto___224335 = (0);
while(true){
if((i__40428__auto___224335 < len__40427__auto___224334)){
args224283.push((arguments[i__40428__auto___224335]));

var G__224336 = (i__40428__auto___224335 + (1));
i__40428__auto___224335 = G__224336;
continue;
} else {
}
break;
}

var G__224285 = args224283.length;
switch (G__224285) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args224283.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___224338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___224338,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___224338,out){
return (function (state_224309){
var state_val_224310 = (state_224309[(1)]);
if((state_val_224310 === (7))){
var inst_224304 = (state_224309[(2)]);
var state_224309__$1 = state_224309;
var statearr_224311_224339 = state_224309__$1;
(statearr_224311_224339[(2)] = inst_224304);

(statearr_224311_224339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224310 === (1))){
var inst_224286 = null;
var state_224309__$1 = (function (){var statearr_224312 = state_224309;
(statearr_224312[(7)] = inst_224286);

return statearr_224312;
})();
var statearr_224313_224340 = state_224309__$1;
(statearr_224313_224340[(2)] = null);

(statearr_224313_224340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224310 === (4))){
var inst_224289 = (state_224309[(8)]);
var inst_224289__$1 = (state_224309[(2)]);
var inst_224290 = (inst_224289__$1 == null);
var inst_224291 = cljs.core.not.call(null,inst_224290);
var state_224309__$1 = (function (){var statearr_224314 = state_224309;
(statearr_224314[(8)] = inst_224289__$1);

return statearr_224314;
})();
if(inst_224291){
var statearr_224315_224341 = state_224309__$1;
(statearr_224315_224341[(1)] = (5));

} else {
var statearr_224316_224342 = state_224309__$1;
(statearr_224316_224342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224310 === (6))){
var state_224309__$1 = state_224309;
var statearr_224317_224343 = state_224309__$1;
(statearr_224317_224343[(2)] = null);

(statearr_224317_224343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224310 === (3))){
var inst_224306 = (state_224309[(2)]);
var inst_224307 = cljs.core.async.close_BANG_.call(null,out);
var state_224309__$1 = (function (){var statearr_224318 = state_224309;
(statearr_224318[(9)] = inst_224306);

return statearr_224318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_224309__$1,inst_224307);
} else {
if((state_val_224310 === (2))){
var state_224309__$1 = state_224309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_224309__$1,(4),ch);
} else {
if((state_val_224310 === (11))){
var inst_224289 = (state_224309[(8)]);
var inst_224298 = (state_224309[(2)]);
var inst_224286 = inst_224289;
var state_224309__$1 = (function (){var statearr_224319 = state_224309;
(statearr_224319[(7)] = inst_224286);

(statearr_224319[(10)] = inst_224298);

return statearr_224319;
})();
var statearr_224320_224344 = state_224309__$1;
(statearr_224320_224344[(2)] = null);

(statearr_224320_224344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224310 === (9))){
var inst_224289 = (state_224309[(8)]);
var state_224309__$1 = state_224309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_224309__$1,(11),out,inst_224289);
} else {
if((state_val_224310 === (5))){
var inst_224286 = (state_224309[(7)]);
var inst_224289 = (state_224309[(8)]);
var inst_224293 = cljs.core._EQ_.call(null,inst_224289,inst_224286);
var state_224309__$1 = state_224309;
if(inst_224293){
var statearr_224322_224345 = state_224309__$1;
(statearr_224322_224345[(1)] = (8));

} else {
var statearr_224323_224346 = state_224309__$1;
(statearr_224323_224346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224310 === (10))){
var inst_224301 = (state_224309[(2)]);
var state_224309__$1 = state_224309;
var statearr_224324_224347 = state_224309__$1;
(statearr_224324_224347[(2)] = inst_224301);

(statearr_224324_224347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224310 === (8))){
var inst_224286 = (state_224309[(7)]);
var tmp224321 = inst_224286;
var inst_224286__$1 = tmp224321;
var state_224309__$1 = (function (){var statearr_224325 = state_224309;
(statearr_224325[(7)] = inst_224286__$1);

return statearr_224325;
})();
var statearr_224326_224348 = state_224309__$1;
(statearr_224326_224348[(2)] = null);

(statearr_224326_224348[(1)] = (2));


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
});})(c__44084__auto___224338,out))
;
return ((function (switch__44061__auto__,c__44084__auto___224338,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_224330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_224330[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_224330[(1)] = (1));

return statearr_224330;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_224309){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_224309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e224331){if((e224331 instanceof Object)){
var ex__44065__auto__ = e224331;
var statearr_224332_224349 = state_224309;
(statearr_224332_224349[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_224309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e224331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__224350 = state_224309;
state_224309 = G__224350;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_224309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_224309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___224338,out))
})();
var state__44086__auto__ = (function (){var statearr_224333 = f__44085__auto__.call(null);
(statearr_224333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___224338);

return statearr_224333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___224338,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args224351 = [];
var len__40427__auto___224421 = arguments.length;
var i__40428__auto___224422 = (0);
while(true){
if((i__40428__auto___224422 < len__40427__auto___224421)){
args224351.push((arguments[i__40428__auto___224422]));

var G__224423 = (i__40428__auto___224422 + (1));
i__40428__auto___224422 = G__224423;
continue;
} else {
}
break;
}

var G__224353 = args224351.length;
switch (G__224353) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args224351.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___224425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___224425,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___224425,out){
return (function (state_224391){
var state_val_224392 = (state_224391[(1)]);
if((state_val_224392 === (7))){
var inst_224387 = (state_224391[(2)]);
var state_224391__$1 = state_224391;
var statearr_224393_224426 = state_224391__$1;
(statearr_224393_224426[(2)] = inst_224387);

(statearr_224393_224426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (1))){
var inst_224354 = (new Array(n));
var inst_224355 = inst_224354;
var inst_224356 = (0);
var state_224391__$1 = (function (){var statearr_224394 = state_224391;
(statearr_224394[(7)] = inst_224356);

(statearr_224394[(8)] = inst_224355);

return statearr_224394;
})();
var statearr_224395_224427 = state_224391__$1;
(statearr_224395_224427[(2)] = null);

(statearr_224395_224427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (4))){
var inst_224359 = (state_224391[(9)]);
var inst_224359__$1 = (state_224391[(2)]);
var inst_224360 = (inst_224359__$1 == null);
var inst_224361 = cljs.core.not.call(null,inst_224360);
var state_224391__$1 = (function (){var statearr_224396 = state_224391;
(statearr_224396[(9)] = inst_224359__$1);

return statearr_224396;
})();
if(inst_224361){
var statearr_224397_224428 = state_224391__$1;
(statearr_224397_224428[(1)] = (5));

} else {
var statearr_224398_224429 = state_224391__$1;
(statearr_224398_224429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (15))){
var inst_224381 = (state_224391[(2)]);
var state_224391__$1 = state_224391;
var statearr_224399_224430 = state_224391__$1;
(statearr_224399_224430[(2)] = inst_224381);

(statearr_224399_224430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (13))){
var state_224391__$1 = state_224391;
var statearr_224400_224431 = state_224391__$1;
(statearr_224400_224431[(2)] = null);

(statearr_224400_224431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (6))){
var inst_224356 = (state_224391[(7)]);
var inst_224377 = (inst_224356 > (0));
var state_224391__$1 = state_224391;
if(cljs.core.truth_(inst_224377)){
var statearr_224401_224432 = state_224391__$1;
(statearr_224401_224432[(1)] = (12));

} else {
var statearr_224402_224433 = state_224391__$1;
(statearr_224402_224433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (3))){
var inst_224389 = (state_224391[(2)]);
var state_224391__$1 = state_224391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_224391__$1,inst_224389);
} else {
if((state_val_224392 === (12))){
var inst_224355 = (state_224391[(8)]);
var inst_224379 = cljs.core.vec.call(null,inst_224355);
var state_224391__$1 = state_224391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_224391__$1,(15),out,inst_224379);
} else {
if((state_val_224392 === (2))){
var state_224391__$1 = state_224391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_224391__$1,(4),ch);
} else {
if((state_val_224392 === (11))){
var inst_224371 = (state_224391[(2)]);
var inst_224372 = (new Array(n));
var inst_224355 = inst_224372;
var inst_224356 = (0);
var state_224391__$1 = (function (){var statearr_224403 = state_224391;
(statearr_224403[(7)] = inst_224356);

(statearr_224403[(8)] = inst_224355);

(statearr_224403[(10)] = inst_224371);

return statearr_224403;
})();
var statearr_224404_224434 = state_224391__$1;
(statearr_224404_224434[(2)] = null);

(statearr_224404_224434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (9))){
var inst_224355 = (state_224391[(8)]);
var inst_224369 = cljs.core.vec.call(null,inst_224355);
var state_224391__$1 = state_224391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_224391__$1,(11),out,inst_224369);
} else {
if((state_val_224392 === (5))){
var inst_224356 = (state_224391[(7)]);
var inst_224355 = (state_224391[(8)]);
var inst_224359 = (state_224391[(9)]);
var inst_224364 = (state_224391[(11)]);
var inst_224363 = (inst_224355[inst_224356] = inst_224359);
var inst_224364__$1 = (inst_224356 + (1));
var inst_224365 = (inst_224364__$1 < n);
var state_224391__$1 = (function (){var statearr_224405 = state_224391;
(statearr_224405[(11)] = inst_224364__$1);

(statearr_224405[(12)] = inst_224363);

return statearr_224405;
})();
if(cljs.core.truth_(inst_224365)){
var statearr_224406_224435 = state_224391__$1;
(statearr_224406_224435[(1)] = (8));

} else {
var statearr_224407_224436 = state_224391__$1;
(statearr_224407_224436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (14))){
var inst_224384 = (state_224391[(2)]);
var inst_224385 = cljs.core.async.close_BANG_.call(null,out);
var state_224391__$1 = (function (){var statearr_224409 = state_224391;
(statearr_224409[(13)] = inst_224384);

return statearr_224409;
})();
var statearr_224410_224437 = state_224391__$1;
(statearr_224410_224437[(2)] = inst_224385);

(statearr_224410_224437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (10))){
var inst_224375 = (state_224391[(2)]);
var state_224391__$1 = state_224391;
var statearr_224411_224438 = state_224391__$1;
(statearr_224411_224438[(2)] = inst_224375);

(statearr_224411_224438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224392 === (8))){
var inst_224355 = (state_224391[(8)]);
var inst_224364 = (state_224391[(11)]);
var tmp224408 = inst_224355;
var inst_224355__$1 = tmp224408;
var inst_224356 = inst_224364;
var state_224391__$1 = (function (){var statearr_224412 = state_224391;
(statearr_224412[(7)] = inst_224356);

(statearr_224412[(8)] = inst_224355__$1);

return statearr_224412;
})();
var statearr_224413_224439 = state_224391__$1;
(statearr_224413_224439[(2)] = null);

(statearr_224413_224439[(1)] = (2));


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
});})(c__44084__auto___224425,out))
;
return ((function (switch__44061__auto__,c__44084__auto___224425,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_224417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_224417[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_224417[(1)] = (1));

return statearr_224417;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_224391){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_224391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e224418){if((e224418 instanceof Object)){
var ex__44065__auto__ = e224418;
var statearr_224419_224440 = state_224391;
(statearr_224419_224440[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_224391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e224418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__224441 = state_224391;
state_224391 = G__224441;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_224391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_224391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___224425,out))
})();
var state__44086__auto__ = (function (){var statearr_224420 = f__44085__auto__.call(null);
(statearr_224420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___224425);

return statearr_224420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___224425,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args224442 = [];
var len__40427__auto___224516 = arguments.length;
var i__40428__auto___224517 = (0);
while(true){
if((i__40428__auto___224517 < len__40427__auto___224516)){
args224442.push((arguments[i__40428__auto___224517]));

var G__224518 = (i__40428__auto___224517 + (1));
i__40428__auto___224517 = G__224518;
continue;
} else {
}
break;
}

var G__224444 = args224442.length;
switch (G__224444) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args224442.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44084__auto___224520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44084__auto___224520,out){
return (function (){
var f__44085__auto__ = (function (){var switch__44061__auto__ = ((function (c__44084__auto___224520,out){
return (function (state_224486){
var state_val_224487 = (state_224486[(1)]);
if((state_val_224487 === (7))){
var inst_224482 = (state_224486[(2)]);
var state_224486__$1 = state_224486;
var statearr_224488_224521 = state_224486__$1;
(statearr_224488_224521[(2)] = inst_224482);

(statearr_224488_224521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (1))){
var inst_224445 = [];
var inst_224446 = inst_224445;
var inst_224447 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_224486__$1 = (function (){var statearr_224489 = state_224486;
(statearr_224489[(7)] = inst_224446);

(statearr_224489[(8)] = inst_224447);

return statearr_224489;
})();
var statearr_224490_224522 = state_224486__$1;
(statearr_224490_224522[(2)] = null);

(statearr_224490_224522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (4))){
var inst_224450 = (state_224486[(9)]);
var inst_224450__$1 = (state_224486[(2)]);
var inst_224451 = (inst_224450__$1 == null);
var inst_224452 = cljs.core.not.call(null,inst_224451);
var state_224486__$1 = (function (){var statearr_224491 = state_224486;
(statearr_224491[(9)] = inst_224450__$1);

return statearr_224491;
})();
if(inst_224452){
var statearr_224492_224523 = state_224486__$1;
(statearr_224492_224523[(1)] = (5));

} else {
var statearr_224493_224524 = state_224486__$1;
(statearr_224493_224524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (15))){
var inst_224476 = (state_224486[(2)]);
var state_224486__$1 = state_224486;
var statearr_224494_224525 = state_224486__$1;
(statearr_224494_224525[(2)] = inst_224476);

(statearr_224494_224525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (13))){
var state_224486__$1 = state_224486;
var statearr_224495_224526 = state_224486__$1;
(statearr_224495_224526[(2)] = null);

(statearr_224495_224526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (6))){
var inst_224446 = (state_224486[(7)]);
var inst_224471 = inst_224446.length;
var inst_224472 = (inst_224471 > (0));
var state_224486__$1 = state_224486;
if(cljs.core.truth_(inst_224472)){
var statearr_224496_224527 = state_224486__$1;
(statearr_224496_224527[(1)] = (12));

} else {
var statearr_224497_224528 = state_224486__$1;
(statearr_224497_224528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (3))){
var inst_224484 = (state_224486[(2)]);
var state_224486__$1 = state_224486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_224486__$1,inst_224484);
} else {
if((state_val_224487 === (12))){
var inst_224446 = (state_224486[(7)]);
var inst_224474 = cljs.core.vec.call(null,inst_224446);
var state_224486__$1 = state_224486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_224486__$1,(15),out,inst_224474);
} else {
if((state_val_224487 === (2))){
var state_224486__$1 = state_224486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_224486__$1,(4),ch);
} else {
if((state_val_224487 === (11))){
var inst_224454 = (state_224486[(10)]);
var inst_224450 = (state_224486[(9)]);
var inst_224464 = (state_224486[(2)]);
var inst_224465 = [];
var inst_224466 = inst_224465.push(inst_224450);
var inst_224446 = inst_224465;
var inst_224447 = inst_224454;
var state_224486__$1 = (function (){var statearr_224498 = state_224486;
(statearr_224498[(7)] = inst_224446);

(statearr_224498[(8)] = inst_224447);

(statearr_224498[(11)] = inst_224466);

(statearr_224498[(12)] = inst_224464);

return statearr_224498;
})();
var statearr_224499_224529 = state_224486__$1;
(statearr_224499_224529[(2)] = null);

(statearr_224499_224529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (9))){
var inst_224446 = (state_224486[(7)]);
var inst_224462 = cljs.core.vec.call(null,inst_224446);
var state_224486__$1 = state_224486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_224486__$1,(11),out,inst_224462);
} else {
if((state_val_224487 === (5))){
var inst_224447 = (state_224486[(8)]);
var inst_224454 = (state_224486[(10)]);
var inst_224450 = (state_224486[(9)]);
var inst_224454__$1 = f.call(null,inst_224450);
var inst_224455 = cljs.core._EQ_.call(null,inst_224454__$1,inst_224447);
var inst_224456 = cljs.core.keyword_identical_QMARK_.call(null,inst_224447,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_224457 = (inst_224455) || (inst_224456);
var state_224486__$1 = (function (){var statearr_224500 = state_224486;
(statearr_224500[(10)] = inst_224454__$1);

return statearr_224500;
})();
if(cljs.core.truth_(inst_224457)){
var statearr_224501_224530 = state_224486__$1;
(statearr_224501_224530[(1)] = (8));

} else {
var statearr_224502_224531 = state_224486__$1;
(statearr_224502_224531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (14))){
var inst_224479 = (state_224486[(2)]);
var inst_224480 = cljs.core.async.close_BANG_.call(null,out);
var state_224486__$1 = (function (){var statearr_224504 = state_224486;
(statearr_224504[(13)] = inst_224479);

return statearr_224504;
})();
var statearr_224505_224532 = state_224486__$1;
(statearr_224505_224532[(2)] = inst_224480);

(statearr_224505_224532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (10))){
var inst_224469 = (state_224486[(2)]);
var state_224486__$1 = state_224486;
var statearr_224506_224533 = state_224486__$1;
(statearr_224506_224533[(2)] = inst_224469);

(statearr_224506_224533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_224487 === (8))){
var inst_224446 = (state_224486[(7)]);
var inst_224454 = (state_224486[(10)]);
var inst_224450 = (state_224486[(9)]);
var inst_224459 = inst_224446.push(inst_224450);
var tmp224503 = inst_224446;
var inst_224446__$1 = tmp224503;
var inst_224447 = inst_224454;
var state_224486__$1 = (function (){var statearr_224507 = state_224486;
(statearr_224507[(7)] = inst_224446__$1);

(statearr_224507[(8)] = inst_224447);

(statearr_224507[(14)] = inst_224459);

return statearr_224507;
})();
var statearr_224508_224534 = state_224486__$1;
(statearr_224508_224534[(2)] = null);

(statearr_224508_224534[(1)] = (2));


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
});})(c__44084__auto___224520,out))
;
return ((function (switch__44061__auto__,c__44084__auto___224520,out){
return (function() {
var cljs$core$async$state_machine__44062__auto__ = null;
var cljs$core$async$state_machine__44062__auto____0 = (function (){
var statearr_224512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_224512[(0)] = cljs$core$async$state_machine__44062__auto__);

(statearr_224512[(1)] = (1));

return statearr_224512;
});
var cljs$core$async$state_machine__44062__auto____1 = (function (state_224486){
while(true){
var ret_value__44063__auto__ = (function (){try{while(true){
var result__44064__auto__ = switch__44061__auto__.call(null,state_224486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44064__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44064__auto__;
}
break;
}
}catch (e224513){if((e224513 instanceof Object)){
var ex__44065__auto__ = e224513;
var statearr_224514_224535 = state_224486;
(statearr_224514_224535[(5)] = ex__44065__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_224486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e224513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__224536 = state_224486;
state_224486 = G__224536;
continue;
} else {
return ret_value__44063__auto__;
}
break;
}
});
cljs$core$async$state_machine__44062__auto__ = function(state_224486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44062__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44062__auto____1.call(this,state_224486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44062__auto____0;
cljs$core$async$state_machine__44062__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44062__auto____1;
return cljs$core$async$state_machine__44062__auto__;
})()
;})(switch__44061__auto__,c__44084__auto___224520,out))
})();
var state__44086__auto__ = (function (){var statearr_224515 = f__44085__auto__.call(null);
(statearr_224515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44084__auto___224520);

return statearr_224515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44086__auto__);
});})(c__44084__auto___224520,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491715143279