import { reducer, initialState, actions, useReducer } from "./module";
import type { Props } from "~/useCase/useFizzBuzz/useFizzBuzzState";
import * as fizzBuzz from "~/domain/fizzBuzz";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

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
      increment: () => dispatch(actions.increment.request(null, sleep)),
      decrement: () =>
        dispatch(actions.decrement({ count: fizzBuzz.definedVO.adjust })),
      reset: () => dispatch(actions.reset()),
    },
  };
};
