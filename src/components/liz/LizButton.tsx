import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export const lizButtonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary-deep hover:shadow-[var(--shadow-lift)]",
        outline:
          "border border-foreground/15 bg-card/60 text-foreground backdrop-blur hover:border-primary/40 hover:bg-card",
        gold: "bg-gold text-primary-deep shadow-[var(--shadow-soft)] hover:brightness-105 hover:shadow-[var(--shadow-lift)]",
        light:
          "bg-primary-foreground text-primary-deep shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]",
        ghostOnDark:
          "border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/70 hover:bg-primary-foreground/10",
      },
      size: {
        sm: "h-10 px-4 text-[0.8125rem]",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-7 text-[0.9375rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof lizButtonVariants>;

export function LizButton({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Variants & { children: ReactNode }) {
  return (
    <button className={cn(lizButtonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}

export function LizLink({
  className,
  variant,
  size,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & Variants & { children: ReactNode }) {
  return (
    <a className={cn(lizButtonVariants({ variant, size }), className)} {...props}>
      {children}
    </a>
  );
}
