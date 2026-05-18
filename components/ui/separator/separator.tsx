"use client";

import { Separator as BaseSeparator } from "@base-ui/react/separator";

type SeparatorProps = React.ComponentProps<typeof BaseSeparator>;

export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: SeparatorProps) {
  return (
    <BaseSeparator
      orientation={orientation}
      className={[
        "shrink-0 border-[var(--color-grey-91)]",
        orientation === "horizontal" ? "w-full border-t" : "h-full border-l",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
