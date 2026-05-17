import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Dialog } from "./dialog";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: "Example dialog",
    description: "Supporting copy for the dialog.",
  },
};

export const WithoutDescription: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: "Title only",
  },
};
