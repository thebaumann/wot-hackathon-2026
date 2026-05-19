<template>
  <section class="bg-trumpf-gray-light section-padding">
    <div class="section-container">
      <Transition name="audience-fade" mode="out-in">
        <!-- Operator view: step-by-step process -->
        <div v-if="audience === 'operator'" :key="'operator'">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                badge="For machine operators"
                :title="$t('benefits.operator.title')"
                :subtitle="$t('benefits.operator.subtitle')"
              />
              <div class="mt-10 space-y-8">
                <div
                  v-for="step in operatorSteps"
                  :key="step.number"
                  class="flex gap-5 group"
                >
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-trumpf-red text-white font-bold text-sm flex items-center justify-center">
                    {{ step.number }}
                  </div>
                  <div>
                    <h3 class="font-semibold text-trumpf-dark mb-1">{{ step.title }}</h3>
                    <p class="text-sm text-trumpf-gray leading-relaxed">{{ step.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Visual side -->
            <div class="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop"
                alt="Machine operator working with laser cutter"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-trumpf-dark/50 to-transparent" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <p class="text-xs font-semibold text-trumpf-dark">AI Parameter Optimization Active</p>
                    <p class="text-xs text-trumpf-gray">Setup time: 1 min 43 sec — 94% confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Management view: KPI grid -->
        <div v-else :key="'management'">
          <div class="text-center mb-12">
            <SectionTitle
              badge="Business Impact"
              :title="$t('benefits.management.title')"
              :subtitle="$t('benefits.management.subtitle')"
              :centered="true"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              v-for="(kpi, i) in managementKpis"
              :key="i"
              class="bg-white rounded-xl p-8 border border-trumpf-gray-mid shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div class="text-4xl md:text-5xl font-extrabold text-trumpf-red mb-3 tabular-nums">
                {{ kpi.value }}
              </div>
              <div class="font-semibold text-trumpf-dark mb-2">{{ kpi.label }}</div>
              <div class="text-sm text-trumpf-gray leading-relaxed">{{ kpi.detail }}</div>
            </div>
          </div>
          <div class="mt-8 text-center">
            <a href="#contact" class="btn-outline">{{ $t('benefits.management.cta') }}</a>
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

const operatorSteps = computed(() => t('benefits.operator.steps', { returnObjects: true }) || [])
const managementKpis = computed(() => t('benefits.management.kpis', { returnObjects: true }) || [])
</script>
