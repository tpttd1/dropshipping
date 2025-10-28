import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// import translationAR from "locales/ar.json";
// import translationCN from "locales/ch.json";
import translationENG from 'locales/en.json';
import translationVie from 'locales/vi.json';
// import translationFR from "locales/fr.json";
// import translationGr from "locales/gr.json";
// import translationIT from "locales/it.json";
// import translationJP from "locales/jp.json";
// import translationRS from "locales/ru.json";
// import translationSP from "locales/sp.json";

// the translations
const resources = {
  // gr: {
  //   translation: translationGr,
  // },
  // it: {
  //   translation: translationIT,
  // },
  // rs: {
  //   translation: translationRS,
  // },
  // sp: {
  //   translation: translationSP,
  // },
  vi: {
    translation: translationVie,
  },
  en: {
    translation: translationENG,
  },
  // cn: {
  //   translation: translationCN,
  // },
  // fr: {
  //   translation: translationFR,
  // },
  // ar: {
  //   translation: translationAR,
  // },
  // jp: {
  //   translation: translationJP,
  // },
};

const language = localStorage.getItem('I18N_LANGUAGE');
if (!language) {
  localStorage.setItem('I18N_LANGUAGE', 'en');
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('I18N_LANGUAGE') || 'en',
    fallbackLng: 'en', // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
