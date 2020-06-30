import { useReducer, useEffect } from "react";
import { reducer, initialState, actions } from "./module";
import type { State } from "./module";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { useOperations } from "~/store/fizzBuzz/useFizzBuzz";

export type Props = ReturnType<typeof useFizzBuzz>;
export const useFizzBuzz = (
  effect = {
    useCountEffect,
  }
) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  effect.useCountEffect(state.count);

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

export const useCountEffect = (count: State["count"]) => {
  const { operations } = useOperations();
  useEffect(() => {
    console.log("b", count);

    operations.recalculate(count);
  }, [operations, count]);
};
