import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders with label", () => {
    render(<Button label="Click Me" />);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("renders with primary variant by default", () => {
    render(<Button label="Click Me" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("primary");
  });
  it("renders with correct variant class", () => {
    render(<Button label="Delete" variant="danger" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("danger");
  });

  it("renders with correct size class", () => {
    render(<Button label="Click Me" size="lg" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("lg");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button label="Click Me" disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("is disabled when loading prop is true", () => {
    render(<Button label="Click Me" loading />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("shows Loading text when loading is true", () => {
    render(<Button label="Submit" loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" disabled onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
