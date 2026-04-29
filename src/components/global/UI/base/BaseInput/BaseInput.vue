<template>
  <div class="input-wrapper">
    <input
      :id="props.id"
      :type="props.type"
      class="base-input"
      :readonly="readonly"
      v-model="model"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
    />
  </div>
</template>

<script setup lang="ts">
/* Props */
export interface Props {
  id?: string;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  type: "text",
  id: "input-" + Math.random().toString(36).slice(2, 9),
  disabled: false,
});

/* Setup */
const model = defineModel<string | number | null>();
</script>

<style scoped>
.base-input {
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding: var(--spacing-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  color: var(--color-text-main);
  box-sizing: border-box;
  background-color: transparent;
}

.base-input::placeholder {
  color: var(--color-text-placeholder);
}

.base-input:focus {
  border-color: var(--color-primary-hover);
}

.base-input:disabled {
  background-color: var(--color-disabled);
  color: var(--color-on-disabled);
}
</style>
