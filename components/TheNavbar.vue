<template>
  <nav class="bg-light shadow-sm py-2 sm:py-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-14">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-primary font-headers font-bold text-lg sm:text-xl">
              Eden Labs
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 md:ml-8 sm:flex sm:space-x-4 md:space-x-8">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              class="inline-flex items-center px-1 pt-1 border-b-2 text-sm md:text-base font-body transition-colors duration-200"
              :class="[
                $route.path === item.path
                  ? 'border-primary text-secondary font-medium'
                  : 'border-transparent text-secondary/70 hover:border-tertiary hover:text-tertiary'
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <ContactButton
            :custom-class="'bg-gradient-to-r from-secondary to-tertiary text-primary px-3 py-2 md:px-4 md:py-2 rounded-md text-sm font-headers font-medium hover:from-secondary/90 hover:to-tertiary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'"
          >
            Contactez-nous
          </ContactButton>
        </div>
        <div class="flex items-center sm:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-secondary/50 hover:text-secondary hover:bg-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
          >
            <span class="sr-only">{{ isOpen ? 'Fermer' : 'Ouvrir' }} le menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-3 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-3 opacity-0"
    >
      <div
        v-show="isOpen"
        class="sm:hidden"
        id="mobile-menu"
      >
        <div class="pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            @click="closeMenu"
            class="block pl-3 pr-4 py-2 border-l-4 text-base font-body font-medium transition-colors duration-200"
            :class="[
              $route.path === item.path
                ? 'bg-light/50 border-primary text-primary'
                : 'border-transparent text-secondary/70 hover:bg-light/30 hover:border-tertiary hover:text-tertiary'
            ]"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="pt-4 pb-2 border-t border-secondary/10">
          <div class="px-4 py-2">
            <ContactButton
              :custom-class="'w-full text-left block px-4 py-2 text-base font-headers font-medium bg-gradient-to-r from-secondary to-tertiary text-primary rounded-md hover:from-secondary/90 hover:to-tertiary/90 transition-colors duration-200'"
            >
              Contactez-nous
            </ContactButton>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

interface NavigationResponse {
  data: {
    data: Array<{
      path: string;
      name: string;
    }>;
  };
}

const isOpen = ref(false)

const baseUrl = useRuntimeConfig().public.strapiUrl;
const { $api } = useNuxtApp();
const navigationItems = ref<{ path: string; name: string }[]>([]);

try {
  const { data, error } = await $api.fetch(baseUrl + '/api/Navigation-Item');

  if (error.value) {
    console.error('Erreur API détectée :', error.value);
  } else {
    navigationItems.value = (data.value as NavigationResponse)?.data?.data || [];
  }
} catch (e) {
  console.error('Exception lors de la récupération de l’API :', e);
}


// Fermer le menu quand l'écran devient large
const checkScreenSize = () => {
  if (window.innerWidth >= 640 && isOpen.value) {
    isOpen.value = false
  }
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  
  // Optionnel: empêcher le défilement du body quand le menu est ouvert
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

// Gestionnaire pour la touche Escape
const handleEscape = (e: { key: string; }) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

onMounted(async() => {
  window.addEventListener('resize', checkScreenSize)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
  document.removeEventListener('keydown', handleEscape)
})
</script>