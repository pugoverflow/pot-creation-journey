import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Continue", variant: "primary" },
};

export const Link: Story = {
  args: { children: "Login", variant: "link" },
};

export const Cta: Story = {
  args: { children: "Sign up", variant: "cta" },
};
