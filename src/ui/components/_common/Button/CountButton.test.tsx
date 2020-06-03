import React from "react";
import { CountButton } from ".";
import renderer from "react-test-renderer";

it("Snapshot", () => {
  const tree = renderer.create(<CountButton>テスト</CountButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
