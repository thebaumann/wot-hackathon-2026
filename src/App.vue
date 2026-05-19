<template>
  <div class="min-h-screen">
    <AppHeader />
    <main class="pt-16">
      <HeroSection id="hero" />
      <StatsSection id="stats" />
      <FeaturesSection id="features" />
      <BenefitsSection id="benefits" />
      <DemoSection id="demo" />
      <TestimonialsSection id="testimonials" />
      <IntegrationSection id="integration" />
      <FaqSection id="faq" />
      <CtaSection id="contact" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import StatsSection from './components/sections/StatsSection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import BenefitsSection from './components/sections/BenefitsSection.vue'
import DemoSection from './components/sections/DemoSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import IntegrationSection from './components/sections/IntegrationSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import CtaSection from './components/sections/CtaSection.vue'
</script>
