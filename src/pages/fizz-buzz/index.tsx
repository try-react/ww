import React from "react";
import { NextPage } from "next";
import { FizzBuzz } from "~/ui/components/FizzBuzz";
import { useFizzBuzz } from "~/useCase/useFizzBuzz";
import { useFizzBuzzTSA } from "~/useCase/useFizzBuzzTSA";
import { useFizzBuzzToolkit } from "~/useCase/useFizzBuzzToolkit";

const Component: NextPage = () => (
  <>
    <h2>FIzzBuzz (ライブラリ未使用版)</h2>
    <FizzBuzz {...useFizzBuzz()} />
    <hr />
    <h2>FIzzBuzz (typesafe-actions版)</h2>
    <FizzBuzz {...useFizzBuzzTSA()} />
    <hr />
    <h2>FIzzBuzz (@reduxjs/toolkit版)</h2>
    <FizzBuzz {...useFizzBuzzToolkit()} />
  </>
);

export default Component;
