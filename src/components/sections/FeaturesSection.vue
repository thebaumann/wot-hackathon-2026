<template>
  <section class="bg-white section-padding">
    <div class="section-container">
      <SectionTitle
        :badge="'Cutting Assistant'"
        :title="$t('features.title')"
        :subtitle="$t('features.subtitle')"
        :centered="true"
        class="mb-12"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          v-for="item in features"
          :key="item.id"
          :title="item.title"
          :desc="item.desc"
          :icon="item.icon"
          class="reveal"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'
import SectionTitle from '../ui/SectionTitle.vue'
import FeatureCard from '../ui/FeatureCard.vue'

const { t } = useTranslation()
const features = computed(() => t('features.items', { returnObjects: true }) || [])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>
