// Compiled by ClojureScript 1.9.494 {}
goog.provide('untangled.websockets.transit_packer');
goog.require('cljs.core');
goog.require('om.transit');
goog.require('taoensso.sente.packers.transit');
goog.require('om.tempid');
/**
 * Returns a json packer for use with sente.
 */
untangled.websockets.transit_packer.make_packer = (function untangled$websockets$transit_packer$make_packer(p__53823){
var map__53828 = p__53823;
var map__53828__$1 = ((((!((map__53828 == null)))?((((map__53828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53828):map__53828);
var read = cljs.core.get.call(null,map__53828__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var write = cljs.core.get.call(null,map__53828__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
return taoensso.sente.packers.transit.__GT_TransitPacker.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),(function (){var G__53830 = cljs.core.PersistentArrayMap.createAsIfByAssoc([om.tempid.TempId,om.transit.__GT_TempIdHandler.call(null)]);
if(cljs.core.truth_(write)){
return cljs.core.merge.call(null,G__53830,write);
} else {
return G__53830;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),(function (){var G__53831 = new cljs.core.PersistentArrayMap(null, 1, ["om/id",((function (map__53828,map__53828__$1,read,write){
return (function (id){
return om.tempid.tempid.call(null,id);
});})(map__53828,map__53828__$1,read,write))
], null);
if(cljs.core.truth_(read)){
return cljs.core.merge.call(null,G__53831,read);
} else {
return G__53831;
}
})()], null));
});

//# sourceMappingURL=transit_packer.js.map?rel=1491640769256