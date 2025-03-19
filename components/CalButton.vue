<!-- components/CalButton.vue -->
<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md',
      primary ? 'border-2 border-primary bg-primary text-secondary hover:bg-primary-light hover:border-primary-light' : 'border-2 border-light bg-transparent text-light hover:bg-light hover:text-secondary',
      'transition-colors duration-200',
      size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base',
      'font-medium'
    ]"
    :data-cal-link="link"
    :data-cal-namespace="namespace"
    :data-cal-config="JSON.stringify(config)"
    @click="handleClick"
  >
    <slot>Réserver un appel</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  primary: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'md', // 'sm' ou 'md'
  },
  link: {
    type: String,
    default: 'clangroth/decouverte-eden-labs'
  },
  namespace: {
    type: String,
    default: 'decouverte-eden-labs'
  },
  config: {
    type: Object,
    default: () => ({ layout: 'month_view' })
  },
  // Si true, utilise l'API programmatique au lieu des attributs data-cal
  useApi: {
    type: Boolean,
    default: false
  }
})

// Accéder à la fonction fournie par le plugin
const { $openCal } = useNuxtApp()

const handleClick = () => {
  if (props.useApi && $openCal) {
    $openCal(props.config)
  }
  // Sinon, les attributs data-cal-* s'en chargeront automatiquement
}
</script>