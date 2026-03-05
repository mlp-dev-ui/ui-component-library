// src/components/Input/Input.tsx

import styles from "./Input.module.css";

export interface InputProps {
  /** Label displayed above the input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Input type */
  type?: "text" | "email" | "password" | "number";
  /** Disables the input */
  disabled?: boolean;
  /** Shows error state with a message */
  error?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  label,
  placeholder,
  value,
  type = "text",
  disabled = false,
  error,
  helperText,
  onChange,
}: InputProps) {
  const id = label?.toLowerCase().replace(/\\s+/g, "-");
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.inputError : ""} ${
          disabled ? styles.inputDisabled : ""
        }`}
      />
      {error && <span className={styles.errorText}>{error}</span>}
      {!error && helperText && (
        <span className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
}
