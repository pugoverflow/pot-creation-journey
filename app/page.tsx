"use client";

import Image from "next/image";
import { PencilLine } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { ToggleGroup } from "@/components/ui/toggle-group/toggle-group";
import { categories } from "@/lib/categories";
import { savePot } from "@/lib/pot-storage";
import type { PotCategory } from "@/types/pot";

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

  const categoryOptions = useMemo(
    () =>
      categories.map((category) => ({
        id: category.id,
        label: category.label,
        icon: category.emoji,
      })),
    []
  );

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
      amount: 0,
    };

    savePot(pot);

    router.push(
      `/dashboard/pots/${pot.id}`
    );
  }

  return (
    <main className="page-container flex flex-col gap-6 pb-14 pt-[31px]">
      <section
        aria-labelledby="hero-heading"
        className="flex flex-col gap-3 text-center"
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
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        <div className="surface-card shadow-elevated flex flex-col gap-[14px] p-6">
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
              setSelectedCategory(
                value as PotCategory
              )
            }
            options={categoryOptions}
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
            icon={
              <PencilLine size={18} />
            }
          />

          <Button
            type="button"
            variant="cta"
            disabled={!isFormValid}
            onClick={handleCreatePot}
          >
            Create your pot
          </Button>

          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center">
            <p className="type-rating">
              ★★★★★
            </p>

            <p className="type-review">
              Trusted by 3000+ App
              Store reviewers
            </p>
          </div>
        </div>

        <div className="relative h-full min-h-[280px] overflow-hidden rounded-[20px]">
          <Image
            src="/cheerleader.jpg"
            alt="People celebrating together"
            width={800}
            height={800}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
