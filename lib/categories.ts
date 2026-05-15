import type { PotCategory } from "@/types/pot";

export const categories: {
    id: PotCategory;
    label: string;
    emoji: string;
}[] = [
        {
            id: "travel",
            label: "To travel somewhere cool",
            emoji: "✈️",
        },
        {
            id: "gift",
            label: "To do a whip-round for a gift",
            emoji: "🎁",
        },
        {
            id: "sport",
            label: "To get sweaty and sporty",
            emoji: "🏃",
        },
        {
            id: "fun",
            label: "To do something fun with your peeps",
            emoji: "🎉",
        },
        {
            id: "other",
            label: "Something else entirely",
            emoji: "✨",
        },
        {
            id: "charity",
            label: "To raise money for charity",
            emoji: "🖤",
        },
    ];