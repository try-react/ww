import React, { FC } from "react";
import { Props } from "~/useCase/useSimpleCounter";

export const SimpleCounter: FC<Props> = (props) => (
  <>
    <h2>シンプルなコンポーネント</h2>
    <ul>
      <li>pages/から、propsを貰う</li>
    </ul>
    <div className="counter">
      <button
        type="button"
        onClick={props.countUp}
        data-testid="button"
        className="count-button"
      >
        カウントアップ
      </button>
      <p>
        カウント:
        <span data-testid="label">{props.count}</span>
      </p>
    </div>
  </>
);
