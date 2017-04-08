// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled_spec.dom.edn_renderer');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('untangled_spec.diff');
goog.require('om.dom');
goog.require('goog.string.StringBuffer');
if(typeof untangled_spec.dom.edn_renderer._STAR_key_counter_STAR_ !== 'undefined'){
} else {
untangled_spec.dom.edn_renderer._STAR_key_counter_STAR_ = null;
}
untangled_spec.dom.edn_renderer.get_key = (function untangled_spec$dom$edn_renderer$get_key(){
cljs.core.swap_BANG_.call(null,untangled_spec.dom.edn_renderer._STAR_key_counter_STAR_,cljs.core.inc);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("k-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,untangled_spec.dom.edn_renderer._STAR_key_counter_STAR_))].join('');
});
untangled_spec.dom.edn_renderer.literal_QMARK_ = (function untangled_spec$dom$edn_renderer$literal_QMARK_(x){
return (!(cljs.core.seq_QMARK_.call(null,x))) && (!(cljs.core.coll_QMARK_.call(null,x)));
});
untangled_spec.dom.edn_renderer.separator_STAR_ = (function untangled_spec$dom$edn_renderer$separator_STAR_(s){
return om.dom.div.call(null,({"className": "separator", "key": untangled_spec.dom.edn_renderer.get_key.call(null)}),s);
});
untangled_spec.dom.edn_renderer.clearfix_separator_STAR_ = (function untangled_spec$dom$edn_renderer$clearfix_separator_STAR_(s){
return om.dom.span.call(null,({"key": untangled_spec.dom.edn_renderer.get_key.call(null)}),untangled_spec.dom.edn_renderer.separator_STAR_.call(null,s),om.dom.span.call(null,({"className": "clearfix"})));
});
untangled_spec.dom.edn_renderer.separate_fn = (function untangled_spec$dom$edn_renderer$separate_fn(coll){
if(!(cljs.core.every_QMARK_.call(null,untangled_spec.dom.edn_renderer.literal_QMARK_,coll))){
return untangled_spec.dom.edn_renderer.clearfix_separator_STAR_;
} else {
return untangled_spec.dom.edn_renderer.separator_STAR_;
}
});
untangled_spec.dom.edn_renderer.interpose_separator = (function untangled_spec$dom$edn_renderer$interpose_separator(rct_coll,s,sep_fn){
return cljs.core.to_array.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,rct_coll),cljs.core.interleave.call(null,cljs.core.repeatedly.call(null,(function (){
return sep_fn.call(null,s);
})),cljs.core.rest.call(null,rct_coll))));
});
untangled_spec.dom.edn_renderer.pprint_str = (function untangled_spec$dom$edn_renderer$pprint_str(obj){
var sb = (new goog.string.StringBuffer());
cljs.pprint.pprint.call(null,obj,(new cljs.core.StringBufferWriter(sb)));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
});
untangled_spec.dom.edn_renderer.literal = (function untangled_spec$dom$edn_renderer$literal(class$,x){
return om.dom.span.call(null,({"className": class$, "key": untangled_spec.dom.edn_renderer.get_key.call(null)}),untangled_spec.dom.edn_renderer.pprint_str.call(null,x));
});
untangled_spec.dom.edn_renderer.join_html = (function untangled_spec$dom$edn_renderer$join_html(separator,coll){
return untangled_spec.dom.edn_renderer.interpose_separator.call(null,cljs.core.mapv.call(null,untangled_spec.dom.edn_renderer.html,coll),separator,untangled_spec.dom.edn_renderer.separate_fn.call(null,coll));
});
untangled_spec.dom.edn_renderer.html_keyval = (function untangled_spec$dom$edn_renderer$html_keyval(p__62992){
var vec__62996 = p__62992;
var k = cljs.core.nth.call(null,vec__62996,(0),null);
var v = cljs.core.nth.call(null,vec__62996,(1),null);
return om.dom.span.call(null,({"className": "keyval", "key": cljs.core.prn_str.call(null,k)}),untangled_spec.dom.edn_renderer.html.call(null,k),untangled_spec.dom.edn_renderer.html.call(null,v));
});
untangled_spec.dom.edn_renderer.html_keyvals = (function untangled_spec$dom$edn_renderer$html_keyvals(coll){
return untangled_spec.dom.edn_renderer.interpose_separator.call(null,cljs.core.mapv.call(null,untangled_spec.dom.edn_renderer.html_keyval,coll)," ",untangled_spec.dom.edn_renderer.separate_fn.call(null,cljs.core.vals.call(null,coll)));
});
untangled_spec.dom.edn_renderer.open_close = (function untangled_spec$dom$edn_renderer$open_close(class_str,opener,closer,rct_coll){
return om.dom.span.call(null,({"className": class_str, "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,rct_coll))].join('')}),om.dom.span.call(null,({"className": "opener", "key": (1)}),opener),om.dom.span.call(null,({"className": "contents", "key": (2)}),rct_coll),om.dom.span.call(null,({"className": "closer", "key": (3)}),closer));
});
untangled_spec.dom.edn_renderer.html_collection = (function untangled_spec$dom$edn_renderer$html_collection(class$,opener,closer,coll){
return untangled_spec.dom.edn_renderer.open_close.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("collection "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),opener,closer,untangled_spec.dom.edn_renderer.join_html.call(null," ",coll));
});
untangled_spec.dom.edn_renderer.html_map = (function untangled_spec$dom$edn_renderer$html_map(coll){
return untangled_spec.dom.edn_renderer.open_close.call(null,"collection map","{","}",untangled_spec.dom.edn_renderer.html_keyvals.call(null,coll));
});
untangled_spec.dom.edn_renderer.html_string = (function untangled_spec$dom$edn_renderer$html_string(s){
return untangled_spec.dom.edn_renderer.open_close.call(null,"string","\"","\"",s);
});
untangled_spec.dom.edn_renderer.html = (function untangled_spec$dom$edn_renderer$html(x){
if(typeof x === 'number'){
return untangled_spec.dom.edn_renderer.literal.call(null,"number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return untangled_spec.dom.edn_renderer.literal.call(null,"keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return untangled_spec.dom.edn_renderer.literal.call(null,"symbol",x);
} else {
if(typeof x === 'string'){
return untangled_spec.dom.edn_renderer.html_string.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return untangled_spec.dom.edn_renderer.html_map.call(null,x);
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return untangled_spec.dom.edn_renderer.html_collection.call(null,"set","#{","}",x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return untangled_spec.dom.edn_renderer.html_collection.call(null,"vector","[","]",x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return untangled_spec.dom.edn_renderer.html_collection.call(null,"seq","(",")",x);
} else {
return untangled_spec.dom.edn_renderer.literal.call(null,"literal",x);

}
}
}
}
}
}
}
}
});
untangled_spec.dom.edn_renderer.html_edn = (function untangled_spec$dom$edn_renderer$html_edn(var_args){
var args__35783__auto__ = [];
var len__35776__auto___63008 = arguments.length;
var i__35777__auto___63009 = (0);
while(true){
if((i__35777__auto___63009 < len__35776__auto___63008)){
args__35783__auto__.push((arguments[i__35777__auto___63009]));

var G__63010 = (i__35777__auto___63009 + (1));
i__35777__auto___63009 = G__63010;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((1) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((1)),(0),null)):null);
return untangled_spec.dom.edn_renderer.html_edn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35784__auto__);
});

untangled_spec.dom.edn_renderer.html_edn.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__63001){
var vec__63002 = p__63001;
var diff = cljs.core.nth.call(null,vec__63002,(0),null);
var _STAR_key_counter_STAR_63005 = untangled_spec.dom.edn_renderer._STAR_key_counter_STAR_;
untangled_spec.dom.edn_renderer._STAR_key_counter_STAR_ = cljs.core.atom.call(null,(0));

try{return om.dom.div.call(null,({"className": "rendered-edn com-rigsomelight-devcards-typog"}),(function (){try{return untangled_spec.dom.edn_renderer.html.call(null,(function (){var G__63007 = e;
if(cljs.core.truth_(diff)){
return untangled_spec.diff.patch.call(null,G__63007,diff);
} else {
return G__63007;
}
})());
}catch (e63006){if((e63006 instanceof Object)){
var e__$1 = e63006;
return untangled_spec.dom.edn_renderer.html.call(null,"DIFF CRASHED ON OUTPUT");
} else {
throw e63006;

}
}})());
}finally {untangled_spec.dom.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR_63005;
}});

untangled_spec.dom.edn_renderer.html_edn.cljs$lang$maxFixedArity = (1);

untangled_spec.dom.edn_renderer.html_edn.cljs$lang$applyTo = (function (seq62999){
var G__63000 = cljs.core.first.call(null,seq62999);
var seq62999__$1 = cljs.core.next.call(null,seq62999);
return untangled_spec.dom.edn_renderer.html_edn.cljs$core$IFn$_invoke$arity$variadic(G__63000,seq62999__$1);
});


//# sourceMappingURL=edn_renderer.js.map?rel=1491640778143