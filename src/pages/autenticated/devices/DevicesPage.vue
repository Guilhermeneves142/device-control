<template>
  <div>
    <CardsInfo />
    <DevicesTable
      style="margin-top: 20px; width: 100%; box-sizing: border-box"
    />
  </div>
</template>

<script setup lang="ts">
import CardsInfo from "./components/CardsInfo.vue";
import DevicesTable from "./components/DevicesTable.vue";
</script>
