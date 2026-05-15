import { cva } from "class-variance-authority";

export const headerStyles = cva("w-full", {
    variants: {
        variant: {
            marketing: "bg-[var(--color-white)]",

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
                "mx-auto",
                "mt-4",
                "flex",
                "min-h-[50px]",
                "w-full",
                "max-w-[1080px]",
                "flex-wrap",
                "items-center",
                "justify-between",
                "gap-4",
                "px-4",
                "sm:flex-nowrap",
                "sm:gap-8",
            ],

            dashboard: [
                "mx-auto",
                "flex",
                "h-16",
                "w-full",
                "max-w-[1080px]",
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