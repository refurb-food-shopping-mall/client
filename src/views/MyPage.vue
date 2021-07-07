<template>
  <div class="container">
    <div class="row mt-5">
      <!-- Left Menu List -->
      <div class="test-b col-lg-3 d-flex justify-content-center">
        <div class="list-group col-9 text-center">
          <router-link
            to="#"
            class="list-group-item list-group-item-action active"
            >주문 조회
          </router-link>
          <router-link to="/cart" class="list-group-item list-group-item-action"
            >장바구니
          </router-link>
          <router-link
            to="/cancel"
            class="list-group-item list-group-item-action"
            >취소 조회
          </router-link>
          <router-link to="#" class="list-group-item list-group-item-action"
            >적립금
          </router-link>
          <router-link to="#" class="list-group-item list-group-item-action"
            >1:1 문의
          </router-link>
          <router-link
            to="/mypage/profileupdate"
            class="list-group-item list-group-item-action"
            >회원정보수정
          </router-link>
          <router-link to="#" class="list-group-item list-group-item-action"
            >회원탈퇴
          </router-link>
        </div>
      </div>
      <!-- Content View -->
      <div class="test-b col-lg-9 d-flex justify-content-center">
        <!-- Content View -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.test-b {
  /* border: 2px dashed green; */
}
</style>