import { useReducer } from "react";
import { reducer, initialState, actions } from "./module";
import { Props } from "~/useCase/useFizzBuzz";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { usePrevious } from "react-use";
import { useCountEffect } from "~/store/fizzBuzz/useFizzBuzz";
import type { State } from "./module";

export const useFizzBuzzToolkit = (
  effect = {
    useCountEffect,
  }
): Props => {
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
