import { useReducer } from "react";
import { reducer, initState, actions } from "./module";
import { Props } from "~/useCase/useFizzBuzz";

export const useFizzBuzzTSA = (): Props => {
  const [state, dispatch] = useReducer(reducer, initState);

  const countUp = () => dispatch(actions.countUp(10));
  const countDown = () => dispatch(actions.countDown(10));
  const countReset = () => dispatch(actions.countReset());

  return {
    ...state,
    operations: { countUp, countDown, countReset },
  };
};
