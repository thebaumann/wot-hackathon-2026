<template>
  <div class="flex gap-2 p-3 bg-white">
    <textarea
      ref="textareaEl"
      v-model="draft"
      @keydown.enter.exact.prevent="submit"
      @input="resize"
      :placeholder="$t('chatbot.placeholder')"
      :disabled="loading"
      rows="1"
      class="flex-1 resize-none rounded-xl border border-trumpf-gray-mid px-3 py-2
             text-sm text-trumpf-dark bg-white leading-relaxed
             focus:outline-none focus:ring-2 focus:ring-trumpf-blue/30 focus:border-trumpf-blue
             transition-colors duration-150 max-h-24 overflow-y-auto
             disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400"
    />
    <button
      @click="submit"
      :disabled="!draft.trim() || loading"
      class="w-9 h-9 rounded-full bg-trumpf-green flex items-center justify-center
             flex-shrink-0 self-end transition-all duration-150
             hover:bg-trumpf-green-dark focus:outline-none focus:ring-2 focus:ring-trumpf-green focus:ring-offset-1
             disabled:opacity-40 disabled:cursor-not-allowed"
      :aria-label="$t('chatbot.placeholder')"
    >
      <!-- Send icon -->
      <svg v-if="!loading" class="w-4 h-4 text-trumpf-dark translate-x-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
      <!-- Spinner -->
      <svg v-else class="w-4 h-4 text-trumpf-dark animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

defineProps({
  loading: { type: Boolean, default: false }
})

const emit = defineEmits(['submit'])
const draft = ref('')
const textareaEl = ref(null)

function submit() {
  if (!draft.value.trim()) return
  emit('submit', draft.value.trim())
  draft.value = ''
  nextTick(() => {
    if (textareaEl.value) {
      textareaEl.value.style.height = 'auto'
    }
  })
}

function resize() {
  const el = textareaEl.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, 96) + 'px'
}
</script>
