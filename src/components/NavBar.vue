<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            src="@/assets/logo2_.jpg"
            class="rounded mx-auto d-block"
            height="90"
            width="160"
            alt="로고"
          />
          <!-- 추가 -->
        </router-link>
        <router-link class="navbar-brand" to="/product">상품 보기</router-link>
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
          <ul class="navbar-nav me-auto">
            <!-- <li class="nav-item">
              <a class="nav-link active" href="#"
                >Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li> -->
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/cart">Cart</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cancel">Cancel</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/payment">Payment</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/paymentdetail"
                >paymentdetail</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/product">product</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shipping"
                >shipping</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profileupdate"
                >userprofileupdate</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">signup</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/addproduct"
                >Addproduct</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/writereview"
                >Review</router-link
              >
            </li> -->
          </ul>

          <!-- <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              search
            </button>
          </form> -->
          <div class="px-2 mx-1 btn">
            <font-awesome-icon icon="search" />
          </div>
          <router-link to="/cart" class="px-2 mx-1 btn">
            <font-awesome-icon icon="shopping-cart" />
          </router-link>

          <span style="color: red"
            >({{ $store.getters["cart/getCartLength"] }})</span
          >

          <button
            v-if="$store.getters['auth/loggedIn']"
            type="button"
            class="btn btn-light mx-1"
          >
            {{ $store.state.user.userName }} 님
          </button>

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
    console.log(this.$store);
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
    }
  }
};
</script>

<style>
</style>