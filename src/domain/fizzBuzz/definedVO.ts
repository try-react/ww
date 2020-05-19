import { Fizz, Buzz, FizzBuzz, Nothing, Adjust } from "./type";

const fizz: Fizz = "Fizz";
const buzz: Buzz = "Buzz";
const fizzBuzz: FizzBuzz = "FizzBuzz";
const nothing: Nothing = "";

const label = { fizz, buzz, nothing, fizzBuzz } as const;
const num = { fizz: 3, buzz: 5 } as const;
const adjust: Adjust = 1;

export const definedVO = {
  label,
  num,
  adjust,
} as const;
