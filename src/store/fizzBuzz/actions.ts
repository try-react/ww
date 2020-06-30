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
