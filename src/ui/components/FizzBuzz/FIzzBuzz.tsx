import React, { FC } from "react";
import { Props } from "~/useCase/useFizzBuzz";
import { CountButton } from "../_common/Button/CountButton";

export const FizzBuzz: FC<Props> = (props) => (
  <div className="fizz-buzz">
    <CountButton
      onClick={props.operations.increment}
      data-testid="incrementButton"
    >
      増やす: 👍
    </CountButton>

    <CountButton
      onClick={props.operations.decrement}
      disabled={props.selectors.isLowerLimit}
      data-testid="decrementButton"
    >
      減らす: 👎
    </CountButton>

    <CountButton
      onClick={props.operations.reset}
      disabled={props.selectors.isInitCount}
      data-testid="resetButton"
    >
      カウントリセット: 🔰
    </CountButton>

    <p className="fizz-buzz-label" data-testid="countLabel">
      カウント [<span>{props.count}</span>]
    </p>
    <p className="fizz-buzz-label" data-testid="fizzBUzzLabel">
      <span>
        {props.label}
        {props.selectors.isFizzBuzz && "😍"}
      </span>
    </p>
  </div>
);
