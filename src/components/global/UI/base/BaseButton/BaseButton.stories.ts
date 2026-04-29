import type { Meta, StoryObj } from "@storybook/vue3-vite";

import BaseButton from "./BaseButton.vue";

const meta = {
  title: "UI/Button",
  component: BaseButton,
  tags: ["autodocs"],
  args: {
    disabled: false,
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    default: "Teste",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    default: "Teste",
  },
} as Story;
