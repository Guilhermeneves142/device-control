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
import DevicesService from "@/services/DevicesService";
import { computed, onMounted, ref } from "vue";

/* Data */
const data = ref<Device.CardHeader>({
  totalDevices: {
    value: 0,
    increase: "",
  },
  active: {
    value: 0,
    increase: "",
  },
  blocked: {
    value: 0,
    increase: "",
  },
  disabled: {
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
      icon: "check",
      backgroundColor: "var(--color-feedback-success)",
      title: "Ativos",
      ...data.value.active,
    },
    {
      icon: "lock",
      backgroundColor: "var(--color-feedback-warning)",
      title: "Bloqueados",
      ...data.value.blocked,
    },
    {
      icon: "phone_disabled",
      backgroundColor: "var(--color-secondary)",
      title: "Inativos",
      ...data.value.disabled,
    },
  ];
});

/* Methods */
async function getData() {
  try {
    loading.value = true;
    data.value = await DevicesService.getCardHeader();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
</script>
