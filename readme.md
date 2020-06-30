## アウトプット

[![Netlify Status](https://api.netlify.com/api/v1/badges/6b27c592-08c9-4110-9f87-6b564787be0e/deploy-status)](https://app.netlify.com/sites/stoic-elion-b2fdb6/deploys)
- https://stoic-elion-b2fdb6.netlify.app/

[![codecov](https://codecov.io/gh/try-react/ww/branch/master/graph/badge.svg)](https://codecov.io/gh/try-react/ww)
- https://codecov.io/gh/try-react/ww


---

## LocalState

ducksパターンで密にする方針
- 自己完結している為

```ts
import { ReadonlyDeep } from "type-fest";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";
import { createReducer, createAction } from "@reduxjs/toolkit";

export type State = ReadonlyDeep<{
  count: Count;
  label: FizzBuzzLabel;
}>;

export const initialState: State = fizzBuzz.factory.reset();

export const actions = {
  increment: createAction<{ count: Count }>("increment"),
  decrement: createAction<{ count: Count }>("decrement"),
  reset: createAction("reset"),
} as const;

export type Actions = ReturnType<typeof actions[keyof typeof actions]>;

export const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(actions.increment, (state, action) =>
      fizzBuzz.factory.increment({
        count: state.count,
        inputValue: action.payload.count,
      })
    )
    .addCase(actions.decrement, (state, action) =>
      fizzBuzz.factory.decrement({
        count: state.count,
        inputValue: action.payload.count,
      })
    )
    .addCase(actions.reset, fizzBuzz.factory.reset)
    .addDefaultCase(fizzBuzz.factory.reset)
);
```

## GlobalState

re-ducksパターンで拡張性をあげる
- アプリケーション全体で使用するため、duckパターンだと可読性がつらい

```ts
// reducer

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
    .addMatcher(typeGuard.isRecalculate, (state, _action) => state)
);
```

```ts
// actions

import { Count } from "~/domain/fizzBuzz";
import { createAction } from "@reduxjs/toolkit";
import type { AnyAction } from "@reduxjs/toolkit";

type ActionsObject = typeof actions;
export type Actions = ReturnType<ActionsObject[keyof ActionsObject]>;

export const actions = {
  recalculate: createAction<{ count: Count }>("FizzBuzz/recalculate"),
} as const;

export const typeGuard = {
  isRecalculate: (action: AnyAction): action is ActionsObject["recalculate"] =>
    action.type === actions.recalculate.type,
};
```

```ts
import { useSelector, useDispatch } from "react-redux";
import { actions } from "~/store/fizzBuzz/actions";
import { Count } from "~/domain/fizzBuzz";
import { useEffect } from "react";
import type { State } from "./reducer";
import * as fizzBuzz from "~/domain/fizzBuzz";

export const useSelectors = () => {
  const state = useSelector((rootState) => rootState.fizzBuzz);

  return {
    selectors: {
      fizzBuzz: state,
    },
    ui: {
      isFizzBuzz: fizzBuzz.isFizzBuzz(state.label),
    },
  };
};

export const useOperations = () => {
  const dispatch = useDispatch();

  return {
    operations: {
      recalculate: (count: Count) => {
        dispatch(actions.recalculate({ count }));
      },
    },
  };
};

export const useCountEffect = (count: State["count"]) => {
  const { operations } = useOperations();

  useEffect(() => {
    operations.recalculate(count);
  }, [operations, count]);
};
```
