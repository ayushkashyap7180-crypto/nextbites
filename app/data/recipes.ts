// app/data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Drinks",
  },
  {
    id: "chhole puri",
    title: "Chhole Puri",
    emoji: "🥘",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Indian",
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Dessert",
  },
  {
    id: "burger",
    title: "Burger",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "sushi",
    title: "Sushi",
    emoji: "🍣",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Japanese",
  },
  {
    id: "pasta",
    title: "Pasta",
    emoji: "🍝",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Italian",
  },
  {
    id: "tacos",
    title: "Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
  }
];