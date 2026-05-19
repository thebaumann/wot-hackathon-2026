<template>
  <footer class="bg-trumpf-dark text-white">
    <div class="section-container py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Brand column -->
        <div>
          <svg viewBox="0 0 120 28" class="h-7 w-auto mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="22" font-family="Inter, Arial, sans-serif" font-weight="800" font-size="24" fill="#E2001A" letter-spacing="-1">TRUMPF</text>
          </svg>
          <p class="text-sm text-gray-400 leading-relaxed mb-4">{{ $t('footer.tagline') }}</p>
          <p class="text-xs text-gray-500">{{ $t('footer.address') }}</p>
        </div>

        <!-- Product links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Cutting Assistant</h3>
          <ul class="space-y-2">
            <li v-for="item in productLinks" :key="item.href">
              <a :href="item.href" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Legal links -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">{{ $t('footer.links.company') }}</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">{{ $t('footer.links.privacy') }}</a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">{{ $t('footer.links.imprint') }}</a>
            </li>
            <li>
              <a href="#contact" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">{{ $t('footer.links.contact') }}</a>
            </li>
            <li>
              <a href="https://www.trumpf.com/careers" target="_blank" rel="noopener" class="text-sm text-gray-400 hover:text-white transition-colors duration-150">{{ $t('footer.links.careers') }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-gray-500">{{ $t('footer.copyright') }}</p>
        <div class="flex gap-4">
          <a href="https://www.trumpf.com" target="_blank" rel="noopener" class="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-150">trumpf.com</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'

const currentLang = inject('currentLang')

const productLinks = [
  { href: '#features', label: 'Features' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#demo', label: 'Demo' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' }
]
</script>
