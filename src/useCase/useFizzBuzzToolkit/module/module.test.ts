import { actions, reducer } from ".";

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
    it.each(testData)("パラメタを渡した結果 %o", ({ p, expected }) => {
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
    it.each(testData)("パラメタを渡した結果 %o", ({ p, expected }) => {
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
    it.each(testData)("パラメタを渡した結果 %o", ({ p, expected }) => {
      expect(actions.reset(...p)).toEqual(expected);
    });
  });
});

describe("reducer", () => {
  type TestData = {
    p: Parameters<typeof reducer>;
    expected: ReturnType<typeof reducer>;
  };
  const dummy = { count: 0, label: "" } as const;
  const testData: TestData[][] = [
    [
      {
        p: [{ count: 0, label: "" }, actions.increment({ count: 1 })],
        expected: dummy,
      },
    ],
    [
      {
        p: [{ count: 1, label: "" }, actions.decrement({ count: 1 })],
        expected: dummy,
      },
    ],
    [
      {
        p: [{ count: 1, label: "" }, actions.reset()],
        expected: dummy,
      },
    ],
  ];

  it.each(testData)("パラメタを渡した結果 %o", ({ p, expected }) => {
    expect(Object.keys(reducer(...p))).toEqual(Object.keys(expected));
  });
});
