"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

import { ImageWithFallback } from "./ImageWithFallback";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  imageSrc: any;
  imageAlt: string;
  breadcrumbs: Array<{ label: string; to?: string }>;
  children?: ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHeader({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-primary-deep pt-28 pb-16 text-primary-foreground sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      {/* Background Image with Dark Gradient Wash */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-primary-deep/80 to-primary-deep/90" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-gold/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-medium text-primary-foreground/70"
        >
          {breadcrumbs.map((crumb, idx) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight className="size-3.5 opacity-50" />}
              {crumb.to ? (
                <Link
                  href={crumb.to}
                  className="transition-colors hover:text-primary-foreground underline-offset-4 hover:underline"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-gold">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Content */}
        <div className="mt-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/10 px-4 py-1.5 text-gold backdrop-blur-xs"
          >
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="display-xl mt-4 text-white"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
