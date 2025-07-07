<template>
  <button
    :class="[
      customClass ? customClass : `
        inline-flex items-center justify-center rounded-md transition-colors duration-200 touch-manipulation
        ${primary 
          ? 'border-2 border-primary bg-primary text-secondary hover:bg-primary-light hover:border-primary-light' 
          : variant === 'outline'
            ? 'border-2 border-secondary/20 bg-transparent text-secondary hover:bg-secondary/5'
            : 'bg-secondary text-white hover:bg-secondary/90'}
        ${size === 'sm' ? 'px-3 py-1.5 text-sm min-h-[44px]' : 'px-4 py-2 text-base min-h-[48px]'}
        ${rounded ? 'rounded-full' : 'rounded-md'}
        ${fullWidth ? 'w-full' : ''}
      `
    ]"
    @click="openContactModal"
  >
    <slot>Contactez-nous</slot>
  </button>
</template>

<script setup lang="ts">
import useContactModalState from '~/composables/useContactModal';

const props = defineProps({
  primary: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'solid' // 'solid', 'outline'
  },
  size: {
    type: String,
    default: 'md', // 'sm' ou 'md'
  },
  rounded: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  service: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
});

// Accéder à l'état de la modale de contact
const contactModalState = useContactModalState();

// Méthode pour ouvrir la modale
function openContactModal() {
  contactModalState.open(props.service);
}
</script>