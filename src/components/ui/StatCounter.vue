<template>
  <div class="text-center">
    <div class="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
      {{ prefix }}<span ref="counterEl">{{ displayValue }}</span>{{ suffix }}
    </div>
    <div class="text-sm text-gray-300 font-medium">{{ label }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
  prefix: { type: String, default: '' },
  label: { type: String, required: true },
  duration: { type: Number, default: 1500 }
})

const counterEl = ref(null)
const displayValue = ref(0)
let observer = null
let hasAnimated = false

function animateTo(target) {
  const start = performance.now()
  const isDecimal = target % 1 !== 0

  function step(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = target * eased
    displayValue.value = isDecimal ? current.toFixed(1) : Math.round(current)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  displayValue.value = props.value % 1 !== 0 ? props.value.toFixed(1) : 0
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true
        displayValue.value = 0
        animateTo(props.value)
      }
    },
    { threshold: 0.3 }
  )
  if (counterEl.value) observer.observe(counterEl.value)
})
</script>
