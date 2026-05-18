"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
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
          "type-button-default",
        ],
        cta: [
          "h-[46px]",
          "rounded-[40px]",
          "bg-[var(--color-yellow-50)]",
          "px-10",
          "py-2.5",
          "type-button-cta",
        ],
        icon: ["h-[46px]", "w-[46px]", "bg-transparent", "text-white"],
        primary: [
          "h-[50px]",
          "gap-2.5",
          "rounded-[10px]",
          "px-3.5",
          "py-3",
          "bg-[var(--color-rose-52)]",
          "type-button-on-color",
        ],
        secondary: [
          "h-[50px]",
          "gap-2.5",
          "rounded-[10px]",
          "px-3.5",
          "py-3",
          "bg-[var(--color-cyan-37)]",
          "type-button-on-color",
        ],
        tertiary: [
          "surface-field",
          "h-[50px]",
          "gap-2.5",
          "px-3.5",
          "py-3",
          "type-button-default",
        ],
        tertiaryIcon: ["surface-field", "h-[50px]", "w-[50px]"],
        social: [
          "surface-panel",
          "h-auto",
          "flex-col",
          "gap-2",
          "rounded-xl",
          "p-4",
          "type-body-small",
        ],
        close: [
          "h-8",
          "w-8",
          "self-end",
          "rounded-lg",
          "text-[var(--color-grey-46)]",
          "hover:bg-[var(--color-grey-94)]",
        ],
      },
    },
    defaultVariants: {
      variant: "tertiary",
    },
  },
);

type ButtonProps = React.ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonStyles>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={buttonStyles({
        variant,
        className,
      })}
      {...props}
    />
  );
}
