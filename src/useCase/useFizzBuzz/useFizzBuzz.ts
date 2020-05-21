import { useReducer } from "react";
import { reducer, initState, actions } from "./module";
import * as fizzBuzz from "~/domain/fizzBuzz";

export const useFizzBuzz = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return {
    ...state,
    selectors: {
      isLowerLimit: fizzBuzz.count.isLowerLimit(state.count),
      isFizzBuzz: fizzBuzz.count.isFizzBuzz(state.label),
      isInitCount: state.count === initState.count,
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
