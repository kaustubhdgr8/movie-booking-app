<template>
  <div id="app">
    <app-navigation />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import NavigationVue from "@/components/Navigation.vue";
import FooterVue from "./components/Footer.vue";
export default {
  components: {
    appNavigation: NavigationVue,
    appFooter: FooterVue
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
</style>
