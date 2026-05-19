<template>
  <section class="bg-trumpf-dark py-12 md:py-16">
    <div class="section-container">
      <Transition name="audience-fade" mode="out-in">
        <div :key="audience" class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatCounter
            v-for="(stat, i) in stats"
            :key="i"
            :value="stat.value"
            :suffix="stat.suffix"
            :prefix="stat.prefix"
            :label="stat.label"
          />
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import StatCounter from '../ui/StatCounter.vue'

const audience = inject('audience')
const { t } = useTranslation()

const stats = computed(() => t(`stats.${audience.value}`, { returnObjects: true }) || [])
</script>
