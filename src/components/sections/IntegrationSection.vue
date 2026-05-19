<template>
  <section class="bg-white section-padding border-y border-trumpf-gray-mid">
    <div class="section-container">
      <SectionTitle
        :title="$t('integration.title')"
        :subtitle="$t('integration.subtitle')"
        :centered="true"
        class="mb-12"
      />

      <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        <div
          v-for="item in integrations"
          :key="item.name"
          class="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-trumpf-gray-mid bg-trumpf-gray-light hover:border-trumpf-blue hover:bg-blue-50 transition-all duration-200 min-w-[110px] group"
        >
          <div class="w-8 h-8 rounded bg-trumpf-dark/10 flex items-center justify-center group-hover:bg-trumpf-blue/10 transition-colors duration-200">
            <svg class="w-4 h-4 text-trumpf-gray group-hover:text-trumpf-blue transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="text-center">
            <p class="text-xs font-bold text-trumpf-dark">{{ item.name }}</p>
            <p class="text-xs text-trumpf-gray mt-0.5">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- TRUMPF ecosystem note -->
      <div class="mt-10 text-center">
        <p class="text-sm text-trumpf-gray">
          Part of the <span class="font-semibold text-trumpf-dark">TRUMPF Smart Factory</span> ecosystem.
          <a href="https://www.trumpf.com" target="_blank" rel="noopener" class="text-trumpf-blue hover:underline ml-1">Learn more ↗</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import SectionTitle from '../ui/SectionTitle.vue'

const { t } = useTranslation()
const integrations = computed(() => t('integration.items', { returnObjects: true }) || [])
</script>
