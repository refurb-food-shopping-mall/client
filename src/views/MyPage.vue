<template>
  <div class="container">
    <div class="row mt-5">
      <!-- Left Menu List -->
      <div class="test-b col-lg-3 d-flex justify-content-center">
        <div class="list-group col-9 text-center">
          <div>
            <div
              class="menu__block"
              v-for="(menuLink, idx) in menuLinks"
              :key="idx"
              @click.prevent="currentSelectdMenuIdx = idx"
            >
              <router-link
                :to="menuLink.url"
                class="list-group-item list-group-item-action"
                :class="{ active: idx == currentSelectdMenuIdx }"
                >{{ menuLink.name }}
              </router-link>
            </div>
          </div>
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
  data() {
    return {
      currentSelectdMenuIdx: 0,
      menuLinks: [
        {
          url: '#',
          name: '주문 조회'
        },
        {
          url: '/cart',
          name: '장바구니'
        },
        {
          url: '/cancel',
          name: '취소 조회'
        },
        {
          url: '#',
          name: '적립금'
        },
        {
          url: '#',
          name: '1:1 문의'
        },
        {
          url: '/mypage/profileupdate',
          name: '회원정보수정'
        },
        {
          url: '#',
          name: '회원탈퇴'
        }
      ]
    }
  },
}
</script>

<style scoped>
.test-b {
  /* border: 2px dashed green; */
}
.menu__block:first-child {
  border-top-right-radius: 6.4px;
  border-top-left-radius: 6.4px;
}
.menu__block:last-child {
  border-bottom-right-radius: 6.4px;
  border-bottom-left-radius: 6.4px;
}
</style>