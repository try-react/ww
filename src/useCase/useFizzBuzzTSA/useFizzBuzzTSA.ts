import { useReducer } from "react";
import { reducer, initState, actions } from "./module";
import { Props } from "~/useCase/useFizzBuzz";
import { adjustTSA } from "~/domain/fizzBuzz";

export const useFizzBuzzTSA = (): Props => {
  const [state, dispatch] = useReducer(reducer, initState);

  const countUp = () => dispatch(actions.countUp({ count: adjustTSA.countUp }));
  const countDown = () =>
    dispatch(actions.countDown({ count: adjustTSA.countDown }));
  const countReset = () => dispatch(actions.countReset());

  return {
    ...state,
    operations: { countUp, countDown, countReset },
  };
};
