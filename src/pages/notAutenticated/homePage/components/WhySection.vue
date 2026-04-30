<template>
  <div class="why-section">
    <section class="title-group">
      <h1>POR QUE ESCOLHER A DEVICE CTRL?</h1>
      <h2>Resultados que fazem a diferença</h2>
      <h3>
        Mais que uma plataforma, uma parceira estratégica para o crescimento do
        seu negócio.
      </h3>
    </section>
    <div class="cards-group">
      <WhyCard
        icon="verified_user"
        title="Segurança total"
        color-icon="var(--color-primary)"
        text="Seus dados e dispositivos protegidos com tecnologia de ponta."
      />
      <WhyCard
        icon="bolt"
        title="Mais produtividade"
        color-icon="var(--color-feedback-success)"
        text="Automatize processos e libere tempo para o que realmente importa."
      />
      <WhyCard
        icon="attach_money"
        title="Segurança total"
        color-icon="var(--color-secondary)"
        text="Economia real com controle inteligente e gestão eficiente de recursos."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import WhyCard from "./WhyCard.vue";
</script>

<style scoped>
.why-section {
  display: flex;
}

.title-group {
  margin-right: var(--spacing-7);
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
}
</style>
