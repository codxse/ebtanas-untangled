// Compiled by ClojureScript 1.9.494 {}
goog.provide('ebtanas.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('untangled.client.core');
goog.require('untangled.client.data_fetch');
goog.require('ebtanas.state.mutations');
goog.require('untangled.client.logging');
ebtanas.core.merge_mutations = (function ebtanas$core$merge_mutations(state,k,p){
untangled.client.logging.info.call(null,"Got return value for ",k," -> ",p);

return state;
});
if(typeof ebtanas.core.app !== 'undefined'){
} else {
ebtanas.core.app = cljs.core.atom.call(null,untangled.client.core.new_untangled_client.call(null,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),ebtanas.core.merge_mutations,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),(function (p__86665){
var map__86666 = p__86665;
var map__86666__$1 = ((((!((map__86666 == null)))?((((map__86666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86666):map__86666);
var reconciler = cljs.core.get.call(null,map__86666__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return untangled.client.data_fetch.load_data.call(null,reconciler,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logged-in?","logged-in?",-661271089),new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("login","login-complete","login/login-complete",-850704332,null));
})));
}

//# sourceMappingURL=core.js.map?rel=1491640822597