import { createAction, createReducer, ActionType } from "typesafe-actions";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initialState: State = fizzBuzz.factory.reset();

export const actions = {
  increment: createAction("increment")<{ count: Count }>(),
  decrement: createAction("decrement")<{ count: Count }>(),
  reset: createAction("reset")(),
} as const;
type Actions = ActionType<typeof actions>;

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
