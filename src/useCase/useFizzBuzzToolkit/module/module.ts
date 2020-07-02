import { ReadonlyDeep } from "type-fest";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";
import { createReducer, createAction } from "@reduxjs/toolkit";

export type State = ReadonlyDeep<{
  count: Count;
  label: FizzBuzzLabel;
}>;

export const initialState: State = fizzBuzz.factory.reset();

export const actions = {
  increment: createAction<{ count: Count }>("FizzBuzzToolKit/increment"),
  decrement: createAction<{ count: Count }>("FizzBuzzToolKit/decrement"),
  reset: createAction("FizzBuzzToolKit/reset"),
} as const;

export type Actions = ReturnType<typeof actions[keyof typeof actions]>;

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.increment, (state, action) =>
      fizzBuzz.factory.increment({
        count: state.count,
        inputValue: action.payload.count,
      })
    )
    .addCase(actions.decrement, (state, action) =>
      fizzBuzz.factory.decrement({
        count: state.count,
        inputValue: action.payload.count,
      })
    )
    .addCase(actions.reset, fizzBuzz.factory.reset)
    .addDefaultCase(fizzBuzz.factory.reset)
);
