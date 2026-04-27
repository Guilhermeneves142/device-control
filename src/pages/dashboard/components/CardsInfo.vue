<template>
  <div style="display: flex; gap: 20px; justify-content: space-around">
    <InfoCard
      icon="mobile_2"
      icon-color="white"
      background-color="var(--color-primary)"
      title="Total de dispositivos"
      value="1.248"
      text-footer="+8.2"
      style="flex: 1"
    />
    <InfoCard
      icon="attach_money"
      icon-color="white"
      background-color="var(--color-feedback-success)"
      title="Custo mensal total"
      value="R$ 178.540,00"
      text-footer="-3.7"
      style="flex: 1"
    />
    <InfoCard
      icon="warning"
      icon-color="white"
      background-color="var(--color-feedback-warning)"
      title="Dispositivos com alerta"
      value="23"
      text-footer="-15.0"
      style="flex: 1"
    />
    <InfoCard
      icon="group"
      icon-color="white"
      background-color="var(--color-secondary)"
      title="Usuários ativos"
      value="982"
      text-footer="+5.4"
      style="flex: 1"
    />
  </div>
</template>

<script setup lang="ts">
import InfoCard from "@/components/global/infoCard/InfoCard.vue";
</script>
