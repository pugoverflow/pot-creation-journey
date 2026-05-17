import { cva } from "class-variance-authority";

export const signupModalContentStyles = cva([
  "mt-4",
  "flex",
  "flex-col",
  "gap-4",
]);

export const signupModalButtonsStyles = cva([
  "flex",
  "flex-col",
  "gap-3",
]);

export const signupModalButtonStyles = cva([
  "flex",
  "h-[50px]",
  "w-full",
  "items-center",
  "justify-center",
  "gap-[10px]",
  "rounded-[10px]",
  "border",
  "border-[var(--color-grey-91)]",
  "bg-white",
  "px-[14px]",
  "py-3",
  "type-button",
]);

export const signupModalLegalStyles = cva([
  "type-dialog-legal",
]);

export const signupModalLegalLinkStyles = cva([
  "type-dialog-link",
]);