<template>
  <section class="py-10 sm:py-12 md:py-16 lg:py-24 bg-secondary overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Fond décoratif -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute transform -translate-x-1/2 -translate-y-1/2" style="left: 10%; top: 30%">
          <div class="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-tertiary filter blur-xl sm:blur-2xl md:blur-3xl"></div>
        </div>
        <div class="absolute transform -translate-x-1/2 -translate-y-1/2" style="left: 90%; top: 70%">
          <div class="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 rounded-full bg-primary filter blur-xl sm:blur-2xl md:blur-3xl"></div>
        </div>
      </div>

      <div class="relative">
        <div class="text-center">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-headers font-extrabold text-light">
            Prêt à transformer votre entreprise avec l'IA ?
          </h2>
          <p class="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl font-body text-light/80">
            Réservez votre audit flash de 45 minutes et découvrez votre potentiel d'IA.
          </p>
        </div>

        <!-- Formulaire -->
        <div class="mt-8 sm:mt-10 md:mt-12 mx-auto bg-light rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0">
          <div class="px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-headers font-extrabold text-secondary">
              Audit flash
            </h3>
            <p class="mt-4 sm:mt-6 text-sm sm:text-base font-body text-secondary/80">
              En 45 minutes, nous identifierons ensemble :
            </p>
            <div class="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div class="flex items-start sm:items-center">
                <CheckCircleIcon class="h-5 w-5 mt-0.5 sm:mt-0 flex-shrink-0 text-primary" />
                <span class="ml-3 text-sm sm:text-base font-body text-secondary/80">
                  Les opportunités d'IA dans votre entreprise
                </span>
              </div>
              <div class="flex items-start sm:items-center">
                <CheckCircleIcon class="h-5 w-5 mt-0.5 sm:mt-0 flex-shrink-0 text-primary" />
                <span class="ml-3 text-sm sm:text-base font-body text-secondary/80">
                  Les gains potentiels en productivité et ROI
                </span>
              </div>
              <div class="flex items-start sm:items-center">
                <CheckCircleIcon class="h-5 w-5 mt-0.5 sm:mt-0 flex-shrink-0 text-primary" />
                <span class="ml-3 text-sm sm:text-base font-body text-secondary/80">
                  Une feuille de route personnalisée
                </span>
              </div>
            </div>

            <!-- Témoignage
            <div class="mt-6 sm:mt-8 border-t border-secondary/10 pt-6 sm:pt-8">
              <blockquote>
                <div class="relative text-sm sm:text-base lg:text-lg text-secondary/80">
                  <ChatBubbleLeftIcon class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-6 w-6 sm:h-8 sm:w-8 text-secondary/20" />
                  <p class="relative pl-2 sm:pl-4 font-body">
                    L'audit nous a permis d'identifier rapidement les opportunités d'IA les plus pertinentes pour notre entreprise.
                  </p>
                </div>
                <footer class="mt-3 sm:mt-4">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Marie Lambert"
                      />
                    </div>
                    <div class="ml-3">
                      <div class="text-sm sm:text-base font-headers font-medium text-secondary">
                        Marie Lambert
                      </div>
                      <div class="text-xs sm:text-sm font-body text-secondary/60">
                        Directrice Générale, PME+
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            -->
          </div>

          <div class="py-6 px-5 sm:px-6 sm:py-8 bg-light lg:px-8 lg:py-12 border-t lg:border-t-0 lg:border-l border-secondary/10">
            <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
              <!-- Nom -->
              <div>
                <label for="name" class="block text-sm font-headers font-medium text-secondary">
                  Nom complet
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.name"
                    type="text"
                    name="name"
                    id="name"
                    required
                    class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5 sm:p-2"
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-headers font-medium text-secondary">
                  Email professionnel
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    id="email"
                    required
                    class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5 sm:p-2"
                  />
                </div>
              </div>

              <!-- Grille 2 colonnes sur tablette et plus -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <!-- Entreprise -->
                <div>
                  <label for="company" class="block text-sm font-headers font-medium text-secondary">
                    Entreprise
                  </label>
                  <div class="mt-1">
                    <input
                      v-model="form.company"
                      type="text"
                      name="company"
                      id="company"
                      required
                      class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5 sm:p-2"
                    />
                  </div>
                </div>

                <!-- Secteur -->
                <div>
                  <label for="sector" class="block text-sm font-headers font-medium text-secondary">
                    Secteur d'activité
                  </label>
                  <div class="mt-1">
                    <select
                      v-model="form.sector"
                      id="sector"
                      name="sector"
                      required
                      class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm py-2.5 sm:py-2"
                    >
                      <option value="">Sélectionnez</option>
                      <option v-for="sector in sectors" :key="sector" :value="sector">
                        {{ sector }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-headers font-medium text-secondary">
                  Votre projet/besoin en quelques mots
                </label>
                <div class="mt-1">
                  <textarea
                    v-model="form.message"
                    id="message"
                    name="message"
                    rows="3"
                    class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5 sm:p-2"
                  ></textarea>
                </div>
              </div>

              <!-- Submit -->
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center bg-gradient-to-r from-secondary to-tertiary text-primary px-3 py-2 md:px-4 md:py-4 rounded-md text-sm font-headers font-medium hover:from-secondary/90 hover:to-tertiary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >
                  Réserver mon audit gratuit
                </button>
                <p class="mt-2 sm:mt-3 text-xs sm:text-sm font-body text-secondary/60 text-center">
                  Réponse garantie sous 24h
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChatBubbleLeftIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const sectors = [
  'Marketing & Communication',
  'Ressources Humaines',
  'Finance & Administration',
  'Vente & Relation Client',
  'Production & Opérations',
  'IT & Digital',
  'Autre'
]

const form = ref({
  name: '',
  email: '',
  company: '',
  sector: '',
  message: ''
})

function submitForm() {
  // Émettre l'événement avec les données du formulaire
  emit('submitBooking', form.value)
}

const emit = defineEmits(['submitBooking'])
</script>