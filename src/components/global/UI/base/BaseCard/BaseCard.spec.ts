import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";

import BaseCard from "./BaseCard.vue";

describe("BaseCard", () => {
  it("renderiza o slot dentro do contentor .base-card", () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: h("p", { class: "inner" }, "Conteúdo"),
      },
    });
    expect(wrapper.find(".base-card").exists()).toBe(true);
    expect(wrapper.find(".inner").text()).toBe("Conteúdo");
  });
});
