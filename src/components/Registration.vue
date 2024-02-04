<template>
  <b-modal
    id="register_modal"
    size="lg"
    scrollable
    centered
    :title="$t('register.title')"
    :no-close-on-backdrop="true"
  >
    <template v-slot:default>
      <b-form>
        <b-input-group prepend="First and last name" class="mb-2">
          <b-form-input aria-label="First name"></b-form-input>
          <b-form-input aria-label="Last name"></b-form-input>
        </b-input-group>
      </b-form>
    </template>

    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button variant="outline-primary" @click="openLoginForm(cancel)">{{
        $t("register.button.login")
      }}</b-button>
      <b-button variant="primary">{{
        $t("register.button.register")
      }}</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  methods: {
    openLoginForm(cancel) {
      cancel();
      this.$emit("openLoginForm", "appLogin");
    }
  }
};
</script>