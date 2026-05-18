import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AnimatedAmount } from "./animated-amount";

const meta = {
  title: "Custom/Animated amount",
  component: AnimatedAmount,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="rounded-md bg-[var(--color-blue-23)] px-8 py-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AnimatedAmount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1234.56,
    className: "type-pot-amount",
  },
};

export const Zero: Story = {
  args: {
    value: 0,
    className: "type-pot-amount",
  },
};

export const LargeAmount: Story = {
  args: {
    value: 99999.99,
    className: "type-pot-amount",
  },
};
