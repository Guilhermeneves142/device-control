<template>
  <BaseCard>
    <h1 class="title">Custo por categoria</h1>
    <main class="main-info">
      <figure class="chart-container">
        <canvas ref="cost-chart"></canvas>
      </figure>
      <table class="main-info-table">
        <tbody>
          <tr v-for="item in dataFormatted" :key="item.type">
            <td>
              <div class="table-category">
                <span class="dot" :style="{ backgroundColor: item.color }" />
                {{ item.type }}
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
import { computed, onMounted, ref, useTemplateRef } from "vue";
import BaseCard from "../global/UI/base/BaseCard.vue";
import Chart from "chart.js/auto";
import useFormat from "@/composables/useFormat";
import CostsService from "@/services/CostsService";

/* Refs */
const chartRef = useTemplateRef("cost-chart");

/* Composables */
const { formatNumberToReal } = useFormat();

/* Data */
const data = ref<Costs.ByCategory[]>([]);
const loading = ref(false);

/* Hooks */
onMounted(() => {
  getData();
});

/* Computed */
const dataFormatted = computed(() => {
  const colors = ["#1e6fea", "#22c55e", "#8b5cf6", "#d4d4d4"];
  return data.value.map((e, index) => {
    return {
      ...e,
      color: colors[index],
      valueFormatted: formatNumberToReal(e.value),
    };
  });
});

/* Methods */
async function getData() {
  try {
    loading.value = true;
    data.value = await CostsService.getDataByCategory();
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
      labels: dataFormatted.value.map((e) => e.type),
      datasets: [
        {
          label: "Custo por categoria",
          data: dataFormatted.value.map((e) => e.value),
          backgroundColor: ["#1e6fea", "#22c55e", "#8b5cf6", "#d4d4d4"],
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
