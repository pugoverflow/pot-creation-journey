import { cva } from "class-variance-authority";

const headerInnerBase = [
  "mx-auto",
  "w-full",
  "max-w-[1080px]",
] as const;

export const headerStyles = cva("w-full", {
  variants: {
    variant: {
      marketing: "bg-white",
      dashboard:
        "sticky top-0 z-40 bg-[var(--color-blue-23)] shadow",
    },
  },

  defaultVariants: {
    variant: "marketing",
  },
});

export const headerInnerStyles = cva("", {
  variants: {
    variant: {
      marketing: [
        ...headerInnerBase,
        "mt-4",
        "flex",
        "min-h-[50px]",
        "flex-col",
        "items-center",
        "justify-center",
        "gap-4",
        "px-4",
        "sm:flex-row",
        "sm:justify-between",
        "sm:gap-8",
      ],
      dashboard: [
        ...headerInnerBase,
        "flex",
        "h-16",
        "items-center",
        "justify-between",
        "gap-x-4",
        "px-4",
        "sm:gap-x-6",
        "sm:px-6",
        "lg:px-8",
      ],
    },
  },

  defaultVariants: {
    variant: "marketing",
  },
});
