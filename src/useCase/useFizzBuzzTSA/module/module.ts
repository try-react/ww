import { createAction, createReducer, ActionType } from "typesafe-actions";
import { Count, FizzBuzzLabel, fizzBuzz } from "~/domain/fizzBuzz";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initState: State = {
  count: 0,
  label: "",
};

export const actions = {
  countUp: createAction("countUp")<Count>(),
  countDown: createAction("countDown")<Count>(),
  countReset: createAction("countReset")(),
};
type Actions = ActionType<typeof actions>;

export const reducer = createReducer<State, Actions>(initState)
  .handleAction(actions.countUp, (s, a) => ({
    count: s.count + a.payload,
    label: fizzBuzz(s.count + a.payload),
  }))
  .handleAction(actions.countDown, (s, a) => ({
    count: s.count - a.payload,
    label: fizzBuzz(s.count + a.payload),
  }))
  .handleAction(actions.countReset, () => ({
    ...initState,
  }));
