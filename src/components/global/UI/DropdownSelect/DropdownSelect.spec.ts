import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";

import DropdownSelect from "./DropdownSelect.vue";

const items = [
  { id: 1, name: "Alpha" },
  { id: 2, name: "Beta" },
];

function mountSelect(modelValue: number | string | (number | string)[] | null) {
  return mount(DropdownSelect, {
    props: {
      items,
      itemValue: "id",
      itemText: "name",
      placeholder: "Escolhe",
      modelValue,
    },
  });
}

describe("DropdownSelect", () => {
  it("mostra o placeholder no primeiro input quando não há seleção", () => {
    const wrapper = mountSelect(null);
    const first = wrapper.findAll("input")[0];
    expect(first.attributes("placeholder")).toBe("Escolhe");
  });

  it("abre a lista ao clicar no campo e permite escolher um valor", async () => {
    const wrapper = mountSelect(null);
    await wrapper.findAll("input")[0].trigger("click");
    await nextTick();
    expect(wrapper.find(".list-items").exists()).toBe(true);
    const options = wrapper.findAll(".select-item");
    expect(options).toHaveLength(2);
    await options[0].trigger("click");
    await nextTick();
    const updates = wrapper.emitted("update:modelValue");
    expect(updates?.at(-1)).toEqual([1]);
  });

  it("não abre a lista quando disabled", async () => {
    const wrapper = mount(DropdownSelect, {
      props: {
        items,
        itemValue: "id",
        itemText: "name",
        placeholder: "X",
        disabled: true,
        modelValue: null,
      },
    });
    await wrapper.findAll("input")[0].trigger("click");
    await nextTick();
    expect(wrapper.find(".list-items").exists()).toBe(false);
  });

  it("filtra opções pelo campo de pesquisa", async () => {
    const wrapper = mountSelect(null);
    await wrapper.findAll("input")[0].trigger("click");
    await nextTick();
    const search = wrapper.findAll("input")[1];
    await search.setValue("Bet");
    await nextTick();
    const options = wrapper.findAll(".select-item");
    expect(options).toHaveLength(1);
    expect(options[0].text()).toContain("Beta");
  });

  it("em modo múltiplo atualiza o texto após selecionar um item", async () => {
    const wrapper = mountSelect([]);
    await wrapper.findAll("input")[0].trigger("click");
    await nextTick();
    await wrapper.findAll(".select-item")[0].trigger("click");
    await nextTick();
    const triggerInput = wrapper.findAll("input")[0]
      .element as HTMLInputElement;
    expect(triggerInput.value).toBe("1 items selecionados");
  });
});
