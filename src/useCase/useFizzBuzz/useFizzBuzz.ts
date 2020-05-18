import { useReducer } from "react";
import { reducer, initState, actions } from "./module";
import { adjust } from "~/domain/fizzBuzz";

export const useFizzBuzz = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const countUp = () => dispatch(actions.countUp({ count: adjust.countUp }));
  const countDown = () =>
    dispatch(actions.countDown({ count: adjust.countDown }));
  const countReset = () => dispatch(actions.countReset());

  return {
    ...state,
    operations: { countUp, countDown, countReset },
  };
};

export type Props = ReturnType<typeof useFizzBuzz>;
