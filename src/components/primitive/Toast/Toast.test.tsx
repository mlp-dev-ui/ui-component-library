import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Toast } from "./Toast";

describe("Toast", () => {
  it("renders the message", () => {
    render(<Toast id="1" message="Changes saved!" onDismiss={vi.fn()} />);
    expect(screen.getByText("Changes saved!")).toBeInTheDocument();
  });

  it("renders with info type by default", () => {
    render(<Toast id="1" message="Hello" onDismiss={vi.fn()} />);
    const toast = screen.getByRole("alert");
    expect(toast.className).toContain("info");
  });

  it("renders with success type", () => {
    render(
      <Toast id="1" message="Saved!" type="success" onDismiss={vi.fn()} />,
    );
    const toast = screen.getByRole("alert");
    expect(toast.className).toContain("success");
  });

  it("renders with error type", () => {
    render(<Toast id="1" message="Failed!" type="error" onDismiss={vi.fn()} />);
    const toast = screen.getByRole("alert");
    expect(toast.className).toContain("error");
  });

  it("renders with warning type", () => {
    render(
      <Toast id="1" message="Warning!" type="warning" onDismiss={vi.fn()} />,
    );
    const toast = screen.getByRole("alert");
    expect(toast.className).toContain("warning");
  });

  it("renders dismiss button", () => {
    render(<Toast id="1" message="Hello" onDismiss={vi.fn()} />);
    expect(screen.getByLabelText("Dismiss")).toBeInTheDocument();
  });

  it("calls onDismiss with correct id when dismiss button is clicked", () => {
    const handleDismiss = vi.fn();
    render(<Toast id="toast-123" message="Hello" onDismiss={handleDismiss} />);
    fireEvent.click(screen.getByLabelText("Dismiss"));
    expect(handleDismiss).toHaveBeenCalledWith("toast-123");
  });

  it("renders correct icon for each type", () => {
    const { rerender } = render(
      <Toast id="1" message="Hello" type="success" onDismiss={vi.fn()} />,
    );
    expect(screen.getByText("✅")).toBeInTheDocument();

    rerender(<Toast id="1" message="Hello" type="error" onDismiss={vi.fn()} />);
    expect(screen.getByText("❌")).toBeInTheDocument();

    rerender(
      <Toast id="1" message="Hello" type="warning" onDismiss={vi.fn()} />,
    );
    expect(screen.getByText("⚠️")).toBeInTheDocument();

    rerender(<Toast id="1" message="Hello" type="info" onDismiss={vi.fn()} />);
    expect(screen.getByText("ℹ️")).toBeInTheDocument();
  });
});
