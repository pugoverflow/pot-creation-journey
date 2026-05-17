import type { Preview } from "@storybook/nextjs-vite";
import { Inter, Montserrat } from "next/font/google";

import "../app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "UI",
          ["Documentation", "*"],
          "Custom",
          ["Documentation", "*"],
          "UTILITY CLASSES",
          ["Documentation", "*", "Typography", "*", "Layout", "*"],
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${inter.variable} ${montserrat.variable} bg-white p-8 antialiased`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
