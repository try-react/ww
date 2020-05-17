import { Count, FizzBuzzLabel } from "~/domain/fizzBuzz";

export type State = {
  count: Count;
  label: FizzBuzzLabel;
};

export const initState: State = {
  count: 0,
  label: "",
};
