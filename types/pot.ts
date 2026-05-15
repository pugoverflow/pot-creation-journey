export type PotCategory =
    | "travel"
    | "gift"
    | "sport"
    | "fun"
    | "other"
    | "charity";

export type Pot = {
    id: string;
    name: string;
    category: PotCategory;
};