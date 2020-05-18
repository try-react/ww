import React from "react";
import { NextPage } from "next";
import { FizzBuzz } from "~/ui/components/FizzBuzz";
import { useFizzBuzz } from "~/useCase/useFizzBuzz";
import { useFizzBuzzTSA } from "~/useCase/useFizzBuzzTSA";

const Component: NextPage = () => (
  <>
    <h2>FIzzBuzz</h2>
    <FizzBuzz {...useFizzBuzz()} />
    <hr />
    <h2>FIzzBuzz (typesafe-actions版)</h2>
    <FizzBuzz {...useFizzBuzzTSA()} />
  </>
);

export default Component;
