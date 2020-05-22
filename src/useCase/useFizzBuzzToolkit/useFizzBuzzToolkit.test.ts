import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzzToolkit } from ".";

describe("useFizzBuzzToolkit", () => {
  it("selectors", () => {
    const { result } = renderHook(useFizzBuzzToolkit);

    expect(result.current.selectors.isLowerLimit).toBeDefined();
    expect(result.current.selectors.isFizzBuzz).toBeDefined();
    expect(result.current.selectors.isInitCount).toBeDefined();
  });

  describe("operations", () => {
    it("increment", () => {
      const { result } = renderHook(useFizzBuzzToolkit);

      act(result.current.operations.increment);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("decrement", () => {
      const { result } = renderHook(useFizzBuzzToolkit);

      act(result.current.operations.decrement);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("reset", () => {
      const { result } = renderHook(useFizzBuzzToolkit);

      act(result.current.operations.reset);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
  });
});
