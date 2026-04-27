<template>
  <header class="main-header">
    <section>
      <h1 class="title">{{ headerData?.title }}</h1>
      <h3 class="subtitle">{{ headerData?.subtitle }}</h3>
    </section>
    <section>
      <span class="material-symbols-outlined notify">notifications</span>
    </section>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

/* Composables */
const route = useRoute();

/* Computed */
const headerData = computed(() => {
  switch (route.name) {
    case "Dashboard":
      return {
        title: "Dashboard",
        subtitle: "Visão geral da sua operação",
      };
    case "Devices":
      return {
        title: "Dispositivos",
        subtitle: "Gerencie e monitore todos os dispositivos da sua empresa",
      };
    case "Costs":
      return {
        title: "Custos",
        subtitle: "Acompanhe e analise os custo de telecom e TI da sua empresa",
      };
    default:
      return {
        title: "Página não encontrada",
        subtitle: "Volte ao ínicio",
      };
  }
});
</script>

<style scoped>
.main-header {
  padding: var(--spacing-4);
  background-color: var(--color-surface);
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 8px 24px rgba(0, 0, 0, 0.06);
}
.main-header .title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-1);
}

.main-header .subtitle {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-secondary);
}
.notify {
  border-radius: 9999px;
  padding: var(--spacing-3);
  cursor: pointer;
}
.notify:hover {
  background-color: var(--color-border);
}

@media (max-width: 1366px) {
  .main-header .title {
    font-size: var(--font-size-xl);
  }
  .main-header .subtitle {
    font-size: var(--font-size-sm);
  }
}
</style>
