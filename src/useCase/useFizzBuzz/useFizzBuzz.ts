import { useReducer } from "react";
import { reducer, initState, actions } from "./module";

export const useFizzBuzz = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const countUp = () => dispatch(actions.countUp());
  const countDown = () => dispatch(actions.countDown());
  const countReset = () => dispatch(actions.countReset());

  return {
    ...state,
    operations: { countUp, countDown, countReset },
  };
};

export type Props = ReturnType<typeof useFizzBuzz>;
