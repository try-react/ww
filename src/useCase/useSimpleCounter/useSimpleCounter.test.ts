import { renderHook, act } from "@testing-library/react-hooks";
import { useSimpleCounter } from ".";

it("初期値", () => {
  const { result } = renderHook(useSimpleCounter);
  expect(result.current.count).toBe(0);
});

it("カウントアップ操作", () => {
  const clickCnt = 3;
  const { result } = renderHook(useSimpleCounter);
  [...Array(clickCnt)].forEach(() => act(result.current.countUp));

  expect(result.current.count).toBe(clickCnt);
});
