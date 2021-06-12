import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      token: '',
    },
    userInfo: {
      userName: '',
      userPhoneNumber: '',
      userEmail: '',
      userPointMoney: null,
    }
  },
  mutations: {
    SET_USER_INFO(state, userData) {
      state.userInfo.userName = userData.userName
      state.userInfo.userEmail = userData.userEmail
      state.userInfo.userPhoneNumber = userData.userPhoneNumber
      state.userInfo.userPointMoney = userData.userPointMoney
    },
    SET_TOKEN(state, tokenData) {
      state.auth.token = tokenData
    }
  },
  actions: {
  },
  getters: {
    loggedIn(state) {
      return (state.auth.token) ? true : false
    }
  },
  modules: {
  }
})
