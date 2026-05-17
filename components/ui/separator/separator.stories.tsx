import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Separator } from "./separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  decorators: [
    (Story) => (
      <div className="flex h-24 items-stretch">
        <Story />
      </div>
    ),
  ],
};
