"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";

import { buttonStyles } from "./button.styles";

type ButtonProps =
    React.ComponentProps<typeof BaseButton> &
    VariantProps<typeof buttonStyles>;

export function Button({
    className,
    variant,
    ...props
}: ButtonProps) {
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