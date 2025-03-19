<template>
  <div class="relative isolate overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:py-12 lg:flex lg:px-8 lg:items-center lg:gap-x-10">
      <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
        <div class="mt-16 sm:mt-20 md:mt-24 lg:mt-16 inline-flex flex-wrap gap-3 sm:gap-4 sm:flex-nowrap sm:space-x-2">
            <span class="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
              Nos services
            </span>
            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-secondary">
              <span>Formez-vous, innovez, grandissez</span>
              <ChevronRightIcon class="h-5 w-5 text-secondary" aria-hidden="true" />
            </span>
        </div>
        <h1 class="font-accent mt-3 sm:mt-4 lg:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary">
          Nos solutions <span class="text-primary block sm:inline">d'IA générative</span> pour entreprises
        </h1>
        <p class="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-secondary/80 max-w-prose">
          Transformez votre entreprise grâce à l'IA, sans expertise technique requise
        </p>
        
      </div>
      <div class="mt-6 md:mt-8 lg:mt-0 flex-1">
        <div class="relative mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none p-2 sm:p-3 lg:p-4">
          <div class="relative mx-auto w-full rounded-lg shadow-lg sm:shadow-xl overflow-hidden transform sm:hover:scale-[1.02] transition-transform duration-300">
            <img
              src="/images/hero-offres.webp"
              alt="Solutions d'IA pour entreprises"
              class="w-full h-auto rounded-md bg-white/5 shadow-md sm:shadow-xl ring-1 ring-white/10"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Section commentée conservée avec les mêmes optimisations -->
    <!-- <div class="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 lg:px-8">
      <p class="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-7 text-secondary/70">
        Vous êtes submergé(e) par des tâches répétitives qui vous empêchent de vous concentrer sur la stratégie ? L'IA générative peut transformer radicalement votre productivité, mais par où commencer sans expertise technique ?
      </p>
      <p class="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-7 text-secondary/70">
        <strong>Chez Eden Labs, nos solutions d'accompagnement IA</strong> sont conçues pour des responsables comme vous qui recherchent des gains de temps concrets sans avoir à devenir experts en technologie.
      </p>
      <p class="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-7 text-secondary/70">
        Chaque offre est entièrement <strong>modulable et personnalisée</strong> selon vos besoins spécifiques. Choisissez le parcours qui vous correspond :
      </p>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline';
</script>