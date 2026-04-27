<template>
  <div style="display: flex; gap: 20px; justify-content: space-around">
    <InfoCard
      v-for="item in cardFormatted"
      :key="item.title"
      :icon="item.icon"
      icon-color="white"
      :background-color="item.backgroundColor"
      :title="item.title"
      :value="item.value"
      :text-footer="item.increase"
      style="flex: 1"
    />
  </div>
</template>

<script setup lang="ts">
import InfoCard from "@/components/global/infoCard/InfoCard.vue";
import useFormat from "@/composables/useFormat";
import CostsService from "@/services/CostsService";
import { computed, onMounted, ref } from "vue";

/* Composables */
const { formatNumberToReal } = useFormat();

/* Data */
const data = ref<Costs.CardHeader>({
  allValue: {
    value: 0,
    increase: "",
  },
  dailyAvg: {
    value: 0,
    increase: "",
  },
  biggerCostDaily: {
    value: 0,
    increase: "",
  },
  economy: {
    value: 0,
    increase: "",
  },
});
const loading = ref(false);

/* Hooks */
onMounted(() => {
  getData();
});

/* Computed */
const cardFormatted = computed(() => {
  return [
    {
      icon: "attach_money",
      backgroundColor: "var(--color-primary)",
      title: "Custo total no período",
      value: formatNumberToReal(data.value.allValue.value),
      increase: data.value.allValue.increase,
    },
    {
      icon: "trending_up",
      backgroundColor: "var(--color-feedback-success)",
      title: "Média diária",
      value: formatNumberToReal(data.value.dailyAvg.value),
      increase: data.value.dailyAvg.increase,
    },
    {
      icon: "credit_card",
      backgroundColor: "var(--color-feedback-warning)",
      title: "Maior custo diário",
      value: formatNumberToReal(data.value.biggerCostDaily.value),
      increase: data.value.biggerCostDaily.increase,
    },
    {
      icon: "trending_down",
      backgroundColor: "var(--color-secondary)",
      title: "Economia Identificada",
      value: formatNumberToReal(data.value.economy.value),
      increase: data.value.economy.increase,
    },
  ];
});

/* Methods */
async function getData() {
  try {
    loading.value = true;
    data.value = await CostsService.getCardHeader();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>
