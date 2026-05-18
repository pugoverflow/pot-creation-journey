export type PotCategory =
  | "travel"
  | "gift"
  | "sport"
  | "fun"
  | "other"
  | "charity";

export type CategoryOption = {
  id: PotCategory;
  label: string;
  emoji: string;
};

export type Pot = {
  id: string;
  name: string;
  category: PotCategory;
  amount: number;
};
