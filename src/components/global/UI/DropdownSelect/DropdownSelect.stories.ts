import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

import DropdownSelect from "./DropdownSelect.vue";

const sampleItems = [
  { value: "sp", label: "São Paulo" },
  { value: "rj", label: "Rio de Janeiro" },
  { value: "mg", label: "Minas Gerais" },
  { value: "pr", label: "Paraná" },
];

const meta = {
  title: "UI/DropdownSelect",
  component: DropdownSelect,
  tags: ["autodocs"],
  render: (args) => ({
    components: { DropdownSelect },
    setup() {
      const selected = ref<
        string | number | (string | number)[] | null
      >(args.modelValue ?? null);
      return { args, selected };
    },
    template: `
      <div style="min-height: 280px; padding: 8px; max-width: 360px">
        <DropdownSelect
          v-model="selected"
          :items="args.items"
          :item-value="args.itemValue"
          :item-text="args.itemText"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    `,
  }),
  args: {
    items: sampleItems,
    itemValue: "value",
    itemText: "label",
    placeholder: "Selecione um estado",
    disabled: false,
    modelValue: null as string | number | null,
  },
} satisfies Meta<typeof DropdownSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSelection: Story = {
  args: {
    modelValue: "mg",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    modelValue: "sp",
    placeholder: "Selecione (desabilitado)",
  },
};

export const Multiple: Story = {
  args: {
    modelValue: [] as (string | number)[],
    placeholder: "Selecione um ou mais estados",
  },
};
