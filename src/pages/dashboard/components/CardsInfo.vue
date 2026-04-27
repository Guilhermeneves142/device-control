<template>
  <div style="display: flex; gap: 20px; justify-content: space-around">
    <InfoCard
      v-for="item in cardFormatted"
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
import DashboardService from "@/services/DashboardService";
import { computed, onMounted, ref } from "vue";

/* Composables */
const { formatNumberToReal } = useFormat();

/* Data */
const data = ref<Dashboard.CardHeader>({
  totalDevices: {
    value: 0,
    increase: "",
  },
  monthlyCost: {
    value: 0,
    increase: "",
  },
  alertDevices: {
    value: 0,
    increase: "",
  },
  activeUsers: {
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
      icon: "mobile_2",
      backgroundColor: "var(--color-primary)",
      title: "Total de dispositivos",
      ...data.value.totalDevices,
    },
    {
      icon: "attach_money",
      backgroundColor: "var(--color-feedback-success)",
      title: "Custo mensal total",
      value: formatNumberToReal(data.value.monthlyCost.value),
      increase: data.value.monthlyCost.increase,
    },
    {
      icon: "warning",
      backgroundColor: "var(--color-feedback-warning)",
      title: "Dispositivos com alerta",
      ...data.value.alertDevices,
    },
    {
      icon: "group",
      backgroundColor: "var(--color-secondary)",
      title: "Usuários ativos",
      ...data.value.activeUsers,
    },
  ];
});

/* Methods */
async function getData() {
  try {
    loading.value = true;
    data.value = await DashboardService.getCardHeader();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>
