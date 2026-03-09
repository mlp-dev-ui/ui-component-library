import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders image when src is provided", () => {
    render(<Avatar src="https://i.pravatar.cc/150" alt="John Doe" />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://i.pravatar.cc/150");
  });

  it("renders initials when name is provided and no src", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders single initial for single word name", () => {
    render(<Avatar name="John" />);
    expect(screen.getByText("J")).toBeInTheDocument();
  });

  it("renders placeholder when no src or name is provided", () => {
    render(<Avatar />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("falls back to initials when image fails to load", () => {
    render(<Avatar src="https://broken-url.com/image.jpg" name="John Doe" />);
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders with circle variant by default", () => {
    render(<Avatar name="John Doe" />);
    const avatar = screen.getByLabelText("John Doe");
    expect(avatar.className).toContain("circle");
  });

  it("renders with square variant", () => {
    render(<Avatar name="John Doe" variant="square" />);
    const avatar = screen.getByLabelText("John Doe");
    expect(avatar.className).toContain("square");
  });

  it("renders with md size by default", () => {
    render(<Avatar name="John Doe" />);
    const avatar = screen.getByLabelText("John Doe");
    expect(avatar.className).toContain("md");
  });

  it("renders with sm size", () => {
    render(<Avatar name="John Doe" size="sm" />);
    const avatar = screen.getByLabelText("John Doe");
    expect(avatar.className).toContain("sm");
  });

  it("renders with lg size", () => {
    render(<Avatar name="John Doe" size="lg" />);
    const avatar = screen.getByLabelText("John Doe");
    expect(avatar.className).toContain("lg");
  });
});
