"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";

import {
  selectIconStyles,
  selectItemStyles,
  selectPopupStyles,
  selectTriggerStyles,
} from "./select.styles";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
};

export function Select({
  label,
  value,
  onValueChange,
  options,
  placeholder = "Select option",
}: SelectProps) {
  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? placeholder;

  return (
    <BaseSelect.Root
      value={value}
      onValueChange={(nextValue) => {
        if (nextValue) {
          onValueChange(nextValue);
        }
      }}
    >
      {label && (
        <BaseSelect.Label className="type-h5">
          {label}
        </BaseSelect.Label>
      )}

      <BaseSelect.Trigger className={selectTriggerStyles()}>
        <BaseSelect.Value>
          {selectedLabel}
        </BaseSelect.Value>

        <BaseSelect.Icon>
          <ChevronDown size={16} className={selectIconStyles()} />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>

      <BaseSelect.Portal>
        <BaseSelect.Positioner className="z-50">
          <BaseSelect.Popup className={selectPopupStyles()}>
            <BaseSelect.List>
              {options.map((option) => (
                <BaseSelect.Item
                  key={option.value}
                  value={option.value}
                  className={selectItemStyles()}
                >
                  <BaseSelect.ItemText>
                    {option.label}
                  </BaseSelect.ItemText>

                  <BaseSelect.ItemIndicator>
                    <Check size={16} />
                  </BaseSelect.ItemIndicator>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}