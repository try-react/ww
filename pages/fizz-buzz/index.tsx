import React from "react";
import { NextPage } from "next";
import { FizzBuzz } from "~/ui/components/FizzBuzz";
import { FizzBuzzAggregate as FizzBuzzAggregateComponent } from "~/ui/components/FizzBuzzAggregate";
import { fizzBuzz } from "~/controller/fizzBuzz";

const FizzBuzzTSOnly = () => <FizzBuzz {...fizzBuzz.useTSOnly()} />;
const FizzBuzzTSA = () => <FizzBuzz {...fizzBuzz.useTSA()} />;
const FizzBuzzToolkit = () => <FizzBuzz {...fizzBuzz.useToolkit()} />;
const FizzBuzzAggregate = () => (
  <FizzBuzzAggregateComponent {...fizzBuzz.useAggregate()} />
);

const Component: NextPage = () => (
  <div style={{ marginLeft: "auto", marginRight: "auto", width: 1200 }}>
    <h2>FizzBuzz (カウントの全体合計でfizz-buzz)</h2>
    <FizzBuzzAggregate />
    <hr />
    <h2>FIzzBuzz (ライブラリ未使用版)</h2>
    <FizzBuzzTSOnly />
    <hr />
    <h2>FIzzBuzz (typesafe-actions版)</h2>
    <FizzBuzzTSA />
    <hr />
    <h2>FIzzBuzz (@reduxjs/toolkit版)</h2>
    <FizzBuzzToolkit />
  </div>
);
export default Component;
