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
// src/presenter/components/ecosystem/FizzBuzz/util/module.ts

import { ReadonlyDeep } from "type-fest";
import * as fizzBuzz from "~/domain/fizzBuzz";
import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";

export type State = ReadonlyDeep<{
  count: Count;
  label: FizzBuzzLabel;
}>;

export const initialState: State = fizzBuzz.factory.reset();

export const actions = {
  increment: (payload: { count: Count }) =>
    ({ type: "increment", payload } as const),
  decrement: (payload: { count: Count }) =>
    ({ type: "decrement", payload } as const),
  reset: () => ({ payload: undefined, type: "reset" } as const),
} as const;
export type Actions = ReturnType<typeof actions[keyof typeof actions]>;

export type Reducer = (s: State, a: Actions) => State;
export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return fizzBuzz.factory.increment({
        count: state.count,
        inputValue: action.payload.count,
      });

    case "decrement":
      return fizzBuzz.factory.decrement({
        count: state.count,
        inputValue: action.payload.count,
      });

    case "reset":
    default:
      return fizzBuzz.factory.reset();
  }
};
```

## GlobalState

re-ducksパターンで拡張性をあげる
- アプリケーションの機能追加をうけいれやすくするため
