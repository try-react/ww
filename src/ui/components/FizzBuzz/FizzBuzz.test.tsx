import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { FizzBuzz } from ".";
import { Props } from "~/useCase/useFizzBuzz";

const getTarget = (props: Props) => {
  const { getByTestId } = render(<FizzBuzz {...props} />);

  return {
    resetButton: getByTestId("resetButton"),
    incrementButton: getByTestId("incrementButton"),
    decrementButton: getByTestId("decrementButton"),
    countLabel: getByTestId("countLabel"),
    fizzBUzzLabel: getByTestId("fizzBUzzLabel"),
  };
};

const getProps = (): Props => ({
  count: 0,
  label: "",
  selectors: {
    isFizzBuzz: false,
    isInitCount: false,
    isLowerLimit: false,
  },
  operations: {
    increment: jest.fn,
    decrement: jest.fn,
    reset: jest.fn,
  },
});
const clickCnt = 3;

afterEach(cleanup);

it("増やすをクリックして、実行されたか", () => {
  const props = getProps();
  const spy = jest.spyOn(props.operations, "increment");
  const { incrementButton } = getTarget(props);
  [...Array(clickCnt)].forEach(() => fireEvent.click(incrementButton));

  expect(spy).toHaveBeenCalledTimes(clickCnt);
});

it("減らすをクリックして、実行されたか", () => {
  const props = getProps();

  const spy = jest.spyOn(props.operations, "decrement");
  const { decrementButton } = getTarget(props);
  [...Array(clickCnt)].forEach(() => fireEvent.click(decrementButton));

  expect(spy).toHaveBeenCalledTimes(clickCnt);
});

it("カウントリセットをクリックして、実行されたか", () => {
  const props = getProps();

  const spy = jest.spyOn(props.operations, "reset");
  const { resetButton } = getTarget(props);
  [...Array(clickCnt)].forEach(() => fireEvent.click(resetButton));

  expect(spy).toHaveBeenCalledTimes(clickCnt);
});

it("減らすをクリックして、実行されないか", () => {
  const props: Props = {
    ...getProps(),
    selectors: {
      isFizzBuzz: true,
      isInitCount: true,
      isLowerLimit: true,
    },
  };

  const spy = jest.spyOn(props.operations, "decrement");
  const { decrementButton } = getTarget(props);
  [...Array(clickCnt)].forEach(() => fireEvent.click(decrementButton));

  expect(spy).toHaveBeenCalledTimes(0);
});

it("カウントリセットをクリックして、実行されないか", () => {
  const props: Props = {
    ...getProps(),
    selectors: {
      isFizzBuzz: true,
      isInitCount: true,
      isLowerLimit: true,
    },
  };

  const spy = jest.spyOn(props.operations, "reset");
  const { resetButton } = getTarget(props);
  [...Array(clickCnt)].forEach(() => fireEvent.click(resetButton));

  expect(spy).toHaveBeenCalledTimes(0);
});
