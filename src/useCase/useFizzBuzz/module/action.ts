const countUp = () => ({ type: "countUp" } as const);
const countDown = () => ({ type: "countDown" } as const);
const countReset = () => ({ type: "countReset" } as const);

export const actions = {
  countUp,
  countDown,
  countReset,
} as const;

type _A = typeof actions;
export type Actions = ReturnType<_A[keyof _A]>;
