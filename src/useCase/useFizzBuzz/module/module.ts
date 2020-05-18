import { adjust, Count, FizzBuzzLabel, fizzBuzz } from "~/domain/fizzBuzz";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initState: State = {
  count: 0,
  label: fizzBuzz(0),
} as const;

export const actions = {
  countUp: () => ({ type: "countUp" } as const),
  countDown: () => ({ type: "countDown" } as const),
  countReset: () => ({ type: "countReset" } as const),
} as const;
export type Actions = ReturnType<typeof actions[keyof typeof actions]>;

type Reducer = (s: State, a: Actions) => State;
export const reducer: Reducer = (state, action) => {
  if (action.type === "countUp") {
    return {
      count: state.count + adjust[action.type],
      label: fizzBuzz(state.count + adjust[action.type]),
    };
  }

  if (action.type === "countDown") {
    return {
      count: state.count - adjust[action.type],
      label: fizzBuzz(state.count - adjust[action.type]),
    };
  }

  return { ...initState };
};
