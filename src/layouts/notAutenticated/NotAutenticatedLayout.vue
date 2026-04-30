<template>
  <div class="not-autenticated-layout">
    <TopMenu />
    <main class="page">
      <RouterView />
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainFooter from "./components/MainFooter.vue";
import TopMenu from "./components/TopMenu.vue";
</script>

<style scoped>
.page {
  background-color: var(--color-background);
  padding: var(--spacing-5) var(--spacing-20);
  margin-top: 5.5em;
}
</style>
