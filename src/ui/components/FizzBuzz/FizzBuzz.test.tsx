import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { FizzBuzz } from ".";
import { Props } from "~/useCase/useFizzBuzz";

const getTarget = (props: Props) => {
  const { getByTestId } = render(<FizzBuzz {...props} />);

  return {
    resetButton: getByTestId("resetButton"),
    upButton: getByTestId("upButton"),
    downButton: getByTestId("downButton"),
    countLabel: getByTestId("countLabel"),
    fizzBUzzLabel: getByTestId("fizzBUzzLabel"),
  };
};

afterEach(cleanup);

describe("xx", () => {
  const props: Props = {
    count: 0,
    label: "",
    selectors: {
      isFizzBuzz: false,
      isInitCount: false,
      isLowerLimit: false,
    },
    operations: {
      countUp: jest.fn,
      countDown: jest.fn,
      countReset: jest.fn,
    },
  };
  it("カウントアップをクリックして、実行されたか", () => {
    const clickCnt = 3;
    const spy = jest.spyOn(props.operations, "countUp");
    const { upButton } = getTarget(props);
    [...Array(clickCnt)].forEach(() => fireEvent.click(upButton));

    expect(spy).toHaveBeenCalledTimes(clickCnt);
  });

  it("カウントダウンをクリックして、実行されたか", () => {
    const clickCnt = 3;
    const spy = jest.spyOn(props.operations, "countDown");
    const { downButton } = getTarget(props);
    [...Array(clickCnt)].forEach(() => fireEvent.click(downButton));

    expect(spy).toHaveBeenCalledTimes(clickCnt);
  });

  it("カウントリセットをクリックして、実行されたか", () => {
    const clickCnt = 3;
    const spy = jest.spyOn(props.operations, "countReset");
    const { resetButton } = getTarget(props);
    [...Array(clickCnt)].forEach(() => fireEvent.click(resetButton));

    expect(spy).toHaveBeenCalledTimes(clickCnt);
  });
});

describe("x", () => {
  const props: Props = {
    count: 0,
    label: "",
    selectors: {
      isFizzBuzz: true,
      isInitCount: true,
      isLowerLimit: true,
    },
    operations: {
      countUp: jest.fn,
      countDown: jest.fn,
      countReset: jest.fn,
    },
  };
  it("カウントアップをクリックして、実行されたか", () => {
    const clickCnt = 3;
    const spy = jest.spyOn(props.operations, "countUp");
    const { upButton } = getTarget(props);
    [...Array(clickCnt)].forEach(() => fireEvent.click(upButton));

    expect(spy).toHaveBeenCalledTimes(clickCnt);
  });

  it("カウントダウンをクリックして、実行されないか", () => {
    const clickCnt = 3;
    const spy = jest.spyOn(props.operations, "countDown");
    const { downButton } = getTarget(props);
    [...Array(clickCnt)].forEach(() => fireEvent.click(downButton));

    expect(spy).toHaveBeenCalledTimes(0);
  });

  it("カウントリセットをクリックして、実行されないか", () => {
    const clickCnt = 3;
    const spy = jest.spyOn(props.operations, "countReset");
    const { resetButton } = getTarget(props);
    [...Array(clickCnt)].forEach(() => fireEvent.click(resetButton));

    expect(spy).toHaveBeenCalledTimes(0);
  });
});
