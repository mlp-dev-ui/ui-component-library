// src/components/Toast/Toast.tsx
import React, { useEffect } from "react";
import styles from "./Toast.module.css";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  /** Unique id for this toast */
  id: string;
  /** The message to display */
  message: string;
  /** Visual type of the toast */
  type?: ToastType;
  /** Duration in milliseconds before auto-dismiss */
  duration?: number;
  /** Called when the toast is dismissed */
  onDismiss: (id: string) => void;
}

const icons: Record<ToastType, string> = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
};

export function Toast({
  id,
  message,
  type = "info",
  duration = 4000,
  onDismiss,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  return (
    <div className={`${styles.toast} ${styles[type]}`} role="alert">
      <span className={styles.icon}>{icons[type]}</span>
      <span className={styles.message}>{message}</span>
      <button
        className={styles.closeButton}
        onClick={() => onDismiss(id)}
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
