import {
  createFizzBuzzLabel,
  definedVO,
  CreateFizzBuzzLabel,
  fizzBuzzObjFactory,
  FizzBuzzObjFactory,
  count,
} from ".";

describe("createFizzBuzzLabel", () => {
  type TestData = {
    count: Parameters<CreateFizzBuzzLabel>[0];
    expected: ReturnType<CreateFizzBuzzLabel>;
  };
  const testData: TestData[][] = [
    [
      {
        count: -1,
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        count: 0,
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        count: 1,
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        count: 2,
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        count: 3,
        expected: definedVO.label.fizz,
      },
    ],
    [
      {
        count: 4,
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        count: 5,
        expected: definedVO.label.buzz,
      },
    ],
    [
      {
        count: 6,
        expected: definedVO.label.fizz,
      },
    ],
    [
      {
        count: 7,
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        count: 8,
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        count: 10,
        expected: definedVO.label.buzz,
      },
    ],
    [
      {
        count: 15,
        expected: definedVO.label.fizzBuzz,
      },
    ],
    [
      {
        count: 97,
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        count: definedVO.num.fizz,
        expected: definedVO.label.fizz,
      },
    ],
    [
      {
        count: definedVO.num.buzz,
        expected: definedVO.label.buzz,
      },
    ],
    [
      {
        count: definedVO.num.fizz * definedVO.num.buzz,
        expected: definedVO.label.fizzBuzz,
      },
    ],
  ];

  it.each(testData)("%o", ({ count, expected }) =>
    expect(createFizzBuzzLabel(count)).toEqual(expected)
  );
});

describe("fizzBuzzObjFactory", () => {
  const inputValue = definedVO.adjust;
  const notValidInputValue = definedVO.adjust + 1;

  describe("up", () => {
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
          expected: fizzBuzzObjFactory.reset(),
        },
      ],
      [
        {
          p: [
            {
              count: -1,
              inputValue,
            },
          ],
          expected: fizzBuzzObjFactory.reset(),
        },
      ],
      [
        {
          p: [
            {
              count: definedVO.num.fizz - definedVO.adjust,
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
              count: definedVO.num.buzz - definedVO.adjust,
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
              count: definedVO.num.fizz * definedVO.num.buzz - definedVO.adjust,
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
    it.each(testData)("%o", ({ p, expected }) => {
      expect(fizzBuzzObjFactory.up(...p)).toEqual(expected);
    });
  });

  describe("down", () => {
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
          expected: fizzBuzzObjFactory.reset(),
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
          expected: fizzBuzzObjFactory.reset(),
        },
      ],
      [
        {
          p: [
            {
              count: definedVO.num.fizz + definedVO.adjust,
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
              count: definedVO.num.buzz + definedVO.adjust,
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
              count: definedVO.num.fizz * definedVO.num.buzz + definedVO.adjust,
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
    it.each(testData)("%o", ({ p, expected }) => {
      expect(fizzBuzzObjFactory.down(...p)).toEqual(expected);
    });
  });

  describe("reset", () => {
    type TestData = {
      expected: ReturnType<FizzBuzzObjFactory>;
    };
    const testData: TestData[][] = [
      [
        {
          expected: fizzBuzzObjFactory.reset(),
        },
      ],
    ];
    it.each(testData)("%o", ({ expected }) => {
      expect(fizzBuzzObjFactory.reset()).toEqual(expected);
    });
  });
});

describe("count", () => {
  describe("isLowerLimit", () => {
    type TestData = {
      p: Parameters<typeof count["isLowerLimit"]>;
      expected: ReturnType<typeof count["isLowerLimit"]>;
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
      expect(count.isLowerLimit(p)).toEqual(expected);
    });
  });
  describe("isFizzBuzz", () => {
    type TestData = {
      p: Parameters<typeof count["isFizzBuzz"]>;
      expected: ReturnType<typeof count["isFizzBuzz"]>;
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
    it.each(testData)("%o", ({ p, expected }) => {
      expect(count.isFizzBuzz(...p)).toEqual(expected);
    });
  });
});
