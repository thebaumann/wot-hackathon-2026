<template>
  <section class="bg-trumpf-gray-light section-padding">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Left: title -->
        <div class="lg:col-span-1">
          <SectionTitle
            badge="FAQ"
            :title="'Frequently asked questions.'"
            :subtitle="audience === 'operator' ? 'Everything you need to know before getting started.' : audience === 'management' ? 'Key questions from decision-makers.' : 'Key questions from quality and QA teams.'"
          />
          <div class="mt-8 p-5 bg-white rounded-xl border border-trumpf-gray-mid">
            <p class="text-sm text-trumpf-gray leading-relaxed mb-4">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a href="#contact" class="btn-primary text-xs px-4 py-2">
              Contact us
            </a>
          </div>
        </div>

        <!-- Right: accordion -->
        <div class="lg:col-span-2">
          <Transition name="audience-fade" mode="out-in">
            <div :key="audience">
              <AccordionItem
                v-for="(item, i) in faqItems"
                :key="i"
                :question="item.q"
                :answer="item.a"
              />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useTranslation } from 'i18next-vue'
import SectionTitle from '../ui/SectionTitle.vue'
import AccordionItem from '../ui/AccordionItem.vue'

const audience = inject('audience')
const { t } = useTranslation()

const faqItems = computed(() => t(`faq.${audience.value}`, { returnObjects: true }) || [])
</script>
