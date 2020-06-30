import React, { FC } from "react";
import { useSelectors } from "~/store/fizzBuzz/useFizzBuzz";

export const FizzBuzzAggregate: FC = () => {
  const { selectors } = useSelectors();
  return (
    <ul>
      <li>カウント: {selectors.fizzBuzz.count}</li>
      <li>ラベル: {selectors.fizzBuzz.label}</li>
    </ul>
  );
};
