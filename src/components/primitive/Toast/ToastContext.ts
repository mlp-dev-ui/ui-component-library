import { createContext } from "react";
import { ToastType } from "./Toast";

export interface ToastContextValue {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}
export const ToastContext = createContext<ToastContextValue>({
  showToast: () => {},
});
