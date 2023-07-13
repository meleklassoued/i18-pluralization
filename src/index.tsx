import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider } from "react-i18next";
import frTranslation from "./locales/fr.json";
import enTranslation from "./locales/en.json";
// Configure i18next
i18n.use(LanguageDetector).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
