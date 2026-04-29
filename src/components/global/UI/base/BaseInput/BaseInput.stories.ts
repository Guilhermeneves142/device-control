import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

import BaseInput from "./BaseInput.vue";

const meta = {
  title: "UI/Input",
  component: BaseInput,
  tags: ["autodocs"],
  render: (args) => ({
    components: { BaseInput },
    setup() {
      const value = ref<string | number | null>("");
      return { args, value };
    },
    template: `
      <div style="max-width: 360px">
        <BaseInput
          v-model="value"
          :id="args.id"
          :type="args.type"
          :placeholder="args.placeholder"
          :readonly="args.readonly"
          :disabled="args.disabled"
        />
      </div>
    `,
  }),
  args: {
    type: "text",
    placeholder: "Digite aqui…",
    readonly: false,
    disabled: false,
  },
} satisfies Meta<typeof BaseInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Campo desabilitado",
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
    placeholder: "Somente leitura — clique no campo",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Senha",
  },
};
