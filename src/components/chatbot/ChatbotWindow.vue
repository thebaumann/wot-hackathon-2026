<template>
  <div
    class="fixed inset-x-2 bottom-0 rounded-t-2xl h-[85vh]
           sm:inset-x-auto sm:bottom-0 sm:right-6 sm:w-96 sm:h-[560px] sm:rounded-xl
           bg-white shadow-2xl border border-gray-200
           flex flex-col overflow-hidden z-40"
  >
    <!-- Header -->
    <div class="bg-trumpf-blue text-white px-4 py-3 flex items-center gap-3 flex-shrink-0">
      <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-sm">{{ $t('chatbot.title') }}</p>
        <p class="text-xs text-blue-200">{{ isLoading ? $t('chatbot.typing') : $t('chatbot.subtitle') }}</p>
      </div>
      <button
        @click="$emit('close')"
        class="p-1 rounded hover:bg-white/20 transition-colors duration-150 focus:outline-none"
        aria-label="Close chat"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Messages -->
    <div ref="messagesEl" class="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
      <ChatMessage
        v-for="msg in messages"
        :key="msg.id"
        :role="msg.role"
        :content="msg.content"
        :isStreaming="msg.isStreaming"
      />
    </div>

    <!-- Suggestion chips -->
    <div v-if="showSuggestions" class="px-4 pb-2 flex flex-wrap gap-2 flex-shrink-0">
      <button
        v-for="suggestion in suggestions"
        :key="suggestion"
        @click="sendSuggestion(suggestion)"
        class="text-xs bg-trumpf-gray-light text-trumpf-dark border border-trumpf-gray-mid
               rounded-full px-3 py-1.5 hover:border-trumpf-blue hover:text-trumpf-blue
               transition-colors duration-150 text-left"
      >
        {{ suggestion }}
      </button>
    </div>

    <!-- Input -->
    <ChatInput :loading="isLoading" @submit="onSubmit" class="flex-shrink-0 border-t border-trumpf-gray-mid" />
  </div>
</template>

<script setup>
import { ref, inject, computed, watch, nextTick } from 'vue'
import i18next from '../../i18n/index.js'
import ChatMessage from './ChatMessage.vue'
import ChatInput from './ChatInput.vue'

defineEmits(['close'])

const messages = inject('chatbotMessages')
const isLoading = inject('chatbotLoading')
const sendMessage = inject('sendMessage')
const audience = inject('audience')
const currentLang = inject('currentLang')

const messagesEl = ref(null)
const userMessageCount = computed(() => messages.value.filter(m => m.role === 'user').length)
const showSuggestions = computed(() => userMessageCount.value < 2)

const suggestions = computed(() => {
  const lang = currentLang.value // reactive dep — re-runs when language changes
  const key = audience.value === 'management' ? 'chatbot.suggestions.management' : 'chatbot.suggestions.operator'
  const result = i18next.t(key, { returnObjects: true })
  return Array.isArray(result) ? result : []
})

watch(messages, async () => {
  await nextTick()
  if (messagesEl.value) {
    messagesEl.value.scrollTo({ top: messagesEl.value.scrollHeight, behavior: 'smooth' })
  }
}, { deep: true })

function onSubmit(text) {
  sendMessage(text, audience.value)
}

function sendSuggestion(text) {
  sendMessage(text, audience.value)
}
</script>
