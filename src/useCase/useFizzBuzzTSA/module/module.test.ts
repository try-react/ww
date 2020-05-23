import { actions, reducer } from ".";

describe("actions", () => {
  const count = 10;
  it("increment: objectが正しく生成されるか", () => {
    const expected = { payload: { count }, type: "increment" };
    expect(actions.increment({ count })).toEqual(expected);
  });
  it("decrement: objectが正しく生成されるか", () => {
    const expected = { payload: { count }, type: "decrement" };
    expect(actions.decrement({ count })).toEqual(expected);
  });

  it("reset: objectが正しく生成されるか", () => {
    const expected = { payload: undefined, type: "reset" };
    expect(actions.reset()).toEqual(expected);
  });
});

describe("reducer", () => {
  type TestData = {
    p: Parameters<typeof reducer>;
    expected: ReturnType<typeof reducer>;
  };
  const dummy = { count: expect.anything(), label: expect.anything() } as const;
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

  it.each(testData)("新しくStateが生成されるか", ({ p, expected }) => {
    expect(reducer(...p)).toEqual(expected);
    expect(p).toEqual(p); // パラメタの汚染は、ないか？
  });
});
