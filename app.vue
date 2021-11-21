<template>
  <header id="site-header" class="fixed-top">
    <Header />
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/data', { pick: ['main'] })
</script>

<style>
@import '@unocss/reset/tailwind.css';
@import '~/styles/main.css';
</style>
