import { useReducer } from "react";
import { reducer, initialState, actions } from "./module";
import * as fizzBuzz from "~/domain/fizzBuzz";

export const useFizzBuzz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    ...state,
    selectors: {
      isLowerLimit: fizzBuzz.count.isLowerLimit(state.count),
      isFizzBuzz: fizzBuzz.count.isFizzBuzz(state.label),
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

export type Props = ReturnType<typeof useFizzBuzz>;
