import { Mode } from "./mode.enum";

export interface SendDataDialog<T> {
  data: T;
  mode: Mode;
}
