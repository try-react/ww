import { State, Actions, actions, reducer } from ".";
import { label } from "~/domain/fizzBuzz";

type TestData = { state: State; action: Actions; newState: State };
const testData: TestData[][] = [
  [
    {
      state: { count: 0, label: label.nothing },
      action: actions.countUp({ count: 1 }),
      newState: { count: 1, label: label.nothing },
    },
  ],
  [
    {
      state: { count: 1, label: label.nothing },
      action: actions.countDown({ count: 1 }),
      newState: { count: 0, label: label.nothing },
    },
  ],
  [
    {
      state: { count: 1, label: label.nothing },
      action: actions.countReset(),
      newState: { count: 0, label: label.nothing },
    },
  ],
];

it.each(testData)(
  "パラメタを渡して結果の県境 %o",
  ({ action, state, newState }) =>
    expect(reducer(state, action)).toEqual(newState)
);
