<template>
  <BaseCard>
    <table class="devices-table">
      <thead>
        <tr>
          <th>Dispositivo</th>
          <th>Usuário</th>
          <th v-if="!isMobile">Plataforma</th>
          <th v-if="!isMobile">Tipo</th>
          <th>Status</th>
          <th v-if="!isMobile">Política</th>
          <th>Custo mensal</th>
          <th v-if="!isMobile">Última atividade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataFormatted" :key="item.device.code">
          <td>
            <section>
              <div class="main-item">{{ item.device.model }}</div>
              <span class="sub-item" v-if="!isMobile">{{
                item.device.code
              }}</span>
            </section>
          </td>
          <td>
            <section>
              <div class="main-item">{{ item.user.name }}</div>
              <span class="sub-item" v-if="!isMobile">{{
                item.user.email
              }}</span>
            </section>
          </td>
          <td v-if="!isMobile">{{ item.device.platform }}</td>
          <td v-if="!isMobile">
            <span class="type-column">{{ item.type }}</span>
          </td>
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
          <td v-if="!isMobile">{{ item.politics }}</td>
          <td>
            <strong>{{ item.monthlyCost }}</strong>
          </td>
          <td v-if="!isMobile">{{ item.lastUpdate }}</td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/components/global/UI/base/BaseCard/BaseCard.vue";
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
      status: generateStatusObject(e.status),
      monthlyCost: formatNumberToReal(e.monthlyCost),
    };
  });
});

/* Methods */
async function getData() {
  try {
    loading.value = true;
    data.value = await DevicesService.getList();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

function generateStatusObject(status: "ACTIVE" | "BLOCKED" | "DISABLED") {
  const statusInfo = {
    ACTIVE: {
      text: "Ativo",
      color: "var(--color-feedback-success)",
    },
    BLOCKED: {
      text: "Bloqueado",
      color: "var(--color-feedback-error)",
    },
    DISABLED: {
      text: "Inativo",
      color: "var(--color-feedback-warning)",
    },
  };
  return statusInfo[status];
}
</script>

<style scoped>
.devices-table {
  width: 100%;
  border-collapse: collapse;
}

.devices-table thead th {
  padding: var(--spacing-2) var(--spacing-3);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-semibold);
  text-align: start;
}

.devices-table tbody td {
  padding: var(--spacing-3);
  color: var(--color-text-main);
  text-align: start;
  border-bottom: 1px solid var(--color-border);
}

.main-item {
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-1);
}

.sub-item {
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.type-column {
  color: var(--color-primary);
  background-color: #c8e8fa;
  padding: var(--spacing-2);
  border-radius: var(--radius-md);
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
  .devices-table thead th {
    font-size: var(--font-size-sm);
  }

  .devices-table tbody td {
    padding-bottom: var(--spacing-1);
    padding-top: var(--spacing-1);
    font-size: var(--font-size-sm);
  }

  .main-item {
    margin-bottom: 0;
    font-weight: var(--font-weight-medium);
  }

  .sub-item {
    font-size: var(--font-size-xs);
  }

  .type-column {
    padding: var(--spacing-1);
  }
}
</style>
