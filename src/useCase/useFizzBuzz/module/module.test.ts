import { actions, reducer, Reducer } from ".";
import * as fizzBuzz from "~/domain/fizzBuzz";

// `actions`のテストも兼ねているので、`actions`のテストは無し
describe("reducer", () => {
  type TestData = {
    p: Parameters<Reducer>;
    expected: ReturnType<Reducer>;
  };
  const testData: TestData[][] = [
    [
      {
        p: [
          { count: 0, label: "" },
          actions.countUp({ count: fizzBuzz.definedVO.adjust }),
        ],
        expected: fizzBuzz.fizzBuzzObjFactory.up({
          count: 0,
          inputValue: fizzBuzz.definedVO.adjust,
        }),
      },
    ],
    [
      {
        p: [
          { count: 1, label: "" },
          actions.countDown({ count: fizzBuzz.definedVO.adjust }),
        ],
        expected: fizzBuzz.fizzBuzzObjFactory.down({
          count: 0,
          inputValue: fizzBuzz.definedVO.adjust,
        }),
      },
    ],
    [
      {
        p: [{ count: 0, label: "" }, actions.countReset()],
        expected: fizzBuzz.fizzBuzzObjFactory.reset(),
      },
    ],
  ];

  it.each(testData)("パラメタを渡して結果の県境 %o", ({ p, expected }) => {
    expect(reducer(...p)).toEqual(expected);
  });
});
