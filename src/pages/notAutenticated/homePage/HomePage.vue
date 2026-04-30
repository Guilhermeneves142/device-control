<template>
  <div>
    <PreviewDashboard />
    <ResourcesSection class="group" />
    <WhySection />
  </div>
</template>

<script setup lang="ts">
import PreviewDashboard from "./components/PreviewDashboard.vue";
import ResourcesSection from "./components/ResourcesSection.vue";
import WhySection from "./components/WhySection.vue";
</script>

<style scoped>
.group {
  margin: var(--spacing-20) var(--spacing-0);
}
</style>
