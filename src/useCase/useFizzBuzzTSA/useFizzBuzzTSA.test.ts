import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzzTSA } from ".";
import * as fizzBuzz from "~/domain/fizzBuzz";

it("初期値", () => {
  const { result } = renderHook(useFizzBuzzTSA);

  expect(result.current.count).toEqual(0);
  expect(result.current.label).toEqual(fizzBuzz.definedVO.label.nothing);
});

it("countUp", () => {
  const { result } = renderHook(useFizzBuzzTSA);

  act(result.current.operations.countUp);
  expect(result.current.count).toEqual(fizzBuzz.definedVO.adjust);
});

it("countUp -> countDown", () => {
  const { result } = renderHook(useFizzBuzzTSA);

  act(result.current.operations.countUp);
  expect(result.current.count).toEqual(1);

  act(result.current.operations.countDown);
  expect(result.current.count).toEqual(0);
});

it("countReset", () => {
  const { result } = renderHook(useFizzBuzzTSA);

  act(result.current.operations.countReset);
  expect(result.current.count).toEqual(0);
});

it("動作確認", () => {
  const { result } = renderHook(useFizzBuzzTSA);

  act(result.current.operations.countUp);
  expect(result.current.label).not.toBeUndefined();
});
