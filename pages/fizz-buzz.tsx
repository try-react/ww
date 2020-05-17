import React from "react";
import { NextPage } from "next";
import { FizzBuzz } from "~/ui/components/FizzBuzz";
import { useFizzBuzz } from "~/useCase/useFizzBuzz";
import { useFizzBuzzTSA } from "~/useCase/useFizzBuzzTSA";

const Component: NextPage = () => (
  <>
    <FizzBuzz {...useFizzBuzz()} />
    <FizzBuzz {...useFizzBuzzTSA()} />
  </>
);

export default Component;
