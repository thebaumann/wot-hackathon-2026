<template>
  <section class="bg-trumpf-blue section-padding relative overflow-hidden">
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="relative z-10 section-container text-center text-white">
      <Transition name="audience-fade" mode="out-in">
        <div :key="audience">
          <p class="text-xs font-semibold uppercase tracking-widest mb-4 opacity-80">TRUMPF Cutting Assistant</p>
          <h2 class="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            {{ $t(`cta.${audience}.headline`) }}
          </h2>
          <p class="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
            {{ $t(`cta.${audience}.subheadline`) }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cutting-assistant@trumpf.com"
              class="inline-flex items-center justify-center px-8 py-4 bg-trumpf-green text-trumpf-dark font-bold text-sm tracking-wide uppercase rounded transition-all duration-200 hover:bg-trumpf-green-dark shadow-lg hover:shadow-xl"
            >
              {{ $t(`cta.${audience}.btn_primary`) }}
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-white/70 text-white font-bold text-sm tracking-wide uppercase rounded transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              {{ $t(`cta.${audience}.btn_secondary`) }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'

const audience = inject('audience')
</script>
