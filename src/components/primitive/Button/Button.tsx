import styles from "./Button.module.css";

export interface ButtonProps {
  /** The text to display on the button */
  label: string;
  /** The visual variant of the button */
  variant?: "primary" | "secondary" | "danger" | "ghost";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
  /** Disables the button */
  disabled?: boolean;
  /** Shows a loading indicator */
  loading?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export function Button({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "Loading..." : label}
    </button>
  );
}
