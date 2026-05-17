import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { assets } from "@/lib/assets";

import { Header } from "./header";

const mockBack = vi.fn();
const mockPathname = vi.fn(() => "/");

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
  useRouter: () => ({
    back: mockBack,
  }),
}));

describe("Header", () => {
  beforeEach(() => {
    mockBack.mockClear();
    mockPathname.mockReturnValue("/");
  });

  describe("marketing layout", () => {
    it("renders primary navigation with login and sign up", () => {
      render(<Header />);

      expect(
        screen.getByRole("navigation", {
          name: "Primary navigation",
        })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Login" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Sign up" })
      ).toBeInTheDocument();
    });

    it("renders the default dark logo", () => {
      render(<Header />);

      expect(screen.getByRole("img", { name: "Collctiv" })).toHaveAttribute(
        "src",
        assets.brand.fullLogoNoStrap
      );
    });

    it("opens the login modal when Login is clicked", () => {
      render(<Header />);

      fireEvent.click(
        screen.getByRole("button", { name: "Login" })
      );

      expect(
        screen.getByRole("dialog", { name: "Login" })
      ).toBeInTheDocument();
    });

    it("opens the signup modal when Sign up is clicked", () => {
      render(<Header />);

      fireEvent.click(
        screen.getByRole("button", { name: "Sign up" })
      );

      expect(
        screen.getByRole("dialog", {
          name: "Sign in to start collecting",
        })
      ).toBeInTheDocument();
    });
  });

  describe("dashboard layout", () => {
    beforeEach(() => {
      mockPathname.mockReturnValue("/dashboard");
    });

    it("renders a back button instead of primary navigation", () => {
      render(<Header />);

      expect(
        screen.getByRole("button", { name: "Go back" })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("navigation", {
          name: "Primary navigation",
        })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Login" })
      ).not.toBeInTheDocument();
    });

    it("renders the light logo at dashboard height", () => {
      render(<Header />);

      const image = screen.getByRole("img", { name: "Collctiv" });
      expect(image).toHaveAttribute(
        "src",
        assets.brand.fullLogoLight
      );
      expect(image).toHaveAttribute("height", "34");
    });

    it("calls router.back when the back button is clicked", () => {
      render(<Header />);

      fireEvent.click(
        screen.getByRole("button", { name: "Go back" })
      );

      expect(mockBack).toHaveBeenCalledTimes(1);
    });
  });
});
