import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import es from './src/locale/es.json'
import en from './src/locale/en.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
}

const getLang = () => {
  let langNavigator = window.navigator.language || navigator.browserLanguage
  let array = langNavigator.split('-')
  return array[0] || 'en' // Default to 'en' if array[0] is undefined
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: getLang(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
