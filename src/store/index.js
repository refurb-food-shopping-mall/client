import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './modules/auth'
import user from './modules/user'

Vue.use(Vuex)

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  plugins: [vuexSession.plugin],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    auth,
    user,
  }
})
