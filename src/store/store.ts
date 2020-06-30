import { configureStore } from "@reduxjs/toolkit";
import * as fizzBuzz from "./fizzBuzz/module";
import { ActionType } from "typesafe-actions";

export const store = configureStore({
  reducer: {
    fizzBuzz: fizzBuzz.reducer,
  },
});

type Store = typeof store;
export type RootState = ReturnType<Store["getState"]>;
export type RootAction = ActionType<typeof fizzBuzz["actions"]>;
