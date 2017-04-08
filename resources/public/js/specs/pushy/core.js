// Compiled by ClojureScript 1.9.494 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
return pushy.core.recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__63159 = h;
G__63159.setUseFragment(false);

G__63159.setPathPrefix("");

G__63159.setEnabled(true);

return G__63159;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var args63160 = [];
var len__35776__auto___63163 = arguments.length;
var i__35777__auto___63164 = (0);
while(true){
if((i__35777__auto___63164 < len__35776__auto___63163)){
args63160.push((arguments[i__35777__auto___63164]));

var G__63165 = (i__35777__auto___63164 + (1));
i__35777__auto___63164 = G__63165;
continue;
} else {
}
break;
}

var G__63162 = args63160.length;
switch (G__63162) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63160.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var args63167 = [];
var len__35776__auto___63173 = arguments.length;
var i__35777__auto___63174 = (0);
while(true){
if((i__35777__auto___63174 < len__35776__auto___63173)){
args63167.push((arguments[i__35777__auto___63174]));

var G__63175 = (i__35777__auto___63174 + (1));
i__35777__auto___63174 = G__63175;
continue;
} else {
}
break;
}

var G__63169 = args63167.length;
switch (G__63169) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63167.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$,token);
} else {
var m__35274__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$,token,title);
} else {
var m__35274__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var args63170 = [];
var len__35776__auto___63177 = arguments.length;
var i__35777__auto___63178 = (0);
while(true){
if((i__35777__auto___63178 < len__35776__auto___63177)){
args63170.push((arguments[i__35777__auto___63178]));

var G__63179 = (i__35777__auto___63178 + (1));
i__35777__auto___63178 = G__63179;
continue;
} else {
}
break;
}

var G__63172 = args63170.length;
switch (G__63172) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63170.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$,token);
} else {
var m__35274__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$,token,title);
} else {
var m__35274__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (pushy.core.get_token[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$);
} else {
var m__35274__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$);
} else {
var m__35274__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__35273__auto__ = (((this$ == null))?null:this$);
var m__35274__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__35273__auto__)]);
if(!((m__35274__auto__ == null))){
return m__35274__auto__.call(null,this$);
} else {
var m__35274__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__35274__auto____$1 == null))){
return m__35274__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (!(clojure.string.blank_QMARK_.call(null,uri))) && (((cljs.core.not.call(null,uri.hasScheme())) && (cljs.core.not.call(null,uri.hasDomain()))) || (!((cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".*$")].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('')) == null))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__35783__auto__ = [];
var len__35776__auto___63194 = arguments.length;
var i__35777__auto___63195 = (0);
while(true){
if((i__35777__auto___63195 < len__35776__auto___63194)){
args__35783__auto__.push((arguments[i__35777__auto___63195]));

var G__63196 = (i__35777__auto___63195 + (1));
i__35777__auto___63195 = G__63196;
continue;
} else {
}
break;
}

var argseq__35784__auto__ = ((((2) < args__35783__auto__.length))?(new cljs.core.IndexedSeq(args__35783__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35784__auto__);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__63184){
var map__63185 = p__63184;
var map__63185__$1 = ((((!((map__63185 == null)))?((((map__63185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63185):map__63185);
var processable_url_QMARK_ = cljs.core.get.call(null,map__63185__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.call(null,map__63185__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core63187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core63187 = (function (dispatch_fn,match_fn,p__63184,map__63185,processable_url_QMARK_,identity_fn,history,event_keys,meta63188){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.p__63184 = p__63184;
this.map__63185 = map__63185;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta63188 = meta63188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

pushy.core.t_pushy$core63187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (_63189,meta63188__$1){
var self__ = this;
var _63189__$1 = this;
return (new pushy.core.t_pushy$core63187(self__.dispatch_fn,self__.match_fn,self__.p__63184,self__.map__63185,self__.processable_url_QMARK_,self__.identity_fn,self__.history,self__.event_keys,meta63188__$1));
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;


pushy.core.t_pushy$core63187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (_63189){
var self__ = this;
var _63189__$1 = this;
return self__.meta63188;
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;


pushy.core.t_pushy$core63187.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;


pushy.core.t_pushy$core63187.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;


pushy.core.t_pushy$core63187.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;


pushy.core.t_pushy$core63187.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;


pushy.core.t_pushy$core63187.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;


pushy.core.t_pushy$core63187.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;


pushy.core.t_pushy$core63187.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__6753__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__6753__auto__)){
var match = temp__6753__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
));

var temp__6753__auto___63197 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__6753__auto___63197)){
var match_63198 = temp__6753__auto___63197;
self__.dispatch_fn.call(null,match_63198);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (e){
var temp__6753__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__6753__auto__)){
var el = temp__6753__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__34543__auto__ = self__.processable_url_QMARK_.call(null,uri);
if(cljs.core.truth_(and__34543__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (cljs.core.not.call(null,cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__34543__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri.call(null,uri);
if(cljs.core.truth_(self__.identity_fn.call(null,self__.match_fn.call(null,next_token)))){
var temp__6751__auto___63199 = el.title;
if(cljs.core.truth_(temp__6751__auto___63199)){
var title_63200 = temp__6751__auto___63199;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_63200);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
));

return null;
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;


pushy.core.t_pushy$core63187.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__63190_63201 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__63191_63202 = null;
var count__63192_63203 = (0);
var i__63193_63204 = (0);
while(true){
if((i__63193_63204 < count__63192_63203)){
var key_63205 = cljs.core._nth.call(null,chunk__63191_63202,i__63193_63204);
goog.events.unlistenByKey(key_63205);

var G__63206 = seq__63190_63201;
var G__63207 = chunk__63191_63202;
var G__63208 = count__63192_63203;
var G__63209 = (i__63193_63204 + (1));
seq__63190_63201 = G__63206;
chunk__63191_63202 = G__63207;
count__63192_63203 = G__63208;
i__63193_63204 = G__63209;
continue;
} else {
var temp__6753__auto___63210 = cljs.core.seq.call(null,seq__63190_63201);
if(temp__6753__auto___63210){
var seq__63190_63211__$1 = temp__6753__auto___63210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63190_63211__$1)){
var c__35466__auto___63212 = cljs.core.chunk_first.call(null,seq__63190_63211__$1);
var G__63213 = cljs.core.chunk_rest.call(null,seq__63190_63211__$1);
var G__63214 = c__35466__auto___63212;
var G__63215 = cljs.core.count.call(null,c__35466__auto___63212);
var G__63216 = (0);
seq__63190_63201 = G__63213;
chunk__63191_63202 = G__63214;
count__63192_63203 = G__63215;
i__63193_63204 = G__63216;
continue;
} else {
var key_63217 = cljs.core.first.call(null,seq__63190_63211__$1);
goog.events.unlistenByKey(key_63217);

var G__63218 = cljs.core.next.call(null,seq__63190_63211__$1);
var G__63219 = null;
var G__63220 = (0);
var G__63221 = (0);
seq__63190_63201 = G__63218;
chunk__63191_63202 = G__63219;
count__63192_63203 = G__63220;
i__63193_63204 = G__63221;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core63187.getBasis = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"p__63184","p__63184",-1094820570,null),new cljs.core.Symbol(null,"map__63185","map__63185",-146575353,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta63188","meta63188",-149151519,null)], null);
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.t_pushy$core63187.cljs$lang$type = true;

pushy.core.t_pushy$core63187.cljs$lang$ctorStr = "pushy.core/t_pushy$core63187";

pushy.core.t_pushy$core63187.cljs$lang$ctorPrWriter = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function (this__35212__auto__,writer__35213__auto__,opt__35214__auto__){
return cljs.core._write.call(null,writer__35213__auto__,"pushy.core/t_pushy$core63187");
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;

pushy.core.__GT_t_pushy$core63187 = ((function (history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn){
return (function pushy$core$__GT_t_pushy$core63187(dispatch_fn__$1,match_fn__$1,p__63184__$1,map__63185__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta63188){
return (new pushy.core.t_pushy$core63187(dispatch_fn__$1,match_fn__$1,p__63184__$1,map__63185__$2,processable_url_QMARK___$1,identity_fn__$1,history__$1,event_keys__$1,meta63188));
});})(history,event_keys,map__63185,map__63185__$1,processable_url_QMARK_,identity_fn))
;

}

return (new pushy.core.t_pushy$core63187(dispatch_fn,match_fn,p__63184,map__63185__$1,processable_url_QMARK_,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = (2);

pushy.core.pushy.cljs$lang$applyTo = (function (seq63181){
var G__63182 = cljs.core.first.call(null,seq63181);
var seq63181__$1 = cljs.core.next.call(null,seq63181);
var G__63183 = cljs.core.first.call(null,seq63181__$1);
var seq63181__$2 = cljs.core.next.call(null,seq63181__$1);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(G__63182,G__63183,seq63181__$2);
});

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args63222 = [];
var len__35776__auto___63225 = arguments.length;
var i__35777__auto___63226 = (0);
while(true){
if((i__35777__auto___63226 < len__35776__auto___63225)){
args63222.push((arguments[i__35777__auto___63226]));

var G__63227 = (i__35777__auto___63226 + (1));
i__35777__auto___63226 = G__63227;
continue;
} else {
}
break;
}

var G__63224 = args63222.length;
switch (G__63224) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63222.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var args63229 = [];
var len__35776__auto___63232 = arguments.length;
var i__35777__auto___63233 = (0);
while(true){
if((i__35777__auto___63233 < len__35776__auto___63232)){
args63229.push((arguments[i__35777__auto___63233]));

var G__63234 = (i__35777__auto___63233 + (1));
i__35777__auto___63233 = G__63234;
continue;
} else {
}
break;
}

var G__63231 = args63229.length;
switch (G__63231) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63229.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1491640778768