export default {
  namespaced: true,
  state: {
    // cart => [
    //   { productIdx: 23, productQty: 3 },
    //   { productIdx: 12, productQty: 1 },
    //   { productIdx: 33, productQty: 7 },
    // ]
    cart: [],
    cartSumOfQuantity: 0,
  },
  mutations: {
    PUSH_NEW_PRODUCT_TO_CART(state, { productIdx, selectedQty }) {
      state.cart.push({
        productIdx,
        productQty: selectedQty,
      })
    },
    INCREASE_ALREADY_INCLUDED_PRODUCT_QTY(state, { alreadyIncludedProductIdx, selectedQty }) {
      const productInfo = state.cart[alreadyIncludedProductIdx]

      productInfo.productQty += selectedQty

      state.cart.splice(alreadyIncludedProductIdx, 1, productInfo)
    },
    INCREASE_SUM_OF_QTY(state, selectedQty) {
      state.cartSumOfQuantity += Number(selectedQty)
    },
    CLEAR_CART(state) {
      state.cart = []
      state.cartSumOfQuantity = 0
    },
    CARCULATE_COUNT(state, payload) {
      state.cart[payload.i].productQty = state.cart[payload.i].productQty + payload.num
      if(state.cart[payload.i].productQty < 1){
        state.cart[payload.i].productQty = 1; 
      }
    },
    DELETE_PRODUCT(state, i){
      state.cart.splice(i, 1);
    }
  },
  actions: {
    addProductToCart({ state, commit }, { productIdx, selectedQty }) {
      const alreadyIncludedProductIdx = state.cart.findIndex(productInfo => productInfo.productIdx == productIdx)

      if (alreadyIncludedProductIdx < 0) {
        commit('PUSH_NEW_PRODUCT_TO_CART', { productIdx, selectedQty })
      } else {
        commit('INCREASE_ALREADY_INCLUDED_PRODUCT_QTY', { alreadyIncludedProductIdx, selectedQty })
      }
      commit('INCREASE_SUM_OF_QTY', selectedQty)
    }
  },
  getters: {
    getCartQuantity(state) {
      return state.cartSumOfQuantity
    }
  },
}