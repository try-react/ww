import { useSelectors } from "~/store/fizzBuzz/hooks";

export const useFizzBuzzAggregate = () => {
  const { selectors, ui } = useSelectors();
  return { selectors, ui };
};
export type Props = ReturnType<typeof useFizzBuzzAggregate>;
