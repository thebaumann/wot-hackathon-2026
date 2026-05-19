<template>
  <section class="bg-gray-900 section-padding">
    <div class="section-container">
      <SectionTitle
        badge="Customer Stories"
        :title="audience === 'operator' ? 'Operators trust the Cutting Assistant.' : 'Business leaders rely on the numbers.'"
        centered
        class="mb-12 [&_.section-title]:text-white [&_.section-subtitle]:text-gray-400"
      />

      <Transition name="audience-fade" mode="out-in">
        <div :key="audience" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(t_, i) in testimonials"
            :key="i"
            class="bg-gray-800 rounded-xl p-6 flex flex-col gap-4 border border-gray-700 hover:border-trumpf-red/40 transition-colors duration-200"
          >
            <!-- Quote mark -->
            <svg class="w-8 h-8 text-trumpf-red opacity-60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>

            <p class="text-gray-300 text-sm leading-relaxed italic flex-1">
              "{{ t_.quote }}"
            </p>

            <div class="pt-3 border-t border-gray-700">
              <p class="text-white font-semibold text-sm">{{ t_.name }}</p>
              <p class="text-gray-400 text-xs mt-0.5">{{ t_.role }}</p>
              <p class="text-trumpf-red text-xs font-medium mt-0.5">{{ t_.company }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import SectionTitle from '../ui/SectionTitle.vue'

const audience = inject('audience')
const { t } = useTranslation()

const testimonials = computed(() => t(`testimonials.${audience.value}`, { returnObjects: true }) || [])
</script>
