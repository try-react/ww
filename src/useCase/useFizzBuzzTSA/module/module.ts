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
  countUp: createAction("countUp")<Count>(),
  countDown: createAction("countDown")<Count>(),
  countReset: createAction("countReset")(),
} as const;
type Actions = ActionType<typeof actions>;

export const reducer = createReducer<State, Actions>(initState)
  .handleAction(actions.countUp, ({ count }, { payload }) => ({
    count: count + payload,
    label: fizzBuzz(count + payload),
  }))
  .handleAction(actions.countDown, ({ count }, { payload }) => ({
    count: count - payload,
    label: fizzBuzz(count - payload),
  }))
  .handleAction(actions.countReset, () => ({
    ...initState,
  }));
