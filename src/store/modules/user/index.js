export default {
  namespaced: true,
  state: {
    userName: '',
    userPhoneNumber: '',
    userEmail: '',
    userPointMoney: null,
  },
  mutations: {
    SET_USER_INFO(state, userData) {
      state.userName = userData.userName
      state.userEmail = userData.userEmail
      state.userPhoneNumber = userData.userPhoneNumber
      state.userPointMoney = userData.userPointMoney
    },
  },
  actions: {
  },
  getters: {
  },
}