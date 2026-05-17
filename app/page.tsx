"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ToggleGroup } from "@/components/ui/toggle-group/toggle-group";
import { Input } from "@/components/ui/input/input";
import { categories } from "@/lib/categories";;
import { Button } from "@/components/ui/button/button";
import { savePot } from "@/lib/pot-storage";
import type { PotCategory } from "@/types/pot";
import { PencilLine } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState<PotCategory | null>(null);

  const [potName, setPotName] =
    useState("");

  const trimmedPotName =
    potName.trim();

  const isFormValid =
    selectedCategory !== null &&
    trimmedPotName.length > 0;

  function handleCreatePot() {
    if (
      !selectedCategory ||
      !trimmedPotName
    ) {
      return;
    }

    const pot = {
      id: crypto
        .randomUUID()
        .replaceAll("-", "")
        .slice(0, 22),

      name: trimmedPotName,
      category: selectedCategory,
    };

    savePot(pot);

    router.push(
      `/dashboard/pots/${pot.id}`
    );
  }

  return (
    <main
      className="
        mx-auto
        flex
        w-full
        max-w-[1200px]
        flex-col
        gap-6
        px-5
      "
    >
      <section
        aria-labelledby="hero-heading"
        className="
          flex
          w-full
          flex-col
          gap-3
        "
      >
        <h1
          id="hero-heading"
          className="type-h1"
        >
          Collect money without sharing
          bank details.
        </h1>

        <p className="type-body-large">
          Organise the things you love
          with the people you love -
          without getting stuck with the
          bill.
        </p>
      </section>

      <section
        aria-labelledby="create-pot-heading"
        className="
          flex
          flex-col
          gap-6
          lg:flex-row
        "
      >
        <div className="flex flex-1">
          <section
            className="
              flex
              w-full
              flex-col
              gap-[14px]
              rounded-[20px]
              border
              border-[var(--color-grey-94)]
              bg-white
              p-6
              shadow-[0px_4px_24px_0px_#1E1B4B0F]
            "
          >
            <h2
              id="create-pot-heading"
              className="sr-only"
            >
              Create a pot
            </h2>

            <h5 className="type-h5">
              What are you collecting
              for?
            </h5>

            <ToggleGroup
              ariaLabel="Select a pot category"
              value={selectedCategory}
              onValueChange={(value) =>
                setSelectedCategory(value as PotCategory)
              }
              options={categories.map((category) => ({
                id: category.id,
                label: category.label,
                icon: category.emoji,
              }))}
            />
            <h5 className="type-h5">
              What should we call the
              pot?
            </h5>

            <Input
              type="text"
              value={potName}
              onChange={(event) => {
                setPotName(
                  event.target.value.slice(
                    0,
                    40
                  )
                );
              }}
              maxLength={40}
              placeholder="Enter a name for this pot"
              icon={<PencilLine size={18} />}
            />

            <Button
              type="button"
              variant="cta"
              disabled={!isFormValid}
              onClick={handleCreatePot}
            >
              Create your pot
            </Button>
          </section>
        </div>

        <div className="flex flex-1">
          <Image
            src="/cheerleader.jpg"
            alt="People celebrating together"
            width={800}
            height={800}
            priority
            className="
              h-full
              w-full
              rounded-[20px]
              object-cover
            "
          />
        </div>
      </section>
    </main>
  );
}