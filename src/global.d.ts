import "react-redux";
import { Dispatch } from "redux";
import { RootState, RootAction } from "~/store";

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
  export function useDispatch<TDispatch = Dispatch<RootAction>>(): TDispatch;
}
