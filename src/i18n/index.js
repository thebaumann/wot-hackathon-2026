import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import es from './locales/es.json'
import ja from './locales/ja.json'

await i18next.use(LanguageDetector).init({
  fallbackLng: 'en',
  supportedLngs: ['de', 'en', 'fr', 'es', 'ja'],
  resources: {
    en: { translation: en },
    de: { translation: de },
    fr: { translation: fr },
    es: { translation: es },
    ja: { translation: ja }
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
    lookupLocalStorage: 'trumpf-lang'
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18next
