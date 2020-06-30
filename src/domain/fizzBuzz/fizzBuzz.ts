import {
  FizzF,
  BuzzF,
  CreateLabel,
  Count,
  Factory,
  FizzBuzzLabel,
  Adjust,
} from "./type";
import { definedVO } from "./definedVO";

const isFizz = (p: Count) => p > 0 && p % definedVO.num.fizz === 0;
const isBuzz = (p: Count) => p > 0 && p % definedVO.num.buzz === 0;

const fizzF: FizzF = (p) =>
  isFizz(p) ? definedVO.label.fizz : definedVO.label.nothing;

const buzzF: BuzzF = (p) =>
  isBuzz(p) ? definedVO.label.buzz : definedVO.label.nothing;

const isValidInputValue = (p: Adjust) => p === definedVO.adjust;
const isValidCurrentCount = (p: Count) => p >= 0;

const increment: Factory = (p) => {
  if (!isValidCurrentCount(p.count)) {
    return reset();
  }

  if (!isValidInputValue(p.inputValue)) {
    return reset();
  }

  return {
    count: p.count + p.inputValue,
    label: createLabel(p.count + p.inputValue),
  };
};

const decrement: Factory = (p) => {
  if (!isValidCurrentCount(p.count)) {
    return reset();
  }

  if (!isValidInputValue(p.inputValue)) {
    return reset();
  }
  return {
    count: p.count - p.inputValue,
    label: createLabel(p.count - p.inputValue),
  };
};

const reset = (): ReturnType<Factory> => ({
  count: 0,
  label: createLabel(0),
});

export const createLabel: CreateLabel = (p) =>
  (fizzF(p) + buzzF(p)) as FizzBuzzLabel;

/**
 * `count`の下限を指定
 */
export const isLowerLimit = (p: Count) => p === 0;

/**
 * Fizz or Buzz or FizzBuzz
 * のどれか
 */
export const isFizzBuzz = (p: FizzBuzzLabel) => p !== definedVO.label.nothing;

/**
 * 現在の値と入力値から、FizzBuzz用Objectを作成
 */
export const factory = {
  increment,
  decrement,
  reset,
} as const;
