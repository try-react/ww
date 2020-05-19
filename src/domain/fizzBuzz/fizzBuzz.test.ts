import { createFizzBuzzLabel, Count, definedVO, FizzBuzzLabel } from ".";

type TestData = { count: Count; expected: FizzBuzzLabel };
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

it.each(testData)("パラメタを渡して結果の県境 %o", ({ count, expected }) =>
  expect(createFizzBuzzLabel(count)).toEqual(expected)
);
