import { useSelector, useDispatch } from "react-redux";
import { actions } from "~/store/fizzBuzz/module";
import { Count } from "~/domain/fizzBuzz";
import { useEffect } from "react";
import type { State } from "./module";

export const useSelectors = () => {
  const state = useSelector((rootState) => rootState.fizzBuzz);

  return {
    selectors: {
      fizzBuzz: { ...state },
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
