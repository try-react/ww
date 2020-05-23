import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzz } from ".";

describe("useFizzBuzz", () => {
  it("ui", () => {
    const { result } = renderHook(useFizzBuzz);

    expect(result.current.ui.isLowerLimit).toBeDefined();
    expect(result.current.ui.isFizzBuzz).toBeDefined();
    expect(result.current.ui.isInitCount).toBeDefined();
  });

  describe("operations", () => {
    it("increment", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.increment);
      expect(result.current.domain.count).toBeDefined();
      expect(result.current.domain.label).toBeDefined();
    });
    it("decrement", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.decrement);
      expect(result.current.domain.count).toBeDefined();
      expect(result.current.domain.label).toBeDefined();
    });
    it("reset", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.reset);
      expect(result.current.domain.count).toBeDefined();
      expect(result.current.domain.label).toBeDefined();
    });
  });
});
