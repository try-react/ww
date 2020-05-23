import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initialState: State = {
  count: 0,
  label: fizzBuzz.createFizzBuzzLabel(0),
} as const;

export const actions = {
  increment: (payload: { count: Count }) =>
    ({ type: "increment", payload } as const),
  decrement: (payload: { count: Count }) =>
    ({ type: "decrement", payload } as const),
  reset: () => ({ payload: undefined, type: "reset" } as const),
} as const;
export type Actions = ReturnType<typeof actions[keyof typeof actions]>;

export type Reducer = (s: State, a: Actions) => State;
export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return fizzBuzz.factory.increment({
        count: state.count,
        inputValue: action.payload.count,
      });

    case "decrement":
      return fizzBuzz.factory.decrement({
        count: state.count,
        inputValue: action.payload.count,
      });

    case "reset":
    default:
      return fizzBuzz.factory.reset();
  }
};
