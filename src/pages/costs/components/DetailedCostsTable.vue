<template>
  <BaseCard>
    <h1 class="title">Maiores custos por usuário</h1>

    <table class="detailed-costs-table">
      <thead>
        <tr>
          <th>Departamento</th>
          <th>Categoria</th>
          <th style="text-align: center">Custo no periodo(R$)</th>
          <th style="text-align: center">% do total</th>
          <th style="text-align: center">Variação vs anterior</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.department">
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
          <td style="text-align: center">{{ item.percent }}</td>
          <td style="text-align: center">{{ item.variant }}</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td></td>
          <td style="text-align: center">
            <strong>R$ 235.711,50</strong>
          </td>
          <td style="text-align: center">
            <strong>100% </strong>
          </td>
          <td style="text-align: center">+3.7%</td>
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
      department: "Comercial",
      category: "Voz",
      value: formatNumberToReal(56420.3),
      icon: {
        color: "var(--color-primary)",
        icon: "call",
      },
      percent: "20.9%",
      variant: "+5.6%",
    },
    {
      department: "Tecnologia",
      category: "Dados móveis",
      value: formatNumberToReal(54870.4),
      icon: {
        color: "var(--color-feedback-success)",
        icon: "wifi",
      },
      percent: "19.7%",
      variant: "-2.1%",
    },
    {
      department: "Operações",
      category: "Dispositivos",
      value: formatNumberToReal(42310.2),
      icon: {
        color: "var(--color-secondary)",
        icon: "mobile_2",
      },
      percent: "15.2%",
      variant: "+8.4%",
    },
    {
      department: "Administrativo",
      category: "Voz",
      value: formatNumberToReal(37650.1),
      icon: {
        color: "var(--color-primary)",
        icon: "call",
      },
      percent: "13.5%",
      variant: "-1.3%",
    },
    {
      department: "Marketing",
      category: "Dados móveis",
      value: formatNumberToReal(32120.5),
      icon: {
        color: "var(--color-feedback-success)",
        icon: "wifi",
      },
      percent: "11.5%",
      variant: "-3.8%",
    },
    {
      department: "Financeiro",
      category: "SMS",
      value: formatNumberToReal(12340.0),
      icon: {
        color: "var(--color-feedback-warning)",
        icon: "call",
      },
      percent: "4.4%",
      variant: "+6.7%",
    },
  ];
});
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
</style>
