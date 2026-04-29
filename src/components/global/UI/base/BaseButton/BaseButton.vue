<template>
  <button class="base-btn" type="button" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ disabled?: boolean }>(), {
  disabled: false,
});
</script>

<style scoped>
.base-btn {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
}

.base-btn:hover {
  background-color: var(--color-primary-hover);
}

.base-btn:disabled {
  background-color: var(--color-disabled);
  color: var(--color-on-disabled);

  cursor: not-allowed;
}

.base-btn:active {
  outline: 1px solid var(--color-primary);
}
</style>
