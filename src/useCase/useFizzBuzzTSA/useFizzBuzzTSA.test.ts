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
    it("countUp", () => {
      const { result } = renderHook(useFizzBuzzTSA);

      act(result.current.operations.countUp);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("countDown", () => {
      const { result } = renderHook(useFizzBuzzTSA);

      act(result.current.operations.countDown);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
    it("countReset", () => {
      const { result } = renderHook(useFizzBuzzTSA);

      act(result.current.operations.countReset);
      expect(result.current.count).toBeDefined();
      expect(result.current.label).toBeDefined();
    });
  });
});
