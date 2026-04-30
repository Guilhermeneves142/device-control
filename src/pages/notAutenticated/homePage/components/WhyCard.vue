<template>
  <section class="why-card">
    <figure class="material-symbols-outlined icon" :style="styleIcon">
      {{ icon }}
    </figure>
    <div>
      <h1 class="title">{{ title }}</h1>
      <span class="text">{{ text }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
  icon: string;
  colorIcon: string;
  title: string;
  text: string;
};

const props = defineProps<Props>();

/* Computed */
const styleIcon = computed(() => {
  return {
    color: props.colorIcon,
  };
});
</script>

<style scoped>
.why-card {
  display: flex;
}

.icon {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  font-size: 30px;
  padding: var(--spacing-2);
  border-radius: var(--radius-xl);
}
.title {
  font-size: var(--font-size-md);
  padding: var(--spacing-2) var(--spacing-0);
}
.text {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  line-height: var(--line-height-normal);
}
</style>
