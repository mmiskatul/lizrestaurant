import type { Metadata } from "next";
import { ArrowUpRight, Sparkles, UtensilsCrossed, Phone } from "lucide-react";

import menuHeroImage from "@/assets/hero-menu.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { MenuSection } from "@/components/liz/MenuSection";
import { LizLink } from "@/components/liz/LizButton";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Authentic Kerala Food Menu",
  description:
    "Explore our authentic Kerala and South Indian menu at LIZ Restaurant in Al Karama, Dubai. Fresh sadya meals, crispy dosas, fluffy appam, Malabar beef roast, nadan chicken curry, and fresh fish fry.",
};

const featuredCombos = [
  {
    title: "Classic Kerala Sadya Feast",
    description:
      "Matta rice served with sambar, avial, thoran, pulissery, mango pickle, payasam, and crisp papadam on a fresh banana leaf.",
    badge: "Most Popular",
    highlight: "Unlimited Rice & Sambar",
  },
  {
    title: "Appam & Nadan Stew Duo",
    description:
      "Lacy, soft fermented rice appams paired with creamy coconut milk vegetable or chicken stew infused with whole spices.",
    badge: "Breakfast Favorite",
    highlight: "Served Fresh Daily",
  },
  {
    title: "Malabar Beef Roast & Porotta",
    description:
      "Tender beef slow-roasted with caramelized shallots, coconut bites, black pepper, and curry leaves paired with flaky porotta.",
    badge: "Chef's Signature",
    highlight: "Authentic Spice Blend",
  },
  {
    title: "Evening Chai & Pazham Pori Set",
    description:
      "Golden crispy ripe banana fritters served hot with authentic pulled South Indian filter coffee or spiced cardamom chai.",
    badge: "4 PM Tea Special",
    highlight: "Made to Order",
  },
];

export default function MenuPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Dedicated Page Hero */}
        <PageHeader
          eyebrow="Culinary Collection"
          title={
            <>
              Authentic Kerala Menu. <br />
              <span className="text-gold">Honest Flavours &amp; Great Value.</span>
            </>
          }
          description="Explore our hand-crafted recipes prepared with cold-pressed coconut oil, stone-ground spices, and traditional recipes passed down through generations."
          imageSrc={menuHeroImage}
          imageAlt="Lavish authentic Kerala South Indian food spread on banana leaves"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Menu" }]}
        >
          <LizLink
            href={restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
          >
            Order Online on {restaurant.orderPlatform}
            <ArrowUpRight className="size-4" />
          </LizLink>
          <LizLink href={restaurant.phoneHref} variant="ghostOnDark" size="md">
            <Phone className="size-4" />
            Takeaway Hotline ({restaurant.phone})
          </LizLink>
        </PageHeader>

        {/* Featured Combos Showcase */}
        <section className="py-16 sm:py-20 bg-card border-b border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow text-primary">Special Pairings</p>
                <h2 className="display-md mt-2 text-foreground">
                  Signature Combinations &amp; Combos
                </h2>
              </div>
              <p className="text-xs text-muted-foreground max-w-sm">
                Carefully curated traditional pairings loved by our regular diners in Al Karama.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCombos.map((combo, i) => (
                <ScrollReveal
                  key={combo.title}
                  delay={i * 0.08}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.6875rem] font-bold text-primary-deep">
                        <Sparkles className="size-3" />
                        {combo.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-foreground mt-4">
                      {combo.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {combo.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary">{combo.highlight}</span>
                    <UtensilsCrossed className="size-4 text-muted-foreground/60" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Full Interactive Menu Section */}
        <MenuSection />

        {/* Catering & Bulk Orders Banner */}
        <section className="py-16 sm:py-20 bg-background border-t border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/5 via-card to-background p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <span className="eyebrow text-primary">Large Gatherings &amp; Events</span>
                <h3 className="font-display text-2xl font-bold sm:text-3xl mt-2 text-foreground">
                  Kerala Sadya &amp; Party Catering in Dubai
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Planning a family get-together, birthday, or corporate lunch? We cater authentic
                  Kerala feasts with banana leaves, traditional curries, and live appam counters.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <LizLink href={restaurant.phoneHref} size="lg">
                  <Phone className="size-4" />
                  Call for Catering
                </LizLink>
                <LizLink
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  Visit Restaurant
                </LizLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
