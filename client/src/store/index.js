import Vuex from 'vuex';
import Vue from 'vue';
import items from './modules/items';
import users from './modules/users';
import display from './modules/display';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    items,
    users,
    display,
  },
});
