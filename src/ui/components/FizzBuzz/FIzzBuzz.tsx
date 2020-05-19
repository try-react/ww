import React, { FC } from "react";
import { Props } from "~/useCase/useFizzBuzz";

export const FizzBuzz: FC<Props> = (props) => (
  <div className="fizz-buzz">
    <button
      type="button"
      onClick={props.operations.countUp}
      className="count-button"
      data-testid="upButton"
    >
      カウントアップ: 👍
    </button>
    <button
      type="button"
      onClick={props.operations.countDown}
      className="count-button"
      data-testid="downButton"
      disabled={props.selectors.isLowerLimit}
    >
      カウントダウン: {props.selectors.isLowerLimit ? "❌" : "👎"}
    </button>
    <button
      type="button"
      onClick={props.operations.countReset}
      className="count-button"
      data-testid="resetButton"
      disabled={props.selectors.isInitCount}
    >
      カウントリセット: {props.selectors.isInitCount ? "❌" : "⭕️"}
    </button>
    <p className="fizz-buzz-label" data-testid="countLabel">
      カウント [<span>{props.count}</span>]
    </p>
    <p className="fizz-buzz-label" data-testid="fizzBUzzLabel">
      <span>{props.label}</span>
    </p>
  </div>
);
