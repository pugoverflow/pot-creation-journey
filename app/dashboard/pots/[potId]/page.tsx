"use client";

import {
  Ellipsis,
  MoveDownRight,
  MoveUpRight,
  Palette,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState, useSyncExternalStore } from "react";
import { useParams } from "next/navigation";

import { AnimatedAmount } from "@/components/custom/animated-amount/animated-amount";
import { SignupModal } from "@/components/custom/signup-modal/signup-modal";
import { Button } from "@/components/ui/button/button";
import { stepEnter } from "@/lib/motion";
import { getPotSnapshot } from "@/lib/pot-storage";
import { socials } from "@/lib/socials";
import type { Pot } from "@/types/pot";

const potActions = [
  {
    label: "Collect money",
    icon: MoveDownRight,
    variant: "primary" as const,
  },
  {
    label: "Send money",
    icon: MoveUpRight,
    variant: "secondary" as const,
  },
  {
    label: "Customise pot",
    icon: Palette,
    variant: "tertiary" as const,
  },
];

export default function PotPreviewPage() {
  const params = useParams<{ potId: string }>();

  const potSnapshot = useSyncExternalStore(
    () => () => {},
    () => getPotSnapshot(params.potId),
    () => null
  );

  const pot = useMemo((): Pot | null => {
    if (!potSnapshot) return null;

    try {
      return JSON.parse(potSnapshot) as Pot;
    } catch {
      return null;
    }
  }, [potSnapshot]);

  const [isSignupOpen, setIsSignupOpen] =
    useState(false);

  function handleProtectedAction() {
    setIsSignupOpen(true);
  }

  const amount = Number(
    pot?.amount ?? 0
  );

  return (
    <main className="flex flex-col">
      <section
        aria-labelledby="pot-preview-heading"
        className="bg-[var(--color-blue-23)]"
      >
        <div
          className="page-container flex min-h-[268px] flex-col items-center justify-center gap-4 py-14 text-center"
        >
          <h1
            id="pot-preview-heading"
            className="type-pot-name"
          >
            {pot ? pot.name : "Loading pot..."}
          </h1>

          <AnimatedAmount
            value={amount}
            className="type-pot-amount"
          />
        </div>
      </section>

      <div
        className="
          relative
          bg-white
          before:absolute
          before:left-0
          before:top-0
          before:h-[56px]
          before:w-full
          before:-skew-y-1
          before:bg-[var(--color-blue-23)]
          before:origin-top-left
          before:content-['']
        "
      >
        <div
          className="page-container relative z-10 flex flex-col gap-6"
        >
          <motion.section
            aria-label="Pot actions"
            {...stepEnter}
            className="surface-panel shadow-card mx-auto flex w-fit flex-wrap justify-center gap-4 p-4"
          >
            {potActions.map((action) => {
              const Icon =
                action.icon;

              return (
                <Button
                  key={action.label}
                  type="button"
                  variant={action.variant}
                  onClick={
                    handleProtectedAction
                  }
                >
                  <Icon size={18} />

                  <span>
                    {action.label}
                  </span>
                </Button>
              );
            })}

            <Button
              type="button"
              variant="tertiaryIcon"
              onClick={
                handleProtectedAction
              }
              aria-label="Open menu"
            >
              <Ellipsis size={18} />
            </Button>
          </motion.section>

          <motion.section
            aria-labelledby="invite-heading"
            {...stepEnter}
            className="mx-auto flex w-full max-w-[662px] flex-col gap-4 rounded-[10px] bg-[var(--color-grey-95-40)] p-5"
          >
            <h2
              id="invite-heading"
              className="type-pot-invite-title"
            >
              Invite people to pay
            </h2>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-6">
              {socials.map((social) => {
                const Icon =
                  social.icon;

                return (
                  <Button
                    key={social.id}
                    type="button"
                    variant="social"
                    onClick={
                      handleProtectedAction
                    }
                  >
                    <Icon size={20} />

                    <span className="type-body-small">
                      {social.label}
                    </span>
                  </Button>
                );
              })}
            </div>
          </motion.section>
        </div>
      </div>

      <SignupModal
        open={isSignupOpen}
        onClose={() =>
          setIsSignupOpen(false)
        }
      />
    </main>
  );
}
