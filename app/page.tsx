"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { CategorySelector } from "@/components/category-selector";
import { savePot } from "@/lib/pot-storage";
import type { PotCategory } from "@/types/pot";

export default function HomePage() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState<PotCategory | null>(null);

  const [potName, setPotName] = useState("");

  const trimmedPotName = potName.trim();

  const isFormValid = selectedCategory !== null && trimmedPotName.length > 0;

  function handleCreatePot() {
    if (!selectedCategory || !trimmedPotName) {
      return;
    }

    const pot = {
      id: crypto.randomUUID().replaceAll("-", "").slice(0, 22),
      name: trimmedPotName,
      category: selectedCategory,
    };

    savePot(pot);

    router.push(`/dashboard/pots/${pot.id}`);
  }

  return (
    <main>
      <section>
        <h1 className="type-h1">
          Collect money without sharing bank details.
        </h1>

        <p className="type-body-large">
          Organise the things you love with the people you love - without
          getting stuck with the bill.
        </p>
      </section>

      <section>
        <h5 className="type-h5">What are you collecting for?</h5>

        <CategorySelector
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <h5 className="type-h5">What should we call the pot?</h5>

        <input
          type="text"
          value={potName}
          onChange={(event) => {
            setPotName(event.target.value.slice(0, 40));
          }}
          maxLength={40}
          placeholder="Enter a name for this pot"
          className="type-input"
        />

        <button
          type="button"
          disabled={!isFormValid}
          onClick={handleCreatePot}
          className="type-button"
        >
          Create your pot
        </button>
      </section>
    </main>
  );
}