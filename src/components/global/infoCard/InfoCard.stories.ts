import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

import InfoCard from "./InfoCard.vue";

const sampleItems = [
  { value: "sp", label: "São Paulo" },
  { value: "rj", label: "Rio de Janeiro" },
  { value: "mg", label: "Minas Gerais" },
  { value: "pr", label: "Paraná" },
];

const meta = {
  title: "UI/InfoCard",
  component: InfoCard,
  tags: ["autodocs"],
  render: (args) => ({
    components: { InfoCard },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 280px; padding: 8px; max-width: 360px">
        <InfoCard
          :icon="args.icon"
          :icon-color="args.iconColor"
          :background-color="args.backgroundColor"
          :title="args.title"
          :value="args.value"
          :text-footer="args.textFooter"
        />
      </div>
    `,
  }),
  args: {
    icon: "mobile_2",
    iconColor: "white",
    backgroundColor: "var(--color-primary)",
    title: "Exemplo",
    value: "123456",
    textFooter: "+4.5",
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
