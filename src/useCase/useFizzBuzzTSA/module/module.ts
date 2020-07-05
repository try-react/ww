import { ReadonlyDeep } from "type-fest";
import {
  createAction,
  createReducer,
  ActionType,
  createAsyncAction,
  getType,
} from "typesafe-actions";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";
import { createReducer as createUseReducer } from "react-use";

export type State = ReadonlyDeep<{
  count: Count;
  label: FizzBuzzLabel;
}>;

export const initialState: State = fizzBuzz.factory.reset();

export const actions = {
  increment: createAsyncAction(
    "FizzBuzzTSA/increment/request",
    "FizzBuzzTSA/increment/success",
    "FizzBuzzTSA/increment/failure"
  )<[null, () => Promise<unknown>], { count: Count }, undefined>(),
  decrement: createAction("FizzBuzzTSA/decrement")<{ count: Count }>(),
  reset: createAction("FizzBuzzTSA/reset")(),
} as const;
export type Actions = ActionType<typeof actions>;

export const reducer = createReducer<State, Actions>(initialState)
  .handleAction(actions.increment.request, (state) => ({
    ...state,
    // @ts-ignore 検証用
    label: "取得中",
  }))
  .handleAction(actions.increment.failure, (state) => ({
    ...state,
    // @ts-ignore 検証用
    label: "失敗",
  }))
  .handleAction(actions.increment.success, (state, action) =>
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

export const useReducer = createUseReducer<Actions, State>(
  (s) => (n) => async (a) => {
    n(a);
    if (a.type === getType(actions.increment.request)) {
      await a
        .meta()
        .then(() => {
          s.dispatch(
            actions.increment.success({ count: fizzBuzz.definedVO.adjust })
          );
        })
        .catch(() => {
          s.dispatch(actions.increment.failure());
        });
    }
  }
);
