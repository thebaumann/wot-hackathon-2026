<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 bg-white transition-shadow duration-200"
    :class="{ 'header-scrolled': isScrolled }"
  >
    <div class="section-container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 flex-shrink-0" aria-label="TRUMPF Home">
          <svg viewBox="0 0 160 28" class="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="2" width="24" height="24" fill="#003F87"/>
            <text x="32" y="22" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="22" fill="#1A1A1A" letter-spacing="-0.5">TRUMPF</text>
          </svg>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.href"
            class="text-sm font-medium text-trumpf-gray hover:text-trumpf-blue transition-colors duration-150"
          >
            {{ $t(`nav.${item.key}`) }}
          </a>
        </nav>

        <!-- Right controls -->
        <div class="hidden lg:flex items-center gap-3">
          <AudienceSwitcher />
          <LanguageSwitcher />
          <a href="#contact" class="btn-primary text-xs px-4 py-2">
            {{ $t('nav.request_demo') }}
          </a>
        </div>

        <!-- Mobile: controls + hamburger -->
        <div class="lg:hidden flex items-center gap-2">
          <AudienceSwitcher />
          <LanguageSwitcher />
          <button
            @click="mobileOpen = !mobileOpen"
            class="p-2 rounded text-trumpf-gray hover:text-trumpf-dark"
            :aria-expanded="mobileOpen"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-white border-t border-trumpf-gray-mid">
        <div class="section-container py-4 space-y-4">
          <nav class="space-y-1">
            <a
              v-for="item in navItems"
              :key="item.key"
              :href="item.href"
              @click="mobileOpen = false"
              class="block px-3 py-2 rounded text-sm font-medium text-trumpf-gray hover:text-trumpf-blue hover:bg-blue-50 transition-colors duration-150"
            >
              {{ $t(`nav.${item.key}`) }}
            </a>
          </nav>
          <div class="pt-2 border-t border-trumpf-gray-mid">
            <a href="#contact" @click="mobileOpen = false" class="btn-primary w-full text-center text-xs py-2.5">
              {{ $t('nav.request_demo') }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AudienceSwitcher from '../ui/AudienceSwitcher.vue'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { key: 'features', href: '#features' },
  { key: 'benefits', href: '#benefits' },
  { key: 'demo', href: '#demo' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' }
]

function onScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
