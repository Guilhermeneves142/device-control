<template>
  <aside class="sidebar">
    <HeaderSideBar />
    <NavigationSideBar />
    <FooterSideBar />
  </aside>
</template>

<script setup lang="ts">
import FooterSideBar from "./components/FooterSideBar.vue";
import HeaderSideBar from "./components/HeaderSideBar.vue";
import NavigationSideBar from "./components/NavigationSideBar.vue";
</script>

<style scoped>
.sidebar {
  padding: var(--spacing-4);
  background-color: var(--color-tertiary);
  min-height: 100vh;
  width: 20rem;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  position: sticky;
  top: 0;
}

@media (max-width: 768px) {
  .sidebar {
    background-color: var(--color-surface);
    width: 100%;
    min-height: fit-content;
  }
}
</style>
