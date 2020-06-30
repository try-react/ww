import React, { FC } from "react";
import type { Props } from "~/useCase/useFizzBuzzAggregate";

export const FizzBuzzAggregate: FC<Props> = (props) => (
  <ul>
    <li>カウント: {props.selectors.fizzBuzz.count}</li>
    <li>
      {props.ui.isFizzBuzz ? props.selectors.fizzBuzz.label + "🍣" : "❌"}
    </li>
  </ul>
);
