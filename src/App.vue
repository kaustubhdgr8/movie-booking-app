<template>
  <div id="app">
    <app-navigation />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    appNavigation: Navigation,
    appFooter: Footer
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
</style>
