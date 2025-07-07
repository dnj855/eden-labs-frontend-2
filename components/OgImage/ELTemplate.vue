<script setup lang="ts">
/**
 * @credits Full Stack Heroes <https://fullstackheroes.com/>
 */

withDefaults(defineProps<{
  title?: string
  logo?: string
}>(), {
  title: 'title',
  logo: '/images/logo.webp',
})
</script>

<template>
  <div
    :style="{ backgroundImage: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)' }"
    class="h-full w-full flex items-start justify-start"
  >
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full p-20">
        <NuxtImg :src="logo" height="200" width="200" format="webp" quality="90" loading="eager" />
        <h1 class="text-[60px] text-white font-bold text-left">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>