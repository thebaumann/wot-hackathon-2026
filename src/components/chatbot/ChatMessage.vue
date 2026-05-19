<template>
  <!-- User message — right-aligned -->
  <div v-if="role === 'user'" class="flex justify-end">
    <div class="max-w-[80%] bg-trumpf-blue text-white text-sm rounded-2xl rounded-br-sm px-4 py-2.5 leading-relaxed">
      {{ content }}
    </div>
  </div>

  <!-- Assistant message — left-aligned -->
  <div v-else class="flex gap-2.5 items-start">
    <div class="w-7 h-7 bg-trumpf-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
      <svg class="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="max-w-[85%]">
      <!-- Typing indicator when streaming but content is still empty -->
      <div v-if="isStreaming && !content" class="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
      </div>
      <!-- Message content -->
      <div v-else class="bg-gray-100 text-trumpf-dark text-sm rounded-2xl rounded-bl-sm px-4 py-2.5 leading-relaxed">
        <span v-html="renderedContent" />
        <span v-if="isStreaming" class="inline-block w-0.5 h-3.5 bg-trumpf-blue ml-0.5 align-middle animate-pulse" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  role: { type: String, required: true },
  content: { type: String, default: '' },
  isStreaming: { type: Boolean, default: false }
})

const renderedContent = computed(() =>
  props.content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
)
</script>
