<template>
  <BaseCard>
    <h1 class="title">Custo por categoria</h1>
    <main class="main-info">
      <figure class="chart-container">
        <canvas ref="cost-chart"></canvas>
      </figure>
      <table class="main-info-table">
        <tbody>
          <tr v-for="item in data" :key="item.description">
            <td>
              <div class="table-category">
                <span class="dot" :style="{ backgroundColor: item.color }" />
                {{ item.description }}
              </div>
            </td>
            <td>
              <strong class="table-value">{{ item.valueFormatted }} </strong>
            </td>
            <td>
              <span class="table-percent">{{ item.percent }}% </span>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed, onMounted, useTemplateRef } from "vue";
import BaseCard from "../global/UI/base/BaseCard.vue";
import Chart from "chart.js/auto";
import useFormat from "@/composables/useFormat";

/* Refs */
const chartRef = useTemplateRef("cost-chart");

/* Composables */
const { formatNumberToReal } = useFormat();

/* Hooks */
onMounted(() => {
  generateChart();
});

/* Computed */
const data = computed(() => {
  return [
    {
      description: "Voz",
      value: 82128.4,
      color: "#1e6fea",
      percent: 46,
    },
    {
      description: "Dados móveis",
      value: 55347.4,
      color: "#22c55e",
      percent: 31,
    },
    {
      description: "SMS",
      value: 23210.2,
      color: "#8b5cf6",
      percent: 13,
    },
    {
      description: "Outros",
      value: 17854,
      color: "#d4d4d4",
      percent: 10,
    },
  ].map((e) => {
    return {
      ...e,
      valueFormatted: formatNumberToReal(e.value),
    };
  });
});

/* Methods */
function generateChart() {
  if (!chartRef.value) return;
  new Chart(chartRef.value, {
    type: "doughnut",
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    data: {
      labels: data.value.map((e) => e.description),
      datasets: [
        {
          label: "Custo por categoria",
          data: data.value.map((e) => e.value),
          backgroundColor: data.value.map((e) => e.color),
          hoverOffset: 4,
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

.main-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-20);
}

.chart-container {
  width: 100%;
  height: 150px;
  flex: 1;
}

.main-info-table {
  width: 100%;
  height: 150px;
}

.table-category {
  color: var(--color-text-main);
}

.table-value {
  color: var(--color-text-main);
  font-weight: var(--font-weight-semibold);
}

.table-percent {
  color: var(--color-text-secondary);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: var(--spacing-2);
}

@media (max-width: 1366px) {
  .main-info {
    gap: var(--spacing-10);
  }
  .chart-container {
    height: 100px;
  }

  .main-info-table {
    height: 100px;
  }
  .title {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-2);
  }
}
</style>
