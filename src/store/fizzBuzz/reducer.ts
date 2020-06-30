import { ReadonlyDeep } from "type-fest";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";
import { createReducer } from "@reduxjs/toolkit";
import { actions, typeGuard } from "./actions";

export type State = ReadonlyDeep<{
  count: Count;
  label: FizzBuzzLabel;
}>;
const initialState: State = fizzBuzz.factory.reset();

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.recalculate, (state, action) => ({
      count: state.count + action.payload.count,
      label: fizzBuzz.createLabel(state.count + action.payload.count),
    }))
    /**
     * 検証用
     * `type`などに一致させ、ローディングなどの制御などに使用する
     * `typeGuard.isRecalculate`は、A | B | C ぐらいのざっくりしたマッチが良い
     */
    .addMatcher(typeGuard.isRecalculate, (state, _action) => state)
);
