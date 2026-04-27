<template>
  <header class="sidebar-header">
    <div class="material-symbols-outlined sidebar-header-icon">
      important_devices
    </div>
    <div>
      <h1 class="title">Device Ctrl</h1>
      <h3 class="subtitle">controle de dispositivos</h3>
    </div>
  </header>
</template>

<style scoped>
.sidebar-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.sidebar-header .title {
  color: var(--color-on-tertiary);
}

.sidebar-header .subtitle {
  color: var(--color-on-tertiary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
}

.sidebar-header-icon {
  background-color: var(--color-primary);
  border-radius: 1000px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-on-primary);
}
</style>
