<template>
  <div class="flex items-center gap-2">
    <span class="text-sm text-gray-500 hidden sm:block">{{ $t('audience.switch_label') }}:</span>
    <div class="flex rounded-full border-2 border-trumpf-gray-mid p-0.5 bg-white">
      <button
        v-for="option in options"
        :key="option.value"
        @click="setAudience(option.value)"
        :class="[
          'px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap',
          audience === option.value
            ? 'bg-trumpf-blue text-white shadow-sm'
            : 'text-trumpf-gray hover:text-trumpf-dark'
        ]"
        :aria-pressed="audience === option.value"
      >
        {{ $t(option.labelKey) }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const audience = inject('audience')
const setAudience = inject('setAudience')

const options = [
  { value: 'operator', labelKey: 'audience.operator' },
  { value: 'management', labelKey: 'audience.management' }
]
</script>
