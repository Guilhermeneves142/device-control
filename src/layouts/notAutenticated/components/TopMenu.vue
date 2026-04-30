<template>
  <div class="top-menu">
    <div class="top-menu-logo">
      <div class="material-symbols-outlined top-menu-icon">
        important_devices
      </div>
      <div>
        <h1 class="title">Device Ctrl</h1>
        <h2 class="subtitle">controle de dispositivos</h2>
      </div>
    </div>
    <nav class="top-menu-options">
      <span class="menu-options"> Recursos </span>
      <span class="menu-options"> Preços </span>
      <span class="menu-options"> Sobre nós </span>
      <span class="menu-options"> Contato </span>
    </nav>
    <div class="top-menu-login">
      <RouterLink :to="{ name: 'Dashboard' }" class="menu-option-login">
        Entrar
      </RouterLink>
      <RouterLink :to="{ name: 'Dashboard' }" class="menu-option-free-trial">
        Começar grátis
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.top-menu {
  position: fixed;
  width: 100%;
  top: 0;
  box-sizing: border-box;

  padding: var(--spacing-5) var(--spacing-20);
  display: flex;
  justify-content: space-between;
  background-color: var(--color-surface);
}

.top-menu-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.top-menu-icon {
  background-color: var(--color-primary);
  border-radius: 1000px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-on-primary);
}

.title {
  color: var(--color-text-main);
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
}

.top-menu-options {
  display: flex;
  align-items: center;
}

.menu-options {
  text-decoration: none;
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
  width: 100%;
  padding: var(--spacing-3) var(--spacing-6);
  border: 2px solid transparent;
  text-wrap: nowrap;
}

.menu-options:hover {
  border-bottom: 2px solid var(--color-primary);
}

.top-menu-login {
  display: flex;
  align-items: center;
}

.menu-option-login {
  text-decoration: none;
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-3) var(--spacing-6);
}

.menu-option-login:hover {
  color: var(--color-text-main);
}

.menu-option-free-trial {
  text-decoration: none;
  background-color: var(--color-primary);
  padding: var(--spacing-3) var(--spacing-6);
  color: var(--color-on-primary);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
}

.menu-option-free-trial:hover {
  background-color: var(--color-primary-hover);
}
</style>
