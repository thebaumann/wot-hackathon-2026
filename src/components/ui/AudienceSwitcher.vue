<template>
  <div class="relative" ref="container">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-1.5 px-3 py-1.5 rounded border border-trumpf-gray-mid text-sm font-medium text-trumpf-gray hover:text-trumpf-dark hover:border-trumpf-gray transition-colors duration-150"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
    >
      <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span class="hidden sm:inline text-xs font-semibold whitespace-nowrap">{{ $t(currentOption.labelKey) }}</span>
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
        class="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-trumpf-gray-mid py-1 z-50"
        role="listbox"
      >
        <button
          v-for="option in options"
          :key="option.value"
          @click="select(option.value)"
          class="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left hover:bg-trumpf-gray-light transition-colors duration-100"
          :class="audience === option.value ? 'text-trumpf-blue font-semibold' : 'text-trumpf-dark'"
          role="option"
          :aria-selected="audience === option.value"
        >
          {{ $t(option.labelKey) }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted, onUnmounted } from 'vue'

const audience = inject('audience')
const setAudience = inject('setAudience')

const isOpen = ref(false)
const container = ref(null)

const options = [
  { value: 'operator', labelKey: 'audience.operator' },
  { value: 'management', labelKey: 'audience.management' },
  { value: 'quality', labelKey: 'audience.quality' }
]

const currentOption = computed(() => options.find(o => o.value === audience.value) ?? options[0])

function select(value) {
  setAudience(value)
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
