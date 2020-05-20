import { Fizz, Buzz, FizzBuzz, Nothing, Adjust } from "./type";

const fizz: Fizz = "Fizz";
const buzz: Buzz = "Buzz";
const fizzBuzz: FizzBuzz = "FizzBuzz";
const nothing: Nothing = "";

const label = { fizz, buzz, nothing, fizzBuzz } as const;
const num = { fizz: 3, buzz: 5 } as const;
const adjust: Adjust = 1;

export const definedVO = {
  /**
   * **Fizz**, **Buzz**のテキスト
   */
  label,
  /**
   * **Fizz**, **Buzz**の基準値
   * FizzBuzzを、計算で求める際に使用
   */
  num,
  /**
   * ここで設定された値で増減させる
   */
  adjust,
} as const;
