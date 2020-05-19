import { useReducer } from "react";
import { reducer, initState, actions } from "./module";
import { Props } from "~/useCase/useFizzBuzz";
import * as fizzBuzz from "~/domain/fizzBuzz";

export const useFizzBuzzTSA = (): Props => {
  const [state, dispatch] = useReducer(reducer, initState);

  return {
    ...state,
    selectors: {
      isLowerLimit: fizzBuzz.count.isLowerLimit(state.count),
      isFizzBuzz: fizzBuzz.count.isFizzBuzz(state.label),
      isInitCount: state.count === initState.count,
    },
    operations: {
      countUp: () =>
        dispatch(actions.countUp({ count: fizzBuzz.definedVO.adjust })),
      countDown: () =>
        dispatch(actions.countDown({ count: fizzBuzz.definedVO.adjust })),
      countReset: () => dispatch(actions.countReset()),
    },
  };
};
