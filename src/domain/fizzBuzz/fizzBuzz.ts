import {
  FizzF,
  BuzzF,
  FizzBuzzF,
  Count,
  FizzBuzzObjFactory,
  FizzBuzzLabel,
} from "./type";
import { definedVO } from "./definedVO";

const isValid = (p: Count) => p > 0;

const isFizz = (p: Count) => isValid(p) && p % definedVO.num.fizz === 0;
const fizzF: FizzF = (p) =>
  isFizz(p) ? definedVO.label.fizz : definedVO.label.nothing;

const isBuzz = (p: Count) => isValid(p) && p % definedVO.num.buzz === 0;
const buzzF: BuzzF = (p) =>
  isBuzz(p) ? definedVO.label.buzz : definedVO.label.nothing;

const up: FizzBuzzObjFactory = (p) => ({
  count: p.count + p.inputValue,
  label: createFizzBuzzLabel(p.count + p.inputValue),
});

const down: FizzBuzzObjFactory = (p) => ({
  count: p.count - p.inputValue,
  label: createFizzBuzzLabel(p.count - p.inputValue),
});

const reset: FizzBuzzObjFactory = (p) => ({
  count: p.inputValue,
  label: createFizzBuzzLabel(p.inputValue),
});

const isLowerLimit = (p: Count) => p < 1;
const isFizzBuzz = (p: FizzBuzzLabel) => p !== definedVO.label.nothing;

export const createFizzBuzzLabel: FizzBuzzF = (p) =>
  (fizzF(p) + buzzF(p)) as FizzBuzzLabel;

export const fizzBuzzObjFactory = {
  up,
  down,
  reset,
} as const;

export const count = {
  isLowerLimit,
  isFizzBuzz,
};
