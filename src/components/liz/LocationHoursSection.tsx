"use client";

import { useState, useEffect } from "react";
import { MapPin, Clock, Phone, ArrowUpRight, Copy, Check, Navigation } from "lucide-react";

import { openingHours, isOpenNow, getDubaiNow, formatTime, hoursNote } from "@/data/hours";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { LizLink, LizButton } from "./LizButton";

export function LocationHoursSection() {
  const [copied, setCopied] = useState(false);
  const [openStatus, setOpenStatus] = useState<boolean>(false);
  const [dubaiTime, setDubaiTime] = useState<string>("");
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setOpenStatus(isOpenNow(now));
      const { dayIndex, label } = getDubaiNow(now);
      setDubaiTime(label);
      setCurrentDayIndex(dayIndex);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const fullAddress = `${restaurant.address.street}, ${restaurant.address.area}, ${restaurant.address.city}, ${restaurant.address.country}`;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="location" className="relative py-20 sm:py-28 lg:py-36 bg-background">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit &amp; Dine"
          title={
            <>
              Find Us in <br className="hidden sm:inline" />
              <span className="text-primary">Al Karama, Dubai</span>
            </>
          }
          copy="Located in the vibrant culinary heart of Karama with dine-in, takeaway, and fast no-contact delivery across Dubai."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
          {/* Left Column: Interactive Map & Route Guidance */}
          <ScrollReveal direction="left" className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              {/* Google Maps Embed iframe with fallback */}
              <div className="relative aspect-16/10 w-full bg-muted">
                <iframe
                  title="LIZ Restaurant Location Map"
                  src="https://maps.google.com/maps?q=LIZ+Restaurant+17+9B+St+Al+Karama+Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map footer card */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {restaurant.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {restaurant.address.street}, {restaurant.address.area},{" "}
                      {restaurant.address.city}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <LizButton
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={copyAddress}
                      className="text-xs"
                    >
                      {copied ? (
                        <>
                          <Check className="size-3.5 text-emerald-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" />
                          Copy Address
                        </>
                      )}
                    </LizButton>
                    <LizLink
                      href={restaurant.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                    >
                      <Navigation className="size-3.5" />
                      Get Directions
                    </LizLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Strips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={restaurant.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Direct Phone
                  </span>
                  <p className="font-display text-sm font-bold text-foreground">
                    {restaurant.phone}
                  </p>
                </div>
              </a>

              <a
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <ArrowUpRight className="size-5 text-primary-deep" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Order Delivery
                  </span>
                  <p className="font-display text-sm font-bold text-foreground">
                    {restaurant.orderPlatform} UAE
                  </p>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Live Hours & Schedule */}
          <ScrollReveal direction="right">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-lg">
              {/* Header with live status */}
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Opening Hours
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Dubai Local Time: {dubaiTime || "UTC+4"}
                    </p>
                  </div>
                </div>

                {/* Status pill */}
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold ${
                    openStatus
                      ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-700 border border-amber-500/20"
                  }`}
                >
                  <span
                    className={`size-2 rounded-full animate-pulse ${
                      openStatus ? "bg-emerald-600" : "bg-amber-600"
                    }`}
                  />
                  {openStatus ? "Open Now" : "Kitchen Closed"}
                </div>
              </div>

              {/* Schedule List */}
              <ul className="mt-6 divide-y divide-border/60">
                {openingHours.map((schedule, i) => {
                  const isToday = i === currentDayIndex;
                  return (
                    <li
                      key={schedule.day}
                      className={`flex items-center justify-between py-3 text-sm transition-colors ${
                        isToday
                          ? "font-bold text-primary bg-primary/5 px-3 rounded-xl"
                          : "text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{schedule.day}</span>
                        {isToday && (
                          <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[0.6875rem] font-bold text-primary">
                            Today
                          </span>
                        )}
                      </div>
                      <span className="font-medium text-foreground">
                        {schedule.opens && schedule.closes
                          ? `${formatTime(schedule.opens)} – ${formatTime(schedule.closes)}`
                          : "Closed"}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Note */}
              <p className="mt-6 text-xs text-muted-foreground leading-relaxed pt-4 border-t border-border">
                <span className="font-semibold text-foreground">Note: </span>
                {hoursNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
