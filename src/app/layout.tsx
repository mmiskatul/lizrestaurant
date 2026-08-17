import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/styles.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LIZ Restaurant | Authentic Kerala & South Indian Cuisine in Al Karama, Dubai",
    template: "%s | LIZ Restaurant Dubai",
  },
  description:
    "Authentic Kerala and South Indian restaurant in Al Karama, Dubai. Experience genuine flavours, traditional sadya meals, crispy dosas, and warm hospitality at honest prices.",
  keywords: [
    "Kerala Restaurant Dubai",
    "South Indian Food Karama",
    "LIZ Restaurant",
    "Kerala Sadya Dubai",
    "Appam and Stew",
    "Malabar Beef Roast",
    "Fish Fry Dubai",
  ],
  authors: [{ name: "LIZ Restaurant" }],
  openGraph: {
    title: "LIZ Restaurant | Authentic Kerala & South Indian Cuisine - Al Karama, Dubai",
    description:
      "Authentic Kerala and South Indian food served in a warm, everyday setting in Al Karama, Dubai. Dine-in, takeaway, and delivery.",
    type: "website",
    locale: "en_AE",
    siteName: "LIZ Restaurant",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIZ Restaurant - Authentic Kerala Food in Dubai",
    description:
      "Homely Kerala flavours, generous portions, and authentic South Indian cuisine in Al Karama, Dubai.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#2D5A43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
