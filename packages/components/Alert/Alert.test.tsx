import type { AlertType } from "./types";

import { withInstall } from "@hr-element/utils";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { HrAlert } from "./index";

import HrIcon from "../Icon/Icon.vue";
import Alert from "./Alert.vue";

describe("Alert.vue", () => {
  const title = "Test Alert" as const;
  const desc = "This is a test description" as const;
  it("should render the alert with default props", () => {
    const wrapper = mount(Alert, {
      props: {
        title,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["HrIcon"],
      },
    });
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(desc);

    // close icon
    const iconElement = wrapper.findComponent(HrIcon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe("xmark");

    const wrapper2 = mount(() => (
      <Alert title={title} description={desc}></Alert>
    ));

    expect(wrapper2.text()).toContain(title);
    expect(wrapper2.text()).toContain(desc);
  });

  it.each([
    ["info", "circle-info"],
    ["success", "check-circle"],
    ["warning", "circle-exclamation"],
    ["danger", "circle-xmark"],
    ["error", "circle-xmark"],
    ["non-compliance", "circle-info"], // 不符合 type 定义的
  ])("should has the correct icon when props type is %s", (type, iconName) => {
    const wrapper = mount(Alert, {
      props: {
        title,
        closable: false,
        showIcon: true,
        type: type as AlertType,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["HrIcon"],
      },
    });

    const iconElement = wrapper.findComponent(HrIcon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe(iconName);
  });

  it("should emit close event when close icon is clicked", () => {
    const onClose = vi.fn();

    const wrapper = mount(Alert, {
      props: {
        title,
        closable: true,
        showIcon: false,
        onClose,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["HrIcon"],
      },
    });
    wrapper.findComponent(HrIcon).trigger("click");
    expect(onClose).toHaveBeenCalled();
  });

  it("should allow custom content via slots", () => {
    const wrapper = mount(Alert, {
      props: {
        title: "test title",
      },
      slots: {
        default: desc,
        title,
      },
    });
    expect(wrapper.text()).toContain(desc);
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).not.toContain("test title");
  });

  it("should support centering text", () => {
    const wrapper = mount(Alert, {
      props: {
        title,
        description: desc,
        center: true,
      },
    });
    //class
    const rootNode = wrapper.find(".hr-alert");
    expect(rootNode.classes()).toContain("text-center");
  });

  it("should not render close icon when closable is false", () => {
    const wrapper = mount(Alert, {
      props: { closable: false },
    });
    expect(wrapper.find(".hr-alert__close").exists()).toBe(false);
  });

  it("should toggle visibility when open and close methods are called", async () => {
    const wrapper = mount(Alert, {
      props: { title, closable: false },
    });
    await wrapper.vm.close();
    expect(wrapper.find(".hr-alert").attributes().style).toBe("display: none;");
    await wrapper.vm.open();
    expect(wrapper.find(".hr-alert").attributes().style).toBe("");
  });
});

describe("Alert/index", () => {
  it("should be exported with withInstall()", () => {
    expect(HrAlert.install).toBeDefined();
  });
  it("component should be exported", () => {
    expect(HrAlert).toBe(Alert);
  });

  // 可选
  it("should enhance Alert component", () => {
    const enhancedAlert = withInstall(Alert);
    expect(enhancedAlert).toBe(HrAlert);
  });

  // 可选
  it("should apply specific enhance", () => {
    const enhancedAlert = withInstall(Alert);
    expect(enhancedAlert).toHaveProperty("install");
  });
});
