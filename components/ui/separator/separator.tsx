"use client";

import { Separator as BaseSeparator } from "@base-ui/react/separator";
import type { VariantProps } from "class-variance-authority";

import { separatorStyles } from "./separator.styles";

type SeparatorProps =
    React.ComponentProps<
        typeof BaseSeparator
    > &
    VariantProps<
        typeof separatorStyles
    >;

export function Separator({
    orientation = "horizontal",
    className,
    ...props
}: SeparatorProps) {
    return (
        <BaseSeparator
            orientation={orientation}
            className={separatorStyles({
                orientation,
                className,
            })}
            {...props}
        />
    );
}