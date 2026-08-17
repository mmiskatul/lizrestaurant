import appam from "@/assets/dish-appam.jpg";
import beefRoast from "@/assets/dish-beef-roast.jpg";
import chickenCurry from "@/assets/dish-chicken-curry.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import fishFry from "@/assets/dish-fish-fry.jpg";
import keralaMeal from "@/assets/hero-kerala-meal.jpg";
import kozhukatta from "@/assets/dish-kozhukatta.jpg";
import pazhamPori from "@/assets/dish-pazham-pori.jpg";
import payasam from "@/assets/dish-payasam.jpg";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/texture-spices.jpg";
import chai from "@/assets/atmos-chai.jpg";
import storyTable from "@/assets/story-table.jpg";

export const galleryCategories = [
  "All",
  "Food",
  "Restaurant",
  "Kerala Meals",
  "Fish",
  "Snacks",
  "Atmosphere",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryImage {
  id: string;
  src: any;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  /** Tailwind row/col span classes for the asymmetrical masonry grid. */
  span?: string;
}

export const gallery: GalleryImage[] = [
  {
    id: "g1",
    src: keralaMeal,
    alt: "Kerala sadya meal served on a banana leaf",
    category: "Kerala Meals",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: "g2",
    src: interior,
    alt: "Warm dining room with wooden tables and rattan chairs",
    category: "Restaurant",
  },
  { id: "g3", src: fishFry, alt: "Kerala style masala fish fry on banana leaf", category: "Fish" },
  {
    id: "g4",
    src: appam,
    alt: "Stack of soft appam with coconut stew",
    category: "Food",
    span: "sm:row-span-2",
  },
  {
    id: "g5",
    src: beefRoast,
    alt: "Dark caramelised Kerala beef roast in a bowl",
    category: "Food",
  },
  { id: "g6", src: pazhamPori, alt: "Golden banana fritters with tea", category: "Snacks" },
  {
    id: "g7",
    src: storyTable,
    alt: "Family style South Indian table spread",
    category: "Atmosphere",
    span: "sm:col-span-2",
  },
  { id: "g8", src: dosa, alt: "Crisp dosa with chutney and sambar", category: "Food" },
  {
    id: "g9",
    src: chai,
    alt: "Filter coffee poured between steel tumblers",
    category: "Atmosphere",
  },
  { id: "g10", src: chickenCurry, alt: "Nadan chicken curry in a clay pot", category: "Food" },
  {
    id: "g11",
    src: spices,
    alt: "Chillies, turmeric and whole spices on linen",
    category: "Atmosphere",
  },
  { id: "g12", src: payasam, alt: "Kerala payasam dessert in a brass bowl", category: "Snacks" },
  {
    id: "g13",
    src: kozhukatta,
    alt: "Steamed rice dumplings on a banana leaf",
    category: "Snacks",
  },
];
