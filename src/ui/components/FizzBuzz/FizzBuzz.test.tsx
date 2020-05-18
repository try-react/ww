import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { FizzBuzz } from ".";
import { Props } from "~/useCase/useFizzBuzz";

const props: Props = {
  count: 0,
  label: "",
  operations: {
    countUp: jest.fn,
    countDown: jest.fn,
    countReset: jest.fn,
  },
};

const getTarget = () => {
  const { getByTestId } = render(<FizzBuzz {...props} />);

  return {
    resetButton: getByTestId("resetButton"),
    upButton: getByTestId("upButton"),
    downButton: getByTestId("downButton"),
    countLabel: getByTestId("countLabel"),
    fizzBUzzLabel: getByTestId("fizzBUzzLabel"),
  };
};

beforeEach(cleanup);

it.each(Object.values(getTarget()))("初期状態", (el) =>
  expect(el).toBeDefined()
);

it("カウントアップをクリックして、実行されたか", () => {
  const clickCnt = 3;
  const spy = jest.spyOn(props.operations, "countUp");
  const { upButton } = getTarget();
  [...Array(clickCnt)].forEach(() => fireEvent.click(upButton));

  expect(spy).toHaveBeenCalledTimes(clickCnt);
});

// it("カウントダウンをクリックして、実行されたか", () => {
//   const clickCnt = 3;
//   const spy = jest.spyOn(props.operations, "countDown");
//   const { downButton } = getTarget();
//   [...Array(clickCnt)].forEach(() => fireEvent.click(downButton));

//   expect(spy).toHaveBeenCalledTimes(clickCnt);
// });

// it("カウントリセットをクリックして、実行されたか", () => {
//   const clickCnt = 3;
//   const spy = jest.spyOn(props.operations, "countReset");
//   const { resetButton } = getTarget();
//   [...Array(clickCnt)].forEach(() => fireEvent.click(resetButton));

//   expect(spy).toHaveBeenCalledTimes(clickCnt);
// });
