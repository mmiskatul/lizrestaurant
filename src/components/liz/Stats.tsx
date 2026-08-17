"use client";

import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: 4.7, decimals: 1, suffix: "", label: "Google rating" },
  { value: 2823, decimals: 0, suffix: "+", label: "Happy reviews" },
  { value: 50, decimals: 0, prefix: "AED 1–", label: "Average price" },
  { value: 100, decimals: 0, suffix: "%", label: "Authentic Kerala flavours" },
];

export function Stats() {
  return (
    <section aria-label="Ratings and value" className="border-y border-border bg-card">
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-2 gap-y-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-4 lg:gap-0">
        {stats.map((stat, index) => (
          <ScrollReveal
            key={stat.label}
            delay={index * 0.1}
            className="lg:border-l lg:border-border lg:first:border-l-0 lg:px-8 lg:first:pl-0"
          >
            <p className="font-display text-[2.25rem] font-extrabold tracking-[-0.045em] text-primary sm:text-5xl">
              <AnimatedCounter
                value={stat.value}
                decimals={stat.decimals}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </p>
            <p className="mt-2 max-w-[12rem] text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm">
              {stat.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
