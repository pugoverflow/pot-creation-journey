import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LoginModal } from "./login-modal";

const meta = {
  title: "Custom/Login modal",
  component: LoginModal,
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    onClose: () => {},
  },
};
