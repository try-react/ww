import { useFizzBuzz } from "~/useCase/useFizzBuzz";
import { useFizzBuzzTSA } from "~/useCase/useFizzBuzzTSA";
import { useFizzBuzzToolkit } from "~/useCase/useFizzBuzzToolkit";
import { useFizzBuzzAggregate } from "~/useCase/useFizzBuzzAggregate";

export const fizzBuzz = {
  useTSOnly: useFizzBuzz,
  useTSA: useFizzBuzzTSA,
  useToolkit: useFizzBuzzToolkit,
  useAggregate: useFizzBuzzAggregate,
};
