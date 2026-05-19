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
    <ChatbotButton />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
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
import ChatbotButton from './components/chatbot/ChatbotButton.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        observer.unobserve(e.target)
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>
