import { initialState } from "./module";
import { useCountEffect } from "~/store/fizzBuzz/hooks";
import { usePrevious } from "react-use";
import type { UseFizzBuzz, Props } from "./useFizzBuzzState";

type UseFizzBuzzEffect = (p: { useFizzBuzzState: UseFizzBuzz }) => Props;

export const useFizzBuzzEffect: UseFizzBuzzEffect = (p) => {
  const state = p.useFizzBuzzState();

  useCountEffect(
    state.domain.count -
      (usePrevious<Props["domain"]["count"]>(state.domain.count) ||
        initialState.count)
  );

  return state;
};
