<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-tertiary py-10 sm:py-12 md:py-16 lg:py-24">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col space-y-10 md:space-y-12 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
        <!-- Contenu textuel -->
        <div class="px-2 sm:px-6 text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:flex lg:items-center lg:text-left">
          <div>
            <div class="flex justify-center lg:justify-start">
              <span class="rounded bg-primary px-2.5 py-1 text-xs font-semibold tracking-wide text-secondary uppercase">
                Notre histoire
              </span>
            </div>
            <h1 class="font-accent mt-3 sm:mt-4 lg:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-light">
              À propos d'<span class="text-primary">Eden Labs</span>
            </h1>
            <p class="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-light/80">
              Démocratiser l'IA pour toutes les entreprises
            </p>
            
            </div>
        </div>

        <!-- Image -->
        <div class="mt-6 md:mt-8 lg:mt-0 lg:col-span-6">
          <div class="relative mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none p-3 sm:p-4 lg:p-6">
            <div class="relative mx-auto w-full rounded-lg shadow-xl overflow-hidden">
              <img
                class="w-full"
                src="https://www.placehold.co/500x400"
                alt="À propos d'Eden Labs"
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
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
</script> 