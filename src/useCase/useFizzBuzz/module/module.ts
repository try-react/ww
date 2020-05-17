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
export const reducer: Reducer = ({ count }, { type }) => {
  if (type === "countReset") return { ...initState };

  if (type === "countUp")
    return {
      count: count + adjust[type],
      label: fizzBuzz(count + adjust[type]),
    };

  if (type === "countDown")
    return {
      count: count - adjust[type],
      label: fizzBuzz(count - adjust[type]),
    };

  return { ...initState };
};
