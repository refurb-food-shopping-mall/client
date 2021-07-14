<template>
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
</template>

<script>
export default {
  data() {
    return {
      currentSelectdMenuIdx: 0,
      menuLinks: [
        {
          url: '/mypage/dashboard',
          name: '내 정보'
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
          url: '/mypage',
          name: '적립금'
        },
        {
          url: '/mypage',
          name: '1:1 문의'
        },
        {
          url: '/mypage/profileupdate',
          name: '회원정보수정'
        },
        {
          url: '/mypage/deleteaccount',
          name: '회원탈퇴'
        }
      ]
    }
  },
}
</script>

<style scoped>
.menu__block:first-child {
  border-top-right-radius: 6.4px;
  border-top-left-radius: 6.4px;
}
.menu__block:last-child {
  border-bottom-right-radius: 6.4px;
  border-bottom-left-radius: 6.4px;
}
</style>