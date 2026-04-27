<template>
  <BaseCard>
    <h1 class="title">Maiores custos por usuário</h1>
    <table class="main-info-table">
      <tbody>
        <tr v-for="item in dataFormatted" :key="item.name">
          <td>
            <div class="table-person">
              <figure class="icon-item material-symbols-outlined">
                person
              </figure>
              <span>{{ item.name }}</span>
            </div>
          </td>
          <td class="table-value">
            {{ item.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/components/global/UI/base/BaseCard.vue";
import useFormat from "@/composables/useFormat";
import CostsService from "@/services/CostsService";
import { computed, onMounted, ref } from "vue";

/* Composables */
const { formatNumberToReal } = useFormat();

/* Data */
const data = ref<Costs.BiggestCostsByUser[]>([]);
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
    data.value = await CostsService.getBiggestCostsByUser();
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
.icon-item {
  color: var(--color-primary);
}
.main-info-table {
  width: 100%;
}
.main-info-table td {
  padding-top: var(--spacing-1);
}
.table-person {
  color: var(--color-text-main);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}
.table-value {
  text-align: end;
}

@media (max-width: 1366px) {
  .title {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-2);
  }

  .main-info-table tbody td {
    font-size: var(--font-size-xs);
  }
}
</style>
