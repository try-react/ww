import { initialState, actions, reducer } from "./module";
import type { Props } from "~/useCase/useFizzBuzz/useFizzBuzzState";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { useReducer } from "react";

export const useFizzBuzzTSAState = (): Props => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
