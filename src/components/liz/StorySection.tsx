"use client";

import { Heart, Flame, Sparkles, ShieldCheck } from "lucide-react";

import storyTable from "@/assets/story-table.jpg";
import spices from "@/assets/texture-spices.jpg";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { ImageWithFallback } from "./ImageWithFallback";

const pillars = [
  {
    icon: Flame,
    title: "Fresh Kerala Spices",
    description:
      "Hand-selected cardamom, black pepper, and curry leaves slow-roasted to bring out authentic Malabar & Travancore aromas.",
  },
  {
    icon: Heart,
    title: "Homely Hospitality",
    description:
      "Every guest is welcomed like family. Unhurried service and genuine smiles that evoke the warmth of a Kerala home.",
  },
  {
    icon: Sparkles,
    title: "Generous Portions",
    description:
      "Satisfying meals served with unlimited sambar, rich curries, and warm hospitality that leaves you completely content.",
  },
  {
    icon: ShieldCheck,
    title: "Why Pay More?",
    description:
      "Authentic quality food does not need premium markups. Honest prices crafted for our everyday community in Al Karama.",
  },
];

export function StorySection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 bg-card border-t border-border"
    >
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Visual Story Collage */}
          <div className="relative">
            <ScrollReveal direction="scale">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-lift)]">
                <ImageWithFallback
                  src={storyTable}
                  alt="Traditional South Indian feast served on banana leaves with family"
                  className="aspect-4/3 w-full object-cover sm:aspect-5/4"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-deep/40 via-transparent to-transparent" />
              </div>
            </ScrollReveal>

            {/* Inset floating spice card */}
            <ScrollReveal
              delay={0.2}
              direction="right"
              className="glass-card absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 max-w-[240px] sm:max-w-[280px] overflow-hidden rounded-3xl p-3 sm:p-4 shadow-xl"
            >
              <div className="overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={spices}
                  alt="Aromatic Kerala whole spices, star anise, turmeric and chillies"
                  className="aspect-16/10 w-full object-cover"
                />
              </div>
              <p className="mt-3 font-display text-sm font-bold text-foreground">
                100% Traditional Recipes
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Authentic spices roasted &amp; ground in-house
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Text Narrative */}
          <div>
            <SectionHeading
              eyebrow="Our Story &amp; Passion"
              title={
                <>
                  Bringing God’s Own Country <br />
                  <span className="text-primary">To the Heart of Karama</span>
                </>
              }
              copy={
                <>
                  At <strong className="text-foreground">{restaurant.name}</strong>, our journey
                  began with a simple yet powerful belief: authentic, soul-satisfying Kerala food
                  should be accessible to everyone every day.
                </>
              }
            />

            <ScrollReveal
              delay={0.2}
              className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              <p>
                From crispy golden dosas and fragrant kall appams to slow-cooked beef roast and
                banana-leaf sadya feasts, each recipe stays true to Kerala culinary traditions.
              </p>
              <p>
                Our signature tagline —{" "}
                <span className="font-semibold text-primary font-display">
                  "{restaurant.tagline}"
                </span>{" "}
                — reflects our commitment to high standards, generous portions, and transparent
                pricing without unnecessary extravagance.
              </p>
            </ScrollReveal>

            {/* 4 Pillars Grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pillars.map((pillar, i) => (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.1 * (i + 1)}
                  className="rounded-2xl border border-border/80 bg-background/60 p-4 transition-all hover:border-primary/30 hover:bg-background"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <pillar.icon className="size-5" />
                  </div>
                  <h4 className="mt-3 font-display text-sm font-bold text-foreground">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
