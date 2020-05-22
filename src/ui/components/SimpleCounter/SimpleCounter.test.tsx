import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { SimpleCounter } from ".";
import { Props } from "~/useCase/useSimpleCounter";

const props: Props = {
  count: 0,
  countUp: jest.fn,
};

const getTarget = () => {
  const { getByTestId } = render(<SimpleCounter {...props} />);

  return {
    label: getByTestId("label"),
    button: getByTestId("button"),
  };
};

beforeEach(cleanup);

it("初期状態", () => {
  const el = getTarget();

  expect(el.label).toBeDefined();
  expect(el.button).toBeDefined();
});

it("カウントアップをクリックして、実行されたか", () => {
  const clickCnt = 3;
  const spy = jest.spyOn(props, "countUp");
  const el = getTarget();
  [...Array(clickCnt)].forEach(() => fireEvent.click(el.button));

  expect(spy).toHaveBeenCalledTimes(clickCnt);
});
