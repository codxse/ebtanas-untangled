// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.i18n');
goog.require('cljs.core');
goog.require('untangled.i18n.core');
goog.require('yahoo.intl_messageformat_with_locales');
goog.require('untangled.client.logging');
untangled.i18n.current_locale = (function untangled$i18n$current_locale(){
return cljs.core.deref.call(null,untangled.i18n.core._STAR_current_locale_STAR_);
});
untangled.i18n.translations_for_locale = (function untangled$i18n$translations_for_locale(){
return cljs.core.get.call(null,cljs.core.deref.call(null,untangled.i18n.core._STAR_loaded_translations_STAR_),untangled.i18n.current_locale.call(null));
});
tr = (function (msg){
var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trc = (function (ctxt,msg){
var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctxt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,msg);
return translation;
});
trf = (function() { 
var G__42328__delegate = function (fmt,p__42324){
var map__42325 = p__42324;
var map__42325__$1 = ((((!((map__42325 == null)))?((((map__42325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42325):map__42325);
var argmap = map__42325__$1;
try{var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,untangled.i18n.current_locale.call(null)));
return formatter.format(cljs.core.clj__GT_js.call(null,argmap));
}catch (e42327){var e = e42327;
untangled.client.logging.error.call(null,"Failed to format ",fmt," args: ",argmap," exception: ",e);

return "???";
}};
var G__42328 = function (fmt,var_args){
var p__42324 = null;
if (arguments.length > 1) {
var G__42329__i = 0, G__42329__a = new Array(arguments.length -  1);
while (G__42329__i < G__42329__a.length) {G__42329__a[G__42329__i] = arguments[G__42329__i + 1]; ++G__42329__i;}
  p__42324 = new cljs.core.IndexedSeq(G__42329__a,0);
} 
return G__42328__delegate.call(this,fmt,p__42324);};
G__42328.cljs$lang$maxFixedArity = 1;
G__42328.cljs$lang$applyTo = (function (arglist__42330){
var fmt = cljs.core.first(arglist__42330);
var p__42324 = cljs.core.rest(arglist__42330);
return G__42328__delegate(fmt,p__42324);
});
G__42328.cljs$core$IFn$_invoke$arity$variadic = G__42328__delegate;
return G__42328;
})()
;

//# sourceMappingURL=i18n.js.map?rel=1491695650962