import React from "react";
import { NextPage } from "next";
import { FizzBuzz } from "~/ui/components/FizzBuzz";
import { fizzBuzz } from "~/controller/fizzBuzz";

const Component: NextPage = () => (
  <>
    <h2>FIzzBuzz (ライブラリ未使用版)</h2>
    <FizzBuzz {...fizzBuzz.useTSOnly()} />
    <hr />
    <h2>FIzzBuzz (typesafe-actions版)</h2>
    <FizzBuzz {...fizzBuzz.useTSA()} />
    <hr />
    <h2>FIzzBuzz (@reduxjs/toolkit版)</h2>
    <FizzBuzz {...fizzBuzz.useToolkit()} />
  </>
);
export default Component;
