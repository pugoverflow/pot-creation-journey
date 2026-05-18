"use client";

import { Input as BaseInput } from "@base-ui/react/input";

type InputProps = React.ComponentProps<typeof BaseInput> & {
  icon?: React.ReactNode;
};

export function Input({ icon, className, ...props }: InputProps) {
  return (
    <div className="surface-panel flex items-center gap-3 rounded-xl px-4 py-3 transition-all focus-within:border-[var(--color-yellow-50)] focus-within:shadow-focus">
      {icon && (
        <span className="shrink-0 text-[var(--color-azure-65)]">{icon}</span>
      )}

      <BaseInput
        className={
          className
            ? `w-full border-0 bg-transparent outline-none type-input ${className}`
            : "w-full border-0 bg-transparent outline-none type-input"
        }
        {...props}
      />
    </div>
  );
}
