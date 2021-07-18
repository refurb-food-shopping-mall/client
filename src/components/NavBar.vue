<template>
  <div id="navbar" class="container px-3">
    <nav
      class="navbar p-1 navbar-expand-lg navbar-dark navbar-inner"
      style="height: 55px"
    >
      <div class="container-fluid">
        <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/"
            >Home</router-link
          >
        </div>
        <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >Best Seller</router-link
          >
        </div>
        <!-- <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >후기많은상품</router-link
          >
        </div> -->
        <div class="d-flex justify-content-center px-3">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >정기구독상품</router-link
          >
        </div>
        <!-- <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >중식전용관</router-link
          >
        </div>
        <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >신상품</router-link
          >
        </div>
        <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >한식재료set</router-link
          >
        </div>
        <div class="d-flex justify-content-center px-3">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >10% off</router-link
          >
        </div> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto"></ul>

          <transition name="fade">
            <div v-if="isPageYOffsetBiggerThanHeaderSize">
              <router-link
                class="btn bg-white p-1 px-2"
                style=""
                to="/cart"
                role="button"
              >
                <font-awesome-icon icon="shopping-cart" color="#60be74" />
                <span class="badge bg-danger mx-2 text-dark">{{
                  $store.getters["cart/getCartLength"]
                }}</span>
                <span class="text-dark">내 장바구니</span>
              </router-link>
            </div>
          </transition>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPageYOffsetBiggerThanHeaderSize: false
    };
  },
  created () {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if (window.pageYOffset > 177) {
        this.isPageYOffsetBiggerThanHeaderSize = true
      } else {
        this.isPageYOffsetBiggerThanHeaderSize = false
      }
      // console.log(window.pageYOffset, this.isPageYOffsetBiggerThanHeaderSize)
    }
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.navbar-inner {
  background-color: rgb(90, 179, 149);
  border-radius: 10px;
}
#navbar {
  margin-top: -25px;
}
/* .navbar::before {
  width: 0;
  height: 0;
  border-right: 25px solid #60be74;
  border-top: 27px solid transparent;
  border-bottom: 27px solid transparent;
  content: "";
  position: absolute;
  margin-left: -24px;
}
.navbar::after {
  width: 0;
  height: 0;
  border-left: 25px solid #60be74;
  border-bottom: 27px solid transparent;
  border-top: 27px solid transparent;
  content: "";
  position: absolute;
  margin-right: -24px;
  right: 0px;
  margin-top: 0px;
} */
</style>