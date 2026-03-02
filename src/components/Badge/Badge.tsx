import styles from "./Badge.module.css";

export type BadgeVariant = "success" | "error" | "warning" | "info" | "neutral";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  /** Text displayed inside the badge */
  label: string;
  /** Visual style of the badge */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
}

export function Badge({ label, variant = "neutral", size = "md" }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>
      {label}
    </span>
  );
}
