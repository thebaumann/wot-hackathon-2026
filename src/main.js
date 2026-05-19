import { createApp } from 'vue'
import I18NextVue from 'i18next-vue'
import i18next from './i18n/index.js'
import App from './App.vue'
import './assets/styles/main.css'
import { useAudience } from './composables/useAudience.js'
import { useLanguage } from './composables/useLanguage.js'

const app = createApp(App)

app.use(I18NextVue, { i18next })

const { audience, setAudience } = useAudience()
const { currentLang, languages, setLanguage } = useLanguage()

app.provide('audience', audience)
app.provide('setAudience', setAudience)
app.provide('currentLang', currentLang)
app.provide('languages', languages)
app.provide('setLanguage', setLanguage)

app.mount('#app')
