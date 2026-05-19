import { ref } from 'vue'
import i18next from '../i18n/index.js'

const LANGUAGES = [
  { code: 'de', label: 'Deutsch', flag: 'DE' },
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'fr', label: 'Français', flag: 'FR' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'ja', label: '日本語', flag: 'JA' }
]

const currentLang = ref(i18next.resolvedLanguage?.slice(0, 2) || i18next.language?.slice(0, 2) || 'en')

i18next.on('languageChanged', (lng) => {
  currentLang.value = lng.slice(0, 2)
})

export function useLanguage() {
  async function setLanguage(code) {
    await i18next.changeLanguage(code)
    currentLang.value = code
    document.documentElement.lang = code
  }

  return {
    currentLang,
    languages: LANGUAGES,
    setLanguage
  }
}
