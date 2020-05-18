import { reducer, actions, initState, State } from "./module";
import { adjust } from "~/domain/fizzBuzz";

it("countUp", () => {
  const newState: State = { count: 1, label: "" };
  expect(
    reducer.handlers.countUp(
      initState,
      actions.countUp({ count: adjust.countUp })
    )
  ).toEqual(newState);
});

it("countDown", () => {
  const newState: State = { count: -1, label: "" };
  expect(
    reducer.handlers.countDown(
      initState,
      actions.countDown({ count: adjust.countDown })
    )
  ).toEqual(newState);
});

it("countReset", () => {
  const newState: State = { count: 0, label: "" };
  expect(reducer.handlers.countReset(initState, actions.countReset())).toEqual(
    newState
  );
});
