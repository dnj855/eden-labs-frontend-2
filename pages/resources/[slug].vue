<template>
  <div v-if="error" class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center px-4">
      <div class="mb-8">
        <svg class="mx-auto h-16 w-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Ressource introuvable</h1>
      <p class="text-gray-600 mb-8">Désolé, la ressource que vous recherchez n'existe pas ou n'est plus disponible.</p>
      <NuxtLink to="/resources" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Retour aux ressources
      </NuxtLink>
    </div>
  </div>

  <div v-else-if="resource" class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <!-- Image -->
          <div class="md:w-1/2">
            <img 
              :src="baseUrl + resource.attributes?.Image?.data?.attributes?.formats?.large?.url" 
              :alt="resource.attributes?.Title"
              class="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <!-- Content -->
          <div class="md:w-1/2">
            <div class="inline-block px-3 py-1 bg-blue-500 bg-opacity-50 rounded-full text-sm mb-4">
              {{ resource.attributes?.Type.charAt(0).toUpperCase() + resource.attributes?.Type.slice(1) }}
            </div>
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
              {{ resource.attributes?.Title }}
            </h1>
            <p class="text-lg text-gray-100 mb-6">
              {{ resource.attributes?.Short_Description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Description Section -->
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-xl shadow-sm p-8">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Description détaillée</h2>
          <p class="text-gray-600 leading-relaxed">
            {{ resource.attributes?.Description }}
          </p>
          <div class="mt-8 pt-6 border-t border-gray-200">
            <div class="flex items-center text-sm text-gray-500">
              <span class="mr-4">Secteur: {{ resource.attributes?.Sector }}</span>
              <span>Mis à jour le: {{ new Date(resource.attributes?.updatedAt).toLocaleDateString('fr-FR') }}</span>
            </div>
          </div>
          
          <!-- Lead Magnet Section -->
          <div id="resource-access" class="mt-8 pt-8 border-t border-gray-200">
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 class="text-xl font-bold mb-4 text-gray-800">Obtenir cette ressource</h3>
              
              <!-- Formulaire de lead magnet -->
              <div v-if="!userEmail">
                <p class="text-gray-600 mb-4">
                  Recevez gratuitement <strong>{{ resource.attributes?.Title }}</strong> directement dans votre boîte email.
                </p>
                
                <form @submit.prevent="submitEmail" class="space-y-4">
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Votre adresse email :</label>
                    <input 
                      id="email" 
                      v-model="emailInput" 
                      type="email" 
                      placeholder="votre@email.com" 
                      required
                      class="w-full px-4 py-2 text-gray-800 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      :class="{'border-red-500': emailError}"
                    />
                    <p v-if="emailError" class="mt-1 text-red-500 text-sm">{{ emailError }}</p>
                  </div>
                  <div class="flex items-center">
                    <input 
                      id="consent" 
                      v-model="consentChecked" 
                      type="checkbox" 
                      required
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label for="consent" class="ml-2 block text-sm text-gray-600">
                      J'accepte de recevoir cette ressource et des informations complémentaires par email.
                    </label>
                  </div>
                  <button 
                    type="submit" 
                    class="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-colors"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="inline-block mr-2">
                      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    <span>{{ isSubmitting ? 'Traitement en cours...' : 'Recevoir la ressource' }}</span>
                  </button>
                </form>
              </div>
              
              <!-- Affichage après soumission du formulaire -->
              <div v-else class="bg-white rounded-lg p-6 shadow-sm">
                <div class="flex items-center mb-4">
                  <svg class="h-8 w-8 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 class="text-xl font-semibold text-gray-800">Ressource envoyée !</h3>
                </div>
                <p class="text-gray-700 mb-4">
                  Merci ! La ressource <strong>{{ resource.attributes?.Title }}</strong> a été envoyée à <strong>{{ userEmail }}</strong>.
                </p>
                <p class="text-gray-700 mb-4">
                  Vérifiez votre boîte de réception dans quelques instants.
                </p>
                <div class="flex justify-between">
                  <button 
                    @click="resetForm" 
                    class="text-sm text-blue-600 hover:underline focus:outline-none"
                  >
                    Utiliser une autre adresse email
                  </button>
                  <a 
                    :href="baseUrl + resource.attributes?.Content?.data?.attributes?.url"
                    target="_blank"
                    class="text-sm text-blue-600 hover:underline focus:outline-none flex items-center"
                  >
                    <span>Télécharger directement</span>
                    <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
  </div>
</template>

<script setup>
const { slug } = useRoute().params
const baseUrl = useRuntimeConfig().public.strapiUrl;
const { $api } = useNuxtApp();

const error = ref(false);
const resource = ref(null);
const emailInput = ref('');
const emailError = ref('');
const isSubmitting = ref(false);
const userEmail = ref('');
const consentChecked = ref(false);

// Charger l'email enregistré depuis le localStorage au chargement de la page
onMounted(() => {
  const savedEmail = localStorage.getItem('userEmail');
  if (savedEmail) {
    userEmail.value = savedEmail;
  }
});

// Validation de l'email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Soumission du formulaire
const submitEmail = async () => {
  // Réinitialiser l'erreur
  emailError.value = '';
  
  // Valider le format de l'email
  if (!validateEmail(emailInput.value)) {
    emailError.value = "Veuillez saisir une adresse email valide";
    return;
  }
  
  // Vérifier le consentement
  if (!consentChecked.value) {
    emailError.value = "Veuillez accepter les conditions";
    return;
  }
  
  // Simuler l'envoi
  isSubmitting.value = true;
  
  try {
    // POINT D'INTÉGRATION: Ici, vous intégrerez votre propre logique d'envoi de l'email
    // Par exemple: await sendResourceByEmail(emailInput.value, resource.value);
    
    // Simulation d'un délai de traitement (à remplacer par votre appel API réel)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Enregistrement de l'email en localStorage pour persistance
    localStorage.setItem('userEmail', emailInput.value);
    userEmail.value = emailInput.value;
    
    // Réinitialiser les champs du formulaire mais garder l'email enregistré
    emailInput.value = '';
    consentChecked.value = false;
  } catch (err) {
    console.error('Erreur lors de l\'envoi de l\'email:', err);
    emailError.value = "Une erreur est survenue lors de l'envoi. Veuillez réessayer.";
  } finally {
    isSubmitting.value = false;
  }
};

// Réinitialiser le formulaire pour utiliser une autre adresse email
const resetForm = () => {
  userEmail.value = '';
  localStorage.removeItem('userEmail');
};

// Chargement de la ressource
try {
  const { data } = await $api.fetch(baseUrl + '/api/slugify/slugs/ressource/' + slug + '?populate=*');
  if (!data.value?.data) {
    error.value = true;
  } else {
    resource.value = data.value.data;
  }
} catch (e) {
  error.value = true;
  console.error('Erreur lors de la récupération de la ressource:', e);
}
</script>