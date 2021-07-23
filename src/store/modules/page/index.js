export default {
  namespaced: true,
  state: {
    MyPageMenuDrawerActiveIdx: 0,
    MyPageMenuLinks: [
      {
        url: '/mypage/dashboard',
        name: '쇼핑 대시보드'
      },
      {
        url: '/cart',
        name: '장바구니'
      },
      {
        url: '/shipping',
        name: '주문 조회'
      },
      {
        url: '/mypage/couponandpoint',
        name: '쿠폰 & 포인트'
      },
      {
        url: '/mypage/profileupdate',
        name: '회원정보수정'
      },
      {
        url: '/mypage/deleteaccount',
        name: '회원탈퇴'
      },
    ]
  },
  mutations: {
    CHANGE_MYPAGE_MENU_DRAWER_ACTIVE_IDX(state, idx) {
      state.MyPageMenuDrawerActiveIdx = idx
    }
  },
  actions: {
    updateMyPageMenuDrawerActiveRoute({ state, commit }, path) {
      const matchedTabIdx = state.MyPageMenuLinks.findIndex(menuElemObj => menuElemObj.url == path)

      commit('CHANGE_MYPAGE_MENU_DRAWER_ACTIVE_IDX', matchedTabIdx)
    }
  },
  getters: {
  },
}