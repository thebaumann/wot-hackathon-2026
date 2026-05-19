<template>
  <div :class="centered ? 'text-center' : ''">
    <p v-if="badge" class="inline-block text-xs font-semibold tracking-widest uppercase text-trumpf-blue mb-3">
      {{ badge }}
    </p>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle max-w-2xl" :class="centered ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
  centered: { type: Boolean, default: false }
})
</script>
