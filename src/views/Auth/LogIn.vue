<template>
  <div
    id="loginView"
    class="row d-flex justify-content-center align-content-center my-5"
    style="height: 700px"
  >
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">로그인</h4>

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

          <form class="form-group" @submit.prevent="submitLoginForm">
            <div>
              <label for="exampleInputEmail1" class="form-label"
                >아이디 입력:</label
              >
              <input
                v-model="user.userEmail"
                ref="emailInput"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label mt-4"
                >비밀번호 입력:</label
              >
              <input
                v-model="user.userPassword"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password"
              />
            </div>

            <button type="submit" class="btn btn-info">로그인</button>
          </form>

          <hr />

          <div class="d-flex justify-content-between">
            <router-link to="/signup"
              ><button type="submit" class="btn btn-primary">회원가입</button>
            </router-link>
            <router-link to="/">아이디 | 비밀번호 찾기</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Joi from 'joi'

const schema = Joi.object({
  userEmail: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
  userPassword: Joi.string().trim().min(2).required(),
})

export default {
  data() {
    return {
      loading: false,
      errorMessage: "",
      user: {
        userEmail: "",
        userPassword: "",
      },
    };
  },
  mounted() {
    this.$refs.emailInput.focus();
  },
  watch: {
    user: {
      handler() {
        this.errorMessage = "";
      },
      deep: true,
    },
  },
  methods: {
    submitLoginForm() {
      // TODO strength validation needed 
      if (this.validForm()) {
        this.errorMessage = "";
        this.loading = true;
        this.$axios
          .post(`${this.$domain}/auth/login`, this.user)
          .then((res) => {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit('user/SET_USER_INFO', res.data.userData);
              this.$store.commit('auth/SET_TOKEN', res.data.tokenData);
              // localStorage.token = res.data.token;
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
      }
    },
    validForm() {
      const result = schema.validate(this.user)
      // console.log(result)
      // console.log(this.user)
      if (!result.error) {
        return true
      }
      if (result.error.message.includes('userEmail')) {
        this.errorMessage = '이메일 형식이 유효하지 않습니다.'
      } else {
        this.errorMessage = '패스워드 형식이 유효하지 않습니다.'
      }
      return false
    }
  },
};
</script>

<style scoped>
#loginView {
  user-select: none;
}
</style>
