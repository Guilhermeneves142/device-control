<template>
  <nav class="sidebar-nav">
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
import LinkSideBar from "./LinkSideBar.vue";
</script>

<style scoped>
.sidebar-nav {
  margin-top: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
</style>
