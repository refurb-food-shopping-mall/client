<template>
  <!-- header -->
  <div class="header__wrapper">
    <div class="header container">
      <!-- header-top -->
      <div class="header-top">
        <div class="pt-2 pb-3 pt-md-1 pb-md-1">
          <div class="row mx-md-2">
            <div class="col-sm-6">
              <div class="phone-number">
                <strong>Call:</strong>
                <span>+82 02-2639-3452</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="d-flex text-end justify-content-end">
                <!-- <div class="ms-3">
                  <router-link class="links" to="/"> 계정 </router-link>
                </div>
                <div class="ms-3">
                  <router-link class="links" to="/"> 결제 </router-link>
                </div> -->
                <div
                  v-if="$store.getters['auth/loggedIn']"
                  @click.prevent="userLogout"
                  class="ms-3"
                >
                  <router-link class="links" to="/"> 로그아웃 </router-link>
                </div>
                <div v-else class="ms-3">
                  <router-link class="links" to="/login">
                    로그인 & 회원가입
                  </router-link>
                </div>
                <div v-if="$store.getters['auth/loggedIn']" class="ms-3">
                  <router-link class="links" to="/mypage/dashboard">
                    {{ $store.state.user.userName }} 님
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- header-container -->
      <!-- @@@@@@@@@@@@@ pc - 화면 @@@@@@@@@@@@@@@ -->
      <div class="row align-items-end px-md-3 pb-4 pt-2 d-none d-md-flex">
        <!-- 로고 영역 -->
        <div class="col-md-3 ps-4">
          <router-link to="/">
            <img
              style="height: 30px"
              src="../assets/logo-header-trans.png"
              alt=""
              srcset=""
            />
            <!-- <img src="//cdn.shopify.com/s/files/1/1544/9109/t/2/assets/logo.png?v=1197130876783333029" height="" alt="" srcset=""> -->
          </router-link>
        </div>

        <div class="col-md-9 d-flex justify-content-end p-0">
          <!-- 검색창 영역 -->
          <div class="input-group mx-md-3" style="max-width: 320px">
            <input
              type="search"
              class="form-control rounded-start"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" class="btn btn-outline-primary">
              <font-awesome-icon icon="search" />
            </button>
          </div>
          <!-- 장바구니 영역 -->
          <div class="me-md-3">
            <router-link class="btn bg-white" style="" to="/cart" role="button">
              <font-awesome-icon icon="shopping-cart" color="#60be74" />
              <span class="badge bg-danger mx-2 text-dark">{{
                $store.getters["cart/getCartLength"]
              }}</span>
              <span class="text-dark">내 장바구니</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      if (this.$route.name !== 'Home') {
        this.$router.push("/")
      }
    }
  },
}
</script>

<style scoped>
.t-b {
  border: 1px dashed green;
}
.links {
  color: #aaaaaa;
  text-decoration: none;
}
.header__wrapper {
  background-position: left top;
  background-repeat: no-repeat;
  background-image: url("../assets/vegetable_2_dark.jpg");
}
.header {
  padding-top: 15px;
  padding-bottom: 35px;
}
</style>