<template>
  <div id="app" class="container-fluid p-0">
    <Header />
    <nav-bar class="sticky-top" />
    <div class="inner_app mt-5">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  components: { Header, NavBar, Footer },
};
</script>

<style>
html,
body {
  /* overflow-x: hidden; */
  height: 100%;
}
.inner_app {
  flex: 1;
}
#navbar {
  /* position: sticky; */
  top: 0;
  z-index: 1000;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
