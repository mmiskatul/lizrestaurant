"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <ScrollReveal>
          <p
            className={cn(
              "eyebrow flex items-center gap-3",
              align === "center" && "justify-center",
              tone === "light" ? "text-primary-foreground/70" : "text-primary",
            )}
          >
            <span
              className={cn(
                "h-px w-8",
                tone === "light" ? "bg-primary-foreground/40" : "bg-primary/40",
              )}
              aria-hidden="true"
            />
            {eyebrow}
          </p>
        </ScrollReveal>
      ) : null}
      <ScrollReveal delay={0.08}>
        <h2
          className={cn(
            "display-lg mt-5",
            tone === "light" ? "text-primary-foreground" : "text-foreground",
          )}
        >
          {title}
        </h2>
      </ScrollReveal>
      {copy ? (
        <ScrollReveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-xl text-[0.9375rem] leading-relaxed sm:text-base",
              align === "center" && "mx-auto",
              tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {copy}
          </p>
        </ScrollReveal>
      ) : null}
    </div>
  );
}
