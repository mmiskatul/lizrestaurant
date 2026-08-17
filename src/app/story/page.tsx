import type { Metadata } from "next";
import { ArrowUpRight, Flame, Leaf, Award, HeartHandshake, Utensils } from "lucide-react";

import storyHeroImage from "@/assets/hero-story.jpg";
import interiorImage from "@/assets/interior.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { StorySection } from "@/components/liz/StorySection";
import { ImageWithFallback } from "@/components/liz/ImageWithFallback";
import { LizLink } from "@/components/liz/LizButton";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story & Culinary Heritage",
  description:
    "Discover the story of LIZ Restaurant in Al Karama, Dubai. Authentic Kerala recipes, traditional slow-cooked masalas, and our honest value philosophy: Why Pay More?",
};

const culinarySecrets = [
  {
    icon: Flame,
    title: "Clay Pot & Brass Uruli Simmering",
    description:
      "Our nadan curries and fish preparations are cooked in earthenware and heavy brass vessels to retain deep earthy flavours and tender textures.",
  },
  {
    icon: Leaf,
    title: "Cold-Pressed Coconut Oil & Fresh Leaves",
    description:
      "We exclusively temper our curries and roast dishes in pure coconut oil with hand-picked green curry leaves for that signature Kerala aroma.",
  },
  {
    icon: Award,
    title: "Hand-Crafted Spice Blends",
    description:
      "No pre-packaged artificial pastes. Every spice mixture — from pepper masala to roasted coconut gravy — is prepared fresh daily in our kitchen.",
  },
  {
    icon: HeartHandshake,
    title: "Community First: Why Pay More?",
    description:
      "We believe everyone deserves the comfort of homestyle food. We keep our prices modest while offering uncompromised portions and warmth.",
  },
];

export default function StoryPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHeader
          eyebrow="Our Heritage &amp; Roots"
          title={
            <>
              From God’s Own Country <br />
              <span className="text-gold">To the Heart of Karama</span>
            </>
          }
          description="A culinary love letter to authentic Kerala flavours, crafted with passion, tradition, and the spirit of homely South Indian hospitality."
          imageSrc={storyHeroImage}
          imageAlt="Traditional rustic Kerala kitchen with brass uruli and rich spices"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Story" }]}
        >
          <LizLink href="/menu" variant="gold" size="md">
            Explore Our Menu
            <Utensils className="size-4" />
          </LizLink>
          <LizLink href="/location" variant="ghostOnDark" size="md">
            Visit in Al Karama
          </LizLink>
        </PageHeader>

        {/* Detailed Narrative Section */}
        <section className="py-20 sm:py-28 bg-card">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <p className="eyebrow text-primary">The Philosophy</p>
                <h2 className="display-lg mt-3 text-foreground">
                  "Why Pay More?" <br />
                  <span className="text-primary">An Everyday Promise.</span>
                </h2>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    When <strong className="text-foreground">{restaurant.name}</strong> was founded
                    in Dubai’s bustling Al Karama neighborhood, we set out with a clear purpose: to
                    serve real, comforting Kerala meals without inflated dining costs.
                  </p>
                  <p>
                    Whether you are an expatriate missing the comforting tastes of home, a family
                    dining together on a weekend, or a foodie exploring South Indian heritage, we
                    offer generous servings prepared with utmost cleanliness and authentic
                    ingredients.
                  </p>
                  <p>
                    From our famous unlimited sadya meals served on fresh banana leaves to crisp
                    breakfast dosas and late-night Malabar curries, every meal is prepared with the
                    same warmth we would offer guests in our own family home.
                  </p>
                </div>
              </div>

              <ScrollReveal direction="scale" className="relative">
                <div className="overflow-hidden rounded-3xl shadow-xl border border-border">
                  <ImageWithFallback
                    src={interiorImage}
                    alt="Warm, inviting dining area of LIZ Restaurant in Al Karama"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
                <div className="glass-card absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 rounded-2xl p-4 sm:p-5 max-w-xs shadow-lg">
                  <p className="font-display text-lg font-bold text-foreground">Al Karama, Dubai</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Serving smiles &amp; steaming hot sadya meals 7 days a week.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Kitchen Craft & Secrets */}
        <section className="py-20 sm:py-28 bg-background border-t border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow text-primary">Artisanal Craft</p>
              <h2 className="display-md mt-2 text-foreground">
                How We Keep Flavours Truly Authentic
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                We adhere strictly to time-honored Malabar and Travancore cooking methods without
                modern culinary shortcuts.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {culinarySecrets.map((secret, i) => (
                <ScrollReveal
                  key={secret.title}
                  delay={i * 0.1}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <secret.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-foreground">
                    {secret.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {secret.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section Component */}
        <StorySection />

        {/* Call to action */}
        <section className="py-16 bg-primary-deep text-primary-foreground">
          <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Taste the True Flavours of Kerala
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Join us at Al Karama or order directly to your doorstep.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
              >
                Order on {restaurant.orderPlatform}
                <ArrowUpRight className="size-4" />
              </LizLink>
              <LizLink href="/menu" variant="ghostOnDark" size="lg">
                View Full Menu
              </LizLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
