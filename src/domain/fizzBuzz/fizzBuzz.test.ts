import { fizzBuzz, Count, label, num, FizzBuzzLabel } from ".";

type TestData = { count: Count; expected: FizzBuzzLabel };
const testData: TestData[][] = [
  [
    {
      count: -1,
      expected: label.nothing,
    },
  ],
  [
    {
      count: 0,
      expected: label.nothing,
    },
  ],
  [
    {
      count: 1,
      expected: label.nothing,
    },
  ],
  [
    {
      count: 2,
      expected: label.nothing,
    },
  ],
  [
    {
      count: 3,
      expected: label.fizz,
    },
  ],
  [
    {
      count: 4,
      expected: label.nothing,
    },
  ],
  [
    {
      count: 5,
      expected: label.buzz,
    },
  ],
  [
    {
      count: 6,
      expected: label.fizz,
    },
  ],
  [
    {
      count: 7,
      expected: label.nothing,
    },
  ],
  [
    {
      count: 8,
      expected: label.nothing,
    },
  ],
  [
    {
      count: 10,
      expected: label.buzz,
    },
  ],
  [
    {
      count: 15,
      expected: label.fizzBuzz,
    },
  ],
  [
    {
      count: 97,
      expected: label.nothing,
    },
  ],
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
];

it.each(testData)("パラメタを渡して結果の県境 %o", ({ count, expected }) =>
  expect(fizzBuzz(count)).toEqual(expected)
);
