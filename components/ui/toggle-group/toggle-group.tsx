"use client";

import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";

import {
  toggleGroupItemStyles,
  toggleGroupStyles,
} from "./toggle-group.styles";

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
      className={toggleGroupStyles()}
    >
      {options.map((option) => {
        const isSelected = value === option.id;

        return (
          <Toggle
            key={option.id}
            value={option.id}
            className={toggleGroupItemStyles({
              selected: isSelected,
            })}
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
