<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button 
      v-show="show" 
      @click="scrollToTop"
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-2.5 sm:p-3 bg-primary text-light rounded-full shadow-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation min-h-[48px] min-w-[48px]"
      aria-label="Retour en haut de page"
    >
      <ArrowUpIcon class="h-4 w-4 sm:h-5 sm:w-5" />
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ArrowUpIcon } from '@heroicons/vue/24/outline';

defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>