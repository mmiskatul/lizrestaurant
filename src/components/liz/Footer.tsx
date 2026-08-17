"use client";

import { ArrowUp, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { restaurant, navLinks } from "@/data/restaurant";
import { LizLink } from "./LizButton";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card text-foreground">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-display text-3xl font-extrabold tracking-[-0.06em] text-primary block"
            >
              {restaurant.name}
            </Link>
            <p className="text-sm font-semibold text-gold tracking-wide uppercase">
              "{restaurant.tagline}"
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {restaurant.description}
            </p>
            <div className="pt-2">
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="primary"
              >
                Order on {restaurant.orderPlatform}
                <ArrowUpRight className="size-3.5" />
              </LizLink>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-display text-base font-bold text-foreground">Quick Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div>
            <h4 className="font-display text-base font-bold text-foreground">
              Contact &amp; Location
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-primary" />
                <span>
                  {restaurant.address.street}, {restaurant.address.area}, {restaurant.address.city},{" "}
                  {restaurant.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href={restaurant.phoneHref}
                  className="transition-colors hover:text-primary font-medium"
                >
                  {restaurant.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Hours */}
          <div>
            <h4 className="font-display text-base font-bold text-foreground">
              Dining &amp; Takeaway
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Open 7 days a week: <br />
              <strong className="text-foreground">8:00 AM – 11:30 PM</strong>
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Dine-in • Takeaway • Fast Delivery across Dubai
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
