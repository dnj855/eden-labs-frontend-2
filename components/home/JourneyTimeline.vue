<template>
  <section class="py-10 sm:py-16 md:py-20 lg:py-32 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10 sm:mb-16 lg:mb-24">
        <h2 class="font-headers text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-secondary">
          Un parcours clair et progressif vers l'autonomie avec l'IA
        </h2>
        <p class="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-secondary/70">
          Notre méthodologie éprouvée auprès de plus de 50 entreprises similaires à la vôtre.
        </p>
      </div>

      <!-- Version Mobile Simplifiée -->
      <div class="block sm:hidden">
        <div class="space-y-6">
          <div 
            v-for="(step, index) in steps" 
            :key="step.id"
            class="bg-light/30 p-4 rounded-lg"
          >
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-secondary-tertiary">
                  <component :is="step.icon" class="h-5 w-5 text-white" aria-hidden="true" />
                </span>
              </div>
              <div class="ml-4">
                <h3 class="font-headers text-base font-medium text-secondary">
                  {{ step.title }}
                </h3>
                <p class="text-xs text-secondary/70">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile CTA -->
        <div class="mt-8 flex justify-center">
          <button
            class="inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary px-4 py-3 text-sm font-medium text-secondary shadow-sm"
            @click="$emit('startAudit')"
          >
            Commencer par l'audit gratuit
          </button>
        </div>
      </div>

      <!-- Version Tablette (écrans intermédiaires) -->
      <div class="hidden sm:block md:hidden">
        <div class="relative">
          <!-- Titres des étapes en haut -->
          <div class="grid grid-cols-2 gap-6 mb-10">
            <div 
              v-for="(step, index) in steps" 
              :key="step.id"
              class="text-center"
              @click="activeTabletStep = index"
              :class="[
                'cursor-pointer transition-all duration-300',
                activeTabletStep === index ? 'opacity-100' : 'opacity-70'
              ]"
            >
              <span class="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-gradient-secondary-tertiary">
                <component :is="step.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <h3 class="mt-3 font-headers text-lg font-medium text-secondary">
                {{ step.title }}
              </h3>
              <p class="mt-1 text-sm text-secondary/70">{{ step.description }}</p>
            </div>
          </div>

          <!-- Ligne de progression -->
          <div class="relative h-2 mx-auto w-full bg-light mb-8" aria-hidden="true">
            <div
              class="absolute h-full bg-gradient-secondary-tertiary transition-all duration-500"
              :style="{ width: (activeTabletStep / (steps.length - 1)) * 100 + '%' }"
            ></div>
          </div>

          <!-- Affichage du contenu de l'étape sélectionnée -->
          <div 
            class="bg-light/30 p-6 rounded-lg transition-all duration-300"
          >
            <div v-if="steps[activeTabletStep]">
              <h4 class="text-lg font-headers font-medium text-secondary mb-4">
                {{ steps[activeTabletStep].title }} - Points clés
              </h4>
              
              <!-- Livrables -->
              <ul class="space-y-3 mb-6">
                <li
                  v-for="(deliverable, idx) in steps[activeTabletStep].deliverables"
                  :key="idx"
                  class="flex items-start"
                >
                  <CheckCircleIcon
                    class="mr-3 mt-0.5 h-5 w-5 text-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span class="text-sm text-secondary/70">{{ deliverable }}</span>
                </li>
              </ul>

              <!-- Témoignage -->
              <div class="border-t border-light/50 pt-4">
                <p class="text-sm italic text-secondary/70">
                  "{{ steps[activeTabletStep].testimonial.quote }}"
                </p>
                <div class="mt-3 flex items-center">
                  <img
                    :src="steps[activeTabletStep].testimonial.avatar"
                    :alt="steps[activeTabletStep].testimonial.name"
                    class="h-8 w-8 rounded-full ring-2 ring-primary"
                  />
                  <div class="ml-3">
                    <p class="text-sm font-medium text-secondary">
                      {{ steps[activeTabletStep].testimonial.name }}
                    </p>
                    <p class="text-xs text-tertiary">
                      {{ steps[activeTabletStep].testimonial.role }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tablette CTAs -->
          <div class="mt-10 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <button
              class="inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary px-5 py-3 text-sm font-medium text-secondary shadow-sm"
              @click="$emit('startAudit')"
            >
              Commencer par l'audit gratuit
            </button>
            <button
              class="inline-flex items-center justify-center rounded-md border-2 border-secondary bg-transparent px-5 py-3 text-sm font-medium text-secondary"
              @click="$emit('learnMore')"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      <!-- Version Desktop Complète -->
      <div class="hidden md:block">
        <!-- Timeline -->
        <div class="relative">
          <!-- Étapes - Partie supérieure (Titres) -->
          <ul class="relative grid grid-cols-4 gap-8 mb-12 lg:mb-16">
            <li
              v-for="(step, index) in steps"
              :key="step.id"
              class="relative timeline-step"
            >
              <div class="flex flex-col items-center">
                <span
                  class="flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full"
                  :class="[
                    activeStep >= index
                      ? 'bg-gradient-secondary-tertiary scale-110'
                      : 'bg-light',
                    'transition-all duration-300'
                  ]"
                >
                  <component
                    :is="step.icon"
                    class="h-6 w-6 lg:h-8 lg:w-8 text-white"
                    aria-hidden="true"
                  />
                  <span
                    v-if="activeStep >= index"
                    class="absolute -right-1 -top-1 flex h-3 w-3 lg:h-4 lg:w-4"
                  >
                    <span class="absolute h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span class="relative h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-primary"></span>
                  </span>
                </span>
                <div class="mt-4 lg:mt-6 text-center">
                  <h3 class="font-headers text-lg lg:text-xl font-medium text-secondary">
                    {{ step.title }}
                  </h3>
                  <p class="mt-2 text-sm lg:text-base text-secondary/70">{{ step.description }}</p>
                </div>
              </div>
            </li>
          </ul>

          <!-- Ligne de progression horizontale pour desktop -->
          <div class="relative h-2 mx-auto w-full bg-light mb-12 lg:mb-16" aria-hidden="true">
            <div
              class="absolute h-full bg-gradient-secondary-tertiary transition-all duration-500"
              :style="{ width: (activeStep / (steps.length - 1)) * 100 + '%' }"
            ></div>
          </div>

          <!-- Étapes - Partie inférieure (Contenu) -->
          <ul 
            class="relative grid grid-cols-4 gap-8"
            @mouseleave="activeStep = 0"
          >
            <li
              v-for="(step, index) in steps"
              :key="step.id"
              @mouseenter="activeStep = index"
              @click="activeStep = index"
              class="relative timeline-step cursor-pointer"
              :class="[
                activeStep >= index ? 'opacity-100' : 'opacity-70',
                'transition-all duration-300'
              ]"
            >
              <!-- Contenu -->
              <div>
                <!-- Livrables -->
                <ul class="space-y-3 lg:space-y-4">
                  <li
                    v-for="(deliverable, idx) in step.deliverables"
                    :key="idx"
                    class="flex items-start"
                  >
                    <CheckCircleIcon
                      class="mr-3 mt-0.5 h-5 w-5 lg:h-6 lg:w-6 text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span class="text-sm lg:text-base text-secondary/70">{{ deliverable }}</span>
                  </li>
                </ul>

                <!-- Témoignage -->
                <div 
                  class="mt-6 lg:mt-8 rounded-lg bg-light/30 p-4 lg:p-6 transform transition-all duration-300"
                  :class="[activeStep >= index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0']"
                >
                  <p class="text-sm lg:text-base italic text-secondary/70">
                    "{{ step.testimonial.quote }}"
                  </p>
                  <div class="mt-4 flex items-center">
                    <img
                      :src="step.testimonial.avatar"
                      :alt="step.testimonial.name"
                      class="h-8 w-8 lg:h-10 lg:w-10 rounded-full ring-2 ring-primary"
                    />
                    <div class="ml-3">
                      <p class="text-sm lg:text-base font-medium text-secondary">
                        {{ step.testimonial.name }}
                      </p>
                      <p class="text-xs lg:text-sm text-tertiary">
                        {{ step.testimonial.role }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Desktop CTAs -->
        <div class="mt-16 lg:mt-24 flex justify-center space-x-6">
          <button
            class="inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary px-6 lg:px-8 py-3.5 lg:py-4 text-base lg:text-lg font-medium text-secondary shadow-sm transition-all duration-200 hover:bg-primary-light hover:border-primary-light hover:scale-105"
            @click="$emit('startAudit')"
          >
            Commencer par l'audit gratuit
          </button>
          <button
            class="inline-flex items-center justify-center rounded-md border-2 border-secondary bg-transparent px-6 lg:px-8 py-3.5 lg:py-4 text-base lg:text-lg font-medium text-secondary transition-all duration-200 hover:bg-secondary hover:text-light hover:scale-105"
            @click="$emit('learnMore')"
          >
            Découvrir notre méthode en détail
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  AcademicCapIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const activeStep = ref(0)
const activeTabletStep = ref(0)

const steps = [
  {
    id: 1,
    icon: MagnifyingGlassIcon,
    title: 'Audit flash gratuit',
    description: 'Identification rapide des opportunités d\'IA dans votre entreprise en 45 minutes.',
    deliverables: [
      'Cartographie des processus optimisables',
      'Estimation des gains potentiels',
      'Recommandations prioritaires'
    ],
    testimonial: {
      quote: 'L\'audit nous a ouvert les yeux sur des opportunités que nous n\'avions pas identifiées.',
      name: 'Marie Lambert',
      role: 'Directrice Générale, PME+',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 2,
    icon: AcademicCapIcon,
    title: 'Formation socle',
    description: 'Maîtrisez les fondamentaux de l\'IA générative adaptés à votre contexte.',
    deliverables: [
      'Guide pratique personnalisé',
      'Accès aux ressources en ligne',
      'Certification Eden Labs'
    ],
    testimonial: {
      quote: 'La formation a démystifié l\'IA pour toute notre équipe.',
      name: 'Paul Durand',
      role: 'Responsable Innovation, TechPro',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 3,
    icon: UserGroupIcon,
    title: 'Ateliers pratiques',
    description: 'Application concrète sur vos cas d\'usage prioritaires.',
    deliverables: [
      'Templates personnalisés',
      'Workflows optimisés',
      'Documentation technique'
    ],
    testimonial: {
      quote: 'Les ateliers nous ont permis de passer rapidement de la théorie à la pratique.',
      name: 'Sophie Martin',
      role: 'Chef de Projet, InnovCorp',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 4,
    icon: SparklesIcon,
    title: 'Coaching d\'autonomisation',
    description: 'Accompagnement pour pérenniser les acquis et développer votre autonomie.',
    deliverables: [
      'Plan d\'action personnalisé',
      'Suivi mensuel',
      'Support prioritaire'
    ],
    testimonial: {
      quote: 'Le coaching nous a donné confiance pour innover par nous-mêmes.',
      name: 'Jean Dupont',
      role: 'DG, ConseilPlus',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
]
</script>