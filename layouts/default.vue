<template>
  <div class="min-h-screen bg-gray-50">
    <TheNavbar />
    <main>
      <NuxtPage />
    </main>
    <CTANewsletter v-if="!isLegalMentionsPage" />
    <BookingCTA
      v-if="!isLegalMentionsPage"
      ref="bookingSection"
      @submit-booking="submitBooking"
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
            <h4 class="font-headers font-semibold text-secondary">Contact</h4>
            <ul class="mt-4 space-y-2">
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
  <TransitionRoot appear :show="showBookingModal" as="template">
      <Dialog as="div" @close="showBookingModal = false" class="relative z-50" :initialFocus="bookingModalInitialFocus">
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
                    @click="showBookingModal = false"
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
                    @click="showBookingModal = false"
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
import { useRoute } from 'vue-router';

const route = useRoute()
const isLegalMentionsPage = computed(() => route.path === '/legal-mentions')

const baseUrl = useRuntimeConfig().public.strapiUrl;
const { $api } = useNuxtApp();
const { data } = await $api.fetch(baseUrl + '/api/Navigation-Item');
const navigationItems = computed(() => (data.value as NavigationResponse)?.data?.data || []);


function openBookingModal() {
  showBookingModal.value = true
}

const showBookingModal = ref(false)
const bookingModalInitialFocus = ref<HTMLButtonElement | null>(null)

function submitBooking(formData: any) {
  // TODO: Implémenter la soumission du formulaire
  console.log('Soumission du formulaire:', formData)
  openBookingModal()
}

</script> 