<template>
  <BaseCard>
    <h1 class="title">Detalhamento de custos</h1>

    <table class="detailed-costs-table">
      <thead>
        <tr>
          <th>Departamento</th>
          <th>Categoria</th>
          <th style="text-align: center">Custo no periodo(R$)</th>
          <th style="text-align: center" v-if="!isMobile">% do total</th>
          <th style="text-align: center" v-if="!isMobile">
            Variação vs anterior
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataFormatted" :key="item.department">
          <td>
            {{ item.department }}
          </td>
          <td>
            <div
              style="display: flex; align-items: center; gap: var(--spacing-3)"
            >
              <figure
                class="icon-item material-symbols-outlined"
                :style="{ backgroundColor: item.icon.color, color: 'white' }"
              >
                {{ item.icon.icon }}
              </figure>
              <span>{{ item.category }}</span>
            </div>
          </td>
          <td style="text-align: center">{{ item.value }}</td>
          <td style="text-align: center" v-if="!isMobile">
            {{ item.percent }}
          </td>
          <td style="text-align: center" v-if="!isMobile">
            {{ item.variant }}
          </td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td></td>
          <td style="text-align: center">
            <strong>R$ 235.711,50</strong>
          </td>
          <td style="text-align: center" v-if="!isMobile">
            <strong>100% </strong>
          </td>
          <td style="text-align: center" v-if="!isMobile">+3.7%</td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/components/global/UI/base/BaseCard/BaseCard.vue";
import useFormat from "@/composables/useFormat";
import useMobileApp from "@/composables/useMobileApp";
import CostsService from "@/services/CostsService";
import { computed, onMounted, ref } from "vue";

/* Composables */
const { isMobile } = useMobileApp();

/* Composables */
const { formatNumberToReal } = useFormat();

/* Data */
const data = ref<Costs.List[]>([]);
const loading = ref(false);

/* Hooks */
onMounted(() => {
  getData();
});

/* Computed */
const dataFormatted = computed(() => {
  return data.value.map((e) => {
    return {
      ...e,

      value: formatNumberToReal(e.value),
    };
  });
});

/* Methods */
async function getData() {
  try {
    loading.value = true;
    data.value = await CostsService.getAll();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2);
  color: var(--color-text-main);
}
.detailed-costs-table {
  width: 100%;
  margin-top: var(--spacing-2);
  border-collapse: collapse;
}

.detailed-costs-table thead th {
  padding: var(--spacing-2);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
  text-align: start;
}

.detailed-costs-table tbody td {
  padding: var(--spacing-2);
  color: var(--color-text-main);
  text-align: start;
  border-bottom: 1px solid var(--color-border);
}

.icon-item {
  padding: var(--spacing-1);
  font-size: var(--font-size-md);
  border-radius: var(--radius-md);
}

@media (max-width: 1366px) {
  .title {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-2);
  }

  .detailed-costs-table thead th {
    padding: var(--spacing-1);
    font-size: var(--font-size-sm);
  }

  .detailed-costs-table tbody td {
    padding: var(--spacing-2);
    font-size: var(--font-size-sm);
  }

  .icon-item {
    padding: var(--spacing-1);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-md);
  }
}

@media (max-width: 768px) {
  .detailed-costs-table thead th {
    padding: var(--spacing-1);
    font-size: var(--font-size-xs);
  }

  .detailed-costs-table tbody td {
    padding: var(--spacing-2);
    font-size: var(--font-size-xs);
  }
}
</style>
