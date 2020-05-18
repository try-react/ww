import { useReducer } from "react";
import { reducer, initState, actions } from "./module";
import { Count } from "~/domain/fizzBuzz";

export const useFizzBuzz = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return {
    ...state,
    operations: {
      countUp: (v: Count) => () => dispatch(actions.countUp({ count: v })),
      countDown: (v: Count) => () => dispatch(actions.countDown({ count: v })),
      countReset: () => dispatch(actions.countReset()),
    },
  };
};

export type Props = ReturnType<typeof useFizzBuzz>;
