<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
    <!-- Chat Window -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <ChatbotWindow v-if="isOpen" @close="isOpen = false" />
    </Transition>

    <!-- FAB Button -->
    <button
      @click="toggle"
      :class="[
        'relative w-14 h-14 rounded-full bg-trumpf-blue shadow-xl',
        'flex items-center justify-center text-white',
        'hover:bg-trumpf-blue-dark transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-trumpf-blue focus:ring-offset-2',
        !isOpen && 'fab-pulse'
      ]"
      :aria-label="isOpen ? 'Close chat' : 'Open chat'"
    >
      <Transition name="icon-flip" mode="out-in">
        <!-- Chat icon -->
        <svg v-if="!isOpen" key="chat" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <!-- X icon -->
        <svg v-else key="close" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Transition>
    </button>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import ChatbotWindow from './ChatbotWindow.vue'

const isOpen = inject('chatbotOpen')
const openChat = inject('openChat')
const audience = inject('audience')

function toggle() {
  if (isOpen.value) {
    isOpen.value = false
  } else {
    openChat(audience.value)
  }
}
</script>

<style scoped>
.icon-flip-enter-active,
.icon-flip-leave-active {
  transition: all 0.15s ease;
}
.icon-flip-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}
.icon-flip-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}
</style>
