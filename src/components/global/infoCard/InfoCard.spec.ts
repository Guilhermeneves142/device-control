import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { ref } from "vue";

vi.mock("@/composables/useMobileApp", () => ({
  default: () => ({
    isMobile: ref(false),
  }),
}));

import InfoCard from "./InfoCard.vue";

const baseProps = () => ({
  icon: "devices",
  iconColor: "#ffffff",
  backgroundColor: "#1e6fea",
  title: "Total de dispositivos",
  value: 42,
  textFooter: "8",
});

describe("InfoCard", () => {
  it("renderiza título, valor e texto do rodapé", () => {
    const wrapper = mount(InfoCard, { props: baseProps() });
    expect(wrapper.text()).toContain("Total de dispositivos");
    expect(wrapper.text()).toContain("42");
    expect(wrapper.text()).toContain("8");
    expect(wrapper.text()).toContain("vs periodo anterior");
  });

  it("mostra o ícone quando não está em mobile", () => {
    const wrapper = mount(InfoCard, { props: baseProps() });
    const figure = wrapper.find("figure.info-card-icon");
    expect(figure.exists()).toBe(true);
    expect(figure.text()).toContain("devices");
  });
});
