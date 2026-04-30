<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      gap: var(--spacing-12);
    "
  >
    <div style="align-self: center">
      <span class="title-pill">GESTÃO DE DISPOSITIVOS MÓVEIS</span>
      <section class="title-group">
        <h1 class="title-homepage">Mais controle.</h1>
        <h1 class="title-homepage">Mais eficiência.</h1>
        <h1 class="title-homepage title-primary">Mais resultados.</h1>
      </section>

      <div class="text-homepage">
        A plataforma completa para gestão de dispositivos móveis da sua empresa.
        Segurança, monitoramento e economia em um só lugar.
      </div>
      <RouterLink :to="{ name: 'Dashboard' }">
        <div class="menu-option-free-trial">Começar grátis</div>
      </RouterLink>
    </div>
    <div>
      <img src="/exemplo-dashboard.png" style="width: 55vw" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.menu-option-free-trial {
  background-color: var(--color-primary);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-md);
  width: fit-content;
  font-weight: var(--font-weight-semibold);
  color: var(--color-on-primary);
  text-decoration: none;
}

.menu-option-free-trial:hover {
  background-color: var(--color-primary-hover);
}

.title-pill {
  background-color: #dce6f5;
  color: var(--color-primary);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
}

.title-group {
  margin: var(--spacing-5) var(--spacing-0);
}

.title-homepage {
  font-size: var(--font-size-brand);
}

.title-primary {
  color: var(--color-primary);
}

.text-homepage {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-5);
}
</style>
