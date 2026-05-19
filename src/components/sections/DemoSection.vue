<template>
  <section class="bg-white section-padding">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text side -->
        <Transition name="audience-fade" mode="out-in">
          <div :key="audience">
            <SectionTitle
              badge="Live Demo"
              :title="$t(`demo.${audience}.title`)"
              :subtitle="$t(`demo.${audience}.subtitle`)"
            />
            <div class="mt-8 space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-trumpf-red flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
                  </svg>
                </div>
                <p class="text-sm text-trumpf-gray">No prior AI experience required — fully integrated into your TRUMPF machine</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-trumpf-red flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
                  </svg>
                </div>
                <p class="text-sm text-trumpf-gray">30-day free trial period with dedicated TRUMPF application engineer support</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-5 h-5 rounded-full bg-trumpf-red flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L5 6.586 3.707 5.293z" />
                  </svg>
                </div>
                <p class="text-sm text-trumpf-gray">Demo available on-site at your facility or at any TRUMPF showroom globally</p>
              </div>
            </div>
            <a href="#contact" class="btn-primary mt-8 inline-flex">
              {{ $t(`demo.${audience}.cta`) }}
            </a>
          </div>
        </Transition>

        <!-- Video placeholder -->
        <div class="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg group cursor-pointer" @click="videoActive = true">
          <img
            src="https://images.unsplash.com/photo-1581092787765-e3feb951d987?w=900&q=80&auto=format&fit=crop"
            alt="Laser cutting machine in operation"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-trumpf-dark/40 flex flex-col items-center justify-center gap-4 group-hover:bg-trumpf-dark/50 transition-colors duration-200">
            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
              <svg class="w-7 h-7 text-trumpf-red translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span class="text-white font-semibold text-sm uppercase tracking-widest">{{ $t('demo.play_label') }}</span>
          </div>
          <div class="absolute bottom-3 left-3 right-3 bg-trumpf-dark/70 backdrop-blur-sm rounded px-3 py-1.5">
            <p class="text-white text-xs font-medium">{{ $t('demo.video_caption') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import SectionTitle from '../ui/SectionTitle.vue'

const audience = inject('audience')
const videoActive = ref(false)
</script>
