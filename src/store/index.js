import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

import * as home from './modules/home'
import * as pharmacy from './modules/pharmacy'


export default new Vuex.Store({
  modules: {
    home,
    pharmacy
  },
  // plugins: [
  //   createPersistedState({ paths: ['app'], })
  // ]
})
