import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";
import { createSlice, createAction } from "@reduxjs/toolkit";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initialState: State = {
  count: 0,
  label: fizzBuzz.createFizzBuzzLabel(0),
} as const;

export const actions = {
  increment: createAction<{ count: Count }>("increment"),
  decrement: createAction<{ count: Count }>("decrement"),
  reset: createAction("reset"),
} as const;

export type Actions = ReturnType<typeof actions[keyof typeof actions]>;

export const { reducer } = createSlice({
  name: "fizzBuzzToolkit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.increment, (state, action) =>
      fizzBuzz.factory.increment({
        count: state.count,
        inputValue: action.payload.count,
      })
    );
    builder.addCase(actions.decrement, (state, action) =>
      fizzBuzz.factory.decrement({
        count: state.count,
        inputValue: action.payload.count,
      })
    );
    builder.addCase(actions.reset, () => fizzBuzz.factory.reset());
  },
});
