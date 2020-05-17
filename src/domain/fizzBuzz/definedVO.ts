import { Fizz, Buzz, FizzBuzz, Nothing } from "./type";

const fizz: Fizz = "Fizz";
const buzz: Buzz = "Buzz";
const fizzBuzz: FizzBuzz = "FizzBuzz";
const nothing: Nothing = "";

export const label = { fizz, buzz, nothing, fizzBuzz } as const;
export const num = { fizz: 3, buzz: 5 } as const;
export const adjust = { countUp: 1, countDown: 1 } as const;
export const adjustTSA = { countUp: 10, countDown: 10 } as const;
