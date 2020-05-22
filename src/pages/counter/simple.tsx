import React from "react";
import { NextPage } from "next";
import { SimpleCounter } from "~/ui/components/SimpleCounter";
import { useSimpleCounter } from "~/useCase/useSimpleCounter";

const Component: NextPage = () => {
  const { count, countUp } = useSimpleCounter();
  return <SimpleCounter count={count} countUp={countUp} />;
};

export default Component;
