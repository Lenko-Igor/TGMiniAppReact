import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from "./ru.json";
import en from "./en.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ru",
    lng: "ru",
    debug: false,
    resources: { ru, en },
    interpolation: { escapeValue: false },
  });

export { i18n };