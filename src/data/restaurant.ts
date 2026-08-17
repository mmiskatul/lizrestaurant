/**
 * Single source of truth for restaurant information.
 * Update this file to change contact details, links and copy site-wide.
 */

export interface SocialLink {
  label: string;
  /** Set to null until a verified profile URL is available. */
  href: string | null;
}

export const restaurant = {
  name: "LIZ Restaurant",
  shortName: "LIZ",
  tagline: "Why Pay More",
  cuisine: "Kerala / South Indian",
  description:
    "Authentic Kerala and South Indian food served in a warm, everyday setting in Al Karama, Dubai.",
  address: {
    street: "17 9B St",
    area: "Al Karama",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },
  phone: "+971 4 342 6955",
  phoneHref: "tel:+97143426955",
  mapsUrl: "https://maps.app.goo.gl/F3rMqfs4L2sqKCH26",
  mapEmbedQuery: "LIZ Restaurant, 17 9B St, Al Karama, Dubai",
  orderUrl: "https://talabat.com/uae/restaurant/715060/liz-restaurant-al-karama",
  orderPlatform: "Talabat",
  priceRange: "AED 1–50",
  services: ["Dine-in", "Takeaway", "No-contact delivery"],
  rating: { value: 4.7, max: 5, count: 2823, source: "Google" },
  /** Only verified profiles should be added here. */
  socials: [
    { label: "Instagram", href: null },
    { label: "Facebook", href: null },
  ] as SocialLink[],
} as const;

export const navLinks = [
  { label: "Home", to: "/", hash: "#home" },
  { label: "Menu", to: "/menu", hash: "#menu" },
  { label: "Our Story", to: "/story", hash: "#story" },
  { label: "Reviews", to: "/reviews", hash: "#reviews" },
  { label: "Gallery", to: "/gallery", hash: "#gallery" },
  { label: "Location", to: "/location", hash: "#location" },
] as const;
