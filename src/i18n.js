import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});

export const Languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "hi",
    name: "Hindi (हिंदी)",
  },
  {
    code: "fr",
    name: "French (français)",
  },
  {
    code: "zh",
    name: "Chinese (中国人)",
  },
  {
    code: "ar",
    name: "Arabic (عربى)",
  },
];
