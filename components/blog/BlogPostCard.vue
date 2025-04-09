<template>
  <NuxtLink :to="post.path">
  <article class="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
    <!-- Image du blog post -->
    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
      <NuxtImg
        :src="post.image"
        :alt="post.title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- Contenu -->
    <div class="flex flex-1 flex-col p-6">
      <!-- Catégorie -->
      <div class="mb-2">
        <span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {{ post.category }}
        </span>
      </div>

      <!-- Titre -->
      <h3 class="font-headers text-xl font-bold text-gray-900">
        {{ post.title }}
      </h3>

      <!-- Description -->
      <p class="mt-3 text-base text-gray-600">
        {{ post.description }}
      </p>

      <!-- Métadonnées -->
      <div class="mt-4 flex items-center text-sm text-gray-500">
        <div class="flex items-center">
          <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <NuxtTime :datetime="new Date(post.published_date)" />
        </div>
      </div>

      <!-- Bouton Lire la suite -->
      <div class="mt-6">
        <div
          class="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light"
        >
          Lire la suite
          <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </article>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { blogPost } from '~/types/global';

interface Props {
  post: blogPost
}

defineProps<Props>()
</script>
