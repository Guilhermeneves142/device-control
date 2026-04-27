<template>
  <RouterLink
    :to="props.to"
    v-slot="{ isExactActive }"
    style="text-decoration: none"
  >
    <div class="link-item-menu" :class="{ active: isExactActive }">
      <span class="material-symbols-outlined">
        {{ icon }}
      </span>
      <span>{{ text }}</span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
} from "vue-router";

/* Props */
interface Props {
  to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
  text: string;
  icon: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.link-item-menu {
  display: flex;
  align-items: center;
  border-radius: var(--radius-lg);
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-2);
}

.active {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.link-item-menu:hover {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.link-item-menu span {
  color: var(--color-on-tertiary);
}
</style>
