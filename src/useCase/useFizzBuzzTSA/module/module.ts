import { createAction, createReducer, ActionType } from "typesafe-actions";
import {
  Count,
  FizzBuzzLabel,
  fizzBuzz,
  fizzBuzzObjFactory,
} from "~/domain/fizzBuzz";

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
  .handleAction(actions.countUp, (state, action) =>
    fizzBuzzObjFactory.up({
      count: state.count,
      inputValue: action.payload.count,
    })
  )
  .handleAction(actions.countDown, (state, action) =>
    fizzBuzzObjFactory.down({
      count: state.count,
      inputValue: action.payload.count,
    })
  )
  .handleAction(actions.countReset, () =>
    fizzBuzzObjFactory.reset({
      count: initState.count,
      inputValue: initState.count,
    })
  );
