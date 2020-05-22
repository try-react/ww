import { useState } from "react";

export const useSimpleCounter = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);

  return {
    count,
    countUp,
  };
};

export type Props = ReturnType<typeof useSimpleCounter>;
