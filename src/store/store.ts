import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import type { Actions } from "./fizzBuzz/actions";
import * as fizzBuzz from "./fizzBuzz/reducer";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    fizzBuzz: fizzBuzz.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

type Store = typeof store;
export type RootState = ReturnType<Store["getState"]>;
export type RootAction = Actions;
