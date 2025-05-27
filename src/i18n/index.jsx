import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from "./ru.json";
import en from "./en.json";

const options = {
  // order and from where user language should be detected
  order: ['localStorage', 'htmlTag'],

  // keys or params to lookup language from

  lookupLocalStorage: 'i18nextLng',


  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expiry and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['ru', 'en'],
    detection: { order: ['localStorage', 'htmlTag'] },
    fallbackLng: "ru",
    // lng: "ru",
    debug: false,
    resources: { ru, en },
    interpolation: { escapeValue: false },
  });

export { i18n };