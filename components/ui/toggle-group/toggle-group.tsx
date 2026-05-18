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

const toggleBaseClassName =
  "flex min-h-16 w-full flex-col items-center justify-center gap-[3.2px] rounded-xl px-1.5 py-2 transition-all";

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
      className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {options.map((option) => {
        const isSelected = value === option.id;

        return (
          <Toggle
            key={option.id}
            value={option.id}
            className={
              isSelected
                ? `${toggleBaseClassName} border border-[var(--color-yellow-50)] bg-[var(--color-grey-95-selected)] shadow-focus`
                : `${toggleBaseClassName} border border-[var(--color-grey-98)] bg-[var(--color-grey-94)]`
            }
          >
            {option.icon && <span className="type-emoji">{option.icon}</span>}

            <span className="type-body-small">{option.label}</span>
          </Toggle>
        );
      })}
    </BaseToggleGroup>
  );
}
