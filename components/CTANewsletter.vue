<template>
  <section class="bg-white py-8 sm:pt-12 md:pt-16 ">
  <div class="overflow-hidden rounded-lg bg-gradient-secondary-tertiary shadow-xl mx-auto max-w-7xl">
        <div class="px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-10 lg:py-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-4">
            <div class="lg:self-center lg:py-16 lg:pr-0 xl:py-20 xl:pl-8 xl:pr-0">
              <h2 class="font-headers text-xl sm:text-2xl md:text-3xl font-extrabold text-light">
                <span class="block">Restez informé</span>
                <span class="block">des dernières innovations IA</span>
              </h2>
              <p class="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-6 text-light/80">
                Recevez nos meilleures ressources et actualités IA directement dans votre boîte mail.
              </p>
              
              <!-- Formulaire mobile (empilé) -->
              <div class="mt-4 sm:mt-6 md:mt-8 sm:hidden flex flex-col space-y-4">
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

                <!-- Message de succès -->
                <div v-if="formSuccess" class="rounded-md bg-green-50 p-4">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div class="ml-3">
                      <h3 class="text-sm font-medium text-green-800">
                        Inscription réussie !
                      </h3>
                      <div class="mt-2 text-sm text-green-700">
                        <p>Merci de votre inscription. Vous recevrez bientôt nos actualités.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="!formSuccess" class="flex flex-col space-y-1">
                  <label for="firstName-mobile" class="text-sm font-medium text-light">Prénom</label>
                  <input
                    id="firstName-mobile"
                    v-model="formData.firstName"
                    type="text"
                    class="w-full rounded-md bg-white/10 px-4 py-3 text-light focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div v-if="!formSuccess" class="flex flex-col space-y-1">
                  <label for="lastName-mobile" class="text-sm font-medium text-light">Nom</label>
                  <input
                    id="lastName-mobile"
                    v-model="formData.lastName"
                    type="text"
                    class="w-full rounded-md bg-white/10 px-4 py-3 text-light focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div v-if="!formSuccess" class="flex flex-col space-y-1">
                  <label for="email-mobile" class="text-sm font-medium text-light">Email</label>
                  <input
                    id="email-mobile"
                    v-model="formData.email"
                    type="email"
                    class="w-full rounded-md bg-white/10 px-4 py-3 text-light focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  v-if="!formSuccess"
                  class="w-full rounded-md bg-primary px-4 py-3 font-medium text-secondary transition-colors duration-200 hover:bg-primary-light cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  @click="handleSubmit"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                  <span v-else>S'abonner</span>
                </button>
                <button
                  v-else
                  class="w-full rounded-md bg-primary px-4 py-3 font-medium text-secondary transition-colors duration-200 hover:bg-primary-light cursor-pointer"
                  @click="resetForm"
                >
                  S'abonner à nouveau
                </button>
              </div>
              
              <!-- Formulaire tablette/desktop (côte à côte) -->
              <div class="mt-4 sm:mt-6 md:mt-8 hidden sm:flex flex-col space-y-4">
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

                <!-- Message de succès -->
                <div v-if="formSuccess" class="rounded-md bg-green-50 p-4">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div class="ml-3">
                      <h3 class="text-sm font-medium text-green-800">
                        Inscription réussie !
                      </h3>
                      <div class="mt-2 text-sm text-green-700">
                        <p>Merci de votre inscription. Vous recevrez bientôt nos actualités.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="!formSuccess" class="flex space-x-3">
                  <div class="flex-1 flex flex-col space-y-1">
                    <label for="firstName-desktop" class="text-sm font-medium text-light">Prénom</label>
                    <input
                      id="firstName-desktop"
                      v-model="formData.firstName"
                      type="text"
                      class="w-full rounded-md bg-white/10 px-4 py-3 text-light focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div class="flex-1 flex flex-col space-y-1">
                    <label for="lastName-desktop" class="text-sm font-medium text-light">Nom</label>
                    <input
                      id="lastName-desktop"
                      v-model="formData.lastName"
                      type="text"
                      class="w-full rounded-md bg-white/10 px-4 py-3 text-light focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div v-if="!formSuccess" class="flex space-x-3">
                  <div class="flex-1 flex flex-col space-y-1">
                    <label for="email-desktop" class="text-sm font-medium text-light">Email</label>
                    <input
                      id="email-desktop"
                      v-model="formData.email"
                      type="email"
                      class="w-full rounded-md bg-white/10 px-4 py-3 text-light focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div class="flex flex-col justify-end">
                    <button
                      class="rounded-md bg-primary px-4 py-3 font-medium text-secondary transition-colors duration-200 hover:bg-primary-light cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      @click="handleSubmit"
                      :disabled="isSubmitting"
                    >
                      <span v-if="isSubmitting" class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                      <span v-else>S'abonner</span>
                    </button>
                  </div>
                </div>
                <div v-else class="flex justify-center">
                  <button
                    class="rounded-md bg-primary px-4 py-3 font-medium text-secondary transition-colors duration-200 hover:bg-primary-light cursor-pointer"
                    @click="resetForm"
                  >
                    S'abonner à nouveau
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Image (masquée sur mobile petit) -->
            <div class="relative hidden sm:block h-64 md:h-auto lg:h-full">
              <img
                class="absolute inset-0 h-full w-full object-cover object-left-top lg:static lg:translate-x-0 lg:translate-y-0 sm:translate-x-16 transform translate-x-6 translate-y-6 rounded-md"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'subscribe', data: { firstName: string; lastName: string; email: string }): void
}>()

interface FormData {
  firstName: string
  lastName: string
  email: string
}

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  email: ''
})

const isSubmitting = ref(false)
const formError = ref('')
const formSuccess = ref(false)

async function handleSubmit() {
  formError.value = ''
  isSubmitting.value = true
  
  // Validation basique
  if (!formData.value.firstName || !formData.value.lastName || !formData.value.email) {
    formError.value = 'Veuillez remplir tous les champs'
    isSubmitting.value = false
    return
  }
  
  // Validation email basique
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
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
        formSuccess.value = true
        emit('subscribe', formData.value)
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
        body: JSON.stringify({
          ...formData.value,
          source: 'newsletter',
          date: new Date().toISOString()
        })
      });
      
      // Vérifier si la réponse est OK
      if (!response.ok) {
        throw new Error(`Erreur serveur: ${response.status} ${response.statusText}`);
      }
      
      // Si on arrive ici, c'est que tout s'est bien passé
      formSuccess.value = true
      emit('subscribe', formData.value)
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    formError.value = 'Une erreur est survenue lors de la connexion au serveur. Veuillez réessayer ultérieurement.';
    isSubmitting.value = false;
  }
}

// Exposer une méthode pour réinitialiser le formulaire
function resetForm() {
  formData.value = {
    firstName: '',
    lastName: '',
    email: ''
  }
  formError.value = ''
  formSuccess.value = false
  isSubmitting.value = false
}

// Exposer la méthode pour le parent
defineExpose({
  resetForm
})
</script>