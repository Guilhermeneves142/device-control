import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import BaseInput from "./BaseInput.vue";

describe("BaseInput", () => {
  it("aplica placeholder e tipo ao input", () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: "",
        placeholder: "O teu nome",
        type: "email",
      },
    });
    const input = wrapper.find("input");
    expect(input.attributes("placeholder")).toBe("O teu nome");
    expect(input.attributes("type")).toBe("email");
  });

  it("emite update:modelValue ao alterar o texto", async () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: "" },
    });
    await wrapper.find("input").setValue("abc");
    const ev = wrapper.emitted("update:modelValue");
    expect(ev).toBeTruthy();
    expect(ev!.at(-1)).toEqual(["abc"]);
  });

  it("reflete modelValue inicial", () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: "inicial" },
    });
    const el = wrapper.find("input").element as HTMLInputElement;
    expect(el.value).toBe("inicial");
  });

  it("define disabled e readonly no input", () => {
    const wrapper = mount(BaseInput, {
      props: {
        modelValue: "x",
        disabled: true,
        readonly: true,
      },
    });
    const input = wrapper.find("input");
    expect(input.element.disabled).toBe(true);
    expect((input.element as HTMLInputElement).readOnly).toBe(true);
  });
});
