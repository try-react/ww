import { useFizzBuzzEffect } from "~/useCase/useFizzBuzz/useFizzBuzzEffect";
import { useFizzBuzzTSAState } from "./useFizzBuzzTSAState";

export const useFizzBuzzTSA = () =>
  useFizzBuzzEffect({ useFizzBuzzState: useFizzBuzzTSAState });
