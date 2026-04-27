<template>
  <BaseCard>
    <table class="devices-table">
      <thead>
        <tr>
          <th>Dispositivo</th>
          <th>Usuário</th>
          <th>Plataforma</th>
          <th>Tipo</th>
          <th>Status</th>
          <th>Política</th>
          <th>Custo mensal</th>
          <th>Última atividade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.device.code">
          <td>
            <section>
              <div class="main-item">{{ item.device.model }}</div>
              <span class="sub-item">{{ item.device.code }}</span>
            </section>
          </td>
          <td>
            <section>
              <div class="main-item">{{ item.user.name }}</div>
              <span class="sub-item">{{ item.user.email }}</span>
            </section>
          </td>
          <td>{{ item.device.platform }}</td>
          <td>
            <span class="type-column">{{ item.type }}</span>
          </td>
          <td>
            <div class="status-pill">
              <div
                class="dot"
                :style="{ backgroundColor: item.status.color }"
              />
              <span>{{ item.status.text }}</span>
            </div>
          </td>
          <td>{{ item.politics }}</td>
          <td>
            <strong>{{ item.monthlyCost }}</strong>
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
      device: {
        model: "IPhone 14 Pro",
        code: "Serial: 123 231 231",
        platform: "iOS 17.4",
      },
      user: {
        name: "Rafael Andrade",
        email: "rafael.andrade@empresa.com",
      },
      status: {
        color: "var(--color-feedback-success)",
        text: "Ativo",
      },
      type: "SmartPhone",
      politics: "Padrão corporativo",
      monthlyCost: formatNumberToReal(196.8),
      lastUpdate: "26/04/2026 22:37",
    },
    {
      device: {
        model: "Samsung Galaxy S23",
        code: "Serial: 123 432 431",
        platform: "Android 14",
      },
      user: {
        name: "Bruce Wayne",
        email: "bruce.wayne@empresa.com",
      },
      status: {
        color: "var(--color-feedback-success)",
        text: "Ativo",
      },
      type: "Notebook",
      politics: "Padrão corporativo",
      monthlyCost: formatNumberToReal(128.5),
      lastUpdate: "26/04/2026 22:37",
    },
    {
      device: {
        model: 'MacBook Pro 14"',
        code: "Serial: 123 231 231",
        platform: "macOS 14.3",
      },
      user: {
        name: "Dieni Kielermann",
        email: "dieni.kielermann@empresa.com",
      },
      status: {
        color: "var(--color-feedback-success)",
        text: "Ativo",
      },
      type: "Notebook",
      politics: "Acesso Restrito",
      monthlyCost: formatNumberToReal(89.9),
      lastUpdate: "26/04/2026 22:37",
    },
    {
      device: {
        model: "iPad Air (5ª geração)",
        code: "Serial: 123 231 231",
        platform: "iOS 17.4",
      },
      user: {
        name: "Rayque Cuevas",
        email: "rayque.cuevas@empresa.com",
      },
      status: {
        color: "var(--color-feedback-error)",
        text: "Bloqueado",
      },
      type: "Tablet",
      politics: "Padrão corporativo",
      monthlyCost: formatNumberToReal(0.0),
      lastUpdate: "26/04/2026 22:37",
    },
    {
      device: {
        model: "Samsung Galaxy A54",
        code: "Serial: 123 231 231",
        platform: "Android 14",
      },
      user: {
        name: "Rafaela Lopes",
        email: "rafaela.lopes@empresa.com",
      },
      status: {
        color: "var(--color-feedback-success)",
        text: "Ativo",
      },
      type: "SmartPhone",
      politics: "Padrão corporativo",
      monthlyCost: formatNumberToReal(128.5),
      lastUpdate: "26/04/2026 22:37",
    },
    {
      device: {
        model: "Dell Latitude 5440",
        code: "Serial: 123 231 231",
        platform: "Windows 11",
      },
      user: {
        name: "Thiago Correa",
        email: "thiago.correa@empresa.com",
      },
      status: {
        color: "var(--color-disabled)",
        text: "Inativo",
      },
      type: "Notebook",
      politics: "Acesso Restrito",
      monthlyCost: formatNumberToReal(0.0),
      lastUpdate: "26/04/2026 22:37",
    },
    {
      device: {
        model: "Lenovo ThinkPad E14",
        code: "Serial: 123 231 231",
        platform: "Windows 10",
      },
      user: {
        name: "Camila Nascimento",
        email: "camila.nascimento@empresa.com",
      },
      status: {
        color: "var(--color-feedback-success)",
        text: "Ativo",
      },
      type: "Notebook",
      politics: "Padrão corporativo",
      monthlyCost: formatNumberToReal(196.8),
      lastUpdate: "26/04/2026 22:37",
    },
    {
      device: {
        model: "IPhone 14 Pro",
        code: "Serial: 123 231 231",
        platform: "iOS 16.6",
      },
      user: {
        name: "Rafael Ribeiro",
        email: "rafael.ribeiro@empresa.com",
      },
      status: {
        color: "var(--color-feedback-success)",
        text: "Ativo",
      },
      type: "SmartPhone",
      politics: "Padrão corporativo",
      monthlyCost: formatNumberToReal(89.9),
      lastUpdate: "26/04/2026 22:37",
    },
    {
      device: {
        model: "IPad Mini (6ª geração)",
        code: "Serial: 123 231 231",
        platform: "iOS 17.4",
      },
      user: {
        name: "Juliete Poletti",
        email: "juliete.poletti@empresa.com",
      },
      status: {
        color: "var(--color-feedback-error)",
        text: "Bloqueado",
      },
      type: "Tablet",
      politics: "Acesso Restrito",
      monthlyCost: formatNumberToReal(0.0),
      lastUpdate: "26/04/2026 22:37",
    },
  ];
});
</script>

<style scoped>
.devices-table {
  width: 100%;
  border-collapse: collapse;
}

.devices-table thead th {
  padding: var(--spacing-2);
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
</style>
