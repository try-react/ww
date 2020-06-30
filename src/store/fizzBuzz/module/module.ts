import { ReadonlyDeep } from "type-fest";
import { createAction, createReducer, ActionType } from "typesafe-actions";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";

export type State = ReadonlyDeep<{
  count: Count;
  label: FizzBuzzLabel;
}>;

export const initialState: State = fizzBuzz.factory.reset();

export const actions = {
  recalculate: createAction("FizzBuzz/recalculate")<{ count: Count }>(),
} as const;
type Actions = ActionType<typeof actions>;

export const reducer = createReducer<State, Actions>(initialState).handleAction(
  actions.recalculate,
  (state, action) => ({
    count: action.payload.count,
    label: fizzBuzz.createLabel(action.payload.count),
  })
);
