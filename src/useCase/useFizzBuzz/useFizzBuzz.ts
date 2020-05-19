import { useReducer } from "react";
import { reducer, initState, actions } from "./module";
import { Count } from "~/domain/fizzBuzz";

const count: Count = 1;

export const useFizzBuzz = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return {
    ...state,
    selectors: {
      isNegative: state.count < 0,
    },
    operations: {
      countUp: () => dispatch(actions.countUp({ count })),
      countDown: () => dispatch(actions.countDown({ count })),
      countReset: () => dispatch(actions.countReset()),
    },
  };
};

export type Props = ReturnType<typeof useFizzBuzz>;
