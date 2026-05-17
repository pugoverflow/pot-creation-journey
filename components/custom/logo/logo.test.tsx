import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { assets } from "@/lib/assets";

import { Logo } from "./logo";

const LOGO_ASPECT_RATIO = 241 / 50;

function expectedWidth(height: number): number {
  return Math.round(LOGO_ASPECT_RATIO * height);
}

describe("Logo", () => {
  it("renders the Collctiv alt text", () => {
    render(<Logo />);

    expect(
      screen.getByRole("img", { name: "Collctiv" })
    ).toBeInTheDocument();
  });

  it("uses the default dark logo asset", () => {
    render(<Logo />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      assets.brand.fullLogoNoStrap
    );
  });

  it("uses the light logo asset when isLight is true", () => {
    render(<Logo isLight />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      assets.brand.fullLogoLight
    );
  });

  it("defaults to height 50 and matching width", () => {
    render(<Logo />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("height", "50");
    expect(image).toHaveAttribute(
      "width",
      String(expectedWidth(50))
    );
  });

  it("scales width proportionally for a custom height", () => {
    render(<Logo height={34} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("height", "34");
    expect(image).toHaveAttribute(
      "width",
      String(expectedWidth(34))
    );
  });

  it("does not mark the image as priority by default", () => {
    render(<Logo />);

    expect(screen.getByRole("img")).not.toHaveAttribute(
      "data-priority"
    );
  });

  it("marks the image as priority when requested", () => {
    render(<Logo priority />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "data-priority",
      ""
    );
  });
});
