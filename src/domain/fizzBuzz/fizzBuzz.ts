import { FizzF, BuzzF, FizzBuzzF, Count } from "./type";
import { num, label } from "./definedVO";

const isValid = (p: Count) => p > 0;

const isFizz = (p: Count) => isValid(p) && p % num.fizz === 0;
const fizzF: FizzF = (p) => (isFizz(p) ? label.fizz : label.nothing);

const isBuzz = (p: Count) => isValid(p) && p % num.buzz === 0;
const buzzF: BuzzF = (p) => (isBuzz(p) ? label.buzz : label.nothing);

// @ts-ignore 文字列なのでしょうがない
export const fizzBuzz: FizzBuzzF = (p) => [fizzF(p), buzzF(p)].join("");
