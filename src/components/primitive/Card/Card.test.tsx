import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders the title", () => {
    render(<Card title="Card Title" />);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
  });

  it("renders the description when provided", () => {
    render(<Card title="Card Title" description="Card Description" />);
    expect(screen.getByText("Card Description")).toBeInTheDocument();
  });

  it("does not render description when not provided", () => {
    render(<Card title="Card Title" />);
    expect(screen.queryByText("Card Description")).not.toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Card title="Card Title">
        <p>Child content</p>
      </Card>,
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders actions when provided", () => {
    render(<Card title="Card Title" actions={<button>Click Me</button>} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("does not render actions when not provided", () => {
    render(<Card title="Card Title" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders image when imageUrl is provided", () => {
    render(
      <Card
        title="Card Title"
        imageUrl="https://placehold.co/600x200"
        imageAlt="Test image"
      />,
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://placehold.co/600x200");
    expect(image).toHaveAttribute("alt", "Test image");
  });

  it("does not render image when imageUrl is not provided", () => {
    render(<Card title="Card Title" />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("calls onClick when card is clicked", () => {
    const handleClick = vi.fn();
    render(<Card title="Card Title" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies clickable class when onClick is provided", () => {
    const handleClick = vi.fn();
    render(<Card title="Card Title" onClick={handleClick} />);
    const card = screen.getByRole("button");
    expect(card.className).toContain("clickable");
  });

  it("does not apply clickable class when onClick is not provided", () => {
    render(<Card title="Card Title" />);
    const card = screen.getByText("Card Title").closest("div");
    expect(card!.className).not.toContain("clickable");
  });
});
