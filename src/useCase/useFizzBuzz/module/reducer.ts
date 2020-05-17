import { adjust, fizzBuzz } from "~/domain/fizzBuzz";
import { State, initState } from "./state";
import { Actions } from "./action";

type Reducer = (s: State, a: Actions) => State;

export const reducer: Reducer = (state, action) => {
  if (action.type === "countDown")
    return {
      count: state.count - adjust[action.type],
      label: fizzBuzz(state.count - adjust[action.type]),
    };
  if (action.type === "countUp")
    return {
      count: state.count + adjust[action.type],
      label: fizzBuzz(state.count + adjust[action.type]),
    };
  return { ...initState };
};
