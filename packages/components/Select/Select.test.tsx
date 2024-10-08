import { rAF } from "@hr-element/utils";
import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import { SELECT_CTX_KEY } from "./constants";

import type { SelectOptionProps } from "./types";

import Option from "./Option.vue";
import Select from "./Select.vue";

describe("Select", () => {
  test("Select renders with default props", async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: "",
        options: [{ value: "1", label: "option 1" }],
      },
    });

    wrapper.find("input").trigger("click");

    await rAF();
    expect(wrapper.text()).toContain("option 1");
  });

  test("selects an option", async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: "",
        options: [{ value: "1", label: "option 1" }],
      },
    });

    wrapper.find("input").trigger("click");

    await rAF();
    const option = wrapper.findAll("li").at(0);
    await option?.trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"]);
  });

  test("Option emits an event on click", async () => {
    const ctx = {
      handleSelect: vi.fn(),
      selectStates: {
        selectedOption: null,
      },
      renderLabel: (props: SelectOptionProps) => `label:${props.label}`,
    };
    const wrapper = mount(Option, {
      props: {
        value: "1",
        label: "option 1",
      },
      global: {
        provide: {
          [SELECT_CTX_KEY as any]: ctx,
        },
      },
    });

    await wrapper.trigger("click");

    expect(ctx.handleSelect).toHaveBeenCalled();
  });
});
