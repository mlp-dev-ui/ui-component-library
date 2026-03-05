// src/components/primitive/Modal/Modal.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("renders the title when open", () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Modal Title">
        <p>Modal content</p>
      </Modal>,
    );
    expect(screen.getByText("Modal Title")).toBeInTheDocument();
  });

  it("renders children when open", () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Modal Title">
        <p>Modal content</p>
      </Modal>,
    );
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Modal isOpen={false} onClose={vi.fn()} title="Modal Title">
        <p>Modal content</p>
      </Modal>,
    );
    expect(screen.queryByText("Modal Title")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });

  it("renders actions when provided", () => {
    render(
      <Modal
        isOpen={true}
        onClose={vi.fn()}
        title="Modal Title"
        actions={<button>Confirm</button>}
      >
        <p>Content</p>
      </Modal>,
    );
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Modal Title">
        <p>Content</p>
      </Modal>,
    );
    fireEvent.click(screen.getByLabelText("Close"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("renders close button", () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Modal Title">
        <p>Content</p>
      </Modal>,
    );
    expect(screen.getByLabelText("Close")).toBeInTheDocument();
  });
});
