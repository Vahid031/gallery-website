import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";
import languagedetector from "i18next-browser-languagedetector";
import translationEN from "./assets/translation/en.json";
import translationFA from "./assets/translation/fa.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "fa"];

const resources = {
  en: {
    translation: translationEN
  },
  fa: {
    translation: translationFA
  }
};

i18n
  .use(backend)
  .use(languagedetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
