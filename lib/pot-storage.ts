"use client";

import { useMemo, useSyncExternalStore } from "react";

import type { Pot } from "@/types/pot";

export function savePot(pot: Pot) {
  localStorage.setItem(`pot:${pot.id}`, JSON.stringify(pot));
}

export function getPotSnapshot(id: string): string | null {
  return localStorage.getItem(`pot:${id}`);
}

function subscribePotStorage(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key?.startsWith("pot:")) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => window.removeEventListener("storage", handleStorage);
}

export function usePot(potId: string): Pot | null {
  const potSnapshot = useSyncExternalStore(
    subscribePotStorage,
    () => getPotSnapshot(potId),
    () => null,
  );

  return useMemo((): Pot | null => {
    if (!potSnapshot) return null;

    try {
      return JSON.parse(potSnapshot) as Pot;
    } catch {
      return null;
    }
  }, [potSnapshot]);
}
