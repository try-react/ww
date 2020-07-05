import React, { FC } from "react";
import { Props } from "~/useCase/useFizzBuzz/useFizzBuzzState";
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
      disabled={props.ui.isLowerLimit}
      data-testid="decrementButton"
    >
      減らす: 👎
    </CountButton>

    <CountButton
      onClick={props.operations.reset}
      disabled={props.ui.isInitCount}
      data-testid="resetButton"
    >
      カウントリセット: 🔰
    </CountButton>

    <p className="fizz-buzz-label" data-testid="countLabel">
      カウント [<span>{props.domain.count}</span>]
    </p>
    <p className="fizz-buzz-label" data-testid="fizzBUzzLabel">
      <span>
        {props.domain.label}
        {props.ui.isFizzBuzz && "😍"}
      </span>
    </p>
  </div>
);
