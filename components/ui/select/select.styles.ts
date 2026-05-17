import { cva } from "class-variance-authority";

export const selectTriggerStyles = cva([
  "flex",
  "h-[50px]",
  "w-full",
  "items-center",
  "justify-between",
  "rounded-[10px]",
  "border",
  "border-[var(--color-grey-91)]",
  "bg-white",
  "px-[14px]",
  "py-3",
  "text-left",
  "type-button",
]);

export const selectPopupStyles = cva([
  "mt-1",
  "w-[var(--anchor-width)]",
  "overflow-hidden",
  "rounded-[10px]",
  "border",
  "border-[var(--color-grey-91)]",
  "bg-white",
  "p-1",
  "shadow-[0px_4px_24px_0px_#1E1B4B0F]",
]);

export const selectItemStyles = cva([
  "flex",
  "cursor-pointer",
  "items-center",
  "justify-between",
  "rounded-[8px]",
  "px-3",
  "py-2",
  "outline-none",
  "hover:bg-[var(--color-grey-98)]",
]);

export const selectIconStyles = cva([
  "text-[var(--color-grey-46)]",
]);