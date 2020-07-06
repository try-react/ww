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
  increment: createAction("FizzBuzzTSA/increment")<{ count: Count }>(),
  decrement: createAction("FizzBuzzTSA/decrement")<{ count: Count }>(),
  reset: createAction("FizzBuzzTSA/reset")(),
} as const;
export type Actions = ActionType<typeof actions>;

export const reducer = createReducer<State, Actions>(initialState)
  .handleAction(actions.increment, (state, action) =>
    fizzBuzz.factory.increment({
      count: state.count,
      inputValue: action.payload.count,
    })
  )
  .handleAction(actions.decrement, (state, action) =>
    fizzBuzz.factory.decrement({
      count: state.count,
      inputValue: action.payload.count,
    })
  )
  .handleAction(actions.reset, fizzBuzz.factory.reset);
