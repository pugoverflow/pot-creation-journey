import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Select } from "./select";

const countryOptions = [
  { value: "gb", label: "🇬🇧 United Kingdom" },
  { value: "us", label: "🇺🇸 United States" },
  { value: "de", label: "🇩🇪 Germany" },
];

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  args: {
    onValueChange: () => {},
    options: countryOptions,
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultStory() {
  const [value, setValue] = useState("gb");

  return (
    <Select
      label="Country"
      value={value}
      onValueChange={setValue}
      options={countryOptions}
    />
  );
}

function WithoutLabelStory() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <Select
      value={value}
      onValueChange={setValue}
      options={countryOptions}
      placeholder="Choose country"
    />
  );
}

export const Default: Story = {
  render: DefaultStory,
};

export const WithoutLabel: Story = {
  render: WithoutLabelStory,
};
