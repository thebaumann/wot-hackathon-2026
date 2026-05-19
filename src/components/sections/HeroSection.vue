<template>
  <section class="relative min-h-[92vh] flex items-center overflow-hidden bg-trumpf-dark">
    <!-- Background image layer -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1800&q=80&auto=format&fit=crop"
        alt=""
        class="w-full h-full object-cover opacity-40"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-trumpf-dark via-trumpf-dark/80 to-transparent" />
    </div>

    <div class="relative z-10 section-container w-full py-20 md:py-28">
      <div class="max-w-2xl">
        <!-- Badge -->
        <p class="inline-block text-xs font-semibold tracking-widest uppercase text-trumpf-blue mb-5 border border-trumpf-blue/40 px-3 py-1 rounded-full">
          {{ $t('hero.badge') }}
        </p>

        <!-- Headline — audience-adaptive -->
        <Transition name="audience-fade" mode="out-in">
          <div :key="audience">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              {{ $t(`hero.${audience}.headline`) }}
            </h1>
            <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              {{ $t(`hero.${audience}.subheadline`) }}
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="#contact" class="btn-primary">
                {{ $t(`hero.${audience}.cta_primary`) }}
              </a>
              <a href="#features" class="btn-secondary">
                {{ $t(`hero.${audience}.cta_secondary`) }}
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
      <a href="#stats" class="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-150" aria-label="Scroll down">
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <svg class="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'

const audience = inject('audience')
</script>
