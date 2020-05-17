import { reducer, actions, initState, State } from "./module";

it("countUp", () => {
  const newState: State = { count: 1, label: "" };
  expect(reducer.handlers.countUp(initState, actions.countUp(1))).toEqual(
    newState
  );
});

it("countDown", () => {
  const newState: State = { count: -1, label: "" };
  expect(reducer.handlers.countDown(initState, actions.countDown(1))).toEqual(
    newState
  );
});

it("countReset", () => {
  const newState: State = { count: 0, label: "" };
  expect(reducer.handlers.countReset(initState, actions.countReset())).toEqual(
    newState
  );
});
