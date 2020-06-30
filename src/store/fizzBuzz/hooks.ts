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
