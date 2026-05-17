"use client";

import { motion } from "motion/react";
import { useMemo, useSyncExternalStore } from "react";

import { subtleTransition } from "@/lib/motion";

type AnimatedAmountProps = {
  value: number;
  className?: string;
};

const amountDisplayStyles =
  "inline-flex items-baseline tabular-nums";

const ROLL_CYCLES = 2;
const DIGIT_STAGGER = 0.07;
const ROLL_DURATION = 1.05;

function formatAmount(value: number) {
  return value.toFixed(2);
}

function subscribePrefersReducedMotion(
  onStoreChange: () => void
) {
  const media = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  media.addEventListener("change", onStoreChange);

  return () =>
    media.removeEventListener("change", onStoreChange);
}

function getPrefersReducedMotionSnapshot() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribePrefersReducedMotion,
    getPrefersReducedMotionSnapshot,
    () => false
  );
}

function buildDigitStrip(targetDigit: number) {
  const finalIndex = 10 * ROLL_CYCLES + targetDigit;

  return Array.from(
    { length: finalIndex + 1 },
    (_, index) => index % 10
  );
}

type DigitRollerProps = {
  digit: number;
  delay: number;
};

function DigitRoller({ digit, delay }: DigitRollerProps) {
  const strip = useMemo(
    () => buildDigitStrip(digit),
    [digit]
  );

  const finalIndex = 10 * ROLL_CYCLES + digit;

  return (
    <span
      aria-hidden
      className="inline-block h-[1lh] w-[0.62em] overflow-hidden"
    >
      <motion.span
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: `-${finalIndex}lh` }}
        transition={{
          duration: ROLL_DURATION,
          delay,
          ease: [0.22, 1, 0.28, 1],
        }}
      >
        {strip.map((value, index) => (
          <span
            key={index}
            className="flex h-[1lh] items-center justify-center leading-[1lh]"
          >
            {value}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function AnimatedAmount({
  value,
  className,
}: AnimatedAmountProps) {
  const prefersReducedMotion =
    usePrefersReducedMotion();

  const formatted = formatAmount(value);
  const label = `£${formatted}`;

  const { chars, digitIndexByPosition } = useMemo(() => {
    const chars = formatted.split("");
    const digitPositions = chars
      .map((char, index) =>
        /\d/.test(char) ? index : -1
      )
      .filter((index) => index >= 0);

    const digitIndexByPosition = new Map<number, number>();

    digitPositions.forEach((position, order) => {
      digitIndexByPosition.set(
        position,
        digitPositions.length - 1 - order
      );
    });

    return { chars, digitIndexByPosition };
  }, [formatted]);

  if (prefersReducedMotion) {
    return (
      <p className={className} aria-label={label}>
        £{formatted}
      </p>
    );
  }

  return (
    <motion.p
      className={
        className
          ? `${className} ${amountDisplayStyles}`
          : amountDisplayStyles
      }
      aria-label={label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={subtleTransition}
    >
      <span aria-hidden className="inline-block">
        £
      </span>

      {chars.map((char, index) => {
        if (char === ".") {
          return (
            <span
              key={`${index}-dot`}
              aria-hidden
              className="inline-block w-[0.35em] text-center"
            >
              .
            </span>
          );
        }

        const digit = Number(char);
        const delay =
          (digitIndexByPosition.get(index) ?? 0) *
          DIGIT_STAGGER;

        return (
          <DigitRoller
            key={`${index}-${digit}`}
            digit={digit}
            delay={delay}
          />
        );
      })}
    </motion.p>
  );
}
