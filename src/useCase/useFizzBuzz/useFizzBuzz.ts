import { useFizzBuzzState } from "./useFizzBuzzState";
import { useFizzBuzzEffect } from "./useFizzBuzzEffect";

export const useFizzBuzz = () => useFizzBuzzEffect({ useFizzBuzzState });
