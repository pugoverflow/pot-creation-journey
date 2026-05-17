import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SignupModal } from "./signup-modal";

const meta = {
  title: "Custom/Signup modal",
  component: SignupModal,
} satisfies Meta<typeof SignupModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    onClose: () => {},
  },
};
