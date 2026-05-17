import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Mail } from "lucide-react";

import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Email address",
    type: "email",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Email address",
    type: "email",
    icon: <Mail size={20} aria-hidden />,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Email address",
    disabled: true,
  },
};
