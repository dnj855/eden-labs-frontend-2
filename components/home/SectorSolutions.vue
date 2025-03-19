<template>
  <section class="py-10 sm:py-12 md:py-16 lg:py-24 bg-light">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="font-headers text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-secondary">
          L'IA adaptée à votre réalité métier
        </h2>
        <p class="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-secondary/70">
          Découvrez des solutions concrètes pour votre secteur d'activité.
        </p>
      </div>

      <!-- Sélecteur de secteur - Version mobile (Dropdown) -->
      <div class="mt-8 sm:hidden">
        <label for="sector-select" class="sr-only">Sélectionnez votre secteur</label>
        <select 
          id="sector-select" 
          class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary"
          v-model="activeSector"
        >
          <option v-for="sector in sectors" :key="sector.id" :value="sector.id">
            {{ sector.name }}
          </option>
        </select>
      </div>

      <!-- Sélecteur de secteur - Version tablette/desktop -->
      <div class="my-8 sm:my-10 md:my-12 hidden sm:block">
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          <button
            v-for="sector in sectors"
            :key="sector.id"
            class="relative flex flex-col items-center justify-center rounded-lg p-3 sm:p-4 transition-all duration-200 hover:bg-white hover:shadow-lg"
            :class="[
              activeSector === sector.id
                ? 'bg-white shadow-lg ring-2 ring-primary'
                : 'bg-light/50'
            ]"
            @click="activeSector = sector.id"
          >
            <component
              :is="sector.icon"
              class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              :class="[
                activeSector === sector.id
                  ? 'text-primary'
                  : 'text-secondary/40'
              ]"
            />
            <span
              class="mt-2 text-xs sm:text-sm font-medium line-clamp-2 text-center"
              :class="[
                activeSector === sector.id
                  ? 'text-primary'
                  : 'text-secondary'
              ]"
            >
              {{ sector.name }}
            </span>
          </button>
        </div>
      </div>

      <!-- Contenu du secteur -->
      <Transition>
        <div
          :key="currentSector.id"
          class="grid grid-cols-1 gap-6 sm:gap-8"
        >
          <!-- Nom du secteur (mobile uniquement) -->
          <div class="sm:hidden">
            <h3 class="font-headers text-xl font-bold text-secondary">
              Solutions pour {{ currentSector.name }}
            </h3>
          </div>

          <!-- Layout principal -->
          <div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Cas d'usage -->
            <div class="md:col-span-1 lg:col-span-2">
              <!-- Titre (tablette/desktop) -->
              <div class="hidden sm:block">
                <h3 class="font-headers text-xl sm:text-2xl font-bold text-secondary">
                  Solutions pour {{ currentSector.name }}
                </h3>
              </div>
              
              <div class="mt-6 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                <div
                  v-for="useCase in currentSector.useCases"
                  :key="useCase.id"
                  class="relative rounded-lg bg-white p-4 sm:p-6 shadow-sm transition-shadow duration-200 hover:shadow-xl"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <component
                        :is="useCase.icon"
                        class="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                      />
                    </div>
                    <h4 class="ml-3 sm:ml-4 font-headers text-base sm:text-lg font-medium text-secondary">
                      {{ useCase.title }}
                    </h4>
                  </div>
                  <p class="mt-2 text-sm sm:text-base text-secondary/70">
                    {{ useCase.description }}
                  </p>
                  <div class="mt-3 sm:mt-4 flex items-baseline space-x-2">
                    <ArrowTrendingUpIcon class="h-4 w-4 sm:h-5 sm:w-5 text-tertiary" />
                    <span class="text-xs sm:text-sm font-medium text-tertiary">
                      {{ useCase.result }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Étude de cas -->
            <div class="rounded-lg bg-white p-4 sm:p-6 lg:p-8 shadow-sm">
              <div class="flex items-center justify-between">
                <h4 class="font-headers text-base sm:text-lg font-medium text-secondary">
                  Étude de cas
                </h4>
                <img
                  :src="currentSector.caseStudy.logo"
                  :alt="currentSector.caseStudy.company"
                  class="h-6 sm:h-8"
                />
              </div>
              <p class="mt-3 sm:mt-4 text-sm sm:text-base text-secondary/70">
                {{ currentSector.caseStudy.description }}
              </p>
              <div class="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div
                  v-for="(stat, index) in currentSector.caseStudy.stats"
                  :key="index"
                  class="rounded-lg bg-light/50 p-3 sm:p-4"
                >
                  <p class="text-xl sm:text-2xl font-bold text-primary">
                    {{ stat.value }}
                  </p>
                  <p class="mt-1 text-xs sm:text-sm text-secondary/70">
                    {{ stat.label }}
                  </p>
                </div>
              </div>
              <div class="mt-4 sm:mt-6">
                <div class="flex items-start">
                  <img
                    :src="currentSector.caseStudy.testimonial.avatar"
                    :alt="currentSector.caseStudy.testimonial.name"
                    class="h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-primary"
                  />
                  <div class="ml-3 sm:ml-4">
                    <p class="text-xs sm:text-sm italic text-secondary/70">
                      "{{ currentSector.caseStudy.testimonial.quote }}"
                    </p>
                    <div class="mt-1">
                      <p class="text-xs sm:text-sm font-medium text-secondary">
                        {{ currentSector.caseStudy.testimonial.name }}
                      </p>
                      <p class="text-xs text-tertiary">
                        {{ currentSector.caseStudy.testimonial.role }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- CTAs -->
      <div class="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center space-y-3 sm:space-y-4">
        <button
          class="w-full sm:w-auto inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-secondary shadow-sm transition-colors duration-200 hover:bg-primary-light hover:border-primary-light"
          @click="$emit('exploreSector', activeSector)"
        >
          <span class="sm:hidden">Explorer {{ currentSector.name }}</span>
          <span class="hidden sm:inline">Explorer nos solutions pour {{ currentSector.name }}</span>
          <ArrowRightIcon class="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
        <button
          class="text-xs sm:text-sm text-secondary/70 transition-colors duration-200 hover:text-tertiary"
          @click="$emit('contact')"
        >
          Votre secteur n'est pas listé ? Contactez-nous
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ClockIcon,
  CogIcon,
  CurrencyEuroIcon,
  DocumentTextIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'

const activeSector = ref('marketing')

const sectors = [
  {
    id: 'marketing',
    name: 'Marketing & Communication',
    icon: BriefcaseIcon,
    useCases: [
      {
        id: 1,
        icon: DocumentTextIcon,
        title: 'Création de contenu',
        description: 'Génération automatique de contenus marketing adaptés à votre marque.',
        result: '+60% de productivité'
      },
      {
        id: 2,
        icon: ChartBarIcon,
        title: 'Analyse de données',
        description: 'Insights automatisés sur vos campagnes marketing.',
        result: '+40% de ROI'
      },
      {
        id: 3,
        icon: ClockIcon,
        title: 'Automatisation emails',
        description: 'Personnalisation à grande échelle de vos communications.',
        result: '+35% de taux d\'ouverture'
      }
    ],
    caseStudy: {
      company: 'TechCorp',
      logo: 'https://tailwindui.com/img/logos/tuple-logo-gray-900.svg',
      description: 'TechCorp a transformé sa stratégie marketing grâce à l\'IA générative.',
      stats: [
        { value: '3x', label: 'Plus de contenu produit' },
        { value: '-40%', label: 'De coûts marketing' }
      ],
      testimonial: {
        quote: 'L\'IA nous a permis de multiplier notre production de contenu tout en maintenant une qualité constante.',
        name: 'Sophie Martin',
        role: 'Directrice Marketing, TechCorp',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  },
  {
    id: 'rh',
    name: 'Ressources Humaines',
    icon: UserGroupIcon,
    useCases: [
      {
        id: 1,
        icon: DocumentTextIcon,
        title: 'Recrutement intelligent',
        description: 'Présélection automatisée des candidats.',
        result: '-50% de temps de recrutement'
      },
      {
        id: 2,
        icon: ChartBarIcon,
        title: 'Formation personnalisée',
        description: 'Parcours d\'apprentissage adaptatifs.',
        result: '+45% d\'engagement'
      }
    ],
    caseStudy: {
      company: 'IndustriePlus',
      logo: 'https://tailwindui.com/img/logos/statickit-logo-gray-900.svg',
      description: 'IndustriePlus a optimisé ses processus RH avec l\'IA.',
      stats: [
        { value: '2x', label: 'Plus de candidats qualifiés' },
        { value: '-30%', label: 'De turnover' }
      ],
      testimonial: {
        quote: 'L\'IA nous aide à identifier les meilleurs talents plus rapidement.',
        name: 'Marc Lefevre',
        role: 'DRH, IndustriePlus',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  },
  {
    id: 'finance',
    name: 'Finance & Administration',
    icon: CurrencyEuroIcon,
    useCases: [
      {
        id: 1,
        icon: DocumentTextIcon,
        title: 'Traitement des factures',
        description: 'Automatisation de la saisie et validation.',
        result: '-75% de temps de traitement'
      }
    ],
    caseStudy: {
      company: 'LogiGroup',
      logo: 'https://tailwindui.com/img/logos/transistor-logo-gray-900.svg',
      description: 'LogiGroup a automatisé sa gestion financière.',
      stats: [
        { value: '4x', label: 'Plus rapide' },
        { value: '-60%', label: 'D\'erreurs' }
      ],
      testimonial: {
        quote: 'L\'automatisation nous a permis de nous concentrer sur l\'analyse stratégique.',
        name: 'Pierre Durand',
        role: 'DAF, LogiGroup',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  },
  {
    id: 'vente',
    name: 'Vente & Relation Client',
    icon: ShoppingBagIcon,
    useCases: [
      {
        id: 1,
        icon: ChartBarIcon,
        title: 'Prédiction des ventes',
        description: 'Anticipation des tendances commerciales.',
        result: '+25% de précision'
      }
    ],
    caseStudy: {
      company: 'RetailPlus',
      logo: 'https://tailwindui.com/img/logos/workcation-logo-gray-900.svg',
      description: 'RetailPlus a optimisé sa force de vente avec l\'IA.',
      stats: [
        { value: '+30%', label: 'De ventes' },
        { value: '+45%', label: 'De satisfaction client' }
      ],
      testimonial: {
        quote: 'Nos vendeurs sont plus efficaces grâce aux insights IA.',
        name: 'Thomas Dubois',
        role: 'Directeur Commercial, RetailPlus',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  },
  {
    id: 'operations',
    name: 'Production & Opérations',
    icon: CogIcon,
    useCases: [
      {
        id: 1,
        icon: ChartBarIcon,
        title: 'Optimisation production',
        description: 'Prédiction et optimisation des processus.',
        result: '+20% de productivité'
      }
    ],
    caseStudy: {
      company: 'IndustrieNext',
      logo: 'https://tailwindui.com/img/logos/level-logo-gray-900.svg',
      description: 'IndustrieNext a optimisé sa production avec l\'IA.',
      stats: [
        { value: '-30%', label: 'De déchets' },
        { value: '+25%', label: 'D\'efficacité' }
      ],
      testimonial: {
        quote: 'L\'IA nous aide à optimiser chaque étape de notre production.',
        name: 'Jean Martin',
        role: 'Directeur Opérations, IndustrieNext',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  }
]

const currentSector = computed(() => {
  return sectors.find(s => s.id === activeSector.value) || sectors[0]
})
</script>