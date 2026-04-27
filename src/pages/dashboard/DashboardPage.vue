<template>
  <div>
    <CardsInfo />
    <div style="display: flex; gap: 20px; margin-top: 20px">
      <CategoryCostCard style="flex: 1" />
      <EvolutionCostCard style="flex: 1" />
    </div>
    <div style="display: flex; margin-top: 20px">
      <RecentDevices style="flex: 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryCostCard from "@/components/costs/CategoryCostCard.vue";
import CardsInfo from "./components/CardsInfo.vue";
import EvolutionCostCard from "@/components/costs/EvolutionCostCard.vue";
import RecentDevices from "./components/RecentDevices.vue";
</script>
