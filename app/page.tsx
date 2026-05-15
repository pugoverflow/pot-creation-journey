"use client";

import { useState } from "react";

import { CategorySelector } from "@/components/category-selector";
import type { PotCategory } from "@/types/pot";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] =
    useState<PotCategory | null>(null);

  return (
    <main>
      <div>
        <h1>Collect money without sharing bank details.</h1>

        <p>
          Organise the things you love with the people you love - without
          getting stuck with the bill.
        </p>
      </div>

      <div>
        <h5>What are you collecting for?</h5>

        <CategorySelector
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* <p>Selected category: {selectedCategory ?? "None"}</p> */}

        <h5>What should we call the pot?</h5>

        {/* The user must provide a Name for their group pot. */}
        {/* Implement basic input sanitation or character limit validation as you see fit. But both the category and name must be completed to proceed. */}

        <button>Create your pot</button>

        {/* When the user clicks the "Create your pot" button, the application should process the creation and transition to the next step. */}
        {/* Cross-Domain Simulation: For the purpose of this task, assume the Homepage and the Pot Information Screen exist on two separate domains (e.g., the homepage on collctiv.com and the dashboard application on app.collctiv.com). */}
        {/* State & Routing: To accommodate this architectural separation, data must persist across this boundary (e.g., via localStorage, session storage, or URL state). While simple conditional rendering is acceptable for step transitions, implementing clean, structured client-side routing (with simulated domain paths or route updates) will be highly favoured. */}
      </div>
    </main>
  );
}