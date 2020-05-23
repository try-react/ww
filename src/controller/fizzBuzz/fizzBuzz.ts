import { useFizzBuzz } from "~/useCase/useFizzBuzz";
import { useFizzBuzzTSA } from "~/useCase/useFizzBuzzTSA";
import { useFizzBuzzToolkit } from "~/useCase/useFizzBuzzToolkit";

export const fizzBuzz = {
  useTSOnly: useFizzBuzz,
  useTSA: useFizzBuzzTSA,
  useToolkit: useFizzBuzzToolkit,
};
