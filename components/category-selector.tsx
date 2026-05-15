import { categories } from "@/lib/categories";
import type { PotCategory } from "@/types/pot";

type CategorySelectorProps = {
    selectedCategory: PotCategory | null;
    onSelect: (category: PotCategory) => void;
};

export function CategorySelector({
    selectedCategory,
    onSelect,
}: CategorySelectorProps) {
    return (
        <div>
            {categories.map((category) => {
                const isSelected = selectedCategory === category.id;

                return (
                    <button
                        key={category.id}
                        type="button"
                        onClick={() => onSelect(category.id)}
                        aria-pressed={isSelected}
                    >
                        <div>{category.emoji}</div>

                        <p>{category.label}</p>
                    </button>
                );
            })}
        </div>
    );
}