<template>
  <div
    id="signUpView"
    class="row d-flex justify-content-center align-content-center my-5"
  >
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">회원가입</h4>

          <hr />

          <div
            v-if="errorMessage"
            class="alert alert-dismissible alert-secondary my-4"
          >
            😢 {{ errorMessage }}
          </div>
          <div
            v-if="!loading && !errorMessage"
            class="alert alert-dismissible alert-light my-4"
          >
            ✔ 아래 폼을 입력해주세요
          </div>
          <div
            v-if="loading"
            class="alert alert-dismissible alert-light my-4"
            style=""
          >
            <img src="@/assets/loadingBar.svg" alt="loadingBar" />
          </div>

          <form @submit.prevent="userSignupSubmit">
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-2"
                >아이디 입력:</label
              >
              <input
                v-model="userInfo.userEmail"
                ref="emailInput"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="😊 이메일 주소를 입력해주세요"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1" class="form-label mt-3"
                >비밀번호 입력:</label
              >
              <input
                v-model="userInfo.userPassword"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="🚨 비밀번호를 입력해주세요"
              />
            </div>

            <div class="form-group mb-4">
              <label for="exampleInputPassword1" class="form-label mt-3"
                >비밀번호 재입력:</label
              >
              <input
                v-model="userInfo.confirmPassword"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="🚨 비밀번호를 다시 한번 입력해주세요"
              />
            </div>

            <div class="form-group">
              <label class="col-form-label mt-3" for="inputDefault"
                >이름:</label
              >
              <input
                v-model="userInfo.userName"
                type="text"
                class="form-control"
                placeholder="이름을 입력해주세요 :)"
                id="inputDefault"
              />
            </div>

            <div class="form-group">
              <label class="col-form-label mt-3" for="inputDefault"
                >연락처:</label
              >
              <input
                v-model="userInfo.userPhoneNumber"
                type="text"
                class="form-control"
                placeholder="🎈 연락처를 입력해주세요 "
                id="inputDefault"
              />
            </div>

            <!-- <div class="form-group">
          <label class="col-form-label mt-3" for="inputDefault">주소:</label>
          <input
              type="text"
              class="form-control"
              placeholder="🚗 주소를 입력해주세요"
              id="inputDefault"
            />
          </div> -->

            <button type="submit" class="btn btn-info mt-3">가입하기</button>
          </form>

          <hr />

          <div class="d-flex justify-content-end">
            <div class="mx-3 pt-1">계정이 있으신가요?</div>
            <router-link to="/login">
              <button type="submit" class="btn btn-light">로그인하기</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      errorMessage: "",
      userInfo: {
        userEmail: "",
        userPassword: "",
        confirmPassword: "",
        userName: "",
        userPhoneNumber: "",
      },
    };
  },
  mounted() {
    this.$refs.emailInput.focus();
  },
  watch: {
    userInfo: {
      handler() {
        this.errorMessage = "";
      },
      deep: true,
    },
  },
  methods: {
    userSignupSubmit() {
      // TODO validation needed

      this.errorMessage = "";
      this.loading = true;

      if (this.userInfo.userPassword !== this.userInfo.confirmPassword) {
        this.errorMessage = "비밀번호가 일치하지 않습니다.";
        return;
      }

      const newUserData = {
        userEmail: this.userInfo.userEmail,
        userPassword: this.userInfo.userPassword,
        confirmPassword: this.userInfo.confirmPassword,
        userName: this.userInfo.userName,
        userPhoneNumber: this.userInfo.userPhoneNumber,
      };

      this.$axios
        .post(`${this.$domain}/auth/signup`, newUserData)
        .then((res) => {
          setTimeout(() => {
            this.loading = false;
            this.$store.commit("user/SET_USER_INFO", res.data.userData);
            this.$store.commit("auth/SET_TOKEN", res.data.tokenData);
            this.$router.push("/");
          }, 1000);
        })
        .catch((err) => {
          setTimeout(() => {
            this.loading = false;
            this.errorMessage = err.response.data.message;
            console.log(err.response.data.message);
          }, 1000);
        });
    },
  },
};
</script>

<style scoped>
#signUpView {
  user-select: none;
}
</style>