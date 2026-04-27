<template>
  <BaseCard>
    <h1 class="title">Evolução do custo (R$)</h1>
    <figure class="chart-container">
      <canvas ref="evolution-chart"></canvas>
    </figure>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed, onMounted, useTemplateRef } from "vue";
import BaseCard from "../global/UI/base/BaseCard.vue";
import Chart from "chart.js/auto";

/* Refs */
const chartRef = useTemplateRef("evolution-chart");

/* Hooks */
onMounted(() => {
  generateChart();
});

/* Computed */
const data = computed(() => {
  return [
    {
      date: "22/06",
      value: 10000,
    },
    {
      date: "23/06",
      value: 20000,
    },
    {
      date: "24/06",
      value: 5000,
    },
    {
      date: "25/06",
      value: 7500,
    },
    {
      date: "26/06",
      value: 15000,
    },
    {
      date: "27/06",
      value: 30000,
    },
  ];
});

/* Methods */
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
