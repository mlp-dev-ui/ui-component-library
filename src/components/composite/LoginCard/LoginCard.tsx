import { useState } from "react";
import { Button } from "../../primitive/Button";
import { Card } from "../../primitive/Card";
import { Input } from "../../primitive/Input";
import styles from "./LoginCard.module.css";

export interface LoginCardProps {
  /** Called with email and password */
  onLogin: (email: string, password: string) => void;

  /** Shows loading state on the button during async operations */
  isLoading?: boolean;

  /** Error message from API - shown below the form */
  error?: string;

  /** Custom title for the card */
  title?: string;

  /** Custom description for the card */
  description?: string;
}

export function LoginCard({
  onLogin,
  isLoading = false,
  error,
  title = "Welcome Back!",
  description: description = "Please login to your account.",
}: LoginCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validate() {
    let valid = true;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
      // } else if (!/\S+@\S+\.\S+/.test(email)) {
    } else if (!email.includes("@")) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
      // } else if (!/\S+@\S+\.\S+/.test(email)) {
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  }
  function handleLogin() {
    if (!validate()) return;
    onLogin(email, password);
  }

  return (
    <Card
      title={title}
      description={description}
      actions={
        <Button
          label="Sign In"
          variant="primary"
          loading={isLoading}
          onClick={handleLogin}
        />
      }
    >
      <div className={styles.form}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
        {error && <p className={styles.apiError}>{error}</p>}
      </div>
    </Card>
  );
}
