<template>
  <div class="bg-transparent">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- En-tête avec badge -->
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-sm sm:text-base font-semibold leading-6 sm:leading-7 text-secondary">Coaching Personnalisé</h2>
        <p class="mt-1.5 sm:mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-secondary">
          Transformez votre productivité
        </p>
        <div class="w-16 sm:w-20 h-1 bg-primary/30 mx-auto mt-4 sm:mt-6"></div>
      </div>

      <!-- Parcours de coaching -->
      <div class="mx-auto mt-8 sm:mt-10 lg:mt-16 max-w-2xl lg:max-w-none">
          <!-- Étapes du parcours -->
          <div class="space-y-8 sm:space-y-10 md:space-y-16">
            <div v-for="(step, index) in coachingSteps" :key="index" class="relative">
              <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                <!-- Numéro d'étape avec cercle -->
                <div class="flex sm:flex-col items-center sm:items-start md:items-center sm:w-24 md:w-28">
                  <div class="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 text-primary z-10">
                    <span class="text-xl sm:text-2xl font-bold">{{ index + 1 }}</span>
                  </div>
                  <div class="ml-4 sm:ml-0 sm:mt-3 md:mt-4 flex-grow sm:text-left md:text-center">
                    <h3 class="text-base sm:text-lg font-semibold text-secondary">{{ step.title }}</h3>
                  </div>
                </div>
                
                <!-- Contenu de l'étape -->
                <div class="bg-white/50 rounded-xl p-4 sm:p-6 shadow-sm flex-grow sm:ml-2 md:ml-4">
                  <p class="text-xs sm:text-sm text-secondary/80 mb-3 sm:mb-4">{{ step.description }}</p>
                  <ul class="space-y-1.5 sm:space-y-2">
                    <li v-for="(point, i) in step.points" :key="i" class="flex items-start">
                      <CheckIcon class="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span class="text-xs sm:text-sm text-secondary/70">{{ point }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>

      <!-- Points clés -->
      <div class="mx-auto mt-8 sm:mt-10 lg:mt-16 max-w-2xl lg:max-w-none">
        <div class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          <div v-for="(point, index) in keyPoints" :key="index" class="flex gap-x-2 sm:gap-x-3">
            <CheckIcon class="h-5 w-5 sm:h-6 sm:w-5 flex-none text-tertiary mt-0.5" aria-hidden="true" />
            <span class="text-xs sm:text-sm leading-5 sm:leading-6 text-secondary/80">{{ point }}</span>
          </div>
        </div>
      </div>

      <!-- Formules de coaching avec carrousel sur mobile -->
      <div class="mx-auto mt-10 sm:mt-12 lg:mt-16 max-w-2xl lg:max-w-none">
        <h3 class="text-lg sm:text-xl font-semibold text-secondary text-center mb-6 sm:mb-8">Nos formules de coaching</h3>
        
        <!-- Carrousel sur mobile / Grid sur tablette+ -->
        <div class="sm:hidden relative">
          <!-- Conteneur du carrousel -->
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-300 ease-in-out"
              :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
            >
              <div 
                v-for="(formula, index) in coachingFormulas" 
                :key="index"
                class="w-full flex-shrink-0 px-1"
              >
                <!-- Card de formule -->
                <div 
  :class="[
    'bg-white/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative',
    formula.title === 'Premium' ? 'ring-2 ring-primary/0' : ''
  ]"
>
                  <!-- Badge "Recommandé" - Correction de la bordure -->
                  <div v-if="formula.title === 'Premium'" class="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                    Recommandé
                  </div>

                  <!-- En-tête de la formule -->
                  <div :class="[
                    'p-4',
                    formula.title === 'Premium' ? 'bg-primary/20' : 'bg-primary/5'
                  ]">
                    <div>
                      <h4 class="text-base font-semibold text-secondary">{{ formula.title }}</h4>
                      <p class="text-xs text-secondary/70 mt-1">{{ formula.subtitle }}</p>
                    </div>
                  </div>
                  
                  <!-- Contenu de la formule -->
                  <div class="p-4 flex flex-col flex-grow">
                    <div class="mb-3">
                      <div v-if="formula.price">
                        <span class="text-xl font-bold text-secondary">{{ formula.price }}</span>
                        <span class="text-xs text-secondary/70"> HT</span>
                      </div>
                      <div v-else>
                        <span class="text-xl font-bold text-secondary">Sur demande</span>
                      </div>
                    </div>
                    
                    <ul class="space-y-2 mb-4">
                      <li v-for="(feature, i) in formula.features" :key="i" class="flex items-start">
                        <CheckIcon class="h-3.5 w-3.5 text-primary mt-0.5 mr-1.5 flex-shrink-0" />
                        <span class="text-xs text-secondary/70">{{ feature }}</span>
                      </li>
                    </ul>
                    
                    <button
                      type="button"
                      class="w-full rounded-md bg-primary/10 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/20 transition-colors mt-auto"
                      @click="$emit('open-booking')"
                    >
                      {{ formula.cta }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination du carrousel -->
          <div class="flex justify-center mt-4 space-x-2">
            <button
              v-for="(_, index) in coachingFormulas"
              :key="index"
              @click="activeSlide = index"
              class="w-2.5 h-2.5 rounded-full transition-colors duration-200"
              :class="index === activeSlide ? 'bg-primary' : 'bg-primary/30'"
              :aria-label="`Voir la formule ${index + 1}`"
            ></button>
          </div>
          
          <!-- Boutons de navigation (optionnels) -->
          <button 
            class="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
            @click="prevSlide"
            aria-label="Formule précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            class="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
            @click="nextSlide"
            aria-label="Formule suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <!-- Affichage en grid pour tablette et desktop -->
        <div class="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="(formula, index) in coachingFormulas" :key="index" 
    :class="[
      'bg-white/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative hover:scale-103',
      formula.title === 'Premium' ? 'ring-0 sm:scale-103 hover:scale-106' : ''
    ]">
            <!-- Badge "Recommandé" - Correction de la bordure -->
            <div v-if="formula.title === 'Premium'" class="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
              Recommandé
            </div>

            <!-- En-tête de la formule -->
            <div :class="[
              'p-6',
              formula.title === 'Premium' ? 'bg-primary/20' : 'bg-primary/5'
            ]">
              <div>
                <h4 class="text-lg font-semibold text-secondary">{{ formula.title }}</h4>
                <p class="text-sm text-secondary/70 mt-1">{{ formula.subtitle }}</p>
              </div>
            </div>
            
            <!-- Contenu de la formule -->
            <div class="p-6 flex flex-col flex-grow">
              <div class="mb-4">
                <div v-if="formula.price">
                  <span class="text-2xl font-bold text-secondary">{{ formula.price }}</span>
                  <span class="text-sm text-secondary/70"> HT</span>
                </div>
                <div v-else>
                  <span class="text-2xl font-bold text-secondary">Sur demande</span>
                </div>
              </div>
              
              <ul class="space-y-3 mb-6">
                <li v-for="(feature, i) in formula.features" :key="i" class="flex items-start">
                  <CheckIcon class="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span class="text-sm text-secondary/70">{{ feature }}</span>
                </li>
              </ul>
              
              <button
                type="button"
                class="w-full rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors mt-auto"
                @click="$emit('open-booking')"
              >
                {{ formula.cta }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
        <button
          type="button"
          class="group relative rounded-full bg-secondary px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          @click="$emit('open-booking')"
        >
          <span class="block transition-opacity duration-300 group-hover:opacity-0">
            Réserver un appel découverte
          </span>
          <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Discuter de mon projet →
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/outline';
import { onMounted, ref } from 'vue';

defineEmits<{
  (e: 'open-booking'): void
}>()

// Trouver l'index de la formule Premium
const getPremiumIndex = () => {
  return coachingFormulas.findIndex(formula => formula.title === 'Premium')
}

// État pour le carrousel - initialiser avec l'index de la formule Premium
const activeSlide = ref(0)

// Initialisation à la formule Premium lors du montage du composant
onMounted(() => {
  activeSlide.value = getPremiumIndex()
})

// Navigation du carrousel
const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % coachingFormulas.length
}

const prevSlide = () => {
  activeSlide.value = activeSlide.value === 0 
    ? coachingFormulas.length - 1 
    : activeSlide.value - 1
}

// Données des étapes de coaching
const coachingSteps = [
  {
    title: 'Définition d\'objectifs',
    description: 'Nous commençons par identifier précisément vos priorités et besoins spécifiques.',
    points: [
      'Analyse de vos processus actuels et identification des opportunités',
      'Définition d\'objectifs mesurables et d\'un calendrier',
      'Création d\'une feuille de route personnalisée'
    ]
  },
  {
    title: 'Sessions d\'accompagnement',
    description: 'Un suivi régulier pour vous aider à implémenter l\'IA dans votre quotidien.',
    points: [
      'Aide à la rédaction et optimisation de prompts',
      'Configuration d\'automatisations adaptées à vos outils',
      'Résolution des blocages techniques et méthodologiques'
    ]
  },
  {
    title: 'Suivi et ajustements',
    description: 'Nous mesurons les résultats et affinons l\'approche pour maximiser les bénéfices.',
    points: [
      'Évaluation régulière des gains de productivité',
      'Ajustements basés sur vos retours d\'expérience',
      'Documentation des processus optimisés pour pérenniser les acquis'
    ]
  }
]

// Données des formules de coaching
const coachingFormulas = [
  {
    title: 'Essentiel',
    subtitle: 'Pour démarrer efficacement',
    price: '550€',
    features: [
      '5 heures d\'accompagnement',
      'Valable 2 mois',
      'Sessions en visioconférence',
      'Support par email entre les sessions'
    ],
    cta: 'Choisir cette formule'
  },
  {
    title: 'Premium',
    subtitle: 'Notre formule la plus populaire',
    price: '1050€',
    features: [
      '10 heures d\'accompagnement',
      'Valable 3 mois',
      'Sessions en présentiel ou visio',
      'Support prioritaire',
      'Accès à notre bibliothèque de ressources'
    ],
    cta: 'Choisir cette formule'
  },
  {
    title: 'Entreprise',
    subtitle: 'Pour les équipes',
    features: [
      'Accompagnement d\'équipe',
      'Durée personnalisable',
      'Sessions collectives et individuelles',
      'Suivi de projet complet',
      'Reporting et mesure d\'impact'
    ],
    cta: 'Demander un devis'
  }
]

// Points clés
const keyPoints = [
  'Accompagnement 100% personnalisé selon vos besoins spécifiques',
  'Approche pragmatique axée sur des résultats concrets',
  'Combinaison d\'expertise technique et méthodologique',
  'Flexibilité des formats (présentiel, visio) et des horaires',
  '120€ HT par heure (minimum 2h pour avoir des résultats concrets)'
]
</script>