import { useReducer } from "react";
import { reducer, initialState, actions } from "./module";
import type { State } from "./module";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { useCountEffect } from "~/store/fizzBuzz/useFizzBuzz";
import { usePrevious } from "react-use";

export type Props = ReturnType<typeof useFizzBuzz>;
export const useFizzBuzz = (
  effect = {
    useCountEffect,
  }
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  effect.useCountEffect(
    state.count - (usePrevious<State["count"]>(state.count) || 0)
  );

  return {
    domain: {
      ...state,
    },
    ui: {
      isLowerLimit: fizzBuzz.isLowerLimit(state.count),
      isFizzBuzz: fizzBuzz.isFizzBuzz(state.label),
      isInitCount: state.count === initialState.count,
    },
    operations: {
      increment: () =>
        dispatch(actions.increment({ count: fizzBuzz.definedVO.adjust })),
      decrement: () =>
        dispatch(actions.decrement({ count: fizzBuzz.definedVO.adjust })),
      reset: () => dispatch(actions.reset()),
    },
  };
};
