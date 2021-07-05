export default {
  namespaced: true,
  state: {
    // cart => [
    //   { productIdx: 23, productQty: 3 },
    //   { productIdx: 12, productQty: 1 },
    //   { productIdx: 33, productQty: 7 },
    //    
    //   { prodcutIdx: <type: Number>, productQty: <type: Number> }
    // ]
    cart: [],
    cartSumOfQuantity: 0,
    cartErrorMessage: ''
  },
  mutations: {
    PUSH_NEW_PRODUCT_TO_CART(state, { productIdx, quantity }) {
      state.cart.push({
        productIdx: Number(productIdx),
        productQty: Number(quantity),
      })
    },
    INCREASE_PRODUCT_QTY(state, { cartArrIdx, quantity }) {
      const productInfo = state.cart[cartArrIdx]

      productInfo.productQty += Number(quantity)

      state.cart.splice(cartArrIdx, 1, productInfo)
    },
    DECREASE_PRODUCT_QTY(state, { cartArrIdx, quantity }) {
      const productInfo = state.cart[cartArrIdx]

      productInfo.productQty += Number(quantity)

      state.cart.splice(cartArrIdx, 1, productInfo)
    },
    INCREASE_SUM_OF_QTY(state, quantity) {
      state.cartSumOfQuantity += Number(quantity)
    },
    DECREASE_SUM_OF_QTY(state, quantity) {
      state.cartSumOfQuantity += Number(quantity)
    },
    CLEAR_CART(state) {
      state.cart = []
      state.cartSumOfQuantity = 0
    },
    DELETE_PRODUCT_FROM_CART(state, cartArrIdx) {
      state.cart.splice(cartArrIdx, 1);
    },
    CART_ERROR_MESSAGE(state, errorMessage) {
      state.cartErrorMessage = errorMessage
    }
  },
  actions: {
    addProductToCart({ state, commit }, { productIdx, quantity }) {
      const cartArrIdx = state.cart.findIndex(productInfo => productInfo.productIdx == productIdx)

      if (cartArrIdx < 0) {
        commit('PUSH_NEW_PRODUCT_TO_CART', { productIdx, quantity })
      } else {
        commit('INCREASE_PRODUCT_QTY', { cartArrIdx, quantity })
      }
      commit('INCREASE_SUM_OF_QTY', quantity)
    },
    adjustingQuantity({ state, commit }, { cartArrIdx, quantity }) {
      if (quantity > 0) {
        commit('INCREASE_PRODUCT_QTY', { cartArrIdx, quantity })
        commit('INCREASE_SUM_OF_QTY', quantity)
      } else if (quantity < 0) {
        if (state.cart[cartArrIdx].productQty > quantity) {
          commit('DECREASE_PRODUCT_QTY', { cartArrIdx, quantity })
          commit('DECREASE_SUM_OF_QTY', quantity)
        } else {
          commit('CART_ERROR_MESSAGE', { msg: "1 개 이상의 제품을 담아야 합니다." })
        }
      }
    }
  },
  getters: {
    getCartQuantity(state) {
      return state.cartSumOfQuantity
    },
    getCartLength(state) {
      return state.cart.length
    },
  },
}