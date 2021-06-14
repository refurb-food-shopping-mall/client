export default {
  namespaced: true,
  state: {
    token: '',
  },
  mutations: {
    SET_TOKEN(state, tokenData) {
      state.token = tokenData
    }
  },
  actions: {
  },
  getters: {
    loggedIn(state) {
      return (state.token) ? true : false
    }
  },
}