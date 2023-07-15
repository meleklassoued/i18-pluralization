/* -------------------------------------------------------------------------- */
/*                                dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// Locales
import enTranslation from "../src/locales/en/translation.json";
import frTranslation from "../src/locales/fr/translation.json";
// i18 ressources
const resources = {
  en: { translation: enTranslation },
  fr: { translation: frTranslation },
};
// i18 config
i18next.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
