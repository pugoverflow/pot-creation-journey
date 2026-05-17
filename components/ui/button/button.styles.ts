import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "transition-colors",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        link: [
          "h-[46px]",
          "rounded-[40px]",
          "border border-[var(--color-blue-23)]",
          "bg-[var(--color-white)]",
          "px-10 py-2.5",
          "type-button",
        ],

        cta: [
          "h-[46px]",
          "rounded-[40px]",
          "bg-[var(--color-yellow-50)]",
          "px-10 py-2.5",
          "type-cta-button",
        ],

        icon: [
          "h-[46px]",
          "w-[46px]",
          "bg-transparent",
          "text-white",
        ],

        primary: [
          "h-[50px]",
          "gap-[10px]",
          "rounded-[10px]",
          "border border-[var(--color-grey-91)]",
          "bg-white",
          "px-[14px]",
          "py-3",
          "type-button",
        ],

        primaryIcon: [
          "h-[50px]",
          "w-[50px]",
          "rounded-[10px]",
          "border border-[var(--color-grey-91)]",
          "bg-white",
        ],
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);