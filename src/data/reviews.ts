/**
 * Review themes summarising publicly visible Google review sentiment.
 * These are paraphrased themes, not attributed customer quotes.
 * Replace with a live Google Places feed to show real, attributed reviews.
 */

export interface ReviewTheme {
  id: string;
  stars: number;
  theme: string;
  body: string;
}

export const reviewThemes: ReviewTheme[] = [
  {
    id: "authentic",
    stars: 5,
    theme: "Authentic flavours",
    body: "Guests consistently describe the South Indian cooking as delicious and genuinely authentic.",
  },
  {
    id: "portions",
    stars: 5,
    theme: "Generous portions",
    body: "Plates arrive fresh, flavourful and generously served — a recurring theme in reviews.",
  },
  {
    id: "value",
    stars: 5,
    theme: "Honest value",
    body: "The price-to-portion balance is one of the most mentioned reasons diners return.",
  },
  {
    id: "presentation",
    stars: 4,
    theme: "Beautiful presentation",
    body: "Reviewers note that the food is presented with care, not just served quickly.",
  },
  {
    id: "breakfast",
    stars: 5,
    theme: "Kerala breakfast",
    body: "Appam, puttu and dosa mornings are a favourite among the Al Karama regulars.",
  },
  {
    id: "service",
    stars: 5,
    theme: "Warm service",
    body: "Friendly, homely and unhurried — the kind of place people bring family to.",
  },
];

export const reviewSourceNote =
  "Themes summarised from public Google reviews of LIZ Restaurant, Al Karama.";
