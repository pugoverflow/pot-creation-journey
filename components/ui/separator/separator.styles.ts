import { cva } from "class-variance-authority";

export const separatorStyles = cva(
    [
        "shrink-0",
        "border-[var(--color-grey-91)]",
    ],
    {
        variants: {
            orientation: {
                horizontal: [
                    "w-full",
                    "border-t",
                ],

                vertical: [
                    "h-full",
                    "border-l",
                ],
            },
        },

        defaultVariants: {
            orientation: "horizontal",
        },
    }
);