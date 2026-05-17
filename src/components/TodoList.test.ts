import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TodoList from "./TodoList.vue";

describe("TodoList", () => {
  it("filter updates results correctly", async () => {
    const wrapper = mount(TodoList);
    //input value
    await wrapper.find("input").setValue("Task 2");
    expect(wrapper.findAll("li").length).toBe(1);
  });
});
