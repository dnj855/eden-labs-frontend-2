<template>
   <NuxtLink 
      :to="'/resources/' + resource.Slug"
      class="block transform transition-all duration-300 hover:scale-105"
    >
  <div class="bg-white/50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div class="relative h-48">
      <img 
        :src="baseUrl + resource.Image.formats.medium.url" 
        :alt="resource.Title"
        class="w-full h-full object-cover"
      />
      <div class="absolute top-4 right-4">
        <span 
          class="px-4 py-1.5 text-sm font-semibold rounded-full shadow-sm backdrop-blur-sm"
          :class="{
            'bg-secondary/50 text-primary': resource.Type === 'ebook',
            'bg-primary/50 text-tertiary': resource.Type === 'webinar',
            'bg-tertiary/50 text-secondary': resource.Type === 'case-study'
          }"
        >
          {{ resource.Type.charAt(0).toUpperCase() + resource.Type.slice(1) }}
        </span>
      </div>
    </div>
    <div class="p-6">
      <div class="mb-4">
        <h3 class="font-headers text-xl font-bold text-secondary mb-3">{{ resource.Title }}</h3>
        <p class="text-sm text-secondary/70">{{ resource.Short_Description }}</p>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium text-tertiary capitalize">{{ resource.Sector }}</span>
      </div>
    </div>
  </div>
</NuxtLink>
</template>

<script setup>
const baseUrl = useRuntimeConfig().public.strapiUrl;

defineProps({
  resource: {
    type: Object,
    required: true
  }
});
</script> 