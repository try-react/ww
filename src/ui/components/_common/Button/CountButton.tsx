import React, { FC } from "react";

type Props = JSX.IntrinsicElements["button"];

export const CountButton: FC<Props> = (props) => (
  <button type="button" className="count-button" {...props}>
    {props.children}
  </button>
);
