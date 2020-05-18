import { createAction, createReducer, ActionType } from "typesafe-actions";
import { Count, FizzBuzzLabel, fizzBuzz } from "~/domain/fizzBuzz";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initState: State = {
  count: 0,
  label: fizzBuzz(0),
} as const;

export const actions = {
  countUp: createAction("countUp")<{ count: Count }>(),
  countDown: createAction("countDown")<{ count: Count }>(),
  countReset: createAction("countReset")(),
} as const;
type Actions = ActionType<typeof actions>;

export const reducer = createReducer<State, Actions>(initState)
  .handleAction(actions.countUp, (state, action) => ({
    count: state.count + action.payload.count,
    label: fizzBuzz(state.count + action.payload.count),
  }))
  .handleAction(actions.countDown, (state, action) => ({
    count: state.count - action.payload.count,
    label: fizzBuzz(state.count - action.payload.count),
  }))
  .handleAction(actions.countReset, () => ({
    ...initState,
  }));
