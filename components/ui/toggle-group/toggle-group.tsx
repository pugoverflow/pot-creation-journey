"use client";

import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";

type ToggleGroupOption = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

type ToggleGroupProps = {
  options: ToggleGroupOption[];
  value: string | null;
  onValueChange: (value: string) => void;
  ariaLabel: string;
};

export function ToggleGroup({
  options,
  value,
  onValueChange,
  ariaLabel,
}: ToggleGroupProps) {
  return (
    <BaseToggleGroup
      value={value ? [value] : []}
      onValueChange={(values) => {
        const selectedValue = values[0];

        if (selectedValue) {
          onValueChange(selectedValue);
        }
      }}
      aria-label={ariaLabel}
      className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3"
    >
      {options.map((option) => {
        const isSelected = value === option.id;

        return (
          <Toggle
            key={option.id}
            value={option.id}
            className={
              isSelected
                ? "flex min-h-16 w-full flex-col items-center justify-center gap-[3.2px] rounded-[12px] border border-[var(--color-yellow-50)] bg-[var(--color-grey-95-selected)] px-[6px] py-2 shadow-focus transition-all"
                : "flex min-h-16 w-full flex-col items-center justify-center gap-[3.2px] rounded-[12px] border border-[var(--color-grey-98)] bg-[var(--color-grey-94)] px-[6px] py-2 transition-all"
            }
          >
            {option.icon && (
              <span className="type-emoji">
                {option.icon}
              </span>
            )}

            <span className="type-body-small">
              {option.label}
            </span>
          </Toggle>
        );
      })}
    </BaseToggleGroup>
  );
}
