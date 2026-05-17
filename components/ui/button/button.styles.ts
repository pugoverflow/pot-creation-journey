import { cva } from "class-variance-authority";

const potActionLayout = [
  "h-[50px]",
  "gap-[10px]",
  "rounded-[10px]",
  "px-[14px]",
  "py-3",
] as const;

const potActionBordered = [
  "border",
  "border-[var(--color-grey-91)]",
  "bg-white",
] as const;

const iconActionBordered = [
  "h-[50px]",
  "w-[50px]",
  "rounded-[10px]",
  ...potActionBordered,
] as const;

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
          "border",
          "border-[var(--color-blue-23)]",
          "bg-white",
          "px-10",
          "py-2.5",
          "type-button",
        ],

        cta: [
          "h-[46px]",
          "rounded-[40px]",
          "bg-[var(--color-yellow-50)]",
          "px-10",
          "py-2.5",
          "type-cta-button",
        ],

        icon: [
          "h-[46px]",
          "w-[46px]",
          "bg-transparent",
          "text-white",
        ],

        primary: [
          ...potActionLayout,
          "bg-[var(--color-rose-52)]",
          "type-button-on-color",
        ],

        secondary: [
          ...potActionLayout,
          "bg-[var(--color-cyan-37)]",
          "type-button-on-color",
        ],

        tertiary: [
          ...potActionLayout,
          ...potActionBordered,
          "type-button",
        ],

        tertiaryIcon: iconActionBordered,

        social: [
          "h-auto",
          "flex-col",
          "gap-2",
          "rounded-[12px]",
          "border",
          "border-[var(--color-grey-94)]",
          "bg-white",
          "p-4",
        ],

        close: [
          "h-8",
          "w-8",
          "self-end",
          "rounded-[8px]",
          "text-[var(--color-grey-46)]",
          "hover:bg-[var(--color-grey-94)]",
        ],
      },
    },

    defaultVariants: {
      variant: "tertiary",
    },
  }
);
