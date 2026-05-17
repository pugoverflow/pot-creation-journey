"use client";

import { Dialog } from "@/components/ui/dialog/dialog";

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export function LoginModal({ open, onClose }: LoginModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Login"
      description="Please create an account first."
    />
  );
}
