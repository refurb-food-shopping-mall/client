<template>
  <div>
    <div @click="scrollTop" v-show="visible" class="scroll-btn bottom-right">
      <font-awesome-icon icon="chevron-up" color="white" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    scrollListener() {
      this.visible = window.scrollY > 150
    }
  },
}
</script>

<style scoped>
.scroll-btn {
  width: 45px;
  height: 45px;
  background-color: rgb(90, 179, 149);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  cursor: pointer;
}
.bottom-right {
  position: fixed;
  bottom: 80px;
  right: 30px;
}
</style>