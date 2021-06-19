import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './modules/auth'
import user from './modules/user'
import cart from './modules/cart'

Vue.use(Vuex)

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  // modules: ['auth, user'] // only save auth, user module
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
    cart
  }
})
