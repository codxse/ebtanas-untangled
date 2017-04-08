// Compiled by ClojureScript 1.9.494 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__85132__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__85129 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__85130 = cljs.core.seq.call(null,vec__85129);
var first__85131 = cljs.core.first.call(null,seq__85130);
var seq__85130__$1 = cljs.core.next.call(null,seq__85130);
var tag = first__85131;
var body = seq__85130__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__85132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85133__i = 0, G__85133__a = new Array(arguments.length -  0);
while (G__85133__i < G__85133__a.length) {G__85133__a[G__85133__i] = arguments[G__85133__i + 0]; ++G__85133__i;}
  args = new cljs.core.IndexedSeq(G__85133__a,0);
} 
return G__85132__delegate.call(this,args);};
G__85132.cljs$lang$maxFixedArity = 0;
G__85132.cljs$lang$applyTo = (function (arglist__85134){
var args = cljs.core.seq(arglist__85134);
return G__85132__delegate(args);
});
G__85132.cljs$core$IFn$_invoke$arity$variadic = G__85132__delegate;
return G__85132;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__35417__auto__ = (function sablono$core$update_arglists_$_iter__85139(s__85140){
return (new cljs.core.LazySeq(null,(function (){
var s__85140__$1 = s__85140;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__85140__$1);
if(temp__6753__auto__){
var s__85140__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85140__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__85140__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__85142 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__85141 = (0);
while(true){
if((i__85141 < size__35416__auto__)){
var args = cljs.core._nth.call(null,c__35415__auto__,i__85141);
cljs.core.chunk_append.call(null,b__85142,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__85143 = (i__85141 + (1));
i__85141 = G__85143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85142),sablono$core$update_arglists_$_iter__85139.call(null,cljs.core.chunk_rest.call(null,s__85140__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85142),null);
}
} else {
var args = cljs.core.first.call(null,s__85140__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__85139.call(null,cljs.core.rest.call(null,s__85140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35417__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__35783__auto__ = [];
var len__35776__auto___85149 = arguments.length;
var i__35777__auto___85150 = (0);
while(true){
if((i__35777__auto___85150 < len__35776__auto___85149)){
args__35783__auto__.push((arguments[i__35777__auto___85150]));

var G__85151 = (i__35777__auto___85150 + (1));
i__35777__auto___85150 = G__85151;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__35417__auto__ = (function sablono$core$iter__85145(s__85146){
return (new cljs.core.LazySeq(null,(function (){
var s__85146__$1 = s__85146;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__85146__$1);
if(temp__6753__auto__){
var s__85146__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85146__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__85146__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__85148 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__85147 = (0);
while(true){
if((i__85147 < size__35416__auto__)){
var style = cljs.core._nth.call(null,c__35415__auto__,i__85147);
cljs.core.chunk_append.call(null,b__85148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__85152 = (i__85147 + (1));
i__85147 = G__85152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85148),sablono$core$iter__85145.call(null,cljs.core.chunk_rest.call(null,s__85146__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85148),null);
}
} else {
var style = cljs.core.first.call(null,s__85146__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__85145.call(null,cljs.core.rest.call(null,s__85146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35417__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq85144){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85144));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to85153 = (function sablono$core$link_to85153(var_args){
var args__35783__auto__ = [];
var len__35776__auto___85156 = arguments.length;
var i__35777__auto___85157 = (0);
while(true){
if((i__35777__auto___85157 < len__35776__auto___85156)){
args__35783__auto__.push((arguments[i__35777__auto___85157]));

var G__85158 = (i__35777__auto___85157 + (1));
i__35777__auto___85157 = G__85158;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to85153.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

sablono.core.link_to85153.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to85153.cljs$lang$maxFixedArity = (1);

sablono.core.link_to85153.cljs$lang$applyTo = (function (seq85154){
var G__85155 = cljs.core.first.call(null,seq85154);
var seq85154__$1 = cljs.core.next.call(null,seq85154);
return sablono.core.link_to85153.cljs$core$IFn$_invoke$arity$variadic(G__85155,seq85154__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to85153);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to85159 = (function sablono$core$mail_to85159(var_args){
var args__35783__auto__ = [];
var len__35776__auto___85166 = arguments.length;
var i__35777__auto___85167 = (0);
while(true){
if((i__35777__auto___85167 < len__35776__auto___85166)){
args__35783__auto__.push((arguments[i__35777__auto___85167]));

var G__85168 = (i__35777__auto___85167 + (1));
i__35777__auto___85167 = G__85168;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to85159.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

sablono.core.mail_to85159.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__85162){
var vec__85163 = p__85162;
var content = cljs.core.nth.call(null,vec__85163,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__34555__auto__ = content;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to85159.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to85159.cljs$lang$applyTo = (function (seq85160){
var G__85161 = cljs.core.first.call(null,seq85160);
var seq85160__$1 = cljs.core.next.call(null,seq85160);
return sablono.core.mail_to85159.cljs$core$IFn$_invoke$arity$variadic(G__85161,seq85160__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to85159);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list85169 = (function sablono$core$unordered_list85169(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__35417__auto__ = (function sablono$core$unordered_list85169_$_iter__85174(s__85175){
return (new cljs.core.LazySeq(null,(function (){
var s__85175__$1 = s__85175;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__85175__$1);
if(temp__6753__auto__){
var s__85175__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85175__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__85175__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__85177 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__85176 = (0);
while(true){
if((i__85176 < size__35416__auto__)){
var x = cljs.core._nth.call(null,c__35415__auto__,i__85176);
cljs.core.chunk_append.call(null,b__85177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__85178 = (i__85176 + (1));
i__85176 = G__85178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85177),sablono$core$unordered_list85169_$_iter__85174.call(null,cljs.core.chunk_rest.call(null,s__85175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85177),null);
}
} else {
var x = cljs.core.first.call(null,s__85175__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list85169_$_iter__85174.call(null,cljs.core.rest.call(null,s__85175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35417__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list85169);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list85179 = (function sablono$core$ordered_list85179(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__35417__auto__ = (function sablono$core$ordered_list85179_$_iter__85184(s__85185){
return (new cljs.core.LazySeq(null,(function (){
var s__85185__$1 = s__85185;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__85185__$1);
if(temp__6753__auto__){
var s__85185__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85185__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__85185__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__85187 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__85186 = (0);
while(true){
if((i__85186 < size__35416__auto__)){
var x = cljs.core._nth.call(null,c__35415__auto__,i__85186);
cljs.core.chunk_append.call(null,b__85187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__85188 = (i__85186 + (1));
i__85186 = G__85188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85187),sablono$core$ordered_list85179_$_iter__85184.call(null,cljs.core.chunk_rest.call(null,s__85185__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85187),null);
}
} else {
var x = cljs.core.first.call(null,s__85185__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list85179_$_iter__85184.call(null,cljs.core.rest.call(null,s__85185__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35417__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list85179);
/**
 * Create an image element.
 */
sablono.core.image85189 = (function sablono$core$image85189(var_args){
var args85190 = [];
var len__35776__auto___85193 = arguments.length;
var i__35777__auto___85194 = (0);
while(true){
if((i__35777__auto___85194 < len__35776__auto___85193)){
args85190.push((arguments[i__35777__auto___85194]));

var G__85195 = (i__35777__auto___85194 + (1));
i__35777__auto___85194 = G__85195;
continue;
} else {
}
break;
}

var G__85192 = args85190.length;
switch (G__85192) {
case 1:
return sablono.core.image85189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image85189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85190.length)].join('')));

}
});

sablono.core.image85189.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image85189.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image85189.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image85189);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__85197_SHARP_,p2__85198_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__85197_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__85198_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__85199_SHARP_,p2__85200_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__85199_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__85200_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__34555__auto__ = value;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field85201 = (function sablono$core$color_field85201(var_args){
var args85202 = [];
var len__35776__auto___85269 = arguments.length;
var i__35777__auto___85270 = (0);
while(true){
if((i__35777__auto___85270 < len__35776__auto___85269)){
args85202.push((arguments[i__35777__auto___85270]));

var G__85271 = (i__35777__auto___85270 + (1));
i__35777__auto___85270 = G__85271;
continue;
} else {
}
break;
}

var G__85204 = args85202.length;
switch (G__85204) {
case 1:
return sablono.core.color_field85201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field85201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85202.length)].join('')));

}
});

sablono.core.color_field85201.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.color_field85201.call(null,name__85116__auto__,null);
});

sablono.core.color_field85201.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.color_field85201.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field85201);

/**
 * Creates a date input field.
 */
sablono.core.date_field85205 = (function sablono$core$date_field85205(var_args){
var args85206 = [];
var len__35776__auto___85273 = arguments.length;
var i__35777__auto___85274 = (0);
while(true){
if((i__35777__auto___85274 < len__35776__auto___85273)){
args85206.push((arguments[i__35777__auto___85274]));

var G__85275 = (i__35777__auto___85274 + (1));
i__35777__auto___85274 = G__85275;
continue;
} else {
}
break;
}

var G__85208 = args85206.length;
switch (G__85208) {
case 1:
return sablono.core.date_field85205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field85205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85206.length)].join('')));

}
});

sablono.core.date_field85205.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.date_field85205.call(null,name__85116__auto__,null);
});

sablono.core.date_field85205.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.date_field85205.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field85205);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field85209 = (function sablono$core$datetime_field85209(var_args){
var args85210 = [];
var len__35776__auto___85277 = arguments.length;
var i__35777__auto___85278 = (0);
while(true){
if((i__35777__auto___85278 < len__35776__auto___85277)){
args85210.push((arguments[i__35777__auto___85278]));

var G__85279 = (i__35777__auto___85278 + (1));
i__35777__auto___85278 = G__85279;
continue;
} else {
}
break;
}

var G__85212 = args85210.length;
switch (G__85212) {
case 1:
return sablono.core.datetime_field85209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field85209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85210.length)].join('')));

}
});

sablono.core.datetime_field85209.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.datetime_field85209.call(null,name__85116__auto__,null);
});

sablono.core.datetime_field85209.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.datetime_field85209.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field85209);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field85213 = (function sablono$core$datetime_local_field85213(var_args){
var args85214 = [];
var len__35776__auto___85281 = arguments.length;
var i__35777__auto___85282 = (0);
while(true){
if((i__35777__auto___85282 < len__35776__auto___85281)){
args85214.push((arguments[i__35777__auto___85282]));

var G__85283 = (i__35777__auto___85282 + (1));
i__35777__auto___85282 = G__85283;
continue;
} else {
}
break;
}

var G__85216 = args85214.length;
switch (G__85216) {
case 1:
return sablono.core.datetime_local_field85213.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field85213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85214.length)].join('')));

}
});

sablono.core.datetime_local_field85213.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.datetime_local_field85213.call(null,name__85116__auto__,null);
});

sablono.core.datetime_local_field85213.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.datetime_local_field85213.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field85213);

/**
 * Creates a email input field.
 */
sablono.core.email_field85217 = (function sablono$core$email_field85217(var_args){
var args85218 = [];
var len__35776__auto___85285 = arguments.length;
var i__35777__auto___85286 = (0);
while(true){
if((i__35777__auto___85286 < len__35776__auto___85285)){
args85218.push((arguments[i__35777__auto___85286]));

var G__85287 = (i__35777__auto___85286 + (1));
i__35777__auto___85286 = G__85287;
continue;
} else {
}
break;
}

var G__85220 = args85218.length;
switch (G__85220) {
case 1:
return sablono.core.email_field85217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field85217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85218.length)].join('')));

}
});

sablono.core.email_field85217.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.email_field85217.call(null,name__85116__auto__,null);
});

sablono.core.email_field85217.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.email_field85217.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field85217);

/**
 * Creates a file input field.
 */
sablono.core.file_field85221 = (function sablono$core$file_field85221(var_args){
var args85222 = [];
var len__35776__auto___85289 = arguments.length;
var i__35777__auto___85290 = (0);
while(true){
if((i__35777__auto___85290 < len__35776__auto___85289)){
args85222.push((arguments[i__35777__auto___85290]));

var G__85291 = (i__35777__auto___85290 + (1));
i__35777__auto___85290 = G__85291;
continue;
} else {
}
break;
}

var G__85224 = args85222.length;
switch (G__85224) {
case 1:
return sablono.core.file_field85221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field85221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85222.length)].join('')));

}
});

sablono.core.file_field85221.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.file_field85221.call(null,name__85116__auto__,null);
});

sablono.core.file_field85221.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.file_field85221.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field85221);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field85225 = (function sablono$core$hidden_field85225(var_args){
var args85226 = [];
var len__35776__auto___85293 = arguments.length;
var i__35777__auto___85294 = (0);
while(true){
if((i__35777__auto___85294 < len__35776__auto___85293)){
args85226.push((arguments[i__35777__auto___85294]));

var G__85295 = (i__35777__auto___85294 + (1));
i__35777__auto___85294 = G__85295;
continue;
} else {
}
break;
}

var G__85228 = args85226.length;
switch (G__85228) {
case 1:
return sablono.core.hidden_field85225.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field85225.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85226.length)].join('')));

}
});

sablono.core.hidden_field85225.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.hidden_field85225.call(null,name__85116__auto__,null);
});

sablono.core.hidden_field85225.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.hidden_field85225.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field85225);

/**
 * Creates a month input field.
 */
sablono.core.month_field85229 = (function sablono$core$month_field85229(var_args){
var args85230 = [];
var len__35776__auto___85297 = arguments.length;
var i__35777__auto___85298 = (0);
while(true){
if((i__35777__auto___85298 < len__35776__auto___85297)){
args85230.push((arguments[i__35777__auto___85298]));

var G__85299 = (i__35777__auto___85298 + (1));
i__35777__auto___85298 = G__85299;
continue;
} else {
}
break;
}

var G__85232 = args85230.length;
switch (G__85232) {
case 1:
return sablono.core.month_field85229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field85229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85230.length)].join('')));

}
});

sablono.core.month_field85229.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.month_field85229.call(null,name__85116__auto__,null);
});

sablono.core.month_field85229.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.month_field85229.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field85229);

/**
 * Creates a number input field.
 */
sablono.core.number_field85233 = (function sablono$core$number_field85233(var_args){
var args85234 = [];
var len__35776__auto___85301 = arguments.length;
var i__35777__auto___85302 = (0);
while(true){
if((i__35777__auto___85302 < len__35776__auto___85301)){
args85234.push((arguments[i__35777__auto___85302]));

var G__85303 = (i__35777__auto___85302 + (1));
i__35777__auto___85302 = G__85303;
continue;
} else {
}
break;
}

var G__85236 = args85234.length;
switch (G__85236) {
case 1:
return sablono.core.number_field85233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field85233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85234.length)].join('')));

}
});

sablono.core.number_field85233.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.number_field85233.call(null,name__85116__auto__,null);
});

sablono.core.number_field85233.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.number_field85233.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field85233);

/**
 * Creates a password input field.
 */
sablono.core.password_field85237 = (function sablono$core$password_field85237(var_args){
var args85238 = [];
var len__35776__auto___85305 = arguments.length;
var i__35777__auto___85306 = (0);
while(true){
if((i__35777__auto___85306 < len__35776__auto___85305)){
args85238.push((arguments[i__35777__auto___85306]));

var G__85307 = (i__35777__auto___85306 + (1));
i__35777__auto___85306 = G__85307;
continue;
} else {
}
break;
}

var G__85240 = args85238.length;
switch (G__85240) {
case 1:
return sablono.core.password_field85237.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field85237.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85238.length)].join('')));

}
});

sablono.core.password_field85237.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.password_field85237.call(null,name__85116__auto__,null);
});

sablono.core.password_field85237.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.password_field85237.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field85237);

/**
 * Creates a range input field.
 */
sablono.core.range_field85241 = (function sablono$core$range_field85241(var_args){
var args85242 = [];
var len__35776__auto___85309 = arguments.length;
var i__35777__auto___85310 = (0);
while(true){
if((i__35777__auto___85310 < len__35776__auto___85309)){
args85242.push((arguments[i__35777__auto___85310]));

var G__85311 = (i__35777__auto___85310 + (1));
i__35777__auto___85310 = G__85311;
continue;
} else {
}
break;
}

var G__85244 = args85242.length;
switch (G__85244) {
case 1:
return sablono.core.range_field85241.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field85241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85242.length)].join('')));

}
});

sablono.core.range_field85241.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.range_field85241.call(null,name__85116__auto__,null);
});

sablono.core.range_field85241.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.range_field85241.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field85241);

/**
 * Creates a search input field.
 */
sablono.core.search_field85245 = (function sablono$core$search_field85245(var_args){
var args85246 = [];
var len__35776__auto___85313 = arguments.length;
var i__35777__auto___85314 = (0);
while(true){
if((i__35777__auto___85314 < len__35776__auto___85313)){
args85246.push((arguments[i__35777__auto___85314]));

var G__85315 = (i__35777__auto___85314 + (1));
i__35777__auto___85314 = G__85315;
continue;
} else {
}
break;
}

var G__85248 = args85246.length;
switch (G__85248) {
case 1:
return sablono.core.search_field85245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field85245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85246.length)].join('')));

}
});

sablono.core.search_field85245.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.search_field85245.call(null,name__85116__auto__,null);
});

sablono.core.search_field85245.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.search_field85245.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field85245);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field85249 = (function sablono$core$tel_field85249(var_args){
var args85250 = [];
var len__35776__auto___85317 = arguments.length;
var i__35777__auto___85318 = (0);
while(true){
if((i__35777__auto___85318 < len__35776__auto___85317)){
args85250.push((arguments[i__35777__auto___85318]));

var G__85319 = (i__35777__auto___85318 + (1));
i__35777__auto___85318 = G__85319;
continue;
} else {
}
break;
}

var G__85252 = args85250.length;
switch (G__85252) {
case 1:
return sablono.core.tel_field85249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field85249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85250.length)].join('')));

}
});

sablono.core.tel_field85249.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.tel_field85249.call(null,name__85116__auto__,null);
});

sablono.core.tel_field85249.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.tel_field85249.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field85249);

/**
 * Creates a text input field.
 */
sablono.core.text_field85253 = (function sablono$core$text_field85253(var_args){
var args85254 = [];
var len__35776__auto___85321 = arguments.length;
var i__35777__auto___85322 = (0);
while(true){
if((i__35777__auto___85322 < len__35776__auto___85321)){
args85254.push((arguments[i__35777__auto___85322]));

var G__85323 = (i__35777__auto___85322 + (1));
i__35777__auto___85322 = G__85323;
continue;
} else {
}
break;
}

var G__85256 = args85254.length;
switch (G__85256) {
case 1:
return sablono.core.text_field85253.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field85253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85254.length)].join('')));

}
});

sablono.core.text_field85253.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.text_field85253.call(null,name__85116__auto__,null);
});

sablono.core.text_field85253.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.text_field85253.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field85253);

/**
 * Creates a time input field.
 */
sablono.core.time_field85257 = (function sablono$core$time_field85257(var_args){
var args85258 = [];
var len__35776__auto___85325 = arguments.length;
var i__35777__auto___85326 = (0);
while(true){
if((i__35777__auto___85326 < len__35776__auto___85325)){
args85258.push((arguments[i__35777__auto___85326]));

var G__85327 = (i__35777__auto___85326 + (1));
i__35777__auto___85326 = G__85327;
continue;
} else {
}
break;
}

var G__85260 = args85258.length;
switch (G__85260) {
case 1:
return sablono.core.time_field85257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field85257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85258.length)].join('')));

}
});

sablono.core.time_field85257.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.time_field85257.call(null,name__85116__auto__,null);
});

sablono.core.time_field85257.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.time_field85257.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field85257);

/**
 * Creates a url input field.
 */
sablono.core.url_field85261 = (function sablono$core$url_field85261(var_args){
var args85262 = [];
var len__35776__auto___85329 = arguments.length;
var i__35777__auto___85330 = (0);
while(true){
if((i__35777__auto___85330 < len__35776__auto___85329)){
args85262.push((arguments[i__35777__auto___85330]));

var G__85331 = (i__35777__auto___85330 + (1));
i__35777__auto___85330 = G__85331;
continue;
} else {
}
break;
}

var G__85264 = args85262.length;
switch (G__85264) {
case 1:
return sablono.core.url_field85261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field85261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85262.length)].join('')));

}
});

sablono.core.url_field85261.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.url_field85261.call(null,name__85116__auto__,null);
});

sablono.core.url_field85261.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.url_field85261.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field85261);

/**
 * Creates a week input field.
 */
sablono.core.week_field85265 = (function sablono$core$week_field85265(var_args){
var args85266 = [];
var len__35776__auto___85333 = arguments.length;
var i__35777__auto___85334 = (0);
while(true){
if((i__35777__auto___85334 < len__35776__auto___85333)){
args85266.push((arguments[i__35777__auto___85334]));

var G__85335 = (i__35777__auto___85334 + (1));
i__35777__auto___85334 = G__85335;
continue;
} else {
}
break;
}

var G__85268 = args85266.length;
switch (G__85268) {
case 1:
return sablono.core.week_field85265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field85265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85266.length)].join('')));

}
});

sablono.core.week_field85265.cljs$core$IFn$_invoke$arity$1 = (function (name__85116__auto__){
return sablono.core.week_field85265.call(null,name__85116__auto__,null);
});

sablono.core.week_field85265.cljs$core$IFn$_invoke$arity$2 = (function (name__85116__auto__,value__85117__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__85116__auto__,value__85117__auto__);
});

sablono.core.week_field85265.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field85265);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box85337 = (function sablono$core$check_box85337(var_args){
var args85338 = [];
var len__35776__auto___85341 = arguments.length;
var i__35777__auto___85342 = (0);
while(true){
if((i__35777__auto___85342 < len__35776__auto___85341)){
args85338.push((arguments[i__35777__auto___85342]));

var G__85343 = (i__35777__auto___85342 + (1));
i__35777__auto___85342 = G__85343;
continue;
} else {
}
break;
}

var G__85340 = args85338.length;
switch (G__85340) {
case 1:
return sablono.core.check_box85337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box85337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box85337.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85338.length)].join('')));

}
});

sablono.core.check_box85337.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box85337.call(null,name,null);
});

sablono.core.check_box85337.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box85337.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box85337.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__34555__auto__ = value;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box85337.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box85337);
/**
 * Creates a radio button.
 */
sablono.core.radio_button85345 = (function sablono$core$radio_button85345(var_args){
var args85346 = [];
var len__35776__auto___85349 = arguments.length;
var i__35777__auto___85350 = (0);
while(true){
if((i__35777__auto___85350 < len__35776__auto___85349)){
args85346.push((arguments[i__35777__auto___85350]));

var G__85351 = (i__35777__auto___85350 + (1));
i__35777__auto___85350 = G__85351;
continue;
} else {
}
break;
}

var G__85348 = args85346.length;
switch (G__85348) {
case 1:
return sablono.core.radio_button85345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button85345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button85345.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85346.length)].join('')));

}
});

sablono.core.radio_button85345.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button85345.call(null,group,null);
});

sablono.core.radio_button85345.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button85345.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button85345.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__34555__auto__ = value;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button85345.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button85345);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options85353 = (function sablono$core$select_options85353(coll){
var iter__35417__auto__ = (function sablono$core$select_options85353_$_iter__85370(s__85371){
return (new cljs.core.LazySeq(null,(function (){
var s__85371__$1 = s__85371;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__85371__$1);
if(temp__6753__auto__){
var s__85371__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85371__$2)){
var c__35415__auto__ = cljs.core.chunk_first.call(null,s__85371__$2);
var size__35416__auto__ = cljs.core.count.call(null,c__35415__auto__);
var b__85373 = cljs.core.chunk_buffer.call(null,size__35416__auto__);
if((function (){var i__85372 = (0);
while(true){
if((i__85372 < size__35416__auto__)){
var x = cljs.core._nth.call(null,c__35415__auto__,i__85372);
cljs.core.chunk_append.call(null,b__85373,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__85380 = x;
var text = cljs.core.nth.call(null,vec__85380,(0),null);
var val = cljs.core.nth.call(null,vec__85380,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__85380,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options85353.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__85386 = (i__85372 + (1));
i__85372 = G__85386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85373),sablono$core$select_options85353_$_iter__85370.call(null,cljs.core.chunk_rest.call(null,s__85371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85373),null);
}
} else {
var x = cljs.core.first.call(null,s__85371__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__85383 = x;
var text = cljs.core.nth.call(null,vec__85383,(0),null);
var val = cljs.core.nth.call(null,vec__85383,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__85383,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options85353.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options85353_$_iter__85370.call(null,cljs.core.rest.call(null,s__85371__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35417__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options85353);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down85387 = (function sablono$core$drop_down85387(var_args){
var args85388 = [];
var len__35776__auto___85391 = arguments.length;
var i__35777__auto___85392 = (0);
while(true){
if((i__35777__auto___85392 < len__35776__auto___85391)){
args85388.push((arguments[i__35777__auto___85392]));

var G__85393 = (i__35777__auto___85392 + (1));
i__35777__auto___85392 = G__85393;
continue;
} else {
}
break;
}

var G__85390 = args85388.length;
switch (G__85390) {
case 2:
return sablono.core.drop_down85387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down85387.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85388.length)].join('')));

}
});

sablono.core.drop_down85387.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down85387.call(null,name,options,null);
});

sablono.core.drop_down85387.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down85387.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down85387);
/**
 * Creates a text area element.
 */
sablono.core.text_area85395 = (function sablono$core$text_area85395(var_args){
var args85396 = [];
var len__35776__auto___85399 = arguments.length;
var i__35777__auto___85400 = (0);
while(true){
if((i__35777__auto___85400 < len__35776__auto___85399)){
args85396.push((arguments[i__35777__auto___85400]));

var G__85401 = (i__35777__auto___85400 + (1));
i__35777__auto___85400 = G__85401;
continue;
} else {
}
break;
}

var G__85398 = args85396.length;
switch (G__85398) {
case 1:
return sablono.core.text_area85395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area85395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args85396.length)].join('')));

}
});

sablono.core.text_area85395.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area85395.call(null,name,null);
});

sablono.core.text_area85395.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__34555__auto__ = value;
if(cljs.core.truth_(or__34555__auto__)){
return or__34555__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area85395.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area85395);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label85403 = (function sablono$core$label85403(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label85403);
/**
 * Creates a submit button.
 */
sablono.core.submit_button85404 = (function sablono$core$submit_button85404(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button85404);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button85405 = (function sablono$core$reset_button85405(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button85405);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to85406 = (function sablono$core$form_to85406(var_args){
var args__35783__auto__ = [];
var len__35776__auto___85413 = arguments.length;
var i__35777__auto___85414 = (0);
while(true){
if((i__35777__auto___85414 < len__35776__auto___85413)){
args__35783__auto__.push((arguments[i__35777__auto___85414]));

var G__85415 = (i__35777__auto___85414 + (1));
i__35777__auto___85414 = G__85415;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to85406.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

sablono.core.form_to85406.cljs$core$IFn$_invoke$arity$variadic = (function (p__85409,body){
var vec__85410 = p__85409;
var method = cljs.core.nth.call(null,vec__85410,(0),null);
var action = cljs.core.nth.call(null,vec__85410,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to85406.cljs$lang$maxFixedArity = (1);

sablono.core.form_to85406.cljs$lang$applyTo = (function (seq85407){
var G__85408 = cljs.core.first.call(null,seq85407);
var seq85407__$1 = cljs.core.next.call(null,seq85407);
return sablono.core.form_to85406.cljs$core$IFn$_invoke$arity$variadic(G__85408,seq85407__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to85406);

//# sourceMappingURL=core.js.map?rel=1491640821146