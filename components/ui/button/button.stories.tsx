import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Ellipsis,
  MoveDownRight,
  MoveUpRight,
  Palette,
} from "lucide-react";

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

export const PrimaryTextOnly: Story = {
  args: { children: "Collect money", variant: "primary" },
};

export const SecondaryTextOnly: Story = {
  args: { children: "Send money", variant: "secondary" },
};

export const TertiaryTextOnly: Story = {
  args: { children: "Customise pot", variant: "tertiary" },
};

export const PrimaryWithIcon: Story = {
  render: () => (
    <Button variant="primary" type="button">
      <MoveDownRight size={18} aria-hidden />
      <span>Collect money</span>
    </Button>
  ),
};

export const SecondaryWithIcon: Story = {
  render: () => (
    <Button variant="secondary" type="button">
      <MoveUpRight size={18} aria-hidden />
      <span>Send money</span>
    </Button>
  ),
};

export const TertiaryWithIcon: Story = {
  render: () => (
    <Button variant="tertiary" type="button">
      <Palette size={18} aria-hidden />
      <span>Customise pot</span>
    </Button>
  ),
};

export const TertiaryIconOnly: Story = {
  args: {
    variant: "tertiaryIcon",
    type: "button",
    "aria-label": "Open menu",
  },
  render: (args) => (
    <Button {...args}>
      <Ellipsis size={18} aria-hidden />
    </Button>
  ),
};

export const Link: Story = {
  args: { children: "Login", variant: "link" },
};

export const Cta: Story = {
  args: { children: "Sign up", variant: "cta" },
};
