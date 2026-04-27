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
      icon="check"
      icon-color="white"
      background-color="var(--color-feedback-success)"
      title="Ativos"
      value="982"
      text-footer="+5.4"
      style="flex: 1"
    />
    <InfoCard
      icon="lock"
      icon-color="white"
      background-color="var(--color-feedback-warning)"
      title="Bloqueados"
      value="38"
      text-footer="-12.6"
      style="flex: 1"
    />
    <InfoCard
      icon="phone_disabled"
      icon-color="white"
      background-color="var(--color-secondary)"
      title="Inativos"
      value="228"
      text-footer="-3.1"
      style="flex: 1"
    />
  </div>
</template>

<script setup lang="ts">
import InfoCard from "@/components/global/infoCard/InfoCard.vue";
</script>
