/**
 * Menu data. Prices are intentionally left as `null` because verified
 * pricing was not available at build time — the UI renders a neutral
 * placeholder instead of a fabricated number. Populate `price` (in AED)
 * here or from a CMS/backend and every card, list and modal updates.
 */

import appam from "@/assets/dish-appam.jpg";
import beefRoast from "@/assets/dish-beef-roast.jpg";
import chickenCurry from "@/assets/dish-chicken-curry.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import fishFry from "@/assets/dish-fish-fry.jpg";
import keralaMeal from "@/assets/hero-kerala-meal.jpg";
import kozhukatta from "@/assets/dish-kozhukatta.jpg";
import pazhamPori from "@/assets/dish-pazham-pori.jpg";
import payasam from "@/assets/dish-payasam.jpg";
import chai from "@/assets/atmos-chai.jpg";

export type Diet = "veg" | "non-veg";

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  /** AED. Null until verified pricing is supplied. */
  price: number | null;
  diet: Diet;
  image: string;
  ingredients: string[];
  dietaryInfo: string;
  signature?: boolean;
}

export const menuCategories = [
  "Kerala Meals",
  "Breakfast",
  "Dosa",
  "Appam",
  "Curries",
  "Beef",
  "Chicken",
  "Fish",
  "Vegetarian",
  "Snacks",
  "Desserts",
  "Drinks",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export const menu: MenuItem[] = [
  {
    id: "kerala-meals",
    name: "Kerala Meals",
    category: "Kerala Meals",
    description:
      "Rice served with sambar, avial, thoran, pickle and papadam on a banana leaf.",
    price: null,
    diet: "veg",
    image: keralaMeal,
    ingredients: ["Rice", "Lentils", "Seasonal vegetables", "Coconut", "Curry leaves"],
    dietaryInfo: "Vegetarian. Non-veg side dishes can be added.",
    signature: true,
  },
  {
    id: "beef-roast",
    name: "Beef Roast",
    category: "Beef",
    description:
      "Slow-roasted beef with coconut slivers, black pepper and curry leaves.",
    price: null,
    diet: "non-veg",
    image: beefRoast,
    ingredients: ["Beef", "Coconut", "Black pepper", "Shallots", "Curry leaves"],
    dietaryInfo: "Contains beef. Spicy.",
    signature: true,
  },
  {
    id: "kall-appam",
    name: "Kall Appam",
    category: "Appam",
    description: "Soft fermented rice pancakes with a lightly sweet coconut edge.",
    price: null,
    diet: "veg",
    image: appam,
    ingredients: ["Rice batter", "Coconut milk", "Yeast"],
    dietaryInfo: "Vegetarian. Gluten free.",
    signature: true,
  },
  {
    id: "fish-fry",
    name: "Kerala Fish Fry",
    category: "Fish",
    description: "Fresh fish marinated in chilli and spice, fried on a banana leaf.",
    price: null,
    diet: "non-veg",
    image: fishFry,
    ingredients: ["Fish", "Chilli", "Turmeric", "Ginger", "Coconut oil"],
    dietaryInfo: "Contains fish. Spicy.",
    signature: true,
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    category: "Dosa",
    description: "Crisp rice crêpe with spiced potato, coconut chutney and sambar.",
    price: null,
    diet: "veg",
    image: dosa,
    ingredients: ["Rice", "Urad dal", "Potato", "Coconut", "Mustard seeds"],
    dietaryInfo: "Vegetarian.",
    signature: true,
  },
  {
    id: "nadan-chicken-curry",
    name: "Nadan Chicken Curry",
    category: "Chicken",
    description: "Village-style chicken simmered in coconut milk and roasted spice.",
    price: null,
    diet: "non-veg",
    image: chickenCurry,
    ingredients: ["Chicken", "Coconut milk", "Shallots", "Garam masala"],
    dietaryInfo: "Contains chicken.",
    signature: true,
  },
  {
    id: "pazham-pori",
    name: "Pazham Pori",
    category: "Snacks",
    description: "Ripe banana fritters fried golden — the classic evening tea snack.",
    price: null,
    diet: "veg",
    image: pazhamPori,
    ingredients: ["Banana", "Rice flour", "Cardamom"],
    dietaryInfo: "Vegetarian.",
    signature: true,
  },
  {
    id: "ela-ada",
    name: "Ela Ada & Kozhukotta",
    category: "Breakfast",
    description: "Steamed rice parcels filled with coconut and jaggery.",
    price: null,
    diet: "veg",
    image: kozhukatta,
    ingredients: ["Rice flour", "Coconut", "Jaggery", "Banana leaf"],
    dietaryInfo: "Vegetarian. Steamed, not fried.",
    signature: true,
  },
  {
    id: "payasam",
    name: "Payasam",
    category: "Desserts",
    description: "Slow-cooked milk pudding with cashew, raisin and cardamom.",
    price: null,
    diet: "veg",
    image: payasam,
    ingredients: ["Milk", "Vermicelli", "Sugar", "Cashew", "Cardamom"],
    dietaryInfo: "Vegetarian. Contains dairy and nuts.",
    signature: true,
  },
  {
    id: "sambar-avial",
    name: "Sambar & Avial",
    category: "Curries",
    description: "Two Kerala staples: tangy lentil sambar and coconut-dressed avial.",
    price: null,
    diet: "veg",
    image: keralaMeal,
    ingredients: ["Toor dal", "Tamarind", "Vegetables", "Coconut", "Yoghurt"],
    dietaryInfo: "Vegetarian.",
  },
  {
    id: "veg-thoran",
    name: "Thoran & Veg Sides",
    category: "Vegetarian",
    description: "Stir-fried vegetables tossed with fresh grated coconut.",
    price: null,
    diet: "veg",
    image: kozhukatta,
    ingredients: ["Seasonal vegetables", "Coconut", "Mustard seeds", "Curry leaves"],
    dietaryInfo: "Vegetarian. Mildly spiced.",
  },
  {
    id: "filter-coffee",
    name: "Filter Coffee & Chai",
    category: "Drinks",
    description: "Strong South Indian filter coffee, pulled hot and frothy.",
    price: null,
    diet: "veg",
    image: chai,
    ingredients: ["Coffee", "Milk", "Sugar"],
    dietaryInfo: "Contains dairy. Black options available.",
  },
];

export const signatureDishes = menu.filter((item) => item.signature);

export function formatPrice(price: number | null) {
  return price === null ? "Ask in store" : `AED ${price}`;
}
