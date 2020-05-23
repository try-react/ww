import { actions, reducer } from ".";
import * as fizzBuzz from "~/domain/fizzBuzz";

describe("actions", () => {
  const count = 10;

  describe("increment", () => {
    type TestData = {
      p: Parameters<typeof actions["increment"]>;
      expected: ReturnType<typeof actions["increment"]>;
    };
    const testData: TestData[][] = [
      [
        {
          p: [{ count }],
          expected: { payload: { count }, type: "increment" },
        },
      ],
    ];
    it.each(testData)("パラメタを渡して結果の結果 %o", ({ p, expected }) => {
      expect(actions.increment(...p)).toEqual(expected);
    });
  });
  describe("decrement", () => {
    type TestData = {
      p: Parameters<typeof actions["decrement"]>;
      expected: ReturnType<typeof actions["decrement"]>;
    };
    const testData: TestData[][] = [
      [
        {
          p: [{ count }],
          expected: { payload: { count }, type: "decrement" },
        },
      ],
    ];
    it.each(testData)("パラメタを渡して結果の結果 %o", ({ p, expected }) => {
      expect(actions.decrement(...p)).toEqual(expected);
    });
  });
  describe("reset", () => {
    type TestData = {
      p: Parameters<typeof actions["reset"]>;
      expected: ReturnType<typeof actions["reset"]>;
    };
    const testData: TestData[][] = [
      [
        {
          p: [],
          expected: { payload: undefined, type: "reset" },
        },
      ],
    ];
    it.each(testData)("パラメタを渡して結果の結果 %o", ({ p, expected }) => {
      expect(actions.reset(...p)).toEqual(expected);
    });
  });
});

describe("reducer", () => {
  type TestData = {
    p: Parameters<typeof reducer>;
    expected: ReturnType<typeof reducer>;
  };
  const testData: TestData[][] = [
    [
      {
        p: [
          { count: 0, label: "" },
          actions.increment({ count: fizzBuzz.definedVO.adjust }),
        ],
        expected: fizzBuzz.fizzBuzzObjFactory.increment({
          count: 0,
          inputValue: fizzBuzz.definedVO.adjust,
        }),
      },
    ],
    [
      {
        p: [
          { count: 1, label: "" },
          actions.decrement({ count: fizzBuzz.definedVO.adjust }),
        ],
        expected: fizzBuzz.fizzBuzzObjFactory.decrement({
          count: 0,
          inputValue: fizzBuzz.definedVO.adjust,
        }),
      },
    ],
    [
      {
        p: [{ count: 0, label: "" }, actions.reset()],
        expected: fizzBuzz.fizzBuzzObjFactory.reset(),
      },
    ],
  ];

  it.each(testData)("パラメタを渡して結果の結果 %o", ({ p, expected }) => {
    expect(reducer(...p)).toEqual(expected);
  });
});
