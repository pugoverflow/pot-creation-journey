import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { ToggleGroup } from "./toggle-group";

const options = [
  { id: "travel", label: "Travel" },
  { id: "gift", label: "Gift" },
  { id: "sport", label: "Sports" },
];

const meta = {
  title: "UI/Toggle group",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  args: {
    ariaLabel: "Pot type",
    options,
    value: null,
    onValueChange: () => {},
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultStory() {
  const [value, setValue] = useState<string | null>("travel");

  return (
    <ToggleGroup
      ariaLabel="Pot type"
      options={options}
      value={value}
      onValueChange={setValue}
    />
  );
}

function NoneSelectedStory() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ToggleGroup
      ariaLabel="Pot type"
      options={options}
      value={value}
      onValueChange={setValue}
    />
  );
}

export const Default: Story = {
  render: DefaultStory,
};

export const NoneSelected: Story = {
  render: NoneSelectedStory,
};
