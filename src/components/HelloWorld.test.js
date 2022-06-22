import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld", () => {
    it("Test Message", () => {
      const wrapper = shallowMount(HelloWorld, {
        propsData: {
          msg: "Hello World"
        }
      });

      /**
       * We're only testing a single branch of the conditional, so we
       * should not see 100% branch coverage. We're also not testing
       * notTested, so function coverage should not be 100% either.
       */
      expect(wrapper.vm.testMessage).toBe("TEST: Hello World");
    });
  });
