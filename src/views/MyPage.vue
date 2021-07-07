<template>
  <div class="container">
    <div class="row mt-5">
      <!-- Left Menu List -->
      <div class="test-b col-lg-3 d-flex justify-content-center">
        <div class="list-group col-9 text-center">
          <MyPageMenuDrawer></MyPageMenuDrawer>
        </div>
      </div>
      <!-- Content View -->
      <div class="test-b col-lg-9 d-flex justify-content-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyPageMenuDrawer from '@/components/MyPageMenuDrawer'

export default {
  components: { MyPageMenuDrawer },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.test-b {
  /* border: 2px dashed green; */
}
</style>