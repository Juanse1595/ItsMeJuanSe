export type Quote = {
  text: string;
  author: string;
  source?: string;
};

export const quotes: Quote[] = [
  {
    text: "You do not rise to the level of your goals. You fall to the level of your systems.",
    author: "James Clear",
    source: "Atomic Habits",
  },
];
