import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzzTSA } from ".";

describe("useFizzBuzzTSA", () => {
  it("selectors", () => {
    const { result } = renderHook(useFizzBuzzTSA);

    expect(result.current.selectors.isLowerLimit).toBeDefined();
    expect(result.current.selectors.isFizzBuzz).toBeDefined();
    expect(result.current.selectors.isInitCount).toBeDefined();
  });

  describe("operations", () => {
    it("increment", () => {
      const { result } = renderHook(useFizzBuzzTSA);

      act(result.current.operations.increment);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("decrement", () => {
      const { result } = renderHook(useFizzBuzzTSA);

      act(result.current.operations.decrement);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("reset", () => {
      const { result } = renderHook(useFizzBuzzTSA);

      act(result.current.operations.reset);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
  });
});
