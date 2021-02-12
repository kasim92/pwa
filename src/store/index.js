import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    completed: [],
    dataFields: ['todos', 'completed']
  },
  actions: {

  },
  mutations: {

  },
})