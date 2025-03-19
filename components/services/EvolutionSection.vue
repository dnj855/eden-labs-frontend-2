<template>
  <div class="bg-transparent">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- En-tête avec badge -->
      <div class="mx-auto max-w-2xl lg:text-center">
        <span class="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
          <RocketLaunchIcon class="h-4 w-4 mr-1" />
          Bientôt disponible
        </span>
        <h2 class="text-base font-semibold leading-7 text-primary">Évolution à venir de notre offre</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          Restez informé(e) des nouveautés
        </p>
        <div class="w-20 h-1 bg-primary/30 mx-auto mt-6"></div>
      </div>

      <!-- Cartes des nouveautés -->
      <div class="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div v-for="(product, index) in upcomingProducts" :key="index" 
              class="group relative bg-white/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <!-- Badge de statut -->
            <div class="absolute top-3 right-3">
              <span class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700">
                {{ product.status }}
              </span>
            </div>
            
            <!-- Icône et titre -->
            <div class="flex items-start mb-4">
              <div class="flex-shrink-0 mr-3">
                <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                  {{ product.icon }}
                </div>
              </div>
              <div>
                <h3 class="text-base font-semibold text-secondary">{{ product.title }}</h3>
                <p class="text-xs text-secondary/70 mt-1">{{ product.timing }}</p>
              </div>
            </div>
            
            <!-- Description -->
            <p class="text-sm text-secondary/80 mb-4">{{ product.description }}</p>
            
            <!-- Points clés -->
            <ul class="space-y-2 mb-4">
              <li v-for="(feature, i) in product.features" :key="i" class="flex items-start">
                <CheckIcon class="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span class="text-xs text-secondary/70">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section newsletter -->
      <div class="mx-auto mt-16 max-w-2xl lg:mt-20 lg:max-w-none">
        <div class="bg-primary/5 rounded-xl p-8 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="mb-6 md:mb-0 md:mr-8">
              <h3 class="text-lg font-semibold text-secondary flex items-center">
                <EnvelopeIcon class="h-5 w-5 text-primary mr-2" />
                Inscrivez-vous à notre newsletter
              </h3>
              <p class="mt-2 text-sm text-secondary/70 max-w-md">
                Soyez informé(e) en priorité du lancement de ces nouveaux produits et bénéficiez d'offres exclusives.
              </p>
            </div>
            
            <!-- <div class="flex-shrink-0">
              <form class="flex flex-col sm:flex-row gap-3" @submit.prevent="handleSubmit">
                <div class="relative">
                  <input
                    v-model="email"
                    type="email"
                    required
                    placeholder="Votre adresse email"
                    class="w-full sm:w-64 rounded-md border-0 bg-white px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-secondary/20 placeholder:text-secondary/40 focus:ring-2 focus:ring-inset focus:ring-primary text-sm"
                  />
                </div>
                <button
                  type="submit"
                  class="flex-none rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  S'inscrire
                </button>
              </form>
              <p class="mt-2 text-xs text-secondary/60">
                Nous respectons votre vie privée. Désabonnement facile à tout moment.
              </p>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Réseaux sociaux -->
      <div class="mt-8 text-center">
        <p class="text-sm text-secondary/70 mb-4">
          Suivez-nous également sur les réseaux sociaux pour rester informé(e) :
        </p>
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-secondary/60 hover:text-primary transition-colors">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" class="text-secondary/60 hover:text-primary transition-colors">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, EnvelopeIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

defineEmits<{
  (e: 'subscribe', email: string): void
}>()

// État du formulaire
const email = ref('')

// Données des produits à venir
const upcomingProducts = [
  {
    title: 'Mini-module e-learning "Découvrir ChatGPT en 2h"',
    icon: '🎓',
    timing: 'Lancement prévu dans 1 mois',
    status: 'Bientôt',
    description: 'Une formation rapide et efficace pour comprendre les bases de l\'IA générative.',
    features: [
      'Accessible 24/7 à votre rythme',
      'Exercices pratiques inclus',
      'Certification de compétence',
      'Prix de lancement spécial'
    ]
  },
  {
    title: 'Webinaires mensuels sur les nouveautés de l\'IA',
    icon: '📊',
    timing: 'Premier webinaire dans 2 semaines',
    status: 'Inscriptions ouvertes',
    description: 'Restez à jour sur les dernières avancées de l\'IA appliquée au business.',
    features: [
      'Sessions interactives de 1h',
      'Questions/réponses en direct',
      'Replay disponible',
      'Gratuit pour nos clients'
    ]
  }
]

// Gestion du formulaire
// function handleSubmit() {
//   if (email.value) {
//     // Émettre l'événement avec l'email
//     $emit('subscribe', email.value)
//     // Réinitialiser le formulaire
//     email.value = ''
//   }
// }
</script> 