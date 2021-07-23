<template>
  <div>
    <div
      class="menu__block"
      v-for="(menuLink, idx) in $store.state.page.MyPageMenuLinks"
      :key="idx"
      @click.prevent="
        $store.commit('page/CHANGE_MYPAGE_MENU_DRAWER_ACTIVE_IDX', idx)
      "
    >
      <router-link
        :to="menuLink.url"
        class="list-group-item list-group-item-action"
        :class="{ active: idx == $store.state.page.MyPageMenuDrawerActiveIdx }"
        >{{ menuLink.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
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