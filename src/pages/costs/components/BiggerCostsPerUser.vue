<template>
  <BaseCard>
    <h1 class="title">Maiores custos por usuário</h1>
    <table class="main-info-table">
      <tbody>
        <tr v-for="item in data" :key="item.name">
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
import { computed } from "vue";

/* Composables */
const { formatNumberToReal } = useFormat();

/* Computed */
const data = computed(() => {
  return [
    {
      name: "Rafael Andrade",
      value: formatNumberToReal(1245.8),
    },
    {
      name: "Bruce Wayne",
      value: formatNumberToReal(1120.4),
    },
    {
      name: "Dieni Kielermann",
      value: formatNumberToReal(987.3),
    },
    {
      name: "Rayque Cuevas",
      value: formatNumberToReal(865.2),
    },
    {
      name: "Rafaela Lopes",
      value: formatNumberToReal(754.1),
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
</style>
