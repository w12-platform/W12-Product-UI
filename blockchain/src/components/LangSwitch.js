import Vue from 'vue';
import vuexI18n from 'vuex-i18n';
import store from "store";

import LangSwitch from 'bem/LangSwitch';

Vue.use(vuexI18n.plugin, store, {
    translateFilterName: 't'
});

import LangPlugin from 'plugin/LangPlugin';
Vue.use(LangPlugin);

new Vue({
    store,
    el: '#langSwitch',
    template: "<lang-switch></lang-switch>",
    components: {
        LangSwitch
    }
});