// Compiled by ClojureScript 1.9.494 {}
goog.provide('om_css.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.core');

/**
 * @interface
 */
om_css.core.CSS = function(){};

/**
 * Specifies the component-local CSS
 */
om_css.core.css = (function om_css$core$css(this$){
if((!((this$ == null))) && (!((this$.om_css$core$CSS$css$arity$1 == null)))){
return this$.om_css$core$CSS$css$arity$1(this$);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (om_css.core.css[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$);
} else {
var m__35274__auto____$1 = (om_css.core.css["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSS.css",this$);
}
}
}
});

/**
 * Replaces slashes and dots with underscore.
 */
om_css.core.cssify = (function om_css$core$cssify(str){
return clojure.string.replace.call(null,str,/[.\/]/,"_");
});
/**
 * Generate a keyword for a localized CSS class for use in Garden CSS syntax as a localized component classname keyword.
 */
om_css.core.local_kw = (function om_css$core$local_kw(var_args){
var args55569 = [];
var len__35776__auto___55572 = arguments.length;
var i__35777__auto___55573 = (0);
while(true){
if((i__35777__auto___55573 < len__35776__auto___55572)){
args55569.push((arguments[i__35777__auto___55573]));

var G__55574 = (i__35777__auto___55573 + (1));
i__35777__auto___55573 = G__55574;
continue;
} else {
}
break;
}

var G__55571 = args55569.length;
switch (G__55571) {
case 1:
return om_css.core.local_kw.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_css.core.local_kw.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55569.length)].join('')));

}
});

om_css.core.local_kw.cljs$core$IFn$_invoke$arity$1 = (function (comp_class){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.cssify.call(null,cljs.core.pr_str.call(null,comp_class)))].join(''));
});

om_css.core.local_kw.cljs$core$IFn$_invoke$arity$2 = (function (comp_class,nm){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.cssify.call(null,cljs.core.pr_str.call(null,comp_class))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,nm))].join(''));
});

om_css.core.local_kw.cljs$lang$maxFixedArity = 2;

/**
 * Generates a string name of a localized CSS class. This function combines the fully-qualified name of the given class
 *   with the (optional) specified name.
 */
om_css.core.local_class = (function om_css$core$local_class(var_args){
var args55576 = [];
var len__35776__auto___55579 = arguments.length;
var i__35777__auto___55580 = (0);
while(true){
if((i__35777__auto___55580 < len__35776__auto___55579)){
args55576.push((arguments[i__35777__auto___55580]));

var G__55581 = (i__35777__auto___55580 + (1));
i__35777__auto___55580 = G__55581;
continue;
} else {
}
break;
}

var G__55578 = args55576.length;
switch (G__55578) {
case 1:
return om_css.core.local_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_css.core.local_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55576.length)].join('')));

}
});

om_css.core.local_class.cljs$core$IFn$_invoke$arity$1 = (function (comp_class){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.cssify.call(null,cljs.core.pr_str.call(null,comp_class)))].join('');
});

om_css.core.local_class.cljs$core$IFn$_invoke$arity$2 = (function (comp_class,nm){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_css.core.cssify.call(null,cljs.core.pr_str.call(null,comp_class))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,nm))].join('');
});

om_css.core.local_class.cljs$lang$maxFixedArity = 2;

/**
 * Merge together the CSS of components that implement the CSS interface and other literal CSS entries.
 *   This function can be used to simply chain together rules of Garden syntax:
 * 
 *   (css-merge [:c {:color :black}] [:d {:color :red}])
 * 
 *   which really just makes it a nested vector; however, you can intermix components that implement the CSS interface:
 * 
 *   (css-merge [:c {:color :black}] CSSComponent [:d {:color :red}])
 * 
 *   which themselves can have single rules, or vectors of rules:
 * 
 *   (defrecord MyCss []
 *     css/CSS
 *     (css [this] [ [:rule { ... }] [:rule2 { ... }] ]))
 * 
 *   (defui SomeUI
 *     static css/CSS
 *     (css [this] [ [:rule { ... }] [:rule2 { ... }] ]))
 * 
 *   (defui Root
 *     static css/CSS
 *     (css [this] (css-merge SomeUI MyCss))
 *     ...)
 *   
 */
om_css.core.css_merge = (function om_css$core$css_merge(var_args){
var args__35783__auto__ = [];
var len__35776__auto___55585 = arguments.length;
var i__35777__auto___55586 = (0);
while(true){
if((i__35777__auto___55586 < len__35776__auto___55585)){
args__35783__auto__.push((arguments[i__35777__auto___55586]));

var G__55587 = (i__35777__auto___55586 + (1));
i__35777__auto___55586 = G__55587;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((0) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((0)),(0),null)):null);
return om_css.core.css_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__35784__auto__);
});

om_css.core.css_merge.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return cljs.core.reduce.call(null,(function (acc,i){
if(((!((i == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === i.om_css$core$CSS$)))?true:false):false)){
var rules = om_css.core.css.call(null,i);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,rules)){
return cljs.core.into.call(null,acc,rules);
} else {
return cljs.core.conj.call(null,acc,rules);
}
} else {
if(cljs.core.vector_QMARK_.call(null,i)){
return cljs.core.conj.call(null,acc,i);
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,items);
});

om_css.core.css_merge.cljs$lang$maxFixedArity = (0);

om_css.core.css_merge.cljs$lang$applyTo = (function (seq55583){
return om_css.core.css_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55583));
});

/**
 * Remove the given element from the DOM by ID
 */
om_css.core.remove_from_dom = (function om_css$core$remove_from_dom(id){
var temp__6751__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__6751__auto__)){
var old_element = temp__6751__auto__;
var parent = old_element.parentNode;
return parent.removeChild(old_element);
} else {
return null;
}
});
/**
 * (Re)place the STYLE element with the provided ID on the document's DOM  with the co-located CSS of the specified component.
 */
om_css.core.upsert_css = (function om_css$core$upsert_css(id,root_component){
om_css.core.remove_from_dom.call(null,id);

var style_ele = document.createElement("style");
style_ele.innerHTML = garden.core.css.call(null,om_css.core.css.call(null,root_component));

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});

//# sourceMappingURL=core.js.map?rel=1491640771842