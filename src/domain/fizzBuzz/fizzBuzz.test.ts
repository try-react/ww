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
    p: Parameters<CreateFizzBuzzLabel>;
    expected: ReturnType<CreateFizzBuzzLabel>;
  };
  const testData: TestData[][] = [
    [
      {
        p: [-1],
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        p: [0],
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        p: [1],
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        p: [2],
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        p: [3],
        expected: definedVO.label.fizz,
      },
    ],
    [
      {
        p: [4],
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        p: [5],
        expected: definedVO.label.buzz,
      },
    ],
    [
      {
        p: [6],
        expected: definedVO.label.fizz,
      },
    ],
    [
      {
        p: [7],
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        p: [8],
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        p: [10],
        expected: definedVO.label.buzz,
      },
    ],
    [
      {
        p: [15],
        expected: definedVO.label.fizzBuzz,
      },
    ],
    [
      {
        p: [97],
        expected: definedVO.label.nothing,
      },
    ],
    [
      {
        p: [definedVO.num.fizz],
        expected: definedVO.label.fizz,
      },
    ],
    [
      {
        p: [definedVO.num.buzz],
        expected: definedVO.label.buzz,
      },
    ],
    [
      {
        p: [definedVO.num.fizz * definedVO.num.buzz],
        expected: definedVO.label.fizzBuzz,
      },
    ],
  ];

  it.each(testData)("%o", ({ p, expected }) =>
    expect(createFizzBuzzLabel(...p)).toEqual(expected)
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
      expect(count.isLowerLimit(...p)).toEqual(expected);
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
