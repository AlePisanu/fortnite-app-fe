import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "../translations/en.json";
import itTranslation from "../translations/it.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      it: {
        translation: itTranslation,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;