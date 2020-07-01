import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzzTSAState } from "./useFizzBuzzTSAState";

describe("useFizzBuzzTSAState", () => {
  it("domain", () => {
    const { result } = renderHook(useFizzBuzzTSAState);

    expect(result.current.domain.count).toBeDefined();
    expect(result.current.domain.label).toBeDefined();
  });
  it("ui", () => {
    const { result } = renderHook(useFizzBuzzTSAState);

    expect(result.current.ui.isLowerLimit).toBeDefined();
    expect(result.current.ui.isFizzBuzz).toBeDefined();
    expect(result.current.ui.isInitCount).toBeDefined();
  });

  describe("operations", () => {
    it("increment", () => {
      const { result } = renderHook(useFizzBuzzTSAState);

      act(result.current.operations.increment);
      expect(result.current.domain.count).toBeDefined();
      expect(result.current.domain.label).toBeDefined();
    });
    it("decrement", () => {
      const { result } = renderHook(useFizzBuzzTSAState);

      act(result.current.operations.decrement);
      expect(result.current.domain.count).toBeDefined();
      expect(result.current.domain.label).toBeDefined();
    });
    it("reset", () => {
      const { result } = renderHook(useFizzBuzzTSAState);

      act(result.current.operations.reset);
      expect(result.current.domain.count).toBeDefined();
      expect(result.current.domain.label).toBeDefined();
    });
  });
});
