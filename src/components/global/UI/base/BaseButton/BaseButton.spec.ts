import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import BaseButton from "./BaseButton.vue";

describe("BaseButton", () => {
  it("renderiza o conteúdo do slot", () => {
    const wrapper = mount(BaseButton, {
      slots: { default: "Salvar" },
    });
    expect(wrapper.text()).toBe("Salvar");
  });

  it("aplica disabled ao botão", () => {
    const wrapper = mount(BaseButton, {
      props: { disabled: true },
      slots: { default: "Indisponível" },
    });
    expect(wrapper.props("disabled")).toBe(true);
    expect(wrapper.find("button").element.disabled).toBe(true);
  });
});
