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
              <div class="mt-4 sm:mt-6 md:mt-8 sm:hidden flex flex-col space-y-3">
                <input
                  v-model="email"
                  type="email"
                  class="w-full rounded-md border-light px-3 py-2 placeholder-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary"
                  placeholder="Votre email"
                />
                <button
                  class="w-full rounded-md border-2 border-primary bg-primary px-3 py-2 font-medium text-secondary transition-colors duration-200 hover:bg-primary-light hover:border-primary-light"
                  @click="$emit('subscribe', email)"
                >
                  S'abonner
                </button>
              </div>
              
              <!-- Formulaire tablette/desktop (côte à côte) -->
              <div class="mt-4 sm:mt-6 md:mt-8 hidden sm:flex">
                <input
                  v-model="email"
                  type="email"
                  class="w-full rounded-md border-light px-3 sm:px-4 md:px-5 py-2 sm:py-3 placeholder-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary sm:max-w-xs"
                  placeholder="Votre email"
                />
                <button
                  class="ml-3 flex-shrink-0 rounded-md border-2 border-primary bg-primary px-3 sm:px-4 md:px-5 py-2 sm:py-3 font-medium text-secondary transition-colors duration-200 hover:bg-primary-light hover:border-primary-light"
                  @click="$emit('subscribe', email)"
                >
                  S'abonner
                </button>
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
const email = ref('')

function subscribe() {
  // TODO: Implémenter l'inscription à la newsletter
  console.log('Inscription à la newsletter:', email.value)
}
</script>