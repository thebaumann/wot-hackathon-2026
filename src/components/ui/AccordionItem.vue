<template>
  <div class="border-b border-trumpf-gray-mid">
    <button
      @click="isOpen = !isOpen"
      class="w-full flex items-center justify-between py-5 text-left gap-4 group"
      :aria-expanded="isOpen"
    >
      <span class="font-medium text-trumpf-dark text-sm md:text-base group-hover:text-trumpf-red transition-colors duration-150">
        {{ question }}
      </span>
      <svg
        class="w-5 h-5 flex-shrink-0 text-trumpf-gray transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      class="overflow-hidden transition-all duration-300 ease-in-out"
      :style="isOpen ? `max-height: ${contentHeight}px` : 'max-height: 0'"
      ref="contentEl"
    >
      <p class="pb-5 text-sm md:text-base text-trumpf-gray leading-relaxed">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true }
})

const isOpen = ref(false)
const contentEl = ref(null)
const contentHeight = ref(0)

onMounted(async () => {
  await nextTick()
  if (contentEl.value) contentHeight.value = contentEl.value.scrollHeight
})
</script>
