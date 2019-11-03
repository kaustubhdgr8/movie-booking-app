<template>
  <b-modal
    id="login_modal"
    scrollable
    centered
    :title="$t('login.title')"
    :no-close-on-backdrop="true"
  >
    <template v-slot:default>
      <b-form>
        <b-form-group
          id="email_address"
          :label="$t('login.email.label')"
          label-for="email_address--input"
          label-cols-sm="4"
          label-cols-lg="3"
        >
          <b-form-input
            id="email_address--input"
            type="email"
            required
            :placeholder="$t('login.email.placeholder')"
            v-model="formData.email"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="password"
          :label="$t('login.password.label')"
          label-for="password--input"
          label-cols-sm="4"
          label-cols-lg="3"
        >
          <b-form-input
            id="password--input"
            type="password"
            required
            :placeholder="$t('login.password.placeholder')"
            v-model="formData.password"
          ></b-form-input>
        </b-form-group>
        <b-link to="forgot-password">{{$t('login.forgot_password.label')}}</b-link>
      </b-form>
    </template>

    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button
        variant="outline-primary"
        @click="openRegistrationForm(cancel)"
      >{{$t('login.button.register')}}</b-button>
      <b-button variant="primary" @click="login(ok)">{{$t('login.button.login')}}</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    openRegistrationForm(cancel) {
      cancel();
      this.$emit("openRegistrationForm", "appRegister");
    },
    login(ok) {
      ok();
    }
  }
};
</script>