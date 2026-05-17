import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Logo } from "./logo";

const meta = {
  title: "Custom/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    height: 34,
  },
};

export const LightOnDark: Story = {
  args: {
    isLight: true,
    height: 34,
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-[var(--color-blue-23)] p-8">
        <Story />
      </div>
    ),
  ],
};
