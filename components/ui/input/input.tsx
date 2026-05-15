"use client";

import { Input as BaseInput } from "@base-ui/react/input";

import {
  inputIconStyles,
  inputStyles,
  inputWrapperStyles,
} from "./input.styles";

type InputProps =
  React.ComponentProps<typeof BaseInput> & {
    icon?: React.ReactNode;
  };

export function Input({
  icon,
  className,
  ...props
}: InputProps) {
  return (
    <div className={inputWrapperStyles()}>
      {icon && (
        <span className={inputIconStyles()}>
          {icon}
        </span>
      )}

      <BaseInput
        className={inputStyles({
          className,
        })}
        {...props}
      />
    </div>
  );
}