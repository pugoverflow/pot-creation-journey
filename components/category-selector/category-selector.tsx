"use client";

import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";

import { categories } from "@/lib/categories";
import type { PotCategory } from "@/types/pot";

import {
    categoryButtonStyles,
    categorySelectorStyles,
} from "./catergory-selector.styles"

type CategorySelectorProps = {
    selectedCategory: PotCategory | null;
    onSelect: (category: PotCategory) => void;
};

export function CategorySelector({
    selectedCategory,
    onSelect,
}: CategorySelectorProps) {
    return (
        <ToggleGroup
            value={
                selectedCategory
                    ? [selectedCategory]
                    : []
            }
            onValueChange={(value) => {
                const selected = value[0];

                if (selected) {
                    onSelect(selected as PotCategory);
                }
            }}
            aria-label="Select a pot category"
            className={categorySelectorStyles()}
        >
            {categories.map((category) => {
                const isSelected =
                    selectedCategory === category.id;

                return (
                    <Toggle
                        key={category.id}
                        value={category.id}
                        className={categoryButtonStyles({
                            selected: isSelected,
                        })}
                    >
                        <span className="type-emoji">
                            {category.emoji}
                        </span>

                        <span className="type-body-small">
                            {category.label}
                        </span>
                    </Toggle>
                );
            })}
        </ToggleGroup>
    );
}