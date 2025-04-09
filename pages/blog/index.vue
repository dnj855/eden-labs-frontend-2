<template>
  <BlogHeroComponent />
  <UContainer>
    <section id="featured" class="my-12">
      <div class="flex flex-col gap-12">
        <h2
          class="text-center text-2xl sm:text-3xl md:text-4xl leading-8 font-headers font-extrabold tracking-tight text-secondary">
          Articles à la une</h2>
        <div class="grid grid-cols-3 gap-4">
          <BlogPostCard v-for="post in blogPosts" :key="post.id" :post="post" />
        </div>
      </div>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
import BlogHeroComponent from '~/components/blog/BlogHero.vue'
import type { blogPost } from '~/types/global'

const { data: blogPosts } = useAsyncData('blogPosts', async () => {
  return queryCollection('blogPosts')
  .where('featured', '=', true)
  .andWhere(query => query.where('published_date', '<', new Date().toISOString().split('T')[0]))
  .all() as unknown as blogPost[]
})

useHead({
  title: "Le blog d'Eden Labs : nos ressources, pour vous"
})

</script>