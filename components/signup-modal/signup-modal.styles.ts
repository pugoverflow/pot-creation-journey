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

export const signupModalLegalStyles = cva([
  "type-dialog-legal",
]);

export const signupModalLegalLinkStyles = cva([
  "type-dialog-link",
]);