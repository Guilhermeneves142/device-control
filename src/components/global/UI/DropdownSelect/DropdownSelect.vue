<template>
  <div class="select-wrapper" ref="dropdown-select">
    <BaseInput
      readonly
      v-model="selectedText"
      :placeholder="props.placeholder"
      @click="switchStateDropdown()"
      :disabled="props.disabled"
    />

    <span class="material-symbols-outlined chevron-icon">
      arrow_drop_down
    </span>
    <div class="list-items" v-if="isActive">
      <BaseInput
        class="search-select-input"
        v-model="search"
        preppend-icon="search"
        placeholder="Buscar..."
        :disabled="props.disabled"
      />
      <div
        v-for="item in itemsToShow"
        class="select-item"
        :class="{ selected: item.selected }"
        @click="updateItemsSelected(item)"
      >
        <span>{{ item.text }} </span>
        <span class="material-symbols-outlined check-icon" v-if="item.selected">
          check
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";

/* Components */
import BaseInput from "@/components/global/UI/base/BaseInput/BaseInput.vue";
import { onClickOutside } from "@vueuse/core";

/* Types */
interface ItemList {
  value: any;
  text: string;
  selected: boolean;
}

/* Emits */
const emit = defineEmits<{
  (e: "itemClicked", value: string | number | object): void;
}>();

/* Refs */
const dropdownSelectRef = useTemplateRef("dropdown-select");

/* Composables */
onClickOutside(dropdownSelectRef, (_event) => (isActive.value = false));

/* Props */
interface Props {
  icon?: string;
  items: { [x: string]: string | number }[];
  itemValue: string;
  itemText: string;
  placeholder: string;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

/* Models */
const model = defineModel<number | string | (string | number)[] | null>({
  required: true,
});

/* Data */
const isActive = ref(false);
const search = ref("");

/* Computed */
const selectedText = computed(() => {
  if (Array.isArray(model.value))
    return model.value.length
      ? `${model.value.length} items selecionados`
      : null;
  return model.value;
});

const itemsToShow = computed(() => {
  return props.items
    .map((e) => {
      const value = e[props.itemValue];
      const text = String(e[props.itemText]);
      const selected = getModelValues().includes(value);
      return {
        value,
        text,
        selected,
      };
    })
    .filter((e) => {
      return (
        !search.value ||
        e.text.toLowerCase().includes(search.value.toLowerCase())
      );
    });
});

/* Methods */
function switchStateDropdown() {
  if (!props.disabled) {
    isActive.value = !isActive.value;
  }
}

function getModelValues() {
  if (!model.value) return [];

  return Array.isArray(model.value) ? model.value : [model.value];
}

function updateItemsSelected(itemList: ItemList) {
  if (getModelValues().includes(itemList.value)) removeItem(itemList);
  else insertItem(itemList);
}

function removeItem(itemList: ItemList) {
  if (Array.isArray(model.value))
    model.value = model.value.filter((item: any) => item !== itemList.value);
  else model.value = null;
}

function insertItem(itemList: ItemList) {
  const valueToInsert = itemList.value;
  if (Array.isArray(model.value)) model.value.push(valueToInsert);
  else model.value = valueToInsert;
}
</script>

<style scoped>
.select-group {
  height: 78px;
}

.select-wrapper {
  position: relative;
  height: fit-content;
  cursor: pointer;
}

.chevron-icon {
  position: absolute;
  right: 8px;
  top: 20px;
  transform: translateY(-50%);
  transition: transform 0.3s ease;
  pointer-events: none;
}

.isActive {
  height: 60px !important;
  pointer-events: none;
}

.isActive .chevron-icon {
  transform: translateY(-50%) rotate(180deg);
}

.list-items {
  pointer-events: auto;
  position: absolute;
  background-color: var(--color-surface);
  box-shadow: 0 3px 5px rgba(156, 163, 175, 0.5);
  border-radius: var(--radius-sm);
  max-height: 15rem;
  overflow-y: auto;
  z-index: 999;
}

.select-item {
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.select-item:hover {
  background-color: var(--color-border);
  cursor: pointer;
}

.select-item.selected {
  background-color: var(--color-border);
}

.check-icon {
  height: 20px;
  color: var(--color-primary);
}

.search-select-input {
  margin: var(--spacing-1);
}

.dropdown-options {
  display: flex;
  justify-content: space-between;
}

.left {
  margin-right: auto;
}

.right {
  margin-left: auto;
}

.clear-select {
  text-decoration: underline;
  cursor: pointer;
  font-size: 10.5px;
}
</style>
