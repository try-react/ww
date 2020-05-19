import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzz } from ".";
import { label, num, Count, FizzBuzzLabel } from "~/domain/fizzBuzz";

it("初期値", () => {
  const { result } = renderHook(useFizzBuzz);

  expect(result.current.count).toEqual(0);
  expect(result.current.label).toEqual(label.nothing);
});

it("countUp", () => {
  const { result } = renderHook(useFizzBuzz);

  act(result.current.operations.countUp);
  expect(result.current.count).toEqual(1);
});

it("countUp -> countDown", () => {
  const { result } = renderHook(useFizzBuzz);

  act(result.current.operations.countUp);
  expect(result.current.count).toEqual(1);

  act(result.current.operations.countDown);
  expect(result.current.count).toEqual(0);
});

it("countReset", () => {
  const { result } = renderHook(useFizzBuzz);

  act(result.current.operations.countReset);
  expect(result.current.count).toEqual(0);
});

describe("countとlabelの検証", () => {
  type TestData = { count: Count; expected: FizzBuzzLabel };
  const testData: TestData[][] = [
    [
      {
        count: num.fizz,
        expected: label.fizz,
      },
    ],
    [
      {
        count: num.buzz,
        expected: label.buzz,
      },
    ],
    [
      {
        count: num.fizz * num.buzz,
        expected: label.fizzBuzz,
      },
    ],
    [
      {
        // 0 = Nothing の前提
        count: 0,
        expected: label.nothing,
      },
    ],
  ];

  it.each(testData)("countとlabelの関係の検証 %o", ({ count, expected }) => {
    const { result } = renderHook(useFizzBuzz);

    [...Array(count)].forEach(() => act(result.current.operations.countUp));
    expect(result.current.label).toEqual(expected);
  });
});
