import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders the input element", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders the label when provided", () => {
    render(<Input label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("does not render label when not provided", () => {
    render(<Input />);
    expect(screen.queryByRole("label")).not.toBeInTheDocument();
  });

  it("renders placeholder text", () => {
    render(<Input placeholder="Enter your email" />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<Input error="Email is required" />);
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  it("renders helper text when provided", () => {
    render(<Input helperText="Must be at least 6 characters" />);
    expect(
      screen.getByText("Must be at least 6 characters"),
    ).toBeInTheDocument();
  });

  it("does not render helper text when error is shown", () => {
    render(<Input error="Required" helperText="Some helper text" />);
    expect(screen.queryByText("Some helper text")).not.toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("calls onChange when user types", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test@test.com" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders with correct value", () => {
    render(<Input value="test@test.com" onChange={vi.fn()} />);
    expect(screen.getByRole("textbox")).toHaveValue("test@test.com");
  });

  it("applies error class when error is provided", () => {
    render(<Input error="Required" />);
    const input = screen.getByRole("textbox");
    expect(input.className).toContain("inputError");
  });

  it("applies disabled class when disabled", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input.className).toContain("inputDisabled");
  });
});
