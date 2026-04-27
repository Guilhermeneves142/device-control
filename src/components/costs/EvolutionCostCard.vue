<template>
  <BaseCard>
    <h1 class="title">Evolução do custo (R$)</h1>
    <figure class="chart-container">
      <canvas ref="evolution-chart"></canvas>
    </figure>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from "vue";
import BaseCard from "../global/UI/base/BaseCard.vue";
import Chart from "chart.js/auto";
import CostsService from "@/services/CostsService";

/* Refs */
const chartRef = useTemplateRef("evolution-chart");

/* Data */
const data = ref<Costs.EvolutionByDate[]>([]);
const loading = ref(false);

/* Hooks */
onMounted(() => {
  getData();
});

/* Methods */
async function getData() {
  try {
    loading.value = true;
    data.value = await CostsService.getEvolutionByDate();
    generateChart();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
function generateChart() {
  if (!chartRef.value) return;
  new Chart(chartRef.value, {
    type: "line",
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    data: {
      labels: data.value.map((e) => e.date),
      datasets: [
        {
          label: "Evolução do custo (R$)",
          data: data.value.map((e) => e.value),
          fill: true,
          borderColor: "#1e6fea",
          backgroundColor: "rgba(30, 111, 234,0.2)",
          tension: 0.1,
        },
      ],
    },
  });
}
</script>

<style scoped>
.title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-4);
  color: var(--color-text-main);
}
.chart-container {
  width: 100%;
  height: 150px;
}
@media (max-width: 1366px) {
  .chart-container {
    height: 100px;
  }
  .title {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-2);
  }
}
</style>
