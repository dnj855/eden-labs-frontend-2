<template>
  <div class="min-h-screen bg-gray-50">
    <ResourcesHero />
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="resource in ressources" :key="resource.id">
          <ResourceCard :resource="resource" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ResourceCard from '~/components/resources/ResourceCard.vue';
import ResourcesHero from '~/components/resources/ResourcesHero.vue';



const baseUrl = useRuntimeConfig().public.strapiUrl;
const { $api } = useNuxtApp();
const { data } = await $api.fetch(baseUrl + '/api/ressources?populate=*');
const ressources = computed(() => data.value?.data || []);
</script>