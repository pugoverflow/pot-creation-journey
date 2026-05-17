"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { SignupModal } from "@/components/signup-modal/signup-modal";
import { Button } from "@/components/ui/button/button";
import { getPotById } from "@/lib/pot-storage";
import { socials } from "@/lib/socials";
import type { Pot } from "@/types/pot";

export default function PotPreviewPage() {
  const params = useParams<{ potId: string }>();

  const [pot, setPot] = useState<Pot | null>(null);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  useEffect(() => {
    setPot(getPotById(params.potId));
  }, [params.potId]);

  function handleProtectedAction() {
    setIsSignupOpen(true);
  }

  const amount = Number(pot?.amount ?? 0);

  return (
    <main className="flex w-full flex-col">
      <section
        aria-labelledby="pot-preview-heading"
        className="w-full bg-[var(--color-blue-23)]"
      >
        <div className="mx-auto flex min-h-[268px] w-full max-w-[1440px] flex-col items-center justify-center gap-4 px-5 py-14 text-center md:px-10 xl:px-[120px]">
          <h1 id="pot-preview-heading" className="type-pot-name">
            {pot?.name ?? "Pot not found"}
          </h1>

          <p className="type-pot-amount">
            £{amount.toFixed(2)}
          </p>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 py-8 md:px-10 xl:px-[120px]">
        <section
          aria-label="Pot actions"
          className="flex flex-wrap gap-3"
        >
          <Button
            type="button"
            variant="cta"
            onClick={handleProtectedAction}
          >
            Collect money
          </Button>

          <Button
            type="button"
            variant="link"
            onClick={handleProtectedAction}
          >
            Send money
          </Button>

          <Button
            type="button"
            variant="link"
            onClick={handleProtectedAction}
          >
            Customise pot
          </Button>

          <Button
            type="button"
            variant="link"
            onClick={handleProtectedAction}
          >
            Menu
          </Button>
        </section>

        <section
          aria-labelledby="invite-heading"
          className="flex flex-col gap-4"
        >
          <h2 id="invite-heading" className="type-h5">
            Invite people to pay
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {socials.map((social) => (
              <button
                key={social.id}
                type="button"
                onClick={handleProtectedAction}
                className="flex flex-col items-center justify-center gap-2 rounded-[12px] border border-[var(--color-grey-94)] bg-white p-4"
              >
                <span className="type-emoji">{social.icon}</span>
                <span className="type-body-small">{social.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <SignupModal
        open={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </main>
  );
}