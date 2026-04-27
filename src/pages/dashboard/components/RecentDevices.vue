<template>
  <BaseCard>
    <h1 class="title">Dispositivos recentes</h1>

    <table class="recent-devices-table">
      <thead>
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
        <tr v-for="item in data" :key="item.name">
          <td>
            <div
              style="display: flex; align-items: center; gap: var(--spacing-3)"
            >
              <figure class="icon-item material-symbols-outlined">
                person
              </figure>
              <section>
                <div class="main-item">{{ item.name }}</div>
                <span class="sub-item">{{ item.email }}</span>
              </section>
            </div>
          </td>
          <td>
            <div
              style="display: flex; align-items: center; gap: var(--spacing-3)"
            >
              <figure class="icon-item material-symbols-outlined">
                mobile_2
              </figure>
              <section>
                <div class="main-item">{{ item.device.model }}</div>
                <span class="sub-item">{{ item.device.phoneNumber }}</span>
              </section>
            </div>
          </td>
          <td>{{ item.plan }}</td>
          <td>{{ item.monthlyCost }}</td>
          <td>
            <div class="status-pill">
              <div
                class="dot"
                :style="{ backgroundColor: item.status.color }"
              />
              <span>{{ item.status.text }}</span>
            </div>
          </td>
          <td>{{ item.lastUpdate }}</td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from "@/components/global/UI/base/BaseCard.vue";
import useFormat from "@/composables/useFormat";
import { computed } from "vue";

/* Composables */
const { formatNumberToReal } = useFormat();

/* Computed */
const data = computed(() => {
  return [
    {
      name: "Rafael Andrade",
      email: "rafael.andrade@empresa.com",
      device: {
        model: "IPhone 14 Pro",
        phoneNumber: "5511999990001",
      },
      plan: "Corporativo 20GB",
      monthlyCost: formatNumberToReal(56.8),
      status: generateStatusObject("ACTIVE"),
      lastUpdate: "27/05/2026 10:30",
    },
    {
      name: "Bruce Wayne",
      email: "bruce.wayne@empresa.com",
      device: {
        model: "IPhone 16 Pro",
        phoneNumber: "5511999990001",
      },
      plan: "Corporativo 20GB",
      monthlyCost: formatNumberToReal(196.8),
      status: generateStatusObject("ACTIVE"),
      lastUpdate: "26/05/2026 10:30",
    },
    {
      name: "Dieni Kielermann",
      email: "dieni.kielermann@empresa.com",
      device: {
        model: "Samsung S24",
        phoneNumber: "5511999990001",
      },
      plan: "Corporativo 10GB",
      monthlyCost: formatNumberToReal(296.8),
      status: generateStatusObject("WARNING"),
      lastUpdate: "25/05/2026 10:30",
    },
    {
      name: "Rayque Cuevas",
      email: "rayque.cuevas@empresa.com",
      device: {
        model: "Samsung S23+",
        phoneNumber: "5511999990001",
      },
      plan: "Corporativo 50GB",
      monthlyCost: formatNumberToReal(106.8),
      status: generateStatusObject("BLOCKED"),
      lastUpdate: "24/05/2026 10:30",
    },
    {
      name: "Rafaela Lopes",
      email: "rafaela.lopes@empresa.com",
      device: {
        model: "IPhone 14 Pro",
        phoneNumber: "5511999990001",
      },
      plan: "Corporativo 20GB",
      monthlyCost: formatNumberToReal(19.8),
      status: generateStatusObject("ACTIVE"),
      lastUpdate: "23/05/2026 10:30",
    },
  ];
});

/* Methods */
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
</style>
