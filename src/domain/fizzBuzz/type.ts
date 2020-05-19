export type Count = number;

export type Nothing = "";
export type Fizz = "Fizz";
export type Buzz = "Buzz";
export type FizzBuzz = "FizzBuzz";
export type FizzBuzzLabel = Fizz | Buzz | FizzBuzz | Nothing;

export type FizzF = (p: Count) => Fizz | Nothing;
export type BuzzF = (p: Count) => Buzz | Nothing;
export type CreateFizzBuzzLabel = (p: Count) => FizzBuzzLabel;

export type FizzBuzzObjFactory = (p: {
  count: Count;
  inputValue: Count;
}) => { count: Count; label: FizzBuzzLabel };

export type Adjust = number;
