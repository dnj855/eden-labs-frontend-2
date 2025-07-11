<template>
  <div class="bg-transparent">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- En-tête avec badge -->
      <div class="mx-auto max-w-2xl lg:text-center">
        <span
          class="inline-flex items-center rounded-md bg-primary/10 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
          <AcademicCapIcon class="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
          Formation complète
        </span>
        <h2 class="text-sm sm:text-base font-semibold leading-6 sm:leading-7 text-secondary">Formation "Socle" IA &
          No-Code</h2>
        <p class="mt-1.5 sm:mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-secondary">
          Maîtrisez l'IA générative en 2 jours
        </p>
        <p class="mt-2 text-xs sm:text-sm text-secondary/70 font-medium">
          <span class="inline-flex items-center"><AcademicCapIcon class="h-4 w-4 mr-1" /> Formation éligible à la certification Qualiopi via notre organisme partenaire</span>
        </p>
        <div class="w-16 sm:w-20 h-1 bg-primary/30 mx-auto mt-4 sm:mt-6"></div>
      </div>

      <!-- Programme en onglets - Corrigé pour défilement mobile -->
      <div class="mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 max-w-2xl lg:max-w-none">
        <div
          class="flex border-b border-secondary/20 mb-6 sm:mb-8 overflow-x-auto sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0">
          <button @click="activeTab = 'day1'" :class="[
            'py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b-2 -mb-px whitespace-nowrap',
            activeTab === 'day1'
              ? 'border-tertiary text-tertiary'
              : 'border-transparent text-secondary/70 hover:text-secondary hover:border-secondary/30'
          ]">
            Jour 1 - Comprendre les fondations, identifier les opportunités
          </button>
          <button @click="activeTab = 'day2'" :class="[
            'py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b-2 -mb-px whitespace-nowrap',
            activeTab === 'day2'
              ? 'border-tertiary text-tertiary'
              : 'border-transparent text-secondary/70 hover:text-secondary hover:border-secondary/30'
          ]">
            Jour 2 - Mettre en pratique et anticiper l'avenir
          </button>
        </div>

        <!-- Contenu des onglets -->
        <div v-if="activeTab === 'day1'" class="space-y-4 sm:space-y-6">
          <div v-for="(item, index) in day1Content" :key="index" class="flex flex-col gap-y-1">
            <div class="flex gap-x-2 sm:gap-x-3">
              <CheckCircleIcon class="h-5 w-5 sm:h-6 sm:w-5 flex-none text-tertiary" aria-hidden="true" />
              <span class="text-xs sm:text-sm leading-5 sm:leading-6 text-secondary/80">{{ item.title }}</span>
            </div>
            <p class="text-xs text-secondary/60 ml-7 sm:ml-9">{{ item.objective }}</p>
          </div>
        </div>

        <div v-if="activeTab === 'day2'" class="space-y-4 sm:space-y-6">
          <div v-for="(item, index) in day2Content" :key="index" class="flex flex-col gap-y-1">
            <div class="flex gap-x-2 sm:gap-x-3">
              <CheckCircleIcon class="h-5 w-5 sm:h-6 sm:w-5 flex-none text-tertiary" aria-hidden="true" />
              <span class="text-xs sm:text-sm leading-5 sm:leading-6 text-secondary/80">{{ item.title }}</span>
            </div>
            <p class="text-xs text-secondary/60 ml-7 sm:ml-9">{{ item.objective }}</p>
          </div>
        </div>
      </div>

      <!-- Bénéfices -->
      <div class="mx-auto mt-10 sm:mt-12 lg:mt-16 max-w-2xl lg:max-w-none">
        <div class="bg-white/50 rounded-xl p-4 sm:p-6 shadow-sm">
          <h3 class="text-base sm:text-lg font-semibold text-secondary mb-4 sm:mb-6 text-center">À l'issue de cette formation, vos collaborateurs repartiront avec
          </h3>
          <div class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
            <div v-for="(benefit, index) in benefits" :key="index" class="flex gap-x-2 sm:gap-x-3">
              <CheckCircleIcon class="h-5 w-5 sm:h-6 sm:w-5 flex-none text-secondary" aria-hidden="true" />
              <span class="text-xs sm:text-sm leading-5 sm:leading-6 text-secondary/80">{{ benefit }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Informations pratiques -->
      <div class="mx-auto mt-8 sm:mt-10 lg:mt-12 max-w-2xl lg:max-w-none">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div class="bg-white/50 p-4 sm:p-6 rounded-xl shadow-sm">
            <div class="flex items-center mb-3 sm:mb-4">
              <UsersIcon class="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
              <h3 class="text-sm sm:text-base font-semibold text-secondary">Pour qui ?</h3>
            </div>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-secondary/70">
              <li>• Managers et équipes opérationnelles</li>
              <li>• Tous secteurs et fonctions</li>
              <li>• Aucun prérequis technique</li>
            </ul>
          </div>

          <div class="bg-white/50 p-4 sm:p-6 rounded-xl shadow-sm">
            <div class="flex items-center mb-3 sm:mb-4">
              <ClockIcon class="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
              <h3 class="text-sm sm:text-base font-semibold text-secondary">Format</h3>
            </div>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-secondary/70">
              <li>• 2 jours (14h) en présentiel ou distanciel</li>
              <li>• Possibilité de 4 demi-journées</li>
              <li>• 6 à 12 participants maximum</li>
              <li>• Certification Qualiopi possible via notre partenaire</li>
            </ul>
          </div>

          <div class="bg-white/50 p-4 sm:p-6 rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
            <div class="flex items-center mb-3 sm:mb-4">
              <BookOpenIcon class="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
              <h3 class="text-sm sm:text-base font-semibold text-secondary">Contenu</h3>
            </div>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-secondary/70">
              <li>• Maîtrise du prompt engineering</li>
              <li>• Intégration de l'IA dans vos outils métiers</li>
              <li>• Mise en pratique sur des cas d'usage concrets</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center justify-center">
        <ContactButton :service="'formation'" :rounded="true" :primary="false" variant="solid"
          class="group relative px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold">
          <span class="block transition-opacity duration-300 group-hover:opacity-0">
            Réserver ma formation
          </span>
          <span
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Demander un devis →
          </span>
        </ContactButton>
        <p class="mt-2 text-xs text-secondary/60 text-center max-w-xs">Vous souhaitez une prise en charge Qualiopi ? Précisez-le lors de votre demande.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AcademicCapIcon, BookOpenIcon, CheckCircleIcon, ClockIcon, UsersIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

defineEmits<{
  (e: 'open-booking'): void
}>()

// État de l'onglet actif
const activeTab = ref('day1')

// Contenu jour 1
const day1Content = [
  {
    title: 'Module 1 : démystifier l\'IA et l\'automatisation',
    objective: 'Définir clairement les concepts, comprendre leur pertinence actuelle.'
  },
  {
    title: 'Module 2 : L\'IA et l\'automatisation au service des équipes',
    objective: 'Identifier les cas d\'usage spécifiques et pertinents.'
  },
  {
    title: 'Module 3 : Atelier - Identifiez VOS opportunités d\'automatisation',
    objective: 'Appliquer une méthode simple pour analyser ses propres processus et identifier des potentiels d\'automatisation/IA.'
  },
  {
    title: 'Module 4 : Introduction aux outils d\'IA et d\'automatisation accessibles',
    objective: 'Découvrir les grandes familles d\'outils, voir des démonstrations, comprendre les critères de choix.'
  }
]

// Contenu jour 2
const day2Content = [
  {
    title: 'Module 5 : Atelier pratique guidé - Votre première automatisation',
    objective: 'Mettre en pratique la configuration d\'une automatisation simple.'
  },
  {
    title: 'Module 6 : Études de cas concrets',
    objective: 'Illustrer l\'application réussie de l\'IA/automatisation, analyser les facteurs clés de succès.'
  },
  {
    title: 'Module 7 : Enjeux éthiques, sécurité et limites actuelles',
    objective: 'Sensibiliser aux aspects critiques de l\'IA et de l\'automatisation'
  },
  {
    title: 'Module 8 : Atelier - Mon plan d\'action post-formation',
    objective: 'Aider les participants à traduire les apprentissages en actions concrètes pour leur retour au travail.'
  }
]

// Bénéfices
const benefits = [
  'Une compréhension claire et démystifiée',
  'La capacité d\'identifier les bonnes opportunités',
  'Une connaissance des outils accessibles',
  'Une première expérience pratique',
  'Une vision éclairée des enjeux',
  'Un plan d\'action personnalisé'
]
</script>