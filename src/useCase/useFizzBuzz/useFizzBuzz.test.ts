import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzz } from ".";

describe("useFizzBuzz", () => {
  it("selectors", () => {
    const { result } = renderHook(useFizzBuzz);

    expect(result.current.selectors.isLowerLimit).toBeDefined();
    expect(result.current.selectors.isFizzBuzz).toBeDefined();
    expect(result.current.selectors.isInitCount).toBeDefined();
  });

  describe("operations", () => {
    it("increment", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.increment);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("decrement", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.decrement);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("reset", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.reset);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
  });
});
