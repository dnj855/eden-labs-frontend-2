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
          </div>

          <div class="py-6 px-5 sm:px-6 sm:py-8 bg-light lg:px-8 lg:py-12 border-t lg:border-t-0 lg:border-l border-secondary/10">
            <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
              <!-- Message d'erreur -->
              <div v-if="formError" class="rounded-md bg-red-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">
                      Une erreur est survenue
                    </h3>
                    <div class="mt-2 text-sm text-red-700">
                      <p>{{ formError }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Nom -->
              <div>
                <label for="name" class="block text-sm font-headers font-medium text-secondary">
                  Nom complet <span class="text-red-500">*</span>
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
                  Email professionnel <span class="text-red-500">*</span>
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
                    Entreprise <span class="text-red-500">*</span>
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
                    Secteur d'activité <span class="text-red-500">*</span>
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
                  class="w-full flex justify-center items-center bg-gradient-to-r from-secondary to-tertiary text-primary px-3 py-2 md:px-4 md:py-4 rounded-md text-sm font-headers font-medium hover:from-secondary/90 hover:to-tertiary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  :disabled="isSubmitting"
                >
                  <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isSubmitting ? 'Envoi en cours...' : 'Réserver mon audit' }}
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
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'
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

const isSubmitting = ref(false)
const formError = ref('')
const formSuccess = ref(false)

async function submitForm() {
  formError.value = ''
  isSubmitting.value = true
  
  // Validation basique
  if (!form.value.name || !form.value.email || !form.value.company || !form.value.sector) {
    formError.value = 'Veuillez remplir tous les champs obligatoires'
    isSubmitting.value = false
    return
  }
  
  // Validation email basique
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    formError.value = 'Veuillez entrer une adresse email valide'
    isSubmitting.value = false
    return
  }
  
  try {
    // Pour l'environnement de développement, on peut envelopper ceci dans une vérification
    // afin de simuler différents comportements selon les besoins
    
    // Option 1: Pour le développement, on peut simuler une réponse en utilisant setTimeout
    if (process.env.NODE_ENV === 'development' && window.location.hostname === 'localhost') {
      // Simuler un délai
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simuler un cas de succès ou d'échec selon le comportement souhaité pour les tests
      const simulateSuccess = true; // Changez à false pour simuler un échec
      
      if (simulateSuccess) {
        // Simuler un succès
        emit('formSubmitSuccess');
      } else {
        // Simuler une erreur
        throw new Error('Simulation d\'erreur pour tests');
      }
    } 
    // Option 2: Pour la production, utiliser fetch normal
    else {
      const response = await fetch('https://n8n.eden-labs.fr/webhook/596f2a3d-e8af-4b01-934d-79709f8e747c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Ne pas utiliser no-cors pour pouvoir détecter les erreurs
        body: JSON.stringify({
          ...form.value,
          source: 'site-web',
          date: new Date().toISOString()
        })
      });
      
      // Vérifier si la réponse est OK
      if (!response.ok) {
        throw new Error(`Erreur serveur: ${response.status} ${response.statusText}`);
      }
      
      // Si on arrive ici, c'est que tout s'est bien passé
      emit('formSubmitSuccess');
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    formError.value = 'Une erreur est survenue lors de la connexion au serveur. Veuillez réessayer ultérieurement.';
    isSubmitting.value = false;
  }
}

// Exposer une méthode pour réinitialiser le formulaire
function resetForm() {
  form.value = {
    name: '',
    email: '',
    company: '',
    sector: '',
    message: ''
  }
  formError.value = ''
  formSuccess.value = false
  isSubmitting.value = false
}

// Exposer la méthode pour le parent
defineExpose({
  resetForm
})

const emit = defineEmits(['formSubmitSuccess'])
</script>