<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      :sticky="true"
      role="nav"
    >
      <b-navbar-brand to="/">
        <img
          src="../assets/logo.png"
          :alt="$t('menu.company_name')"
          class="brand_logo"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="shows">{{ $t("menu.options.shows") }}</b-nav-item>
          <b-nav-item to="theaters">{{
            $t("menu.options.theaters")
          }}</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown :text="selectedLanguage" right>
            <b-dropdown-item
              v-for="(lang, index) in Languages"
              :key="index"
              :value="lang.code"
              @click="changeLanguage(index)"
              >{{ lang.name }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-button-group class="ml-2" v-if="!isLoggedIn">
            <b-button
              variant="outline-light"
              v-b-modal.login_modal
              ref="loginButton"
              >{{ $t("menu.options.login") }}</b-button
            >
            <b-button
              variant="outline-light"
              v-b-modal.register_modal
              ref="registerButton"
              >{{ $t("menu.options.register") }}</b-button
            >
          </b-button-group>
          <b-nav-item-dropdown
            right
            v-if="isLoggedIn"
            class="m-md-2"
            :text="userName"
          >
            <b-dropdown-item href="#">{{
              $t("menu.options.profile")
            }}</b-dropdown-item>
            <b-dropdown-item>{{ $t("menu.options.logout") }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <app-login @openRegistrationForm="openOtherAuthForm($event)"></app-login>
    <app-register @openLoginForm="openOtherAuthForm($event)"></app-register>
  </div>
</template>

<script>
import { Languages } from "@/i18n";
import LoginVue from "./Login.vue";
import RegistrationVue from "./Registration.vue";

export default {
  data() {
    return {
      Languages,
      selectedLanguage: '',
      isLoggedIn: false,
      userName: ""
    };
  },
  components: {
    appLogin: LoginVue,
    appRegister: RegistrationVue
  },
  methods: {
    changeLanguage(index) {
      this.$i18n.locale = this.Languages[index].code;
      this.selectedLanguage = this.Languages[index].name;
      localStorage.setItem('lang', this.$i18n.locale);
    },
    openOtherAuthForm(componentName) {
      if (componentName === "appLogin") {
        this.$refs.loginButton.click();
      } else {
        this.$refs.registerButton.click();
      }
    }
  },
  mounted() {
    for (const lang of Languages) {
      if (lang.code === this.$i18n.locale) {
        this.selectedLanguage = lang.name;
        break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.brand_logo {
  width: 150px;
}
</style>