import { ReadonlyDeep } from "type-fest";

export type Count = number;
export type Adjust = number;

export type Nothing = "";
export type Fizz = "Fizz";
export type Buzz = "Buzz";
export type FizzBuzz = "FizzBuzz";
export type FizzBuzzLabel = Fizz | Buzz | FizzBuzz | Nothing;

export type CreateLabel = (p: Count) => FizzBuzzLabel;
export type FizzF = (p: Count) => Fizz | Nothing;
export type BuzzF = (p: Count) => Buzz | Nothing;

type FactoryP = {
  count: Count;
  inputValue: Count;
};

type FactoryR = {
  count: Count;
  label: FizzBuzzLabel;
};

export type Factory = (p: ReadonlyDeep<FactoryP>) => FactoryR;
