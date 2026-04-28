<template>
  <BaseCard>
    <h1 class="title">Dispositivos recentes</h1>

    <table class="recent-devices-table">
      <thead v-if="!isMobile">
        <tr>
          <th>Usuário</th>
          <th>Dispositivo</th>
          <th>Plano</th>
          <th>Custo Mensal</th>
          <th>Status</th>
          <th>Última atividade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataFormatted" :key="item.device.code">
          <td>
            <div
              style="display: flex; align-items: center; gap: var(--spacing-3)"
            >
              <figure
                class="icon-item material-symbols-outlined"
                v-if="!isMobile"
              >
                person
              </figure>
              <section>
                <div class="main-item">{{ item.user.name }}</div>
                <span class="sub-item" v-if="!isMobile">{{
                  item.user.email
                }}</span>
              </section>
            </div>
          </td>
          <td>
            <div
              style="display: flex; align-items: center; gap: var(--spacing-3)"
            >
              <figure
                class="icon-item material-symbols-outlined"
                v-if="!isMobile"
              >
                mobile_2
              </figure>
              <section>
                <div class="main-item">{{ item.device.model }}</div>
                <span class="sub-item">{{ item.device.code }}</span>
              </section>
            </div>
          </td>
          <td v-if="!isMobile">{{ item.politics }}</td>
          <td>{{ item.monthlyCost }}</td>
          <td>
            <div class="status-pill">
              <div
                class="dot"
                v-if="!isMobile"
                :style="{ backgroundColor: item.status.color }"
              />
              <span>{{ item.status.text }}</span>
            </div>
          </td>
          <td v-if="!isMobile">{{ item.lastUpdate }}</td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/components/global/UI/base/BaseCard.vue";
import useFormat from "@/composables/useFormat";
import useMobileApp from "@/composables/useMobileApp";
import DevicesService from "@/services/DevicesService";
import { computed, onMounted, ref } from "vue";

/* Composables */
const { isMobile } = useMobileApp();

/* Composables */
const { formatNumberToReal } = useFormat();

/* Data */
const data = ref<Device.Device[]>([]);
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
      monthlyCost: formatNumberToReal(e.monthlyCost),
      status: generateStatusObject("ACTIVE"),
    };
  });
});

/* Methods */
async function getData() {
  try {
    loading.value = true;
    data.value = await DevicesService.getRecentList();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

function generateStatusObject(status: "ACTIVE" | "BLOCKED" | "WARNING") {
  const statusInfo = {
    ACTIVE: {
      text: "Ativo",
      color: "var(--color-feedback-success)",
    },
    BLOCKED: {
      text: "Ativo",
      color: "var(--color-feedback-error)",
    },
    WARNING: {
      text: "Ativo",
      color: "var(--color-feedback-warning)",
    },
  };
  return statusInfo[status];
}
</script>

<style scoped>
.title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2);
  color: var(--color-text-main);
}

.filters {
  display: flex;
  gap: var(--spacing-4);
}

.recent-devices-table {
  width: 100%;
  margin-top: var(--spacing-2);
  border-collapse: collapse;
}

.recent-devices-table thead th {
  padding: var(--spacing-2);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
  text-align: start;
}

.recent-devices-table tbody td {
  padding: var(--spacing-2);
  color: var(--color-text-main);
  text-align: start;
  border-bottom: 1px solid var(--color-border);
}

.recent-devices-table .icon-item {
  color: var(--color-primary);
}

.recent-devices-table .main-item {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-1);
}

.recent-devices-table .sub-item {
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.status-pill {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
}

@media (max-width: 1366px) {
  .title {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-2);
  }

  .recent-devices-table thead th {
    padding: var(--spacing-1);
  }

  .recent-devices-table tbody td {
    padding: var(--spacing-1);
  }
}

@media (max-width: 768px) {
  .title {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-2);
  }

  .recent-devices-table tbody td {
    padding: var(--spacing-1);
    font-size: var(--font-size-xs);
  }
}
</style>
