import { ReadonlyDeep } from "type-fest";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";

type State = ReadonlyDeep<{
  count: Count;
  label: FizzBuzzLabel;
}>;

export const initialState: State = fizzBuzz.factory.reset();

export const actions = {
  increment: (payload: { count: Count }) =>
    ({ type: "FizzBuzzVanillaTS/increment", payload } as const),
  decrement: (payload: { count: Count }) =>
    ({ type: "FizzBuzzVanillaTS/decrement", payload } as const),
  reset: () =>
    ({ payload: undefined, type: "FizzBuzzVanillaTS/reset" } as const),
} as const;
export type Actions = ReturnType<typeof actions[keyof typeof actions]>;

export type Reducer = (s: State, a: Actions) => State;
export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "FizzBuzzVanillaTS/increment":
      return fizzBuzz.factory.increment({
        count: state.count,
        inputValue: action.payload.count,
      });

    case "FizzBuzzVanillaTS/decrement":
      return fizzBuzz.factory.decrement({
        count: state.count,
        inputValue: action.payload.count,
      });

    case "FizzBuzzVanillaTS/reset":
    default:
      return fizzBuzz.factory.reset();
  }
};
