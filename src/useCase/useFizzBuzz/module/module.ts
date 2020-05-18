import {
  Count,
  FizzBuzzLabel,
  fizzBuzz,
  fizzBuzzObjFactory,
} from "~/domain/fizzBuzz";

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
  switch (action.type) {
    case "countUp":
      return fizzBuzzObjFactory.up({
        count: state.count,
        inputValue: action.payload.count,
      });

    case "countDown":
      return fizzBuzzObjFactory.down({
        count: state.count,
        inputValue: action.payload.count,
      });

    case "countReset":
    default:
      return fizzBuzzObjFactory.reset({
        count: initState.count,
        inputValue: initState.count,
      });
  }
};
