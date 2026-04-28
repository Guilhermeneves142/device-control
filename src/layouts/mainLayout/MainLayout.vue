<template>
  <div class="main-layout">
    <SideBar class="menu" />
    <main class="page">
      <HeaderMain />
      <section class="main-content">
        <RouterView />
      </section>
    </main>
    <MenuMobile v-if="isMobile" />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar/SideBar.vue";
import HeaderMain from "./components/Header/HeaderMain.vue";
import MenuMobile from "./components/MenuMobile/MenuMobile.vue";
import useMobileApp from "@/composables/useMobileApp";

/* Composables */
const { isMobile } = useMobileApp();
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

@media (max-width: 768px) {
  .main-layout {
    display: initial;
  }

  .main-content {
    padding-bottom: 80px;
  }

  .menu {
    border-bottom: 1px solid var(--color-border);
  }
}
</style>
