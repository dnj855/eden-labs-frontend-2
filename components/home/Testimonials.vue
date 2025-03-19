<template>
  <section class="py-10 sm:py-12 md:py-16 lg:py-24 bg-light">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="font-headers text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-secondary">
          Ils nous font confiance
        </h2>
        <p class="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-secondary/70">
          Découvrez comment nos clients transforment leur entreprise avec l'IA.
        </p>
      </div>

      <!-- Statistiques -->
      <div class="mt-8 sm:mt-12 lg:mt-16">
        <dl class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="overflow-hidden rounded-lg bg-white px-4 py-4 sm:px-5 sm:py-5 md:p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <dt class="truncate text-xs sm:text-sm font-medium text-secondary/70">
              {{ stat.label }}
            </dt>
            <dd class="mt-1 font-headers text-2xl sm:text-3xl font-semibold text-primary">
              {{ stat.value }}
            </dd>
            <p class="mt-1 sm:mt-2 text-xs sm:text-sm text-secondary/70">
              {{ stat.description }}
            </p>
          </div>
        </dl>
      </div>

      <!-- Logos clients -->
      <div class="mt-8 sm:mt-12 lg:mt-16">
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          <div
            v-for="client in clients"
            :key="client.name"
            class="col-span-1 flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
          >
            <img
              :src="client.logo"
              :alt="client.name"
              class="h-8 sm:h-10 md:h-12"
            />
          </div>
        </div>
      </div>

      <!-- Témoignages (Desktop et Tablette) -->
      <div class="mt-8 sm:mt-12 lg:mt-16 hidden sm:block">
        <div class="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="rounded-lg bg-white p-4 sm:p-5 md:p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div class="mb-3 sm:mb-4 flex items-center">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-primary"
              />
              <div class="ml-3 sm:ml-4">
                <h4 class="font-headers text-base sm:text-lg font-medium text-secondary">
                  {{ testimonial.name }}
                </h4>
                <p class="text-xs sm:text-sm text-tertiary">
                  {{ testimonial.role }}, {{ testimonial.company }}
                </p>
              </div>
            </div>
            <div class="relative">
              <ChatBubbleLeftIcon class="absolute -translate-x-3 -translate-y-3 transform text-primary/20 h-6 w-6 sm:h-8 sm:w-8" />
              <p class="relative z-10 text-sm sm:text-base text-secondary/70">
                "{{ testimonial.quote }}"
              </p>
            </div>
            <div class="mt-3 sm:mt-4 flex items-center">
              <div class="flex">
                <StarIcon
                  v-for="i in 5"
                  :key="i"
                  class="h-4 w-4 sm:h-5 sm:w-5 text-primary"
                />
              </div>
              <span class="ml-2 text-xs sm:text-sm text-secondary/50">
                {{ testimonial.date }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Témoignages (Mobile uniquement - Version carousel améliorée) -->
      <div class="mt-8 sm:hidden">
        <div class="relative pb-10">
          <!-- Afficher seulement le témoignage actif -->
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.name"
            v-show="currentTestimonial === index"
            class="rounded-lg bg-white p-4 shadow-lg min-h-[200px]"
          >
            <div class="mb-3 flex items-center">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="h-10 w-10 rounded-full ring-2 ring-primary"
              />
              <div class="ml-3">
                <h4 class="font-headers text-base font-medium text-secondary">
                  {{ testimonial.name }}
                </h4>
                <p class="text-xs text-tertiary">
                  {{ testimonial.role }}, {{ testimonial.company }}
                </p>
              </div>
            </div>
            <div class="relative">
              <ChatBubbleLeftIcon class="absolute -translate-x-2 -translate-y-2 transform text-primary/20 h-6 w-6" />
              <p class="relative z-10 text-sm text-secondary/70 px-1">
                "{{ testimonial.quote }}"
              </p>
            </div>
            <div class="mt-3 flex items-center">
              <div class="flex">
                <StarIcon
                  v-for="i in 5"
                  :key="i"
                  class="h-4 w-4 text-primary"
                />
              </div>
              <span class="ml-2 text-xs text-secondary/50">
                {{ testimonial.date }}
              </span>
            </div>
          </div>
          
          <!-- Navigation du carousel (déplacée sous le contenu) -->
          <div class="absolute bottom-0 left-0 right-0 flex justify-center items-center mt-4 space-x-8">
            <button 
              @click="prevTestimonial" 
              class="bg-white rounded-full p-2 shadow-md flex items-center justify-center"
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <!-- Indicateurs carousel -->
            <div class="flex justify-center space-x-2">
              <button 
                v-for="(_, index) in testimonials" 
                :key="index"
                class="w-2 h-2 rounded-full transition-colors duration-300"
                :class="currentTestimonial === index ? 'bg-primary' : 'bg-secondary/30'"
                @click="currentTestimonial = index"
                :aria-label="`Voir témoignage ${index + 1}`"
              ></button>
            </div>
            
            <button 
              @click="nextTestimonial" 
              class="bg-white rounded-full p-2 shadow-md flex items-center justify-center"
              aria-label="Témoignage suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-8 sm:mt-12 lg:mt-16 text-center">
        <button
          class="inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-secondary shadow-sm transition-colors duration-200 hover:bg-primary-light hover:border-primary-light"
          @click="$emit('startAudit')"
        >
          Rejoignez nos clients satisfaits
          <ArrowRightIcon class="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
        <p class="mt-3 sm:mt-4 text-xs sm:text-sm text-secondary/70">
          Plus de 50 entreprises nous font déjà confiance
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChatBubbleLeftIcon } from '@heroicons/vue/24/outline'
import {
    ArrowRightIcon,
    StarIcon
} from '@heroicons/vue/24/solid'
import { ref } from 'vue'

// Pour le carousel mobile
const currentTestimonial = ref(0)

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length
}

// Ajouter les interactions tactiles pour le swipe sur mobile
import { onMounted, onUnmounted } from 'vue'

let touchStartX = 0
let touchEndX = 0
const minSwipeDistance = 50

onMounted(() => {
  const carouselElement = document.querySelector('.sm\\:hidden')
  
  if (carouselElement) {
    carouselElement.addEventListener('touchstart', handleTouchStart, { passive: true })
    carouselElement.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
})

onUnmounted(() => {
  const carouselElement = document.querySelector('.sm\\:hidden')
  
  if (carouselElement) {
    carouselElement.removeEventListener('touchstart', handleTouchStart)
    carouselElement.removeEventListener('touchend', handleTouchEnd)
  }
})

function handleTouchStart(event: TouchEvent) {
  touchStartX = event.changedTouches[0].screenX
}

function handleTouchEnd(event: TouchEvent) {
  touchEndX = event.changedTouches[0].screenX
  handleSwipe()
}

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX
  
  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      // Swipe vers la droite (témoignage précédent)
      prevTestimonial()
    } else {
      // Swipe vers la gauche (témoignage suivant)
      nextTestimonial()
    }
  }
}

// Autoplay pour le carousel (optionnel, à activer si souhaité)
/*
import { onMounted, onUnmounted } from 'vue'

let autoplayInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  autoplayInterval = setInterval(() => {
    nextTestimonial()
  }, 5000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
*/

const stats = [
  {
    label: 'Entreprises accompagnées',
    value: '50+',
    description: 'De la PME au grand groupe'
  },
  {
    label: 'Gain de productivité',
    value: '+45%',
    description: 'En moyenne après 6 mois'
  },
  {
    label: 'ROI moyen',
    value: '4.2x',
    description: 'Retour sur investissement'
  },
  {
    label: 'Satisfaction client',
    value: '96%',
    description: 'Recommandent Eden Labs'
  }
]

const clients = [
  { name: 'TechCorp', logo: 'https://tailwindui.com/img/logos/tuple-logo-gray-900.svg' },
  { name: 'IndustriePlus', logo: 'https://tailwindui.com/img/logos/statickit-logo-gray-900.svg' },
  { name: 'LogiGroup', logo: 'https://tailwindui.com/img/logos/transistor-logo-gray-900.svg' },
  { name: 'RetailPlus', logo: 'https://tailwindui.com/img/logos/workcation-logo-gray-900.svg' },
  { name: 'IndustrieNext', logo: 'https://tailwindui.com/img/logos/level-logo-gray-900.svg' },
  { name: 'ConseilPlus', logo: 'https://tailwindui.com/img/logos/reform-logo-gray-900.svg' }
]

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Directrice Marketing',
    company: 'TechCorp',
    quote: 'Eden Labs nous a permis de multiplier notre production de contenu par 3 tout en maintenant une qualité constante. L\'accompagnement a été clé dans notre transformation.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'Il y a 2 mois'
  },
  {
    name: 'Marc Lefevre',
    role: 'DRH',
    company: 'IndustriePlus',
    quote: 'L\'IA a révolutionné notre processus de recrutement. Nous identifions les meilleurs talents en deux fois moins de temps qu\'avant.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'Il y a 1 mois'
  },
  {
    name: 'Marie Lambert',
    role: 'Directrice Générale',
    company: 'PME+',
    quote: 'L\'approche pragmatique d\'Eden Labs nous a permis d\'intégrer l\'IA sans bouleverser notre organisation. Les résultats sont au-delà de nos espérances.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'Il y a 3 mois'
  }
]
</script>