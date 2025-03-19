<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-tertiary py-10 sm:py-12 md:py-16 lg:py-24">
    <!-- Fond décoratif -->
    <!-- <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-r from-light to-transparent"></div>
    </div> -->

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col space-y-10 md:space-y-12 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
        <!-- Contenu textuel -->
        <div class="px-2 sm:px-6 text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:flex lg:items-center lg:text-left">
          <div>
            <div class="flex justify-center lg:justify-start">
              <span class="rounded bg-primary px-2.5 py-1 text-xs font-semibold tracking-wide text-secondary uppercase">
                Spécialiste IA pour non-techniciens
              </span>
            </div>
            <h1 class="font-accent mt-3 sm:mt-4 lg:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light">
              <span>Transformez votre</span>
              <span class="text-primary"> entreprise avec l'IA</span>
              <span class="font-accent block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-tertiary tracking-tight">sans expertise technique</span>
            </h1>
            <p class="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-light/80">
              Accompagnement sur mesure pour PME/ETI : formations, ateliers et consulting pour intégrer l'IA dans vos processus quotidiens
            </p>
            
            <!-- Statistiques de confiance -->
            <div class="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:flex sm:space-x-8 justify-center lg:justify-start">
              <div>
                <p class="text-2xl sm:text-3xl font-bold text-primary">+45%</p>
                <p class="mt-1 text-xs sm:text-sm text-light/70">Gain de productivité moyen</p>
              </div>
              <div>
                <p class="text-2xl sm:text-3xl font-bold text-primary">50+</p>
                <p class="mt-1 text-xs sm:text-sm text-light/70">Entreprises accompagnées</p>
              </div>
            </div>

            <!-- CTAs -->
            <div class="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button
                class="flex items-center justify-center rounded-md border-2 border-primary bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-secondary hover:bg-primary-light hover:border-primary-light transition-colors duration-200 md:py-3 lg:py-4 md:text-lg lg:px-10"
                @click="$emit('openBooking')"
              >
                Réserver mon audit flash gratuit
              </button>
              <button
                class="flex items-center justify-center rounded-md border-2 border-light bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-light hover:bg-light hover:text-secondary transition-colors duration-200 md:py-3 lg:py-4 md:text-lg lg:px-10"
                @click="$emit('openSolutions')"
              >
                Découvrir nos solutions
              </button>
            </div>

            <!-- Démo vidéo -->
            <div class="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <button
                class="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200"
                @click="showVideo = true"
              >
                <PlayCircleIcon class="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                <span class="text-sm sm:text-base">Voir la démo en 45 secondes</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Image/Vidéo -->
        <div class="mt-6 md:mt-8 lg:mt-0 lg:col-span-6">
          <div class="relative mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none p-3 sm:p-4 lg:p-6">
            <div class="relative mx-auto w-full rounded-lg shadow-xl overflow-hidden">
              <button
                type="button"
                class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                @click="showVideo = true"
              >
                <img
                  class="w-full"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="Démonstration d'utilisation de l'IA générative"
                />
                <div class="absolute inset-0 w-full h-full flex items-center justify-center">
                  <svg
                    class="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-primary"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                    <path d="M55.5 41.5L36.75 53.344V29.656L55.5 41.5Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Vidéo -->
    <TransitionRoot appear :show="showVideo" as="template">
      <Dialog as="div" @close="showVideo = false" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div class="relative aspect-video">
                  <iframe
                    class="absolute inset-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Démonstration Eden Labs"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Indicateur de scroll - Caché sur petits écrans -->
    <div class="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDownIcon class="h-6 w-6 text-light/70" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const showVideo = ref(false)
</script>