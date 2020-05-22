import { createAction, createReducer, ActionType } from "typesafe-actions";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel, fizzBuzzObjFactory } from "~/domain/fizzBuzz";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initialState: State = {
  count: 0,
  label: fizzBuzz.createFizzBuzzLabel(0),
} as const;

export const actions = {
  increment: createAction("increment")<{ count: Count }>(),
  decrement: createAction("decrement")<{ count: Count }>(),
  reset: createAction("reset")(),
} as const;
type Actions = ActionType<typeof actions>;

export const reducer = createReducer<State, Actions>(initialState)
  .handleAction(actions.increment, (state, action) =>
    fizzBuzzObjFactory.increment({
      count: state.count,
      inputValue: action.payload.count,
    })
  )
  .handleAction(actions.decrement, (state, action) =>
    fizzBuzzObjFactory.decrement({
      count: state.count,
      inputValue: action.payload.count,
    })
  )
  .handleAction(actions.reset, () => fizzBuzzObjFactory.reset());
