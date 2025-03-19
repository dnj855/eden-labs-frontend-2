<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog as="div" @close="close" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div class="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  class="text-secondary/50 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  @click="close"
                >
                  <span class="sr-only">Fermer</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <DialogTitle as="h3" class="text-lg sm:text-xl font-headers font-medium leading-6 text-secondary">
                {{ serviceTitle }}
              </DialogTitle>
              
              <div class="mt-2">
                <p class="text-sm text-secondary/70">
                  {{ serviceDescription }}
                </p>
              </div>

              <!-- Message de succès -->
              <div v-if="formSuccess" class="mt-4 rounded-md bg-green-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-green-800">
                      Message envoyé avec succès
                    </h3>
                    <div class="mt-2 text-sm text-green-700">
                      <p>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Message d'erreur -->
              <div v-if="formError" class="mt-4 rounded-md bg-red-50 p-4">
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

              <!-- Formulaire -->
              <form v-if="!formSuccess" @submit.prevent="submitForm" class="mt-4 space-y-4">
                <!-- Nom -->
                <div>
                  <label for="contact-name" class="block text-sm font-headers font-medium text-secondary">
                    Nom complet <span class="text-red-500">*</span>
                  </label>
                  <div class="mt-1">
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                      class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5"
                    />
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <label for="contact-email" class="block text-sm font-headers font-medium text-secondary">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <div class="mt-1">
                    <input
                      v-model="form.email"
                      type="email"
                      name="email"
                      id="contact-email"
                      required
                      class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5"
                    />
                  </div>
                </div>

                <!-- Téléphone (optionnel) -->
                <div>
                  <label for="contact-phone" class="block text-sm font-headers font-medium text-secondary">
                    Téléphone
                  </label>
                  <div class="mt-1">
                    <input
                      v-model="form.phone"
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5"
                    />
                  </div>
                </div>

                <!-- Service -->
                <div>
                  <label for="contact-service" class="block text-sm font-headers font-medium text-secondary">
                    Service concerné
                  </label>
                  <div class="mt-1">
                    <select
                      v-model="form.service"
                      id="contact-service"
                      name="service"
                      class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="audit">Audit Flash & Diagnostic</option>
                      <option value="formation">Formation "Socle" IA & No-Code</option>
                      <option value="ateliers">Ateliers Thématiques</option>
                      <option value="coaching">Coaching Personnalisé</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                <!-- Pack Type - Champ caché pour les informations supplémentaires -->
                <input 
                  v-if="form.packType" 
                  type="hidden" 
                  name="packType" 
                  :value="form.packType" 
                />

                <!-- Message -->
                <div>
                  <label for="contact-message" class="block text-sm font-headers font-medium text-secondary">
                    Message <span class="text-red-500">*</span>
                  </label>
                  <div class="mt-1">
                    <textarea
                      v-model="form.message"
                      id="contact-message"
                      name="message"
                      rows="4"
                      required
                      class="block w-full rounded-md border-secondary/20 shadow-sm focus:border-primary focus:ring-primary font-body text-sm p-2.5"
                      :placeholder="form.packType ? `Je suis intéressé par le pack ${form.packType.charAt(0).toUpperCase() + form.packType.slice(1)}. Merci de me contacter pour plus d'informations.` : 'Votre message...'"
                    ></textarea>
                  </div>
                </div>

                <!-- Submit -->
                <div class="flex justify-end mt-5">
                  <button
                    type="button"
                    class="mr-3 rounded-md border border-secondary/20 bg-white px-3 py-2 text-sm font-medium text-secondary shadow-sm hover:bg-gray-50"
                    @click="close"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    class="flex justify-center items-center rounded-md bg-gradient-to-r from-secondary to-tertiary px-3 py-2 text-sm font-medium text-primary shadow-sm hover:from-secondary/90 hover:to-tertiary/90 transition-colors duration-200"
                    :disabled="isSubmitting"
                  >
                    <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isSubmitting ? 'Envoi...' : 'Envoyer' }}
                  </button>
                </div>
              </form>

              <!-- Boutons après succès -->
              <div v-if="formSuccess" class="mt-5 flex justify-end">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-secondary hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  @click="close"
                >
                  Fermer
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { CheckCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { computed, onMounted, ref, watch } from 'vue';

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  initialService: {
    type: String,
    default: ''
  }
});

// Emits
const emit = defineEmits(['close', 'submit']);

// État du formulaire
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  packType: '', // Stocke le type de pack spécifique
  message: ''
});

const isSubmitting = ref(false);
const formError = ref('');
const formSuccess = ref(false);

// Textes personnalisés en fonction du service
const serviceTitle = computed(() => {
  // Gestion des services de coaching spécifiques
  if (props.initialService.startsWith('coaching-')) {
    const packType = props.initialService.replace('coaching-', '');
    return `Demande de pack ${packType.charAt(0).toUpperCase() + packType.slice(1)}`;
  }
  
  switch(props.initialService) {
    case 'audit':
      return 'Réserver un audit flash';
    case 'formation':
      return 'Demander un devis formation';
    case 'ateliers':
      return 'Réserver un atelier';
    case 'coaching':
      return 'Réserver un coaching';
    case 'pack-essentiel':
      return 'Réserver notre pack essentiel';
    case 'pack-acceleration':
      return 'Réserver notre pack accélération IA';
    default:
      return 'Contactez-nous';
  }
});

const serviceDescription = computed(() => {
  // Gestion des services de coaching spécifiques
  if (props.initialService.startsWith('coaching-')) {
    const packType = props.initialService.replace('coaching-', '');
    switch(packType) {
      case 'essentiel':
        return 'Demandez des informations sur notre formule Essentiel (5 heures d\'accompagnement sur 2 mois).';
      case 'premium':
        return 'Demandez des informations sur notre formule Premium (10 heures d\'accompagnement sur 3 mois).';
      case 'entreprise':
        return 'Demandez un devis personnalisé pour l\'accompagnement de votre équipe.';
      default:
        return 'Demandez des informations sur nos formules de coaching.';
    }
  }
  
  switch(props.initialService) {
    case 'audit':
      return 'Réservez votre audit flash personnalisé de 45 minutes pour identifier vos opportunités d\'IA.';
    case 'formation':
      return 'Demandez un devis pour notre formation "Socle IA & No-Code" adaptée à vos besoins.';
    case 'ateliers':
      return 'Précisez vos besoins pour un atelier thématique personnalisé.';
    case 'coaching':
      return 'Planifions ensemble un appel découverte pour discuter de votre projet.';
    default:
      return 'Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.';
  }
});

// Initialiser la valeur du service lors du montage et lors des changements
onMounted(() => {
  // Si le service commence par coaching-, on sélectionne coaching dans le menu déroulant
  // mais on garde l'information complète dans un champ masqué ou une variable séparée
  if (props.initialService.startsWith('coaching-')) {
    form.value.service = 'coaching';
    form.value.packType = props.initialService.replace('coaching-', '');
  } else {
    form.value.service = props.initialService || '';
    form.value.packType = '';
  }
});

// Réaction aux changements de props
watch(() => props.initialService, (newValue) => {
  if (newValue.startsWith('coaching-')) {
    form.value.service = 'coaching';
    form.value.packType = newValue.replace('coaching-', '');
  } else {
    form.value.service = newValue || '';
    form.value.packType = '';
  }
});

// Méthodes
function close() {
  emit('close');
  // On réinitialise le formulaire lors de la fermeture pour le prochain usage
  resetForm();
}

async function submitForm() {
  // Réinitialiser les états
  formError.value = '';
  isSubmitting.value = true;
  
  // Validation basique
  if (!form.value.name || !form.value.email || !form.value.message) {
    formError.value = 'Veuillez remplir tous les champs obligatoires';
    isSubmitting.value = false;
    return;
  }
  
  // Validation email basique
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.value.email)) {
    formError.value = 'Veuillez entrer une adresse email valide';
    isSubmitting.value = false;
    return;
  }
  
  try {
    // Simulation de l'envoi en développement
    if (process.env.NODE_ENV === 'development') {
      // Simuler un délai
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // En mode développement, on simule toujours un succès
      formSuccess.value = true;
      emit('submit', { 
        ...form.value,
        // Inclure des informations plus détaillées sur le service/pack
        serviceDetails: form.value.packType 
          ? `coaching-${form.value.packType}` 
          : form.value.service
      });
    } 
    // Pour la production, utiliser fetch vers votre API
    else {
      const response = await fetch('https://n8n.eden-labs.fr/webhook-test/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form.value,
          serviceDetails: form.value.packType 
            ? `coaching-${form.value.packType}` 
            : form.value.service,
          source: 'contact-modal',
          date: new Date().toISOString()
        })
      });
      
      // Vérifier si la réponse est OK
      if (!response.ok) {
        throw new Error(`Erreur serveur: ${response.status} ${response.statusText}`);
      }
      
      formSuccess.value = true;
      emit('submit', { ...form.value });
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    formError.value = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ultérieurement.';
  } finally {
    isSubmitting.value = false;
  }
}

// Fonction pour réinitialiser le formulaire
function resetForm() {
  form.value = {
    name: '',
    email: '',
    phone: '',
    service: props.initialService.startsWith('coaching-') ? 'coaching' : props.initialService || '',
    packType: props.initialService.startsWith('coaching-') ? props.initialService.replace('coaching-', '') : '',
    message: ''
  };
  formError.value = '';
  formSuccess.value = false;
  isSubmitting.value = false;
}

// Exposer des méthodes pour le parent
defineExpose({
  resetForm
});
</script>