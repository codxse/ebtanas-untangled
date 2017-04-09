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
var G__206445__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__206442 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__206443 = cljs.core.seq.call(null,vec__206442);
var first__206444 = cljs.core.first.call(null,seq__206443);
var seq__206443__$1 = cljs.core.next.call(null,seq__206443);
var tag = first__206444;
var body = seq__206443__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__206445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__206446__i = 0, G__206446__a = new Array(arguments.length -  0);
while (G__206446__i < G__206446__a.length) {G__206446__a[G__206446__i] = arguments[G__206446__i + 0]; ++G__206446__i;}
  args = new cljs.core.IndexedSeq(G__206446__a,0);
} 
return G__206445__delegate.call(this,args);};
G__206445.cljs$lang$maxFixedArity = 0;
G__206445.cljs$lang$applyTo = (function (arglist__206447){
var args = cljs.core.seq(arglist__206447);
return G__206445__delegate(args);
});
G__206445.cljs$core$IFn$_invoke$arity$variadic = G__206445__delegate;
return G__206445;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__40068__auto__ = (function sablono$core$update_arglists_$_iter__206452(s__206453){
return (new cljs.core.LazySeq(null,(function (){
var s__206453__$1 = s__206453;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__206453__$1);
if(temp__6753__auto__){
var s__206453__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__206453__$2)){
var c__40066__auto__ = cljs.core.chunk_first.call(null,s__206453__$2);
var size__40067__auto__ = cljs.core.count.call(null,c__40066__auto__);
var b__206455 = cljs.core.chunk_buffer.call(null,size__40067__auto__);
if((function (){var i__206454 = (0);
while(true){
if((i__206454 < size__40067__auto__)){
var args = cljs.core._nth.call(null,c__40066__auto__,i__206454);
cljs.core.chunk_append.call(null,b__206455,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__206456 = (i__206454 + (1));
i__206454 = G__206456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206455),sablono$core$update_arglists_$_iter__206452.call(null,cljs.core.chunk_rest.call(null,s__206453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206455),null);
}
} else {
var args = cljs.core.first.call(null,s__206453__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__206452.call(null,cljs.core.rest.call(null,s__206453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__40068__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__40434__auto__ = [];
var len__40427__auto___206462 = arguments.length;
var i__40428__auto___206463 = (0);
while(true){
if((i__40428__auto___206463 < len__40427__auto___206462)){
args__40434__auto__.push((arguments[i__40428__auto___206463]));

var G__206464 = (i__40428__auto___206463 + (1));
i__40428__auto___206463 = G__206464;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((0) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__40435__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__40068__auto__ = (function sablono$core$iter__206458(s__206459){
return (new cljs.core.LazySeq(null,(function (){
var s__206459__$1 = s__206459;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__206459__$1);
if(temp__6753__auto__){
var s__206459__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__206459__$2)){
var c__40066__auto__ = cljs.core.chunk_first.call(null,s__206459__$2);
var size__40067__auto__ = cljs.core.count.call(null,c__40066__auto__);
var b__206461 = cljs.core.chunk_buffer.call(null,size__40067__auto__);
if((function (){var i__206460 = (0);
while(true){
if((i__206460 < size__40067__auto__)){
var style = cljs.core._nth.call(null,c__40066__auto__,i__206460);
cljs.core.chunk_append.call(null,b__206461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__206465 = (i__206460 + (1));
i__206460 = G__206465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206461),sablono$core$iter__206458.call(null,cljs.core.chunk_rest.call(null,s__206459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206461),null);
}
} else {
var style = cljs.core.first.call(null,s__206459__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__206458.call(null,cljs.core.rest.call(null,s__206459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__40068__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq206457){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq206457));
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
sablono.core.link_to206466 = (function sablono$core$link_to206466(var_args){
var args__40434__auto__ = [];
var len__40427__auto___206469 = arguments.length;
var i__40428__auto___206470 = (0);
while(true){
if((i__40428__auto___206470 < len__40427__auto___206469)){
args__40434__auto__.push((arguments[i__40428__auto___206470]));

var G__206471 = (i__40428__auto___206470 + (1));
i__40428__auto___206470 = G__206471;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to206466.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

sablono.core.link_to206466.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to206466.cljs$lang$maxFixedArity = (1);

sablono.core.link_to206466.cljs$lang$applyTo = (function (seq206467){
var G__206468 = cljs.core.first.call(null,seq206467);
var seq206467__$1 = cljs.core.next.call(null,seq206467);
return sablono.core.link_to206466.cljs$core$IFn$_invoke$arity$variadic(G__206468,seq206467__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to206466);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to206472 = (function sablono$core$mail_to206472(var_args){
var args__40434__auto__ = [];
var len__40427__auto___206479 = arguments.length;
var i__40428__auto___206480 = (0);
while(true){
if((i__40428__auto___206480 < len__40427__auto___206479)){
args__40434__auto__.push((arguments[i__40428__auto___206480]));

var G__206481 = (i__40428__auto___206480 + (1));
i__40428__auto___206480 = G__206481;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to206472.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

sablono.core.mail_to206472.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__206475){
var vec__206476 = p__206475;
var content = cljs.core.nth.call(null,vec__206476,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__39206__auto__ = content;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to206472.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to206472.cljs$lang$applyTo = (function (seq206473){
var G__206474 = cljs.core.first.call(null,seq206473);
var seq206473__$1 = cljs.core.next.call(null,seq206473);
return sablono.core.mail_to206472.cljs$core$IFn$_invoke$arity$variadic(G__206474,seq206473__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to206472);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list206482 = (function sablono$core$unordered_list206482(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__40068__auto__ = (function sablono$core$unordered_list206482_$_iter__206487(s__206488){
return (new cljs.core.LazySeq(null,(function (){
var s__206488__$1 = s__206488;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__206488__$1);
if(temp__6753__auto__){
var s__206488__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__206488__$2)){
var c__40066__auto__ = cljs.core.chunk_first.call(null,s__206488__$2);
var size__40067__auto__ = cljs.core.count.call(null,c__40066__auto__);
var b__206490 = cljs.core.chunk_buffer.call(null,size__40067__auto__);
if((function (){var i__206489 = (0);
while(true){
if((i__206489 < size__40067__auto__)){
var x = cljs.core._nth.call(null,c__40066__auto__,i__206489);
cljs.core.chunk_append.call(null,b__206490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__206491 = (i__206489 + (1));
i__206489 = G__206491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206490),sablono$core$unordered_list206482_$_iter__206487.call(null,cljs.core.chunk_rest.call(null,s__206488__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206490),null);
}
} else {
var x = cljs.core.first.call(null,s__206488__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list206482_$_iter__206487.call(null,cljs.core.rest.call(null,s__206488__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__40068__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list206482);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list206492 = (function sablono$core$ordered_list206492(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__40068__auto__ = (function sablono$core$ordered_list206492_$_iter__206497(s__206498){
return (new cljs.core.LazySeq(null,(function (){
var s__206498__$1 = s__206498;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__206498__$1);
if(temp__6753__auto__){
var s__206498__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__206498__$2)){
var c__40066__auto__ = cljs.core.chunk_first.call(null,s__206498__$2);
var size__40067__auto__ = cljs.core.count.call(null,c__40066__auto__);
var b__206500 = cljs.core.chunk_buffer.call(null,size__40067__auto__);
if((function (){var i__206499 = (0);
while(true){
if((i__206499 < size__40067__auto__)){
var x = cljs.core._nth.call(null,c__40066__auto__,i__206499);
cljs.core.chunk_append.call(null,b__206500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__206501 = (i__206499 + (1));
i__206499 = G__206501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206500),sablono$core$ordered_list206492_$_iter__206497.call(null,cljs.core.chunk_rest.call(null,s__206498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206500),null);
}
} else {
var x = cljs.core.first.call(null,s__206498__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list206492_$_iter__206497.call(null,cljs.core.rest.call(null,s__206498__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__40068__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list206492);
/**
 * Create an image element.
 */
sablono.core.image206502 = (function sablono$core$image206502(var_args){
var args206503 = [];
var len__40427__auto___206506 = arguments.length;
var i__40428__auto___206507 = (0);
while(true){
if((i__40428__auto___206507 < len__40427__auto___206506)){
args206503.push((arguments[i__40428__auto___206507]));

var G__206508 = (i__40428__auto___206507 + (1));
i__40428__auto___206507 = G__206508;
continue;
} else {
}
break;
}

var G__206505 = args206503.length;
switch (G__206505) {
case 1:
return sablono.core.image206502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image206502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206503.length)].join('')));

}
});

sablono.core.image206502.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image206502.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image206502.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image206502);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__206510_SHARP_,p2__206511_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__206510_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__206511_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__206512_SHARP_,p2__206513_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__206512_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__206513_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__39206__auto__ = value;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field206514 = (function sablono$core$color_field206514(var_args){
var args206515 = [];
var len__40427__auto___206582 = arguments.length;
var i__40428__auto___206583 = (0);
while(true){
if((i__40428__auto___206583 < len__40427__auto___206582)){
args206515.push((arguments[i__40428__auto___206583]));

var G__206584 = (i__40428__auto___206583 + (1));
i__40428__auto___206583 = G__206584;
continue;
} else {
}
break;
}

var G__206517 = args206515.length;
switch (G__206517) {
case 1:
return sablono.core.color_field206514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field206514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206515.length)].join('')));

}
});

sablono.core.color_field206514.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.color_field206514.call(null,name__44947__auto__,null);
});

sablono.core.color_field206514.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.color_field206514.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field206514);

/**
 * Creates a date input field.
 */
sablono.core.date_field206518 = (function sablono$core$date_field206518(var_args){
var args206519 = [];
var len__40427__auto___206586 = arguments.length;
var i__40428__auto___206587 = (0);
while(true){
if((i__40428__auto___206587 < len__40427__auto___206586)){
args206519.push((arguments[i__40428__auto___206587]));

var G__206588 = (i__40428__auto___206587 + (1));
i__40428__auto___206587 = G__206588;
continue;
} else {
}
break;
}

var G__206521 = args206519.length;
switch (G__206521) {
case 1:
return sablono.core.date_field206518.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field206518.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206519.length)].join('')));

}
});

sablono.core.date_field206518.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.date_field206518.call(null,name__44947__auto__,null);
});

sablono.core.date_field206518.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.date_field206518.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field206518);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field206522 = (function sablono$core$datetime_field206522(var_args){
var args206523 = [];
var len__40427__auto___206590 = arguments.length;
var i__40428__auto___206591 = (0);
while(true){
if((i__40428__auto___206591 < len__40427__auto___206590)){
args206523.push((arguments[i__40428__auto___206591]));

var G__206592 = (i__40428__auto___206591 + (1));
i__40428__auto___206591 = G__206592;
continue;
} else {
}
break;
}

var G__206525 = args206523.length;
switch (G__206525) {
case 1:
return sablono.core.datetime_field206522.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field206522.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206523.length)].join('')));

}
});

sablono.core.datetime_field206522.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.datetime_field206522.call(null,name__44947__auto__,null);
});

sablono.core.datetime_field206522.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.datetime_field206522.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field206522);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field206526 = (function sablono$core$datetime_local_field206526(var_args){
var args206527 = [];
var len__40427__auto___206594 = arguments.length;
var i__40428__auto___206595 = (0);
while(true){
if((i__40428__auto___206595 < len__40427__auto___206594)){
args206527.push((arguments[i__40428__auto___206595]));

var G__206596 = (i__40428__auto___206595 + (1));
i__40428__auto___206595 = G__206596;
continue;
} else {
}
break;
}

var G__206529 = args206527.length;
switch (G__206529) {
case 1:
return sablono.core.datetime_local_field206526.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field206526.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206527.length)].join('')));

}
});

sablono.core.datetime_local_field206526.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.datetime_local_field206526.call(null,name__44947__auto__,null);
});

sablono.core.datetime_local_field206526.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.datetime_local_field206526.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field206526);

/**
 * Creates a email input field.
 */
sablono.core.email_field206530 = (function sablono$core$email_field206530(var_args){
var args206531 = [];
var len__40427__auto___206598 = arguments.length;
var i__40428__auto___206599 = (0);
while(true){
if((i__40428__auto___206599 < len__40427__auto___206598)){
args206531.push((arguments[i__40428__auto___206599]));

var G__206600 = (i__40428__auto___206599 + (1));
i__40428__auto___206599 = G__206600;
continue;
} else {
}
break;
}

var G__206533 = args206531.length;
switch (G__206533) {
case 1:
return sablono.core.email_field206530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field206530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206531.length)].join('')));

}
});

sablono.core.email_field206530.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.email_field206530.call(null,name__44947__auto__,null);
});

sablono.core.email_field206530.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.email_field206530.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field206530);

/**
 * Creates a file input field.
 */
sablono.core.file_field206534 = (function sablono$core$file_field206534(var_args){
var args206535 = [];
var len__40427__auto___206602 = arguments.length;
var i__40428__auto___206603 = (0);
while(true){
if((i__40428__auto___206603 < len__40427__auto___206602)){
args206535.push((arguments[i__40428__auto___206603]));

var G__206604 = (i__40428__auto___206603 + (1));
i__40428__auto___206603 = G__206604;
continue;
} else {
}
break;
}

var G__206537 = args206535.length;
switch (G__206537) {
case 1:
return sablono.core.file_field206534.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field206534.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206535.length)].join('')));

}
});

sablono.core.file_field206534.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.file_field206534.call(null,name__44947__auto__,null);
});

sablono.core.file_field206534.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.file_field206534.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field206534);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field206538 = (function sablono$core$hidden_field206538(var_args){
var args206539 = [];
var len__40427__auto___206606 = arguments.length;
var i__40428__auto___206607 = (0);
while(true){
if((i__40428__auto___206607 < len__40427__auto___206606)){
args206539.push((arguments[i__40428__auto___206607]));

var G__206608 = (i__40428__auto___206607 + (1));
i__40428__auto___206607 = G__206608;
continue;
} else {
}
break;
}

var G__206541 = args206539.length;
switch (G__206541) {
case 1:
return sablono.core.hidden_field206538.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field206538.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206539.length)].join('')));

}
});

sablono.core.hidden_field206538.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.hidden_field206538.call(null,name__44947__auto__,null);
});

sablono.core.hidden_field206538.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.hidden_field206538.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field206538);

/**
 * Creates a month input field.
 */
sablono.core.month_field206542 = (function sablono$core$month_field206542(var_args){
var args206543 = [];
var len__40427__auto___206610 = arguments.length;
var i__40428__auto___206611 = (0);
while(true){
if((i__40428__auto___206611 < len__40427__auto___206610)){
args206543.push((arguments[i__40428__auto___206611]));

var G__206612 = (i__40428__auto___206611 + (1));
i__40428__auto___206611 = G__206612;
continue;
} else {
}
break;
}

var G__206545 = args206543.length;
switch (G__206545) {
case 1:
return sablono.core.month_field206542.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field206542.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206543.length)].join('')));

}
});

sablono.core.month_field206542.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.month_field206542.call(null,name__44947__auto__,null);
});

sablono.core.month_field206542.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.month_field206542.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field206542);

/**
 * Creates a number input field.
 */
sablono.core.number_field206546 = (function sablono$core$number_field206546(var_args){
var args206547 = [];
var len__40427__auto___206614 = arguments.length;
var i__40428__auto___206615 = (0);
while(true){
if((i__40428__auto___206615 < len__40427__auto___206614)){
args206547.push((arguments[i__40428__auto___206615]));

var G__206616 = (i__40428__auto___206615 + (1));
i__40428__auto___206615 = G__206616;
continue;
} else {
}
break;
}

var G__206549 = args206547.length;
switch (G__206549) {
case 1:
return sablono.core.number_field206546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field206546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206547.length)].join('')));

}
});

sablono.core.number_field206546.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.number_field206546.call(null,name__44947__auto__,null);
});

sablono.core.number_field206546.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.number_field206546.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field206546);

/**
 * Creates a password input field.
 */
sablono.core.password_field206550 = (function sablono$core$password_field206550(var_args){
var args206551 = [];
var len__40427__auto___206618 = arguments.length;
var i__40428__auto___206619 = (0);
while(true){
if((i__40428__auto___206619 < len__40427__auto___206618)){
args206551.push((arguments[i__40428__auto___206619]));

var G__206620 = (i__40428__auto___206619 + (1));
i__40428__auto___206619 = G__206620;
continue;
} else {
}
break;
}

var G__206553 = args206551.length;
switch (G__206553) {
case 1:
return sablono.core.password_field206550.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field206550.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206551.length)].join('')));

}
});

sablono.core.password_field206550.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.password_field206550.call(null,name__44947__auto__,null);
});

sablono.core.password_field206550.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.password_field206550.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field206550);

/**
 * Creates a range input field.
 */
sablono.core.range_field206554 = (function sablono$core$range_field206554(var_args){
var args206555 = [];
var len__40427__auto___206622 = arguments.length;
var i__40428__auto___206623 = (0);
while(true){
if((i__40428__auto___206623 < len__40427__auto___206622)){
args206555.push((arguments[i__40428__auto___206623]));

var G__206624 = (i__40428__auto___206623 + (1));
i__40428__auto___206623 = G__206624;
continue;
} else {
}
break;
}

var G__206557 = args206555.length;
switch (G__206557) {
case 1:
return sablono.core.range_field206554.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field206554.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206555.length)].join('')));

}
});

sablono.core.range_field206554.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.range_field206554.call(null,name__44947__auto__,null);
});

sablono.core.range_field206554.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.range_field206554.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field206554);

/**
 * Creates a search input field.
 */
sablono.core.search_field206558 = (function sablono$core$search_field206558(var_args){
var args206559 = [];
var len__40427__auto___206626 = arguments.length;
var i__40428__auto___206627 = (0);
while(true){
if((i__40428__auto___206627 < len__40427__auto___206626)){
args206559.push((arguments[i__40428__auto___206627]));

var G__206628 = (i__40428__auto___206627 + (1));
i__40428__auto___206627 = G__206628;
continue;
} else {
}
break;
}

var G__206561 = args206559.length;
switch (G__206561) {
case 1:
return sablono.core.search_field206558.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field206558.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206559.length)].join('')));

}
});

sablono.core.search_field206558.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.search_field206558.call(null,name__44947__auto__,null);
});

sablono.core.search_field206558.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.search_field206558.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field206558);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field206562 = (function sablono$core$tel_field206562(var_args){
var args206563 = [];
var len__40427__auto___206630 = arguments.length;
var i__40428__auto___206631 = (0);
while(true){
if((i__40428__auto___206631 < len__40427__auto___206630)){
args206563.push((arguments[i__40428__auto___206631]));

var G__206632 = (i__40428__auto___206631 + (1));
i__40428__auto___206631 = G__206632;
continue;
} else {
}
break;
}

var G__206565 = args206563.length;
switch (G__206565) {
case 1:
return sablono.core.tel_field206562.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field206562.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206563.length)].join('')));

}
});

sablono.core.tel_field206562.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.tel_field206562.call(null,name__44947__auto__,null);
});

sablono.core.tel_field206562.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.tel_field206562.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field206562);

/**
 * Creates a text input field.
 */
sablono.core.text_field206566 = (function sablono$core$text_field206566(var_args){
var args206567 = [];
var len__40427__auto___206634 = arguments.length;
var i__40428__auto___206635 = (0);
while(true){
if((i__40428__auto___206635 < len__40427__auto___206634)){
args206567.push((arguments[i__40428__auto___206635]));

var G__206636 = (i__40428__auto___206635 + (1));
i__40428__auto___206635 = G__206636;
continue;
} else {
}
break;
}

var G__206569 = args206567.length;
switch (G__206569) {
case 1:
return sablono.core.text_field206566.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field206566.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206567.length)].join('')));

}
});

sablono.core.text_field206566.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.text_field206566.call(null,name__44947__auto__,null);
});

sablono.core.text_field206566.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.text_field206566.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field206566);

/**
 * Creates a time input field.
 */
sablono.core.time_field206570 = (function sablono$core$time_field206570(var_args){
var args206571 = [];
var len__40427__auto___206638 = arguments.length;
var i__40428__auto___206639 = (0);
while(true){
if((i__40428__auto___206639 < len__40427__auto___206638)){
args206571.push((arguments[i__40428__auto___206639]));

var G__206640 = (i__40428__auto___206639 + (1));
i__40428__auto___206639 = G__206640;
continue;
} else {
}
break;
}

var G__206573 = args206571.length;
switch (G__206573) {
case 1:
return sablono.core.time_field206570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field206570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206571.length)].join('')));

}
});

sablono.core.time_field206570.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.time_field206570.call(null,name__44947__auto__,null);
});

sablono.core.time_field206570.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.time_field206570.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field206570);

/**
 * Creates a url input field.
 */
sablono.core.url_field206574 = (function sablono$core$url_field206574(var_args){
var args206575 = [];
var len__40427__auto___206642 = arguments.length;
var i__40428__auto___206643 = (0);
while(true){
if((i__40428__auto___206643 < len__40427__auto___206642)){
args206575.push((arguments[i__40428__auto___206643]));

var G__206644 = (i__40428__auto___206643 + (1));
i__40428__auto___206643 = G__206644;
continue;
} else {
}
break;
}

var G__206577 = args206575.length;
switch (G__206577) {
case 1:
return sablono.core.url_field206574.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field206574.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206575.length)].join('')));

}
});

sablono.core.url_field206574.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.url_field206574.call(null,name__44947__auto__,null);
});

sablono.core.url_field206574.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.url_field206574.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field206574);

/**
 * Creates a week input field.
 */
sablono.core.week_field206578 = (function sablono$core$week_field206578(var_args){
var args206579 = [];
var len__40427__auto___206646 = arguments.length;
var i__40428__auto___206647 = (0);
while(true){
if((i__40428__auto___206647 < len__40427__auto___206646)){
args206579.push((arguments[i__40428__auto___206647]));

var G__206648 = (i__40428__auto___206647 + (1));
i__40428__auto___206647 = G__206648;
continue;
} else {
}
break;
}

var G__206581 = args206579.length;
switch (G__206581) {
case 1:
return sablono.core.week_field206578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field206578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206579.length)].join('')));

}
});

sablono.core.week_field206578.cljs$core$IFn$_invoke$arity$1 = (function (name__44947__auto__){
return sablono.core.week_field206578.call(null,name__44947__auto__,null);
});

sablono.core.week_field206578.cljs$core$IFn$_invoke$arity$2 = (function (name__44947__auto__,value__44948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__44947__auto__,value__44948__auto__);
});

sablono.core.week_field206578.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field206578);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box206650 = (function sablono$core$check_box206650(var_args){
var args206651 = [];
var len__40427__auto___206654 = arguments.length;
var i__40428__auto___206655 = (0);
while(true){
if((i__40428__auto___206655 < len__40427__auto___206654)){
args206651.push((arguments[i__40428__auto___206655]));

var G__206656 = (i__40428__auto___206655 + (1));
i__40428__auto___206655 = G__206656;
continue;
} else {
}
break;
}

var G__206653 = args206651.length;
switch (G__206653) {
case 1:
return sablono.core.check_box206650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box206650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box206650.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206651.length)].join('')));

}
});

sablono.core.check_box206650.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box206650.call(null,name,null);
});

sablono.core.check_box206650.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box206650.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box206650.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__39206__auto__ = value;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box206650.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box206650);
/**
 * Creates a radio button.
 */
sablono.core.radio_button206658 = (function sablono$core$radio_button206658(var_args){
var args206659 = [];
var len__40427__auto___206662 = arguments.length;
var i__40428__auto___206663 = (0);
while(true){
if((i__40428__auto___206663 < len__40427__auto___206662)){
args206659.push((arguments[i__40428__auto___206663]));

var G__206664 = (i__40428__auto___206663 + (1));
i__40428__auto___206663 = G__206664;
continue;
} else {
}
break;
}

var G__206661 = args206659.length;
switch (G__206661) {
case 1:
return sablono.core.radio_button206658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button206658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button206658.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206659.length)].join('')));

}
});

sablono.core.radio_button206658.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button206658.call(null,group,null);
});

sablono.core.radio_button206658.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button206658.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button206658.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__39206__auto__ = value;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button206658.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button206658);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options206666 = (function sablono$core$select_options206666(coll){
var iter__40068__auto__ = (function sablono$core$select_options206666_$_iter__206683(s__206684){
return (new cljs.core.LazySeq(null,(function (){
var s__206684__$1 = s__206684;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__206684__$1);
if(temp__6753__auto__){
var s__206684__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__206684__$2)){
var c__40066__auto__ = cljs.core.chunk_first.call(null,s__206684__$2);
var size__40067__auto__ = cljs.core.count.call(null,c__40066__auto__);
var b__206686 = cljs.core.chunk_buffer.call(null,size__40067__auto__);
if((function (){var i__206685 = (0);
while(true){
if((i__206685 < size__40067__auto__)){
var x = cljs.core._nth.call(null,c__40066__auto__,i__206685);
cljs.core.chunk_append.call(null,b__206686,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__206693 = x;
var text = cljs.core.nth.call(null,vec__206693,(0),null);
var val = cljs.core.nth.call(null,vec__206693,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__206693,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options206666.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__206699 = (i__206685 + (1));
i__206685 = G__206699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206686),sablono$core$select_options206666_$_iter__206683.call(null,cljs.core.chunk_rest.call(null,s__206684__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__206686),null);
}
} else {
var x = cljs.core.first.call(null,s__206684__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__206696 = x;
var text = cljs.core.nth.call(null,vec__206696,(0),null);
var val = cljs.core.nth.call(null,vec__206696,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__206696,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options206666.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options206666_$_iter__206683.call(null,cljs.core.rest.call(null,s__206684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__40068__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options206666);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down206700 = (function sablono$core$drop_down206700(var_args){
var args206701 = [];
var len__40427__auto___206704 = arguments.length;
var i__40428__auto___206705 = (0);
while(true){
if((i__40428__auto___206705 < len__40427__auto___206704)){
args206701.push((arguments[i__40428__auto___206705]));

var G__206706 = (i__40428__auto___206705 + (1));
i__40428__auto___206705 = G__206706;
continue;
} else {
}
break;
}

var G__206703 = args206701.length;
switch (G__206703) {
case 2:
return sablono.core.drop_down206700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down206700.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206701.length)].join('')));

}
});

sablono.core.drop_down206700.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down206700.call(null,name,options,null);
});

sablono.core.drop_down206700.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down206700.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down206700);
/**
 * Creates a text area element.
 */
sablono.core.text_area206708 = (function sablono$core$text_area206708(var_args){
var args206709 = [];
var len__40427__auto___206712 = arguments.length;
var i__40428__auto___206713 = (0);
while(true){
if((i__40428__auto___206713 < len__40427__auto___206712)){
args206709.push((arguments[i__40428__auto___206713]));

var G__206714 = (i__40428__auto___206713 + (1));
i__40428__auto___206713 = G__206714;
continue;
} else {
}
break;
}

var G__206711 = args206709.length;
switch (G__206711) {
case 1:
return sablono.core.text_area206708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area206708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args206709.length)].join('')));

}
});

sablono.core.text_area206708.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area206708.call(null,name,null);
});

sablono.core.text_area206708.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__39206__auto__ = value;
if(cljs.core.truth_(or__39206__auto__)){
return or__39206__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area206708.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area206708);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label206716 = (function sablono$core$label206716(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label206716);
/**
 * Creates a submit button.
 */
sablono.core.submit_button206717 = (function sablono$core$submit_button206717(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button206717);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button206718 = (function sablono$core$reset_button206718(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button206718);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to206719 = (function sablono$core$form_to206719(var_args){
var args__40434__auto__ = [];
var len__40427__auto___206726 = arguments.length;
var i__40428__auto___206727 = (0);
while(true){
if((i__40428__auto___206727 < len__40427__auto___206726)){
args__40434__auto__.push((arguments[i__40428__auto___206727]));

var G__206728 = (i__40428__auto___206727 + (1));
i__40428__auto___206727 = G__206728;
continue;
} else {
}
break;
}

var argseq__40435__auto__ = ((((1) < args__40434__auto__.length))?(new cljs.core.IndexedSeq(args__40434__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to206719.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__40435__auto__);
});

sablono.core.form_to206719.cljs$core$IFn$_invoke$arity$variadic = (function (p__206722,body){
var vec__206723 = p__206722;
var method = cljs.core.nth.call(null,vec__206723,(0),null);
var action = cljs.core.nth.call(null,vec__206723,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to206719.cljs$lang$maxFixedArity = (1);

sablono.core.form_to206719.cljs$lang$applyTo = (function (seq206720){
var G__206721 = cljs.core.first.call(null,seq206720);
var seq206720__$1 = cljs.core.next.call(null,seq206720);
return sablono.core.form_to206719.cljs$core$IFn$_invoke$arity$variadic(G__206721,seq206720__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to206719);

//# sourceMappingURL=core.js.map?rel=1491715107212