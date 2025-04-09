<template>
  <div class="min-h-screen bg-light">
    <template v-if="blogPost">
      <!-- Hero Section -->
      <div class="relative bg-gradient-to-r from-secondary to-tertiary text-white py-20">
        <UContainer>
          <div class="px-4 flex md:flex-row flex-col gap-4 items-center">
            <div class="md:w-2/3">
              <!-- Catégorie -->
              <div class="mb-6">
                <span
                  class="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium tracking-wide">
                  {{ blogPost.category }}
                </span>
              </div>

              <!-- Titre -->
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-headers font-bold mb-8 leading-tight">
                {{ blogPost.title }}
              </h1>

              <!-- Métadonnées -->
              <div class="flex items-center space-x-6 text-sm text-white/90">
                <div class="flex items-center">
                  <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {{ blogPost.author }}
                </div>
                <div class="flex items-center">
                  <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <NuxtTime :datetime="new Date(blogPost.published_date)" />
                </div>
              </div>
            </div>
            <!-- Image principale -->
            <div class="rounded-2xl overflow-hidden shadow-xl md:w-1/3 mt-12 md:mt-0">
              <NuxtImg :src="blogPost.image" :alt="blogPost.title" class="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </UContainer>
      </div>

      <!-- Contenu de l'article -->
      <UContainer>
        <div class="px-4 py-16">

          <!-- Contenu markdown -->
          <ContentRenderer :value="blogPost"
            class="prose prose-headings:font-headers prose-headings:font-bold prose-headings:text-gray-900 prose-headings:no-underline prose-p:text-gray-700 prose-p:leading-relaxed prose-a:no-underline prose-strong:text-gray-900 prose-strong:font-semibold prose-img:rounded-xl prose-img:shadow-lg prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-700 max-w-none" />

          <!-- Tags -->
          <div class="mt-16 pt-8 border-t border-gray-200">
            <h3 class="text-xl font-headers font-bold text-gray-900 mb-6">Tags</h3>
            <div class="flex flex-wrap gap-3">
              <span v-for="tag in blogPost.tags" :key="tag"
                class="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary hover:bg-secondary/20 transition-colors duration-200">
                {{ tag }}
              </span>
            </div>
          </div>

        </div>
      </UContainer>
    </template>
    <template v-else>
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-headers font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <p class="text-gray-600 mb-6">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
          <NuxtLink to="/blog"
            class="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-tertiary transition-colors duration-200">
            Retour au blog
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
  <ScrollTopButton :show="showScrollTopButton" />
</template>

<script setup lang="ts">
import type { blogPost } from '~/types/global'

const { path } = useRoute()
const showScrollTopButton = ref(false)
const { data: blogPost } = useAsyncData(path, () => {
  return queryCollection('blogPosts').path(path).where('published_date', '<', new Date().toISOString().split('T')[0]).first() as Promise<blogPost | null>
})

// SEO
useHead({
  title: blogPost.value?.title || 'Article non trouvé',
  meta: [
    {
      name: 'description',
      content: blogPost.value?.description || 'L\'article que vous recherchez n\'existe pas ou a été déplacé.'
    }
  ]
})

function handleScroll() {
  showScrollTopButton.value = window.scrollY > window.innerHeight
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>