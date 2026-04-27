<template>
  <div class="main-layout">
    <SideBar />
    <main class="page">
      <HeaderMain />
      <section class="main-content">
        <RouterView />
      </section>
    </main>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar/SideBar.vue";
import HeaderMain from "./components/Header/HeaderMain.vue";
</script>

<style scoped>
.main-layout {
  display: flex;
}
.page {
  background-color: var(--color-background);
  flex: 1;
}

.main-content {
  padding: var(--spacing-4);
  padding-bottom: 0;
}
</style>
