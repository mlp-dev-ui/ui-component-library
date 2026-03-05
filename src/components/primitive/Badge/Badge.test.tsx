import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders the label", () => {
    render(<Badge label="Active" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders with neutral variant by default", () => {
    render(<Badge label="Active" />);
    const badge = screen.getByText("Active");
    expect(badge.className).toContain("neutral");
  });

  it("renders with correct variant class", () => {
    render(<Badge label="Active" variant="success" />);
    const badge = screen.getByText("Active");
    expect(badge.className).toContain("success");
  });

  it("renders with error variant", () => {
    render(<Badge label="Failed" variant="error" />);
    const badge = screen.getByText("Failed");
    expect(badge.className).toContain("error");
  });

  it("renders with warning variant", () => {
    render(<Badge label="Pending" variant="warning" />);
    const badge = screen.getByText("Pending");
    expect(badge.className).toContain("warning");
  });

  it("renders with info variant", () => {
    render(<Badge label="In Progress" variant="info" />);
    const badge = screen.getByText("In Progress");
    expect(badge.className).toContain("info");
  });

  it("renders with md size by default", () => {
    render(<Badge label="Active" />);
    const badge = screen.getByText("Active");
    expect(badge.className).toContain("md");
  });

  it("renders with sm size", () => {
    render(<Badge label="New" size="sm" />);
    const badge = screen.getByText("New");
    expect(badge.className).toContain("sm");
  });
});
