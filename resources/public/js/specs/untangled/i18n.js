// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.i18n');
goog.require('cljs.core');
goog.require('untangled.i18n.core');
goog.require('untangled.client.logging');
goog.require('yahoo.intl_messageformat_with_locales');
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
var G__45369__delegate = function (fmt,p__45365){
var map__45366 = p__45365;
var map__45366__$1 = ((((!((map__45366 == null)))?((((map__45366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45366):map__45366);
var argmap = map__45366__$1;
try{var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join('');
var translations = untangled.i18n.translations_for_locale.call(null);
var translation = cljs.core.get.call(null,translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,untangled.i18n.current_locale.call(null)));
return formatter.format(cljs.core.clj__GT_js.call(null,argmap));
}catch (e45368){var e = e45368;
untangled.client.logging.error.call(null,"Failed to format ",fmt," args: ",argmap," exception: ",e);

return "???";
}};
var G__45369 = function (fmt,var_args){
var p__45365 = null;
if (arguments.length > 1) {
var G__45370__i = 0, G__45370__a = new Array(arguments.length -  1);
while (G__45370__i < G__45370__a.length) {G__45370__a[G__45370__i] = arguments[G__45370__i + 1]; ++G__45370__i;}
  p__45365 = new cljs.core.IndexedSeq(G__45370__a,0);
} 
return G__45369__delegate.call(this,fmt,p__45365);};
G__45369.cljs$lang$maxFixedArity = 1;
G__45369.cljs$lang$applyTo = (function (arglist__45371){
var fmt = cljs.core.first(arglist__45371);
var p__45365 = cljs.core.rest(arglist__45371);
return G__45369__delegate(fmt,p__45365);
});
G__45369.cljs$core$IFn$_invoke$arity$variadic = G__45369__delegate;
return G__45369;
})()
;

//# sourceMappingURL=i18n.js.map?rel=1491640759603