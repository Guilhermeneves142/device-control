<template>
  <nav class="sidebar-nav" v-if="!isMobile">
    <LinkSideBar
      class="route"
      :to="{ name: 'Dashboard' }"
      text="Dashboard"
      icon="home"
    />
    <LinkSideBar
      class="route"
      :to="{ name: 'Devices' }"
      text="Dispositivos"
      icon="devices"
    />
    <LinkSideBar
      class="route"
      :to="{ name: 'Costs' }"
      text="Custos"
      icon="paid"
    />
  </nav>
</template>

<script setup lang="ts">
import useMobileApp from "@/composables/useMobileApp";
import LinkSideBar from "./LinkSideBar.vue";

/* Composables */
const { isMobile } = useMobileApp();
</script>

<style scoped>
.sidebar-nav {
  margin-top: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
</style>
