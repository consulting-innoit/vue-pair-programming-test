import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

beforeEach(() => localStorage.clear());

describe("Counter", () => {
  it("counter increments", async () => {
    const wrapper = mount(Counter);
    await wrapper.find("#increment").trigger("click");
    expect(wrapper.find("p").text()).toContain("Current Count: 1");
  });
  it("counter decrements", async () => {
    const wrapper = mount(Counter);
    await wrapper.find("#decrement").trigger("click");
    expect(wrapper.find("p").text()).toContain("Current Count: -1");
  });
  it("reset works", async () => {
    const wrapper = mount(Counter);
    await wrapper.find("#decrement").trigger("click");
    await wrapper.find(".reset").trigger("click");
    expect(wrapper.find("p").text()).toContain("Current Count: 0");
  });
});
