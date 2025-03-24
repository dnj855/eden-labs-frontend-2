<template>
  <div class="min-h-screen bg-gray-50">
    <TheNavbar />
    <main>
      <NuxtPage />
    </main>
    <CTANewsletter v-if="!isLegalMentionsPage" />
  <BookingCTA
    v-if="!isLegalMentionsPage"
    ref="bookingCTA"
    @form-submit-success="openBookingModal"
  />
    <footer class="bg-light">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-primary font-headers font-bold text-xl">Eden Labs</h3>
            <p class="mt-2 text-secondary/70 font-body">
              Nous accompagnons les PME/ETI dans leur transformation numérique avec l'IA générative.
            </p>
          </div>
          <div>
            <h4 class="font-headers font-semibold text-secondary">Navigation</h4>
            <ul class="mt-4 space-y-2">
              <li v-for="item in navigationItems" :key="item.path">
                <NuxtLink 
                  :to="item.path"
                  class="text-secondary/70 hover:text-primary transition-colors duration-200 font-body"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <ul class="space-y-2">
              <li>
                <button 
                  @click="openContactModal()" 
                  class="mb-3 flex cursor-pointer justify-center items-center bg-gradient-to-r from-secondary to-tertiary text-primary px-2 py-2 md:px-4 md:py-4 rounded-md text-xs font-headers font-medium hover:from-secondary/90 hover:to-tertiary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >
                  Formulaire de contact
                </button>
              </li>
              <li>
                <a href="mailto:contact@eden-labs.fr" class="text-secondary/70 hover:text-primary transition-colors duration-200 font-body">
                  contact@eden-labs.fr
                </a>
              </li>
              <li>
                <a href="tel:+33688144084" class="text-secondary/70 hover:text-primary transition-colors duration-200 font-body">
                  +33 6 88 14 40 84
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-secondary/10">
          <p class="text-center text-secondary/40 text-sm font-body">
            © {{ new Date().getFullYear() }} Eden Labs. Tous droits réservés. - <NuxtLink to="/legal-mentions" class="text-secondary hover:text-tertiary transition-colors duration-200 font-body">Mentions légales</NuxtLink>
          </p>
        </div>
      </div>
    </footer>
  </div>

  <!-- Modale de contact -->
  <ContactModal 
    :is-open="contactModalState.isOpen.value" 
    :initial-service="contactModalState.initialService.value"
    @close="contactModalState.close()"
    @submit="handleContactSubmit"
  />

  <!-- Modal de réservation -->
  <TransitionRoot appear :show="showBookingModal" as="template">
      <Dialog as="div" @close="closeBookingModal" class="relative z-50" :initialFocus="bookingModalInitialFocus">
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
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all">
                <div class="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    class="text-secondary/50 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    @click="closeBookingModal"
                  >
                    <span class="sr-only">Fermer</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                
                <DialogTitle as="h3" class="text-lg sm:text-xl font-headers font-medium leading-6 text-secondary">
                  Réservation confirmée
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm sm:text-base text-secondary/70">
                    Merci pour votre intérêt ! Nous vous contacterons dans les 24h pour planifier votre audit.
                  </p>
                </div>

                <div class="mt-4 sm:mt-6">
                  <button
                    ref="bookingModalInitialFocus"
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm sm:text-base font-medium text-secondary hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    @click="closeBookingModal"
                  >
                    Compris, merci !
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
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useRoute } from 'vue-router';
import BookingCTA from '~/components/BookingCTA.vue';
import ContactModal from '~/components/ContactModal.vue';
import useContactModalState from '~/composables/useContactModal';

interface NavigationItem {
  path: string;
  name: string;
  // Ajoutez d'autres propriétés si nécessaire
}

// Définir l'interface pour la réponse de l'API
// interface NavigationResponse {
//   data: {
//     data: NavigationItem[];
//     // Ajoutez d'autres propriétés si nécessaire
//   };
// }

type BookingCTAInstance = InstanceType<typeof BookingCTA>;

const route = useRoute()
const isLegalMentionsPage = computed(() => route.path === '/legal-mentions')

// const baseUrl = useRuntimeConfig().public.strapiUrl;

// const { $api } = useNuxtApp();
// const { data } = await $api.fetch(baseUrl + '/api/Navigation-Item');
// const navigationItems = computed(() => (data.value as NavigationResponse)?.data?.data || []);

const navigationItems = [
  {
    name: "Accueil",
    path: "/"
  },
  {
    name: "Services",
    path: "/services"
  },
  {
    name: "À propos",
    path: "/about"
  }
]

function openBookingModal() {
  showBookingModal.value = true
}

const showBookingModal = ref(false)
const bookingCTA = ref<BookingCTAInstance | null>(null);
const bookingModalInitialFocus = ref<HTMLButtonElement | null>(null)

function closeBookingModal() {
  showBookingModal.value = false
  
  // Réinitialiser le formulaire
  if (bookingCTA.value) {
    bookingCTA.value.resetForm()
  }
}

// Contact modal
const contactModalState = useContactModalState();

function openContactModal(service = '') {
  contactModalState.open(service);
}

function handleContactSubmit(formData: any) {
  console.log('Formulaire de contact soumis:', formData);
  // Vous pouvez ajouter ici une logique supplémentaire si nécessaire
}
</script>