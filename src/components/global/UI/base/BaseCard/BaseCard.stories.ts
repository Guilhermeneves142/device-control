import type { Meta, StoryObj } from "@storybook/vue3-vite";

import BaseCard from "./BaseCard.vue";

const meta = {
  title: "UI/Card",
  component: BaseCard,
  tags: ["autodocs"],
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        <p style="margin: 0; max-width: 280px">
          Conteúdo dentro do card. Útil para agrupar informações e ações.
        </p>
      </BaseCard>
    `,
  }),
};

export const WithHeader: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <BaseCard>
        <h3 style="margin: 0 0 12px; font-size: 1.125rem">Resumo</h3>
        <p style="margin: 0; font-size: 0.875rem; opacity: 0.85">
          Exemplo de card com título e texto.
        </p>
      </BaseCard>
    `,
  }),
};
