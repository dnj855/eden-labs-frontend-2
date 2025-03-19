<template>
  {{ slug }}
</template>

<script setup>
const { slug } = useRoute().params
</script>