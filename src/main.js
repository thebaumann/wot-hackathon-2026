import { createApp } from 'vue'
import I18NextVue from 'i18next-vue'
import i18next from './i18n/index.js'
import App from './App.vue'
import './assets/styles/main.css'
import { useAudience } from './composables/useAudience.js'
import { useLanguage } from './composables/useLanguage.js'
import { useChatbot } from './composables/useChatbot.js'

const app = createApp(App)

app.use(I18NextVue, { i18next })

const { audience, setAudience } = useAudience()
const { currentLang, languages, setLanguage } = useLanguage()
const { isOpen: chatbotOpen, messages: chatbotMessages, isLoading: chatbotLoading, openChat, sendMessage } = useChatbot()

app.provide('audience', audience)
app.provide('setAudience', setAudience)
app.provide('currentLang', currentLang)
app.provide('languages', languages)
app.provide('setLanguage', setLanguage)
app.provide('chatbotOpen', chatbotOpen)
app.provide('chatbotMessages', chatbotMessages)
app.provide('chatbotLoading', chatbotLoading)
app.provide('openChat', openChat)
app.provide('sendMessage', sendMessage)

app.mount('#app')
