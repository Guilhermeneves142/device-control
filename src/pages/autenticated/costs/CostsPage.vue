<template>
  <div>
    <CardsInfo />
    <div style="display: flex; gap: 20px; margin-top: 20px; flex-wrap: wrap">
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
      <div class="detailed-cards-group">
        <InsightsCard style="width: 100%; box-sizing: border-box" />
        <BiggerCostsPerUser style="width: 100%; box-sizing: border-box" />
      </div>
      <DetailedCostsTable class="detailed-costs-table" />
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

<style scoped>
.detailed-cards-group {
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.detailed-costs-table {
  grid-column: span 3;
  width: 100%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .detailed-cards-group {
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .detailed-costs-table {
    grid-column: span 4;
  }
}
</style>
