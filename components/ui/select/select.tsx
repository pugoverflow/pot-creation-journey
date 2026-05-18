"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";

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
        <BaseSelect.Label className="type-labels">{label}</BaseSelect.Label>
      )}

      <BaseSelect.Trigger className="flex h-[50px] w-full items-center justify-between surface-field px-3.5 py-3 text-left type-button-default">
        <BaseSelect.Value>{selectedLabel}</BaseSelect.Value>

        <BaseSelect.Icon>
          <ChevronDown size={16} className="text-[var(--color-grey-46)]" />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>

      <BaseSelect.Portal>
        <BaseSelect.Positioner className="z-50">
          <BaseSelect.Popup className="mt-1 w-[var(--anchor-width)] overflow-hidden surface-field p-1 shadow-elevated">
            <BaseSelect.List>
              {options.map((option) => (
                <BaseSelect.Item
                  key={option.value}
                  value={option.value}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 outline-none hover:bg-[var(--color-grey-98)]"
                >
                  <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>

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
