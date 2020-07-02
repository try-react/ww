import React from "react";
import type { FC } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useFizzBuzzEffect } from "./useFizzBuzzEffect";
import { useFizzBuzzState } from "./useFizzBuzzState";
import { Provider } from "react-redux";
import { store } from "~/store";

const Component: FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe("useFizzBuzzEffect", () => {
  it("クリック後にstoreのstateに変化があったか", () => {
    const { result } = renderHook(
      () => useFizzBuzzEffect({ useFizzBuzzState }),
      {
        wrapper: Component,
      }
    );

    const initState = { ...store.getState().fizzBuzz };
    act(result.current.operations.increment);
    expect(initState).not.toEqual(store.getState().fizzBuzz);
  });
});
