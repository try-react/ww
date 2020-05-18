import { FizzF, BuzzF, FizzBuzzF, Count, FizzBuzzObjFactory } from "./type";
import { num, label } from "./definedVO";

const isValid = (p: Count) => p > 0;

const isFizz = (p: Count) => isValid(p) && p % num.fizz === 0;
const fizzF: FizzF = (p) => (isFizz(p) ? label.fizz : label.nothing);

const isBuzz = (p: Count) => isValid(p) && p % num.buzz === 0;
const buzzF: BuzzF = (p) => (isBuzz(p) ? label.buzz : label.nothing);

const up: FizzBuzzObjFactory = (p) => ({
  count: p.count + p.inputValue,
  label: fizzBuzz(p.count + p.inputValue),
});

const down: FizzBuzzObjFactory = (p) => ({
  count: p.count - p.inputValue,
  label: fizzBuzz(p.count - p.inputValue),
});

const reset: FizzBuzzObjFactory = (p) => ({
  count: p.inputValue,
  label: fizzBuzz(p.inputValue),
});

// @ts-ignore 文字列なのでしょうがない
export const fizzBuzz: FizzBuzzF = (p) => [fizzF(p), buzzF(p)].join("");

export const fizzBuzzObjFactory = {
  up,
  down,
  reset,
} as const;
