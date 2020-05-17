import React, { FC } from "react";
import { Props } from "~/useCase/useFizzBuzz";

export const FizzBuzz: FC<Props> = ({ operations, count, label }) => (
  <>
    <h2>FIzzBuzz</h2>
    <div className="fizz-buzz">
      <button
        type="button"
        onClick={operations.countReset}
        className="count-button"
        data-testid="resetButton"
      >
        カウントリセット
      </button>
      <button
        type="button"
        onClick={operations.countUp}
        className="count-button"
        data-testid="upButton"
      >
        カウントアップ👍
      </button>
      <button
        type="button"
        onClick={operations.countDown}
        className="count-button"
        data-testid="downButton"
      >
        カウントダウン👎
      </button>
      <p className="fizz-buzz-label" data-testid="countLabel">
        カウント [<span>{count}</span>]
      </p>
      <p className="fizz-buzz-label" data-testid="fizzBUzzLabel">
        <span>{label}</span>
      </p>
    </div>
  </>
);
