import {
  FizzF,
  BuzzF,
  CreateFizzBuzzLabel,
  Count,
  FizzBuzzObjFactory,
  FizzBuzzLabel,
  Adjust,
} from "./type";
import { definedVO } from "./definedVO";

const isValidCount = (p: Count) => p > 0;
const isValidInputValue = (p: Adjust) => p === definedVO.adjust;
const isFizz = (p: Count) => isValidCount(p) && p % definedVO.num.fizz === 0;
const isBuzz = (p: Count) => isValidCount(p) && p % definedVO.num.buzz === 0;

const fizzF: FizzF = (p) =>
  isFizz(p) ? definedVO.label.fizz : definedVO.label.nothing;

const buzzF: BuzzF = (p) =>
  isBuzz(p) ? definedVO.label.buzz : definedVO.label.nothing;

const up: FizzBuzzObjFactory = (p) => {
  if (p.count < 0) {
    return reset();
  }

  if (!isValidInputValue(p.inputValue)) {
    return reset();
  }

  return {
    count: p.count + p.inputValue,
    label: createFizzBuzzLabel(p.count + p.inputValue),
  };
};

const down: FizzBuzzObjFactory = (p) => {
  if (!isValidCount(p.count)) {
    return reset();
  }
  if (!isValidInputValue(p.inputValue)) {
    return reset();
  }
  return {
    count: p.count - p.inputValue,
    label: createFizzBuzzLabel(p.count - p.inputValue),
  };
};

const reset = (): ReturnType<FizzBuzzObjFactory> => ({
  count: 0,
  label: createFizzBuzzLabel(0),
});

const isLowerLimit = (p: Count) => p < 1;
const isFizzBuzz = (p: FizzBuzzLabel) => p !== definedVO.label.nothing;

/**
 * FizzBuzzをテキストを作成
 */
export const createFizzBuzzLabel: CreateFizzBuzzLabel = (p) =>
  (fizzF(p) + buzzF(p)) as FizzBuzzLabel;

/**
 * `count`操作での使用を想定
 */
export const fizzBuzzObjFactory = {
  up,
  down,
  reset,
} as const;

export const count = {
  /**
   * `count`の下限を指定
   */
  isLowerLimit,
  /**
   * Fizz or Buzz or FizzBuzz
   * のどれか
   */
  isFizzBuzz,
};
