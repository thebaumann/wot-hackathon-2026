<template>
  <div class="relative" ref="container">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-1.5 px-3 py-1.5 rounded border border-trumpf-gray-mid text-sm font-medium text-trumpf-gray hover:text-trumpf-dark hover:border-trumpf-gray transition-colors duration-150"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
    >
      <span class="font-semibold uppercase tracking-wide text-xs">{{ currentLang }}</span>
      <svg class="w-3.5 h-3.5 transition-transform duration-150" :class="{ 'rotate-180': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 top-full mt-1 w-36 bg-white rounded-lg shadow-lg border border-trumpf-gray-mid py-1 z-50"
        role="listbox"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="select(lang.code)"
          class="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left hover:bg-trumpf-gray-light transition-colors duration-100"
          :class="currentLang === lang.code ? 'text-trumpf-blue font-semibold' : 'text-trumpf-dark'"
          role="option"
          :aria-selected="currentLang === lang.code"
        >
          <span class="text-xs font-bold uppercase tracking-wide w-5">{{ lang.flag }}</span>
          <span>{{ lang.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'

const currentLang = inject('currentLang')
const languages = inject('languages')
const setLanguage = inject('setLanguage')

const isOpen = ref(false)
const container = ref(null)

async function select(code) {
  await setLanguage(code)
  isOpen.value = false
}

function handleOutsideClick(e) {
  if (container.value && !container.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>
