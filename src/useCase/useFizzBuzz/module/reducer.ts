import { adjust, fizzBuzz } from "~/domain/fizzBuzz";
import { State, initState } from "./state";
import { Actions } from "./action";

type Reducer = (s: State, a: Actions) => State;

export const reducer: Reducer = ({ count }, { type }) => {
  if (type === "countDown")
    return {
      count: count - adjust[type],
      label: fizzBuzz(count - adjust[type]),
    };
  if (type === "countUp")
    return {
      count: count + adjust[type],
      label: fizzBuzz(count + adjust[type]),
    };
  return { ...initState };
};
