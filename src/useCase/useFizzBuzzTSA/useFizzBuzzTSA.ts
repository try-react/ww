import { useReducer } from "react";
import { reducer, initState, actions } from "./module";
import { Props } from "~/useCase/useFizzBuzz";
import { Count } from "~/domain/fizzBuzz";

export const useFizzBuzzTSA = (): Props => {
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
