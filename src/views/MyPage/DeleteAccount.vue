<template>
  <div id="delete__account" class="col-md-10">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="submitDeleteAccountForm">
          <h4 class="card-title mb-5">회원 탈퇴</h4>
          <p>
            탈퇴가 완료된 계정은 다시 복구할 수 없습니다. 가입된 회원정보가 모두
            삭제되며 작성하신 게시물은 삭제되지 않습니다.
          </p>
          <p>
            탈퇴 후 같은 계정으로 재가입 시 기존에 가지고 있던 적립금은 복원되지
            않으며, 사용 및 다운로드했던 쿠폰도 사용 불가능합니다. 회원 탈퇴를
            진행하시겠습니까?
          </p>
          <div class="form-check mt-5">
            <input
              v-model="isCheck"
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              안내 사항을 모두 확인하였으며, 이에 동의합니다.
            </label>
          </div>
          <button type="submit" class="btn btn-danger mt-3">탈퇴하기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheck: false
    }
  },
  methods: {
    submitDeleteAccountForm() {
      // console.log(this.isCheck)
      if (this.isCheck) {
        this.$axios({
          url: `${this.$domain}/deleteaccount`,
          method: 'delete',         
          headers: {'authorization': `Bearer ${this.$store.state.auth.token}`},
        })
        .then(() => {
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
        })
        .catch((err) => {
          console.error(err)
        })
      }
    }
  },
}
</script>

<style scoped>
#delete__account {
  user-select: none;
}
</style>