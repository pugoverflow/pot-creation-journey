import type { Pot } from "@/types/pot";

export function savePot(pot: Pot) {
    localStorage.setItem(`pot:${pot.id}`, JSON.stringify(pot));
}

export function getPotById(id: string): Pot | null {
    const storedPot = localStorage.getItem(`pot:${id}`);

    if (!storedPot) return null;

    try {
        return JSON.parse(storedPot) as Pot;
    } catch {
        return null;
    }
}