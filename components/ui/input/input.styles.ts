import { cva } from "class-variance-authority";

export const inputWrapperStyles = cva([
  "flex",
  "items-center",
  "gap-3",
  "rounded-[12px]",
  "border",
  "border-[var(--color-grey-94)]",
  "bg-white",
  "px-4",
  "py-3",
  "transition-all",
  "focus-within:border-[var(--color-yellow-50)]",
  "focus-within:shadow-[0px_0px_0px_3px_#FFDE0066]",
]);

export const inputStyles = cva([
  "w-full",
  "border-0",
  "bg-transparent",
  "outline-none",
  "placeholder:text-[var(--color-azure-65)]",
  "type-input",
]);

export const inputIconStyles = cva([
  "shrink-0",
  "text-[var(--color-azure-65)]",
]);