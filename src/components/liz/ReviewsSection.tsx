"use client";

import { Star, MessageSquareQuote, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { reviewThemes, reviewSourceNote } from "@/data/reviews";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { LizLink } from "./LizButton";

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 lg:py-36 bg-background">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Guest Testimonials"
          title={
            <>
              Loved by 2,800+ Diners in <br className="hidden sm:inline" />
              <span className="text-primary">Al Karama &amp; Beyond</span>
            </>
          }
          copy="See what our community says about our homely Kerala flavours, friendly service, and unbeatable value."
          align="center"
        />

        {/* Rating summary bar */}
        <ScrollReveal delay={0.15} className="mt-12">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left">
              <div className="flex items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Star className="size-8 fill-gold text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-3xl font-extrabold text-foreground">
                      {restaurant.rating.value}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      / {restaurant.rating.max}.0
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-gold text-gold" />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-muted-foreground">
                      ({restaurant.rating.count.toLocaleString()} Google Reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LizLink
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  View on Google Maps
                  <ArrowUpRight className="size-4" />
                </LizLink>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Review Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewThemes.map((rev, index) => (
            <ScrollReveal
              key={rev.id}
              delay={0.06 * (index + 1)}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <MessageSquareQuote className="size-5 text-primary/30" />
                </div>

                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {rev.theme}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">"{rev.body}"</p>
              </div>

              <div className="mt-6 flex items-center gap-2 pt-4 border-t border-border/60 text-xs font-medium text-muted-foreground">
                <CheckCircle2 className="size-3.5 text-emerald-600" />
                <span>Verified Diner Feedback</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{reviewSourceNote}</p>
      </div>
    </section>
  );
}
