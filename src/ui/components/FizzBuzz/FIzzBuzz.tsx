import React, { FC } from "react";
import { Props } from "~/useCase/useFizzBuzz";
import { CountButton } from "../_common/Button/CountButton";

export const FizzBuzz: FC<Props> = (props) => (
  <div className="fizz-buzz">
    <CountButton onClick={props.operations.countUp} data-testid="upButton">
      カウントアップ: 👍
    </CountButton>

    <CountButton
      onClick={props.operations.countDown}
      disabled={props.selectors.isLowerLimit}
      data-testid="downButton"
    >
      カウントダウン: 👎
    </CountButton>

    <CountButton
      onClick={props.operations.countReset}
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
