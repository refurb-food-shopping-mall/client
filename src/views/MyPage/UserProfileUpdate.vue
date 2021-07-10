<template>
  <!-- <div class="row d-flex justify-content-center align-content-center m-3"> -->
  <div class="col-md-10">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">회원정보수정</h4>

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

        <form @submit.prevent="submitUserUpdateForm">
          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label mt-2"
              >아이디:</label
            >
            <input
              class="form-control"
              id="disabledInput"
              type="text"
              :placeholder="userProfile.user_email"
              disabled=""
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label mt-3"
              >새로운 비밀번호:</label
            >
            <input
              v-model="formData.new_password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="🚨 새로운 비밀번호를 입력해주세요"
            />
          </div>

          <div class="form-group mb-4">
            <label for="exampleInputPassword1" class="form-label mt-3"
              >비밀번호 재입력:</label
            >
            <input
              v-model="formData.confirm_password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="🚨 비밀번호를 다시 한번 입력해주세요"
            />
          </div>

          <div class="form-group">
            <label class="col-form-label" for="inputDefault">이름:</label>
            <input
              v-model="formData.user_name"
              type="text"
              class="form-control"
              :placeholder="userProfile.user_name"
              id="inputDefault"
            />
          </div>

          <div class="form-group">
            <label class="col-form-label mt-3" for="inputDefault"
              >연락처:</label
            >
            <input
              v-model="formData.phone_number"
              type="text"
              class="form-control"
              :placeholder="userProfile.phone_number"
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

          <hr />
          <button type="submit" class="btn btn-primary mt-3">수정하기</button>
        </form>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      errorMessage: "",
      formData: {
        new_password: '',
        confirm_password: '',
        user_name: '',
        phone_number: ''
      },
      userProfile: {
        user_name: '',
        user_email: '',
        phone_number: ''
      }
    }
  },
  watch: {
    formData: {
      handler() {
        this.errorMessage = "";
      },
      deep: true,
    },
  },
  mounted() {
    this.$axios({
      url: `${this.$domain}/userprofile`,
      method: 'get',         
      headers: {'authorization': `Bearer ${this.$store.state.auth.token}`},
    })
    .then((res) => {
      this.userProfile = res.data.userInfo
    })
    .catch((err) => {
      console.error(err);
    }) 
  },
  methods: {
    submitUserUpdateForm(){ 
      // TODO strength validation needed 
      this.errorMessage = "";


      if (!this.formData.new_password || !this.formData.confirm_password
          || !this.formData.user_name || !this.formData.phone_number)
      {
        this.errorMessage = '폼의 모든 부분을 입력해주세요.'
        return;
      }

      if (this.formData.new_password !== this.formData.confirm_password)
      {
        this.errorMessage = '새롭게 입력한 두 비밀번호가 일치해야 합니다.'
        return;
      }

      const newUserData = {
        newPassword: this.formData.new_password,
        confirmPassword: this.formData.confirm_password,
        userName: this.formData.user_name,
        userPhoneNumber: this.formData.phone_number,
      }

      this.$axios({
        url: `${this.$domain}/profileupdate`,
        method: 'put',         
        headers: {'authorization': `Bearer ${this.$store.state.auth.token}`},
        data: newUserData
      })
        .then((res) => {
          console.log(res.data)
          this.$store.commit("user/SET_USER_INFO", res.data.newUserInfo)
          this.$store.commit('auth/SET_TOKEN', res.data.tokenData)
          this.$router.push("/")
        })
        .catch((err) => {
          this.errorMessage = err.response.data.message;
          console.error(err.response.data.message)
        })
    }
  },
};
</script>

<style scoped>
#profile-update {
  border: 2px dashed green;
}
</style>