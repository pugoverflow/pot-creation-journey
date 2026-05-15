import { cva } from "class-variance-authority";

export const toggleGroupStyles = cva([
  "grid",
  "grid-cols-1",
  "gap-[14px]",
  "sm:grid-cols-2",
  "lg:grid-cols-3",
]);

export const toggleGroupItemStyles = cva(
  [
    "flex",
    "min-h-16",
    "w-full",
    "flex-col",
    "items-center",
    "justify-center",
    "gap-[3.2px]",
    "rounded-[12px]",
    "border",
    "px-[6px]",
    "py-2",
    "transition-all",
  ],
  {
    variants: {
      selected: {
        true: [
          "border-[var(--color-yellow-50)]",
          "bg-[var(--color-grey-95-selected)]",
          "shadow-[0px_0px_0px_3px_#FFDE0066]",
        ],
        false: [
          "border-[var(--color-grey-98)]",
          "bg-[var(--color-grey-94)]",
        ],
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);