import { Count, FizzBuzzLabel, fizzBuzz } from "~/domain/fizzBuzz";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initState: State = {
  count: 0,
  label: fizzBuzz(0),
} as const;

export const actions = {
  countUp: (payload: { count: Count }) =>
    ({ type: "countUp", payload } as const),
  countDown: (payload: { count: Count }) =>
    ({ type: "countDown", payload } as const),
  countReset: () => ({ type: "countReset" } as const),
} as const;
export type Actions = ReturnType<typeof actions[keyof typeof actions]>;

type Reducer = (s: State, a: Actions) => State;
export const reducer: Reducer = (state, action) => {
  if (action.type === "countUp") {
    return {
      count: state.count + action.payload.count,
      label: fizzBuzz(state.count + action.payload.count),
    };
  }

  if (action.type === "countDown") {
    return {
      count: state.count - action.payload.count,
      label: fizzBuzz(state.count - action.payload.count),
    };
  }

  return { ...initState };
};
