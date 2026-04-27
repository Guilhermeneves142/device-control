<template>
  <div>
    <CardsInfo />
    <div style="display: flex; gap: 20px; margin-top: 20px">
      <CategoryCostCard style="flex: 3" />
      <EvolutionCostCard style="flex: 4" />
    </div>
    <div
      style="
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 20px;
      "
    >
      <div
        style="
          grid-column: span 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        "
      >
        <InsightsCard style="width: 100%; box-sizing: border-box" />
        <BiggerCostsPerUser style="width: 100%; box-sizing: border-box" />
      </div>
      <DetailedCostsTable
        style="grid-column: span 3; width: 100%; box-sizing: border-box"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryCostCard from "@/components/costs/CategoryCostCard.vue";
import CardsInfo from "./components/CardsInfo.vue";
import EvolutionCostCard from "@/components/costs/EvolutionCostCard.vue";
import InsightsCard from "./components/InsightsCard.vue";
import BiggerCostsPerUser from "./components/BiggerCostsPerUser.vue";
import DetailedCostsTable from "./components/DetailedCostsTable.vue";
</script>
