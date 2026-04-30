<template>
  <BaseCard>
    <section class="resource-card">
      <figure class="material-symbols-outlined icon" :style="styleIcon">
        {{ icon }}
      </figure>
      <h1 class="title">{{ title }}</h1>
      <span class="text">{{ text }}</span>
    </section>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/components/global/UI/base/BaseCard/BaseCard.vue";
import { computed } from "vue";

type Props = {
  icon: string;
  backgroundIcon: string;
  title: string;
  text: string;
};

const props = defineProps<Props>();

/* Computed */
const styleIcon = computed(() => {
  return {
    backgroundColor: props.backgroundIcon,
  };
});
</script>

<style scoped>
.resource-card .icon {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  font-size: 40px;
  padding: var(--spacing-2);
  border-radius: var(--radius-xl);
}

.resource-card .title {
  font-size: var(--font-size-md);
  padding: var(--spacing-4) var(--spacing-0);
}
.resource-card .text {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  line-height: var(--line-height-normal);
}
</style>
