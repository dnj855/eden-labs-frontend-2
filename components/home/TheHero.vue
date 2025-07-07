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
            
            <!-- Statistiques de confiance
            <div class="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:flex sm:space-x-8 justify-center lg:justify-start">
              <div>
                <p class="text-2xl sm:text-3xl font-bold text-primary">+45%</p>
                <p class="mt-1 text-xs sm:text-sm text-light/70">Gain de productivité moyen</p>
              </div>
              <div>
                <p class="text-2xl sm:text-3xl font-bold text-primary">50+</p>
                <p class="mt-1 text-xs sm:text-sm text-light/70">Entreprises accompagnées</p>
              </div>
            </div> -->

            <!-- CTAs -->
            <div class="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <CalButton
                class="cursor-pointer flex items-center justify-center rounded-md border-2 border-primary bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-secondary hover:bg-primary-light hover:border-primary-light transition-colors duration-200 md:py-3 lg:py-4 md:text-lg lg:px-10"
              >
                Réserver un appel découverte gratuit
              </CalButton>
              <NuxtLink
                class="flex items-center justify-center rounded-md border-2 border-light bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-light hover:bg-light hover:text-secondary transition-colors duration-200 md:py-3 lg:py-4 md:text-lg lg:px-10"
                to="/services"
              >
                Découvrir nos solutions
              </NuxtLink>
            </div>


          </div>
        </div>

        <!-- Image -->
        <div class="mt-6 md:mt-8 lg:mt-0 lg:col-span-6">
          <div class="relative mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none p-3 sm:p-4 lg:p-6">
            <div class="relative mx-auto w-full rounded-lg shadow-xl overflow-hidden">
              <NuxtImg
                class="w-full rounded-lg"
                src="/images/home-hero.webp"
                alt="Solutions d'IA générative pour entreprises"
                preset="hero"
                placeholder
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- Indicateur de scroll - Caché sur petits écrans -->
    <div class="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDownIcon class="h-6 w-6 text-light/70" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
</script>