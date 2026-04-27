<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style scoped>
.base-card {
  padding: var(--spacing-6) var(--spacing-5);
  width: fit-content;
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 8px 24px rgba(0, 0, 0, 0.06);
}
</style>
