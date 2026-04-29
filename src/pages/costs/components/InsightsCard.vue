<template>
  <BaseCard class="insight-card">
    <h1 class="title">Insights</h1>
    <div class="insight-info">
      <span
        class="material-symbols-outlined"
        style="color: var(--color-feedback-success)"
        >check_circle</span
      >
      <span class="insight-text">
        Parabéns, Você tem <strong>R$ 18.320,50</strong> de economia potencial
        neste periodo.
      </span>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/components/global/UI/base/BaseCard/BaseCard.vue";
</script>

<style scoped>
.title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2);
  color: var(--color-text-main);
}

.insight-info {
  background-color: rgba(34, 197, 94, 0.2);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-feedback-success);
  display: flex;
  gap: var(--spacing-2);
  color: var(--color-text-main);
}

@media (max-width: 1366px) {
  .insight-info {
    padding: var(--spacing-2);
    gap: var(--spacing-1);
  }
  .insight-text {
    font-size: var(--font-size-xs);
  }
  .title {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-2);
  }
}
</style>
