import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LoginCard } from "./LoginCard";

describe("LoginCard", () => {
  it("renders the default title", () => {
    render(<LoginCard onLogin={vi.fn()} />);
    expect(screen.getByText("Welcome Back!")).toBeInTheDocument();
  });

  it("renders a custom title", () => {
    render(<LoginCard onLogin={vi.fn()} title="Admin Portal" />);
    expect(screen.getByText("Admin Portal")).toBeInTheDocument();
  });

  it("renders a custom description", () => {
    render(
      <LoginCard
        onLogin={vi.fn()}
        description="Sign in with your admin credentials."
      />,
    );
    expect(
      screen.getByText("Sign in with your admin credentials."),
    ).toBeInTheDocument();
  });

  it("renders email and password inputs", () => {
    render(<LoginCard onLogin={vi.fn()} />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("renders the sign in button", () => {
    render(<LoginCard onLogin={vi.fn()} />);
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });

  it("shows loading state on button when loading is true", () => {
    render(<LoginCard onLogin={vi.fn()} isLoading={true} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows API error when error prop is provided", () => {
    render(<LoginCard onLogin={vi.fn()} error="Invalid email or password" />);
    expect(screen.getByText("Invalid email or password")).toBeInTheDocument();
  });

  it("shows validation error when email is empty on submit", () => {
    render(<LoginCard onLogin={vi.fn()} />);
    fireEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  it("shows validation error when password is empty on submit", () => {
    render(<LoginCard onLogin={vi.fn()} />);
    fireEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("shows validation error for invalid email format", () => {
    render(<LoginCard onLogin={vi.fn()} />);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "invalid-email" },
    });
    fireEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Invalid email format")).toBeInTheDocument();
  });

  it("shows validation error when password is too short", () => {
    render(<LoginCard onLogin={vi.fn()} />);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByText("Sign In"));
    expect(
      screen.getByText("Password must be at least 6 characters"),
    ).toBeInTheDocument();
  });

  it("calls onLogin with email and password when form is valid", () => {
    const handleLogin = vi.fn();
    render(<LoginCard onLogin={handleLogin} />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Sign In"));

    expect(handleLogin).toHaveBeenCalledWith("test@test.com", "password123");
  });

  it("does not call onLogin when form is invalid", () => {
    const handleLogin = vi.fn();
    render(<LoginCard onLogin={handleLogin} />);
    fireEvent.click(screen.getByText("Sign In"));
    expect(handleLogin).not.toHaveBeenCalled();
  });
});
