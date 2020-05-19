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
    it("countUp", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.countUp);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("countDown", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.countDown);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("countReset", () => {
      const { result } = renderHook(useFizzBuzz);

      act(result.current.operations.countReset);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
  });
});
