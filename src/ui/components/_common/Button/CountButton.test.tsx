import React from "react";
import { CountButton } from ".";
import renderer from "react-test-renderer";

describe("Snapshot", () => {
  it("初期状態", () => {
    const tree = renderer.create(<CountButton>テスト</CountButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
