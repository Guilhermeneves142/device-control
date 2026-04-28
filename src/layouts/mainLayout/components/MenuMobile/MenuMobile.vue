<template>
  <nav class="menu-mobile">
    <RouterLink
      :to="{ name: 'Dashboard' }"
      v-slot="{ isExactActive }"
      style="text-decoration: none"
    >
      <div class="link-item-menu" :class="{ active: isExactActive }">
        <span class="material-symbols-outlined" title="Dashboard"> home </span>
        <div>Dashboard</div>
      </div>
    </RouterLink>
    <RouterLink
      :to="{ name: 'Devices' }"
      v-slot="{ isExactActive }"
      style="text-decoration: none"
    >
      <div class="link-item-menu" :class="{ active: isExactActive }">
        <span class="material-symbols-outlined" title="DashbDispositivosoard">
          devices
        </span>
        <div>Dispositivos</div>
      </div>
    </RouterLink>
    <RouterLink
      :to="{ name: 'Costs' }"
      v-slot="{ isExactActive }"
      style="text-decoration: none"
    >
      <div class="link-item-menu" :class="{ active: isExactActive }">
        <span class="material-symbols-outlined" title="Custos"> paid </span>
        <div>Custos</div>
      </div>
    </RouterLink>
  </nav>
</template>

<style scoped>
.menu-mobile {
  display: flex;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  margin-top: var(--spacing-3);
  background-color: var(--color-surface);
  padding-top: var(--spacing-3);
  padding-bottom: var(--spacing-1);
  border-top: 1px solid var(--color-border);
}
.link-item-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-1);
}
.link-item-menu * {
  color: var(--color-text-secondary);
}
.active * {
  color: var(--color-primary);
}
</style>
