<template>
  <div class="resources-section">
    <section class="title-group">
      <h1>RECURSOS</h1>
      <h2>Tudo que você precisa para gerenciar melhor</h2>
      <h3>
        Uma plataforma completa para simplificar a gestão e aumentar o controle
        da sua operação.
      </h3>
    </section>
    <section class="cards-group">
      <ResourceCard
        icon="mobile_2"
        title="Gestão de dispositivos"
        background-icon="var(--color-primary)"
        text="Cadastre, configure e gerencie todos os dispositivos da empresa em
            um só lugar"
      />
      <ResourceCard
        icon="attach_money"
        title="Controle de custos"
        background-icon="var(--color-feedback-success)"
        text="Acompanhe gastos em tempo real e identifique oportunidades de
            economia."
      />
      <ResourceCard
        icon="warning"
        title="Alertas inteligentes"
        background-icon="var(--color-feedback-warning)"
        text="Receba notificações sobre anomalias, limites e eventos
            importantes."
      />
      <ResourceCard
        icon="bar_chart_4_bars"
        title="Relatórios completos"
        background-icon="var(--color-secondary)"
        text="Relatórios detalhados para análises estratégicas e tomadas de
            decisão"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import ResourceCard from "./ResourceCard.vue";
</script>

<style scoped>
.title-group {
  text-align: center;
}

.title-group h1 {
  color: var(--color-primary);
  font-size: var(--font-size-md);
}
.title-group h2 {
  color: var(--color-text-main);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-relaxed);
}
.title-group h3 {
  color: var(--color-text-secondary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
}

.cards-group {
  display: flex;
  justify-content: center;
  gap: var(--spacing-7);
  margin-top: var(--spacing-10);
}
</style>
