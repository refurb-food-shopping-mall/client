<template>
  <div id="app">
    <nav-bar />
    <div class="container my-3">
      <router-view />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

export default {
  components: { NavBar },
};
</script>

<style>
#app {
  padding-top: 70px;
}
</style>
