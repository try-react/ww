import {
  createLabel,
  definedVO,
  factory,
  Factory,
  isFizzBuzz,
  isLowerLimit,
} from ".";

describe("createLabel", () => {
  it("空文字が、生成されるか", () => {
    expect(createLabel(-1)).toEqual(definedVO.label.nothing);
  });
  it("Fizzが、生成されるか", () => {
    expect(createLabel(definedVO.num.fizz)).toEqual(definedVO.label.fizz);
  });
  it("Buzzが、生成されるか", () => {
    expect(createLabel(definedVO.num.buzz)).toEqual(definedVO.label.buzz);
  });
  it("FizzBuzzが、生成されるか", () => {
    expect(createLabel(definedVO.num.fizz * definedVO.num.buzz)).toEqual(
      definedVO.label.fizzBuzz
    );
  });
});

describe("factory", () => {
  const inputValue = definedVO.adjust;
  const notValidInputValue = definedVO.adjust + 100;
  const notValidCount = -100;

  describe("increment", () => {
    type TestData = {
      p: Parameters<Factory>;
      expected: ReturnType<Factory>;
    };
    const testData: TestData[][] = [
      [
        {
          p: [
            {
              count: 0,
              inputValue: notValidInputValue,
            },
          ],
          expected: factory.reset(),
        },
      ],
      [
        {
          p: [
            {
              count: notValidCount,
              inputValue,
            },
          ],
          expected: factory.reset(),
        },
      ],
      [
        {
          p: [
            {
              count: definedVO.num.fizz - inputValue,
              inputValue,
            },
          ],
          expected: {
            count: definedVO.num.fizz,
            label: definedVO.label.fizz,
          },
        },
      ],
      [
        {
          p: [
            {
              count: definedVO.num.buzz - inputValue,
              inputValue,
            },
          ],
          expected: {
            count: definedVO.num.buzz,
            label: definedVO.label.buzz,
          },
        },
      ],
      [
        {
          p: [
            {
              count: definedVO.num.fizz * definedVO.num.buzz - inputValue,
              inputValue,
            },
          ],
          expected: {
            count: definedVO.num.fizz * definedVO.num.buzz,
            label: definedVO.label.fizzBuzz,
          },
        },
      ],
    ];
    it.each(testData)("No.%#  %o", ({ p, expected }) => {
      expect(factory.increment(...p)).toEqual(expected);
    });
  });

  describe("decrement", () => {
    type TestData = {
      p: Parameters<FizzBuzzObjFactory>;
      expected: ReturnType<FizzBuzzObjFactory>;
    };
    const testData: TestData[][] = [
      [
        {
          p: [
            {
              count: 0,
              inputValue: notValidInputValue,
            },
          ],
          expected: factory.reset(),
        },
      ],
      [
        {
          p: [
            {
              count: notValidCount,
              inputValue,
            },
          ],
          expected: factory.reset(),
        },
      ],
      [
        {
          p: [
            {
              count: 1,
              inputValue: notValidInputValue,
            },
          ],
          expected: factory.reset(),
        },
      ],
      [
        {
          p: [
            {
              count: definedVO.num.fizz + inputValue,
              inputValue,
            },
          ],
          expected: {
            count: definedVO.num.fizz,
            label: definedVO.label.fizz,
          },
        },
      ],
      [
        {
          p: [
            {
              count: definedVO.num.buzz + inputValue,
              inputValue,
            },
          ],
          expected: {
            count: definedVO.num.buzz,
            label: definedVO.label.buzz,
          },
        },
      ],
      [
        {
          p: [
            {
              count: definedVO.num.fizz * definedVO.num.buzz + inputValue,
              inputValue,
            },
          ],
          expected: {
            count: definedVO.num.fizz * definedVO.num.buzz,
            label: definedVO.label.fizzBuzz,
          },
        },
      ],
    ];
    it.each(testData)("No.%#  %o", ({ p, expected }) => {
      expect(factory.decrement(...p)).toEqual(expected);
    });
  });

  describe("reset", () => {
    it("resetされるか", () => {
      const expected = factory.reset();
      expect(factory.reset()).toEqual(expected);
    });
  });
});

describe("isLowerLimit", () => {
  type TestData = {
    p: Parameters<typeof isLowerLimit>;
    expected: ReturnType<typeof isLowerLimit>;
  };
  const testData: TestData[][] = [
    [
      {
        p: [0],
        expected: true,
      },
    ],
    [
      {
        p: [1],
        expected: false,
      },
    ],
  ];
  it.each(testData)("%o", ({ p, expected }) => {
    expect(isLowerLimit(...p)).toEqual(expected);
  });
});
describe("isFizzBuzz", () => {
  type TestData = {
    p: Parameters<typeof isFizzBuzz>;
    expected: ReturnType<typeof isFizzBuzz>;
  };
  const testData: TestData[][] = [
    [
      {
        p: [definedVO.label.fizz],
        expected: true,
      },
    ],
    [
      {
        p: [definedVO.label.buzz],
        expected: true,
      },
    ],
    [
      {
        p: [definedVO.label.fizzBuzz],
        expected: true,
      },
    ],
    [
      {
        p: [definedVO.label.nothing],
        expected: false,
      },
    ],
  ];
  it.each(testData)("No.%# %o", ({ p, expected }) => {
    expect(isFizzBuzz(...p)).toEqual(expected);
  });
});
