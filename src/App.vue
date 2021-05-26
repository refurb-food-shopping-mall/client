<template>
  <div id="app">
    <nav-bar />
    <div class="inner_app container my-3">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  components: { NavBar, Footer },
};
</script>

<style>
html,
body {
  height: 100%;
}
.inner_app {
  flex: 1 0 auto;
}
#navbar {
  position: sticky;
  top: 0;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
