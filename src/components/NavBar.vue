<template>
  <div id="navbar" class="container px-3">
    <nav class="navbar p-1 navbar-expand-lg navbar-dark navbar-inner">
      <div class="container-fluid">
        <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >Best Seller</router-link
          >
        </div>
        <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >후기많은상품</router-link
          >
        </div>
        <div class="d-flex justify-content-center px-3 border-end">
          <router-link class="fs-6 navbar-brand m-0 py-0" to="/product"
            >정기구독상품</router-link
          >
        </div>
        <div class="d-flex justify-content-center px-3 border-end">
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
        </div>
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
          <router-link to="/cart" class="px-2 mx-1 btn">
            <font-awesome-icon icon="shopping-cart" />
          </router-link>

          <span style="color: red"
            >({{ $store.getters["cart/getCartLength"] }})</span
          >

          <router-link to="/mypage/dashboard">
            <button
              v-if="$store.getters['auth/loggedIn']"
              type="button"
              class="btn btn-light mx-1"
            >
              {{ $store.state.user.userName }} 님
            </button>
          </router-link>

          <button
            @click.prevent="userLogout"
            v-if="$store.getters['auth/loggedIn']"
            type="button"
            class="btn btn-primary"
          >
            <span>Logout</span>
          </button>

          <router-link
            v-if="!$store.getters['auth/loggedIn']"
            to="/login"
            class="px-2 mx-1 btn btn-secondary"
          >
            <font-awesome-icon icon="user" />
            <span class="mx-2" style="font-weight: bold"> 로그인 </span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$store);
  },
  methods: {
    userLogout() {
      this.$store.commit("user/SET_USER_INFO", {
        userName: "",
        userPhoneNumber: "",
        userEmail: "",
        userPointMoney: null
      });
      this.$store.commit("auth/SET_TOKEN", "");
      this.$store.commit("cart/CLEAR_CART");
      sessionStorage.clear();
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.navbar-inner {
  background-color: #60be74;
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