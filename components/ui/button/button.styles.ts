import { cva } from "class-variance-authority";

export const buttonStyles = cva(
    [
        "inline-flex items-center justify-center rounded-[40px]",
        "transition-colors",
        "disabled:opacity-50",
    ],
    {
        variants: {
            variant: {
                link: [
                    "h-[46px]",
                    "border border-[var(--color-blue-23)]",
                    "bg-[var(--color-white)]",
                    "px-10 py-2.5",
                    "type-button",
                ],

                cta: [
                    "h-[46px]",
                    "bg-[var(--color-yellow-50)]",
                    "px-10 py-2.5",
                    "type-cta-button",
                ],

                icon: [
                    "h-[46px] w-[46px]",
                    "bg-transparent",
                    "text-white",
                ],
            },
        },

        defaultVariants: {
            variant: "link",
        },
    }
);