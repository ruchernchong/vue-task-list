import { beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";
import About from "@/components/About.vue";

describe("About", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(About);
  });

  it("should render correct title", () => {
    expect(wrapper.find("h1").text()).toBe("About");
  });
});
