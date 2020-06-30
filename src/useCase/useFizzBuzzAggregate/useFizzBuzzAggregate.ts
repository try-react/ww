import { useSelectors } from "~/store/fizzBuzz/useFizzBuzz";

export const useFizzBuzzAggregate = () => {
  const { selectors, ui } = useSelectors();
  return { selectors, ui };
};
export type Props = ReturnType<typeof useFizzBuzzAggregate>;
