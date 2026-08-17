"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navLinks, restaurant } from "@/data/restaurant";
import { LizLink } from "./LizButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "transition-all duration-500",
            scrolled
              ? "border-b border-foreground/8 bg-background/80 backdrop-blur-xl backdrop-saturate-150 shadow-sm"
              : "border-b border-transparent bg-background/40 backdrop-blur-md",
          )}
        >
          <nav
            aria-label="Primary"
            className="mx-auto flex h-16 w-full max-w-[88rem] items-center justify-between px-5 sm:h-20 sm:px-8"
          >
            <Link
              href="/"
              className="font-display text-2xl font-extrabold tracking-[-0.06em] text-primary sm:text-[1.75rem]"
            >
              {restaurant.shortName}
              <span className="ml-2 hidden align-middle text-[0.625rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:inline">
                {restaurant.tagline}
              </span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = link.to === "/" ? pathname === "/" : pathname === link.to;

                return (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative block px-4 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-primary font-bold"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-primary"
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={restaurant.phoneHref}
                aria-label={`Call ${restaurant.name} on ${restaurant.phone}`}
                className="hidden size-11 items-center justify-center rounded-full border border-foreground/12 text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:flex"
              >
                <Phone className="size-4" aria-hidden="true" />
              </a>
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Order Now
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </LizLink>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="flex size-11 items-center justify-center rounded-full border border-foreground/12 text-foreground transition-colors hover:border-primary/40 hover:text-primary lg:hidden"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? <MobileMenu onClose={() => setOpen(false)} currentPath={pathname} /> : null}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose, currentPath }: { onClose: () => void; currentPath: string }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden"
    >
      <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          onClick={onClose}
          className="font-display text-2xl font-extrabold tracking-[-0.06em] text-primary"
        >
          {restaurant.shortName}
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex size-12 items-center justify-center rounded-full border border-foreground/12 text-foreground"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-10 sm:px-8">
        <ul className="mt-4 space-y-1">
          {navLinks.map((link, index) => {
            const isActive = link.to === "/" ? currentPath === "/" : currentPath === link.to;

            return (
              <motion.li
                key={link.to}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.06, duration: 0.5 }}
                className="border-b border-border/70"
              >
                <Link
                  href={link.to}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between py-5 font-display text-3xl font-bold tracking-[-0.04em]",
                    isActive ? "text-primary" : "text-foreground",
                  )}
                >
                  {link.label}
                  <ArrowUpRight
                    className={cn("size-5", isActive ? "text-primary" : "text-muted-foreground")}
                    aria-hidden="true"
                  />
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-8 grid gap-3">
          <LizLink href={restaurant.orderUrl} target="_blank" rel="noopener noreferrer" size="lg">
            Order on {restaurant.orderPlatform}
          </LizLink>
          <LizLink href={restaurant.phoneHref} variant="outline" size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {restaurant.phone}
          </LizLink>
        </div>
      </nav>
    </motion.div>
  );
}
