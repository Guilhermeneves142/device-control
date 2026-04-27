<template>
  <div style="display: flex; gap: 20px; justify-content: space-around">
    <InfoCard
      icon="attach_money"
      icon-color="white"
      background-color="var(--color-primary)"
      title="Custo total no período"
      value="R$ 178.540,00"
      text-footer="+8.2"
      style="flex: 1"
    />
    <InfoCard
      icon="trending_up"
      icon-color="white"
      background-color="var(--color-feedback-success)"
      title="Média diária"
      value="R$ 8.985,16"
      text-footer="-3.7"
      style="flex: 1"
    />
    <InfoCard
      icon="credit_card"
      icon-color="white"
      background-color="var(--color-feedback-warning)"
      title="Maior custo diário"
      value="R$ 12.450,30"
      text-footer="-15.0"
      style="flex: 1"
    />
    <InfoCard
      icon="trending_down"
      icon-color="white"
      background-color="var(--color-secondary)"
      title="Economia Identificada"
      value="R$ 18.320,50"
      text-footer="+5.4"
      style="flex: 1"
    />
  </div>
</template>

<script setup lang="ts">
import InfoCard from "@/components/global/infoCard/InfoCard.vue";
</script>
