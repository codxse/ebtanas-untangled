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
ebtanas.core.app = cljs.core.atom.call(null,untangled.client.core.new_untangled_client.call(null));
}

//# sourceMappingURL=core.js.map?rel=1491715071608