import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { EasyCounter } from ".";

const initState = {
  count: 0,
};

const getTarget = () => {
  const { getByTestId } = render(<EasyCounter />);

  return {
    label: getByTestId("label"),
    button: getByTestId("button"),
  };
};

beforeEach(cleanup);

it("初期状態", () => {
  const expected = initState.count.toString();
  const el = getTarget();

  expect(el.label.innerHTML).toEqual(expected);
});

it("カウントアップをクリックして、カウントが増えたか", () => {
  const clickCnt = 3;
  const expected = clickCnt.toString();
  const el = getTarget();
  [...Array(clickCnt)].forEach(() => fireEvent.click(el.button));

  expect(el.label.innerHTML).toEqual(expected);
});
