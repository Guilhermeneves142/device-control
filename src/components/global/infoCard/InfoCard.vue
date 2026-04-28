<template>
  <BaseCard>
    <main class="info-card">
      <figure
        class="info-card-icon material-symbols-outlined"
        :style="styleIcon"
        v-if="!isMobile"
      >
        {{ icon }}
      </figure>
      <section class="info-card-informations">
        <header class="info-card-header">
          <h1 class="info-card-title">
            {{ title }}
          </h1>
        </header>
        <strong class="info-card-value">{{ value }}</strong>
        <footer class="info-card-footer">
          <span class="info-card-footer-value">{{ textFooter }}%</span>
          <span class="info-card-footer-text"> vs periodo anterior</span>
        </footer>
      </section>
    </main>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseCard from "../UI/base/BaseCard.vue";
import useMobileApp from "@/composables/useMobileApp";

/* Props */
interface Props {
  icon: string;
  iconColor: string;
  backgroundColor: string;
  title: string;
  value: string | number;
  textFooter: string;
}
const props = withDefaults(defineProps<Props>(), {});

/* Composables */
const { isMobile } = useMobileApp();

/* Computed */
const styleIcon = computed(() => {
  return {
    color: props.iconColor,
    backgroundColor: props.backgroundColor,
  };
});
</script>

<style scoped>
.info-card {
  display: flex;
  gap: var(--spacing-4);
}

.info-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  font-size: 40px;
  padding: var(--spacing-2);
  border-radius: var(--radius-xl);
}

.info-card-header {
  margin-bottom: var(--spacing-1);
}

.info-card-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  text-wrap: nowrap;
}

.info-card-value {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin: var(--spacing-20) var(--spacing-0);
}

.info-card-footer {
  margin-top: var(--spacing-1);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
}
.info-card-footer-text {
  color: var(--color-text-secondary);
}
.info-card-footer-value {
  color: var(--color-feedback-success);
}

@media (max-width: 1366px) {
  .info-card-title {
    font-size: var(--font-size-xs);
  }
  .info-card-value {
    font-size: var(--font-size-lg);
  }
  .info-card-footer {
    font-size: var(--font-size-xs);
    text-wrap: nowrap;
  }
}

@media (max-width: 768px) {
  .info-card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    font-size: 30px;
    padding: var(--spacing-2);
    border-radius: var(--radius-xl);
  }

  .info-card-title {
    font-size: var(--font-size-xs);
  }
  .info-card-value {
    font-size: var(--font-size-md);
  }
  .info-card-footer {
    font-size: var(--font-size-xs);
    text-wrap: nowrap;
  }
}
</style>
