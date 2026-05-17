import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import type { ImageProps } from "next/image";
import { afterEach } from "vitest";
import { createElement } from "react";
import { vi } from "vitest";

afterEach(() => {
  cleanup();
});

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    priority,
    ...rest
  }: ImageProps) =>
    createElement("img", {
      src: typeof src === "string" ? src : undefined,
      alt,
      width,
      height,
      "data-priority": priority ? "" : undefined,
      ...rest,
    }),
}));
