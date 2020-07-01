import { useFizzBuzzEffect } from "~/useCase/useFizzBuzz/useFizzBuzzEffect";
import { useFizzBuzzToolkitState } from "./useFizzBuzzToolkitState";

export const useFizzBuzzToolkit = () =>
  useFizzBuzzEffect({ useFizzBuzzState: useFizzBuzzToolkitState });
